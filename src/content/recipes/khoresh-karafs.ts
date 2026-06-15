import type { Recipe } from "../types";

export const khoreshKarafs: Recipe = {
  slug: "khoresh-karafs",
  title: "Khoresh Karafs",
  cuisine: "persian",
  blurb:
    "A springtime celery stew — sautéed celery and a great handful of parsley and mint braised with a little meat and dried lime until tender and tangy, ladled over chelo.",
  servings: 6,
  perServing: { calories: 480, protein: 20 },
  estCostPerServing: 1.35,
  roles: ["dinner"],
  ingredients: [
    { item: "celery, cut into 2-inch lengths", qty: "1 large bunch", cost: 1.5 },
    { item: "lamb or beef stew meat, cubed", qty: "1/2 lb", cost: 2.7 },
    { item: "parsley and mint, chopped", qty: "3 packed cups", cost: 1.2 },
    { item: "large onion, diced", qty: "1", cost: 0.3 },
    { item: "dried limes (limoo amani), pierced", qty: "3", cost: 0.6, spansWeeks: true },
    { item: "turmeric", qty: "1 tsp", cost: 0.1, spansWeeks: true },
    { item: "oil", qty: "1/4 cup", cost: 0.4, spansWeeks: true },
    { item: "salt and black pepper", qty: "to taste", cost: 0 },
  ],
  method: [
    "Fry the diced onion in oil until golden, add turmeric, then brown the cubed meat. Cover with water and simmer, partly covered, about 1 hour until the meat begins to soften.",
    "Meanwhile, in a separate pan, sauté the celery lengths in a little oil until they take on light color and lose their raw edge — about 8 minutes. Lift them out and quickly fry the chopped parsley and mint in the same pan for a few minutes until darkened and fragrant.",
    "Add the sautéed celery and fried herbs to the meat pot, drop in the pierced dried limes, and add a little water if needed.",
    "Simmer gently 30 to 40 minutes more, until the celery is tender but still holds its shape and the stew has thickened. Press the dried limes once to release their sourness; remove if they verge on bitter.",
    "Season and rest, then serve over chelo with its tahdig.",
  ],
  modernMove:
    "Sautéing the celery on its own before it joins the pot keeps it from going stringy and waterlogged, and frying the parsley and mint deepens them — so the finished stew tastes green and bright rather than boiled.",
  notes:
    "A frugal, vegetable-forward khoresh: half a pound of meat carries a whole bunch of celery and a pile of herbs. Drop the meat for a vegetarian version with extra herbs and a squeeze more lime.",
  tags: ["dinner", "stew", "celery", "herbs", "dried-lime", "khoresh"],
  sources: [
    {
      title: "Omid Roustaei — The Caspian Chef",
      url: "https://thecaspianchef.com/2019/05/celery-and-beef-stew/",
      note: "Supports sautéing the celery separately, frying the herbs, and the dried-lime tang.",
    },
    {
      title: "Khoresh karafs — Wikipedia",
      url: "https://en.wikipedia.org/wiki/Khoresh_karafs",
      note: "Confirms the dish as a celery-forward Persian stew served over rice.",
    },
  ],
};
