import type { DataStore } from "../../../app/driven-ports/data-store";
import type { Secrets } from "../../../app/driven-ports/secrets";
import { migrate } from "./migrate";
import { getPgPool } from "./pool";
import { genreQueries } from "./queries/genre";
import { movieQueries } from "./queries/movie";
import { personQueries } from "./queries/person";
import type { PgConfig } from "./types";

type GetDataStorePg = ({
  config,
  secrets,
}: {
  config: PgConfig;
  secrets: Secrets;
}) => Promise<DataStore>;

const getDataStorePg: GetDataStorePg = async ({ config, secrets }) => {
  const pgPool = getPgPool({ config, secrets });

  await migrate(pgPool);

  const movie: DataStore["movie"] = {
    get: async ({ id }) => {
      const { rows } = await pgPool.query(movieQueries.getMovieById({ id }));
      return rows[0];
    },
    getByGenre: async ({ genre }) => {
      const { rows } = await pgPool.query(
        movieQueries.getMovieByGenre({ genre }),
      );
      return rows[0];
    },
    getByDirector: async ({ director }) => {
      const { rows } = await pgPool.query(
        movieQueries.getMovieByDirector({ director }),
      );
      return rows[0];
    },
    getByWriter: async ({ writer }) => {
      const { rows } = await pgPool.query(
        movieQueries.getMovieByWriter({ writer }),
      );
      return rows[0];
    },
    getAll: async ({ page }) => {
      const { rows } = await pgPool.query(movieQueries.getAllMovies({ page }));
      return rows;
    },
    create: async ({ data }) => {
      const { rows } = await pgPool.query(movieQueries.createMovie({ data }));
      return rows[0];
    },
    update: async ({ id, data }) => {
      const { rows } = await pgPool.query(
        movieQueries.updateMovie({ id, data }),
      );
      return rows[0];
    },
    delete: async ({ id }) => {
      const { rows } = await pgPool.query(movieQueries.deleteMovie({ id }));
      return rows[0];
    },
  };

  const genre: DataStore["genre"] = {
    getAll: async ({ page }) => {
      const { rows } = await pgPool.query(genreQueries.getAllGenres({ page }));
      return rows;
    },
    create: async ({ data }) => {
      const { rows } = await pgPool.query(genreQueries.createGenre({ data }));
      return rows[0];
    },
    update: async ({ id, data }) => {
      const { rows } = await pgPool.query(
        genreQueries.updateGenre({ id, data }),
      );
      return rows[0];
    },
    delete: async ({ id }) => {
      const { rows } = await pgPool.query(genreQueries.deleteGenre({ id }));
      return rows[0];
    },
  };

  const person: DataStore["person"] = {
    get: async ({ id }) => {
      const { rows } = await pgPool.query(personQueries.getPersonById({ id }));
      return rows[0];
    },
    getAll: async ({ page }) => {
      const { rows } = await pgPool.query(
        personQueries.getAllPersons({ page }),
      );
      return rows;
    },
    getMovies: async ({ id }) => {
      const { rows } = await pgPool.query(
        personQueries.getMoviesByPerson({ id }),
      );
      return rows;
    },
    create: async ({ data }) => {
      const { rows } = await pgPool.query(personQueries.createPerson({ data }));
      return rows[0];
    },
    update: async ({ id, data }) => {
      const { rows } = await pgPool.query(
        personQueries.updatePerson({ id, data }),
      );
      return rows[0];
    },
    delete: async ({ id }) => {
      const { rows } = await pgPool.query(personQueries.deletePerson({ id }));
      return rows[0];
    },
  };

  return {
    movie,
    genre,
    person,
  };
};

export { getDataStorePg };
