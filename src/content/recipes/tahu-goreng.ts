import type { Recipe } from "../types";

export const tahuGoreng: Recipe = {
  slug: "tahu-goreng",
  title: "Tahu Goreng",
  cuisine: "indonesian",
  blurb:
    "Fried tofu with a sweet-soy chili dip — the warung snack that becomes dinner over rice, crisp outside and custardy within.",
  servings: 4,
  perServing: { calories: 520, protein: 24 },
  estCostPerServing: 0.78,
  roles: ["dinner"],
  ingredients: [
    { item: "firm tofu, cut into cubes", qty: "1 lb", cost: 1.6 },
    { item: "salt", qty: "1 tsp", cost: 0.05 },
    { item: "neutral oil for shallow frying", qty: "1/2 cup", cost: 0.5, spansWeeks: true },
    { item: "sweet soy sauce (kecap manis)", qty: "3 tbsp", cost: 0.4, spansWeeks: true },
    { item: "bird's-eye chilies, sliced", qty: "3", cost: 0.2, spansWeeks: true },
    { item: "garlic clove, minced", qty: "1", cost: 0.05, spansWeeks: true },
    { item: "shallot, thinly sliced", qty: "1", cost: 0.1 },
    { item: "lime, juiced", qty: "1/2", cost: 0.2, spansWeeks: true },
    { item: "steamed rice, to serve", qty: "for 4", cost: 0.6 },
  ],
  method: [
    "Press the tofu cubes between towels and salt them — dry tofu is the difference between crisp and soggy.",
    "Shallow-fry in hot oil, turning, until every side is deep golden and the shell is firm. Drain.",
    "Stir the kecap manis with the chilies, garlic, shallot, and lime into a quick dipping sauce.",
    "Pile the tofu over rice and spoon the dip across, or serve it alongside for dunking.",
  ],
  modernMove:
    "Salting and drying the tofu before it hits the oil pulls out surface water, so it puffs and crisps instead of steaming in its own moisture.",
  tags: ["tofu", "fried", "kecap-manis", "sambal", "warung"],
  sources: [
    { title: "Marvellina — What To Cook Today", url: "https://whattocooktoday.com/tahu-goreng-kecap.html", note: "fried tofu with a sweet soy (kecap manis) chili dip" },
  ],
};
