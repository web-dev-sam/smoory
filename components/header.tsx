import { Leaf, ArrowLeft, Sun, Moon } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { useTheme } from 'next-themes'
import { useLang } from '@/lib/i18n'
import { LangSelector } from '@/components/ui/lang-selector'

interface HeaderProps {
  showBack?: boolean
}

export function Header({ showBack }: HeaderProps) {
  const navigate = useNavigate()
  const { resolvedTheme, setTheme } = useTheme()
  const { t } = useLang()

  return (
    <header className="py-6 md:py-8">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <div className="flex items-center">
          {/* Left — flex-1 keeps logo centered regardless of content width */}
          <div className="flex-1 flex items-center gap-5">
            {showBack && (
              <button
                onClick={() => navigate('/')}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <div className="w-9 h-9 rounded-full bg-secondary/50 flex items-center justify-center group-hover:bg-secondary transition-colors">
                  <ArrowLeft className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium hidden sm:inline">{t.back}</span>
              </button>
            )}
            <LangSelector />
          </div>

          {/* Center */}
          <Link
            to="/"
            className="flex items-center gap-2.5"
            onClick={(e) => {
              if (showBack) {
                e.preventDefault()
                navigate('/')
              }
            }}
          >
            <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
              <Leaf className="w-4 h-4 text-primary" />
            </div>
            <span className="font-serif text-xl font-medium text-foreground">Smoory</span>
          </Link>

          {/* Right — flex-1 + justify-end mirrors the left */}
          <div className="flex-1 flex justify-end">
            <button
              onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
              className="w-9 h-9 rounded-full bg-secondary/50 flex items-center justify-center hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
              aria-label="Toggle theme"
            >
              {resolvedTheme === 'dark' ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
