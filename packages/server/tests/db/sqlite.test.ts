import { describe, expect, test } from "bun:test";
import { makeSqliteDb } from "../../src/runtime/db/sqlite";

describe("sqlite Db", () => {
  test("user create/get/delete round-trip", async () => {
    const db = makeSqliteDb(":memory:");
    const user = await db.users.create({ email: "a@b.co", displayName: "A" });
    expect(user.id).toBeString();
    expect(user.email).toBe("a@b.co");
    expect(user.displayName).toBe("A");
    const fetched = await db.users.get(user.id);
    expect(fetched).toEqual(user);
    const byEmail = await db.users.getByEmail("a@b.co");
    expect(byEmail?.id).toBe(user.id);
    expect(await db.users.delete(user.id)).toBe(true);
    expect(await db.users.get(user.id)).toBeNull();
    await db.close();
  });

  test("note create/list/get/delete round-trip + cascade", async () => {
    const db = makeSqliteDb(":memory:");
    const user = await db.users.create({ email: "n@b.co", displayName: "N" });
    const a = await db.notes.create(user.id, { title: "first", body: "hi" });
    const b = await db.notes.create(user.id, { title: "second", body: "" });
    const list = await db.notes.list({ limit: 10 });
    expect(list.map(n => n.id).sort()).toEqual([a.id, b.id].sort());
    expect((await db.notes.get(a.id))?.title).toBe("first");
    expect(await db.notes.delete(a.id)).toBe(true);
    expect(await db.notes.get(a.id)).toBeNull();
    // cascade
    await db.users.delete(user.id);
    expect(await db.notes.get(b.id)).toBeNull();
    await db.close();
  });

  test("createUser conflict on duplicate email", async () => {
    const db = makeSqliteDb(":memory:");
    await db.users.create({ email: "x@x.co", displayName: "X" });
    let threw = false;
    try { await db.users.create({ email: "x@x.co", displayName: "Y" }); }
    catch (e: any) { threw = true; expect(String(e.message)).toContain("UNIQUE"); }
    expect(threw).toBe(true);
    await db.close();
  });
});
