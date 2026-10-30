import React from 'react';
import useSeo from './useSeo';
import ArticleCard from './ArticleCard';
import { SiteHeader, SiteFooter } from './SiteChrome';
import { ARTICLES, articlePath } from './blog/articles';

const PATH = '/blog';
const TITLE = "Blog rénovation énergétique : aides, DPE, chauffage, isolation | RenoHab";
const DESCRIPTION =
  "Tous les guides RenoHab pour réussir votre rénovation énergétique en 2026 : MaPrimeRénov', CEE, éco-PTZ, DPE, pompe à chaleur, isolation. Conseils clairs et à jour.";

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
    <div className="min-h-screen bg-gray-50 text-gray-800 antialiased flex flex-col">
      <SiteHeader />

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

      <SiteFooter />
    </div>
  );
}
