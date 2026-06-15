import type { Recipe } from "../types";

export const gheymeh: Recipe = {
  slug: "gheymeh",
  title: "Khoresh Gheymeh",
  cuisine: "persian",
  blurb:
    "A tomato-stained split-pea stew with a little cubed meat, dried lime, and warm Persian spice — crowned with a tangle of crisp straw potatoes and spooned over chelo.",
  servings: 6,
  perServing: { calories: 560, protein: 22 },
  estCostPerServing: 1.4,
  roles: ["dinner"],
  ingredients: [
    { item: "lamb or beef stew meat, small cubes", qty: "1/2 lb", cost: 2.7 },
    { item: "yellow split peas", qty: "3/4 cup", cost: 0.5 },
    { item: "large onion, diced", qty: "1", cost: 0.3 },
    { item: "tomato paste", qty: "3 tbsp", cost: 0.4, spansWeeks: true },
    { item: "dried limes (limoo amani), pierced", qty: "3", cost: 0.6, spansWeeks: true },
    { item: "turmeric and ground cinnamon", qty: "1 tsp each", cost: 0.15, spansWeeks: true },
    { item: "advieh or a pinch of saffron", qty: "1/2 tsp", cost: 0.3, spansWeeks: true },
    { item: "potatoes, cut into matchsticks", qty: "2", cost: 0.5 },
    { item: "oil for frying and the stew", qty: "1/3 cup", cost: 0.5, spansWeeks: true },
    { item: "salt and black pepper", qty: "to taste", cost: 0 },
  ],
  method: [
    "Fry the onion in oil until golden, add the turmeric and cinnamon, then brown the cubed meat all over. Stir the tomato paste in and fry it for 2 minutes until it darkens and loses its raw edge — this builds the deep red color.",
    "Add water to cover by an inch, drop in the pierced dried limes, and simmer gently, partly covered, for about an hour until the meat begins to soften.",
    "Meanwhile rinse the split peas and par-boil them 10 minutes until just tender but not falling apart — adding them already softened keeps them from turning the stew to mush. Stir them in with the advieh and simmer another 30 to 40 minutes until everything is tender and the sauce is thick.",
    "While it finishes, fry the potato matchsticks in hot oil until golden and crisp; drain on paper and salt them.",
    "Season the stew, ladle over chelo, and pile the crisp straw potatoes on top at the very last moment so they stay crunchy.",
  ],
  modernMove:
    "Par-boiling the split peas separately, then frying the tomato paste until it darkens, gives gheymeh its signature texture and brick-red depth — and the crisp sib zamini potato straws, added only at serving, are the textural contrast that makes the dish.",
  notes:
    "A classic small-meat stretch: half a pound of meat plus a handful of split peas feeds six. The fried potatoes can be swapped for fried eggplant in summer.",
  tags: ["dinner", "stew", "split-peas", "tomato", "dried-lime", "potato", "khoresh"],
  sources: [
    { title: "The Caspian Chef (Omid Roustaei) — Khoresh Gheymeh", url: "https://thecaspianchef.com/2019/07/07/meat-and-yellow-split-pea-stew-with-roasted-potatoes/", note: "small-cubed meat, yellow split peas, dried lime, advieh, and crisp potatoes" },
    { title: "Wikipedia — Gheimeh", url: "https://en.wikipedia.org/wiki/Gheimeh", note: "stew of diced meat, split peas, tomato, dried lime, topped with straw potatoes" },
  ],
};
