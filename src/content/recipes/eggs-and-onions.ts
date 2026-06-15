import type { Recipe } from "../types";

export const eggsAndOnions: Recipe = {
  slug: "eggs-and-onions",
  title: "Eggs and Onions (Eier mit Tsibeles)",
  cuisine: "ashkenazi",
  blurb:
    "Hard-boiled eggs mashed coarse with masses of onion — half fried sweet in schmaltz, half left sharp and raw — bound rich and spreadable, mounded high on dark rye. Poverty's pâté.",
  servings: 4,
  perServing: { calories: 420, protein: 20 },
  estCostPerServing: 0.55,
  roles: ["dinner", "side"],
  ingredients: [
    { item: "eggs", qty: "8 large", cost: 1.4 },
    { item: "yellow onions", qty: "2 large", cost: 0.6 },
    { item: "schmaltz (rendered chicken fat)", qty: "4 tbsp", cost: 0.5, spansWeeks: true },
    { item: "salt", qty: "to taste", spansWeeks: true },
    { item: "black pepper", qty: "to taste", spansWeeks: true },
    { item: "rye bread, to serve", qty: "to serve", cost: 0.4 },
  ],
  method: [
    "Hard-boil the eggs: cover with cold water, bring to a boil, cover, and pull off the heat for 11–12 minutes. Shock in cold water and peel. Cooling fully makes them mash clean.",
    "Finely chop both onions. Fry one onion's worth in 2 tbsp schmaltz over medium-low heat, slow and patient, until deep gold and sweet — 12–15 minutes. Leave the other onion raw; that bite is the whole point of the dish.",
    "Mash the eggs coarse with a fork — never a processor, you want curd and texture, not paste. Fold in both the fried and the raw onion, the schmaltz from the pan, and the last 2 tbsp schmaltz.",
    "Season hard with salt and a lot of black pepper, working in more schmaltz until it binds into a rich, glistening spread. Mound onto rye and eat at room temperature.",
  ],
  modernMove:
    "Run two onions, two ways — one melted slow in schmaltz for sweetness and body, one raw for the pungent top note. That contrast is what separates a real eier mit tsibeles from plain egg salad; and mash by hand so it stays craggy.",
  notes:
    "Schmaltz makes this fleishig — serve it with no dairy at the table. It keeps a few days covered in the icebox and only deepens. A spoonful with bread clears a good chunk of the day's protein with nothing but eggs and an onion.",
  tags: ["egg", "onion", "schmaltz", "fleishig"],
  sources: [
    {
      title: "Jewish Food Society — Eyerlekh Mit Tzvible (Eggs With Onion)",
      url: "https://www.jewishfoodsociety.org/recipes/eyerlekh-mit-tzvible-eggs-with-onion",
      note: "The Ashkenazi egg-and-onion dish (eier mit tsibeles) built on schmaltz-cooked onions.",
    },
    {
      title: "Gil Marks — Encyclopedia of Jewish Food",
      note: "Chopped eggs and onions (eier mit tsibeles) as a frugal schmaltz-bound spread.",
    },
  ],
};
