import type { ServerWebSocket } from "bun";

const sockets = new Set<ServerWebSocket<undefined>>();

export function wsOnOpen(ws: ServerWebSocket<undefined>): void {
  sockets.add(ws);
}
export function wsOnClose(ws: ServerWebSocket<undefined>): void {
  sockets.delete(ws);
}

/** No client→server messages in MVP; reserved for future. */
export function dispatchWs(ws: ServerWebSocket<undefined>, msg: string | Buffer): void {
  void ws;
  void msg;
}

export function broadcast(envelope: { type: string; payload: unknown }): void {
  const data = JSON.stringify(envelope);
  for (const s of sockets) s.send(data);
}
