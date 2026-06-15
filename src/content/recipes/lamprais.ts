import type { Recipe } from "../types";

export const lamprais: Recipe = {
  slug: "lamprais",
  title: "Lamprais",
  cuisine: "sri-lankan",
  blurb:
    "Stock-cooked rice, a three-meat curry, two crisp frikkadels, brinjal moju and seeni sambol bundled in a banana leaf and baked until the leaf perfumes everything — the Dutch-Burgher feast in one parcel.",
  servings: 4,
  perServing: { calories: 690, protein: 30 },
  estCostPerServing: 2.1,
  roles: ["dinner"],
  ingredients: [
    { item: "rice, cooked in meat stock", qty: "2 cups", cost: 1.1 },
    { item: "mixed chicken, pork & beef, cut small", qty: "12 oz", cost: 3.2 },
    { item: "beef mince for frikkadels", qty: "5 oz", cost: 1.2 },
    { item: "onions", qty: "2", cost: 0.6 },
    { item: "brinjal (eggplant)", qty: "1 small", cost: 0.6 },
    { item: "Maldive fish, ground", qty: "2 tbsp", cost: 0.4, spansWeeks: true },
    { item: "roasted curry powder (thuna paha)", qty: "2 tbsp", cost: 0.2, spansWeeks: true },
    { item: "thick coconut milk", qty: "1 cup", cost: 0.7 },
    { item: "rampe, curry leaves, cinnamon", qty: "1 set", cost: 0.15, spansWeeks: true },
    { item: "banana leaves", qty: "4 squares", cost: 0.5 },
    { item: "coconut oil, breadcrumb, egg, salt", qty: "for frying", cost: 0.4, spansWeeks: true },
  ],
  method: [
    "Make the mixed-meat curry: brown the cut meats with onion, rampe, curry leaves, cinnamon and roasted curry powder, then simmer in coconut milk until thick. Cook the rice in the strained, savoury stock so the grains carry the curry's flavour.",
    "Roll the mince with onion and spice into small balls, dip in egg and breadcrumb, and fry the frikkadels crisp. Fry the brinjal for a sweet-sour moju and caramelise sliced onion with Maldive fish into seeni sambol.",
    "Warm a banana-leaf square over the flame until supple. Mound the stock rice in the centre, then nestle the meat curry, two frikkadels, a spoon of moju and a spoon of seeni sambol around it.",
    "Fold the leaf into a sealed parcel, tuck the ends under, and bake at 350°F for 15 minutes so the leaf steams its grassy aroma into the rice. Open at the table.",
  ],
  modernMove:
    "Cooking the rice in the meat's own strained stock — not water — is the whole trick: the grains drink the curry before the parcel ever sees the oven, so every forkful tastes seasoned from the inside.",
  notes:
    "Traditionally a palm-sized parcel; the frikkadels are the lone European survivor of the Dutch lemper this dish descends from.",
  tags: ["sri-lankan", "rice", "banana-leaf", "burgher", "feast"],
  sources: [
    {
      title: "Whetstone Magazine — In Sri Lanka, Lamprais Keeps the Dutch Burgher Legacy Alive",
      url: "https://www.whetstonemagazine.com/journal/in-sri-lanka-lamprais-keeps-the-dutch-burgher-legacy-alive",
      note: "Components (stock-cooked rice, mixed-meat curry, frikkadels, brinjal moju, seeni sambol) and the banana-leaf bake; Dutch lemper origin",
    },
  ],
};
