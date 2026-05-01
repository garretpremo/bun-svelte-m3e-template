<script lang="ts">
  import { browser } from "$app/environment";
  import type { Snippet } from 'svelte';
  if (browser) void import("@m3e/radio-group");
  interface Props { name: string; value?: string; onchange?: (v: string) => void; children?: Snippet }
  let { name, value = $bindable(''), onchange, children }: Props = $props();
</script>

<m3e-radio-group {name} {value} onchange={(e: Event) => { value = (e.target as any).value; onchange?.(value); }}>
  {@render children?.()}
</m3e-radio-group>
