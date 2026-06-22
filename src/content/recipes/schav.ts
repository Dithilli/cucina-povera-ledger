import type { Recipe } from "../types";

export const schav: Recipe = {
  slug: "schav",
  title: "Schav (Sorrel Soup)",
  cuisine: "ashkenazi",
  blurb:
    "Cold, lemon-sharp sorrel soup, its natural tartness tempered with sour cream and tempered egg yolk into something pale green and silky, served with a boiled potato and chopped egg — 'green borscht,' the bright sour taste of spring after a long cellar winter.",
  servings: 4,
  perServing: { calories: 320, protein: 15 },
  estCostPerServing: 1.4,
  roles: ["dinner"],
  ingredients: [
    { item: "fresh sorrel, stems stripped", qty: "1 lb", cost: 2.0 },
    { item: "sour cream", qty: "1 cup", cost: 1.5 },
    { item: "eggs", qty: "4 (2 for tempering, 2 hard-boiled)", cost: 1.0 },
    { item: "boiling potatoes", qty: "4 small", cost: 0.6 },
    { item: "onion, finely chopped", qty: "1 small", cost: 0.3 },
    { item: "sugar", qty: "1 tsp", cost: 0.05, spansWeeks: true },
    { item: "lemon juice, if needed", qty: "to taste", cost: 0.2 },
    { item: "salt", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Wash the sorrel well, strip out any tough stems, and chop it roughly. Simmer it with the chopped onion in about 6 cups of salted water; within minutes the bright leaves collapse and fade to a drab army-green — that color change is just sorrel doing what sorrel does. Cook 15–20 minutes, then add the sugar and taste; it should be pleasantly sour.",
    "Beat 2 raw eggs in a bowl. Temper them: ladle in a little of the hot soup while whisking hard, then whisk that warmed mixture back into the pot off the heat. Done gently, the yolks thicken the broth to a silky body without curdling into shreds.",
    "Chill the soup thoroughly — schav is a cold soup. Hard-boil the other 2 eggs and boil the potatoes whole until tender.",
    "Whisk the sour cream into the cold soup (or pass it at the table for each person to swirl in), softening the sourness into something creamy and pale.",
    "Serve cold, each bowl with a hot boiled potato lowered in and a scatter of chopped hard egg. Sharpen with a little extra lemon if the sorrel has mellowed too far.",
  ],
  modernMove:
    "Temper the raw egg yolks into the hot soup — whisk a ladle of the hot liquid into the beaten eggs first, then return it off the heat — so they enrich and thicken the broth to a velvety body instead of scrambling. Between the tempered yolk and the stirred-in sour cream, schav goes from a thin sour liquid to a creamy, restorative soup.",
  notes:
    "Milchig: sour cream and egg, no meat. Sorrel is fiercely tart on its own — the dairy and a pinch of sugar are there to round it, not erase it; schav should still bite. After a winter of cabbage and root cellar, that first sour-green spoonful is the taste of the year turning.",
  tags: ["sorrel", "cold", "soup", "dairy", "milchig"],
  sources: [
    {
      title: "Wikipedia — Schav",
      url: "https://en.wikipedia.org/wiki/Schav",
      note: "Cold Ashkenazi sorrel soup (green borscht); the Yiddish name and dairy service.",
    },
    {
      title: "Gil Marks — Encyclopedia of Jewish Food",
      note: "Sorrel soup as the first sour-green dish of spring, finished with egg and sour cream.",
    },
  ],
};
