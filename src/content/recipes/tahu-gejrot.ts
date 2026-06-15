import type { Recipe } from "../types";

export const tahuGejrot: Recipe = {
  slug: "tahu-gejrot",
  title: "Tahu Gejrot",
  cuisine: "indonesian",
  blurb:
    "Fried tofu drowned in a thin sweet-sour-chili sauce pounded to order — Cirebon street food, all sting and palm-sugar tang.",
  servings: 4,
  perServing: { calories: 460, protein: 22 },
  estCostPerServing: 0.74,
  roles: ["dinner"],
  ingredients: [
    { item: "firm or hollow tofu, cubed", qty: "1 lb", cost: 1.6 },
    { item: "neutral oil for frying", qty: "1/2 cup", cost: 0.5, spansWeeks: true },
    { item: "palm sugar (or brown sugar)", qty: "3 tbsp", cost: 0.4, spansWeeks: true },
    {
      item: "tamarind pulp, soaked and strained",
      qty: "1 tbsp",
      cost: 0.2,
      spansWeeks: true,
    },
    { item: "sweet soy sauce (kecap manis)", qty: "1 tbsp", cost: 0.2, spansWeeks: true },
    { item: "garlic cloves", qty: "3", cost: 0.15, spansWeeks: true },
    { item: "shallots", qty: "3", cost: 0.3 },
    { item: "bird's-eye chilies", qty: "4", cost: 0.25, spansWeeks: true },
    { item: "salt", qty: "1/2 tsp", cost: 0.05 },
    { item: "steamed rice, to serve", qty: "for 4", cost: 0.6 },
  ],
  method: [
    "Fry the tofu cubes until golden and firm, then drain and tear or halve them so they soak up sauce.",
    "Dissolve the palm sugar in a little hot water with the tamarind, kecap manis, and salt to make a thin, dark, sweet-sour broth.",
    "Coarsely pound the garlic, shallots, and chilies — leave it rough, not smooth — and stir into the sauce.",
    "Pile the tofu in a shallow bowl and pour the sauce over so it pools underneath. Eat right away with rice while the tofu is still crisp at the edges.",
  ],
  modernMove:
    "The sauce stays thin and is added at the last second — the tofu floats in it rather than being glazed, so each bite is half crunch, half sour-sweet broth.",
  tags: ["tofu", "fried", "tamarind", "sambal", "cirebon", "street-food"],
  sources: [
    { title: "Anita Jacobson — Daily Cooking Quest", url: "https://dailycookingquest.com/tahu-gejrot-cirebon-fried-tofu-in-chili-soy-sauce.html", note: "Cirebon fried tofu in a thin sweet-sour palm-sugar chili sauce" },
    { title: "Wikipedia — Tahu gejrot", url: "https://en.wikipedia.org/wiki/Tahu_gejrot", note: "Cirebon origin and thin palm-sugar/sweet-soy dressing with pounded garlic, shallot, chili" },
  ],
};
