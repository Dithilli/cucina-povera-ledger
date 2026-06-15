import type { Recipe } from "../types";

export const herringInSourCream: Recipe = {
  slug: "herring-in-sour-cream",
  title: "Herring in Sour Cream",
  cuisine: "ashkenazi",
  blurb:
    "Soaked herring fillets folded into cool sour cream with thin rings of raw onion and a whisper of sugar and vinegar — the milchig counterpart to schmaltz herring, eaten with hot boiled potatoes on a dairy night.",
  servings: 4,
  perServing: { calories: 470, protein: 22 },
  estCostPerServing: 1.0,
  roles: ["dinner"],
  ingredients: [
    { item: "salt or pickled herring fillets, drained", qty: "4 fillets (about 10 oz)", cost: 2.4 },
    { item: "sour cream", qty: "1 cup", cost: 1.0 },
    { item: "onion, sliced into thin rings", qty: "1 small", cost: 0.2 },
    { item: "white vinegar", qty: "1 tbsp", cost: 0.05, spansWeeks: true },
    { item: "sugar", qty: "1 tsp", cost: 0.02, spansWeeks: true },
    { item: "black pepper", qty: "to taste", spansWeeks: true },
    { item: "boiling potatoes, to serve", qty: "1 lb", cost: 0.6 },
  ],
  method: [
    "If using salt-cured herring, soak the fillets in cold water for an hour or two, changing the water once, to tame the brine; pickled herring just needs draining and a rinse. Pat dry and cut into bite-sized pieces.",
    "Whisk the sour cream smooth with the vinegar, sugar, and a few grinds of pepper — just enough acid and sweetness to lift the cream without masking the fish.",
    "Fold in the herring and the onion rings, separating the rings as you go so they perfume the whole bowl. Cover and chill at least a few hours, ideally overnight, so the onion softens and the flavors marry.",
    "Boil the potatoes in their skins until tender; drain and let the steam blow off. Serve the cold herring against the hot, floury potatoes.",
  ],
  modernMove:
    "Give it an overnight rest. The cream needs hours for the raw onion to mellow from sharp to sweet and for the acid to lightly 'cook' the fish; made to order it tastes harsh, made the night before it tastes like Shabbos.",
  notes:
    "Dairy (milchig) — sour cream means no meat anywhere near it, and it follows a dairy meal, never a fleishig one. The same soaked herring without the cream becomes the pareve schmaltz-herring plate.",
  tags: ["herring", "dairy", "milchig"],
};
