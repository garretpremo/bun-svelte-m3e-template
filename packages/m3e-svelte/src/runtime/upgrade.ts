import { tick } from "svelte";
import { browser } from "./env";

// `el` is typed `unknown` so generated wrappers can pass an M3E element whose
// mixin-based type isn't structurally `HTMLElement`. At runtime it always is.
export function syncProperty<T>(el: unknown, prop: string, value: T): void {
  if (!browser || !el) return;
  (el as Record<string, unknown>)[prop] = value;
}

export function syncManagedProperty<T>(el: unknown, prop: string, value: T): void {
  if (!browser || !el) return;
  const node = el as HTMLElement;
  const tag = node.tagName.toLowerCase();
  void customElements.whenDefined(tag).then(async () => {
    await tick();
    const lit = el as { updateComplete?: Promise<unknown> };
    if (lit.updateComplete) await lit.updateComplete;
    (el as Record<string, unknown>)[prop] = value;
  });
}
