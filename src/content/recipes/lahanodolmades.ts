import type { Recipe } from "../types";

export const lahanodolmades: Recipe = {
  slug: "lahanodolmades",
  title: "Lahanodolmades (Cabbage Rolls)",
  cuisine: "greek",
  blurb:
    "Tender cabbage leaves wrapped around rice and a little mince, simmered soft and finished in a silky egg-lemon avgolemono — the winter answer to vine leaves.",
  servings: 4,
  perServing: { calories: 600, protein: 24 },
  estCostPerServing: 1.7,
  roles: ["dinner"],
  ingredients: [
    { item: "green cabbage", qty: "1 large head", cost: 1.2 },
    { item: "medium-grain rice", qty: "3/4 cup", cost: 0.45 },
    { item: "ground beef or pork", qty: "1/2 lb", cost: 2.0 },
    { item: "onion, finely grated", qty: "1", cost: 0.3 },
    {
      item: "fresh dill & parsley, chopped",
      qty: "1 handful",
      cost: 0.4,
    },
    {
      item: "olive oil",
      qty: "3 tbsp",
      cost: 0.4,
      spansWeeks: true,
    },
    { item: "eggs", qty: "2", cost: 0.5 },
    { item: "lemons", qty: "2", cost: 0.6 },
    { item: "salt, black pepper", qty: "to taste" },
  ],
  method: [
    "Core the cabbage and lower the whole head into boiling water, peeling off leaves as they soften. Trim the thick central ribs so the leaves roll easily.",
    "Mix the raw rice, mince, grated onion, herbs, olive oil, salt, and pepper. Put a spoonful on each leaf, fold the sides in, and roll into snug parcels.",
    "Line the pot with the small or torn outer leaves, pack the rolls seam-down in tight layers, weight with an inverted plate, and add water to just cover. Simmer gently 45 minutes until the rice and cabbage are tender. Reserve the hot broth.",
    "Make the avgolemono: whisk the eggs with the lemon juice, then slowly ladle in hot broth while whisking to temper. Pour the sauce back over the rolls off the heat, swirl the pot, and let it sit a few minutes to thicken — never boil it again or it curdles.",
  ],
  modernMove:
    "Tempering the egg-lemon with ladlefuls of the cooking broth before it ever touches the heat is what turns it into a glossy, custard-thin sauce instead of scrambled egg.",
  notes:
    "A winter dish made when cabbage is cheap; the mince is small — the rice and avgolemono carry it. Skip the meat and it becomes a lenten lahanodolmades.",
  tags: ["cabbage", "rice", "avgolemono", "lemon", "winter"],
  sources: [
    {
      title: "My Greek Dish — Greek Stuffed Cabbage Rolls in Lemon Sauce (Lahanodolmades)",
      url: "https://www.mygreekdish.com/recipe/stuffed-cabbage-rolls-lahanodomades/",
      note: "Confirms cabbage rolled around a rice-and-mince filling and finished with egg-lemon sauce.",
    },
  ],
};
