# bun-svelte-m3e-template

A GitHub repository template for **Bun.serve backend + SvelteKit PWA frontend +
Material 3 Expressive UI**. Ships with:

- 2-package Bun workspace (`@app/server`, `@app/web`)
- Server-as-source-of-truth: zod schemas, route registry, WS messages, typed
  `apiClient`/`wsClient` exported via `@app/server/contract`
- Auto-generated OpenAPI spec at `/docs` (Scalar UI) and `/openapi.json`
- M3E shapes + morph animations on the showcase page
- Two-tier component loading: chrome eager, others lazy via per-wrapper imports
- `bun:sqlite` persistence with a Postgres skeleton ready to activate
- e2e via Playwright + apijack `runRoutine` (per-test fixtures + global setup/teardown)
- PWA via `@vite-pwa/sveltekit` with a hand-rolled service worker

## Quick start

```bash
bun install
bun run dev
# then open http://localhost:5173
```

You should see a landing page with a clickable shape that morphs through six
shapes. Click "Open showcase" to see all 35 shapes, the focused morph demo, the
component vocabulary, and a notes CRUD demo wired to the live API.

## Scripts

| script              | what it does                                                          |
| ------------------- | --------------------------------------------------------------------- |
| `bun run dev`       | starts Bun.serve (`:3000`) and Vite (`:5173`) in parallel             |
| `bun run build`     | builds the SvelteKit static bundle into `packages/web/dist/`          |
| `bun run start`     | runs Bun.serve in production mode (serves `dist/` + API + WS)         |
| `bun run test`      | runs server tests (bun test) + web unit tests (vitest)                |
| `bun run typecheck` | typechecks both packages                                              |
| `bun run lint`      | biome check                                                           |
| `bun run e2e`       | global setup → playwright → global teardown                           |
| `bun run gen:openapi` | regenerates `docs/openapi.json` from the route registry             |

## What's in the box

- `packages/server/src/contract/` — the public surface the frontend imports.
  Schemas, routes, messages, `apiClient`/`wsClient`. **Browser-safe.**
- `packages/server/src/runtime/` — Bun.serve, handlers, DB, OpenAPI generator,
  static asset server, middleware. **Server-only; never imported from
  the frontend.**
- `packages/web/src/lib/m3e/` — Svelte 5 wrappers around `@m3e/*` web components.
  Two-tier loading strategy (see `CLAUDE.md`).
- `packages/web/src/routes/showcase/` — runnable demos: shapes, morph,
  components, notes (CRUD with WS broadcast).

## Forking this template

See the **First-fork checklist** in [`CLAUDE.md`](./CLAUDE.md).
