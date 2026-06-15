import type { Recipe } from "../types";

export const omurice: Recipe = {
  slug: "omurice",
  title: "Omurice",
  cuisine: "japanese",
  blurb:
    "Ketchup-seasoned fried rice wrapped in a soft omelette and crowned with a zigzag of ketchup — the diner-counter comfort dish built to use up cold rice and fridge scraps.",
  servings: 2,
  perServing: { calories: 620, protein: 22 },
  estCostPerServing: 0.95,
  roles: ["dinner"],
  zeroWasteHero: true,
  ingredients: [
    { item: "cold cooked rice, day-old", qty: "3 cups", cost: 0.75 },
    { item: "eggs", qty: "4", cost: 1.0 },
    { item: "chicken thigh or ham scraps, diced (or skip)", qty: "4 oz", cost: 0.7 },
    { item: "onion, finely diced", qty: "1/2", cost: 0.15 },
    { item: "carrot and any leftover vegetables, diced small", qty: "1/2 cup", cost: 0.25 },
    { item: "frozen peas", qty: "1/4 cup", cost: 0.2 },
    { item: "ketchup, plus more to finish", qty: "3 tbsp", cost: 0.2, spansWeeks: true },
    { item: "soy sauce", qty: "1 tsp", cost: 0.05, spansWeeks: true },
    { item: "butter or oil", qty: "2 tbsp", cost: 0.2, spansWeeks: true },
    { item: "salt and pepper", qty: "to taste" },
  ],
  method: [
    "Fry the onion, carrot, and chicken or ham in butter until the onion softens. Add the cold rice, breaking up the clumps, and the peas.",
    "Push the rice aside, cook the ketchup in the cleared space for 30 seconds to deepen it, then stir through the rice with the soy and seasoning until evenly coated and glossy. Pack into a bowl and keep warm.",
    "For each portion, beat 2 eggs with a pinch of salt. Pour into a buttered nonstick pan over medium heat and stir gently until just barely set on top — a soft, custardy omelette, not browned.",
    "Slide the rice mound off-center onto the omelette and fold the egg over it; or invert the bowl of rice onto a plate and drape the omelette over the top. Tidy the shape with paper towel and finish with a ribbon of ketchup.",
  ],
  modernMove:
    "It's purpose-built leftover management: cold day-old rice fries up separate and chewy instead of mushy, and any odd scrap of meat or vegetable in the fridge disappears into the ketchup rice.",
  tags: ["rice", "eggs", "fried-rice", "omelette", "leftovers", "zero-waste"],
  sources: [
    {
      title: "Namiko Chen — Just One Cookbook, Omurice (Japanese Omelette Rice)",
      url: "https://www.justonecookbook.com/omurice-japanese-omelette-rice/",
      note: "Ketchup-seasoned chicken rice wrapped in a soft custardy omelette.",
    },
  ],
};
