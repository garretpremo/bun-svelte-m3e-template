<script lang="ts">
import { browser } from "$app/environment";
import type { Snippet } from "svelte";
if (browser) void import("@m3e/shape");

interface Props {
  name?: string;
  size?: string;
  color?: string;
  onclick?: (e: MouseEvent) => void;
  children?: Snippet;
}
const { name = "circle", size = "96px", color, onclick, children }: Props = $props();
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<m3e-shape
  {name}
  {onclick}
  style:--m3e-shape-size={size}
  style:--m3e-shape-container-color={color ?? null}
>
  {@render children?.()}
</m3e-shape>
