import { mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { env } from "../../env";
import { makePostgresDb } from "./postgres";
import { makeSqliteDb } from "./sqlite";
import type { Db } from "./types";

// Resolve `data/` relative to the repo root, not cwd. `bun run --filter '*' dev`
// invokes each workspace's dev script with cwd set to the package, so a plain
// "data/app.sqlite" would land in packages/server/ instead of the repo root.
const here = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(here, "../../../../..");
const SQLITE_PATH = resolve(repoRoot, "data/app.sqlite");

let _db: Db | null = null;

export function getDb(): Db {
  if (_db) return _db;
  if (env.DATABASE_URL?.startsWith("postgres")) {
    _db = makePostgresDb(env.DATABASE_URL);
  } else if (env.NODE_ENV === "test") {
    _db = makeSqliteDb(":memory:");
  } else {
    mkdirSync(dirname(SQLITE_PATH), { recursive: true });
    _db = makeSqliteDb(SQLITE_PATH);
  }
  return _db;
}

export type { Db } from "./types";
