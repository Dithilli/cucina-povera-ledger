import type { Recipe } from "../types";

export const sarsonKaSaag: Recipe = {
  slug: "sarson-ka-saag",
  title: "Sarson ka Saag",
  cuisine: "north-indian",
  blurb:
    "The winter soul of Punjab — mustard greens slow-stewed with spinach, thickened with cornmeal and finished with a generous tadka, eaten with makki di roti.",
  servings: 4,
  perServing: { calories: 460, protein: 14 },
  estCostPerServing: 0.7,
  roles: ["dinner"],
  ingredients: [
    { item: "mustard greens (sarson), washed and chopped", qty: "1 lb", cost: 0.9 },
    { item: "spinach, chopped", qty: "1/2 lb", cost: 0.5 },
    { item: "a few leaves of bathua or other bitter green (optional)", qty: "handful", cost: 0.15 },
    { item: "green chilies", qty: "2", cost: 0.15 },
    { item: "ginger, half grated half julienned", qty: "2 thumbs", cost: 0.2, spansWeeks: true },
    { item: "fine cornmeal (makki ka atta) to thicken", qty: "2 tbsp", cost: 0.1, spansWeeks: true },
    { item: "ghee or butter", qty: "3 tbsp", cost: 0.3, spansWeeks: true },
    { item: "onion + garlic, chopped, for the tadka", qty: "1 + 4 cloves", cost: 0.35 },
    { item: "salt", qty: "to taste" },
  ],
  method: [
    "Simmer the mustard greens, spinach, bitter greens, green chili and grated ginger with a little water and salt, covered, until completely collapsed and soft — 30–40 minutes; mustard greens need real time to lose their raw pungency.",
    "Mash the greens with a wooden churner or blitz briefly to a coarse, textured purée — never a smooth soup. Stir in the cornmeal slurried with a little water and cook another 10 minutes until it thickens and loses its raw taste.",
    "Make the tadka: brown onion and garlic in ghee until deep gold, add the julienned ginger.",
    "Stir most of the tadka into the saag and simmer together a few minutes so the fat carries the flavor through. Top each bowl with the rest of the tadka and a knob of butter; serve with makki di roti.",
  ],
  modernMove:
    "Cornmeal does the thickening that cream would elsewhere — it bulks the greens into a spoonable saag and quietly ties it to the makki di roti served alongside, one grain doing double duty.",
  tags: ["greens", "mustard-greens", "saag", "punjabi", "winter"],
};
