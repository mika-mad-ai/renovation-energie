import React from 'react';
import useSeo from './useSeo';
import ArticleCard from './ArticleCard';
import { ARTICLES, articlePath } from './blog/articles';

const PATH = '/blog';
const TITLE = "Blog rénovation énergétique : aides, DPE, chauffage, isolation | RenoHab";
const DESCRIPTION =
  "Tous les guides RenoHab pour réussir votre rénovation énergétique en 2026 : MaPrimeRénov', CEE, éco-PTZ, DPE, pompe à chaleur, isolation. Conseils clairs et à jour.";

function BlogHeader() {
  return (
    <header className="w-full bg-white shadow-soft sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          <a href="/" aria-label="Accueil RenoHab">
            <img src="/RenoHabLogo.webp" alt="RenoHab" className="h-24 md:h-28 w-auto" width="112" height="112" />
          </a>
          <nav className="flex items-center gap-3">
            <a
              href="/pompe-a-chaleur"
              className="hidden sm:inline-flex px-5 py-2 rounded-full border border-emerald-500 text-emerald-700 font-semibold hover:bg-emerald-50 transition-all"
            >
              Devis PAC
            </a>
            <a
              href="/"
              className="px-5 py-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold shadow-soft hover:shadow-glow transition-all"
            >
              ← Accueil
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

function BlogFooter() {
  return (
    <footer className="w-full bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto py-10 px-4 sm:px-6 lg:px-8 text-center">
        <img src="/RenoHabLogo.webp" alt="RenoHab" className="h-28 w-auto mx-auto mb-3" loading="lazy" width="112" height="112" />
        <p className="text-gray-400">Votre Rénovation Énergétique, Simplifiée &amp; Financée.</p>
        <p className="mt-6 text-sm text-gray-500">© {new Date().getFullYear()} RenoHab. Tous droits réservés.</p>
        <p className="mt-3 text-sm text-gray-500">
          <a href="/mentions-legales" className="hover:text-emerald-300 transition-colors">Mentions légales</a>
          <span className="mx-2 opacity-60">·</span>
          <a href="/confidentialite" className="hover:text-emerald-300 transition-colors">Politique de confidentialité</a>
        </p>
      </div>
    </footer>
  );
}

export default function Blog() {
  useSeo({
    title: TITLE,
    description: DESCRIPTION,
    path: PATH,
    type: 'website',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Blog RenoHab – rénovation énergétique',
      description: DESCRIPTION,
      url: `https://renohab.fr${PATH}`,
      inLanguage: 'fr-FR',
      isPartOf: { '@type': 'WebSite', name: 'RenoHab', url: 'https://renohab.fr/' },
      mainEntity: {
        '@type': 'ItemList',
        numberOfItems: ARTICLES.length,
        itemListElement: ARTICLES.map((a, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: a.title,
          url: `https://renohab.fr${articlePath(a)}`,
        })),
      },
    },
  });

  const [latest, ...others] = ARTICLES;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800 antialiased flex flex-col">
      <BlogHeader />

      <main className="flex-grow max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <p className="text-emerald-700 font-semibold text-sm uppercase tracking-wide mb-3">Ressources &amp; conseils</p>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight font-display mb-4">
            Le blog de la rénovation énergétique
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Aides, DPE, chauffage, isolation : {ARTICLES.length} guides clairs et à jour pour préparer vos
            travaux et maximiser vos financements.
          </p>
        </div>

        {latest && (
          <section aria-label="Dernier article" className="mb-10 md:mb-14">
            <h2 className="sr-only">Dernier article</h2>
            <div className="max-w-3xl mx-auto">
              <ArticleCard article={latest} eager />
            </div>
          </section>
        )}

        <section aria-label="Tous les articles">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-display mb-6 md:mb-8">Tous nos articles</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {others.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </section>

        <div className="mt-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 md:p-10 text-center shadow-card">
          <h2 className="text-2xl md:text-3xl font-bold font-display mb-2">Un projet de rénovation ?</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            Audit, plan de travaux, montage des aides : RenoHab, Accompagnateur Rénov' agréé, s'occupe de tout.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/dpe-gratuit" className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all">
              Estimer mon DPE
            </a>
            <a href="/pompe-a-chaleur" className="px-6 py-3 rounded-full border border-white/70 text-white font-semibold hover:bg-white/10 transition-all">
              Étudier une pompe à chaleur
            </a>
          </div>
        </div>
      </main>

      <BlogFooter />
    </div>
  );
}
