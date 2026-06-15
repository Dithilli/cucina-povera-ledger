import type { Recipe } from "../types";

export const barmbrack: Recipe = {
  slug: "barmbrack",
  title: "Barmbrack",
  cuisine: "irish",
  blurb:
    "The speckled Halloween loaf — dried fruit steeped overnight in strong black tea, then stirred into a spiced batter so the bake comes out moist, dark and fruit-studded, sliced thick and spread with cold butter.",
  servings: 8,
  perServing: { calories: 470, protein: 8 },
  estCostPerServing: 0.7,
  roles: ["dinner"],
  ingredients: [
    { item: "mixed dried fruit (sultanas, raisins)", qty: "2 cups", cost: 1.6 },
    { item: "strong black tea, cold", qty: "1 1/4 cups", cost: 0.1, spansWeeks: true },
    { item: "self-raising flour", qty: "2 1/2 cups", cost: 0.5 },
    { item: "soft brown sugar", qty: "3/4 cup", cost: 0.3 },
    { item: "egg", qty: "1", cost: 0.2 },
    { item: "mixed spice (cinnamon, clove, nutmeg)", qty: "1 1/2 tsp", cost: 0.1, spansWeeks: true },
    { item: "marmalade", qty: "1 tbsp", cost: 0.1 },
    { item: "butter, to serve", qty: "to taste", cost: 0.2, spansWeeks: true },
  ],
  method: [
    "The night before, put the dried fruit in a bowl and pour over the cold strong tea. Cover and leave to steep overnight until the fruit is plump and the tea mostly drunk up.",
    "Heat the oven to 170°C (340°F) and line a loaf tin. Beat the egg into the soaked fruit with the brown sugar and marmalade.",
    "Sift in the flour and mixed spice and fold together into a thick, wet batter — don't overwork it.",
    "Scrape into the tin and bake 80–90 minutes, until a skewer comes out clean and the top is dark and domed. If it browns too fast, tent with foil.",
    "Cool in the tin, then turn out. Slice thick and spread generously with cold salted butter; best with a pot of tea.",
  ],
  modernMove:
    "The overnight tea soak does double duty — it plumps the fruit so the loaf stays moist for days, and it carries tannin and malt into the crumb, which is why barmbrack tastes deeper than a plain fruit bread.",
  notes:
    "Traditionally baked for Halloween with charms hidden inside to tell fortunes — a ring for marriage, a coin for riches, a pea for staying single. 'Báirín breac' means speckled loaf.",
  zeroWasteHero: false,
  tags: ["irish", "barmbrack", "bread", "fruit", "tea", "dinner"],
  sources: [
    {
      title: "Lana's Cooking — Traditional Irish Barmbrack",
      url: "https://www.lanascooking.com/irish-barmbrack/",
      note: "overnight tea-soaking of the fruit and the Halloween fortune-telling tradition",
    },
  ],
};
