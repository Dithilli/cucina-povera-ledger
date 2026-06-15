// Smoke test: spawn the MCP server, list tools, call a couple of read tools.
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";

const transport = new StdioClientTransport({
  command: "npx",
  args: ["tsx", "scripts/mcp-server.ts"],
  cwd: new URL("..", import.meta.url).pathname,
});
const client = new Client({ name: "smoke", version: "1.0.0" });
await client.connect(transport);

const { tools } = await client.listTools();
console.log("TOOLS:", tools.map((t) => t.name).join(", "));

const challenges = await client.callTool({ name: "list_challenges", arguments: {} });
console.log("\nlist_challenges →");
console.log(challenges.content[0].text.slice(0, 400));

const gen = await client.callTool({ name: "generate_week", arguments: { challenge: "cucina-povera" } });
const plan = JSON.parse(gen.content[0].text);
console.log("\ngenerate_week → ok:", plan.ok, "· total $" + plan.totalCost);
for (const d of plan.days ?? []) console.log("  " + d.day + "  " + d.dinner + "  " + d.calories + "kcal " + d.protein + "g $" + d.cost);

const genAi = await client.callTool({ name: "generate_week", arguments: { challenge: "cucina-povera", ai: true } });
if (genAi.isError) {
  console.log("\ngenerate_week ai=true → error:", genAi.content[0].text);
} else {
  const aiPlan = JSON.parse(genAi.content[0].text);
  console.log("\ngenerate_week ai=true → ok:", aiPlan.ok, aiPlan.reason ? "· " + aiPlan.reason : "");
  if (aiPlan.intro) console.log("  intro:", aiPlan.intro);
  for (const d of aiPlan.days ?? []) console.log("  " + d.dinner + " — " + (d.blurb || "").slice(0, 64));
}

await client.close();
console.log("\nSMOKE OK");
