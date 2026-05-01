<script lang="ts">
  import { getNetworkInflight } from "$lib/api.svelte";
  // Tiny progress strip at the top while any request is inflight.
  let active = $derived(getNetworkInflight() > 0);
</script>

{#if active}
  <div class="nri" aria-hidden="true"></div>
{/if}

<style>
  .nri {
    position: fixed;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: linear-gradient(90deg, transparent, var(--md-sys-color-primary), transparent);
    background-size: 200% 100%;
    animation: nri-slide 1.2s linear infinite;
    z-index: 1000;
  }
  @keyframes nri-slide {
    from { background-position: -100% 0; }
    to   { background-position:  100% 0; }
  }
</style>
