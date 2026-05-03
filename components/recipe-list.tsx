import { useNavigate } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { Recipe } from '@/lib/recipes'
import { useLang } from '@/lib/i18n'

interface RecipeListProps {
  recipes: Recipe[]
}

export function RecipeList({ recipes }: RecipeListProps) {
  const navigate = useNavigate()
  const { lang } = useLang()

  const handleClick = (recipeId: string) => {
    navigate(`/recipe/${recipeId}`, { viewTransition: true })
  }

  return (
    <div className="space-y-4">
      {recipes.map((recipe) => (
        <button
          key={recipe.id}
          onClick={() => handleClick(recipe.id)}
          className="w-full group bg-card rounded-3xl overflow-hidden flex items-center gap-5 md:gap-6 p-4 md:p-5 transition-all duration-300 text-left"
        >
          <div
            className="relative w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-2xl overflow-hidden shrink-0"
            style={{ viewTransitionName: `recipe-image-${recipe.id}` }}
          >
            <img
              src={recipe.image}
              alt={recipe.title[lang]}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          <div className="flex-1 min-w-0">
            <h2
              className="font-serif text-lg md:text-xl lg:text-2xl font-medium text-foreground mb-1.5 text-balance"

            >
              {recipe.title[lang]}
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed line-clamp-2 text-pretty">
              {recipe.description[lang]}
            </p>
          </div>

          <div className="shrink-0 w-9 h-9 md:w-10 md:h-10 rounded-full bg-secondary/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <ChevronRight className="w-6 h-6 transition-transform duration-200 group-hover:translate-x-1" />
          </div>
        </button>
      ))}
    </div>
  )
}
