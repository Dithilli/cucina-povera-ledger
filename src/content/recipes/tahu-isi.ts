import type { Recipe } from "../types";

export const tahuIsi: Recipe = {
  slug: "tahu-isi",
  title: "Tahu Isi",
  cuisine: "indonesian",
  blurb:
    "Fried tofu pockets split open and stuffed with a quick sauté of carrot, cabbage, and bean sprouts, then jacketed in a spiced batter and fried crisp again — the warung gorengan snack that becomes dinner over rice with raw chilies on the side.",
  servings: 4,
  perServing: { calories: 540, protein: 20 },
  estCostPerServing: 0.95,
  roles: ["dinner", "side"],
  ingredients: [
    { item: "firm tofu (the airy 'pong' kind if you can get it), cut into triangles", qty: "1 lb", cost: 1.6 },
    { item: "carrot, cut into fine matchsticks", qty: "1", cost: 0.2 },
    { item: "cabbage, finely shredded", qty: "1/4 small head", cost: 0.4 },
    { item: "bean sprouts", qty: "1 cup", cost: 0.3 },
    { item: "shallots, sliced", qty: "3", cost: 0.4, spansWeeks: true },
    { item: "garlic cloves, minced", qty: "2", cost: 0.1, spansWeeks: true },
    { item: "spring onion, chopped", qty: "1", cost: 0.15 },
    { item: "all-purpose flour", qty: "3/4 cup", cost: 0.25, spansWeeks: true },
    { item: "rice flour (for crispness)", qty: "2 tbsp", cost: 0.1, spansWeeks: true },
    { item: "ground coriander", qty: "1/2 tsp", cost: 0.1, spansWeeks: true },
    { item: "salt, pepper, pinch of sugar", qty: "to taste", cost: 0.05 },
    { item: "oil for shallow frying", qty: "1/2 cup", cost: 0.5, spansWeeks: true },
    { item: "bird's-eye chilies, to serve raw", qty: "a few", cost: 0.2, spansWeeks: true },
  ],
  method: [
    "Fry the tofu triangles whole in hot oil until golden and firm, then drain. Once cool enough to handle, slit a deep pocket in the long side of each — frying first gives you a sturdy shell that won't tear when you stuff it.",
    "Sauté the shallots and garlic until fragrant, then add the carrot, cabbage, bean sprouts, and spring onion. Stir-fry hard and fast with salt, pepper, and a pinch of sugar until just wilted but still crunchy. Cool the filling completely.",
    "Pack a spoonful of the vegetables into each tofu pocket. Whisk the flour, rice flour, coriander, salt, and enough water into a thin, pourable batter.",
    "Dip each stuffed tofu in the batter to coat lightly, then fry in hot oil until the jacket is deep golden and crisp. Drain and serve hot with whole raw chilies and rice, warung-style — you bite the tofu and the chili in the same mouthful.",
  ],
  modernMove:
    "The two-fry method is the trick: frying the tofu first builds a firm wall that holds the filling, and the second batter-fry seals everything into one crackly package. A spoon of rice flour in the batter keeps that jacket shatter-crisp instead of bready.",
  notes:
    "Any odds and ends from the vegetable basket — a stub of carrot, the heart of a cabbage, a handful of sprouts going soft — are exactly what the filling wants, so nothing is wasted.",
  tags: ["dinner", "tofu", "fried", "gorengan", "vegetables", "warung"],
  sources: [
    { title: "What To Cook Today — Tahu Isi Sayur (Crispy Veggie Stuffed Tofu)", url: "https://whattocooktoday.com/indonesian-stuffed-tofu-tahu-isi.html", note: "two-fry method, batter ratios, vegetable filling" },
    { title: "SBS Food — Stuffed Tofu (Tahu Isi)", url: "https://www.sbs.com.au/food/recipe/stuffed-tofu-tahu-isi/54advxg0f", note: "classic carrot-cabbage-sprout filling and spiced batter" },
  ],
};
