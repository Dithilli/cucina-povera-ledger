import type { Recipe } from "../types";

export const holishkes: Recipe = {
  slug: "holishkes",
  title: "Holishkes (Sweet-and-Sour Stuffed Cabbage)",
  cuisine: "ashkenazi",
  blurb:
    "Blanched cabbage leaves rolled snug around seasoned beef and rice, braised low and long in a sweet-and-sour tomato sauce sharpened with sour salt and softened with raisins — the leaves going meltingly tender, the sauce thick and burnished.",
  servings: 6,
  perServing: { calories: 480, protein: 22 },
  estCostPerServing: 1.1,
  roles: ["dinner"],
  ingredients: [
    { item: "green cabbage, large head", qty: "1 (about 3 lb)", cost: 1.5 },
    { item: "ground beef", qty: "1 lb", cost: 4.0 },
    { item: "white rice, raw", qty: "1/2 cup", cost: 0.25 },
    { item: "onion, grated or finely chopped", qty: "1 large", cost: 0.5 },
    { item: "egg", qty: "1", cost: 0.25 },
    { item: "canned crushed tomatoes (or tomato paste loosened with water)", qty: "28 oz", cost: 1.2 },
    { item: "raisins", qty: "1/3 cup", cost: 0.3, spansWeeks: true },
    { item: "brown sugar", qty: "2–3 tbsp", cost: 0.1, spansWeeks: true },
    { item: "sour salt (citric acid) or juice of 1 lemon", qty: "1 tsp / 1 lemon", cost: 0.3 },
    { item: "schmaltz (rendered chicken fat) or neutral oil", qty: "1 tbsp", cost: 0.2, spansWeeks: true },
    { item: "salt and black pepper", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Core the cabbage and lower the whole head into a big pot of boiling water. As the outer leaves soften and go translucent — a minute or two each — peel them off with tongs and set aside to cool. Keep going until you have a dozen or more pliable leaves. Shave down the thick central rib of each so it rolls without cracking.",
    "Mix the raw beef with the raw rice, grated onion, egg, a good pinch of salt, and plenty of black pepper. The rice goes in raw — it cooks and swells inside the roll, drinking up the sauce.",
    "Lay a leaf rib-end toward you, set a fat spoonful of filling near the base, fold the sides in, and roll away from you into a tight parcel. Repeat. Line the bottom of a heavy pot with any torn or leftover leaves to guard against scorching.",
    "Stir the tomatoes with the raisins, brown sugar, sour salt (or lemon), the schmaltz, and a cup of water — taste for the sweet-and-sour balance, leaning a touch tart; it mellows as it cooks. Nestle the rolls seam-side down in the pot and pour the sauce over.",
    "Cover and braise very low — a bare simmer on the stovetop or 300°F in the oven — for 1 1/2 to 2 hours, until the leaves are silky and the filling is cooked through. Baste once or twice; the sauce should reduce to a thick, glossy coat. Taste and rebalance the sweet-sour at the end.",
  ],
  modernMove:
    "Sour salt — citric acid crystals — was the shtetl shortcut to that clean tartness, and a pinch holds the balance better than lemon under a long braise. Whichever you use, build the sweet-and-sour at the start, then taste and correct it once more at the end: the raisins and rice both leach sweetness as they cook, so the sauce drifts and wants pulling back toward sour.",
  notes:
    "For a pareve (or meatless) table, swap the beef for chopped sautéed mushrooms bound with extra rice and a little cooked barley — the sweet-sour sauce carries it. As fleishig, holishkes use schmaltz, never butter: keep dairy off this plate entirely.",
  tags: ["cabbage", "stuffed", "sweet-sour", "fleishig"],
  sources: [
    {
      title: "Wikipedia — Holishkes",
      url: "https://en.wikipedia.org/wiki/Holishkes",
      note: "Cabbage rolls of Eastern European Jewish cuisine, simmered in sweet-sour tomato sauce.",
    },
    {
      title: "Gil Marks — Encyclopedia of Jewish Food",
      note: "Stuffed cabbage and the sour-salt (citric acid) sweet-and-sour balance.",
    },
  ],
};
