import { useState } from 'react'
import { Clock, Flame, Snowflake, Calendar, Minus, Plus } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Recipe, RecipeInfo } from '@/lib/recipes'
import { cn } from '@/lib/utils'
import { useLang } from '@/lib/i18n'
import { formatAmount } from '@/lib/format'

interface RecipeDetailProps {
  recipe: Recipe
}

// Single registration point: adding a new RecipeInfo field requires one entry here.
// TypeScript enforces that every key exists on both RecipeInfo and t.info.
const INFO_CONFIG: ReadonlyArray<{ key: keyof RecipeInfo; icon: LucideIcon }> = [
  { key: 'prepTime', icon: Clock },
  { key: 'cookTime', icon: Flame },
  { key: 'freezerFriendly', icon: Snowflake },
  { key: 'shelfLife', icon: Calendar },
]

export function RecipeDetail({ recipe }: RecipeDetailProps) {
  const { t, lang } = useLang()
  const [servings, setServings] = useState(recipe.baseServings)
  const [editingIngredient, setEditingIngredient] = useState<number | null>(null)

  const scaleFactor = servings / recipe.baseServings

  const handleServingsChange = (delta: number) => {
    const next = delta > 0
      ? Math.ceil(servings + 0.01)
      : Math.floor(servings - 0.01)
    if (next >= 0.5) setServings(next)
  }

  const handleIngredientAmountChange = (index: number, newAmount: number) => {
    if (newAmount <= 0) return
    const ingredientScaleFactor = newAmount / recipe.ingredients[index].amount
    setServings(recipe.baseServings * ingredientScaleFactor)
    setEditingIngredient(null)
  }

  return (
    <article className="pb-16 md:pb-24">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        {/* Hero Image */}
        <div
          className="relative aspect-video md:aspect-2/1 rounded-3xl overflow-hidden mb-8 md:mb-12"
          style={{ viewTransitionName: `recipe-image-${recipe.id}` }}
        >
          <img
            src={recipe.image}
            alt={recipe.title[lang]}
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
          />
        </div>

        {/* Title & Description */}
        <header className="mb-8 md:mb-12">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-6 text-balance">
            {recipe.title[lang]}
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed text-pretty max-w-2xl">
            {recipe.description[lang]}
          </p>
        </header>

        {/* Info Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-10 md:mb-14">
          {INFO_CONFIG.map(({ key, icon: Icon }) => {
            const raw = recipe.info[key]
            const value = typeof raw === 'boolean'
              ? (raw ? t.yes : t.no)
              : raw[lang]
            return (
              <div
                key={key}
                className="bg-secondary/50 rounded-2xl p-4 md:p-5 flex items-center gap-3"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-background flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">
                    {t.info[key]}
                  </p>
                  <p className="text-sm md:text-base font-medium text-foreground">
                    {value}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Ingredients Card */}
        <div className="bg-card rounded-3xl p-6 md:p-8">
          <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-6">
            {t.recipe.ingredients}
          </h2>

          {/* Servings Control */}
          <div className="flex items-center justify-between mb-6 pb-6 border-b border-border/50">
            <span className="text-base font-medium text-foreground">
              {t.recipe.servings}
            </span>
            <div className="flex items-center gap-4">
              <button
                onClick={() => handleServingsChange(-1)}
                className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Decrease servings"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="text-xl font-medium w-14 text-center tabular-nums">
                {formatAmount(servings)}
              </span>
              <button
                onClick={() => handleServingsChange(1)}
                className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Increase servings"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Ingredients List */}
          <ul>
            {recipe.ingredients.map((ingredient, index) => {
              const scaledAmount = ingredient.amount * scaleFactor
              const isEditing = editingIngredient === index

              return (
                <li
                  key={`${ingredient.name.en}-${index}`}
                  className="flex items-start gap-4 group"
                >
                  <div className="shrink-0 min-w-22">
                    {isEditing ? (
                      <input
                        type="number"
                        defaultValue={Number(scaledAmount.toFixed(1))}
                        className="w-20 px-3 py-2 text-right text-base font-semibold bg-background border-2 border-primary rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/30"
                        autoFocus
                        onBlur={(e) => {
                          const value = parseFloat(e.target.value)
                          if (!isNaN(value) && value > 0) {
                            handleIngredientAmountChange(index, value)
                          } else {
                            setEditingIngredient(null)
                          }
                        }}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            const value = parseFloat((e.target as HTMLInputElement).value)
                            if (!isNaN(value) && value > 0) {
                              handleIngredientAmountChange(index, value)
                            } else {
                              setEditingIngredient(null)
                            }
                          }
                          if (e.key === 'Escape') setEditingIngredient(null)
                        }}
                        step="any"
                        min="0.1"
                      />
                    ) : (
                      <button
                        onClick={() => setEditingIngredient(index)}
                        className={cn(
                          'text-right w-full text-base font-semibold text-primary',
                          'hover:bg-primary/10 px-3 py-2 rounded-xl transition-colors',
                          'cursor-pointer',
                        )}
                        title="Click to edit amount"
                      >
                        {formatAmount(scaledAmount)}
                        {ingredient.unit[lang] && (
                          <span className="text-muted-foreground font-normal ml-1">
                            {ingredient.unit[lang]}
                          </span>
                        )}
                      </button>
                    )}
                  </div>

                  <div className="flex-1 pt-2">
                    <span className="text-base text-foreground">{ingredient.name[lang]}</span>
                    {ingredient.detail && (
                      <span className="text-base text-muted-foreground ml-2">
                        ({ingredient.detail[lang]})
                      </span>
                    )}
                  </div>
                </li>
              )
            })}
          </ul>

          {/* Hint */}
          <p className="text-sm text-muted-foreground mt-8 pt-6 border-t border-border/50 text-center">
            {t.recipe.hint}
          </p>
        </div>
      </div>
    </article>
  )
}
