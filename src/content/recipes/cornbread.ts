import type { Recipe } from "../types";

export const cornbread: Recipe = {
  slug: "cornbread",
  title: "Cast-iron cornbread",
  cuisine: "american-south",
  blurb:
    "Real Southern cornbread — no sugar, mostly cornmeal — poured into a screaming-hot, fat-slicked cast-iron skillet for a shattering crust and a tender crumb.",
  servings: 8,
  perServing: { calories: 200, protein: 5 },
  estCostPerServing: 0.3,
  roles: ["base", "side"],
  ingredients: [
    { item: "stone-ground yellow cornmeal", qty: "2 cups", cost: 0.7 },
    { item: "all-purpose flour", qty: "1/2 cup", cost: 0.1 },
    { item: "baking powder", qty: "1 tbsp", cost: 0.1, spansWeeks: true },
    { item: "baking soda", qty: "1/2 tsp", cost: 0.05, spansWeeks: true },
    { item: "salt", qty: "1 tsp", spansWeeks: true },
    { item: "buttermilk (or milk soured with a splash of vinegar)", qty: "2 cups", cost: 0.8 },
    { item: "egg", qty: "1", cost: 0.25 },
    { item: "bacon grease, lard, or neutral oil", qty: "3 tbsp", cost: 0.2, spansWeeks: true },
  ],
  method: [
    "Put a 10-inch cast-iron skillet with the bacon grease in it into the oven and heat to 450°F. You want the fat almost smoking — this is what crisps the crust.",
    "Whisk the cornmeal, flour, baking powder, baking soda, and salt together. In another bowl, beat the buttermilk and egg.",
    "Pour the wet into the dry and stir just until combined — lumps are fine; overmixing toughens it.",
    "Carefully pull the hot skillet out, swirl the fat to coat, then pour most of the hot fat into the batter and stir it in. This seasons the crumb and primes the pan.",
    "Pour the batter into the hot skillet — it should hiss and sizzle at the edges. Bake 20 to 25 minutes until the top is golden and a tester comes out clean.",
    "Let it sit 5 minutes, then turn out of the pan so the bottom crust stays crisp. Cut in wedges.",
  ],
  modernMove:
    "Preheating the skillet with the fat until it's nearly smoking, then tempering some of that hot fat into the batter, is the whole trick — you get a deep-fried-crisp crust no soft baking pan can match.",
  notes:
    "Southern cornbread is savory and crumbly, not cakey-sweet. Leftovers crumble into pot-likker, get split and griddled with butter, or go into next day's dressing.",
  zeroWasteHero: true,
  tags: ["base", "side", "cornbread", "cast-iron", "cornmeal", "quick-bread"],
};
