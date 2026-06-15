import type { Recipe } from "../types";

export const chole: Recipe = {
  slug: "chole",
  title: "Chole",
  cuisine: "north-indian",
  blurb:
    "Punjabi chickpea curry darkened with tea and amchur, tangy and deeply spiced — the dhaba classic eaten with rice, bhature or onion rings.",
  servings: 4,
  perServing: { calories: 540, protein: 21 },
  estCostPerServing: 0.78,
  roles: ["dinner", "lunch"],
  ingredients: [
    {
      item: "dried chickpeas, soaked overnight (or 3 1/2 cups cooked)",
      qty: "1 1/4 cups",
      cost: 0.85,
    },
    { item: "black tea bag (or 1 tsp loose tea in a sachet)", qty: "1", cost: 0.05, spansWeeks: true },
    { item: "onions, finely chopped", qty: "2", cost: 0.5 },
    { item: "ripe tomatoes, puréed (or 1 cup canned)", qty: "3", cost: 0.7 },
    { item: "garlic cloves + thumb of ginger, crushed to a paste", qty: "5 + 1", cost: 0.2, spansWeeks: true },
    { item: "neutral oil or ghee", qty: "3 tbsp", cost: 0.25, spansWeeks: true },
    { item: "cumin seeds + bay leaf", qty: "1 tsp + 1", cost: 0.1, spansWeeks: true },
    { item: "coriander, cumin, turmeric, chili powder, chole masala, amchur (dried mango)", qty: "spice blend", cost: 0.35, spansWeeks: true },
    { item: "salt; cilantro, sliced onion and lemon to finish", qty: "to taste", cost: 0.2 },
  ],
  method: [
    "Pressure-cook the soaked chickpeas with the tea bag in the water and a little salt until very soft. The tannins stain the chickpeas the characteristic dark brown — fish out the bag and keep the cooking liquid.",
    "Fry cumin and bay leaf in hot oil, then brown the onions slowly to deep gold. Add ginger-garlic and cook out.",
    "Add tomato purée with coriander, cumin, turmeric and chili and cook down until thick and the oil weeps out at the edges. Stir in chole masala and amchur for the signature sour edge.",
    "Add the chickpeas with enough cooking liquid for a thick gravy; simmer 20 minutes, crushing some chickpeas to thicken. Finish with lemon, raw onion and cilantro.",
  ],
  modernMove:
    "Cooking the chickpeas with a tea bag — an old dhaba trick — tints and tans them dark without a drop of extra fat or color powder, just tannin doing the work.",
  tags: ["legumes", "chickpeas", "curry", "punjabi", "amchur"],
};
