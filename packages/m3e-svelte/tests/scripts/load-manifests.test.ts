// packages/m3e-svelte/tests/scripts/load-manifests.test.ts
import { resolve } from "node:path";
import { describe, expect, test } from "vitest";
import { listPeerPackages, loadManifests } from "../../scripts/load-manifests";

const pkgJson = resolve(__dirname, "../../package.json");

describe("load-manifests", () => {
  test("discovers @m3e/* peers from package.json", () => {
    const peers = listPeerPackages(pkgJson);
    expect(peers).toContain("@m3e/button");
    expect(peers.length).toBeGreaterThanOrEqual(20);
  });
  test("loads element declarations including tagName", () => {
    const elements = loadManifests(["@m3e/button"]);
    const button = elements.find((e) => e.tag === "m3e-button");
    expect(button).toBeDefined();
    expect(button?.className).toBe("M3eButtonElement");
    expect(button?.declaration.attributes?.length ?? 0).toBeGreaterThan(5);
  });
  test("chips package exposes multiple tags", () => {
    const elements = loadManifests(["@m3e/chips"]);
    const tags = elements.map((e) => e.tag);
    expect(tags).toContain("m3e-chip");
    expect(tags).toContain("m3e-filter-chip");
    expect(tags).toContain("m3e-chip-set");
  });
});
