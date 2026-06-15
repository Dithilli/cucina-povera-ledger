import type { Recipe } from "../types";

export const tzimmes: Recipe = {
  slug: "tzimmes",
  title: "Carrot Tzimmes",
  cuisine: "ashkenazi",
  blurb:
    "Carrots — often with sweet potato and prunes — braised slow with honey and a little oil until they glaze, slump, and turn candy-tender, the cooking liquid thickened to a clinging syrup. Sweetness laid on the table for a sweet year.",
  servings: 6,
  perServing: { calories: 400, protein: 9 },
  estCostPerServing: 0.5,
  roles: ["dinner", "side"],
  ingredients: [
    { item: "carrots, peeled and cut into thick coins", qty: "2 lb", cost: 1.2 },
    { item: "sweet potato, peeled and chunked", qty: "1 large", cost: 0.7 },
    { item: "pitted prunes", qty: "1 cup", cost: 0.8 },
    { item: "honey", qty: "1/4 cup", cost: 0.5, spansWeeks: true },
    { item: "neutral oil", qty: "2 tbsp", cost: 0.2, spansWeeks: true },
    { item: "cinnamon", qty: "1/2 tsp", cost: 0.1, spansWeeks: true },
    { item: "flour (to thicken)", qty: "1 tbsp", cost: 0.05, spansWeeks: true },
    { item: "salt", qty: "to taste", spansWeeks: true },
    { item: "juice of 1 orange or lemon, optional", qty: "1", cost: 0.3 },
  ],
  method: [
    "Put the carrots and sweet potato in a heavy pot with the oil, honey, cinnamon, a pinch of salt, and just enough water to come halfway up. Bring to a simmer.",
    "Cover and braise low and slow — stovetop or a 325°F oven — for about an hour, stirring once or twice, until the carrots are completely tender and beginning to glaze.",
    "Stir in the prunes (and the citrus juice if using) and cook uncovered another 20–30 minutes, letting the liquid reduce and the prunes plump and melt into the syrup.",
    "If the braise is still loose, sprinkle the flour over and stir; cook a few minutes until the liquid thickens to a clinging glaze that coats every coin. (Old-country cooks thickened with a little flour or a grated potato.)",
    "Taste — it should be sweet but not cloying, with the carrots' own sugar carrying most of it. Serve hot, glistening.",
  ],
  modernMove:
    "The thickened, reduced braising liquid is the difference between candied carrots and a true tzimmes: cook it down (or pull it together with a spoon of flour) until it's a glossy syrup that clings, rather than letting the sweetness drain off into a watery pool. A squeeze of orange or lemon at the end keeps all that honey from going one-note.",
  notes:
    "Pareve, so it's at home beside the brisket at Rosh Hashanah or on its own at a meatless meal — the honey and the upward slump of the carrots are the whole point: a sweet dish for a sweet new year.",
  tags: ["carrot", "sweet", "pareve", "rosh-hashanah"],
};
