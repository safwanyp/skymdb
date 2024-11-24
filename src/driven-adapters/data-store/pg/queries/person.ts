import type { QueryConfig } from "pg";

type GetPersonById = ({ id }: { id: string }) => QueryConfig;
type GetAllPersons = ({ page }: { page?: number }) => QueryConfig;
type GetMoviesByPerson = ({ id }: { id: string }) => QueryConfig;
type CreatePerson = ({ data }: { data: unknown }) => QueryConfig;
type UpdatePerson = ({
  id,
  data,
}: {
  id: string;
  data: unknown;
}) => QueryConfig;
type DeletePerson = ({ id }: { id: string }) => QueryConfig;

const getPersonById: GetPersonById = ({ id }) => {
  return {
    name: "get-person-by-id",
    text: `
            SELECT * FROM persons
            WHERE id = $1;
        `,
    values: [id],
  };
};

const getAllPersons: GetAllPersons = ({ page = 1 }) => {
  return {
    name: "get-all-persons",
    text: `
            SELECT * FROM persons
            OFFSET $1
            LIMIT 10;
        `,
    values: [(page - 1) * 10],
  };
};

const getMoviesByPerson: GetMoviesByPerson = ({ id }) => {
  return {
    name: "get-movies-by-person",
    text: `
            SELECT * FROM movies
            WHERE i_persons @> $1;
        `,
    values: [id],
  };
};

const createPerson: CreatePerson = ({ data }) => {
  return {
    name: "create-person",
    text: `
            INSERT INTO persons (name, i_movies)
            VALUES ($1, $2)
            RETURNING *;
        `,
    values: [data.name, data.movies],
  };
};

const updatePerson: UpdatePerson = ({ id, data }) => {
  return {
    name: "update-person",
    text: `
            UPDATE persons
            SET name = $1, i_movies = $2
            WHERE id = $3
            RETURNING *;
        `,
    values: [data.name, data.movies, id],
  };
};

const deletePerson: DeletePerson = ({ id }) => {
  return {
    name: "delete-person",
    text: `
            DELETE FROM persons
            WHERE id = $1
            RETURNING *;
        `,
    values: [id],
  };
};

const personQueries = {
  getPersonById,
  getAllPersons,
  getMoviesByPerson,
  createPerson,
  updatePerson,
  deletePerson,
};

export { personQueries };
