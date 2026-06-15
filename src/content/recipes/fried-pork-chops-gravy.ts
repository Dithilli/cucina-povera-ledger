import type { Recipe } from "../types";

export const friedPorkChopsGravy: Recipe = {
  slug: "fried-pork-chops-gravy",
  title: "Fried Pork Chops & Gravy",
  cuisine: "appalachian",
  blurb:
    "Flour-dredged chops fried crisp in a cast-iron skillet, then a milk gravy whisked up from the browned bits in the pan — the mountain way of stretching a couple of chops to feed the whole table over biscuits or potatoes.",
  servings: 4,
  perServing: { calories: 600, protein: 28 },
  estCostPerServing: 1.7,
  roles: ["dinner"],
  ingredients: [
    { item: "bone-in pork chops", qty: "4 (about 1.25 lb)", cost: 4.5 },
    { item: "all-purpose flour", qty: "1/2 cup", cost: 0.1, spansWeeks: true },
    { item: "lard or bacon grease", qty: "3 tbsp", cost: 0.2, spansWeeks: true },
    { item: "whole milk", qty: "2 cups", cost: 0.5 },
    { item: "potatoes, boiled, to serve", qty: "1.5 lb", cost: 0.7 },
    { item: "black pepper", qty: "lots", cost: 0.1, spansWeeks: true },
    { item: "salt", qty: "to taste" },
  ],
  method: [
    "Pat the chops dry, season with salt and pepper, and dredge them in flour, knocking off the excess. Keep the dredging flour.",
    "Fry the chops in the hot lard in a cast-iron skillet, 4–5 minutes a side, until deep golden and just cooked through. Set them on a plate.",
    "Pour off all but about 3 tablespoons of the fat, then whisk 3 tablespoons of the leftover dredging flour into it and cook the roux 2 minutes, scraping up every brown speck.",
    "Whisk in the milk gradually and simmer until the gravy is smooth and thick. Season hard with black pepper.",
    "Return the chops and their juices to warm through, and serve over boiled potatoes with gravy spooned on top.",
  ],
  modernMove:
    "Building the gravy from the fond — the browned dredging flour stuck to the skillet — is what carries the pork flavor into a sauce that makes two pounds of chops feed four.",
  tags: ["pork", "pork-chops", "gravy", "cast-iron", "potatoes", "appalachian"],
  sources: [
    {
      title: "The Country Cook — Country Fried Pork Chops and Gravy",
      url: "https://www.thecountrycook.net/country-fried-pork-chops-and-gravy/",
      note: "Flour-dredged skillet chops finished with a milk gravy built from the pan drippings.",
    },
  ],
};
