import { defineRoute } from "../primitives/defineRoute";
import { UserCreate, UserSchema, UserId } from "../schemas/user";
import { z } from "zod";
import { ConflictShape, NotFoundShape, ZodErrorShape } from "../schemas/errors";

export const createUser = defineRoute({
  method: "POST",
  path: "/api/users",
  operationId: "createUser",
  body: UserCreate,
  response: UserSchema,
  errors: { 400: ZodErrorShape, 409: ConflictShape },
  summary: "Create a user",
  tags: ["users"],
});

export const getUser = defineRoute({
  method: "GET",
  path: "/api/users/:id",
  operationId: "getUser",
  params: z.object({ id: UserId }),
  response: UserSchema,
  errors: { 404: NotFoundShape },
  summary: "Get a user",
  tags: ["users"],
});

export const deleteUser = defineRoute({
  method: "DELETE",
  path: "/api/users/:id",
  operationId: "deleteUser",
  params: z.object({ id: UserId }),
  response: z.object({ ok: z.literal(true) }),
  errors: { 404: NotFoundShape },
  summary: "Delete a user (test fixture cleanup)",
  tags: ["users"],
});

export const usersRoutes = { create: createUser, get: getUser, delete: deleteUser };
