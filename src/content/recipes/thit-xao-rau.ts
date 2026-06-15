import type { Recipe } from "../types";

export const thitXaoRau: Recipe = {
  slug: "thit-xao-rau",
  title: "Thịt Xào Rau",
  cuisine: "vietnamese",
  blurb:
    "Thin-sliced pork stir-fried with seasonal vegetables — the workhorse Vietnamese weeknight dinner that stretches a small amount of meat across a wokful of greens over rice.",
  servings: 4,
  perServing: { calories: 600, protein: 28 },
  estCostPerServing: 1.5,
  roles: ["dinner"],
  ingredients: [
    {
      item: "pork shoulder or thin pork chop, sliced thin against the grain",
      qty: "8 oz",
      cost: 2.5,
    },
    { item: "vegetables (gai lan, broccoli, cabbage, or green beans), cut for the wok", qty: "4 cups", cost: 1.5 },
    { item: "garlic, minced", qty: "3 cloves", cost: 0.15, spansWeeks: true },
    { item: "shallot, sliced", qty: "1", cost: 0.2, spansWeeks: true },
    { item: "fish sauce", qty: "1 1/2 tbsp", cost: 0.15, spansWeeks: true },
    { item: "oyster sauce", qty: "1 tbsp", cost: 0.2, spansWeeks: true },
    { item: "sugar", qty: "1 tsp", cost: 0.03, spansWeeks: true },
    { item: "cornstarch", qty: "1 tsp", cost: 0.02, spansWeeks: true },
    { item: "neutral oil", qty: "2 tbsp", cost: 0.15, spansWeeks: true },
    { item: "steamed rice, to serve", qty: "for 4", cost: 0.6 },
    { item: "black pepper", qty: "to taste" },
  ],
  method: [
    "Marinate the pork 10 minutes with the cornstarch, half the fish sauce, the sugar, garlic, and a little oil so it sears tender and lightly thickens its own sauce.",
    "Sear the pork in a screaming-hot wok in one layer until browned, then lift it out while still just cooked.",
    "Fry the shallot, then the vegetables, stems first, tossing hard over high heat with a splash of water to steam-crisp them.",
    "Return the pork, add the oyster sauce and remaining fish sauce, toss to coat and glaze, finish with black pepper, and serve over rice.",
  ],
  modernMove:
    "A cornstarch-and-fish-sauce velveting marinade is the home-cook trick that makes cheap pork sear up tender and self-glazing — and cooking meat and vegetables in separate fast passes keeps both from stewing in the wok.",
  tags: ["stir-fry", "xao", "pork", "vegetables", "weeknight", "rice"],
};
