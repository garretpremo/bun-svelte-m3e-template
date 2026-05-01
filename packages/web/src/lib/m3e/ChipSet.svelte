<script lang="ts">
import { browser } from "$app/environment";
import type { Snippet } from "svelte";
if (browser) void import("@m3e/chips");
interface Props {
  children?: Snippet;
}
let { children }: Props = $props();
</script>

<m3e-chip-set>{@render children?.()}</m3e-chip-set>
