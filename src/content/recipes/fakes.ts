import type { Recipe } from "../types";

export const fakes: Recipe = {
  slug: "fakes",
  title: "Fakes (Greek Lentil Soup)",
  cuisine: "greek",
  blurb:
    "The everyday Greek lentil soup — small brown lentils simmered with bay and garlic, then sharpened at the table with a hard splash of red-wine vinegar.",
  servings: 4,
  perServing: { calories: 470, protein: 22 },
  estCostPerServing: 0.78,
  roles: ["dinner"],
  ingredients: [
    { item: "brown or green lentils, rinsed", qty: "1 1/2 cups", cost: 1.1 },
    { item: "onion, finely diced", qty: "1", cost: 0.3 },
    { item: "garlic cloves, sliced", qty: "3", cost: 0.15, spansWeeks: true },
    { item: "carrot, diced (optional)", qty: "1", cost: 0.2 },
    { item: "bay leaves", qty: "2", cost: 0.1, spansWeeks: true },
    { item: "tomato paste", qty: "1 tbsp", cost: 0.15, spansWeeks: true },
    {
      item: "olive oil, plus more to finish",
      qty: "3 tbsp",
      cost: 0.4,
      spansWeeks: true,
    },
    {
      item: "red-wine vinegar, at the table",
      qty: "to taste",
      cost: 0.15,
      spansWeeks: true,
    },
    { item: "salt, black pepper, dried oregano", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Give the lentils a head start: cover with cold water, bring to a boil, drain — this de-bitters them.",
    "Soften the onion, garlic, and carrot in the olive oil, then stir in the tomato paste and let it darken a minute.",
    "Return the lentils with the bay leaves and fresh water to cover by two fingers. Simmer 30–40 minutes until tender; salt only near the end so the lentils don't toughen.",
    "Finish with a thread of raw olive oil and oregano. Serve, and pass red-wine vinegar so each bowl gets its own bright, acidic jolt.",
  ],
  modernMove:
    "Salt late and add the vinegar only at the table, off the heat — cooked-in acid stalls the lentils and dulls; a raw splash per bowl keeps the soup sharp and alive.",
  notes:
    "A Lenten and weeknight staple eaten with bread, olives, and a wedge of feta. Thickens as it sits; loosen leftovers with water.",
  tags: ["legumes", "lentils", "soup", "fakes", "fasting", "one-pot"],
};
