import type { Recipe } from "../types";

export const chowChow: Recipe = {
  slug: "chow-chow",
  title: "Chow Chow",
  cuisine: "appalachian",
  blurb:
    "The end-of-garden relish — cabbage, green tomato, onion, and peppers cleared off the vines before frost, salted down and canned tangy-sweet in turmeric vinegar, then spooned bright and sharp over a bowl of soup beans all winter.",
  servings: 32,
  perServing: { calories: 30, protein: 1 },
  estCostPerServing: 0.2,
  roles: ["base"],
  ingredients: [
    { item: "cabbage, finely chopped", qty: "4 cups", cost: 1.2 },
    { item: "green tomatoes, chopped", qty: "3 cups", cost: 1.0 },
    { item: "onions, chopped", qty: "2 cups", cost: 0.8 },
    { item: "bell and hot peppers, chopped", qty: "2 cups", cost: 1.2 },
    { item: "canning salt", qty: "1/4 cup", cost: 0.2, spansWeeks: true },
    { item: "cider vinegar", qty: "3 cups", cost: 1.5, spansWeeks: true },
    { item: "sugar", qty: "1 1/2 cups", cost: 0.8, spansWeeks: true },
    {
      item: "mustard seed, celery seed, turmeric, dry mustard",
      qty: "to spice",
      cost: 0.4,
      spansWeeks: true,
    },
  ],
  method: [
    "Toss all the chopped vegetables with the canning salt and let them stand overnight to draw out the water.",
    "Drain well and press out the brine the next day.",
    "Bring the vinegar, sugar, and spices to a boil in a big heavy pot, then add the drained vegetables and simmer 10–15 minutes until just tender and bright.",
    "Pack hot into sterilized jars, leaving headspace, and process in a boiling-water bath to seal for the winter pantry.",
    "Spoon over soup beans, greens, or hot dogs once it's had a week or two for the flavor to settle.",
  ],
  modernMove:
    "The overnight salt-and-drain is non-negotiable — it pulls the water that would otherwise dilute the brine, so the relish stays crisp and the vinegar stays sharp through months on the shelf.",
  notes: "Every family's chow chow differed by whatever the garden had left at frost; this is the cabbage-and-green-tomato baseline that tops a winter bean bowl.",
  zeroWasteHero: true,
  tags: ["appalachian", "relish", "pickle", "canning", "foundation", "zero-waste"],
  sources: [
    {
      title: "Southern Plate — Granny's Chow Chow Recipe",
      url: "https://www.southernplate.com/grannys-chow-chow-recipe/",
      note: "end-of-garden vegetables, overnight salt, turmeric-vinegar brine, water-bath canned",
    },
  ],
};
