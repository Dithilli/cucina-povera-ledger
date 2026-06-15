import type { Recipe } from "../types";

export const sopaDeFeijao: Recipe = {
  slug: "sopa-de-feijao",
  title: "Sopa de Feijão",
  cuisine: "portuguese",
  blurb:
    "A thick bean-and-cabbage soup — part of the beans puréed to a creamy base, the rest left whole, with shredded cabbage and a little potato to make it a full dinner from a dried-bean budget.",
  servings: 4,
  perServing: { calories: 540, protein: 22 },
  estCostPerServing: 0.6,
  roles: ["dinner", "lunch"],
  ingredients: [
    {
      item: "cooked white or red beans (plus their cooking liquid)",
      qty: "2 cups",
      cost: 0.65,
    },
    {
      item: "savoy or white cabbage, cored and shredded",
      qty: "1/2 small head",
      cost: 0.5,
    },
    {
      item: "potato, peeled and diced",
      qty: "1 large",
      cost: 0.3,
    },
    {
      item: "onion, diced",
      qty: "1",
      cost: 0.3,
    },
    {
      item: "garlic cloves",
      qty: "3",
      cost: 0.15,
      spansWeeks: true,
    },
    {
      item: "olive oil",
      qty: "3 tbsp",
      cost: 0.4,
      spansWeeks: true,
    },
    {
      item: "sweet paprika",
      qty: "1 tsp",
      cost: 0.1,
      spansWeeks: true,
    },
    { item: "water or bean broth", qty: "5 cups" },
    { item: "salt and pepper", qty: "to taste" },
  ],
  method: [
    "Soften the onion and garlic in the olive oil in a deep pot, then stir in the paprika off the heat.",
    "Add the diced potato, the water or bean broth, and about half the beans. Simmer until the potato is falling apart.",
    "Blend this base smooth, or crush it well with a masher — the dissolved potato and beans give the soup its creamy body without cream.",
    "Return the rest of the whole beans and the shredded cabbage to the pot and simmer 10–12 minutes, until the cabbage is tender but still has some life.",
    "Season, finish with a thread of raw olive oil, and serve thick — almost stew-like — with bread to round it out.",
  ],
  modernMove:
    "Puréeing half the beans with the potato builds a velvety base, while the whole beans and cabbage keep texture — one pot, two textures, no thickener but the vegetables themselves.",
  notes:
    "Built around a pot of dried beans cooked from scratch, the cheapest protein on the table. Their cooking liquid is the broth — never poured away.",
  tags: ["soup", "beans", "cabbage", "potato", "legumes", "one-pot"],
  sources: [
    {
      title: "Maria Lawton — Sopa de Feijão (Portuguese Bean Soup), The Epoch Times",
      note: "Confirms the technique of puréeing part of the beans and leaving the rest whole for a creamy body without cream.",
    },
  ],
};
