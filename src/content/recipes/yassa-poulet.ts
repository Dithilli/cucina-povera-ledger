import type { Recipe } from "../types";

export const yassaPoulet: Recipe = {
  slug: "yassa-poulet",
  title: "Yassa Poulet",
  cuisine: "senegalese",
  blurb:
    "Chicken marinated in lemon and mustard, then braised under a mountain of onions cooked down to a sweet-sour, golden tangle — Casamance's bright counterpoint to the rice pots.",
  servings: 4,
  perServing: { calories: 620, protein: 32 },
  estCostPerServing: 2.1,
  roles: ["dinner"],
  ingredients: [
    { item: "broken rice (riz brisé), to serve", qty: "1 1/2 cups", cost: 0.5 },
    { item: "chicken legs & thighs", qty: "1 1/2 lb", cost: 2.6 },
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
    "Marinate the chicken at least an hour in lemon juice, mustard, garlic, sliced onions, and a crushed stock cube — the acid is the whole point, so don't rush it.",
    "Lift the chicken from the marinade, scrape off the onions, and sear the pieces until well browned; set them aside.",
    "Tip the marinated onions into the pan and cook slow and patient until collapsed, golden, and sweet — this is the soul of yassa and takes 20 minutes.",
    "Pour in the lemony marinade with a whole kaani chili and a bay leaf, return the chicken, and braise gently until tender and the sauce is glossy.",
    "Taste for the sweet-sour-savory balance, then serve the chicken smothered in onions over plain broken rice.",
  ],
  modernMove:
    "Reserving the acidic marinade and reducing it into the caramelized onions builds yassa's signature sweet-and-sour edge — the browning sweetens, the lemon keeps it sharp.",
  notes:
    "Born in the Casamance and now eaten all over Senegal; the French Dijon is the colonial fingerprint that makes the sauce read tangy rather than just sour.",
  zeroWasteHero: false,
  tags: ["chicken", "onion", "lemon", "rice", "senegalese"],
  sources: [
    {
      title: "America's Test Kitchen — Chicken Yassa (Senegalese Braised Chicken)",
      url: "https://www.americastestkitchen.com/recipes/16064-chicken-yassa-senegalese-braised-chicken-with-caramelized-onion-and-lemon",
      note: "Lemon-mustard marinade, deeply caramelizing the onions, and reducing the marinade into the braise.",
    },
  ],
};
