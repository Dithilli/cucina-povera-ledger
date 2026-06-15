import type { Recipe } from "../types";

export const ginisangSardinas: Recipe = {
  slug: "ginisang-sardinas",
  title: "Ginisang Sardinas",
  cuisine: "filipino",
  blurb:
    "A can of sardines stretched into dinner for the family — sautéed (ginisa) with garlic, onion, and tomato until the oil runs red, then loosened with its own sauce to spoon over rice.",
  servings: 4,
  perServing: { calories: 470, protein: 26 },
  estCostPerServing: 0.95,
  roles: ["dinner", "lunch"],
  ingredients: [
    {
      item: "canned sardines in tomato sauce (the 'Ligo'/'555' kind)",
      qty: "2 cans (15 oz total)",
      cost: 2.4,
    },
    { item: "garlic cloves, crushed", qty: "4", cost: 0.2, spansWeeks: true },
    { item: "small onion, sliced", qty: "1", cost: 0.3 },
    { item: "ripe tomato, chopped", qty: "1 large", cost: 0.4 },
    { item: "siling haba (long green chili)", qty: "1", cost: 0.2, spansWeeks: true },
    { item: "neutral oil", qty: "2 tbsp", cost: 0.15, spansWeeks: true },
    { item: "splash of water or rice-wash", qty: "1/4 cup", cost: 0 },
    { item: "steamed rice, to serve", qty: "4 cups cooked", cost: 0.6 },
    { item: "fish sauce (patis) and black pepper", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Heat the oil and do the ginisa base: sauté garlic until just golden, then the onion until soft, then the tomato — mash it down until it breaks into a pulpy sauce and the oil shows color.",
    "Slide in the sardines with their tomato sauce. Keep the fillets in big pieces; fold rather than stir so they don't turn to mush.",
    "Add the chili and a splash of water to make enough sauce to spoon over rice. Simmer 3–4 minutes to marry, then season with a little patis and pepper.",
    "Serve hot over rice. A fried egg on top turns one can into a fuller plate.",
  ],
  modernMove:
    "Building a real garlic–onion–tomato ginisa under the canned fish is what separates dinner from eating sardines cold from the tin — the fresh sofrito gives the cheap can depth and a sauce of its own.",
  zeroWasteHero: true,
  tags: ["fish", "canned", "sardines", "ginisa", "rice", "everyday"],
  sources: [
    { title: "Vanjo Merano — Panlasang Pinoy", url: "https://panlasangpinoy.com/ginisang-sardinas-recipe/", note: "Canned sardines sautéed over a fresh garlic–onion–tomato ginisa" },
  ],
};
