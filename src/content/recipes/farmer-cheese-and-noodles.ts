import type { Recipe } from "../types";

export const farmerCheeseAndNoodles: Recipe = {
  slug: "farmer-cheese-and-noodles",
  title: "Farmer Cheese & Noodles (Lokshen mit Kaese)",
  cuisine: "ashkenazi",
  blurb:
    "Hot egg noodles tossed with cool, crumbly farmer cheese, a knob of sweet butter, salt, and a great deal of black pepper — five minutes, five ingredients, and the most beloved milchig supper there is. The dish a whole generation grew up on.",
  servings: 4,
  perServing: { calories: 520, protein: 26 },
  estCostPerServing: 0.85,
  roles: ["dinner"],
  ingredients: [
    { item: "wide or medium egg noodles", qty: "12 oz", cost: 1.5 },
    { item: "farmer cheese", qty: "1 lb", cost: 3.0 },
    { item: "butter", qty: "3–4 tbsp", cost: 0.5, spansWeeks: true },
    { item: "black pepper, freshly ground", qty: "lots", cost: 0.05, spansWeeks: true },
    { item: "salt", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Boil the egg noodles in well-salted water until just tender. Scoop out a little of the cooking water before you drain — a splash helps the cheese loosen into a sauce.",
    "Drain the noodles and return them to the warm pot off the heat. Add the butter and toss until it melts and coats every strand.",
    "Crumble in the cold farmer cheese and toss gently. The heat of the noodles softens the cheese without fully melting it, so it stays in soft, creamy curds rather than turning to glue; add a spoon of pasta water if it needs loosening.",
    "Season hard — a real pinch of salt and far more black pepper than feels reasonable. The pepper against the mild sweet cheese is the entire character of the dish. Serve immediately, while the contrast of hot noodle and cool curd is at its best.",
  ],
  modernMove:
    "Take the pot off the heat before the cheese goes in and let the residual warmth do the work — farmer cheese is meant to stay in tender curds here, not melt smooth. And don't be timid with the pepper: in a dish this plain, the aggressive grind of black pepper against the sweet, milky cheese is the flavor, not a garnish.",
  notes:
    "About as milchig as cooking gets — noodles, cheese, butter, pepper, and nothing else. No meat, no schmaltz; this is a dairy meal in its purest, most frugal form, the kind eaten on a weeknight or a meatless day.",
  tags: ["noodles", "cheese", "dairy", "milchig"],
};
