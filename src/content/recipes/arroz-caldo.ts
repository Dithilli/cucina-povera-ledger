import type { Recipe } from "../types";

export const arrozCaldo: Recipe = {
  slug: "arroz-caldo",
  title: "Arroz Caldo (Ginger Chicken Rice Porridge)",
  cuisine: "filipino",
  blurb:
    "A thick, gingery rice porridge cooked down from a little chicken and a lot of rice — the ultimate stretch dish, topped with crisp garlic, scallion, and a squeeze of calamansi.",
  servings: 5,
  perServing: { calories: 520, protein: 24 },
  estCostPerServing: 1.05,
  roles: ["dinner"],
  ingredients: [
    {
      item: "bone-in chicken pieces (thighs, or backs/wings/carcass for stretching)",
      qty: "1 lb",
      cost: 2.5,
    },
    { item: "glutinous rice (malagkit) plus regular rice", qty: "1 1/2 cups total", cost: 0.6 },
    { item: "fresh ginger, peeled and julienned", qty: "3 in", cost: 0.5, spansWeeks: true },
    { item: "garlic cloves (half for the base, half fried for topping)", qty: "1 whole head", cost: 0.4, spansWeeks: true },
    { item: "onion, diced", qty: "1", cost: 0.3 },
    { item: "scallions, sliced", qty: "3", cost: 0.3 },
    { item: "eggs, hard-boiled and halved (to top)", qty: "3", cost: 0.9, spansWeeks: true },
    { item: "fish sauce (patis), salt, black pepper, a pinch of safflower/turmeric for color", qty: "to taste", spansWeeks: true },
    { item: "calamansi or lime, to finish", qty: "to serve", cost: 0.3, spansWeeks: true },
  ],
  method: [
    "Fry half the garlic in oil until golden and crisp; lift out and reserve for topping. In the same oil, sauté the ginger, onion, and remaining garlic until fragrant.",
    "Add the chicken and a splash of fish sauce, stirring until it loses its raw color. Stir in both rices to coat in the oil and aromatics.",
    "Pour in 8-9 cups of water (or the strained stock from boiling a carcass), add the pinch of color, and simmer, stirring often so it doesn't catch, 35-45 minutes until the rice breaks down into a thick, creamy porridge — add hot water as it thickens.",
    "Lift out the chicken, shred the meat off the bones (return the bones to deepen the pot if you like, then discard), and stir the meat back in. Season with fish sauce and pepper. Top each bowl with crisp garlic, scallion, a halved egg, black pepper, and calamansi.",
  ],
  modernMove:
    "Cooking the carcass and bones right into the porridge — then stripping every shred of meat back in — turns scraps of chicken and a bowl of rice into a full, savory dinner for five.",
  notes:
    "The zero-waste hero of the set: backs, wings, and the picked-over carcass all give their flavor and meat to the pot, and stale rice or a heel of leftover roast chicken disappear right into it.",
  zeroWasteHero: true,
  tags: ["porridge", "rice", "chicken", "ginger", "congee", "one-pot", "zero-waste"],
  sources: [
    { title: "Vanjo Merano — Panlasang Pinoy", url: "https://panlasangpinoy.com/chicken-arroz-caldo-recipe-glutinous-rice-porridge/", note: "Glutinous-rice porridge with ginger, crisp garlic, and egg topping" },
    { title: "Lalaine Manalo — Kawaling Pinoy", url: "https://www.kawalingpinoy.com/arroz-caldo/", note: "Simmering rice down into a thick congee finished with calamansi" },
  ],
};
