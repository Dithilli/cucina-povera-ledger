import type { Recipe } from "../types";

export const jeeraAloo: Recipe = {
  slug: "jeera-aloo",
  title: "Jeera Aloo",
  cuisine: "north-indian",
  blurb:
    "Boiled potatoes tossed in a fragrant cumin tadka with turmeric and chili — the fastest, cheapest sabzi, equally a quick dinner or a side.",
  servings: 4,
  perServing: { calories: 480, protein: 8 },
  estCostPerServing: 0.55,
  roles: ["dinner", "side"],
  ingredients: [
    { item: "potatoes, boiled, peeled, and cubed", qty: "1 1/2 lb", cost: 1.0 },
    { item: "cumin seeds (jeera)", qty: "1 1/2 tsp", cost: 0.15, spansWeeks: true },
    { item: "green chilies, slit", qty: "2", cost: 0.15, spansWeeks: true },
    { item: "ginger, julienned", qty: "1 tbsp", cost: 0.15, spansWeeks: true },
    { item: "turmeric", qty: "1/2 tsp", cost: 0.05, spansWeeks: true },
    { item: "red chili powder", qty: "1/2 tsp", cost: 0.05, spansWeeks: true },
    { item: "ghee or oil", qty: "3 tbsp", cost: 0.35, spansWeeks: true },
    { item: "lemon juice", qty: "1/2 lemon", cost: 0.2 },
    { item: "cilantro to finish", qty: "small handful", cost: 0.2 },
    { item: "salt", qty: "to taste" },
  ],
  method: [
    "Heat the ghee until hot and add the cumin seeds — let them sizzle and darken a shade so they bloom; this tadka is the whole flavor of the dish.",
    "Drop in the green chili and ginger for a few seconds, then the turmeric and chili powder off the direct heat so they don't scorch.",
    "Add the cubed potatoes and salt, and toss over medium heat until every piece is coated yellow and the edges start to crisp.",
    "Finish with a squeeze of lemon and plenty of cilantro. Eat with roti as a light dinner, or alongside dal and rice as a side.",
  ],
  modernMove:
    "Boiling the potatoes first, then dressing them in a fresh-bloomed cumin tadka, keeps the spices bright and the cumin aromatic instead of stewed — the tadka is built in seconds, at the end.",
  tags: ["sabzi", "potato", "cumin", "tadka", "quick", "side"],
};
