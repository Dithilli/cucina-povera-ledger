import type { Recipe } from "../types";

export const migasDePao: Recipe = {
  slug: "migas-de-pao",
  title: "Migas de Pão",
  cuisine: "portuguese",
  blurb:
    "Yesterday's bread fried in garlic oil and worked over the heat until it binds into a soft, golden cake you can slice — the Portuguese way to make a dinner out of crusts.",
  servings: 4,
  perServing: { calories: 560, protein: 14 },
  estCostPerServing: 0.65,
  roles: ["dinner", "side"],
  ingredients: [
    {
      item: "stale bread (broa or country loaf), torn small and soaked briefly in warm water, then squeezed",
      qty: "12 oz",
      cost: 0.75,
    },
    {
      item: "garlic cloves, sliced",
      qty: "5",
      cost: 0.25,
      spansWeeks: true,
    },
    {
      item: "olive oil (plus a little lard if you have it)",
      qty: "5 tbsp",
      cost: 0.6,
      spansWeeks: true,
    },
    {
      item: "sweet paprika (pimentão-doce)",
      qty: "1 tsp",
      cost: 0.1,
      spansWeeks: true,
    },
    {
      item: "greens, optional — wilted cabbage or kale to fold through",
      qty: "1 handful",
      cost: 0.3,
    },
    { item: "salt", qty: "to taste" },
  ],
  method: [
    "Warm the olive oil in a wide pan and fry the sliced garlic gently until pale gold and fragrant; stir in the paprika off the direct heat so it doesn't scorch.",
    "Add the soaked, squeezed bread and a splash of warm water. Season with salt.",
    "Now work it: keep folding and pressing the bread against the pan with a wooden spoon over medium heat. It will go from crumbs to a sticky mass to a single soft cake that pulls away from the sides — this takes 10–15 minutes and is the whole technique.",
    "If using greens, fold them in once wilted. Press the migas into a rounded loaf shape, brown the underside, then flip onto a plate so the crisp face is up.",
    "Slice in wedges and serve hot, with a little extra olive oil poured over.",
  ],
  modernMove:
    "Soaking and squeezing the bread before frying, then patiently pressing it against the hot pan, is what turns loose crumbs into a sliceable cake with a crisp crust and a pillowy centre — texture from nothing but stale bread and time.",
  notes:
    "Pure leftover-bread cookery: dry crusts are the point, not a compromise. Traditionally served alongside fried pork or sardines, but stands alone as a frugal dinner.",
  zeroWasteHero: true,
  tags: ["bread", "garlic", "paprika", "fried", "stale-bread", "alentejo"],
  sources: [
    {
      title: "Easy Portuguese Recipes — Migas à Alentejana",
      url: "https://www.easyportugueserecipes.com/migas-a-alentejana/",
      note: "Confirms the Alentejo technique of frying leftover bread in garlic and olive oil and working it into a pressed cake.",
    },
  ],
};
