import type { Recipe } from "../types";

export const picadillo: Recipe = {
  slug: "picadillo",
  title: "Picadillo",
  cuisine: "mexican",
  blurb:
    "A little ground meat bulked out with potato and carrot, sweetened with a few raisins, in a tomato base — the thrifty stew that stretches a half-pound of beef to feed four.",
  servings: 4,
  perServing: { calories: 340, protein: 18 },
  estCostPerServing: 1.2,
  roles: ["dinner"],
  ingredients: [
    { item: "ground beef or pork", qty: "1/2 lb", cost: 2.5 },
    { item: "potato, diced small", qty: "2", cost: 0.6 },
    { item: "carrot, diced small", qty: "1", cost: 0.2 },
    { item: "tomatoes", qty: "2", cost: 0.6 },
    { item: "white onion, garlic", qty: "1/2 onion, 1 clove", cost: 0.25 },
    { item: "raisins, a few olives (optional)", qty: "2 tbsp", cost: 0.3, spansWeeks: true },
    { item: "cumin, bay, salt, oil", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Brown the meat in a little oil, breaking it up; remove and reserve, leaving the fat.",
    "Soften onion, garlic, potato, and carrot in that fat; add blended or chopped tomato and a little water.",
    "Return the meat, add raisins (and olives), season with cumin and bay, and simmer until the potato is tender and the sauce thick.",
    "Serve with rice and tortillas, or use as a filling for tacos, chiles rellenos, or empanadas.",
  ],
  modernMove:
    "Brown the meat hard first and build everything in its rendered fat — the half-pound of beef flavors the whole pot, and the potato carries it the rest of the way.",
  zeroWasteHero: true,
  tags: ["guiso", "beef", "potato", "stretch", "dinner"],
};
