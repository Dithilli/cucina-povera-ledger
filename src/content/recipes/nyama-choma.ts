import type { Recipe } from "../types";

export const nyamaChoma: Recipe = {
  slug: "nyama-choma",
  title: "Nyama Choma",
  cuisine: "east-african",
  blurb:
    "Slabs of goat rubbed with garlic, ginger and chili, roasted slow over charcoal until the edges char and the meat pulls clean off the bone — eaten with the fingers, a pile of ugali, and a bright heap of kachumbari.",
  servings: 4,
  perServing: { calories: 620, protein: 33 },
  estCostPerServing: 2.4,
  roles: ["dinner"],
  ingredients: [
    { item: "bone-in goat (mbuzi) or beef, cut in large pieces", qty: "2 lb", cost: 7.5 },
    { item: "garlic cloves, crushed", qty: "5", cost: 0.2, spansWeeks: true },
    { item: "fresh ginger, grated", qty: "1 tbsp", cost: 0.15, spansWeeks: true },
    { item: "lemon, juiced", qty: "1", cost: 0.4 },
    { item: "vegetable oil", qty: "2 tbsp", cost: 0.1, spansWeeks: true },
    { item: "salt and coarse black pepper", qty: "to taste", cost: 0.05, spansWeeks: true },
    { item: "tomatoes, for kachumbari", qty: "2", cost: 0.6 },
    { item: "red onion, for kachumbari", qty: "1", cost: 0.25 },
    { item: "dhania (cilantro)", qty: "small bunch", cost: 0.3, spansWeeks: true },
    { item: "pilipili hoho (chili), minced", qty: "1", cost: 0.15, spansWeeks: true },
    { item: "ugali (maize meal), to serve", qty: "to serve" },
  ],
  method: [
    "Rub the goat with crushed garlic, ginger, half the lemon juice, oil, salt and plenty of pepper. Let it sit at least an hour — overnight is better.",
    "Build a charcoal fire and let it burn down to glowing, ashed-over coals; you want steady medium heat, not flames, so the meat cooks through before the outside burns.",
    "Roast the pieces low and slow over the coals, 40–60 minutes, turning often and moving them off the hottest spots, until charred outside and tender to the bone.",
    "Make kachumbari: dice tomatoes and red onion, toss with dhania, minced pilipili hoho, the rest of the lemon juice and a pinch of salt.",
    "Chop the roast into bite pieces on the board. Serve hot with ugali to scoop and the cold, sharp kachumbari alongside.",
  ],
  modernMove:
    "Patience over the coals is the whole technique: pull the meat to the cooler edge of the grate and let radiant heat do the work, so the collagen in a cheap, hard-working cut melts instead of seizing.",
  notes:
    "Goat (mbuzi) is the classic; a tougher beef cut like chuck or short rib works the same way and rewards the slow roast.",
  zeroWasteHero: false,
  tags: ["meat", "east-african", "grill", "goat", "kachumbari"],
  sources: [
    {
      title: "The Domestic Man — Nyama Choma with Kachumbari",
      url: "https://thedomesticman.com/2020/08/27/nyama-choma-simple-kenyan-grilled-meat-with-kachumbari-salad/",
      note: "Charcoal-roast method, garlic-ginger-lemon rub, and the tomato-onion kachumbari",
    },
  ],
};
