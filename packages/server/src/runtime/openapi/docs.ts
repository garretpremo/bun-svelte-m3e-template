const html = (specUrl: string) => `<!doctype html>
<html><head>
<meta charset="utf-8" />
<title>API Reference</title>
<meta name="viewport" content="width=device-width, initial-scale=1" />
</head><body>
<script id="api-reference" data-url="${specUrl}"></script>
<script src="https://cdn.jsdelivr.net/npm/@scalar/api-reference"></script>
</body></html>`;

export function scalarDocsResponse(): Response {
  return new Response(html("/openapi.json"), {
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}
