// SKELETON — uncomment + implement when migrating to Postgres.
// 1. Implement each method using `Bun.sql` (verify against current Bun docs).
// 2. Move the migration runner to read .sql files compatible with Postgres
//    (sqlite-specific clauses like AUTOINCREMENT will need rewrites).
// 3. Switch the active impl in db/index.ts.
//
// import { sql } from "bun";
import type { Db } from "./types";

export function makePostgresDb(connectionString: string): Db {
  void connectionString; // silence unused for skeleton
  const notImplemented = (op: string) => async (): Promise<never> => {
    throw new Error(
      `postgres adapter: ${op}() not yet wired up. ` +
        `See packages/server/src/runtime/db/postgres.ts and CLAUDE.md.`,
    );
  };
  return {
    notes: {
      list:   notImplemented("notes.list"),
      get:    notImplemented("notes.get"),
      create: notImplemented("notes.create"),
      delete: notImplemented("notes.delete"),
    },
    users: {
      get:        notImplemented("users.get"),
      getByEmail: notImplemented("users.getByEmail"),
      create:     notImplemented("users.create"),
      delete:     notImplemented("users.delete"),
    },
    close() {},
  };
}
