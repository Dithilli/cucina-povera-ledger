import type { Recipe } from "../types";

export const takikomiGohan: Recipe = {
  slug: "takikomi-gohan",
  title: "Takikomi Gohan",
  cuisine: "japanese",
  blurb:
    "Rice cooked straight in seasoned dashi with mushrooms, carrot, and a little chicken or fried tofu — the whole dinner comes out of one pot, faintly sweet and savory.",
  servings: 4,
  perServing: { calories: 520, protein: 16 },
  estCostPerServing: 0.95,
  roles: ["dinner"],
  ingredients: [
    { item: "short-grain rice, rinsed until water runs clear", qty: "2 cups", cost: 1.1 },
    { item: "dashi (kombu-and-bonito or instant), cooled", qty: "2 cups", cost: 0.4, spansWeeks: true },
    { item: "fresh shiitake or mixed mushrooms, sliced", qty: "5 oz", cost: 1.2 },
    { item: "carrot, cut in fine matchsticks", qty: "1 small", cost: 0.25 },
    { item: "aburaage (fried tofu pouch) or 4 oz chicken thigh, diced", qty: "1 sheet", cost: 0.6 },
    { item: "soy sauce", qty: "2 tbsp", cost: 0.15, spansWeeks: true },
    { item: "mirin", qty: "1 tbsp", cost: 0.15, spansWeeks: true },
    { item: "sake", qty: "1 tbsp", cost: 0.15, spansWeeks: true },
    { item: "scallion and toasted sesame to finish", qty: "to finish", cost: 0.2 },
    { item: "salt", qty: "1/2 tsp" },
  ],
  method: [
    "Rinse the rice well and drain. Combine soy, mirin, sake, and salt with the cooled dashi, then add to the rice — the liquid level should sit just at the usual cooking line, no higher.",
    "Scatter mushrooms, carrot, and the aburaage or chicken evenly over the top. Do NOT stir — stirring before cooking gives gummy, unevenly cooked rice.",
    "Cook in a rice cooker on the normal setting, or in a heavy lidded pot: bring to a boil, drop to the lowest heat for 12 minutes, then rest off the heat, lid on, 10 minutes.",
    "Now fold everything together gently with a cutting motion to fluff. Finish with sliced scallion and toasted sesame.",
  ],
  modernMove:
    "Seasoning the cooking water with dashi-soy-mirin means every grain is flavored from the inside — the vegetables and their juices steam into the rice instead of sitting on top of it.",
  tags: ["rice", "mushrooms", "dashi", "one-pot", "mixed-rice"],
};
