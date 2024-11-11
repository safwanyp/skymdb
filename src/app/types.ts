import type { Record as MovieRecord } from "../lexicons/types/com/skymdb/movie";
import type { Record as GenreRecord } from "../lexicons/types/com/skymdb/genre";
import type { Record as PersonRecord } from "../lexicons/types/com/skymdb/person";

type App = {
  movie: {
    get: ({ id }: { id: string }) => Promise<MovieRecord>;
    getByGenre: ({ genre }: { genre: string }) => Promise<MovieRecord>;
    getByDirector: ({
      director,
    }: {
      director: MovieRecord["director"];
    }) => Promise<MovieRecord>;
    getByWriter: ({
      writer,
    }: {
      writer: MovieRecord["writer"];
    }) => Promise<MovieRecord>;
    getAll: ({ page }: { page?: number }) => Promise<MovieRecord>;
    create: ({
      data,
    }: {
      data: Omit<MovieRecord, "createdAt">;
    }) => Promise<MovieRecord>;
    update: ({
      id,
      data,
    }: {
      id: string;
      data: Omit<MovieRecord, "createdAt">;
    }) => Promise<MovieRecord>;
    delete: ({ id }: { id: string }) => Promise<MovieRecord>;
  };

  genre: {
    getAll: ({ page }: { page?: number }) => Promise<GenreRecord>;
    create: ({
      data,
    }: {
      data: Omit<GenreRecord, "createdAt">;
    }) => Promise<GenreRecord>;
    update: ({
      id,
      data,
    }: {
      id: string;
      data: Omit<GenreRecord, "createdAt">;
    }) => Promise<GenreRecord>;
    delete: ({ id }: { id: string }) => Promise<GenreRecord>;
  };

  person: {
    get: ({ id }: { id: string }) => Promise<PersonRecord>;
    getAll: ({ page }: { page?: number }) => Promise<PersonRecord>;
    getMovies: ({ id }: { id: string }) => Promise<PersonRecord>;
    create: ({
      data,
    }: {
      data: Omit<PersonRecord, "createdAt">;
    }) => Promise<PersonRecord>;
    update: ({
      id,
      data,
    }: {
      id: string;
      data: Omit<PersonRecord, "createdAt">;
    }) => Promise<PersonRecord>;
    delete: ({ id }: { id: string }) => Promise<PersonRecord>;
  };
};

export type { App };
