import { createNote, deleteNote, getNote, listNotes } from "../../contract/routes/notes";
import { getDb } from "../db";
import type { RouteBinding } from "../dispatch";
import { broadcastNoteCreated, broadcastNoteDeleted } from "../ws/notes";

const httpError = (status: number, body: unknown) =>
  Object.assign(new Error("http"), { status, body });

// MVP: pull userId off the Authorization header. The auth middleware (stub for
// now) is the swap point. We use a fixed test user in dev so the showcase works
// without a real auth flow.
function userIdFromRequest(req: Request): string {
  const auth = req.headers.get("authorization");
  if (auth?.startsWith("Bearer ")) return auth.slice(7);
  // dev convenience — match the default user seeded in migration 0002.
  // zod v4's z.string().uuid() requires a valid version digit; this id
  // matches the same value seeded by the migration.
  return "00000000-0000-4000-8000-000000000001";
}

export const notesBindings: RouteBinding[] = [
  {
    route: createNote,
    async handler({ body, request }) {
      const userId = userIdFromRequest(request);
      const note = await getDb().notes.create(userId, body);
      broadcastNoteCreated(note);
      return note;
    },
  },
  {
    route: listNotes,
    async handler({ query }) {
      return getDb().notes.list({ limit: query.limit });
    },
  },
  {
    route: getNote,
    async handler({ params }) {
      const note = await getDb().notes.get(params.id);
      if (!note) throw httpError(404, { code: "not_found", message: "note not found" });
      return note;
    },
  },
  {
    route: deleteNote,
    async handler({ params }) {
      const ok = await getDb().notes.delete(params.id);
      if (!ok) throw httpError(404, { code: "not_found", message: "note not found" });
      broadcastNoteDeleted({ id: params.id });
      return { ok: true } as const;
    },
  },
];
