import type { Recipe } from "../types";

export const gorditas: Recipe = {
  slug: "gorditas",
  title: "Gorditas",
  cuisine: "mexican",
  blurb:
    "Plump masa pockets — 'little fat ones' — griddled or fried until they puff, then split along the seam and stuffed with refried beans, cheese, and salsa. Frugal masa engineered to hold a hot filling.",
  servings: 4,
  perServing: { calories: 450, protein: 16 },
  estCostPerServing: 0.8,
  roles: ["dinner", "lunch", "breakfast"],
  ingredients: [
    { item: "masa harina (or fresh masa)", qty: "3 cups", cost: 1.0 },
    { item: "refried beans", qty: "1 1/2 cups", cost: 0.6 },
    { item: "queso fresco or Oaxaca, to stuff", qty: "1 cup", cost: 1.2, spansWeeks: true },
    { item: "salsa (roja or verde)", qty: "1 cup", cost: 0.4 },
    { item: "lard or oil (fried version)", qty: "as needed", cost: 0.4, spansWeeks: true },
    { item: "salt, water", qty: "as needed", spansWeeks: true },
  ],
  method: [
    "Mix masa harina with a pinch of salt, adding water gradually, and knead until the dough is smooth and no longer sticks to your hands.",
    "Press portions into thick discs — about a half-inch, fatter than a tortilla — between two sheets of plastic.",
    "For griddled gorditas, cook on a smoky-hot comal set to medium, turning, until cooked through and lightly puffed; for fried ones, slide into hot lard and fry until golden and ballooned.",
    "Let cool just enough to handle, slit along the edge to open a pocket, and stuff with refried beans, cheese, and a spoon of salsa.",
  ],
  modernMove:
    "Get the comal genuinely smoking-hot before dropping the heat to medium — that initial blast flashes the surface moisture to steam, which is what inflates the gordita and creates the hollow pocket you need for stuffing.",
  notes:
    "Griddled (not fried) keeps them cheap and light; the pocket means one gordita carries a full bean-and-cheese serving. Reheats on the comal.",
  tags: ["masa", "antojito", "beans", "comal", "dinner"],
  sources: [
    {
      title: "Mely Martínez — Mexico in My Kitchen",
      url: "https://www.mexicoinmykitchen.com/gorditas/",
      note: "grandmother's masa-lard-salt dough and comal method, split and filled with beans",
    },
    {
      title: "Maricruz Avalos — Gorditas Recipe with Maseca",
      url: "https://www.maricruzavalos.com/gorditas-recipe-with-maseca/",
      note: "masa harina ratios, thick-disc pressing, and the puff-then-stuff technique",
    },
  ],
};
