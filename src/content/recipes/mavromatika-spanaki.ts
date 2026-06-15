import type { Recipe } from "../types";

export const mavromatikaSpanaki: Recipe = {
  slug: "mavromatika-spanaki",
  title: "Mavromatika me Spanaki (Black-Eyed Peas & Spinach)",
  cuisine: "greek",
  blurb:
    "Quick-cooking black-eyed peas stewed with spinach, dill, and spring onion, then sharpened with lemon and olive oil — a light, bright legume dinner.",
  servings: 4,
  perServing: { calories: 460, protein: 20 },
  estCostPerServing: 0.95,
  roles: ["dinner", "lunch"],
  ingredients: [
    {
      item: "dried black-eyed peas (no soak needed)",
      qty: "10 oz",
      cost: 1.1,
    },
    { item: "spinach (or chard), roughly chopped", qty: "10 oz", cost: 1.2 },
    { item: "spring onions, sliced", qty: "4", cost: 0.5 },
    { item: "garlic cloves, sliced", qty: "2", cost: 0.1, spansWeeks: true },
    { item: "fresh dill, chopped", qty: "1 small bunch", cost: 0.5 },
    {
      item: "olive oil",
      qty: "1/4 cup",
      cost: 0.45,
      spansWeeks: true,
    },
    { item: "lemon, juiced", qty: "1", cost: 0.3, spansWeeks: true },
    { item: "salt, black pepper", qty: "to taste" },
  ],
  method: [
    "Cover the black-eyed peas with cold water, boil 2 minutes, drain — this quick blanch removes the raw, slightly bitter edge they're known for.",
    "Return them to the pot with fresh water to cover by an inch and simmer until just tender, 20–30 minutes. They cook fast and need no soaking.",
    "Meanwhile soften the spring onions and garlic in the olive oil. Add the spinach in handfuls and let it wilt down.",
    "Drain most of the bean liquid, fold the peas into the greens, and stew together 5 minutes so they marry. Off the heat stir in the dill, lemon juice, and a final glug of oil. Salt, pepper, serve warm or cool with feta.",
  ],
  modernMove:
    "Add the lemon and most of the dill off the heat, not during cooking — raw acid and herb keep the dish tasting green and alive rather than dulled and stewed.",
  notes:
    "A classic Greek fasting (nistisimo) dinner; black-eyed peas are the one Greek legume that needs no overnight soak, so it comes together on a weeknight.",
  tags: ["legumes", "black-eyed-peas", "greens", "spinach", "lemon", "vegan"],
};
