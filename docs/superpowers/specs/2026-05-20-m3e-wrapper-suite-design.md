# `@app/m3e-svelte` — feature-complete M3E wrapper suite

**Status:** design draft · **Date:** 2026-05-20 · **Owner:** template repo

## Problem

The template installs 25 `@m3e/*` packages exposing roughly 55 distinct custom elements. The
existing `packages/web/src/lib/m3e/` directory holds 21 hand-written Svelte wrappers, but each
is a *partial* pass-through — `Button.svelte` exposes 5 of 14 documented attributes, 2 of 5 slots,
one event. Whole packages (`@m3e/list`, `@m3e/tooltip`, `@m3e/core`) and several sub-elements
(`m3e-filter-chip`, `m3e-action-list`, `m3e-collapsible`, `m3e-dialog-action`, `m3e-drawer-toggle`,
`m3e-step-panel`, etc.) have no wrapper at all.

Adding components on-demand has caused recurring drift: each new wrapper re-discovers the same
SSR / upgrade-race / FOUC traps documented in `material-3-svelte` and re-encodes them inconsistently.

## Goal

Ship a feature-complete, opt-in Svelte wrapper suite that:

1. Covers every custom element exported by every installed `@m3e/*` package.
2. Exposes every documented attribute, slot, event, and `bind:element` reference per element.
3. Encodes the upgrade-race / property-binding / FOUC patterns once, in code-generation templates, not per wrapper.
4. Stays tree-shakable — referencing one component pulls one `@m3e/*` package.
5. Is generated, not hand-written, so adding `@m3e/<new-package>` to the app's `package.json`
   and rerunning `generate` extends the suite automatically.

## Non-goals

- Replacing M3E with a different web-component library.
- Wrapping non-`@m3e/*` web components.
- Hand-tuning per-component ergonomics (e.g. exposing CSS custom properties as Svelte props).
  The suite is a pass-through; opinionated wrappers stay in `packages/web/src/lib/m3e/`.
- Publishing to npm in this iteration. The package is workspace-internal; npm publication is a
  follow-up explicitly out of scope.

## Architecture

### Package shape

```
packages/m3e-svelte/
├── package.json           type:module; exports: "." → src/index.ts, "./presets/chrome" → src/presets/chrome.ts
├── tsconfig.json          extends ../../tsconfig.base.json
├── svelte.config.js       customElement: false
├── scripts/
│   └── generate.ts        bun script; reads node_modules/@m3e/*/dist/custom-elements.json
├── src/
│   ├── index.ts           barrel; re-exports every generated wrapper by PascalCase tag name
│   ├── runtime/
│   │   ├── env.ts         exports `browser` constant (no $app/environment dependency)
│   │   ├── upgrade.ts     syncProperty + syncManagedProperty helpers
│   │   ├── slot.svelte    snippet → named-slot wrapper with display:contents
│   │   └── types.ts       shared types referenced by generated files
│   ├── generated/         ← codegen output, committed
│   │   ├── Button.svelte
│   │   ├── Chip.svelte … (one .svelte file per m3e-* tag)
│   │   ├── manifest.json  ← { tag → { package, className, upgradeManaged } }
│   │   ├── styles.css     ← :not(:defined) FOUC shield
│   │   └── .gitattributes  generated/* linguist-generated=true
│   └── presets/
│       ├── chrome.ts      eager import bundle for tier-1 chrome elements
│       └── all.ts         eager import everything (escape hatch; lint-flagged)
├── tests/
│   ├── generator.snapshot.test.ts   templated output for 4 archetypes
│   ├── compile.test.ts              every wrapper compiles
│   ├── generated.smoke.test.ts      mount + attribute/slot/event forwarding
│   └── upgrade-race.test.ts         managed-property sync after upgrade
└── README.md              generated; per-component API tables
```

`packages/web/package.json` adds `"@app/m3e-svelte": "workspace:*"`. The 25 `@m3e/*` packages are
listed in **both** package manifests: as direct `dependencies` of `packages/web` (unchanged from
today, so the bun workspace installs and hoists them) **and** as `peerDependencies` of
`packages/m3e-svelte` (so a consumer outside this template knows which `@m3e/*` packages to bring).
`peerDependenciesMeta` marks each as `optional: true` so the suite installs even when a host
doesn't want every component; the codegen script skips wrappers for missing peers with a warning.

### Code generation pipeline

