import type { Recipe } from "../types";

export const irishOatmealBase: Recipe = {
  slug: "irish-oatmeal-base",
  title: "Steel-Cut Oatmeal Base",
  cuisine: "irish",
  blurb:
    "A pot of steel-cut oats simmered slow with a pinch of salt until thick, nutty and creamy — eaten as porridge or kept by as the oat thickener that binds white pudding, stuffs breads and stretches a stew.",
  servings: 4,
  perServing: { calories: 160, protein: 6 },
  estCostPerServing: 0.2,
  roles: ["base"],
  ingredients: [
    { item: "steel-cut (pinhead) oatmeal", qty: "1 cup", cost: 0.4 },
    { item: "water", qty: "3 1/2 cups", cost: 0 },
    { item: "milk (optional, for porridge)", qty: "1/2 cup", cost: 0.15 },
    { item: "salt", qty: "1/2 tsp", cost: 0.02, spansWeeks: true },
  ],
  method: [
    "Bring the water (and milk, if using) to a boil with the salt in a heavy pot.",
    "Stir in the steel-cut oats, drop the heat to a low simmer, and cook uncovered 25–30 minutes, stirring now and then, until the grains swell and the pot turns thick and creamy.",
    "For porridge, loosen with a splash more milk and serve hot. For a base, cook it a touch thicker and stiffer.",
    "Cooled and stored, the thick oatmeal becomes the binder folded into white pudding and stuffings, or the thickener stirred into soups and the brown bread batter.",
  ],
  modernMove:
    "Toast the dry pinhead oats in the empty pot for a minute before the water goes in — it deepens the nutty flavour and is the difference between flat porridge and oats that taste of themselves.",
  notes:
    "Pinhead oatmeal is the quiet foundation of the Irish larder: breakfast porridge, the oat in white pudding, body in soda and oaten breads. Make a big pot; it keeps days in the fridge.",
  zeroWasteHero: true,
  tags: ["irish", "oats", "oatmeal", "porridge", "base"],
  sources: [
    {
      title: "Meats and Sausages — White Pudding with Oatmeal",
      url: "https://www.meatsandsausages.com/sausage-recipes/pudding-white",
      note: "steel-cut/pinhead oatmeal as the binding base of white pudding and oaten dishes",
    },
  ],
};
