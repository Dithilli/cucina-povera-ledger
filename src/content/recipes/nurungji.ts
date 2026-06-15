import type { Recipe } from "../types";

export const nurungji: Recipe = {
  slug: "nurungji",
  title: "Nurungji",
  cuisine: "korean",
  blurb:
    "The toasted golden crust of rice scorched onto the bottom of the pot — eaten as a nutty cracker or simmered with water into a soothing porridge (nurungji-bap). The original Korean thrift dish: the part other cuisines scrape off and bin is here the prize.",
  servings: 4,
  perServing: { calories: 460, protein: 9 },
  estCostPerServing: 0.4,
  roles: ["dinner", "side"],
  ingredients: [
    {
      item: "cooked short-grain rice (freshly steamed, or leftover)",
      qty: "4 cups",
      cost: 0.9,
    },
    { item: "water (for the simmered porridge version)", qty: "4-5 cups" },
    {
      item: "a pinch of salt, to finish",
      qty: "to taste",
      cost: 0.02,
      spansWeeks: true,
    },
    {
      item: "optional: a few drops of toasted sesame oil, or a side of kimchi",
      qty: "to taste",
      cost: 0.3,
      spansWeeks: true,
    },
  ],
  method: [
    "To make the crust: press warm cooked rice in an even half-inch layer across the bottom of a heavy dry pan or pot over low-medium heat. Leave it completely undisturbed for 10-15 minutes — resist the urge to stir — so it dries and toasts into a single golden, fragrant sheet that smells of popcorn.",
    "When the underside is deep amber and lifts away in one crisp piece, slide it out. Eaten as is, broken into shards, this is nurungji — a frugal snack and the natural by-product of every pot of rice cooked the old way, where the scorched bottom layer is a treat, not waste.",
    "To make nurungji-bap (the porridge): leave the crust in the pot, pour in the water, and bring to a gentle simmer. Scrape and stir as the crust softens and releases its toasty flavor into the water, 8-10 minutes, until you have a loose, comforting rice soup the color of weak tea.",
    "Season with the barest pinch of salt and finish, if you like, with a few drops of sesame oil. Serve hot — traditionally at the very end of a meal to clean the palate and stretch the last of the pot, or on its own as a gentle supper with a little kimchi alongside.",
  ],
  modernMove:
    "A heavy pan and total patience — no stirring — is all it takes to deliberately make nurungji from any pot of rice, turning what looks like the pot's accident into its best part. The same scorched crust eats two ways: crisp by hand, or simmered soft into porridge.",
  notes:
    "Born of the cast-iron gamasot, where rice always left a toasted crust behind; nothing in the pot was ever wasted. Today you can make it on purpose from leftover rice that's gone hard, reviving it into either a cracker or a bowl of soup.",
  zeroWasteHero: true,
  tags: ["rice", "scorched-rice", "porridge", "leftovers", "thrift", "vegan"],
  sources: [
    {
      title: "Maangchi — Rice, scorched rice, & scorched rice tea (Bap, nurungji, & sungnyung)",
      url: "https://www.maangchi.com/recipe/rice",
      note: "Deliberately forming the scorched-rice crust and simmering it into porridge",
    },
  ],
};
