import type { Recipe } from "../types";

export const boulettesDePoisson: Recipe = {
  slug: "boulettes-de-poisson",
  title: "Boulettes de Poisson",
  cuisine: "senegalese",
  blurb:
    "Hand-pounded fish balls bright with parsley and chili, simmered in a tomato-onion nokoss until tender, then spooned with their sauce over broken rice.",
  servings: 4,
  perServing: { calories: 600, protein: 29 },
  estCostPerServing: 1.9,
  roles: ["dinner"],
  ingredients: [
    { item: "broken rice (riz brisé), to serve", qty: "1 1/2 cups", cost: 0.5 },
    { item: "white fish fillet, skinned & boned", qty: "1 lb", cost: 2.6 },
    { item: "parsley, garlic & scotch bonnet, pounded", qty: "1/2 cup", cost: 0.5 },
    { item: "stale bread or 1 egg, to bind", qty: "1 slice", cost: 0.15 },
    { item: "onions", qty: "2 large", cost: 0.6 },
    { item: "tomato paste", qty: "3 tbsp", cost: 0.4, spansWeeks: true },
    { item: "nététou (fermented locust bean)", qty: "1 tsp", cost: 0.2, spansWeeks: true },
    { item: "stock cube (Maggi / Jumbo)", qty: "1", cost: 0.15, spansWeeks: true },
    { item: "neutral oil", qty: "1/4 cup", cost: 0.3, spansWeeks: true },
    { item: "salt, pepper & bay leaf", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Pound or pulse the fish with the parsley, garlic, chili, salt, and pepper, then work in the soaked bread or egg until the mix holds together; roll into small balls.",
    "Sear the fish balls briefly in hot oil to firm them, then lift them out.",
    "In the same oil soften the onions, stir in tomato paste, crushed nététou, and a stock cube, and fry the nokoss base down dark and sweet.",
    "Loosen with water, add a bay leaf, return the fish balls, and simmer gently until they're cooked through and the sauce has thickened around them.",
    "Spoon the boulettes and their red sauce over broken rice and serve.",
  ],
  modernMove:
    "Searing the boulettes before they go into the sauce sets their shape so they hold together through the simmer instead of disintegrating into the nokoss.",
  notes:
    "A thrifty way to stretch a small amount of fish across four plates; trimmings and less-prized fillet pound up just as well as steaks.",
  zeroWasteHero: true,
  tags: ["fish", "fish-balls", "tomato", "rice", "senegalese"],
  sources: [
    {
      title: "Afrifood Network — Thieboudienne / Ceebu Jen (nokoss tomato-onion base)",
      url: "https://afrifoodnetwork.com/recipes/rice-recipes/thieboudienne/",
      note: "The tomato-onion-nététou nokoss base that the fish balls simmer in.",
    },
  ],
};
