import type { z } from "zod";

export type MessageDirection = "client-to-server" | "server-to-client" | "bidirectional";

export interface MessageDefinition<TPayload extends z.ZodType = z.ZodNever> {
  __brand: "apijack.message";
  type: string;
  payload: TPayload;
  direction: MessageDirection;
  description?: string;
}

export interface MessageConfig<TPayload extends z.ZodType> {
  type: string;
  payload: TPayload;
  direction: MessageDirection;
  description?: string;
}

/** Define a typed WebSocket message. Used by the server dispatcher and
 *  the wsClient on the frontend. */
export function defineMessage<TPayload extends z.ZodType>(
  config: MessageConfig<TPayload>,
): MessageDefinition<TPayload> {
  return { __brand: "apijack.message", ...config };
}
