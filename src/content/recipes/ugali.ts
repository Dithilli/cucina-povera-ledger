import type { Recipe } from "../types";

export const ugali: Recipe = {
  slug: "ugali",
  title: "Ugali",
  cuisine: "east-african",
  blurb:
    "Stiff maize-meal pap turned and pounded against the pot until it pulls clean — the daily plate-mate you tear with your fingers to scoop up every last drop of stew and greens.",
  servings: 4,
  perServing: { calories: 360, protein: 8 },
  estCostPerServing: 0.25,
  roles: ["base", "side"],
  ingredients: [
    { item: "white maize meal (unga wa mahindi)", qty: "2 cups", cost: 0.6 },
    { item: "water", qty: "4 cups", cost: 0 },
    { item: "salt", qty: "pinch (optional)", spansWeeks: true },
  ],
  method: [
    "Bring the water to a rolling boil in a heavy pot, with a pinch of salt if you like.",
    "Rain in about a third of the maize meal while stirring hard with a sturdy wooden spoon (mwiko) to keep it lump-free; let it thicken into a loose porridge.",
    "Add the rest of the meal a handful at a time, mashing any lumps against the side of the pot.",
    "Now turn and fold the mass over itself, pressing it down and pounding for 2–3 minutes until it stiffens, pulls away from the pot, and the raw-flour smell is gone.",
    "Wet a bowl, pack the ugali into it, then invert onto a plate to serve as a smooth dome; cut wedges to share.",
  ],
  modernMove:
    "Cook it stiffer than feels right and keep working it after it firms — the extra kneading against the hot pot gelatinizes the starch fully, so it slices clean and never tastes pasty or raw.",
  notes:
    "Salt is traditionally left out because ugali is the neutral canvas for a well-seasoned stew; tear off a piece, dimple it with your thumb, and use it as an edible spoon.",
  zeroWasteHero: false,
  tags: ["maize", "ugali", "base", "east-african"],
  sources: [
    {
      title: "Michelle Blackwood — Healthier Steps",
      url: "https://healthiersteps.com/ugali-recipe/",
      note: "Two-ingredient method: boil water, rain in maize meal, then turn and pound to a stiff, clean-pulling dough.",
    },
  ],
};
