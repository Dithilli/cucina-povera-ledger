import type { Recipe } from "../types";

export const lightSoup: Recipe = {
  slug: "light-soup",
  title: "Light Soup",
  cuisine: "west-african",
  blurb:
    "The Ghanaian clear soup — a roasted tomato, onion, and pepper broth with ginger and a hint of garden egg, brothy and bright, no oil and no thickener.",
  servings: 4,
  perServing: { calories: 490, protein: 30 },
  estCostPerServing: 1.3,
  roles: ["dinner"],
  ingredients: [
    {
      item: "chicken pieces, goat, or fish, bone-in",
      qty: "1 1/4 lb",
      cost: 2.6,
    },
    { item: "tomatoes", qty: "3", cost: 0.7 },
    { item: "onion", qty: "1 large", cost: 0.4 },
    {
      item: "scotch bonnet (to taste)",
      qty: "1",
      cost: 0.3,
      spansWeeks: true,
    },
    {
      item: "garden eggs (small eggplants), optional, for body",
      qty: "2",
      cost: 0.6,
    },
    {
      item: "fresh ginger",
      qty: "1 thumb",
      cost: 0.2,
      spansWeeks: true,
    },
    {
      item: "garlic",
      qty: "2 cloves",
      cost: 0.1,
      spansWeeks: true,
    },
    {
      item: "water",
      qty: "about 5 cups",
    },
    { item: "salt, bouillon cube, pepper", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Season the meat or fish with grated ginger, garlic, chopped onion, and salt, and let it sit while you start the broth.",
    "Simmer the meat with half the onion in water until it begins to soften, skimming any scum so the soup stays clean and clear.",
    "Meanwhile char or boil the tomatoes, the rest of the onion, the pepper, and the garden eggs until soft, then blend smooth and pass through a sieve for a clean, oil-free base.",
    "Stir the blended base into the pot and simmer 20–25 minutes until the meat is tender and the broth tastes round, not raw; loosen with hot water to keep it light and brothy.",
    "Season with bouillon, salt, and pepper. Serve hot with fufu, banku, or omotuo (rice balls), or as a clean brothy bowl on its own.",
  ],
  modernMove:
    "Charring then sieving the tomato-pepper base gives a smoky depth and a glass-clear, fat-free broth — flavor from roasting and gelatin instead of oil or thickener.",
  tags: ["light-soup", "ghanaian", "broth", "tomato", "clear-soup", "one-pot"],
  sources: [
    {
      title: "Light soup — Wikipedia",
      url: "https://en.wikipedia.org/wiki/Light_soup",
      note: "Ghanaian nkrakra / aponkye nkrakra — a thin, oil-free tomato-pepper broth of the Akan, served with fufu or banku.",
    },
  ],
};
