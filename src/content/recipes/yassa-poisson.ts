import type { Recipe } from "../types";

export const yassaPoisson: Recipe = {
  slug: "yassa-poisson",
  title: "Yassa Poisson",
  cuisine: "senegalese",
  blurb:
    "Whole fish marinated in lemon and grilled over char, then folded into the same mountain of sweet caramelized onions and mustard that defines yassa.",
  servings: 4,
  perServing: { calories: 580, protein: 31 },
  estCostPerServing: 2.3,
  roles: ["dinner"],
  ingredients: [
    { item: "broken rice (riz brisé), to serve", qty: "1 1/2 cups", cost: 0.5 },
    { item: "whole firm fish or thiof steaks", qty: "1 1/2 lb", cost: 3.2 },
    { item: "onions, thinly sliced", qty: "4 large", cost: 1.2 },
    { item: "lemons, juiced", qty: "3", cost: 0.6 },
    { item: "Dijon mustard", qty: "2 tbsp", cost: 0.3, spansWeeks: true },
    { item: "garlic", qty: "4 cloves", cost: 0.2, spansWeeks: true },
    { item: "kaani / scotch bonnet", qty: "1", cost: 0.25, spansWeeks: true },
    { item: "stock cube (Maggi / Jumbo)", qty: "1", cost: 0.15, spansWeeks: true },
    { item: "neutral oil", qty: "1/4 cup", cost: 0.3, spansWeeks: true },
    { item: "bay leaf, salt & pepper", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Marinate the fish briefly in lemon juice, mustard, garlic, and sliced onions — fish takes the acid fast, so 30 minutes is plenty.",
    "Lift out the fish, pat it dry, and grill or sear it over high heat until the skin chars and the flesh is just set; set aside gently.",
    "Cook the marinated onions slow in oil until collapsed, golden, and sweet, the foundation of every yassa.",
    "Add the lemony marinade with a whole kaani chili and a bay leaf and simmer into a glossy sauce, then slide the grilled fish in to warm through without breaking it apart.",
    "Spoon the onion sauce over broken rice, lay the charred fish on top, and serve with the chili for those who want it.",
  ],
  modernMove:
    "Grilling the fish separately before it meets the sauce keeps the flesh firm and adds smoke — the onion-lemon braise then coats it instead of stewing it to pieces.",
  notes:
    "A coastal Lebou favorite; the fast acid marinade firms the fish, so it survives both the grill and the sauce without falling apart.",
  zeroWasteHero: false,
  tags: ["fish", "onion", "lemon", "grilled", "senegalese"],
  sources: [
    {
      title: "Immaculate Bites — Yassa Chicken / Poulet au Yassa (yassa onion-lemon sauce)",
      url: "https://www.africanbites.com/yassa-chickenpoulet-au-yassa/",
      note: "The caramelized-onion, lemon, and mustard yassa sauce, applied to grilled fish.",
    },
  ],
};
