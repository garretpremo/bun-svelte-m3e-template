# CLAUDE.md — Architecture and authoring rules

This template is a 2-package Bun workspace: `@app/server` (Bun.serve runtime + zod
schemas + route registry) and `@app/web` (SvelteKit static-adapter PWA). The server
is the source of truth for the API contract. The frontend imports zod schemas,
inferred types, and the typed `apiClient`/`wsClient` from `@app/server/contract`.

## The contract rule (load-bearing)

`packages/server/package.json` exposes only `./contract` to consumers. Inside the
server package, runtime files (`Bun.serve`, handlers, DB) use relative imports
internally — they're never imported by the frontend.

`/contract` may export:
- Zod schemas + inferred types
- `defineRoute` registry entries
- `defineMessage` registry entries
- `apiClient` and `wsClient` factories

`/contract` MUST NOT import:
- `bun:sqlite`, `bun:ffi`, `bun:test`
- `node:fs`, `node:path`, `node:child_process`, `node:dns`, `node:os`, etc.
- Anything from `src/runtime/**`

If the build for the web package fails because `@app/server/contract` pulled
`bun:sqlite`, **fix the contract export** — don't shim the build. The
`contract-purity.test.ts` test enforces this. If it fails, identify the leaky
export and move runtime usage out of `/contract`.

## Adding a route

1. **Schemas** in `packages/server/src/contract/schemas/<resource>.ts`.
2. **Pick an `operationId`** — camelCase verb+resource (e.g. `createThing`,
   `listThings`, `deleteUser`). Required on every route — drives apijack's CLI
   command generation. Without it, the route silently disappears from the
   generated CLI.
3. **Route** in `packages/server/src/contract/routes/<resource>.ts`:
   ```ts
   export const createThing = defineRoute({
     operationId: "createThing",
     method: "POST",
     path: "/api/things",
     body: ThingCreate,
     response: ThingSchema,
     errors: { 400: ZodErrorShape, 401: AuthErrorShape },
     summary: "Create a thing",
     tags: ["things"],
   });
   ```
4. **Add to the registry** at the bottom of the routes file:
   `export const thingsRoutes = { create: createThing, ... }` — and import into
   `routes/index.ts` so `allRoutes` and `apiClient` see it.
5. **Handler** in `packages/server/src/runtime/handlers/<resource>.ts` —
   bind to the route via `RouteBinding`.
6. **Wire** the bindings into `runtime/server.ts` `bindings` array.
7. **Test** the handler in `packages/server/tests/handlers/<resource>.test.ts`.
8. **Regenerate OpenAPI**: `bun run gen:openapi`. Commit `docs/openapi.json`.

The `apiClient` on the frontend gets `api.things.create({ body })` automatically.

### operationId conventions and the apijack CLI

The OpenAPI spec uses `operationId`s in the form `<verb><Resource>` —
`createNote`, `listNotes`, `deleteUser`, etc. apijack maps these to
`<resource> <verb>` CLI commands: `notes create`, `notes list`, `users delete`.
Pick verbs that round-trip cleanly (`create`, `list`, `get`, `update`, `delete`,
or domain verbs like `publish`, `archive`) and stay consistent across resources.

## Adding a WS message

1. Define in `packages/server/src/contract/messages/<resource>.ts` via `defineMessage`.
2. Re-export from `messages/index.ts` so it joins `allMessages`.
3. **Server-to-client**: emit via `broadcast({ type, payload })` from
   `runtime/ws/index.ts`. Add a typed helper in `runtime/ws/<resource>.ts`.
4. **Client-to-server**: extend `dispatchWs` in `runtime/ws/index.ts` to parse
   the envelope and dispatch by `type`.

The `wsClient` on the frontend gets `ws.on("type", handler)` and (for
client-to-server messages) `ws.send("type", payload)`.

## Adding an M3E component

1. Pick the package from the `@m3e/*` family.
2. Wrap in `packages/web/src/lib/m3e/<Name>.svelte`. **At the top of the
   `<script>` block, dynamic-import the package**:
   ```svelte
   <script lang="ts">
     import { browser } from "$app/environment";
     if (browser) void import("@m3e/<package>");
     // ...
   </script>
   ```
3. **Do NOT add to `lib/m3e/setup.ts`** unless the component appears on every
   page's chrome. The setup file is reserved for Theme + AppBar + Icon +
   IconButton + Divider; adding more there inflates first-paint payload.
4. **Never add `@m3e/all` as a dependency.** It eagerly imports every component
   and defeats the chunking strategy.

## Color and theming

- **Never hardcode colors** in component CSS or templates. Use M3 tokens
  (`--md-sys-color-*`) so the theme picker (`/showcase/theme`) and dark mode
  work. The only legitimate literals are the seed colors in
  `$lib/stores/theme.svelte.ts` `PRESETS` and SSR fallbacks like
  `background: var(--md-sys-color-background, #fdf8fd)`.
- **One source of truth for the active seed/scheme.** It lives in
  `$lib/stores/theme.svelte.ts` (`themeState`). The root `+layout.svelte` is
  the only place that reads it and feeds `<Theme>`. Don't add second sources.
