import type { Recipe } from "../types";

export const dakos: Recipe = {
  slug: "dakos",
  title: "Dakos (Cretan Rusk Salad)",
  cuisine: "greek",
  blurb:
    "A hard barley rusk softened with grated tomato and olive oil, then crowned with feta and oregano — Crete's edible answer to stale bread.",
  servings: 2,
  perServing: { calories: 470, protein: 14 },
  estCostPerServing: 1.2,
  roles: ["dinner", "lunch"],
  ingredients: [
    {
      item: "barley rusks / paximadia (or twice-baked stale bread)",
      qty: "2 large",
      cost: 0.8,
    },
    { item: "very ripe tomatoes, grated", qty: "2", cost: 0.6 },
    { item: "feta, crumbled or in a slab", qty: "3 oz", cost: 1.0 },
    {
      item: "good olive oil",
      qty: "3 tbsp",
      cost: 0.55,
      spansWeeks: true,
    },
    {
      item: "dried oregano, salt, black pepper",
      qty: "to taste",
      spansWeeks: true,
    },
    {
      item: "olives, capers, or a few rings of red onion (optional)",
      qty: "to finish",
      cost: 0.4,
      spansWeeks: true,
    },
  ],
  method: [
    "Pass the rusks very briefly under running water (or sprinkle a spoon of water over each) just to take the edge off the rock-hardness — they should soften but not go soggy.",
    "Grate the tomatoes on the coarse side of a box grater down to the skin, and pile the pulp and juice over the rusks. Season the tomato with salt so it weeps.",
    "Pour over the olive oil and let the rusks drink the tomato juice and oil for 5–10 minutes until tender through.",
    "Top with crumbled feta, a heavy pinch of oregano, black pepper, and olives if using. A final thread of oil and serve — no fork-tenderness, just rustic softness.",
  ],
  modernMove:
    "Salt the grated tomato first so it releases its juice, then let it and the oil soak the rusk from the inside — the dryness of the bread is the engine, not a flaw to hide.",
  notes:
    "Born to rescue paximadia, the twice-baked barley rusks shepherds carried because they never spoiled. The whole dish exists to revive something that would otherwise be inedibly hard — the purest cucina-povera move there is.",
  zeroWasteHero: true,
  tags: ["bread", "rusk", "paximadi", "tomato", "feta", "salad", "no-cook"],
  sources: [
    {
      title: "My Greek Dish — Traditional Cretan Ntakos / Dakos",
      url: "https://www.mygreekdish.com/recipe/ntakos-rusks-with-tomatoes-and-feta-cheese/",
      note: "Confirms barley rusks moistened with water and oil, topped with grated tomato and crumbled feta/myzithra.",
    },
    {
      title: "Diane Kochilas — The Glorious Foods of Greece",
      note: "Cretan dakos as a traditional barley-rusk meze.",
    },
  ],
};
