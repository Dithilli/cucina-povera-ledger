import type { Recipe } from "../types";

export const huevosEnSalsaRoja: Recipe = {
  slug: "huevos-en-salsa-roja",
  title: "Huevos en Salsa Roja",
  cuisine: "mexican",
  blurb:
    'Huevos ahogados — eggs "drowned" in a roasted tomato-and-chile salsa roja and poached until the whites set and the yolks stay loose. Coziest breakfast there is, and dinner just as easily.',
  servings: 2,
  perServing: { calories: 330, protein: 16 },
  estCostPerServing: 1.02,
  roles: ["breakfast", "dinner"],
  ingredients: [
    { item: "eggs", qty: "4", cost: 1.0 },
    { item: "ripe tomatoes", qty: "3", cost: 0.9 },
    { item: "dried guajillo or chile de árbol", qty: "1–2", cost: 0.2, spansWeeks: true },
    { item: "white onion", qty: "1/4", cost: 0.15 },
    { item: "garlic", qty: "1 clove", cost: 0.1, spansWeeks: true },
    { item: "oil or lard", qty: "1 tbsp", cost: 0.1, spansWeeks: true },
    { item: "Mexican oregano, salt", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Char the tomatoes, onion, garlic, and chile on a dry comal until blistered and soft.",
    "Blend to a smooth salsa with a little water, a pinch of oregano, and salt.",
    "Fry the salsa in hot fat until it darkens and thickens, 6–8 minutes, loosening with water to a pourable sauce.",
    "Crack the eggs into the simmering salsa, cover, and poach over low heat 7–10 minutes until the whites are set and the yolks cooked to your liking.",
    "Spoon into bowls and serve with warm tortillas or crusty bread.",
  ],
  modernMove:
    "Toast the dried chile a few seconds and char the tomatoes hard before blending — that smoke is the whole difference between a flat sauce and a deep, drowned one.",
  tags: ["eggs", "salsa-roja", "tomato", "chile", "breakfast", "dinner"],
  sources: [
    {
      title: "Isabel Eats — Huevos Ahogados",
      url: "https://www.isabeleats.com/huevos-ahogados/",
      note: "guajillo-tomato salsa with eggs gently poached in it; poaching time and doneness cues",
    },
    {
      title: "Maricruz Avalos — Huevos Ahogados (Drowned Eggs)",
      url: "https://www.maricruzavalos.com/huevos-ahogados-drowned-eggs/",
      note: "roasted-salsa method and the char-then-fry-the-salsa technique",
    },
    {
      title: "Mely Martínez — Mexico in My Kitchen, Salsa Roja",
      url: "https://www.mexicoinmykitchen.com/easy-homemade-salsa-roja/",
      note: "base roasted tomato-chile salsa roja proportions",
    },
  ],
};
