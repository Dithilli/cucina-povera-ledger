import type { Recipe } from "../types";

export const feijoadaLeve: Recipe = {
  slug: "feijoada-leve",
  title: "Feijoada (weeknight)",
  cuisine: "brazilian",
  blurb:
    "A lighter weeknight read of Brazil's black-bean feast — smoky pork and sausage simmered into soft black beans, served over rice with sautéed collards and bright orange wedges that cut the richness.",
  servings: 2,
  perServing: { calories: 650, protein: 28 },
  estCostPerServing: 1.8,
  roles: ["dinner"],
  ingredients: [
    { item: "cooked black beans with their broth", qty: "2 cups", cost: 0.8 },
    { item: "smoked pork sausage (linguiça/calabresa), sliced", qty: "3 oz", cost: 0.55 },
    { item: "smoked bacon or pork shoulder, diced", qty: "2 oz", cost: 0.45 },
    { item: "onion, chopped", qty: "1/2", cost: 0.15 },
    { item: "garlic cloves, minced", qty: "4", cost: 0.12, spansWeeks: true },
    { item: "bay leaf", qty: "1", cost: 0.05, spansWeeks: true },
    { item: "collard greens, shredded", qty: "3 cups packed", cost: 0.35 },
    { item: "orange, in wedges", qty: "1", cost: 0.4 },
    { item: "cooked white rice, to serve", qty: "1 1/2 cups", cost: 0.25 },
    { item: "salt and pepper", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Brown the sausage and bacon in a pot until the fat renders, then soften the onion, garlic, and bay leaf in it.",
    "Add the black beans with their broth, bring to a simmer, and cook 20–25 minutes until thick and glossy; mash a few beans against the pot to body it up.",
    "Meanwhile flash the shredded collards in a little of the rendered fat with a pinch of salt until bright and just tender.",
    "Taste and adjust salt and pepper; the stew should be soft and spoonable, not soupy.",
    "Serve over white rice with the collards alongside and orange wedges to squeeze over.",
  ],
  modernMove:
    "Mash a ladle of beans against the side of the pot rather than reaching for flour — the released starch thickens the stew to that classic glossy body on its own.",
  notes:
    "The full feijoada is a weekend marathon of many cuts; this keeps the soul — smoke, black beans, rice, collards, orange — on a weeknight with just sausage and bacon.",
  tags: ["beans", "pork", "collards", "feijoada", "brazilian"],
  sources: [
    {
      title: "Muy Bueno — Brazilian Feijoada (Pork and Black Bean Stew)",
      url: "https://muybuenoblog.com/brazilian-feijoada/",
      note: "smoked pork and sausage simmered into black beans, served over rice with collards and orange",
    },
  ],
};
