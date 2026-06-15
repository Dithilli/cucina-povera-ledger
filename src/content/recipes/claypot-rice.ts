import type { Recipe } from "../types";

export const claypotRice: Recipe = {
  slug: "claypot-rice",
  title: "Claypot Rice",
  cuisine: "cantonese",
  blurb:
    "Jasmine rice cooked over a bare flame in a clay pot, crowned with marinated chicken and coins of lap cheong whose sweet fat renders down into the grains — and prized above all for the fan ziu, the lacquered, crackling crust scraped from the bottom.",
  servings: 4,
  perServing: { calories: 620, protein: 26 },
  estCostPerServing: 2.1,
  roles: ["dinner"],
  ingredients: [
    { item: "jasmine rice", qty: "1 1/2 cups", cost: 0.7 },
    { item: "boneless chicken thigh, sliced", qty: "12 oz", cost: 2.6 },
    { item: "lap cheong (Chinese sausage), sliced on the bias", qty: "2 links", cost: 1.4 },
    { item: "dried shiitake, soaked and sliced", qty: "4", cost: 0.6, spansWeeks: true },
    { item: "ginger, julienned", qty: "1-inch knob", cost: 0.1, spansWeeks: true },
    { item: "scallions, sliced", qty: "2", cost: 0.2 },
    { item: "oyster sauce", qty: "1 tbsp", cost: 0.15, spansWeeks: true },
    { item: "soy sauce", qty: "2 tbsp", cost: 0.1, spansWeeks: true },
    { item: "dark soy sauce", qty: "1 tsp", cost: 0.05, spansWeeks: true },
    { item: "Shaoxing wine", qty: "1 tbsp", cost: 0.15, spansWeeks: true },
    { item: "sugar", qty: "1 tsp", cost: 0.02, spansWeeks: true },
    { item: "lard or neutral oil", qty: "2 tbsp", cost: 0.15, spansWeeks: true },
  ],
  method: [
    "Marinate the sliced thigh with oyster sauce, half the soy, the Shaoxing, ginger, sugar, and a spoonful of the shiitake soaking water for at least 30 minutes.",
    "Rinse the rice until the water runs clear, soak 20 minutes, then drain. Put it in the clay pot with water to about 1/2 inch above the rice and a slick of lard. Bring to a boil uncovered, then cover and drop to low.",
    "When the surface dimples and steam holes appear (about 8 minutes), lay the marinated chicken, lap cheong, and shiitake over the top. Drizzle a little oil down the side of the pot, cover, and cook on low 10–12 minutes more.",
    "For the crust, turn the heat to medium-high for the last 2–3 minutes, rotating the pot over the flame so the bottom layer browns evenly without burning — listen for the faint crackle.",
    "Mix a finishing sauce of the remaining soy, the dark soy, and a little hot water. Pour it over, scatter scallions, cover for one minute off the heat, then toss everything up from the bottom so each grain catches the rendered sausage fat and crust.",
  ],
  modernMove:
    "Drizzling oil down the inside wall of the pot in the last minutes is the trick to the fan ziu — the crackly browned crust — without scorching; rotating the pot over the flame builds it evenly all the way around.",
  notes:
    "A wide, shallow clay pot gives more crust per person. No clay pot? A small heavy cast-iron Dutch oven gets you close. The rendered sausage fat is the whole point — don't drain it.",
  zeroWasteHero: false,
  tags: ["claypot", "rice", "chicken", "lap-cheong", "one-pot", "cantonese"],
  sources: [
    {
      title: "Maggie Zhu — Omnivore's Cookbook",
      url: "https://omnivorescookbook.com/claypot-rice/",
      note: "Clay pot method, marinated chicken + lap cheong, building the crispy rice crust",
    },
  ],
};
