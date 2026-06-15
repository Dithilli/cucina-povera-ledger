import type { Recipe } from "../types";

export const biryaniEa: Recipe = {
  slug: "biryani-ea",
  title: "Biryani",
  cuisine: "east-african",
  blurb:
    "The Swahili-coast biriani — a saucy, yogurt-rich beef masala dark with fried onions, layered with parboiled basmati streaked saffron-gold, then steamed together so the rice drinks up the gravy.",
  servings: 4,
  perServing: { calories: 660, protein: 26 },
  estCostPerServing: 2.0,
  roles: ["dinner"],
  ingredients: [
    { item: "stewing beef, cubed", qty: "3/4 lb", cost: 3.2 },
    { item: "basmati rice", qty: "2 cups", cost: 0.9 },
    { item: "onions, sliced thin (for frying)", qty: "3 medium", cost: 0.75 },
    { item: "tomatoes, blended + 1 tbsp tomato paste", qty: "2 medium", cost: 0.5 },
    { item: "plain yogurt", qty: "1/2 cup", cost: 0.4 },
    { item: "garlic + ginger paste", qty: "1 tbsp each", cost: 0.2, spansWeeks: true },
    { item: "biryani spice (cumin, cinnamon, clove, cardamom, pepper)", qty: "2 tbsp", cost: 0.3, spansWeeks: true },
    { item: "potatoes, quartered", qty: "2 small", cost: 0.3 },
    { item: "turmeric + pinch saffron", qty: "1 tsp / pinch", cost: 0.2, spansWeeks: true },
    { item: "cooking oil + dhania", qty: "3 tbsp / handful", cost: 0.2, spansWeeks: true },
  ],
  method: [
    "Fry the sliced onions until deep golden and crisp; drain on paper and reserve, keeping a little of the oil in the pot.",
    "Brown the beef in that oil, then add garlic, ginger, biryani spice, blended tomatoes, and paste; stir in the yogurt off the boil and most of the fried onions, and simmer until the meat is tender and the masala is thick and saucy.",
    "Add the potatoes (soaked in turmeric water) and cook until soft.",
    "Separately, parboil the rinsed basmati in salted water until just tender, drain, then streak parts of it with saffron-turmeric water for color.",
    "Layer rice and meat masala in the pot, scatter remaining fried onions and dhania, cover tight, and steam (dum) on low 15–20 minutes until the rice drinks up the gravy.",
  ],
  modernMove:
    "Cook the masala and rice separately and marry them only at the end — that two-part method is what gives biriani its distinct saucy meat and clean, layered grains, versus pilau where everything cooks as one.",
  notes:
    "A festive coastal dish of Arab-Indian heritage; the yogurt and a hill of fried onions do the heavy flavor lifting, so a small amount of beef carries a generous pot.",
  zeroWasteHero: false,
  tags: ["rice", "beef", "biryani", "swahili", "dinner", "east-african"],
  sources: [
    {
      title: "Diverse Dishes — Kenyan Biriani ya Kuku (Swahili biryani method)",
      url: "https://divdishes.com/chicken-biryani-recipe-biriani-ya-kuku-kenyan-biriani/",
      note: "Two-part Swahili biriani: a yogurt-and-fried-onion meat masala layered and steamed with separately parboiled saffron rice.",
    },
  ],
};
