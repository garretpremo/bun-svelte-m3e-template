import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, test } from "vitest";

// The real @m3e Lit components can't execute under jsdom (Constructable
// StyleSheets), so assert the chrome tier's composition from source instead.
// Runtime behavior is covered by the web build + e2e.
const CHROME = [
  "@m3e/theme",
  "@m3e/app-bar",
  "@m3e/icon",
  "@m3e/icon-button",
  "@m3e/divider",
  "@m3e/drawer-container",
  "@m3e/nav-menu",
];

describe("presets/chrome", () => {
  test("eager-loads exactly the chrome-tier packages", () => {
    const src = readFileSync(resolve(__dirname, "../../src/presets/chrome.ts"), "utf8");
    for (const pkg of CHROME) {
      expect(src).toContain(`import("${pkg}")`);
    }
    const imported = [...src.matchAll(/import\("(@m3e\/[^"]+)"\)/g)].map((m) => m[1]);
    expect(imported.sort()).toEqual([...CHROME].sort());
  });
});
