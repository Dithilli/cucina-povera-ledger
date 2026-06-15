import type { Recipe } from "../types";

export const ghee: Recipe = {
  slug: "ghee",
  title: "Ghee",
  cuisine: "north-indian",
  blurb:
    "Butter cooked past clarified until the milk solids brown and the fat turns nutty, golden, and fragrant. The cooking fat of the North Indian kitchen — shelf-stable, high-smoke-point, and the carrier that makes a tadka sing.",
  servings: 32,
  perServing: { calories: 110, protein: 0 },
  estCostPerServing: 0.13,
  roles: ["base"],
  ingredients: [
    { item: "unsalted butter", qty: "1 lb", cost: 4.0, spansWeeks: true },
  ],
  method: [
    "Melt the butter in a heavy saucepan over medium-low heat. It will foam as the water boils off — this is the whey proteins rising.",
    "Keep at a bare simmer, never a hard boil. The foam thins, the bubbling quiets, and the milk solids sink to the bottom.",
    "Watch the solids: when they turn golden-brown and the fat above goes clear and smells nutty and popcorn-like, it's done — usually 15–20 minutes. Pull it before the solids go dark or it tastes scorched.",
    "Strain through a fine sieve or muslin into a clean dry jar, leaving the browned solids behind. You're left with clear gold oil.",
    "Cool and cover. Because clarifying removes the water that spoils butter, ghee keeps for months at room temperature without refrigeration.",
  ],
  modernMove:
    "Take the milk solids to a true nutty brown rather than stopping at pale clarified butter — that browning is the flavor, and it's what separates ghee from plain clarified fat. The high smoke point also lets you bloom whole spices hotter and faster for a cleaner tadka.",
  notes:
    "One pound of butter makes a jar that powers weeks of cooking by the spoonful. The leftover browned solids strained out are delicious stirred into rice or onto toast — don't bin them.",
  zeroWasteHero: true,
  tags: ["base", "ghee", "fat", "pantry", "clarified-butter"],
  sources: [
    {
      title: "Dassana Amit — Dassana's Veg Recipes",
      url: "https://www.vegrecipesofindia.com/ghee/",
      note: "Simmering butter until the milk solids brown and the fat turns clear and nutty",
    },
    {
      title: "Ghee — Wikipedia",
      url: "https://en.wikipedia.org/wiki/Ghee",
      note: "Background on ghee as clarified butter and its shelf stability",
    },
  ],
};
