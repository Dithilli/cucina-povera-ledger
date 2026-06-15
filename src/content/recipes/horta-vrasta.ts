import type { Recipe } from "../types";

export const hortaVrasta: Recipe = {
  slug: "horta-vrasta",
  title: "Horta Vrasta (Boiled Greens)",
  cuisine: "greek",
  blurb:
    "Wild or leafy greens boiled just-tender and dressed warm with grassy olive oil and a flood of lemon — the simplest, most Greek plate there is.",
  servings: 4,
  perServing: { calories: 230, protein: 7 },
  estCostPerServing: 0.85,
  roles: ["dinner", "side"],
  ingredients: [
    {
      item: "leafy greens (dandelion, chard, amaranth, beet tops, or a mix)",
      qty: "2 lb",
      cost: 2.4,
    },
    {
      item: "good olive oil, to dress generously",
      qty: "1/4 cup",
      cost: 0.4,
      spansWeeks: true,
    },
    { item: "lemons", qty: "2", cost: 0.6 },
    { item: "salt, flaky if you have it", qty: "to taste" },
  ],
  method: [
    "Trim the greens, discarding only the toughest stems, and wash in several changes of water — wild horta carries grit.",
    "Bring a big pot of salted water to a rolling boil. Add the tougher stems first, then the leaves, and boil uncovered until tender — a few minutes for chard, longer for dandelion.",
    "Drain well but don't squeeze them bone-dry; a little of the cooking water clinging to the leaves carries the dressing. Save the cooking liquid (horttozoumo) to drink warm with lemon — it's prized.",
    "Pile onto a plate while still warm, salt, and drench with olive oil and lemon juice. Eat warm or at room temperature, with bread to mop the dressing.",
  ],
  modernMove:
    "Dress the greens while they're still warm so they drink up the oil and lemon — cold horta just sits on top of its dressing instead of soaking it in.",
  notes:
    "Use whatever bitter or mild greens are cheapest and freshest; this is foraging food, endlessly variable. The pot liquor is traditionally sipped, not poured away.",
  zeroWasteHero: true,
  tags: ["greens", "horta", "lemon", "side", "lenten"],
};
