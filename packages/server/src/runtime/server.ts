import { allRoutes } from "../contract/routes";
import { env } from "../env";
import { type RouteBinding, dispatchHttp } from "./dispatch";
import { notesBindings } from "./handlers/notes";
import { usersBindings } from "./handlers/users";
import { corsHeaders, preflight } from "./middleware/cors";
import { scalarDocsResponse } from "./openapi/docs";
import { generateOpenApi } from "./openapi/generate";
import { serveStatic } from "./static";
import { dispatchWs, wsOnClose, wsOnOpen } from "./ws";

const bindings: RouteBinding[] = [...notesBindings, ...usersBindings];

const openapiSpec = JSON.stringify(
  generateOpenApi(allRoutes, { title: "App API", version: "0.1.0" }),
  null,
  2,
);

export function start(): void {
  Bun.serve({
    port: env.PORT,
    async fetch(req, server) {
      const url = new URL(req.url);

      const pre = preflight(req);
      if (pre) return pre;

      if (url.pathname === "/ws") {
        if (server.upgrade(req)) return new Response(null, { status: 101 });
        return new Response("upgrade failed", { status: 400 });
      }

      let res: Response;
      if (url.pathname === "/openapi.json") {
        res = new Response(openapiSpec, { headers: { "content-type": "application/json" } });
      } else if (url.pathname === "/docs") {
        res = scalarDocsResponse();
      } else if (url.pathname.startsWith("/api/")) {
        res = await dispatchHttp(req, bindings);
      } else {
        res = await serveStatic(req);
      }

      // Layer CORS on every response.
      const cors = corsHeaders(req.headers.get("origin"));
      const headers = new Headers(res.headers);
      for (const [k, v] of Object.entries(cors)) headers.set(k, v as string);
      return new Response(res.body, { status: res.status, headers });
    },
    websocket: {
      open: wsOnOpen,
      close: wsOnClose,
      message(ws, msg) {
        dispatchWs(ws, msg);
      },
    },
  });
  console.log(`server listening on http://localhost:${env.PORT}`);
}
