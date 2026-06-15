import type { Recipe } from "../types";

export const friedTatersOnions: Recipe = {
  slug: "fried-taters-onions",
  title: "Fried Taters & Onions",
  cuisine: "appalachian",
  blurb:
    "Sliced potatoes and onion left to crust up undisturbed in a cast-iron skillet of bacon grease — the daily hill-country side that, with a wedge of cornbread, becomes the whole supper.",
  servings: 4,
  perServing: { calories: 440, protein: 14 },
  estCostPerServing: 0.75,
  roles: ["dinner"],
  ingredients: [
    { item: "potatoes", qty: "2 lb, sliced", cost: 1.2 },
    { item: "onion", qty: "1 large, sliced", cost: 0.4 },
    { item: "bacon", qty: "3 slices", cost: 0.9 },
    { item: "bacon grease, salt, pepper", qty: "to cook", cost: 0.2, spansWeeks: true },
    { item: "skillet cornbread", qty: "4 wedges", cost: 1.0 },
  ],
  method: [
    "Slice the potatoes thin and pat them dry; cut the onion in chunks a touch bigger than the potato.",
    "Fry the bacon crisp in a cast-iron skillet, lift it out, and leave the drippings behind.",
    "Lay the potatoes in the hot grease in an even layer and LEAVE THEM ALONE several minutes to crust before turning.",
    "Once a golden crust forms, fold in the onion, salt, and pepper, and keep frying, turning only now and then, until both are tender inside and brown at the edges.",
    "Crumble the bacon back over, and serve hot with cornbread — taters and bread, a supper on their own.",
  ],
  modernMove:
    "Resist stirring. Letting the potatoes sit untouched against the hot iron is what builds the golden crust; constant flipping just steams them into mush.",
  notes:
    "The everyday cast-iron side that doubled as dinner in lean times — cheap, filling, and made of what was always in the cellar.",
  zeroWasteHero: false,
  tags: ["potatoes", "appalachian", "pork"],
  sources: [
    {
      title: "Appalachian Fried Potatoes (fried taters) — My Kitchen Little",
      url: "https://mykitchenlittle.com/2024/11/06/appalachian-fried-potatoes/",
      note: "potatoes and onion crusted up undisturbed in bacon drippings in a cast-iron skillet",
    },
  ],
};
