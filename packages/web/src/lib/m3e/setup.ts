// Chrome-tier eager preload, sourced from @app/m3e-svelte.
// To use a non-chrome component, import it directly from "@app/m3e-svelte" —
// each generated wrapper does its own browser-gated dynamic import.
import { browser } from "$app/environment";

if (browser) void import("@app/m3e-svelte/presets/chrome");
