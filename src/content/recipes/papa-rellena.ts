import type { Recipe } from "../types";

export const papaRellena: Recipe = {
  slug: "papa-rellena",
  title: "Papa Rellena",
  cuisine: "andean",
  blurb:
    "A fist of seasoned mashed potato wrapped around a savory picadillo of beef, onion, ají, egg and olive, breaded and fried to a crisp gold shell — the Andes' answer to making one cheap potato and a few ounces of meat feel like a feast.",
  servings: 4,
  perServing: { calories: 540, protein: 18 },
  estCostPerServing: 1.35,
  roles: ["dinner"],
  ingredients: [
    { item: "starchy yellow potatoes, boiled and riced", qty: "2 lb", cost: 1.6 },
    { item: "ground beef", qty: "8 oz", cost: 2.2 },
    { item: "red onion, finely diced", qty: "1 large", cost: 0.4 },
    { item: "garlic, minced", qty: "3 cloves", cost: 0.15, spansWeeks: true },
    { item: "ají panca or ají amarillo paste", qty: "2 tbsp", cost: 0.4, spansWeeks: true },
    { item: "hard-boiled eggs, quartered", qty: "2", cost: 0.5 },
    { item: "black olives, chopped", qty: "1/4 cup", cost: 0.4, spansWeeks: true },
    { item: "raisins", qty: "2 tbsp", cost: 0.15, spansWeeks: true },
    { item: "ground cumin", qty: "1 tsp", cost: 0.05, spansWeeks: true },
    { item: "flour, for dusting", qty: "1/2 cup", cost: 0.1, spansWeeks: true },
    { item: "egg, beaten, for binding the mash", qty: "1", cost: 0.25 },
    { item: "neutral oil, for shallow-frying", qty: "1 cup", cost: 0.6, spansWeeks: true },
  ],
  method: [
    "Boil the potatoes whole in their skins until a knife slides through, then peel and rice them while hot. Cool, then knead in the beaten egg and a good pinch of salt until you have a firm, smooth dough that holds its shape.",
    "Make the picadillo: soften the onion and garlic in a little oil, stir in the ají paste and cumin, then brown the beef in it. Fold in the chopped olives and raisins, season hard, and let it cool — a wet filling tears the potato shell.",
    "Flatten a handful of potato in your oiled palm, lay a spoon of picadillo and a wedge of egg in the center, then fold the mash up and over and seal it into a smooth, egg-shaped croquette with no cracks.",
    "Roll each one lightly in flour. Shallow-fry in 350°F oil, turning, until the whole shell is deep gold and crisp, 4–5 minutes.",
    "Drain and serve hot with sarza criolla — sliced red onion tossed with lime, ají and cilantro — to cut the richness.",
  ],
  modernMove:
    "Rice the potatoes instead of mashing them, and bind with just enough egg to make a true dough — that gives a shell that fries crisp and shatters cleanly rather than a gummy, oil-logged ball.",
  notes:
    "The classic frugal move: a half-pound of beef stretched with egg, olive and raisin fills four croquettes. Leftover mash and any picadillo become tomorrow's filling.",
  zeroWasteHero: false,
  tags: ["dinner", "potato", "fried", "stuffed", "andean", "beef"],
  sources: [
    {
      title: "Vera Abitbol — 196 flavors",
      url: "https://www.196flavors.com/peru-papa-rellena/",
      note: "Authentic Peruvian filling of beef, ají amarillo, egg, olives and raisins in a potato-dough shell",
    },
  ],
};
