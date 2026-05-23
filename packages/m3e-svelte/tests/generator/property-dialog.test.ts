import { compile } from "svelte/compiler";
import { describe, expect, test } from "vitest";
import { generateOne } from "../../scripts/generate-one";
import { loadManifests } from "../../scripts/load-manifests";

describe("property-driven Dialog", () => {
  test("emits bindable open + syncProperty effect, not an open attribute", () => {
    const [dlg] = loadManifests(["@m3e/dialog"]).filter((e) => e.tag === "m3e-dialog");
    const out = generateOne(dlg!);
    expect(out.classification).toBe("property-driven");
    expect(out.contents).toContain("open = $bindable(false)");
    expect(out.contents).toContain('syncProperty(element, "open", open)');
    expect(out.contents).not.toMatch(/<m3e-dialog[^>]*\sopen=/);
  });
  test("compiles", () => {
    const [dlg] = loadManifests(["@m3e/dialog"]).filter((e) => e.tag === "m3e-dialog");
    const out = generateOne(dlg!);
    const result = compile(out.contents, { filename: out.filename, generate: "client" });
    expect(result.js.code).toContain("syncProperty");
  });
});
