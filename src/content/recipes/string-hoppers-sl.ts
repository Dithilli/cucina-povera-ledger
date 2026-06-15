import type { Recipe } from "../types";

export const stringHoppersSl: Recipe = {
  slug: "string-hoppers-sl",
  title: "String Hoppers (Idiyappam) with Kiri Hodi",
  cuisine: "sri-lankan",
  blurb:
    "Steamed nests of fine rice-flour noodles, pressed and steamed soft, served under a pale, fenugreek-scented coconut gravy — the gentle plate that opens or closes a Sri Lankan day.",
  servings: 4,
  perServing: { calories: 440, protein: 10 },
  estCostPerServing: 0.75,
  roles: ["dinner"],
  ingredients: [
    { item: "roasted rice flour (string hopper flour)", qty: "2 cups", cost: 0.7 },
    { item: "boiling water", qty: "as needed" },
    { item: "salt", qty: "1/2 tsp" },
    { item: "thin coconut milk (for kiri hodi)", qty: "1 1/2 cups", cost: 0.6 },
    { item: "thick coconut milk to finish", qty: "1/2 cup", cost: 0.3 },
    { item: "onion, sliced", qty: "1 small", cost: 0.25 },
    { item: "garlic", qty: "2 cloves", cost: 0.1, spansWeeks: true },
    { item: "green chili, slit", qty: "1", cost: 0.1, spansWeeks: true },
    { item: "rampe (pandan), curry leaves, cinnamon", qty: "1 strip + 1 sprig + small piece", cost: 0.15, spansWeeks: true },
    { item: "fenugreek seeds", qty: "1/4 tsp", cost: 0.05, spansWeeks: true },
    { item: "turmeric", qty: "1/4 tsp", cost: 0.05, spansWeeks: true },
    { item: "lime juice", qty: "1 tsp", cost: 0.1 },
    { item: "Maldive fish flakes (optional)", qty: "1 tsp", cost: 0.15, spansWeeks: true },
  ],
  method: [
    "Mix the roasted rice flour with salt and just enough boiling water to bring it into a warm, smooth, pliable dough that is soft but not sticky.",
    "Pack the dough into a string-hopper press (or a potato ricer) and squeeze tight spirals onto small steamer mats, building round nests. Steam 8–10 minutes until cooked and no longer chalky.",
    "For the kiri hodi, simmer the thin coconut milk with onion, garlic, green chili, rampe, curry leaves, cinnamon, fenugreek, turmeric, the Maldive fish, and salt for 8–10 minutes until aromatic.",
    "Take the gravy off the heat, stir in the thick coconut milk and lime juice, and warm gently without boiling so it stays smooth. Ladle over the string hopper nests and serve with pol sambol.",
  ],
  modernMove:
    "Knead the dough with water hot enough to half-cook the flour — that pre-gelatinizing is what lets the strands hold their shape through the press and steam without going gummy.",
  notes:
    "Kiri hodi is deliberately mild and milky; the heat comes from the pol sambol alongside. A little Maldive fish gives it the savory backbone, but it's optional for a vegan plate.",
  zeroWasteHero: false,
  tags: ["sri-lankan", "string-hoppers", "idiyappam", "kiri-hodi", "steamed"],
  sources: [
    {
      title: "196 flavors — Kiri Hodi (Traditional Sri Lankan Recipe)",
      url: "https://www.196flavors.com/sri-lanka-kiri-hodi/",
      note: "Kiri hodi — fenugreek-and-turmeric coconut gravy finished off the heat with thick milk and lime, served over string hoppers",
    },
  ],
};
