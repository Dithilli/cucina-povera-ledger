import type { Recipe } from "../types";

export const beefHoFun: Recipe = {
  slug: "beef-ho-fun",
  title: "Beef Chow Ho Fun",
  cuisine: "cantonese",
  blurb:
    "Wide, slippery rice noodles seared in a blazing wok with velveted beef, onion and scallion until they char at the edges and carry that smoky breath-of-the-wok — gon chow ngau ho, the dish every Cantonese cook is secretly judged by.",
  servings: 4,
  perServing: { calories: 560, protein: 24 },
  estCostPerServing: 2.0,
  roles: ["dinner"],
  ingredients: [
    { item: "fresh wide rice noodles (ho fun)", qty: "1 lb", cost: 1.6 },
    { item: "flank or skirt steak, sliced thin against the grain", qty: "8 oz", cost: 2.6 },
    { item: "mung bean sprouts", qty: "2 cups", cost: 0.6 },
    { item: "scallions, cut in 2-inch lengths", qty: "4", cost: 0.3 },
    { item: "onion, sliced", qty: "1/2", cost: 0.2 },
    { item: "cornstarch, soy, oil, baking soda (beef marinade)", qty: "for marinade", cost: 0.2, spansWeeks: true },
    { item: "dark soy, light soy, sugar (sauce)", qty: "to season", cost: 0.2, spansWeeks: true },
    { item: "Shaoxing wine and sesame oil", qty: "1 tbsp + splash", cost: 0.2, spansWeeks: true },
    { item: "neutral oil, high smoke point", qty: "3 tbsp", cost: 0.2, spansWeeks: true },
  ],
  method: [
    "Velvet the beef: toss the thin slices with a pinch of baking soda, light soy, a teaspoon of cornstarch, and a little oil; rest 20 minutes for tenderness.",
    "Gently separate the fresh ho fun into strips by hand — if they're cold and stuck, microwave or steam briefly so they don't shatter when tossed.",
    "Get the wok smoking hot with oil, sear the beef in a single layer until just browned, and remove. This is where wok hei is built — high heat, fast hands.",
    "Add a touch more oil, the onion and scallion whites, then the noodles. Let them sit a few seconds to catch some char before tossing. Splash Shaoxing around the rim, then drizzle the dark and light soy and sugar over and fold gently so the noodles don't break.",
    "Return the beef, add bean sprouts and scallion greens, toss for 15–20 seconds until everything is hot and coated, finish with sesame oil, and serve at once.",
  ],
  modernMove:
    "Wok hei — the smoky sear — is the whole point: a screaming wok, oil to the smoke point, and noodles left still for a few seconds to catch char before you move them. A pinch of baking soda in the beef marinade velvets cheap flank into something silky.",
  notes:
    "A thrifty restaurant dish at home — a modest piece of cheap, well-sliced beef stretched across a pound of rice noodles feeds four. Toss with a wide spatula and a light hand; broken, mushy ho fun is the classic failure. Handle the noodles warm, never fridge-cold.",
  zeroWasteHero: false,
  tags: ["noodles", "ho-fun", "beef", "cantonese", "rice-noodles", "wok-hei"],
  sources: [
    {
      title: "The Woks of Life — Beef Chow Fun: The Traditional Cantonese Way!",
      url: "https://thewoksoflife.com/beef-chow-fun-noodles/",
      note: "Velveting thin flank, building wok hei over high heat, and folding warm ho fun gently with dark and light soy so the noodles stay whole.",
    },
  ],
};
