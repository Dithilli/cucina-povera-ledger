import type { Recipe } from "../types";

export const palakSaag: Recipe = {
  slug: "palak-saag",
  title: "Palak Saag",
  cuisine: "north-indian",
  blurb:
    "A plain, honest spinach saag — greens stewed soft and roughly mashed, lifted by a garlic-and-cumin tadka. The everyday cousin of sarson ka saag.",
  servings: 4,
  perServing: { calories: 450, protein: 13 },
  estCostPerServing: 0.68,
  roles: ["dinner"],
  ingredients: [
    { item: "spinach, washed and chopped", qty: "1 1/2 lb", cost: 1.4 },
    { item: "onion, finely chopped", qty: "1", cost: 0.25 },
    { item: "ripe tomato, chopped", qty: "1", cost: 0.25 },
    { item: "garlic cloves, sliced + ginger, grated", qty: "5 + 1 thumb", cost: 0.2, spansWeeks: true },
    { item: "green chilies, slit", qty: "2", cost: 0.15 },
    { item: "ghee or oil", qty: "2 1/2 tbsp", cost: 0.25, spansWeeks: true },
    { item: "cumin seeds", qty: "1 tsp", cost: 0.1, spansWeeks: true },
    { item: "turmeric, coriander, garam masala", qty: "spice blend", cost: 0.2, spansWeeks: true },
    { item: "salt; a squeeze of lemon to finish", qty: "to taste", cost: 0.1 },
  ],
  method: [
    "Wilt the spinach with green chili and a splash of water until fully collapsed, then mash coarsely or pulse briefly — keep some texture rather than a smooth paste.",
    "In ghee, bloom cumin seeds, then fry onion to soft gold. Add ginger-garlic and cook off the raw edge.",
    "Add the tomato with turmeric and coriander; cook down until jammy and the fat surfaces.",
    "Fold the mashed spinach into the masala, season, and simmer 8–10 minutes so the greens drink up the spice. Finish with garam masala and lemon; serve with roti or rice.",
  ],
  modernMove:
    "Blanching and coarsely mashing rather than blending keeps the spinach bright green and gives the saag body and bite instead of a flat, dull-green purée.",
  tags: ["greens", "spinach", "saag", "everyday", "vegetarian"],
  sources: [
    {
      title: "Dassana Amit — Dassana's Veg Recipes",
      url: "https://www.vegrecipesofindia.com/palak-saag-punjabi-palak-saag/",
      note: "Spinach saag stewed soft and coarsely mashed, lifted with a garlic-cumin tadka",
    },
  ],
};
