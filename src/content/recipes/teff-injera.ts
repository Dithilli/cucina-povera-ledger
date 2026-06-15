import type { Recipe } from "../types";

export const teffInjera: Recipe = {
  slug: "teff-injera",
  title: "Teff Injera",
  cuisine: "ethiopian",
  blurb:
    "The sour, lacy, spongy fermented teff flatbread that is the plate, the utensil, and the bread of the Horn of Africa all at once. Master the ferment and you've learned the cuisine.",
  servings: 8,
  perServing: { calories: 230, protein: 8 },
  estCostPerServing: 0.5,
  roles: ["base"],
  ingredients: [
    { item: "ivory or brown teff flour", qty: "3 cups", cost: 4.0 },
    { item: "water", qty: "about 4 cups, plus more" },
    { item: "salt", qty: "1 tsp", spansWeeks: true },
    {
      item: "starter (a spoon of a previous batch's ferment), optional",
      qty: "2 tbsp",
    },
  ],
  method: [
    "Whisk the teff flour with about 3 1/2 cups water (and the starter if you have one) into a smooth, pourable batter. Cover loosely and leave at warm room temperature.",
    "Ferment 2–4 days, until the batter smells sour and a layer of clear liquid (the 'ersho') rises to the top and bubbles work through it. The first batch is slowest; save a little to seed the next.",
    "Pour off most of the clear ersho liquid. Stir the batter, then whisk in enough fresh water to bring it back to a thin, pourable, crepe-like consistency. Stir in the salt.",
    "Some cooks cook out a small portion of batter into a paste ('absit') with hot water and stir it back in for a softer crumb — optional but traditional.",
    "Heat a wide non-stick or clay pan (a 'mitad') over medium. Pour the batter in a thin spiral from the outside in, covering the surface. Do NOT spread it — it should self-level.",
    "Cover immediately and steam-cook without flipping, 2–3 minutes, until the top is set, dry, and covered in 'eyes' (tiny holes) and the edges lift. Slide off and cool on a cloth, never stacked while hot.",
  ],
  modernMove:
    "Treat the batter like a sourdough you keep alive — a reserved spoon of ersho-rich ferment is your starter, so each batch leavens faster and sours more reliably. Control warmth (75–85°F) the way a baker proofs dough, and the eyes come every time.",
  notes:
    "Day-old injera is never waste — torn and revived in berbere and niter kibbeh it becomes fitfit/firfir. A 100% teff batter is gluten-free; many home cooks cut it with a little wheat or barley flour for easier handling.",
  tags: ["base", "teff", "injera", "fermented", "flatbread"],
};
