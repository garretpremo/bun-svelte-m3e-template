import { test as base } from "@playwright/test";
import { cli } from "../cli";

interface SeedResult {
  userId: string;
  noteIds: string[];
  token: string;
}

interface CreatedUser {
  id: string;
  email: string;
  displayName: string;
  createdAt: string;
}

interface CreatedNote {
  id: string;
  userId: string;
  title: string;
  body: string;
}

export const test = base.extend<{ seed: SeedResult }>({
  seed: async ({}, use) => {
    const result = await cli.runRoutine("seed-user-with-notes");
    if (result.status !== "ok") {
      throw new Error(
        `seed-user-with-notes failed: ${JSON.stringify(result.steps)}`,
      );
    }

    // The user output is exposed via the named output alias.
    const user = (result.output as { user?: CreatedUser }).user;
    if (!user) {
      throw new Error(
        `seed-user-with-notes returned no user: ${JSON.stringify(result.output)}`,
      );
    }

    // Iterated note steps don't aggregate into an array under a single
    // alias — collect their ids from the per-step log instead.
    const noteIds = result.steps
      .filter((s) => s.name === "create-note" && s.status === "ok")
      .map((s) => (s.output as CreatedNote | undefined)?.id)
      .filter((id): id is string => typeof id === "string");

    await use({
      userId: user.id,
      noteIds,
      // The API has no real auth in the template; the user.id stands in
      // as a stable per-user token for fixture consumers.
      token: user.id,
    });

    const teardown = await cli.runRoutine("teardown-seed", {
      vars: { userId: user.id },
    });
    if (teardown.status !== "ok") {
      console.warn(
        `teardown-seed failed: ${JSON.stringify(teardown.steps)}`,
      );
    }
  },
});

export { expect } from "@playwright/test";
