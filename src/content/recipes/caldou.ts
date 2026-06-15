import type { Recipe } from "../types";

export const caldou: Recipe = {
  slug: "caldou",
  title: "Caldou (Saltigué)",
  cuisine: "senegalese",
  blurb:
    "The bright Casamance fish poach — sea bream simmered in a thin onion broth lit up with lime and tamarind, so clean and sour it cuts straight through a plate of broken rice.",
  servings: 4,
  perServing: { calories: 510, protein: 29 },
  estCostPerServing: 2.0,
  roles: ["dinner"],
  ingredients: [
    { item: "whole fish or steaks (sea bream, snapper)", qty: "1 lb", cost: 3.6 },
    { item: "onions, sliced", qty: "2 large", cost: 0.7 },
    { item: "tomato, chopped", qty: "1", cost: 0.3 },
    { item: "tamarind pulp", qty: "1 oz block", cost: 0.4, spansWeeks: true },
    { item: "limes", qty: "2", cost: 0.4, spansWeeks: true },
    { item: "okra (optional, whole)", qty: "6 pods", cost: 0.4 },
    { item: "Scotch bonnet (kaani), whole", qty: "1", cost: 0.2, spansWeeks: true },
    { item: "garlic, parsley and stock cube (Maggi)", qty: "2 cloves + 1 cube", cost: 0.3, spansWeeks: true },
    { item: "palm or peanut oil", qty: "1 tbsp", cost: 0.1, spansWeeks: true },
    { item: "broken rice, to serve", qty: "1 1/2 cups dry", cost: 0.7 },
  ],
  method: [
    "Soak the tamarind in warm water and strain to a sour juice; halve the limes.",
    "Soften the onions in a little oil with garlic, then add the tomato and a generous splash of water for a light, brothy base.",
    "Stir in the tamarind juice, crumbled stock cube, the whole okra and the whole Scotch bonnet, and let the broth come to a gentle simmer.",
    "Lay in the fish and poach gently — about 15 minutes for a whole fish — basting so it cooks evenly without falling apart.",
    "Squeeze in plenty of lime, scatter parsley, lift out the chili, and serve the fish and its sour broth over broken rice.",
  ],
  modernMove:
    "Tamarind and lime carry the whole dish — keep the broth thin and let acidity, not oil or thickener, do the work; that brightness is the Casamance signature.",
  notes: "Traditionally paired with a sorrel-and-okra relish (baguedj); a squeeze of extra lime at the table is welcome.",
  zeroWasteHero: false,
  tags: ["fish", "lime", "tamarind", "casamance", "senegalese"],
  sources: [
    {
      title: "Saveur — Kaldou (Red Snapper With Onions and Lemon)",
      url: "https://www.saveur.com/recipes/kaldou-red-snapper-onion-lemon/",
      note: "Poaching fish in a thin onion broth brightened with citrus, the Casamance lemon-and-onion signature.",
    },
  ],
};
