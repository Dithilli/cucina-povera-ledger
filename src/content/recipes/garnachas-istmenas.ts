import type { Recipe } from "../types";

export const garnachasIstmenas: Recipe = {
  slug: "garnachas-istmenas",
  title: "Garnachas Istmeñas",
  cuisine: "oaxacan",
  blurb:
    "Thick little nixtamal rounds from the steamy Isthmus of Tehuantepec, fried golden, then piled with shredded beef, a vinegary salsa, and a dusting of dry queso — the antojito Zapotec markets eat by the dozen.",
  servings: 4,
  perServing: { calories: 520, protein: 22 },
  estCostPerServing: 1.4,
  roles: ["dinner"],
  ingredients: [
    { item: "fresh masa (or masa harina)", qty: "2 cups", cost: 0.7 },
    { item: "beef chambarete or stew beef, simmered & shredded", qty: "10 oz", cost: 1.8 },
    { item: "ripe tomatoes", qty: "3 medium", cost: 0.6 },
    { item: "white onion, garlic", qty: "1/2 onion + 2 cloves", cost: 0.2 },
    { item: "white vinegar", qty: "2 tbsp", cost: 0.05, spansWeeks: true },
    { item: "queso seco / cotija, finely grated", qty: "1/2 cup", cost: 0.8, spansWeeks: true },
    { item: "lard or oil for shallow-frying", qty: "1/4 cup", cost: 0.3, spansWeeks: true },
    { item: "salt", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Simmer the beef with onion, garlic and salt until fork-tender (about an hour), then cool and shred finely; save the broth.",
    "Toast the tomatoes, onion and garlic on a dry comal until blistered, blend to a loose salsa, and sharpen it with the vinegar and salt.",
    "Press the masa into small thick rounds (palm-sized) and griddle briefly, then shallow-fry in hot lard until the edges go crisp and golden but the center stays tender.",
    "Top each garnacha with shredded beef, a spoon of the vinegary salsa, and a heavy snow of grated queso seco. Eat hot, standing up if you can.",
  ],
  modernMove:
    "Keep the salsa loose and acidic rather than thick — in the Isthmus heat the vinegar bite is the whole point, cutting the fried masa and rich beef the way a pickle cuts a sandwich.",
  notes:
    "Yesterday's simmered beef and its broth carry straight into this dish; the broth can also moisten frijoles or a soup, so nothing from the pot is lost.",
  zeroWasteHero: false,
  tags: ["oaxacan", "antojito", "masa", "beef", "istmo", "dinner"],
  sources: [
    {
      title: "The Half Jalapeño — Garnachas Istmeñas Recipe",
      url: "https://www.thehalfjalapeno.com/garnachas-istmenas-recipe/",
      note: "fried thick masa rounds with shredded beef, vinegary salsa and dry cheese from the Isthmus",
    },
  ],
};
