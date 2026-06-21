import type { Recipe } from "../types";

export const spanakopita: Recipe = {
  slug: "spanakopita",
  title: "Spanakopita (Spinach & Feta Pie)",
  cuisine: "greek",
  blurb:
    "Spinach, herbs, and salty feta folded into shatter-crisp phyllo brushed with olive oil — the green pie that eats as dinner, lunch, or anytime in between.",
  servings: 6,
  perServing: { calories: 460, protein: 16 },
  estCostPerServing: 1.72,
  roles: ["dinner", "lunch"],
  ingredients: [
    { item: "spinach (or spinach + chard), chopped", qty: "2 lb", cost: 3.0 },
    { item: "feta, crumbled", qty: "8 oz", cost: 3.0 },
    { item: "phyllo pastry", qty: "1 lb / 1 pack", cost: 2.5 },
    { item: "onion & spring onions, chopped", qty: "1 + 4", cost: 0.8 },
    {
      item: "fresh dill (and a little parsley), chopped",
      qty: "1 big handful",
      cost: 0.5,
    },
    { item: "eggs", qty: "2", cost: 0.5 },
    {
      item: "olive oil, for the filling and brushing the phyllo",
      qty: "1/2 cup",
      cost: 0.8,
      spansWeeks: true,
    },
    { item: "salt, black pepper, grated nutmeg", qty: "to taste" },
  ],
  method: [
    "Wilt the spinach (in batches, no extra water), then drain and squeeze it bone-dry — wet filling makes soggy phyllo. Soften the onions and spring onions in a little oil.",
    "Mix the squeezed greens with the onions, dill, crumbled feta, beaten eggs, pepper, nutmeg, and only a little salt (the feta is salty already).",
    "Brush a baking tray with olive oil. Lay half the phyllo sheets in, brushing each with oil, letting them overhang. Spread the filling, then layer the rest of the phyllo on top, oiling each sheet, and tuck the edges in to seal.",
    "Score the top into portions, brush with oil, and bake at 180°C / 350°F for 45–50 minutes until deep golden and crisp all through. Rest 15 minutes before cutting so it sets — serve warm or at room temperature.",
  ],
  modernMove:
    "Squeezing every drop of water out of the cooked spinach is the whole game — dry filling lets the olive-oiled phyllo turn glassy and shattering instead of steaming itself limp.",
  notes:
    "Keep unused phyllo under a damp towel so it doesn't crack. Made with chard or wild greens it becomes hortopita; either way it's frugal, travels well, and reheats crisp.",
  tags: ["spinach", "feta", "phyllo", "pita", "pie"],
  sources: [
    {
      title: "My Greek Dish — Authentic Greek Spinach Pie (Spanakopita)",
      url: "https://www.mygreekdish.com/recipe/traditional-greek-spinach-pie-spanakopita-recipe-with-homemade-phyllo/",
      note: "Confirms a spinach-feta-herb filling layered in phyllo and baked until crisp.",
    },
  ],
};
