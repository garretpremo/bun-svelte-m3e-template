import { cli } from "./cli";

export default async function globalSetup() {
  const r = await cli.runRoutine("setup-baseline");
  if (r.status !== "ok") {
    console.warn("setup-baseline did not fully succeed; continuing", r.steps);
  }
}
