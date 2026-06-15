import type { Recipe } from "../types";

export const zosui: Recipe = {
  slug: "zosui",
  title: "Zosui (Savory Rice Soup)",
  cuisine: "japanese",
  blurb:
    "Cooked rice simmered loose in seasoned dashi with whatever the kitchen offers — a knob of tofu, a handful of greens, an egg stirred through — into a warming savory rice soup. The everyday way a small amount of rice and a pot of stock feed a household, and the gentlest dinner in the repertoire.",
  servings: 4,
  perServing: { calories: 500, protein: 19 },
  estCostPerServing: 0.8,
  roles: ["dinner"],
  ingredients: [
    { item: "dashi (kombu + bonito, or kombu-shiitake)", qty: "5 cups", cost: 0.5, spansWeeks: true },
    { item: "cooked rice, rinsed of surface starch", qty: "2–3 cups", cost: 0.6 },
    { item: "egg, beaten", qty: "2", cost: 0.5 },
    { item: "firm tofu, small dice", qty: "1/2 block (7 oz)", cost: 0.8 },
    { item: "greens — spinach, napa cabbage, or daikon leaves", qty: "2 handfuls", cost: 0.5 },
    { item: "mushrooms, sliced (optional)", qty: "a few", cost: 0.5 },
    { item: "soy sauce, mirin, salt", qty: "to season", cost: 0.3, spansWeeks: true },
    { item: "scallion, nori, shichimi to finish", qty: "to serve", cost: 0.3, spansWeeks: true },
  ],
  method: [
    "Season the dashi to a drinkable savory broth with soy sauce, a little mirin, and salt. Add tofu and mushrooms and simmer a couple of minutes to warm them through.",
    "Rinse the cooked rice briefly to wash off surface starch, then add it to the broth with the greens. Simmer just until the rice is hot and loosened and the greens have wilted — keep it soupy, not thick.",
    "Stream the beaten egg over the top, count a few seconds, then stir once so it sets in soft ribbons. Turn off the heat immediately.",
    "Ladle into bowls and finish with scallion, torn nori, and a pinch of shichimi togarashi.",
  ],
  modernMove:
    "Rinsing the day-old rice before it hits the broth is what separates a clean, brothy zosui from a starchy congee — the grains swell but stay separate. Folding the egg in off the heat keeps it tender, and seasoning the dashi to taste like soup means every spoonful is balanced.",
  notes:
    "Zosui is the broader, anytime cousin of ojiya: it doesn't need a hot-pot to exist, only leftover rice and a pot of dashi, so it's the catch-all for cold rice and the last of any vegetable. Bulk it with more tofu and egg for protein; thin it for a sickbed; load it with greens for an everyday dinner. Nothing is wasted and nothing is bought new.",
  zeroWasteHero: true,
  tags: ["rice", "soup", "dashi", "leftovers", "tofu", "egg", "zero-waste"],
  sources: [
    {
      title: "Namiko Chen — Just One Cookbook, Zosui (Japanese Rice Soup)",
      url: "https://www.justonecookbook.com/zosui-japanese-rice-soup/",
      note: "Rinsing cooked rice before it hits seasoned dashi so the grains stay distinct, with egg folded off the heat.",
    },
  ],
};
