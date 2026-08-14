import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, test } from "vitest";

// Boolean props on a custom element must be passed as `x={x || undefined}`,
// never as the bare shorthand `{x}`.
//
// Why: Svelte writes an *attribute* on an element that has not upgraded yet, and
// `x={false}` stringifies to `x="false"`. For a boolean attribute, presence is
// truthy — so `false` reads as `true` and the prop is inverted. Confirmed in a
// browser: `centered="false"` yields `hasAttribute() === true` and
// `el.centered === true`.
//
// This is not intermittent. Even eagerly-imported elements (presets/chrome.ts)
// load asynchronously, so the first render reliably precedes upgrade and the
// attribute path reliably wins.
//
// The generator already emits the guard for every boolean
// (scripts/templates/wrapper.ts). Hand-written wrappers have to remember, and
// twice they did not: AppBar passed `{centered}` with a `false` default, which
// centred the title on every page in every project built on this template; and
// IconButton passed `{disabled}` on the same line as a correctly-guarded
// `toggle`. Nothing errors and jsdom cannot see it, so this scans the source.
const WRAPPER_DIR = join(process.cwd(), "src/lib/m3e");

const wrappers = readdirSync(WRAPPER_DIR).filter((f) => f.endsWith(".svelte"));

/** Boolean prop names declared in the component's `interface Props` block. */
function booleanProps(source: string): string[] {
  const props = source.match(/interface Props \{([\s\S]*?)\n\}/);
  if (!props) return [];
  return [...props[1]!.matchAll(/^\s*(?:"([\w-]+)"|(\w+))\??\s*:\s*boolean\b/gm)].map(
    (m) => (m[1] ?? m[2]) as string,
  );
}

describe("hand-written m3e wrappers guard boolean attributes", () => {
  test("there are wrappers to check", () => {
    expect(wrappers.length).toBeGreaterThan(0);
  });

  test.each(wrappers)("%s passes no boolean as a bare shorthand", (file) => {
    const source = readFileSync(join(WRAPPER_DIR, file), "utf-8");
    // Only the markup below the script block can write attributes, and HTML
    // comments in it cannot — the comments here quote the very shorthand they
    // warn against, so leaving them in flags the fix as the bug.
    const markup = source.slice(source.indexOf("</script>")).replace(/<!--[\s\S]*?-->/g, "");
    for (const prop of booleanProps(source)) {
      expect(
        markup,
        `${file}: \`{${prop}}\` must be \`${prop}={${prop} || undefined}\` — a bare boolean stringifies to "false", which is truthy as an attribute`,
      ).not.toMatch(new RegExp(`\\{\\s*${prop}\\s*\\}`));
    }
  });
});
