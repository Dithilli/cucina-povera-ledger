import type { Recipe } from "../types";

export const tempeMendoan: Recipe = {
  slug: "tempe-mendoan",
  title: "Tempe Mendoan",
  cuisine: "indonesian",
  blurb:
    "Banyumas-style battered fried tempe — thin slabs dipped in a loose, herb-flecked rice-flour batter and fried only briefly so they stay soft and floppy inside, never fully crisp. Eaten blistering hot off the pan with raw bird's-eye chilies and a saucer of kecap.",
  servings: 4,
  perServing: { calories: 480, protein: 21 },
  estCostPerServing: 0.9,
  roles: ["dinner"],
  ingredients: [
    { item: "tempe, cut into wide thin slabs", qty: "12 oz", cost: 1.8 },
    { item: "rice flour", qty: "3/4 cup", cost: 0.4 },
    { item: "all-purpose flour", qty: "1/4 cup", cost: 0.1 },
    { item: "garlic cloves", qty: "3", cost: 0.15, spansWeeks: true },
    { item: "candlenut or 1 tbsp coriander seed", qty: "1", cost: 0.1, spansWeeks: true },
    { item: "ground coriander", qty: "1 tsp", cost: 0.1, spansWeeks: true },
    { item: "scallions or garlic chives, sliced", qty: "3", cost: 0.4 },
    { item: "salt", qty: "1 tsp", spansWeeks: true },
    { item: "cold water", qty: "about 1 cup" },
    { item: "oil for shallow frying", qty: "1 cup", cost: 1.2, spansWeeks: true },
    { item: "kecap manis + raw bird's-eye chilies, to serve", qty: "to serve", cost: 0.3, spansWeeks: true },
  ],
  method: [
    "Grind the garlic, candlenut, coriander, and salt to a paste. Whisk it into the rice flour and all-purpose flour with enough cold water to make a thin, pourable batter — looser than a pancake batter. Stir in the sliced scallions.",
    "Slice the tempe into wide, thin slabs; thin is the whole point of mendoan, so the inside stays tender in a short fry.",
    "Heat a shallow pool of oil over medium-high. Dip each slab in the batter to coat generously and slide into the oil.",
    "Fry only 1 to 2 minutes, turning once — pull them while the batter is set and pale-golden but still soft, before it goes hard and crisp. 'Mendoan' means half-cooked: floppy, not crunchy, is the dish, not a mistake.",
    "Drain briefly and eat immediately, while steaming, dipped in kecap manis with whole raw bird's-eye chilies bitten alongside.",
  ],
  modernMove:
    "The discipline here is the opposite of most frying: a loose batter, a low-ish oil, and a deliberately short fry give the signature soft, draping texture. Frying it crisp would make a different, lesser snack — mendoan lives in that half-cooked moment.",
  notes:
    "Best the second it leaves the oil, so fry to order. The same batter and aromatics fry up tofu, sliced long beans, or oyster mushrooms when tempe runs short. Strain and reuse the frying oil.",
  tags: ["dinner", "tempe", "fried", "javanese", "batter", "snack"],
  sources: [
    { title: "Anita Jacobson — Daily Cooking Quest", url: "https://dailycookingquest.com/tempeh-mendoan-deep-fried-tempeh-with-spiced-batter.html", note: "Banyumas-style soft, half-cooked battered fried tempe" },
  ],
};
