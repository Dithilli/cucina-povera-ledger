import type { Recipe } from "../types";

export const moquecaDePeixe: Recipe = {
  slug: "moqueca-de-peixe",
  title: "Moqueca de Peixe",
  cuisine: "brazilian",
  blurb:
    "Bahia's coconut fish stew, where firm white fish poaches gently in a brick-red bath of tomato, peppers, coconut milk, and dendê palm oil — no browning, no stirring, just layered aromatics steaming the fish to silk.",
  servings: 2,
  perServing: { calories: 520, protein: 30 },
  estCostPerServing: 2.1,
  roles: ["dinner"],
  ingredients: [
    { item: "firm white fish fillet (cod, tilapia, hake)", qty: "10 oz", cost: 2.4 },
    { item: "coconut milk", qty: "3/4 cup", cost: 0.6 },
    { item: "dendê (red palm) oil", qty: "1 1/2 tbsp", cost: 0.4, spansWeeks: true },
    { item: "tomatoes, sliced", qty: "2", cost: 0.5 },
    { item: "bell pepper, sliced", qty: "1", cost: 0.4 },
    { item: "onion, sliced in rings", qty: "1", cost: 0.25 },
    { item: "garlic cloves, minced", qty: "3", cost: 0.1, spansWeeks: true },
    { item: "lime", qty: "1", cost: 0.25 },
    { item: "cilantro, chopped", qty: "1/4 cup", cost: 0.2 },
    { item: "salt and pepper", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Season the fish with salt, pepper, garlic, and a squeeze of lime and let it sit while you build the pot.",
    "Layer the bottom of a wide pot with onion rings, then pepper and tomato slices; lay the fish on top and cover with another layer of vegetables.",
    "Pour the coconut milk and dendê oil evenly over the top — do not stir — and bring to a gentle simmer.",
    "Cover and cook 12–15 minutes, basting once with the pan liquid, until the fish flakes and the broth runs orange and fragrant.",
    "Scatter with cilantro and serve in the pot over white rice, with the bright broth spooned across.",
  ],
  modernMove:
    "Build the moqueca in layers and never stir — the fish stays in whole flakes and the dendê and coconut emulsify into the broth simply from the steam rising through the vegetables.",
  notes:
    "Dendê (red palm oil) is the soul of the Baiana version — it gives the colour and that distinct flavour. A pinch of paprika in oil approximates it if you can't find dendê.",
  tags: ["fish", "coconut", "dende", "bahia", "brazilian"],
  sources: [
    {
      title: "Olivia's Cuisine — Moqueca Baiana (Brazilian Fish Stew)",
      url: "https://www.oliviascuisine.com/moqueca-baiana-brazilian-fish-stew/",
      note: "layering vegetables and fish, coconut milk and dendê poured over without stirring, gentle covered simmer",
    },
  ],
};
