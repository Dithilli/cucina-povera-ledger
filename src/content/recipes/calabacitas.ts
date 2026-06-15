import type { Recipe } from "../types";

export const calabacitas: Recipe = {
  slug: "calabacitas",
  title: "Calabacitas",
  cuisine: "mexican",
  blurb:
    "The Three Sisters in one pan — squash stewed with corn, tomato, and a little cheese. The taste of the milpa, where the whole plot lands on one plate.",
  servings: 4,
  perServing: { calories: 190, protein: 8 },
  estCostPerServing: 0.8,
  roles: ["side", "dinner"],
  ingredients: [
    { item: "zucchini / Mexican squash, diced", qty: "4 cups", cost: 1.4 },
    { item: "corn kernels", qty: "1 cup", cost: 0.4 },
    { item: "tomato, chopped", qty: "1", cost: 0.4 },
    { item: "white onion + garlic", qty: "1/2 onion, 1 clove", cost: 0.25 },
    { item: "queso fresco, crumbled", qty: "1/3 cup", cost: 0.7, spansWeeks: true },
    { item: "oil, salt, epazote", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Soften onion and garlic in a little oil; add tomato and cook to a quick sofrito.",
    "Add the squash and corn, cover, and let them steam in their own moisture until just tender — don't drown them.",
    "Season with salt and epazote; fold in the crumbled cheese off the heat so it softens but doesn't melt away.",
    "Serve as a side, a taco filling, or a light dinner with tortillas and beans.",
  ],
  modernMove:
    "Let the squash sweat under a lid in its own water rather than boiling it — it keeps shape and flavor, and the pan stays a stew, not a soup.",
  tags: ["verduras", "squash", "corn", "milpa", "three-sisters"],
  sources: [
    {
      title: "Mely Martínez — Mexico in My Kitchen, Calabacitas con Elote",
      url: "https://www.mexicoinmykitchen.com/corn-and-zucchini-mexican-style/",
      note: "Authentic squash-corn-tomato method with serrano and cheese.",
    },
  ],
};
