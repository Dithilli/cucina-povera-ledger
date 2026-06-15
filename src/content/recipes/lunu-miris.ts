import type { Recipe } from "../types";

export const lunuMiris: Recipe = {
  slug: "lunu-miris",
  title: "Lunu Miris",
  cuisine: "sri-lankan",
  blurb:
    "Red chili, onion, smoky Maldive fish and lime pounded to a fiery, savoury paste on a stone — the 'salt-chili' sambol that wakes up kiribath, hoppers and a plain plate of rice.",
  servings: 8,
  perServing: { calories: 45, protein: 2 },
  estCostPerServing: 0.2,
  roles: ["base"],
  ingredients: [
    { item: "dried red chili flakes (or whole, soaked)", qty: "4 tbsp", cost: 0.5, spansWeeks: true },
    { item: "red onion or shallots, chopped", qty: "1", cost: 0.3 },
    { item: "Maldive fish, ground", qty: "1 tbsp", cost: 0.3, spansWeeks: true },
    { item: "lime", qty: "1", cost: 0.2 },
    { item: "salt", qty: "1/2 tsp", cost: 0.01 },
  ],
  method: [
    "Pound the chili with salt on a stone or in a mortar until broken down and paste-like.",
    "Work in the ground Maldive fish, then the onion, pounding until everything turns into a rough, glistening red paste.",
    "Squeeze in the lime juice and pound once more to bring it together; taste and adjust salt and lime.",
    "Serve at room temperature alongside milk rice, hoppers or boiled yams.",
  ],
  modernMove:
    "A mortar and pestle beats a blender here — pounding bruises the onion and chili so they bleed their oils into the Maldive fish, where a blade would just chop and water it down.",
  notes: "Maldive fish (umbalakada) is cured tuna; it reads as deep umami, not fishy, once pounded in.",
  zeroWasteHero: true,
  tags: ["sri-lankan", "sambol", "chili", "foundation", "relish"],
  sources: [
    {
      title: "196 Flavors — Lunu Miris, Traditional Sri Lankan Recipe",
      url: "https://www.196flavors.com/sri-lanka-lunu-miris/",
      note: "Chili, onion, Maldive fish and lime pounded to a paste; 'salt-chili' meaning and milk-rice/hopper pairing",
    },
  ],
};
