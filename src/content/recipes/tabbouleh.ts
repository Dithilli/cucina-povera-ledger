import type { Recipe } from "../types";

export const tabbouleh: Recipe = {
  slug: "tabbouleh",
  title: "Tabbouleh",
  cuisine: "levantine",
  blurb:
    "A herb salad more than a grain one — mountains of finely chopped parsley and mint, just a whisper of fine bulgur, tomato, and a bright lemon dressing.",
  servings: 4,
  perServing: { calories: 220, protein: 5 },
  estCostPerServing: 0.95,
  roles: ["dinner", "side"],
  ingredients: [
    {
      item: "flat-leaf parsley, very finely chopped",
      qty: "2 large bunches",
      cost: 1.5,
    },
    { item: "fresh mint, finely chopped", qty: "1 small bunch", cost: 0.6 },
    {
      item: "fine bulgur (#1), soaked and drained",
      qty: "1/4 cup",
      cost: 0.25,
    },
    { item: "ripe tomatoes, finely diced", qty: "2", cost: 1.0 },
    { item: "spring onions, thinly sliced", qty: "3", cost: 0.4 },
    {
      item: "lemon, juiced",
      qty: "1 large",
      cost: 0.4,
      spansWeeks: true,
    },
    {
      item: "olive oil, salt, allspice (optional)",
      qty: "4 tbsp oil",
      cost: 0.6,
      spansWeeks: true,
    },
  ],
  method: [
    "Soak the fine bulgur in a little cold water for 10 minutes, then drain and squeeze dry — it should swell but stay raw-tender, never mushy.",
    "Chop the parsley and mint by hand as finely as patience allows, keeping them dry so they stay fluffy rather than bruised and wet.",
    "Toss the herbs with the bulgur, tomatoes, and spring onions.",
    "Dress with lemon juice, olive oil, and salt just before serving so the parsley stays vivid green; add a pinch of allspice if you like.",
  ],
  modernMove:
    "Treat the bulgur as seasoning, not the base — a mere quarter cup lets the parsley lead, which is how it's eaten in the Levant rather than the grain-heavy diaspora version.",
  notes:
    "Scoop with lettuce leaves or fresh cabbage for a no-bread, all-green dinner plate.",
  tags: ["parsley", "bulgur", "herbs", "salad", "no-cook", "summer"],
};
