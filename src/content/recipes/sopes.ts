import type { Recipe } from "../types";

export const sopes: Recipe = {
  slug: "sopes",
  title: "Sopes",
  cuisine: "mexican",
  blurb:
    "Thick masa rounds griddled, then pinched while hot into a raised rim — little corn boats that hold a smear of refried beans, salsa, and crumbled queso, an egg on top when you want it to be dinner.",
  servings: 4,
  perServing: { calories: 430, protein: 16 },
  estCostPerServing: 0.85,
  roles: ["dinner", "lunch"],
  ingredients: [
    { item: "masa harina (or fresh masa)", qty: "2 cups", cost: 0.7 },
    { item: "refried beans", qty: "1 1/2 cups", cost: 0.6 },
    { item: "salsa (roja or verde)", qty: "1 cup", cost: 0.4 },
    { item: "queso fresco, crumbled", qty: "1/2 cup", cost: 1.0, spansWeeks: true },
    { item: "eggs, to fry (optional)", qty: "4", cost: 0.8 },
    { item: "oil or lard for the rim", qty: "2 tbsp", cost: 0.2, spansWeeks: true },
    { item: "salt, warm water", qty: "as needed", spansWeeks: true },
  ],
  method: [
    "Knead masa harina with salt and warm water into a soft, pliable dough that doesn't crack at the edges; rest it covered while the comal heats.",
    "Roll golf-ball portions, press into thick discs (about 1/4 inch — sopes are stout, not tortilla-thin), and cook on a dry medium-hot comal about a minute per side until set but pale.",
    "While each is still hot, pinch a raised rim all the way around with a kitchen towel and your fingertips — that little wall is what makes it a sope.",
    "Crisp the bases briefly in a film of hot oil, then fill the well: refried beans first, then salsa, a fried egg if you're making it dinner, and a shower of queso fresco.",
  ],
  modernMove:
    "Cook the masa shells fully on the dry comal first, then give the bases only a quick shallow-fry — you get a crisp, structurally sound boat without a greasy raw-dough center.",
  notes:
    "The pinched rim must be shaped while the masa is hot; let it cool and it cracks. Beans-and-egg makes a complete, cheap dinner protein.",
  tags: ["masa", "antojito", "beans", "comal", "dinner"],
  sources: [
    {
      title: "Mely Martínez — Mexico in My Kitchen",
      url: "https://www.mexicoinmykitchen.com/sopes-recipe/",
      note: "masa dough hydration and the pinched-rim technique on a hot comal",
    },
    {
      title: "Maricruz Avalos — How to Make Sopes",
      url: "https://www.maricruzavalos.com/sopes/",
      note: "shaping the border with a towel while warm; refried-bean-and-cheese assembly",
    },
  ],
};
