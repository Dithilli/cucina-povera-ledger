import type { Recipe } from "../types";

export const chermoulaMa: Recipe = {
  slug: "chermoula-ma",
  title: "Chermoula",
  cuisine: "moroccan",
  blurb:
    "The green soul of the Moroccan coast — cilantro and parsley pounded with garlic, cumin, paprika, and lemon into a loose, brick-red herb paste that marinates the week's fish, stuffs the sardines, and slicks the baked vegetables.",
  servings: 12,
  perServing: { calories: 60, protein: 1 },
  estCostPerServing: 0.12,
  roles: ["base"],
  ingredients: [
    { item: "cilantro, packed", qty: "1 large bunch", cost: 0.5 },
    { item: "flat-leaf parsley, packed", qty: "1/2 bunch", cost: 0.3 },
    { item: "garlic", qty: "4 cloves", cost: 0.1, spansWeeks: true },
    { item: "ground cumin", qty: "1 tbsp", cost: 0.1, spansWeeks: true },
    { item: "sweet paprika", qty: "1 tbsp", cost: 0.1, spansWeeks: true },
    { item: "lemon, juiced", qty: "1", cost: 0.3 },
    { item: "olive oil", qty: "1/3 cup", cost: 0.4, spansWeeks: true },
    { item: "salt and a pinch of cayenne", qty: "to taste", cost: 0.03, spansWeeks: true },
  ],
  method: [
    "Finely chop the cilantro and parsley, stems and all, or pulse them in a processor.",
    "Pound or blend in the garlic, cumin, paprika, salt, and cayenne until you have a coarse green paste.",
    "Work in the lemon juice and olive oil until it loosens to a spoonable, brick-red sauce — still textured, not smooth.",
    "Taste and adjust salt and acid; it should be punchy, bright, and a little earthy.",
    "Store in a jar under a film of oil; it keeps a week refrigerated.",
  ],
  modernMove:
    "Chopping the herb stems in rather than discarding them packs in more flavor and zero waste, and keeping the paste coarse rather than blending it smooth gives the marinade grip so it clings to fish instead of sliding off.",
  notes:
    "The constant base of the coastal kitchen — it marinates fish, stuffs sardines, dresses baked vegetables, and seasons potatoes all week. Not a dinner on its own.",
  zeroWasteHero: false,
  tags: ["chermoula", "marinade", "base", "herb-sauce", "moroccan"],
  sources: [
    {
      title: "Taste of Maroc — Moroccan Chermoula Recipe (Marinade with Herbs and Spices)",
      url: "https://tasteofmaroc.com/moroccan-chermoula-recipe/",
      note: "The classic cilantro-parsley-garlic-cumin-paprika-lemon herb paste used to marinate fish across Morocco.",
    },
  ],
};
