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
    expect(out.contents).toContain("@generated");
    expect(out.contents).toContain('if (browser) void import("@m3e/card");');
    expect(out.contents).toContain('import type { M3eCardElement }');
    expect(out.contents).toContain("<m3e-card");
    expect(out.contents).toContain("bind:this={element}");
    expect(out.contents).toContain('interface Props');
  });
});
