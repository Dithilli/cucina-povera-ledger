import type { Recipe } from "../types";

export const pozoleRojo: Recipe = {
  slug: "pozole-rojo",
  title: "Pozole Rojo",
  cuisine: "mexican",
  blurb:
    "A great celebratory pot of nixtamalized hominy in a deep red guajillo broth, where a little pork flavors a stew that feeds a crowd. The Sunday corn dish.",
  servings: 6,
  perServing: { calories: 380, protein: 24 },
  estCostPerServing: 1.4,
  roles: ["dinner", "lunch"],
  ingredients: [
    { item: "dried or canned hominy (maíz cacahuazintle)", qty: "4 cups cooked", cost: 2.0 },
    { item: "pork shoulder (a small piece, plus a bone)", qty: "12 oz", cost: 3.5 },
    { item: "guajillo + ancho chiles, toasted & seeded", qty: "5", cost: 0.6, spansWeeks: true },
    { item: "garlic, onion", qty: "1/2 head + 1/2 onion", cost: 0.4 },
    { item: "oregano, bay, salt", qty: "to taste", spansWeeks: true },
    {
      item: "garnish: shredded cabbage, radish, onion, lime, chile",
      qty: "to serve",
      cost: 1.5,
    },
  ],
  method: [
    "Simmer the pork and bone with onion, garlic, and salt until tender; reserve the broth and shred the meat.",
    "Toast the chiles, soak in hot water, then blend smooth with a little broth and strain into the pot.",
    "Add the hominy and shredded pork; simmer 30–40 minutes so the broth turns deep and unified. Season with oregano and salt.",
    "Serve in big bowls; let everyone pile on cabbage, radish, raw onion, lime, and chile at the table.",
  ],
  modernMove:
    "The broth is the dish — toast the chiles to fragrant (not bitter), strain the blended base for a clean, glossy caldo, and let the hominy soak it up. The bone gives body a bouillon cube can't.",
  notes: "A small amount of pork stretches across a huge, generous pot — the frugal feast at its best.",
  tags: ["maíz", "hominy", "pork", "stew", "celebration"],
};
