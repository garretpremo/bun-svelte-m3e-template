<script lang="ts">
  import type { Snippet } from "svelte";
  import Slot from "../../../src/runtime/Slot.svelte";
  let { provide }: { provide: boolean } = $props();
  const icon: Snippet = $derived(provide ? probe : (undefined as unknown as Snippet));
</script>

{#snippet probe()}X{/snippet}
<Slot snippet={icon} name="icon" />
