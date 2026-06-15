import type { Recipe } from "../types";

export const kayakuGohan: Recipe = {
  slug: "kayaku-gohan",
  title: "Kayaku Gohan",
  cuisine: "japanese",
  blurb:
    "The Kansai mixed rice — rice simmered with finely cut burdock, carrot, konnyaku, and aburaage in a light dashi, a thriftier, lighter-seasoned cousin of takikomi gohan.",
  servings: 4,
  perServing: { calories: 490, protein: 13 },
  estCostPerServing: 0.9,
  roles: ["dinner"],
  ingredients: [
    { item: "short-grain rice, rinsed and drained", qty: "2 cups", cost: 1.1 },
    { item: "dashi, cooled", qty: "2 cups", cost: 0.4, spansWeeks: true },
    { item: "gobo (burdock root), shaved thin and soaked", qty: "1 small", cost: 0.6 },
    { item: "carrot, fine matchsticks", qty: "1 small", cost: 0.25 },
    { item: "konnyaku, cut in thin slivers", qty: "4 oz", cost: 0.5 },
    { item: "aburaage (fried tofu), rinsed of oil and slivered", qty: "1 sheet", cost: 0.6 },
    { item: "light (usukuchi) soy sauce", qty: "1 1/2 tbsp", cost: 0.15, spansWeeks: true },
    { item: "mirin", qty: "1 tbsp", cost: 0.15, spansWeeks: true },
    { item: "sake", qty: "1 tbsp", cost: 0.15, spansWeeks: true },
    { item: "salt", qty: "1/2 tsp" },
    { item: "mitsuba or scallion to finish", qty: "to finish", cost: 0.15 },
  ],
  method: [
    "Shave the gobo into thin curls straight into cold water as you go — this stops it browning and pulls out the harshness. Drain before using.",
    "Stir the light soy, mirin, sake, and salt into the cooled dashi, then pour over the rinsed rice; the level should sit at the normal cooking line.",
    "Scatter the gobo, carrot, konnyaku, and aburaage over the surface without stirring, and cook as for rice — boil, then lowest heat 12 minutes, then 10 minutes rest off the heat.",
    "Fold gently to distribute, and strew with chopped mitsuba or scallion. Kayaku gohan is meant to taste of the dashi itself, so keep the seasoning restrained.",
  ],
  modernMove:
    "Light usukuchi soy keeps the rice pale and lets the burdock's earthiness and the dashi come forward — Osaka thrift was about stretching a little rice with whatever roots were cheap.",
  tags: ["rice", "burdock", "konnyaku", "dashi", "mixed-rice", "kansai"],
};
