import type { Recipe } from "../types";

export const boxty: Recipe = {
  slug: "boxty",
  title: "Boxty",
  cuisine: "irish",
  blurb:
    "The potato pancake of the north-west counties — raw grated potato wrung bone-dry and bound with soft mash, flour and buttermilk, fried in butter until the lacy edges crisp and the middle stays pillowy.",
  servings: 4,
  perServing: { calories: 510, protein: 13 },
  estCostPerServing: 1.0,
  roles: ["dinner"],
  ingredients: [
    { item: "floury potatoes", qty: "1 1/2 lb (half grated raw, half boiled and mashed)", cost: 1.0 },
    { item: "all-purpose flour", qty: "1 cup", cost: 0.2, spansWeeks: true },
    { item: "buttermilk", qty: "1/2 cup", cost: 0.3, spansWeeks: true },
    { item: "baking soda", qty: "1/2 tsp", cost: 0.05, spansWeeks: true },
    { item: "scallions, sliced", qty: "2", cost: 0.2 },
    { item: "butter, for the pan", qty: "3 tbsp", cost: 0.4, spansWeeks: true },
    { item: "salt and pepper", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Grate half the potatoes raw onto a clean cloth, gather it up and wring out every drop of liquid you can — this is what keeps the boxty from going heavy.",
    "Boil and mash the other half, then tip both the dry grated potato and the warm mash into a bowl with the scallions.",
    "Stir in the flour and baking soda, then add buttermilk a little at a time until you have a thick, dropping batter; season well.",
    "Melt butter in a heavy skillet over medium heat, drop in mounds and flatten to thick rounds, frying 4–5 minutes a side until deep golden and crisp at the rim.",
    "Eat hot off the pan, traditionally with more butter — boxty is happy alongside a fry of bacon and egg.",
  ],
  modernMove:
    "Wring the raw grated potato until it squeaks, then let the squeezed-out liquid settle and scrape the pale starch from the bottom back into the batter — that reclaimed starch binds the cake so you need less flour and get crisper edges.",
  notes:
    "Traditional to Leitrim, Cavan, Fermanagh, Sligo and Mayo, where the rhyme runs 'boxty on the griddle, boxty in the pan'. The raw-plus-cooked potato mix is what sets it apart from a plain potato cake.",
  zeroWasteHero: false,
  tags: ["potato", "fried", "buttermilk", "irish"],
  sources: [
    {
      title: "The Kitchn — Boxty Recipe (Irish Potato Pancakes)",
      url: "https://www.thekitchn.com/boxty-recipe-23230244",
      note: "Half raw grated, half mashed potato bound with flour, baking soda and buttermilk; wring the grated potato dry.",
    },
  ],
};
