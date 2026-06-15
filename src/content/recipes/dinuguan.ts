import type { Recipe } from "../types";

export const dinuguan: Recipe = {
  slug: "dinuguan",
  title: "Dinuguan",
  cuisine: "filipino",
  blurb:
    "A dark, glossy stew of pork offcuts simmered in vinegar-sharpened pig's blood — the original nose-to-tail dish, where the part most cultures throw away becomes the richest gravy on the table.",
  servings: 4,
  perServing: { calories: 480, protein: 26 },
  estCostPerServing: 1.4,
  roles: ["dinner"],
  ingredients: [
    { item: "pork (belly ends, shoulder, plus ear/offal trimmings)", qty: "3/4 lb", cost: 2.5 },
    { item: "pig's blood, fresh or frozen", qty: "1 1/2 cups", cost: 1.0 },
    { item: "vinegar (cane or white)", qty: "1/4 cup", cost: 0.3, spansWeeks: true },
    { item: "garlic cloves, minced", qty: "6", cost: 0.3, spansWeeks: true },
    { item: "onion, chopped", qty: "1", cost: 0.3 },
    { item: "green chilies (siling haba)", qty: "3", cost: 0.3, spansWeeks: true },
    { item: "fish sauce (patis)", qty: "2 tbsp", cost: 0.2, spansWeeks: true },
    { item: "sugar, a pinch to balance", qty: "1 tsp", cost: 0.05, spansWeeks: true },
    { item: "bay leaf, black peppercorns", qty: "1 leaf", cost: 0.1, spansWeeks: true },
    { item: "oil, steamed rice (or puto) to serve", qty: "to serve", cost: 0.5 },
  ],
  method: [
    "Simmer the pork and any offal trimmings in lightly salted water until tender; reserve the broth and dice the meat small.",
    "In oil, sauté garlic and onion until golden, add the diced pork, and let it brown and pick up color.",
    "Pour in the vinegar and let it come to a boil WITHOUT stirring — disturbing it now leaves a raw, sour bite; once it's boiled a minute, season with patis and the bay and peppercorns.",
    "Add a ladle of the reserved broth, then pour in the blood while stirring constantly over low heat so it thickens into a smooth, dark gravy instead of curdling into grains.",
    "Simmer gently 10–15 minutes until glossy and thick, drop in the whole chilies and a pinch of sugar to round it, and serve hot with rice or steamed puto.",
  ],
  modernMove:
    "Two non-negotiable techniques: let the vinegar boil off untouched before stirring, and add the blood low and slow with constant motion — that's what turns it into a velvet gravy rather than a grainy one. It's also the purest zero-waste cook there is: it rescues the blood and offcuts a butcher would otherwise bin.",
  zeroWasteHero: true,
  tags: ["nose-to-tail", "blood", "pork", "offal", "vinegar", "stew"],
};
