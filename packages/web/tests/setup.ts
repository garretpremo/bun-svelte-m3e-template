import "@testing-library/jest-dom/vitest";
import "fake-indexeddb/auto";

// Minimal stub for custom-element registration so wrappers don't crash in jsdom.
if (!("customElements" in globalThis)) {
  (globalThis as any).customElements = {
    define: () => {},
    get: () => undefined,
    whenDefined: () => Promise.resolve(),
  };
}
