import type { Recipe } from "../types";

export const tagineKeftaBaid: Recipe = {
  slug: "tagine-kefta-baid",
  title: "Tagine Kefta wa Baid",
  cuisine: "moroccan",
  blurb:
    "Spiced little meatballs simmered in a cumin-and-paprika tomato sauce, with eggs cracked straight into the bubbling tagine and poached till the yolks run — Morocco's answer to a one-pot supper.",
  servings: 4,
  perServing: { calories: 500, protein: 28 },
  estCostPerServing: 1.9,
  roles: ["dinner"],
  ingredients: [
    { item: "ground beef or lamb", qty: "12 oz", cost: 3.5 },
    { item: "eggs", qty: "4", cost: 0.8 },
    { item: "onion, grated (half for meatballs, half for sauce)", qty: "1 large", cost: 0.3 },
    { item: "canned crushed tomatoes", qty: "1 can (14 oz)", cost: 0.9 },
    { item: "garlic, crushed", qty: "2 cloves", cost: 0.1, spansWeeks: true },
    { item: "cumin and sweet paprika", qty: "1 tsp each", cost: 0.15, spansWeeks: true },
    { item: "ras el hanout plus a pinch cayenne", qty: "1 tsp", cost: 0.15, spansWeeks: true },
    { item: "olive oil", qty: "2 tbsp", cost: 0.2, spansWeeks: true },
    { item: "parsley and cilantro, chopped", qty: "1 small bunch", cost: 0.3 },
    { item: "salt", qty: "to taste" },
  ],
  method: [
    "Mix the meat with half the grated onion, half the herbs, cumin, paprika, salt, and a little ras el hanout. Roll into small marble-sized meatballs.",
    "Soften the remaining onion and garlic in olive oil, add the tomatoes, the rest of the spices, and a splash of water, and simmer into a loose, deep-red sauce.",
    "Slide the meatballs into the sauce in a single layer and simmer gently, turning once, until cooked through and the sauce has thickened around them, about 20 minutes.",
    "Make wells between the meatballs and crack in the eggs. Cover and poach just until the whites set and the yolks are still soft, then shower with the remaining herbs and serve with khobz for scooping.",
  ],
  modernMove:
    "Covering the tagine to steam-poach the eggs sets the whites while keeping the yolks molten — bread dipped into a runny yolk and spiced tomato is the whole point.",
  zeroWasteHero: true,
  notes:
    "Kefta mqawra stretches less than a pound of meat across four people; the eggs add protein for pennies and turn it into a complete plate.",
  tags: ["tagine", "kefta", "meatballs", "eggs", "tomato", "moroccan"],
  sources: [
    {
      title: "Taste of Maroc — Classic Moroccan Meatball Tagine with Tomato Sauce",
      url: "https://tasteofmaroc.com/moroccan-meatball-tagine-tomato-sauce/",
      note: "Spiced kefta simmered in tomato with eggs poached on top in the covered tagine",
    },
  ],
};
