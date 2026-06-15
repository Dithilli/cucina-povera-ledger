import type { Recipe } from "../types";

export const chickenStewStack: Recipe = {
  slug: "chicken-stew-stack",
  title: "Brunswick-Style Chicken Stew",
  cuisine: "appalachian",
  blurb:
    "A thick hill-country stew of pulled chicken, corn, butter beans, and tomato simmered down until a spoon stands in it — the big-kettle dish cooked for a hog-killing, a church supper, or a stack-cake gathering.",
  servings: 6,
  perServing: { calories: 480, protein: 31 },
  estCostPerServing: 1.45,
  roles: ["dinner"],
  ingredients: [
    { item: "bone-in chicken thighs", qty: "2 lb", cost: 4.5 },
    { item: "onion, diced", qty: "1 large", cost: 0.4 },
    { item: "potatoes, diced", qty: "2 medium", cost: 0.5 },
    { item: "canned or fresh tomatoes", qty: "1 can (28 oz)", cost: 1.2 },
    { item: "corn kernels", qty: "2 cups", cost: 0.9 },
    { item: "butter beans (lima)", qty: "1 1/2 cups", cost: 0.7 },
    {
      item: "cider vinegar, sugar, Worcestershire, salt & pepper",
      qty: "to season",
      cost: 0.2,
      spansWeeks: true,
    },
  ],
  method: [
    "Simmer the chicken thighs in a pot of salted water about 40 minutes until tender; lift out, pull the meat, and keep the cooking broth.",
    "Sweat the onion in a little fat, then add the broth, tomatoes, and diced potatoes and simmer until the potatoes start to break down and thicken the pot.",
    "Stir in the corn, butter beans, and pulled chicken; season with cider vinegar, a pinch of sugar, Worcestershire, salt, and plenty of pepper.",
    "Simmer low and slow, stirring often so the bottom doesn't catch, until thick and hearty — an hour at least; it should mound on the spoon, not pour.",
    "Taste for the sweet-and-tangy balance and serve in bowls with cornbread or cathead biscuits.",
  ],
  modernMove:
    "Let the potatoes cook to collapse rather than fishing them out whole — that starch is the only thickener the stew needs, the way it was made before anyone reached for flour.",
  notes: "Historically built from whatever the hunt brought in (squirrel, rabbit); chicken is the everyday stand-in. A pot this size fed a whole gathering.",
  zeroWasteHero: false,
  tags: ["appalachian", "stew", "chicken", "corn", "beans", "gathering"],
  sources: [
    {
      title: "The Seasoned Mom — Virginia Brunswick Stew",
      url: "https://www.theseasonedmom.com/virginia-brunswick-stew/",
      note: "pulled chicken, corn, butter beans, tomato; sweet-tangy vinegar finish, simmered thick",
    },
  ],
};
