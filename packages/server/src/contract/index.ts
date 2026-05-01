export * from "./schemas/errors";
export * from "./schemas/note";
export * from "./schemas/user";

export { defineRoute } from "./primitives/defineRoute";
export type { RouteDefinition, RouteConfig, HttpMethod } from "./primitives/defineRoute";

export { defineMessage } from "./primitives/defineMessage";
export type {
  MessageDefinition,
  MessageConfig,
  MessageDirection,
} from "./primitives/defineMessage";

export { createApiClient } from "./primitives/apiClient";
export type { ApiClient, ApiClientOptions, ApiInput } from "./primitives/apiClient";

export { createWsClient } from "./primitives/wsClient";
export type { WsClient, WsClientOptions } from "./primitives/wsClient";

export {
  notesRoutes,
  createNote,
  listNotes,
  getNote,
  deleteNote,
} from "./routes/notes";
export {
  usersRoutes,
  createUser,
  getUser,
  deleteUser,
} from "./routes/users";
export { allRoutes } from "./routes";
export type { AllRoutes } from "./routes";

export { notesMessages, noteCreated, noteDeleted } from "./messages/notes";
export { allMessages } from "./messages";
export type { AllMessages } from "./messages";
