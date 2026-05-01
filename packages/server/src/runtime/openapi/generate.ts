import { z } from "zod";
import type { RouteDefinition } from "../../contract/primitives/defineRoute";

export interface OpenApiSpec {
  openapi: "3.1.0";
  info: { title: string; version: string; description?: string };
  paths: Record<string, Record<string, any>>;
  components: { schemas: Record<string, unknown> };
}

interface JsonSchema { [k: string]: unknown }

// Zod 4 internals: `_def.type` is a string tag like "string", "object",
// "array", "literal", "enum", "optional", "default", "never", etc.
// Object shape is plain `_def.shape` (not a function), array element is
// `_def.element`, optional/default wrap an `innerType`.
function zodToJsonSchema(schema: z.ZodType): JsonSchema {
  const def: any = (schema as any)._def;
  switch (def?.type) {
    case "string":  return { type: "string" };
    case "number":  return { type: "number" };
    case "boolean": return { type: "boolean" };
    case "literal": {
      const vals = def.values as unknown[];
      return vals.length === 1 ? { const: vals[0] } : { enum: vals };
    }
    case "enum": {
      const entries = def.entries as Record<string, unknown>;
      return { type: "string", enum: Object.values(entries) };
    }
    case "array":   return { type: "array", items: zodToJsonSchema(def.element) };
    case "object": {
      const shape = def.shape as Record<string, z.ZodType>;
      const properties: Record<string, JsonSchema> = {};
      const required: string[] = [];
      for (const [k, v] of Object.entries(shape)) {
        properties[k] = zodToJsonSchema(v);
        const isOptional = (v as any).isOptional?.() ?? false;
        if (!isOptional) required.push(k);
      }
      return required.length
        ? { type: "object", properties, required }
        : { type: "object", properties };
    }
    case "optional": return zodToJsonSchema(def.innerType);
    case "default":  return zodToJsonSchema(def.innerType);
    case "nullable": return { ...zodToJsonSchema(def.innerType), nullable: true };
    case "never":    return {};
    default:         return {};
  }
}

function objectShape(schema: z.ZodType): Record<string, z.ZodType> | null {
  const def: any = (schema as any)._def;
  if (def?.type === "object") return def.shape as Record<string, z.ZodType>;
  return null;
}

export function generateOpenApi(
  registry: Record<string, Record<string, RouteDefinition<any, any, any, any>>>,
  info: { title: string; version: string; description?: string },
): OpenApiSpec {
  const paths: Record<string, Record<string, any>> = {};
  for (const group of Object.values(registry)) {
    for (const route of Object.values(group)) {
      const path = route.path.replace(/:(\w+)/g, "{$1}");
      paths[path] ??= {};
      const op: Record<string, any> = {
        operationId: route.operationId,
        parameters: [] as unknown[],
        responses: {
          200: {
            description: "ok",
            content: { "application/json": { schema: zodToJsonSchema(route.response) } },
          },
        },
      };
      if (route.summary !== undefined) op.summary = route.summary;
      if (route.description !== undefined) op.description = route.description;
      if (route.tags !== undefined) op.tags = [...route.tags];
      if (route.params) {
        const ps = objectShape(route.params);
        if (ps) {
          for (const [name, schema] of Object.entries(ps)) {
            (op.parameters as unknown[]).push({
              name, in: "path", required: true, schema: zodToJsonSchema(schema),
            });
          }
        }
      }
      if (route.query) {
        const qs = objectShape(route.query);
        if (qs) {
          for (const [name, schema] of Object.entries(qs)) {
            (op.parameters as unknown[]).push({
              name, in: "query", required: false, schema: zodToJsonSchema(schema),
            });
          }
        }
      }
      if (route.body) {
        op.requestBody = {
          required: true,
          content: { "application/json": { schema: zodToJsonSchema(route.body) } },
        };
      }
      if (route.errors) {
        for (const [code, schema] of Object.entries(route.errors)) {
          op.responses[code] = {
            description: `error ${code}`,
            content: { "application/json": { schema: zodToJsonSchema(schema) } },
          };
        }
      }
      paths[path]![route.method.toLowerCase()] = op;
    }
  }
  return { openapi: "3.1.0", info, paths, components: { schemas: {} } };
}
