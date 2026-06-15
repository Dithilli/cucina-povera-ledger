import type { Recipe } from "../types";

export const tahuBacem: Recipe = {
  slug: "tahu-bacem",
  title: "Tahu Bacem",
  cuisine: "indonesian",
  blurb:
    "Tofu braised in palm sugar, tamarind, and aromatics until the liquid is gone, then seared — the Central Javanese way of making cheap protein taste cured.",
  servings: 4,
  perServing: { calories: 470, protein: 26 },
  estCostPerServing: 0.92,
  roles: ["dinner"],
  ingredients: [
    { item: "firm tofu, cut into thick slabs", qty: "1 lb", cost: 1.6 },
    { item: "palm sugar (or brown sugar)", qty: "3 tbsp", cost: 0.4, spansWeeks: true },
    {
      item: "tamarind pulp, soaked and strained",
      qty: "1 tbsp",
      cost: 0.2,
      spansWeeks: true,
    },
    { item: "garlic cloves", qty: "4", cost: 0.2, spansWeeks: true },
    { item: "shallots", qty: "3", cost: 0.3 },
    { item: "ground coriander", qty: "1 tsp", cost: 0.1, spansWeeks: true },
    {
      item: "bay leaves (Indonesian salam if you have them)",
      qty: "2",
      cost: 0.1,
      spansWeeks: true,
    },
    { item: "galangal, smashed", qty: "1 thumb", cost: 0.2, spansWeeks: true },
    { item: "sweet soy sauce (kecap manis)", qty: "2 tbsp", cost: 0.3, spansWeeks: true },
    { item: "neutral oil for frying", qty: "2 tbsp", cost: 0.2, spansWeeks: true },
    { item: "salt", qty: "to taste" },
  ],
  method: [
    "Pound the garlic, shallots, and coriander to a rough paste.",
    "Lay the tofu in a wide pan with the paste, palm sugar, tamarind, kecap manis, bay, galangal, and water just to cover. Salt lightly.",
    "Simmer uncovered, turning the tofu now and then, until the braise reduces to a sticky glaze and the tofu has drunk it all — about 30 minutes. This is the whole point: the tofu carries the seasoning inside, not just on the surface.",
    "Lift the slabs out and pan-fry or grill them in a film of hot oil until the sugar caramelizes to a dark, blistered crust. Serve with rice and sambal.",
  ],
  modernMove:
    "Braising the tofu to dryness before frying seasons it all the way through — frying first would only coat it. The reduced glaze becomes the crust.",
  tags: ["tofu", "braised", "kecap-manis", "javanese", "make-ahead"],
  sources: [
    { title: "Anita Jacobson — Daily Cooking Quest", url: "https://dailycookingquest.com/tahu-tempeh-bacem.html", note: "Central Javanese tofu braised in palm sugar, tamarind, and spices, then fried" },
  ],
};
