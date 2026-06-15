import type { Recipe } from "../types";

export const ashPlantainCurry: Recipe = {
  slug: "ash-plantain-curry",
  title: "Ala Kesel (Ash Plantain Curry)",
  cuisine: "sri-lankan",
  blurb:
    "Starchy green ash plantain simmered in spiced coconut milk until creamy — a cheap, filling curry that drinks up whatever flavor you give it.",
  servings: 4,
  perServing: { calories: 360, protein: 6 },
  estCostPerServing: 0.9,
  roles: ["dinner"],
  ingredients: [
    { item: "ash plantains (green/unripe), peeled and cut into chunks", qty: "3", cost: 1.2 },
    { item: "thin coconut milk", qty: "1 1/2 cups", cost: 0.5 },
    { item: "thick coconut milk", qty: "1/2 cup", cost: 0.4 },
    { item: "onion, sliced", qty: "1", cost: 0.2 },
    { item: "garlic, sliced", qty: "3 cloves", cost: 0.1, spansWeeks: true },
    { item: "green chilies, slit", qty: "2", cost: 0.1, spansWeeks: true },
    { item: "turmeric", qty: "1/2 tsp", cost: 0.05, spansWeeks: true },
    { item: "roasted curry powder", qty: "1 tsp", cost: 0.1, spansWeeks: true },
    { item: "mustard seeds", qty: "1/2 tsp", cost: 0.05, spansWeeks: true },
    { item: "fenugreek seeds", qty: "1/4 tsp", cost: 0.05, spansWeeks: true },
    { item: "curry leaves", qty: "1 sprig", cost: 0.1, spansWeeks: true },
    { item: "pandan (rampe) leaf", qty: "3-inch piece", cost: 0.15, spansWeeks: true },
    { item: "cinnamon stick", qty: "1 small", cost: 0.1, spansWeeks: true },
    { item: "salt", qty: "to taste" },
  ],
  method: [
    "Rub a little oil on your hands and knife — green plantain sap stains — then peel and cut the plantains into bite-size chunks, dropping them into water to stop browning.",
    "Put the plantain in a pot with the thin coconut milk, onion, garlic, green chili, turmeric, curry powder, mustard, fenugreek, curry leaves, pandan and cinnamon.",
    "Simmer 20–30 minutes over medium-low heat until the plantain is tender and the liquid has reduced and thickened around it.",
    "Pour in the thick coconut milk, season with salt and warm through without a hard boil until the curry turns thick and creamy.",
    "Serve with rice as part of a rice-and-curry plate.",
  ],
  modernMove:
    "Ash plantain is almost flavorless on its own — that's the point. It works like a sponge for the toasted curry powder and coconut, the way potato does in other cuisines but starchier and cheaper.",
  notes:
    "If you can't find ash plantain, the greenest, hardest unripe plantain you can buy stands in.",
  zeroWasteHero: false,
  tags: ["ala-kesel", "ash-plantain", "green-banana", "curry", "sri-lankan"],
  sources: [
    {
      title: "Island Smile — Ash Plantain Coconut Curry",
      url: "https://www.islandsmile.org/sri-lankan-ash-plaintain-curry/",
      note: "Simmering ash plantain in thin then thick coconut milk with tempering spices",
    },
  ],
};
