import type { Recipe } from "../types";

export const kikWot: Recipe = {
  slug: "kik-wot",
  title: "Kik Wot",
  cuisine: "ethiopian",
  blurb:
    "The spicy side of the yellow split pea — peas simmered into a berbere-deep, brick-red stew. The same humble legume as kik alicha, turned fiery instead of gentle.",
  servings: 4,
  perServing: { calories: 310, protein: 16 },
  estCostPerServing: 0.6,
  roles: ["dinner", "lunch"],
  ingredients: [
    { item: "yellow split peas", qty: "1 1/2 cups", cost: 1.0 },
    { item: "red onion, finely chopped", qty: "2", cost: 0.8 },
    { item: "berbere", qty: "2 tbsp", cost: 0.5, spansWeeks: true },
    { item: "garlic + ginger", qty: "3 cloves / 1 tbsp", cost: 0.3, spansWeeks: true },
    { item: "niter kibbeh or oil", qty: "3 tbsp", cost: 0.4, spansWeeks: true },
    { item: "salt", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Simmer the rinsed split peas in water until soft, 40–50 minutes; drain, reserving liquid.",
    "Sweat the onions low and slow until jammy, 15–20 minutes, then add niter kibbeh and bloom the berbere in the fat for a minute.",
    "Add garlic and ginger, then fold in the cooked peas with some of their liquid. Mash some against the pan.",
    "Simmer until thick and silky, loosening with reserved liquid as needed. Salt and serve over injera.",
  ],
  modernMove:
    "Same legume, opposite mood: where alicha stays pale and low, kik wot wants the long jammy onion sweat and a generous berbere bloom. A plate with both is the whole point of the platter.",
  notes:
    "Pairing kik wot (fire) and kik alicha (gentle) shows how one cheap bag of split peas makes two completely different dishes.",
  tags: ["wot", "split-peas", "kik", "berbere", "dinner"],
  sources: [
    { title: "Kittee Berns — Teff Love: Adventures in Vegan Ethiopian Cooking", note: "Cookbook covering the berbere-based yellow split pea wot, the fiery counterpart to kik alicha." },
    { title: "Berbere — Wikipedia", url: "https://en.wikipedia.org/wiki/Berbere", note: "The chile blend that turns the gentle yellow-pea alicha into a brick-red wot." },
  ],
};
