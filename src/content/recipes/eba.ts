import type { Recipe } from "../types";

export const eba: Recipe = {
  slug: "eba",
  title: "Eba (Garri Swallow)",
  cuisine: "west-african",
  blurb:
    "The fastest of the swallows — toasted cassava granules (garri) stirred into hot water until they swell into a smooth, stretchy mound for scooping up soup. Pennies a portion.",
  servings: 4,
  perServing: { calories: 330, protein: 1 },
  estCostPerServing: 0.18,
  roles: ["base"],
  ingredients: [
    { item: "garri (toasted cassava granules, yellow or white)", qty: "2 cups", cost: 0.6 },
    { item: "boiling water", qty: "2 1/2 cups" },
  ],
  method: [
    "Boil a kettle of water. Garri needs water that is properly boiling — anything cooler leaves it raw and gritty.",
    "Pour the boiling water into a bowl and rain the garri over it in a steady stream, letting it sink and swell for about a minute without stirring.",
    "Now work it: with a sturdy spatula or wooden spoon, fold and press the granules against the side of the bowl, turning, until they come together into one smooth, stretchy, lump-free mass. Add a splash more hot water if it's stiff.",
    "Mould into a smooth ball, dampening your hands or the spatula. Serve hot beside any pepper stew or soup — you pinch off a piece, dimple it with your thumb, and use it to scoop.",
  ],
  modernMove:
    "Pour the garri onto the water rather than water onto garri, and let it absorb before you mix — that order is what keeps it from seizing into hard lumps you can never smooth out.",
  notes:
    "Yellow garri is fried in palm oil and tastes richer; white is plainer. Either way it's a swallow, not a dish to eat alone — it lives to carry sauce.",
  tags: ["base", "swallow", "garri", "cassava", "gluten-free", "quick"],
  sources: [
    {
      title: "Chef Lola's Kitchen — How to Make Eba",
      url: "https://cheflolaskitchen.com/how-to-make-eba/",
      note: "Mixing garri with boiling water into a smooth swallow — hot water swells the granules; cold water makes it gummy.",
    },
    {
      title: "Eba — Wikipedia",
      url: "https://en.wikipedia.org/wiki/Eba",
      note: "Eba as a West African (Nigeria, Togo, Benin) garri/cassava swallow.",
    },
  ],
};
