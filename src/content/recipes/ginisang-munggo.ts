import type { Recipe } from "../types";

export const ginisangMunggo: Recipe = {
  slug: "ginisang-munggo",
  title: "Ginisang Munggo",
  cuisine: "filipino",
  blurb:
    "Sautéed mung bean stew — split mung beans simmered soft over the garlic-onion-tomato ginisa base, lifted with malunggay and a little pork or smoked fish.",
  servings: 4,
  perServing: { calories: 560, protein: 24 },
  estCostPerServing: 0.85,
  roles: ["dinner"],
  ingredients: [
    { item: "dried mung beans (munggo)", qty: "1 1/2 cups", cost: 1.2 },
    { item: "garlic, minced", qty: "4 cloves", cost: 0.15, spansWeeks: true },
    { item: "onion, chopped", qty: "1", cost: 0.3 },
    { item: "tomatoes, chopped", qty: "2", cost: 0.5 },
    {
      item: "pork belly OR a little smoked fish (tinapa), diced",
      qty: "3 oz",
      cost: 0.9,
    },
    { item: "malunggay (moringa) leaves, or spinach", qty: "2 cups", cost: 0.6 },
    { item: "patis (fish sauce)", qty: "1 tbsp", cost: 0.1, spansWeeks: true },
    { item: "cooking oil", qty: "2 tbsp", cost: 0.15, spansWeeks: true },
    { item: "black pepper, salt", qty: "to taste" },
  ],
  method: [
    "Rinse the mung beans and boil in plenty of water until very soft and beginning to break down, about 45 minutes; set aside in their liquid.",
    "In a pot, build the ginisa base: sauté garlic in oil until golden, add onion until soft, then the tomatoes and cook until they collapse into a sauce.",
    "Render the pork (or smoked fish) in the base until browned, seasoning with patis.",
    "Tip in the cooked beans and their liquid. Simmer to marry, mashing some beans against the pot so the stew turns thick and creamy.",
    "Fold in the malunggay at the very end so it stays green; season with pepper and a little more patis. Serve over hot rice.",
  ],
  modernMove:
    "Mashing a third of the cooked beans into the broth emulsifies the whole pot — it goes from watery to velvety without a drop of cream.",
  notes:
    "A Friday-night staple across the islands — almost free, and the malunggay turns a bean pot into a near-complete meal.",
  tags: ["legumes", "mung-beans", "ginisa", "malunggay", "one-pot", "frugal"],
};
