import type { Recipe } from "../types";

export const kimchi: Recipe = {
  slug: "kimchi",
  title: "Baechu Kimchi (Napa Cabbage Kimchi)",
  cuisine: "korean",
  blurb:
    "Napa cabbage salted, drained, and packed with a paste of gochugaru, garlic, ginger, and salted seafood, then left to ferment into the sour, funky, effervescent staple at the heart of the Korean table. A single head and a Sunday afternoon make weeks of banchan — and the soul of every kimchi-jjigae and bokkeumbap to come.",
  servings: 20,
  perServing: { calories: 25, protein: 1 },
  estCostPerServing: 0.22,
  roles: ["base", "side"],
  ingredients: [
    { item: "napa cabbage", qty: "1 large head (about 3 lb)", cost: 2.5 },
    { item: "coarse sea salt (for salting the cabbage)", qty: "1/3 cup", cost: 0.2, spansWeeks: true },
    { item: "Korean chili flakes (gochugaru)", qty: "1/3 cup", cost: 1.0, spansWeeks: true },
    { item: "garlic cloves, grated", qty: "8", cost: 0.4, spansWeeks: true },
    { item: "fresh ginger, grated", qty: "1-inch knob", cost: 0.2, spansWeeks: true },
    { item: "fish sauce", qty: "3 tbsp", cost: 0.45, spansWeeks: true },
    { item: "salted shrimp (saeu-jeot), minced (optional)", qty: "2 tbsp", cost: 0.5, spansWeeks: true },
    { item: "sugar", qty: "1 tsp", cost: 0.02, spansWeeks: true },
    { item: "Korean radish (or daikon), cut in matchsticks", qty: "1/2 lb", cost: 0.8 },
    { item: "scallions, cut in 1-inch lengths", qty: "4", cost: 0.4 },
  ],
  method: [
    "Halve the cabbage lengthwise, then cut into 2-inch pieces. Toss in a big bowl with the salt, working it between the leaves, then add enough water to nearly cover. Leave 1 1/2 to 2 hours, turning every 30 minutes, until the thick stems bend without snapping — this draws out water so the leaves stay crisp and the brine can carry the ferment.",
    "Rinse the cabbage three times in cold water to wash off the surface salt, then drain hard in a colander 20 minutes. Tasted now, a piece should be pleasantly salty, not harsh.",
    "Make the paste: stir the gochugaru, garlic, ginger, fish sauce, salted shrimp, and sugar into a wet, brick-red slurry. Let it sit 10 minutes so the chili flakes bloom and soften into a paste.",
    "Fold the radish matchsticks and scallions into the paste, then add the drained cabbage. With a gloved hand, massage the paste into every leaf until everything is evenly coated.",
    "Pack tightly into a clean jar, pressing down to push out air bubbles and bring the brine up over the surface — submerged cabbage ferments clean. Leave at least an inch of headroom; it bubbles as it works.",
    "Leave at cool room temperature 1 to 2 days until it smells sour and tastes lightly fizzy, pressing it back under the brine once a day. Then refrigerate. It keeps fermenting slowly for weeks, getting sourer — that older, sourer kimchi is exactly what you want for stew.",
  ],
  modernMove:
    "Salting until the stems bend but don't break is the make-or-break step: too little and the kimchi goes soft and waterlogged, too much and it's inedibly salty. That bend test, plus keeping everything under the brine, is what separates clean lactic funk from a slimy off-ferment.",
  notes:
    "Leave out the fish sauce and salted shrimp and add a spoon of miso or extra salt for a fully vegan kimchi. Always serve with a clean utensil and keep the surface under the brine so it sours rather than spoils. Don't throw out the brine — it's flavor for stews and noodle soups.",
  zeroWasteHero: false,
  tags: ["base", "side", "fermented", "kimchi", "cabbage", "make-ahead", "banchan"],
  sources: [
    {
      title: "Maangchi — Easy kimchi (Mak-kimchi)",
      url: "https://www.maangchi.com/recipe/easy-kimchi",
      note: "Salting cut napa cabbage, the gochugaru-garlic-ginger-fish sauce paste, and room-temp fermentation",
    },
    {
      title: "Korean Bapsang (Hyosun Ro) — Easy Kimchi (Mak Kimchi)",
      url: "https://www.koreanbapsang.com/mak-kimchi-simple-kimchi/",
      note: "Salting/brining the cabbage and the seasoning paste with radish and scallion",
    },
  ],
};
