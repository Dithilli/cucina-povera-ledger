import type { Recipe } from "../types";

export const doChua: Recipe = {
  slug: "do-chua",
  title: "Đồ Chua (Pickled Carrot & Daikon)",
  cuisine: "vietnamese",
  blurb:
    "Quick sweet-sour pickle of carrot and daikon — the crunchy, bright counterpoint that cuts through rich caramel braises and stuffs every bánh mì. Cheap roots, a little sugar and vinegar, and a day's wait turn into a condiment that lasts weeks.",
  servings: 12,
  perServing: { calories: 20, protein: 0 },
  estCostPerServing: 0.1,
  roles: ["side", "base"],
  ingredients: [
    { item: "carrots, julienned", qty: "2 large", cost: 0.5 },
    { item: "daikon radish, julienned", qty: "1/2 lb", cost: 0.6 },
    { item: "salt (for drawing out water)", qty: "1 tsp" },
    { item: "sugar", qty: "1/2 cup", cost: 0.25, spansWeeks: true },
    { item: "warm water", qty: "1 cup" },
    { item: "rice vinegar (or distilled white)", qty: "1 cup", cost: 0.4, spansWeeks: true },
  ],
  method: [
    "Julienne the carrot and daikon into matchsticks. Toss with the salt and a teaspoon of the sugar and let them sit 15 to 20 minutes — they'll weep out water and go limp enough to bend without snapping. This salting step is what lets them stay crisp yet pliable in the brine instead of watering it down.",
    "Squeeze the vegetables firmly to wring out the released liquid, then rinse briefly and squeeze again. Pack into a clean jar.",
    "Stir the remaining sugar into the warm water until dissolved, then add the vinegar. Taste — it should be brightly sweet-sour, the sweetness balancing the daikon's sharpness.",
    "Pour the brine over the vegetables to cover and seal the jar. They're edible after an hour but best after a day in the fridge, once the sweet-sour has soaked all the way through.",
    "Serve as a crunchy side with any kho, pile into bánh mì, or scatter over rice and noodle bowls.",
  ],
  modernMove:
    "Salting and squeezing the roots before they hit the brine is the trick to a pickle that stays crunchy for weeks — you remove the water that would otherwise dilute the vinegar and turn the daikon soft.",
  notes:
    "Daikon can smell funky as it pickles — that's normal; a tight lid keeps it out of the rest of the fridge. Keeps 3 to 4 weeks refrigerated and only improves. All-carrot works if daikon is hard to find.",
  zeroWasteHero: true,
  tags: ["side", "base", "pickle", "do-chua", "make-ahead", "banh-mi", "vegan", "no-cook"],
  sources: [
    {
      title: "Andrea Nguyen — Daikon and Carrot Pickle (Đồ Chua), Viet World Kitchen",
      url: "https://www.vietworldkitchen.com/blog/2009/05/daikon-and-carrot-pickle-recipe-do-chua.html",
      note: "Salting the roots, then the sweet-sour vinegar brine that keeps them crunchy",
    },
    {
      title: "Hungry Huy — Vietnamese Pickled Carrots & Daikon (Đồ Chua)",
      url: "https://www.hungryhuy.com/vietnamese-pickled-daikon-carrot-recipe-do-chua/",
      note: "Julienne, brine ratio, and fridge keeping time",
    },
  ],
};
