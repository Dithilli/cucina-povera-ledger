import type { Recipe } from "../types";

export const soupMixStone: Recipe = {
  slug: "soup-mix-stone",
  title: "Garden Vegetable Soup",
  cuisine: "appalachian",
  blurb:
    "A winter's jar of canned \"soup mix\" — tomato, corn, beans, and okra all put up at once when the garden came in together — tipped into the pot and stretched with potato into a whole pot of supper.",
  servings: 6,
  perServing: { calories: 410, protein: 13 },
  estCostPerServing: 0.85,
  roles: ["dinner"],
  ingredients: [
    { item: "canned or fresh tomatoes, with juice", qty: "3 cups", cost: 1.0 },
    { item: "corn kernels (fresh, frozen, or canned)", qty: "1 1/2 cups", cost: 0.7 },
    { item: "shelled beans or limas", qty: "1 1/2 cups", cost: 1.0 },
    { item: "okra, sliced", qty: "1 cup", cost: 0.6 },
    { item: "potatoes, peeled and diced", qty: "1 lb", cost: 0.7 },
    { item: "onion, diced", qty: "1", cost: 0.3 },
    { item: "salt pork or bacon ends, diced", qty: "2 oz", cost: 0.6 },
    { item: "salt, black pepper", qty: "to taste", cost: 0.1, spansWeeks: true },
  ],
  method: [
    "Render the diced salt pork in the bottom of a soup pot, then cook the onion soft in the fat. This is the savory floor the whole pot is built on.",
    "Tip in the tomatoes with their juice, the beans, and water or stock to cover by a couple of inches. Simmer 30–40 minutes until the beans are nearly tender — they take the longest, so they go in first.",
    "Add the diced potatoes and cook 15 minutes more, until they start to soften and lend their starch to thicken the broth.",
    "Stir in the corn and okra and simmer a final 10–15 minutes, until the okra is tender and has thickened the soup. Season with salt and a hard grind of pepper.",
    "Serve in deep bowls with cornbread baked while the soup simmers — the canned 'soup mix' trio of tomato, corn, and okra is the heart of it, the potato is what makes it stretch to feed everybody.",
  ],
  modernMove:
    "Okra is the secret thickener: its natural body binds the broth into something hearty without a roux or any flour, the way mountain cooks got a thick soup from nothing but the garden and a little sidemeat.",
  notes:
    "Born of canning season — tomatoes, corn, and okra all come in together, so they got put up together in the same jar. A handful of ground beef or a soup bone makes it richer when one was on hand.",
  zeroWasteHero: true,
  tags: ["appalachian", "garden", "soup", "canning", "one-pot"],
  sources: [
    {
      title: "Canning Granny — Canning Mama's Vegetable Soup (Tomatoes, Corn and Okra)",
      url: "http://canninggranny.blogspot.com/2012/08/canning-mamas-vegetable-soup-aka.html",
      note: "Garden 'soup mix' of tomato, corn, and okra canned together, then stretched with potatoes",
    },
  ],
};
