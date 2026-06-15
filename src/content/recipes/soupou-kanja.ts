import type { Recipe } from "../types";

export const soupouKanja: Recipe = {
  slug: "soupou-kanja",
  title: "Soupou Kanja",
  cuisine: "senegalese",
  blurb:
    "A glossy, silky okra stew stained red with palm oil, threaded with dried fish and a little seafood until it coats the spoon — Senegal's most unapologetically slippery sauce over rice.",
  servings: 4,
  perServing: { calories: 560, protein: 25 },
  estCostPerServing: 2.0,
  roles: ["dinner"],
  ingredients: [
    { item: "fresh or frozen okra, finely chopped", qty: "1 lb", cost: 1.4 },
    { item: "firm white fish steaks", qty: "8 oz", cost: 2.2 },
    { item: "dried/smoked fish, soaked and flaked", qty: "3 oz", cost: 1.0 },
    { item: "shrimp or crab pieces", qty: "4 oz", cost: 1.8 },
    { item: "red palm oil", qty: "3 tbsp", cost: 0.5, spansWeeks: true },
    { item: "onion, chopped", qty: "1", cost: 0.3 },
    { item: "nététou and shrimp powder", qty: "1 tbsp each", cost: 0.4, spansWeeks: true },
    { item: "Scotch bonnet (kaani), whole", qty: "1", cost: 0.2, spansWeeks: true },
    { item: "garlic and stock cube (Maggi)", qty: "2 cloves + 1 cube", cost: 0.2, spansWeeks: true },
    { item: "broken rice, to serve", qty: "1 1/2 cups dry", cost: 0.7 },
  ],
  method: [
    "Sweat the onion and garlic in the red palm oil until soft, then add the fish steaks, soaked dried fish, shrimp powder and the whole Scotch bonnet with a little water; simmer 10 minutes.",
    "Stir in the finely chopped okra, nététou and crumbled stock cube.",
    "Cook over low heat, stirring often, for 20–25 minutes until the okra dissolves into a viscous, coating sauce — the finer the chop, the silkier it ropes.",
    "Fold in the shrimp or crab toward the end so it stays tender, and adjust salt.",
    "Spoon the glistening stew over hot broken rice.",
  ],
  modernMove:
    "Chop the okra as fine as you can bear: the more cell walls you cut, the more mucilage releases, and that slippery rope is the whole point of soupou kanja, not a flaw.",
  notes: "Red palm oil is non-negotiable here — it gives both the rust colour and the earthy backbone.",
  zeroWasteHero: false,
  tags: ["okra", "palm-oil", "fish", "seafood", "senegalese"],
  sources: [
    {
      title: "kissAfrica — Soupou Kandja Recipe (Senegalese Okra Sauce)",
      url: "https://kissafrica.fr/en/soupou-kandja-recipe-senegalese-okra-sauce/",
      note: "Simmering fish in palm oil first, then cooking finely chopped okra down to a viscous coating sauce.",
    },
  ],
};
