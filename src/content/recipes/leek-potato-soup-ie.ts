import type { Recipe } from "../types";

export const leekPotatoSoupIe: Recipe = {
  slug: "leek-potato-soup-ie",
  title: "Leek & Potato Soup",
  cuisine: "irish",
  blurb:
    "The pub-lunch classic — leeks softened slow in butter, floury potatoes simmered to collapse, the lot blended silky and finished with a swirl of tangy buttermilk.",
  servings: 4,
  perServing: { calories: 400, protein: 12 },
  estCostPerServing: 0.9,
  roles: ["dinner"],
  ingredients: [
    { item: "leeks, white and pale green, sliced", qty: "3 large", cost: 1.6 },
    { item: "floury potatoes, peeled and diced", qty: "1 1/4 lb", cost: 0.7 },
    { item: "onion, chopped", qty: "1", cost: 0.3 },
    { item: "vegetable or chicken stock", qty: "4 cups", cost: 0.4 },
    { item: "butter", qty: "3 tbsp", cost: 0.4, spansWeeks: true },
    { item: "buttermilk, to finish", qty: "1/2 cup", cost: 0.25 },
    { item: "chives or parsley, snipped", qty: "to garnish", cost: 0.3 },
    { item: "black pepper", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Melt the butter and sweat the leeks and onion gently with a pinch of salt for about 10 minutes until soft and silky, never browned.",
    "Add the diced potato and the stock, bring to a simmer and cook for 15–20 minutes until the potato is falling apart.",
    "Blend smooth with a stick blender until the soup is silky and the colour of pale ivory.",
    "Season with pepper, ladle into bowls and swirl a spoonful of buttermilk through each. Scatter with chives.",
  ],
  modernMove:
    "Finishing with raw buttermilk instead of cream brings a clean tang that cuts the starch and costs a fraction of the price — the potato alone gives all the body the soup needs, no cream required.",
  notes:
    "Don't let the leeks colour or the soup turns grey-brown; keep them pale for that ivory bowl. Serve with buttered soda or brown bread.",
  tags: ["soup", "leek", "potato", "buttermilk", "irish", "pub-lunch"],
  sources: [
    {
      title: "The View from Great Island",
      url: "https://theviewfromgreatisland.com/traditional-irish-leek-and-potato-soup/",
      note: "Confirms the butter-sweated leeks, floury-potato body and blended-silky method of the pub-style Irish soup.",
    },
  ],
};
