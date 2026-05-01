import { env } from "../../env";

export function corsHeaders(originHeader: string | null): HeadersInit {
  const allowed = env.ALLOWED_ORIGINS.split(",").map(s => s.trim());
  const origin = originHeader && (allowed.includes("*") || allowed.includes(originHeader))
    ? originHeader
    : allowed[0] ?? "*";
  return {
    "access-control-allow-origin": origin,
    "access-control-allow-methods": "GET, POST, PUT, PATCH, DELETE, OPTIONS",
    "access-control-allow-headers": "content-type, authorization",
    "access-control-max-age": "600",
  };
}

export function preflight(req: Request): Response | undefined {
  if (req.method !== "OPTIONS") return undefined;
  return new Response(null, { status: 204, headers: corsHeaders(req.headers.get("origin")) });
}
