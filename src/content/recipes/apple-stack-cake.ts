import type { Recipe } from "../types";

export const appleStackCake: Recipe = {
  slug: "apple-stack-cake",
  title: "Apple Stack Cake",
  cuisine: "appalachian",
  blurb:
    "The mountain wedding cake — five or six thin molasses cake layers spread with spiced dried-apple filling, then left to ripen for days until the layers go soft and the whole thing eats like an apple-spice pudding.",
  servings: 12,
  perServing: { calories: 430, protein: 6 },
  estCostPerServing: 0.95,
  roles: ["dinner"],
  ingredients: [
    { item: "dried apples", qty: "1 lb", cost: 4.0 },
    { item: "brown sugar", qty: "1/2 cup", cost: 0.3, spansWeeks: true },
    {
      item: "cinnamon, ginger, nutmeg, cloves",
      qty: "to spice the apples",
      cost: 0.2,
      spansWeeks: true,
    },
    { item: "all-purpose flour", qty: "5 cups", cost: 1.0, spansWeeks: true },
    { item: "sorghum molasses", qty: "1 cup", cost: 2.0 },
    { item: "lard or shortening", qty: "1/2 cup", cost: 0.6, spansWeeks: true },
    { item: "sugar", qty: "1 cup", cost: 0.5, spansWeeks: true },
    { item: "eggs", qty: "2", cost: 0.6 },
    { item: "buttermilk", qty: "1 cup", cost: 0.5 },
    {
      item: "baking soda, baking powder, salt",
      qty: "for leavening",
      cost: 0.1,
      spansWeeks: true,
    },
  ],
  method: [
    "Simmer the dried apples in water until very soft, then mash with brown sugar and the warm spices into a thick, dark, spreadable filling.",
    "Cream the lard with sugar, beat in the eggs and sorghum molasses, then work in the flour, leavening, salt, and buttermilk to a stiff dough almost like cookie dough.",
    "Press 1 cup of dough thin into each greased pan and bake the layers one at a time, 8–10 minutes, until set like a soft shortbread; you want five or six.",
    "Stack the cooled layers with the apple filling spread thick between each, finishing with apples on top.",
    "Wrap and let the cake ripen at least two or three days — the filling weeps into the layers and turns the cake moist and tender. That waiting is the recipe.",
  ],
  modernMove:
    "Resist cutting it the day you bake it. The transformation from dry stacked biscuit to soft spiced cake happens entirely during the three-day ripen, which is why it was always baked ahead of the wedding.",
  notes: "Sorghum molasses, not sugar, was the mountain sweetener; tradition held that each guest family baked one layer and the bride's apples held them together.",
  zeroWasteHero: false,
  tags: ["appalachian", "cake", "dried-apples", "molasses", "celebration", "dessert"],
  sources: [
    {
      title: "Our State — Appalachian Apple Stack Cake",
      url: "https://www.ourstate.com/appalachian-apple-stack-cake/",
      note: "sorghum molasses thin layers, dried-apple filling, multi-day ripening tradition",
    },
  ],
};
