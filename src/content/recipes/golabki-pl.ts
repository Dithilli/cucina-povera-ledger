import type { Recipe } from "../types";

export const golabkiPl: Recipe = {
  slug: "golabki-pl",
  title: "Gołąbki",
  cuisine: "polish",
  blurb:
    "\"Little pigeons\" — softened cabbage leaves wrapped around rice and a little meat, baked tender under a bright tomato sauce.",
  servings: 4,
  perServing: { calories: 520, protein: 20 },
  estCostPerServing: 1.4,
  roles: ["dinner"],
  ingredients: [
    { item: "white cabbage, whole head", qty: "1 large", cost: 1.0 },
    { item: "rice, par-cooked", qty: "3/4 cup dry", cost: 0.4 },
    { item: "ground pork or beef (or a mix)", qty: "8 oz", cost: 1.8 },
    { item: "onion, finely diced", qty: "1 large", cost: 0.35 },
    { item: "passata or chopped tomatoes", qty: "1 1/2 cups", cost: 0.9 },
    { item: "lard or oil; flour to thicken the sauce", qty: "2 tbsp + 1 tbsp", cost: 0.3, spansWeeks: true },
    { item: "salt, pepper, bay; śmietana to serve", qty: "to finish", cost: 0.5, spansWeeks: true },
  ],
  method: [
    "Core the cabbage and boil the whole head a few minutes, peeling away leaves as they soften and go pliable.",
    "Fry the onion, then mix it with the par-cooked rice and the raw meat; season firmly with salt and pepper.",
    "Spoon filling onto each leaf, fold in the sides, and roll up snugly. Pack the rolls seam-down in a pot, lined with the tough outer leaves so they don't catch.",
    "Pour over the tomato sauce loosened with a little water, cover, and braise gently — on the hob or in the oven — about an hour until the cabbage is silky and the rice fully tender.",
    "Thicken the sauce with a small flour roux if you like, and serve the gołąbki under it with a spoon of sour cream.",
  ],
  modernMove:
    "Par-cook the rice only halfway — it finishes inside the rolls by drinking the tomato braise, which keeps the filling moist instead of stodgy.",
  notes:
    "Stretches a half-pound of meat across four with rice and cabbage doing the heavy lifting.",
  tags: ["golabki", "cabbage", "rice", "tomato", "polish"],
  sources: [
    {
      title: "Polonist — Gołąbki, Polish Stuffed Cabbage Rolls",
      url: "https://www.polonist.com/golabki-polish-stuffed-cabbage-rolls/",
      note: "softening whole-head leaves, par-cooked rice + meat filling, tomato braise",
    },
  ],
};
