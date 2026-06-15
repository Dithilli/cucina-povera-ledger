import type { Recipe } from "../types";

export const adobongManok: Recipe = {
  slug: "adobong-manok",
  title: "Adobong Manok (Chicken Adobo)",
  cuisine: "filipino",
  blurb:
    "The Philippines' unofficial national dish — chicken braised in vinegar, soy, garlic, bay, and peppercorns until the sauce turns dark, glossy, and faintly sweet. Vinegar was preservation before refrigeration; the technique survived as the country's defining flavor.",
  servings: 5,
  perServing: { calories: 520, protein: 34 },
  estCostPerServing: 1.65,
  roles: ["dinner"],
  ingredients: [
    { item: "bone-in chicken thighs and drumsticks", qty: "2 1/2 lb", cost: 6.0 },
    { item: "cane or coconut vinegar", qty: "1/2 cup", cost: 0.4, spansWeeks: true },
    { item: "soy sauce (toyo)", qty: "1/3 cup", cost: 0.3, spansWeeks: true },
    { item: "garlic cloves, smashed", qty: "1 whole head", cost: 0.4, spansWeeks: true },
    { item: "dried bay leaves", qty: "3", cost: 0.15, spansWeeks: true },
    { item: "whole black peppercorns", qty: "1 tsp", cost: 0.1, spansWeeks: true },
    { item: "water", qty: "1 cup" },
    { item: "neutral oil", qty: "1 tbsp", cost: 0.1, spansWeeks: true },
    { item: "brown sugar (optional)", qty: "1 tsp", cost: 0.05, spansWeeks: true },
    { item: "steamed rice, to serve", qty: "to serve" },
  ],
  method: [
    "Marinate the chicken with the soy, smashed garlic, bay, and peppercorns for 30 minutes to overnight. The marinade doubles as the braising liquid, so nothing is wasted.",
    "Lift the chicken out (reserve the marinade) and pat dry. Brown the pieces in the oil in a heavy pot until the skin takes color, then set aside — searing builds depth the braise can't.",
    "Pour in the reserved marinade, the vinegar, and the water. Crucially, let it come to a boil and bubble a couple of minutes BEFORE stirring — cooking off the raw, sharp bite of the vinegar so it mellows into the sauce.",
    "Return the chicken, cover, and simmer gently 25 to 30 minutes until tender, turning once.",
    "Uncover, add the optional sugar, and reduce the sauce hard until it clings to the meat, dark and glossy with a slick of separated oil. Spoon over rice.",
  ],
  modernMove:
    "Boiling the vinegar untouched before stirring is the make-or-break step: it burns off the harsh acetone edge and rounds the acid into a deep, savory tang. Reducing at the end glazes the chicken in its own braise.",
  notes:
    "Adobo keeps and improves — the acid and salt mean it sits happily for days and tastes better on day two. Stretches a modest amount of chicken across several rice-heavy meals.",
  zeroWasteHero: false,
  tags: ["dinner", "chicken", "adobo", "vinegar-braise", "make-ahead", "one-pot"],
  sources: [
    { title: "Lalaine Manalo — Kawaling Pinoy", url: "https://www.kawalingpinoy.com/chicken-adobo/", note: "Chicken adobo braised in vinegar, soy, and garlic" },
    { title: "Vanjo Merano — Panlasang Pinoy", url: "https://panlasangpinoy.com/easy-chicken-adobo-recipe-knr-cc/", note: "Boiling the vinegar before stirring to mellow the acid" },
  ],
};
