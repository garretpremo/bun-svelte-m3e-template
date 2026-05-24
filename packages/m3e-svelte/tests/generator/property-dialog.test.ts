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

  test("Checkbox: bindable checked pushed + read back on change for two-way bind", () => {
    const [cb] = loadManifests(["@m3e/checkbox"]).filter((e) => e.tag === "m3e-checkbox");
    const out = generateOne(cb!);
    expect(out.classification).toBe("property-driven");
    expect(out.contents).toContain("checked = $bindable(false)");
    expect(out.contents).toContain('syncProperty(element, "checked", checked)');
    expect(out.contents).toContain("function syncFromDom()");
    expect(out.contents).toContain('checked = node["checked"]');
    expect(out.contents).toContain("syncFromDom(); onchange?.(e)");
  });
});
