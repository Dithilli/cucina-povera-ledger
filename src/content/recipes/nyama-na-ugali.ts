import type { Recipe } from "../types";

export const nyamaNaUgali: Recipe = {
  slug: "nyama-na-ugali",
  title: "Nyama na Ugali",
  cuisine: "east-african",
  blurb:
    "The classic Kenyan plate — beef browned and simmered tender in a saucy tomato-onion gravy, mopped up with a wedge of ugali and a heap of sukuma wiki on the side.",
  servings: 4,
  perServing: { calories: 600, protein: 28 },
  estCostPerServing: 1.9,
  roles: ["dinner"],
  ingredients: [
    { item: "stewing beef, cut in chunks (bone-in if you can)", qty: "1 lb", cost: 4.2 },
    { item: "onions, sliced", qty: "2 medium", cost: 0.5 },
    { item: "tomatoes, pureed", qty: "3 medium", cost: 0.6 },
    { item: "garlic + ginger, grated", qty: "1 tbsp each", cost: 0.2, spansWeeks: true },
    { item: "curry powder + paprika", qty: "1 tsp each", cost: 0.15, spansWeeks: true },
    { item: "Royco / mchuzi mix", qty: "1 cube", cost: 0.1, spansWeeks: true },
    { item: "cooking oil", qty: "2 tbsp", cost: 0.1, spansWeeks: true },
    { item: "dhania (cilantro)", qty: "handful", cost: 0.15 },
    { item: "ugali (2 cups maize meal) + sukuma wiki, to serve", qty: "for 4", cost: 1.6 },
  ],
  method: [
    "Season the beef with salt and brown it hard in the oil on all sides, then lift it out.",
    "Soften the onions in the same pot, then add the garlic, ginger, curry powder, and paprika and fry a minute until fragrant.",
    "Stir in the pureed tomatoes and crumble in the Royco; cook 5–7 minutes until the sauce darkens and thickens.",
    "Return the beef with about a cup of water, cover, and simmer 1–1½ hours until fork-tender and the gravy is rich.",
    "Scatter with dhania and serve with a wedge of ugali and a side of sukuma wiki to scoop everything up.",
  ],
  modernMove:
    "Brown the beef properly before the sauce goes in and let it braise low and slow — a tough, cheap cut turns silky and lends its fond to a gravy that punches far above the meat budget.",
  notes:
    "The everyday Kenyan dinner trinity on one plate: stewed nyama, ugali, and greens. One pound of beef, stretched with sauce and starch, comfortably feeds four.",
  zeroWasteHero: false,
  tags: ["beef", "stew", "ugali", "dinner", "east-african"],
  sources: [
    {
      title: "Pika Chakula — Classic Kenyan Beef Stew and Ugali",
      url: "https://www.pikachakula.com/recipe-view/classic-kenyan-beef-stew-ugali/",
      note: "Browned beef simmered in an onion-tomato-curry gravy and served with ugali and sukuma wiki.",
    },
  ],
};
