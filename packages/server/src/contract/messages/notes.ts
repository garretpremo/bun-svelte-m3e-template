import { z } from "zod";
import { defineMessage } from "../primitives/defineMessage";
import { NoteSchema, NoteId } from "../schemas/note";

export const noteCreated = defineMessage({
  type: "note:created",
  payload: NoteSchema,
  direction: "server-to-client",
  description: "Broadcast when any client creates a note.",
});

export const noteDeleted = defineMessage({
  type: "note:deleted",
  payload: z.object({ id: NoteId }),
  direction: "server-to-client",
  description: "Broadcast when any client deletes a note.",
});

export const notesMessages = { created: noteCreated, deleted: noteDeleted };
