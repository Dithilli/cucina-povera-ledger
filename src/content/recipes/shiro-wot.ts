import type { Recipe } from "../types";

export const shiroWot: Recipe = {
  slug: "shiro-wot",
  title: "Shiro Wot (Tegabino)",
  cuisine: "ethiopian",
  blurb:
    "Velvety spiced chickpea-flour stew — the weeknight workhorse of the whole cuisine, ready in fifteen minutes from a bag of flour. So humble it was historically the only wot many families ate outside festivals.",
  servings: 4,
  perServing: { calories: 280, protein: 13 },
  estCostPerServing: 0.5,
  roles: ["dinner", "lunch"],
  ingredients: [
    { item: "shiro powder (ground roasted chickpea/broad-bean flour, spiced)", qty: "1 cup", cost: 1.2 },
    { item: "white or red onion, very finely chopped", qty: "1", cost: 0.4 },
    { item: "garlic, minced", qty: "3 cloves", cost: 0.2, spansWeeks: true },
    { item: "berbere (if using plain shiro flour)", qty: "1 tbsp", cost: 0.25, spansWeeks: true },
    { item: "niter kibbeh or oil", qty: "2 tbsp", cost: 0.3, spansWeeks: true },
    { item: "tomato, chopped, optional", qty: "1", cost: 0.3 },
    { item: "salt", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Sweat the onion in the niter kibbeh over medium-low heat until soft and lightly golden, 8–10 minutes. Add the garlic (and tomato, if using) and cook a couple more minutes.",
    "If your shiro flour isn't pre-spiced, bloom the berbere in the fat now for a minute.",
    "Whisking constantly, rain the shiro powder into about 2 cups of hot water in a bowl to make a lump-free slurry, then pour it into the pot (whisking off-heat prevents clumps).",
    "Simmer gently, stirring, 10–15 minutes, until it thickens to a smooth, velvety, gravy-like wot — 'tegabino' is the thicker, claypot version. Loosen with hot water to taste. Salt and serve bubbling over injera.",
  ],
  modernMove:
    "The clump-killer is to slurry the flour into cool or warm water first and whisk hard, then add to the pot — never dump dry flour into hot liquid. Finish the thicker tegabino style sizzling in a small clay pot so it keeps cooking at the table.",
  notes:
    "Shiro is the cheapest, fastest protein on the arc — pantry flour plus an onion. Day-old shiro stiffens overnight and becomes shiro fitfit, torn into injera the next morning.",
  tags: ["shiro", "chickpea", "wot", "dinner", "weeknight"],
};
