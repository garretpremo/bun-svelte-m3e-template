// packages/m3e-svelte/scripts/selection-managed.ts
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const m3eRoot = resolve(here, "..", "node_modules", "@m3e");

/**
 * Tags whose selection state is owned by an ancestor's SelectionManager,
 * discovered from the installed packages rather than guessed from tag names.
 *
 * Why this exists: classification used to be a hand-maintained list of regexes
 * matched against the tag name. That is not what the library's structure
 * actually is, and it drifted silently. `m3e-nav-item` is defined in
 * `@m3e/nav-bar`, whose manager claims it with
 * `setItems([...this.querySelectorAll("m3e-nav-item")])` — but `nav-item`
 * doesn't look like `nav-menu`, so it matched nothing and classified `passive`,
 * receiving no post-upgrade property sync at all. Its structural twin
 * `m3e-nav-menu-item` was classified correctly purely because of its name.
 * Measured against the committed manifest, the regex list got 1 of 14 right.
 *
 * A wrong classification is invisible: the wrapper still compiles and still
 * renders. It only shows up as a binding that silently doesn't stick, because
 * the manager clears pre-upgrade attributes when it takes ownership.
 *
 * The authoritative signal is the manager's own query. Every container that
 * owns one calls `setItems` with a `querySelectorAll` of the tags it manages,
 * so we read that back out of the shipped bundle.
 */
export type ManagedTagDiscovery = {
  /** Tags a SelectionManager claims, e.g. `m3e-nav-item`. */
  tags: ReadonlySet<string>;
  /** Which package each tag was discovered in — for diagnostics. */
  source: ReadonlyMap<string, string>;
};

// `setItems(` followed, within a bounded window, by the querySelectorAll whose
// result it is being handed. Bounded and split-based rather than one greedy
// regex: the minified bundles are single enormous lines, and a naive
// `setItems\(([\s\S]*?)\)` backtracks catastrophically on them.
const WINDOW = 400;
const QUERY_ALL = /querySelectorAll\("([^"]+)"\)/g;
const TAG = /^m3e-[a-z0-9-]+$/;

function tagsInBundle(source: string): string[] {
  const found: string[] = [];
  const chunks = source.split("setItems(");
  // chunks[0] is whatever preceded the first call — no setItems applies to it.
  for (let i = 1; i < chunks.length; i++) {
    const window = chunks[i]!.slice(0, WINDOW);
    QUERY_ALL.lastIndex = 0;
    let m: RegExpExecArray | null = QUERY_ALL.exec(window);
    while (m !== null) {
      // A single query can claim several tags: `querySelectorAll("a,b,c")`.
      for (const raw of m[1]!.split(",")) {
        const tag = raw.trim();
        if (TAG.test(tag)) found.push(tag);
      }
      m = QUERY_ALL.exec(window);
    }
  }
  return found;
}

let cached: ManagedTagDiscovery | undefined;

/**
 * Scans every installed `@m3e/*` package once and memoizes the result. Called
 * from `classify()`, so any caller — the generator, a test invoking
 * `generateOne` directly — gets the same answer without threading a parameter.
 */
export function discoverManagedChildTags(): ManagedTagDiscovery {
  if (cached) return cached;

  const tags = new Set<string>();
  const source = new Map<string, string>();

  if (existsSync(m3eRoot)) {
    for (const pkg of readdirSync(m3eRoot)) {
      const bundle = resolve(m3eRoot, pkg, "dist/index.js");
      if (!existsSync(bundle)) continue;
      for (const tag of tagsInBundle(readFileSync(bundle, "utf8"))) {
        tags.add(tag);
        if (!source.has(tag)) source.set(tag, `@m3e/${pkg}`);
      }
    }
  }

  cached = { tags, source };
  return cached;
}

/** Test seam — discovery memoizes, so a test changing the tree must reset it. */
export function resetManagedTagCache(): void {
  cached = undefined;
}
