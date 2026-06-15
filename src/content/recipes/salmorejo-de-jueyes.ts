import type { Recipe } from "../types";

export const salmorejoDeJueyes: Recipe = {
  slug: "salmorejo-de-jueyes",
  title: "Salmorejo de Jueyes (Stewed Land Crab)",
  cuisine: "puerto-rican",
  blurb:
    "Sweet land-crab meat simmered in sofrito, tomato and a little of its own shell stock until it clings to the rice — the messy, finger-licking pot sold from kiosks all along the coast.",
  servings: 4,
  perServing: { calories: 410, protein: 25 },
  estCostPerServing: 2.4,
  roles: ["dinner"],
  ingredients: [
    { item: "land crab (juey) meat, picked", qty: "3/4 lb", cost: 6.0 },
    { item: "sofrito (recaíto)", qty: "1/3 cup", cost: 0.5, spansWeeks: true },
    { item: "tomato sauce", qty: "1 cup", cost: 0.5 },
    { item: "onion + green bell pepper, diced", qty: "1 cup", cost: 0.5 },
    { item: "manzanilla olives + capers (alcaparrado)", qty: "1/4 cup", cost: 0.5, spansWeeks: true },
    { item: "sazón + olive oil, garlic, cumin, oregano, bay leaf", qty: "to taste", cost: 0.3, spansWeeks: true },
    { item: "achiote/annatto oil for color", qty: "1 tbsp", cost: 0.1, spansWeeks: true },
  ],
  method: [
    "If using whole boiled crabs, pick the body and claw meat and reserve any liquid from inside the shells — that brine is the soul of the dish. Pre-picked crab meat works too.",
    "Heat olive oil and achiote oil in a caldero, then cook the sofrito, onion, bell pepper, and garlic until soft and fragrant, 4–5 minutes.",
    "Stir in the tomato sauce, alcaparrado, cumin, oregano, bay leaf, and sazón. Add the reserved crab liquid (or a splash of water) and simmer 10 minutes to build a glossy sauce.",
    "Fold in the crab meat and simmer gently 5–7 minutes, just until heated through and bound by the sauce — overcooking turns crab stringy.",
    "Serve over white rice with tostones or arepas, and plenty of napkins.",
  ],
  modernMove:
    "Steep a tablespoon of achiote seeds in the warm oil for a minute before you start the sofrito, then strain: it gives the stew the deep orange that pre-mixed sazón fakes, without the extra salt.",
  notes:
    "Jueyes are the blue land crab, Cardisoma guanhumi, trapped during the summer rains. The dish is a beach-kiosk classic precisely because a little crab, stretched in sofrito and tomato, feeds a table.",
  zeroWasteHero: false,
  tags: ["crab", "shellfish", "jueyes", "stew", "sofrito", "rice", "dinner", "puerto-rican"],
  sources: [
    {
      title: "Hot, Cheap & Easy — Salmorejo de Jueyes (Land Crab Stew)",
      url: "https://hotcheapeasy.com/2014/07/24/salmorejo-de-jueyes-land-crab-stew/",
      note: "land crab simmered in sofrito, tomato sauce, alcaparrado and sazón; Cardisoma guanhumi context; served over rice",
    },
  ],
};
