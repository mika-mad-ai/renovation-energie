import React from 'react';
import { Link } from 'react-router-dom';
import useSeo from './useSeo';

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
        <p className="text-gray-400">Votre Rénovation Énergétique, Simplifiée &amp; Financée.</p>
        <p className="mt-6 text-sm text-gray-500">© {new Date().getFullYear()} RenoHab. Tous droits réservés.</p>
      </div>
    </footer>
  );
}

const PUBLISHED = '2026-07-03';
const PATH = '/blog/maprimerenov-par-geste-septembre-2026';

export default function ArticleMaPrimeRenovParGeste() {
  useSeo({
    title: "MaPrimeRénov' 2026 : les 6 travaux exclus du parcours par geste en septembre | RenoHab",
    description:
      "Dès septembre 2026, isolation des combles, fenêtres, VMC, poêle à bois et chauffe-eau quittent MaPrimeRénov' par geste. Découvrez ce qui change, les exceptions et comment agir avant la réforme.",
    path: PATH,
    image: `https://renohab.fr/blog/maprimerenov-par-geste-septembre-2026.jpg`,
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline:
        "MaPrimeRénov' 2026 : les 6 travaux exclus du parcours par geste en septembre",
      description:
        "Dès septembre 2026, isolation des combles, fenêtres, VMC, poêle à bois et chauffe-eau quittent MaPrimeRénov' par geste. Découvrez ce qui change, les exceptions et comment agir avant la réforme.",
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
      about: ["MaPrimeRénov'", 'Rénovation énergétique', 'Aides travaux 2026'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 3 juillet 2026 · Aides &amp; réforme
          </p>

          <h1>MaPrimeRénov' 2026 : les 6 travaux exclus du parcours par geste en septembre</h1>

          <img
            src="/blog/maprimerenov-par-geste-septembre-2026.jpg"
            alt="Rénovation énergétique et aides MaPrimeRénov' 2026"
            className="w-full rounded-xl object-cover max-h-72 mb-8"
            loading="eager"
          />

          <p className="lead">
            Depuis le 23 février 2026, MaPrimeRénov' est de nouveau ouverte après plusieurs mois de
            suspension. Mais une réforme importante se profile : à partir de <strong>septembre
            2026</strong>, six types de travaux ne seront plus finançables via le parcours dit « par
            geste ». Isolation des combles, fenêtres, VMC, poêle à bois… des milliers de ménages
            sont concernés. Voici tout ce qui change — et comment anticiper.
          </p>

          <h2>Pourquoi réformer le parcours par geste ?</h2>
          <p>
            Le parcours MaPrimeRénov' « par geste » (ou monogeste) permet de financer un seul type
            de travaux à la fois, sans exigence de performance globale du logement. C'est le chemin
            le plus simple : un dossier allégé, pas d'audit préalable obligatoire, des délais plus
            courts.
          </p>
          <p>
            Mais le gouvernement juge que des gestes isolés — une fenêtre ici, des combles là — ne
            conduisent pas à une réduction significative de la consommation énergétique réelle. La
            réforme vise à <strong>concentrer les aides publiques sur des rénovations plus globales
            et plus efficaces</strong>, en particulier la rénovation d'ampleur, qui exige un saut
            d'au moins deux classes au DPE.
          </p>

          <h2>Les 6 travaux exclus dès septembre 2026</h2>
          <p>
            À partir de la date d'entrée en vigueur du décret — attendue début septembre 2026 — ces
            six postes quitteront le parcours par geste :
          </p>
          <ol>
            <li><strong>Isolation des toits-terrasses et des combles</strong> (perdus ou aménagés)</li>
            <li><strong>Remplacement des fenêtres et portes-fenêtres</strong></li>
            <li><strong>Ventilation mécanique contrôlée (VMC)</strong> — simple flux ou double flux</li>
            <li><strong>Poêles à bois ou à granulés</strong></li>
            <li><strong>Chauffe-eau solaire individuel et chauffage solaire combiné</strong></li>
            <li><strong>Chauffe-eau thermodynamique</strong></li>
          </ol>
          <p>
            Ces travaux représentaient jusqu'ici une part massive des dossiers déposés. L'isolation
            des combles perdus, en particulier, est l'un des gestes les plus rentables : un
            investissement de 1 500 à 3 000 € pouvait réduire la facture de chauffage de 20 à 30 %.
          </p>

          <h2>Ce qui reste dans le parcours par geste</h2>
          <p>Après septembre 2026, seulement trois interventions resteront éligibles au monogeste :</p>
          <ul>
            <li>
              <strong>La pompe à chaleur air/eau</strong> (pour le chauffage) — voir notre guide{' '}
              <Link to="/pompe-a-chaleur">pompe à chaleur : prix et aides 2026</Link>
            </li>
            <li><strong>Le raccordement à un réseau de chaleur urbain</strong></li>
            <li><strong>La dépose d'une cuve à fioul</strong> (dans le cadre d'un changement de système)</li>
          </ul>
          <p>
            Si vous envisagez une pompe à chaleur, c'est donc le moment idéal : ce dispositif reste
            au cœur du parcours par geste et continue de bénéficier des montants d'aide les plus
            significatifs.
          </p>

          <h2>Exception pour les passoires thermiques F et G</h2>
          <p>
            Une disposition transitoire protège les propriétaires de logements très énergivores : les
            biens classés <strong>F ou G au DPE</strong> conservent l'accès au parcours par geste —
            y compris pour les six travaux exclus — jusqu'au <strong>31 décembre 2026</strong>.
          </p>
          <p>
            À compter du 1er janvier 2027, ils devront basculer vers la rénovation d'ampleur. Si vous
            êtes dans cette situation, cette fenêtre de transition est précieuse : commencez par
            faire réaliser un{' '}
            <Link to="/dpe-gratuit">diagnostic de performance énergétique</Link> pour connaître votre
            classe et planifier vos travaux avant la fermeture du parcours par geste.
          </p>

          <h2>Agir avant septembre 2026 : la règle des dossiers déposés</h2>
          <p>
            Point clé pour ceux qui ont déjà prévu des travaux :{' '}
            <strong>
              tout dossier MaPrimeRénov' déposé avant l'entrée en vigueur du décret reste éligible
              sous les anciennes règles
            </strong>
            , même si les travaux sont réalisés après septembre 2026.
          </p>
          <p>
            Il est donc crucial de finaliser votre dossier rapidement si vous envisagez de l'isolation
            de combles, des nouvelles menuiseries ou une VMC. RenoHab, en tant qu'Accompagnateur
            Rénov' agréé, peut vous aider à constituer et déposer votre dossier en quelques jours.
          </p>

          <h2>La rénovation d'ampleur : l'alternative plus globale</h2>
          <p>
            Pour les travaux qui quittent le parcours par geste, la voie reste ouverte via le{' '}
            <strong>parcours rénovation d'ampleur</strong>. Ce dispositif exige :
          </p>
          <ul>
            <li>Un <strong>audit énergétique</strong> préalable réalisé par un professionnel certifié</li>
            <li>Un <strong>saut d'au moins deux classes DPE</strong></li>
            <li>
              L'accompagnement par un Mon Accompagnateur Rénov' (MAR) agréé — rôle qu'assure RenoHab
            </li>
          </ul>
          <p>
            En contrepartie, les montants d'aides sont sensiblement plus élevés : jusqu'à{' '}
            <strong>70 % du coût des travaux</strong> pour les ménages aux revenus modestes, avec
            un plafond global de 40 000 € HT pour un saut de 2 à 3 classes, et 55 000 € HT au-delà.
            Pour un logement énergivore avec plusieurs postes à traiter, la rénovation d'ampleur
            peut se révéler plus avantageuse que des gestes isolés répétés.
          </p>
          <p>
            Testez votre éligibilité et estimez votre reste à charge avec notre{' '}
            <Link to="/simulateur">simulateur d'aides en ligne</Link>.
          </p>

          <h2>En résumé : ce qu'il faut retenir</h2>
          <ul>
            <li>
              Dès <strong>septembre 2026</strong>, six travaux quittent le parcours par geste :
              isolation combles, fenêtres, VMC, poêle à bois/granulés, chauffe-eau solaire, chauffe-eau
              thermodynamique.
            </li>
            <li>
              Ce qui reste en monogeste : <strong>PAC chauffage, réseau de chaleur, dépose fioul</strong>.
            </li>
            <li>
              Dossiers déposés <strong>avant septembre 2026</strong> : toujours valables sous l'ancien
              cadre — à finaliser rapidement.
            </li>
            <li>
              Passoires <strong>F ou G</strong> : exception maintenue jusqu'au 31 décembre 2026.
            </li>
            <li>
              Alternative : rénovation d'ampleur, avec des aides potentiellement plus généreuses pour
              les projets globaux.
            </li>
          </ul>
        </article>

        {/* CTA RenoHab */}
        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">
            Déposez votre dossier avant la réforme
          </h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            RenoHab monte votre dossier MaPrimeRénov' de A à Z. Agissez avant septembre 2026 pour
            sécuriser vos aides sur l'isolation, les fenêtres ou la VMC.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/dpe-gratuit"
              className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all"
            >
              Estimer mon DPE gratuit
            </a>
            <a
              href="/simulateur"
              className="px-6 py-3 rounded-full border border-white/70 text-white font-semibold hover:bg-white/10 transition-all"
            >
              Simuler mes aides
            </a>
          </div>
        </div>
      </main>

      <ArticleFooter />
    </div>
  );
}
