import type { Recipe } from "../types";

export const seeniSambol: Recipe = {
  slug: "seeni-sambol",
  title: "Seeni Sambol",
  cuisine: "sri-lankan",
  blurb:
    "Onions cooked low and slow until jammy, then layered with chili, cinnamon, and tamarind and tipped sweet with a spoon of sugar — the dark, sticky relish that turns a bowl of rice into a meal.",
  servings: 6,
  perServing: { calories: 175, protein: 4 },
  estCostPerServing: 0.6,
  roles: ["dinner"],
  ingredients: [
    { item: "red onions, thinly sliced", qty: "5 large (about 2 lb)", cost: 1.6 },
    { item: "Maldive fish flakes", qty: "2 tbsp", cost: 0.3, spansWeeks: true },
    { item: "chili powder", qty: "1–2 tbsp", cost: 0.15, spansWeeks: true },
    { item: "cinnamon stick", qty: "1 piece", cost: 0.1, spansWeeks: true },
    { item: "pandan (rampe) and curry leaves", qty: "1 sprig each", cost: 0.2, spansWeeks: true },
    { item: "tamarind paste", qty: "1 tbsp", cost: 0.15, spansWeeks: true },
    { item: "sugar or jaggery", qty: "1–2 tbsp", cost: 0.1, spansWeeks: true },
    { item: "oil", qty: "3 tbsp", cost: 0.15, spansWeeks: true },
    { item: "salt", qty: "to taste", cost: 0.02, spansWeeks: true },
    { item: "steamed rice, to serve", qty: "to serve" },
  ],
  method: [
    "Heat the oil and drop in the cinnamon, pandan, and curry leaves until they crackle and perfume the oil.",
    "Add the sliced onions and Maldive fish with a pinch of salt. Cook over medium-low heat, stirring often, for 20 to 30 minutes — be patient — until the onions collapse, darken, and turn jammy and sweet.",
    "Stir in the chili powder and cook a couple of minutes so it loses its raw edge and stains the onions deep red.",
    "Add the tamarind and sugar (jaggery is best) and keep cooking until the mixture is thick, glossy, and almost sticky, with no loose liquid left.",
    "Taste for the sweet–sour–salty–hot balance and adjust. Serve a generous spoonful with rice, or stuff it into bread and hoppers.",
  ],
  modernMove:
    "The long, low cook is non-negotiable — rushing the onions on high heat browns the edges before the centers go jammy. Caramelization, not frying, is what makes seeni sambol.",
  notes:
    "Cooked down with extra oil and tamarind it keeps a week or more in the fridge and only deepens — a true pantry relish. Jaggery over white sugar gives a rounder, more authentic sweetness.",
  zeroWasteHero: false,
  tags: ["sri-lankan", "sambol", "onion", "relish", "sweet-spicy", "make-ahead", "side"],
  sources: [
    {
      title: "Hungry Lankan — Sri Lankan Seeni Sambol",
      url: "https://www.hungrylankan.com/recipes/sri-lankan-seeni-sambol/",
      note: "Slow-caramelizing the onions and balancing tamarind, jaggery, and chili",
    },
  ],
};
