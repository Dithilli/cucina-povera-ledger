import type { Recipe } from "../types";

export const broa: Recipe = {
  slug: "broa",
  title: "Broa (Maize-and-Rye Cornbread)",
  cuisine: "portuguese",
  blurb:
    "Portugal's dense, crackle-crusted peasant bread of maize and rye — scalded cornmeal worked into a sticky dough, baked into a domed loaf that keeps for days and soaks up every drop of olive oil and broth.",
  servings: 10,
  perServing: { calories: 180, protein: 5 },
  estCostPerServing: 0.22,
  roles: ["base"],
  ingredients: [
    { item: "fine maize/corn flour (broa flour)", qty: "2 1/2 cups", cost: 0.9 },
    { item: "rye flour", qty: "1 cup", cost: 0.5 },
    { item: "wheat bread flour", qty: "1 cup", cost: 0.4 },
    { item: "dried yeast (or a piece of old dough)", qty: "1 1/2 tsp", cost: 0.15, spansWeeks: true },
    { item: "boiling water (to scald the maize)", qty: "1 1/2 cups", cost: 0 },
    { item: "warm water", qty: "about 1 cup", cost: 0 },
    { item: "salt", qty: "1 1/2 tsp", cost: 0.05, spansWeeks: true },
    { item: "olive oil, to grease and brush", qty: "1 tbsp", cost: 0.15, spansWeeks: true },
  ],
  method: [
    "Put the maize flour and salt in a large bowl and pour over the boiling water, stirring hard — scalding the cornmeal gelatinises it so the bread holds together and stays moist. Leave until just warm.",
    "Dissolve the yeast in a little warm water. Add the rye and wheat flours, the yeast, and enough warm water to the scalded maize to make a thick, sticky, almost paste-like dough; beat it well with a wet wooden spoon or wet hands — broa dough never becomes smooth and kneadable.",
    "Cover and leave in a warm place until puffed and bubbly, 1 1/2–2 hours.",
    "Wet your hands, gather the dough into a high domed round on a floured tray, and dust the top with maize flour. Leave to rise 30–40 minutes; the surface will crack into the characteristic broken-earth crust.",
    "Bake at 220°C/425°F for about 45 minutes, until deep golden and hollow-sounding underneath. Cool fully before cutting — it slices cleanly only when cold.",
  ],
  modernMove:
    "Scald the maize flour with boiling water before mixing: the pre-gelatinised starch is what gives broa its moist, custardy crumb and long keeping, where unscalded cornmeal would bake to sand.",
  notes:
    "Broa is the everyday bread of northern Portugal, eaten with caldo verde, sardines, and every bean dish. Stale broa is never wasted — it thickens açorda and migas.",
  tags: ["bread", "cornbread", "maize", "rye", "base", "broa"],
  sources: [
    {
      title: "David Leite — Leite's Culinaria",
      url: "https://leitesculinaria.com/7723/recipes-portuguese-corn-bread-broa.html",
      note: "Maize-and-rye dough with scalded cornmeal baked into the characteristic domed, cracked loaf.",
    },
    {
      title: "Broa — Wikipedia",
      url: "https://en.wikipedia.org/wiki/Broa",
      note: "Background on broa as the maize/rye peasant bread of northern Portugal and Galicia.",
    },
  ],
};
