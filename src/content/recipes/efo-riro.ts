import type { Recipe } from "../types";

export const efoRiro: Recipe = {
  slug: "efo-riro",
  title: "Efo Riro (Greens Stew)",
  cuisine: "west-african",
  blurb:
    "A thick Yoruba greens stew — a fried pepper base loosened with a little stockfish or smoked fish, then a mountain of spinach folded in at the end so it stays bright. Greens stretched by pepper, fish stretched by greens.",
  servings: 6,
  perServing: { calories: 460, protein: 22 },
  estCostPerServing: 1.45,
  roles: ["dinner"],
  ingredients: [
    { item: "spinach, kale or collards, washed and chopped", qty: "1 1/2 lb", cost: 2.0 },
    { item: "blended red pepper base (red bell pepper, scotch bonnet, tomato, onion)", qty: "2 cups", cost: 1.4 },
    { item: "smoked mackerel or dried fish, flaked", qty: "6 oz", cost: 2.5 },
    { item: "red palm oil", qty: "1/3 cup", cost: 0.6, spansWeeks: true },
    { item: "onion, sliced", qty: "1", cost: 0.3 },
    { item: "locust beans (iru) or 1 tbsp miso for funk", qty: "1 tbsp", cost: 0.4, spansWeeks: true },
    { item: "ground crayfish", qty: "1 tbsp", cost: 0.4, spansWeeks: true },
    { item: "stock cube / bouillon", qty: "1–2", cost: 0.2, spansWeeks: true },
    { item: "salt", qty: "to taste" },
  ],
  method: [
    "If using sturdy greens (kale, collards), blanch briefly and squeeze dry so they don't water down the pot; tender spinach can go in raw and squeezed.",
    "Sweat the sliced onion in the palm oil, then tip in the blended pepper base and fry it down hard until the oil splits and the colour deepens — about 15 minutes. This fry is what makes a greens stew taste rich rather than boiled.",
    "Stir in the locust beans (or miso), crayfish and crushed stock cube, then fold through the flaked smoked fish so it perfumes the oil.",
    "Add the greens in handfuls, folding each batch into the hot base. Cook just until collapsed and glossy — only a few minutes for spinach — so they keep their colour and bite.",
    "Taste for salt. Serve thick, with white rice, boiled yam, or eba.",
  ],
  modernMove:
    "Frying the pepper base fully before the greens go in, and adding the greens last, is the whole trick: you build the deep flavour in the oil, then barely cook the leaves so the stew stays vivid green instead of khaki.",
  notes:
    "Efo means greens; riro means stirred. Endlessly forgiving of whatever leaf is cheap that week, and the smoked fish does the work of far more meat.",
  tags: ["greens", "spinach", "pepper-stew", "palm-oil", "smoked-fish", "iru"],
  sources: [
    {
      title: "All Nigerian Recipes — Efo Riro: A Yoruba Delicacy",
      url: "https://www.allnigerianrecipes.com/soups/efo-riro/",
      note: "Yoruba greens stew built on a fried pepper base with palm oil, iru, crayfish, and smoked fish.",
    },
  ],
};
