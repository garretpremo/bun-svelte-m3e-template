<script lang="ts">
import type { Snippet } from "svelte";
interface Props {
  size?: "small" | "medium" | "large";
  centered?: boolean;
  leadingIcon?: Snippet;
  title?: Snippet;
  trailingIcon?: Snippet;
}
let { size = "small", centered = false, leadingIcon, title, trailingIcon }: Props = $props();
</script>

<!--
  `centered={centered || undefined}`, never a bare `{centered}`. Svelte writes an
  *attribute* on a custom element that has not upgraded yet, and `centered={false}`
  stringifies to `centered="false"` — for a boolean attribute presence is truthy,
  so the bar centred its title on every page. Confirmed in a browser:
  `centered="false"` gives `hasAttribute() === true` and `el.centered === true`.

  It lost the race every time rather than intermittently: m3e-app-bar is
  eager-loaded via presets/chrome.ts, but that import is still async, so the
  layout renders before the element upgrades and the attribute path always wins.

  The generator emits `|| undefined` for every boolean attribute (see
  scripts/templates/wrapper.ts). Hand-written wrappers have to match it by hand;
  tests/unit/m3e/boolean-attrs.test.ts enforces that they do.
-->
<m3e-app-bar {size} centered={centered || undefined}>
  {#if leadingIcon}<div slot="leading-icon">{@render leadingIcon()}</div>{/if}
  {#if title}<div slot="title">{@render title()}</div>{/if}
  {#if trailingIcon}<div slot="trailing-icon">{@render trailingIcon()}</div>{/if}
</m3e-app-bar>
