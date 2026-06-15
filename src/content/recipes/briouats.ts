import type { Recipe } from "../types";

export const briouats: Recipe = {
  slug: "briouats",
  title: "Briouats",
  cuisine: "moroccan",
  blurb:
    "Crackly warqa triangles folded flag-style around spiced minced meat or rice-vermicelli, fried gold — a few scraps of filling stretched into a whole platter of fête pastries.",
  servings: 4,
  perServing: { calories: 520, protein: 16 },
  estCostPerServing: 1.2,
  roles: ["dinner"],
  ingredients: [
    { item: "warqa or filo/brick pastry sheets", qty: "8 sheets", cost: 1.6 },
    { item: "minced beef or lamb (or 3 oz rice vermicelli for a meatless batch)", qty: "1/2 lb", cost: 2.0 },
    { item: "onion, finely chopped", qty: "1", cost: 0.3 },
    { item: "parsley and cilantro, chopped", qty: "1 small bunch", cost: 0.6 },
    { item: "cumin, paprika, cinnamon, black pepper, salt", qty: "1 tsp each", cost: 0.2, spansWeeks: true },
    { item: "egg, beaten (to bind and to seal)", qty: "1", cost: 0.25 },
    { item: "flour for sealing paste", qty: "1 tbsp", cost: 0.03, spansWeeks: true },
    { item: "neutral oil for frying", qty: "for frying", cost: 0.8, spansWeeks: true },
  ],
  method: [
    "Sauté the onion until soft, add the meat with cumin, paprika, cinnamon, and pepper, and cook until browned and dry; off the heat fold in the herbs and a little beaten egg to bind. (For the meatless batch, soften the vermicelli, snip it short, and season the same way.)",
    "Cut the pastry into long 3-inch strips. Spoon filling at one end and fold corner-to-corner into a triangle, then keep folding flag-style up the strip.",
    "Seal the tail with a smear of flour-and-water paste so it can't unwind in the oil.",
    "Fry in 350°F oil, turning once, until deep amber and blistered, 2–3 minutes. Drain on a rack and serve hot.",
  ],
  modernMove:
    "Seal the tail with flour-water paste, not water alone — the starch glues the seam shut so the triangle stays crisp and never drinks oil through a gap.",
  notes:
    "Filling and folding can be done a day ahead; shaped briouats freeze raw and fry straight from frozen.",
  tags: ["fete", "moroccan", "warqa", "fried", "snack"],
  sources: [
    {
      title: "Taste of Maroc — Briouat (Moroccan Pastries)",
      url: "https://tasteofmaroc.com/almond-briouat-recipe/",
      note: "Confirms the warqa strip cut, flag-style triangle fold, and flour-paste seal before frying.",
    },
  ],
};
