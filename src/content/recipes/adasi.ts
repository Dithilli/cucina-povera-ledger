import type { Recipe } from "../types";

export const adasi: Recipe = {
  slug: "adasi",
  title: "Adasi",
  cuisine: "persian",
  blurb:
    "A soft, savory brown-lentil stew thickened with potato and warmed with cinnamon — a beloved Iranian breakfast that makes an honest, cheap dinner over bread.",
  servings: 4,
  perServing: { calories: 470, protein: 22 },
  estCostPerServing: 0.85,
  roles: ["dinner", "breakfast"],
  ingredients: [
    { item: "brown lentils, rinsed", qty: "1 1/2 cups", cost: 1.2 },
    { item: "onion, finely diced", qty: "1", cost: 0.3 },
    { item: "potato, grated or finely diced (to thicken)", qty: "1", cost: 0.3 },
    { item: "garlic, minced", qty: "3 cloves", cost: 0.15, spansWeeks: true },
    {
      item: "tomato paste",
      qty: "1 tbsp",
      cost: 0.2,
      spansWeeks: true,
    },
    {
      item: "dried lime (limoo amani), pierced",
      qty: "1",
      cost: 0.2,
      spansWeeks: true,
    },
    {
      item: "turmeric, cinnamon, cumin, salt, black pepper",
      qty: "to taste",
      cost: 0.25,
      spansWeeks: true,
    },
    {
      item: "oil or butter",
      qty: "2 tbsp",
      cost: 0.25,
      spansWeeks: true,
    },
    { item: "flatbread, to serve", qty: "to serve", cost: 0.6 },
  ],
  method: [
    "Soften the onion in the oil until golden, then add the garlic, turmeric, cumin, and a pinch of cinnamon and fry until fragrant. Stir in the tomato paste and let it darken a minute.",
    "Add the rinsed lentils, grated potato, pierced dried lime, and enough water to cover by two inches. Bring to a boil, then simmer 40–50 minutes until the lentils collapse and the potato dissolves into a creamy body.",
    "Mash some of the pot against the side to make it porridge-thick. Season well with salt and pepper, adding hot water if it tightens too much.",
    "Serve in bowls with torn flatbread, a drizzle of oil or butter, and raw onion. Like abgoosht's tirit, it's meant to be eaten with bread soaking in it.",
  ],
  modernMove:
    "The grated potato is the cook's thickener — it melts in and gives the stew a velvety, almost creamy body without a drop of dairy, so cheap lentils plate like something richer.",
  notes:
    "A breakfast dish in Iran (sold from morning haleem-and-adasi stalls), it crosses over to dinner perfectly. A squeeze of lemon at the end if you skip the dried lime.",
  tags: ["lentils", "legumes", "stew", "breakfast-for-dinner", "one-pot"],
  sources: [
    {
      title: "Najmieh Batmanglij — Food of Life: Ancient Persian and Modern Iranian Cooking",
      note: "Documents adasi as a soft brown-lentil pottage eaten as an Iranian breakfast, the frugal dish reframed here for dinner.",
    },
  ],
};
