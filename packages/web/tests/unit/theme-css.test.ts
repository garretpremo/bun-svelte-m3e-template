import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, test } from "vitest";

const css = readFileSync(join(process.cwd(), "src/styles/theme.css"), "utf-8");

// jsdom runs no cascade, so no unit test in this package can observe that one
// rule is beating another. This is the cheap deterministic proxy: assert the
// *shape* of the selectors that decide the outcome.
//
// The bug this guards against: as plain `.page-content h2`, these prose
// defaults sit at (0,1,1) and outrank every single-class utility at (0,1,0).
// Since `+layout.svelte` wraps every route in `<main class="page-content">`,
// a project building an app-layer utility layer on top of this template finds
// its classes silently ignored — declared 16px, rendered 32px — with nothing
// in the source looking wrong. Wrapping each in `:where()` drops them to zero
// specificity: bare prose still styled, any class now wins.
const PROSE_ELEMENTS = ["h1", "h2", "h3", "p", "code"] as const;

describe("theme.css prose defaults stay zero-specificity", () => {
  test.each(PROSE_ELEMENTS)("`.page-content %s` is wrapped in :where()", (el) => {
    expect(css, `.page-content ${el} must be wrapped in :where()`).toContain(
      `:where(.page-content ${el})`,
    );
  });

  test.each(PROSE_ELEMENTS)("no unwrapped `.page-content %s` rule remains", (el) => {
    // `(^|[^(])` so the wrapped form `:where(.page-content h2)` doesn't match.
    expect(css).not.toMatch(new RegExp(`(^|[^(])\\.page-content ${el}\\s*\\{`, "m"));
  });

  // `.body-large` is a class, so it starts at (0,2,0) rather than (0,1,1) —
  // still enough to outrank a utility placed on the same element. Zeroed too;
  // it follows `p` in source order, so `<p class="body-large">` still wins.
  test("`.page-content .body-large` is wrapped in :where()", () => {
    expect(css).toContain(":where(.page-content .body-large)");
  });
});
