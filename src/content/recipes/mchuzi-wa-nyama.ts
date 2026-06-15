import type { Recipe } from "../types";

export const mchuziWaNyama: Recipe = {
  slug: "mchuzi-wa-nyama",
  title: "Mchuzi wa Nyama",
  cuisine: "east-african",
  blurb:
    "The Swahili curried meat gravy: beef simmered tender in a spiced sauce of curry, turmeric, cumin and cinnamon over a tomato-onion base, loosened to a pourable mchuzi made for spooning over ugali or rice.",
  servings: 4,
  perServing: { calories: 580, protein: 29 },
  estCostPerServing: 1.9,
  roles: ["dinner"],
  ingredients: [
    { item: "beef, cubed", qty: "1 1/4 lb", cost: 5.5 },
    { item: "onion, finely diced", qty: "1 large", cost: 0.35 },
    { item: "tomatoes, chopped", qty: "2", cost: 0.6 },
    { item: "garlic cloves, minced", qty: "3", cost: 0.1, spansWeeks: true },
    { item: "fresh ginger, grated", qty: "1 tbsp", cost: 0.15, spansWeeks: true },
    { item: "curry powder", qty: "1 tbsp", cost: 0.1, spansWeeks: true },
    { item: "ground turmeric", qty: "1/2 tsp", cost: 0.05, spansWeeks: true },
    { item: "ground cumin", qty: "1/2 tsp", cost: 0.05, spansWeeks: true },
    { item: "ground cinnamon", qty: "1/4 tsp", cost: 0.05, spansWeeks: true },
    { item: "bell pepper, sliced", qty: "1", cost: 0.5 },
    { item: "dhania (cilantro), chopped", qty: "small bunch", cost: 0.3, spansWeeks: true },
    { item: "vegetable oil", qty: "2 tbsp", cost: 0.1, spansWeeks: true },
    { item: "salt and pepper", qty: "to taste", cost: 0.05, spansWeeks: true },
    { item: "ugali or rice, to serve", qty: "to serve" },
  ],
  method: [
    "Brown the beef cubes in oil, in batches, then set aside.",
    "Soften the onion in the same pot, then add garlic, ginger, curry powder, turmeric, cumin and cinnamon and fry until the spices bloom and smell fragrant.",
    "Stir in the tomatoes and cook to a thick paste, then return the beef with water to cover.",
    "Cover and simmer low 50–60 minutes, until the beef is tender and the sauce has thickened to a glossy gravy.",
    "Add the bell pepper for the last 8 minutes so it keeps a little bite, finish with dhania, and serve as a pourable mchuzi over ugali or rice.",
  ],
  modernMove:
    "Blooming the spices in oil before the liquid goes in — toasting the curry, cumin and cinnamon against the onions — is what gives the mchuzi its layered, coastal depth rather than a raw powdery edge.",
  notes:
    "Keep it saucier than a stew; the point of a mchuzi is the spiced gravy that soaks into ugali. A squeeze of lemon at the end lifts it.",
  zeroWasteHero: false,
  tags: ["meat", "east-african", "beef", "curry", "swahili"],
  sources: [
    {
      title: "Stella's Meza — Mchuzi wa Nyama (Curried Beef Stew with Peppers)",
      url: "http://stellasmeza.blogspot.com/2012/11/mchuzi-wa-nyama-curried-beef-stew-with.html",
      note: "Curry/turmeric/cumin/cinnamon spicing, tomato-onion base, peppers, gravy for ugali or rice",
    },
  ],
};
