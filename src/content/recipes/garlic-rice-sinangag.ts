import type { Recipe } from "../types";

export const garlicRiceSinangag: Recipe = {
  slug: "garlic-rice-sinangag",
  title: "Sinangag (Garlic Fried Rice)",
  cuisine: "filipino",
  blurb:
    "Day-old rice fried hard in a slick of garlicky oil until each grain is toasted and separate — the 'si' in every silog breakfast and the thrifty afterlife of last night's kanin.",
  servings: 4,
  perServing: { calories: 320, protein: 6 },
  estCostPerServing: 0.32,
  roles: ["base", "side"],
  ingredients: [
    { item: "cooked day-old rice, cold and broken up", qty: "5 cups", cost: 0.65 },
    { item: "garlic cloves, finely chopped", qty: "1 whole head", cost: 0.4, spansWeeks: true },
    { item: "neutral oil", qty: "3 tbsp", cost: 0.2, spansWeeks: true },
    { item: "salt", qty: "to taste" },
    { item: "spring onion, sliced (optional)", qty: "2 stalks", cost: 0.2 },
  ],
  method: [
    "Use cold day-old rice and rake it apart with wet hands first — a night in the fridge dries the grains so they fry separate and chewy instead of steaming to mush.",
    "Fry half the garlic gently in the oil over medium heat until pale gold and crisp, then scoop it out onto a plate to reserve as a topping. Don't let it scorch or it turns bitter.",
    "Drop the remaining raw garlic into the hot garlic oil and let it sizzle just until fragrant, 20 seconds.",
    "Crank the heat, add the rice, and press it flat against the pan, then toss — repeating — so every grain catches the oil and toasts. Season with salt as you go.",
    "When the rice is hot through, lightly browned, and smells nutty, fold in most of the crisp garlic. Plate and shower with the reserved fried garlic and spring onion.",
  ],
  modernMove:
    "Frying the garlic in two stages — crisped-and-reserved, then fresh-into-the-oil — gives you both a perfumed garlic oil to coat the rice and a crunchy golden topping, double the garlic flavor from one head.",
  zeroWasteHero: true,
  notes:
    "The backbone of silog plates: sinangag + itlog (fried egg) + a cured meat like tapa (tapsilog), longganisa (longsilog), or tuyo. On its own it rescues any amount of leftover rice.",
  tags: ["fried-rice", "leftover-rice", "garlic", "silog", "one-pan", "zero-waste", "base", "side"],
  sources: [
    { title: "Vanjo Merano — Panlasang Pinoy", url: "https://panlasangpinoy.com/sinangag-recipe/", note: "Cold day-old rice fried in garlic oil; the base of every silog" },
    { title: "Lalaine Manalo — Kawaling Pinoy", url: "https://www.kawalingpinoy.com/sinangag/", note: "Frying garlic to crisp it, then tossing the rice in the garlic oil" },
  ],
};
