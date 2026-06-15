# Agent access — the MCP server

`scripts/mcp-server.ts` is an [MCP](https://modelcontextprotocol.io) server that lets
an agent **use** the app (not just read the rendered page): browse the challenge,
generate a constraint-satisfying week, log days, and read stats. It runs over
stdio and talks to the same Supabase backend the web app does.

Run it standalone: `npm run mcp`.

## Tools

| Tool | What it does | Needs |
|---|---|---|
| `list_challenges` | The cuisines/challenges and their default targets | anon (public) |
| `list_weeks` | A challenge's themed weeks (theme, cultural context, dishes, `has_plan`) | anon |
| `get_week` | One week incl. the full plan (Sunday engine, 7 days, shopping) | anon |
| `list_recipes` | The recipe library (title, macros, cost, tags) | anon |
| `get_recipe` | One recipe in full (ingredients, method, modern move) | anon |
| `generate_week` | Deterministically assemble a passing 7-day week, certified by the engine | anon |
| `get_stats` | The user's streak, this-week-vs-budget, efficiency stats | service + user |
| `log_day` | Log a day; returns whether it's **kept** (under cal, over protein, zero waste) | service + user |
| `set_targets` | Update calorie target / protein floor / weekly budget / active week | service + user |

The read tools (`list_*`, `get_*`, `generate_week`) only need the public anon key.
The write/stats tools act **as a specific user** and need the service-role key plus
that user's email.

## Configuration

The server reads env from `.env.local` next to the repo (the same file the web app
and seed use), so usually you set nothing in the MCP host config. Required:

```
VITE_SUPABASE_URL="https://<ref>.supabase.co"
VITE_SUPABASE_ANON_KEY="sb_publishable_…"     # reads
# For log_day / get_stats / set_targets:
SUPABASE_SERVICE_ROLE_KEY="sb_secret_…"        # writes (bypasses RLS)
CUCINA_USER_EMAIL="you@email.com"              # whose ledger to read/write
```

> The user must exist: open the app once and "Save to account" (magic link) with
> that email so it resolves to a Supabase account. Until then, only the read tools
> work.

### Claude Code (project-scoped)

```bash
claude mcp add cucina-povera -- npx tsx /ABS/PATH/cucina-povera-ledger/scripts/mcp-server.ts
```

or commit a `.mcp.json` in the repo:

```json
{
  "mcpServers": {
    "cucina-povera": {
      "command": "npx",
      "args": ["tsx", "scripts/mcp-server.ts"],
      "cwd": "/ABS/PATH/cucina-povera-ledger"
    }
  }
}
```

### Claude Desktop

`~/Library/Application Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "cucina-povera": {
      "command": "npx",
      "args": ["tsx", "/ABS/PATH/cucina-povera-ledger/scripts/mcp-server.ts"]
    }
  }
}
```

(The server loads `.env.local` by absolute path relative to the script, so `cwd`
isn't required for env to resolve.)

## Smoke test

`node scripts/mcp-smoke.mjs` spawns the server, lists tools, and calls
`list_challenges` + `generate_week` — a quick check that it's wired up.
