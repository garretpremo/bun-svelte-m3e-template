import { z } from "zod";
import { defineRoute } from "../primitives/defineRoute";
import { AuthErrorShape, NotFoundShape, ZodErrorShape } from "../schemas/errors";
import { NoteCreate, NoteId, NoteSchema } from "../schemas/note";

export const createNote = defineRoute({
  method: "POST",
  path: "/api/notes",
  operationId: "createNote",
  body: NoteCreate,
  response: NoteSchema,
  errors: { 400: ZodErrorShape, 401: AuthErrorShape },
  summary: "Create a note",
  tags: ["notes"],
});

export const listNotes = defineRoute({
  method: "GET",
  path: "/api/notes",
  operationId: "listNotes",
  query: z.object({
    limit: z.coerce.number().int().min(1).max(100).default(20),
  }),
  response: z.array(NoteSchema),
  summary: "List recent notes",
  tags: ["notes"],
});

export const getNote = defineRoute({
  method: "GET",
  path: "/api/notes/:id",
  operationId: "getNote",
  params: z.object({ id: NoteId }),
  response: NoteSchema,
  errors: { 404: NotFoundShape },
  summary: "Get a note by id",
  tags: ["notes"],
});

export const deleteNote = defineRoute({
  method: "DELETE",
  path: "/api/notes/:id",
  operationId: "deleteNote",
  params: z.object({ id: NoteId }),
  response: z.object({ ok: z.literal(true) }),
  errors: { 404: NotFoundShape },
  summary: "Delete a note",
  tags: ["notes"],
});

export const notesRoutes = {
  create: createNote,
  list: listNotes,
  get: getNote,
  delete: deleteNote,
};
