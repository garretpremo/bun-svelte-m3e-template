<script lang="ts">
import { browser } from "$app/environment";
import type { Snippet } from "svelte";
if (browser) void import("@m3e/fab");
interface Props {
  size?: "small" | "medium" | "large";
  variant?: "surface" | "primary" | "secondary" | "tertiary";
  onclick?: (e: MouseEvent) => void;
  "aria-label"?: string;
  children?: Snippet;
}
const {
  size = "medium",
  variant = "primary",
  onclick,
  "aria-label": al,
  children,
}: Props = $props();
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<m3e-fab {size} {variant} {onclick} aria-label={al}>{@render children?.()}</m3e-fab>
