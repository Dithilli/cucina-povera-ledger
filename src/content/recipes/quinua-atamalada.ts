import type { Recipe } from "../types";

export const quinuaAtamalada: Recipe = {
  slug: "quinua-atamalada",
  title: "Quinua Atamalada",
  cuisine: "andean",
  blurb:
    "Quinoa cooked soft and soupy in an ají-amarillo base with chunks of yellow potato, loosened with milk and shot through with fresh cheese — 'tamale-like' because it sets thick as it cools, a one-pot Andean stew that eats like a warm bowl of risotto.",
  servings: 4,
  perServing: { calories: 500, protein: 18 },
  estCostPerServing: 1.3,
  roles: ["dinner"],
  ingredients: [
    { item: "white quinoa, well rinsed", qty: "1 cup", cost: 1.0 },
    { item: "yellow potatoes, cubed", qty: "3 medium", cost: 0.6 },
    { item: "ají amarillo paste", qty: "2 tbsp", cost: 0.5, spansWeeks: true },
    { item: "red onion, finely diced", qty: "1 medium", cost: 0.3 },
    { item: "garlic, minced", qty: "3 cloves", cost: 0.15, spansWeeks: true },
    { item: "milk (or evaporated milk)", qty: "1 cup", cost: 0.6, spansWeeks: true },
    { item: "queso fresco, cubed", qty: "4 oz", cost: 1.2, spansWeeks: true },
    { item: "fresh parsley or huacatay, chopped", qty: "2 tbsp", cost: 0.2 },
    { item: "neutral oil", qty: "2 tbsp", cost: 0.1, spansWeeks: true },
    { item: "white rice, to serve (optional)", qty: "to serve" },
  ],
  method: [
    "Rinse the quinoa hard under running water to strip the bitter saponin, then drain.",
    "Make the aderezo: fry onion, garlic and ají amarillo paste in oil until soft and fragrant.",
    "Add the quinoa and the cubed potatoes, then pour in water to cover by a couple of inches. Simmer, stirring now and then and topping up the water, for about 30 minutes until the quinoa is soft and the mix is the texture of a thick soup.",
    "Stir in the milk and let it heat through to a loose, creamy stew — it will firm up as it cools, hence 'atamalada'.",
    "Off the heat fold in the cubed cheese and the herbs so the cheese just softens. Serve hot, on its own or with a little white rice.",
  ],
  modernMove:
    "Cook the quinoa until it visibly overshoots into porridge, then bring it back with milk — the deliberately soft grain plus the half-melted cheese is what gives the dish its signature settable, tamale-like body.",
  notes:
    "Two iconic Andean staples — quinoa and potato — in one cheap pot. Leftovers set firm overnight and can be sliced and pan-crisped the next day. Easily vegetarian as written.",
  zeroWasteHero: true,
  tags: ["dinner", "quinoa", "stew", "potato", "aji-amarillo", "andean"],
  sources: [
    {
      title: "Morena Cuadra — Peru Delights",
      url: "https://perudelights.com/quinoa-atamalada-eating-the-andean-way/",
      note: "Soupy ají-amarillo quinoa with potato, milk and fresh cheese that sets tamale-like on cooling",
    },
  ],
};
