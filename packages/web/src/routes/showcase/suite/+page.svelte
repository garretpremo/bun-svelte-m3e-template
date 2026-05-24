<script lang="ts">
import * as Suite from "@app/m3e-svelte";
import manifest from "@app/m3e-svelte/generated/manifest.json";
import type { Component } from "svelte";

type Meta = { package: string; className: string; classification: string };

const componentName = (tag: string) =>
  tag
    .replace(/^m3e-/, "")
    .split("-")
    .map((s) => (s ? s[0]!.toUpperCase() + s.slice(1) : ""))
    .join("");

const registry = Suite as unknown as Record<string, Component>;

const components = Object.entries(manifest as Record<string, Meta>)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([tag, meta]) => {
    const name = componentName(tag);
    return { tag, meta, name, C: registry[name] };
  })
  .filter((x): x is typeof x & { C: Component } => Boolean(x.C));
</script>

<section>
  <h2>Suite — every wrapper</h2>
  <p class="lede">
    Each tile renders a generated wrapper from <code>@app/m3e-svelte</code> with default
    props. Use it as a visual baseline; the package README has the full API per component.
  </p>

  <div class="grid">
    {#each components as { tag, meta, name, C } (tag)}
      <article class="tile">
        <header>
          <code>{tag}</code>
          <span class="badge {meta.classification}">{meta.classification}</span>
        </header>
        <div class="stage">
          <C />
        </div>
        <footer><code>{name}</code></footer>
      </article>
    {/each}
  </div>
</section>

<style>
.lede {
  margin: var(--space-md) 0 var(--space-2xl);
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: var(--space-md);
}
.tile {
  background: var(--md-sys-color-surface-container);
  color: var(--md-sys-color-on-surface);
  border-radius: 12px;
  padding: var(--space-md);
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}
.tile header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--space-sm);
  font-size: 12px;
}
.badge {
  padding: 2px 8px;
  border-radius: 999px;
  font-size: 10px;
  background: var(--md-sys-color-surface-container-high);
  color: var(--md-sys-color-on-surface-variant);
  white-space: nowrap;
}
.badge.property-driven {
  background: var(--md-sys-color-tertiary-container);
  color: var(--md-sys-color-on-tertiary-container);
}
.badge.selection-managed {
  background: var(--md-sys-color-secondary-container);
  color: var(--md-sys-color-on-secondary-container);
}
.stage {
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.tile footer code {
  font-size: 12px;
  color: var(--md-sys-color-on-surface-variant);
}
</style>
