import type { Recipe } from "../types";

export const loobiaPolo: Recipe = {
  slug: "loobia-polo",
  title: "Loobia Polo",
  cuisine: "persian",
  blurb:
    "Green-bean and tomato rice — chopped beans braised with onion, tomato, and warm spice, then folded through basmati over a crisp tahdig.",
  servings: 4,
  perServing: { calories: 520, protein: 14 },
  estCostPerServing: 0.95,
  roles: ["dinner"],
  ingredients: [
    { item: "long-grain basmati rice", qty: "2 cups", cost: 1.4 },
    { item: "green beans, cut into 1/2-inch pieces", qty: "12 oz", cost: 1.2 },
    { item: "onion, finely diced", qty: "1", cost: 0.3 },
    { item: "tomato paste", qty: "2 tbsp", cost: 0.25 },
    { item: "ripe tomato, grated (or 1/2 cup canned)", qty: "1", cost: 0.4 },
    {
      item: "neutral oil or butter (for the sauté and the tahdig)",
      qty: "4 tbsp",
      cost: 0.4,
      spansWeeks: true,
    },
    {
      item: "ground turmeric, cinnamon, and advieh (or allspice)",
      qty: "1 tsp each",
      cost: 0.2,
      spansWeeks: true,
    },
    {
      item: "saffron, bloomed in 2 tbsp hot water (optional)",
      qty: "pinch",
      cost: 0.4,
      spansWeeks: true,
    },
    { item: "salt and black pepper", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Rinse the rice and soak in salted water for 30 minutes. Sauté the onion in 2 tbsp oil until soft, then add the green beans and cook until they lose their raw snap, about 8 minutes.",
    "Stir in the turmeric, cinnamon, and advieh, then the tomato paste; fry the paste for a minute to take off the raw edge before adding the grated tomato. Season and simmer until thick and jammy, 10 minutes.",
    "Parboil the soaked rice in boiling salted water for about 6 minutes until soft outside, firm inside, then drain.",
    "Heat the remaining oil in the pot, press a thin layer of plain rice for the tahdig, then alternate layers of rice with the green-bean tomato mixture, mounding into a pyramid.",
    "Poke steam holes, drizzle with the saffron water, cover the lid with a towel, and steam on the lowest heat 35–45 minutes until the base crisps into a golden crust.",
    "Scoop gently or invert onto a platter, breaking off pieces of tahdig to serve alongside.",
  ],
  modernMove:
    "Frying the tomato paste before the fresh tomato deepens it to a brick-red, almost meaty base — the trick that lets a vegetarian polo taste like it had stew in it.",
  tags: ["rice", "polo", "tahdig", "green-beans", "tomato", "vegetables"],
  sources: [
    {
      title: "Persian Mama — Loobia Polo ba Havij (Green Bean & Carrot Rice)",
      url: "https://persianmama.com/green-bean-carrot-stew-on-rice-lubia-polo-ba-havij/",
      note: "Layered green-bean-and-tomato polo with tahdig — the dish's structure and spicing.",
    },
  ],
};
