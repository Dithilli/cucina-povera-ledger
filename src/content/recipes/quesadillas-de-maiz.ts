import type { Recipe } from "../types";

export const quesadillasDeMaiz: Recipe = {
  slug: "quesadillas-de-maiz",
  title: "Quesadillas de Maíz",
  cuisine: "mexican",
  blurb:
    "Fresh masa folded around melting cheese and cooked on the comal — the true quesadilla of central Mexico, corn not flour, griddled not deep-fried.",
  servings: 4,
  perServing: { calories: 420, protein: 18 },
  estCostPerServing: 0.95,
  roles: ["lunch", "dinner"],
  ingredients: [
    { item: "fresh masa (or masa harina made into dough)", qty: "2 cups", cost: 0.7 },
    { item: "Oaxaca cheese / quesillo, pulled", qty: "1 1/2 cups", cost: 2.0, spansWeeks: true },
    { item: "epazote leaves (optional, classic)", qty: "a few", cost: 0.2 },
    { item: "salsa verde to serve", qty: "to taste" },
    { item: "salt", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Press a ball of masa thin between plastic, as for a tortilla.",
    "Lay cheese (and an epazote leaf) on one half, fold over, and press the edge to seal.",
    "Cook on a medium-hot comal, turning, until the masa is cooked through and spotted and the cheese is molten.",
    "Open the edge, slip in a spoon of salsa verde, and eat hot.",
  ],
  modernMove:
    "Cook the masa shell first on a drier, slightly lower heat so it sets and chars lightly before the cheese fully melts — you get a cooked corn shell, not a greasy raw-dough fold.",
  notes: "The cheese is the week's precious thread; a little goes far when the masa carries the plate.",
  tags: ["masa", "cheese", "quesadilla", "comal", "lunch"],
};
