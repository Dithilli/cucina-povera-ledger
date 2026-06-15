import type { Recipe } from "../types";

export const kongnamulMuchim: Recipe = {
  slug: "kongnamul-muchim",
  title: "Kongnamul-muchim (Seasoned Soybean Sprouts)",
  cuisine: "korean",
  blurb:
    "Soybean sprouts parboiled just to tender-crisp and dressed with garlic, scallion, and sesame — the most everyday banchan on the Korean table, and a clean, nutty side or light dinner over rice.",
  servings: 4,
  perServing: { calories: 470, protein: 16 },
  estCostPerServing: 0.85,
  roles: ["dinner", "side"],
  ingredients: [
    { item: "soybean sprouts, rinsed", qty: "1 lb", cost: 1.6 },
    {
      item: "scallion, finely sliced",
      qty: "1",
      cost: 0.1,
    },
    {
      item: "garlic, minced",
      qty: "1 clove",
      cost: 0.05,
      spansWeeks: true,
    },
    {
      item: "toasted sesame oil",
      qty: "1 tbsp",
      cost: 0.2,
      spansWeeks: true,
    },
    {
      item: "toasted sesame seeds",
      qty: "1 tsp",
      cost: 0.1,
      spansWeeks: true,
    },
    {
      item: "salt (and gochugaru, if you want it spicy)",
      qty: "to taste",
      cost: 0.1,
      spansWeeks: true,
    },
    {
      item: "short-grain rice, to serve as a dinner",
      qty: "2 cups (dry)",
      cost: 1.0,
    },
  ],
  method: [
    "Rinse the sprouts and pick off any loose seed husks. Put them in a pot with about a cup of water and a pinch of salt, cover, and bring to a boil.",
    "Once it's boiling, cook 5–6 minutes without lifting the lid again — the old rule is that you commit to covered or uncovered from the start, but never switch midway, or the sprouts turn bitter.",
    "Drain and, for a crisp bite, rinse briefly under cold water; for a warm side, skip the rinse and dress while hot.",
    "Squeeze out excess water, then toss with garlic, scallion, sesame oil, sesame seeds, and salt to taste. Add gochugaru for the red, spicy version.",
    "Serve as banchan, pile into bibimbap, or mound over a bowl of warm rice for a quiet, nutty dinner.",
  ],
  modernMove:
    "Dress the sprouts by hand and taste as you go — kongnamul is barely seasoned, so the balance of garlic, salt, and sesame is the entire dish, and it should taste clean and bean-sweet, never heavy.",
  notes:
    "Doubles as the seasoned-sprout component in bibimbap and the topping in many gukbap bowls. Keeps a few days refrigerated.",
  tags: ["soybean-sprouts", "namul", "banchan", "sesame", "side"],
};
