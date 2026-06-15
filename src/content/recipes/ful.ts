import type { Recipe } from "../types";

export const ful: Recipe = {
  slug: "ful",
  title: "Ful (Stewed Fava Beans)",
  cuisine: "ethiopian",
  blurb:
    "Slow-stewed fava beans mashed warm with onion, tomato, chile, and a swirl of berbere oil — the breakfast of the Horn of Africa, eaten with bread and a cup of tea.",
  servings: 4,
  perServing: { calories: 300, protein: 16 },
  estCostPerServing: 0.55,
  roles: ["breakfast", "lunch", "dinner"],
  ingredients: [
    { item: "dried fava beans (ful) — or 2 cans cooked", qty: "1 1/2 cups dry", cost: 1.4 },
    { item: "onion, diced", qty: "1", cost: 0.4 },
    { item: "tomato, diced", qty: "1", cost: 0.3 },
    { item: "green chile + garlic", qty: "1 / 2 cloves", cost: 0.25, spansWeeks: true },
    { item: "berbere or chile powder", qty: "1 tsp", cost: 0.15, spansWeeks: true },
    { item: "oil or niter kibbeh", qty: "2 tbsp", cost: 0.3, spansWeeks: true },
    { item: "lemon + salt", qty: "to taste", cost: 0.2, spansWeeks: true },
  ],
  method: [
    "If using dried favas, soak overnight, then simmer until completely soft, 1–2 hours (canned favas just need warming). Mash roughly, leaving some whole.",
    "Soften the onion and garlic in oil, add the tomato and chile, and cook to a soft sauce.",
    "Fold in the mashed favas with a little water, season with berbere and salt, and warm through.",
    "Finish with a squeeze of lemon and a swirl of berbere oil on top. Scoop with injera or bread.",
  ],
  modernMove:
    "Keep the texture half-mashed, half-whole so it has body and bite, and finish with a bright hit of lemon and a drizzle of spiced oil — the acid and the aromatic fat lift a humble bean pot into a proper meal.",
  notes:
    "Ful is the great shared breakfast across the Horn of Africa, the Red Sea, and the Middle East — proof the same cheap legume feeds a whole region.",
  tags: ["fava", "ful", "breakfast", "legumes", "protein"],
  sources: [
    { title: "Ful Medames — Wikipedia", url: "https://en.wikipedia.org/wiki/Ful_medames", note: "Stewed fava beans eaten as a breakfast staple across the Horn of Africa, the Red Sea, and the Middle East." },
  ],
};
