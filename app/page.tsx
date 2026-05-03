import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { RecipeList } from "@/components/recipe-list";
import { recipes } from "@/lib/recipes";
import { useLang } from "@/lib/i18n";

export default function Home() {
  const { t } = useLang()
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />

      <section className="pb-16 md:pb-24">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <RecipeList recipes={recipes} />
        </div>
      </section>

      <footer className="py-8 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
          <p className="text-sm text-muted-foreground">{t.footer}</p>
        </div>
      </footer>
    </main>
  );
}
