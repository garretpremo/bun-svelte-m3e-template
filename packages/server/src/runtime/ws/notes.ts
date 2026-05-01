import type { Note } from "../../contract/schemas/note";
import { broadcast } from "./index";

export function broadcastNoteCreated(note: Note): void {
  broadcast({ type: "note:created", payload: note });
}

export function broadcastNoteDeleted(data: { id: string }): void {
  broadcast({ type: "note:deleted", payload: data });
}
