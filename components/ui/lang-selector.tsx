import { useLang } from '@/lib/i18n'
import { FlagGB, FlagDE } from '@/components/ui/flags'

export function LangSelector() {
  const { lang, setLang } = useLang()
  return (
    <div className="flex items-center gap-1.5">
      <button
        onClick={() => setLang('en')}
        className={lang === 'en' ? 'opacity-100' : 'opacity-35 hover:opacity-60 transition-opacity'}
        aria-label="English"
      >
        <FlagGB className="w-5 h-5" />
      </button>
      <button
        onClick={() => setLang('de')}
        className={lang === 'de' ? 'opacity-100' : 'opacity-35 hover:opacity-60 transition-opacity'}
        aria-label="Deutsch"
      >
        <FlagDE className="w-5 h-5" />
      </button>
    </div>
  )
}
