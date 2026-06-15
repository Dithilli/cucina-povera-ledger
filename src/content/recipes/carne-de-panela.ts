import type { Recipe } from "../types";

export const carneDePanela: Recipe = {
  slug: "carne-de-panela",
  title: "Carne de Panela",
  cuisine: "brazilian",
  blurb:
    "Brazil's pot roast: a cheap shoulder cut seared and braised low and slow in its own juices with onion and garlic until it falls apart at a nudge, the potatoes turning silky in the dark, beefy gravy.",
  servings: 2,
  perServing: { calories: 640, protein: 31 },
  estCostPerServing: 2.15,
  roles: ["dinner"],
  ingredients: [
    { item: "beef chuck, cut in large cubes", qty: "3/4 lb", cost: 2.0 },
    { item: "potatoes, in chunks", qty: "3 medium", cost: 0.5 },
    { item: "onion, sliced", qty: "1 large", cost: 0.3 },
    { item: "garlic, minced", qty: "4 cloves", cost: 0.2, spansWeeks: true },
    { item: "tomato, chopped", qty: "1", cost: 0.3 },
    { item: "bay leaf", qty: "1", cost: 0.05, spansWeeks: true },
    { item: "scallions and parsley (cheiro-verde)", qty: "small handful", cost: 0.2 },
    { item: "neutral oil", qty: "2 tbsp", cost: 0.1, spansWeeks: true },
    { item: "salt and black pepper", qty: "to taste", cost: 0.05, spansWeeks: true },
  ],
  method: [
    "Season the beef cubes well and brown them deeply on all sides in oil, then lift out.",
    "Soften the onion and garlic in the fat, add the tomato and bay leaf, and let it slump into a base.",
    "Return the beef with just enough hot water to come halfway up, cover tightly, and braise on the lowest heat 1.5 hours, topping up sparingly so it stays a thick gravy, not a soup.",
    "Add the potato chunks and cook another 30 minutes until the meat shreds at a fork and the potatoes are tender.",
    "Finish with cheiro-verde and serve over white rice with feijão, spooning the dark pan gravy over everything.",
  ],
  modernMove:
    "Resist adding much liquid — chuck releases plenty of its own as it breaks down, so a near-dry braise concentrates into a glossy gravy instead of a thin, watery stew.",
  notes:
    "The thrifty engine of the Brazilian week: a tough, inexpensive shoulder cut transformed entirely by time and a tight lid, with potatoes cooked right in to stretch it further.",
  zeroWasteHero: false,
  tags: ["dinner", "beef", "braise", "pot-roast", "potato", "brazilian"],
  sources: [
    {
      title: "Garden in the Kitchen — Carne de Panela (Stew Beef)",
      url: "https://gardeninthekitchen.com/carne-de-panela-stew-beef/",
      note: "Chuck browned and slow-braised in its own juices with potatoes",
    },
  ],
};
