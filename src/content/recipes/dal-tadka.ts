import type { Recipe } from "../types";

export const dalTadka: Recipe = {
  slug: "dal-tadka",
  title: "Dal Tadka",
  cuisine: "north-indian",
  blurb:
    "The benchmark everyday dal — toor (arhar) lentils simmered soft, then hit with a final tadka of ghee, cumin, garlic, and chiles that hisses as it hits the pot. Cheap pulses turned into a dinner you'd order out.",
  servings: 4,
  perServing: { calories: 360, protein: 18 },
  estCostPerServing: 0.6,
  roles: ["dinner"],
  ingredients: [
    { item: "toor / arhar dal (split pigeon peas)", qty: "1 cup", cost: 0.9 },
    { item: "onion, finely chopped", qty: "1 small", cost: 0.3 },
    { item: "tomato, chopped", qty: "1", cost: 0.4 },
    { item: "ginger-garlic paste", qty: "1 tbsp", cost: 0.1, spansWeeks: true },
    { item: "turmeric", qty: "1/2 tsp", cost: 0.1, spansWeeks: true },
    { item: "ghee (for the tadka)", qty: "2 tbsp", cost: 0.26, spansWeeks: true },
    { item: "cumin seed", qty: "1 tsp", cost: 0.1, spansWeeks: true },
    { item: "dried red chiles + garlic cloves, sliced", qty: "2 / 3", cost: 0.2, spansWeeks: true },
    { item: "asafoetida (hing), pinch; garam masala", qty: "1/4 tsp", cost: 0.2, spansWeeks: true },
    { item: "salt; cilantro to finish", qty: "to taste", cost: 0.2 },
  ],
  method: [
    "Rinse the toor dal well. Pressure-cook or simmer it with turmeric, a little salt, and ~3 cups water until completely soft and broken down — 20 min in a pressure cooker, 40–50 in a pot. Whisk to a loose, creamy purée, loosening with hot water.",
    "In a separate pan, cook the onion in a little ghee until golden, add the ginger-garlic paste and cook off its rawness, then the tomato; cook to a soft masala. Stir this into the dal and simmer 5 minutes to marry. Add garam masala.",
    "Now the tadka: heat the 2 tbsp ghee in a small pan until shimmering. Add the cumin and let it crackle, then the sliced garlic and dried chiles, and a pinch of hing. Fry just until the garlic is golden and the chiles darken — seconds, not minutes.",
    "Pour the sizzling tadka straight over the pot of dal — it should hiss and bloom. Stir half in, leave the rest on top. Finish with cilantro and serve with rice or roti.",
  ],
  modernMove:
    "Two-stage seasoning is the secret: the dal is built once with an onion-tomato masala, then finished a second time with a fresh ghee tadka poured over at the table. That hot-fat bloom of cumin and garlic lands on top of the dish, not cooked out of it, so the aroma hits you before the spoon does.",
  notes:
    "Hing (asafoetida) stands in for a long onion fry and makes the lentils easier to digest — a classic frugal flavor shortcut. A cup of dry dal feeds four for well under a dollar a head.",
  tags: ["dinner", "dal", "toor-dal", "lentils", "tadka", "legumes"],
  sources: [
    {
      title: "Dassana Amit — Dassana's Veg Recipes",
      url: "https://www.vegrecipesofindia.com/restaurant-style-dal-tadka/",
      note: "Toor dal finished with a fresh ghee tadka of cumin, garlic and dried chiles",
    },
  ],
};
