import type { Recipe } from "../types";

export const mbahal: Recipe = {
  slug: "mbahal",
  title: "Mbahal",
  cuisine: "senegalese",
  blurb:
    "A thrifty Saloum one-pot where broken rice steams in peanut powder, fermented nététou and flakes of dried fish until every grain is dense, savoury and faintly funky.",
  servings: 4,
  perServing: { calories: 580, protein: 21 },
  estCostPerServing: 1.4,
  roles: ["dinner"],
  ingredients: [
    { item: "broken rice", qty: "2 cups dry", cost: 0.9 },
    { item: "peanut powder (or ground roasted peanuts)", qty: "1/2 cup", cost: 0.6 },
    { item: "dried/salted fish, soaked and flaked", qty: "3 oz", cost: 1.0 },
    { item: "smoked fish, flaked", qty: "2 oz", cost: 0.8 },
    { item: "nététou (fermented locust bean)", qty: "1 tbsp", cost: 0.3, spansWeeks: true },
    { item: "spring onions, sliced", qty: "1 bunch", cost: 0.4 },
    { item: "green pepper, diced", qty: "1", cost: 0.3 },
    { item: "Scotch bonnet (kaani), whole", qty: "1", cost: 0.2, spansWeeks: true },
    { item: "stock cube (Maggi) and garlic", qty: "1 cube + 2 cloves", cost: 0.2, spansWeeks: true },
    { item: "palm or peanut oil", qty: "2 tbsp", cost: 0.2, spansWeeks: true },
  ],
  method: [
    "Rinse and soak the salted fish to draw out excess salt, then flake both fishes off their bones.",
    "Pound or pulse the spring onion with the rinsed nététou, garlic, green pepper and a little salt into a rough seasoning paste.",
    "Steam the broken rice over water until half-cooked, then toss it in a bowl with the peanut powder, the seasoning paste, the flaked fishes and a glug of oil so every grain is coated.",
    "Return the rice to steam with the whole Scotch bonnet and crumbled stock cube tucked in until it is tender, dry and clumping with peanut and fish.",
    "Fluff, lift out the chili, and serve hot — a meal that needs no sauce.",
  ],
  modernMove:
    "Double-steaming the rice — half-cook, dress with peanut powder and fish, then steam again — keeps the grains separate yet saturated, the texture that defines a good mbahal.",
  notes: "A working-week staple in the Saloum precisely because it is built from pantry odds: powdered peanut, dried fish, fermented bean.",
  zeroWasteHero: true,
  tags: ["rice", "peanut", "dried-fish", "netetou", "senegalese"],
  sources: [
    {
      title: "My Gambia — Traditional Dish Recipe: Mbahal",
      url: "https://www.my-gambia.com/mymagazine/recipe-mbahal/",
      note: "Pounding spring onion with locust bean and folding peanut powder and dried/smoked fish through steamed rice.",
    },
  ],
};
