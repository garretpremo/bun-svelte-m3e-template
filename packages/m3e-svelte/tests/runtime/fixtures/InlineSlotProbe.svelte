<script lang="ts">
  let { provide }: { provide: boolean } = $props();
</script>

{#snippet icon()}X{/snippet}

<m3e-fake>
  {#if provide}<div slot="icon" style="display:contents">{@render icon()}</div>{/if}
</m3e-fake>
