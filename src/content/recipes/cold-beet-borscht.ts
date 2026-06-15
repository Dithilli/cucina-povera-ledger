import type { Recipe } from "../types";

export const coldBeetBorscht: Recipe = {
  slug: "cold-beet-borscht",
  title: "Cold Beet Borscht with Sour Cream",
  cuisine: "ashkenazi",
  blurb:
    "A chilled, tart-sweet beet broth stirred with sour cream until it blooms a shocking electric pink, ladled cold over a hot boiled potato with chopped hard egg and cucumber — the great refreshing dairy supper of a Pale-of-Settlement summer.",
  servings: 4,
  perServing: { calories: 360, protein: 16 },
  estCostPerServing: 0.6,
  roles: ["dinner"],
  ingredients: [
    { item: "beets, peeled and grated or julienned", qty: "1 1/2 lb", cost: 1.5 },
    { item: "sour cream", qty: "1 cup", cost: 1.5 },
    { item: "eggs, hard-boiled", qty: "4", cost: 1.0 },
    { item: "boiling potatoes", qty: "4 small", cost: 0.6 },
    { item: "cucumber, diced", qty: "1", cost: 0.5 },
    { item: "lemon juice or vinegar", qty: "2–3 tbsp", cost: 0.2, spansWeeks: true },
    { item: "sugar", qty: "1–2 tsp", cost: 0.05, spansWeeks: true },
    { item: "scallions or fresh dill", qty: "small handful", cost: 0.4 },
    { item: "salt", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Simmer the grated beets in about 6 cups of water with a good pinch of salt until tender and the liquid runs deep red, 25–30 minutes. Stir in the lemon juice (or vinegar) and sugar, tasting until it's brightly sweet-and-sour, then chill the whole pot thoroughly — this soup is served cold.",
    "Boil the potatoes whole until tender, and hard-boil the eggs. Peel and chop the eggs; dice the cucumber; slice the scallions or chop the dill.",
    "Whisk the sour cream into the cold beet broth (or pass it at the table). It clouds the garnet broth into a startling, opaque hot-pink — the unmistakable color of cold borscht.",
    "Ladle the cold soup into bowls. Into each, lower one hot boiled potato — the deliberate shock of warm potato in cold pink soup is the whole pleasure of the dish.",
    "Top with chopped egg, diced cucumber, and a shower of scallion or dill. Eat cold, on a hot day, with dark bread.",
  ],
  modernMove:
    "The sour cream isn't just a garnish — whisked in, it transforms the soup, turning a clear ruby broth opaque electric pink and rounding the sharp sweet-sour beet into something creamy and cooling. Keep the broth bracingly tart before the dairy goes in, because the sour cream softens and mellows it considerably.",
  notes:
    "Squarely milchig — built on sour cream and eggs, never meat. The contrast of cold soup and one hot potato is traditional and worth honoring; serve it as the centerpiece of a summer dairy meal.",
  tags: ["beet", "cold", "soup", "dairy", "milchig"],
  sources: [
    {
      title: "Wikipedia — Borscht",
      url: "https://en.wikipedia.org/wiki/Borscht",
      note: "Cold beet borscht as a summer dairy variant, served chilled with sour cream and egg.",
    },
    {
      title: "Claudia Roden — The Book of Jewish Food",
      note: "Chilled (milchig) beet soup with sour cream, cucumber, and chopped egg.",
    },
  ],
};
