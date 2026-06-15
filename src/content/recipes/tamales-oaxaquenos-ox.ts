import type { Recipe } from "../types";

export const tamalesOaxaquenosOx: Recipe = {
  slug: "tamales-oaxaquenos-ox",
  title: "Tamales Oaxaqueños de Mole",
  cuisine: "oaxacan",
  blurb:
    "Flat banana-leaf tamales of fluffy nixtamal masa folded around shredded chicken and a spoon of brick-black mole negro — the steamed leaf perfuming everything with green smoke.",
  servings: 6,
  perServing: { calories: 540, protein: 21 },
  estCostPerServing: 1.6,
  roles: ["dinner"],
  ingredients: [
    { item: "fresh nixtamal masa (or masa harina reconstituted)", qty: "2 lb", cost: 3.0 },
    { item: "manteca (lard), beaten until fluffy", qty: "3/4 cup", cost: 1.2, spansWeeks: true },
    { item: "mole negro paste", qty: "1 cup", cost: 2.5, spansWeeks: true },
    { item: "chicken thighs, poached and shredded", qty: "1 lb", cost: 2.5 },
    { item: "banana leaves, passed over the flame", qty: "1 large package", cost: 1.5 },
    { item: "chicken broth (from poaching)", qty: "2 cups", cost: 0.3 },
    { item: "salt, baking powder", qty: "to taste", cost: 0.05, spansWeeks: true },
  ],
  method: [
    "Beat the manteca until pale and airy, then work in the masa, warm broth, salt, and a pinch of baking powder until a spoonful floats in water — light and spreadable.",
    "Loosen the mole negro with hot broth to a thick sauce and fold the shredded chicken through it.",
    "Pass banana-leaf squares over an open flame until glossy and pliable; spread a thin rectangle of masa on each, lay a stripe of mole chicken down the center.",
    "Fold the leaf over into a flat envelope, tucking the ends under, and stack them flat in a steamer.",
    "Steam 60–75 minutes until the masa peels cleanly from the leaf; rest 10 minutes before unwrapping so they set.",
  ],
  modernMove:
    "Toast the banana leaves directly over the burner until they turn deep green and smell of vanilla and smoke — that quick char is the whole reason Oaxaca wraps in leaf instead of corn husk.",
  notes:
    "Oaxacan tamales are flat envelopes, not the upright corn-husk bundles of the north. One pot of mole stretches across two batches.",
  zeroWasteHero: false,
  tags: ["tamales", "mole", "oaxacan", "dinner"],
  sources: [
    {
      title: "Maricruz Avalos — Tamales Oaxaqueños (Traditional Oaxacan Tamales)",
      url: "https://www.maricruzavalos.com/tamales-oaxaquenos/",
      note: "flat banana-leaf folding, mole-negro-and-chicken filling, fluffy masa float test",
    },
  ],
};
