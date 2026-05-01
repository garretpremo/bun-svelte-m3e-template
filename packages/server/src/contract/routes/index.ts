import { notesRoutes } from "./notes";
import { usersRoutes } from "./users";

export { notesRoutes, usersRoutes };
export const allRoutes = { notes: notesRoutes, users: usersRoutes };
export type AllRoutes = typeof allRoutes;
