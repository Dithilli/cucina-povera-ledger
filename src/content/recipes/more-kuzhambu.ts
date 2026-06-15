import type { Recipe } from "../types";

export const moreKuzhambu: Recipe = {
  slug: "more-kuzhambu",
  title: "Mor Kuzhambu",
  cuisine: "south-indian",
  blurb:
    "Sour yogurt loosened to buttermilk and thickened with a ground paste of coconut, soaked dal, and green chili, then gently warmed with sautéed okra or ash gourd — never boiled, so it stays silky and tangy.",
  servings: 4,
  perServing: { calories: 320, protein: 12 },
  estCostPerServing: 1.1,
  roles: ["dinner"],
  ingredients: [
    { item: "sour plain yogurt, whisked with water", qty: "2 cups", cost: 1.2 },
    { item: "okra or ash gourd, cut", qty: "2 cups", cost: 0.9 },
    { item: "grated coconut", qty: "1/3 cup", cost: 0.5 },
    { item: "toor dal + raw rice, soaked", qty: "1 tbsp each", cost: 0.25, spansWeeks: true },
    { item: "green chilies", qty: "2", cost: 0.1 },
    { item: "cumin seeds, ginger", qty: "1 tsp + small piece", cost: 0.15, spansWeeks: true },
    { item: "mustard seeds, dried red chili, curry leaves, fenugreek", qty: "for tadka", cost: 0.15, spansWeeks: true },
    { item: "turmeric, asafoetida, salt", qty: "to taste", cost: 0.15, spansWeeks: true },
    { item: "coconut oil", qty: "1 tbsp", cost: 0.15, spansWeeks: true },
  ],
  method: [
    "Soak a spoon each of toor dal and raw rice for 20 minutes, then grind with the coconut, green chilies, cumin, and ginger to a smooth paste — this is what keeps the yogurt from splitting.",
    "Sauté the okra (or simmer the cubed ash gourd) in a little coconut oil until almost cooked and no longer slimy.",
    "Whisk the sour yogurt with water, turmeric, salt, and the ground paste. Add the vegetable and warm over a low flame, stirring, just until it steams and thickens — do not let it boil or the yogurt will curdle.",
    "Temper mustard seeds, fenugreek, red chili, asafoetida, and curry leaves in coconut oil and pour over. Serve over hot rice.",
  ],
  modernMove:
    "The soaked-dal-and-rice in the ground paste is a stabilizer — its starch holds the yogurt together so the kuzhambu thickens to a silky curry over low heat instead of breaking into curds.",
  notes:
    "Use genuinely sour yogurt for the right tang. Keep the heat low throughout once the yogurt goes in; this is a warm-through curry, not a simmered one.",
  tags: ["south-indian", "yogurt", "kuzhambu", "coconut", "curry"],
  sources: [
    {
      title: "Neha Mathur — Whisk Affair (Mor Kuzhambu, Tamil Brahmin Style)",
      url: "https://www.whiskaffair.com/mor-kuzhambu-recipe-more-kulambu/",
      note: "Confirmed the coconut-dal-rice-chili stabilizing paste, sautéing okra first, and warming the yogurt curry without boiling.",
    },
  ],
};
