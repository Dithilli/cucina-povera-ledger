import type { Recipe } from "../types";

export const cholent: Recipe = {
  slug: "cholent",
  title: "Cholent",
  cuisine: "ashkenazi",
  blurb:
    "Beans, barley, potato, onion, and a cheap cut of beef layered in a heavy pot, barely covered, sealed, and left on the lowest flame from Friday dusk to Saturday noon — the dish born of the law against lighting a fire on Shabbos, thrift transformed by eighteen hours into a luxury of tenderness.",
  servings: 8,
  perServing: { calories: 620, protein: 34 },
  estCostPerServing: 1.6,
  roles: ["dinner"],
  ingredients: [
    { item: "flanken or beef chuck (and a marrow bone)", qty: "2 lb meat + 1 bone", cost: 8.0 },
    { item: "dried beans (lima, navy, or kidney)", qty: "1 1/2 cups", cost: 1.0 },
    { item: "pearl barley", qty: "3/4 cup", cost: 0.5, spansWeeks: true },
    { item: "potatoes, peeled and quartered", qty: "4 medium", cost: 1.0 },
    { item: "yellow onions, chopped", qty: "2 large", cost: 0.6 },
    { item: "garlic cloves", qty: "4", cost: 0.2, spansWeeks: true },
    { item: "schmaltz (rendered chicken fat)", qty: "2 tbsp", cost: 0.3, spansWeeks: true },
    { item: "paprika", qty: "1 tbsp", cost: 0.15, spansWeeks: true },
    { item: "salt and black pepper", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Soak the beans in plenty of cold water overnight (or several hours). Drain. This Friday-afternoon step is what lets the cholent cook unattended through the night.",
    "In a heavy pot or Dutch oven, melt the schmaltz and sweat the onions and garlic until soft. Push aside and brown the beef and marrow bone on all sides for color and depth.",
    "Layer the pot: onions and meat on the bottom, then the drained beans, barley, and potatoes nestled around. Season with paprika, salt, and pepper. Pour in hot water to barely cover everything — no more, the barley and beans will drink it.",
    "Bring just to a boil on the stove, then cover tightly and move to the lowest possible oven, 200–225°F (95–110°C). Let it go undisturbed from Friday before sundown until Saturday midday — at least 12 hours, ideally 16–18.",
    "Lift the lid at the Shabbos table: the meat falls apart at a fork, the beans and barley have melted into a thick, burnished, deeply savory whole, and a brown crust clings to the pot.",
  ],
  modernMove:
    "Barely cover with liquid and seal tight — the magic is the long, sealed, ultra-low braise, where the meat's collagen and the marrow turn cheap cuts silky while the beans and barley thicken everything into one dish. A modern slow-cooker on low does the overnight job faithfully.",
  notes:
    "Schmaltz and beef make this resolutely fleishig. Cholent exists because Jewish law forbids kindling a flame on the Sabbath — so the pot is set going before dusk on Friday and feeds the family at Saturday's midday meal with no cooking done on the holy day. Every region had its own: Hungarian sólet, Sephardic dafina. One cheap brisket-end and a bag of beans feed eight.",
  tags: ["stew", "beans", "barley", "shabbos", "fleishig", "slow"],
};
