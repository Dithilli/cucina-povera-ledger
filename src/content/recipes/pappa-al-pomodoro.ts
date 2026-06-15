import type { Recipe } from "../types";

export const pappaAlPomodoro: Recipe = {
  slug: "pappa-al-pomodoro",
  title: "Pappa al Pomodoro",
  cuisine: "italian",
  blurb:
    "Tuscan tomato-and-bread porridge — stale bread cooked into a thick, garlicky tomato soup eaten warm or at room temperature.",
  servings: 4,
  perServing: { calories: 420, protein: 11 },
  estCostPerServing: 0.95,
  roles: ["dinner", "lunch"],
  ingredients: [
    {
      item: "stale country bread, torn into chunks",
      qty: "6 thick slices",
      cost: 0.75,
    },
    {
      item: "can whole peeled tomatoes (or ripe summer tomatoes)",
      qty: "1 large can",
      cost: 1.8,
    },
    { item: "garlic cloves, sliced", qty: "4", cost: 0.2, spansWeeks: true },
    {
      item: "fresh basil, torn",
      qty: "1 handful",
      cost: 0.5,
      spansWeeks: true,
    },
    {
      item: "olive oil (generous, plus a thread to finish)",
      qty: "5 tbsp",
      cost: 0.75,
      spansWeeks: true,
    },
    { item: "salt, chili flakes", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Warm a generous pour of olive oil with the garlic and chili until fragrant but not browned.",
    "Add the tomatoes, crushing them by hand, plus a cup of water (or light brodo). Simmer 15 minutes and season well.",
    "Stir in the torn bread and most of the basil. Cook gently, stirring, until the bread breaks down into a thick porridge — add water to loosen as needed.",
    "Off the heat, beat in raw olive oil for gloss. Rest 10 minutes. Serve warm or at room temperature with the rest of the basil and a final thread of oil.",
  ],
  modernMove:
    "Beat in cold raw olive oil off the heat — it emulsifies into the warm bread and gives a velvety, almost creamy finish from a four-ingredient soup.",
  zeroWasteHero: true,
  tags: ["bread", "tomato", "soup", "zero-waste", "summer"],
  sources: [
    {
      title: "Pappa al pomodoro — Wikipedia",
      url: "https://en.wikipedia.org/wiki/Pappa_al_pomodoro",
      note: "Thick Tuscan bread-and-tomato soup with olive oil, garlic, and basil",
    },
  ],
};