- **`<m3e-theme>` MUST be a direct child of `<body>`.** That detection is
  what makes M3E apply `--md-sys-color-background` to the body element and
  style the document scrollbar. Do not reintroduce the
  `<div style="display: contents">` wrapper that SvelteKit's default
  `app.html` ships with — it breaks dark-mode body bg.
- **Pick one family per visual purpose and stay consistent across pages.**
  Decorative filled shapes use `var(--md-sys-color-primary)`; card/tile
  backgrounds use the `surface-*` family; low-emphasis tinted regions use
  the `*-container` family. Mixing `primary` on one page and
  `primary-container` on another for the same role inverts under dark mode
  (one is light, the other dark) and looks like a bug.
- **Token cheatsheet:**
  - **Surface family** (cards, tiles, page bg): `surface`,
    `surface-container-{lowest|low|high|highest}`, `surface-variant` —
    pair with `on-surface` / `on-surface-variant`.
  - **Accent containers** (low-emphasis tinted backgrounds):
    `primary-container`, `secondary-container`, `tertiary-container`,
    `error-container` — pair with `on-<name>`.
  - **Role accents** (high-emphasis fills, decorative shapes): `primary`,
    `secondary`, `tertiary`, `error` — pair with `on-<name>`.
  - **Inverse strip** (callouts): `inverse-surface` / `inverse-on-surface`.
- **Adding a preset:** append to `PRESETS` in `$lib/stores/theme.svelte.ts`.
  The picker renders them automatically.

## DB migration: sqlite → postgres

Active impl: `bun:sqlite`. To migrate:

1. Install Bun ≥ the version you've verified for `Bun.sql`.
2. Implement each method in `packages/server/src/runtime/db/postgres.ts`.
3. Rewrite `migrations/0001-init.sql` to be Postgres-compatible (drop
   sqlite-specific syntax; use `gen_random_uuid()` etc).
4. Set `DATABASE_URL=postgres://...` in `.env`.
5. `db/index.ts` already switches on `DATABASE_URL.startsWith("postgres")`.

Both impls satisfy `Db`. Handlers don't change.

## Test conventions

- **`bun test`** for `@app/server`: handler tests, db tests, contract-purity,
  openapi-snapshot. Run from `packages/server` or via root `bun run test`.
- **`vitest`** for `@app/web` units: M3E wrapper smoke tests, store tests,
  `lib/api`/`lib/ws` against mocked transports.
- **Playwright + apijack** for e2e:
  - **Global setup/teardown** runs *outside* the Playwright process via
    `bun run e2e:setup` / `e2e:teardown` (CLI invocation of routines).
  - **Per-test fixtures** call `cli.runRoutine` programmatically from
    `tests/e2e/fixtures/seed.ts`. Each test scopes its own data.
  - **Same YAML routine artifacts at both layers** — write a routine once.
  - **Invoke Playwright via Bun's runtime**: `bun --bun playwright test`
    (not `bunx playwright test`). `@apijack/core` ships TS-only and Node's
    type-stripping is unsupported under `node_modules`, so the e2e CLI fails
    to load under the Node runtime. The `bun run e2e` script already does
    this; if you call Playwright directly, match it.
- **Never shell out from a Playwright test.** Use the `runRoutine` programmatic
  surface or Playwright's `request` fixture. Shelling out has process-startup
  overhead and breaks state handoff.
- The `seed.ts` wrapper is the swap point if you ever migrate off apijack —
  the implementation changes there only.

## First-fork checklist

When cloning this template for a real project:

1. **Rename the scope.** Find-and-replace `@app/` with `@<your-scope>/` across
   `package.json`, `packages/server/package.json`, `packages/web/package.json`,
   and any source files that reference workspace deps.
   - The sqlite file lives under `data/` at the **repo root**, not the cwd —
     the path resolves via `import.meta.url` in `runtime/db/sqlite.ts`. That
     is intentional (so `bun run` from any subdirectory hits the same DB);
     don't "fix" it to `process.cwd()`.
2. **Pick a theme color.** Update `<Theme color="..." ...>` in `+layout.svelte`,
   the `<meta name="theme-color">` in `app.html`, and `theme_color` in
   `static/manifest.webmanifest` — keep them in sync.
3. **Fill the manifest fields.** `name`, `short_name`, `description` in
   `static/manifest.webmanifest`. Replace placeholder PWA icons.
4. **Replace the `requireAuth` stub.** `runtime/middleware/requireAuth.ts`
   currently accepts any non-empty Bearer token. Wire to your real auth
   (OAuth flow, sessions, JWT) before exposing the API.
5. **Write a real `setup-baseline.yaml`.** The template's version is a
   placeholder; your routines will reflect your actual data model.
6. **Decide on persistence.** sqlite is the default. If you need Postgres,
   follow the migration recipe above.
7. **Update `docs/openapi.json` info.** Title, version, description in
   `scripts/gen-openapi.ts`. Run `bun run gen:openapi` to regenerate.

