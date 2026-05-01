// Minimal type surface for @apijack/core, used at typecheck time only.
// apijack 1.11 ships TS source (no dist/.d.ts) that doesn't compile under
// our strict tsconfig. Vite/Bun runtime resolution is unaffected — this
// shim is selected only by tsc via the `paths` entry in tsconfig.json.
//
// When apijack publishes a built distribution with declarations, this
// shim can be deleted and the `paths` entry removed.

declare module "@apijack/core" {
  export interface RoutineStepResult {
    name: string;
    status: "ok" | "failed";
    output?: unknown;
    error?: string;
  }

  export interface RoutineResult {
    status: "ok" | "failed";
    output: Record<string, unknown>;
    steps: RoutineStepResult[];
    durationMs: number;
  }

  export interface RunRoutineOpts {
    vars?: Record<string, unknown>;
    env?: string;
    cwd?: string;
  }

  export interface Cli {
    run(): Promise<void>;
    runRoutine(name: string, opts?: RunRoutineOpts): Promise<RoutineResult>;
  }

  export interface AuthStrategy {
    readonly kind: string;
  }

  export class ApiKeyStrategy implements AuthStrategy {
    constructor(headerName: string, value: string);
    readonly kind: "api-key";
  }

  export interface CliOptions {
    name: string;
    description: string;
    version: string;
    specPath: string;
    auth: AuthStrategy;
    configPath?: string;
    sessionAuth?: unknown;
    generatedDir?: string;
    allowedCidrs?: string[];
    customCommandDefaults?: unknown;
  }

  export function createCli(options: CliOptions): Cli;
  export function runRoutine(name: string, opts?: RunRoutineOpts): Promise<RoutineResult>;
}
