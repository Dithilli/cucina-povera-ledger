import type { Recipe } from "../types";

export const feijaoTropeiro: Recipe = {
  slug: "feijao-tropeiro",
  title: "Feijão Tropeiro",
  cuisine: "brazilian",
  blurb:
    "The mule-driver's road food of Minas Gerais — cooked carioca beans tossed hot through toasted cassava farofa with scrambled egg, a little sausage, and ribbons of garlicky collards so every grain comes out dry, savoury, and clinging.",
  servings: 2,
  perServing: { calories: 620, protein: 25 },
  estCostPerServing: 1.5,
  roles: ["dinner"],
  ingredients: [
    { item: "cooked carioca (or pinto) beans, drained", qty: "1 1/2 cups", cost: 0.6 },
    { item: "cassava flour (farinha de mandioca)", qty: "3/4 cup", cost: 0.4 },
    { item: "smoked pork sausage (linguiça/calabresa), sliced", qty: "3 oz", cost: 0.55 },
    { item: "eggs", qty: "2", cost: 0.3 },
    { item: "collard greens, finely shredded", qty: "3 cups packed", cost: 0.35 },
    { item: "onion, chopped", qty: "1/2", cost: 0.15 },
    { item: "garlic cloves, minced", qty: "3", cost: 0.1, spansWeeks: true },
    { item: "oil or rendered fat", qty: "2 tbsp", cost: 0.1, spansWeeks: true },
    { item: "salt and pepper", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Render the sliced sausage in a wide skillet over medium heat until browned and its fat is rendered; lift out and reserve, leaving the fat behind.",
    "Soften the onion and garlic in that fat, then push to one side, crack in the eggs and scramble them loosely into the onion.",
    "Stir in the drained beans and the sausage, season well, and warm through so the beans dry off slightly.",
    "Sprinkle in the cassava flour a handful at a time, tossing constantly, until it toasts pale gold and the whole pan turns dry and sandy rather than wet.",
    "In a separate hot pan flash the shredded collards in a little oil with a pinch of salt for a minute until bright and just wilted, then fold half through the beans and pile the rest on top.",
  ],
  modernMove:
    "Toast the farinha until it smells nutty before it ever meets the beans — dry-toasting the cassava flour first guarantees the dish stays loose and sandy instead of gluing into paste.",
  notes:
    "Born as tropeiro trail food: beans and farinha keep on the road, the egg and sausage are whatever you carry. Serve with plain white rice if you want to stretch it further.",
  zeroWasteHero: true,
  tags: ["beans", "farofa", "collards", "brazilian"],
  sources: [
    {
      title: "Olivia's Cuisine — Feijão Tropeiro (Brazilian Beans with Sausage and Collard Greens)",
      url: "https://www.oliviascuisine.com/feijao-tropeiro/",
      note: "the order of rendering sausage, scrambling egg into the beans, then folding in toasted farofa and collards",
    },
  ],
};
