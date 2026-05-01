<script lang="ts">
  import type { Snippet } from 'svelte';
  interface Props {
    variant?: 'standard' | 'filled' | 'outlined' | 'tonal';
    disabled?: boolean;
    onclick?: (e: MouseEvent) => void;
    'aria-label'?: string;
    children?: Snippet;
  }
  let { variant = 'standard', disabled, onclick, 'aria-label': ariaLabel, children }: Props = $props();
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<m3e-icon-button {variant} {disabled} {onclick} aria-label={ariaLabel}>
  {@render children?.()}
</m3e-icon-button>
