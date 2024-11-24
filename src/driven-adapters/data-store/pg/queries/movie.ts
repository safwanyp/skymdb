import type { QueryConfig } from "pg";

type GetMovieById = ({ id }: { id: string }) => QueryConfig;
type GetMovieByGenre = ({ genre }: { genre: string }) => QueryConfig;
type GetMovieByDirector = ({ director }: { director: string }) => QueryConfig;
type GetMovieByWriter = ({ writer }: { writer: string }) => QueryConfig;
type GetAllMovies = ({ page }: { page?: number }) => QueryConfig;
type CreateMovie = ({ data }: { data: unknown }) => QueryConfig;
type UpdateMovie = ({ id, data }: { id: string; data: unknown }) => QueryConfig;
type DeleteMovie = ({ id }: { id: string }) => QueryConfig;

const getMovieById: GetMovieById = ({ id }) => {
  return {
    name: "get-movie-by-id",
    text: `
            SELECT * FROM movies
            WHERE id = $1;
        `,
    values: [id],
  };
};

const getMovieByGenre: GetMovieByGenre = ({ genre }) => {
  return {
    name: "get-movie-by-genre",
    text: `
            SELECT * FROM movies
            WHERE i_genre @> $1;
        `,
    values: [genre],
  };
};

const getMovieByDirector: GetMovieByDirector = ({ director }) => {
  return {
    name: "get-movie-by-director",
    text: `
            SELECT * FROM movies
            WHERE i_director = $1;
        `,
    values: [director],
  };
};

const getMovieByWriter: GetMovieByWriter = ({ writer }) => {
  return {
    name: "get-movie-by-writer",
    text: `
            SELECT * FROM movies
            WHERE i_writer = $1;
        `,
    values: [writer],
  };
};

const getAllMovies: GetAllMovies = ({ page = 1 }) => {
  return {
    name: "get-all-movies",
    text: `
            SELECT * FROM movies
            LIMIT 20
            OFFSET $1;
        `,
    values: [(page - 1) * 10],
  };
};

const createMovie: CreateMovie = ({ data }) => {
  return {
    name: "create-movie",
    text: `
            INSERT INTO movies (data)
            VALUES ($1)
            RETURNING *;
        `,
    values: [data],
  };
};

const updateMovie: UpdateMovie = ({ id, data }) => {
  return {
    name: "update-movie",
    text: `
            UPDATE movies
            SET data = $1
            WHERE id = $2
            RETURNING *;
        `,
    values: [data, id],
  };
};

const deleteMovie: DeleteMovie = ({ id }) => {
  return {
    name: "delete-movie",
    text: `
            DELETE FROM movies
            WHERE id = $1;
        `,
    values: [id],
  };
};

const movieQueries = {
  getMovieById,
  getMovieByGenre,
  getMovieByDirector,
  getMovieByWriter,
  getAllMovies,
  createMovie,
  updateMovie,
  deleteMovie,
};

export { movieQueries };
