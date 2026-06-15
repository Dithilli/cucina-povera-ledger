import type { Recipe } from "../types";

export const potatoCakes: Recipe = {
  slug: "potato-cakes",
  title: "Irish Potato Cakes",
  cuisine: "irish",
  blurb:
    "Yesterday's mash given a second life — pressed with a little flour and an egg into soft rounds, griddled in butter until each face is freckled gold and crisp, then eaten hot with yet more butter soaking in.",
  servings: 4,
  perServing: { calories: 460, protein: 12 },
  estCostPerServing: 0.8,
  roles: ["dinner"],
  ingredients: [
    { item: "leftover mashed potato (cold)", qty: "3 cups", cost: 0.9 },
    { item: "all-purpose flour", qty: "3/4 cup", cost: 0.15, spansWeeks: true },
    { item: "egg", qty: "1", cost: 0.25 },
    { item: "scallions or chives, chopped", qty: "3 tbsp", cost: 0.2 },
    { item: "butter, for the griddle", qty: "3 tbsp", cost: 0.4, spansWeeks: true },
    { item: "salt and black pepper", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Let the cold mash come to room temperature, then mix in the egg, scallions, salt and pepper.",
    "Work in just enough flour to make a soft dough that holds together — too much and the cakes turn tough, so add it a spoon at a time.",
    "Turn out onto a floured board, press to about a half-inch thick, and cut into rounds or farl-style triangles.",
    "Melt butter on a griddle or heavy skillet over medium heat and fry the cakes 4–5 minutes a side until a deep golden crust forms.",
    "Serve straight from the pan with a knob of butter melting on top, as part of a fry or alongside a bowl of stew.",
  ],
  modernMove:
    "Keep the dough as wet as you dare and bind with egg rather than piling in flour — the crisp shell comes from butter and a hot pan, not from a dry, bready batter, so the inside stays creamy.",
  notes:
    "The thrifty backbone of the Irish kitchen: never waste the leftover mash. Cut into triangles they become potato farls, a fixture of the Ulster fry.",
  zeroWasteHero: true,
  tags: ["potato", "leftovers", "griddle", "irish"],
  sources: [
    {
      title: "Irish American Mom — Irish Potato Cakes",
      url: "https://www.irishamericanmom.com/irish-potato-cakes/",
      note: "Leftover mash bound with flour and egg, griddled in butter until golden.",
    },
  ],
};
