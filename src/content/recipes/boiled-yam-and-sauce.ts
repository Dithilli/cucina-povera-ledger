import type { Recipe } from "../types";

export const boiledYamAndSauce: Recipe = {
  slug: "boiled-yam-and-sauce",
  title: "Boiled Yam and Garden-Egg Sauce",
  cuisine: "west-african",
  blurb:
    "Plain boiled yam — fluffy, faintly sweet — under a quick fried sauce of garden eggs and tomato, lifted with a little fish. The most pared-back West African dinner: one tuber, a fast pan sauce, and you're fed.",
  servings: 4,
  perServing: { calories: 520, protein: 16 },
  estCostPerServing: 1.25,
  roles: ["dinner"],
  ingredients: [
    { item: "white yam, peeled and cut in rounds", qty: "1 1/2 lb", cost: 2.2 },
    { item: "garden eggs (African eggplant) or small aubergine, diced", qty: "1/2 lb", cost: 1.5 },
    { item: "tomatoes, chopped", qty: "2", cost: 0.6 },
    { item: "red bell pepper and scotch bonnet, chopped", qty: "1 each", cost: 0.7 },
    { item: "onion, sliced", qty: "1", cost: 0.3 },
    { item: "palm or neutral oil", qty: "1/4 cup", cost: 0.4, spansWeeks: true },
    { item: "sardines or flaked mackerel", qty: "1 small tin / 4 oz", cost: 1.0 },
    { item: "stock cube / bouillon", qty: "1", cost: 0.1, spansWeeks: true },
    { item: "salt", qty: "to taste" },
  ],
  method: [
    "Peel the yam thickly, cut into rounds, and rinse. Cover with salted water and boil until a knife slides through easily — 15 to 20 minutes. Drain and keep warm; boiled yam should be fluffy and dry, so don't let it sit waterlogged.",
    "While it boils, soften the onion in the oil, then add the chopped peppers and tomatoes and fry until pulpy and the rawness cooks off — 8 minutes.",
    "Stir in the diced garden eggs and cook until they collapse and turn silky. Their mild bitterness is the point — it cuts the richness and plays against the sweet yam.",
    "Flake in the sardines or mackerel with a little of their oil, season with the crushed stock cube and salt, and simmer 5 minutes into a thick spoonable sauce.",
    "Serve the warm yam rounds with the sauce ladled over or alongside for dipping.",
  ],
  modernMove:
    "Letting the garden eggs cook right down into the tomato sauce — rather than leaving them in chunks — is the move: they melt into a silky, faintly bitter base that needs only a tin of fish to read as a full dinner.",
  notes:
    "Boiled yam is the blank canvas of West African home cooking; the sauce changes nightly with whatever's cheap. Garden eggs are traditional, but any aubergine works.",
  tags: ["yam", "garden-egg", "aubergine", "tomato-sauce", "fish", "quick"],
};
