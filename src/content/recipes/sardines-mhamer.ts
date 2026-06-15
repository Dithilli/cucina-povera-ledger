import type { Recipe } from "../types";

export const sardinesMhamer: Recipe = {
  slug: "sardines-mhamer",
  title: "Sardines Mchermel",
  cuisine: "moroccan",
  blurb:
    "The cheapest, most beloved fish on the Moroccan coast — butterflied sardines sandwiched flesh-to-flesh around a layer of green chermoula, dredged in flour, and fried until the skin crackles and the herb paste melts between them.",
  servings: 4,
  perServing: { calories: 480, protein: 26 },
  estCostPerServing: 1.5,
  roles: ["dinner"],
  ingredients: [
    { item: "fresh sardines, scaled and butterflied", qty: "1 1/2 lb", cost: 3.5 },
    { item: "chermoula (cilantro-garlic-cumin-paprika)", qty: "1/2 cup", cost: 0.6 },
    { item: "flour for dredging", qty: "1/2 cup", cost: 0.15, spansWeeks: true },
    { item: "lemon, in wedges", qty: "1", cost: 0.3 },
    { item: "oil for shallow frying", qty: "for frying", cost: 0.5 },
    { item: "salt", qty: "to taste", cost: 0.02, spansWeeks: true },
  ],
  method: [
    "Open each butterflied sardine flat and spread the boned flesh with a generous smear of chermoula.",
    "Press a second sardine flesh-side-down onto the first to make a herb-filled sandwich, and chill at least an hour so the marinade soaks in.",
    "Dredge each pair lightly in flour, shaking off the excess.",
    "Shallow-fry in hot oil about 3 minutes a side until deep gold and crisp, the chermoula bubbling between the fillets.",
    "Drain briefly and serve hot with lemon wedges to squeeze over.",
  ],
  modernMove:
    "Sandwiching two fillets flesh-to-flesh around the chermoula traps the herb paste so it steams rather than scorches in the oil, seasoning the fish from the inside while the skin crisps outside.",
  notes:
    "Sardines are Morocco's people's fish — landed by the crate and sold for coins along the Atlantic.",
  zeroWasteHero: false,
  tags: ["sardines", "fish", "chermoula", "fried", "moroccan"],
  sources: [
    {
      title: "Taste of Maroc — Moroccan Stuffed Fried Sardines with Chermoula",
      url: "https://tasteofmaroc.com/moroccan-stuffed-sardines/",
      note: "Butterflied sardines sandwiched around chermoula, floured and fried — the classic coastal street dish.",
    },
  ],
};
