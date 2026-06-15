import type { Recipe } from "../types";

export const asopaoDePollo: Recipe = {
  slug: "asopao-de-pollo",
  title: "Asopao de Pollo (Soupy Chicken and Rice)",
  cuisine: "puerto-rican",
  blurb:
    "Browned chicken thighs simmered in sofrito and tomato, then thickened with rice cooked loose and brothy — the island's gumbo-like comfort pot, eaten with a spoon, somewhere between soup and rice.",
  servings: 4,
  perServing: { calories: 540, protein: 30 },
  estCostPerServing: 1.8,
  roles: ["dinner"],
  ingredients: [
    { item: "bone-in chicken thighs, skin removed", qty: "1.25 lb", cost: 3.0 },
    { item: "medium-grain rice", qty: "1 cup", cost: 0.4, spansWeeks: true },
    { item: "sofrito (recaíto)", qty: "1/3 cup", cost: 0.5, spansWeeks: true },
    { item: "tomato sauce", qty: "1 cup", cost: 0.5 },
    { item: "chicken broth", qty: "6 cups", cost: 0.8, spansWeeks: true },
    { item: "manzanilla olives + capers (alcaparrado)", qty: "1/4 cup", cost: 0.5, spansWeeks: true },
    { item: "sazón + adobo, olive oil, garlic, oregano, bay leaf", qty: "to taste", cost: 0.3, spansWeeks: true },
  ],
  method: [
    "Season the chicken with adobo. Heat olive oil in a deep pot and brown the thighs on all sides, then set aside.",
    "In the same pot, cook the sofrito until fragrant, then stir in the tomato sauce, alcaparrado, sazón, oregano, and bay leaf and simmer 2 minutes.",
    "Return the chicken, add the broth, bring to a simmer and cook 25–30 minutes until the chicken is tender. Lift it out, pull the meat from the bones, and return the meat to the pot.",
    "Stir in the rice and simmer uncovered, stirring now and then, until the rice is cooked but the dish stays loose and soupy, about 20 minutes — add more broth as the rice drinks it up.",
    "Serve immediately in bowls, while it's still brothy; it tightens fast as it sits.",
  ],
  modernMove:
    "Serve asopao the minute the rice is done. Unlike risotto it isn't meant to be al dente held — the starch keeps swelling, so adding a last splash of hot broth right before serving keeps that signature soupy looseness.",
  notes:
    "Asopao is often called Puerto Rico's national soup; the name comes from sopa. The pollo version is the everyday one — one pound of chicken plus a cup of rice feeds four generously.",
  zeroWasteHero: false,
  tags: ["chicken", "rice", "soup", "asopao", "sofrito", "comfort", "dinner", "puerto-rican"],
  sources: [
    {
      title: "Delish D'Lites — Asopao de Pollo (Puerto Rican Chicken & Rice Gumbo)",
      url: "https://www.delishdlites.com/ingredients/chicken-recipes/asopao-de-pollo-puerto-rican-chicken-rice-gumbo/",
      note: "chicken browned then simmered with sofrito, tomato sauce, alcaparrado and broth; rice added to stay soupy",
    },
  ],
};
