import type { QueryConfig } from "pg";

type CreateMigrationTable = () => QueryConfig;
type UpsertMigration = ({ name }: { name: string }) => QueryConfig;
type GetMigrations = () => QueryConfig;
type CreateMoviesTable = () => QueryConfig;
type CreateMoviesIndexes = () => QueryConfig;
type CreatePersonTable = () => QueryConfig;
type CreatePersonIndexes = () => QueryConfig;
type CreateGenreTable = () => QueryConfig;
type CreateGenreIndexes = () => QueryConfig;

const createMigrationTable: CreateMigrationTable = () => {
  return {
    name: "create-migration-table",
    text: `
            CREATE TABLE IF NOT EXISTS migrations (
              id SERIAL PRIMARY KEY,
              name TEXT NOT NULL,
              created_at TIMESTAMP DEFAULT NOW()
            );
          `,
  };
};

const upsertMigration: UpsertMigration = ({ name }) => {
  return {
    name: "upsert-migration",
    text: `
            INSERT INTO migrations (name)
            VALUES ($1)
            ON CONFLICT (name)
            DO NOTHING;
          `,
    values: [name],
  };
};

const getMigrations: GetMigrations = () => {
  return {
    name: "get-migrations",
    text: `
            SELECT name FROM migrations;
          `,
  };
};

const createMoviesTable: CreateMoviesTable = () => {
  return {
    name: "create-movies-table",
    text: `
            CREATE TABLE IF NOT EXISTS movies (
                id uuid PRIMARY KEY,
                data jsonb NOT NULL,
                i_adult boolean NOT NULL,
                i_original_language text NOT NULL,
                i_original_title text NOT NULL,
                i_release_date text NOT NULL,
                i_cast text[] NOT NULL,
                i_director text NOT NULL,
                i_writer text NOT NULL,
                i_genre text[] NOT NULL,
                created_at TIMESTAMP DEFAULT NOW()
                updated_at TIMESTAMP DEFAULT NOW()
            );
          `,
  };
};

const createMoviesIndexes: CreateMoviesIndexes = () => {
  return {
    name: "create-movies-indexes",
    text: `
            CREATE INDEX IF NOT EXISTS idx_movies_i_adult ON movies (i_adult);
            CREATE INDEX IF NOT EXISTS idx_movies_i_original_language ON movies (i_original_language);
            CREATE INDEX IF NOT EXISTS idx_movies_i_original_title ON movies (i_original_title);
            CREATE INDEX IF NOT EXISTS idx_movies_i_release_date ON movies (i_release_date);
            CREATE INDEX IF NOT EXISTS idx_movies_i_director ON movies (i_director);
            CREATE INDEX IF NOT EXISTS idx_movies_i_writer ON movies (i_writer);
            CREATE INDEX IF NOT EXISTS idx_movies_i_genre ON movies (i_genre);
            CREATE INDEX IF NOT EXISTS idx_movies_created_at ON movies (created_at);
            CREATE INDEX IF NOT EXISTS idx_movies_updated_at ON movies (updated_at);
          `,
  };
};

const createPersonTable: CreatePersonTable = () => {
  return {
    name: "create-person-table",
    text: `
            CREATE TABLE IF NOT EXISTS person (
                id uuid PRIMARY KEY,
                data jsonb NOT NULL,
                i_name text NOT NULL,
                i_birth_date text NOT NULL,
                i_birth_place text NOT NULL,
                created_at TIMESTAMP DEFAULT NOW()
                updated_at TIMESTAMP DEFAULT NOW()
            );
          `,
  };
};

const createPersonIndexes: CreatePersonIndexes = () => {
  return {
    name: "create-person-indexes",
    text: `
            CREATE INDEX IF NOT EXISTS idx_person_i_name ON person (i_name);
            CREATE INDEX IF NOT EXISTS idx_person_i_birth_date ON person (i_birth_date);
            CREATE INDEX IF NOT EXISTS idx_person_i_birth_place ON person (i_birth_place);
            CREATE INDEX IF NOT EXISTS idx_person_created_at ON person (created_at);
            CREATE INDEX IF NOT EXISTS idx_person_updated_at ON person (updated_at);
          `,
  };
};

const createGenreTable: CreateGenreTable = () => {
  return {
    name: "create-genre-table",
    text: `
            CREATE TABLE IF NOT EXISTS genre (
                id uuid PRIMARY KEY,
                data jsonb NOT NULL,
                i_name text NOT NULL,
                created_at TIMESTAMP DEFAULT NOW()
                updated_at TIMESTAMP DEFAULT NOW()
            );
          `,
  };
};

const createGenreIndexes: CreateGenreIndexes = () => {
  return {
    name: "create-genre-indexes",
    text: `
            CREATE INDEX IF NOT EXISTS idx_genre_i_name ON genre (i_name);
            CREATE INDEX IF NOT EXISTS idx_genre_created_at ON genre (created_at);
            CREATE INDEX IF NOT EXISTS idx_genre_updated_at ON genre (updated_at);
          `,
  };
};

export {
  createMigrationTable,
  upsertMigration,
  getMigrations,
  createMoviesTable,
  createMoviesIndexes,
  createPersonTable,
  createPersonIndexes,
  createGenreTable,
  createGenreIndexes,
};
