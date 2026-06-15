import type { Recipe } from "../types";

export const domoda: Recipe = {
  slug: "domoda",
  title: "Domoda",
  cuisine: "senegalese",
  blurb:
    "The tangy Casamance cousin of mafé — a groundnut stew sharpened with tamarind and lime so the peanut richness lands bright instead of heavy, eaten over rice.",
  servings: 4,
  perServing: { calories: 600, protein: 24 },
  estCostPerServing: 1.8,
  roles: ["dinner"],
  ingredients: [
    { item: "stewing beef or chicken thighs, cut up", qty: "12 oz", cost: 2.8 },
    { item: "unsweetened natural peanut butter", qty: "2/3 cup", cost: 0.9 },
    { item: "tamarind pulp (or 2 tbsp paste)", qty: "1 oz block", cost: 0.4, spansWeeks: true },
    { item: "onion, chopped", qty: "1 large", cost: 0.4 },
    { item: "tomato paste", qty: "2 tbsp", cost: 0.2, spansWeeks: true },
    { item: "pumpkin or butternut squash, chunked", qty: "2 cups", cost: 0.6 },
    { item: "Scotch bonnet (kaani), whole", qty: "1", cost: 0.2, spansWeeks: true },
    { item: "garlic and stock cube (Maggi)", qty: "2 cloves + 1 cube", cost: 0.2, spansWeeks: true },
    { item: "lime, for finishing", qty: "1", cost: 0.2, spansWeeks: true },
    { item: "peanut oil", qty: "2 tbsp", cost: 0.2, spansWeeks: true },
    { item: "broken rice, to serve", qty: "1 1/2 cups dry", cost: 0.7 },
  ],
  method: [
    "Soak the tamarind in a cup of warm water, then squeeze and strain to a thin sour juice; discard the seeds and fibre.",
    "Brown the meat in peanut oil, soften the onion, and darken the tomato paste in the pot.",
    "Whisk the peanut butter into warm water and pour it in with the tamarind juice, whole Scotch bonnet, garlic and stock cube; cover with water.",
    "Simmer uncovered until the meat is tender and the sauce splits its oil, then add the pumpkin and cook until collapsing and silky.",
    "Finish with a squeeze of lime to lift the tang, check salt, and serve over broken rice.",
  ],
  modernMove:
    "Tamarind, not lemon, is what makes Casamance domoda read as sour-sweet rather than just rich — strain its juice in early so the acidity cooks into the peanut base.",
  notes: "Pumpkin dissolving into the sauce thickens it; leave a few chunks whole for texture.",
  zeroWasteHero: false,
  tags: ["peanut", "stew", "tamarind", "casamance", "senegalese"],
  sources: [
    {
      title: "An Edible Mosaic — Domoda Recipe (African Peanut Stew)",
      url: "https://www.anediblemosaic.com/domoda-recipe-gambian-peanut-stew/",
      note: "Building a peanut stew brightened with souring agent and squash that melts to thicken the sauce.",
    },
  ],
};
