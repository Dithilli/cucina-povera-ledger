import type { Recipe } from "../types";

export const kootuSi: Recipe = {
  slug: "kootu-si",
  title: "Kadalai Paruppu Kootu",
  cuisine: "south-indian",
  blurb:
    "Soft-cooked chana dal and a humble vegetable simmered together and bound with a ground paste of roasted coconut, cumin, and red chili — the gentle lentil-and-greens mash that turns rice into a meal.",
  servings: 4,
  perServing: { calories: 380, protein: 16 },
  estCostPerServing: 0.95,
  roles: ["dinner"],
  ingredients: [
    { item: "chana dal (kadalai paruppu)", qty: "3/4 cup", cost: 0.7 },
    { item: "ash gourd or chayote, cubed (or cabbage)", qty: "3 cups", cost: 1.0 },
    { item: "grated coconut", qty: "1/3 cup", cost: 0.5 },
    { item: "cumin seeds", qty: "1 tsp", cost: 0.05, spansWeeks: true },
    { item: "dried red chilies", qty: "2", cost: 0.1, spansWeeks: true },
    { item: "mustard seeds", qty: "1 tsp", cost: 0.05, spansWeeks: true },
    { item: "curry leaves", qty: "1 sprig", cost: 0.15, spansWeeks: true },
    { item: "turmeric, asafoetida, salt", qty: "to taste", cost: 0.15, spansWeeks: true },
    { item: "oil", qty: "1 tbsp", cost: 0.1, spansWeeks: true },
  ],
  method: [
    "Pressure-cook the chana dal with turmeric and water until very soft (about 4 whistles), so it half-collapses into a creamy body.",
    "Separately simmer the cubed vegetable with a little salt and water until just tender.",
    "Grind the grated coconut, cumin, and red chilies with a splash of water to a smooth paste.",
    "Combine the cooked dal, vegetable, and coconut paste; add salt and enough water to loosen to a thick spoonable kootu, and simmer 4–6 minutes to marry.",
    "Finish with a tadka of mustard seeds, asafoetida, and curry leaves crackled in oil, poured over the top.",
  ],
  modernMove:
    "Cooking the chana dal until it half-dissolves does the thickening — the ground coconut-cumin paste then bodies it further, so the kootu sets to a creamy mash without any flour or dairy.",
  notes:
    "Almost any vegetable works — ash gourd, chayote, cabbage, snake gourd, or a fistful of greens. The dal-to-veg ratio is what makes it a satisfying protein course rather than a side.",
  zeroWasteHero: true,
  tags: ["lentils", "legumes", "south-indian", "kootu", "coconut"],
  sources: [
    {
      title: "Kalyani — Sizzling Tastebuds (Kadalai Paruppu Pushanikai Kootu)",
      url: "https://www.sizzlingtastebuds.com/kadalai-paruppu-pushanikai-kootu/",
      note: "Confirmed the chana-dal-plus-vegetable kootu structure with a ground coconut-cumin-chili paste and a final mustard tadka.",
    },
  ],
};
