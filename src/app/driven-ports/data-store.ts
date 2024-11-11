import type { Record as MovieRecord } from "../../lexicons/types/com/skymdb/movie";
import type { Record as GenreRecord } from "../../lexicons/types/com/skymdb/genre";
import type { Record as PersonRecord } from "../../lexicons/types/com/skymdb/person";

type MovieDataStore = {
  get: ({ id }: { id: string }) => Promise<MovieRecord>;
  getByGenre: ({ genre }: { genre: string }) => Promise<MovieRecord>;
  getByDirector: ({ director }: { director: string }) => Promise<MovieRecord>;
  getByWriter: ({ writer }: { writer: string }) => Promise<MovieRecord>;
  getAll: ({ page }: { page?: number }) => Promise<MovieRecord>;
  create: ({ data }: { data: unknown }) => Promise<MovieRecord>;
  update: ({ id, data }: { id: string; data: unknown }) => Promise<MovieRecord>;
  delete: ({ id }: { id: string }) => Promise<MovieRecord>;
};

type GenreDataStore = {
  getAll: ({ page }: { page?: number }) => Promise<GenreRecord>;
  create: ({ data }: { data: unknown }) => Promise<GenreRecord>;
  update: ({ id, data }: { id: string; data: unknown }) => Promise<GenreRecord>;
  delete: ({ id }: { id: string }) => Promise<GenreRecord>;
};

type PersonDataStore = {
  get: ({ id }: { id: string }) => Promise<PersonRecord>;
  getAll: ({ page }: { page?: number }) => Promise<PersonRecord>;
  getMovies: ({ id }: { id: string }) => Promise<PersonRecord>;
  create: ({ data }: { data: unknown }) => Promise<PersonRecord>;
  update: ({
    id,
    data,
  }: {
    id: string;
    data: unknown;
  }) => Promise<PersonRecord>;
  delete: ({ id }: { id: string }) => Promise<PersonRecord>;
};

type DataStore = {
  movie: MovieDataStore;
  genre: GenreDataStore;
  person: PersonDataStore;
};

export type { DataStore };
