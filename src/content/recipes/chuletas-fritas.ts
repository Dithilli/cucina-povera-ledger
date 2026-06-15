import type { Recipe } from "../types";

export const chuletasFritas: Recipe = {
  slug: "chuletas-fritas",
  title: "Chuletas Fritas",
  cuisine: "puerto-rican",
  blurb:
    "Bone-in pork chops marinated in sofrito, garlic, oregano, and vinegar, then seared hard in a hot skillet until the edges crisp and the huesito is worth gnawing — the weeknight chop that anchors a Puerto Rican plate of rice and beans.",
  servings: 2,
  perServing: { calories: 540, protein: 33 },
  estCostPerServing: 1.9,
  roles: ["dinner"],
  ingredients: [
    { item: "bone-in center-cut pork chops", qty: "2 (about 12 oz)", cost: 3.2 },
    { item: "sofrito", qty: "2 tbsp", cost: 0.25, spansWeeks: true },
    { item: "garlic cloves, mashed", qty: "3", cost: 0.15, spansWeeks: true },
    { item: "dried oregano", qty: "1 tsp", cost: 0.05, spansWeeks: true },
    { item: "white wine vinegar", qty: "1 tbsp", cost: 0.05, spansWeeks: true },
    { item: "sazón con achiote", qty: "1 tsp", cost: 0.1, spansWeeks: true },
    { item: "adobo seasoning", qty: "1 tsp", cost: 0.1, spansWeeks: true },
    { item: "olive oil", qty: "1 tbsp", cost: 0.1, spansWeeks: true },
    { item: "oil for frying", qty: "2 tbsp", cost: 0.1, spansWeeks: true },
  ],
  method: [
    "Pat the chops dry and rub them all over with the sofrito, mashed garlic, oregano, vinegar, sazón, adobo, and olive oil. Marinate at least 30 minutes — overnight if you can.",
    "Heat the frying oil in a heavy skillet over medium-high until it shimmers.",
    "Lay the chops in without crowding and sear undisturbed 4–5 minutes until a deep crust forms.",
    "Flip and cook the second side 3–4 minutes more, until just cooked through (an instant-read reads about 145°F at the bone). Don't overcook — they dry fast.",
    "Rest a couple of minutes off the heat, then serve with arroz con habichuelas and tostones, the bone left in for gnawing.",
  ],
  modernMove:
    "A truly hot, dry skillet and an undisturbed first side build the browned crust that the marinade alone can't — resist flipping early; that single sear is the difference between fried and steamed.",
  notes:
    "Center-cut bone-in chops are traditional — the bone (el huesito) carries flavor and is meant to be sucked clean at the end. Thin chops cook in minutes, so watch them closely.",
  zeroWasteHero: false,
  tags: ["dinner", "pork", "fried", "sofrito", "adobo", "weeknight", "puerto-rican"],
  sources: [
    {
      title: "Marta Rivera — Sense & Edibility",
      url: "https://senseandedibility.com/chuletas-fritas-pork-chops/",
      note: "Sofrito-garlic-vinegar marinade and the hot pan-fry on bone-in chops",
    },
  ],
};
