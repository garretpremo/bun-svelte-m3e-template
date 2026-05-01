import { z } from "zod";

/** Generic error envelope returned by every error response. */
export const ErrorEnvelope = z.object({
  code: z.string(),
  message: z.string(),
  details: z.unknown().optional(),
});
export type ErrorEnvelope = z.infer<typeof ErrorEnvelope>;

export const ZodErrorShape = ErrorEnvelope.extend({
  code: z.literal("validation/failed"),
  details: z.array(z.object({
    path: z.array(z.union([z.string(), z.number()])),
    message: z.string(),
  })),
});
export type ZodErrorShape = z.infer<typeof ZodErrorShape>;

export const AuthErrorShape = ErrorEnvelope.extend({
  code: z.literal("auth/required"),
});
export type AuthErrorShape = z.infer<typeof AuthErrorShape>;

export const NotFoundShape = ErrorEnvelope.extend({
  code: z.literal("not_found"),
});
export type NotFoundShape = z.infer<typeof NotFoundShape>;

export const ConflictShape = ErrorEnvelope.extend({
  code: z.literal("conflict"),
});
export type ConflictShape = z.infer<typeof ConflictShape>;
