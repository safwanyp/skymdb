import type { Pool } from "pg";
import {
  createMigrationTable,
  upsertMigration,
  getMigrations,
  createMoviesTable,
  createMoviesIndexes,
  createPersonTable,
  createPersonIndexes,
  createGenreTable,
  createGenreIndexes,
} from "./queries/migration";

type Migrate = (pgPool: Pool) => Promise<void>;

const migrate: Migrate = async (pgPool) => {
  const client = await pgPool.connect();

  try {
    await client.query("BEGIN");

    // Ensure the migrations table exists
    await client.query(createMigrationTable());

    // Get already run migrations
    const { rows: existingMigrations } = await client.query(getMigrations());
    const existingMigrationNames = new Set(
      existingMigrations.map((row) => row.name),
    );

    const migrations = [
      createMoviesTable,
      createMoviesIndexes,
      createPersonTable,
      createPersonIndexes,
      createGenreTable,
      createGenreIndexes,
    ];

    for (const createMigration of migrations) {
      const migration = createMigration();
      if (!existingMigrationNames.has(migration.name)) {
        await client.query(migration);
        await client.query(upsertMigration({ name: String(migration.name) }));
      }
    }

    await client.query("COMMIT");
  } catch (error) {
    console.error("Error migrating database", error);
    await client.query("ROLLBACK");
  } finally {
    client.release();
  }
};

export { migrate };
