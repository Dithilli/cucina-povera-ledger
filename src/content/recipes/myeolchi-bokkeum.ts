import type { Recipe } from "../types";

export const myeolchiBokkeum: Recipe = {
  slug: "myeolchi-bokkeum",
  title: "Myeolchi Bokkeum",
  cuisine: "korean",
  blurb:
    "Sweet-soy stir-fried dried anchovies — a glossy, crunchy banchan that turns a cheap bag of tiny fish into days of calcium and protein.",
  servings: 6,
  perServing: { calories: 470, protein: 22 },
  estCostPerServing: 0.7,
  roles: ["dinner", "side"],
  ingredients: [
    { item: "small dried anchovies (jan-myeolchi)", qty: "2 cups", cost: 2.4 },
    {
      item: "garlic cloves, minced",
      qty: "3",
      cost: 0.15,
      spansWeeks: true,
    },
    { item: "soy sauce", qty: "1 tbsp", cost: 0.1, spansWeeks: true },
    {
      item: "rice syrup or honey (plus a splash of mirin)",
      qty: "2 tbsp",
      cost: 0.4,
      spansWeeks: true,
    },
    { item: "sugar", qty: "1 tbsp", cost: 0.05, spansWeeks: true },
    {
      item: "neutral oil + a drizzle of toasted sesame oil",
      qty: "2 tbsp",
      cost: 0.25,
      spansWeeks: true,
    },
    {
      item: "toasted sesame seeds and (optional) dried chili threads",
      qty: "to finish",
      cost: 0.2,
      spansWeeks: true,
    },
    { item: "steamed short-grain rice, to serve", qty: "for 6", cost: 0.9 },
  ],
  method: [
    "Dry-toast the anchovies in a hot pan with no oil for 2-3 minutes to drive off any fishy moisture and crisp them — they should smell nutty, not raw. Tip them out and wipe the pan.",
    "Warm the neutral oil over medium heat and bloom the garlic for 30 seconds, then add the anchovies and toss to coat.",
    "Make a quick glaze in the corner of the pan: soy sauce, sugar, rice syrup and mirin. Let it bubble until it just starts to thicken, then fold the anchovies through so every fish is lacquered.",
    "Kill the heat the moment the syrup grabs — overcook it and the glaze turns to candy and the fish go hard. Finish with sesame oil, sesame seeds and chili threads. Serve over rice; it keeps a week refrigerated.",
  ],
  modernMove:
    "The no-oil dry-toast first, then a separate fast caramel: it keeps the anchovies shatter-crisp instead of chewy, the difference between a great banchan and a sticky one.",
  zeroWasteHero: true,
  tags: ["banchan", "anchovies", "bokkeum", "sweet-soy", "make-ahead"],
  sources: [
    {
      title: "Maangchi — Stir-fried dried anchovies (Myeolchi-bokkeum)",
      url: "https://www.maangchi.com/recipe/myeolchi-bokkeum",
      note: "Toasting the dried anchovies then glazing them in a sweet-soy syrup",
    },
  ],
};
