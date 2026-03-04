export default {
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);

    const json = (obj: unknown, init: ResponseInit = {}) =>
      new Response(JSON.stringify(obj, null, 2), {
        ...init,
        headers: {
          "content-type": "application/json; charset=utf-8",
          ...(init.headers || {}),
        },
      });

    // health check
    if (url.pathname === "/health") {
      return json({ ok: true });
    }

    // time
    if (url.pathname === "/api/time") {
      return json({ ok: true, time: new Date().toISOString() });
    }

    // echo query
    if (url.pathname === "/api/echo") {
      const params = Object.fromEntries(url.searchParams.entries());
      return json({ ok: true, method: request.method, params });
    }

    // default
    return json({
      ok: true,
      message: "mcp-ollama-demo worker",
      routes: ["/health", "/api/time", "/api/echo"],
    });
  },
};
