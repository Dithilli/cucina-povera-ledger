import type { Recipe } from "../types";

export const enfrijoladas: Recipe = {
  slug: "enfrijoladas",
  title: "Enfrijoladas",
  cuisine: "mexican",
  blurb:
    "Tortillas dipped in a velvety, blended bean broth perfumed with chile and onion, folded into quarters, and topped with queso fresco, crema, and a fried egg — pure frijol economy, breakfast or dinner.",
  servings: 4,
  perServing: { calories: 410, protein: 19 },
  estCostPerServing: 0.6,
  roles: ["dinner", "lunch", "breakfast"],
  ingredients: [
    { item: "cooked beans (black or pinto), with broth", qty: "2 cups", cost: 0.5 },
    { item: "corn tortillas (day-old are ideal)", qty: "12", cost: 0.8 },
    { item: "chipotle or árbol chile", qty: "1–2", cost: 0.2 },
    { item: "onion, garlic", qty: "1/2 onion + 1 clove", cost: 0.3, spansWeeks: true },
    { item: "queso fresco, crumbled", qty: "1/2 cup", cost: 1.0, spansWeeks: true },
    { item: "Mexican crema", qty: "1/2 cup", cost: 0.6, spansWeeks: true },
    { item: "eggs (optional, to top)", qty: "4", cost: 0.8 },
    { item: "oil, salt, cumin", qty: "as needed", spansWeeks: true },
  ],
  method: [
    "Blend the cooked beans with their broth, chipotle, onion, garlic, salt, and a pinch of cumin until completely smooth — add broth until it pours like a creamy soup.",
    "Heat a little oil in a skillet and pour in the bean purée; simmer gently until it thickens to a sauce that coats a tortilla.",
    "Warm each tortilla until pliable, dip it fully in the hot bean sauce, and fold into quarters; lay onto plates and spoon more sauce over.",
    "Top with crumbled queso fresco, a drizzle of crema, raw onion, and — to make it dinner — a fried egg on each plate.",
  ],
  modernMove:
    "Blend the beans long past what looks done, then push them through the simmer until the sauce visibly thickens and gleams — a truly smooth, glossy frijol sauce is what separates real enfrijoladas from tortillas in thin bean water.",
  notes:
    "The original leftovers dinner: yesterday's pot of beans (and slightly stale tortillas) become tonight's meal. The egg adds the protein; the beans were nearly free.",
  zeroWasteHero: true,
  tags: ["antojito", "beans", "zero-waste", "egg", "dinner"],
  sources: [
    {
      title: "Mely Martínez — Mexico in My Kitchen (Enfrijoladas)",
      url: "https://www.mexicoinmykitchen.com/enfrijoladas-recipe-corn-tortillas/",
      note: "blending beans to a smooth pourable sauce; dip-and-fold tortilla method",
    },
    {
      title: "Maricruz Avalos — Authentic Enfrijoladas Mexicanas",
      url: "https://www.maricruzavalos.com/enfrijoladas-mexicanas/",
      note: "bean-broth-chipotle blend and queso-fresco-and-onion finish",
    },
    {
      title: "Mamá Maggie's Kitchen — Enfrijoladas",
      url: "https://inmamamaggieskitchen.com/enfrijoladas-de-queso/",
      note: "thickening the sauce and folding tortillas into quarters",
    },
  ],
};
