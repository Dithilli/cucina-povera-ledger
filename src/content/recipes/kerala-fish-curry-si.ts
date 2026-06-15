import type { Recipe } from "../types";

export const keralaFishCurrySi: Recipe = {
  slug: "kerala-fish-curry-si",
  title: "Kerala Fish Curry (Meen Curry)",
  cuisine: "south-indian",
  blurb:
    "Oily coastal fish simmered in an earthen pot of fiery chili-shallot gravy soured with smoky kodampuli — a curry the coast knows tastes better the day after, when the kudampuli has done its work.",
  servings: 4,
  perServing: { calories: 360, protein: 24 },
  estCostPerServing: 1.9,
  roles: ["dinner"],
  ingredients: [
    { item: "firm oily fish (sardine, mackerel, kingfish), cut into chunks", qty: "1 lb", cost: 4.5 },
    { item: "kodampuli (Malabar tamarind), soaked", qty: "3 pieces", cost: 0.4, spansWeeks: true },
    { item: "shallots, sliced", qty: "1 cup", cost: 0.6 },
    { item: "ginger and garlic, crushed", qty: "2 tbsp", cost: 0.2, spansWeeks: true },
    { item: "thick coconut milk", qty: "1 cup", cost: 0.8 },
    { item: "Kashmiri red chili powder", qty: "2 tbsp", cost: 0.2, spansWeeks: true },
    { item: "turmeric", qty: "1/2 tsp", cost: 0.05, spansWeeks: true },
    { item: "fenugreek seeds", qty: "1/4 tsp", cost: 0.05, spansWeeks: true },
    { item: "mustard seeds", qty: "1/2 tsp", cost: 0.05, spansWeeks: true },
    { item: "curry leaves", qty: "2 sprigs", cost: 0.1, spansWeeks: true },
    { item: "coconut oil", qty: "2 tbsp", cost: 0.3, spansWeeks: true },
    { item: "salt", qty: "to taste" },
  ],
  method: [
    "Soak the kodampuli in a little warm water for 15 minutes — it stays whole, never puréed like tamarind.",
    "Heat coconut oil in an earthen pot or heavy pan, pop the mustard and fenugreek seeds, then add curry leaves, shallots, ginger, and garlic and fry until soft and golden.",
    "Make a paste of the chili powder and turmeric with a splash of water, add it to the pot, and cook the raw edge off the spices for a minute.",
    "Slide in the soaked kodampuli with its water and enough fresh water to make a gravy; simmer a few minutes so the sour smoke draws out.",
    "Lay the fish in a single layer, pour in the coconut milk, and simmer gently — swirl the pot rather than stirring so the pieces don't break. Cook 6–8 minutes until just done.",
    "Take it off the heat and let it rest at least a couple of hours, ideally overnight, before serving with rice — that rest is when the curry actually becomes itself.",
  ],
  modernMove:
    "Kodampuli goes in whole and is left whole — squeezing or grinding it (the tamarind reflex) makes the gravy bitter; the resting hour is non-negotiable, when the smoky sourness mellows into the fish.",
  notes: "An earthen pot (manchatti) gives the truest flavor but a heavy pan works. Swirl, never stir, once the fish is in.",
  zeroWasteHero: false,
  tags: ["kerala", "fish", "coconut", "kodampuli", "coastal", "south-indian"],
  sources: [
    {
      title: "Suguna Vinodh — Kannamma Cooks",
      url: "https://www.kannammacooks.com/kerala-fish-curry-recipe/",
      note: "Nadan meen curry — whole soaked kodampuli, coconut oil and milk, earthen pot, mandatory rest",
    },
  ],
};
