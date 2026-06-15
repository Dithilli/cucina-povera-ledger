import type { Recipe } from "../types";

export const bozenaShiro: Recipe = {
  slug: "bozena-shiro",
  title: "Bozena Shiro",
  cuisine: "ethiopian",
  blurb:
    "The feast-day shiro — the same velvety chickpea-flour stew, but studded with sautéed bits of meat. The everyday made special with the smallest amount of protein doing the most work.",
  servings: 4,
  perServing: { calories: 340, protein: 19 },
  estCostPerServing: 0.95,
  roles: ["dinner", "lunch"],
  ingredients: [
    { item: "shiro powder", qty: "1 cup", cost: 1.2 },
    { item: "beef or lamb, in small dice", qty: "1/2 lb", cost: 2.5 },
    { item: "onion, finely chopped", qty: "1", cost: 0.4 },
    { item: "garlic + ginger", qty: "3 cloves / 1 tbsp", cost: 0.3, spansWeeks: true },
    { item: "berbere", qty: "1 1/2 tbsp", cost: 0.35, spansWeeks: true },
    { item: "niter kibbeh", qty: "2 tbsp", cost: 0.3, spansWeeks: true },
    { item: "salt", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Brown the diced meat in the niter kibbeh until seared and cooked through; set aside, leaving the fat.",
    "Sweat the onion in the same fat until soft, then add garlic, ginger, and berbere and bloom a minute.",
    "Slurry the shiro powder into 2 cups hot water until lump-free, pour into the pot, and simmer 10–15 minutes to a velvety wot.",
    "Return the seared meat (with its juices) to the pot and simmer a few minutes more. Salt and serve over injera.",
  ],
  modernMove:
    "Treat the half-pound of meat as a seasoning, not a centerpiece — searing it hard first and folding it into the shiro means a little protein perfumes the whole pot. Bloom the berbere in the rendered meat fat for extra depth.",
  notes:
    "Bozena shiro is how the everyday shiro becomes a feast — the meat ration stretches across the whole dish rather than landing on one plate.",
  tags: ["shiro", "chickpea", "meat", "dinner", "feast"],
  sources: [
    { title: "The Food Dictator — The Hirshon Ethiopian Shiro Wot", url: "https://www.thefooddictator.com/hirshon-ethiopian-shiro-wot-%E1%88%BD%E1%88%AE-%E1%8B%88%E1%8C%A5/", note: "Names the meat variation explicitly as bozena shiro — chickpea-flour stew studded with sautéed meat." },
    { title: "Kittee Berns — Teff Love: Adventures in Vegan Ethiopian Cooking", note: "Cookbook covering shiro and its bozena variant." },
  ],
};
