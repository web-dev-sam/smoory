export type LocalizedString = { en: string; de: string }

export interface Ingredient {
  amount: number
  unit: string
  name: string
  detail?: string
}

export interface RecipeInfo {
  prepTime: LocalizedString
  cookTime: LocalizedString
  freezerFriendly: boolean
  shelfLife: LocalizedString
}

export interface Recipe {
  id: string
  title: LocalizedString
  description: LocalizedString
  image: string
  info: RecipeInfo
  ingredients: Ingredient[]
  baseServings: number
}

export const recipes: Recipe[] = [
  {
    id: 'mango-gut-shot',
    title: {
      en: 'Mango Gut Shot',
      de: 'Mango Gut-Shot',
    },
    description: {
      en: 'A tropical gut shot with mango for natural sweetness and fibre, ginger for its anti-inflammatory kick, lime for vitamin C, and ground flaxseed to support digestion.',
      de: 'Ein tropischer Gut-Shot mit Mango für natürliche Süße und Ballaststoffe, Ingwer für seine entzündungshemmende Wirkung, Limette für Vitamin C und gemahlenen Leinsamen zur Unterstützung der Verdauung.',
    },
    image: '/images/mango-gut-shot.png',
    info: {
      prepTime: { en: '5 mins', de: '5 Min.' },
      cookTime: { en: '0 mins', de: '0 Min.' },
      freezerFriendly: true,
      shelfLife: { en: '3 days', de: '3 Tage' },
    },
    ingredients: [
      { amount: 100, unit: 'g', name: 'mango', detail: 'frozen' },
      { amount: 5, unit: 'g', name: 'ginger', detail: 'roughly chopped' },
      { amount: 1.5, unit: 'tbsp', name: 'flaxseed (linseed)', detail: 'ground' },
      { amount: 0.3, unit: '', name: 'lime', detail: 'juiced' },
      { amount: 100, unit: 'ml', name: 'water' },
    ],
    baseServings: 2,
  },
  {
    id: 'turmeric-gut-shot',
    title: {
      en: 'Turmeric Gut Shot',
      de: 'Kurkuma Gut-Shot',
    },
    description: {
      en: 'A warming and anti-inflammatory shot combining turmeric for powerful antioxidants, ginger for digestion, and carrot for beta-carotene, finished with lemon for brightness — and a pinch of black pepper to unlock curcumin absorption.',
      de: 'Ein wärmender und entzündungshemmender Shot aus Kurkuma für starke Antioxidantien, Ingwer für die Verdauung und Karotte für Beta-Carotin, abgerundet mit Zitrone und einer Prise schwarzem Pfeffer, der die Aufnahme von Curcumin entscheidend verbessert.',
    },
    image: '/images/turmeric-gut-shot.png',
    info: {
      prepTime: { en: '5 mins', de: '5 Min.' },
      cookTime: { en: '0 mins', de: '0 Min.' },
      freezerFriendly: true,
      shelfLife: { en: '3 days', de: '3 Tage' },
    },
    ingredients: [
      { amount: 50, unit: 'g', name: 'carrot', detail: '' },
      { amount: 1, unit: 'g', name: 'turmeric', detail: 'ground' },
      { amount: 5, unit: 'g', name: 'ginger', detail: 'roughly chopped' },
      { amount: 0.3, unit: '', name: 'lemon', detail: 'juiced' },
      { amount: 0.125, unit: 'tsp', name: 'black pepper', detail: 'freshly ground' },
      { amount: 100, unit: 'ml', name: 'water' },
    ],
    baseServings: 2,
  },
  {
    id: 'green-gut-shot',
    title: {
      en: 'Green Gut Shot',
      de: 'Grüner Gut-Shot',
    },
    description: {
      en: 'A fresh and earthy gut shot packed with cucumber and spinach for hydration and vitamins, ginger for warmth, lemon for brightness, and milled chia seeds for prebiotic fibre.',
      de: 'Ein frischer Gut-Shot mit Gurke und Spinat für Hydratation und Vitamine, Ingwer für Wärme, Zitrone für Frische und gemahlene Chiasamen für präbiotische Ballaststoffe.',
    },
    image: '/images/green-gut-shot.png',
    info: {
      prepTime: { en: '5 mins', de: '5 Min.' },
      cookTime: { en: '0 mins', de: '0 Min.' },
      freezerFriendly: false,
      shelfLife: { en: '2 days', de: '2 Tage' },
    },
    ingredients: [
      { amount: 50, unit: 'g', name: 'cucumber', detail: 'roughly chopped' },
      { amount: 25, unit: 'g', name: 'spinach' },
      { amount: 5, unit: 'g', name: 'ginger', detail: 'roughly chopped' },
      { amount: 0.3, unit: '', name: 'lemon', detail: 'juiced' },
      { amount: 1, unit: 'tsp', name: 'maple syrup' },
      { amount: 1, unit: 'tbsp', name: 'chia seeds', detail: 'milled' },
      { amount: 50, unit: 'ml', name: 'water' },
    ],
    baseServings: 2,
  },
  {
    id: 'berry-kefir-gut-shot',
    title: {
      en: 'Berry Kefir Gut Shot',
      de: 'Beeren-Kefir Gut-Shot',
    },
    description: {
      en: 'A probiotic-rich gut shot combining mixed berries for antioxidants with dairy kefir for live cultures, and milled chia seeds for prebiotic fibre — a complete gut health boost in one small glass.',
      de: 'Ein probiotisch-reicher Gut-Shot aus gemischten Beeren für Antioxidantien, Kefir für lebende Kulturen und gemahlene Chiasamen für präbiotische Ballaststoffe – ein vollständiger Darmgesundheits-Boost in einem kleinen Glas.',
    },
    image: '/images/berry-kefir-gut-shot.jpg',
    info: {
      prepTime: { en: '5 mins', de: '5 Min.' },
      cookTime: { en: '0 mins', de: '0 Min.' },
      freezerFriendly: false,
      shelfLife: { en: '2 days', de: '2 Tage' },
    },
    ingredients: [
      { amount: 67, unit: 'g', name: 'mixed berries', detail: 'frozen' },
      { amount: 100, unit: 'ml', name: 'kefir', detail: 'dairy' },
      { amount: 1.25, unit: 'tbsp', name: 'chia seeds', detail: 'milled' },
    ],
    baseServings: 2,
  },
  {
    id: 'beet-apple-gut-shot',
    title: {
      en: 'Beet & Apple Gut Shot',
      de: 'Beet-Apfel Gut-Shot',
    },
    description: {
      en: 'A deep red, detoxifying shot perfect for liver support, combining beets for nitrates, apples for pectin, and fresh ginger for digestive power.',
      de: 'Ein tiefroter, entgiftender Shot, der perfekt für die Leberunterstützung ist, und Beeren für Nitrate, Äpfel für Pektin und frischen Ingwer für die Verdauungsmacht kombiniert.',
    },
    image: '/images/beet-apple-gut-shot.png',
    info: {
      prepTime: { en: '5 mins', de: '5 Min.' },
      cookTime: { en: '0 mins', de: '0 Min.' },
      freezerFriendly: true,
      shelfLife: { en: '3 days', de: '3 Tage' },
    },
    ingredients: [
      { amount: 50, unit: 'g', name: 'beetroot', detail: 'peeled, chopped' },
      { amount: 50, unit: 'g', name: 'apple', detail: 'cored' },
      { amount: 3, unit: 'g', name: 'ginger', detail: 'roughly chopped' },
      { amount: 0.3, unit: '', name: 'lemon', detail: 'juiced' },
      { amount: 100, unit: 'ml', name: 'water' },
    ],
    baseServings: 2,
  },
  {
    id: 'wild-blueberry-gut-shot',
    title: {
      en: 'Wild Blueberry Gut Shot',
      de: 'Wilde Blaubeeren Gut-Shot',
    },
    description: {
      en: 'A deep purple, antioxidant-packed shot using wild blueberries for their exceptional anthocyanin density, raw apple cider vinegar to feed beneficial gut flora, lemon to enhance polyphenol absorption, and ginger for digestive warmth.',
      de: 'Ein tiefvioletter, antioxidantienreicher Shot mit wilden Blaubeeren für ihre außergewöhnliche Anthocyan-Dichte, rohem Apfelessig zur Ernährung nützlicher Darmbakterien, Zitrone für bessere Polyphenolaufnahme und Ingwer für verdauungsfördernde Wärme.',
    },
    image: '/images/wild-blueberry-gut-shot.png',
    info: {
      prepTime: { en: '5 mins', de: '5 Min.' },
      cookTime: { en: '0 mins', de: '0 Min.' },
      freezerFriendly: false,
      shelfLife: { en: '2 days', de: '2 Tage' },
    },
    ingredients: [
      { amount: 100, unit: 'g', name: 'wild blueberries', detail: 'frozen' },
      { amount: 5, unit: 'g', name: 'ginger', detail: 'roughly chopped' },
      { amount: 15, unit: 'ml', name: 'apple cider vinegar', detail: 'raw, with mother' },
      { amount: 0.5, unit: '', name: 'lemon', detail: 'juiced' },
      { amount: 1, unit: 'tsp', name: 'raw honey' },
      { amount: 1.5, unit: 'tbsp', name: 'flaxseed (linseed)', detail: 'ground' },
      { amount: 75, unit: 'ml', name: 'water' },
    ],
    baseServings: 2,
  },
];

export function getRecipeById(id: string): Recipe | undefined {
  return recipes.find((r) => r.id === id)
}
