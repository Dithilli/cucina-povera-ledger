import type { Recipe } from "../types";

export const molotesOx: Recipe = {
  slug: "molotes-ox",
  title: "Molotes",
  cuisine: "oaxacan",
  blurb:
    "Hand-shaped masa torpedoes stuffed with potato and chorizo, fried until the corn shell blisters crisp, then crowned with salsa, crema, and crumbled quesillo — Oaxaca's great street-corner antojito.",
  servings: 4,
  perServing: { calories: 540, protein: 17 },
  estCostPerServing: 1.2,
  roles: ["dinner"],
  ingredients: [
    { item: "fresh masa (nixtamal) or masa harina", qty: "2 cups", cost: 1.0 },
    { item: "floury potatoes, boiled and mashed", qty: "2 medium", cost: 0.5 },
    { item: "Mexican chorizo", qty: "4 oz", cost: 1.0 },
    { item: "white onion, garlic", qty: "1/4 onion + 1 clove", cost: 0.2, spansWeeks: true },
    { item: "salsa roja or verde, to top", qty: "1/2 cup", cost: 0.3 },
    { item: "quesillo (Oaxaca string cheese), crumbled", qty: "1/2 cup", cost: 0.8, spansWeeks: true },
    { item: "Mexican crema", qty: "1/4 cup", cost: 0.3, spansWeeks: true },
    { item: "oil for frying, salt, baking powder", qty: "as needed", spansWeeks: true },
  ],
  method: [
    "Cook the crumbled chorizo in a dry pan until it renders, add onion and garlic, then fold in the mashed potato and season; let the filling cool.",
    "Work the masa with a little salt, a pinch of baking powder, and warm water until smooth and pliable; press portions into ovals.",
    "Spoon filling onto each oval, fold the masa around it, and roll between your palms into a closed torpedo, sealing the seam well.",
    "Fry in 350°F oil, turning, until the shells are deep golden and crisp; drain.",
    "Top each molote with salsa, a drizzle of crema, crumbled quesillo, and sliced radish or raw onion.",
  ],
  modernMove:
    "A pinch of baking powder in the masa makes the fried shell shatter-crisp outside while staying tender within — the texture that separates a market molote from a dense fried dumpling.",
  notes: "A clean way to stretch a little chorizo and yesterday's potatoes into a full plate of dinner.",
  zeroWasteHero: false,
  tags: ["antojito", "oaxacan", "masa", "chorizo"],
  sources: [
    {
      title: "Muy Bueno — Molotes (Oaxacan Masa Empanadas)",
      url: "https://muybuenoblog.com/molotes-oaxacan-masa-empanadas/",
      note: "potato-and-chorizo filling, torpedo shaping, and frying the masa shell crisp",
    },
  ],
};
