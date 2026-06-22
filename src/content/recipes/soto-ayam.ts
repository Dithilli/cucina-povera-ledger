import type { Recipe } from "../types";

export const sotoAyam: Recipe = {
  slug: "soto-ayam",
  title: "Soto Ayam",
  cuisine: "indonesian",
  blurb:
    "Turmeric-gold chicken soup over rice and vermicelli — one small bird and its bones stretched to feed the table, the broth doing the heavy lifting.",
  servings: 6,
  perServing: { calories: 520, protein: 32 },
  estCostPerServing: 1.23,
  roles: ["dinner", "lunch"],
  ingredients: [
    {
      item: "whole small chicken (or bone-in thighs + a back/carcass)",
      qty: "1 (~2.5 lb)",
      cost: 4.5,
    },
    { item: "shallots", qty: "5", cost: 0.5 },
    { item: "garlic cloves", qty: "5", cost: 0.25, spansWeeks: true },
    { item: "fresh turmeric (or 1 tsp ground)", qty: "1 thumb", cost: 0.3, spansWeeks: true },
    { item: "ginger, smashed", qty: "1 thumb", cost: 0.2, spansWeeks: true },
    { item: "lemongrass stalks, bruised", qty: "2", cost: 0.3, spansWeeks: true },
    { item: "candlenuts or macadamia (optional)", qty: "3", cost: 0.3, spansWeeks: true },
    { item: "kaffir lime or bay (salam) leaves", qty: "3", cost: 0.15, spansWeeks: true },
    { item: "rice vermicelli (bihun)", qty: "5 oz", cost: 0.7 },
    { item: "cooked white rice, to serve", qty: "for the table", cost: 0.6 },
    { item: "eggs, hard-boiled and halved", qty: "3", cost: 0.6 },
    { item: "bean sprouts", qty: "2 cups", cost: 0.5 },
    { item: "neutral oil", qty: "2 tbsp", cost: 0.2, spansWeeks: true },
    {
      item: "to finish: fried shallots, lime, celery leaves, sambal",
      qty: "to finish",
      cost: 0.4,
      spansWeeks: true,
    },
    { item: "salt, white pepper", qty: "to taste" },
  ],
  method: [
    "Poach the whole chicken (or bones + thighs) in ~3 quarts water with the smashed ginger, one lemongrass, and a salam leaf until tender, skimming the foam. Lift the bird out, pull the meat into shreds, and return every bone to the pot to keep simmering — the carcass is where the second half of the flavor lives.",
    "Pound shallots, garlic, turmeric, and candlenuts to a paste. Fry it in the oil with the remaining lemongrass and lime leaves until deeply fragrant and the raw smell is gone.",
    "Stir the spice paste into the simmering broth and cook 15–20 minutes more so it turns gold and rounded. Season hard with salt and white pepper — soto broth should taste complete on its own.",
    "Soak the vermicelli in hot water until soft. To build each bowl: a little rice and vermicelli, a handful of raw bean sprouts, shredded chicken, half a boiled egg, then ladle the hot broth over to wilt the sprouts. Finish with fried shallots, celery leaf, a squeeze of lime, and sambal.",
  ],
  modernMove:
    "Returning the stripped carcass to the pot after pulling the meat is the stretch: one bird yields both the protein for six bowls and a broth with real backbone, so a cheap chicken eats like a feast.",
  zeroWasteHero: true,
  tags: ["chicken", "soup", "turmeric", "broth", "javanese", "stretch-the-bird"],
  sources: [
    { title: "Anita Jacobson — Daily Cooking Quest", url: "https://dailycookingquest.com/soto-ayam-lamongan.html", note: "turmeric chicken soup with spice paste, vermicelli, and bean sprouts" },
    { title: "Wikipedia — Soto ayam", url: "https://en.wikipedia.org/wiki/Soto_ayam", note: "turmeric chicken soup served over rice and vermicelli" },
  ],
};
