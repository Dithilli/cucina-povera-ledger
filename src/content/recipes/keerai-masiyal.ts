import type { Recipe } from "../types";

export const keeraiMasiyal: Recipe = {
  slug: "keerai-masiyal",
  title: "Keerai Masiyal",
  cuisine: "south-indian",
  blurb:
    "A bowl of greens wilted with green chili, mashed soft and almost frothy, then woken up with a sizzling tadka of garlic, cumin, and dried red chili crackled in oil — iron-rich comfort over rice and ghee.",
  servings: 4,
  perServing: { calories: 365, protein: 14 },
  estCostPerServing: 0.85,
  roles: ["dinner"],
  ingredients: [
    { item: "spinach or amaranth greens (keerai), chopped", qty: "2 large bunches", cost: 1.4 },
    { item: "moong or toor dal, cooked and mashed", qty: "1/3 cup dry", cost: 0.5 },
    { item: "garlic", qty: "5 cloves", cost: 0.15, spansWeeks: true },
    { item: "cumin seeds", qty: "1 tsp", cost: 0.05, spansWeeks: true },
    { item: "dried red chilies", qty: "2", cost: 0.1, spansWeeks: true },
    { item: "mustard seeds, urad dal", qty: "1 tsp each", cost: 0.1, spansWeeks: true },
    { item: "turmeric, asafoetida, salt", qty: "to taste", cost: 0.15, spansWeeks: true },
    { item: "oil or ghee", qty: "1 tbsp", cost: 0.15, spansWeeks: true },
    { item: "steamed rice, to serve", qty: "to serve", cost: 0.6 },
  ],
  method: [
    "Cook the chopped greens with a slit green chili, turmeric, and a splash of water in a covered pot until they wilt right down and the pot looks frothy.",
    "Mash the greens smooth with a wooden masher (the traditional matthu) or the back of a ladle, then stir in the cooked, mashed dal and salt and loosen with a little water to a soft, spoonable masiyal.",
    "For the tadka, crackle mustard seeds and urad dal in oil, then add the cumin, lightly crushed garlic, asafoetida, and broken red chilies and fry until the garlic is golden and fragrant.",
    "Pour the sizzling tempering over the greens, stir through, and serve hot over rice with a knob of ghee.",
  ],
  modernMove:
    "Mashing the greens to an almost-purée and pouring a garlic-heavy tadka over at the end gives a humble bunch of spinach real savor — the raw, sputtering garlic and cumin are the entire flavor engine.",
  notes:
    "Any tender greens work — spinach, amaranth, or molakeerai. The dal makes it a protein dish rather than a side; skip it and it becomes a lighter accompaniment.",
  zeroWasteHero: true,
  tags: ["greens", "south-indian", "masiyal", "lentils", "garlic"],
  sources: [
    {
      title: "Nandita Iyer — Saffron Trail (Keerai Masiyal)",
      url: "https://www.saffrontrail.com/keerai-masiyal-simple-spinach-mash-recipe/",
      note: "Confirmed wilting and mashing the greens, loosening with mashed dal, and finishing with a garlic-cumin-red-chili tempering.",
    },
  ],
};
