import type { Recipe } from "../types";

export const kukuKienyeji: Recipe = {
  slug: "kuku-kienyeji",
  title: "Kuku Kienyeji",
  cuisine: "east-african",
  blurb:
    "Tough, deeply flavored free-range chicken simmered long and low in a tomato-onion base with garlic, ginger and dhania until the lean bird softens and the gravy turns rich — the Sunday stew you eat with ugali.",
  servings: 4,
  perServing: { calories: 560, protein: 34 },
  estCostPerServing: 1.9,
  roles: ["dinner"],
  ingredients: [
    { item: "free-range chicken (kienyeji), cut in pieces", qty: "2 1/2 lb", cost: 5.5 },
    { item: "onions, sliced", qty: "2", cost: 0.5 },
    { item: "tomatoes, chopped", qty: "3", cost: 0.9 },
    { item: "tomato paste", qty: "1 tbsp", cost: 0.1, spansWeeks: true },
    { item: "garlic cloves, minced", qty: "4", cost: 0.15, spansWeeks: true },
    { item: "fresh ginger, grated", qty: "1 tbsp", cost: 0.15, spansWeeks: true },
    { item: "curry powder", qty: "1 tbsp", cost: 0.1, spansWeeks: true },
    { item: "ground turmeric", qty: "1/2 tsp", cost: 0.05, spansWeeks: true },
    { item: "pilipili hoho (green chili)", qty: "1", cost: 0.15, spansWeeks: true },
    { item: "dhania (cilantro), chopped", qty: "small bunch", cost: 0.3, spansWeeks: true },
    { item: "vegetable oil", qty: "2 tbsp", cost: 0.1, spansWeeks: true },
    { item: "salt and pepper", qty: "to taste", cost: 0.05, spansWeeks: true },
    { item: "ugali, to serve", qty: "to serve" },
  ],
  method: [
    "Season the chicken and brown it in oil in batches until golden, then set aside; the browning is where the lean kienyeji bird gives up its flavor.",
    "Soften the onions in the same pot until deep gold, then add garlic, ginger, curry powder and turmeric and fry until fragrant.",
    "Stir in the tomatoes and tomato paste and cook down to a thick, jammy base, breaking the tomatoes against the pot.",
    "Return the chicken with a splash of water, cover, and simmer low and slow 45–60 minutes, until the tough bird is fork-tender and the gravy is rich.",
    "Stir in the chopped chili and most of the dhania, check the salt, and finish with the rest of the herbs. Serve with ugali.",
  ],
  modernMove:
    "Free-range chicken is lean and firm, so low-and-slow is non-negotiable — a gentle, covered simmer breaks down the working muscle instead of toughening it the way a hard boil would.",
  notes:
    "A regular chicken works but cooks faster; check at 30 minutes. The slow simmer also yields a little extra gravy for a second day over rice.",
  zeroWasteHero: false,
  tags: ["meat", "east-african", "chicken", "stew", "kenyan"],
  sources: [
    {
      title: "Kaluhi's Kitchen — Chicken Stew (Kuku Kienyeji)",
      url: "https://www.kaluhiskitchen.com/chicken-stew-chicken-kienyeji-1/",
      note: "Slow-simmered tomato-onion free-range chicken stew with curry, ginger and dhania",
    },
  ],
};
