// packages/server/tests/primitives/defineMessage.test.ts
import { describe, expect, test } from "bun:test";
import { z } from "zod";
import { defineMessage } from "../../src/contract/primitives/defineMessage";

describe("defineMessage", () => {
  test("preserves config and brands the message", () => {
    const msg = defineMessage({
      type: "chat:send",
      payload: z.object({ text: z.string() }),
      direction: "client-to-server",
    });
    expect(msg.type).toBe("chat:send");
    expect(msg.direction).toBe("client-to-server");
    expect(msg.__brand).toBe("apijack.message");
  });
});
