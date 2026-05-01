# Architecture

```
┌─────────────────────────────────────────────────────────────┐
│  Browser (SvelteKit static bundle, served by Bun.serve)     │
│                                                             │
│  src/routes/* ── lib/m3e/* ── lib/api.ts ── lib/ws.ts      │
│                                  │            │             │
│                                  └─ imports ──┘             │
│                                  from @app/server/contract  │
└──────────────────────┬──────────────────────────────────────┘
                       │ HTTP /api/* + WS /ws
                       ▼
┌─────────────────────────────────────────────────────────────┐
│  Bun.serve (single process)                                 │
│                                                             │
│  /api/*   → dispatch.ts → handlers/*.ts ──┐                 │
│  /ws      → ws/*.ts ──────────────────────┤                 │
│  /docs    → openapi/docs.ts (Scalar UI)   │                 │
│  /openapi.json → generated from registry  │                 │
│  /        → static.ts (web/dist)          │                 │
│                                            ▼                │
│  contract: { schemas, routes, messages } ←─ source of truth │
│                                            ▼                │
│  runtime/db: sqlite (active) | postgres (skeleton)          │
└─────────────────────────────────────────────────────────────┘
```

## The contract export — why it's load-bearing

The server's `package.json` exposes only `./contract` to external consumers
(the workspace web package). The contract is a **browser-safe slice of the
server**: zod schemas, inferred types, route metadata, WS message metadata,
and the typed `apiClient`/`wsClient` factories.

The web package imports nothing else from the server. There is no separate
"shared" or "core" package — the server *is* the source of truth, and its
contract export is the only public surface. Runtime files (DB, handlers,
`Bun.serve` setup) use relative imports internally and are never visible
to the frontend.

This keeps:
- **Validation in lockstep.** Client and server parse with the same zod
  schemas. Forms can't drift from server expectations.
- **Types in one place.** `Note`, `User`, `NoteCreate` are inferred from the
  zod schemas and re-exported. No DTO duplication.
- **The OpenAPI spec a derived artifact.** It's generated from the route
  registry, never edited directly. `docs/openapi.json` is committed; CI
  fails on drift via `openapi-snapshot.test.ts`.

The `contract-purity.test.ts` enforces that nothing in `src/contract/**`
imports `bun:sqlite`, `node:fs`, etc. If a contributor accidentally pulls
runtime into the contract, the test fails before the build does.

## M3E loading strategy

Two tiers (see `CLAUDE.md` for the rule):

- **Tier 1 — chrome (eager).** `setup.ts` loads Theme, AppBar, Icon,
  IconButton, Divider on first paint. ~20–30KB gz on the critical path.
- **Tier 2 — per-wrapper (lazy).** Each Svelte wrapper dynamic-imports its
  `@m3e/*` package at module load. Vite splits per package; SvelteKit emits
  `<link rel="modulepreload">` hints per route, so components arrive in
  parallel with their route's JS.

`@m3e/all` is forbidden — it eager-imports everything and defeats the chunking.

## Test architecture

| Layer       | Tool                          | Scope                                            |
| ----------- | ----------------------------- | ------------------------------------------------ |
| Unit (BE)   | `bun test`                    | handlers, db, primitives, openapi                |
| Unit (FE)   | `vitest` + jsdom              | M3E wrappers, stores, lib/api, lib/ws            |
| e2e\*       | Playwright (UI) + apijack (API) | full-stack flows against `bun run dev`         |
| Contract    | `contract-purity.test.ts`     | rejects forbidden imports in `/contract`         |
| API drift   | `openapi-snapshot.test.ts`    | regenerated spec must match committed `docs/openapi.json` |

\*e2e CLI runs via `bun --bun playwright test` to satisfy apijack's TS-only
distribution under Node. `@apijack/core` ships as TypeScript and Node's
type-stripping is unsupported under `node_modules`, so the suite must use
Bun's runtime to load the apijack CLI inside fixtures.

e2e uses two layers, **same YAML artifacts at both**:

- **Global** (`bun run e2e:setup`/`e2e:teardown`) — apijack CLI runs the
  baseline routine before the suite, the teardown routine after. Reusable by
  CI smoke and ops.
- **Per-test** (`fixtures/seed.ts`) — each test calls `cli.runRoutine`
  programmatically, gets back typed IDs, runs UI assertions against that
  state, then runs the matching teardown routine.

This split means you write `seed-user-with-notes.yaml` once and use it as both
a Playwright fixture seed and a developer/CI tool.