`scripts/generate.ts` (bun, no external deps beyond what's already in the workspace):

1. **Discover packages.** Read `packages/m3e-svelte/package.json` `peerDependencies`. For each,
   require `node_modules/@m3e/<pkg>/dist/custom-elements.json`. Missing manifests skip with a warning.
2. **Per element** (one CEM module may declare multiple classes):
   - Read `tagName`, `attributes[]`, `slots[]`, `events[]`, `cssProperties[]`, public field `members[]`.
   - Read the matching `dist/src/<ClassName>.d.ts` to confirm the exported element class name and
     any re-exportable enum types (`ButtonVariant`, `ButtonShape`, …).
   - Classify the element: `passive` (default), `propertyDriven` (boolean state attribute like
     `open`, `expanded`), `selectionManaged` (`nav-menu`, `select`, `radio-group`, any `*-set`,
     any `*-list`). Classification rules live in `scripts/generate.ts` as explicit allow-lists
     plus substring matches on the tag name.
3. **Emit** a `.svelte` file from the matching template (see "Wrapper template" below). Templates
   are plain TS template literals — no external templating dependency.
4. **Update** `generated/manifest.json` with the classification, source package, and class name.
5. **Emit** `generated/styles.css` listing every dialog/menu/snackbar/tooltip-class tag in the
   `:not(:defined) { display: none !important }` shield.
6. **Emit** `README.md` from `manifest.json` + per-element CEM data: one table per element with
   columns for attribute / type / default / description, then slots, then events, then CSS
   custom properties.

### Field-by-field mapping (CEM → wrapper)

| CEM field | Wrapper |
|---|---|
| `attributes[]` with boolean type | `prop?: boolean` prop; rendered as `attr={prop \|\| undefined}` (never `="false"`). |
| `attributes[]` with string/enum type | Typed prop; enum types re-exported from the source `@m3e/*` package and used in the `Props` interface. kebab attribute names map to camelCase props (`disabled-interactive` → `disabledInteractive`); the template uses the kebab name on the element. |
| `attributes[]` flagged as a managed state (`selected`, `value`, `open`, `expanded`, `checked`) | `$bindable()` prop; the wrapper omits the attribute from the element template and drives the DOM **property** via a `$effect` (using `syncProperty` or `syncManagedProperty` per classification). |
| `slots[]` | One `Snippet?` prop per slot. Default slot → `children`. Named slots → camelCase; if the camelCase name collides with an attribute prop, append `Snippet` (e.g. `selected` slot on a button becomes `selectedSnippet` to avoid colliding with the `selected` attribute). Rendered via the `runtime/slot.svelte` helper. |
| `events[]` | `on<Event>?: (e: Event \| CustomEvent<Detail>) => void` prop forwarded onto the element. Native event names use DOM event types; custom events use `CustomEvent<CEMDetail>` when the CEM declares a detail type. |
| `cssProperties[]` | **Not emitted as props.** Documented in JSDoc `@cssprop` comments on the wrapper and in the generated README. Setting them stays the consumer's job. |
| public `members[]` not mirrored by an attribute | Skipped by default. Per-element allow-list in `scripts/generate.ts` for the rare case where a runtime-only field is needed. |

Every wrapper also exposes:
- `element?: Mxxx` as a `$bindable()` — typed by importing the element class from the source
  `@m3e/*` package — for imperative escape hatches via `bind:element`.

### Wrapper templates

Three archetypes, one template each.

**Passive** (most elements — Card, Divider, Icon, Shape, FormField, Stepper, App-Bar, …):

```svelte
<script lang="ts">
  import type { Snippet } from "svelte";
  import { browser } from "../runtime/env";
  import { slot } from "../runtime/slot";
  if (browser) void import("@m3e/card");
  import type { M3eCardElement } from "@m3e/card";

  interface Props {
    /* one prop per CEM attribute, typed and JSDoc-d */
    /* one Snippet per CEM slot */
    /* one on<Event> per CEM event */
    element?: M3eCardElement;
  }
  let { /* destructure all */ element = $bindable() }: Props = $props();
</script>
<m3e-card bind:this={element} {/* spread typed attrs, bool→undefined */}>
  {/* render snippets via slot helper */}
</m3e-card>
```

**Property-driven** (Dialog, Snackbar, Tooltip): same as passive plus a `$bindable()` boolean
state prop and a `$effect` that writes the DOM property when the prop changes, and an internal
event handler that writes the property back to the bindable on change.

**Selection-managed** (Select, NavMenu, RadioGroup, *-Set elements, Lists with selection): same
as property-driven plus `syncManagedProperty` (which waits for `customElements.whenDefined(tag)`,
`tick()`, and the Lit `updateComplete` promise before assigning the property), plus a wrapper on
the change event that drops spurious `null` reads emitted between deselect and reselect.

### Runtime helpers (small, hand-written, not generated)

`runtime/env.ts`:

```ts
export const browser =
  typeof window !== "undefined" && typeof document !== "undefined";
```

`runtime/upgrade.ts`:

```ts
import { tick } from "svelte";
import { browser } from "./env";

export function syncProperty<T>(
  el: HTMLElement | undefined,
  prop: string,
  value: T,
) {
  if (!browser || !el) return;
  (el as unknown as Record<string, unknown>)[prop] = value;
}

export function syncManagedProperty<T>(
  el: HTMLElement | undefined,
  prop: string,
  value: T,
) {
  if (!browser || !el) return;
  const tag = el.tagName.toLowerCase();
  void customElements.whenDefined(tag).then(async () => {
    await tick();
    const lit = el as unknown as { updateComplete?: Promise<unknown> };
    if (lit.updateComplete) await lit.updateComplete;
    (el as unknown as Record<string, unknown>)[prop] = value;
  });
}
```

`runtime/slot.svelte`:

```svelte
<script lang="ts">
  import type { Snippet } from "svelte";
  let { snippet, name }: { snippet?: Snippet; name: string } = $props();
</script>
{#if snippet}<div slot={name} style="display:contents">{@render snippet()}</div>{/if}
```

### Presets

`presets/chrome.ts` is the one named-place for the tier-1 eager bundle:

```ts
import "../generated/styles.css";
export const chrome = Promise.all([
  import("@m3e/theme"),
  import("@m3e/app-bar"),
  import("@m3e/icon"),
  import("@m3e/icon-button"),
  import("@m3e/divider"),
  import("@m3e/drawer-container"),
  import("@m3e/nav-menu"),
]);
```

`presets/all.ts` exists for completeness (smoke tests, exploration) but is biome-flagged in
`packages/web` via `no-restricted-imports`.

## Integration with `packages/web`

### `lib/m3e/setup.ts`

Becomes:

```ts
import { browser } from "$app/environment";
if (browser) void import("@app/m3e-svelte/presets/chrome");
```

### Existing `lib/m3e/` wrappers

| File | Fate | Reason |
|---|---|---|
| `Theme.svelte`, `AppBar.svelte`, `AppNav.svelte`, `DrawerContainer.svelte`, `IconButton.svelte`, `Icon.svelte`, `Divider.svelte`, `setup.ts` | Keep | Chrome layer — coupled to `$lib/stores/theme.svelte.ts`, `$lib/nav-items`, SvelteKit navigation; not appropriate in a generic suite. |
| `Button.svelte`, `Card.svelte`, `Checkbox.svelte`, `Chip.svelte`, `ChipSet.svelte`, `Dialog.svelte`, `Fab.svelte`, `FormField.svelte`, `RadioGroup.svelte`, `Select.svelte`, `Shape.svelte`, `Snackbar.svelte`, `Stepper.svelte`, `Switch.svelte` | Delete after migration | Partial pass-throughs superseded by the generated suite. |

Migration sequence (two commits, both green CI):

1. **Add the suite + migrate callers.** `bun add @app/m3e-svelte` in web; rewrite imports in
   `routes/` and `showcase/` that referenced the deleted files; replace the file bodies in
   `lib/m3e/<Name>.svelte` with `export { default } from "@app/m3e-svelte/<Name>.svelte"` to keep
   any unmigrated imports working through the commit.
2. **Delete the re-export shims** once `grep -r "lib/m3e/Button"` etc. returns nothing.

### Bundle/chunking guardrails

`scripts/check-chrome-chunk.ts` (new, in `packages/web/scripts/`): parses Vite's build
`manifest.json` from `.svelte-kit/output`, finds the layout entry chunk, and asserts it imports
*only* `@m3e/theme`, `@m3e/app-bar`, `@m3e/icon`, `@m3e/icon-button`, `@m3e/divider`,
`@m3e/drawer-container`, `@m3e/nav-menu`. Wired into CI after `bun run build`.

Biome custom rule (or `no-restricted-imports` configuration) forbids importing
`@app/m3e-svelte/presets/all` from anywhere under `packages/web/src/`.

Codegen-emitted `// @generated` header on every file plus a biome rule forbidding hand edits
to `packages/m3e-svelte/src/generated/**`.

## Testing

| Layer | Test | Path |
|---|---|---|
| Generator | Snapshot output for 4 archetypes (Button passive-ish, Select selection-managed, Dialog property-driven, Card pure-passive) | `packages/m3e-svelte/tests/generator.snapshot.test.ts` |
| Generator | Every installed `@m3e/*` produces a `.svelte` that Svelte compiles | `packages/m3e-svelte/tests/compile.test.ts` |
| Wrapper | Mount each generated wrapper in jsdom with `customElements` stubs; assert: props forward as attributes, snippets render in named slots, `bind:element` resolves | `packages/m3e-svelte/tests/generated.smoke.test.ts` |
| Wrapper | `<Select bind:value>` initialized to a value with manager-clears-pre-upgrade-attrs simulation; value reaches DOM property after `whenDefined` resolves | `packages/m3e-svelte/tests/upgrade-race.test.ts` |
| Integration | Render `Button` and `Dialog` from `@app/m3e-svelte` inside SvelteKit harness; assert no SSR crash and no FOUC class leak | `packages/web/tests/m3e-suite.test.ts` (new) |
| E2E | `/showcase/suite` route exercises Select / RadioGroup / NavMenu / Dialog bindings end-to-end | `packages/web/tests/e2e/suite.spec.ts` (new) |

## Documentation

- New showcase route `packages/web/src/routes/showcase/suite/+page.svelte` — renders every
  generated component once with default props, grouped by category, with CSS custom properties
  listed inline. Doubles as visual baseline and human inventory.
- Generator writes `packages/m3e-svelte/README.md` from `manifest.json` + CEM data.
- Root `CLAUDE.md` "Adding an M3E component" section adds a top bullet:
  *"Prefer importing from `@app/m3e-svelte`; only wrap into `lib/m3e/` if it joins the chrome
  (renders on every page) and you need the app-specific bindings."*

## Edge cases acknowledged but accepted as-is

- **`@m3e/option` exports `m3e-nav-bar`**, which overlaps in role with `m3e-nav-menu`. Suite
  wraps both; consumers pick.
- **`m3e-app-bar` and `m3e-drawer-container` exist in both the chrome layer and the suite.** The
  generic suite wrapper is a pass-through; `lib/m3e/AppBar.svelte` and `lib/m3e/DrawerContainer.svelte`
  remain as the app-wired versions (slot composition + theme-store binding).
- **`Theme`**: suite exports a bare pass-through `Theme` wrapper (no store coupling); `lib/m3e/Theme.svelte`
  stays as the wired-into-`themeState` chrome version. Same name, different paths, distinct intent.
- **CSS custom properties as props**: out of scope. Consumers set them inline (`style:--m3e-button-medium-container-height="48px"`)
  or via `:global(...)` overrides referencing `--md-sys-color-*` tokens.

## Open follow-ups (out of scope for this spec)

- npm publication of `@m3e/svelte` (the suite under a public scope).
- A custom-events-data layer (`html-custom-data.json`, `css-custom-data.json`) wired into a
  VSCode workspace for richer in-template autocomplete.
- Automatic regeneration on `bun install` when `@m3e/*` versions change. Currently manual:
  `bun run --filter @app/m3e-svelte generate`.

## Implementation phases (for the plan)

1. Scaffold `packages/m3e-svelte/` (package.json, tsconfig, svelte.config, empty src/runtime).
2. Author runtime helpers (`env.ts`, `upgrade.ts`, `slot.svelte`) + their unit tests.
3. Implement `scripts/generate.ts` for the passive archetype only; snapshot test against Card.
4. Extend generator to property-driven (Dialog) and selection-managed (Select) archetypes;
   snapshot tests for each.
5. Run generate against all 25 packages; commit `src/generated/`. Resolve any per-element
   misclassifications via allow-lists.
6. Add presets, FOUC stylesheet, README generator.
7. Wire `packages/web` to consume the suite; rewrite imports; delete obsolete `lib/m3e/`
   wrappers per the migration sequence.
8. Add `/showcase/suite` route + E2E spec + chunk-size guardrail script.
9. Update root `CLAUDE.md` with new authoring guidance.
