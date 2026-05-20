# `@app/m3e-svelte` Wrapper Suite — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship a new `packages/m3e-svelte` workspace package that generates feature-complete Svelte wrappers for every custom element across the 25 installed `@m3e/*` packages, then migrate `packages/web` to consume it and delete the 14 partial hand-written wrappers it supersedes.

**Architecture:** A bun codegen script reads each package's `custom-elements.json` manifest and emits a `.svelte` file per element (~55 components) from one of three templates — passive, property-driven, selection-managed. Generated files are committed. The seven chrome-tier elements remain eagerly imported via a `presets/chrome.ts` re-export; the existing app-specific wrappers (`AppNav`, `AppBar`-with-slots, `Theme`-wired-to-store, `DrawerContainer`) stay in `packages/web/src/lib/m3e/` because they're coupled to SvelteKit + the theme store.

**Tech Stack:** Bun workspaces · Svelte 5 · SvelteKit static adapter · vitest + @testing-library/svelte (jsdom) · Playwright · biome · `@m3e/*` 1.3.1 (Lit-based custom elements with CEM manifests).

**Reference docs:**
- Spec: `docs/superpowers/specs/2026-05-20-m3e-wrapper-suite-design.md` — read first.
- `CLAUDE.md` at repo root — architecture rules, especially "Adding an M3E component" and color/theming.
- The `material-3-svelte` skill documents the five integration patterns this plan automates.

**Operating notes:**
- All Bun commands run from the repo root unless stated otherwise.
- Project uses biome with 2-space indent and `verbatimModuleSyntax` (use `import type` for types).
- The vitest config in `packages/web` aliases `$app/environment` to a stub; `packages/m3e-svelte` will not depend on `$app/*` at all so this plan avoids that bridge.
- Commit after every green task. No `--no-verify`. No `Co-Authored-By: Claude` trailer (user-global rule).

---

## Phase 0 — Branch + worktree

### Task 0: Create feature branch

**Files:** none

- [ ] **Step 1: Confirm clean working tree**

Run: `git -C /home/garret/projects/bun-svelte-m3e-template status --short`
Expected: empty output (or only the two committed `docs/superpowers/` files from spec + plan).

- [ ] **Step 2: Create branch**

Run:
```bash
git -C /home/garret/projects/bun-svelte-m3e-template checkout -b feat/m3e-svelte-suite
```
Expected: `Switched to a new branch 'feat/m3e-svelte-suite'`.

---

## Phase 1 — Scaffold `packages/m3e-svelte`

### Task 1: Create package skeleton

**Files:**
- Create: `packages/m3e-svelte/package.json`
- Create: `packages/m3e-svelte/tsconfig.json`
- Create: `packages/m3e-svelte/svelte.config.js`
- Create: `packages/m3e-svelte/vitest.config.ts`
- Create: `packages/m3e-svelte/.gitignore`
- Create: `packages/m3e-svelte/README.md` (placeholder; the generator will rewrite later)

- [ ] **Step 1: Write `packages/m3e-svelte/package.json`**

```json
{
  "name": "@app/m3e-svelte",
  "version": "0.1.0",
  "type": "module",
  "private": true,
  "exports": {
    ".": {
      "svelte": "./src/index.ts",
      "types": "./src/index.ts"
    },
    "./presets/chrome": {
      "svelte": "./src/presets/chrome.ts",
      "types": "./src/presets/chrome.ts"
    },
    "./presets/all": {
      "svelte": "./src/presets/all.ts",
      "types": "./src/presets/all.ts"
    },
    "./generated/styles.css": "./src/generated/styles.css",
    "./generated/manifest.json": "./src/generated/manifest.json",
    "./generated/*.svelte": "./src/generated/*.svelte"
  },
  "scripts": {
    "generate": "bun run scripts/generate.ts",
    "test": "vitest run",
    "test:watch": "vitest",
    "typecheck": "svelte-check --tsconfig ./tsconfig.json"
  },
  "peerDependencies": {
    "svelte": "^5.0.0",
    "@m3e/app-bar": "^1.3.0",
    "@m3e/button": "^1.3.0",
    "@m3e/card": "^1.3.0",
    "@m3e/checkbox": "^1.3.0",
    "@m3e/chips": "^1.3.0",
    "@m3e/core": "^1.3.0",
    "@m3e/dialog": "^1.3.0",
    "@m3e/divider": "^1.3.0",
    "@m3e/drawer-container": "^1.3.0",
    "@m3e/fab": "^1.3.0",
    "@m3e/form-field": "^1.3.0",
    "@m3e/icon": "^1.3.0",
    "@m3e/icon-button": "^1.3.0",
    "@m3e/list": "^1.3.0",
    "@m3e/nav-menu": "^1.3.0",
    "@m3e/option": "^1.3.0",
    "@m3e/radio-group": "^1.3.0",
    "@m3e/select": "^1.3.0",
    "@m3e/shape": "^1.3.0",
    "@m3e/snackbar": "^1.3.0",
    "@m3e/stepper": "^1.3.0",
    "@m3e/switch": "^1.3.0",
    "@m3e/textarea-autosize": "^1.3.0",
    "@m3e/theme": "^1.3.0",
    "@m3e/tooltip": "^1.3.0"
  },
  "peerDependenciesMeta": {
    "@m3e/app-bar": { "optional": true },
    "@m3e/button": { "optional": true },
    "@m3e/card": { "optional": true },
    "@m3e/checkbox": { "optional": true },
    "@m3e/chips": { "optional": true },
    "@m3e/core": { "optional": true },
    "@m3e/dialog": { "optional": true },
    "@m3e/divider": { "optional": true },
    "@m3e/drawer-container": { "optional": true },
    "@m3e/fab": { "optional": true },
    "@m3e/form-field": { "optional": true },
    "@m3e/icon": { "optional": true },
    "@m3e/icon-button": { "optional": true },
    "@m3e/list": { "optional": true },
    "@m3e/nav-menu": { "optional": true },
    "@m3e/option": { "optional": true },
    "@m3e/radio-group": { "optional": true },
    "@m3e/select": { "optional": true },
    "@m3e/shape": { "optional": true },
    "@m3e/snackbar": { "optional": true },
    "@m3e/stepper": { "optional": true },
    "@m3e/switch": { "optional": true },
    "@m3e/textarea-autosize": { "optional": true },
    "@m3e/theme": { "optional": true },
    "@m3e/tooltip": { "optional": true }
  },
  "devDependencies": {
    "@sveltejs/vite-plugin-svelte": "^4.0.0",
    "@testing-library/jest-dom": "^6.5.0",
    "@testing-library/svelte": "^5.2.0",
    "@types/bun": "^1.2.0",
    "jsdom": "^25.0.0",
    "svelte": "^5.0.0",
    "svelte-check": "^4.0.0",
    "typescript": "^5.6.0",
    "vitest": "^2.1.0"
  }
}
```

- [ ] **Step 2: Write `packages/m3e-svelte/tsconfig.json`**

```json
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "rootDir": "src",
    "types": ["bun-types", "@testing-library/jest-dom"]
  },
  "include": ["src/**/*.ts", "src/**/*.svelte", "scripts/**/*.ts", "tests/**/*.ts"]
}
```

- [ ] **Step 3: Write `packages/m3e-svelte/svelte.config.js`**

```js
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/vite-plugin-svelte').SvelteConfig} */
export default {
  preprocess: vitePreprocess(),
  compilerOptions: { customElement: false },
};
```

- [ ] **Step 4: Write `packages/m3e-svelte/vitest.config.ts`**

```ts
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [svelte({ hot: false })],
  test: {
    environment: "jsdom",
    setupFiles: ["./tests/setup.ts"],
    include: ["tests/**/*.test.ts"],
    globals: true,
  },
  resolve: {
    conditions: ["browser"],
  },
});
```

- [ ] **Step 5: Write `packages/m3e-svelte/.gitignore`**

```
node_modules
.svelte-kit
dist
```

- [ ] **Step 6: Write `packages/m3e-svelte/README.md`** (placeholder; the generator overwrites later)

