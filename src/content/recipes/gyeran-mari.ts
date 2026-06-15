import type { Recipe } from "../types";

export const gyeranMari: Recipe = {
  slug: "gyeran-mari",
  title: "Gyeran-mari",
  cuisine: "korean",
  blurb:
    "A rolled egg omelette, layered around itself in thin sheets and sliced into pinwheels — the cheap, gentle banchan that turns three or four eggs and a handful of scraps into a whole side or a quiet dinner.",
  servings: 4,
  perServing: { calories: 470, protein: 18 },
  estCostPerServing: 0.85,
  roles: ["dinner", "side"],
  ingredients: [
    { item: "eggs", qty: "6", cost: 2.1 },
    {
      item: "carrot, very finely diced",
      qty: "1/4 cup",
      cost: 0.2,
    },
    {
      item: "scallion, finely sliced",
      qty: "2",
      cost: 0.2,
      spansWeeks: true,
    },
    {
      item: "a few squares of toasted seaweed (gim), or a little diced kimchi",
      qty: "1-2 sheets",
      cost: 0.3,
      spansWeeks: true,
    },
    { item: "salt", qty: "1/4 tsp", cost: 0.02, spansWeeks: true },
    {
      item: "neutral oil for the pan",
      qty: "1 tbsp",
      cost: 0.12,
      spansWeeks: true,
    },
    { item: "steamed short-grain rice, to serve", qty: "for 4", cost: 0.7 },
  ],
  method: [
    "Beat the eggs well with the salt until completely uniform — no streaks of white — then strain through a sieve for the smoothest, most even sheets. Stir in the carrot and scallion.",
    "Warm a film of oil in a small non-stick or well-seasoned pan over low-medium heat; wipe out the excess with a paper towel so the surface is barely greased.",
    "Pour in a thin layer of egg, just enough to coat the pan, and tilt to spread. As it sets but is still glossy on top, lay a strip of seaweed across one end, then roll the sheet toward the far side into a tight log, keeping it to one side of the pan.",
    "Pour another thin layer of egg into the empty part of the pan, lifting the existing roll so the new egg flows underneath and bonds. Let it set, then roll again onto the growing log. Repeat until all the egg is used — each layer wraps the last.",
    "Slide the finished roll onto a board, rest a minute so it firms, then slice into thick pinwheels. Serve warm or at room temperature with rice; it is just as good packed cold the next day.",
  ],
  modernMove:
    "Straining the beaten egg and keeping the heat low is what gives gyeran-mari its silky, layered cross-section instead of a rubbery scramble — patience and thin layers, not high heat, build the roll.",
  notes:
    "The classic clear-out dish: whatever odd vegetable, leftover rice, or sour kimchi is in the fridge gets finely chopped and rolled into the egg. Almost any banchan scrap can disappear into the layers.",
  tags: ["egg", "banchan", "rolled-omelette", "make-ahead", "vegetarian"],
};
