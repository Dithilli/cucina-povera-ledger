import type { Recipe } from "../types";

export const ugaliBase: Recipe = {
  slug: "ugali-base",
  title: "Ugali (Base)",
  cuisine: "east-african",
  blurb:
    "The stiff white maize pap under every East African meal — pinched into a scoop, pressed against a stew of greens or meat, the constant that makes a plate a meal.",
  servings: 4,
  perServing: { calories: 180, protein: 4 },
  estCostPerServing: 0.2,
  roles: ["base"],
  ingredients: [
    { item: "white maize meal (unga)", qty: "2 cups", cost: 0.5 },
    { item: "water", qty: "4 cups", cost: 0.02 },
    { item: "salt (optional)", qty: "1/4 tsp" },
  ],
  method: [
    "Bring the water to a gentle boil in a heavy pot.",
    "Sprinkle in the maize meal a little at a time, stirring hard with a wooden spoon to keep it lump-free.",
    "Keep stirring and folding as it thickens; press it against the sides to cook off the raw-flour taste until it pulls cleanly away from the pot.",
    "Cover and let it steam 2–3 minutes, then turn out onto a plate and shape into a smooth mound.",
    "Serve hot, torn off in pieces to scoop sukuma wiki, beans, or stew.",
  ],
  modernMove:
    "A 1:2 maize-to-water ratio and relentless folding off the heat builds the firm, playdough-stiff texture you can actually pinch and dip.",
  notes: "Use coarse white maize meal, never cornstarch.",
  zeroWasteHero: false,
  tags: ["base", "staple", "maize", "east-african"],
  sources: [
    {
      title: "Taste of the Place — Authentic Ugali (Kenyan Cornmeal)",
      url: "https://tasteoftheplace.com/ugali-kenyan-cornmeal/",
      note: "1:2 maize-to-water ratio and the fold-and-steam method for stiff ugali.",
    },
  ],
};
