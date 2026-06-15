import type { Recipe } from "../types";

export const polentaConcia: Recipe = {
  slug: "polenta-concia",
  title: "Polenta Concia",
  cuisine: "italian",
  blurb:
    "Alpine polenta folded with melting cheese and butter — the Northern mountains' richest poverty dish, where the one luxury is the cheese itself.",
  servings: 4,
  perServing: { calories: 560, protein: 17 },
  estCostPerServing: 1.35,
  roles: ["dinner", "lunch"],
  ingredients: [
    {
      item: "coarse polenta (cornmeal)",
      qty: "1 1/2 cups",
      cost: 0.6,
    },
    {
      item: "melting alpine cheese (fontina, toma, or a good melter), diced",
      qty: "6 oz",
      cost: 3.5,
      spansWeeks: true,
    },
    {
      item: "Parmesan, grated",
      qty: "1/3 cup",
      cost: 0.85,
      spansWeeks: true,
    },
    {
      item: "butter (the Northern luxury)",
      qty: "3 tbsp",
      cost: 0.5,
      spansWeeks: true,
    },
    { item: "salt, pepper", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Cook the polenta in salted simmering water, stirring, 30–40 minutes until soft and smooth.",
    "Off direct high heat, fold in the diced melting cheese a handful at a time so it streaks through without seizing.",
    "Beat in the butter and Parmesan until glossy and rich. Loosen with hot water if it stiffens.",
    "Serve immediately, while molten, with black pepper. (Leftovers set firm and are perfect for grilling.)",
  ],
  modernMove:
    "Add the cheese off the boil and fold rather than stir hard — you want ropy strands of melted cheese running through, not a homogenized paste.",
  notes: "Set leftovers chill firm and become the base for grilled polenta.",
  tags: ["polenta", "cheese", "alpine", "rich", "comfort"],
  sources: [
    {
      title: "Polenta — Wikipedia",
      url: "https://en.wikipedia.org/wiki/Polenta",
      note: "Alpine polenta enriched with melting cheese and butter (polenta concia)",
    },
  ],
};
