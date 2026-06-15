import type { Recipe } from "../types";

export const merguezBatata: Recipe = {
  slug: "merguez-batata",
  title: "Merguez wa Batata",
  cuisine: "moroccan",
  blurb:
    "Spicy lamb merguez browned until their harissa-red fat slicks the pan, then potatoes and tomato thrown in to fry and stew in that fiery rendering until the edges crisp and the sauce clings.",
  servings: 4,
  perServing: { calories: 600, protein: 24 },
  estCostPerServing: 2.0,
  roles: ["dinner"],
  ingredients: [
    { item: "merguez sausages", qty: "8 (about 1 lb)", cost: 5.0 },
    { item: "potatoes, cut in chunks", qty: "1 1/2 lb", cost: 1.0 },
    { item: "tomatoes, chopped (or canned)", qty: "2 large", cost: 0.7 },
    { item: "onion, sliced", qty: "1", cost: 0.25 },
    { item: "garlic", qty: "2 cloves", cost: 0.05, spansWeeks: true },
    { item: "paprika and cumin", qty: "1 tsp each", cost: 0.1, spansWeeks: true },
    { item: "olive oil", qty: "1 tbsp", cost: 0.1, spansWeeks: true },
  ],
  method: [
    "Brown the merguez in a wide skillet so they render their spiced red fat, then lift them out and set aside.",
    "Fry the potatoes in that rendered fat with the onion until they take on color and start to soften, about 10 minutes.",
    "Stir in garlic, paprika, and cumin, then add the tomatoes and a splash of water and let it stew until the potatoes are tender and the sauce thickens.",
    "Slice the merguez and return them to warm through and lend their spice to the sauce.",
    "Serve hot from the pan with bread to mop up the red, fragrant juices.",
  ],
  modernMove:
    "Cooking the potatoes in the rendered merguez fat instead of fresh oil pulls the sausage's harissa, cumin, and fennel straight into every chunk, so the cheap potato carries the whole dish's flavor.",
  notes:
    "A little sausage goes a long way — the potatoes bulk it into a full, frugal dinner.",
  zeroWasteHero: false,
  tags: ["merguez", "potatoes", "sausage", "skillet", "moroccan"],
  sources: [
    {
      title: "Eat Drink Cape Town — Moroccan Merguez Sausage Bake with Potato, Tomato and Peppers",
      url: "https://www.eatdrinkcapetown.co.za/moroccan-merguez-sausage-bake-with-potato-tomato-and-sweet-peppers-quick-easy-recipe/",
      note: "Spicy merguez cooked with potato and tomato, the sausage's juices flavoring the vegetables.",
    },
  ],
};
