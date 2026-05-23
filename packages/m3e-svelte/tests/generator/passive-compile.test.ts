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
    const blocking = result.warnings.filter(
      (w) =>
        w.code !== "a11y_no_static_element_interactions" &&
        w.code !== "a11y_click_events_have_key_events",
    );
    expect(blocking).toHaveLength(0);
    // The element class is a type-only import (erased from client JS); assert the
    // compiled output instantiates the custom element tag instead.
    expect(result.js.code).toContain("m3e-card");
  });
});
