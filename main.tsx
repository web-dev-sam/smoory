import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider } from '@/components/ui/theme-provider'
import { LangProvider } from '@/lib/i18n'
import Home from '@/app/page'
import RecipePage from '@/app/recipe/[id]/page'
import './app/globals.css'

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/recipe/:id', element: <RecipePage /> },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <LangProvider>
        <RouterProvider router={router} />
      </LangProvider>
    </ThemeProvider>
  </StrictMode>
)
