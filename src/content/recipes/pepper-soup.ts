import type { Recipe } from "../types";

export const pepperSoup: Recipe = {
  slug: "pepper-soup",
  title: "Pepper Soup",
  cuisine: "west-african",
  blurb:
    "A thin, fiery, fragrant broth built on pepper-soup spice and scotch bonnet — restorative, near-zero-waste, stretching bony offcuts, fish heads, or a single piece of meat into a whole pot.",
  servings: 4,
  perServing: { calories: 450, protein: 30 },
  estCostPerServing: 1.1,
  roles: ["dinner"],
  zeroWasteHero: true,
  ingredients: [
    {
      item: "bony cuts, fish, fish heads/trimmings, or goat offcuts",
      qty: "1 1/2 lb",
      cost: 2.5,
    },
    {
      item: "pepper-soup spice mix (or ground calabash nutmeg, grains of selim, cloves)",
      qty: "2 tbsp",
      cost: 0.4,
      spansWeeks: true,
    },
    { item: "onion, chopped", qty: "1", cost: 0.4 },
    {
      item: "scotch bonnet, whole or chopped",
      qty: "1–2",
      cost: 0.4,
      spansWeeks: true,
    },
    {
      item: "fresh ginger, smashed",
      qty: "1 thumb",
      cost: 0.2,
      spansWeeks: true,
    },
    {
      item: "garlic, smashed",
      qty: "2 cloves",
      cost: 0.1,
      spansWeeks: true,
    },
    {
      item: "scent leaf / basil or cilantro, to finish",
      qty: "a handful",
      cost: 0.3,
    },
    {
      item: "water",
      qty: "about 5 cups",
    },
    { item: "salt, bouillon cube", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Rinse the meat or fish well. Simmer the bony cuts (not delicate fish yet) with onion, ginger, garlic, and whole pepper in plenty of water until tender, skimming the scum that rises.",
    "Add the pepper-soup spice mix and bouillon and let the broth simmer hard 10–15 minutes so the spices fully infuse — the broth should be aromatic, peppery, and lightly cloudy, never thick.",
    "If using fish, slide it in only for the last 6–8 minutes so it stays whole and doesn't break apart.",
    "Taste and balance salt and heat; the soup should make your nose run. Tear in scent leaf or basil off the heat.",
    "Serve piping hot in bowls as a light dinner on its own, or with a little white rice or boiled yam to stretch it further.",
  ],
  modernMove:
    "Treat it as a frugal stock pot: bones, fish heads, and trimmings other recipes throw away become the entire dish, their gelatin giving the thin broth body while the spice does the rest.",
  notes:
    "The classic restorative — eaten when sick or cold. Keep it thin; thickening it misses the point.",
  tags: ["pepper-soup", "broth", "fish", "spice", "zero-waste", "one-pot"],
};
