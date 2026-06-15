import type { Recipe } from "../types";

export const beefStewEa: Recipe = {
  slug: "beef-stew-ea",
  title: "Beef Stew",
  cuisine: "east-african",
  blurb:
    "The everyday Kenyan beef stew: cubes browned and simmered down in a thick tomato-onion gravy with carrots and potatoes until the cheap cut turns spoon-soft — the hearty all-rounder for ugali, chapati or rice.",
  servings: 5,
  perServing: { calories: 560, protein: 28 },
  estCostPerServing: 1.7,
  roles: ["dinner"],
  ingredients: [
    { item: "beef chuck or stewing beef, cubed", qty: "1 1/2 lb", cost: 6.0 },
    { item: "onions, diced", qty: "2", cost: 0.5 },
    { item: "tomatoes, chopped", qty: "3", cost: 0.9 },
    { item: "tomato paste", qty: "2 tbsp", cost: 0.15, spansWeeks: true },
    { item: "carrots, chunked", qty: "2", cost: 0.4 },
    { item: "potatoes, chunked", qty: "3 medium", cost: 0.6 },
    { item: "garlic cloves, minced", qty: "3", cost: 0.1, spansWeeks: true },
    { item: "fresh ginger, grated", qty: "1 tbsp", cost: 0.15, spansWeeks: true },
    { item: "curry powder", qty: "1 tbsp", cost: 0.1, spansWeeks: true },
    { item: "paprika", qty: "1 tsp", cost: 0.05, spansWeeks: true },
    { item: "dhania (cilantro), chopped", qty: "small bunch", cost: 0.3, spansWeeks: true },
    { item: "vegetable oil", qty: "2 tbsp", cost: 0.1, spansWeeks: true },
    { item: "salt and pepper", qty: "to taste", cost: 0.05, spansWeeks: true },
    { item: "ugali or rice, to serve", qty: "to serve" },
  ],
  method: [
    "Brown the beef cubes hard in oil, in batches so they sear rather than steam, then set aside.",
    "Soften the onions in the same pot until golden, then add garlic, ginger, curry powder and paprika and fry until fragrant.",
    "Stir in the tomatoes and tomato paste and cook to a thick sauce, scraping up the browned bits.",
    "Return the beef with water to cover, bring to a boil, then lower and simmer covered 45 minutes until the meat starts to soften.",
    "Add carrots and potatoes and simmer another 25–30 minutes, until the vegetables are tender, the beef is soft and the gravy has thickened. Finish with dhania and serve.",
  ],
  modernMove:
    "Let the potatoes break down slightly at the edges in the last simmer — the released starch thickens the gravy naturally, no flour needed, stretching a modest amount of beef across a fuller pot.",
  notes:
    "Better the next day. The potatoes and carrots make it a full meal on their own with just ugali.",
  zeroWasteHero: false,
  tags: ["meat", "east-african", "beef", "stew", "kenyan"],
  sources: [
    {
      title: "Global Table Adventure — Kenyan Stewed Beef (Nyama)",
      url: "https://globaltableadventure.com/recipe/kenyan-nyama-stewed-beef/",
      note: "Brown-then-simmer beef in tomato-onion gravy with carrots and potatoes",
    },
  ],
};
