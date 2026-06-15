import type { Recipe } from "../types";

export const kreplach: Recipe = {
  slug: "kreplach",
  title: "Kreplach",
  cuisine: "ashkenazi",
  blurb:
    "Thin egg-noodle dough pockets filled with minced leftover boiled or roast meat and fried onion, pinched into triangles, boiled, and floated in chicken soup — the clever afterlife of the Sabbath meat.",
  servings: 6,
  perServing: { calories: 420, protein: 20 },
  estCostPerServing: 0.9,
  roles: ["dinner"],
  ingredients: [
    { item: "all-purpose flour", qty: "2 cups", cost: 0.3, spansWeeks: true },
    { item: "eggs", qty: "2 large + 1 for sealing", cost: 0.5 },
    { item: "cooked leftover beef or chicken (from soup or roast)", qty: "2 cups, minced", cost: 1.5 },
    { item: "yellow onion, finely chopped", qty: "1 large", cost: 0.3 },
    { item: "schmaltz", qty: "2 tbsp", cost: 0.3, spansWeeks: true },
    { item: "salt and black pepper", qty: "to taste", spansWeeks: true },
    { item: "chicken soup, to serve", qty: "to serve", cost: 0.5 },
  ],
  method: [
    "Make the dough: mound the flour, make a well, and work in the 2 eggs, a pinch of salt, and a little water until you have a smooth, firm dough. Knead a few minutes, then cover and rest 30 minutes so it rolls out thin without snapping back.",
    "Make the filling: fry the onion in the schmaltz until deep gold and soft. Mince the leftover meat fine, mix it with the fried onion, and season hard with salt and pepper. The meat is already cooked — this is its second life.",
    "Roll the dough as thin as you can on a floured board, almost translucent, and cut into 2 1/2-inch squares.",
    "Drop a teaspoon of filling on each square, brush two edges with beaten egg, fold corner to corner into a triangle, and press the edges tight to seal — no air pockets, or they'll burst.",
    "Boil in salted water 8–12 minutes until the dough is tender and the kreplach float, then lift out. Serve floating in hot chicken soup (fleishig) — or pan-fry the boiled kreplach in schmaltz until crisp.",
  ],
  modernMove:
    "Build the whole dish out of leftovers — Friday's boiled soup chicken or roast beef, minced and bound with fried onion, becomes Saturday's filling. Roll the dough nearly translucent and seal with egg-washed edges so the pockets stay tight in the pot.",
  notes:
    "Meat and schmaltz make these fleishig — serve in chicken soup, never with dairy. Kreplach are pure thrift logic: nothing of the Sabbath meat is wasted, it's reincarnated inside a dumpling. Traditionally served three times a year — before Yom Kippur, at Hoshana Rabbah, and at Purim — where the hidden meat inside the dough carries its own symbolism.",
  zeroWasteHero: true,
  tags: ["dumpling", "meat", "kreplach", "shabbos", "fleishig"],
  sources: [
    {
      title: "Wikipedia — Kreplach",
      url: "https://en.wikipedia.org/wiki/Kreplach",
      note: "Filled dumplings served in chicken soup; the three traditional serving occasions.",
    },
    {
      title: "Gil Marks — Encyclopedia of Jewish Food",
      note: "Kreplach as the thrifty afterlife of Sabbath meat and its holiday symbolism.",
    },
  ],
};
