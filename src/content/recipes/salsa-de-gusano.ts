import type { Recipe } from "../types";

export const salsaDeGusano: Recipe = {
  slug: "salsa-de-gusano",
  title: "Sal de Gusano & Salsa Base",
  cuisine: "oaxacan",
  blurb:
    "The two seasoning constants of the Oaxacan table: smoky chile-and-agave-worm salt ground on the metate, and a plain roasted table salsa — between them they finish nearly every dish.",
  servings: 12,
  perServing: { calories: 25, protein: 1 },
  estCostPerServing: 0.3,
  roles: ["base"],
  ingredients: [
    { item: "dried chile costeño or pasilla de Oaxaca", qty: "3–4", cost: 0.4 },
    { item: "gusanos de maguey (toasted agave worms)", qty: "2 tbsp", cost: 1.5, spansWeeks: true },
    { item: "coarse sea salt", qty: "1/4 cup", cost: 0.1, spansWeeks: true },
    { item: "tomatoes (or tomatillos)", qty: "4 medium", cost: 0.8 },
    { item: "garlic", qty: "2 cloves", cost: 0.05, spansWeeks: true },
    { item: "chile de agua or serrano (for the salsa)", qty: "2", cost: 0.3 },
  ],
  method: [
    "For the sal de gusano: dry-toast the worms and the dried chiles on a comal until brittle and fragrant, then grind them with the coarse salt on a metate (or in a molcajete) to a dusky red powder.",
    "For the table salsa: char the tomatoes, fresh chile and garlic on the dry comal until blackened in spots and soft.",
    "Grind or blend the charred vegetables to a rustic salsa with salt to taste, keeping it loose and lightly chunky.",
    "Keep the sal de gusano in a jar for sprinkling on fruit, beans and the rim of a mezcal cup; keep the salsa on the table for everything else.",
  ],
  modernMove:
    "Toasting the chiles and worms hard before grinding is what concentrates the smoky, earthy umami — the sal de gusano should taste roasted, not raw, the way a metate-made one does.",
  notes:
    "Both keep for weeks and season many meals, so the per-serving cost is tiny. The chile-toasting and tomato-charring share one hot comal, so nothing extra is fired up.",
  zeroWasteHero: false,
  tags: ["oaxacan", "salsa", "sal-de-gusano", "chile", "condiment", "base"],
  sources: [
    {
      title: "Masienda — Sal de Gusano | Worm Salt",
      url: "https://masienda.com/blogs/learn/worm-salt",
      note: "the toasted-chile, agave-worm and salt grind and how the seasoning is used at table",
    },
  ],
};
