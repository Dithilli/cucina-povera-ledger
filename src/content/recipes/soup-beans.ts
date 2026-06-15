import type { Recipe } from "../types";

export const soupBeans: Recipe = {
  slug: "soup-beans",
  title: "Soup Beans",
  cuisine: "appalachian",
  blurb:
    "A pot of pinto beans slow-simmered down with a chunk of streaked sidemeat until the broth turns into a thick, smoky pot likker you mop with cornbread and bite of raw onion.",
  servings: 4,
  perServing: { calories: 460, protein: 22 },
  estCostPerServing: 0.85,
  roles: ["dinner"],
  ingredients: [
    { item: "dried pinto beans", qty: "1 lb", cost: 1.4 },
    { item: "salt pork or streaked sidemeat", qty: "4 oz chunk", cost: 1.2 },
    { item: "yellow onion", qty: "1, plus more raw to serve", cost: 0.4 },
    { item: "salt and black pepper", qty: "to taste", cost: 0.1, spansWeeks: true },
  ],
  method: [
    "Pick over the dried pintos for stones, rinse, and soak overnight (or quick-soak: boil 2 minutes, sit covered 1 hour).",
    "Drain, cover with fresh water by two inches, and drop in the chunk of streaked sidemeat to render its smoke and salt into the pot.",
    "Bring up to a boil, skim the foam, then drop to the barest simmer and cook uncovered 2 to 3 hours, topping up water only as needed.",
    "When the beans are creamy and the broth has gone thick and brown, mash a ladleful against the side to thicken the pot likker further; salt and pepper to taste.",
    "Serve in bowls with a wedge of cornbread to crumble in and a few slices of sharp raw onion alongside.",
  ],
  modernMove:
    "Mash a single ladle of cooked beans back into the pot — that released starch is what turns thin bean water into the glossy, spoon-coating pot likker that marks a real pot of soup beans.",
  notes:
    "Cook a big pot at the start of the week; soup beans only deepen by the second day and carry several suppers.",
  zeroWasteHero: true,
  tags: ["beans", "appalachian", "pork"],
  sources: [
    {
      title: "Appalachian Soup Beans Recipe and History — What's Cooking America",
      url: "https://whatscookingamerica.net/soup/appalachian-soupbeans.htm",
      note: "pinto beans slow-simmered with salt pork into thick pot likker, served with cornbread and raw onion",
    },
  ],
};
