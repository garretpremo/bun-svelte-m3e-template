import { compile } from "svelte/compiler";
import { describe, expect, test } from "vitest";
import { generateOne } from "../../scripts/generate-one";
import { loadManifests } from "../../scripts/load-manifests";

function compileTag(pkg: string, tag: string) {
  const [el] = loadManifests([pkg]).filter((e) => e.tag === tag);
  if (!el) throw new Error(`element ${tag} not found in ${pkg}`);
  const out = generateOne(el);
  const result = compile(out.contents, {
    filename: out.filename,
    generate: "client",
  });
  const blocking = result.warnings.filter(
    (w) =>
      w.code !== "a11y_no_static_element_interactions" &&
      w.code !== "a11y_click_events_have_key_events",
  );
  return { out, result, blocking };
}

describe("passive wrappers compile", () => {
  test("Card", () => {
    const { result, blocking } = compileTag("@m3e/card", "m3e-card");
    expect(blocking).toHaveLength(0);
    // The element class is a type-only import (erased from client JS); assert the
    // compiled output instantiates the custom element tag instead.
    expect(result.js.code).toContain("m3e-card");
  });

  // Regression: m3e-app-bar declares an attribute literally named `for`, a JS
  // reserved word. The prop must be sanitized (for_) or the wrapper won't compile.
  test("AppBar (attribute named `for`)", () => {
    const { out, blocking } = compileTag("@m3e/app-bar", "m3e-app-bar");
    expect(out.contents).toContain("for_");
    expect(out.contents).toContain("for={for_}");
    expect(blocking).toHaveLength(0);
  });

  // Regression: m3e-step-panel declares a slot named `actions-` (trailing dash),
  // which is not a valid JS identifier; the prop must be sanitized to `actions`.
  test("StepPanel (slot named `actions-`)", () => {
    const { out, blocking } = compileTag("@m3e/stepper", "m3e-step-panel");
    expect(out.contents).toContain('slot="actions-"');
    expect(out.contents).not.toMatch(/\bactions-\?/);
    expect(blocking).toHaveLength(0);
  });
});
