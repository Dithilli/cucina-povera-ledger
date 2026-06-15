import type { Recipe } from "../types";

export const nasuDengaku: Recipe = {
  slug: "nasu-dengaku",
  title: "Nasu Dengaku (Miso-Glazed Eggplant)",
  cuisine: "japanese",
  blurb:
    "Eggplant halved, scored, and cooked until the flesh collapses to silk, then lacquered with a sweet-savory miso glaze and run under the heat until it caramelizes and blisters. It is the proof that miso, sugar, and a cheap summer vegetable can make a dinner that eats like a luxury — meaty, glossy, and deeply savory over rice, with no meat anywhere in it.",
  servings: 4,
  perServing: { calories: 480, protein: 12 },
  estCostPerServing: 1.1,
  roles: ["dinner"],
  ingredients: [
    { item: "Japanese or globe eggplant", qty: "2 medium (or 4 small)", cost: 2.0 },
    { item: "neutral oil", qty: "3 tbsp", cost: 0.3, spansWeeks: true },
    { item: "miso (red or a red-white blend)", qty: "4 tbsp", cost: 0.8, spansWeeks: true },
    { item: "mirin", qty: "2 tbsp", cost: 0.3, spansWeeks: true },
    { item: "sake (or water)", qty: "1 tbsp", cost: 0.2, spansWeeks: true },
    { item: "sugar", qty: "1 tbsp", cost: 0.1, spansWeeks: true },
    { item: "toasted sesame seeds, to finish", qty: "1 tsp", cost: 0.1, spansWeeks: true },
    { item: "steamed rice, to serve", qty: "for the table" },
  ],
  method: [
    "Halve the eggplants lengthwise. Score the cut faces in a deep crosshatch, cutting almost to the skin but not through it — this lets the heat and glaze penetrate and the flesh cook to a creamy softness.",
    "Make the dengaku miso: whisk the miso, mirin, sake, and sugar in a small pan and warm gently, stirring, for a minute or two until it loosens into a smooth, glossy, spreadable glaze. Set aside.",
    "Heat the oil in a skillet over medium. Lay the eggplant cut-side down and cook 4 to 5 minutes until deeply browned, then flip, add a splash of water, cover, and steam 6 to 8 minutes until a knife slides through the flesh with no resistance. Eggplant must be fully soft — undercooked, it's spongy and bitter.",
    "Set the eggplant cut-side up. Spread the miso glaze thickly over each scored face.",
    "Run the eggplants under a hot broiler (or torch them) for 2 to 3 minutes, watching closely, until the glaze bubbles, darkens, and catches at the edges. Scatter with sesame seeds and serve hot over rice.",
  ],
  modernMove:
    "Scoring the flesh is the whole secret to texture: the crosshatch opens channels so the eggplant steams to silk and the glaze sinks in rather than sitting on a slick skin. The final blast of heat is what turns sweet miso into a blistered, caramelized lacquer.",
  notes:
    "Stretch the dengaku miso — it keeps for weeks refrigerated and glazes grilled tofu, daikon, or konnyaku just as well, so a single batch seeds several dinners. Salting and resting the eggplant first draws out bitterness and helps it drink less oil, a thrifty move when oil is dear.",
  zeroWasteHero: false,
  tags: ["dinner", "eggplant", "miso", "vegetarian", "glaze", "washoku"],
  sources: [
    {
      title: "Namiko Chen — Just One Cookbook, Miso Dengaku",
      url: "https://www.justonecookbook.com/miso-dengaku/",
      note: "The sweet dengaku miso glaze (miso, mirin, sake, sugar) and broiling it onto eggplant.",
    },
    {
      title: "Namiko Chen — Just One Cookbook, Miso Glazed Eggplant (Nasu Dengaku)",
      url: "https://www.justonecookbook.com/miso-glazed-eggplant/",
      note: "Scoring, cooking the eggplant to silk, then broiling the glaze until it caramelizes.",
    },
  ],
};
