import type { Recipe } from "../types";

export const bisiBeleBath: Recipe = {
  slug: "bisi-bele-bath",
  title: "Bisi Bele Bath",
  cuisine: "south-indian",
  blurb:
    "Karnataka's beloved one-pot — rice and toor dal cooked soft together, melted into tangy tamarind and a heady house masala of roasted spices, copra and poppy seed, studded with vegetables and crowned with a ghee-fried cashew tempering. The name says it plain: hot lentil rice.",
  servings: 4,
  perServing: { calories: 520, protein: 14 },
  estCostPerServing: 1.1,
  roles: ["dinner"],
  ingredients: [
    { item: "rice", qty: "1/2 cup", cost: 0.25 },
    { item: "toor / arhar dal (split pigeon peas)", qty: "1/2 cup", cost: 0.45 },
    { item: "mixed vegetables (carrot, beans, peas, potato)", qty: "1 1/2 cups", cost: 0.7 },
    { item: "tamarind, walnut-sized ball, soaked", qty: "1 tbsp", cost: 0.15, spansWeeks: true },
    { item: "bisi bele bath masala (or sambar powder)", qty: "2 tbsp", cost: 0.3, spansWeeks: true },
    { item: "jaggery; turmeric; salt", qty: "1 tsp", cost: 0.15, spansWeeks: true },
    { item: "ghee", qty: "2 tbsp", cost: 0.26, spansWeeks: true },
    { item: "mustard seed; dried red chiles; curry leaves; hing", qty: "1 tsp", cost: 0.1, spansWeeks: true },
    { item: "cashews", qty: "12", cost: 0.4 },
  ],
  method: [
    "Rinse the rice and toor dal together and pressure-cook them with turmeric, a little oil and about 3 cups water until both are very soft and broken down — roughly 4–5 whistles. Mash to a loose, porridge-like blend.",
    "Meanwhile soak the tamarind in warm water and squeeze out a thick extract. Cook the diced vegetables until just tender in a little of the tamarind water.",
    "Combine the mashed rice-dal, the cooked vegetables, the tamarind extract and the bisi bele bath masala in a wide pot. Add jaggery and salt and simmer, loosening with hot water — it should stay pourably thick, never stiff.",
    "Make the tempering last: heat the ghee, fry the cashews to gold and lift them out, then crackle the mustard seed, dried chiles, curry leaves and a pinch of hing. Pour tempering and cashews over the pot and stir through.",
    "Serve very hot — bisi bele bath is meant to be eaten the moment it's made — with a spoon of ghee, plain yogurt, or crisp boondi alongside.",
  ],
  modernMove:
    "The dish lives or dies on its masala: a dry-roasted blend of coriander, chana and urad dal, dried chiles, cinnamon, clove, the flowery Marathi moggu, poppy seed and dried coconut (copra), ground fresh. That copra-and-poppy richness is what separates true bisi bele bath from ordinary sambar rice.",
  notes:
    "A complete grain-plus-legume meal in one pot, deliberately stretchable with whatever vegetables are cheap. It thickens as it sits, so keep a kettle of hot water handy to loosen leftovers back to life.",
  zeroWasteHero: false,
  tags: ["dinner", "tiffin", "rice", "toor-dal", "tamarind", "karnataka", "south-indian"],
  sources: [
    {
      title: "Dassana Amit — Dassana's Veg Recipes",
      url: "https://www.vegrecipesofindia.com/bisi-bele-bath-recipe/",
      note: "Rice and toor dal cooked together with tamarind, the special bisi bele masala, jaggery and a cashew-mustard ghee tempering.",
    },
  ],
};
