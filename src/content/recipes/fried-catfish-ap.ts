import type { Recipe } from "../types";

export const friedCatfishAp: Recipe = {
  slug: "fried-catfish-ap",
  title: "Fried Catfish",
  cuisine: "appalachian",
  blurb:
    "River catfish soaked in buttermilk, dredged thick in seasoned cornmeal, and fried crackly-gold in a cast-iron skillet — the mountain fish-fry supper, served with cornbread to sop the drippings.",
  servings: 4,
  perServing: { calories: 560, protein: 34 },
  estCostPerServing: 1.95,
  roles: ["dinner"],
  ingredients: [
    { item: "catfish fillets (channel or farmed)", qty: "1 1/4 lb", cost: 5.0 },
    { item: "buttermilk", qty: "1 cup", cost: 0.5 },
    { item: "hot sauce", qty: "1 tbsp", cost: 0.1, spansWeeks: true },
    { item: "stone-ground cornmeal", qty: "1 cup", cost: 0.4 },
    {
      item: "salt, black pepper, garlic & onion powder",
      qty: "to season",
      cost: 0.1,
      spansWeeks: true,
    },
    { item: "lard or oil for frying", qty: "for the skillet", cost: 1.6, spansWeeks: true },
  ],
  method: [
    "Soak the fillets in buttermilk loosened with hot sauce, at least 30 minutes (an hour is better) so the cornmeal grabs hold.",
    "Stir the cornmeal with salt, pepper, garlic and onion powder in a shallow dish.",
    "Heat a half inch of lard in a cast-iron skillet to about 340°F — a pinch of cornmeal should sizzle on contact.",
    "Lift each fillet from the buttermilk, dredge thickly in the cornmeal, and shake off the loose grains.",
    "Fry 3–4 minutes a side until deep gold and the crust is hard and crisp; drain on a rack, not paper, so it stays crackly.",
    "Salt while hot and serve with cornbread and a wedge of lemon.",
  ],
  modernMove:
    "Drain on a wire rack rather than paper towels — steam trapped against paper softens the crust, and the whole point of a cornmeal coat is that snap.",
  notes: "A river catfish was free protein for anyone with a trotline; the cornmeal is the same meal that makes the cornbread alongside it.",
  zeroWasteHero: false,
  tags: ["appalachian", "fish", "cornmeal", "fried", "protein-forward"],
  sources: [
    {
      title: "Taste of the South — Cornmeal Fried Catfish",
      url: "https://tasteofthesouthmagazine.com/cornmeal-fried-catfish/",
      note: "buttermilk-and-hot-sauce soak, 340°F fry, stone-ground cornmeal dredge",
    },
  ],
};
