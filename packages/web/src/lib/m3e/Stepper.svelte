<script lang="ts">
  import { browser } from "$app/environment";
  import type { Snippet } from 'svelte';
  if (browser) void import("@m3e/stepper");
  interface Props { activeStep?: number; children?: Snippet }
  let { activeStep = 0, children }: Props = $props();
</script>

<m3e-stepper active-step={activeStep}>{@render children?.()}</m3e-stepper>
