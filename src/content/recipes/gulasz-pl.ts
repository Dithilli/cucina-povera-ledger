import type { Recipe } from "../types";

export const gulaszPl: Recipe = {
  slug: "gulasz-pl",
  title: "Gulasz",
  cuisine: "polish",
  blurb:
    "Chunks of cheap stewing beef browned hard, then sunk into a vat of slowly melting onions and sweet paprika until the meat is fork-soft and the gravy is dark and clinging — Poland's everyday answer to the Hungarian original, ladled over potatoes or kasza.",
  servings: 4,
  perServing: { calories: 560, protein: 30 },
  estCostPerServing: 2.1,
  roles: ["dinner"],
  ingredients: [
    { item: "beef chuck or other stewing cut, cubed", qty: "1 1/4 lb", cost: 5.0 },
    { item: "onions, sliced", qty: "3 large", cost: 0.9 },
    { item: "sweet paprika", qty: "2 tbsp", cost: 0.3, spansWeeks: true },
    { item: "garlic, minced", qty: "3 cloves", cost: 0.15, spansWeeks: true },
    { item: "tomato paste", qty: "1 tbsp", cost: 0.1, spansWeeks: true },
    { item: "bay leaf and allspice berries", qty: "2 each", cost: 0.1, spansWeeks: true },
    { item: "marjoram, dried", qty: "1 tsp", cost: 0.1, spansWeeks: true },
    { item: "flour (to thicken)", qty: "1 tbsp", cost: 0.05, spansWeeks: true },
    { item: "lard (smalec) or oil", qty: "2 tbsp", cost: 0.2, spansWeeks: true },
    { item: "floury potatoes, to serve", qty: "1 1/2 lb", cost: 0.9 },
    { item: "salt and black pepper", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Pat the beef dry and brown it hard in the lard, in batches so the pan stays hot, until each cube is well crusted. Lift out and set aside.",
    "Add the onions to the same pot with a pinch of salt and cook low and slow, scraping up the fond, until collapsed and golden — 15–20 minutes. Stir in the garlic and tomato paste for a minute, then pull the pot off the heat and stir in the paprika so it blooms without scorching.",
    "Return the beef and its juices, add the bay, allspice, marjoram, and just enough water to come halfway up the meat. Cover and simmer very gently for 1 1/2 to 2 hours, until the beef yields to a spoon and the onions have all but dissolved into the gravy.",
    "Whisk the flour with a splash of cold water and stir it in; simmer a few minutes more until the sauce is glossy and coats the back of a spoon. Taste and correct the salt, pepper, and paprika.",
    "Boil the potatoes in salted water, drain, and serve the gulasz spooned over them — or over kasza gryczana.",
  ],
  modernMove:
    "Take the pot off the heat before the paprika goes in. Paprika turns bitter the instant it scorches, and a hot dry pan does it in seconds — stirring it into the cooler onion-fat off the flame is what keeps the gravy sweet and red instead of acrid and brown.",
  notes:
    "The onions are the thickener as much as the flour — use more than feels right; they melt down to almost nothing and carry the sauce. Better still the next day, once the marjoram has spread through.",
  zeroWasteHero: false,
  tags: ["beef", "stew", "paprika", "polish"],
  sources: [
    {
      title: "Polish Foodies — Authentic Polish Goulash (Gulasz)",
      url: "https://polishfoodies.com/authentic-polish-goulash-recipe/",
      note: "Browning the cheap cut, melting a heap of onions, and blooming paprika off the heat into a thick gravy.",
    },
  ],
};
