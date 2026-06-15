import type { Recipe } from "../types";

export const beefStewIe: Recipe = {
  slug: "beef-stew-ie",
  title: "Beef & Stout Stew",
  cuisine: "irish",
  blurb:
    "Cheap chuck browned hard, then braised low in a bottle of dark stout with onions, carrots and potato until the beer's roasted, malty bitterness cooks down to a glossy near-black gravy and the beef pulls apart at the touch of a spoon.",
  servings: 4,
  perServing: { calories: 600, protein: 28 },
  estCostPerServing: 2.2,
  roles: ["dinner"],
  ingredients: [
    { item: "beef chuck, cut into 1 1/2-inch cubes", qty: "1 1/4 lb", cost: 4.5 },
    { item: "dark stout (Guinness or similar)", qty: "1 bottle (12 oz)", cost: 1.5 },
    { item: "onions, sliced", qty: "2", cost: 0.5 },
    { item: "carrots and a parsnip, chunked", qty: "3 + 1", cost: 0.7 },
    { item: "potatoes, in chunks", qty: "1 lb", cost: 0.7 },
    { item: "flour, to dust the beef", qty: "2 tbsp", cost: 0.05, spansWeeks: true },
    { item: "thyme, bay leaf, oil", qty: "few sprigs + 1", cost: 0.2, spansWeeks: true },
    { item: "salt and pepper", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Pat the beef dry, season, dust lightly with flour, and brown hard in oil in batches in a heavy pot — a deep crust is where the flavour starts.",
    "Lift out the beef, soften the onions in the same fat, then pour in the stout and scrape up every dark stuck bit from the base.",
    "Return the beef with the thyme and bay, top up with a little water to just cover, and bring to a bare simmer.",
    "Cover and braise gently, on the stove or in a low oven, for about 1 1/2 hours, then add the carrots, parsnip and potato and cook 45 minutes more until everything is tender.",
    "Let the gravy reduce until glossy, pull out the bay, check the seasoning, and serve with champ or brown soda bread.",
  ],
  modernMove:
    "Add the stout in two minds — let it bubble down hard with the onions first so its bitterness mellows into malty depth, and reduce the finished braise uncovered so the gravy turns dark and clinging rather than thin and sour.",
  notes:
    "A 20th-century pub classic rather than a famine-era dish, but built on the same frugal logic: a little tough, cheap beef stretched far by root veg and a bottle of the local stout.",
  zeroWasteHero: false,
  tags: ["beef", "stout", "stew", "irish"],
  sources: [
    {
      title: "Striped Spatula — Guinness Beef Stew",
      url: "https://stripedspatula.com/guinness-beef-stew/",
      note: "Floured, browned chuck braised in stout with onions and root vegetables, reduced to a rich gravy.",
    },
  ],
};
