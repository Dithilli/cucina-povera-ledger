import type { Recipe } from "../types";

export const bakedEggsWithOnions: Recipe = {
  slug: "baked-eggs-with-onions",
  title: "Baked Eggs with Caramelized Onions",
  cuisine: "ashkenazi",
  blurb:
    "Eggs baked nestled into a deep bed of slow, jammy onions until the whites just set and the yolks stay loose and orange — and bread to wipe the dish clean.",
  servings: 4,
  perServing: { calories: 380, protein: 18 },
  estCostPerServing: 0.75,
  roles: ["dinner"],
  ingredients: [
    { item: "yellow onions, thinly sliced", qty: "4 large", cost: 1.2 },
    { item: "eggs", qty: "8 large", cost: 1.4 },
    { item: "neutral oil", qty: "3 tbsp", cost: 0.2, spansWeeks: true },
    { item: "salt", qty: "to taste", spansWeeks: true },
    { item: "black pepper", qty: "to taste", spansWeeks: true },
    { item: "bread, to serve", qty: "to serve", cost: 0.4 },
  ],
  method: [
    "Heat the oil in a wide oven-proof skillet over medium-low. Add the onions with a good pinch of salt and cook slow, stirring now and then, until collapsed, deep gold, and jammy — 30–40 minutes. This long melt is the whole dish; don't rush the color.",
    "Heat the oven to 375°F (190°C). Spread the onions into an even bed across the pan and make eight shallow wells with the back of a spoon.",
    "Crack an egg into each well. Season the eggs with salt and pepper.",
    "Bake 8–12 minutes, just until the whites are set but the yolks are still soft — pull them while they still jiggle, they carry over. Serve straight from the pan with bread to wipe the sweet onion and runny yolk.",
  ],
  modernMove:
    "Bake, don't fry: a low oven sets the whites gently and evenly while the yolks stay molten, and the onion bed steams the eggs from below so they never go rubbery. The trick is pulling the pan a minute early.",
  notes:
    "Pareve as written (oil), so it sits beside either a meat or a dairy table. The onions can be melted down a day ahead — they only get better — turning a 40-minute dish into a 12-minute supper. A close cousin of North African shakshuka, minus the tomato.",
  tags: ["egg", "onion", "baked", "pareve"],
  sources: [
    {
      title: "Claudia Roden — The Book of Jewish Food",
      note: "Ashkenazi eggs cooked with sweet melted onions as a frugal pareve supper.",
    },
    {
      title: "Gil Marks — Encyclopedia of Jewish Food",
      note: "The onion-and-egg tradition of the Eastern European Jewish kitchen.",
    },
  ],
};
