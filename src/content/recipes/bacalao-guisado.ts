import type { Recipe } from "../types";

export const bacalaoGuisado: Recipe = {
  slug: "bacalao-guisado",
  title: "Bacalao Guisado (Stewed Salt Cod)",
  cuisine: "puerto-rican",
  blurb:
    "Soaked salt cod flaked into a sofrito-and-tomato base with tender potato, green olives and capers — the Lenten Friday stew that turns the cheapest preserved fish into something you ladle proudly over white rice.",
  servings: 4,
  perServing: { calories: 430, protein: 27 },
  estCostPerServing: 1.7,
  roles: ["dinner"],
  ingredients: [
    { item: "salt cod (bacalao), soaked overnight, water changed often", qty: "3/4 lb", cost: 3.6 },
    { item: "waxy potatoes, cut in chunks", qty: "1 lb", cost: 0.7 },
    { item: "sofrito (recaíto)", qty: "1/3 cup", cost: 0.5, spansWeeks: true },
    { item: "tomato sauce", qty: "1 cup", cost: 0.5 },
    { item: "onion, sliced", qty: "1 medium", cost: 0.3 },
    { item: "green bell pepper, sliced", qty: "1", cost: 0.4 },
    { item: "manzanilla olives + capers (alcaparrado)", qty: "1/4 cup", cost: 0.5, spansWeeks: true },
    { item: "sazón + olive oil, garlic, bay leaf, oregano", qty: "to taste", cost: 0.25, spansWeeks: true },
  ],
  method: [
    "Soak the salt cod overnight in cold water in the fridge, changing the water several times. Drain, then simmer in fresh water 15 minutes to draw out the last of the salt; drain, cool, and flake into large pieces, discarding any skin and bones.",
    "Heat olive oil in a caldero and cook the sofrito with half the tomato sauce until fragrant, 1–2 minutes. Add the onion and bell pepper and cook until softened.",
    "Stir in the rest of the tomato sauce, the alcaparrado, sazón, bay leaf, and oregano, then add the potatoes and enough water to barely cover. Simmer covered 12–15 minutes until the potatoes are nearly tender and the sauce has thickened to a gravy.",
    "Fold in the flaked cod and simmer gently 5 minutes more, just to marry — don't boil hard or the fish toughens. Taste before adding any salt; the cod usually carries enough.",
    "Serve over white rice, with avocado and a hard-boiled egg on the side in the traditional way.",
  ],
  modernMove:
    "Reserve the second simmering water from the cod and use a splash of it instead of plain water in the stew — it carries a clean, briny cod stock that deepens the sauce without re-salting it.",
  notes:
    "A Lenten staple, when fish replaces meat on Fridays. Three-quarters of a pound of dried fish stretches to feed four because the potatoes and sofrito do the heavy lifting.",
  zeroWasteHero: false,
  tags: ["fish", "salt-cod", "bacalao", "stew", "potato", "sofrito", "dinner", "puerto-rican"],
  sources: [
    {
      title: "Delish D'Lites — Bacalao Guisado (Stewed Cod Fish)",
      url: "https://www.delishdlites.com/ingredients/fish-recipes/bacalao-guisado-stewed-cod-fish-lent-recipe/",
      note: "salt cod soaked and simmered, then stewed in sofrito, tomato sauce, potato and alcaparrado; served over rice",
    },
  ],
};
