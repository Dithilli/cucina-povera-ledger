import type { Recipe } from "../types";

export const plainDosaSi: Recipe = {
  slug: "plain-dosa-si",
  title: "Dosa with Chutney",
  cuisine: "south-indian",
  blurb:
    "The everyday dosa — nothing but fermented rice and urad dal spread thin and crisped golden on a hot griddle, eaten with coconut chutney and whatever sambar is in the pot.",
  servings: 4,
  perServing: { calories: 400, protein: 13 },
  estCostPerServing: 0.65,
  roles: ["dinner"],
  ingredients: [
    { item: "idli/dosa rice", qty: "3 cups", cost: 1.2 },
    { item: "urad dal", qty: "3/4 cup", cost: 0.5 },
    { item: "fenugreek seeds", qty: "1/2 tsp", cost: 0.05, spansWeeks: true },
    { item: "fresh coconut, grated", qty: "1 cup", cost: 0.5 },
    { item: "green chili", qty: "1", cost: 0.05, spansWeeks: true },
    { item: "roasted chana dal (for chutney)", qty: "2 tbsp", cost: 0.1, spansWeeks: true },
    { item: "mustard seeds", qty: "1 tsp", cost: 0.05, spansWeeks: true },
    { item: "dried red chili", qty: "1", cost: 0.05, spansWeeks: true },
    { item: "curry leaves", qty: "1 sprig", cost: 0.1, spansWeeks: true },
    { item: "asafoetida (hing)", qty: "pinch", cost: 0.05, spansWeeks: true },
    { item: "oil for the griddle", qty: "3 tbsp", cost: 0.2, spansWeeks: true },
    { item: "salt", qty: "to taste" },
  ],
  method: [
    "Soak the rice, urad dal, and fenugreek for 6 hours, grind to a smooth batter, salt lightly, and ferment overnight until it rises and smells pleasantly sour.",
    "For the chutney, grind coconut, roasted chana dal, and green chili with a little water until creamy.",
    "Temper mustard seeds, dried chili, hing, and curry leaves in oil and stir into the chutney.",
    "Loosen the batter to a pourable consistency. On a hot, lightly oiled griddle, pour a ladleful at the center and spread it outward in a spiral to a thin round; drizzle a few drops of oil and cook until the edges lift and the underside is golden and crisp.",
    "Fold and serve hot with the coconut chutney and a bowl of sambar.",
  ],
  modernMove:
    "A well-seasoned, properly hot griddle wiped with a halved onion lets the dosa release on its own and crackle crisp — chasing it with a spatula on a cold pan is what tears it.",
  notes: "Same fermented batter as masala dosa, served plain; keeps 3–4 days refrigerated.",
  zeroWasteHero: false,
  tags: ["dosa", "fermented", "coconut-chutney", "rice", "south-indian"],
  sources: [
    {
      title: "Dassana Amit — Dassana's Veg Recipes",
      url: "https://www.vegrecipesofindia.com/dosa-recipe-dosa-batter-recipe/",
      note: "Naturally fermented rice-and-urad-dal batter spread thin and crisped, served with coconut chutney",
    },
  ],
};
