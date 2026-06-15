import type { Recipe } from "../types";

export const friedCatfish: Recipe = {
  slug: "fried-catfish",
  title: "Cornmeal-Crusted Fried Catfish",
  cuisine: "american-south",
  blurb:
    "Cheap farmed catfish dredged in seasoned cornmeal and shallow-fried in a cast-iron skillet until the crust shatters — the Friday-night supper of the river South.",
  servings: 4,
  perServing: { calories: 520, protein: 34 },
  estCostPerServing: 2.4,
  roles: ["dinner"],
  ingredients: [
    { item: "catfish fillets, cut into finger-width strips", qty: "1 1/4 lb", cost: 6.5 },
    { item: "fine yellow cornmeal", qty: "1 cup", cost: 0.4, spansWeeks: true },
    { item: "all-purpose flour", qty: "1/4 cup", cost: 0.1, spansWeeks: true },
    { item: "buttermilk (or milk soured with a splash of vinegar)", qty: "1 cup", cost: 0.45 },
    { item: "neutral oil for shallow frying", qty: "1 1/2 cups", cost: 1.2, spansWeeks: true },
    {
      item: "cayenne, paprika, garlic powder, salt, black pepper",
      qty: "to season",
      cost: 0.25,
      spansWeeks: true,
    },
    { item: "lemon wedges and hot sauce to finish", qty: "to serve", cost: 0.3 },
  ],
  method: [
    "Soak the catfish strips in buttermilk for 20–30 minutes; the acid firms the soft flesh and helps the crust cling.",
    "Whisk the cornmeal, flour, and all the spices in a wide bowl. Lift each strip straight from the buttermilk and press it into the meal, coating every side.",
    "Heat 1/3 inch of oil in a cast-iron skillet until a pinch of cornmeal sizzles on contact (about 350°F). Fry the strips in batches, not crowding, 3–4 minutes a side until deep gold and the crust is hard.",
    "Drain on a rack, not paper, so the underside stays crisp. Salt while hot and serve with lemon and hot sauce.",
  ],
  modernMove:
    "A short buttermilk soak plus a cornmeal-heavy (not flour-heavy) dredge gives a sandy, gravelly crust that stays crisp far longer than a flour batter — the real fish-fry texture.",
  tags: ["fish", "catfish", "cornmeal", "cast-iron", "fried", "shallow-fry"],
  sources: [
    {
      title: "Alton Brown — Southern Fried Catfish with a Cornmeal Crust",
      url: "https://altonbrown.com/recipes/southern-fried-catfish/",
      note: "Buttermilk soak plus a stone-ground cornmeal-and-flour dredge fried at 350°F — the technique this recipe follows.",
    },
  ],
};
