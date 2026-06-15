import type { Recipe } from "../types";

export const olan: Recipe = {
  slug: "olan",
  title: "Olan",
  cuisine: "south-indian",
  blurb:
    "The quietest dish on the sadya leaf — ash gourd and earthy cowpeas barely simmered in thin coconut milk, seasoned with nothing but green chili and curry leaf, a deliberate cool note against the fiery curries.",
  servings: 4,
  perServing: { calories: 300, protein: 10 },
  estCostPerServing: 0.8,
  roles: ["dinner"],
  ingredients: [
    { item: "ash gourd (white pumpkin), peeled and cubed", qty: "3 cups", cost: 1.0 },
    { item: "dried cowpeas (black-eyed peas), soaked overnight", qty: "1/2 cup", cost: 0.4 },
    { item: "thin (second-press) coconut milk", qty: "1 1/2 cups", cost: 0.7 },
    { item: "thick (first-press) coconut milk", qty: "1/2 cup", cost: 0.4 },
    { item: "green chilies, slit", qty: "2", cost: 0.1, spansWeeks: true },
    { item: "curry leaves", qty: "1 sprig", cost: 0.05, spansWeeks: true },
    { item: "coconut oil, raw, to finish", qty: "1 tsp", cost: 0.1, spansWeeks: true },
    { item: "salt", qty: "to taste" },
  ],
  method: [
    "Boil the soaked cowpeas in plenty of water until tender but intact, then drain.",
    "Simmer the ash gourd with the slit green chilies, curry leaves, and salt in the thin coconut milk until the gourd turns translucent and soft — about 10 minutes. Keep it gentle so the milk never boils hard.",
    "Stir in the cooked cowpeas and warm through.",
    "Pour in the thick coconut milk and bring it just to the edge of a simmer, then take it off the heat the moment it threatens to bubble.",
    "Finish with a teaspoon of raw coconut oil and one more curry leaf crushed on top. It should taste of almost nothing but sweet gourd and coconut — that restraint is the point.",
  ],
  modernMove:
    "Splitting the coconut milk into thin and thick passes — thin to cook the gourd, thick added at the end and never boiled — is what keeps the milk silky instead of grainy and split.",
  notes: "Pumpkin or red pumpkin can stand in for some of the ash gourd. No mustard tempering here — olan is intentionally untempered.",
  zeroWasteHero: false,
  tags: ["coconut", "kerala", "ash-gourd", "cowpeas", "sadya", "south-indian"],
  sources: [
    {
      title: "Suguna Vinodh — Kannamma Cooks",
      url: "https://www.kannammacooks.com/olan-recipe/",
      note: "Kerala olan — ash gourd and cowpeas in two-stage coconut milk, thick milk added off the boil",
    },
  ],
};
