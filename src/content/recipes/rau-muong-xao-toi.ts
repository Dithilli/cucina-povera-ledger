import type { Recipe } from "../types";

export const rauMuongXaoToi: Recipe = {
  slug: "rau-muong-xao-toi",
  title: "Rau Muống Xào Tỏi",
  cuisine: "vietnamese",
  blurb:
    "Water spinach blistered fast in a screaming-hot wok with a lot of garlic — the cheapest, fastest green on the Vietnamese table, equally a dinner over rice or a side.",
  servings: 4,
  perServing: { calories: 460, protein: 14 },
  estCostPerServing: 0.85,
  roles: ["dinner", "side"],
  ingredients: [
    {
      item: "water spinach (rau muống), cut in 3-inch lengths, stems and leaves separated",
      qty: "1 large bunch",
      cost: 1.2,
    },
    { item: "garlic, smashed and chopped", qty: "5 cloves", cost: 0.25, spansWeeks: true },
    { item: "fish sauce", qty: "1 tbsp", cost: 0.1, spansWeeks: true },
    { item: "sugar", qty: "1/2 tsp", cost: 0.02, spansWeeks: true },
    { item: "neutral oil", qty: "2 tbsp", cost: 0.15, spansWeeks: true },
    { item: "steamed rice, to serve", qty: "for 4", cost: 0.6 },
    { item: "salt, oyster sauce (optional)", qty: "to taste" },
  ],
  method: [
    "Mix the fish sauce with the sugar and a splash of water so it is ready to go in one pour.",
    "Get the wok or widest pan ripping hot, add the oil, then most of the garlic and fry just until pale gold.",
    "Add the stems first and toss hard for ~30 seconds, then the leaves, keeping everything moving over the highest heat.",
    "Pour the sauce down the side of the wok so it sizzles, toss once or twice until the greens are crisp-tender and glossy, throw in the reserved raw garlic, and serve immediately — over rice as a dinner, or alongside as a side.",
  ],
  modernMove:
    "Cook it hot, fast, and dry — high heat and a wok that's barely crowded gives you blistered, glossy greens instead of a steamed gray pile. Holding back a little raw garlic for the end keeps the aroma sharp.",
  tags: ["stir-fry", "xao", "water-spinach", "garlic", "greens", "rice", "side"],
  sources: [
    {
      title: "Vicky Pham — Simple Water Spinach and Garlic Stir Fry (Rau Muong Xao Toi)",
      url: "https://vickypham.com/blog/simple-water-spinach-stir-fry/",
      note: "Fast high-heat stir-fry of water spinach with lots of garlic",
    },
  ],
};
