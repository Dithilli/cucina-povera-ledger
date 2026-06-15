import type { Recipe } from "../types";

export const brochettesKefta: Recipe = {
  slug: "brochettes-kefta",
  title: "Brochettes de Kefta",
  cuisine: "moroccan",
  blurb:
    "Ground meat kneaded with grated onion, cumin, paprika, and a fistful of fresh herbs, molded onto skewers and grilled hard over coals until charred outside and juicy within, pulled straight into bread with a tomato-onion salad.",
  servings: 4,
  perServing: { calories: 540, protein: 30 },
  estCostPerServing: 1.7,
  roles: ["dinner"],
  ingredients: [
    { item: "ground beef or lamb", qty: "1 lb", cost: 4.5 },
    { item: "onion, grated and squeezed dry", qty: "1 small", cost: 0.2 },
    { item: "parsley and cilantro, finely chopped", qty: "1/2 cup", cost: 0.4, spansWeeks: true },
    { item: "cumin and paprika", qty: "2 tsp each", cost: 0.15, spansWeeks: true },
    { item: "fresh mint, chopped (optional)", qty: "2 tbsp", cost: 0.15, spansWeeks: true },
    { item: "khobz or flatbread, to serve", qty: "4 pieces", cost: 0.8 },
    { item: "salt and black pepper", qty: "to taste", cost: 0.05, spansWeeks: true },
  ],
  method: [
    "Knead the meat with the squeezed-dry onion, herbs, cumin, paprika, mint, salt, and pepper for a few minutes until the mixture turns sticky and holds together.",
    "Rest it covered in the fridge for at least 30 minutes so the kefta firms up and the spices marry.",
    "Wet your hands and mold portions of the mixture into finger-thick logs around metal skewers, pressing so they grip the metal.",
    "Grill over hot coals or a screaming-hot pan, turning, about 3–4 minutes a side until charred and browned but still juicy.",
    "Slide the kefta into split bread with a chopped tomato-and-onion salad, or eat straight off the skewer.",
  ],
  modernMove:
    "Squeezing the grated onion bone-dry before it goes in keeps the mix from going soupy, so the kefta clings to the skewer and chars instead of falling off and steaming.",
  notes:
    "Street-corner Morocco on a stick — cheap cuts of ground meat stretched with onion and herbs into a feast.",
  zeroWasteHero: false,
  tags: ["kefta", "skewers", "grilled", "street", "moroccan"],
  sources: [
    {
      title: "Salima's Kitchen — 30-Minute Grilled Moroccan Kefta (Brochettes)",
      url: "https://salimaskitchen.com/kefta/",
      note: "Grated-onion-and-herb ground meat molded onto skewers and grilled, served in bread with salad.",
    },
  ],
};
