import type { Recipe } from "../types";

export const brotchanRoy: Recipe = {
  slug: "brotchan-roy",
  title: "Brotchán Roy",
  cuisine: "irish",
  blurb:
    "The thousand-year-old monastery soup — leeks, oatmeal and milk, the three pillars of old Gaelic cooking — simmered into a thickened, comforting broth that fed the monks of Tallaght and was said to be St Columcille's favourite.",
  servings: 4,
  perServing: { calories: 420, protein: 14 },
  estCostPerServing: 0.85,
  roles: ["dinner"],
  ingredients: [
    { item: "leeks, white and pale green, sliced", qty: "3 large", cost: 1.6 },
    { item: "pinhead (steel-cut) oatmeal", qty: "1/3 cup", cost: 0.2, spansWeeks: true },
    { item: "floury potato, diced (for body)", qty: "1 medium", cost: 0.2 },
    { item: "whole milk", qty: "2 cups", cost: 0.7 },
    { item: "vegetable or ham stock", qty: "3 cups", cost: 0.3 },
    { item: "butter", qty: "2 tbsp", cost: 0.25, spansWeeks: true },
    { item: "mace or grated nutmeg", qty: "pinch", cost: 0.05, spansWeeks: true },
    { item: "parsley, chopped, to finish", qty: "small handful", cost: 0.3 },
  ],
  method: [
    "Melt the butter and sweat the sliced leeks gently with a pinch of salt for about 15 minutes until soft and sweet, not coloured.",
    "Stir in the diced potato, the milk and the stock, and bring up to a simmer.",
    "Rain in the oatmeal, whisking so it doesn't clump, and add a pinch of mace. Simmer gently 40–50 minutes until the oats are tender and have thickened the broth to a velvety pour.",
    "Season with pepper, taste for salt, and stir through the chopped parsley just before serving.",
  ],
  modernMove:
    "The oatmeal is the ancient thickener — no cream, no flour, just toasted oats melting into the milk to give the broth its body. It's the original frugal soup, three pantry staples and an afternoon by the fire.",
  notes:
    "An old Lenten dish from sixth-century Ireland. Use a ham stock if you have hock liquor to hand; keep it meat-free with vegetable stock for the fasting-day version.",
  tags: ["soup", "leek", "oatmeal", "milk", "monastic", "irish", "lenten"],
  sources: [
    {
      title: "The Irish Times",
      url: "https://www.irishtimes.com/life-and-style/food-and-drink/this-warming-soup-has-been-nourishing-irish-people-for-1-000-years-here-s-how-to-make-it-1.4505601",
      note: "Confirms the leek-oatmeal-milk trinity, the monastic Tallaght history and oatmeal as the thickener.",
    },
  ],
};
