import type { Recipe } from "../types";

export const hariraMa: Recipe = {
  slug: "harira-ma",
  title: "Harira",
  cuisine: "moroccan",
  blurb:
    "The soup that breaks the Ramadan fast — lentils, chickpeas and tomato simmered to a velvety body by tadouira, a flour slurry whisked smooth and rained in at the end.",
  servings: 6,
  perServing: { calories: 410, protein: 18 },
  estCostPerServing: 1.05,
  roles: ["dinner"],
  ingredients: [
    { item: "brown or green lentils, rinsed", qty: "3/4 cup", cost: 0.6 },
    { item: "dried chickpeas, soaked overnight (or 1 can)", qty: "3/4 cup", cost: 0.5 },
    { item: "ripe tomatoes, grated (or canned crushed)", qty: "1 lb", cost: 1.0 },
    { item: "tomato paste", qty: "2 tbsp", cost: 0.3, spansWeeks: true },
    { item: "onion, finely chopped", qty: "1", cost: 0.3 },
    { item: "celery stalks with leaves, chopped", qty: "2", cost: 0.4 },
    { item: "cilantro and parsley, finely chopped", qty: "1 large bunch", cost: 0.6 },
    { item: "plain flour (for the tadouira)", qty: "1/3 cup", cost: 0.1, spansWeeks: true },
    { item: "fine vermicelli or broken angel hair", qty: "1/3 cup", cost: 0.25 },
    {
      item: "ginger, turmeric, black pepper, cinnamon, smen or oil",
      qty: "to taste",
      cost: 0.4,
      spansWeeks: true,
    },
    { item: "khobz, to serve", qty: "to serve", cost: 0.7 },
  ],
  method: [
    "Sweat the onion, celery, and most of the herbs in smen or oil until soft, then bloom the ginger, turmeric, pepper, and a pinch of cinnamon. Stir in the tomato paste and grated tomato and let it cook down to a thick, jammy base.",
    "Add the soaked chickpeas and water to cover generously; simmer 1 hour until the chickpeas are nearly tender. Add the lentils and more water and cook another 25 minutes until both legumes are soft.",
    "Whisk the flour into about 1 1/2 cups cold water until perfectly lump-free — this is the tadouira. Pour it into the simmering pot in a slow thread, stirring constantly so the soup thickens to silk without clumping.",
    "Drop in the vermicelli and simmer 8 more minutes, stirring so it doesn't stick, until the noodles are tender and the soup coats the spoon. Finish with the reserved herbs.",
    "Serve very hot with khobz, a wedge of lemon, and dates alongside, the way it's eaten at iftar.",
  ],
  modernMove:
    "The tadouira is the whole trick: a flour-and-water slurry rained in at the end gives harira its signature silky body (harir means silk) while taming the tomato's acidity — no cream, no fat, just starch worked properly.",
  notes:
    "Year-round comfort food but inseparable from Ramadan, where a fast is broken on harira, dates, and chebakia. Skip the meat entirely and the legumes still carry it; a can of chickpeas makes a weeknight version.",
  zeroWasteHero: false,
  tags: ["soup", "moroccan", "lentils", "chickpeas", "legumes", "ramadan"],
  sources: [
    {
      title: "Taste of Maroc — Harira Recipe",
      url: "https://tasteofmaroc.com/moroccan-harira-soup-recipe/",
      note: "Documents the broth plus tadouira (flour-water thickener) method and the Ramadan context.",
    },
  ],
};
