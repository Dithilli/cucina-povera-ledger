import type { Recipe } from "../types";

export const sodaBreadIe: Recipe = {
  slug: "soda-bread-ie",
  title: "Brown Soda Bread",
  cuisine: "irish",
  blurb:
    "The daily loaf of the Irish kitchen — wholemeal flour, buttermilk and a teaspoon of bread soda, mixed and baked in under an hour with no yeast and no kneading, a cross cut deep in the top to let the fairies out.",
  servings: 8,
  perServing: { calories: 200, protein: 7 },
  estCostPerServing: 0.3,
  roles: ["base"],
  ingredients: [
    { item: "coarse wholemeal flour", qty: "2 1/2 cups", cost: 0.6 },
    { item: "plain white flour", qty: "1 cup", cost: 0.2 },
    { item: "buttermilk", qty: "1 3/4 cups", cost: 0.7 },
    { item: "bread soda (bicarbonate of soda)", qty: "1 tsp", cost: 0.03, spansWeeks: true },
    { item: "salt", qty: "1 tsp", cost: 0.02, spansWeeks: true },
    { item: "rolled oats (for the top, optional)", qty: "1 tbsp", cost: 0.05 },
  ],
  method: [
    "Heat the oven to 200°C (400°F). Whisk the wholemeal and white flours, bread soda and salt together in a big bowl, lifting to aerate.",
    "Make a well, pour in the buttermilk and stir with one hand or a wooden spoon just until it comes together into a soft, slightly sticky dough — work it as little as possible or the loaf turns heavy.",
    "Turn out onto a floured board, pat into a round about 4cm high, and set on a floured tray. Cut a deep cross most of the way through and scatter with oats.",
    "Bake 40–45 minutes, until risen, browned, and hollow-sounding when tapped on the base. Cool on a wire rack so the crust stays crisp.",
  ],
  modernMove:
    "Bread soda needs the acid in buttermilk to fizz and lift the loaf, and the gas escapes fast — so the instant the two meet, mix lightly and get it into a hot oven. Kneading or dawdling deflates it.",
  notes:
    "The constant under every Irish week: a quick daily loaf that needs no proving. Cut the cross deep — folklore says it lets the fairies out, but it also helps the dense loaf bake through.",
  zeroWasteHero: false,
  tags: ["irish", "soda-bread", "wholemeal", "buttermilk", "base", "bread"],
  sources: [
    {
      title: "Bord Bia — Traditional Brown Soda Bread",
      url: "https://www.bordbia.ie/recipes/desserts-and-baking-recipes/traditional-brown-soda-bread/",
      note: "wholemeal-and-buttermilk ratio, bread soda quantity, cross cut and bake time",
    },
  ],
};
