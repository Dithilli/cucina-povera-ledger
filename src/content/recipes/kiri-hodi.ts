import type { Recipe } from "../types";

export const kiriHodi: Recipe = {
  slug: "kiri-hodi",
  title: "Kiri Hodi (White Curry)",
  cuisine: "sri-lankan",
  blurb:
    "A gentle turmeric-yellow coconut-milk gravy loosened with onion, green chili and fenugreek and finished with lime — the mild \"white curry\" that ties a rice-and-curry plate together.",
  servings: 4,
  perServing: { calories: 220, protein: 4 },
  estCostPerServing: 0.65,
  roles: ["dinner"],
  ingredients: [
    { item: "thin coconut milk", qty: "1 1/2 cups", cost: 0.5 },
    { item: "thick coconut milk (or coconut cream)", qty: "1/2 cup", cost: 0.4 },
    { item: "onion, sliced", qty: "1", cost: 0.2 },
    { item: "garlic, sliced", qty: "3 cloves", cost: 0.1, spansWeeks: true },
    { item: "green chilies, slit", qty: "2", cost: 0.1, spansWeeks: true },
    { item: "fenugreek seeds", qty: "1/2 tsp", cost: 0.05, spansWeeks: true },
    { item: "turmeric", qty: "1/2 tsp", cost: 0.05, spansWeeks: true },
    { item: "curry leaves", qty: "1 sprig", cost: 0.1, spansWeeks: true },
    { item: "pandan (rampe) leaf", qty: "3-inch piece", cost: 0.15, spansWeeks: true },
    { item: "cinnamon stick", qty: "1 small", cost: 0.1, spansWeeks: true },
    { item: "Maldive fish flakes (optional)", qty: "1 tsp", cost: 0.2, spansWeeks: true },
    { item: "lime", qty: "1/2", cost: 0.15 },
    { item: "salt", qty: "to taste" },
  ],
  method: [
    "Put the thin coconut milk in a pan with the onion, garlic, green chili, fenugreek, turmeric, curry leaves, pandan, cinnamon and Maldive fish if using.",
    "Bring to a gentle simmer over medium heat and cook 8–10 minutes, until the onion is soft and the fenugreek has perfumed the gravy.",
    "Stir in the thick coconut milk and warm through, stirring constantly — never let it reach a rolling boil or the coconut will split.",
    "Take off the heat, season with salt and squeeze in the lime, stirring another minute so it stays smooth.",
    "Serve loose and pourable over rice, string hoppers or roti.",
  ],
  modernMove:
    "Add the thick coconut milk only at the end and keep it below a boil with constant stirring — that's the whole technique for a glossy white curry that never curdles.",
  notes:
    "Leftover kiri hodi is the curry gravy that binds a pan of kottu the next day.",
  zeroWasteHero: false,
  tags: ["kiri-hodi", "white-curry", "coconut", "gravy", "sri-lankan"],
  sources: [
    {
      title: "Vidya & Mike Benoit — 196 flavors",
      url: "https://www.196flavors.com/sri-lanka-kiri-hodi/",
      note: "Fenugreek-and-coconut-milk base, the no-boil finish and lime to close",
    },
  ],
};
