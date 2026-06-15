import type { Recipe } from "../types";

export const catheadBiscuits: Recipe = {
  slug: "cathead-biscuits",
  title: "Cathead Biscuits",
  cuisine: "appalachian",
  blurb:
    "Big, craggy buttermilk-and-lard biscuits torn off by hand and dropped into the pan — each one as big as a cat's head — the daily bread of the mountain table, split for apple butter or sopping pot likker.",
  servings: 8,
  perServing: { calories: 210, protein: 4 },
  estCostPerServing: 0.3,
  roles: ["base"],
  ingredients: [
    { item: "all-purpose or soft Southern flour", qty: "2 1/4 cups", cost: 0.5, spansWeeks: true },
    { item: "lard", qty: "5 tbsp", cost: 0.5, spansWeeks: true },
    { item: "buttermilk", qty: "1 cup", cost: 0.5 },
    {
      item: "baking powder, baking soda, salt",
      qty: "for leavening",
      cost: 0.1,
      spansWeeks: true,
    },
  ],
  method: [
    "Whisk the flour with baking powder, baking soda, and salt in a big bowl.",
    "Cut in the cold lard with your fingers or a fork until the flour is crumbly like coarse cornmeal.",
    "Stir in the buttermilk until you have a soft, sticky dough — wetter than a cut biscuit, on purpose.",
    "Don't roll or cut it: pinch off cat-head-sized handfuls and drop them touching in a greased cast-iron skillet so they rise tall against each other.",
    "Bake at 450°F about 15 minutes until the craggy tops are deep gold.",
  ],
  modernMove:
    "Keep the dough wetter than you think and let the biscuits crowd the skillet — touching sides force the rise upward, giving the tall, soft-sided cathead instead of a flat cutout.",
  notes: "No biscuit cutter, no rolling pin, no waste of scraps — the hand-torn, drop method is what makes it a cathead.",
  zeroWasteHero: false,
  tags: ["appalachian", "bread", "biscuit", "buttermilk", "foundation"],
  sources: [
    {
      title: "The Seasoned Mom — Cathead Biscuits",
      url: "https://www.theseasonedmom.com/cathead-biscuits/",
      note: "lard cut into flour, wet buttermilk dough, hand-torn and crowded in cast iron",
    },
  ],
};
