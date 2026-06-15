import type { Recipe } from "../types";

export const revithokeftedes: Recipe = {
  slug: "revithokeftedes",
  title: "Revithokeftedes (Chickpea Fritters)",
  cuisine: "greek",
  blurb:
    "Crisp Greek chickpea patties — mashed chickpeas bound with onion, garlic, and herbs, then pan-fried golden. The taverna meze that eats like a meal.",
  servings: 4,
  perServing: { calories: 480, protein: 18 },
  estCostPerServing: 0.85,
  roles: ["dinner", "side"],
  ingredients: [
    { item: "cooked chickpeas, drained well", qty: "3 cups", cost: 1.2 },
    { item: "onion, grated and squeezed dry", qty: "1", cost: 0.3 },
    { item: "garlic cloves, minced", qty: "2", cost: 0.1, spansWeeks: true },
    { item: "fresh mint and parsley, chopped", qty: "1/2 cup", cost: 0.4 },
    { item: "flour, to bind", qty: "3–4 tbsp", cost: 0.1, spansWeeks: true },
    { item: "dried oregano", qty: "1 tsp", cost: 0.05, spansWeeks: true },
    {
      item: "olive oil, for frying",
      qty: "1/4 cup",
      cost: 0.5,
      spansWeeks: true,
    },
    { item: "lemon, to serve", qty: "1", cost: 0.3 },
    { item: "salt, black pepper", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Mash the chickpeas to a coarse paste — leave some texture rather than a smooth purée.",
    "Fold in the grated onion, garlic, herbs, oregano, salt, and pepper, then just enough flour to bring it together. Rest 20 minutes so it firms up.",
    "Shape into small flat patties. Fry in shallow olive oil over medium heat until deep golden and crisp on both sides.",
    "Drain briefly and serve hot with lemon wedges and a spoon of yogurt or tzatziki.",
  ],
  modernMove:
    "Grate the onion and wring it dry, and rest the mix before frying — excess moisture is what makes fritters fall apart in the pan; a dry, rested mix fries up crisp and holds its shape.",
  notes:
    "A great use for the bottom of a pot of cooked chickpeas. Mint is the signature Greek herb here; don't skip it.",
  zeroWasteHero: true,
  tags: ["legumes", "chickpeas", "fritters", "meze", "revithokeftedes"],
  sources: [
    {
      title: "My Greek Dish — Chickpea Fritters (Revithokeftedes)",
      url: "https://www.mygreekdish.com/recipe/chickpea-fritters-revithokeftedes/",
      note: "Confirms soaked, ground chickpeas with onion and herbs, fried — a Sifnos meze.",
    },
  ],
};
