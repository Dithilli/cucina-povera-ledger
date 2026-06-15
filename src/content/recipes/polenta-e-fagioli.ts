import type { Recipe } from "../types";

export const polentaEFagioli: Recipe = {
  slug: "polenta-e-fagioli",
  title: "Polenta e Fagioli",
  cuisine: "italian",
  blurb:
    "Soft polenta under brothy beans — the Northern cornmeal staple meets the bean-eater's pot for cheap calories and cheap protein together.",
  servings: 4,
  perServing: { calories: 480, protein: 18 },
  estCostPerServing: 0.75,
  roles: ["dinner", "lunch"],
  ingredients: [
    {
      item: "coarse polenta (cornmeal)",
      qty: "1 1/2 cups",
      cost: 0.6,
    },
    {
      item: "cooked borlotti or cannellini (with liquid)",
      qty: "2 1/2 cups",
      cost: 0.95,
    },
    {
      item: "onion, garlic, sage",
      qty: "1 onion, 2 cloves, 1 sprig",
      cost: 0.5,
      spansWeeks: true,
    },
    {
      item: "tomato paste",
      qty: "1 tbsp",
      cost: 0.15,
      spansWeeks: true,
    },
    {
      item: "pecorino, grated; olive oil, salt, pepper",
      qty: "1/3 cup cheese, 3 tbsp oil",
      cost: 1.0,
      spansWeeks: true,
    },
  ],
  method: [
    "Soften the onion, garlic, and sage in oil; add tomato paste, then the beans and their liquid. Simmer until thick and savory, mashing some for body.",
    "Meanwhile, cook the polenta: rain it into salted simmering water and stir, cooking 30–40 minutes until soft and no longer gritty.",
    "Beat a little oil and pecorino into the polenta and pool it into bowls.",
    "Spoon the brothy beans over, then finish with raw oil, more pecorino, and pepper.",
  ],
  modernMove:
    "Keep the polenta loose and pourable rather than stiff so the bean liquid marbles into it — the two textures meet instead of sitting in layers.",
  tags: ["polenta", "legumes", "beans", "one-bowl", "protein-forward"],
};
