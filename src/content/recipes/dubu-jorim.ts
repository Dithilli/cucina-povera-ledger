import type { Recipe } from "../types";

export const dubuJorim: Recipe = {
  slug: "dubu-jorim",
  title: "Dubu Jorim",
  cuisine: "korean",
  blurb:
    "Pan-crisped tofu slabs braised in a spicy-sweet soy sauce — a block of tofu turned into a full, protein-heavy dinner for pennies.",
  servings: 4,
  perServing: { calories: 450, protein: 24 },
  estCostPerServing: 0.85,
  roles: ["dinner"],
  ingredients: [
    {
      item: "firm tofu, drained and sliced into 1/2-inch slabs",
      qty: "1 lb block",
      cost: 1.5,
    },
    {
      item: "garlic cloves, minced",
      qty: "3",
      cost: 0.15,
      spansWeeks: true,
    },
    { item: "soy sauce", qty: "3 tbsp", cost: 0.3, spansWeeks: true },
    {
      item: "gochugaru (Korean chili flakes)",
      qty: "1 tbsp",
      cost: 0.3,
      spansWeeks: true,
    },
    {
      item: "rice syrup or sugar",
      qty: "1 tbsp",
      cost: 0.1,
      spansWeeks: true,
    },
    {
      item: "neutral oil + sesame oil to finish",
      qty: "2 tbsp",
      cost: 0.25,
      spansWeeks: true,
    },
    { item: "water", qty: "3/4 cup", cost: 0 },
    {
      item: "green onions, sliced + sesame seeds",
      qty: "2 + to finish",
      cost: 0.3,
    },
    { item: "steamed short-grain rice, to serve", qty: "for 4", cost: 0.6 },
  ],
  method: [
    "Press the tofu slabs between paper towels and salt them lightly — drier tofu browns instead of steaming.",
    "Fry the slabs in the neutral oil over medium-high until both sides are golden and crisp, then nestle them in a single layer.",
    "Whisk the sauce — soy, garlic, gochugaru, rice syrup, water and half the green onion — and pour it around (not over) the tofu so the crust survives. Spoon it across the tops as it simmers.",
    "Braise gently, basting, until the sauce reduces to a glossy glaze clinging to each slab, about 8 minutes. Finish with sesame oil, the rest of the green onion and sesame seeds. Serve over rice; reheats well for 3-4 days.",
  ],
  modernMove:
    "Crisp the tofu hard first and add the sauce around the edges, basting rather than drowning — you keep a seared crust under a braised glaze, two textures from one cheap block.",
  tags: ["banchan", "tofu", "jorim", "gochugaru", "vegan", "make-ahead"],
  sources: [
    {
      title: "Maangchi — Spicy braised tofu (Dubu-jorim)",
      url: "https://www.maangchi.com/recipe/dubu-jorim",
      note: "Pan-frying the tofu slabs then braising in a spicy soy-garlic sauce",
    },
  ],
};
