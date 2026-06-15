import type { Recipe } from "../types";

export const friedMush: Recipe = {
  slug: "fried-mush",
  title: "Fried Cornmeal Mush",
  cuisine: "appalachian",
  blurb:
    "Cornmeal cooked down to a thick porridge, poured into a pan to set overnight, then sliced and fried in lard until the edges shatter and the inside stays soft — the staple grain stretched into a crisp, frugal supper.",
  servings: 4,
  perServing: { calories: 460, protein: 12 },
  estCostPerServing: 0.7,
  roles: ["dinner"],
  ingredients: [
    { item: "stone-ground cornmeal", qty: "1 1/2 cups", cost: 0.55 },
    { item: "water", qty: "4 1/2 cups", cost: 0 },
    { item: "salt", qty: "1 1/2 tsp", spansWeeks: true },
    { item: "lard or bacon grease, for frying", qty: "3 tbsp", cost: 0.2, spansWeeks: true },
    { item: "two eggs, fried, to serve", qty: "for 4", cost: 0.5 },
    { item: "sorghum or molasses, to finish", qty: "a drizzle", cost: 0.3, spansWeeks: true },
  ],
  method: [
    "Bring 3 cups of the water to a boil with the salt. Whisk the cornmeal into the remaining cold water to make a slurry — this keeps it from clumping.",
    "Pour the slurry into the boiling water in a steady stream, whisking, then drop the heat and cook 20–25 minutes, stirring often, until it is very thick and pulls away from the pan.",
    "Scrape the mush into a greased loaf pan, smooth the top, and chill until cold and firm — overnight is best.",
    "Turn the set mush out and slice it into 1/2-inch slabs. Fry them in hot lard, 4–5 minutes a side, without crowding, until deeply golden and crisp.",
    "Serve hot with a fried egg and a drizzle of sorghum — savory and sweet, the way it was eaten morning or night.",
  ],
  modernMove:
    "The overnight chill is the technique that matters: as it cools the cornmeal sets into a sliceable cake, so a pot of plain mush becomes crisp-edged fried slabs the next day with nothing added but a little fat.",
  notes:
    "Day-old leftover mush is the whole idea — this began as a way to use up the morning's porridge. The same set mush is the base of scrapple when pork bits are worked in.",
  zeroWasteHero: true,
  tags: ["cornmeal", "vegetarian", "fried", "thrift", "appalachian"],
  sources: [
    {
      title: "These Old Cookbooks — Old-Fashioned Fried Cornmeal Mush",
      url: "https://www.theseoldcookbooks.com/old-fashioned-fried-cornmeal-mush/",
      note: "Cornmeal porridge set firm overnight, sliced and fried crisp, served with syrup.",
    },
  ],
};
