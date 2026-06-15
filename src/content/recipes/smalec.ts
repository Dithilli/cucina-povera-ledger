import type { Recipe } from "../types";

export const smalec: Recipe = {
  slug: "smalec",
  title: "Smalec",
  cuisine: "polish",
  blurb:
    "Pork fat rendered slow with bacon, sweet apple, and onion, seasoned with garlic and marjoram, then set in a crock until spreadable — the lard the poor spread thick on rye where others had butter. A spoonful on dark bread with a sour pickle is the most honest snack in Poland.",
  servings: 20,
  perServing: { calories: 120, protein: 1 },
  estCostPerServing: 0.2,
  roles: ["base"],
  ingredients: [
    { item: "pork back fat or fatback, diced small", qty: "1 lb", cost: 2.0 },
    { item: "smoked bacon, diced", qty: "4 oz", cost: 1.0 },
    { item: "onion, finely diced", qty: "1 medium", cost: 0.4 },
    { item: "tart apple, peeled and diced", qty: "1 small", cost: 0.4 },
    { item: "garlic cloves, minced", qty: "2", cost: 0.1, spansWeeks: true },
    { item: "dried marjoram", qty: "1 tsp", cost: 0.05, spansWeeks: true },
    { item: "salt and pepper", qty: "to taste", cost: 0.05, spansWeeks: true },
  ],
  method: [
    "Dice the pork fat and bacon as small as you can — the smaller the pieces, the faster and cleaner they render.",
    "Render gently in a heavy pot over low-medium heat, stirring now and then, until the fat melts to clear liquid and the solid bits (skwarki, cracklings) slowly turn golden. Don't rush it; high heat scorches the fat bitter.",
    "Add the onion and apple and cook until soft and lightly golden, then stir in the garlic, marjoram, salt, and pepper and give it a couple more minutes.",
    "Take off the heat and let it cool a few minutes so the cracklings stay suspended rather than sinking.",
    "Pour into a clean jar or crock, cracklings and all, and refrigerate until set to a soft, white, spreadable lard. Spread thick on rye bread with a sour pickle.",
  ],
  modernMove:
    "Render over patient low heat: it's the only way to drive the cracklings to gold without burning the fat. The apple and marjoram cut the richness so a slice on rye tastes savory and bright rather than just greasy.",
  notes:
    "The bread spread of the Polish foundation — set out with pickles and onion as zakąska, or spread under cold cuts. Keeps several weeks chilled. Save and reuse for frying the week's krokiety and potatoes.",
  zeroWasteHero: true,
  tags: ["polish", "base", "lard", "spread", "rye", "make-ahead"],
  sources: [
    {
      title: "Polish Housewife (Lois Britton) — Smalec Recipe",
      url: "https://polishhousewife.com/smalec-recipe/",
      note: "Rendering pork fat and bacon with onion, apple, garlic, and marjoram into a spreadable lard for rye bread",
    },
  ],
};
