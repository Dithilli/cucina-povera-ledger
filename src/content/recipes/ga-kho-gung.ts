import type { Recipe } from "../types";

export const gaKhoGung: Recipe = {
  slug: "ga-kho-gung",
  title: "Gà Kho Gừng (Ginger Caramel Chicken)",
  cuisine: "vietnamese",
  blurb:
    "Chicken braised in caramel and fish sauce with a generous hand of julienned ginger until the sauce reduces to a sticky, warming, peppery glaze. Bone-in thighs and a knob of ginger make a fast, deeply savory kho that stretches over a big bowl of rice.",
  servings: 4,
  perServing: { calories: 520, protein: 36 },
  estCostPerServing: 1.55,
  roles: ["dinner"],
  ingredients: [
    { item: "bone-in chicken thighs, cut through the bone into 2-inch pieces", qty: "1 1/2 lb", cost: 4.2 },
    { item: "fresh ginger, peeled and julienned", qty: "2-inch knob", cost: 0.4, spansWeeks: true },
    { item: "nước màu (caramel sauce base)", qty: "2 tbsp", cost: 0.05, spansWeeks: true },
    { item: "fish sauce (nước mắm)", qty: "2 1/2 tbsp", cost: 0.4, spansWeeks: true },
    { item: "sugar", qty: "1 tbsp", cost: 0.05, spansWeeks: true },
    { item: "shallots, minced", qty: "2", cost: 0.3 },
    { item: "garlic cloves, minced", qty: "3", cost: 0.15, spansWeeks: true },
    { item: "water", qty: "3/4 cup" },
    { item: "scallions, sliced", qty: "2", cost: 0.2 },
    { item: "black pepper", qty: "1/2 tsp", spansWeeks: true },
    { item: "bird's-eye chili (optional)", qty: "1", cost: 0.1, spansWeeks: true },
    { item: "steamed rice, to serve", qty: "to serve" },
  ],
  method: [
    "Marinate the chicken with the shallot, garlic, fish sauce, sugar, and pepper for 20 to 30 minutes. Bone-in, skin-on thighs give the richest braise and won't dry out.",
    "Heat a film of oil in a heavy pot over medium and brown the chicken pieces on the skin side until golden, rendering some fat. Push to the side and fry half the ginger in that fat until fragrant and just crisping at the edges — frying the ginger blooms its warmth into the oil.",
    "Stir in the nước màu to coat the chicken in dark caramel, then pour in the marinade and the water — just enough to come halfway up the meat. Bring to a boil, then drop to a low simmer.",
    "Braise uncovered 25 to 30 minutes, turning the chicken and spooning sauce over it, until the meat is tender and pulling from the bone and the liquid has reduced by more than half.",
    "Add the rest of the raw ginger in the last 10 minutes for a fresh, sharp lift over the cooked-down sweetness, and let the sauce reduce to a sticky glaze that coats each piece — kho, not soup. Taste and balance with a splash of fish sauce or pinch of sugar.",
    "Crack over black pepper, scatter scallions and chili, and serve over hot rice with đồ chua or a plate of greens.",
  ],
  modernMove:
    "Splitting the ginger — frying half to bloom its warmth into the braise, adding half raw at the end for a fresh bite — gives the dish two layers of ginger over the caramel, the move that keeps a cheap braise from tasting one-note.",
  notes:
    "Cutting the chicken through the bone (a cleaver helps) gives more surface for the caramel and a richer sauce, the frugal Vietnamese way; boneless thighs work and cook faster but braise less deeply. Ginger is warming and is why this kho is a cold-weather favorite.",
  zeroWasteHero: false,
  tags: ["dinner", "chicken", "ginger", "kho", "caramel-braise", "frugal", "one-pot"],
};
