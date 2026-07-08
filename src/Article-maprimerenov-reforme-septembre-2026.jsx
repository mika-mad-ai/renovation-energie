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

const PUBLISHED = '2026-07-08';
const PATH = '/blog/maprimerenov-reforme-septembre-2026';

export default function ArticleMaPrimeRenovReforme() {
  useSeo({
    title: "MaPrimeRénov' réforme septembre 2026 : ce qui change et comment s'adapter | RenoHab",
    description:
      "La réforme MaPrimeRénov' présentée le 2 juillet 2026 entre en vigueur le 1er septembre. Quels travaux perdent leur éligibilité ? Quels plafonds changent ? Comment adapter votre projet ?",
    path: PATH,
    image: `https://renohab.fr${PATH}.jpg`,
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: "MaPrimeRénov' : ce qui change en septembre 2026 et comment adapter votre projet",
      description:
        "La réforme MaPrimeRénov' présentée le 2 juillet 2026 entre en vigueur le 1er septembre. Quels travaux perdent leur éligibilité ? Quels plafonds changent ? Comment adapter votre projet ?",
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
      about: ['MaPrimeRénov', 'Rénovation énergétique', 'Aides travaux 2026'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 8 juillet 2026 · Aides &amp; financement
          </p>

          <h1>MaPrimeRénov' : ce qui change en septembre 2026 et comment adapter votre projet</h1>

          <img
            src="/blog/maprimerenov-reforme-septembre-2026.jpg"
            alt="Formulaire de demande de MaPrimeRénov et travaux de rénovation énergétique"
            className="w-full rounded-2xl object-cover max-h-96 mb-8"
            loading="eager"
          />

          <p className="lead">
            Le 2 juillet 2026, le gouvernement a présenté au Conseil national de l'habitat (CNH)
            une réforme profonde de MaPrimeRénov'. Entrée en vigueur prévue : le{' '}
            <strong>1er septembre 2026</strong>. Certains équipements perdent leur éligibilité,
            les plafonds d'aide sont revus à la baisse, et une nouvelle condition exclut les projets
            qui conservent un chauffage majoritairement au gaz. Voici ce qu'il faut savoir pour
            anticiper.
          </p>

          <h2>Ce qui a déjà disparu depuis le 1er janvier 2026</h2>
          <p>
            La réforme a commencé plus tôt que le grand public ne le perçoit. Depuis le{' '}
            <strong>1er janvier 2026</strong>, deux postes ont été retirés du parcours par geste de
            MaPrimeRénov' :
          </p>
          <ul>
            <li>
              L'<strong>isolation des murs</strong> en façade ou en pignon (ITI et ITE).
            </li>
            <li>
              L'installation de <strong>chaudières à biomasse</strong> à alimentation manuelle ou
              automatique.
            </li>
          </ul>
          <p>
            Ces travaux restent accessibles via d'autres dispositifs — Certificats d'Économies
            d'Énergie (CEE), TVA réduite à 5,5 % ou Éco-PTZ — mais la prime ANAH ne les prend plus
            en charge de manière isolée.
          </p>

          <h2>Ce qui disparaît à partir du 1er septembre 2026</h2>
          <p>
            La seconde vague de suppressions concernera, à compter du 1er septembre 2026, les
            équipements suivants dans le cadre du parcours par geste :
          </p>
          <ul>
            <li>
              Les <strong>poêles à bois et équipements à biomasse</strong> en geste unique.
            </li>
            <li>
              Les équipements de chauffage ou d'eau chaude fonctionnant au{' '}
              <strong>solaire thermique</strong> (hors outre-mer).
            </li>
            <li>
              Les <strong>pompes à chaleur dédiées à la production d'eau chaude sanitaire</strong>{' '}
              (thermodynamiques monovalentes).
            </li>
          </ul>

          <h2>Ce qui reste financé : la liste des travaux toujours éligibles</h2>
          <p>
            Malgré ces suppressions, la majorité des travaux performants restent bien couverts par
            MaPrimeRénov' :
          </p>
          <ul>
            <li>
              La <Link to="/pompe-a-chaleur">pompe à chaleur air/eau</Link>, géothermique et
              solarothermique — toujours éligibles au parcours par geste.
            </li>
            <li>
              L'isolation des <strong>combles perdus</strong>, des <strong>rampants</strong> et des{' '}
              <strong>planchers bas</strong>.
            </li>
            <li>
              Le remplacement des <strong>menuiseries</strong> (fenêtres, portes-fenêtres).
            </li>
            <li>
              La <strong>ventilation mécanique contrôlée (VMC) double flux</strong>.
            </li>
          </ul>
          <p>
            En résumé, les travaux à fort impact sur la consommation d'énergie sont maintenus. C'est
            la logique affichée de la réforme : concentrer les aides là où le gain énergétique est
            le plus mesurable.
          </p>

          <h2>Rénovation d'ampleur : des plafonds revus à la baisse</h2>
          <p>
            Les ménages qui envisagent une rénovation globale (gain d'au moins deux classes DPE)
            doivent intégrer une baisse significative des plafonds de dépenses éligibles à partir
            du 1er septembre :
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-emerald-50 text-emerald-900">
                  <th className="p-3 text-left border border-emerald-100">Gain de classes DPE</th>
                  <th className="p-3 text-left border border-emerald-100">Plafond actuel</th>
                  <th className="p-3 text-left border border-emerald-100">Plafond à partir du 1er sept. 2026</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="p-3 border border-gray-200">2 ou 3 classes</td>
                  <td className="p-3 border border-gray-200">40 000 €</td>
                  <td className="p-3 border border-gray-200 text-red-700 font-semibold">30 000 €</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 border border-gray-200">3 classes ou plus</td>
                  <td className="p-3 border border-gray-200">55 000 €</td>
                  <td className="p-3 border border-gray-200 text-red-700 font-semibold">40 000 €</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            Les taux d'aide (pourcentage appliqué au plafond selon vos revenus) restent inchangés.
            La baisse des plafonds réduit donc mécaniquement le montant maximal de la prime versée.
            Pour une rénovation d'ampleur avec un gain de 3 classes ou plus, la prime maximale
            accessible passe par exemple de 55 000 € à 40 000 € de travaux éligibles.
          </p>

          <h2>La nouvelle condition « sortie du gaz »</h2>
          <p>
            C'est la nouveauté la plus structurante de la réforme : à partir du 1er septembre 2026,
            une <strong>rénovation d'ampleur ne sera plus éligible si le logement conserve un
            chauffage majoritairement au gaz</strong> à l'issue des travaux. Autrement dit, un
            projet qui n'inclut pas le remplacement de la chaudière gaz ne pourra pas bénéficier des
            aides globales de la rénovation d'ampleur.
          </p>
          <p>
            Cette règle pousse clairement à coupler isolation et décarbonation du chauffage. Une{' '}
            <Link to="/pompe-a-chaleur">pompe à chaleur air/eau</Link> remplit parfaitement cette
            condition : elle reste éligible à MaPrimeRénov', elle remplace la chaudière gaz, et elle
            réduit les factures de chauffage de 50 à 70 % en moyenne.
          </p>

          <h2>Comment adapter votre projet avant septembre 2026</h2>
          <p>
            Si votre projet implique des équipements qui sortent du dispositif, voici les points clés
            à vérifier :
          </p>
          <ol>
            <li>
              <strong>Solaire thermique ou poêle à bois :</strong> un dossier déposé avant le
              1er septembre 2026 reste traité selon les règles en vigueur à la date de dépôt.
              Anticipez pour ne pas être hors délai.
            </li>
            <li>
              <strong>Isolation des murs :</strong> à financer via les CEE ou l'Éco-PTZ en
              complément d'autres travaux, ou dans le cadre d'une rénovation d'ampleur.
            </li>
            <li>
              <strong>Rénovation d'ampleur avec chauffage gaz :</strong> intégrez le remplacement de
              la chaudière dans votre plan de travaux pour rester éligible aux aides globales.
            </li>
            <li>
              <strong>
                <Link to="/dpe-gratuit">Estimez d'abord votre DPE</Link> :
              </strong>{' '}
              seuls les logements classés E, F ou G sont éligibles à la rénovation d'ampleur. C'est
              la première étape pour savoir où vous en êtes et quelle aide vous pouvez prétendre.
            </li>
          </ol>

          <p>
            La réforme est complexe, mais elle suit une logique claire : concentrer les financements
            sur les projets qui transforment réellement la classe énergétique d'un logement. Bien
            préparé, avec un Accompagnateur Rénov' agréé pour monter votre dossier, votre projet peut
            encore bénéficier d'aides très substantielles — à condition de s'y prendre avant
            septembre.
          </p>
        </article>

        {/* CTA RenoHab */}
        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">
            Faites le point sur votre projet avant septembre
          </h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            RenoHab, Accompagnateur Rénov' agréé ANAH, vous aide à monter votre dossier de
            rénovation avant la réforme et à optimiser vos aides.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/dpe-gratuit"
              className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all"
            >
              Estimer mon DPE gratuitement
            </a>
            <a
              href="/pompe-a-chaleur"
              className="px-6 py-3 rounded-full border border-white/70 text-white font-semibold hover:bg-white/10 transition-all"
            >
              Étudier une pompe à chaleur
            </a>
          </div>
        </div>
      </main>

      <ArticleFooter />
    </div>
  );
}
