import type { Recipe } from "../types";

export const nebbe: Recipe = {
  slug: "nebbe",
  title: "Ñebbe",
  cuisine: "senegalese",
  blurb:
    "Black-eyed peas stewed soft in a sweet jam of slow-cooked onions and red palm oil — the thriftiest, most filling dinner in the Senegalese kitchen.",
  servings: 4,
  perServing: { calories: 500, protein: 20 },
  estCostPerServing: 0.95,
  roles: ["dinner"],
  ingredients: [
    { item: "dried black-eyed peas (niébé), soaked", qty: "2 cups", cost: 1.2 },
    { item: "onions, sliced", qty: "3 medium", cost: 0.7 },
    { item: "red palm oil", qty: "3 tbsp", cost: 0.4, spansWeeks: true },
    { item: "tomato paste", qty: "1 tbsp", cost: 0.1 },
    { item: "garlic", qty: "3 cloves", cost: 0.15, spansWeeks: true },
    { item: "kaani (scotch bonnet), whole", qty: "1", cost: 0.2, spansWeeks: true },
    { item: "maggi cube or nététou", qty: "1", cost: 0.15, spansWeeks: true },
    { item: "salt, black pepper", qty: "to taste" },
  ],
  method: [
    "Simmer the soaked black-eyed peas in unsalted water until tender but still whole, about 40 minutes; drain, saving a cup of the cooking liquid.",
    "Warm the red palm oil and cook the onions low and slow until collapsed, deeply golden, and jammy — this sweet onion base carries the whole dish.",
    "Stir in the garlic and tomato paste, cook a minute, then add the maggi (or crushed nététou), the whole scotch bonnet, and the reserved bean liquid.",
    "Fold in the beans and simmer gently 15 minutes until the sauce clings and the peas drink in the oniony richness; season with salt and pepper.",
    "Serve hot with bread to mop the palm-red oil, or over rice.",
  ],
  modernMove:
    "Red palm oil is non-negotiable here — its earthy, almost savory color is the flavor of West African home cooking; a neutral oil leaves ñebbe correct but anonymous.",
  notes:
    "Often sold from street stalls in a baguette for breakfast. Cook the beans unsalted so they soften; salt only at the end so the skins don't toughen.",
  zeroWasteHero: true,
  tags: ["black-eyed-peas", "niebe", "palm-oil", "legumes", "thrifty", "senegalese"],
  sources: [
    {
      title: "Christopher Kimball's Milk Street — Black-Eyed Pea and Sweet Potato Stew (Ndambe)",
      url: "https://www.177milkstreet.com/recipes/black-eyed-pea-and-sweet-potato-stew-ndambe",
      note: "The slow-cooked onion base and black-eyed peas that define the Senegalese ñebbe/ndambe family.",
    },
  ],
};
