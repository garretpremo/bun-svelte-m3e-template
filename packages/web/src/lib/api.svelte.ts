import { createApiClient, allRoutes } from "@app/server/contract";
import { browser } from "$app/environment";

const inflightState = $state({ count: 0 });

const baseUrl = browser ? "" : "http://localhost:3000";

// Bun's `typeof fetch` requires `preconnect`, which an arrow function literal
// can't satisfy. Cast at the call site instead.
const fetchImpl = (async (input: RequestInfo | URL, init?: RequestInit) => {
  inflightState.count++;
  try {
    return await fetch(input, init);
  } finally {
    inflightState.count--;
  }
}) as unknown as typeof fetch;

export const api = createApiClient(allRoutes, { baseUrl, fetchImpl });

/** Read the live inflight count. Reactive when called from a .svelte file. */
export const getNetworkInflight = () => inflightState.count;
