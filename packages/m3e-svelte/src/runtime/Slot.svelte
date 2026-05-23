<script lang="ts">
  import type { Snippet } from "svelte";
  let { snippet, name }: { snippet?: Snippet; name: string } = $props();
</script>

{#if snippet}
  <div slot={name} style="display:contents">{@render snippet()}</div>
{/if}
