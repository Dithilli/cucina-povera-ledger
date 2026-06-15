import type { Recipe } from "../types";

export const gbegiriAndEwedu: Recipe = {
  slug: "gbegiri-and-ewedu",
  title: "Gbegiri & Ewedu with Eba",
  cuisine: "west-african",
  blurb:
    "The Yoruba double soup — a velvety brown-bean gbegiri poured beside a green, drawing ewedu of jute leaves, both eaten with a fist of eba over a spoonful of peppery stew.",
  servings: 4,
  perServing: { calories: 640, protein: 22 },
  estCostPerServing: 1.35,
  roles: ["dinner"],
  ingredients: [
    { item: "dried brown beans (or black-eyed peas), for gbegiri", qty: "1 1/2 cups", cost: 1.1 },
    { item: "red palm oil", qty: "3 tbsp", cost: 0.6, spansWeeks: true },
    { item: "dried jute leaves (ewedu), or fresh", qty: "2 cups", cost: 1.0 },
    { item: "ground dried crayfish", qty: "2 tbsp", cost: 0.7, spansWeeks: true },
    { item: "iru (fermented locust bean)", qty: "1 tbsp", cost: 0.4, spansWeeks: true },
    { item: "potash or efo riro powder (ijabe, to keep ewedu green)", qty: "pinch", cost: 0.1, spansWeeks: true },
    { item: "scotch bonnet, ground", qty: "1", cost: 0.25 },
    { item: "garri (cassava flour), for eba", qty: "2 cups", cost: 0.9 },
    { item: "stock cube, salt", qty: "to taste", cost: 0.2, spansWeeks: true },
    { item: "a little stew/obe ata to spoon over (optional)", qty: "1/2 cup", cost: 0.6 },
  ],
  method: [
    "Soak and peel the beans, then boil soft and blend smooth. Cook down with palm oil, a little crayfish, iru, and salt until it thickens into a glossy, gravy-like gbegiri.",
    "Separately, boil the ewedu leaves briefly with a pinch of potash to fix the color, then blend or mash with a broom-whisk (ijabe) and a touch of crayfish until it draws into a slick green soup.",
    "Pour the brown gbegiri and the green ewedu side by side in the bowl, and spoon a little peppery obe ata over the seam — the classic three-color plate.",
    "Make eba: pour garri into just-boiled water in a steady stream, then turn it hard with a wooden spoon into a smooth, stretchy dough.",
    "Pull a piece of eba, dent it with your thumb, and use it to scoop up both soups at once.",
  ],
  modernMove:
    "Blending the gbegiri properly smooth and fixing the ewedu's green with a brief, hot blanch turns two humble pots into a striking two-color soup — restaurant plating from the cheapest beans and leaves.",
  notes:
    "The Ibadan way is gbegiri + ewedu + a little stew together — the beans bring body and protein, the jute leaves bring the slippery draw, the stew brings the pepper.",
  zeroWasteHero: true,
  tags: ["beans", "jute-leaf", "draw-soup", "eba", "palm-oil", "yoruba"],
  sources: [
    {
      title: "My Active Kitchen (Ajoke) — Gbegiri (Abula) Soup",
      url: "https://www.myactivekitchen.com/gbegiri-abula/",
      note: "Blending peeled beans into a smooth gbegiri, served abula-style with ewedu and stew.",
    },
    {
      title: "My Active Kitchen (Ajoke) — Ewedu Soup",
      url: "https://www.myactivekitchen.com/ewedu-soup/",
      note: "Brief hot blanch and blend of jute leaves for a bright-green, slippery draw.",
    },
  ],
};
