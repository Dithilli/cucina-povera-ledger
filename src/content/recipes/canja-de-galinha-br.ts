import type { Recipe } from "../types";

export const canjaDeGalinhaBr: Recipe = {
  slug: "canja-de-galinha-br",
  title: "Canja de Galinha",
  cuisine: "brazilian",
  blurb:
    "Chicken simmered with rice and a little carrot and potato into a thick, soothing broth finished with parsley and lime — the Brazilian bowl reached for whenever someone needs comforting.",
  servings: 4,
  perServing: { calories: 410, protein: 24 },
  estCostPerServing: 1.45,
  roles: ["dinner"],
  ingredients: [
    { item: "chicken thighs, bone-in", qty: "400 g", cost: 2.4 },
    { item: "white rice", qty: "1/2 cup", cost: 0.2 },
    { item: "carrot, diced", qty: "1", cost: 0.2 },
    { item: "potato, diced", qty: "1", cost: 0.2 },
    { item: "onion, garlic, oil, parsley, lime, salt", qty: "to taste", cost: 0.4, spansWeeks: true },
  ],
  method: [
    "Sweat the onion and garlic in oil, add the chicken pieces, and cover with water; simmer about 30 minutes until the meat is tender.",
    "Lift out the chicken, shred the meat off the bones, and return the bones to the broth briefly for extra body before discarding them.",
    "Add the rice, carrot and potato to the broth and cook 15–20 minutes until the rice is soft and the soup has thickened.",
    "Return the shredded chicken, season, and finish each bowl with chopped parsley and a squeeze of lime.",
  ],
  modernMove:
    "Simmering the bones after pulling the meat is the cheap move that gives canja its rich body — no stock cube required.",
  notes: "Bone-in thighs give the most broth for the least money; the rice cooks right in the pot and thickens the soup.",
  zeroWasteHero: false,
  tags: ["chicken", "rice", "soup", "comfort", "brazilian"],
  sources: [
    {
      title: "Receitas Nestlé — Canja de Galinha Tradicional",
      url: "https://www.receitasnestle.com.br/receitas/canja-de-galinha",
      note: "chicken and rice simmered with vegetables into a thick broth, finished with herbs",
    },
  ],
};
