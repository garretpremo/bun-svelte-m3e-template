<script lang="ts">
import { browser } from "$app/environment";
import type { Snippet } from "svelte";
if (browser) void import("@m3e/form-field");

interface Props {
  label: string;
  variant?: "filled" | "outlined";
  error?: string;
  children?: Snippet;
}
let { label, variant = "outlined", error, children }: Props = $props();
</script>

<m3e-form-field {label} {variant} aria-invalid={error ? 'true' : null}>
  {@render children?.()}
  {#if error}<span slot="supporting-text" data-error>{error}</span>{/if}
</m3e-form-field>
