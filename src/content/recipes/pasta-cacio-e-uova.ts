import type { Recipe } from "../types";

export const pastaCacioEUova: Recipe = {
  slug: "pasta-cacio-e-uova",
  title: "Pasta Cacio e Uova",
  cuisine: "italian",
  blurb:
    "The Neapolitan poor carbonara — egg and pecorino, no guanciale needed. Silky, fast, and quietly high in protein.",
  servings: 4,
  perServing: {
    calories: 600,
    protein: 30,
  },
  estCostPerServing: 1.7,
  roles: ["dinner", "lunch"],
  ingredients: [
    {
      item: "pasta (spaghetti or short)",
      qty: "12 oz",
      cost: 1.5,
    },
    {
      item: "eggs",
      qty: "4",
      cost: 1.5,
    },
    {
      item: "pecorino (or pecorino + Parmesan), grated",
      qty: "1 cup",
      cost: 3.5,
      spansWeeks: true,
    },
    {
      item: "black pepper",
      qty: "lots",
    },
    {
      item: "olive oil or a little rendered fat",
      qty: "to coat",
      cost: 0.3,
      spansWeeks: true,
    },
  ],
  method: [
    "Beat the eggs with the cheese and a flood of black pepper into a paste.",
    "Cook the pasta until al dente; reserve plenty of starchy water.",
    "Off the heat (pan no longer sizzling), toss the pasta with the egg-cheese mix and splashes of pasta water, stirring hard, until it turns into a glossy cream — never scrambled.",
    "Serve immediately with more pepper.",
  ],
  modernMove:
    "Temper off the heat with pasta water so the eggs emulsify into sauce instead of setting — the whole trick is in the temperature.",
  tags: ["pasta", "eggs", "pecorino", "cheese", "fast"],
  sources: [
    {
      title: "La Cucina Italiana — Cacio e uova, the Neapolitan ancestor of carbonara",
      url: "https://www.lacucinaitaliana.com/italian-food/italian-dishes/carbonara-origins-and-anecdotes-of-the-beloved-italian-pasta-dish",
      note: "Neapolitan egg-and-cheese pasta (documented by Cavalcanti, 1839) without guanciale",
    },
  ],
};
