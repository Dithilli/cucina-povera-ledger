import type { Recipe } from "../types";

export const tingaDePollo: Recipe = {
  slug: "tinga-de-pollo",
  title: "Tinga de Pollo",
  cuisine: "mexican",
  blurb:
    "Shredded chicken simmered in a smoky chipotle-and-tomato sauce with caramelized onion — one affordable bird stretched across a whole platter of tostadas or tacos.",
  servings: 4,
  perServing: { calories: 300, protein: 24 },
  estCostPerServing: 1.3,
  roles: ["dinner", "lunch"],
  ingredients: [
    { item: "chicken (thighs or a poached breast), shredded", qty: "1 lb", cost: 3.0 },
    { item: "tomatoes", qty: "3", cost: 0.9 },
    { item: "white onion, sliced", qty: "1", cost: 0.3 },
    { item: "chipotles in adobo", qty: "2 + a spoon of adobo", cost: 0.5, spansWeeks: true },
    { item: "garlic, bay, oregano, salt", qty: "to taste", spansWeeks: true },
    { item: "oil", qty: "1 tbsp", cost: 0.1, spansWeeks: true },
  ],
  method: [
    "Poach the chicken with garlic and salt; reserve the broth and shred the meat.",
    "Caramelize the onion in oil until golden and soft.",
    "Blend tomatoes with the chipotles and adobo; pour into the onions and cook down to a thick, smoky sauce, loosening with chicken broth.",
    "Fold in the shredded chicken and simmer until it drinks up the sauce. Pile onto tostadas with beans, crema, and cheese.",
  ],
  modernMove:
    "Poach, don't boil, and keep the broth — it becomes the braising liquid, so the chicken cooks in its own stock and nothing washes down the drain.",
  notes: "A pound of chicken seasons a platter; the beans and tortillas do the filling.",
  tags: ["guiso", "chicken", "chipotle", "dinner", "tostada"],
  sources: [
    {
      title: "Mely Martínez — Mexico in My Kitchen, Chicken Tinga (Tinga de Pollo)",
      url: "https://www.mexicoinmykitchen.com/chicken-tinga-recipe/",
      note: "Poached, shredded chicken simmered in a chipotle-tomato sauce with caramelized onion.",
    },
  ],
};
