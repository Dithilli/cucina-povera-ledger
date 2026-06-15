import type { Recipe } from "../types";

export const scarolaEFagioli: Recipe = {
  slug: "scarola-e-fagioli",
  title: "Scarola e Fagioli",
  cuisine: "italian",
  blurb:
    "Escarole and beans — the Neapolitan garden classic, wilted bitter greens and creamy cannellini in a garlicky brodo, finished with chili.",
  servings: 4,
  perServing: { calories: 340, protein: 16 },
  estCostPerServing: 0.85,
  roles: ["dinner", "lunch", "side"],
  ingredients: [
    {
      item: "escarole, washed and chopped",
      qty: "2 heads",
      cost: 2.0,
    },
    {
      item: "cooked cannellini (with liquid)",
      qty: "2 1/2 cups",
      cost: 0.95,
    },
    {
      item: "garlic cloves, sliced",
      qty: "4",
      cost: 0.2,
      spansWeeks: true,
    },
    {
      item: "dried chili; anchovy (optional)",
      qty: "1 chili, 2 fillets",
      cost: 0.4,
      spansWeeks: true,
    },
    {
      item: "olive oil, salt, pepper",
      qty: "4 tbsp oil",
      cost: 0.6,
      spansWeeks: true,
    },
  ],
  method: [
    "Warm the olive oil with the garlic, chili, and anchovy until the anchovy melts and the garlic is fragrant.",
    "Add the escarole and wilt it down, in batches if needed.",
    "Add the beans with their liquid and a little water; simmer 10–15 minutes, mashing some beans for body, until brothy and silky.",
    "Season, finish with raw oil and pepper. Serve as a brothy soup or thicker as a side, with bread.",
  ],
  modernMove:
    "Melt an anchovy into the garlic oil first — it disappears entirely but underwrites the whole pot with a savory depth that reads as long-simmered.",
  tags: ["garden", "greens", "legumes", "beans", "soup", "one-pot"],
  sources: [
    {
      title: "Endive (escarole) — Wikipedia",
      url: "https://en.wikipedia.org/wiki/Endive",
      note: "Escarole (scarola) smothered Southern-Italian style, paired here with beans",
    },
  ],
};
