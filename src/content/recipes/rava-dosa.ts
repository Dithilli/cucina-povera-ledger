import type { Recipe } from "../types";

export const ravaDosa: Recipe = {
  slug: "rava-dosa",
  title: "Rava Dosa",
  cuisine: "south-indian",
  blurb:
    "The instant, no-ferment dosa — a thin pour of semolina, rice flour and a little maida loosened to running batter, ladled high over a hot griddle so it sets into a lacy, golden, glass-crisp net you tear into and dip in chutney.",
  servings: 4,
  perServing: { calories: 390, protein: 8 },
  estCostPerServing: 0.6,
  roles: ["dinner"],
  ingredients: [
    { item: "fine rava (sooji / semolina)", qty: "1/2 cup", cost: 0.25 },
    { item: "rice flour", qty: "1/2 cup", cost: 0.2 },
    { item: "maida (all-purpose flour)", qty: "1/4 cup", cost: 0.1 },
    { item: "onion, finely chopped", qty: "1 small", cost: 0.25 },
    { item: "green chiles, minced; ginger", qty: "2", cost: 0.15, spansWeeks: true },
    { item: "cumin seed; cracked black pepper; curry leaves", qty: "1 tsp", cost: 0.1, spansWeeks: true },
    { item: "cilantro; salt; water", qty: "as needed", cost: 0.2 },
    { item: "oil for the griddle", qty: "2 tbsp", cost: 0.15, spansWeeks: true },
  ],
  method: [
    "Whisk the rava, rice flour, maida and salt with enough water to make a very thin, freely-running batter — far looser than pancake batter, almost like milk. Stir in onion, green chile, ginger, cumin, cracked pepper, curry leaves and cilantro.",
    "Rest the batter 20–30 minutes so the rava swells, then check the consistency again — it usually needs more water, since the semolina drinks it up.",
    "Heat a flat griddle until quite hot and rub with a little oil. Don't spread the batter with the ladle — instead pour it from a height in a thin stream, working from the outer rim inward, letting it fall in a lacy net with deliberate holes.",
    "Drizzle a little oil around the edges and let it cook undisturbed on high until the underside is deep golden and crisp and the edges lift; rava dosa needs longer than a regular dosa to crisp.",
    "Fold or roll and serve straight off the griddle with coconut chutney and sambar — it softens as it sits, so eat it hot.",
  ],
  modernMove:
    "You pour rava dosa, you never spread it. A thin batter dropped from height onto a screaming-hot griddle finds its own holes and lace; trying to ladle-spread it like a regular dosa just gives you a thick, soggy disc.",
  notes:
    "No soaking, no grinding, no overnight fermentation — three cheap flours and a hot pan put a crisp dosa on the table in half an hour, which is exactly why it's the weeknight tiffin.",
  zeroWasteHero: false,
  tags: ["dinner", "tiffin", "dosa", "rava", "instant", "south-indian"],
  sources: [
    {
      title: "Swasthi — Swasthi's Recipes",
      url: "https://www.indianhealthyrecipes.com/rava-dosa/",
      note: "Equal rava and rice flour with half the maida, a thin rested batter poured from height for a lacy crisp dosa.",
    },
  ],
};
