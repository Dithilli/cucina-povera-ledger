import type { Recipe } from "../types";

export const oyakodon: Recipe = {
  slug: "oyakodon",
  title: "Oyakodon",
  cuisine: "japanese",
  blurb:
    "Chicken and egg simmered together in sweet dashi-soy and slid, barely set, over hot rice — \"parent-and-child\" donburi that turns half a thigh and two eggs into a full dinner.",
  servings: 2,
  perServing: { calories: 620, protein: 34 },
  estCostPerServing: 1.45,
  roles: ["dinner"],
  ingredients: [
    {
      item: "boneless chicken thigh, in bite-size pieces",
      qty: "6 oz",
      cost: 1.4,
    },
    { item: "onion, thinly sliced", qty: "1/2 large", cost: 0.25 },
    { item: "eggs, beaten just to break them up", qty: "3", cost: 0.75 },
    { item: "dashi (or anchovy-kelp stock)", qty: "3/4 cup", cost: 0.3, spansWeeks: true },
    { item: "soy sauce", qty: "2 tbsp", cost: 0.2, spansWeeks: true },
    { item: "mirin", qty: "2 tbsp", cost: 0.25, spansWeeks: true },
    { item: "sugar", qty: "1 tsp", cost: 0.02, spansWeeks: true },
    { item: "scallions, sliced thin", qty: "2", cost: 0.2 },
    { item: "shichimi togarashi, to finish (optional)", qty: "to taste", spansWeeks: true },
    { item: "steamed short-grain rice, to serve", qty: "for 2", cost: 0.4 },
  ],
  method: [
    "Make the simmering broth right in a small skillet: combine dashi, soy, mirin, and sugar and bring to a gentle boil. Slide in the onion and let it soften and turn translucent in the seasoned liquid — this is where the sweetness builds.",
    "Add the chicken in a single layer and simmer 4 to 5 minutes, just until cooked through. Keep the heat moderate so the broth reduces a little but still pools around the meat.",
    "Beat the eggs only enough to streak the whites and yolks — do not whip them smooth. Pour two-thirds over the chicken in a spiral, cover, and cook 30 seconds.",
    "Drizzle in the last third of the egg, cover again, and pull off the heat while the top is still glossy and barely set — carryover heat finishes it. The egg should be custardy, never dry.",
    "Tip the whole panful, broth and all, over a bowl of hot rice so the rice drinks the sauce. Shower with scallions and a pinch of shichimi.",
  ],
  modernMove:
    "Adding the beaten egg in two pours and pulling the pan while it's still loose gives the signature half-set, silky donburi egg — the thing that makes oyakodon feel rich off almost no fat.",
  notes:
    "Cook one portion at a time in a small pan if you can; the egg sets far better in a single shallow layer than crowded into a big skillet.",
  tags: ["dinner", "chicken", "egg", "donburi", "rice-bowl", "dashi"],
  sources: [
    {
      title: "Namiko Chen — Just One Cookbook, Oyakodon (Chicken and Egg Bowl)",
      url: "https://www.justonecookbook.com/oyakodon/",
      note: "Chicken and onion in dashi-soy-mirin, with the two-pour, pull-early half-set egg over rice.",
    },
  ],
};
