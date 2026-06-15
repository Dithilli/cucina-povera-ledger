import type { Recipe } from "../types";

export const ceebuJenWeex: Recipe = {
  slug: "ceebu-jen-weex",
  title: "Ceebu Jën bu Weex",
  cuisine: "senegalese",
  blurb:
    "The 'white' thiéboudienne: the same fish-and-vegetable pot built without tomato, so the rice stays pale and the clean depth of nététou, onion, and tamarind carries the dish.",
  servings: 4,
  perServing: { calories: 650, protein: 30 },
  estCostPerServing: 2.3,
  roles: ["dinner"],
  ingredients: [
    { item: "broken rice (riz brisé)", qty: "2 cups", cost: 0.7 },
    { item: "firm white fish steaks (thiof / grouper or cod)", qty: "1 1/4 lb", cost: 3.0 },
    { item: "parsley, garlic, scotch bonnet & stock cube pounded for roff stuffing", qty: "1/2 cup", cost: 0.5 },
    { item: "onions", qty: "2 large", cost: 0.6 },
    { item: "nététou (fermented locust bean)", qty: "1 tbsp", cost: 0.3, spansWeeks: true },
    { item: "cassava, carrot, cabbage & sweet potato, in chunks", qty: "4 cups", cost: 1.4 },
    { item: "tamarind (dakhar)", qty: "2 tbsp", cost: 0.2, spansWeeks: true },
    { item: "kaani / scotch bonnet, left whole", qty: "1", cost: 0.25, spansWeeks: true },
    { item: "neutral oil", qty: "1/3 cup", cost: 0.4, spansWeeks: true },
    { item: "salt & black pepper", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Pound parsley, garlic, scotch bonnet, and a stock cube into a green roff, slash the fish, and pack it in. Sear the fish in hot oil and set it aside.",
    "Soften the onions in the oil with the crushed nététou — no tomato this time — then add water to build a clear, savory broth and season hard with salt, pepper, and tamarind.",
    "Drop in a whole kaani chili and poach the vegetables in order of hardness, removing each as it turns tender; poach the fish to finish, then lift everything out.",
    "Stir the broken rice into the pale broth, cover, and cook low and untouched so the grains turn glossy white and a gentle crust forms beneath.",
    "Pile the white rice on a platter, arrange fish and vegetables on top, and burst the chili into the broth for those who want heat.",
  ],
  modernMove:
    "Dropping the tomato forces every other flavor forward — the funk of nététou and the sourness of tamarind read louder against the white rice than they ever do in the red version.",
  notes:
    "Often the everyday weeknight thiéboudienne in Lebou kitchens — quicker and cheaper than the red, since it skips frying down the tomato paste.",
  zeroWasteHero: false,
  tags: ["rice", "fish", "one-pot", "white", "senegalese"],
  sources: [
    {
      title: "Whats4eats — Ceebu Jen (Senegalese Fish with Rice and Vegetables)",
      url: "https://www.whats4eats.com/fish/ceebu-jen-recipe",
      note: "Building the fish-and-vegetable rice pot and the nététou/tamarind seasoning base.",
    },
  ],
};
