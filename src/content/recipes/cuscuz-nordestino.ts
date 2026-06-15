import type { Recipe } from "../types";

export const cuscuzNordestino: Recipe = {
  slug: "cuscuz-nordestino",
  title: "Cuscuz Nordestino",
  cuisine: "brazilian",
  blurb:
    "Coarse corn flocão hydrated with salted water and steamed in a cuscuzeira until fluffy, then split open over a melting knob of butter — the northeast's everyday corn supper.",
  servings: 2,
  perServing: { calories: 430, protein: 11 },
  estCostPerServing: 0.75,
  roles: ["dinner"],
  ingredients: [
    { item: "flocão de milho (coarse corn flakes)", qty: "2 cups", cost: 0.5 },
    { item: "water", qty: "1 cup", cost: 0 },
    { item: "butter", qty: "2 Tbsp", cost: 0.45, spansWeeks: true },
    { item: "eggs (optional, to top)", qty: "2", cost: 0.4 },
    { item: "salt", qty: "1 tsp", cost: 0.02, spansWeeks: true },
  ],
  method: [
    "Toss the flocão with the salt, then sprinkle the water over it a little at a time, mixing so every flake is evenly damp but not wet.",
    "Let it rest 10 minutes to fully hydrate — this is what makes the cuscuz fluffy rather than gummy.",
    "Pack loosely into a cuscuzeira (or a sieve set over a pot of simmering water) and steam about 10 minutes until set and tender.",
    "Turn out, split the steaming mound, and let butter melt through it; crown each portion with a fried egg if you want a fuller plate.",
  ],
  modernMove:
    "No cuscuzeira? A fine sieve or colander lined and clamped over a simmering pot steams it just as well.",
  notes: "The cheapest dinner in the set — corn, water, and a little butter; the egg lifts it to a real protein floor.",
  zeroWasteHero: false,
  tags: ["corn", "flocão", "steamed", "northeastern", "brazilian"],
  sources: [
    {
      title: "TudoGostoso — Cuscuz Nordestino com Flocão",
      url: "https://www.tudogostoso.com.br/noticias/o-cuscuz-nordestino-e-feito-com-flocao-de-milho-hidratado-com-agua-e-sal-faca-em-casa-a-receita-tradicional-do-prato-queridinho-dos-brasileiros-a16036.htm",
      note: "flocão hydrated with salted water, rested, then steamed; served with butter or a fried egg",
    },
  ],
};
