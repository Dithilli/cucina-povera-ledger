import type { Recipe } from "../types";

export const bangaSoup: Recipe = {
  slug: "banga-soup",
  title: "Banga Soup (Palm-Fruit Soup)",
  cuisine: "west-african",
  blurb:
    "The Niger-Delta palm-fruit soup — fresh palm nuts pounded and pressed into a rich, tawny concentrate, simmered with dried fish, crayfish, and banga spices into a deep, fragrant pot.",
  servings: 4,
  perServing: { calories: 660, protein: 25 },
  estCostPerServing: 1.7,
  roles: ["dinner"],
  ingredients: [
    { item: "palm-fruit concentrate (banga, from a tin or fresh-pressed nuts)", qty: "2 cups", cost: 2.0 },
    { item: "dried/smoked fish, flaked", qty: "1 1/2 cups", cost: 2.2 },
    { item: "ground dried crayfish", qty: "3 tbsp", cost: 1.0, spansWeeks: true },
    { item: "banga spice mix (beletientien, ataiko, oburunbebe stick)", qty: "2 tbsp", cost: 0.8, spansWeeks: true },
    { item: "dried bitterleaf or scent leaf, to finish", qty: "1/2 cup", cost: 0.6 },
    { item: "scotch bonnet, ground", qty: "1-2", cost: 0.3 },
    { item: "onion", qty: "1", cost: 0.3 },
    { item: "stock cube, salt", qty: "to taste", cost: 0.3, spansWeeks: true },
    { item: "starch, eba, or boiled rice to serve (swallow)", qty: "2 cups", cost: 0.9 },
  ],
  method: [
    "If using fresh palm nuts, boil until soft, pound, and press with hot water to extract the thick orange concentrate; otherwise loosen tinned banga with a little water.",
    "Bring the concentrate to a boil in plenty of water and let it cook down — the oil will rise and the soup will thicken and darken to a rich tawny.",
    "Add the dried fish, crayfish, onion, and the banga spice mix, and simmer until the pot is fragrant and the fat sits glossy on top.",
    "Season with pepper, stock, and salt; stir in a little dried bitterleaf or scent leaf near the end for its bright, herbal lift.",
    "Serve hot with starch, eba, or boiled rice — banga is built to be scooped.",
  ],
  modernMove:
    "Letting the palm-fruit concentrate boil long enough to break and rise gives banga its signature glossy depth — patience, not added fat, is what makes it rich.",
  notes:
    "The Delta uses the whole palm fruit: the pressed pulp becomes the soup, nothing of the harvest wasted. A little dried fish and crayfish carry the protein cheaply.",
  zeroWasteHero: false,
  tags: ["palm-fruit", "banga", "soup", "crayfish", "delta", "swallow"],
  sources: [
    {
      title: "All Nigerian Recipes (Flo Madubike) — Banga Soup (Ofe Akwu)",
      url: "https://www.allnigerianrecipes.com/soups/banga-soup/",
      note: "Niger-Delta palm-fruit soup: extracting the concentrate and cooking it down with dried fish and banga spices.",
    },
  ],
};
