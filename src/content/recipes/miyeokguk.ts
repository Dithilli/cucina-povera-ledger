import type { Recipe } from "../types";

export const miyeokguk: Recipe = {
  slug: "miyeokguk",
  title: "Miyeokguk",
  cuisine: "korean",
  blurb:
    "The birthday and postpartum seaweed soup — dried miyeok swells into a slippery, mineral pot built on anchovy-kelp stock, nourishing for almost nothing per bowl.",
  servings: 4,
  perServing: { calories: 480, protein: 26 },
  estCostPerServing: 1.05,
  roles: ["dinner"],
  ingredients: [
    { item: "dried miyeok (wakame), soaked and cut", qty: "1 oz dry", cost: 0.9 },
    {
      item: "dried anchovies (myeolchi), heads and guts removed",
      qty: "10",
      cost: 0.5,
      spansWeeks: true,
    },
    {
      item: "dried kelp (dasima/kombu)",
      qty: "1 postcard piece",
      cost: 0.3,
      spansWeeks: true,
    },
    { item: "beef brisket or stew meat, sliced thin", qty: "5 oz", cost: 1.6 },
    { item: "garlic, minced", qty: "3 cloves", cost: 0.1, spansWeeks: true },
    {
      item: "toasted sesame oil",
      qty: "1 tbsp",
      cost: 0.2,
      spansWeeks: true,
    },
    {
      item: "soup soy sauce (guk-ganjang)",
      qty: "1 1/2 tbsp",
      cost: 0.2,
      spansWeeks: true,
    },
    { item: "steamed rice, to serve", qty: "for 4", cost: 0.6 },
    { item: "salt", qty: "to taste" },
  ],
  method: [
    "Soak the dried miyeok in cold water 15–20 minutes until it unfurls and swells several times its size, then drain, rinse, and cut into bite lengths.",
    "Make the stock: simmer the cleaned anchovies and the kelp in ~7 cups water for 10 minutes, pulling the kelp out at 10 minutes and the anchovies after 15 so the broth stays clean, not bitter.",
    "In the soup pot, toss the miyeok and the beef with sesame oil and garlic over medium heat for 2–3 minutes until fragrant and the meat is sealed — this frying step is what gives the soup its body.",
    "Pour in the strained anchovy-kelp stock, season with soup soy sauce, and simmer 20–25 minutes until the seaweed is fully tender and the broth turns silky. Finish with salt and serve over rice.",
  ],
  modernMove:
    "Frying the seaweed and beef in sesame oil before the stock goes in is the whole secret — it deepens a near-free dried vegetable into a rich, glossy soup, and an anchovy-kelp dashi keeps it light enough to drink bowl after bowl.",
  tags: ["soup", "guk", "seaweed", "anchovy-kelp-stock", "beef", "weeknight"],
};
