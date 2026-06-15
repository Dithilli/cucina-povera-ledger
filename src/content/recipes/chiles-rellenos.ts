import type { Recipe } from "../types";

export const chilesRellenos: Recipe = {
  slug: "chiles-rellenos",
  title: "Chiles Rellenos de Picadillo",
  cuisine: "mexican",
  blurb:
    "Roasted poblanos stuffed with picadillo — that thrifty meat-and-potato filling — battered in whipped egg, fried golden, and drowned in a simple salsa roja. The fonda classic that stretches a little meat into a whole plate.",
  servings: 4,
  perServing: { calories: 470, protein: 24 },
  estCostPerServing: 1.9,
  roles: ["dinner"],
  ingredients: [
    { item: "poblano chiles", qty: "4 large", cost: 2.0 },
    { item: "picadillo (see recipe)", qty: "about 2 cups", cost: 3.0 },
    { item: "eggs (for the batter)", qty: "3", cost: 0.75 },
    { item: "flour (to dust the chiles)", qty: "1/2 cup", cost: 0.15, spansWeeks: true },
    { item: "tomatoes (for the salsa)", qty: "3", cost: 0.9 },
    { item: "onion, garlic, jalapeño", qty: "1/4 onion, 1 clove, 1 chile", cost: 0.3, spansWeeks: true },
    { item: "oil for frying, salt", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Char the poblanos over a flame until blackened, sweat them in a covered bowl, then peel; cut a slit in each and gently scoop out the seeds, leaving the chile whole.",
    "Stuff each with picadillo until full but still able to close, and secure with a toothpick if needed.",
    "Blend and fry the tomatoes with onion, garlic, and jalapeño into a loose salsa roja; keep it warm.",
    "Separate the eggs, whip the whites to stiff peaks, then fold the yolks back in with a pinch of salt for the batter.",
    "Dust each chile in flour, dip in the egg batter, and fry in hot oil until golden on all sides; drain, then nap with the warm salsa roja to serve.",
  ],
  modernMove:
    "Whip the whites to stiff peaks before folding the yolks back in — that aerated batter is what gives a chile relleno its puffed, golden cloud instead of a dense fried coating.",
  notes: "Lean on the picadillo recipe for the filling — its potato-stretched meat is exactly what keeps this plate frugal.",
  tags: ["chiles", "poblano", "picadillo", "fried", "dinner", "fonda"],
  sources: [
    {
      title: "Mely Martínez — Mexico in My Kitchen, Chiles Rellenos de Picadillo",
      url: "https://www.mexicoinmykitchen.com/chiles-rellenos-de-picadillo/",
      note: "picadillo-stuffed poblanos, flour dredge, whipped-egg batter, and a simple tomato salsa",
    },
    {
      title: "Pati Jinich — Picadillo Chile Relleno",
      url: "https://patijinich.com/picadillo-chile-relleno/",
      note: "roast-peel-stuff method and the separated-egg batter technique",
    },
  ],
};
