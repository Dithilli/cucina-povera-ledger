import type { Recipe } from "../types";

export const johnnycakes: Recipe = {
  slug: "johnnycakes",
  title: "Johnnycakes",
  cuisine: "appalachian",
  blurb:
    "The oldest bread in the mountains — cornmeal scalded with hot water and a little fat, then dropped onto a hot greased griddle into lacy-edged cakes, crisp outside and tender within, that fed settlers and homesteaders for centuries.",
  servings: 4,
  perServing: { calories: 440, protein: 13 },
  estCostPerServing: 0.8,
  roles: ["dinner"],
  ingredients: [
    { item: "stone-ground cornmeal", qty: "2 cups", cost: 0.7 },
    { item: "boiling water", qty: "2 cups", cost: 0 },
    { item: "salt", qty: "1 tsp", spansWeeks: true },
    { item: "bacon grease or lard, for the batter and griddle", qty: "3 tbsp", cost: 0.2, spansWeeks: true },
    { item: "milk, to loosen", qty: "1/2 cup", cost: 0.15 },
    { item: "soup beans or greens, to serve", qty: "for 4", cost: 0.9 },
  ],
  method: [
    "Stir the salt into the cornmeal, then pour the boiling water over it, whisking hard until it makes a thick, smooth scald. Stir in 1 tablespoon of the grease.",
    "Let it stand 10 minutes to soften the meal, then loosen with the milk to a thick, droppable batter.",
    "Heat a cast-iron griddle over medium and slick it well with the remaining grease.",
    "Drop the batter in spoonfuls, flattening each into a thin cake. Fry slowly, 4–5 minutes a side, resisting the urge to flip early, until the edges lace and the cakes are deep golden and crisp.",
    "Serve hot off the griddle alongside a bowl of soup beans or a mess of greens, with the bean pot-likker to dip them in.",
  ],
  modernMove:
    "Scalding the meal with boiling water before it hits the griddle gelatinizes the corn starch so the cakes hold together and crisp without flour or eggs — the trick that makes a true johnnycake from three pantry staples.",
  notes:
    "The plainest mountain bread there is: cornmeal, water, salt, fat. Cook them low and slow so the crust forms before the inside dries out.",
  zeroWasteHero: false,
  tags: ["cornmeal", "vegetarian", "griddle", "bread", "appalachian"],
  sources: [
    {
      title: "The Daring Gourmet — Traditional Johnny Cakes",
      url: "https://www.daringgourmet.com/traditional-johnny-cakes/",
      note: "Cornmeal scalded with boiling water, salt, and fat, dropped onto a hot griddle into crisp cakes.",
    },
  ],
};
