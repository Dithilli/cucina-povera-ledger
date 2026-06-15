import type { Recipe } from "../types";

export const secoDeFrejoles: Recipe = {
  slug: "seco-de-frejoles",
  title: "Seco de Frejoles",
  cuisine: "andean",
  blurb:
    "Canary beans simmered soft and creamy beside a deeply green cilantro braise — a little beef cooked down in blended cilantro, ají and garlic until it stains everything emerald — ladled together over white rice in the northern-Andean way.",
  servings: 5,
  perServing: { calories: 600, protein: 24 },
  estCostPerServing: 1.5,
  roles: ["dinner"],
  ingredients: [
    { item: "dried canary or pinto beans, soaked overnight", qty: "1 lb", cost: 1.6 },
    { item: "beef chuck or shank, cut in chunks", qty: "10 oz", cost: 2.6 },
    { item: "cilantro, large bunch, blended to a purée", qty: "2 cups packed", cost: 0.9 },
    { item: "red onion, finely diced", qty: "1 large", cost: 0.4 },
    { item: "garlic, minced", qty: "4 cloves", cost: 0.2, spansWeeks: true },
    { item: "ají amarillo paste", qty: "1 tbsp", cost: 0.3, spansWeeks: true },
    { item: "ají panca paste", qty: "1 tbsp", cost: 0.3, spansWeeks: true },
    { item: "ground cumin", qty: "1 tsp", cost: 0.05, spansWeeks: true },
    { item: "neutral oil", qty: "2 tbsp", cost: 0.1, spansWeeks: true },
    { item: "white rice, to serve", qty: "to serve" },
  ],
  method: [
    "Simmer the soaked beans in plenty of unsalted water until tender and the broth turns silky, 1–1.5 hours; salt only near the end. Keep them and their liquor.",
    "Season and brown the beef hard in oil, then set aside. In the same pot soften the onion, garlic, both ajíes and the cumin into a fragrant base.",
    "Pour in the blended cilantro and let it fry down for a few minutes — cooking it darkens and rounds the raw grassiness into the deep green seco flavor.",
    "Return the beef, add a little water, cover and braise low until the meat is fork-tender, about 1.5 hours, topping up so it stays saucy.",
    "Serve the cilantro-braised beef alongside a ladle of the creamy beans and a mound of white rice, finished with sarza criolla.",
  ],
  modernMove:
    "Blend the cilantro raw, then fry the purée before braising — that brief cook in hot oil is what turns it from a bright sauce into the brooding, savory green that defines a real seco.",
  notes:
    "Beans and braise are cooked separately and married on the plate, so a small amount of beef perfumes a big pot of cheap beans. Both halves keep and reheat well.",
  zeroWasteHero: false,
  tags: ["dinner", "beans", "stew", "cilantro", "andean", "beef"],
  sources: [
    {
      title: "Peruvian Foodies — Seco de Res con Frejoles",
      url: "https://peruvianfoodies.com/seco-de-res-con-frejoles/",
      note: "Cilantro-and-ají beef braise served with separately cooked creamy beans and rice",
    },
  ],
};
