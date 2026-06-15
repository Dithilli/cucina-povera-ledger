import type { Recipe } from "../types";

export const moongDal: Recipe = {
  slug: "moong-dal",
  title: "Moong Dal",
  cuisine: "north-indian",
  blurb:
    "The gentle, golden everyday dal — split yellow mung lentils that cook fast and digest easy, finished with a bright cumin-and-chile tadka. The light, comforting end of the dal spectrum.",
  servings: 4,
  perServing: { calories: 330, protein: 18 },
  estCostPerServing: 0.55,
  roles: ["dinner"],
  ingredients: [
    { item: "split yellow moong dal (dhuli moong)", qty: "1 cup", cost: 0.85 },
    { item: "turmeric", qty: "1/2 tsp", cost: 0.1, spansWeeks: true },
    { item: "tomato, chopped", qty: "1", cost: 0.4 },
    { item: "ginger-garlic paste", qty: "1 tbsp", cost: 0.1, spansWeeks: true },
    { item: "ghee", qty: "2 tbsp", cost: 0.26, spansWeeks: true },
    { item: "cumin seed", qty: "1 tsp", cost: 0.1, spansWeeks: true },
    { item: "dried red chile + green chile, slit", qty: "1 / 1", cost: 0.2, spansWeeks: true },
    { item: "asafoetida (hing), pinch", qty: "1/4 tsp", cost: 0.1, spansWeeks: true },
    { item: "salt; lemon and cilantro to finish", qty: "to taste", cost: 0.3 },
  ],
  method: [
    "Rinse the moong dal until the water runs clear. Simmer with turmeric, the ginger-garlic paste, a little salt, and ~3 cups water until soft and creamy — 20–25 minutes; moong cooks much faster than the bigger pulses and needs no soaking.",
    "Whisk to your preferred texture: keep it loose and soupy for a light dal, or cook it down thicker. Stir in the chopped tomato and simmer 5 minutes until it softens.",
    "Make the tadka: heat the ghee until shimmering, add the cumin and let it crackle, then the dried and green chiles and a pinch of hing. Fry just until fragrant and the chiles darken — don't burn the cumin.",
    "Pour the hot tadka over the dal so it hisses. Stir through, finish with a squeeze of lemon and cilantro, and serve with jeera rice or roti.",
  ],
  modernMove:
    "Moong is the one dal you can do start-to-finish in under half an hour with no soak and no pressure cooker — it's the fastest legume dinner there is. A dry-toast of the lentils in the pan before adding water deepens the flavor into something nuttier if you have the extra two minutes.",
  notes:
    "The lightest and most digestible dal, traditionally cooked for the unwell and for babies — proof that frugal and gentle aren't opposites. The lemon at the end brightens the whole bowl.",
  tags: ["dinner", "dal", "moong-dal", "lentils", "tadka", "legumes"],
  sources: [
    {
      title: "Dassana Amit — Dassana's Veg Recipes",
      url: "https://www.vegrecipesofindia.com/moong-dal-tadka/",
      note: "Yellow moong dal cooked soft and finished with a cumin-and-chile tadka",
    },
  ],
};
