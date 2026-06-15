import type { Recipe } from "../types";

export const rizBriseBase: Recipe = {
  slug: "riz-brise-base",
  title: "Riz Brisé",
  cuisine: "senegalese",
  blurb:
    "Steamed broken rice — the soft, fracture-grained plate under every Senegalese meal, each chip drinking up the sauce the way a whole grain never could.",
  servings: 6,
  perServing: { calories: 200, protein: 4 },
  estCostPerServing: 0.2,
  roles: ["base"],
  ingredients: [
    { item: "broken (riz brisé) rice", qty: "3 cups", cost: 1.0 },
    { item: "water", qty: "as needed", cost: 0.02 },
    { item: "salt", qty: "to taste", cost: 0.02 },
  ],
  method: [
    "Rinse the broken rice in cold water, rubbing gently, changing the water until it runs clear; soak about 20 minutes and drain.",
    "Bring lightly salted water to a boil and add the rice; cook until just past al dente, then drain off most of the water.",
    "Return the rice to a low heat, cover, and let it steam-cook gently, lifting and folding with a flat ladle now and then, until tender and slightly sticky — about 20–30 minutes.",
    "Leave the bottom layer to catch and crisp into khogne, the prized crunchy crust, and serve the rice mounded under the day's sauce.",
  ],
  modernMove:
    "Broken grains have far more cut surface than whole rice, so they soak up sauce greedily and steam up softer — the textural reason Senegalese cooks prize the 'rejects' over perfect long grain.",
  notes:
    "Khogne — the crunchy near-burnt layer at the bottom of the pot — is scraped out and shared with guests as a delicacy, not waste.",
  zeroWasteHero: true,
  tags: ["base", "rice", "broken-rice", "foundation", "senegalese"],
  sources: [
    {
      title: "Yummy Medley — Thieboudienne (Senegalese Jollof Rice and Fish)",
      url: "https://www.yummymedley.com/thieboudienne-senegalese-rice-fish/",
      note: "Rinsing and soaking broken rice, the low-heat steam-cook to softness, and the khogne crust.",
    },
  ],
};
