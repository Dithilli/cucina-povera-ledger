import type { Recipe } from "../types";

export const arrozMamposteao: Recipe = {
  slug: "arroz-mamposteao",
  title: "Arroz Mamposteao",
  cuisine: "puerto-rican",
  blurb:
    "Puerto Rico's love letter to leftovers — day-old white rice tossed in achiote oil with sofrito and stewed pink beans until every grain drinks up the bean broth.",
  servings: 2,
  perServing: { calories: 560, protein: 16 },
  estCostPerServing: 0.85,
  roles: ["dinner"],
  ingredients: [
    { item: "cold day-old white rice", qty: "2 1/2 cups", cost: 0.4 },
    { item: "habichuelas guisadas (stewed pink beans) with broth", qty: "1 cup", cost: 0.5 },
    { item: "sofrito / recaíto", qty: "2 tbsp", cost: 0.3, spansWeeks: true },
    { item: "achiote (annatto) oil", qty: "1 tbsp", cost: 0.1, spansWeeks: true },
    { item: "ham or bacon scraps, diced", qty: "1 oz", cost: 0.3, spansWeeks: true },
    { item: "salt, sazón", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Render the ham or bacon scraps in achiote oil until they give up their fat.",
    "Add the sofrito and sauté until fragrant, 2 minutes.",
    "Stir in the stewed beans with enough of their broth to make the pan saucy.",
    "Break up the cold rice and fold it in, tossing until every grain is coated and warmed through and the broth has cooked into it.",
    "Taste for salt and serve — good on its own or under a fried egg.",
  ],
  modernMove:
    "Use cold, dried-out rice from the fridge — day-old grains separate and toast instead of clumping, which is the whole point of mampostear.",
  notes: "Built entirely from yesterday's rice and beans; a thrifty second life that eats like a fresh dish.",
  zeroWasteHero: true,
  tags: ["rice", "beans", "leftovers", "dinner", "puerto-rican"],
  sources: [
    {
      title: "Familia Kitchen — Mamposteao: Puerto Rico's Love Letter to Leftover Rice & Beans",
      url: "https://familiakitchen.com/mamposteao-puerto-ricos-love-letter-to-leftover-rice-beans/",
      note: "Leftover white rice mixed with stewed pink/red beans, sofrito, and salted pork in annatto oil.",
    },
  ],
};
