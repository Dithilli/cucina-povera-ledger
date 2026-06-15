import type { Recipe } from "../types";

export const ceebuJen: Recipe = {
  slug: "ceebu-jen",
  title: "Ceebu Jën (Thiéboudienne Rouge)",
  cuisine: "senegalese",
  blurb:
    "Senegal's national one-pot: broken rice simmered to a burnished red in a tomato-and-fish broth thick with vegetables, crowned by xooñ — the prized crust scraped from the pot floor.",
  servings: 4,
  perServing: { calories: 690, protein: 30 },
  estCostPerServing: 2.4,
  roles: ["dinner"],
  ingredients: [
    { item: "broken rice (riz brisé)", qty: "2 cups", cost: 0.7 },
    { item: "firm white fish steaks (thiof / grouper or cod)", qty: "1 1/4 lb", cost: 3.0 },
    { item: "parsley, garlic, scotch bonnet & stock cube pounded for roff stuffing", qty: "1/2 cup", cost: 0.5 },
    { item: "onions", qty: "2 large", cost: 0.6 },
    { item: "tomato paste", qty: "3 tbsp", cost: 0.4, spansWeeks: true },
    { item: "nététou (fermented locust bean)", qty: "1 tbsp", cost: 0.3, spansWeeks: true },
    { item: "cassava, carrot, cabbage & eggplant, in chunks", qty: "4 cups", cost: 1.4 },
    { item: "tamarind (dakhar)", qty: "2 tbsp", cost: 0.2, spansWeeks: true },
    { item: "neutral oil", qty: "1/3 cup", cost: 0.4, spansWeeks: true },
    { item: "salt & black pepper", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Pound parsley, garlic, scotch bonnet, and a stock cube into a green roff paste; cut deep slashes in the fish and pack the paste in. Sear the fish in hot oil until set, then lift out.",
    "In the same oil soften the onions, stir in tomato paste and crushed nététou, and let it fry down dark and sweet. Add water to make a broth and season hard with salt, pepper, and tamarind.",
    "Simmer the hard vegetables (cassava, carrot) first, then cabbage and eggplant, pulling each out as it turns tender. Return the fish to finish poaching, then lift everything onto a platter.",
    "Stir the broken rice into the red broth, cover, and cook low until the rice drinks the sauce — resisting the urge to stir lets a deep crust, the xooñ, form against the pot.",
    "Mound the rice on a wide platter, lay the fish and vegetables over it, and scrape up the crisp xooñ to share — the most fought-over bite of the meal.",
  ],
  modernMove:
    "Cooking the rice undisturbed in the spent vegetable broth over low heat builds the xooñ — a caramelized crust like Persian tahdig that you scrape up and serve as the trophy of the pot.",
  notes:
    "The order of pulling vegetables out matters: each comes out the instant it's tender so nothing turns to mush, then the rice cooks in the flavor they left behind.",
  zeroWasteHero: true,
  tags: ["rice", "fish", "one-pot", "tomato", "senegalese"],
  sources: [
    {
      title: "196 flavors — Thieboudienne, Authentic Recipe from Senegal",
      url: "https://www.196flavors.com/senegal-thieboudienne/",
      note: "Roff fish stuffing, nététou and tamarind in the red broth, and forming the xooñ crust.",
    },
  ],
};
