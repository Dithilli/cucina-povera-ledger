import type { Recipe } from "../types";

export const ambulThiyal: Recipe = {
  slug: "ambul-thiyal",
  title: "Fish Ambul Thiyal",
  cuisine: "sri-lankan",
  blurb:
    "The ancient southern sour fish curry — firm chunks of tuna coated in a near-black paste of ground goraka and roasted spice, cooked nearly dry so it keeps for days without a fridge.",
  servings: 4,
  perServing: { calories: 320, protein: 30 },
  estCostPerServing: 2.1,
  roles: ["dinner"],
  ingredients: [
    { item: "firm fish (tuna, skipjack, or bonito), in 2-inch chunks", qty: "1 1/4 lb", cost: 6.0 },
    { item: "goraka (Malabar tamarind), soaked and ground", qty: "6–8 pieces", cost: 0.6, spansWeeks: true },
    { item: "black pepper, freshly ground", qty: "1 tbsp", cost: 0.15, spansWeeks: true },
    { item: "roasted curry powder", qty: "1 tbsp", cost: 0.15, spansWeeks: true },
    { item: "chili powder", qty: "1 tsp", cost: 0.05, spansWeeks: true },
    { item: "turmeric", qty: "1/2 tsp", cost: 0.05, spansWeeks: true },
    { item: "garlic and ginger, crushed", qty: "1 tbsp each", cost: 0.2, spansWeeks: true },
    { item: "pandan (rampe) and curry leaves", qty: "1 sprig each", cost: 0.2, spansWeeks: true },
    { item: "salt", qty: "1 tsp", cost: 0.02, spansWeeks: true },
    { item: "steamed rice, to serve", qty: "to serve" },
  ],
  method: [
    "Soak the goraka in a little hot water until soft, then grind it to a dark paste — this is the soul of the dish and the natural preservative that lets it keep.",
    "Mix the goraka paste with the pepper, curry powder, chili, turmeric, garlic, ginger, and salt into a thick black marinade.",
    "Gently fold the fish chunks through the paste until every piece is coated black. Try not to break them.",
    "Lay the fish in a single layer in a clay pot or heavy pan with the pandan and curry leaves. Add just enough water to barely come up the sides.",
    "Cover and simmer very gently, shaking the pot rather than stirring, until the liquid all but vanishes and the fish is glazed in dark, sour, peppery paste — about 20 to 25 minutes.",
  ],
  modernMove:
    "Cook it almost dry and shake the pot instead of stirring — agitation breaks the chunks, and the goraka acidity plus near-dry finish is exactly what preserved this dish in pre-refrigeration kitchens.",
  notes:
    "Made properly it keeps several days at room temperature and tastes better on day two as the sourness settles in. Goraka is essential — tamarind or lime is a poor stand-in for its smoky tartness.",
  zeroWasteHero: false,
  tags: ["sri-lankan", "fish", "tuna", "goraka", "sour", "preserved", "southern"],
  sources: [
    {
      title: "Island Smile — Ambulthiyal (Sri Lankan Sour Fish)",
      url: "https://www.islandsmile.org/ambulthiyal-sri-lankan-sour-fish/",
      note: "Goraka paste, near-dry cook, and the keeps-without-refrigeration character",
    },
  ],
};
