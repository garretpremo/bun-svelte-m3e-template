import { compile } from "svelte/compiler";
import { describe, expect, test } from "vitest";
import { generateOne } from "../../scripts/generate-one";
import { loadManifests } from "../../scripts/load-manifests";

function one(pkg: string, tag: string) {
  const [el] = loadManifests([pkg]).filter((e) => e.tag === tag);
  if (!el) throw new Error(`${tag} not found in ${pkg}`);
  return generateOne(el);
}

describe("selection-managed archetype", () => {
  test("nav-menu-item: writable boolean `selected` becomes a synced bindable", () => {
    const out = one("@m3e/nav-menu", "m3e-nav-menu-item");
    expect(out.classification).toBe("selection-managed");
    expect(out.contents).toContain("selected = $bindable(false)");
    expect(out.contents).toContain('syncManagedProperty(element, "selected", selected)');
  });

  test("radio-group: readonly `value` field stays read-only (no bindable)", () => {
    const out = one("@m3e/radio-group", "m3e-radio-group");
    expect(out.classification).toBe("selection-managed");
    expect(out.contents).not.toContain("value = $bindable");
  });

  test("select: readonly `value` is not a bindable; change is forwarded", () => {
    const out = one("@m3e/select", "m3e-select");
    expect(out.classification).toBe("selection-managed");
    expect(out.contents).not.toContain("value = $bindable");
    expect(out.contents).toContain("onchange={onchange}");
  });

  test("Select compiles", () => {
    const out = one("@m3e/select", "m3e-select");
    const result = compile(out.contents, {
      filename: out.filename,
      generate: "client",
    });
    expect(result.js.code).toContain("m3e-select");
  });
});
