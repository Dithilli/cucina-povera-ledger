import type { Recipe } from "../types";

export const tlacoyos: Recipe = {
  slug: "tlacoyos",
  title: "Tlacoyos",
  cuisine: "mexican",
  blurb:
    "Pre-Hispanic masa ovals stuffed with mashed beans (or requesón), griddled until blistered, then crowned with sautéed nopales, salsa verde, and crumbled cheese — a whole meal you eat off your hand.",
  servings: 4,
  perServing: { calories: 400, protein: 17 },
  estCostPerServing: 0.8,
  roles: ["dinner", "lunch"],
  ingredients: [
    { item: "masa harina (or fresh masa)", qty: "2 cups", cost: 0.7 },
    { item: "refried or mashed beans (or requesón)", qty: "1 cup", cost: 0.5 },
    { item: "nopales (cactus paddles), diced", qty: "2 cups", cost: 0.7 },
    { item: "salsa verde", qty: "1 cup", cost: 0.4 },
    { item: "queso fresco, crumbled", qty: "1/2 cup", cost: 1.0, spansWeeks: true },
    { item: "white onion, cilantro", qty: "to garnish", cost: 0.2 },
    { item: "salt, warm water", qty: "as needed", spansWeeks: true },
  ],
  method: [
    "Knead masa harina with salt and warm water into a smooth dough; keep it covered so it stays supple.",
    "Flatten a portion in your palm (or between plastic), spoon a line of beans down the center, fold the masa over the filling, and seal — then gently flatten and coax it into the classic pointed oval.",
    "Griddle on a dry medium-hot comal, turning, until the masa is cooked through and freckled brown and the beans inside are hot.",
    "Top with nopales sautéed with a little onion, a spoon of salsa verde, raw onion and cilantro, and plenty of crumbled queso fresco.",
  ],
  modernMove:
    "Salt the diced nopales and let them weep, then dry-sear them hard in a hot pan — driving off the slime gives a clean, almost green-bean snap instead of the mucilaginous texture that puts people off cactus.",
  notes:
    "Beans-inside plus queso-on-top means the protein is built in. Nopales are nearly free if you have a paddle in the yard — true peasant economy.",
  tags: ["masa", "antojito", "beans", "nopales", "dinner"],
  sources: [
    {
      title: "Mely Martínez — Mexico in My Kitchen",
      url: "https://www.mexicoinmykitchen.com/how-to-make-tlacoyos/",
      note: "home-cook method for stuffing and shaping the bean-filled oval",
    },
    {
      title: "Maricruz Avalos — Authentic Tlacoyos de Frijol",
      url: "https://www.maricruzavalos.com/tlacoyos/",
      note: "fold-pinch-flatten technique and nopales/salsa/cheese topping",
    },
  ],
};
