import type { Recipe } from "../types";

export const zigni: Recipe = {
  slug: "zigni",
  title: "Zigni (Spiced Beef Stew)",
  cuisine: "ethiopian",
  blurb:
    "The Eritrean-Ethiopian feast-day beef stew — chunks of beef simmered in a deep berbere-and-onion sauce until tender. A little meat, a long braise, a whole platter served.",
  servings: 6,
  perServing: { calories: 360, protein: 26 },
  estCostPerServing: 1.7,
  roles: ["dinner"],
  ingredients: [
    { item: "beef chuck or stew beef, cubed", qty: "1 1/2 lb", cost: 8.0 },
    { item: "red onions, finely chopped", qty: "4 large", cost: 2.0 },
    { item: "berbere", qty: "3 tbsp", cost: 0.75, spansWeeks: true },
    { item: "tomato, chopped (or paste)", qty: "2", cost: 0.6 },
    { item: "garlic + ginger", qty: "5 cloves / 2 tbsp", cost: 0.5, spansWeeks: true },
    { item: "niter kibbeh or oil", qty: "1/4 cup", cost: 0.6, spansWeeks: true },
    { item: "salt", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Cook the onions low and slow in a dry heavy pot until collapsed and deeply golden, 30–40 minutes.",
    "Add the niter kibbeh and bloom the berbere for several minutes, then the garlic, ginger, and tomato; cook to a thick, dark sauce.",
    "Add the beef and turn to coat. Add a little hot water, cover, and braise gently 1 1/2–2 hours, until the beef is fork-tender and the sauce is glossy and concentrated.",
    "Loosen with hot water if it tightens too far; salt to taste. Serve over injera, often with a wedge of ayib cheese to cool it.",
  ],
  modernMove:
    "Same deep onion sweat and berbere bloom as doro wot — the meat is almost incidental to the sauce. A long, low braise turns a cheap cut silky and lets the spiced base concentrate; keep it loose, not dry.",
  notes:
    "Zigni (Eritrean) and key wot/sega wot (Ethiopian) are the same idea — the celebratory red meat stew that arrives when the fasting calendar relents.",
  tags: ["zigni", "beef", "feast", "berbere", "dinner"],
};
