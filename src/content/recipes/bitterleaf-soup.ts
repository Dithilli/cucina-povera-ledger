import type { Recipe } from "../types";

export const bitterleafSoup: Recipe = {
  slug: "bitterleaf-soup",
  title: "Bitterleaf Soup (Ofe Onugbu)",
  cuisine: "west-african",
  blurb:
    "The Igbo Sunday soup — washed bitterleaf simmered into a thick, cocoyam-bound palm-oil broth with crayfish and a little fish, balanced just past bitter into deep and savory.",
  servings: 4,
  perServing: { calories: 600, protein: 24 },
  estCostPerServing: 1.55,
  roles: ["dinner"],
  ingredients: [
    { item: "dried bitterleaf (onugbu), washed well to tame the bitterness", qty: "2 cups", cost: 1.4 },
    { item: "cocoyam (or a little yam/potato) to thicken", qty: "3 corms", cost: 1.0 },
    { item: "red palm oil", qty: "1/3 cup", cost: 0.9, spansWeeks: true },
    { item: "dried fish (stockfish or smoked), flaked", qty: "1 cup", cost: 1.8 },
    { item: "ground dried crayfish", qty: "3 tbsp", cost: 1.0, spansWeeks: true },
    { item: "ogiri or iru (fermented seasoning)", qty: "1 tbsp", cost: 0.4, spansWeeks: true },
    { item: "scotch bonnet, ground", qty: "1-2", cost: 0.3 },
    { item: "stock cube, salt", qty: "to taste", cost: 0.3, spansWeeks: true },
    { item: "garri or pounded yam to serve (swallow)", qty: "2 cups", cost: 0.9 },
  ],
  method: [
    "Wash the bitterleaf thoroughly — repeated rinsing and squeezing pulls the bitterness down to a pleasant edge, not a wince.",
    "Boil the cocoyam until soft, then pound or blend to a sticky paste — this is the thickener that gives ofe onugbu its body instead of flour.",
    "Build a pot of seasoned stock with the dried fish, crayfish, ogiri, and pepper. Drop in small lumps of the cocoyam paste and simmer until they melt and thicken the broth.",
    "Stir in the palm oil and the washed bitterleaf, season, and simmer gently until the soup is thick, glossy, and just-past-bitter into savory.",
    "Serve with eba, garri, or pounded yam — pull the swallow and scoop.",
  ],
  modernMove:
    "Cocoyam paste as the thickener (instead of flour) gives the soup a clean, slightly elastic body that carries the palm oil and crayfish — the authentic Igbo move that makes onugbu taste of itself.",
  notes:
    "Onugbu is the Sunday/celebration soup of Igboland; a little dried fish and crayfish season the whole pot, so the protein is cheap and intense.",
  zeroWasteHero: false,
  tags: ["bitterleaf", "greens", "palm-oil", "crayfish", "igbo", "swallow"],
};
