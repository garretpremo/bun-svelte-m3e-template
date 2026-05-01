import { z } from "zod";

export const NoteId = z.string().uuid();
export type NoteId = z.infer<typeof NoteId>;

export const NoteSchema = z.object({
  id: NoteId,
  userId: z.string().uuid(),
  title: z.string().min(1).max(120),
  body: z.string().max(10_000),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});
export type Note = z.infer<typeof NoteSchema>;

export const NoteCreate = z.object({
  title: z.string().min(1).max(120),
  body: z.string().max(10_000).default(""),
});
export type NoteCreate = z.infer<typeof NoteCreate>;
