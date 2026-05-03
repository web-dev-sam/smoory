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
    image: '/images/mango-gut-shot.jpg',
    info: {
      prepTime: { en: '5 mins', de: '5 Min.' },
      cookTime: { en: '0 mins', de: '0 Min.' },
      freezerFriendly: false,
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
    id: 'green-gut-shot',
    title: {
      en: 'Green Gut Shot',
      de: 'Grüner Gut-Shot',
    },
    description: {
      en: 'A fresh and earthy gut shot packed with cucumber and spinach for hydration and vitamins, ginger for warmth, lemon for brightness, and milled chia seeds for prebiotic fibre.',
      de: 'Ein frischer Gut-Shot mit Gurke und Spinat für Hydratation und Vitamine, Ingwer für Wärme, Zitrone für Frische und gemahlene Chiasamen für präbiotische Ballaststoffe.',
    },
    image: '/images/green-gut-shot.jpg',
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
      { amount: 2, unit: 'tbsp', name: 'chia seeds', detail: 'milled' },
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
]

export function getRecipeById(id: string): Recipe | undefined {
  return recipes.find((r) => r.id === id)
}
