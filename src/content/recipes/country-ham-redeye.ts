import type { Recipe } from "../types";

export const countryHamRedeye: Recipe = {
  slug: "country-ham-redeye",
  title: "Country Ham & Red-Eye Gravy",
  cuisine: "appalachian",
  blurb:
    "Salt-cured country ham fried hard in its own fat, then the skillet deglazed with a cup of black coffee into a thin, bitter-savory gravy that floats a red 'eye' of drippings — mountain alchemy from a hog the family raised and cured themselves.",
  servings: 4,
  perServing: { calories: 520, protein: 27 },
  estCostPerServing: 1.9,
  roles: ["dinner"],
  ingredients: [
    { item: "country (salt-cured) ham slices", qty: "3/4 lb", cost: 5.0 },
    { item: "strong black coffee", qty: "1 cup", cost: 0.15, spansWeeks: true },
    { item: "lard or a little drippings", qty: "1 tbsp", cost: 0.1, spansWeeks: true },
    { item: "brown sugar (optional)", qty: "1 tsp", cost: 0.05, spansWeeks: true },
    { item: "grits, cooked, to serve", qty: "for 4", cost: 0.6 },
    { item: "black pepper", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Trim a little fat from the ham and render it (or melt the lard) in a hot cast-iron skillet. Fry the salty ham slices about 2–3 minutes a side until browned and the edges curl. Lift them out onto warm grits.",
    "There will be dark, sticky drippings in the pan — that is the whole point. Stir in the brown sugar if using and let it bubble in the fat a few seconds.",
    "Pour in the black coffee all at once and scrape up every browned bit as it sizzles.",
    "Simmer 3–4 minutes until the gravy reduces a little and the fat floats up as a reddish 'eye' on the surface. Grind in some pepper; do not add salt — the ham brings plenty.",
    "Spoon the thin red-eye gravy over the ham and grits.",
  ],
  modernMove:
    "Coffee isn't a gimmick here — its acidity and bitterness cut the heavy salt of dry-cured ham, turning what would be one-note salinity into a balanced, savory sauce with almost no added cost.",
  notes:
    "A little of this ham goes a long way: it is intensely salty and meant to be eaten in thin slices. Save any trimmings to season a pot of soup beans.",
  zeroWasteHero: true,
  tags: ["pork", "country-ham", "red-eye", "gravy", "grits", "appalachian"],
  sources: [
    {
      title: "Taste of Southern — Country Ham and Red Eye Gravy",
      url: "https://tasteofsouthern.com/country-ham-and-red-eye-gravy/",
      note: "Salt-cured ham fried in cast iron, skillet deglazed with black coffee into red-eye gravy over grits.",
    },
  ],
};
