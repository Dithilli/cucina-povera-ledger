import type { Recipe } from "../types";

export const tahuBalado: Recipe = {
  slug: "tahu-balado",
  title: "Tahu Balado",
  cuisine: "indonesian",
  blurb:
    "Firm tofu fried golden and hollow, then simmered briefly in a thick red balado of fried chile, shallot, garlic, and tomato until the curd drinks the sauce in — tempe balado's softer twin, and just as cheap a plate over rice.",
  servings: 4,
  perServing: { calories: 450, protein: 20 },
  estCostPerServing: 0.85,
  roles: ["dinner"],
  ingredients: [
    { item: "firm tofu, cut into 2 cm cubes", qty: "1 lb", cost: 1.6 },
    { item: "red chilies (cabe merah)", qty: "8", cost: 0.8 },
    { item: "shallots", qty: "5", cost: 0.45, spansWeeks: true },
    { item: "garlic cloves", qty: "3", cost: 0.15, spansWeeks: true },
    { item: "tomato, chopped", qty: "1", cost: 0.3 },
    { item: "salam (bay) leaf and a slice of galangal", qty: "1 each", cost: 0.1, spansWeeks: true },
    { item: "kecap manis (sweet soy)", qty: "1 tbsp", cost: 0.2, spansWeeks: true },
    { item: "palm sugar (or brown sugar)", qty: "1 tsp", cost: 0.1, spansWeeks: true },
    { item: "salt", qty: "to taste", cost: 0.05 },
    { item: "water", qty: "1/2 cup", cost: 0 },
    { item: "oil for frying", qty: "1/2 cup", cost: 0.5, spansWeeks: true },
  ],
  method: [
    "Salt the tofu cubes and pat them dry, then shallow-fry in hot oil until golden and firm on all sides — frying drives out water and leaves an airy, spongy inside that soaks up the sauce.",
    "Grind the red chilies, shallots, garlic, and tomato to a coarse paste. Fry it in a few tablespoons of the oil with the salam leaf and galangal until the raw smell is gone and the oil reddens and separates, about 8 minutes.",
    "Season with kecap manis, palm sugar, and salt, then pour in the water and let it bubble down to a thick sauce.",
    "Fold the fried tofu through, lower the heat, and simmer a couple of minutes until the cubes drink up the sauce and turn glossy red. Serve hot with steamed rice and a smear of sambal.",
  ],
  modernMove:
    "Unlike tempe balado, where the tempe is tossed in dry at the end, the tofu is simmered briefly in a slightly looser sauce — its hollow, fried interior acts like a sponge and pulls the balado right into the curd, so every bite is seasoned through, not just coated.",
  notes:
    "A handful of fried potato or a couple of boiled eggs can ride in the same pan to stretch one batch of sauce across more of the table.",
  tags: ["dinner", "tofu", "balado", "chili", "minangkabau", "protein"],
  sources: [
    { title: "Indonesia Original Recipes — Tofu Balado (Tahu Balado)", url: "http://indonesiaoriginalrecipes.blogspot.com/2013/11/tofu-balado-tahu-balado.html", note: "fried tofu simmered in red chile-shallot-garlic-tomato balado with kecap and galangal" },
    { title: "Nusa Wise — Spicy Balado Tofu", url: "https://nusawise.org/recipe/spicy-balado-tofu/", note: "balado base of red chilies, shallots, garlic, tomato sautéed until reduced" },
  ],
};
