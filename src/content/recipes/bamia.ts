import type { Recipe } from "../types";

export const bamia: Recipe = {
  slug: "bamia",
  title: "Bamia",
  cuisine: "levantine",
  blurb:
    "Okra stewed slow in garlicky tomato with coriander and lemon, spooned over rice — a Levantine yakhni built for thrift.",
  servings: 4,
  perServing: { calories: 560, protein: 14 },
  estCostPerServing: 1.05,
  roles: ["dinner"],
  ingredients: [
    { item: "okra, trimmed (fresh or frozen whole)", qty: "1 lb", cost: 1.6 },
    { item: "onion, finely diced", qty: "1", cost: 0.3 },
    { item: "garlic cloves, minced", qty: "5", cost: 0.25, spansWeeks: true },
    { item: "chopped tomatoes (or 1 lb fresh, grated)", qty: "1 can", cost: 0.9 },
    { item: "tomato paste", qty: "1 tbsp", cost: 0.15, spansWeeks: true },
    {
      item: "ground coriander, plus a handful of fresh coriander",
      qty: "1 tsp + handful",
      cost: 0.3,
      spansWeeks: true,
    },
    { item: "olive oil", qty: "3 tbsp", cost: 0.4, spansWeeks: true },
    { item: "lemon, juiced", qty: "1/2", cost: 0.2 },
    { item: "long-grain rice, cooked", qty: "1 1/2 cups dry", cost: 0.6 },
    { item: "salt, black pepper, pinch chili", qty: "to taste" },
  ],
  method: [
    "Soften the onion in the oil until translucent, then add most of the garlic and the ground coriander and fry until fragrant.",
    "Stir in the tomato paste to caramelize for a minute, then add the chopped tomatoes and a cup of water. Season and bring to a gentle simmer.",
    "Lay the okra in the sauce in a single layer and simmer uncovered, basting rather than stirring, until tender but not slimy — about 25 minutes.",
    "Meanwhile fry the reserved garlic with the chopped fresh coriander in a little oil to make a taqliya, and stir it through at the end with the lemon juice.",
    "Spoon the okra and sauce over hot rice; finish with black pepper and more coriander.",
  ],
  modernMove:
    "A late taqliya — raw garlic and coriander bloomed in hot oil and stirred in off the heat — lifts the whole pot and keeps the okra from turning gluey.",
  notes:
    "Salting the okra or leaving the pods whole and undisturbed keeps them firm. Frozen whole okra works straight from the bag.",
  tags: ["okra", "tomato", "yakhni", "rice", "vegetarian"],
};
