import type { Recipe } from "../types";

export const driedSpratsSambol: Recipe = {
  slug: "dried-sprats-sambol",
  title: "Halmasso (Dried Sprat Curry)",
  cuisine: "sri-lankan",
  blurb:
    "A fistful of tiny dried sprats tempered with onion, chili, and curry leaf into a salty, crunchy-edged relish — protein for pennies that flavors a whole plate of rice.",
  servings: 4,
  perServing: { calories: 240, protein: 18 },
  estCostPerServing: 0.85,
  roles: ["dinner"],
  ingredients: [
    { item: "dried sprats (halmasso), rinsed", qty: "1 cup (about 5 oz)", cost: 1.6, spansWeeks: true },
    { item: "red onion, sliced", qty: "2", cost: 0.5 },
    { item: "green chilies, sliced", qty: "2", cost: 0.2 },
    { item: "garlic, sliced", qty: "3 cloves", cost: 0.1, spansWeeks: true },
    { item: "tomato, chopped", qty: "1", cost: 0.3 },
    { item: "chili powder and flakes", qty: "1–2 tsp", cost: 0.1, spansWeeks: true },
    { item: "turmeric and unroasted curry powder", qty: "1/2 tsp + 1 tsp", cost: 0.1, spansWeeks: true },
    { item: "pandan (rampe) and curry leaves", qty: "1 sprig each", cost: 0.2, spansWeeks: true },
    { item: "mustard seeds", qty: "1/2 tsp", cost: 0.05, spansWeeks: true },
    { item: "tamarind water", qty: "2 tbsp", cost: 0.1, spansWeeks: true },
    { item: "oil", qty: "2 tbsp", cost: 0.1, spansWeeks: true },
    { item: "steamed rice, to serve", qty: "to serve" },
  ],
  method: [
    "Rinse the dried sprats to wash off excess salt and grit, and pat them dry.",
    "Heat the oil and pop the mustard seeds, then add the pandan, curry leaves, onion, garlic, and green chili. Fry until the onions turn golden.",
    "Slide in the sprats and fry 1 to 2 minutes over medium-high heat so the edges crisp and toast.",
    "Stir in the chili powder, flakes, turmeric, and curry powder to coat everything, then add the tomato and tamarind water.",
    "Cook down a few minutes until the tomato collapses and the mixture is thick, sticky, and just moist — no loose liquid. Taste before salting, as the sprats are already salty. Serve with rice.",
  ],
  modernMove:
    "Rinse the salt off and toast the sprats in hot oil before the spices go in — frying them crisp first is what turns cheap dried fish from leathery to crunchy-savory.",
  notes:
    "Among the cheapest protein on any Sri Lankan plate; a small bag of dried sprats keeps for months in the pantry. For a saucier curry, finish with a splash of thick coconut milk.",
  zeroWasteHero: false,
  tags: ["sri-lankan", "fish", "dried-fish", "sprats", "tempered", "cheap-protein", "pantry"],
  sources: [
    {
      title: "Island Smile — Sri Lankan Dried Sprats Cooked in Tomato-Onion Fry",
      url: "https://www.islandsmile.org/sri-lankan-dried-sprats-fry/",
      note: "Tempering rinsed sprats with onion, chili, tomato, and tamarind",
    },
  ],
};
