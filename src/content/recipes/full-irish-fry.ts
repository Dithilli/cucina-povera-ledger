import type { Recipe } from "../types";

export const fullIrishFry: Recipe = {
  slug: "full-irish-fry",
  title: "The Full Irish (as supper)",
  cuisine: "irish",
  blurb:
    "The whole fry-up reframed as a thrifty weeknight tea — rashers, a banger, a runny egg, a slice each of white and black pudding, fried bread to mop the lot, and a spoonful of beans for the protein floor.",
  servings: 4,
  perServing: { calories: 660, protein: 30 },
  estCostPerServing: 1.9,
  roles: ["dinner"],
  ingredients: [
    { item: "back bacon rashers", qty: "8 rashers", cost: 2.4 },
    { item: "pork breakfast sausages", qty: "4", cost: 1.6 },
    { item: "eggs", qty: "4", cost: 0.8 },
    { item: "white pudding, sliced", qty: "4 rounds", cost: 0.8 },
    { item: "black pudding, sliced", qty: "4 rounds", cost: 0.8 },
    { item: "stale soda or batch bread", qty: "4 slices", cost: 0.3 },
    { item: "tin of baked beans", qty: "1 (400g)", cost: 0.6 },
    { item: "butter or bacon dripping", qty: "2 tbsp", cost: 0.2, spansWeeks: true },
    { item: "salt and pepper", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Start the sausages in a cold heavy pan over low-medium heat and let them brown slowly, turning, for about 12 minutes — rushing them splits the skins. Push to one side and keep warm.",
    "Lay in the rashers and the slices of white and black pudding. Fry the rashers to your liking and the pudding rounds 2–3 minutes a side until the cut faces are crisp and the centres soft.",
    "Warm the beans in a small pot. Fry the bread in the rendered bacon fat until golden and crisp on both sides.",
    "Crack the eggs into the hot fat last and fry to a set white with a soft yolk, spooning a little fat over the tops.",
    "Build each plate: rashers, sausage, the two puddings, fried egg and fried bread, with a spoon of beans alongside. Eat at once.",
  ],
  modernMove:
    "Render the sausages and rashers first, then cook everything else in that one shared fat — the bread and pudding drink up the smoky dripping, so nothing on the plate tastes plain.",
  notes:
    "The fry is a Sunday-morning institution stretched to feed a family at night for the price of the meat. White pudding (oat-and-pork) is the cheap thrift sausage that pads the plate.",
  zeroWasteHero: true,
  tags: ["irish", "fry-up", "pork", "eggs", "dinner"],
  sources: [
    {
      title: "Jolly Posh Foods — Full Irish Breakfast",
      url: "https://jollyposhfoods.com/blogs/recipes/full-irish-breakfast",
      note: "the fry-up component list and the one-pan shared-dripping method",
    },
  ],
};
