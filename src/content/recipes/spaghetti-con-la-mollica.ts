import type { Recipe } from "../types";

export const spaghettiConLaMollica: Recipe = {
  slug: "spaghetti-con-la-mollica",
  title: "Spaghetti con la Mollica",
  cuisine: "italian",
  blurb:
    '"Poor man\'s Parmesan" — toasted breadcrumbs instead of cheese, with anchovy, garlic, and chili. The signature pangrattato dish.',
  servings: 4,
  perServing: {
    calories: 600,
    protein: 18,
  },
  estCostPerServing: 1.56,
  roles: ["dinner", "lunch"],
  ingredients: [
    {
      item: "spaghetti",
      qty: "12 oz",
      cost: 1.5,
    },
    {
      item: "olive oil",
      qty: "6 tbsp",
      cost: 1.16,
      spansWeeks: true,
    },
    {
      item: "garlic cloves, thinly sliced",
      qty: "4",
      cost: 0.4,
      spansWeeks: true,
    },
    {
      item: "anchovy fillets",
      qty: "4–6",
      cost: 1.67,
      spansWeeks: true,
    },
    {
      item: "chili flakes",
      qty: "1/2 tsp",
    },
    {
      item: "coarse breadcrumbs (from stale bread)",
      qty: "1 1/2 cups",
      cost: 1.0,
    },
    {
      item: "lemon zest",
      qty: "Zest of 1 lemon",
      cost: 0.25,
    },
    {
      item: "parsley, chopped",
      qty: "Handful",
      cost: 0.25,
    },
  ],
  method: [
    "Toast the breadcrumbs in a little oil until deep gold and crisp. Off the heat, toss with lemon zest, parsley, and salt. Set aside — this is the pangrattato.",
    "Gently melt the anchovies into the rest of the oil with the garlic and chili, not letting the garlic brown.",
    "Cook the spaghetti until just shy of al dente. Move it to the pan with a splash of pasta water and emulsify into a glossy sauce.",
    "Plate and shower generously with the pangrattato.",
  ],
  modernMove:
    "Emulsifying the oil-garlic-anchovy with pasta water turns a slick of oil into a real sauce; the lemon-parsley crumb adds crunch and brightness on top.",
  tags: ["pangrattato", "anchovy", "garlic", "breadcrumbs", "one-pot"],
};
