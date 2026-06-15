import type { Recipe } from "../types";

export const barszczPl: Recipe = {
  slug: "barszcz-pl",
  title: "Barszcz Czerwony",
  cuisine: "polish",
  blurb:
    "Beets steeped with soup vegetables, dried mushrooms, garlic, and allspice, then sharpened with soured beet juice into a clear ruby broth — tangy, earthy, and almost wine-dark — sipped from a mug or poured over a boiled potato, or over little mushroom uszka at Christmas.",
  servings: 6,
  perServing: { calories: 380, protein: 10 },
  estCostPerServing: 0.9,
  roles: ["dinner"],
  ingredients: [
    { item: "beets, peeled and sliced", qty: "1 1/2 lb", cost: 1.2 },
    { item: "carrot, parsley root, and celeriac (włoszczyzna)", qty: "1 each", cost: 0.5 },
    { item: "onion, halved", qty: "1", cost: 0.3 },
    { item: "dried wild mushrooms", qty: "1/2 oz", cost: 0.8 },
    { item: "garlic", qty: "3 cloves", cost: 0.15, spansWeeks: true },
    { item: "soured beet juice or zakwas (or 2 tbsp vinegar + lemon)", qty: "1 cup", cost: 0.4 },
    { item: "bay leaf, allspice, and a clove", qty: "2 + 4 + 1", cost: 0.1, spansWeeks: true },
    { item: "potatoes (to serve)", qty: "4 small", cost: 0.6 },
    { item: "sugar", qty: "1 tsp", cost: 0.05, spansWeeks: true },
    { item: "salt and black pepper", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Soak the dried mushrooms in a cup of warm water for 30 minutes; keep the soaking liquid.",
    "Put the sliced beets, carrot, parsley root, celeriac, onion, garlic, bay, allspice, and clove in a pot with about 7 cups water and the mushroom liquor. Simmer gently, uncovered, for an hour until the broth runs deep red — keep it below a hard boil to hold the color.",
    "Strain out all the solids; you want a clear, jewel-bright broth.",
    "Return to the pot and stir in the soured beet juice off the boil. Tune with sugar, salt, and pepper until it snaps sweet-sour-earthy and the color sets ruby.",
    "Serve clear over a hot boiled potato, or with mushroom uszka dumplings, or simply in a mug to drink.",
  ],
  modernMove:
    "Acid sets the color: beet pigment browns when boiled hard, so simmer gently and add the soured juice (zakwas) at the very end off the heat — that late acid fixes the ruby and gives the clean tang that separates barszcz from a muddy beet stew.",
  notes:
    "Always vegetarian and clear in its classic form. The Christmas Eve serve is over uszka — tiny dumplings stuffed with the soaked mushrooms, so the soaking step feeds itself.",
  zeroWasteHero: false,
  tags: ["soup", "beet", "polish"],
  sources: [
    {
      title: "Everyday Healthy Recipes — Traditional Barszcz (Polish Borscht)",
      url: "https://www.everydayhealthyrecipes.com/polish-christmas-eve-borscht/",
      note: "Clear beet broth with soup vegetables and dried mushrooms, soured and served with uszka.",
    },
  ],
};
