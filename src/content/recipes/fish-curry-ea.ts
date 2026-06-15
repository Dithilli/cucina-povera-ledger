import type { Recipe } from "../types";

export const fishCurryEa: Recipe = {
  slug: "fish-curry-ea",
  title: "Mchuzi wa Samaki",
  cuisine: "east-african",
  blurb:
    "The coastal Swahili fish curry — chunks of white fish simmered briefly in a coconut-milk sauce warm with curry, turmeric and ginger, lifted at the end with lime so the richness stays bright.",
  servings: 4,
  perServing: { calories: 500, protein: 27 },
  estCostPerServing: 2.0,
  roles: ["dinner"],
  ingredients: [
    { item: "firm white fish fillet (tilapia, hake, cod), cubed", qty: "1 1/4 lb", cost: 5.0 },
    { item: "coconut milk (nazi)", qty: "1 1/2 cups", cost: 0.9 },
    { item: "onion, chopped", qty: "1 large", cost: 0.4 },
    { item: "tomatoes, chopped", qty: "2", cost: 0.5 },
    { item: "garlic and ginger, grated", qty: "3 cloves + thumb", cost: 0.2, spansWeeks: true },
    { item: "curry powder", qty: "1 1/2 tsp", cost: 0.08, spansWeeks: true },
    { item: "turmeric", qty: "1/2 tsp", cost: 0.03, spansWeeks: true },
    { item: "ground cumin (jeera)", qty: "1/2 tsp", cost: 0.03, spansWeeks: true },
    { item: "lime", qty: "1", cost: 0.25 },
    { item: "fresh coriander (dhania), chopped", qty: "small handful", cost: 0.2 },
    { item: "oil and salt", qty: "2 tbsp + to taste", cost: 0.15, spansWeeks: true },
  ],
  method: [
    "Rub the fish cubes with salt, turmeric and a squeeze of lime and set aside while you build the sauce.",
    "Fry the onion in oil until soft, add garlic, ginger, curry powder and cumin and cook until fragrant.",
    "Add the tomatoes and cook down to a thick base, then pour in the coconut milk and bring to a gentle simmer.",
    "Slide in the fish, spooning sauce over, and simmer very gently 6–8 minutes until just cooked — do not boil hard or the fish breaks up.",
    "Finish with a squeeze of lime and a scatter of dhania; serve over rice, ugali or with chapati.",
  ],
  modernMove:
    "Add the fish only once the coconut sauce is built and barely simmering — a hard boil curdles the coconut and shreds the fish; a quiet poach keeps both intact.",
  notes:
    "Coastal cooks vary the spice with a pinch of garam masala or cardamom, a legacy of the old Indian Ocean trade routes through Zanzibar.",
  zeroWasteHero: false,
  tags: ["fish", "coconut", "curry", "swahili", "east-african"],
  sources: [
    {
      title: "Great British Chefs — Tanzanian Fish Curry (Mchuzi wa Samaki)",
      url: "https://www.greatbritishchefs.com/recipes/tanzanian-fish-curry-recipe",
      note: "Coconut-milk fish curry spiced with curry powder and turmeric, fish poached gently and finished with citrus; Swahili-coast dish.",
    },
  ],
};
