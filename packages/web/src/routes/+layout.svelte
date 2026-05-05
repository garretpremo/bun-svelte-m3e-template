<script lang="ts">
import "$lib/m3e/setup";
import "../styles/theme.css";
import "../styles/animations.css";
import "../styles/material-symbols.css";
import NetworkRequestIndicator from "$lib/components/NetworkRequestIndicator.svelte";
import AppBar from "$lib/m3e/AppBar.svelte";
import AppNav from "$lib/m3e/AppNav.svelte";
import DrawerContainer from "$lib/m3e/DrawerContainer.svelte";
import Icon from "$lib/m3e/Icon.svelte";
import IconButton from "$lib/m3e/IconButton.svelte";
import Theme from "$lib/m3e/Theme.svelte";
import { themeState } from "$lib/stores/theme.svelte";
let { children } = $props();
</script>

<Theme color={themeState.color} scheme={themeState.scheme} motion="expressive">
  <AppBar size="small">
    {#snippet leadingIcon()}
      <IconButton toggle aria-label="Menu">
        <Icon name="menu" />
        <m3e-icon slot="selected" name="menu_open"></m3e-icon>
        <m3e-drawer-toggle for="nav-drawer"></m3e-drawer-toggle>
      </IconButton>
    {/snippet}
    {#snippet title()}
      <a href="/" class="title-link">App</a>
    {/snippet}
  </AppBar>
  <DrawerContainer start startMode="auto" startId="nav-drawer">
    {#snippet startSlot()}
      <AppNav />
    {/snippet}
    <main class="page-content">
      {@render children?.()}
    </main>
  </DrawerContainer>
</Theme>
<NetworkRequestIndicator />

<style>
:global(html) {
  overflow: hidden;
}
:global(body) {
  height: 100dvh;
  display: flex;
  flex-direction: column;
  margin: 0;
}
:global(m3e-theme) {
  display: contents;
}
:global(m3e-app-bar) {
  --m3e-app-bar-container-color: var(--md-sys-color-surface-container);
  flex: none;
  z-index: 4;
}
:global(m3e-drawer-container) {
  flex: 1;
  min-height: 0;
  --m3e-drawer-container-width: auto;
}
:global(.m3e-drawer-start) {
  padding: var(--space-sm);
  min-width: 240px;
  box-sizing: border-box;
}
.page-content {
  height: 100%;
  overflow: auto;
  min-width: 0;
}
.title-link {
  text-decoration: none;
  color: inherit;
}
</style>
