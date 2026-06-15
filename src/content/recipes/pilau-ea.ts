import type { Recipe } from "../types";

export const pilauEa: Recipe = {
  slug: "pilau-ea",
  title: "Pilau",
  cuisine: "east-african",
  blurb:
    "The Swahili coast's celebration one-pot — beef and onions browned deep, then basmati toasted in the meaty fat and toasted pilau masala until every golden grain carries clove, cardamom, and cumin.",
  servings: 4,
  perServing: { calories: 640, protein: 24 },
  estCostPerServing: 1.8,
  roles: ["dinner"],
  ingredients: [
    { item: "stewing beef, cubed", qty: "3/4 lb", cost: 3.2 },
    { item: "basmati rice", qty: "2 cups", cost: 0.9 },
    { item: "onions, sliced thin", qty: "3 medium", cost: 0.75 },
    { item: "pilau masala (cumin, cardamom, clove, cinnamon, black pepper)", qty: "2 tbsp", cost: 0.3, spansWeeks: true },
    { item: "garlic + ginger paste", qty: "1 tbsp each", cost: 0.2, spansWeeks: true },
    { item: "potato, cubed", qty: "1 medium", cost: 0.2 },
    { item: "cooking oil", qty: "3 tbsp", cost: 0.15, spansWeeks: true },
    { item: "dhania (cilantro) + salt", qty: "handful / to taste", cost: 0.15 },
  ],
  method: [
    "Fry the sliced onions in the oil over patient heat until deep brown — this caramel is what colors the whole pot.",
    "Add the beef, garlic, and ginger and brown well, then stir in the pilau masala and toast 1–2 minutes until fragrant.",
    "Pour in about a cup of water, cover, and simmer until the beef is nearly tender; add the cubed potato.",
    "Stir in the rinsed basmati to coat it in the spiced fat, then add 2½ cups water and salt and bring to a boil.",
    "Cover tight and steam on the lowest heat 18–20 minutes; rest 5, then fluff and fold through dhania.",
  ],
  modernMove:
    "Take the onions all the way to deep brown before anything else goes in — pilau gets its signature mahogany color and depth from caramelized onion, not from any added coloring.",
  notes:
    "A coastal dish of Arab and Indian lineage cooked for weddings and Eid, but frugal enough on a weeknight: a modest piece of beef perfumes two full cups of rice.",
  zeroWasteHero: false,
  tags: ["rice", "beef", "pilau", "swahili", "dinner", "east-african"],
  sources: [
    {
      title: "Abi — Eat Well Abi (Easy Kenyan Beef Pilau Rice)",
      url: "https://eatwellabi.com/easy-kenyan-beef-pilau-rice-recipe/",
      note: "Deep-browned onions and beef, toasted pilau masala, then basmati cooked one-pot in the spiced stock.",
    },
  ],
};
