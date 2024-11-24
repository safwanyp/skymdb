import type { QueryConfig } from "pg";

type GetAllGenres = ({ page }: { page?: number }) => QueryConfig;
type CreateGenre = ({ data }: { data: unknown }) => QueryConfig;
type UpdateGenre = ({ id, data }: { id: string; data: unknown }) => QueryConfig;
type DeleteGenre = ({ id }: { id: string }) => QueryConfig;

const getAllGenres: GetAllGenres = ({ page = 1 }) => {
  return {
    name: "get-all-genres",
    text: `
            SELECT * FROM genres
            LIMIT 10 OFFSET $1;
        `,
    values: [(page - 1) * 10],
  };
};

const createGenre: CreateGenre = ({ data }) => {
  return {
    name: "create-genre",
    text: `
            INSERT INTO genres
            VALUES ($1)
            RETURNING *;
        `,
    values: [data],
  };
};

const updateGenre: UpdateGenre = ({ id, data }) => {
  return {
    name: "update-genre",
    text: `
            UPDATE genres
            SET data = $1
            WHERE id = $2
            RETURNING *;
        `,
    values: [data, id],
  };
};

const deleteGenre: DeleteGenre = ({ id }) => {
  return {
    name: "delete-genre",
    text: `
            DELETE FROM genres
            WHERE id = $1
            RETURNING *;
        `,
    values: [id],
  };
};

const genreQueries = {
  getAllGenres,
  createGenre,
  updateGenre,
  deleteGenre,
};

export { genreQueries };
