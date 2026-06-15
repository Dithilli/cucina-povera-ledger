import type { Recipe } from "../types";

export const thiouPoissonSn: Recipe = {
  slug: "thiou-poisson-sn",
  title: "Thiou Poisson",
  cuisine: "senegalese",
  blurb:
    "A clean, brick-red fish stew where onions and tomato cook down to a vegetable sauce around poached fish and a few garden vegetables — the everyday weeknight thiou over rice.",
  servings: 4,
  perServing: { calories: 540, protein: 28 },
  estCostPerServing: 1.9,
  roles: ["dinner"],
  ingredients: [
    { item: "firm white fish steaks (e.g. tilapia, snapper)", qty: "12 oz", cost: 3.0 },
    { item: "onions, sliced", qty: "2 large", cost: 0.7 },
    { item: "tomatoes, chopped (or 1/2 can)", qty: "2", cost: 0.5 },
    { item: "tomato paste", qty: "2 tbsp", cost: 0.2, spansWeeks: true },
    { item: "carrot and cabbage, in chunks", qty: "2 cups", cost: 0.6 },
    { item: "Scotch bonnet (kaani), whole", qty: "1", cost: 0.2, spansWeeks: true },
    { item: "garlic, parsley and stock cube (Maggi)", qty: "2 cloves + 1 cube", cost: 0.3, spansWeeks: true },
    { item: "peanut oil", qty: "2 tbsp", cost: 0.2, spansWeeks: true },
    { item: "broken rice, to serve", qty: "1 1/2 cups dry", cost: 0.7 },
  ],
  method: [
    "Season the fish with garlic, parsley and a pinch of salt while you start the sauce.",
    "Soften the sliced onions slowly in peanut oil until sweet, then add the chopped tomato and tomato paste and cook to a thick, brick-red base.",
    "Pour in water to make a brothy sauce, drop in the whole Scotch bonnet and stock cube, and add the carrot and cabbage to simmer until nearly tender.",
    "Slide in the fish and poach gently 8–10 minutes until just cooked, so it stays in clean flakes.",
    "Taste for salt, lift out the chili, and serve the fish and vegetables with their sauce over broken rice.",
  ],
  modernMove:
    "Sweat the onions long and low before the tomato goes in — that slow onion sweetness, not chili heat, is the backbone of a true thiou sauce.",
  notes: "A lighter cousin of thieboudienne: the same nokoss flavours, but the rice stays plain on the side.",
  zeroWasteHero: false,
  tags: ["fish", "tomato", "stew", "vegetables", "senegalese"],
  sources: [
    {
      title: "TasteAtlas — Thiou (Senegalese stew)",
      url: "https://www.tasteatlas.com/thiou-a-la-viande",
      note: "Thiou as an onion-tomato vegetable-sauce stew served with white rice on the side.",
    },
  ],
};
