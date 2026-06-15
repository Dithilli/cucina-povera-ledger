import type { Recipe } from "../types";

export const idliSambarSi: Recipe = {
  slug: "idli-sambar-si",
  title: "Idli & Sambar",
  cuisine: "south-indian",
  blurb:
    "Cloud-soft steamed cakes of fermented rice and urad dal, dunked into a hot bowl of tamarind sambar with coconut chutney on the side — the lightest, gentlest dinner in the South Indian repertoire.",
  servings: 4,
  perServing: { calories: 420, protein: 15 },
  estCostPerServing: 0.85,
  roles: ["dinner"],
  ingredients: [
    { item: "idli rice", qty: "2 cups", cost: 0.8 },
    { item: "urad dal", qty: "1 cup", cost: 0.65 },
    { item: "fenugreek seeds", qty: "1/2 tsp", cost: 0.05, spansWeeks: true },
    { item: "toor dal (for sambar)", qty: "3/4 cup", cost: 0.5 },
    { item: "mixed vegetables", qty: "2 cups", cost: 0.7 },
    { item: "tamarind", qty: "1 tbsp, soaked", cost: 0.15, spansWeeks: true },
    { item: "sambar powder", qty: "2 tbsp", cost: 0.3, spansWeeks: true },
    { item: "fresh coconut, grated (for chutney)", qty: "1 cup", cost: 0.5 },
    { item: "mustard seeds", qty: "1 tsp", cost: 0.05, spansWeeks: true },
    { item: "curry leaves", qty: "2 sprigs", cost: 0.15, spansWeeks: true },
    { item: "dried red chilies", qty: "2", cost: 0.05, spansWeeks: true },
    { item: "asafoetida (hing)", qty: "1/4 tsp", cost: 0.05, spansWeeks: true },
    { item: "oil", qty: "2 tbsp", cost: 0.2, spansWeeks: true },
    { item: "salt", qty: "to taste" },
  ],
  method: [
    "Soak idli rice and urad dal (with fenugreek) separately for 6 hours; grind the dal fluffy and the rice slightly coarse, combine, salt, and ferment overnight until the batter doubles and aerates.",
    "Ladle the batter into greased idli molds and steam 10–12 minutes until a tester comes out clean; cool a few minutes before unmolding so they stay intact.",
    "For the sambar, cook the toor dal soft, simmer the vegetables with tamarind extract and sambar powder, fold in the mashed dal, and finish with a tadka of mustard seeds, dried chilies, hing, and curry leaves.",
    "Grind the coconut into a chutney and temper it the same way.",
    "Serve the hot idlis with sambar to dunk and coconut chutney alongside.",
  ],
  modernMove:
    "Grind the urad dal until it's a light, fluffy foam that traps air — that aeration, not the steam, is what makes idlis pillowy; a dense grind steams into hard pucks.",
  notes:
    "Slightly higher urad-dal ratio than dosa batter gives a softer, spongier steam. Pairs with the library sambar and chutney.",
  zeroWasteHero: false,
  tags: ["idli", "sambar", "fermented", "steamed", "south-indian"],
  sources: [
    {
      title: "Dassana Amit — Dassana's Veg Recipes (Tiffin Sambar)",
      url: "https://www.vegrecipesofindia.com/tiffin-sambar-recipe-sambar-recipes/",
      note: "The tiffin sambar made to go with steamed idlis, plus the coconut-chutney accompaniment",
    },
  ],
};
