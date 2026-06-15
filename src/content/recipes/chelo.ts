import type { Recipe } from "../types";

export const chelo: Recipe = {
  slug: "chelo",
  title: "Chelo ba Tahdig",
  cuisine: "persian",
  blurb:
    "Persian steamed rice — par-boiled, then drained and steamed back to fluffy separate grains over a layer of fat that crisps into tahdig, the prized golden crust of the pot.",
  servings: 6,
  perServing: { calories: 360, protein: 6 },
  estCostPerServing: 0.45,
  roles: ["base", "side"],
  ingredients: [
    { item: "long-grain basmati rice", qty: "3 cups", cost: 1.5 },
    { item: "salt (for the soak and the par-boil)", qty: "3 tbsp", cost: 0.05, spansWeeks: true },
    { item: "neutral oil or melted butter", qty: "1/4 cup", cost: 0.4, spansWeeks: true },
    { item: "plain yogurt (for a yogurt tahdig, optional)", qty: "2 tbsp", cost: 0.15 },
    { item: "saffron, bloomed in 2 tbsp hot water", qty: "large pinch", cost: 0.4, spansWeeks: true },
  ],
  method: [
    "Rinse the rice in several changes of cool water until it runs clear, then soak it in salted water for at least 30 minutes (an hour or more is better) — this washes off surface starch so the grains steam separate, not gummy.",
    "Par-boil: bring a big pot of generously salted water to a hard boil. Drain the rice and tip it in. Boil uncovered 5 to 7 minutes, until the grains have softened on the outside but still have a firm core — taste one. Drain into a fine sieve and rinse briefly with lukewarm water.",
    "Build the tahdig: wipe the pot dry, return it to medium heat with the oil (and, for a yogurt crust, stir 2 tbsp rice into the yogurt with a little bloomed saffron and spread that across the bottom). Add the drained rice in a gentle mound so it doesn't pack down.",
    "Steam: poke a few holes down through the mound with the handle of a spoon to let steam escape, drizzle over a little oil and the rest of the saffron water. Wrap the lid in a clean towel, clamp it on, and cook 10 minutes on medium, then 35 to 45 minutes on low — listen for a faint crackle, that's the tahdig forming.",
    "To serve, set the hot pot base briefly in cold water to loosen the crust, then either spoon the fluffy rice onto a platter and lift the tahdig out in shards, or invert the whole pot like a cake to show the golden disc on top.",
  ],
  modernMove:
    "The par-boil-then-steam method (abkesh) is the entire secret: boiling the rice only partway and finishing it as steam rises through poked vent-holes gives each grain room to elongate and stay separate, while the fat trapped underneath slowly fries into tahdig.",
  notes:
    "Tahdig can be built from rice alone, from a yogurt-rice paste, or from a layer of thin flatbread or sliced potato laid in the oil first. Low and slow is what makes it golden, not burnt.",
  tags: ["base", "side", "rice", "tahdig", "saffron", "vegetarian"],
  sources: [
    { title: "Naz Deravian (Bottom of the Pot) — Chelo ba Tahdig", url: "https://bottomofthepot.com/rice-and-the-art-of-getting-to-the-bottom-of-the-pot-chelo-ba-tahdig/", note: "two-step parboil-then-steam abkesh method and tahdig formation" },
  ],
};
