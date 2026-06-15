import type { Recipe } from "../types";

export const obeAta: Recipe = {
  slug: "obe-ata",
  title: "Obe Ata (Pepper Stew Base)",
  cuisine: "west-african",
  blurb:
    "The blended tomato-pepper-onion base that underpins half of West African cooking — fried down hard in red oil until it splits and goes brick-dark. Make a pot and it powers a week of stews and rice.",
  servings: 8,
  perServing: { calories: 140, protein: 2 },
  estCostPerServing: 0.55,
  roles: ["base"],
  ingredients: [
    { item: "ripe tomatoes (or 1 large can plum tomatoes)", qty: "1 1/2 lb", cost: 1.5 },
    { item: "red bell peppers (tatashe), seeded", qty: "2", cost: 1.2 },
    { item: "scotch bonnet peppers (to taste)", qty: "1–3", cost: 0.5, spansWeeks: true },
    { item: "onions", qty: "2 large", cost: 0.8 },
    { item: "red palm oil (or a blend with neutral oil)", qty: "1/3 cup", cost: 0.6, spansWeeks: true },
    { item: "tomato paste", qty: "2 tbsp", cost: 0.3, spansWeeks: true },
    { item: "ground crayfish or dried fish powder", qty: "1 tbsp", cost: 0.4, spansWeeks: true },
    { item: "stock cube / bouillon", qty: "1–2", cost: 0.2, spansWeeks: true },
    { item: "salt", qty: "to taste" },
  ],
  method: [
    "Roughly chop the tomatoes, red peppers, scotch bonnets, and one of the onions. Blend smooth with a splash of water — this raw purée is the 'ata' that defines the base.",
    "Pour the blend into a wide pot and boil hard, uncovered, until much of the water cooks off and it thickens — 15 to 20 minutes. Reducing first means the oil-fry that follows tastes deep, not watery and raw.",
    "Meanwhile slice the second onion and sweat it in the palm oil over medium heat until soft. Stir in the tomato paste and let it darken a minute.",
    "Tip in the reduced purée and fry it down hard, stirring often, until the oil separates and pools red at the edges and the colour turns from orange to brick — 20 to 30 minutes. This long fry is the whole point.",
    "Season with ground crayfish, the crushed stock cube, and salt. It is now the mother base: ladle it over rice, simmer fish or beans in it, or thin it into a stew.",
  ],
  modernMove:
    "Pre-reducing the raw blend before the oil-fry is the trick — you boil out the water as plain purée, then frying in palm oil concentrates colour and flavour instead of just steaming. The visible split of red oil is your doneness cue.",
  notes:
    "Scales and freezes beautifully — portion the fried base into tubs and a stew is fifteen minutes away on any weeknight. The foundation that every other West African pot leans on.",
  zeroWasteHero: true,
  tags: ["base", "pepper-stew", "obe-ata", "palm-oil", "scotch-bonnet", "batch"],
};
