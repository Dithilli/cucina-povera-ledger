import type { Recipe } from "../types";

export const timatimFitfit: Recipe = {
  slug: "timatim-fitfit",
  title: "Timatim Fitfit",
  cuisine: "ethiopian",
  blurb:
    "Torn day-old injera tossed with a fresh tomato-onion-chile salad and a little berbere oil — a no-cook zero-waste lunch where stale bread becomes the whole dish.",
  servings: 2,
  perServing: { calories: 320, protein: 8 },
  estCostPerServing: 0.6,
  roles: ["lunch", "side"],
  ingredients: [
    { item: "day-old injera, torn into bite-size pieces", qty: "3 pieces" },
    { item: "ripe tomatoes, diced", qty: "2", cost: 0.7 },
    { item: "red onion, diced", qty: "1/2", cost: 0.2 },
    { item: "green chile, minced", qty: "1", cost: 0.2 },
    { item: "lemon juice", qty: "2 tbsp", cost: 0.2 },
    { item: "oil + a pinch of berbere", qty: "2 tbsp", cost: 0.3, spansWeeks: true },
    { item: "salt", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Make a quick salad: combine the diced tomato, onion, and chile with lemon juice, oil, berbere, and salt. Let it sit a few minutes so the tomato weeps its juices.",
    "Tear the day-old injera into bite-size pieces in a wide bowl.",
    "Pour the tomato salad and all its juices over the injera and toss until every piece is moistened and stained red.",
    "Eat right away, while the injera still has some chew, before it goes fully soft.",
  ],
  modernMove:
    "This is panzanella with injera: the stale bread is the point, soaking up an acidic, oily tomato dressing. Toss and serve fast so the texture stays lively rather than slumping into mush.",
  zeroWasteHero: true,
  notes:
    "The simplest fitfit of all — no cooking, just a bright raw salad and yesterday's injera. The same idea works with leftover shiro or misir folded in.",
  tags: ["fitfit", "tomato", "zero-waste", "no-cook", "lunch"],
  sources: [
    { title: "Hannah Kaminsky — Bittersweet Blog", url: "https://bittersweetblog.com/2025/11/28/timatim-fitfit/", note: "Torn injera tossed with a fresh tomato salad and berbere dressing — the no-cook fitfit." },
    { title: "Fit-fit — Wikipedia", url: "https://en.wikipedia.org/wiki/Fit-fit", note: "The fitfit naming convention and the broader injera-salvage technique." },
  ],
};
