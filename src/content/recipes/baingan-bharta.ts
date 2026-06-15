import type { Recipe } from "../types";

export const bainganBharta: Recipe = {
  slug: "baingan-bharta",
  title: "Baingan Bharta",
  cuisine: "north-indian",
  blurb:
    "A whole eggplant charred over the flame until smoky, then mashed into a frying onion-tomato masala — peasant smokiness from a single cheap vegetable.",
  servings: 4,
  perServing: { calories: 450, protein: 8 },
  estCostPerServing: 0.8,
  roles: ["dinner"],
  ingredients: [
    { item: "large eggplant (baingan)", qty: "1 1/2 lb (1 big)", cost: 1.2 },
    { item: "onions, finely chopped", qty: "2", cost: 0.5 },
    { item: "tomatoes, chopped", qty: "2", cost: 0.7 },
    { item: "ginger-garlic, grated", qty: "1 tbsp", cost: 0.2, spansWeeks: true },
    { item: "green chilies, chopped", qty: "2", cost: 0.15, spansWeeks: true },
    { item: "cumin seeds", qty: "1 tsp", cost: 0.1, spansWeeks: true },
    {
      item: "turmeric, coriander powder, garam masala",
      qty: "1 tsp each",
      cost: 0.2,
      spansWeeks: true,
    },
    { item: "mustard or other oil", qty: "3 tbsp", cost: 0.3, spansWeeks: true },
    { item: "cilantro to finish", qty: "small handful", cost: 0.2 },
    { item: "salt", qty: "to taste" },
  ],
  method: [
    "Rub the eggplant with a little oil, prick it a few times, and roast it directly over a gas flame (or under a broiler), turning, until the skin is blistered black all over and the flesh has collapsed. Cool, peel off the charred skin, and mash the smoky flesh.",
    "Heat the oil and crackle the cumin. Fry the onions until deep golden, then add ginger-garlic and green chili for a minute.",
    "Add the tomatoes with turmeric and coriander powder and cook down hard until the masala is jammy and releases oil.",
    "Fold in the mashed eggplant and salt and fry together for several minutes, mashing it into the masala so the smoke carries through. Finish with garam masala and cilantro, and serve with roti.",
  ],
  modernMove:
    "Charring the whole eggplant over open flame before mashing gives a deep smoky bharta that no amount of spice can fake — the smoke, not the oil, is the luxury here.",
  tags: ["sabzi", "eggplant", "baingan", "smoked", "mash"],
};
