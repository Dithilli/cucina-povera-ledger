import type { Recipe } from "../types";

export const ajiDeGallina: Recipe = {
  slug: "aji-de-gallina",
  title: "Ají de Gallina",
  cuisine: "andean",
  blurb:
    "Poached chicken pulled into fine threads and folded into a glowing yellow sauce thickened with milk-soaked bread and ground walnuts, warm with ají amarillo — a dish built to turn one bird's worth of meat into many golden, comforting bowls over potato and rice.",
  servings: 6,
  perServing: { calories: 560, protein: 20 },
  estCostPerServing: 1.55,
  roles: ["dinner"],
  ingredients: [
    { item: "bone-in chicken (breast and thigh)", qty: "1.25 lb", cost: 3.5 },
    { item: "crustless white bread", qty: "4 slices", cost: 0.4, spansWeeks: true },
    { item: "evaporated or whole milk", qty: "1 cup", cost: 0.6, spansWeeks: true },
    { item: "walnuts (or pecans)", qty: "1/3 cup", cost: 0.9, spansWeeks: true },
    { item: "ají amarillo paste", qty: "1/4 cup", cost: 0.7, spansWeeks: true },
    { item: "red onion, finely diced", qty: "1 large", cost: 0.4 },
    { item: "garlic, minced", qty: "3 cloves", cost: 0.15, spansWeeks: true },
    { item: "grated hard cheese (parmesan)", qty: "1/4 cup", cost: 0.5, spansWeeks: true },
    { item: "yellow potatoes, boiled", qty: "4", cost: 0.8 },
    { item: "hard-boiled eggs and olives, to garnish", qty: "3 eggs", cost: 0.75 },
    { item: "neutral oil", qty: "2 tbsp", cost: 0.1, spansWeeks: true },
    { item: "white rice, to serve", qty: "to serve" },
  ],
  method: [
    "Poach the chicken in lightly salted water with aromatics until done; reserve the broth. Cool, then shred the meat into fine threads by hand.",
    "Soak the bread in the milk until soggy, then blend it smooth with the walnuts and a splash of the reserved broth.",
    "Fry the onion, garlic and ají amarillo paste in oil until soft and deeply fragrant — this aderezo is the color and backbone of the sauce.",
    "Pour in the bread-and-walnut purée and loosen with broth to a pourable cream. Stir in the cheese, then fold in the shredded chicken and warm through, adding broth until it's silky, not stiff.",
    "Spoon over boiled yellow potato and white rice; garnish with a slice of hard-boiled egg and a black olive.",
  ],
  modernMove:
    "Shred the chicken into fine threads rather than chunks — the sauce clings to the strands so a modest amount of meat reads as a generous, luxurious serving across six bowls.",
  notes:
    "Originally made with gallina (stewing hen) and built specifically to extend a tough old bird; the bread-and-nut sauce is the thrifty engine that makes a little chicken feed a crowd.",
  zeroWasteHero: false,
  tags: ["dinner", "chicken", "creamy", "aji-amarillo", "andean", "stretch-the-meat"],
  sources: [
    {
      title: "Caroline's Cooking — Ají de Gallina",
      url: "https://www.carolinescooking.com/aji-de-gallina-peruvian-chicken-stew/",
      note: "Shredded chicken in an ají amarillo sauce thickened with milk-soaked bread and ground walnuts",
    },
  ],
};
