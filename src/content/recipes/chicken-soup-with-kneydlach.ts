import type { Recipe } from "../types";

export const chickenSoupWithKneydlach: Recipe = {
  slug: "chicken-soup-with-kneydlach",
  title: "Chicken Soup with Kneydlach",
  cuisine: "ashkenazi",
  blurb:
    "Golden broth coaxed slow from a whole bird with onion, carrot, celery, parsnip, and dill, floated with light matzo-meal-and-schmaltz dumplings — the Sabbath soup they call Jewish penicillin.",
  servings: 6,
  perServing: { calories: 380, protein: 24 },
  estCostPerServing: 1.4,
  roles: ["dinner"],
  ingredients: [
    { item: "whole chicken (with feet, if you can get them)", qty: "1 (3–4 lb)", cost: 6.0 },
    { item: "yellow onion, halved", qty: "1 large", cost: 0.3 },
    { item: "carrots", qty: "3", cost: 0.5 },
    { item: "celery stalks", qty: "2", cost: 0.3 },
    { item: "parsnip", qty: "1", cost: 0.4 },
    { item: "fresh dill and parsley", qty: "1 small bunch", cost: 0.5 },
    { item: "matzo meal", qty: "1 cup", cost: 0.6, spansWeeks: true },
    { item: "eggs (for kneydlach)", qty: "3 large", cost: 0.5 },
    { item: "schmaltz (for kneydlach)", qty: "3 tbsp", cost: 0.4, spansWeeks: true },
    { item: "salt and black pepper", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Put the whole chicken (and the feet) in a tall pot with the onion, carrots, celery, and parsnip. Cover with cold water by an inch or two, bring slowly toward a boil, and skim the gray foam carefully as it rises — this is what keeps the broth clear and golden.",
    "Drop to the barest simmer, never a rolling boil. Add the dill and parsley stems and let it go gently 2–3 hours, until the broth is deep gold and rich. Salt toward the end.",
    "Make the kneydlach: beat the eggs with the schmaltz, a splash of the warm broth, salt, and pepper, then stir in the matzo meal until you have a soft batter. Chill 30 minutes so it firms up — cold batter and a gentle gob of fat make light, floating dumplings.",
    "With wet hands, roll the batter into loose walnut-sized balls. Drop into a wide pot of gently simmering salted water (or broth), cover, and simmer 30–40 minutes without lifting the lid — they should swell and turn fluffy all the way through.",
    "Lift the chicken out, pull the meat for another meal, and strain the broth. Serve the clear golden soup with a few coins of the cooked carrot, fresh dill, and the kneydlach floating on top.",
  ],
  modernMove:
    "Two levers make the broth: chicken feet for the gelatin that gives it body and a true gold color, and a bare quiver of a simmer (never a boil) so it stays clear instead of clouding. For floating-light kneydlach, fold the schmaltz in gently, chill the batter, and never peek while they cook.",
  notes:
    "Schmaltz and chicken make this fleishig — no dairy. The genius is the economy: one whole bird gives a feast's worth of broth, and the boiled meat pulled off the bones feeds a second meal entirely (chicken salad, a filling for kreplach, a quick hash). The carcass simmered again stretches even further.",
  tags: ["soup", "chicken", "matzo-ball", "shabbos", "fleishig"],
  sources: [
    {
      title: "Wikipedia — Matzah ball",
      url: "https://en.wikipedia.org/wiki/Matzah_ball",
      note: "Kneydlach made from matzah meal, eggs, water, and schmaltz, served in chicken soup.",
    },
    {
      title: "Joan Nathan — Jewish Cooking in America",
      note: "Ashkenazi chicken soup (Jewish penicillin) and light matzo-ball technique.",
    },
  ],
};
