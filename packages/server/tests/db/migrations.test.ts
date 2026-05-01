import { Database } from "bun:sqlite";
import { afterEach, beforeEach, describe, expect, test } from "bun:test";
import { mkdirSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { runMigrations } from "../../src/runtime/db/migrations";

describe("runMigrations", () => {
  let dir: string;
  beforeEach(() => {
    dir = join(tmpdir(), `mig-${Date.now()}-${Math.random().toString(36).slice(2)}`);
    mkdirSync(dir, { recursive: true });
  });
  afterEach(() => {
    rmSync(dir, { recursive: true, force: true });
  });

  test("applies all .sql files in lexical order and tracks them", () => {
    writeFileSync(join(dir, "0001-a.sql"), "CREATE TABLE a (id INTEGER);");
    writeFileSync(join(dir, "0002-b.sql"), "CREATE TABLE b (id INTEGER);");
    const db = new Database(":memory:");
    runMigrations(db, dir);
    const tables = db
      .query("SELECT name FROM sqlite_master WHERE type='table' ORDER BY name")
      .all() as { name: string }[];
    expect(tables.map((t) => t.name)).toEqual(["_migrations", "a", "b"]);
    const applied = db.query("SELECT name FROM _migrations ORDER BY name").all() as {
      name: string;
    }[];
    expect(applied.map((a) => a.name)).toEqual(["0001-a.sql", "0002-b.sql"]);
  });

  test("does not re-apply migrations already in _migrations", () => {
    writeFileSync(join(dir, "0001-a.sql"), "CREATE TABLE a (id INTEGER);");
    const db = new Database(":memory:");
    runMigrations(db, dir);
    runMigrations(db, dir); // should be a no-op
    const count = db.query("SELECT COUNT(*) AS c FROM _migrations").get() as { c: number };
    expect(count.c).toBe(1);
  });
});
