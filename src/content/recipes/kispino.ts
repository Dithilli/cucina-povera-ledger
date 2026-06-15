import type { Recipe } from "../types";

export const kispino: Recipe = {
  slug: "kispino",
  title: "Kispiño",
  cuisine: "andean",
  blurb:
    "Steamed quinoa-flour cakes from the Bolivian altiplano — fingerprinted by hand, dried, and set over a bed of straw to steam into a dense, nutty bread that travels for days.",
  servings: 4,
  perServing: { calories: 380, protein: 12 },
  estCostPerServing: 0.85,
  roles: ["dinner"],
  ingredients: [
    { item: "quinoa flour (harina de quinua, toasted)", qty: "2 cups", cost: 1.8 },
    { item: "warm water", qty: "about 3/4 cup", cost: 0 },
    { item: "lard or vegetable shortening", qty: "2 tbsp", cost: 0.3, spansWeeks: true },
    { item: "fresh cheese (queso fresco), crumbled, to serve", qty: "4 oz", cost: 1.0, spansWeeks: true },
    { item: "salt", qty: "1 tsp", cost: 0.02, spansWeeks: true },
  ],
  method: [
    "If your quinoa flour is raw, toast it in a dry pan over medium heat, stirring, until it smells nutty and warm — this is what gives kispiño its character.",
    "Rub the lard and salt into the flour with your fingertips, then add warm water a little at a time until you have a stiff, just-cohesive dough that holds a print.",
    "Pinch off walnut-sized balls and press each flat against your palm with your fingers, leaving the dimpled fingerprints that name the cake. Let them air-dry 15–20 minutes.",
    "Set the cakes over a bed of clean straw or a steamer rack above a little salted water, cover, and steam 35–40 minutes until firm and cooked through.",
    "Serve warm with crumbled queso fresco, the highland way — bread and cheese as the whole of dinner.",
  ],
  modernMove:
    "Toasting the quinoa flour first deepens the nuttiness and tames quinoa's natural bitterness, so the cakes read as savory bread rather than raw grain.",
  notes:
    "Kispiño keeps for days without refrigeration, which is exactly why altiplano shepherds carried it. Stale cakes are revived by re-steaming or crumbling into a hot soup.",
  zeroWasteHero: false,
  tags: ["quinoa", "kispino", "bread", "steamed", "bolivia", "altiplano", "andean"],
  sources: [
    {
      title: "Recetas.com.bo — Kispiña, galletas de harina de quinua",
      url: "https://www.recetas.com.bo/receta/kispina-galletas-de-harina-de-quinua",
      note: "Traditional Oruro method: toasted quinoa flour, hand-pressed cakes, steamed over a bed of straw",
    },
  ],
};
