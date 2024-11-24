import type { Secrets } from "../../../app/driven-ports/secrets";
import type { PgConfig } from "./types";
import { Pool } from "pg";

type GetPgPool = ({
  config,
  secrets,
}: {
  config: PgConfig;
  secrets: Secrets;
}) => Pool;

const getPgPool: GetPgPool = ({ config, secrets }) => {
  const pgPool = new Pool({
    host: config.host,
    port: config.port,
    database: config.database,
    user: secrets.get("POSTGRES_USER"),
    password: secrets.get("POSTGRES_PASSWORD"),
  });

  return pgPool;
};

export { getPgPool };
