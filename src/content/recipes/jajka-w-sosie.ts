import type { Recipe } from "../types";

export const jajkaWSosie: Recipe = {
  slug: "jajka-w-sosie",
  title: "Jajka w Sosie Musztardowym",
  cuisine: "polish",
  blurb:
    "Hard-boiled eggs halved into a velvety mustard sauce — a roux loosened with broth and milk, sharpened with Polish mustard and a squeeze of lemon — ladled over boiled potatoes and showered with dill. A few eggs and a spoon of mustard turned into a warm, comforting supper for pennies.",
  servings: 4,
  perServing: { calories: 470, protein: 18 },
  estCostPerServing: 0.95,
  roles: ["dinner"],
  ingredients: [
    { item: "eggs", qty: "8", cost: 2.0 },
    { item: "potatoes", qty: "1 1/2 lb", cost: 1.0 },
    { item: "butter", qty: "2 tbsp", cost: 0.3, spansWeeks: true },
    { item: "flour", qty: "2 tbsp", cost: 0.05, spansWeeks: true },
    { item: "milk", qty: "1 cup", cost: 0.3 },
    { item: "broth or water", qty: "1 cup", cost: 0.1 },
    { item: "Polish mustard", qty: "2 tbsp", cost: 0.2, spansWeeks: true },
    { item: "lemon juice", qty: "1 tsp", cost: 0.05 },
    { item: "fresh dill, chopped", qty: "2 tbsp", cost: 0.3 },
    { item: "salt and pepper", qty: "to taste", cost: 0.05, spansWeeks: true },
  ],
  method: [
    "Boil the potatoes in salted water until tender, 18–20 minutes; drain and keep warm.",
    "Hard-boil the eggs (10 minutes), cool under cold water, peel, and halve.",
    "Make the sauce: melt the butter, stir in the flour, and cook the roux a minute without coloring. Whisk in the broth and milk a splash at a time so it stays smooth, then simmer until it thickens.",
    "Off the boil, stir in the mustard, lemon juice, salt, and pepper — add the mustard at the end so its sharpness survives. Slip the egg halves into the warm sauce to heat through, not to boil.",
    "Spoon the potatoes onto plates, ladle over the eggs and mustard sauce, and shower with fresh dill.",
  ],
  modernMove:
    "Stir the mustard in off the heat. Boiling drives off its volatile bite and turns the sauce dull and bitter; added at the end, it stays bright and tangy against the soft eggs.",
  notes:
    "A classic Easter-Monday dish that earns its place all year as cheap, gentle comfort food. Stretch it further over rice or kasza instead of potatoes.",
  zeroWasteHero: false,
  tags: ["polish", "eggs", "mustard", "potatoes", "thrift"],
  sources: [
    {
      title: "Ania Gotuje — Jajka w sosie musztardowym",
      url: "https://aniagotuje.pl/przepis/jajka-w-sosie-musztardowym",
      note: "Roux-based mustard sauce loosened with broth and milk, hard eggs served over potatoes with dill",
    },
  ],
};
