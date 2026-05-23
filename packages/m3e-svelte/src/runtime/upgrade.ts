import { tick } from "svelte";
import { browser } from "./env";

export function syncProperty<T>(
  el: HTMLElement | undefined,
  prop: string,
  value: T,
): void {
  if (!browser || !el) return;
  (el as unknown as Record<string, unknown>)[prop] = value;
}

export function syncManagedProperty<T>(
  el: HTMLElement | undefined,
  prop: string,
  value: T,
): void {
  if (!browser || !el) return;
  const tag = el.tagName.toLowerCase();
  void customElements.whenDefined(tag).then(async () => {
    await tick();
    const lit = el as unknown as { updateComplete?: Promise<unknown> };
    if (lit.updateComplete) await lit.updateComplete;
    (el as unknown as Record<string, unknown>)[prop] = value;
  });
}
