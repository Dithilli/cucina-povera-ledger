import type { Recipe } from "../types";

export const baiaoDeDois: Recipe = {
  slug: "baiao-de-dois",
  title: "Baião de Dois",
  cuisine: "brazilian",
  blurb:
    "The Northeast's 'two-step' of rice and beans cooked in one pot so the grains drink up the bean broth, finished with cubes of squeaky queijo coalho that soften but never quite melt — sertão thrift named for a folk dance.",
  servings: 2,
  perServing: { calories: 640, protein: 24 },
  estCostPerServing: 1.6,
  roles: ["dinner"],
  ingredients: [
    { item: "cooked black-eyed peas (or carioca beans) with broth", qty: "1 1/2 cups", cost: 0.6 },
    { item: "white rice", qty: "1 cup", cost: 0.35 },
    { item: "queijo coalho (or halloumi/firm cheese), cubed", qty: "3 oz", cost: 0.7 },
    { item: "smoked bacon or sausage, diced", qty: "2 oz", cost: 0.45 },
    { item: "onion, chopped", qty: "1/2", cost: 0.15 },
    { item: "garlic cloves, minced", qty: "3", cost: 0.1, spansWeeks: true },
    { item: "cilantro and scallion, chopped", qty: "1/4 cup", cost: 0.2 },
    { item: "oil", qty: "1 tbsp", cost: 0.05, spansWeeks: true },
    { item: "salt and pepper", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Crisp the bacon or sausage in a pot, then soften the onion and garlic in the fat until translucent.",
    "Stir in the rinsed rice to coat it in the fat, then add the beans, their broth, and enough water to total about 2 cups of liquid; season.",
    "Bring to a boil, cover, and cook on low 15–18 minutes until the rice is tender and the liquid absorbed.",
    "In a dry pan, sear the cheese cubes briefly so they take on colour without melting.",
    "Fork the seared cheese, cilantro, and scallion through the rice off the heat, cover, and rest 5 minutes so the cheese warms through.",
  ],
  modernMove:
    "Sear the queijo coalho in a dry pan before folding it in — the colour and crust keep each cube intact in the rice instead of disappearing into it.",
  notes:
    "From Ceará: cook rice and beans together rather than separately so the grains take on the bean broth. Traditionally made with carne de sol; bacon or sausage keeps it cheap.",
  tags: ["rice", "beans", "cheese", "nordeste", "brazilian"],
  sources: [
    {
      title: "Wikipedia — Baião de dois",
      url: "https://en.wikipedia.org/wiki/Bai%C3%A3o_de_dois",
      note: "Ceará origin, rice and beans cooked together, and queijo coalho folded in at the end",
    },
  ],
};
