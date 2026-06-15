import { chromium } from "playwright-core";

const BASE = "http://localhost:5173/cucina-povera-ledger/";
const OUT = "/Users/davidszarzynski/Desktop";

const browser = await chromium.launch({ channel: "chrome" });
const page = await browser.newPage({
  viewport: { width: 960, height: 1000 },
  deviceScaleFactor: 2,
});
const errors = [];
page.on("console", (m) => m.type() === "error" && errors.push(m.text()));
page.on("pageerror", (e) => errors.push("pageerror: " + e.message));

async function shot(name) {
  await page.waitForTimeout(1200);
  await page.screenshot({ path: `${OUT}/${name}.png`, fullPage: true });
  console.log("shot", name);
}

await page.goto(BASE, { waitUntil: "networkidle" });
await shot("cucina-1-about");

await page.click('button.tab:has-text("The challenge")');
await page.waitForLoadState("networkidle");
await shot("cucina-2-challenge");

await page.locator(".week-card-summary").first().click();
await shot("cucina-3-week-open");

await page.click('button.tab:has-text("The ledger")');
await shot("cucina-4-ledger");

console.log("console errors:", errors.slice(0, 8));
await browser.close();
