// packages/server/tests/primitives/wsClient.test.ts
import { describe, expect, test } from "bun:test";
import { notesMessages } from "../../src/contract/messages/notes";
import { createWsClient } from "../../src/contract/primitives/wsClient";

class FakeWebSocket {
  static OPEN = 1;
  readyState = FakeWebSocket.OPEN;
  sent: string[] = [];
  listeners: Record<string, Array<(e: unknown) => void>> = {};
  send(data: string) {
    this.sent.push(data);
  }
  close() {}
  addEventListener(name: string, fn: (e: unknown) => void) {
    let arr = this.listeners[name];
    if (!arr) {
      arr = [];
      this.listeners[name] = arr;
    }
    arr.push(fn);
  }
  removeEventListener() {}
  dispatch(name: string, e: unknown) {
    for (const fn of this.listeners[name] ?? []) fn(e);
  }
}

describe("createWsClient", () => {
  test("on(...) parses incoming payloads via zod and calls handlers", () => {
    const fake = new FakeWebSocket();
    const ws = createWsClient(
      { notes: notesMessages },
      { url: "ws://x", wsImpl: () => fake as unknown as WebSocket },
    );
    ws.connect();
    let received: unknown = null;
    ws.on("note:created", (payload: unknown) => {
      received = payload;
    });
    const note = {
      id: "11111111-1111-4111-8111-111111111111",
      userId: "22222222-2222-4222-8222-222222222222",
      title: "hi",
      body: "",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    fake.dispatch("message", { data: JSON.stringify({ type: "note:created", payload: note }) });
    expect(received).toEqual(note);
  });

  test("send(...) writes JSON envelope", () => {
    const fake = new FakeWebSocket();
    const ws = createWsClient(
      { notes: notesMessages },
      { url: "ws://x", wsImpl: () => fake as unknown as WebSocket },
    );
    ws.connect();
    // no client-to-server messages in `notes`; adapt to just verify shape
    // bypass type check for the test
    (ws as any).rawSend({
      type: "note:deleted",
      payload: { id: "33333333-3333-4333-8333-333333333333" },
    });
    expect(fake.sent[0]).toContain('"type":"note:deleted"');
  });
});
