import type { Recipe } from "../types";

export const sopaDeHabas: Recipe = {
  slug: "sopa-de-habas",
  title: "Sopa de Habas",
  cuisine: "andean",
  blurb:
    "A thick highland fava-bean soup loosened with potato and a whisper of cumin — the cheapest, most warming bowl the altiplano kitchen knows.",
  servings: 4,
  perServing: { calories: 440, protein: 19 },
  estCostPerServing: 0.8,
  roles: ["dinner"],
  ingredients: [
    { item: "dried split fava beans (habas), rinsed", qty: "1 1/2 cups", cost: 1.1 },
    { item: "potatoes, peeled and diced", qty: "2 medium", cost: 0.6 },
    { item: "onion, finely diced", qty: "1", cost: 0.3 },
    { item: "garlic, minced", qty: "3 cloves", cost: 0.15, spansWeeks: true },
    { item: "ají amarillo paste", qty: "1 tbsp", cost: 0.2, spansWeeks: true },
    { item: "cumin, oregano, salt, black pepper", qty: "to taste", cost: 0.2, spansWeeks: true },
    { item: "oil", qty: "2 tbsp", cost: 0.2, spansWeeks: true },
    { item: "cilantro, chopped", qty: "1 small handful", cost: 0.25 },
  ],
  method: [
    "Soak the split favas an hour if you have it; otherwise simmer them straight in plenty of water for 45–60 minutes until tender and beginning to fall apart.",
    "Meanwhile sweat the onion and garlic in the oil until soft, stir in the ají amarillo paste and a good pinch of cumin and oregano, and fry until fragrant.",
    "Tip the sofrito into the favas with the diced potato and enough water to keep it soupy. Simmer 20 minutes until the potato is soft and starts to thicken the broth.",
    "Crush some of the favas and potato against the pot for body. Season hard with salt and pepper, and finish with chopped cilantro.",
  ],
  modernMove:
    "Split favas break down faster and thicken the soup themselves — no cream, no roux. Crushing a ladleful against the pot wall gives a velvety body from one cheap legume.",
  notes:
    "A spoon of fresh cheese or a poached egg dropped in turns it into a fuller plate. Across Ecuador this same pot becomes locro de habas with milk and cheese.",
  zeroWasteHero: false,
  tags: ["favas", "legumes", "soup", "potato", "andean"],
  sources: [
    {
      title: "Morena Cuadra — Peru Delights",
      url: "https://perudelights.com/meatlessmondays-fava-bean-and-barley-chupe-chupe-de-habas-y-cebada/",
      note: "Andean fava-and-tuber chupe tradition that this thinner sopa de habas is drawn from.",
    },
  ],
};
