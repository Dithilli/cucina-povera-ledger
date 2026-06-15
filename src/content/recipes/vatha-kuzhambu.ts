import type { Recipe } from "../types";

export const vathaKuzhambu: Recipe = {
  slug: "vatha-kuzhambu",
  title: "Vatha Kuzhambu",
  cuisine: "south-indian",
  blurb:
    "A thick, dark, no-dal tamarind gravy built on sun-dried turkey berries fried crisp in sesame oil — the pantry stew of the Tamil kitchen, fierce and sour, meant to be spooned thin over a mountain of plain rice.",
  servings: 4,
  perServing: { calories: 250, protein: 5 },
  estCostPerServing: 0.6,
  roles: ["dinner"],
  ingredients: [
    { item: "sundakkai vathal (sun-dried turkey berries)", qty: "2 tbsp", cost: 0.4, spansWeeks: true },
    { item: "tamarind, soaked for thick pulp", qty: "lime-sized ball", cost: 0.3, spansWeeks: true },
    { item: "sambar powder", qty: "2 tbsp", cost: 0.2, spansWeeks: true },
    { item: "shallots, peeled whole", qty: "8", cost: 0.4 },
    { item: "garlic cloves, whole", qty: "6", cost: 0.2, spansWeeks: true },
    { item: "mustard seeds", qty: "1 tsp", cost: 0.05, spansWeeks: true },
    { item: "fenugreek seeds", qty: "1/2 tsp", cost: 0.05, spansWeeks: true },
    { item: "toor dal (for tempering crunch)", qty: "1 tsp", cost: 0.05, spansWeeks: true },
    { item: "asafoetida (hing)", qty: "1/4 tsp", cost: 0.05, spansWeeks: true },
    { item: "turmeric", qty: "1/4 tsp", cost: 0.05, spansWeeks: true },
    { item: "jaggery", qty: "1 tsp", cost: 0.1, spansWeeks: true },
    { item: "sesame oil", qty: "3 tbsp", cost: 0.4, spansWeeks: true },
    { item: "curry leaves", qty: "2 sprigs", cost: 0.1, spansWeeks: true },
    { item: "salt", qty: "to taste" },
  ],
  method: [
    "Heat the sesame oil generously and fry the sundakkai vathal on a low flame until the berries puff and darken — they should smell toasty, not burnt. Lift them out and keep aside.",
    "In the same oil, pop the mustard, fenugreek, and toor dal, then add asafoetida, curry leaves, whole shallots, and garlic. Fry until the shallots are soft and sweet.",
    "Stir in the sambar powder and turmeric and let it sizzle in the oil for a few seconds so it loses its raw smell.",
    "Pour in the thick tamarind extract with salt and a good amount of water, return the fried vathal, and simmer hard.",
    "Cook it down patiently — 15–20 minutes — until the gravy thickens, darkens, and the sesame oil floats back to the top. Stir in the jaggery to balance the sourness and serve thin over hot rice with a dollop of ghee.",
  ],
  modernMove:
    "The long reduction until oil separates is what concentrates a watery sour broth into a glossy, keeping kuzhambu — and the pinch of jaggery at the end is the quiet hinge that turns harsh tamarind into something rounded.",
  notes: "No dal goes in — this is a 'kara' (hot) kuzhambu, deliberately lean. Swap sundakkai for manathakkali or dried okra vathal and it's the same dish.",
  zeroWasteHero: false,
  tags: ["tamarind", "tamil-nadu", "vathal", "gravy", "keeps", "south-indian"],
  sources: [
    {
      title: "Suguna Vinodh — Kannamma Cooks",
      url: "https://www.kannammacooks.com/sundakkai-vatha-kuzhambu/",
      note: "Tamil hotel-style sundakkai vatha kuzhambu — vathal fried in sesame oil, no-dal reduced tamarind gravy",
    },
  ],
};
