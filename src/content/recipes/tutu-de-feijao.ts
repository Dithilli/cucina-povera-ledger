import type { Recipe } from "../types";

export const tutuDeFeijao: Recipe = {
  slug: "tutu-de-feijao",
  title: "Tutu de Feijão",
  cuisine: "brazilian",
  blurb:
    "Minas-style mashed beans, where the dark cooking liquor at the bottom of the pot is thickened with cassava flour into a creamy, garlicky purée — a thrift dish born of making the last of the broth feed everyone.",
  servings: 2,
  perServing: { calories: 560, protein: 22 },
  estCostPerServing: 1.1,
  roles: ["dinner"],
  ingredients: [
    { item: "cooked black or carioca beans with their broth", qty: "2 cups", cost: 0.75 },
    { item: "cassava flour (farinha de mandioca)", qty: "1/2 cup", cost: 0.3 },
    { item: "onion, chopped", qty: "1/2", cost: 0.15 },
    { item: "garlic cloves, minced", qty: "4", cost: 0.12, spansWeeks: true },
    { item: "smoked bacon, diced (optional)", qty: "1 1/2 oz", cost: 0.35 },
    { item: "oil", qty: "2 tbsp", cost: 0.1, spansWeeks: true },
    { item: "cooked white rice, to serve", qty: "1 1/2 cups", cost: 0.25 },
    { item: "salt and pepper", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Blend or mash about half the beans with their broth into a coarse purée; keep the rest whole for texture.",
    "Crisp the diced bacon in a saucepan, then soften the onion and garlic in the rendered fat until golden and fragrant.",
    "Pour in both the puréed and whole beans, season, and bring to a gentle simmer.",
    "Sprinkle in the cassava flour a few tablespoons at a time, whisking it in fully before adding more, until the mixture pulls together into a soft, spoonable purée.",
    "Simmer a few minutes more, loosening with a splash of water if it stiffens, and serve over white rice.",
  ],
  modernMove:
    "Purée only half the beans before thickening — keeping the rest whole gives the tutu a creamy body shot through with intact beans instead of an even paste.",
  notes:
    "The name traces to enslaved cooks thickening the leftover bean liquor with farinha after the household had eaten; in Minas it's plated with rice, collards, and torresmo.",
  zeroWasteHero: true,
  tags: ["beans", "cassava", "minas", "brazilian"],
  sources: [
    {
      title: "Olivia's Cuisine — Tutu de Feijão (Brazilian Refried Beans)",
      url: "https://www.oliviascuisine.com/tutu-de-feijao/",
      note: "thickening bean broth with cassava flour added gradually, and the Minas serving with rice and collards",
    },
  ],
};
