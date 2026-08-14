import { describe, expect, test } from "vitest";
import { classify } from "../../scripts/classify";
import { generateOne } from "../../scripts/generate-one";
import { loadManifests } from "../../scripts/load-manifests";
import { discoverManagedChildTags } from "../../scripts/selection-managed";

// Classification used to be a hand-maintained list of regexes matched against
// the tag name, which is not what the library's structure is. It drifted, and
// the drift was invisible: a misclassified wrapper still compiles and still
// renders — it just silently drops a binding, because the ancestor's
// SelectionManager clears pre-upgrade attributes when it takes ownership.
//
// `m3e-nav-item` is the canonical miss. It lives in `@m3e/nav-bar`, whose
// manager claims it via `setItems([...this.querySelectorAll("m3e-nav-item")])`,
// but the name doesn't resemble `nav-menu` so it matched nothing and got no
// post-upgrade sync at all — while its structural twin `m3e-nav-menu-item` was
// classified correctly purely because of how it is spelled.
describe("selection-managed children are discovered, not name-matched", () => {
  test("discovery finds tags claimed by a manager's setItems query", () => {
    const { tags } = discoverManagedChildTags();
    expect(tags.size).toBeGreaterThan(0);
    // Spot-check across three different owning packages.
    expect(tags).toContain("m3e-nav-item"); // @m3e/nav-bar
    expect(tags).toContain("m3e-tab"); // @m3e/tabs
    expect(tags).toContain("m3e-option"); // @m3e/select, @m3e/autocomplete
  });

  test("nav-item classifies as selection-managed despite its name", () => {
    expect(classify("m3e-nav-item", [])).toBe("selection-managed");
  });

  test("nav-item's wrapper actually syncs `selected` after upgrade", () => {
    const [el] = loadManifests(["@m3e/nav-bar"]).filter((e) => e.tag === "m3e-nav-item");
    if (!el) throw new Error("m3e-nav-item not found in @m3e/nav-bar");
    const out = generateOne(el);
    expect(out.classification).toBe("selection-managed");
    expect(out.contents).toContain("selected = $bindable(false)");
    expect(out.contents).toContain('syncManagedProperty(element, "selected", selected)');
    // The attribute form is what the manager clears; it must not be emitted.
    expect(out.contents).not.toContain("selected={selected || undefined}");
  });

  test("a tag no manager claims is still passive", () => {
    expect(classify("m3e-divider", [])).toBe("passive");
  });
});
