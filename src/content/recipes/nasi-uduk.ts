import type { Recipe } from "../types";

export const nasiUduk: Recipe = {
  slug: "nasi-uduk",
  title: "Nasi Uduk",
  cuisine: "indonesian",
  blurb:
    "Betawi coconut rice — long-grain rice steamed in coconut milk with lemongrass, pandan, and bay, eaten with fried shallots, sambal, and a fried egg.",
  servings: 4,
  perServing: { calories: 540, protein: 14 },
  estCostPerServing: 0.85,
  roles: ["dinner", "base", "side"],
  ingredients: [
    { item: "long-grain rice", qty: "2 cups", cost: 0.5 },
    { item: "coconut milk", qty: "1 1/2 cups", cost: 0.9 },
    { item: "lemongrass stalk, bruised", qty: "1", cost: 0.3, spansWeeks: true },
    { item: "pandan leaf (knotted)", qty: "1", cost: 0.2, spansWeeks: true },
    { item: "salam (Indonesian bay) or bay leaves", qty: "2", cost: 0.1, spansWeeks: true },
    { item: "galangal, sliced", qty: "1 thumb", cost: 0.2, spansWeeks: true },
    { item: "fried shallots", qty: "1/4 cup", cost: 0.4 },
    { item: "eggs, fried (one per plate)", qty: "4", cost: 0.8 },
    { item: "cucumber and sambal to serve", qty: "to serve", cost: 0.4 },
    { item: "salt", qty: "to taste" },
  ],
  method: [
    "Rinse the rice until the water runs clear, then soak 15 minutes so it cooks evenly in the richer coconut liquid.",
    "Bring the coconut milk, an equal measure of water, lemongrass, pandan, salam, galangal, and salt to a gentle simmer — stir so the coconut milk doesn't catch and split.",
    "Add the drained rice and cook, covered, until the liquid is absorbed and craters form on the surface.",
    "Steam off the heat (or over low steam) for 10–15 minutes so the grains finish fluffy and perfumed rather than wet.",
    "Fluff out the aromatics and serve mounded with fried shallots, a fried egg, cucumber, and a spoon of sambal.",
  ],
  modernMove:
    "Cooking the rice in coconut milk cut with water — then finishing by steam, not boil — keeps the grains separate and fragrant instead of sticky, the line between nasi uduk and coconut porridge.",
  tags: ["coconut-rice", "betawi", "lemongrass", "pandan", "base", "egg"],
  sources: [
    { title: "Anita Jacobson — Daily Cooking Quest", url: "https://dailycookingquest.com/nasi-uduk-betawi-jakarta-fragrant-coconut-rice.html", note: "Betawi coconut rice steamed with lemongrass, pandan, and galangal" },
    { title: "Wikipedia — Nasi uduk", url: "https://en.wikipedia.org/wiki/Nasi_uduk", note: "Betawi origin and coconut-milk steamed rice definition" },
  ],
};
