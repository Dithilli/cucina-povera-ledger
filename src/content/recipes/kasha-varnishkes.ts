import type { Recipe } from "../types";

export const kashaVarnishkes: Recipe = {
  slug: "kasha-varnishkes",
  title: "Kasha Varnishkes",
  cuisine: "ashkenazi",
  blurb:
    "Toasted buckwheat groats — coated in beaten egg and dried in the pan so every grain stays separate — simmered tender and tossed with bowtie noodles and a heap of deep-golden fried onion: the nutty, oniony backbone of the shtetl kitchen.",
  servings: 4,
  perServing: { calories: 520, protein: 17 },
  estCostPerServing: 0.7,
  roles: ["dinner"],
  ingredients: [
    { item: "kasha (whole or coarse roasted buckwheat groats)", qty: "1 cup", cost: 0.6 },
    { item: "egg", qty: "1", cost: 0.2 },
    { item: "bowtie (farfalle) noodles", qty: "8 oz", cost: 0.8 },
    { item: "onions, sliced", qty: "2 large", cost: 0.6 },
    { item: "neutral oil (or schmaltz, see notes)", qty: "3 tbsp", cost: 0.15, spansWeeks: true },
    { item: "water or stock", qty: "2 cups", cost: 0.1 },
    { item: "salt and plenty of black pepper", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Fry the onions slowly in the oil over medium heat, stirring now and then, until they're soft, then deep golden brown and sweet — 20–25 minutes. This is half the dish; don't stop at pale.",
    "Meanwhile, beat the egg in a bowl and stir in the dry kasha until every grain is coated. Tip it into a dry hot skillet and stir constantly over medium heat until the egg dries and the grains separate and smell toasty — 2–4 minutes. This coating is what keeps the kasha fluffy instead of gummy.",
    "Add the hot water or stock and a good pinch of salt to the kasha (stand back — it sputters). Cover and simmer on low until the liquid is absorbed and the groats are tender, about 10 minutes. Let it sit off heat a few minutes, then fluff.",
    "Boil the bowties in salted water until just tender; drain. Toss the kasha, noodles, and fried onions together with their oil. Salt and pepper hard — this dish wants more pepper than you think.",
  ],
  modernMove:
    "Coat-and-toast the raw groats in egg before any liquid. That thin egg shell sets in the dry pan and keeps the grains from clumping, so the kasha comes out separate and nutty rather than a porridge — the technique that separates real kasha from mush.",
  notes:
    "Pareve as written with oil, so it can sit beside a dairy or a meat meal. Frying the onions in rendered chicken schmaltz instead makes it fleishig and richer — a classic side to brisket or roast chicken; just never both schmaltz and any dairy.",
  tags: ["kasha", "buckwheat", "noodles", "pareve"],
  sources: [
    {
      title: "Wikipedia — Kasha varnishkes",
      url: "https://en.wikipedia.org/wiki/Kasha_varnishkes",
      note: "Buckwheat groats with bow-tie noodles and onions fried in poultry fat.",
    },
    {
      title: "Gil Marks — Encyclopedia of Jewish Food",
      note: "Kasha (buckwheat) in the shtetl kitchen and the egg-coating toasting technique.",
    },
  ],
};
