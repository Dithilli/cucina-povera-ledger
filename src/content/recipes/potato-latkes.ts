import type { Recipe } from "../types";

export const potatoLatkes: Recipe = {
  slug: "potato-latkes",
  title: "Potato Latkes",
  cuisine: "ashkenazi",
  blurb:
    "Grated potato and onion wrung bone-dry, bound with egg and a whisper of matzo meal, and fried in oil until the edges go lacy and shattering-crisp. The Hanukkah pancake that turns a few cents of potato into a feast in oil — the oil itself the point of the miracle.",
  servings: 4,
  perServing: { calories: 480, protein: 12 },
  estCostPerServing: 0.7,
  roles: ["dinner"],
  ingredients: [
    { item: "russet potatoes", qty: "2 lb", cost: 1.4 },
    { item: "onion", qty: "1 medium", cost: 0.4 },
    { item: "eggs", qty: "2", cost: 0.5 },
    { item: "matzo meal", qty: "3 tbsp", cost: 0.3, spansWeeks: true },
    { item: "neutral oil, for frying", qty: "1/2 cup", cost: 0.6, spansWeeks: true },
    { item: "salt and pepper", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Peel the potatoes and grate them and the onion on the coarse side of a box grater (grating the onion in with the potato slows the potato from browning). A food processor works too.",
    "Pile the gratings into a clean towel and twist hard over the sink — squeeze out every drop of liquid you can. Let the drained liquid settle a minute, then pour off the water but scrape the white potato starch at the bottom back into the bowl.",
    "Mix the squeezed potato and onion with the eggs, matzo meal, a good amount of salt, and pepper. The dryer the mix, the crisper the latke.",
    "Heat 1/4 inch of oil in a heavy skillet over medium-high until a shred sizzles on contact. Drop in mounds and flatten thin with the back of a spoon.",
    "Fry 3–4 minutes a side until deep golden and crisp at the edges. Drain on a rack or paper, salt right away, and keep warm in a low oven while you fry the rest.",
  ],
  modernMove:
    "Wring the potato dry, then save the starch that settles out of the squeezed liquid and stir it back in — that reclaimed starch is the natural binder that makes the latke hold and crisp without going gummy. Fry in oil hot enough to sizzle on contact so they crisp before they soak.",
  notes:
    "Pareve as fried, so the table chooses: applesauce keeps it pareve, sour cream makes it dairy — but never both schmaltz and sour cream on the same plate. Use only oil here, never butter, to keep the recipe itself flexible.",
  tags: ["potato", "fried", "pareve", "hanukkah"],
  sources: [
    {
      title: "Wikipedia — Latke",
      url: "https://en.wikipedia.org/wiki/Latke",
      note: "Shredded-potato pancake fried in oil; the Hanukkah oil symbolism.",
    },
    {
      title: "Joan Nathan — Jewish Cooking in America",
      note: "Classic potato latke method and the reclaimed-starch binder.",
    },
  ],
};
