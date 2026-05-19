export type LocalizedString = { en: string; de: string }

export interface Ingredient {
  amount: number
  unit: LocalizedString
  name: LocalizedString
  detail?: LocalizedString
}

export interface RecipeInfo {
  prepTime: LocalizedString
  cookTime: LocalizedString
  freezerFriendly: boolean
  shelfLife: LocalizedString
}

export interface RecipeVariation {
  title: LocalizedString
  ingredients: Ingredient[]
  note?: LocalizedString
  baseServings: number
}

export interface Recipe {
  id: string
  title: LocalizedString
  description: LocalizedString
  image: string
  info: RecipeInfo
  ingredients: Ingredient[]
  baseServings: number
  variations?: RecipeVariation[]
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
    image: '/images/mango-gut-shot.webp',
    info: {
      prepTime: { en: '5 mins', de: '5 Min.' },
      cookTime: { en: '0 mins', de: '0 Min.' },
      freezerFriendly: true,
      shelfLife: { en: '3 days', de: '3 Tage' },
    },
    ingredients: [
      { amount: 100, unit: { en: 'g', de: 'g' }, name: { en: 'mango', de: 'Mango' }, detail: { en: 'frozen', de: 'gefroren' } },
      { amount: 5, unit: { en: 'g', de: 'g' }, name: { en: 'ginger', de: 'Ingwer' }, detail: { en: 'roughly chopped', de: 'grob gehackt' } },
      { amount: 1.5, unit: { en: 'tbsp', de: 'EL' }, name: { en: 'flaxseed (linseed)', de: 'Leinsamen' }, detail: { en: 'ground', de: 'gemahlen' } },
      { amount: 0.3, unit: { en: '', de: '' }, name: { en: 'lime', de: 'Limette' }, detail: { en: 'juiced', de: 'ausgepresst' } },
      { amount: 100, unit: { en: 'ml', de: 'ml' }, name: { en: 'water', de: 'Wasser' } },
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
    image: '/images/turmeric-gut-shot.webp',
    info: {
      prepTime: { en: '5 mins', de: '5 Min.' },
      cookTime: { en: '0 mins', de: '0 Min.' },
      freezerFriendly: true,
      shelfLife: { en: '3 days', de: '3 Tage' },
    },
    ingredients: [
      { amount: 50, unit: { en: 'g', de: 'g' }, name: { en: 'carrot', de: 'Karotte' } },
      { amount: 1, unit: { en: 'g', de: 'g' }, name: { en: 'turmeric', de: 'Kurkuma' }, detail: { en: 'ground', de: 'gemahlen' } },
      { amount: 5, unit: { en: 'g', de: 'g' }, name: { en: 'ginger', de: 'Ingwer' }, detail: { en: 'roughly chopped', de: 'grob gehackt' } },
      { amount: 0.3, unit: { en: '', de: '' }, name: { en: 'lemon', de: 'Zitrone' }, detail: { en: 'juiced', de: 'ausgepresst' } },
      { amount: 0.125, unit: { en: 'tsp', de: 'TL' }, name: { en: 'black pepper', de: 'schwarzer Pfeffer' }, detail: { en: 'freshly ground', de: 'frisch gemahlen' } },
      { amount: 100, unit: { en: 'ml', de: 'ml' }, name: { en: 'water', de: 'Wasser' } },
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
    image: '/images/green-gut-shot.webp',
    info: {
      prepTime: { en: '5 mins', de: '5 Min.' },
      cookTime: { en: '0 mins', de: '0 Min.' },
      freezerFriendly: false,
      shelfLife: { en: '2 days', de: '2 Tage' },
    },
    ingredients: [
      { amount: 50, unit: { en: 'g', de: 'g' }, name: { en: 'cucumber', de: 'Gurke' }, detail: { en: 'roughly chopped', de: 'grob gehackt' } },
      { amount: 25, unit: { en: 'g', de: 'g' }, name: { en: 'spinach', de: 'Spinat' } },
      { amount: 5, unit: { en: 'g', de: 'g' }, name: { en: 'ginger', de: 'Ingwer' }, detail: { en: 'roughly chopped', de: 'grob gehackt' } },
      { amount: 0.3, unit: { en: '', de: '' }, name: { en: 'lemon', de: 'Zitrone' }, detail: { en: 'juiced', de: 'ausgepresst' } },
      { amount: 1, unit: { en: 'tsp', de: 'TL' }, name: { en: 'maple syrup', de: 'Ahornsirup' } },
      { amount: 1, unit: { en: 'tbsp', de: 'EL' }, name: { en: 'chia seeds', de: 'Chiasamen' }, detail: { en: 'milled', de: 'gemahlen' } },
      { amount: 50, unit: { en: 'ml', de: 'ml' }, name: { en: 'water', de: 'Wasser' } },
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
    image: '/images/berry-kefir-gut-shot.webp',
    info: {
      prepTime: { en: '5 mins', de: '5 Min.' },
      cookTime: { en: '0 mins', de: '0 Min.' },
      freezerFriendly: false,
      shelfLife: { en: '2 days', de: '2 Tage' },
    },
    ingredients: [
      { amount: 67, unit: { en: 'g', de: 'g' }, name: { en: 'mixed berries', de: 'gemischte Beeren' }, detail: { en: 'frozen', de: 'gefroren' } },
      { amount: 100, unit: { en: 'ml', de: 'ml' }, name: { en: 'kefir', de: 'Kefir' }, detail: { en: 'dairy', de: 'aus Milch' } },
      { amount: 1.25, unit: { en: 'tbsp', de: 'EL' }, name: { en: 'chia seeds', de: 'Chiasamen' }, detail: { en: 'milled', de: 'gemahlen' } },
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
    image: '/images/beet-apple-gut-shot.webp',
    info: {
      prepTime: { en: '5 mins', de: '5 Min.' },
      cookTime: { en: '0 mins', de: '0 Min.' },
      freezerFriendly: true,
      shelfLife: { en: '3 days', de: '3 Tage' },
    },
    ingredients: [
      { amount: 50, unit: { en: 'g', de: 'g' }, name: { en: 'beetroot', de: 'Rote Bete' }, detail: { en: 'peeled, chopped', de: 'geschält, gehackt' } },
      { amount: 50, unit: { en: 'g', de: 'g' }, name: { en: 'apple', de: 'Apfel' }, detail: { en: 'cored', de: 'entkernt' } },
      { amount: 3, unit: { en: 'g', de: 'g' }, name: { en: 'ginger', de: 'Ingwer' }, detail: { en: 'roughly chopped', de: 'grob gehackt' } },
      { amount: 0.3, unit: { en: '', de: '' }, name: { en: 'lemon', de: 'Zitrone' }, detail: { en: 'juiced', de: 'ausgepresst' } },
      { amount: 100, unit: { en: 'ml', de: 'ml' }, name: { en: 'water', de: 'Wasser' } },
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
    image: '/images/wild-blueberry-gut-shot.webp',
    info: {
      prepTime: { en: '5 mins', de: '5 Min.' },
      cookTime: { en: '0 mins', de: '0 Min.' },
      freezerFriendly: false,
      shelfLife: { en: '2 days', de: '2 Tage' },
    },
    ingredients: [
      { amount: 100, unit: { en: 'g', de: 'g' }, name: { en: 'wild blueberries', de: 'wilde Blaubeeren' }, detail: { en: 'frozen', de: 'gefroren' } },
      { amount: 5, unit: { en: 'g', de: 'g' }, name: { en: 'ginger', de: 'Ingwer' }, detail: { en: 'roughly chopped', de: 'grob gehackt' } },
      { amount: 10, unit: { en: 'ml', de: 'ml' }, name: { en: 'apple cider vinegar', de: 'Apfelessig' }, detail: { en: 'raw, with mother', de: 'roh, mit Essigmutter' } },
      { amount: 0.5, unit: { en: '', de: '' }, name: { en: 'lemon', de: 'Zitrone' }, detail: { en: 'juiced', de: 'ausgepresst' } },
      { amount: 1.5, unit: { en: 'tsp', de: 'TL' }, name: { en: 'raw honey', de: 'roher Honig' } },
      { amount: 1, unit: { en: 'tbsp', de: 'EL' }, name: { en: 'flaxseed (linseed)', de: 'Leinsamen' }, detail: { en: 'ground', de: 'gemahlen' } },
      { amount: 130, unit: { en: 'ml', de: 'ml' }, name: { en: 'water', de: 'Wasser' } },
    ],
    baseServings: 2,
    variations: [
      {
        title: { en: 'Flaxseed + Coconut Milk', de: 'Leinsamen + Kokosmilch' },
        baseServings: 2,
        ingredients: [
          { amount: 300, unit: { en: 'g', de: 'g' }, name: { en: 'wild blueberries', de: 'wilde Blaubeeren' }, detail: { en: 'frozen', de: 'gefroren' } },
          { amount: 15, unit: { en: 'g', de: 'g' }, name: { en: 'ginger', de: 'Ingwer' }, detail: { en: 'roughly chopped', de: 'grob gehackt' } },
          { amount: 18, unit: { en: 'ml', de: 'ml' }, name: { en: 'apple cider vinegar', de: 'Apfelessig' }, detail: { en: 'raw, with mother', de: 'roh, mit Essigmutter' } },
          { amount: 0.5, unit: { en: '', de: '' }, name: { en: 'lemon', de: 'Zitrone' }, detail: { en: 'juiced', de: 'ausgepresst' } },
          { amount: 4, unit: { en: 'tsp', de: 'TL' }, name: { en: 'raw honey', de: 'roher Honig' } },
          { amount: 2, unit: { en: 'tbsp', de: 'EL' }, name: { en: 'flaxseed', de: 'Leinsamen' }, detail: { en: 'whole', de: 'ganz' } },
          { amount: 200, unit: { en: 'ml', de: 'ml' }, name: { en: 'coconut milk', de: 'Kokosmilch' }, detail: { en: 'full fat', de: 'Vollfett' } },
          { amount: 200, unit: { en: 'ml', de: 'ml' }, name: { en: 'water', de: 'Wasser' } },
        ],
      },
      {
        title: { en: 'Flaxseed + Oat Milk', de: 'Leinsamen + Hafermilch' },
        baseServings: 2,
        note: {
          en: 'Buy unsweetened or it\'ll clash with the honey; also adds a slight oaty flavour to be aware of.',
          de: 'Ungesüßt kaufen, sonst überlagert es den Honig; hat auch einen leichten Hafergeschmack.',
        },
        ingredients: [
          { amount: 300, unit: { en: 'g', de: 'g' }, name: { en: 'wild blueberries', de: 'wilde Blaubeeren' }, detail: { en: 'frozen', de: 'gefroren' } },
          { amount: 15, unit: { en: 'g', de: 'g' }, name: { en: 'ginger', de: 'Ingwer' }, detail: { en: 'roughly chopped', de: 'grob gehackt' } },
          { amount: 18, unit: { en: 'ml', de: 'ml' }, name: { en: 'apple cider vinegar', de: 'Apfelessig' }, detail: { en: 'raw, with mother', de: 'roh, mit Essigmutter' } },
          { amount: 0.5, unit: { en: '', de: '' }, name: { en: 'lemon', de: 'Zitrone' }, detail: { en: 'juiced', de: 'ausgepresst' } },
          { amount: 4, unit: { en: 'tsp', de: 'TL' }, name: { en: 'raw honey', de: 'roher Honig' } },
          { amount: 2, unit: { en: 'tbsp', de: 'EL' }, name: { en: 'flaxseed', de: 'Leinsamen' }, detail: { en: 'whole', de: 'ganz' } },
          { amount: 400, unit: { en: 'ml', de: 'ml' }, name: { en: 'oat milk', de: 'Hafermilch' }, detail: { en: 'unsweetened', de: 'ungesüßt' } },
        ],
      },
      {
        title: { en: 'Flaxseed + Cashews', de: 'Leinsamen + Cashews' },
        baseServings: 2,
        note: {
          en: 'Soaking softens them so the blender can fully emulsify, but not strictly necessary at high speed.',
          de: 'Einweichen macht sie weicher für bessere Emulgierung, aber bei hoher Drehzahl nicht unbedingt nötig.',
        },
        ingredients: [
          { amount: 300, unit: { en: 'g', de: 'g' }, name: { en: 'wild blueberries', de: 'wilde Blaubeeren' }, detail: { en: 'frozen', de: 'gefroren' } },
          { amount: 15, unit: { en: 'g', de: 'g' }, name: { en: 'ginger', de: 'Ingwer' }, detail: { en: 'roughly chopped', de: 'grob gehackt' } },
          { amount: 18, unit: { en: 'ml', de: 'ml' }, name: { en: 'apple cider vinegar', de: 'Apfelessig' }, detail: { en: 'raw, with mother', de: 'roh, mit Essigmutter' } },
          { amount: 0.5, unit: { en: '', de: '' }, name: { en: 'lemon', de: 'Zitrone' }, detail: { en: 'juiced', de: 'ausgepresst' } },
          { amount: 4, unit: { en: 'tsp', de: 'TL' }, name: { en: 'raw honey', de: 'roher Honig' } },
          { amount: 2, unit: { en: 'tbsp', de: 'EL' }, name: { en: 'flaxseed', de: 'Leinsamen' }, detail: { en: 'whole', de: 'ganz' } },
          { amount: 35, unit: { en: 'g', de: 'g' }, name: { en: 'cashews', de: 'Cashews' }, detail: { en: 'raw, soaked 30 min ideally', de: 'roh, idealerweise 30 Min. eingeweicht' } },
          { amount: 400, unit: { en: 'ml', de: 'ml' }, name: { en: 'water', de: 'Wasser' } },
        ],
      },
      {
        title: { en: 'Chia Seeds + Water', de: 'Chiasamen + Wasser' },
        baseServings: 2,
        note: {
          en: 'Stir in after blending and drink within 5 minutes before it gels into a pudding texture.',
          de: 'Nach dem Mixen einrühren und innerhalb von 5 Minuten trinken, bevor es zu einem Pudding geliert.',
        },
        ingredients: [
          { amount: 300, unit: { en: 'g', de: 'g' }, name: { en: 'wild blueberries', de: 'wilde Blaubeeren' }, detail: { en: 'frozen', de: 'gefroren' } },
          { amount: 15, unit: { en: 'g', de: 'g' }, name: { en: 'ginger', de: 'Ingwer' }, detail: { en: 'roughly chopped', de: 'grob gehackt' } },
          { amount: 18, unit: { en: 'ml', de: 'ml' }, name: { en: 'apple cider vinegar', de: 'Apfelessig' }, detail: { en: 'raw, with mother', de: 'roh, mit Essigmutter' } },
          { amount: 0.5, unit: { en: '', de: '' }, name: { en: 'lemon', de: 'Zitrone' }, detail: { en: 'juiced', de: 'ausgepresst' } },
          { amount: 4, unit: { en: 'tsp', de: 'TL' }, name: { en: 'raw honey', de: 'roher Honig' } },
          { amount: 1.5, unit: { en: 'tbsp', de: 'EL' }, name: { en: 'chia seeds', de: 'Chiasamen' }, detail: { en: 'added after blending', de: 'nach dem Mixen hinzufügen' } },
          { amount: 400, unit: { en: 'ml', de: 'ml' }, name: { en: 'water', de: 'Wasser' } },
        ],
      },
      {
        title: { en: 'Hemp Seeds + Water', de: 'Hanfsamen + Wasser' },
        baseServings: 2,
        ingredients: [
          { amount: 300, unit: { en: 'g', de: 'g' }, name: { en: 'wild blueberries', de: 'wilde Blaubeeren' }, detail: { en: 'frozen', de: 'gefroren' } },
          { amount: 15, unit: { en: 'g', de: 'g' }, name: { en: 'ginger', de: 'Ingwer' }, detail: { en: 'roughly chopped', de: 'grob gehackt' } },
          { amount: 18, unit: { en: 'ml', de: 'ml' }, name: { en: 'apple cider vinegar', de: 'Apfelessig' }, detail: { en: 'raw, with mother', de: 'roh, mit Essigmutter' } },
          { amount: 0.5, unit: { en: '', de: '' }, name: { en: 'lemon', de: 'Zitrone' }, detail: { en: 'juiced', de: 'ausgepresst' } },
          { amount: 4, unit: { en: 'tsp', de: 'TL' }, name: { en: 'raw honey', de: 'roher Honig' } },
          { amount: 3, unit: { en: 'tbsp', de: 'EL' }, name: { en: 'hemp seeds', de: 'Hanfsamen' } },
          { amount: 400, unit: { en: 'ml', de: 'ml' }, name: { en: 'water', de: 'Wasser' } },
        ],
      },
      {
        title: { en: 'Banana + Water', de: 'Banane + Wasser' },
        baseServings: 2,
        note: {
          en: 'Frozen banana makes it noticeably thicker and creamier, almost ice cream-like.',
          de: 'Gefrorene Banane macht ihn deutlich dicker und cremiger, fast wie Eis.',
        },
        ingredients: [
          { amount: 300, unit: { en: 'g', de: 'g' }, name: { en: 'wild blueberries', de: 'wilde Blaubeeren' }, detail: { en: 'frozen', de: 'gefroren' } },
          { amount: 15, unit: { en: 'g', de: 'g' }, name: { en: 'ginger', de: 'Ingwer' }, detail: { en: 'roughly chopped', de: 'grob gehackt' } },
          { amount: 18, unit: { en: 'ml', de: 'ml' }, name: { en: 'apple cider vinegar', de: 'Apfelessig' }, detail: { en: 'raw, with mother', de: 'roh, mit Essigmutter' } },
          { amount: 0.5, unit: { en: '', de: '' }, name: { en: 'lemon', de: 'Zitrone' }, detail: { en: 'juiced', de: 'ausgepresst' } },
          { amount: 3, unit: { en: 'tsp', de: 'TL' }, name: { en: 'raw honey', de: 'roher Honig' }, detail: { en: 'reduced – banana adds sweetness', de: 'reduziert – Banane gibt Süße' } },
          { amount: 1, unit: { en: '', de: '' }, name: { en: 'banana', de: 'Banane' }, detail: { en: 'medium, ripe – frozen works great', de: 'mittelgroß, reif – gefroren empfohlen' } },
          { amount: 400, unit: { en: 'ml', de: 'ml' }, name: { en: 'water', de: 'Wasser' } },
        ],
      },
    ],
  },
];

export function getRecipeById(id: string): Recipe | undefined {
  return recipes.find((r) => r.id === id)
}
