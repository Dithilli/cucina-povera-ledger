import type { Recipe } from "../types";

export const migas: Recipe = {
  slug: "migas",
  title: "Migas",
  cuisine: "mexican",
  blurb:
    'Day-old tortillas torn up, crisped in a little fat, and scrambled into eggs — the name means "crumbs," and the whole dish is a rescue of yesterday\'s tortillas before they hit the bin.',
  servings: 2,
  perServing: { calories: 380, protein: 18 },
  estCostPerServing: 0.7,
  roles: ["breakfast", "dinner"],
  ingredients: [
    { item: "eggs", qty: "4", cost: 1.0 },
    { item: "day-old corn tortillas, torn", qty: "3–4", cost: 0.3 },
    { item: "tomato, diced", qty: "1", cost: 0.4 },
    { item: "white onion, diced", qty: "1/4", cost: 0.15 },
    { item: "serrano or jalapeño, minced", qty: "1", cost: 0.2 },
    { item: "oil or lard", qty: "1–2 tbsp", cost: 0.15, spansWeeks: true },
    { item: "salt", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Leave the tortillas out overnight so they dry; torn dry, they crisp instead of going soggy.",
    "Fry the torn tortillas in hot fat until lightly golden and crunchy at the edges.",
    "Add onion and chile to soften, then the tomato, cooking until it loses its raw edge.",
    "Pour in the beaten, salted eggs and fold gently until just set — the tortilla pieces stay a little chewy inside the soft eggs.",
    "Serve with beans, salsa, and more warm tortillas.",
  ],
  modernMove:
    "Dry the tortillas overnight and fry them hard before anything else goes in — that one step is what separates crisp migas from a soggy scramble.",
  notes: "Stale totopos or the broken bits at the bottom of the chip bag work just as well as torn tortillas.",
  zeroWasteHero: true,
  tags: ["eggs", "tortilla", "use-up", "breakfast", "dinner", "quick"],
  sources: [
    {
      title: "Mely Martínez — Mexico in My Kitchen, Migas",
      url: "https://www.mexicoinmykitchen.com/migas-recipe/",
      note: "drying day-old tortillas so they crisp; one-skillet method with tomato, onion, chile",
    },
    {
      title: "The Kitchn — The Easiest Migas Recipe",
      url: "https://www.thekitchn.com/migas-recipe-mexican-breakfast-scrambled-eggs-22971223",
      note: "frying the tortilla pieces crisp before folding into the eggs",
    },
  ],
};
