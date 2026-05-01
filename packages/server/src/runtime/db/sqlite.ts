import { Database } from "bun:sqlite";
import { randomUUID } from "node:crypto";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import type { Note } from "../../contract/schemas/note";
import type { User } from "../../contract/schemas/user";
import { runMigrations } from "./migrations";
import type { Db } from "./types";

const __dirname = dirname(fileURLToPath(import.meta.url));

interface UserRow {
  id: string;
  email: string;
  display_name: string;
  created_at: string;
}
interface NoteRow {
  id: string;
  user_id: string;
  title: string;
  body: string;
  created_at: string;
  updated_at: string;
}
const toUser = (r: UserRow): User => ({
  id: r.id,
  email: r.email,
  displayName: r.display_name,
  createdAt: r.created_at,
});
const toNote = (r: NoteRow): Note => ({
  id: r.id,
  userId: r.user_id,
  title: r.title,
  body: r.body,
  createdAt: r.created_at,
  updatedAt: r.updated_at,
});

export function makeSqliteDb(filename = "data/app.sqlite"): Db {
  const db = new Database(filename, { create: true });
  db.exec("PRAGMA journal_mode = WAL");
  db.exec("PRAGMA foreign_keys = ON");
  runMigrations(db, join(__dirname, "migrations"));

  return {
    notes: {
      async list({ limit }) {
        const rows = db
          .query("SELECT * FROM notes ORDER BY created_at DESC LIMIT ?")
          .all(limit) as NoteRow[];
        return rows.map(toNote);
      },
      async get(id) {
        const row = db.query("SELECT * FROM notes WHERE id = ?").get(id) as NoteRow | undefined;
        return row ? toNote(row) : null;
      },
      async create(userId, input) {
        const id = randomUUID();
        const now = new Date().toISOString();
        db.run(
          "INSERT INTO notes (id, user_id, title, body, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?)",
          [id, userId, input.title, input.body, now, now],
        );
        const row = db.query("SELECT * FROM notes WHERE id = ?").get(id) as NoteRow;
        return toNote(row);
      },
      async delete(id) {
        const res = db.run("DELETE FROM notes WHERE id = ?", [id]);
        return res.changes > 0;
      },
    },
    users: {
      async get(id) {
        const row = db.query("SELECT * FROM users WHERE id = ?").get(id) as UserRow | undefined;
        return row ? toUser(row) : null;
      },
      async getByEmail(email) {
        const row = db.query("SELECT * FROM users WHERE email = ?").get(email) as
          | UserRow
          | undefined;
        return row ? toUser(row) : null;
      },
      async create(input) {
        const id = randomUUID();
        const now = new Date().toISOString();
        db.run("INSERT INTO users (id, email, display_name, created_at) VALUES (?, ?, ?, ?)", [
          id,
          input.email,
          input.displayName,
          now,
        ]);
        const row = db.query("SELECT * FROM users WHERE id = ?").get(id) as UserRow;
        return toUser(row);
      },
      async delete(id) {
        const res = db.run("DELETE FROM users WHERE id = ?", [id]);
        return res.changes > 0;
      },
    },
    close() {
      db.close();
    },
  };
}
