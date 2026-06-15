import type { Recipe } from "../types";

export const canhBiDo: Recipe = {
  slug: "canh-bi-do",
  title: "Canh Bí Đỏ",
  cuisine: "vietnamese",
  blurb:
    "A gentle kabocha squash soup simmered soft in a light pork or shrimp broth — sweet, comforting, and the cheap orange counterweight to a salty stir-fry over rice.",
  servings: 4,
  perServing: { calories: 480, protein: 19 },
  estCostPerServing: 1.0,
  roles: ["dinner"],
  ingredients: [
    {
      item: "kabocha squash (bí đỏ), peeled and cut in chunks",
      qty: "1 1/2 lb",
      cost: 1.5,
    },
    { item: "ground pork or dried shrimp", qty: "3 oz", cost: 1.0 },
    { item: "shallot, minced", qty: "1", cost: 0.2, spansWeeks: true },
    { item: "fish sauce", qty: "1 1/2 tbsp", cost: 0.15, spansWeeks: true },
    { item: "scallion and cilantro, chopped", qty: "small handful", cost: 0.3 },
    { item: "steamed rice, to serve", qty: "for 4", cost: 0.6 },
    { item: "salt, black pepper, oil", qty: "to taste" },
  ],
  method: [
    "Sweat the shallot in a little oil, add the ground pork (or dried shrimp), and stir until savory and lightly browned.",
    "Add ~6 cups water and the fish sauce, bring to a simmer, and skim.",
    "Add the squash and simmer 12–15 minutes until a piece crushes easily against the side of the pot — let a little break down to thicken the broth.",
    "Season to taste, then finish with scallion, cilantro, and black pepper. Serve hot over or beside rice.",
  ],
  modernMove:
    "Let a few chunks of squash collapse into the broth so it bodies up on its own — the soup thickens without any starch, and its natural sweetness is what makes it the perfect foil to a salty main.",
  tags: ["soup", "canh", "squash", "kabocha", "rice", "comfort"],
  sources: [
    {
      title: "Vicky Pham — Kabocha Pumpkin Soup with Ground Pork (Canh Bi Do Nau Thit Bam)",
      url: "https://vickypham.com/blog/vietnamese-kabocha-pumpkin-soup-with-ground-pork/",
      note: "Kabocha simmered soft in a light ground-pork broth as a side to rice",
    },
  ],
};
