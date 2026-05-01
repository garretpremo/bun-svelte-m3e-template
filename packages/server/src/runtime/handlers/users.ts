import type { RouteBinding } from "../dispatch";
import { createUser, getUser, deleteUser } from "../../contract/routes/users";
import { getDb } from "../db";

const httpError = (status: number, body: unknown) => Object.assign(new Error("http"), { status, body });

export const usersBindings: RouteBinding[] = [
  {
    route: createUser,
    async handler({ body }) {
      const db = getDb();
      const existing = await db.users.getByEmail(body.email);
      if (existing) throw httpError(409, { code: "conflict", message: "email already exists" });
      return db.users.create(body);
    },
  },
  {
    route: getUser,
    async handler({ params }) {
      const db = getDb();
      const u = await db.users.get(params.id);
      if (!u) throw httpError(404, { code: "not_found", message: "user not found" });
      return u;
    },
  },
  {
    route: deleteUser,
    async handler({ params }) {
      const db = getDb();
      const ok = await db.users.delete(params.id);
      if (!ok) throw httpError(404, { code: "not_found", message: "user not found" });
      return { ok: true } as const;
    },
  },
];
