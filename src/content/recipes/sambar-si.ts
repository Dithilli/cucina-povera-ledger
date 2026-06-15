import type { Recipe } from "../types";

export const sambarSi: Recipe = {
  slug: "sambar-si",
  title: "Sambar",
  cuisine: "south-indian",
  blurb:
    "The South Indian house pot — soft toor dal simmered with vegetables, soured with tamarind and roused with sambar powder, ladled hot over steamed rice.",
  servings: 4,
  perServing: { calories: 430, protein: 16 },
  estCostPerServing: 0.9,
  roles: ["dinner"],
  ingredients: [
    { item: "toor dal (split pigeon peas)", qty: "1 cup", cost: 0.7 },
    { item: "steamed rice, to serve", qty: "1 1/2 cups raw", cost: 0.6 },
    { item: "mixed vegetables (drumstick, pumpkin, carrot, okra)", qty: "3 cups", cost: 1.0 },
    { item: "shallots or onion, chopped", qty: "1 cup", cost: 0.3 },
    { item: "tomato, chopped", qty: "1", cost: 0.3 },
    { item: "tamarind", qty: "1 tbsp, soaked", cost: 0.15, spansWeeks: true },
    { item: "sambar powder", qty: "2 tbsp", cost: 0.3, spansWeeks: true },
    { item: "turmeric", qty: "1/2 tsp", cost: 0.05, spansWeeks: true },
    { item: "mustard seeds", qty: "1 tsp", cost: 0.05, spansWeeks: true },
    { item: "urad dal", qty: "1 tsp", cost: 0.05, spansWeeks: true },
    { item: "dried red chilies", qty: "2", cost: 0.05, spansWeeks: true },
    { item: "curry leaves", qty: "1 sprig", cost: 0.1, spansWeeks: true },
    { item: "asafoetida (hing)", qty: "1/4 tsp", cost: 0.05, spansWeeks: true },
    { item: "oil or ghee for tempering", qty: "2 tbsp", cost: 0.2, spansWeeks: true },
    { item: "salt", qty: "to taste" },
  ],
  method: [
    "Pressure-cook the toor dal with turmeric and a little water until completely soft, then whisk smooth.",
    "Simmer the vegetables and shallots in salted water until tender. Stir in the tamarind extract, sambar powder, tomato, and the mashed dal, and let it bubble together for 10 minutes so the souring and the lentil thicken into one body.",
    "Make the tadka: heat oil or ghee, crackle the mustard seeds, add urad dal, dried chilies, hing, and a fistful of curry leaves; pour the sizzling tempering over the pot.",
    "Cover off the heat for a few minutes to let the aroma soak in, then serve hot over steamed rice.",
  ],
  modernMove:
    "Tempering the curry leaves and hing in hot fat at the very end — not the start — keeps their aroma alive instead of boiling it away, the single move that separates a lively sambar from a flat one.",
  notes:
    "Drumstick (moringa pods) is the classic vegetable, but any firm seasonal veg works. Leftover sambar deepens overnight.",
  zeroWasteHero: true,
  tags: ["sambar", "toor-dal", "tamarind", "rice", "south-indian"],
  sources: [
    {
      title: "Dassana Amit — Dassana's Veg Recipes",
      url: "https://www.vegrecipesofindia.com/sambhar-recipe-a-method-made-easy/",
      note: "Toor dal base, tamarind souring, and the mustard-curry-leaf tempering finished at the end",
    },
  ],
};
