import React from 'react';
import useSeo from './useSeo';

// En-tête et pied de page locaux, alignés sur le style du reste du site.
function ArticleHeader() {
  return (
    <header className="w-full bg-white shadow-soft sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          <a href="/" aria-label="Accueil RenoHab">
            <img src="/RenoHabLogo.webp" alt="RenoHab" className="h-24 md:h-28 w-auto" />
          </a>
          <a
            href="/"
            className="px-5 py-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold shadow-soft hover:shadow-glow transition-all"
          >
            ← Accueil
          </a>
        </div>
      </div>
    </header>
  );
}

function ArticleFooter() {
  return (
    <footer className="w-full bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto py-10 px-4 sm:px-6 lg:px-8 text-center">
        <img src="/RenoHabLogo.webp" alt="RenoHab" className="h-28 w-auto mx-auto mb-3" loading="lazy" />
        <p className="text-gray-400">Votre Rénovation Énergétique, Simplifiée & Financée.</p>
        <p className="mt-6 text-sm text-gray-500">© {new Date().getFullYear()} RenoHab. Tous droits réservés.</p>
      </div>
    </footer>
  );
}

const PUBLISHED = '2026-06-18';
const PATH = '/blog/valorisation-immobiliere-renovation-energetique';

export default function ArticleValorisationImmobiliere() {
  useSeo({
    title: "Valoriser son bien : rénovation énergétique et investissement immobilier en 2026 | RenoHab",
    description:
      "Comment la rénovation énergétique augmente la valeur d'un logement en 2026, et comment diversifier son patrimoine immobilier, de la France à l'international.",
    path: PATH,
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline:
        "Valoriser son patrimoine immobilier en 2026 : la rénovation énergétique comme levier",
      description:
        "Comment la rénovation énergétique augmente la valeur d'un logement en 2026, et comment diversifier son patrimoine immobilier, de la France à l'international.",
      datePublished: PUBLISHED,
      dateModified: PUBLISHED,
      inLanguage: 'fr-FR',
      mainEntityOfPage: { '@type': 'WebPage', '@id': `https://renohab.fr${PATH}` },
      author: { '@type': 'Organization', name: 'RenoHab', url: 'https://renohab.fr/' },
      publisher: {
        '@type': 'Organization',
        name: 'RenoHab',
        logo: { '@type': 'ImageObject', url: 'https://renohab.fr/logo192-renohab.png' },
      },
      about: ['Rénovation énergétique', 'Valorisation immobilière', 'Investissement immobilier'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 18 juin 2026 · Conseils patrimoine
          </p>

          <h1>Valoriser son patrimoine immobilier en 2026 : la rénovation énergétique comme levier</h1>

          <p className="lead">
            En 2026, la performance énergétique n'est plus un détail : c'est l'un des principaux
            critères de valeur d'un logement. Entre le durcissement de la réglementation et les
            attentes des acheteurs, rénover est devenu un véritable choix d'investissement. Tour
            d'horizon des leviers pour valoriser un bien — et des pistes pour diversifier son
            patrimoine immobilier.
          </p>

          <h2>Pourquoi la performance énergétique pèse sur la valeur d'un bien</h2>
          <p>
            Le Diagnostic de Performance Énergétique (DPE) est désormais central dans toute
            transaction. Un logement bien classé se vend plus vite et plus cher, tandis qu'une
            « passoire énergétique » subit une décote — la fameuse <em>« valeur verte »</em>.
            Depuis le 1er janvier 2025, les logements classés <strong>G</strong> sont interdits à
            la location, suivis des <strong>F en 2028</strong> et des <strong>E en 2034</strong> :
            pour un propriétaire bailleur, rénover n'est plus optionnel.
          </p>
          <p>
            Bonne nouvelle : le nouveau mode de calcul du DPE entré en vigueur au 1er janvier 2026
            (coefficient de l'électricité abaissé de 2,3 à 1,9) fait gagner une classe à de
            nombreux logements chauffés à l'électricité.
          </p>

          <h2>Les travaux qui font vraiment grimper la valeur</h2>
          <ul>
            <li><strong>L'isolation</strong> (combles, murs, planchers) : le meilleur rapport gain énergétique / coût.</li>
            <li><strong>La pompe à chaleur air/eau</strong> : remplace une chaudière fossile, éligible à MaPrimeRénov', aux CEE et à la TVA réduite à 5,5 %.</li>
            <li><strong>La ventilation (VMC double flux)</strong> : confort, qualité de l'air et économies.</li>
            <li><strong>Le remplacement des menuiseries</strong> : gain de classe et de confort thermique.</li>
          </ul>
          <p>
            Bien combinés dans une <strong>rénovation d'ampleur</strong>, ces gestes permettent un
            saut de deux classes DPE ou plus, condition d'accès aux aides les plus généreuses.
            En tant qu'Accompagnateur Rénov', RenoHab monte les dossiers d'aides et coordonne des
            artisans RGE pour sécuriser le chantier — et donc la plus-value finale.
          </p>

          <h2>Rénover, c'est investir : raisonner « patrimoine »</h2>
          <p>
            Une rénovation énergétique réussie, c'est un actif qui prend de la valeur tout en
            réduisant les charges. Mais une bonne stratégie patrimoniale repose aussi sur la
            <strong> diversification</strong> : ne pas concentrer tout son capital sur un seul bien
            ou un seul marché.
          </p>
          <p>
            À côté de l'optimisation du patrimoine en France, certains investisseurs se tournent
            vers des marchés internationaux dynamiques. Dubaï, par exemple, attire pour ses
            rendements locatifs, sa fiscalité avantageuse et son dispositif de résidence
            (« Golden Visa »). Pour les profils intéressés par ce type de diversification, le
            cabinet{' '}
            <a href="https://dubainvest.eu" target="_blank" rel="noopener">
              DubAInvest, spécialiste de l'investissement immobilier à Dubaï
            </a>{' '}
            accompagne les investisseurs européens dans le choix des biens, l'estimation des
            rendements et les démarches de visa investisseur, avec l'appui d'un conseiller IA dédié.
          </p>
          <p>
            Que l'on rénove en France ou que l'on investisse à l'étranger, la logique reste la
            même : transformer son immobilier en actif performant, valorisé et adapté aux nouvelles
            exigences du marché.
          </p>

          <h2>Par où commencer ?</h2>
          <p>
            La première étape concrète reste le diagnostic de votre logement actuel : c'est lui qui
            conditionne l'accès aux aides et la stratégie de travaux.
          </p>
        </article>

        {/* CTA RenoHab */}
        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Estimez le potentiel de votre bien</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            Audit, plan de travaux, montage des aides : RenoHab vous accompagne pour valoriser votre logement.
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

      <ArticleFooter />
    </div>
  );
}