```markdown
# `@app/m3e-svelte`

Generated Svelte 5 wrappers for the `@m3e/*` Material 3 web components.

Run `bun run --filter @app/m3e-svelte generate` to regenerate after upgrading any `@m3e/*` peer.
```

- [ ] **Step 7: Write `packages/m3e-svelte/tests/setup.ts`**

```ts
import "@testing-library/jest-dom/vitest";

// Minimal custom-elements stub so wrappers don't crash in jsdom.
if (!("customElements" in globalThis)) {
  // biome-ignore lint/suspicious/noExplicitAny: jsdom stub
  (globalThis as any).customElements = {
    define: () => {},
    get: () => undefined,
    whenDefined: () => Promise.resolve(),
  };
}
```

- [ ] **Step 8: Install (bun workspace picks up the new package)**

Run: `bun install`
Expected: bun resolves the workspace; no error.

- [ ] **Step 9: Commit**

```bash
git add packages/m3e-svelte
git commit -m "chore(m3e-svelte): scaffold workspace package"
```

---

## Phase 2 — Runtime helpers

### Task 2: `runtime/env.ts` (browser flag)

**Files:**
- Create: `packages/m3e-svelte/src/runtime/env.ts`
- Create: `packages/m3e-svelte/tests/runtime/env.test.ts`

- [ ] **Step 1: Write the failing test**

```ts
// packages/m3e-svelte/tests/runtime/env.test.ts
import { describe, expect, test } from "vitest";
import { browser } from "../../src/runtime/env";

describe("runtime/env", () => {
  test("browser is true under jsdom (window + document present)", () => {
    expect(browser).toBe(true);
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `cd packages/m3e-svelte && bun run test`
Expected: FAIL — cannot resolve `../../src/runtime/env`.

- [ ] **Step 3: Implement `runtime/env.ts`**

```ts
// packages/m3e-svelte/src/runtime/env.ts
export const browser =
  typeof window !== "undefined" && typeof document !== "undefined";
```

- [ ] **Step 4: Run test to verify it passes**

Run: `cd packages/m3e-svelte && bun run test`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add packages/m3e-svelte/src/runtime/env.ts packages/m3e-svelte/tests/runtime/env.test.ts
git commit -m "feat(m3e-svelte): runtime browser flag"
```

### Task 3: `runtime/upgrade.ts` (property sync helpers)

**Files:**
- Create: `packages/m3e-svelte/src/runtime/upgrade.ts`
- Create: `packages/m3e-svelte/tests/runtime/upgrade.test.ts`

- [ ] **Step 1: Write the failing test**

```ts
// packages/m3e-svelte/tests/runtime/upgrade.test.ts
import { describe, expect, test, vi } from "vitest";
import { syncManagedProperty, syncProperty } from "../../src/runtime/upgrade";

describe("syncProperty", () => {
  test("writes the property on the element immediately", () => {
    const el = document.createElement("div") as HTMLElement & { foo?: string };
    syncProperty(el, "foo", "bar");
    expect(el.foo).toBe("bar");
  });
  test("no-op when element is undefined", () => {
    expect(() => syncProperty(undefined, "foo", "bar")).not.toThrow();
  });
});

describe("syncManagedProperty", () => {
  test("awaits whenDefined + updateComplete then writes property", async () => {
    const el = document.createElement("m3e-fake") as HTMLElement & {
      value?: string;
      updateComplete?: Promise<true>;
    };
    el.updateComplete = Promise.resolve(true);
    const spy = vi
      .spyOn(customElements, "whenDefined")
      .mockResolvedValue(class {} as CustomElementConstructor);
    syncManagedProperty(el, "value", "alpha");
    // Drain microtasks (whenDefined + tick + updateComplete + assignment).
    await new Promise<void>((resolve) => setTimeout(resolve, 0));
    await new Promise<void>((resolve) => setTimeout(resolve, 0));
    expect(el.value).toBe("alpha");
    spy.mockRestore();
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `cd packages/m3e-svelte && bun run test tests/runtime/upgrade.test.ts`
Expected: FAIL — module not found.

- [ ] **Step 3: Implement `runtime/upgrade.ts`**

```ts
// packages/m3e-svelte/src/runtime/upgrade.ts
import { tick } from "svelte";
import { browser } from "./env";

export function syncProperty<T>(
  el: HTMLElement | undefined,
  prop: string,
  value: T,
): void {
  if (!browser || !el) return;
  (el as unknown as Record<string, unknown>)[prop] = value;
}

export function syncManagedProperty<T>(
  el: HTMLElement | undefined,
  prop: string,
  value: T,
): void {
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

- [ ] **Step 4: Run test to verify it passes**

Run: `cd packages/m3e-svelte && bun run test tests/runtime/upgrade.test.ts`
Expected: PASS (both `syncProperty` cases and the `syncManagedProperty` case).

- [ ] **Step 5: Commit**

```bash
git add packages/m3e-svelte/src/runtime/upgrade.ts packages/m3e-svelte/tests/runtime/upgrade.test.ts
git commit -m "feat(m3e-svelte): property sync helpers for upgrade race"
```

### Task 4: `runtime/Slot.svelte` (snippet → named slot)

**Files:**
- Create: `packages/m3e-svelte/src/runtime/Slot.svelte`
- Create: `packages/m3e-svelte/tests/runtime/slot.test.ts`

- [ ] **Step 1: Write the failing test**

```ts
// packages/m3e-svelte/tests/runtime/slot.test.ts
import { render } from "@testing-library/svelte";
import { describe, expect, test } from "vitest";
import Probe from "./fixtures/SlotProbe.svelte";

describe("runtime/Slot", () => {
  test("renders the wrapper div with the named slot when snippet present", () => {
    const { container } = render(Probe, { props: { provide: true } });
    const wrapper = container.querySelector('[slot="icon"]');
    expect(wrapper).toBeTruthy();
    expect(wrapper?.textContent).toBe("X");
    expect((wrapper as HTMLElement).style.display).toBe("contents");
  });

  test("renders nothing when snippet is absent", () => {
    const { container } = render(Probe, { props: { provide: false } });
    expect(container.querySelector('[slot="icon"]')).toBeNull();
  });
});
```

- [ ] **Step 2: Create the test fixture**

```svelte
<!-- packages/m3e-svelte/tests/runtime/fixtures/SlotProbe.svelte -->
<script lang="ts">
  import type { Snippet } from "svelte";
  import Slot from "../../../src/runtime/Slot.svelte";
  let { provide }: { provide: boolean } = $props();
  const icon: Snippet = $derived(provide ? probe : (undefined as unknown as Snippet));
</script>

{#snippet probe()}X{/snippet}
<Slot snippet={icon} name="icon" />
```

- [ ] **Step 3: Run test to verify it fails**

Run: `cd packages/m3e-svelte && bun run test tests/runtime/slot.test.ts`
Expected: FAIL — `Slot.svelte` not found.

- [ ] **Step 4: Implement `runtime/Slot.svelte`**

```svelte
<!-- packages/m3e-svelte/src/runtime/Slot.svelte -->
<script lang="ts">
  import type { Snippet } from "svelte";
  let { snippet, name }: { snippet?: Snippet; name: string } = $props();
</script>

{#if snippet}
  <div slot={name} style="display:contents">{@render snippet()}</div>
{/if}
```

- [ ] **Step 5: Run test to verify it passes**

Run: `cd packages/m3e-svelte && bun run test tests/runtime/slot.test.ts`
Expected: PASS.

- [ ] **Step 6: Commit**

```bash
git add packages/m3e-svelte/src/runtime/Slot.svelte packages/m3e-svelte/tests/runtime/
git commit -m "feat(m3e-svelte): Slot.svelte snippet-to-named-slot helper"
```

---

## Phase 3 — Codegen pipeline (scaffolding only)

### Task 5: CEM types + manifest loader

**Files:**
- Create: `packages/m3e-svelte/scripts/cem-types.ts`
- Create: `packages/m3e-svelte/scripts/load-manifests.ts`
- Create: `packages/m3e-svelte/tests/scripts/load-manifests.test.ts`

- [ ] **Step 1: Write CEM types — the minimum subset we read**

```ts
// packages/m3e-svelte/scripts/cem-types.ts
export interface CemAttribute {
  name: string;
  type?: { text?: string | null };
  default?: string | null;
  description?: string;
}

export interface CemSlot {
  name: string;
  description?: string;
}

export interface CemEvent {
  name: string;
  type?: { text?: string | null };
  description?: string;
}

export interface CemCssProperty {
  name: string;
  description?: string;
}

export interface CemClassDeclaration {
  kind: "class";
  name: string;
  tagName?: string;
  description?: string;
  attributes?: CemAttribute[];
  slots?: CemSlot[];
  events?: CemEvent[];
  cssProperties?: CemCssProperty[];
}

export interface CemModule {
  kind: "javascript-module";
  path: string;
  declarations: Array<CemClassDeclaration | { kind: string }>;
}

export interface Cem {
  schemaVersion: string;
  modules: CemModule[];
}

export interface LoadedElement {
  /** e.g. "@m3e/button" */
  pkg: string;
  /** e.g. "m3e-button" */
  tag: string;
  /** e.g. "M3eButtonElement" */
  className: string;
  declaration: CemClassDeclaration;
}
```

- [ ] **Step 2: Implement `load-manifests.ts`**

```ts
// packages/m3e-svelte/scripts/load-manifests.ts
import { existsSync, readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import type { Cem, CemClassDeclaration, LoadedElement } from "./cem-types";

const here = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(here, "../../..");

export function loadManifests(packages: string[]): LoadedElement[] {
  const out: LoadedElement[] = [];
  for (const pkg of packages) {
    const cemPath = resolve(
      repoRoot,
      "node_modules",
      pkg,
      "dist/custom-elements.json",
    );
    if (!existsSync(cemPath)) {
      console.warn(`[m3e-svelte] skipping ${pkg}: no custom-elements.json`);
      continue;
    }
    const cem = JSON.parse(readFileSync(cemPath, "utf8")) as Cem;
    for (const mod of cem.modules ?? []) {
      for (const decl of mod.declarations ?? []) {
        if (decl.kind !== "class") continue;
        const klass = decl as CemClassDeclaration;
        if (!klass.tagName) continue;
        out.push({
          pkg,
          tag: klass.tagName,
          className: klass.name,
          declaration: klass,
        });
      }
    }
  }
  return out;
}

export function listPeerPackages(pkgJsonPath: string): string[] {
  const json = JSON.parse(readFileSync(pkgJsonPath, "utf8")) as {
    peerDependencies?: Record<string, string>;
  };
  return Object.keys(json.peerDependencies ?? {}).filter((k) =>
    k.startsWith("@m3e/"),
  );
}
```

- [ ] **Step 3: Write the test**

```ts
// packages/m3e-svelte/tests/scripts/load-manifests.test.ts
import { resolve } from "node:path";
import { describe, expect, test } from "vitest";
import {
  listPeerPackages,
  loadManifests,
} from "../../scripts/load-manifests";

const pkgJson = resolve(__dirname, "../../package.json");

describe("load-manifests", () => {
  test("discovers @m3e/* peers from package.json", () => {
    const peers = listPeerPackages(pkgJson);
    expect(peers).toContain("@m3e/button");
    expect(peers.length).toBeGreaterThanOrEqual(20);
  });
  test("loads element declarations including tagName", () => {
    const elements = loadManifests(["@m3e/button"]);
    const button = elements.find((e) => e.tag === "m3e-button");
    expect(button).toBeDefined();
    expect(button?.className).toBe("M3eButtonElement");
    expect(button?.declaration.attributes?.length ?? 0).toBeGreaterThan(5);
  });
  test("chips package exposes multiple tags", () => {
    const elements = loadManifests(["@m3e/chips"]);
    const tags = elements.map((e) => e.tag);
    expect(tags).toContain("m3e-chip");
    expect(tags).toContain("m3e-filter-chip");
    expect(tags).toContain("m3e-chip-set");
  });
});
```

- [ ] **Step 4: Run the test**

Run: `cd packages/m3e-svelte && bun run test tests/scripts/load-manifests.test.ts`
Expected: PASS — at least 20 peers discovered, button + chips loaded.

- [ ] **Step 5: Commit**

```bash
git add packages/m3e-svelte/scripts/ packages/m3e-svelte/tests/scripts/
git commit -m "feat(m3e-svelte): load custom-elements.json manifests"
```

### Task 6: Element classifier

**Files:**
- Create: `packages/m3e-svelte/scripts/classify.ts`
- Create: `packages/m3e-svelte/tests/scripts/classify.test.ts`

- [ ] **Step 1: Write the test**

```ts
// packages/m3e-svelte/tests/scripts/classify.test.ts
import { describe, expect, test } from "vitest";
import { classify } from "../../scripts/classify";

const mkAttrs = (names: string[]) =>
  names.map((n) => ({ name: n, type: { text: "boolean" } }));

describe("classify", () => {
  test("passive default", () => {
    expect(classify("m3e-card", [])).toBe("passive");
    expect(classify("m3e-icon", [])).toBe("passive");
  });
  test("selection-managed by tag substring", () => {
    expect(classify("m3e-nav-menu", [])).toBe("selection-managed");
    expect(classify("m3e-select", [])).toBe("selection-managed");
    expect(classify("m3e-radio-group", [])).toBe("selection-managed");
    expect(classify("m3e-filter-chip-set", [])).toBe("selection-managed");
    expect(classify("m3e-selection-list", [])).toBe("selection-managed");
  });
  test("property-driven via state attribute", () => {
    expect(classify("m3e-dialog", mkAttrs(["open"]))).toBe("property-driven");
    expect(classify("m3e-snackbar", mkAttrs(["open"]))).toBe(
      "property-driven",
    );
    expect(classify("m3e-collapsible", mkAttrs(["expanded"]))).toBe(
      "property-driven",
    );
  });
  test("selection-managed wins over property-driven when both apply", () => {
    expect(classify("m3e-select", mkAttrs(["open"]))).toBe("selection-managed");
  });
});
```

- [ ] **Step 2: Implement `classify.ts`**

```ts
// packages/m3e-svelte/scripts/classify.ts
import type { CemAttribute } from "./cem-types";

export type Classification =
  | "passive"
  | "property-driven"
  | "selection-managed";

const SELECTION_MANAGED_PATTERNS = [
  /nav-menu(?:$|-)/,
  /^m3e-select$/,
  /^m3e-radio-group$/,
  /-set$/,
  /-list$/,
  /^m3e-selection-/,
];

const PROPERTY_STATE_ATTRS = new Set(["open", "expanded", "checked"]);

export function classify(
  tag: string,
  attributes: CemAttribute[],
): Classification {
  for (const re of SELECTION_MANAGED_PATTERNS) {
    if (re.test(tag)) return "selection-managed";
  }
  for (const a of attributes) {
    if (PROPERTY_STATE_ATTRS.has(a.name)) return "property-driven";
  }
  return "passive";
}
```

- [ ] **Step 3: Run the test**

Run: `cd packages/m3e-svelte && bun run test tests/scripts/classify.test.ts`
Expected: PASS.

- [ ] **Step 4: Commit**

```bash
git add packages/m3e-svelte/scripts/classify.ts packages/m3e-svelte/tests/scripts/classify.test.ts
git commit -m "feat(m3e-svelte): element classifier"
```

### Task 7: Naming helpers

**Files:**
- Create: `packages/m3e-svelte/scripts/naming.ts`
- Create: `packages/m3e-svelte/tests/scripts/naming.test.ts`

- [ ] **Step 1: Write the test**

```ts
// packages/m3e-svelte/tests/scripts/naming.test.ts
import { describe, expect, test } from "vitest";
import {
  componentName,
  kebabToCamel,
  slotPropName,
} from "../../scripts/naming";

describe("naming", () => {
  test("kebabToCamel", () => {
    expect(kebabToCamel("disabled-interactive")).toBe("disabledInteractive");
    expect(kebabToCamel("disabled")).toBe("disabled");
    expect(kebabToCamel("aria-label")).toBe("ariaLabel");
  });
  test("componentName from tag", () => {
    expect(componentName("m3e-button")).toBe("Button");
    expect(componentName("m3e-nav-menu-item")).toBe("NavMenuItem");
    expect(componentName("m3e-filter-chip-set")).toBe("FilterChipSet");
  });
  test("slotPropName collides → append Snippet", () => {
    expect(slotPropName("", new Set())).toBe("children");
    expect(slotPropName("icon", new Set())).toBe("icon");
    expect(slotPropName("selected", new Set(["selected"]))).toBe(
      "selectedSnippet",
    );
    expect(slotPropName("trailing-icon", new Set())).toBe("trailingIcon");
  });
});
```

- [ ] **Step 2: Implement `naming.ts`**

```ts
// packages/m3e-svelte/scripts/naming.ts
export function kebabToCamel(input: string): string {
  return input.replace(/-([a-z])/g, (_m, ch: string) => ch.toUpperCase());
}

export function componentName(tag: string): string {
  return tag
    .replace(/^m3e-/, "")
    .split("-")
    .map((seg) => (seg ? seg[0]!.toUpperCase() + seg.slice(1) : ""))
    .join("");
}

export function slotPropName(
  slotName: string,
  reservedAttrNames: Set<string>,
): string {
  if (slotName === "") return "children";
  const camel = kebabToCamel(slotName);
  if (reservedAttrNames.has(camel)) return `${camel}Snippet`;
  return camel;
}
```

- [ ] **Step 3: Run the test**

Run: `cd packages/m3e-svelte && bun run test tests/scripts/naming.test.ts`
Expected: PASS.

- [ ] **Step 4: Commit**

```bash
git add packages/m3e-svelte/scripts/naming.ts packages/m3e-svelte/tests/scripts/naming.test.ts
git commit -m "feat(m3e-svelte): naming helpers"
```

---

## Phase 4 — Passive archetype

### Task 8: TS type rendering helpers

**Files:**
- Create: `packages/m3e-svelte/scripts/render-types.ts`
- Create: `packages/m3e-svelte/tests/scripts/render-types.test.ts`

- [ ] **Step 1: Write the test**

```ts
// packages/m3e-svelte/tests/scripts/render-types.test.ts
import { describe, expect, test } from "vitest";
import { renderAttrType } from "../../scripts/render-types";

describe("renderAttrType", () => {
  test("boolean → boolean", () => {
    expect(renderAttrType("boolean")).toBe("boolean");
  });
  test("string → string", () => {
    expect(renderAttrType("string")).toBe("string");
  });
  test("string|null → string | null", () => {
    expect(renderAttrType("string | null")).toBe("string | null");
  });
  test("enum string union preserved", () => {
    expect(
      renderAttrType('"filled" | "tonal" | "elevated" | "outlined" | "text"'),
    ).toBe('"filled" | "tonal" | "elevated" | "outlined" | "text"');
  });
  test("known enum identifier passed through", () => {
    expect(renderAttrType("ButtonVariant")).toBe("ButtonVariant");
  });
  test("missing type defaults to string", () => {
    expect(renderAttrType(null)).toBe("string");
    expect(renderAttrType(undefined)).toBe("string");
  });
});
```

- [ ] **Step 2: Implement `render-types.ts`**

```ts
// packages/m3e-svelte/scripts/render-types.ts
export function renderAttrType(text: string | null | undefined): string {
  if (text == null || text === "") return "string";
  return text.replace(/\s+/g, " ").trim();
}

/** Identifiers referenced inside the rendered type that need importing. */
export function extractIdentifiers(text: string | null | undefined): string[] {
  if (!text) return [];
  const ids = new Set<string>();
  for (const m of text.matchAll(/\b([A-Z][A-Za-z0-9]+)\b/g)) {
    const ident = m[1]!;
    if (ident === "Event" || ident === "CustomEvent") continue;
    ids.add(ident);
  }
  return [...ids];
}
```

- [ ] **Step 3: Run the test**

Run: `cd packages/m3e-svelte && bun run test tests/scripts/render-types.test.ts`
Expected: PASS.

- [ ] **Step 4: Commit**

```bash
git add packages/m3e-svelte/scripts/render-types.ts packages/m3e-svelte/tests/scripts/render-types.test.ts
git commit -m "feat(m3e-svelte): attribute type rendering"
```

### Task 9: Passive wrapper template + Card smoke

**Files:**
- Create: `packages/m3e-svelte/scripts/templates/passive.ts`
- Create: `packages/m3e-svelte/scripts/generate-one.ts`
- Create: `packages/m3e-svelte/tests/generator/passive-card.test.ts`

- [ ] **Step 1: Write the test (drives `generate-one` for a single element)**

```ts
// packages/m3e-svelte/tests/generator/passive-card.test.ts
import { describe, expect, test } from "vitest";
import { generateOne } from "../../scripts/generate-one";
import { loadManifests } from "../../scripts/load-manifests";

describe("generate-one (passive)", () => {
  test("Card wrapper has expected structure", () => {
    const [card] = loadManifests(["@m3e/card"]).filter(
      (e) => e.tag === "m3e-card",
    );
    expect(card).toBeDefined();
    const out = generateOne(card!);
    expect(out.componentName).toBe("Card");
    expect(out.filename).toBe("Card.svelte");
    expect(out.classification).toBe("passive");
    expect(out.contents).toContain("// @generated");
    expect(out.contents).toContain('if (browser) void import("@m3e/card");');
    expect(out.contents).toContain('import type { M3eCardElement }');
    expect(out.contents).toContain("<m3e-card");
    expect(out.contents).toContain("bind:this={element}");
    expect(out.contents).toContain('interface Props');
  });
});
```

- [ ] **Step 2: Implement the passive template**

```ts
// packages/m3e-svelte/scripts/templates/passive.ts
import type { LoadedElement } from "../cem-types";
import { componentName, kebabToCamel, slotPropName } from "../naming";
import { extractIdentifiers, renderAttrType } from "../render-types";

export interface RenderedFile {
  componentName: string;
  filename: string;
  classification: "passive" | "property-driven" | "selection-managed";
  contents: string;
}

export function renderPassive(el: LoadedElement): RenderedFile {
  const { pkg, tag, className, declaration: d } = el;
  const attrs = d.attributes ?? [];
  const slots = d.slots ?? [];
  const events = d.events ?? [];

  const attrCamelNames = new Set(attrs.map((a) => kebabToCamel(a.name)));
  const slotNames = slots.map((s) => slotPropName(s.name, attrCamelNames));

  const extraIdents = new Set<string>();
  for (const a of attrs) {
    for (const id of extractIdentifiers(a.type?.text)) extraIdents.add(id);
  }

  const propLines: string[] = [];
  for (const a of attrs) {
    const camel = kebabToCamel(a.name);
    const ty = renderAttrType(a.type?.text);
    if (a.description) propLines.push(`  /** ${a.description} */`);
    propLines.push(`  ${camel}?: ${ty};`);
  }
  for (let i = 0; i < slots.length; i++) {
    const s = slots[i]!;
    const name = slotNames[i]!;
    if (s.description) propLines.push(`  /** ${s.description} */`);
    propLines.push(`  ${name}?: Snippet;`);
  }
  for (const e of events) {
    const handler = `on${e.name}`;
    const ty = e.type?.text ?? "Event";
    if (e.description) propLines.push(`  /** ${e.description} */`);
    propLines.push(`  ${handler}?: (e: ${ty}) => void;`);
  }
  propLines.push(`  element?: ${className};`);

  const destruct = [
    ...attrs.map((a) => kebabToCamel(a.name)),
    ...slotNames,
    ...events.map((e) => `on${e.name}`),
    "element = $bindable()",
  ].join(", ");

  const elementAttrs: string[] = [];
  for (const a of attrs) {
    const camel = kebabToCamel(a.name);
    const ty = renderAttrType(a.type?.text);
    if (ty === "boolean") {
      elementAttrs.push(`${a.name}={${camel} || undefined}`);
    } else if (a.name === camel) {
      elementAttrs.push(`{${camel}}`);
    } else {
      elementAttrs.push(`${a.name}={${camel}}`);
    }
  }
  for (const e of events) elementAttrs.push(`on${e.name}={on${e.name}}`);

  const slotBody = slots
    .map(
      (s, i) =>
        `  <Slot snippet={${slotNames[i]}} name="${s.name === "" ? "" : s.name}" />`,
    )
    .filter((_, i) => slots[i]!.name !== "")
    .join("\n");
  const defaultSlot = slots.some((s) => s.name === "")
    ? "  {@render children?.()}"
    : "";

  const importLines: string[] = [
    `  import type { Snippet } from "svelte";`,
    `  import { browser } from "../runtime/env";`,
    `  import Slot from "../runtime/Slot.svelte";`,
    `  if (browser) void import("${pkg}");`,
    `  import type { ${className} } from "${pkg}";`,
  ];
  if (extraIdents.size > 0) {
    importLines.push(
      `  import type { ${[...extraIdents].join(", ")} } from "${pkg}";`,
    );
  }

  const contents = `<!-- @generated by scripts/generate.ts — do not edit -->
<script lang="ts">
${importLines.join("\n")}

  interface Props {
${propLines.join("\n")}
  }

  let { ${destruct} }: Props = $props();
</script>

<${tag}
  bind:this={element}
  ${elementAttrs.join("\n  ")}
>
${[slotBody, defaultSlot].filter(Boolean).join("\n")}
</${tag}>
`;

  return {
    componentName: componentName(tag),
    filename: `${componentName(tag)}.svelte`,
    classification: "passive",
    contents,
  };
}
```

- [ ] **Step 3: Implement `generate-one.ts` (dispatch by classification)**

```ts
// packages/m3e-svelte/scripts/generate-one.ts
import type { LoadedElement } from "./cem-types";
import { classify } from "./classify";
import { renderPassive, type RenderedFile } from "./templates/passive";

export function generateOne(el: LoadedElement): RenderedFile {
  const c = classify(el.tag, el.declaration.attributes ?? []);
  switch (c) {
    case "passive":
      return renderPassive(el);
    case "property-driven":
    case "selection-managed":
      // Implemented in later tasks; fall back to passive for now.
      return { ...renderPassive(el), classification: c };
  }
}
```

- [ ] **Step 4: Run the test**

Run: `cd packages/m3e-svelte && bun run test tests/generator/passive-card.test.ts`
Expected: PASS.

- [ ] **Step 5: Validate the generated Card.svelte compiles**

Add this test file:

```ts
// packages/m3e-svelte/tests/generator/passive-compile.test.ts
import { compile } from "svelte/compiler";
import { describe, expect, test } from "vitest";
import { generateOne } from "../../scripts/generate-one";
import { loadManifests } from "../../scripts/load-manifests";

describe("passive wrappers compile", () => {
  test("Card", () => {
    const [card] = loadManifests(["@m3e/card"]);
    const out = generateOne(card!);
    const result = compile(out.contents, {
      filename: out.filename,
      generate: "client",
    });
    expect(result.warnings.filter((w) => w.code !== "a11y_no_static_element_interactions")).toHaveLength(0);
    expect(result.js.code).toContain("M3eCardElement");
  });
});
```

Run: `cd packages/m3e-svelte && bun run test tests/generator/passive-compile.test.ts`
Expected: PASS.

- [ ] **Step 6: Commit**

```bash
git add packages/m3e-svelte/scripts/templates/ packages/m3e-svelte/scripts/generate-one.ts packages/m3e-svelte/tests/generator/
git commit -m "feat(m3e-svelte): passive wrapper template + Card smoke"
```

---

## Phase 5 — Property-driven archetype

### Task 10: Property-driven template (Dialog)

**Files:**
- Create: `packages/m3e-svelte/scripts/templates/property-driven.ts`
- Modify: `packages/m3e-svelte/scripts/generate-one.ts:1-20`
- Create: `packages/m3e-svelte/tests/generator/property-dialog.test.ts`

- [ ] **Step 1: Write the test**

```ts
// packages/m3e-svelte/tests/generator/property-dialog.test.ts
import { compile } from "svelte/compiler";
import { describe, expect, test } from "vitest";
import { generateOne } from "../../scripts/generate-one";
import { loadManifests } from "../../scripts/load-manifests";

describe("property-driven Dialog", () => {
  test("emits bindable open + syncProperty effect", () => {
    const [dlg] = loadManifests(["@m3e/dialog"]).filter(
      (e) => e.tag === "m3e-dialog",
    );
    const out = generateOne(dlg!);
    expect(out.classification).toBe("property-driven");
    expect(out.contents).toContain("open = $bindable(false)");
    expect(out.contents).toContain("syncProperty(element, \"open\", open)");
    // `open` must NOT be rendered as an attribute on the tag.
    expect(out.contents).not.toMatch(/<m3e-dialog[^>]*\sopen=/);
  });
  test("compiles", () => {
    const [dlg] = loadManifests(["@m3e/dialog"]).filter(
      (e) => e.tag === "m3e-dialog",
    );
    const out = generateOne(dlg!);
    const result = compile(out.contents, {
      filename: out.filename,
      generate: "client",
    });
    expect(result.js.code).toContain("syncProperty");
  });
});
```

- [ ] **Step 2: Implement `templates/property-driven.ts`**

```ts
// packages/m3e-svelte/scripts/templates/property-driven.ts
import type { LoadedElement } from "../cem-types";
import { componentName, kebabToCamel, slotPropName } from "../naming";
import { extractIdentifiers, renderAttrType } from "../render-types";
import type { RenderedFile } from "./passive";

const STATE_ATTRS = new Set(["open", "expanded", "checked"]);

export function renderPropertyDriven(el: LoadedElement): RenderedFile {
  const { pkg, tag, className, declaration: d } = el;
  const attrs = d.attributes ?? [];
  const slots = d.slots ?? [];
  const events = d.events ?? [];

  const stateAttrs = attrs.filter((a) => STATE_ATTRS.has(a.name));
  const passiveAttrs = attrs.filter((a) => !STATE_ATTRS.has(a.name));

  const attrCamelNames = new Set(attrs.map((a) => kebabToCamel(a.name)));
  const slotNames = slots.map((s) => slotPropName(s.name, attrCamelNames));

  const extraIdents = new Set<string>();
  for (const a of attrs) {
    for (const id of extractIdentifiers(a.type?.text)) extraIdents.add(id);
  }

  const propLines: string[] = [];
  for (const a of attrs) {
    const camel = kebabToCamel(a.name);
    const ty = renderAttrType(a.type?.text);
    if (a.description) propLines.push(`  /** ${a.description} */`);
    propLines.push(`  ${camel}?: ${ty};`);
  }
  for (let i = 0; i < slots.length; i++) {
    const s = slots[i]!;
    const name = slotNames[i]!;
    if (s.description) propLines.push(`  /** ${s.description} */`);
    propLines.push(`  ${name}?: Snippet;`);
  }
  for (const e of events) {
    const handler = `on${e.name}`;
    const ty = e.type?.text ?? "Event";
    propLines.push(`  ${handler}?: (e: ${ty}) => void;`);
  }
  propLines.push(`  element?: ${className};`);

  const destructParts: string[] = [];
  for (const a of passiveAttrs) destructParts.push(kebabToCamel(a.name));
  for (const a of stateAttrs) {
    const camel = kebabToCamel(a.name);
    destructParts.push(`${camel} = $bindable(false)`);
  }
  destructParts.push(...slotNames);
  destructParts.push(...events.map((e) => `on${e.name}`));
  destructParts.push("element = $bindable()");

  const elementAttrs: string[] = [];
  for (const a of passiveAttrs) {
    const camel = kebabToCamel(a.name);
    const ty = renderAttrType(a.type?.text);
    if (ty === "boolean") {
      elementAttrs.push(`${a.name}={${camel} || undefined}`);
    } else if (a.name === camel) {
      elementAttrs.push(`{${camel}}`);
    } else {
      elementAttrs.push(`${a.name}={${camel}}`);
    }
  }
  for (const e of events) elementAttrs.push(`on${e.name}={on${e.name}}`);

  const effects = stateAttrs
    .map((a) => {
      const camel = kebabToCamel(a.name);
      return `  $effect(() => syncProperty(element, "${a.name}", ${camel}));`;
    })
    .join("\n");

  const slotBody = slots
    .map(
      (s, i) =>
        s.name === ""
          ? ""
          : `  <Slot snippet={${slotNames[i]}} name="${s.name}" />`,
    )
    .filter(Boolean)
    .join("\n");
  const defaultSlot = slots.some((s) => s.name === "")
    ? "  {@render children?.()}"
    : "";

  const importLines: string[] = [
    `  import type { Snippet } from "svelte";`,
    `  import { browser } from "../runtime/env";`,
    `  import { syncProperty } from "../runtime/upgrade";`,
    `  import Slot from "../runtime/Slot.svelte";`,
    `  if (browser) void import("${pkg}");`,
    `  import type { ${className} } from "${pkg}";`,
  ];
  if (extraIdents.size > 0) {
    importLines.push(
      `  import type { ${[...extraIdents].join(", ")} } from "${pkg}";`,
    );
  }

  const contents = `<!-- @generated by scripts/generate.ts — do not edit -->
<script lang="ts">
${importLines.join("\n")}

  interface Props {
${propLines.join("\n")}
  }

  let { ${destructParts.join(", ")} }: Props = $props();

${effects}
</script>

<${tag}
  bind:this={element}
  ${elementAttrs.join("\n  ")}
>
${[slotBody, defaultSlot].filter(Boolean).join("\n")}
</${tag}>
`;

  return {
    componentName: componentName(tag),
    filename: `${componentName(tag)}.svelte`,
    classification: "property-driven",
    contents,
  };
}
```

- [ ] **Step 3: Wire into `generate-one.ts`**

Replace the entire file:

```ts
// packages/m3e-svelte/scripts/generate-one.ts
import type { LoadedElement } from "./cem-types";
import { classify } from "./classify";
import { renderPassive, type RenderedFile } from "./templates/passive";
import { renderPropertyDriven } from "./templates/property-driven";

export function generateOne(el: LoadedElement): RenderedFile {
  const c = classify(el.tag, el.declaration.attributes ?? []);
  switch (c) {
    case "passive":
      return renderPassive(el);
    case "property-driven":
      return renderPropertyDriven(el);
    case "selection-managed":
      // Implemented in next phase; fall back to property-driven.
      return { ...renderPropertyDriven(el), classification: c };
  }
}
```

- [ ] **Step 4: Run the test**

Run: `cd packages/m3e-svelte && bun run test tests/generator/property-dialog.test.ts`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add packages/m3e-svelte/scripts/templates/property-driven.ts packages/m3e-svelte/scripts/generate-one.ts packages/m3e-svelte/tests/generator/property-dialog.test.ts
git commit -m "feat(m3e-svelte): property-driven template"
```

---

## Phase 6 — Selection-managed archetype

### Task 11: Selection-managed template (Select)

**Files:**
- Create: `packages/m3e-svelte/scripts/templates/selection-managed.ts`
- Modify: `packages/m3e-svelte/scripts/generate-one.ts:1-20`
- Create: `packages/m3e-svelte/tests/generator/selection-select.test.ts`

- [ ] **Step 1: Write the test**

```ts
// packages/m3e-svelte/tests/generator/selection-select.test.ts
import { compile } from "svelte/compiler";
import { describe, expect, test } from "vitest";
import { generateOne } from "../../scripts/generate-one";
import { loadManifests } from "../../scripts/load-manifests";

describe("selection-managed Select", () => {
  test("uses syncManagedProperty for value", () => {
    const [sel] = loadManifests(["@m3e/select"]).filter(
      (e) => e.tag === "m3e-select",
    );
    const out = generateOne(sel!);
    expect(out.classification).toBe("selection-managed");
    expect(out.contents).toContain("value = $bindable");
    expect(out.contents).toContain(
      'syncManagedProperty(element, "value", value)',
    );
    expect(out.contents).toContain("dropNullChange");
  });
  test("compiles", () => {
    const [sel] = loadManifests(["@m3e/select"]).filter(
      (e) => e.tag === "m3e-select",
    );
    const out = generateOne(sel!);
    const result = compile(out.contents, {
      filename: out.filename,
      generate: "client",
    });
    expect(result.js.code).toContain("syncManagedProperty");
  });
  test("RadioGroup also classified selection-managed", () => {
    const [rg] = loadManifests(["@m3e/radio-group"]).filter(
      (e) => e.tag === "m3e-radio-group",
    );
    const out = generateOne(rg!);
    expect(out.classification).toBe("selection-managed");
  });
});
```

- [ ] **Step 2: Implement `templates/selection-managed.ts`**

```ts
// packages/m3e-svelte/scripts/templates/selection-managed.ts
import type { LoadedElement } from "../cem-types";
import { componentName, kebabToCamel, slotPropName } from "../naming";
import { extractIdentifiers, renderAttrType } from "../render-types";
import type { RenderedFile } from "./passive";

const MANAGED_ATTRS = new Set([
  "value",
  "selected",
  "open",
  "expanded",
  "checked",
]);

export function renderSelectionManaged(el: LoadedElement): RenderedFile {
  const { pkg, tag, className, declaration: d } = el;
  const attrs = d.attributes ?? [];
  const slots = d.slots ?? [];
  const events = d.events ?? [];

  const managedAttrs = attrs.filter((a) => MANAGED_ATTRS.has(a.name));
  const passiveAttrs = attrs.filter((a) => !MANAGED_ATTRS.has(a.name));

  const attrCamelNames = new Set(attrs.map((a) => kebabToCamel(a.name)));
  const slotNames = slots.map((s) => slotPropName(s.name, attrCamelNames));

  const extraIdents = new Set<string>();
  for (const a of attrs) {
    for (const id of extractIdentifiers(a.type?.text)) extraIdents.add(id);
  }

  const propLines: string[] = [];
  for (const a of attrs) {
    const camel = kebabToCamel(a.name);
    const ty = renderAttrType(a.type?.text);
    if (a.description) propLines.push(`  /** ${a.description} */`);
    propLines.push(`  ${camel}?: ${ty};`);
  }
  for (let i = 0; i < slots.length; i++) {
    const s = slots[i]!;
    const name = slotNames[i]!;
    if (s.description) propLines.push(`  /** ${s.description} */`);
    propLines.push(`  ${name}?: Snippet;`);
  }
  for (const e of events) {
    const handler = `on${e.name}`;
    const ty = e.type?.text ?? "Event";
    propLines.push(`  ${handler}?: (e: ${ty}) => void;`);
  }
  propLines.push(`  element?: ${className};`);

  const destructParts: string[] = [];
  for (const a of passiveAttrs) destructParts.push(kebabToCamel(a.name));
  for (const a of managedAttrs) {
    const camel = kebabToCamel(a.name);
    const renderedTy = renderAttrType(a.type?.text);
    const fallback = renderedTy === "boolean" ? "false" : "undefined";
    destructParts.push(`${camel} = $bindable(${fallback})`);
  }
  destructParts.push(...slotNames);
  destructParts.push(...events.map((e) => `on${e.name}`));
  destructParts.push("element = $bindable()");

  const elementAttrs: string[] = [];
  for (const a of passiveAttrs) {
    const camel = kebabToCamel(a.name);
    const ty = renderAttrType(a.type?.text);
    if (ty === "boolean") {
      elementAttrs.push(`${a.name}={${camel} || undefined}`);
    } else if (a.name === camel) {
      elementAttrs.push(`{${camel}}`);
    } else {
      elementAttrs.push(`${a.name}={${camel}}`);
    }
  }

  // Wrap onchange / oninput to drop null reads emitted between deselect+reselect.
  for (const e of events) {
    const handler = `on${e.name}`;
    if (e.name === "change" || e.name === "input") {
      elementAttrs.push(`${handler}={dropNullChange(${handler})}`);
    } else {
      elementAttrs.push(`${handler}={${handler}}`);
    }
  }

  const effects = managedAttrs
    .map((a) => {
      const camel = kebabToCamel(a.name);
      return `  $effect(() => syncManagedProperty(element, "${a.name}", ${camel}));`;
    })
    .join("\n");

  const slotBody = slots
    .map(
      (s, i) =>
        s.name === ""
          ? ""
          : `  <Slot snippet={${slotNames[i]}} name="${s.name}" />`,
    )
    .filter(Boolean)
    .join("\n");
  const defaultSlot = slots.some((s) => s.name === "")
    ? "  {@render children?.()}"
    : "";

  const importLines: string[] = [
    `  import type { Snippet } from "svelte";`,
    `  import { browser } from "../runtime/env";`,
    `  import { syncManagedProperty } from "../runtime/upgrade";`,
    `  import Slot from "../runtime/Slot.svelte";`,
    `  if (browser) void import("${pkg}");`,
    `  import type { ${className} } from "${pkg}";`,
  ];
  if (extraIdents.size > 0) {
    importLines.push(
      `  import type { ${[...extraIdents].join(", ")} } from "${pkg}";`,
    );
  }

  const contents = `<!-- @generated by scripts/generate.ts — do not edit -->
<script lang="ts">
${importLines.join("\n")}

  interface Props {
${propLines.join("\n")}
  }

  let { ${destructParts.join(", ")} }: Props = $props();

  function dropNullChange(handler?: (e: Event) => void) {
    if (!handler) return undefined;
    return (e: Event) => {
      const v = (e.target as { value?: unknown } | null)?.value;
      if (v == null) return;
      handler(e);
    };
  }

${effects}
</script>

<${tag}
  bind:this={element}
  ${elementAttrs.join("\n  ")}
>
${[slotBody, defaultSlot].filter(Boolean).join("\n")}
</${tag}>
`;

  return {
    componentName: componentName(tag),
    filename: `${componentName(tag)}.svelte`,
    classification: "selection-managed",
    contents,
  };
}
```

- [ ] **Step 3: Wire into `generate-one.ts`**

Replace the file:

```ts
// packages/m3e-svelte/scripts/generate-one.ts
import type { LoadedElement } from "./cem-types";
import { classify } from "./classify";
import { renderPassive, type RenderedFile } from "./templates/passive";
import { renderPropertyDriven } from "./templates/property-driven";
import { renderSelectionManaged } from "./templates/selection-managed";

export function generateOne(el: LoadedElement): RenderedFile {
  const c = classify(el.tag, el.declaration.attributes ?? []);
  switch (c) {
    case "passive":
      return renderPassive(el);
    case "property-driven":
      return renderPropertyDriven(el);
    case "selection-managed":
      return renderSelectionManaged(el);
  }
}
```

- [ ] **Step 4: Run the test**

Run: `cd packages/m3e-svelte && bun run test tests/generator/selection-select.test.ts`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add packages/m3e-svelte/scripts/templates/selection-managed.ts packages/m3e-svelte/scripts/generate-one.ts packages/m3e-svelte/tests/generator/selection-select.test.ts
git commit -m "feat(m3e-svelte): selection-managed template"
```

---

## Phase 7 — Whole-suite generation

### Task 12: Generator entry point (manifest + styles + barrel)

**Files:**
- Create: `packages/m3e-svelte/scripts/generate.ts`
- Create: `packages/m3e-svelte/scripts/render-styles.ts`
- Create: `packages/m3e-svelte/scripts/render-index.ts`
- Create: `packages/m3e-svelte/scripts/render-readme.ts`
- Create: `packages/m3e-svelte/tests/generator/full-suite.test.ts`

- [ ] **Step 1: Implement `render-styles.ts`**

```ts
// packages/m3e-svelte/scripts/render-styles.ts
import type { LoadedElement } from "./cem-types";

// Tags whose default rendering would flash before upgrade.
const FOUC_PATTERNS = [
  /dialog/,
  /menu/,
  /snackbar/,
  /tooltip/,
];

export function renderStyles(elements: LoadedElement[]): string {
  const tags = elements
    .map((e) => e.tag)
    .filter((tag) => FOUC_PATTERNS.some((p) => p.test(tag)))
    .sort();
  const selectors = tags.map((t) => `${t}:not(:defined)`).join(",\n");
  return `/* @generated by scripts/generate.ts — do not edit */
${selectors} { display: none !important; }
`;
}
```

- [ ] **Step 2: Implement `render-index.ts`**

```ts
// packages/m3e-svelte/scripts/render-index.ts
import type { LoadedElement } from "./cem-types";
import { componentName } from "./naming";

export function renderIndex(elements: LoadedElement[]): string {
  const lines = elements
    .map((e) => componentName(e.tag))
    .sort()
    .map(
      (name) =>
        `export { default as ${name} } from "./generated/${name}.svelte";`,
    );
  return `// @generated by scripts/generate.ts — do not edit
import "./generated/styles.css";
${lines.join("\n")}
`;
}
```

- [ ] **Step 3: Implement `render-readme.ts`**

```ts
// packages/m3e-svelte/scripts/render-readme.ts
import type { LoadedElement } from "./cem-types";
import { componentName } from "./naming";

export function renderReadme(elements: LoadedElement[]): string {
  const sorted = [...elements].sort((a, b) => a.tag.localeCompare(b.tag));
  const lines: string[] = [
    "# `@app/m3e-svelte`",
    "",
    "Generated Svelte 5 wrappers for the `@m3e/*` Material 3 web components.",
    "",
    "Run `bun run --filter @app/m3e-svelte generate` after upgrading any `@m3e/*` peer.",
    "",
    "## Components",
    "",
  ];
  for (const e of sorted) {
    const name = componentName(e.tag);
    lines.push(`### \`${name}\` — \`<${e.tag}>\` (\`${e.pkg}\`)`);
    lines.push("");
    if (e.declaration.description) {
      lines.push(e.declaration.description.split("\n")[0]!);
      lines.push("");
    }
    const attrs = e.declaration.attributes ?? [];
    if (attrs.length) {
      lines.push("| Attribute | Type | Default | Description |");
      lines.push("|---|---|---|---|");
      for (const a of attrs) {
        lines.push(
          `| \`${a.name}\` | \`${a.type?.text ?? "string"}\` | \`${a.default ?? ""}\` | ${a.description ?? ""} |`,
        );
      }
      lines.push("");
    }
    const slots = e.declaration.slots ?? [];
    if (slots.length) {
      lines.push("**Slots:** " + slots.map((s) => `\`${s.name || "(default)"}\``).join(", "));
      lines.push("");
    }
    const events = e.declaration.events ?? [];
    if (events.length) {
      lines.push("**Events:** " + events.map((ev) => `\`${ev.name}\``).join(", "));
      lines.push("");
    }
    const css = e.declaration.cssProperties ?? [];
    if (css.length) {
      lines.push(`<details><summary>CSS custom properties (${css.length})</summary>`);
      lines.push("");
      for (const c of css) {
        lines.push(`- \`${c.name}\`${c.description ? ` — ${c.description}` : ""}`);
      }
      lines.push("");
      lines.push("</details>");
      lines.push("");
    }
  }
  return lines.join("\n");
}
```

- [ ] **Step 4: Implement `generate.ts` (entry point)**

```ts
// packages/m3e-svelte/scripts/generate.ts
import { mkdirSync, rmSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { classify } from "./classify";
import { generateOne } from "./generate-one";
import { listPeerPackages, loadManifests } from "./load-manifests";
import { renderIndex } from "./render-index";
import { renderReadme } from "./render-readme";
import { renderStyles } from "./render-styles";

const here = dirname(fileURLToPath(import.meta.url));
const pkgRoot = resolve(here, "..");
const generatedDir = resolve(pkgRoot, "src/generated");

function main() {
  const peers = listPeerPackages(resolve(pkgRoot, "package.json"));
  const elements = loadManifests(peers);
  if (elements.length === 0) {
    throw new Error("[m3e-svelte] no elements discovered — check peer install");
  }

  rmSync(generatedDir, { recursive: true, force: true });
  mkdirSync(generatedDir, { recursive: true });

  const manifest: Record<
    string,
    { package: string; className: string; classification: string }
  > = {};

  for (const el of elements) {
    const out = generateOne(el);
    writeFileSync(resolve(generatedDir, out.filename), out.contents, "utf8");
    manifest[el.tag] = {
      package: el.pkg,
      className: el.className,
      classification: classify(el.tag, el.declaration.attributes ?? []),
    };
  }

  writeFileSync(
    resolve(generatedDir, "manifest.json"),
    `${JSON.stringify(manifest, null, 2)}\n`,
    "utf8",
  );
  writeFileSync(
    resolve(generatedDir, "styles.css"),
    renderStyles(elements),
    "utf8",
  );
  writeFileSync(
    resolve(generatedDir, ".gitattributes"),
    "* linguist-generated=true\n",
    "utf8",
  );
  writeFileSync(
    resolve(pkgRoot, "src/index.ts"),
    renderIndex(elements),
    "utf8",
  );
  writeFileSync(
    resolve(pkgRoot, "README.md"),
    renderReadme(elements),
    "utf8",
  );

  console.log(
    `[m3e-svelte] generated ${elements.length} wrappers across ${peers.length} packages`,
  );
}

main();
```

- [ ] **Step 5: Run the generator**

Run: `bun run --filter @app/m3e-svelte generate`
Expected: prints `generated ~55 wrappers across ~25 packages`; `packages/m3e-svelte/src/generated/` populated.

- [ ] **Step 6: Add full-suite tests**

```ts
// packages/m3e-svelte/tests/generator/full-suite.test.ts
import { readFileSync, readdirSync } from "node:fs";
import { resolve } from "node:path";
import { compile } from "svelte/compiler";
import { describe, expect, test } from "vitest";

const genDir = resolve(__dirname, "../../src/generated");

describe("full suite", () => {
  test("at least 50 wrappers generated", () => {
    const files = readdirSync(genDir).filter((f) => f.endsWith(".svelte"));
    expect(files.length).toBeGreaterThanOrEqual(50);
  });
  test("every generated .svelte compiles", () => {
    const files = readdirSync(genDir).filter((f) => f.endsWith(".svelte"));
    for (const f of files) {
      const src = readFileSync(resolve(genDir, f), "utf8");
      const result = compile(src, { filename: f, generate: "client" });
      const errors = result.warnings.filter(
        (w) =>
          w.code !== "a11y_no_static_element_interactions" &&
          w.code !== "a11y_click_events_have_key_events",
      );
      if (errors.length) {
        throw new Error(
          `${f} produced warnings:\n${errors.map((e) => `  ${e.code}: ${e.message}`).join("\n")}`,
        );
      }
    }
  });
  test("manifest.json includes every wrapper", () => {
    const manifest = JSON.parse(
      readFileSync(resolve(genDir, "manifest.json"), "utf8"),
    ) as Record<string, unknown>;
    const files = readdirSync(genDir).filter((f) => f.endsWith(".svelte"));
    expect(Object.keys(manifest).length).toBe(files.length);
  });
  test("styles.css covers dialog + snackbar + tooltip + menu", () => {
    const css = readFileSync(resolve(genDir, "styles.css"), "utf8");
    expect(css).toContain("m3e-dialog:not(:defined)");
    expect(css).toContain("m3e-snackbar:not(:defined)");
    expect(css).toContain("m3e-tooltip:not(:defined)");
    expect(css).toMatch(/m3e-[a-z-]*menu[a-z-]*:not\(:defined\)/);
  });
});
```

- [ ] **Step 7: Run the suite**

Run: `cd packages/m3e-svelte && bun run test tests/generator/full-suite.test.ts`
Expected: PASS. If a wrapper fails to compile: open the offending generated file, identify whether it's a passive/property/selection bug, fix the template (not the file), regenerate, retest. Common failures: missing import for an enum identifier (extend the type-name pass-through list), or a slot whose name collides with an attribute (extend `slotPropName` collision logic).

- [ ] **Step 8: Commit**

```bash
git add packages/m3e-svelte/scripts/ packages/m3e-svelte/src/ packages/m3e-svelte/README.md packages/m3e-svelte/tests/
git commit -m "feat(m3e-svelte): full-suite generation"
```

### Task 13: Presets

**Files:**
- Create: `packages/m3e-svelte/src/presets/chrome.ts`
- Create: `packages/m3e-svelte/src/presets/all.ts`
- Create: `packages/m3e-svelte/tests/presets/chrome.test.ts`

- [ ] **Step 1: Implement `presets/chrome.ts`**

```ts
// packages/m3e-svelte/src/presets/chrome.ts
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

- [ ] **Step 2: Implement `presets/all.ts`**

```ts
// packages/m3e-svelte/src/presets/all.ts
import "../generated/styles.css";
import manifest from "../generated/manifest.json";

const seen = new Set<string>();
export const all = Promise.all(
  Object.values(manifest as Record<string, { package: string }>)
    .map((m) => m.package)
    .filter((p) => {
      if (seen.has(p)) return false;
      seen.add(p);
      return true;
    })
    .map((p) => import(/* @vite-ignore */ p)),
);
```

- [ ] **Step 3: Add tsconfig directive for JSON import**

Modify `packages/m3e-svelte/tsconfig.json` — confirm `"resolveJsonModule": true` is inherited from the base (it is — see `tsconfig.base.json`). No change needed; this step verifies.

- [ ] **Step 4: Test the chrome preset resolves**

```ts
// packages/m3e-svelte/tests/presets/chrome.test.ts
import { describe, expect, test } from "vitest";

describe("presets/chrome", () => {
  test("re-exports chrome promise without throwing", async () => {
    const mod = await import("../../src/presets/chrome");
    await expect(mod.chrome).resolves.toBeDefined();
  });
});
```

Run: `cd packages/m3e-svelte && bun run test tests/presets/chrome.test.ts`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add packages/m3e-svelte/src/presets/ packages/m3e-svelte/tests/presets/
git commit -m "feat(m3e-svelte): chrome + all presets"
```

---

## Phase 8 — Web integration: wire the suite

### Task 14: Add suite as workspace dep + delegate chrome

**Files:**
- Modify: `packages/web/package.json` (add dep)
- Modify: `packages/web/src/lib/m3e/setup.ts:1-19`

- [ ] **Step 1: Add the workspace dep**

Edit `packages/web/package.json` — add to `dependencies` (alphabetical position with `@app/server`):

```diff
   "dependencies": {
+    "@app/m3e-svelte": "workspace:*",
     "@app/server": "workspace:*",
```

- [ ] **Step 2: Install**

Run: `bun install`
Expected: `+ @app/m3e-svelte@workspace:*`.

- [ ] **Step 3: Delegate setup.ts to the suite preset**

Replace `packages/web/src/lib/m3e/setup.ts` entirely:

```ts
// Chrome-tier eager preload, sourced from @app/m3e-svelte.
// To add a non-chrome wrapper, import it directly from "@app/m3e-svelte" —
// each generated wrapper does its own browser-gated dynamic import.
import { browser } from "$app/environment";

if (browser) void import("@app/m3e-svelte/presets/chrome");
```

- [ ] **Step 4: Verify the web build still works**

Run: `bun run --filter '@app/web' build`
Expected: build succeeds, `dist/` populated.

- [ ] **Step 5: Commit**

```bash
git add packages/web/package.json packages/web/src/lib/m3e/setup.ts bun.lock
git commit -m "feat(web): consume @app/m3e-svelte chrome preset"
```

### Task 15: Shim the deletable lib/m3e wrappers

**Goal:** Replace the bodies of the 14 deletable wrappers with one-line re-exports from `@app/m3e-svelte` so consumers compile unchanged during the migration. Two-commit migration; this is commit 1.

**Files (all modified, replaced wholesale):**
- `packages/web/src/lib/m3e/Button.svelte`
- `packages/web/src/lib/m3e/Card.svelte`
- `packages/web/src/lib/m3e/Checkbox.svelte`
- `packages/web/src/lib/m3e/Chip.svelte`
- `packages/web/src/lib/m3e/ChipSet.svelte`
- `packages/web/src/lib/m3e/Dialog.svelte`
- `packages/web/src/lib/m3e/Fab.svelte`
- `packages/web/src/lib/m3e/FormField.svelte`
- `packages/web/src/lib/m3e/RadioGroup.svelte`
- `packages/web/src/lib/m3e/Select.svelte`
- `packages/web/src/lib/m3e/Shape.svelte`
- `packages/web/src/lib/m3e/Snackbar.svelte`
- `packages/web/src/lib/m3e/Stepper.svelte`
- `packages/web/src/lib/m3e/Switch.svelte`

- [ ] **Step 1: Replace `Button.svelte` body**

```svelte
<script lang="ts">
  import { Button } from "@app/m3e-svelte";
  let props = $props();
</script>
<Button {...props} />
```

- [ ] **Step 2: Repeat the same shape for the other 13 files**

For each file, change only the component name:

```svelte
<script lang="ts">
  import { Card } from "@app/m3e-svelte";
  let props = $props();
</script>
<Card {...props} />
```

…and so on for `Checkbox`, `Chip`, `ChipSet`, `Dialog`, `Fab`, `FormField`, `RadioGroup`, `Select`, `Shape`, `Snackbar`, `Stepper`, `Switch`.

- [ ] **Step 3: Run web unit tests**

Run: `cd packages/web && bun run test`
Expected: PASS (the existing `tests/unit/m3e/Button.test.ts` still passes because the shim renders the same `<m3e-button>` tag with the same attributes).

- [ ] **Step 4: Boot the dev server, smoke-test the routes**

Run: `bun run --filter '@app/web' dev` (in background; stop after verification).
Open in a browser: `/`, `/showcase/components`, `/showcase/theme`, `/showcase/morph`, `/showcase/notes`, `/showcase/shapes`.
Expected: every page renders, no console errors, theme picker still works.

- [ ] **Step 5: Commit**

```bash
git add packages/web/src/lib/m3e/Button.svelte packages/web/src/lib/m3e/Card.svelte packages/web/src/lib/m3e/Checkbox.svelte packages/web/src/lib/m3e/Chip.svelte packages/web/src/lib/m3e/ChipSet.svelte packages/web/src/lib/m3e/Dialog.svelte packages/web/src/lib/m3e/Fab.svelte packages/web/src/lib/m3e/FormField.svelte packages/web/src/lib/m3e/RadioGroup.svelte packages/web/src/lib/m3e/Select.svelte packages/web/src/lib/m3e/Shape.svelte packages/web/src/lib/m3e/Snackbar.svelte packages/web/src/lib/m3e/Stepper.svelte packages/web/src/lib/m3e/Switch.svelte
git commit -m "refactor(web): shim deletable lib/m3e wrappers to @app/m3e-svelte"
```

### Task 16: Rewrite consumer imports + delete the shims

**Files (consumers):**
- `packages/web/src/routes/+page.svelte`
- `packages/web/src/routes/showcase/shapes/+page.svelte`
- `packages/web/src/routes/showcase/notes/+page.svelte`
- `packages/web/src/routes/showcase/theme/+page.svelte`
- `packages/web/src/routes/showcase/components/+page.svelte`
- `packages/web/src/routes/showcase/morph/+page.svelte`
- `packages/web/tests/unit/m3e/Button.test.ts`

**Files (deleted):** the 14 shim files from Task 15.

- [ ] **Step 1: Rewrite `routes/+page.svelte` imports**

In `packages/web/src/routes/+page.svelte`, replace:

```diff
-import Button from "$lib/m3e/Button.svelte";
-import Shape from "$lib/m3e/Shape.svelte";
+import { Button, Shape } from "@app/m3e-svelte";
```

- [ ] **Step 2: Rewrite `showcase/shapes/+page.svelte`**

```diff
-import Shape from "$lib/m3e/Shape.svelte";
+import { Shape } from "@app/m3e-svelte";
```

- [ ] **Step 3: Rewrite `showcase/notes/+page.svelte`**

```diff
-import Button from "$lib/m3e/Button.svelte";
-import Card from "$lib/m3e/Card.svelte";
-import FormField from "$lib/m3e/FormField.svelte";
+import { Button, Card, FormField } from "@app/m3e-svelte";
```

- [ ] **Step 4: Rewrite `showcase/theme/+page.svelte`**

```diff
-import Button from "$lib/m3e/Button.svelte";
-import Card from "$lib/m3e/Card.svelte";
-import Chip from "$lib/m3e/Chip.svelte";
-import Shape from "$lib/m3e/Shape.svelte";
+import { Button, Card, Chip, Shape } from "@app/m3e-svelte";
```

- [ ] **Step 5: Rewrite `showcase/components/+page.svelte`**

```diff
-import Button from "$lib/m3e/Button.svelte";
-import Card from "$lib/m3e/Card.svelte";
-import Checkbox from "$lib/m3e/Checkbox.svelte";
-import Chip from "$lib/m3e/Chip.svelte";
-import ChipSet from "$lib/m3e/ChipSet.svelte";
-import Dialog from "$lib/m3e/Dialog.svelte";
-import Fab from "$lib/m3e/Fab.svelte";
-import Snackbar from "$lib/m3e/Snackbar.svelte";
-import Switch from "$lib/m3e/Switch.svelte";
+import { Button, Card, Checkbox, Chip, ChipSet, Dialog, Fab, Snackbar, Switch } from "@app/m3e-svelte";
```

- [ ] **Step 6: Rewrite `showcase/morph/+page.svelte`**

```diff
-import Button from "$lib/m3e/Button.svelte";
-import Shape from "$lib/m3e/Shape.svelte";
+import { Button, Shape } from "@app/m3e-svelte";
```

- [ ] **Step 7: Rewrite the existing Button unit test**

Replace `packages/web/tests/unit/m3e/Button.test.ts`:

```ts
import { render } from "@testing-library/svelte";
import { describe, expect, test } from "vitest";
import { Button } from "@app/m3e-svelte";

describe("Button (from @app/m3e-svelte)", () => {
  test("renders the m3e-button custom element with given variant", () => {
    render(Button, { props: { variant: "outlined" } });
    const el = document.querySelector("m3e-button");
    expect(el).toBeTruthy();
    expect(el?.getAttribute("variant")).toBe("outlined");
  });
});
```

- [ ] **Step 8: Verify no remaining consumers reference the shims**

Run: `grep -r "lib/m3e/Button\|lib/m3e/Card\|lib/m3e/Checkbox\|lib/m3e/Chip\|lib/m3e/ChipSet\|lib/m3e/Dialog\|lib/m3e/Fab\|lib/m3e/FormField\|lib/m3e/RadioGroup\|lib/m3e/Select\|lib/m3e/Shape\|lib/m3e/Snackbar\|lib/m3e/Stepper\|lib/m3e/Switch" packages/web/src/ packages/web/tests/`
Expected: no output.

- [ ] **Step 9: Delete the 14 shim files**

```bash
git rm packages/web/src/lib/m3e/Button.svelte packages/web/src/lib/m3e/Card.svelte packages/web/src/lib/m3e/Checkbox.svelte packages/web/src/lib/m3e/Chip.svelte packages/web/src/lib/m3e/ChipSet.svelte packages/web/src/lib/m3e/Dialog.svelte packages/web/src/lib/m3e/Fab.svelte packages/web/src/lib/m3e/FormField.svelte packages/web/src/lib/m3e/RadioGroup.svelte packages/web/src/lib/m3e/Select.svelte packages/web/src/lib/m3e/Shape.svelte packages/web/src/lib/m3e/Snackbar.svelte packages/web/src/lib/m3e/Stepper.svelte packages/web/src/lib/m3e/Switch.svelte
```

- [ ] **Step 10: Run the full web test + build**

Run in sequence:
```bash
bun run --filter '@app/web' test
bun run --filter '@app/web' build
bun run typecheck
bun run lint
```
Expected: all pass.

- [ ] **Step 11: Commit**

```bash
git add packages/web/src/routes packages/web/tests/unit/m3e/Button.test.ts packages/web/src/lib/m3e
git commit -m "refactor(web): migrate consumers to @app/m3e-svelte, delete shims"
```

---

## Phase 9 — Showcase route + guardrails

### Task 17: `/showcase/suite` inventory page

**Files:**
- Create: `packages/web/src/routes/showcase/suite/+page.svelte`
- Modify: `packages/web/src/lib/nav-items.ts` (add nav entry)

- [ ] **Step 1: Read current nav-items.ts to preserve formatting**

Run: `cat /home/garret/projects/bun-svelte-m3e-template/packages/web/src/lib/nav-items.ts`
Then add an entry for `{ href: "/showcase/suite", label: "Suite", icon: "widgets" }` in the same shape as the existing entries.

- [ ] **Step 2: Write the suite showcase page**

```svelte
<!-- packages/web/src/routes/showcase/suite/+page.svelte -->
<script lang="ts">
  import manifest from "@app/m3e-svelte/generated/manifest.json";
  import * as Suite from "@app/m3e-svelte";

  const entries = Object.entries(
    manifest as Record<string, { package: string; classification: string }>,
  ).sort(([a], [b]) => a.localeCompare(b));

  const componentName = (tag: string) =>
    tag
      .replace(/^m3e-/, "")
      .split("-")
      .map((s) => (s ? s[0]!.toUpperCase() + s.slice(1) : ""))
      .join("");

  const components = entries
    .map(([tag, meta]) => {
      const name = componentName(tag);
      const C = (Suite as Record<string, unknown>)[name] as
        | typeof Suite.Button
        | undefined;
      return C ? { tag, meta, name, C } : null;
    })
    .filter((x): x is NonNullable<typeof x> => x !== null);
</script>

<h1>Suite — every wrapper</h1>
<p class="lede">
  Each card renders a generated wrapper from <code>@app/m3e-svelte</code> with default props.
  Use as a visual baseline; for an API table see the package README.
</p>

<section class="grid">
  {#each components as { tag, meta, name, C } (tag)}
    <article class="tile">
      <header>
        <code>{tag}</code>
        <span class="badge {meta.classification}">{meta.classification}</span>
      </header>
      <div class="stage">
        <C />
      </div>
      <footer>
        <code>{name}</code>
      </footer>
    </article>
  {/each}
</section>

<style>
  .lede {
    margin: var(--space-md) 0 var(--space-2xl);
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: var(--space-md);
  }
  .tile {
    background: var(--md-sys-color-surface-container);
    color: var(--md-sys-color-on-surface);
    border-radius: 12px;
    padding: var(--space-md);
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
  }
  .tile header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
  }
  .badge {
    padding: 2px 8px;
    border-radius: 999px;
    font-size: 10px;
    background: var(--md-sys-color-surface-container-high);
  }
  .badge.property-driven {
    background: var(--md-sys-color-tertiary-container);
    color: var(--md-sys-color-on-tertiary-container);
  }
  .badge.selection-managed {
    background: var(--md-sys-color-secondary-container);
    color: var(--md-sys-color-on-secondary-container);
  }
  .stage {
    min-height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .tile footer code {
    font-size: 12px;
    color: var(--md-sys-color-on-surface-variant);
  }
</style>
```

- [ ] **Step 3: Verify the page renders**

Run: `bun run --filter '@app/web' dev` (background).
Open `http://localhost:5173/showcase/suite`. Expected: ~55 tiles, no console errors, theme picker still works.

- [ ] **Step 4: Add web unit test confirming the page mounts**

```ts
// packages/web/tests/unit/showcase/suite.test.ts
import { render } from "@testing-library/svelte";
import { describe, expect, test } from "vitest";
import Page from "../../../src/routes/showcase/suite/+page.svelte";

describe("/showcase/suite", () => {
  test("renders at least 50 tiles", () => {
    const { container } = render(Page);
    expect(container.querySelectorAll(".tile").length).toBeGreaterThanOrEqual(50);
  });
});
```

Run: `cd packages/web && bun run test tests/unit/showcase/suite.test.ts`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add packages/web/src/routes/showcase/suite packages/web/src/lib/nav-items.ts packages/web/tests/unit/showcase/suite.test.ts
git commit -m "feat(web): /showcase/suite inventory page"
```

### Task 18: Chrome-chunk guardrail

**Files:**
- Create: `packages/web/scripts/check-chrome-chunk.ts`
- Modify: `packages/web/package.json` (add script)

- [ ] **Step 1: Write the guardrail script**

```ts
// packages/web/scripts/check-chrome-chunk.ts
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const CHROME = new Set([
  "@m3e/theme",
  "@m3e/app-bar",
  "@m3e/icon",
  "@m3e/icon-button",
  "@m3e/divider",
  "@m3e/drawer-container",
  "@m3e/nav-menu",
]);

const distDir = resolve(import.meta.dir, "../.svelte-kit/output/client");
const manifestPath = resolve(distDir, ".vite/manifest.json");

const manifest = JSON.parse(readFileSync(manifestPath, "utf8")) as Record<
  string,
  { file: string; src?: string; imports?: string[] }
>;

const layoutKey = Object.keys(manifest).find(
  (k) => k.includes("+layout") && k.endsWith(".svelte"),
);
if (!layoutKey) {
  console.error("could not find layout entry in vite manifest");
  process.exit(1);
}

const visited = new Set<string>();
const walk = (key: string) => {
  if (visited.has(key)) return;
  visited.add(key);
  const entry = manifest[key];
  if (!entry) return;
  for (const imp of entry.imports ?? []) walk(imp);
};
walk(layoutKey);

const layoutChunkFiles = new Set([...visited].map((k) => manifest[k]!.file));
const allChunkSources = readFileSync(
  resolve(distDir, [...layoutChunkFiles][0]!),
  "utf8",
);

let bad: string[] = [];
const m3eImports = allChunkSources.match(/@m3e\/[a-z-]+/g) ?? [];
for (const pkg of new Set(m3eImports)) {
  if (!CHROME.has(pkg)) bad.push(pkg);
}

if (bad.length) {
  console.error(
    `[check-chrome-chunk] non-chrome @m3e/* package found in layout chunk:`,
    bad,
  );
  console.error(
    `Allowed chrome packages: ${[...CHROME].sort().join(", ")}`,
  );
  process.exit(1);
}
console.log(`[check-chrome-chunk] OK — layout chunk imports only chrome tier`);
```

- [ ] **Step 2: Add script to package.json**

In `packages/web/package.json`, add to `scripts`:

```diff
   "scripts": {
     "dev": "vite dev",
     "build": "vite build",
+    "check:chrome": "bun run scripts/check-chrome-chunk.ts",
```

- [ ] **Step 3: Run the build then the guardrail**

```bash
bun run --filter '@app/web' build
bun run --filter '@app/web' check:chrome
```
Expected: build succeeds; `check:chrome` prints `OK — layout chunk imports only chrome tier`. If it fails, the layout (or something it imports) is pulling a non-chrome `@m3e/*` package — find the leak and dynamic-import-it inside a wrapper instead.

- [ ] **Step 4: Commit**

```bash
git add packages/web/scripts/check-chrome-chunk.ts packages/web/package.json
git commit -m "feat(web): chrome-chunk size guardrail"
```

### Task 19: Biome `no-restricted-imports` for `presets/all`

**Files:**
- Modify: `biome.json` (add override)

- [ ] **Step 1: Add override entry**

In `biome.json` `overrides` array, append:

```json
{
  "include": ["packages/web/src/**"],
  "linter": {
    "rules": {
      "nursery": {
        "noRestrictedImports": {
          "level": "error",
          "options": {
            "paths": {
              "@app/m3e-svelte/presets/all": "Eager-loads every @m3e/* package; use named imports from @app/m3e-svelte or presets/chrome instead."
            }
          }
        }
      }
    }
  }
}
```

- [ ] **Step 2: Verify lint still passes**

Run: `bun run lint`
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add biome.json
git commit -m "chore(biome): forbid @app/m3e-svelte/presets/all from web"
```

---

## Phase 10 — E2E coverage for bindables

### Task 20: Playwright spec for upgrade-race wrappers

**Files:**
- Create: `packages/web/tests/e2e/m3e-suite.spec.ts`

- [ ] **Step 1: Write the spec**

```ts
// packages/web/tests/e2e/m3e-suite.spec.ts
import { expect, test } from "@playwright/test";

test.describe("/showcase/suite", () => {
  test("loads and renders every tile", async ({ page }) => {
    await page.goto("/showcase/suite");
    await expect(page.locator(".tile")).toHaveCount(
      await page.locator(".tile").count(),
    );
    expect(await page.locator(".tile").count()).toBeGreaterThanOrEqual(50);
  });

  test("dialog open property binding works", async ({ page }) => {
    // Mount a small probe via the showcase/components page which already uses Dialog.
    await page.goto("/showcase/components");
    const trigger = page.getByRole("button", { name: /open dialog/i });
    await trigger.click();
    await expect(page.locator("m3e-dialog[open]")).toBeVisible();
  });
});
```

(The `/showcase/components` page already wires `Button onclick={() => (dialogOpen = true)}>Open dialog` with `<Dialog bind:open={dialogOpen}>` — no change needed there.)

- [ ] **Step 2: Run e2e**

Run: `bun run --filter '@app/web' test:e2e -- m3e-suite.spec.ts`
Expected: PASS.

- [ ] **Step 3: Commit**

```bash
git add packages/web/tests/e2e/m3e-suite.spec.ts
git commit -m "test(e2e): suite inventory + dialog binding"
```

---

## Phase 11 — Docs

### Task 21: Update root CLAUDE.md

**Files:**
- Modify: `CLAUDE.md` (the "Adding an M3E component" section)

- [ ] **Step 1: Read the current section to preserve voice**

Run: `grep -n "Adding an M3E component" /home/garret/projects/bun-svelte-m3e-template/CLAUDE.md`

- [ ] **Step 2: Replace the section's body**

Locate the heading `## Adding an M3E component` and replace its body (from that heading to the next `##` heading) with:

```markdown
## Adding an M3E component

**Prefer importing from `@app/m3e-svelte`** — the generated wrapper suite covers every element
across every installed `@m3e/*` package, with the SSR + upgrade-race + FOUC patterns baked in.

```svelte
<script lang="ts">
  import { Button, Dialog, Select } from "@app/m3e-svelte";
  let dialogOpen = $state(false);
  let value = $state("a");
</script>
<Button onclick={() => (dialogOpen = true)}>Open</Button>
<Dialog bind:open={dialogOpen}>...</Dialog>
<Select bind:value>...</Select>
```

To add a *new* `@m3e/<package>`:

1. `bun add @m3e/<package>` in `packages/web`, then mirror it in
   `packages/m3e-svelte/package.json`'s `peerDependencies` + `peerDependenciesMeta`.
2. `bun run --filter @app/m3e-svelte generate` — emits a new wrapper per element.
3. Commit the generator output (`packages/m3e-svelte/src/generated/` + the updated
   `index.ts`, `README.md`, `manifest.json`).

**Only wrap into `packages/web/src/lib/m3e/`** when the component renders on every page's chrome
*and* needs app-specific bindings (theme store, `$app/paths`, navigation). Today this list is:
Theme (wired to `themeState`), AppBar (custom slots), AppNav (sidebar wired to `goto`),
DrawerContainer (layout slots), and Icon / IconButton / Divider (chrome-tier convenience).

If the component is **on every page** but a plain pass-through suffices, add it to the eager
chrome bundle by editing `packages/m3e-svelte/src/presets/chrome.ts`. Anything else stays
lazy — referencing it from a Svelte file is enough; the wrapper does its own dynamic import.

**Never add `@m3e/all` as a dependency.** Generated wrappers are tree-shaken via named imports;
`presets/all` exists only for the showcase + smoke tests and is biome-forbidden in `packages/web`.
```

- [ ] **Step 3: Sanity-check the diff**

Run: `git -C /home/garret/projects/bun-svelte-m3e-template diff CLAUDE.md`
Expected: only the "Adding an M3E component" section changed. The "Color and theming" / "DB migration" / "Test conventions" / "First-fork checklist" sections must be untouched.

- [ ] **Step 4: Commit**

```bash
git add CLAUDE.md
git commit -m "docs(claude): point M3E authoring at @app/m3e-svelte"
```

### Task 22: Final verification

**Files:** none

- [ ] **Step 1: Run the whole stack**

```bash
bun install
bun run typecheck
bun run lint
bun run test
bun run --filter '@app/web' build
bun run --filter '@app/web' check:chrome
bun run --filter '@app/web' test:e2e
```
Expected: every step passes.

- [ ] **Step 2: Confirm no orphan files**

Run: `find packages/web/src/lib/m3e -type f`
Expected: exactly these 8 files —
```
packages/web/src/lib/m3e/AppBar.svelte
packages/web/src/lib/m3e/AppNav.svelte
packages/web/src/lib/m3e/DrawerContainer.svelte
packages/web/src/lib/m3e/Divider.svelte
packages/web/src/lib/m3e/Icon.svelte
packages/web/src/lib/m3e/IconButton.svelte
packages/web/src/lib/m3e/Theme.svelte
packages/web/src/lib/m3e/setup.ts
```

- [ ] **Step 3: Confirm generated suite size**

Run: `ls packages/m3e-svelte/src/generated/*.svelte | wc -l`
Expected: at least 50.

- [ ] **Step 4: Push the branch (DO NOT auto-merge)**

Ask the user before pushing. If approved:

```bash
git push -u origin feat/m3e-svelte-suite
```

---

## Done definition

- [ ] All 22 tasks complete.
- [ ] `bun run test` (server + web + m3e-svelte) green.
- [ ] `bun run lint` clean, `bun run typecheck` clean.
- [ ] `bun run --filter '@app/web' build` succeeds.
- [ ] `bun run --filter '@app/web' check:chrome` succeeds.
- [ ] `bun run --filter '@app/web' test:e2e` green.
- [ ] `packages/web/src/lib/m3e/` contains exactly the 8 chrome files above.
- [ ] `packages/m3e-svelte/src/generated/` has at least 50 `.svelte` files plus `manifest.json` + `styles.css`.
- [ ] `CLAUDE.md` "Adding an M3E component" section reflects the suite-first workflow.
- [ ] Branch pushed (with user approval) or left local for the user to push.
