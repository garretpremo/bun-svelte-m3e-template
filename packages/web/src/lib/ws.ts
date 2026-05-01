import { createWsClient, allMessages } from "@app/server/contract";
import { browser } from "$app/environment";

const url = browser
  ? `${location.protocol === "https:" ? "wss" : "ws"}://${location.host}/ws`
  : "ws://localhost:3000/ws";

export const ws = createWsClient(allMessages, { url });

if (browser) {
  ws.connect();
}
