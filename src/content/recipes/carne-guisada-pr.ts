import type { Recipe } from "../types";

export const carneGuisadaPr: Recipe = {
  slug: "carne-guisada-pr",
  title: "Carne Guisada",
  cuisine: "puerto-rican",
  blurb:
    "Chunks of beef braised low in a sofrito-and-tomato broth with potatoes and briny olives until the meat shreds at a fork — ladled over arroz blanco.",
  servings: 2,
  perServing: { calories: 600, protein: 28 },
  estCostPerServing: 2.0,
  roles: ["dinner"],
  ingredients: [
    { item: "beef chuck or stew meat, cubed", qty: "3/4 lb", cost: 2.6 },
    { item: "potatoes, cubed", qty: "2 medium", cost: 0.5 },
    { item: "sofrito / recaíto", qty: "3 tbsp", cost: 0.4, spansWeeks: true },
    { item: "tomato sauce", qty: "1/4 cup", cost: 0.2, spansWeeks: true },
    { item: "manzanilla olives + brine", qty: "8", cost: 0.25, spansWeeks: true },
    { item: "achiote oil, sazón, adobo, oregano, bay leaf", qty: "1 tbsp + to taste", cost: 0.2, spansWeeks: true },
    { item: "cooked white rice, to serve", qty: "2 cups", cost: 0.3 },
    { item: "salt", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Season the beef with adobo and oregano and brown it hard in achiote oil; set aside.",
    "Sauté the sofrito in the same pot, then stir in tomato sauce, sazón, olives with a splash of brine, and a bay leaf.",
    "Return the beef, cover with water, and simmer gently covered about 1 hour until the meat starts to turn tender.",
    "Add the cubed potatoes and cook another 25–30 minutes, until the potatoes are soft and the broth has thickened.",
    "Taste for salt and serve over white rice.",
  ],
  modernMove:
    "Brown the beef in batches before braising — the fond on the pot bottom dissolves into the sofrito and gives the whole stew its deep color without any added stock.",
  notes: "The potatoes stretch a modest amount of beef into a full pot and thicken the gravy as they soften.",
  tags: ["beef", "guiso", "potato", "dinner", "puerto-rican"],
  sources: [
    {
      title: "Kitchen Gidget — Puerto Rican Carne Guisada (The BEST Beef Stew)",
      url: "https://www.kitchengidget.com/2019/06/04/puerto-rican-carne-guisada/",
      note: "Cubed beef browned and braised with sofrito, tomato sauce, potatoes, and olives.",
    },
  ],
};
