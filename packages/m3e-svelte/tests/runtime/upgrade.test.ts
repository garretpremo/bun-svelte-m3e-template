import { describe, expect, test, vi } from "vitest";
import { syncManagedProperty, syncProperty } from "../../src/runtime/upgrade";

describe("syncProperty", () => {
  test("writes the property on the element immediately", () => {
    const el = document.createElement("div") as HTMLElement & { foo?: string };
    syncProperty(el, "foo", "bar");
    expect(el.foo).toBe("bar");
  });
  test("no-op when element is undefined", () => {
    expect(() => syncProperty(undefined, "foo", "bar")).not.toThrow();
  });
});

describe("syncManagedProperty", () => {
  test("awaits whenDefined + updateComplete then writes property", async () => {
    const el = document.createElement("m3e-fake") as HTMLElement & {
      value?: string;
      updateComplete?: Promise<true>;
    };
    el.updateComplete = Promise.resolve(true);
    const spy = vi
      .spyOn(customElements, "whenDefined")
      .mockResolvedValue(class {} as CustomElementConstructor);
    syncManagedProperty(el, "value", "alpha");
    // Drain microtasks (whenDefined + tick + updateComplete + assignment).
    await new Promise<void>((resolve) => setTimeout(resolve, 0));
    await new Promise<void>((resolve) => setTimeout(resolve, 0));
    expect(el.value).toBe("alpha");
    spy.mockRestore();
  });
});
