import { z } from "zod";

export const UserId = z.string().uuid();
export type UserId = z.infer<typeof UserId>;

export const UserSchema = z.object({
  id: UserId,
  email: z.string().email(),
  displayName: z.string().min(1).max(80),
  createdAt: z.string().datetime(),
});
export type User = z.infer<typeof UserSchema>;

export const UserCreate = z.object({
  email: z.string().email(),
  displayName: z.string().min(1).max(80),
});
export type UserCreate = z.infer<typeof UserCreate>;
