import type { Recipe } from "../types";

export const rasamRiceSi: Recipe = {
  slug: "rasam-rice-si",
  title: "Rasam Sadam",
  cuisine: "south-indian",
  blurb:
    "A peppery tamarind-and-tomato broth, fragrant with crushed cumin and garlic, poured steaming over rice with a spoonful of ghee — the South Indian cure for a cold and an empty wallet alike.",
  servings: 4,
  perServing: { calories: 390, protein: 11 },
  estCostPerServing: 0.6,
  roles: ["dinner"],
  ingredients: [
    { item: "steamed rice", qty: "1 1/2 cups raw", cost: 0.6 },
    { item: "toor dal, cooked and mashed", qty: "1/3 cup", cost: 0.25 },
    { item: "tomatoes, chopped", qty: "2", cost: 0.5 },
    { item: "tamarind", qty: "1 tbsp, soaked", cost: 0.15, spansWeeks: true },
    { item: "black peppercorns", qty: "1 tsp", cost: 0.1, spansWeeks: true },
    { item: "cumin seeds", qty: "1 tsp", cost: 0.05, spansWeeks: true },
    { item: "garlic cloves, crushed", qty: "3", cost: 0.1, spansWeeks: true },
    { item: "turmeric", qty: "1/4 tsp", cost: 0.05, spansWeeks: true },
    { item: "mustard seeds", qty: "1/2 tsp", cost: 0.05, spansWeeks: true },
    { item: "dried red chili", qty: "1", cost: 0.05, spansWeeks: true },
    { item: "curry leaves", qty: "1 sprig", cost: 0.1, spansWeeks: true },
    { item: "asafoetida (hing)", qty: "pinch", cost: 0.05, spansWeeks: true },
    { item: "cilantro to finish", qty: "small handful", cost: 0.15 },
    { item: "ghee", qty: "1 tbsp", cost: 0.2, spansWeeks: true },
    { item: "salt", qty: "to taste" },
  ],
  method: [
    "Coarsely pound the peppercorns, cumin, and garlic in a mortar — this fresh rasam masala is the soul of the dish.",
    "Simmer the tamarind extract, tomatoes, turmeric, hing, and the pounded spices with salt and a cup of water. Whisk in the mashed dal and enough water to loosen it into a thin, drinkable broth, and bring it just to a froth — never a hard boil, which dulls the pepper.",
    "Temper mustard seeds, dried chili, and curry leaves in ghee and pour them in; finish with cilantro.",
    "Mound rice in a bowl and ladle the hot rasam over it, with a last knob of ghee on top.",
  ],
  modernMove:
    "Pull the rasam off the heat the instant it foams at the rim — letting it boil hard scorches the aromatics and kills the bright, sinus-clearing pepper note you're after.",
  notes: "Naturally vegan if you temper in oil and skip the ghee.",
  zeroWasteHero: false,
  tags: ["rasam", "tamarind", "pepper", "rice", "south-indian"],
  sources: [
    {
      title: "Hebbar's Kitchen — Rasam Rice (Rasam Sadham)",
      url: "https://hebbarskitchen.com/rasam-rice-recipe-rasam-sadham-rasam/",
      note: "Tamarind-tomato broth with pounded pepper-cumin, mashed dal, and tempering poured over rice",
    },
  ],
};
