import type { Recipe } from "../types";

export const tempeBalado: Recipe = {
  slug: "tempe-balado",
  title: "Tempe Balado",
  cuisine: "indonesian",
  blurb:
    "Tempe fried crisp, then tossed in a glossy Minang red-chili balado of fried chile, shallot, garlic, and tomato sharpened with lime — a few cents of chile turning a cheap soy cake into the thing you actually crave over rice.",
  servings: 4,
  perServing: { calories: 480, protein: 24 },
  estCostPerServing: 0.9,
  roles: ["dinner"],
  ingredients: [
    { item: "tempe, cut into thin slabs or batons", qty: "12 oz", cost: 1.8 },
    { item: "red chilies (cabe merah)", qty: "8", cost: 0.8 },
    { item: "bird's-eye chilies (optional, for heat)", qty: "3", cost: 0.2, spansWeeks: true },
    { item: "shallots", qty: "5", cost: 0.45, spansWeeks: true },
    { item: "garlic cloves", qty: "3", cost: 0.15, spansWeeks: true },
    { item: "tomato, chopped", qty: "1", cost: 0.3 },
    { item: "salam (bay) leaf and a slice of galangal", qty: "1 each", cost: 0.1, spansWeeks: true },
    { item: "palm sugar (or brown sugar)", qty: "1 tsp", cost: 0.1, spansWeeks: true },
    { item: "lime, juiced", qty: "1/2", cost: 0.2, spansWeeks: true },
    { item: "salt", qty: "to taste", cost: 0.05 },
    { item: "oil for frying", qty: "1/3 cup", cost: 0.4, spansWeeks: true },
  ],
  method: [
    "Fry the tempe in hot oil until deep golden and crisp on every side, then lift out onto paper. Frying it hard now keeps it from going soft once it meets the wet sauce.",
    "Grind the red chilies, bird's-eye chilies, shallots, garlic, and tomato to a coarse paste. Fry the paste in a few tablespoons of the oil with the salam leaf and galangal over medium heat until the raw smell is gone and the oil reddens and separates, about 8 minutes.",
    "Season with palm sugar and salt and cook to a thick, glossy sambal. Stir in the lime juice off the heat for a bright Minang edge.",
    "Tip the fried tempe back into the pan and toss fast to coat every piece. Serve at once with steamed rice and a green.",
  ],
  modernMove:
    "Cook the chile paste until the oil visibly splits and reddens — that 'pecah minyak' moment means the rawness is gone and the sauce will cling and gloss. The lime goes in at the very end so its brightness survives the heat.",
  notes:
    "The balado base is endlessly thrifty: the same pan of sauce will smother yesterday's potato, a boiled egg, or a handful of dried anchovies, so a big batch carries days of cheap protein.",
  tags: ["dinner", "tempe", "balado", "chili", "minangkabau", "protein"],
  sources: [
    { title: "Citra's Home Diary — Balado Tempe (Tempeh in Sambal Sauce)", url: "https://myhomediaryinturkey.blogspot.com/2015/02/balado-tempe-indonesian-tempeh-cooked.html", note: "fry tempe first, chile-shallot-galangal balado, finish with lime" },
    { title: "Daily Cooking Quest — Balado Tempeh dan Udang", url: "https://dailycookingquest.com/balado-tempeh-dan-udang.html", note: "ground red-chili balado paste cooked until oil separates" },
  ],
};
