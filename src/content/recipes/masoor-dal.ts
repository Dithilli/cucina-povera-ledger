import type { Recipe } from "../types";

export const masoorDal: Recipe = {
  slug: "masoor-dal",
  title: "Masoor Dal",
  cuisine: "north-indian",
  blurb:
    "Red lentils cooked to a creamy gold and tempered with a bhuna onion-tomato masala — the quickest, cheapest pot in the pantry, melting soft in twenty minutes with no soak.",
  servings: 4,
  perServing: { calories: 340, protein: 18 },
  estCostPerServing: 0.5,
  roles: ["dinner"],
  ingredients: [
    { item: "split red masoor dal", qty: "1 cup", cost: 0.8 },
    { item: "turmeric", qty: "1/2 tsp", cost: 0.1, spansWeeks: true },
    { item: "onion, finely chopped", qty: "1", cost: 0.3 },
    { item: "tomato, chopped", qty: "1", cost: 0.4 },
    { item: "ginger-garlic paste", qty: "1 tbsp", cost: 0.1, spansWeeks: true },
    { item: "ghee or oil", qty: "2 tbsp", cost: 0.26, spansWeeks: true },
    { item: "cumin seed + dried red chile", qty: "1 tsp / 1", cost: 0.2, spansWeeks: true },
    { item: "cumin-coriander powder, red chile powder, garam masala", qty: "1/2 tsp each", cost: 0.3, spansWeeks: true },
    { item: "salt; cilantro and lemon to finish", qty: "to taste", cost: 0.3 },
  ],
  method: [
    "Rinse the masoor dal until clear. Simmer with turmeric, a little salt, and ~3 cups water until completely soft and broken down — about 20 minutes; red lentils collapse fast and need no soaking. Whisk smooth.",
    "Meanwhile build the bhuna masala: heat the ghee, crackle the cumin and dried chile, then add the onion and fry until deep golden. Add the ginger-garlic paste and cook off its raw smell.",
    "Add the tomato and the ground spices and bhuno — fry the masala, stirring, until the tomato breaks down and the fat separates and beads at the edges. That oil-splitting is the sign the masala is properly cooked.",
    "Stir the masala into the cooked lentils, loosen with hot water to a pourable, creamy dal, and simmer 5 minutes to marry. Add garam masala off the heat, finish with cilantro and a squeeze of lemon.",
  ],
  modernMove:
    "Here the flavor is built into one bhuna masala rather than poured over as a separate tadka — you fry the onion-tomato base until the fat splits before the lentils ever join it, so every spoonful is seasoned through. Watching for the oil to separate is the doneness cue that tells you the raw masala taste is gone.",
  notes:
    "The single cheapest and fastest dal: red lentils are among the least expensive proteins on the shelf and cook in the time it takes to make rice. A genuine complete dinner for around fifty cents a serving.",
  tags: ["dinner", "dal", "masoor-dal", "red-lentils", "bhuna", "legumes"],
};
