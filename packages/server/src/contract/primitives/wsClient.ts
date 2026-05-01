import type { z } from "zod";
import type { MessageDefinition } from "./defineMessage";

type MessageRegistry = Record<string, Record<string, MessageDefinition<any>>>;

type MessageOf<TReg extends MessageRegistry> = TReg[keyof TReg][keyof TReg[keyof TReg]];

type PayloadOf<M extends MessageDefinition<any>> = M extends MessageDefinition<infer P>
  ? z.infer<P>
  : never;

export interface WsClientOptions {
  url: string;
  wsImpl?: (url: string) => WebSocket;
  reconnectMs?: number | false;
  getAuthToken?: () => string | undefined;
}

export interface WsClient<TReg extends MessageRegistry> {
  connect(): void;
  close(): void;
  on<T extends MessageOf<TReg>["type"]>(
    type: T,
    handler: (payload: PayloadOf<Extract<MessageOf<TReg>, { type: T }>>) => void,
  ): () => void;
  send<T extends MessageOf<TReg>["type"]>(
    type: T,
    payload: PayloadOf<Extract<MessageOf<TReg>, { type: T }>>,
  ): void;
  /** Escape hatch for tests; not in the public type. */
  rawSend(envelope: unknown): void;
}

export function createWsClient<TReg extends MessageRegistry>(
  registry: TReg,
  options: WsClientOptions,
): WsClient<TReg> {
  // Index every message by its `type` for fast parse.
  const byType = new Map<string, MessageDefinition<any>>();
  for (const group of Object.values(registry)) {
    for (const msg of Object.values(group)) {
      byType.set((msg as MessageDefinition<any>).type, msg as MessageDefinition<any>);
    }
  }

  const handlers = new Map<string, Set<(p: unknown) => void>>();
  let socket: WebSocket | null = null;

  const open = () => {
    const ctor = options.wsImpl ?? ((u: string) => new WebSocket(u));
    socket = ctor(options.url);
    socket.addEventListener("message", (e: any) => {
      try {
        const env = JSON.parse(e.data);
        const def = byType.get(env.type);
        if (!def) return;
        const parsed = def.payload.parse(env.payload);
        const set = handlers.get(env.type);
        if (set) for (const fn of set) fn(parsed);
      } catch (err) {
        console.warn("ws message parse error", err);
      }
    });
    socket.addEventListener("close", () => {
      if (options.reconnectMs !== false) {
        const ms = typeof options.reconnectMs === "number" ? options.reconnectMs : 1000;
        setTimeout(open, ms);
      }
    });
  };

  return {
    connect() {
      open();
    },
    close() {
      socket?.close();
      socket = null;
    },
    on(type, handler) {
      let set = handlers.get(type);
      if (!set) {
        set = new Set();
        handlers.set(type, set);
      }
      set.add(handler as (p: unknown) => void);
      return () => set!.delete(handler as (p: unknown) => void);
    },
    send(type, payload) {
      if (!socket || socket.readyState !== 1 /* OPEN */) {
        throw new Error(`ws not open; cannot send ${String(type)}`);
      }
      socket.send(JSON.stringify({ type, payload }));
    },
    rawSend(envelope) {
      if (!socket || socket.readyState !== 1) {
        throw new Error("ws not open");
      }
      socket.send(JSON.stringify(envelope));
    },
  };
}
