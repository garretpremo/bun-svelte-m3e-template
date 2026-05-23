import { render } from "@testing-library/svelte";
import { describe, expect, test } from "vitest";
import Probe from "./fixtures/SlotProbe.svelte";

describe("runtime/Slot", () => {
  test("renders the wrapper div with the named slot when snippet present", () => {
    const { container } = render(Probe, { props: { provide: true } });
    const wrapper = container.querySelector('[slot="icon"]');
    expect(wrapper).toBeTruthy();
    expect(wrapper?.textContent).toBe("X");
    expect((wrapper as HTMLElement).style.display).toBe("contents");
  });

  test("renders nothing when snippet is absent", () => {
    const { container } = render(Probe, { props: { provide: false } });
    expect(container.querySelector('[slot="icon"]')).toBeNull();
  });
});
