import type { Recipe } from "../types";

export const maqueChoux: Recipe = {
  slug: "maque-choux",
  title: "Maque Choux",
  cuisine: "american-south",
  blurb:
    "Louisiana smothered corn — kernels stewed down with the Cajun trinity, tomato, and a little cream until sweet, silky, and just shy of a stew.",
  servings: 4,
  perServing: { calories: 430, protein: 11 },
  estCostPerServing: 1.05,
  roles: ["dinner", "side"],
  ingredients: [
    {
      item: "corn kernels, cut from the cob (cobs reserved)",
      qty: "5 cups (about 6 ears)",
      cost: 2.4,
    },
    { item: "onion, diced", qty: "1", cost: 0.3 },
    { item: "green bell pepper, diced", qty: "1", cost: 0.5 },
    { item: "celery ribs, diced", qty: "2", cost: 0.3 },
    { item: "garlic cloves, minced", qty: "2", cost: 0.1, spansWeeks: true },
    { item: "tomato, chopped (or 1/2 cup canned)", qty: "1", cost: 0.4 },
    {
      item: "butter and a little oil",
      qty: "2 tbsp each",
      cost: 0.4,
      spansWeeks: true,
    },
    { item: "splash of cream or milk", qty: "1/4 cup", cost: 0.3 },
    {
      item: "cayenne, paprika, salt, black pepper",
      qty: "to taste",
      spansWeeks: true,
    },
    { item: "green onions to finish", qty: "2", cost: 0.2 },
  ],
  method: [
    "Scrape the stripped cobs over a bowl to milk out the starchy 'corn milk', then simmer the bare cobs in 2 cups water for 15 minutes for a quick corn stock; discard cobs.",
    "Melt the butter with the oil and smother the trinity — onion, bell pepper, celery — with the garlic until soft and sweet, about 8 minutes.",
    "Add the corn, its milk, the tomato, and a ladle of the corn stock. Season and stew gently, stirring, 20–25 minutes, adding stock as needed, until thick and glossy.",
    "Stir in the cream off the heat, scatter green onions, and check the cayenne. Serve as a supper over rice, or as a side.",
  ],
  modernMove:
    "Milking the cobs and simmering them for a quick stock builds corn flavor in two extra dimensions — the dish tastes of far more corn than it contains, the heart of frugal cooking.",
  notes:
    "Frozen corn works off-season; the cob-milk and stock steps are what separate maque choux from plain creamed corn.",
  tags: ["corn", "trinity", "cajun", "smothered", "vegetable"],
};
