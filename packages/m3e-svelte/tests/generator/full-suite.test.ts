import { readFileSync, readdirSync } from "node:fs";
import { resolve } from "node:path";
import { compile } from "svelte/compiler";
import { describe, expect, test } from "vitest";

const genDir = resolve(__dirname, "../../src/generated");
const svelteFiles = () => readdirSync(genDir).filter((f) => f.endsWith(".svelte"));

describe("full suite", () => {
  test("at least 50 wrappers generated", () => {
    expect(svelteFiles().length).toBeGreaterThanOrEqual(50);
  });

  test("every generated .svelte compiles without blocking warnings", () => {
    const failures: string[] = [];
    for (const f of svelteFiles()) {
      const src = readFileSync(resolve(genDir, f), "utf8");
      const result = compile(src, { filename: f, generate: "client" });
      const blocking = result.warnings.filter(
        (w) =>
          w.code !== "a11y_no_static_element_interactions" &&
          w.code !== "a11y_click_events_have_key_events",
      );
      if (blocking.length > 0) {
        failures.push(`${f}: ${blocking.map((w) => w.code).join(", ")}`);
      }
    }
    expect(failures).toEqual([]);
  });

  test("manifest.json has one entry per generated wrapper", () => {
    const manifest = JSON.parse(readFileSync(resolve(genDir, "manifest.json"), "utf8")) as Record<
      string,
      unknown
    >;
    expect(Object.keys(manifest).length).toBe(svelteFiles().length);
  });

  test("styles.css shields dialog, snackbar, tooltip, and menu before upgrade", () => {
    const css = readFileSync(resolve(genDir, "styles.css"), "utf8");
    expect(css).toContain("m3e-dialog:not(:defined)");
    expect(css).toContain("m3e-snackbar:not(:defined)");
    expect(css).toContain("m3e-tooltip:not(:defined)");
    expect(css).toMatch(/m3e-[a-z-]*menu[a-z-]*:not\(:defined\)/);
  });
});
