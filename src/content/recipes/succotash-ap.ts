import type { Recipe } from "../types";

export const succotashAp: Recipe = {
  slug: "succotash-ap",
  title: "Succotash",
  cuisine: "appalachian",
  blurb:
    "Fresh-cut corn and shelled October beans stewed soft with a knob of butter and a little salt-cured sidemeat — a late-summer skillet that turns two rows of the garden into supper.",
  servings: 4,
  perServing: { calories: 440, protein: 16 },
  estCostPerServing: 1.1,
  roles: ["dinner"],
  ingredients: [
    { item: "fresh corn kernels, cut from the cob", qty: "2 cups (about 4 ears)", cost: 1.0 },
    { item: "shelly or October beans (or limas), shelled", qty: "2 cups", cost: 1.2 },
    { item: "salt pork or sidemeat, diced", qty: "2 oz", cost: 0.7 },
    { item: "onion, diced", qty: "1 small", cost: 0.25 },
    { item: "butter", qty: "2 tbsp", cost: 0.3, spansWeeks: true },
    { item: "salt and black pepper", qty: "to taste", cost: 0.1, spansWeeks: true },
  ],
  method: [
    "Render the diced sidemeat in a skillet over medium heat until the fat melts out and the bits crisp — that rendered grease is the seasoning the whole dish leans on.",
    "Add the onion and cook soft in the pork fat. Tip in the shelled beans with water just to cover and simmer gently 25–35 minutes until they're tender (October beans take longer than limas).",
    "Stir in the cut corn and cook another 8–10 minutes, until the corn is sweet and the liquid has cooked down to a glossy coat.",
    "Finish with the butter swirled through, then salt and plenty of black pepper. Serve hot with a wedge of cornbread to sop the pot likker.",
  ],
  modernMove:
    "Cutting the corn straight from the cob and then scraping the cobs for their milky 'scrapings' into the pot pulls out a natural sweetness and body no canned corn can match.",
  notes:
    "When the green beans went tough and stringy in the late-summer heat, mountain cooks shelled them out like butter beans — those 'shelly beans' are the classic succotash legume here. Add a chopped tomato for a redder, juicier version.",
  zeroWasteHero: false,
  tags: ["skillet", "appalachian", "garden", "corn", "beans"],
  sources: [
    {
      title: "Nik Snacks — Traditional Southern Succotash (Butter Beans & Corn)",
      url: "https://www.niksnacksonline.com/2013/08/southernsuccotash.html",
      note: "Corn and shelled beans cooked with side meat and butter; shelly-bean fall variation",
    },
  ],
};
