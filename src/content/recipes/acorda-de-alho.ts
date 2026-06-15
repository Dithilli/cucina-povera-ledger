import type { Recipe } from "../types";

export const acordaDeAlho: Recipe = {
  slug: "acorda-de-alho",
  title: "Açorda de Alho",
  cuisine: "portuguese",
  blurb:
    "The barest açorda — a garlic bread porridge. Stale bread melted into garlic-and-olive-oil water until it turns to a thick, spoonable porridge, often loosened with a beaten egg.",
  servings: 4,
  perServing: { calories: 470, protein: 15 },
  estCostPerServing: 0.58,
  roles: ["dinner"],
  ingredients: [
    {
      item: "stale bread, thinly sliced or torn",
      qty: "10 oz",
      cost: 0.7,
    },
    {
      item: "garlic cloves",
      qty: "5",
      cost: 0.25,
      spansWeeks: true,
    },
    {
      item: "olive oil",
      qty: "4 tbsp",
      cost: 0.5,
      spansWeeks: true,
    },
    {
      item: "egg (optional, to enrich and bind)",
      qty: "1",
      cost: 0.2,
    },
    {
      item: "fresh coriander or pennyroyal, chopped",
      qty: "small handful",
      cost: 0.3,
    },
    { item: "boiling water", qty: "4 cups" },
    { item: "salt", qty: "to taste" },
  ],
  method: [
    "Smash the garlic with a good pinch of salt into a paste in a wide pot, then warm it with the olive oil over low heat just until it smells sweet — do not let it colour.",
    "Pour in the boiling water and bring back to a simmer, then add the herbs.",
    "Stir in the bread a handful at a time, breaking it down with the spoon. Keep stirring over low heat as it drinks the broth and collapses into a thick, glossy porridge — loose enough to spoon, thick enough to hold a line.",
    "For the richer version, beat the egg in a cup, temper it with a ladle of the hot porridge, then stir it back through off the heat so it thickens silkily without scrambling.",
    "Taste for salt, finish with a thread of raw olive oil, and serve straight away in deep bowls.",
  ],
  modernMove:
    "Tempering a single beaten egg back into the porridge off the heat gives it a custardy body and gloss — the trick that lifts plain garlic-bread mush into something that eats like a luxury.",
  notes:
    "The frugal heart of Portuguese cooking: garlic, oil, water, and bread that would otherwise be thrown away. Pennyroyal (poejo) is traditional; coriander is the everyday stand-in.",
  zeroWasteHero: true,
  tags: ["bread", "garlic", "egg", "porridge", "soup", "stale-bread"],
  sources: [
    { title: "196 flavors — Açorda", url: "https://www.196flavors.com/portugal-acorda/", note: "açorda as cozinha pobre: bread, garlic, olive oil, water, egg" },
  ],
};
