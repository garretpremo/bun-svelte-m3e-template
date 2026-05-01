import { browser } from "$app/environment";
import { allMessages, createWsClient } from "@app/server/contract";

const url = browser
  ? `${location.protocol === "https:" ? "wss" : "ws"}://${location.host}/ws`
  : "ws://localhost:3000/ws";

export const ws = createWsClient(allMessages, { url });

if (browser) {
  ws.connect();
}
