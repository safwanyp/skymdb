/**
 * The application is able to serve the following operations:
 *
 * Movie:
 * - get a movie by it's ID
 * - get all movies by a specific genre
 * - get all movies by a specific director
 * - get all movies by a specific writer
 * - get all movies (with pagination)
 * - create a movie
 * - update a movie
 * - delete a movie
 *
 * Genre:
 * - get all genres (with pagination)
 * - create a genre
 * - update a genre (use-case: fixing typos)
 * - delete a genre
 *
 * Person:
 * - get a person by it's ID
 * - get all people (with pagination)
 * - get all of a person's movies
 * - create a person
 * - update a person
 * - delete a person
 */

import type { DataStore } from "./driven-ports/data-store";
import type { App } from "./types";

type GetApp = ({ dataStore }: { dataStore: DataStore }) => App;

const getApp: GetApp = ({ dataStore }) => {
  const movieOperations: App["movie"] = {
    get: async ({ id }) => {
      return await dataStore.movie.get({ id });
    },
    getByDirector: async ({ director }) => {
      return await dataStore.movie.getByDirector({ director });
    },
    getByGenre: async ({ genre }) => {
      return await dataStore.movie.getByGenre({ genre });
    },
    getByWriter: async ({ writer }) => {
      return await dataStore.movie.getByWriter({ writer });
    },
    getAll: async ({ page }) => {
      if (!page) {
        return await dataStore.movie.getAll({ page: 1 });
      }

      return await dataStore.movie.getAll({ page });
    },
    create: async ({ data }) => {
      return await dataStore.movie.create({ data });
    },
    update: async ({ id, data }) => {
      return await dataStore.movie.update({ id, data });
    },
    delete: async ({ id }) => {
      return await dataStore.movie.delete({ id });
    },
  };

  const genreOperations: App["genre"] = {
    getAll: async ({ page }) => {
      if (!page) {
        return await dataStore.genre.getAll({ page: 1 });
      }

      return await dataStore.genre.getAll({ page });
    },
    create: async ({ data }) => {
      return await dataStore.genre.create({ data });
    },
    update: async ({ id, data }) => {
      return await dataStore.genre.update({ id, data });
    },
    delete: async ({ id }) => {
      return await dataStore.genre.delete({ id });
    },
  };

  const personOperations: App["person"] = {
    get: async ({ id }) => {
      return await dataStore.person.get({ id });
    },
    getAll: async ({ page }) => {
      if (!page) {
        return await dataStore.person.getAll({ page: 1 });
      }

      return await dataStore.person.getAll({ page });
    },
    getMovies: async ({ id }) => {
      return await dataStore.person.getMovies({ id });
    },
    create: async ({ data }) => {
      return await dataStore.person.create({ data });
    },
    update: async ({ id, data }) => {
      return await dataStore.person.update({ id, data });
    },
    delete: async ({ id }) => {
      return await dataStore.person.delete({ id });
    },
  };

  return {
    movie: movieOperations,
    genre: genreOperations,
    person: personOperations,
  };
};

export { getApp };
