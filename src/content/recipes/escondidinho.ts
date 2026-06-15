import type { Recipe } from "../types";

export const escondidinho: Recipe = {
  slug: "escondidinho",
  title: "Escondidinho de Carne Seca",
  cuisine: "brazilian",
  blurb:
    "A northeastern shepherd's pie that hides shredded, soaked carne seca under a cloud of buttery cassava purée and a lid of melted cheese — peasant salt-beef and humble mandioca baked into something golden and bubbling.",
  servings: 2,
  perServing: { calories: 580, protein: 30 },
  estCostPerServing: 2.0,
  roles: ["dinner"],
  ingredients: [
    { item: "carne seca (dried/salted beef)", qty: "1/2 lb", cost: 1.8 },
    { item: "cassava (mandioca), peeled", qty: "1 lb", cost: 0.6 },
    { item: "onion, diced", qty: "1 small", cost: 0.2 },
    { item: "garlic, minced", qty: "3 cloves", cost: 0.15, spansWeeks: true },
    { item: "tomato, chopped", qty: "1", cost: 0.3 },
    { item: "milk and butter, for the purée", qty: "1/2 cup + 1 tbsp", cost: 0.3, spansWeeks: true },
    { item: "grated cheese (mozzarella or coalho)", qty: "1/2 cup", cost: 0.5, spansWeeks: true },
    { item: "scallions and parsley (cheiro-verde)", qty: "small handful", cost: 0.2 },
    { item: "neutral oil", qty: "1 tbsp", cost: 0.05, spansWeeks: true },
    { item: "black pepper", qty: "to taste", cost: 0.02, spansWeeks: true },
  ],
  method: [
    "Desalt the carne seca: soak it in cold water (changing it a few times) or boil and drain, then shred the meat finely.",
    "Boil the cassava in salted water until soft, discard the woody central fiber, and mash with milk and butter into a smooth, loose purée.",
    "Make the filling: fry onion and garlic, add the shredded carne seca and tomato, and sauté until fragrant and well-seasoned; fold in cheiro-verde.",
    "Layer a baking dish — half the purée, all the meat, then the rest of the purée on top — and blanket with grated cheese.",
    "Bake at 400°F until the top is golden and bubbling, about 25 minutes; serve with white rice and feijão.",
  ],
  modernMove:
    "Desalt the carne seca properly before it ever hits the pan — under-soaked dried beef will overwhelm the gentle cassava, while a well-rinsed shred reads savory rather than briny.",
  notes:
    "A Northeast staple stretching salt-preserved beef — the larder meat of the sertão — under cheap, filling mandioca, so a little cured meat feeds two generously.",
  zeroWasteHero: false,
  tags: ["dinner", "beef", "carne-seca", "cassava", "baked", "brazilian", "nordestino"],
  sources: [
    {
      title: "Transparent Language — Brazilian Recipe: Escondidinho",
      url: "https://blogs.transparent.com/portuguese/brazilian-recipe-escondidinho/",
      note: "Shredded carne seca filling layered under and over a cassava purée and baked with cheese",
    },
  ],
};
