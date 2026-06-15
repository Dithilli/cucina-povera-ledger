import type { Recipe } from "../types";

export const gukbap: Recipe = {
  slug: "gukbap",
  title: "Gukbap (Rice in Soup)",
  cuisine: "korean",
  blurb:
    "Literally 'soup-rice' — a bowl of rice drowned in a long-simmered, warming broth. The original cheap, fast, one-bowl meal of Korean market towns.",
  servings: 4,
  perServing: { calories: 540, protein: 22 },
  estCostPerServing: 1.55,
  roles: ["dinner"],
  ingredients: [
    { item: "short-grain white rice, cooked", qty: "4 cups", cost: 1.0 },
    {
      item: "pork bones or a cheap pork shoulder cut (or beef brisket)",
      qty: "1 lb",
      cost: 3.0,
    },
    {
      item: "soybean sprouts",
      qty: "1/2 lb",
      cost: 0.8,
    },
    {
      item: "scallions, sliced (whites for the pot, greens for the top)",
      qty: "4",
      cost: 0.4,
    },
    {
      item: "garlic, minced",
      qty: "4 cloves",
      cost: 0.2,
      spansWeeks: true,
    },
    {
      item: "saeujeot (salted shrimp) or salt, to season the broth",
      qty: "to taste",
      cost: 0.3,
      spansWeeks: true,
    },
    {
      item: "gochugaru and a little sesame oil, to finish",
      qty: "to taste",
      cost: 0.3,
      spansWeeks: true,
    },
  ],
  method: [
    "Blanch the pork bones or meat in boiling water for a few minutes, then drain and rinse off the scum — this is what gives a clean, milky broth instead of a muddy one.",
    "Cover the rinsed bones with fresh water, add the garlic and scallion whites, and simmer gently for a couple of hours until the broth is rich and the meat (if using) is tender enough to shred.",
    "Shred or slice the meat. In the last few minutes, drop the soybean sprouts into the broth just until they lose their raw edge but keep some crunch.",
    "Season the broth with saeujeot or salt at the very end, tasting as you go — gukbap is meant to be seasoned bowl by bowl.",
    "Put a mound of warm rice in each bowl, ladle over the hot broth, sprouts, and meat, and top with scallion greens, gochugaru, and a few drops of sesame oil. Mix and eat steaming.",
  ],
  modernMove:
    "Blanch and rinse the bones before the real simmer — that one extra step is the whole difference between a cloudy market broth and a clean, deeply savory one you'd serve to guests.",
  notes:
    "Traditionally the rice is served separately ('따로국밥') so it stays firm, or dropped straight in for a softer, faster bowl — both are correct. Any leftover broth becomes tomorrow's base.",
  tags: ["soup", "rice", "broth", "pork", "one-bowl"],
  sources: [
    {
      title: "Wikipedia — Gukbap",
      url: "https://en.wikipedia.org/wiki/Gukbap",
      note: "Background on the soup-rice dish, the ttukbaegi serving, and serving rice in or alongside the broth",
    },
    {
      title: "Maangchi — Soybean sprout soup with rice (Kongnamul-gukbap)",
      url: "https://www.maangchi.com/recipe/kongnamul-gukbap",
      note: "The gukbap format: hot broth with soybean sprouts ladled over rice, seasoned bowl by bowl",
    },
  ],
};
