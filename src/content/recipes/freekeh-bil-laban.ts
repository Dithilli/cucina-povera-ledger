import type { Recipe } from "../types";

export const freekehBilLaban: Recipe = {
  slug: "freekeh-bil-laban",
  title: "Freekeh bil Laban",
  cuisine: "levantine",
  blurb:
    "Smoky toasted freekeh spooned warm under a cool flood of garlicky yogurt, toasted almonds, and a slick of good oil. The earthy-sour pairing the Levant loves — the grain's fire and the laban's tang against each other, finished with crunch.",
  servings: 4,
  perServing: { calories: 540, protein: 20 },
  estCostPerServing: 0.85,
  roles: ["dinner", "lunch"],
  ingredients: [
    { item: "cracked freekeh, rinsed", qty: "1 1/2 cups", cost: 1.6 },
    { item: "olive oil", qty: "3 tbsp", cost: 0.3, spansWeeks: true },
    { item: "onion, finely diced", qty: "1", cost: 0.3 },
    { item: "ground allspice", qty: "1/2 tsp", cost: 0.1, spansWeeks: true },
    { item: "plain whole-milk yogurt (laban)", qty: "2 cups", cost: 1.4, spansWeeks: true },
    { item: "garlic clove, crushed to a paste with salt", qty: "1", cost: 0.05, spansWeeks: true },
    { item: "slivered almonds (or pine nuts), to toast", qty: "1/3 cup", cost: 0.8 },
    { item: "dried mint and lemon, to finish", qty: "to finish", cost: 0.2, spansWeeks: true },
    { item: "salt and black pepper", qty: "to taste" },
  ],
  method: [
    "Soften the onion in 2 tbsp of the oil until golden, stir in the allspice, then add the rinsed freekeh and toast it in the oil a minute so the smoke wakes up.",
    "Pour in about 3 cups water with salt, bring to a boil, cover, and simmer low until the grain is tender but still chewy, 20–25 minutes. Rest covered 10 minutes, then fluff.",
    "Whisk the yogurt smooth with the garlic paste and a pinch of salt — keep it cool and raw; this is laban, not a cooked sauce, so the tang stays bright against the warm grain.",
    "Toast the almonds in the last of the oil until golden and fragrant, watching closely so they don't catch.",
    "Spoon the warm freekeh into bowls, flood with the garlicky yogurt, scatter the toasted almonds and a slick of raw oil over the top, and finish with crushed dried mint, black pepper, and a squeeze of lemon.",
  ],
  modernMove:
    "Keep the laban raw and cold against the hot grain rather than cooking it in — the contrast of smoky-warm freekeh and sharp cool yogurt is the whole point, and cooked-in yogurt would only flatten it. Toasting the nuts in the spiced oil ties the crunch back to the grain.",
  notes:
    "A different prep from freekeh bil hummus — here the protein comes from the laban and nuts rather than chickpeas, and it eats lighter and sharper. Strain the yogurt an hour for a thicker, labneh-like flood if you have time.",
  zeroWasteHero: false,
  tags: ["freekeh", "yogurt", "laban", "smoky", "grains", "vegetarian"],
  sources: [
    {
      title: "The Matbakh — Lebanese Freekeh",
      url: "https://thematbakh.com/freekeh-recipe-with-chicken-family-recipe/",
      note: "Freekeh served with yogurt (khyar b laban) and toasted nuts on top.",
    },
    {
      title: "Razan Masri — Freekeh",
      url: "https://blog.razanmasri.com/food/levant-dishes/freekeh/",
      note: "The earthy-sour pairing of smoky freekeh with laban (yogurt).",
    },
  ],
};
