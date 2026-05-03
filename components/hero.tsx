import { useLang } from '@/lib/i18n'

export function Hero() {
  const { t } = useLang()
  return (
    <section className="py-12 md:py-20 text-center">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-6 text-balance">
          {t.hero.title}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
          {t.hero.subtitle}
        </p>
      </div>
    </section>
  )
}
