import type { Recipe } from "../types";

export const sopaDeGuias: Recipe = {
  slug: "sopa-de-guias",
  title: "Sopa de Guías",
  cuisine: "mexican",
  blurb:
    "The Oaxacan rainy-season pot where the whole squash plant goes in — tender vines and shoots, the yellow blossoms, baby calabacita, and fresh corn — finished with little masa dumplings. Nothing of the plant is wasted.",
  servings: 4,
  perServing: { calories: 240, protein: 7 },
  estCostPerServing: 1.1,
  roles: ["dinner", "lunch"],
  ingredients: [
    { item: "squash vines and tender shoots (guías), chopped", qty: "1 large bunch", cost: 1.2 },
    { item: "squash blossoms (flor de calabaza)", qty: "1 cup", cost: 0.8 },
    { item: "calabacita (zucchini), diced", qty: "2 small", cost: 0.6 },
    { item: "fresh corn, kernels and broken cobs", qty: "2 ears", cost: 0.8 },
    { item: "masa harina (for chochoyotes)", qty: "1 cup", cost: 0.3, spansWeeks: true },
    { item: "epazote or chepil", qty: "a few sprigs", cost: 0.2 },
    { item: "white onion, garlic", qty: "1/4 onion, 1 clove", cost: 0.2, spansWeeks: true },
    { item: "lard or oil, salt", qty: "1 tbsp + to taste", spansWeeks: true },
  ],
  method: [
    "Knead the masa harina with a little lard, salt, and warm water into a soft dough; roll into small balls and dimple each with your thumb — these are the chochoyotes.",
    "Simmer the corn (kernels and the broken cobs for their sweetness) with onion and garlic in salted water until the corn is tender.",
    "Strip the squash vines of their tough strings, chop the shoots, and add them with the diced calabacita; cook until just tender.",
    "Drop in the chochoyotes and simmer until they float and cook through, about 10 minutes.",
    "Add the blossoms and epazote at the very end so they stay bright, fish out the cobs, and check the salt before serving.",
  ],
  modernMove:
    "Simmer the broken corncobs in the broth and lift them out at the end — they give up a milky sweetness that makes the whole pot taste of high summer, then the spent cobs are all that's left to compost.",
  notes: "Use whatever the plant gives you — the dish was built around eating every edible part of the squash, from vine tip to flower.",
  zeroWasteHero: true,
  tags: ["soup", "oaxacan", "squash", "vegetable", "masa", "dinner", "whole-plant"],
  sources: [
    {
      title: "Susana Trilling — Seasons of My Heart, Sopa de Guías de Calabaza",
      url: "https://www.seasonsofmyheart.com/recipes/sopa-guias-calabaza",
      note: "authoritative Oaxacan version: vines, shoots, blossoms, corn, and chochoyones; whole-plant rainy-season context",
    },
    {
      title: "Mely Martínez — Mexico in My Kitchen, Squash Vine and Shoots Soup",
      url: "https://www.mexicoinmykitchen.com/squash-vine-and-shoots-soup/",
      note: "home-cook proportions for vines, calabacita, corn, and blossoms",
    },
    {
      title: "MexConnect — Oaxaca Squash Vine Soup with Corn Dumplings",
      url: "https://www.mexconnect.com/articles/3541-oaxaca-squash-vine-soup-with-corn-dumplings-sopa-de-guias-con-chochoyones/",
      note: "chochoyones (masa-and-lard dumplings) method and the dish's pre-Hispanic background",
    },
  ],
};
