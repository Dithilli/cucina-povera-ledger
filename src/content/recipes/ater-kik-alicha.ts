import type { Recipe } from "../types";

export const aterKikAlicha: Recipe = {
  slug: "ater-kik-alicha",
  title: "Ater Kik Alicha",
  cuisine: "ethiopian",
  blurb:
    "Split peas cooked down to a smooth, soft purée with turmeric and aromatics — the silkiest of the gentle pea dishes, mild enough to soothe and rich enough to satisfy.",
  servings: 4,
  perServing: { calories: 290, protein: 16 },
  estCostPerServing: 0.55,
  roles: ["dinner", "lunch"],
  ingredients: [
    { item: "yellow split peas", qty: "1 1/2 cups", cost: 1.0 },
    { item: "onion, finely chopped", qty: "1", cost: 0.4 },
    { item: "garlic + ginger", qty: "3 cloves / 1 tbsp", cost: 0.3, spansWeeks: true },
    { item: "turmeric", qty: "1 tsp", cost: 0.2, spansWeeks: true },
    { item: "oil or niter kibbeh", qty: "3 tbsp", cost: 0.4, spansWeeks: true },
    { item: "korarima (Ethiopian cardamom) or green cardamom, optional", qty: "a pinch", cost: 0.2, spansWeeks: true },
    { item: "salt", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Simmer the rinsed split peas in plenty of water until they completely fall apart into a loose purée, 45–60 minutes; mash or briefly blend for the characteristic smoothness.",
    "Soften the onion in the oil until translucent, then add garlic, ginger, turmeric, and korarima and cook a minute.",
    "Stir the puréed peas into the aromatics, loosening with their cooking liquid to a smooth, pourable consistency.",
    "Simmer a few minutes to marry, salt to taste, and serve over injera.",
  ],
  modernMove:
    "Where kik alicha keeps some whole peas, ater kik alicha is taken all the way to a silky purée — a pinch of fragrant korarima at the end lifts it from plain to perfumed.",
  notes:
    "The distinction is texture: 'ater kik' is the smooth, fully-broken-down version of the same gentle yellow-pea dish.",
  tags: ["alicha", "split-peas", "puree", "dinner", "mild"],
  sources: [
    { title: "Vegan Richa — Ethiopian Split Pea Stew (Kik Alicha)", url: "https://www.veganricha.com/ethiopian-split-pea-stew-kik-alicha/", note: "Yellow split peas cooked soft with turmeric, onion, garlic, and ginger and served on injera — the gentle pea dish this purées." },
    { title: "Kittee Berns — Teff Love: Adventures in Vegan Ethiopian Cooking", note: "Cookbook covering Ye'kik Alicha, the mild yellow-pea alicha." },
  ],
};
