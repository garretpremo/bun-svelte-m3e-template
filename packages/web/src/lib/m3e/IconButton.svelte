<script lang="ts">
import type { Snippet } from "svelte";
interface Props {
  variant?: "standard" | "filled" | "outlined" | "tonal";
  disabled?: boolean;
  toggle?: boolean;
  onclick?: (e: MouseEvent) => void;
  "aria-label"?: string;
  children?: Snippet;
}
const {
  variant = "standard",
  disabled,
  toggle,
  onclick,
  "aria-label": ariaLabel,
  children,
}: Props = $props();
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- `disabled` needs the same `|| undefined` guard `toggle` already has beside
     it: a caller passing `disabled={false}` would otherwise write
     `disabled="false"` on a not-yet-upgraded element, where presence is truthy —
     a permanently disabled button. Latent only because `disabled` has no
     default here, so nothing in this repo triggers it yet. -->
<m3e-icon-button
  {variant}
  disabled={disabled || undefined}
  toggle={toggle || undefined}
  {onclick}
  aria-label={ariaLabel}
>
  {@render children?.()}
</m3e-icon-button>
