import type { Recipe } from "../types";

export const sabaMisoni: Recipe = {
  slug: "saba-misoni",
  title: "Saba no Misoni (Mackerel Simmered in Miso)",
  cuisine: "japanese",
  blurb:
    "Mackerel — the cheap, oily, gloriously rich fish of the Japanese table — simmered in a glossy sauce of miso, ginger, and sake until the sauce thickens to a clinging glaze and the strong fish turns mellow and savory. Ginger and miso tame the boldness; the whole thing comes together in one pan in twenty minutes and eats like a feast over rice for the price of a humble fillet.",
  servings: 4,
  perServing: { calories: 470, protein: 30 },
  estCostPerServing: 1.9,
  roles: ["dinner"],
  ingredients: [
    { item: "mackerel fillets (saba), skin on", qty: "4 pieces (~1 1/4 lb)", cost: 5.5 },
    { item: "fresh ginger, half sliced and half julienned", qty: "1 thumb", cost: 0.3, spansWeeks: true },
    { item: "miso", qty: "3 tbsp", cost: 0.6, spansWeeks: true },
    { item: "sake", qty: "1/4 cup", cost: 0.6, spansWeeks: true },
    { item: "mirin", qty: "2 tbsp", cost: 0.3, spansWeeks: true },
    { item: "sugar", qty: "1 tbsp", cost: 0.1, spansWeeks: true },
    { item: "soy sauce", qty: "1 tbsp", cost: 0.1, spansWeeks: true },
    { item: "water or dashi", qty: "3/4 cup", cost: 0.2 },
    { item: "scallion, to finish", qty: "1", cost: 0.1, spansWeeks: true },
    { item: "steamed rice, to serve", qty: "for the table" },
  ],
  method: [
    "Score the skin of each mackerel fillet with a shallow cross-cut so it doesn't curl. Lay the pieces in a sieve and pour boiling water over them, or blanch 10 seconds in simmering water — this 'shimofuri' step rinses away the surface blood and fishy odor that make mackerel taste strong, and is the key to a clean-tasting dish.",
    "In a wide pan or shallow pot, combine the water or dashi, sake, mirin, sugar, soy sauce, and the sliced ginger. Bring to a simmer.",
    "Slide the fillets in skin-side up in a single layer. Cover with a drop-lid (otoshibuta) or a circle of parchment laid right on the surface, which keeps the fish basted and gently cooked. Simmer 8 to 10 minutes.",
    "Whisk the miso with a few spoonfuls of the hot simmering liquid until smooth, then stir it back into the pan — never drop miso in as a lump. Spoon the sauce over the fish and simmer, uncovered now, another 4 to 5 minutes, basting, until the sauce reduces to a thick, glossy glaze that coats the fillets. Do not let it boil hard once the miso is in, which dulls its aroma.",
    "Lift the fish onto plates, pour the glaze over, and top with the julienned ginger and sliced scallion. Serve hot with rice and, ideally, miso soup and a pickle.",
  ],
  modernMove:
    "The boiling-water rinse before simmering is what makes oily mackerel taste clean rather than aggressively fishy — it's the same logic as blanching bones for clear stock. Paired with ginger and the round sweetness of miso, it turns the cheapest fish at the counter into the richest plate on the table.",
  notes:
    "Mackerel is among the most affordable and protein-dense fish, and oily fish like saba are prized for going further with bold seasoning — a little sauce carries a lot of rice. Sardines (iwashi) work the same way in this braise. Leftover glaze and flaked fish make an excellent rice bowl or onigiri filling the next day.",
  zeroWasteHero: false,
  tags: ["dinner", "fish", "mackerel", "miso", "simmered", "protein", "washoku"],
  sources: [
    {
      title: "Namiko Chen — Just One Cookbook, Saba Misoni (Mackerel Simmered in Miso)",
      url: "https://www.justonecookbook.com/saba-misoni-simmered-mackerel-in-miso-sauce/",
      note: "The shimofuri blanch to clean the fish, ginger, and adding miso late so it keeps its aroma.",
    },
  ],
};
