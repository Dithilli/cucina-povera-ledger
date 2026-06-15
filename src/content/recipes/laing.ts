import type { Recipe } from "../types";

export const laing: Recipe = {
  slug: "laing",
  title: "Laing",
  cuisine: "filipino",
  blurb:
    "Dried taro leaves melted into coconut cream until silky and almost black — a Bicolano dish where a fistful of cheap dried greens, chili, and santan makes a whole rich dinner.",
  servings: 4,
  perServing: { calories: 470, protein: 9 },
  estCostPerServing: 1.1,
  roles: ["dinner", "side"],
  ingredients: [
    { item: "dried taro leaves (dahon ng gabi)", qty: "2 oz", cost: 1.0 },
    { item: "coconut milk", qty: "2 cups", cost: 1.2 },
    { item: "coconut cream (the thick first press, to finish)", qty: "1/2 cup", cost: 0.5 },
    { item: "bagoong alamang (fermented shrimp paste)", qty: "2 tbsp", cost: 0.4, spansWeeks: true },
    { item: "pork belly bits or dried shrimp (optional, for depth)", qty: "2 oz", cost: 0.8 },
    { item: "garlic cloves, minced", qty: "5", cost: 0.25, spansWeeks: true },
    { item: "onion, sliced", qty: "1", cost: 0.3 },
    { item: "ginger, julienned", qty: "1 thumb", cost: 0.2, spansWeeks: true },
    { item: "Thai chilies (siling labuyo), to taste", qty: "4", cost: 0.3, spansWeeks: true },
    { item: "salt, steamed rice to serve", qty: "to serve", cost: 0.4 },
  ],
  method: [
    "In a pot, combine the dried taro leaves, the thinner coconut milk, garlic, onion, ginger, and bagoong (and pork or dried shrimp if using).",
    "Bring to a simmer and then DO NOT STIR — boiling the taro leaves undisturbed in the coconut milk is what cooks out the calcium-oxalate itch; stirring early traps it and leaves the dish scratchy in the throat.",
    "Simmer gently 30–40 minutes, only nudging occasionally near the end, until the leaves collapse into a soft, dark mass and the coconut milk reduces and starts to oil out.",
    "Stir in the thick coconut cream and the chilies and cook a few more minutes until glossy and the sauce clings; season with salt to taste against the salty bagoong.",
    "Serve over hot rice. It deepens overnight, so leftovers are better than the first night.",
  ],
  modernMove:
    "The cook's law of laing is to leave it alone — letting the dried taro leaves boil unstirred in coconut milk is the technique that destroys the oxalate itch, and finishing with thick coconut cream gives the silky, oiled-out richness that makes this peasant green taste luxurious.",
  notes:
    "Use only DRIED taro leaves, never fresh, unless you're certain of the variety — fresh gabi leaves of the wrong type can be intensely irritating raw.",
  tags: ["coconut", "taro-leaves", "bicolano", "bagoong", "vegetables", "rice"],
  sources: [
    { title: "Lalaine Manalo — Kawaling Pinoy", url: "https://www.kawalingpinoy.com/laing/", note: "Cooking dried taro leaves in coconut milk without stirring to kill the oxalate itch" },
    { title: "Vanjo Merano — Panlasang Pinoy", url: "https://panlasangpinoy.com/laing-recipe/", note: "Bicolano dried-taro-leaf dish finished with thick coconut cream and chili" },
  ],
};
