import type { Recipe } from "../types";

export const nuocCham: Recipe = {
  slug: "nuoc-cham",
  title: "Nước Chấm (Fish-Sauce Dipping Sauce)",
  cuisine: "vietnamese",
  blurb:
    "The everyday Vietnamese dipping sauce — fish sauce, lime, sugar, and water balanced into a sweet-sour-salty liquid, lifted with raw garlic and chili. A spoonful turns plain rice and a frugal braise into a full plate; the diner builds the last layer at the table.",
  servings: 8,
  perServing: { calories: 25, protein: 1 },
  estCostPerServing: 0.12,
  roles: ["base", "side"],
  ingredients: [
    { item: "fish sauce (nước mắm)", qty: "3 tbsp", cost: 0.45, spansWeeks: true },
    { item: "warm water", qty: "6 tbsp" },
    { item: "sugar", qty: "2 tbsp", cost: 0.1, spansWeeks: true },
    { item: "lime, juiced (or rice vinegar)", qty: "1", cost: 0.3 },
    { item: "garlic cloves, finely minced", qty: "2", cost: 0.1, spansWeeks: true },
    { item: "bird's-eye chili, minced", qty: "1 to 2", cost: 0.15, spansWeeks: true },
  ],
  method: [
    "Dissolve the sugar in the warm water — warm water melts it cleanly so the sauce isn't gritty. This water-forward dilution is what makes nước chấm a dipping sauce, not straight fish sauce: it should taste light and drinkable.",
    "Stir in the fish sauce and lime juice. Taste and balance — the classic ratio is roughly 1 part fish sauce : 1 part lime : 1 part sugar : 2 parts water, but adjust to your fish sauce's saltiness until salty, sour, and sweet are all present and none dominates.",
    "Add the minced garlic and chili last and let them float — chopped fine, they bob on top instead of sinking, the sign of a well-made bowl. Let it sit 10 minutes so the garlic and chili steep.",
    "Set in a saucer at the table to spoon over rice, drizzle on grilled meat and fish, or dip spring rolls and vegetables.",
  ],
  modernMove:
    "Balancing fish sauce, lime, sugar, and water against each other — tasting as you go rather than measuring blindly — is the core Vietnamese seasoning skill; get this four-way balance and the rest of the cuisine opens up.",
  notes:
    "For a thicker dressing over rice noodles (bún), cut the water back and add a spoon of pickled carrot. Keeps several days refrigerated, though the raw garlic sharpens over time.",
  tags: ["base", "side", "condiment", "fish-sauce", "dipping-sauce", "no-cook"],
  sources: [
    {
      title: "Andrea Nguyen — Basic Vietnamese Dipping Sauce (Nuoc Cham), Viet World Kitchen",
      url: "https://www.vietworldkitchen.com/blog/2008/11/basic-vietnamese-dipping-sauce-nuoc-cham.html",
      note: "Balancing fish sauce, lime, sugar, and water to taste with garlic and chili",
    },
    {
      title: "Hungry Huy — Vietnamese Dipping Fish Sauce (Nước Chấm)",
      url: "https://www.hungryhuy.com/vietnamese-dipping-fish-sauce-recipe-nuoc-cham-nuoc-mam-cham/",
      note: "Dissolving sugar in warm water first; floating the minced garlic and chili",
    },
  ],
};
