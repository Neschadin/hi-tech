<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Cursor Cloud specific instructions

Package manager is **bun** (pinned `bun@1.3.14` via `packageManager`). Node 22 is present but scripts assume bun. Commands are in `package.json`; standard ones: `bun run dev`, `bun run check` (biome), `bun run ts-check`, `bun run build`.

Two runnable services:

- **Next.js site** (`bun run dev`, port 3000): the marketing/site app. Works standalone.
- **status-proxy** Cloudflare Worker (`bun run dev:status-proxy`, wrangler on port 8787): backs the repair-status lookup on `/status`.

Non-obvious gotchas:

- The `/api/repair-status` rewrite to `http://localhost:8787/` is only registered when `NODE_ENV === "development"` (see `next.config.ts`). So the `/status` form only works in `bun run dev` **with the status-proxy worker also running**; the two dev servers are separate processes.
- The worker forwards to a 1C backend via `ONEC_URL`/`ONEC_USER`/`ONEC_PASS` (worker secrets / `.dev.vars`, see `.dev.vars.example`). Without those, a well-formed submission returns **502 "Upstream unavailable"** — this is expected locally and still proves the full proxy chain. Malformed input returns 400 regardless.
- Google Maps on `/contacts` needs `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` (and public `NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID`); optional — the rest of the site renders fine without it.
- Deploy/preview commands (`bun run preview`/`deploy`) build via OpenNext for Cloudflare and are not needed for local dev.
