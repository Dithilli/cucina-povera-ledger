import type { Recipe } from "../types";

export const bastillaDjaj: Recipe = {
  slug: "bastilla-djaj",
  title: "Bastilla",
  cuisine: "moroccan",
  blurb:
    "The thrift feast: saffron-and-cinnamon chicken folded under toasted almonds in shatter-crisp warqa, then dusted with cinnamon-sugar — sweet, savory, and built from one bird stretched to a banquet.",
  servings: 4,
  perServing: { calories: 600, protein: 24 },
  estCostPerServing: 1.9,
  roles: ["dinner"],
  ingredients: [
    { item: "warqa or filo pastry sheets", qty: "10 sheets", cost: 2.0 },
    { item: "chicken thighs/legs, bone-in", qty: "1 1/4 lb", cost: 3.0 },
    { item: "onions, sliced", qty: "2", cost: 0.6 },
    { item: "almonds, blanched and toasted", qty: "3/4 cup", cost: 1.5 },
    { item: "eggs", qty: "4", cost: 1.0 },
    { item: "ginger, turmeric, saffron, cinnamon, black pepper, salt", qty: "to taste", cost: 0.4, spansWeeks: true },
    { item: "butter or smen for brushing", qty: "3 tbsp", cost: 0.3, spansWeeks: true },
    { item: "powdered sugar + cinnamon, to dust", qty: "2 tbsp", cost: 0.1, spansWeeks: true },
  ],
  method: [
    "Simmer the chicken with the onions, ginger, turmeric, saffron, pepper, and a little water until falling off the bone; lift out, cool, and shred the meat.",
    "Reduce the cooking liquid hard with the onions, then beat in the eggs and stir over low heat to a soft, curdy scramble — this binds the filling.",
    "Pulse the toasted almonds with sugar and cinnamon to a coarse sweet crumb.",
    "Brush a pan with butter and layer warqa fanned out; pour in the chicken-egg mix, scatter the almond crumb, fold the overhanging pastry over the top, and seal under a final buttered sheet.",
    "Bake at 375°F until deep gold and crisp, ~30 minutes, then invert. Dust the top with powdered sugar and lattice it with cinnamon before serving warm.",
  ],
  modernMove:
    "Don't waste the broth — reduce it with the onions and set it with eggs into a soft scramble. That curd is the glue that keeps the slice moist under the crackly shell.",
  notes:
    "One braised chicken plus a handful of almonds feeds the table. Classic for weddings and Eid; assemble ahead and bake to order.",
  tags: ["fete", "moroccan", "warqa", "almond", "feast"],
  sources: [
    {
      title: "Moroccan Living — Authentic Chicken Pastilla (Bastilla)",
      url: "https://moroccanliving.net/authentic-recipe-chicken-pastilla-bastilla/",
      note: "Confirms the three layers (spiced shredded chicken, egg-set broth, sweet almond crumb) and the powdered-sugar-and-cinnamon finish.",
    },
  ],
};
