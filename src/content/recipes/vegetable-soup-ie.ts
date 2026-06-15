import type { Recipe } from "../types";

export const vegetableSoupIe: Recipe = {
  slug: "vegetable-soup-ie",
  title: "Irish Vegetable Soup",
  cuisine: "irish",
  blurb:
    "Every root vegetable the Irish garden grows — carrot, parsnip, potato, leek, celery — simmered soft and blended into a thick, creamless soup the colour of autumn, made to be mopped up with brown bread.",
  servings: 6,
  perServing: { calories: 380, protein: 12 },
  estCostPerServing: 0.75,
  roles: ["dinner"],
  ingredients: [
    { item: "carrots, chopped", qty: "3", cost: 0.6 },
    { item: "parsnips, chopped", qty: "2", cost: 0.7 },
    { item: "floury potatoes, peeled and diced", qty: "1 lb", cost: 0.6 },
    { item: "leek, sliced", qty: "1", cost: 0.5 },
    { item: "onion, chopped", qty: "1", cost: 0.3 },
    { item: "celery stalks, chopped", qty: "2", cost: 0.4 },
    { item: "vegetable or ham stock", qty: "6 cups", cost: 0.6 },
    { item: "butter", qty: "2 tbsp", cost: 0.25, spansWeeks: true },
    { item: "black pepper", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Melt the butter and sweat the onion, leek and celery gently for 8–10 minutes until soft.",
    "Add the carrot, parsnip and potato, stir to coat in the butter, then pour in the stock and bring to the boil.",
    "Simmer 25–30 minutes until every vegetable is completely tender and yielding.",
    "Blend smooth until the soup has the thick, almost-applesauce body the Irish bowl is known for. Loosen with a little more stock if it's too stiff, and season hard with pepper.",
    "Serve very hot with thick slices of buttered brown bread.",
  ],
  modernMove:
    "Blending the starchy potato and parsnip straight into the soup builds a thick, spoon-coating body with no cream at all — pure root vegetable doing the work, which is exactly why it costs pennies a bowl.",
  notes:
    "Endlessly forgiving: a turnip, a swede, a handful of any limp veg from the drawer all belong here. The brown bread is non-negotiable — it's half the meal.",
  zeroWasteHero: true,
  tags: ["soup", "root-vegetable", "parsnip", "carrot", "potato", "irish", "brown-bread"],
  sources: [
    {
      title: "Simply Scratch — Irish Vegetable Soup",
      url: "https://www.simplyscratch.com/irish-vegetable-soup/",
      note: "Confirms the root-veg lineup blended creamless to a thick body and served with Irish brown bread.",
    },
  ],
};
