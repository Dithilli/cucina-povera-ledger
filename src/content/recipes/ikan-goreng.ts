import type { Recipe } from "../types";

export const ikanGoreng: Recipe = {
  slug: "ikan-goreng",
  title: "Ikan Goreng",
  cuisine: "indonesian",
  blurb:
    "Small fish marinated in turmeric, garlic, and lime, then fried hard until the skin shatters and the bones go crisp enough to eat — the everyday Indonesian way with cheap fish.",
  servings: 4,
  perServing: { calories: 540, protein: 31 },
  estCostPerServing: 1.1,
  roles: ["dinner"],
  ingredients: [
    {
      item: "small whole fish (mackerel, sardines, small tilapia)",
      qty: "1 1/2 lb",
      cost: 3.5,
    },
    { item: "garlic cloves", qty: "5", cost: 0.25, spansWeeks: true },
    { item: "fresh turmeric (or 1 tsp ground)", qty: "1 thumb", cost: 0.3, spansWeeks: true },
    { item: "ginger", qty: "1 thumb", cost: 0.2, spansWeeks: true },
    { item: "coriander seed, ground", qty: "1 tsp", cost: 0.1, spansWeeks: true },
    { item: "limes (juice)", qty: "2", cost: 0.5, spansWeeks: true },
    { item: "rice flour (for dredging, optional)", qty: "3 tbsp", cost: 0.2, spansWeeks: true },
    { item: "neutral oil for shallow frying", qty: "1/2 cup", cost: 0.5, spansWeeks: true },
    {
      item: "to serve: sambal, cucumber, lime, steamed rice",
      qty: "to serve",
      cost: 0.6,
    },
    { item: "salt", qty: "to taste" },
  ],
  method: [
    "Pound garlic, turmeric, ginger, and coriander to a paste with the lime juice and a heavy pinch of salt. Score the fish to the bone on both sides so the marinade and heat reach the center.",
    "Rub the paste into the cuts and cavity; rest 20–30 minutes. The acid firms the flesh and the turmeric stains it gold.",
    "Pat the fish dry — this is the step that decides whether it sears or steams — and dust lightly with rice flour if you want extra crackle.",
    "Shallow-fry in hot oil, undisturbed, until the underside is deep brown and releases on its own, then turn once. Small fish fry long enough that the fins and fine bones go crisp and edible. Drain, hit with lime, and serve with rice and sambal.",
  ],
  modernMove:
    "Drying the marinated fish completely before it hits the oil is the whole trick: a wet fish steams and sticks, a dry one shatters. Frying small fish hard makes the bones crunchable, so nothing is left behind.",
  tags: ["fish", "fried", "turmeric", "marinated", "crispy", "everyday"],
  sources: [
    { title: "Wikipedia — Ikan goreng", url: "https://en.wikipedia.org/wiki/Ikan_goreng", note: "dish definition and turmeric-spiced regional context" },
    { title: "Cook Me Indonesian — Cook Me Indonesian", url: "https://www.cookmeindonesian.com/ikan-goreng-deep-fried-fish/", note: "turmeric–coriander marinade and fry-hard technique" },
  ],
};
