import type { Recipe } from "../types";

export const chickenAndouilleGumbo: Recipe = {
  slug: "chicken-andouille-gumbo",
  title: "Chicken & Andouille Gumbo",
  cuisine: "american-south",
  blurb:
    "The Creole standby — mostly chicken thighs with just enough andouille for smoke, built on a chocolate-dark roux and the holy trinity, served over rice.",
  servings: 6,
  perServing: { calories: 620, protein: 38 },
  estCostPerServing: 1.95,
  roles: ["dinner"],
  ingredients: [
    {
      item: "bone-in chicken thighs (skin on for flavor, then pulled)",
      qty: "2 lb",
      cost: 5.5,
    },
    {
      item: "andouille sausage, sliced into coins (a little goes a long way)",
      qty: "6 oz",
      cost: 2.5,
    },
    { item: "neutral oil or lard for the roux", qty: "1/2 cup", cost: 0.4, spansWeeks: true },
    { item: "all-purpose flour for the roux", qty: "1/2 cup", cost: 0.15, spansWeeks: true },
    { item: "onion, diced", qty: "1 large", cost: 0.4 },
    { item: "green bell pepper, diced", qty: "1", cost: 0.5 },
    { item: "celery, diced", qty: "2 ribs", cost: 0.3 },
    { item: "garlic cloves, minced", qty: "4", cost: 0.2, spansWeeks: true },
    {
      item: "chicken stock (or water plus the chicken bones)",
      qty: "8 cups",
      cost: 0.6,
    },
    { item: "bay leaves", qty: "2", cost: 0.1, spansWeeks: true },
    {
      item: "Cajun seasoning (paprika, thyme, cayenne, black & white pepper)",
      qty: "2 tbsp",
      cost: 0.3,
      spansWeeks: true,
    },
    { item: "filé powder to finish (optional)", qty: "1 tsp", cost: 0.2, spansWeeks: true },
    { item: "scallions and parsley, sliced", qty: "1 bunch", cost: 0.5 },
    { item: "long-grain white rice, to serve", qty: "2 cups dry", cost: 0.7 },
    { item: "salt, hot sauce", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Brown the chicken thighs and andouille coins in a heavy pot, then set aside. Render leaves smoky fat behind.",
    "Make a dark roux: whisk the flour into the oil over medium-low heat and stir patiently — 30 to 45 minutes — until it goes from blond to peanut butter to the color of milk chocolate. This is the soul of the gumbo; do not rush it or let it scorch.",
    "Drop the trinity (onion, bell pepper, celery) straight into the hot roux — it stops the cooking and softens the vegetables. Add garlic.",
    "Slowly whisk in the warm stock to avoid lumps. Add bay, Cajun seasoning, the andouille, and the chicken thighs. Simmer 1 hour until the chicken is falling off the bone.",
    "Pull the chicken, discard skin and bones, shred the meat, and return it. Simmer 20 minutes more so it thickens and the flavors marry.",
    "Off the heat, stir in filé if using (never boil it or it turns ropey). Serve over a scoop of white rice, finished with scallions, parsley, and hot sauce.",
  ],
  modernMove:
    "A long, dark roux is both your thickener and your entire flavor base — toast it to milk-chocolate brown and you need almost no meat to taste deeply of it. A few ounces of andouille perfumes the whole pot.",
  tags: ["gumbo", "roux", "holy-trinity", "chicken", "andouille", "rice", "creole", "one-pot"],
  sources: [
    {
      title: "George Graham — Acadiana Table: Chicken and Andouille Gumbo",
      url: "https://acadianatable.com/gumbo-and-more/",
      note: "Authoritative Cajun source for the dark-roux, smoked-andouille chicken gumbo built on the holy trinity.",
    },
  ],
};
