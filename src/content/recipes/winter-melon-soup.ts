import type { Recipe } from "../types";

export const winterMelonSoup: Recipe = {
  slug: "winter-melon-soup",
  title: "Winter Melon & Pork Bone Soup",
  cuisine: "cantonese",
  blurb:
    "A clear lou fo tong — the long-simmered soup that opens a Cantonese meal — where a few pork bones lend their sweetness to gallons of water and translucent winter melon turns silky and faintly cooling against the savory broth.",
  servings: 6,
  perServing: { calories: 240, protein: 16 },
  estCostPerServing: 1.1,
  roles: ["dinner"],
  ingredients: [
    { item: "pork neck bones or spare ribs", qty: "1 1/2 lb", cost: 4.0 },
    { item: "winter melon, peeled and cubed", qty: "2 lb", cost: 1.8 },
    { item: "dried scallops (conpoy), optional", qty: "3", cost: 0.8, spansWeeks: true },
    { item: "dried shiitake, soaked", qty: "3", cost: 0.4, spansWeeks: true },
    { item: "ginger, smashed", qty: "3 slices", cost: 0.15, spansWeeks: true },
    { item: "goji berries, optional", qty: "1 tbsp", cost: 0.2, spansWeeks: true },
    { item: "water", qty: "10 cups" },
    { item: "salt", qty: "to taste", cost: 0.02, spansWeeks: true },
    { item: "white pepper", qty: "pinch", cost: 0.02, spansWeeks: true },
    { item: "steamed rice, to serve", qty: "to serve" },
  ],
  method: [
    "Blanch the pork bones: cover with cold water, bring to a boil, simmer 2–3 minutes, then drain and rinse clean. This is the secret to a clear, sweet-tasting broth.",
    "Put the bones, ginger, soaked shiitake, and conpoy in a clean pot with the 10 cups of water. Bring to a boil, then immediately drop to low — Cantonese soup wants a bare shiver, never a hard boil, or it goes cloudy.",
    "Cover and simmer gently 90 minutes, until the broth tastes round and the bones have given up their sweetness.",
    "Add the winter melon and simmer another 15–20 minutes, until it turns translucent and tender but still holds its shape. Stir in goji berries for the last 5 minutes.",
    "Season with salt and a little white pepper only at the end. Ladle into bowls to drink alongside the meal; the pork from the bones is fished out and dipped in soy.",
  ],
  modernMove:
    "Keeping the pot at a whisper-low simmer the entire time is what gives lou fo tong its prized clarity — gentle heat extracts collagen and sweetness without churning fat and proteins into a cloudy broth.",
  notes:
    "A single dried scallop transforms the whole pot with deep umami — the classic 'a little luxury flavors a big soup.' Winter melon is cooling in Cantonese tradition, the soup for hot, damp weather.",
  zeroWasteHero: false,
  tags: ["soup", "lou-fo-tong", "winter-melon", "pork-bone", "clear-soup", "cantonese"],
  sources: [
    {
      title: "Judy — The Woks of Life",
      url: "https://thewoksoflife.com/winter-melon-soup-pork-ribs/",
      note: "Blanch bones, low slow simmer for clarity, add winter melon near the end",
    },
  ],
};
