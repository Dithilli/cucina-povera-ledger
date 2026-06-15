import type { Recipe } from "../types";

export const bunDauMamTom: Recipe = {
  slug: "bun-dau-mam-tom",
  title: "Bún Đậu Mắm Tôm",
  cuisine: "vietnamese",
  blurb:
    "A Hanoi street platter — cool rice-vermicelli, golden fried tofu, and a pile of fresh herbs, all dragged through whipped fermented shrimp paste. Almost no meat, maximum punch, built around a 30-cent block of tofu.",
  servings: 4,
  perServing: { calories: 560, protein: 22 },
  estCostPerServing: 0.95,
  roles: ["dinner"],
  ingredients: [
    { item: "firm tofu, in thick slabs", qty: "14 oz block", cost: 1.2 },
    { item: "dried rice vermicelli (bún)", qty: "8 oz", cost: 0.9, spansWeeks: true },
    { item: "fermented shrimp paste (mắm tôm)", qty: "3 tbsp", cost: 0.4, spansWeeks: true },
    { item: "lime", qty: "1", cost: 0.2 },
    { item: "sugar", qty: "1 tbsp", cost: 0.05, spansWeeks: true },
    { item: "mixed herbs — perilla, mint, cilantro, Thai basil", qty: "2 big handfuls", cost: 1.2 },
    { item: "cucumber, sliced", qty: "1", cost: 0.4 },
    { item: "bird's-eye chili, sliced", qty: "1–2", cost: 0.2 },
    { item: "neutral oil, for shallow-frying", qty: "1/2 cup", cost: 0.4, spansWeeks: true },
  ],
  method: [
    "Press the tofu dry and cut into thick fingers. Shallow-fry in hot oil, turning, until deep gold and crisp on every side; drain on paper. They should be crunchy outside, custardy within.",
    "Cook the vermicelli until just tender, rinse under cold water, drain hard, and let it dry into loose nests — it's served at room temperature, not hot.",
    "Whip the mắm tôm with the lime juice, sugar, a splash of hot oil from the pan, and chili. Beat it until it turns pale and frothy — the foam is what tames the funk and wakes up the aroma.",
    "Wash and dry the herbs and arrange everything on a board or platter: noodle nests, hot fried tofu, the heap of herbs, cucumber, and the bowl of whipped sauce in the center.",
    "Eat by hand — pinch noodle, tofu, and herb together and dunk into the sauce.",
  ],
  modernMove:
    "Whipping the shrimp paste with lime and a spoon of the frying oil is the whole trick: it lightens a pungent paste into a bright, foamy dip. Frying the tofu in a hot, deep slick gives a shattering crust off a cheap block of protein.",
  notes:
    "Mắm tôm is intense — start with less, and offer plain nước chấm alongside for anyone new to it. The fried tofu reheats well in a dry pan.",
  zeroWasteHero: true,
  tags: ["tofu", "vermicelli", "herbs", "fermented", "hanoi", "vegetarian-leaning", "street-food"],
  sources: [
    {
      title: "Helen's Recipes — Bún Đậu Mắm Tôm",
      url: "https://helenrecipes.com/recipe-55-bun-dau-mam-tom-fermented-shrimp-paste-with-fried-tofu-and-rice-vermicelli/",
      note: "Fried tofu, room-temperature vermicelli, and the whipped mắm tôm dip",
    },
    {
      title: "Wikipedia — Bún đậu mắm tôm",
      url: "https://en.wikipedia.org/wiki/B%C3%BAn_%C4%91%E1%BA%ADu_m%E1%BA%AFm_t%C3%B4m",
      note: "Background: Hanoi street platter built on fermented shrimp paste",
    },
  ],
};
