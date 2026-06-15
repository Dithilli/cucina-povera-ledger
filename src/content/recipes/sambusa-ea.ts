import type { Recipe } from "../types";

export const sambusaEa: Recipe = {
  slug: "sambusa-ea",
  title: "Sambusa",
  cuisine: "east-african",
  blurb:
    "Crisp triangular pastries packed with cumin-spiced minced beef and onion — the Swahili-coast tea-house snack you eat with a squeeze of lime and a spoon of kachumbari.",
  servings: 4,
  perServing: { calories: 520, protein: 21 },
  estCostPerServing: 1.1,
  roles: ["dinner"],
  ingredients: [
    { item: "ground beef (or boiled, mashed lentils for a meatless fill)", qty: "3/4 lb", cost: 2.2 },
    { item: "spring-roll or sambusa wrappers", qty: "12", cost: 1.0 },
    { item: "onion, finely diced", qty: "1", cost: 0.3 },
    { item: "garlic and ginger, minced", qty: "1 tbsp", cost: 0.15, spansWeeks: true },
    { item: "ground cumin and coriander", qty: "2 tsp", cost: 0.1, spansWeeks: true },
    { item: "green chili, minced", qty: "1", cost: 0.15 },
    { item: "fresh dhania (cilantro), chopped", qty: "1/4 cup", cost: 0.2 },
    { item: "flour-and-water paste, for sealing", qty: "2 tbsp", cost: 0.05 },
    { item: "neutral oil for deep-frying", qty: "for frying", cost: 0.6 },
    { item: "salt", qty: "to taste" },
  ],
  method: [
    "Brown the beef with the onion, garlic, and ginger over medium-high heat, breaking it fine, until the moisture cooks off — a dry filling keeps the pastry crisp.",
    "Stir in cumin, coriander, green chili, and dhania; season well and cool completely.",
    "Fold each wrapper into a cone, spoon in the filling, and seal the seam with flour paste into a tight triangle with no gaps.",
    "Fry low and slow at a steady medium heat (about 170°C) so the pastry colours evenly and stays crunchy rather than browning before it cooks through.",
    "Drain and serve hot with lime wedges and kachumbari.",
  ],
  modernMove:
    "Cook the filling until visibly dry and let it cool before wrapping — steam from a wet filling is what bursts seams and leaves a greasy, soggy shell.",
  notes: "Folded sambusa freeze beautifully raw; fry straight from frozen.",
  zeroWasteHero: false,
  tags: ["street", "fried", "pastry", "east-african", "swahili-coast"],
  sources: [
    {
      title: "Chef's Pencil — Kenyan Beef Samosas",
      url: "https://www.chefspencil.com/kenyan-beef-samosas/",
      note: "Dry cumin-coriander beef filling, triangular fold, and low-and-slow frying.",
    },
  ],
};
