import { useParams, Navigate } from 'react-router-dom'
import { getRecipeById } from '@/lib/recipes'
import { RecipeDetail } from '@/components/recipe-detail'
import { Header } from '@/components/header'

export default function RecipePage() {
  const { id } = useParams<{ id: string }>()
  const recipe = getRecipeById(id ?? '')

  if (!recipe) {
    return <Navigate to="/" replace />
  }

  return (
    <main className="min-h-screen">
      <Header showBack />
      <RecipeDetail recipe={recipe} />
    </main>
  )
}
