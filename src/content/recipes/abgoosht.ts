import type { Recipe } from "../types";

export const abgoosht: Recipe = {
  slug: "abgoosht",
  title: "Abgoosht (Dizi)",
  cuisine: "persian",
  blurb:
    "One lamb shank slow-cooked with chickpeas, white beans, and potato, then served as two courses — the brothy soup poured over bread, the solids mashed to a paste with the meat.",
  servings: 4,
  perServing: { calories: 620, protein: 34 },
  estCostPerServing: 1.95,
  roles: ["dinner"],
  ingredients: [
    {
      item: "lamb shank (one shank, bone-in, stretches the whole pot)",
      qty: "1 (about 12 oz)",
      cost: 4.5,
    },
    { item: "dried chickpeas, soaked overnight", qty: "1/2 cup", cost: 0.4 },
    { item: "dried white beans, soaked overnight", qty: "1/2 cup", cost: 0.4 },
    { item: "potatoes, peeled and halved", qty: "2 medium", cost: 0.6 },
    { item: "onion, quartered", qty: "1 large", cost: 0.3 },
    { item: "tomato, or 1 tbsp tomato paste", qty: "1", cost: 0.3 },
    {
      item: "dried lime (limoo amani), pierced",
      qty: "2",
      cost: 0.4,
      spansWeeks: true,
    },
    {
      item: "turmeric, salt, black pepper",
      qty: "to taste",
      cost: 0.2,
      spansWeeks: true,
    },
    { item: "flatbread (sangak or lavash), to serve", qty: "to serve", cost: 0.6 },
  ],
  method: [
    "Put the lamb shank, soaked chickpeas and white beans, onion, turmeric, and pierced dried limes in a deep pot. Cover well with water, bring to a boil, skim, then cover and simmer 1.5 hours.",
    "Add the potatoes and tomato (or paste), season, and simmer another 45–60 minutes until the meat falls from the bone and the beans are creamy.",
    "Strain off the broth into bowls — this is the first course. Tear flatbread into it and let it soak (this soaked-bread soup is abgoosht's tirit).",
    "For the second course, lift the bone out, then mash the meat, beans, and potato together to a coarse paste (the gusht-koobideh) with a pestle or fork. Eat it with bread, raw onion, and fresh herbs.",
  ],
  modernMove:
    "Serving it as two courses from one pot is the whole trick — the same shank gives a clear restorative broth AND a rich mashed plate, so a single cut of meat reads as two dinners.",
  notes:
    "Traditionally cooked and served in a stone crock (dizi). Pierce the dried limes so they release their sour perfume without bursting; fish out and discard the skins before mashing if you prefer it milder.",
  zeroWasteHero: true,
  tags: ["lamb", "chickpeas", "white-beans", "stew", "two-course", "zero-waste"],
};
