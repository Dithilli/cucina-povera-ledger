import type { Recipe } from "../types";

export const trungChung: Recipe = {
  slug: "trung-chung",
  title: "Trứng Chưng",
  cuisine: "vietnamese",
  blurb:
    "Steamed egg custard with a little ground pork and glass noodles — a few eggs and scraps of meat stretched, by steaming, into a soft savory dinner over rice.",
  servings: 4,
  perServing: { calories: 380, protein: 23 },
  estCostPerServing: 0.9,
  roles: ["dinner"],
  ingredients: [
    { item: "eggs", qty: "5", cost: 1.0 },
    { item: "ground pork", qty: "1/3 lb", cost: 1.1 },
    { item: "dried glass noodles (miến), soaked and snipped", qty: "1 oz", cost: 0.3, spansWeeks: true },
    { item: "dried wood-ear mushrooms, soaked and minced", qty: "0.2 oz", cost: 0.2, spansWeeks: true },
    { item: "shallot, minced", qty: "1", cost: 0.1 },
    { item: "scallion, sliced", qty: "1", cost: 0.1 },
    { item: "fish sauce", qty: "1 tbsp", cost: 0.1, spansWeeks: true },
    { item: "water or unsalted broth", qty: "1/2 cup", cost: 0.05 },
    { item: "egg yolk to glaze the top", qty: "1", cost: 0.2 },
    { item: "steamed rice to serve", qty: "4 cups", cost: 0.6 },
    { item: "black pepper", qty: "to taste" },
  ],
  method: [
    "Mix the ground pork with the shallot, soaked glass noodles, wood-ear, fish sauce, and pepper. Beat in the whole eggs and the half-cup of water — the water is what keeps the custard tender rather than rubbery.",
    "Pour into a shallow heatproof dish and steam gently over (not in) simmering water, lid wrapped in a cloth to catch drips, until just set, about 15 minutes. Keep the heat low so the custard stays smooth and doesn't pock with bubbles.",
    "Brush the beaten extra yolk over the top and steam another 2–3 minutes to set a glossy yellow glaze.",
    "Scatter scallion and pepper and serve, scooped over hot rice with a little fish sauce or a vegetable on the side.",
  ],
  modernMove:
    "Loosening the eggs with water and steaming low and slow turns five eggs and a handful of pork into a silky custard that feeds four — gentle heat is the technique that stretches the protein.",
  tags: ["egg", "steamed", "custard", "pork", "glass-noodles"],
  sources: [
    {
      title: "Vicky Pham — Vietnamese Steamed Pork and Egg Meatloaf (Chả Trứng Hấp)",
      url: "https://vickypham.com/blog/steamed-egg-meatloaf/",
      note: "Pork, glass noodles, and wood-ear bound in egg, steamed and glazed with yolk",
    },
    {
      title: "RunAwayRice — Egg Meatloaf (Cha Trung)",
      url: "https://runawayrice.com/main-dishes/easy-bake-method-egg-meatloaf/",
      note: "Loosening the eggs and gentle low heat for a smooth custard",
    },
  ],
};
