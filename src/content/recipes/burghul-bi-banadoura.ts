import type { Recipe } from "../types";

export const burghulBiBanadoura: Recipe = {
  slug: "burghul-bi-banadoura",
  title: "Burghul bi Banadoura",
  cuisine: "levantine",
  blurb:
    "Coarse bulgur simmered with tomato and slow-softened onion until the grain drinks the sauce — a whole Levantine supper from a half-cup of cracked wheat.",
  servings: 4,
  perServing: { calories: 480, protein: 13 },
  estCostPerServing: 0.72,
  roles: ["dinner", "lunch"],
  ingredients: [
    { item: "coarse bulgur (#3 / #4)", qty: "1 1/2 cups", cost: 0.7 },
    { item: "onions, finely diced", qty: "2", cost: 0.5 },
    { item: "ripe tomatoes, grated (or canned, crushed)", qty: "4", cost: 1.0 },
    { item: "tomato paste", qty: "1 tbsp", cost: 0.2, spansWeeks: true },
    { item: "garlic cloves, minced", qty: "2", cost: 0.1, spansWeeks: true },
    {
      item: "olive oil, plus more to finish",
      qty: "1/4 cup",
      cost: 0.4,
      spansWeeks: true,
    },
    { item: "Aleppo pepper or chili flakes", qty: "1/2 tsp", cost: 0.1, spansWeeks: true },
    { item: "salt, black pepper, pinch cinnamon", qty: "to taste" },
    { item: "lemon wedges and chopped parsley to serve", qty: "to serve", cost: 0.3 },
  ],
  method: [
    "Soften the onions slowly in the olive oil until sweet and just golden — this is the backbone of the dish, so don't rush it.",
    "Stir in the garlic, tomato paste, and Aleppo pepper for a minute, then add the grated tomatoes, a pinch of cinnamon, and salt. Simmer until jammy.",
    "Pour in the bulgur and about 2 1/2 cups water, bring to a boil, then cover and cook on the lowest heat until the grain is tender and the liquid is gone, 12–15 minutes.",
    "Kill the heat and let it steam, covered, 10 minutes. Fluff, finish with raw olive oil, parsley, black pepper, and a squeeze of lemon.",
  ],
  modernMove:
    "Grating the tomatoes (skins left behind in your palm) gives a smooth, fast sauce with no peeling and no waste — the bulgur cooks straight in it like a pilaf risotto.",
  zeroWasteHero: true,
  tags: ["bulgur", "tomato", "one-pot", "vegan", "grains"],
};
