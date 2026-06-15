import type { Recipe } from "../types";

export const canhChua: Recipe = {
  slug: "canh-chua",
  title: "Canh Chua",
  cuisine: "vietnamese",
  blurb:
    "Southern sweet-sour tamarind soup with a little fish, pineapple, and tomato — bright, brothy, and built to stretch a small piece of fish across a family dinner over rice.",
  servings: 4,
  perServing: { calories: 520, protein: 26 },
  estCostPerServing: 1.6,
  roles: ["dinner"],
  ingredients: [
    {
      item: "white fish (basa, catfish, or any cheap fillet), cut in chunks",
      qty: "10 oz",
      cost: 3.5,
    },
    { item: "tamarind paste (or pulp soaked and strained)", qty: "2 tbsp", cost: 0.4, spansWeeks: true },
    { item: "pineapple, in thin wedges (fresh or canned)", qty: "1 cup", cost: 0.6 },
    { item: "tomatoes, cut in wedges", qty: "2", cost: 0.5 },
    { item: "okra, sliced on the bias", qty: "6", cost: 0.5 },
    { item: "bean sprouts", qty: "1 cup", cost: 0.3 },
    { item: "fish sauce", qty: "2 tbsp", cost: 0.2, spansWeeks: true },
    { item: "sugar", qty: "1 tbsp", cost: 0.05, spansWeeks: true },
    { item: "garlic, minced", qty: "2 cloves", cost: 0.1, spansWeeks: true },
    { item: "rice paddy herb / cilantro / sawtooth, torn", qty: "small handful", cost: 0.4 },
    { item: "steamed rice, to serve", qty: "for 4", cost: 0.6 },
    { item: "salt, chili, oil", qty: "to taste" },
  ],
  method: [
    "Whisk the tamarind into ~6 cups water and bring to a simmer with the garlic; season with fish sauce and sugar until it tastes sharply sour-sweet.",
    "Add pineapple, tomato, and okra and simmer just a few minutes until the tomato slumps and the broth turns fragrant.",
    "Slide in the fish and poach gently — do not boil hard, or it breaks. It is done in 3–4 minutes.",
    "Off the heat stir in the bean sprouts and herbs so they stay crisp and green. Taste and re-balance sour, salty, sweet. Serve in bowls alongside rice.",
  ],
  modernMove:
    "Balance the broth by taste, not recipe — push sour with tamarind, salty with fish sauce, sweet with pineapple until the three lock together. Adding the sprouts and herbs off the heat keeps the soup alive instead of stewed.",
  tags: ["soup", "canh", "tamarind", "fish", "southern", "rice"],
  sources: [
    {
      title: "Vicky Pham — Vietnamese Sweet & Sour Fish Soup (Canh Chua Ca)",
      url: "https://vickypham.com/blog/vietnamese-sour-catfish-soup-canh-chua/",
      note: "Tamarind broth balanced sour-sweet with pineapple, tomato, and a little fish",
    },
    {
      title: "Wikipedia — Canh chua",
      url: "https://en.wikipedia.org/wiki/Canh_chua",
      note: "Background: southern sweet-sour tamarind soup served over rice",
    },
  ],
};
