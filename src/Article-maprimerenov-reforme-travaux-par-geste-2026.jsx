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

const PUBLISHED = '2026-06-30';
const PATH = '/blog/maprimerenov-reforme-travaux-par-geste-2026';

export default function ArticleMaPrimeRenovReformeGeste() {
  useSeo({
    title:
      "MaPrimeRénov' 2026 : isolation, fenêtres, chauffage bois bientôt exclus des aides « par geste » | RenoHab",
    description:
      "Le gouvernement prépare une réduction de la liste des travaux éligibles à MaPrimeRénov' par geste dès septembre 2026 : ce qui change, ce qui reste financé, et comment sécuriser vos aides.",
    path: PATH,
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline:
        "MaPrimeRénov' 2026 : isolation, fenêtres et chauffage bois bientôt exclus des aides « par geste »",
      description:
        "Le gouvernement prépare une réduction de la liste des travaux éligibles à MaPrimeRénov' par geste dès septembre 2026 : ce qui change, ce qui reste financé, et comment sécuriser vos aides.",
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
      about: ["MaPrimeRénov'", 'Aides à la rénovation énergétique', 'Rénovation d’ampleur'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 30 juin 2026 · Aides &amp; réglementation
          </p>

          <h1>
            MaPrimeRénov' 2026 : isolation, fenêtres et chauffage bois bientôt exclus des aides
            « par geste »
          </h1>

          <img
            src="/isolation.webp"
            alt="Travaux d'isolation thermique d'un logement, l'un des gestes concernés par la réforme MaPrimeRénov'"
            loading="lazy"
            className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-soft my-6"
          />

          <p className="lead">
            Le ministère du Logement prépare une refonte du parcours « par geste » de
            MaPrimeRénov'. Un décret et un arrêté doivent être présentés le 2 juillet 2026 au
            Conseil national de l'habitat (CNH), avant une entrée en vigueur annoncée pour
            septembre 2026. À la clé : plusieurs travaux financés isolément aujourd'hui ne le
            seraient plus, sauf à les intégrer dans une rénovation globale. Voici ce qu'il faut
            savoir pour ne pas se faire surprendre.
          </p>

          <h2>Ce que prépare le gouvernement</h2>
          <p>
            Jusqu'ici, MaPrimeRénov' « par geste » permet de financer un seul type de travaux à la
            fois (une pompe à chaleur, une isolation, des fenêtres...), indépendamment d'un projet
            global. Le ministère du Logement souhaite resserrer cette liste pour, selon ses propres
            termes, « concentrer l'argent public sur les rénovations les plus efficaces ». L'objectif
            affiché est de pousser davantage de propriétaires vers la <strong>rénovation
            d'ampleur</strong>, qui combine plusieurs gestes et fait gagner au moins deux classes de
            DPE d'un coup, plutôt que vers des travaux isolés jugés moins efficaces sur la durée.
          </p>

          <h2>Les travaux qui sortiraient du parcours par geste</h2>
          <p>
            Selon les informations relayées par la presse spécialisée fin juin 2026, la liste des
            travaux qui ne seraient plus subventionnés isolément comprendrait :
          </p>
          <ul>
            <li>l'isolation des combles, des toitures et des murs (ITE comme ITI) ;</li>
            <li>le remplacement de fenêtres ;</li>
            <li>l'installation de poêles à bois ou à granulés et de chaudières bois ;</li>
            <li>les chauffe-eau et chauffages solaires (hors Outre-mer) ;</li>
            <li>les pompes à chaleur dédiées uniquement à l'eau chaude sanitaire ;</li>
            <li>les systèmes de ventilation (VMC).</li>
          </ul>
          <p>
            Pour rester finançables, ces travaux devraient désormais s'inscrire dans un projet de
            rénovation globale du logement, et non plus être réalisés — et aidés — de façon isolée.
          </p>

          <h2>Ce qui resterait financé au coup par coup</h2>
          <p>
            D'après les mêmes sources, le parcours par geste continuerait de couvrir un nombre
            restreint d'opérations jugées prioritaires :
          </p>
          <ul>
            <li>l'installation d'une pompe à chaleur utilisée pour le chauffage ;</li>
            <li>le raccordement à un réseau de chaleur ou de froid ;</li>
            <li>la dépose d'une cuve à fioul.</li>
          </ul>
          <p>
            Sans surprise, ce sont les gestes qui permettent de sortir le plus vite d'une chaudière
            fossile — cohérent avec les priorités déjà affichées sur le DPE, les CEE et l'Éco-PTZ.
          </p>

          <h2>Pourquoi cela renforce l'intérêt de la rénovation d'ampleur</h2>
          <p>
            Cette réforme s'inscrit dans une logique déjà à l'œuvre avec l'<strong>Éco-PTZ</strong>{' '}
            : depuis le 1er juillet 2025, ses exigences techniques sont alignées sur celles de
            MaPrimeRénov', et pour financer une rénovation globale, un audit énergétique préalable
            est obligatoire — il doit démontrer un gain d'au moins deux classes DPE. En contrepartie,
            les plafonds de financement de l'Éco-PTZ ont été rehaussés : jusqu'à 50 000 € pour une
            rénovation complète, 30 000 € pour trois travaux ou plus, 25 000 € pour deux travaux et
            15 000 € pour une action unique. Combiné à MaPrimeRénov' et aux Certificats d'Économie
            d'Énergie (CEE), ce cadre rend une rénovation globale bien financée souvent plus
            avantageuse, à terme, qu'une succession de petits travaux non coordonnés.
          </p>

          <h2>Que faire si vous avez un projet de travaux ?</h2>
          <p>
            Si vous envisagiez un geste isolé (isolation, fenêtres, VMC...) avant la fin de l'été
            2026, il peut être pertinent d'accélérer votre dossier pour le déposer avant le
            basculement annoncé en septembre. À l'inverse, si votre projet est plus large, c'est le
            bon moment pour le transformer en rénovation d'ampleur et sécuriser un financement plus
            confortable.
          </p>
          <p>
            Dans tous les cas, tout part du même point de départ : connaître la classe énergétique
            réelle de votre logement. Notre outil de{' '}
            <a href="/dpe-gratuit">diagnostic DPE gratuit en ligne</a> donne une première estimation
            en quelques minutes, et notre <a href="/#simulator">simulateur d'aides</a> chiffre le
            reste à charge selon vos revenus et vos travaux. Si le chauffage fait partie de votre
            projet, pensez aussi à étudier une <a href="/pompe-a-chaleur">pompe à chaleur air/eau</a>{' '}
            : c'est l'un des rares gestes qui resterait financé isolément, et c'est souvent le geste
            le plus rentable pour sortir d'une chaudière au fioul ou au gaz.
          </p>
          <p>
            En tant qu'Accompagnateur Rénov' agréé, RenoHab monte les dossiers d'aides, missionne
            l'audit énergétique réglementaire et coordonne des artisans RGE pour transformer un
            projet ponctuel en rénovation globale cohérente — avant que les règles ne changent.
          </p>
        </article>

        {/* CTA RenoHab */}
        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Sécurisez vos aides avant la réforme</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            Diagnostic, audit énergétique, montage des dossiers : RenoHab vous accompagne pour
            transformer votre projet en rénovation d'ampleur bien financée.
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
