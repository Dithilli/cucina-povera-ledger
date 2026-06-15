import type { Recipe } from "../types";

export const telurBalado: Recipe = {
  slug: "telur-balado",
  title: "Telur Balado",
  cuisine: "indonesian",
  blurb:
    "Boiled eggs fried until blistered, then smothered in a Minangkabau red-chili balado — protein the whole table shares over a mountain of rice.",
  servings: 4,
  perServing: { calories: 470, protein: 18 },
  estCostPerServing: 0.85,
  roles: ["dinner"],
  ingredients: [
    { item: "eggs", qty: "8", cost: 1.6 },
    { item: "red chilies (cabe merah)", qty: "6", cost: 0.6 },
    { item: "shallots", qty: "5", cost: 0.45 },
    { item: "garlic cloves", qty: "3", cost: 0.15, spansWeeks: true },
    { item: "tomato, chopped", qty: "1", cost: 0.3 },
    {
      item: "tamarind paste in a splash of water",
      qty: "1 tsp",
      cost: 0.1,
      spansWeeks: true,
    },
    {
      item: "neutral oil",
      qty: "3 tbsp",
      cost: 0.25,
      spansWeeks: true,
    },
    { item: "salt and a pinch of sugar", qty: "to taste", cost: 0.05 },
  ],
  method: [
    "Hard-boil and peel the eggs. Pat them very dry, then shallow-fry in hot oil, rolling them, until the whites blister and turn golden and freckled — this skin grips the sauce.",
    "Grind the chilies, shallots, garlic, and tomato to a coarse paste. Fry it in the same oil over medium heat until the raw smell is gone and the oil reddens and separates, about 8 minutes.",
    "Stir in the tamarind, salt, and a pinch of sugar; cook to a thick, glossy sambal.",
    "Roll the fried eggs through the balado until fully coated and serve hot with steamed rice and a leafy vegetable.",
  ],
  modernMove:
    "Blistering the boiled eggs in oil before saucing gives the smooth white a craggy, sauce-catching surface — the balado clings instead of sliding off.",
  tags: ["egg", "balado", "chili", "minangkabau", "protein"],
  sources: [
    { title: "Anita Jacobson — Daily Cooking Quest", url: "https://dailycookingquest.com/telur-balado-eggs-with-chili-sauce.html", note: "fried boiled eggs in a red balado paste of chili, shallot, garlic, tomato" },
    { title: "Wikipedia — Balado (food)", url: "https://en.wikipedia.org/wiki/Balado_(food)", note: "Minangkabau/West Sumatra origin of balado sauce; telur balado as a variant" },
  ],
};
