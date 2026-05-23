import { render } from "@testing-library/svelte";
import { describe, expect, test } from "vitest";
import Probe from "./fixtures/InlineSlotProbe.svelte";

// The generator inlines slot projection as `<div slot="x" style="display:contents">`
// directly inside the custom element. A standalone <Slot> component cannot hold a
// `slot=` attribute (Svelte 5 requires it on a child of a component / descendant of a
// custom element), so this test pins the inline pattern the templates emit.
describe("inline slot projection (generator pattern)", () => {
  test("renders a slot div with display:contents when the snippet is provided", () => {
    const { container } = render(Probe, { props: { provide: true } });
    const wrapper = container.querySelector('[slot="icon"]');
    expect(wrapper).toBeTruthy();
    expect(wrapper?.textContent).toBe("X");
    expect((wrapper as HTMLElement).style.display).toBe("contents");
  });

  test("renders nothing in the slot when the snippet is absent", () => {
    const { container } = render(Probe, { props: { provide: false } });
    expect(container.querySelector('[slot="icon"]')).toBeNull();
  });
});
