import type { Recipe } from "../types";

export const pecel: Recipe = {
  slug: "pecel",
  title: "Pecel",
  cuisine: "indonesian",
  blurb:
    "Javanese blanched-vegetable plate under a bright, spicy peanut sauce sharpened with kaffir lime and tamarind — pecel is gado-gado's leaner village cousin.",
  servings: 4,
  perServing: { calories: 480, protein: 21 },
  estCostPerServing: 1.1,
  roles: ["dinner", "lunch"],
  ingredients: [
    { item: "water spinach (kangkung) or spinach", qty: "1 bunch", cost: 0.8 },
    { item: "long beans or green beans, cut", qty: "8 oz", cost: 0.9 },
    { item: "bean sprouts", qty: "2 cups", cost: 0.5 },
    { item: "cabbage, shredded", qty: "1/4 head", cost: 0.4 },
    {
      item: "roasted peanuts (or unsweetened peanut butter)",
      qty: "1 cup",
      cost: 1.2,
    },
    { item: "garlic cloves", qty: "3", cost: 0.15, spansWeeks: true },
    { item: "dried red chilies", qty: "3", cost: 0.25, spansWeeks: true },
    { item: "kaffir lime leaves", qty: "2", cost: 0.2, spansWeeks: true },
    { item: "palm sugar (or brown sugar)", qty: "1 tbsp", cost: 0.1, spansWeeks: true },
    { item: "tamarind paste", qty: "2 tsp", cost: 0.2, spansWeeks: true },
    { item: "neutral oil", qty: "2 tbsp", cost: 0.15, spansWeeks: true },
    { item: "salt, lime", qty: "to taste" },
    { item: "fried shallots and rice or crackers to serve", qty: "to serve", cost: 0.4 },
  ],
  method: [
    "Toast the peanuts dry in a pan until the skins darken, then pound with garlic, chilies, and torn kaffir lime leaves to a coarse paste.",
    "Work in palm sugar, tamarind, and salt, then let the paste down with hot water to a thick, clingy sauce — pecel sauce should coat, not pool.",
    "Blanch each vegetable separately in salted water until just tender-crisp, then drain and squeeze gently.",
    "Pile the vegetables on plates, spoon over the peanut sauce, and scatter with fried shallots. Serve with warm rice or rice crackers and a squeeze of lime.",
  ],
  modernMove:
    "Kaffir lime leaf pounded straight into the peanut paste perfumes the whole sauce from the inside — a free aromatic lift that separates pecel from a plain satay dressing.",
  tags: ["peanut-sauce", "vegetables", "kangkung", "javanese", "blanched"],
  sources: [
    { title: "Anita Jacobson — Daily Cooking Quest", url: "https://dailycookingquest.com/pecel-madiun-vegetables-in-peanut-sauce.html", note: "Javanese blanched vegetables with kencur/kaffir-lime peanut sauce" },
    { title: "Wikipedia — Pecel", url: "https://en.wikipedia.org/wiki/Pecel", note: "pecel as a traditional Javanese boiled-vegetable salad with peanut sauce" },
  ],
};
