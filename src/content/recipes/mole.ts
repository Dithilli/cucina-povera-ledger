import type { Recipe } from "../types";

export const mole: Recipe = {
  slug: "mole",
  title: "Mole Sencillo de Pollo",
  cuisine: "mexican",
  blurb:
    "The everyday weeknight mole — a short list of dried chiles, a little tomato, a square of chocolate, and a handful of nuts or stale bread for body, spooned over simmered chicken. Not the thirty-ingredient festival version; the one a home cook actually makes on a Tuesday.",
  servings: 4,
  perServing: { calories: 520, protein: 30 },
  estCostPerServing: 1.8,
  roles: ["dinner"],
  ingredients: [
    { item: "bone-in chicken pieces", qty: "1 1/2 lb", cost: 3.5 },
    { item: "dried ancho chiles", qty: "2", cost: 0.4, spansWeeks: true },
    { item: "dried pasilla or guajillo chiles", qty: "2", cost: 0.4, spansWeeks: true },
    { item: "tomato", qty: "1", cost: 0.3 },
    { item: "Mexican chocolate", qty: "1 oz (about 1/3 disc)", cost: 0.5, spansWeeks: true },
    { item: "almonds, peanuts, or a piece of stale bread", qty: "2 tbsp / 1 slice", cost: 0.3, spansWeeks: true },
    { item: "onion, garlic", qty: "1/4 onion, 1 clove", cost: 0.2, spansWeeks: true },
    { item: "cinnamon, clove, sesame, salt, lard", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Simmer the chicken with onion, garlic, and salt until tender; keep the broth — it thins the sauce later.",
    "Toast the stemmed, seeded chiles on a dry comal until fragrant, then soak in hot water to soften.",
    "Toast the nuts (or fry the bread), char the tomato, and blend everything with the chiles, a pinch of cinnamon and clove, and enough broth to make a smooth paste.",
    "Fry the paste in a little lard until it darkens and thickens, then melt in the chocolate and loosen with broth to a velvety, pourable mole.",
    "Slide the chicken back in to simmer 5–10 minutes so it drinks up the sauce; finish with toasted sesame and serve with rice and tortillas.",
  ],
  modernMove:
    'Fry the blended paste hard before you add any broth — "frying the mole" is the step that turns a thin chile purée into something deep and glossy; the chocolate and a piece of stale bread do the rest of the work the long ingredient list usually does.',
  notes: "A pound and a half of chicken and four chiles feed four; the rice and tortillas stretch the plate.",
  tags: ["guiso", "mole", "chicken", "chile", "chocolate", "dinner", "weeknight"],
  sources: [
    {
      title: "Mely Martínez — Mexico in My Kitchen, Easy Chicken Mole (Molito Sencillo)",
      url: "https://www.mexicoinmykitchen.com/easy-mole-sauce-molito-sencillo/",
      note: "deliberately simplified everyday mole: short chile list, chocolate, chicken simmered in the sauce",
    },
    {
      title: "Pati Jinich — Coloradito Chicken",
      url: "https://patijinich.com/coloradito-chicken/",
      note: "approachable weeknight mole-style sauce over chicken; toast-soak-blend-fry-the-paste technique",
    },
  ],
};
