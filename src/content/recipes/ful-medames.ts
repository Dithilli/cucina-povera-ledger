import type { Recipe } from "../types";

export const fulMedames: Recipe = {
  slug: "ful-medames",
  title: "Ful Medames",
  cuisine: "levantine",
  blurb:
    "Slow-cooked dried fava beans crushed warm with olive oil, lemon, raw garlic, and cumin — the breadbasket's oldest, cheapest supper, eaten with flatbread.",
  servings: 4,
  perServing: { calories: 520, protein: 24 },
  estCostPerServing: 0.72,
  roles: ["dinner", "lunch"],
  ingredients: [
    {
      item: "dried small fava beans (soaked overnight), plus their cooking liquid",
      qty: "2 cups dried",
      cost: 1.4,
    },
    {
      item: "cooked chickpeas (a handful, for body)",
      qty: "1/2 cup",
      cost: 0.25,
    },
    { item: "garlic cloves, crushed to a paste with salt", qty: "3", cost: 0.15, spansWeeks: true },
    { item: "lemons, juiced", qty: "2", cost: 0.5 },
    { item: "good olive oil, plus more to flood the top", qty: "4 tbsp", cost: 0.55, spansWeeks: true },
    { item: "ground cumin", qty: "1 1/2 tsp", cost: 0.15, spansWeeks: true },
    { item: "tomato, diced, and parsley to finish", qty: "1 + handful", cost: 0.45 },
    { item: "salt, chili flakes, flatbread to scoop", qty: "to serve" },
  ],
  method: [
    "Drain the soaked favas and simmer very gently in fresh water with the chickpeas, partly covered, 1 1/2–2 hours, until the skins are soft and the beans collapse when pressed. Keep them brothy.",
    "Stir the garlic-salt paste, cumin, and most of the lemon into the hot pot. Crush about half the beans against the side of the pan with a spoon so it turns thick and rough — not a smooth purée.",
    "Loosen with a ladle of the cooking liquid until spoonable. Taste and balance with more lemon and salt; it should be bright and savory.",
    "Spread into bowls, flood with olive oil, and top with diced tomato, parsley, and chili. Eat hot, scooping with torn flatbread.",
  ],
  modernMove:
    "Cooking the favas brothy and crushing only half of them — rather than draining and mashing all — keeps the dish loose and silky while the whole beans give it backbone.",
  notes:
    "Canned ful works in a pinch: simmer with its liquid, then crush and dress the same way. The dried-bean version is cheaper and far better.",
  zeroWasteHero: true,
  tags: ["legumes", "fava", "tahini-free", "one-pot", "breakfast-for-dinner"],
  sources: [
    {
      title: "Ful medames — Wikipedia",
      url: "https://en.wikipedia.org/wiki/Ful_medames",
      note: "Cooked fava beans dressed with olive oil, lemon, garlic, and cumin — the dish's history and regional variations.",
    },
  ],
};
