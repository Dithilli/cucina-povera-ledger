import type { Recipe } from "../types";

export const moleColoradito: Recipe = {
  slug: "mole-coloradito",
  title: "Mole Coloradito",
  cuisine: "oaxacan",
  blurb:
    "The friendly red mole of the seven: ancho and guajillo chiles fried with tomato, plantain, almonds, and warm spice, rounded with a little Mexican chocolate into a brick-red, faintly sweet sauce spooned over chicken and dusted with sesame.",
  servings: 4,
  perServing: { calories: 540, protein: 26 },
  estCostPerServing: 1.9,
  roles: ["dinner"],
  ingredients: [
    { item: "bone-in chicken pieces", qty: "1 1/2 lb", cost: 3.4 },
    { item: "ancho + guajillo chiles", qty: "5 total", cost: 0.7, spansWeeks: true },
    { item: "tomato, charred", qty: "2", cost: 0.5 },
    { item: "ripe plantain (or stale bread), almonds, sesame", qty: "1/2 plantain + 1/4 cup", cost: 0.6, spansWeeks: true },
    { item: "Mexican chocolate", qty: "1 oz", cost: 0.5, spansWeeks: true },
    { item: "cinnamon, clove, oregano, garlic, onion, manteca, salt", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Poach the chicken with onion, garlic, and salt; reserve the broth to finish the mole.",
    "Toast and soak the stemmed, seeded anchos and guajillos; fry the plantain and almonds in manteca and char the tomato.",
    "Blend the chiles, tomato, plantain, almonds, sesame, and warm spices with broth to a smooth paste.",
    "Fry the paste hard in manteca until it darkens to brick red and thickens, then melt in the chocolate and loosen with broth to a glossy pour.",
    "Simmer the chicken in the sauce until it drinks it up, and serve over rice with toasted sesame.",
  ],
  modernMove:
    "A fried ripe plantain does the body-and-sweetness work here that the long ingredient list does in negro — it bulks the sauce, balances the chile, and lets a modest 1 oz of chocolate read as warmth rather than dessert, which is why coloradito is the mole a home cook reaches for first.",
  notes:
    "Coloradito is the most approachable of the seven moles; the red comes from ancho and guajillo, not from charred-to-charcoal chiles.",
  zeroWasteHero: false,
  tags: ["oaxacan", "mole", "coloradito", "chile", "chocolate", "chicken", "dinner"],
  sources: [
    {
      title: "Pati Jinich — Coloradito Chicken",
      url: "https://patijinich.com/coloradito-chicken-recipe/",
      note: "ancho/guajillo red mole with chocolate, fry-the-paste technique over chicken",
    },
  ],
};
