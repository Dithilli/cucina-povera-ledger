import type { Recipe } from "../types";

export const potatoCurrySl: Recipe = {
  slug: "potato-curry-sl",
  title: "Ala Hodi (Potato Curry)",
  cuisine: "sri-lankan",
  blurb:
    "Soft potatoes loosened in a golden turmeric-and-coconut gravy, fragrant with rampe and curry leaves — the mild, comforting curry that every Sri Lankan reaches for to sop up hoppers.",
  servings: 4,
  perServing: { calories: 450, protein: 9 },
  estCostPerServing: 0.65,
  roles: ["dinner"],
  ingredients: [
    { item: "potatoes, peeled and cubed", qty: "1 1/2 lb", cost: 1.0 },
    { item: "thin coconut milk", qty: "1 1/2 cups", cost: 0.6 },
    { item: "thick coconut milk to finish", qty: "1/2 cup", cost: 0.3 },
    { item: "onion, sliced", qty: "1 small", cost: 0.25 },
    { item: "garlic", qty: "2 cloves", cost: 0.1, spansWeeks: true },
    { item: "green chilies, slit", qty: "2", cost: 0.15, spansWeeks: true },
    { item: "rampe (pandan)", qty: "1 strip", cost: 0.1, spansWeeks: true },
    { item: "curry leaves", qty: "1 sprig", cost: 0.1, spansWeeks: true },
    { item: "cinnamon stick, small piece", qty: "1", cost: 0.05, spansWeeks: true },
    { item: "fenugreek seeds", qty: "1/4 tsp", cost: 0.05, spansWeeks: true },
    { item: "turmeric", qty: "1/2 tsp", cost: 0.05, spansWeeks: true },
    { item: "Maldive fish flakes (optional)", qty: "1 tsp", cost: 0.15, spansWeeks: true },
    { item: "salt", qty: "to taste" },
  ],
  method: [
    "Simmer the cubed potatoes with the thin coconut milk, onion, garlic, green chilies, rampe, curry leaves, cinnamon, fenugreek, turmeric, Maldive fish, and salt until the potatoes are tender, 12–15 minutes.",
    "Mash a few potato pieces against the side of the pot to lightly thicken the gravy while leaving most cubes whole.",
    "Lower the heat and stir in the thick coconut milk, warming just to a gentle steam without letting it boil so the gravy stays smooth and golden.",
    "Check the salt and serve hot with string hoppers, hoppers, or rice and pol sambol.",
  ],
  modernMove:
    "Cook the potatoes in the coconut milk from the start rather than boiling them in water first — they drink up the turmeric and rampe as they soften, so the flavor is in the potato, not just the gravy.",
  notes:
    "This is the classic hopper companion: deliberately mild, with the green chili providing a clean, low heat. Leave out the Maldive fish for a vegan version.",
  zeroWasteHero: false,
  tags: ["rice-and-curry", "sri-lankan", "potato", "ala-hodi", "vegetable"],
  sources: [
    {
      title: "Jeeva Arulampalam — Island Smile",
      url: "https://www.islandsmile.org/potato-curry/",
      note: "Ala kiri hodi — potatoes simmered in turmeric coconut milk with rampe and curry leaves, finished with thick coconut milk",
    },
  ],
};
