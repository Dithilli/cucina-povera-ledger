import type { Recipe } from "../types";

export const redBeansAndRice: Recipe = {
  slug: "red-beans-and-rice",
  title: "Red Beans and Rice",
  cuisine: "american-south",
  blurb:
    "New Orleans' Monday supper: a pot of creamy smoked red beans ladled over fluffy white rice — built around wash-day leftovers and the Sunday ham bone.",
  servings: 4,
  perServing: { calories: 560, protein: 24 },
  estCostPerServing: 0.95,
  roles: ["dinner", "lunch"],
  ingredients: [
    { item: "creamy cooked red beans, with their pot-liquor (see Pot of Red Beans)", qty: "4 cups", cost: 2.2 },
    { item: "andouille or smoked sausage, sliced", qty: "8 oz", cost: 2.0 },
    { item: "onion, diced", qty: "1/2", cost: 0.15 },
    { item: "green bell pepper, diced", qty: "1/2", cost: 0.2 },
    { item: "garlic, minced", qty: "2 cloves", cost: 0.1, spansWeeks: true },
    { item: "cooked white rice, hot (see A Pot of White Rice)", qty: "4 cups", cost: 0.6 },
    { item: "hot sauce, cayenne, and green onions to finish", qty: "to taste", cost: 0.2, spansWeeks: true },
  ],
  method: [
    "Brown the sliced sausage in a dry pot over medium heat until the edges char and the fat renders. Scoop out half for garnish if you like a meatier top.",
    "In the rendered fat, sweat the onion and bell pepper until soft, 6 minutes, then stir in the garlic for a minute.",
    "Add the cooked red beans and all their pot-liquor. Bring to a gentle simmer and cook 20 to 30 minutes, mashing a few beans against the side so the gravy thickens and turns glossy.",
    "Taste and adjust with salt, cayenne, and a few dashes of hot sauce. Loosen with a splash of hot water if it gets too thick.",
    "Spoon the beans over a mound of hot white rice — never stirred in, always over — and top with the reserved sausage, sliced green onions, and more hot sauce at the table.",
  ],
  modernMove:
    "Browning the sausage first and building the beans in its rendered fat layers smoke and depth all the way through, so by the time you mash the beans creamy the whole pot tastes slow-cooked even on a weeknight.",
  notes:
    "Monday red beans came from putting a pot on the back of the stove to mind itself through the day's laundry, using the ham bone left from Sunday dinner. Make the bean pot ahead; the dish only improves overnight.",
  tags: ["dinner", "legumes", "red-beans", "rice", "sausage", "creole", "new-orleans"],
};
