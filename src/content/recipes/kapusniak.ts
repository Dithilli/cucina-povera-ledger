import type { Recipe } from "../types";

export const kapusniakPl: Recipe = {
  slug: "kapusniak",
  title: "Kapuśniak",
  cuisine: "polish",
  blurb:
    "Tangy sauerkraut simmered soft with smoky pork bones, potato, and a base of soup vegetables, scented with caraway and bay — a thick, sour-and-smoky bowl that turns a jar of fermented cabbage and a few thrifty bones into the warmest dinner of a cold week.",
  servings: 6,
  perServing: { calories: 420, protein: 18 },
  estCostPerServing: 1.1,
  roles: ["dinner"],
  ingredients: [
    { item: "sauerkraut, drained and chopped", qty: "1 lb", cost: 1.2 },
    { item: "smoked pork bones or smoked bacon (boczek)", qty: "1/2 lb", cost: 1.8 },
    { item: "potatoes, peeled and diced", qty: "3 medium", cost: 0.5 },
    { item: "carrot and parsley root (włoszczyzna)", qty: "1 each", cost: 0.4 },
    { item: "onion, chopped", qty: "1", cost: 0.3 },
    { item: "caraway seeds", qty: "1 tsp", cost: 0.1, spansWeeks: true },
    { item: "bay leaf and allspice berries", qty: "2 + 3", cost: 0.05, spansWeeks: true },
    { item: "neutral oil or lard (smalec)", qty: "1 tbsp", cost: 0.1, spansWeeks: true },
    { item: "salt and black pepper", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Simmer the smoked bones or bacon with the carrot, parsley root, bay, and allspice in about 8 cups of water for 45 minutes to draw out a smoky broth.",
    "Meanwhile, simmer the chopped sauerkraut in a little water in a separate pot for 15–20 minutes to soften and mellow its sharpness; drain.",
    "Add the softened sauerkraut and the diced potatoes to the broth and cook until the potatoes are tender, about 20 minutes.",
    "Sweat the chopped onion in the oil or lard until golden and stir it into the soup along with the caraway. Pull the meat from the bones and return it to the pot.",
    "Simmer another 10 minutes so the flavors marry. Season with salt and pepper and serve with dark rye bread.",
  ],
  modernMove:
    "Soften the sauerkraut on its own first, then build the smoky broth separately and marry them — pre-cooking the kraut tames its raw sharpness so the soup lands sour-and-round rather than aggressively acidic, while caraway added late keeps its warm anise edge.",
  notes:
    "From kapusta, cabbage. Smoked kielbasa can stand in for the bones for a richer, smokier bowl. Better the next day as the kraut deepens.",
  zeroWasteHero: false,
  tags: ["soup", "sauerkraut", "polish"],
  sources: [
    {
      title: "Polonist — Kapuśniak: Polish Sauerkraut Soup",
      url: "https://www.polonist.com/kapusniak-polish-sauerkraut-soup/",
      note: "Sauerkraut with smoked pork, potato, soup vegetables, and caraway.",
    },
  ],
};
