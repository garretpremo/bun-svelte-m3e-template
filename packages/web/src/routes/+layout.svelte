<script lang="ts">
import "$lib/m3e/setup";
import "../styles/theme.css";
import "../styles/animations.css";
import "../styles/material-symbols.css";
import NetworkRequestIndicator from "$lib/components/NetworkRequestIndicator.svelte";
import AppBar from "$lib/m3e/AppBar.svelte";
import Icon from "$lib/m3e/Icon.svelte";
import IconButton from "$lib/m3e/IconButton.svelte";
import Theme from "$lib/m3e/Theme.svelte";
import { themeState } from "$lib/stores/theme.svelte";
let { children } = $props();
</script>

<Theme color={themeState.color} scheme={themeState.scheme} motion="expressive">
  <AppBar size="small">
    {#snippet leadingIcon()}
      <IconButton aria-label="Menu"><Icon name="menu" /></IconButton>
    {/snippet}
    {#snippet title()}
      <a href="/" style="text-decoration: none; color: inherit;">App</a>
    {/snippet}
    {#snippet trailingIcon()}
      <a href="/showcase" aria-label="Showcase"><IconButton aria-label="Showcase"><Icon name="palette" /></IconButton></a>
    {/snippet}
  </AppBar>
  <main class="page-content">
    {@render children?.()}
  </main>
</Theme>
<NetworkRequestIndicator />
