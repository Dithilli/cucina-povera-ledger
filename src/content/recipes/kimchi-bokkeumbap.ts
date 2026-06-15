import type { Recipe } from "../types";

export const kimchiBokkeumbap: Recipe = {
  slug: "kimchi-bokkeumbap",
  title: "Kimchi Bokkeumbap",
  cuisine: "korean",
  blurb:
    "Kimchi fried rice — day-old rice and sour, well-aged kimchi fried hard in a little oil until the edges crisp, the single most loved way to turn two leftovers into one fast, satisfying dinner.",
  servings: 4,
  perServing: { calories: 560, protein: 16 },
  estCostPerServing: 0.95,
  roles: ["dinner"],
  ingredients: [
    {
      item: "cold day-old steamed short-grain rice",
      qty: "4 cups",
      cost: 0.9,
    },
    {
      item: "well-fermented (sour) kimchi, roughly chopped, plus its juice",
      qty: "1 1/2 cups",
      cost: 1.2,
      spansWeeks: true,
    },
    {
      item: "gochujang or a spoon of gochugaru, to taste",
      qty: "1 tbsp",
      cost: 0.2,
      spansWeeks: true,
    },
    {
      item: "scallions, sliced",
      qty: "2",
      cost: 0.2,
      spansWeeks: true,
    },
    {
      item: "garlic, minced",
      qty: "2 cloves",
      cost: 0.1,
      spansWeeks: true,
    },
    { item: "eggs (one per bowl, fried)", qty: "4", cost: 1.5 },
    {
      item: "neutral oil + a drizzle of toasted sesame oil",
      qty: "2 tbsp",
      cost: 0.25,
      spansWeeks: true,
    },
    {
      item: "toasted seaweed (gim) and sesame seeds, to finish",
      qty: "to taste",
      cost: 0.3,
      spansWeeks: true,
    },
  ],
  method: [
    "Warm the neutral oil over medium-high heat and fry the garlic and the white parts of the scallion for 30 seconds, then add the chopped kimchi and cook it hard for 3-4 minutes until it loses its raw edge and starts to caramelize — this frying is what deepens sour kimchi into something sweet and savory.",
    "Stir in the gochujang (or gochugaru) and a splash of the kimchi juice; let it sizzle and reduce for a minute.",
    "Add the cold rice and press it into the pan, breaking up clumps. Now leave it alone in stretches, only turning every minute or so, so the rice can catch and crisp against the hot metal — cold day-old rice is essential here, since fresh rice steams and turns to mush.",
    "Fold through the green scallion tops and a few drops of sesame oil. Fry an egg per person, sunny-side up with crisp lacy edges.",
    "Mound the rice in bowls, top each with an egg, and scatter with crumbled toasted seaweed and sesame seeds. Break the yolk into the hot rice at the table.",
  ],
  modernMove:
    "Old, too-sour kimchi is the whole secret — frying it hard transforms its sharpness into deep umami, so the fried rice is actually better the more past-its-prime the kimchi is. Cold rice that's had a night to dry out fries up separate and crisp instead of sticky.",
  notes:
    "The canonical zero-waste dinner: it exists precisely to use up the two things every Korean fridge always has too much of — leftover rice and kimchi that's turned sour. Any odd scrap of vegetable or meat can ride along.",
  zeroWasteHero: true,
  tags: ["rice", "kimchi", "bokkeum", "fried-rice", "leftovers", "make-ahead"],
};
