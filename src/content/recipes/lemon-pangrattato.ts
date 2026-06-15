import type { Recipe } from "../types";

export const lemonPangrattato: Recipe = {
  slug: "lemon-pangrattato",
  title: "Lemon pangrattato",
  cuisine: "italian",
  blurb: "Toasted seasoned breadcrumbs — the \"poor man's parmesan,\" crunch for the whole week.",
  servings: 8,
  perServing: { calories: 70, protein: 2 },
  estCostPerServing: 0.2,
  roles: ["base"],
  ingredients: [
    { item: "stale bread, blitzed to coarse crumbs", qty: "~1 1/2 cups", cost: 1.0 },
    { item: "olive oil", qty: "3 tbsp", cost: 0.5, spansWeeks: true },
    { item: "lemon, zested", qty: "1", cost: 0.5 },
    { item: "parsley, finely chopped", qty: "a handful", cost: 0.3 },
    { item: "salt", qty: "to taste" },
  ],
  method: [
    "Tear or blitz stale bread into coarse, uneven crumbs — not fine like sand.",
    "Warm the oil in a pan over medium heat. Add the crumbs and toast, stirring almost constantly, until deep gold and crisp all the way through, 4–6 minutes. Don't walk away — they go from golden to burnt fast.",
    "Off the heat, toss with the lemon zest, parsley, and a good pinch of salt.",
    "Cool completely, then keep in a jar. Shower over pasta, beans, soup — anything that wants crunch.",
  ],
  modernMove:
    "Get them properly crisp (they should rattle in the jar), and add the lemon and parsley off the heat so they stay bright — heat would dull them.",
  zeroWasteHero: true,
  tags: ["base", "bread", "pangrattato", "make-ahead"],
};
