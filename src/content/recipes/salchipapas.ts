import type { Recipe } from "../types";

export const salchipapas: Recipe = {
  slug: "salchipapas",
  title: "Salchipapas",
  cuisine: "andean",
  blurb:
    "Golden fried potatoes piled with browned sliced sausage and crowned with bright salsa criolla — Lima's great poor-man's street dinner, born from a fistful of papas and one cheap sausage.",
  servings: 2,
  perServing: { calories: 700, protein: 22 },
  estCostPerServing: 1.5,
  roles: ["dinner"],
  ingredients: [
    { item: "potatoes, cut into thick fries", qty: "1 1/4 lb", cost: 0.7 },
    { item: "beef hot-dog or frankfurter sausages, sliced on the bias", qty: "4", cost: 1.4 },
    { item: "oil for frying", qty: "3 cups", cost: 0.5, spansWeeks: true },
    { item: "salt", qty: "to taste", cost: 0.05, spansWeeks: true },
    { item: "salsa criolla, to serve", qty: "1 cup", cost: 0.5 },
    { item: "mayonnaise and ají sauce, to serve", qty: "to taste", cost: 0.3, spansWeeks: true },
  ],
  method: [
    "Cut the potatoes into thick fries, soak in cold water 15 minutes to wash off starch, then drain and dry them thoroughly so they crisp instead of steam.",
    "Heat the oil to about 350°F and fry the potatoes in batches until golden and crisp, 5–6 minutes. Lift onto paper and salt at once.",
    "Pour off all but a slick of oil and fry the bias-cut sausage slices until browned and curled at the edges.",
    "Pile the fries and sausage together on a plate, crown with a generous scoop of salsa criolla, and zigzag mayonnaise and ají sauce over the top.",
  ],
  modernMove:
    "Soaking and drying the cut potatoes is the whole trick — surface starch rinsed away, water patted off, so they fry to a real crackle. The salsa criolla cuts the fried richness with acid and raw onion.",
  notes:
    "Picada-turned-salchipapa, sold from Lima street carts since the 1960s. Any cheap sausage works; the dish exists precisely to stretch one of them across a plate of potatoes.",
  zeroWasteHero: false,
  tags: ["potato", "sausage", "fried", "street-food", "andean"],
  sources: [
    {
      title: "Mike Hultquist — Chili Pepper Madness",
      url: "https://www.chilipeppermadness.com/recipes/salchipapa/",
      note: "Fry-the-potatoes-then-the-sausage method and the salsa criolla / ají topping for this Peruvian street plate.",
    },
  ],
};
