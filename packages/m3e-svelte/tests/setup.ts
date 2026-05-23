import "@testing-library/jest-dom/vitest";

// Minimal custom-elements stub so wrappers don't crash in jsdom.
if (!("customElements" in globalThis)) {
  // biome-ignore lint/suspicious/noExplicitAny: jsdom stub
  (globalThis as any).customElements = {
    define: () => {},
    get: () => undefined,
    whenDefined: () => Promise.resolve(),
  };
}
