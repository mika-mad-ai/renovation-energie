import React from 'react';
import { Link } from 'react-router-dom';
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
const PATH = '/blog/canicule-aides-climatisation-2026';
const IMAGE = 'https://renohab.fr/blog/canicule-aides-climatisation-2026.jpg';

export default function ArticleCaniculeClimatisation() {
  useSeo({
    title: "Canicule 2026 : quelles aides pour climatiser son logement ? | RenoHab",
    description:
      "Face à la canicule, quelles aides pour la climatisation en 2026 ? La clim de confort n'est pas subventionnée : on fait le point sur les CEE, la TVA réduite, la PAC réversible et les vraies solutions pour un logement frais.",
    path: PATH,
    image: IMAGE,
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: "Canicule 2026 : quelles aides pour climatiser (ou rafraîchir) son logement ?",
      description:
        "Aides climatisation 2026 : ce que financent réellement les CEE et la TVA réduite, pourquoi MaPrimeRénov' ne couvre pas la clim seule, et les solutions subventionnées pour garder un logement frais.",
      image: IMAGE,
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
      about: ['Climatisation', 'Canicule', 'Pompe à chaleur réversible', 'Certificats d\'économies d\'énergie', 'Confort d\'été'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <img
          src="/blog/canicule-aides-climatisation-2026.jpg"
          alt="Unité de climatisation sur la façade d'un logement en été"
          className="w-full h-auto rounded-2xl shadow-card mb-8 object-cover"
          width="1880"
          height="1253"
        />

        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 30 juin 2026 · Confort d'été &amp; aides
          </p>

          <h1>Canicule 2026 : quelles aides pour climatiser (ou rafraîchir) son logement ?</h1>

          <p className="lead">
            À chaque épisode de canicule, la même question revient : peut-on être aidé pour
            installer une climatisation ? La réponse mérite d'être claire, car beaucoup de
            publicités entretiennent le flou. En 2026, la <strong>clim « de confort » (refroidir
            uniquement) n'est pas subventionnée</strong> par l'État. En revanche, certaines
            solutions qui rafraîchissent <em>et</em> font baisser vos factures, elles, le sont.
            Faisons le tri.
          </p>

          <h2>La climatisation seule : pas de MaPrimeRénov'</h2>
          <p>
            Il faut le dire sans détour : un climatiseur installé <strong>uniquement pour
            rafraîchir</strong> n'ouvre droit à <strong>aucune aide MaPrimeRénov'</strong>. La
            logique des aides de l'État est de financer la <strong>rénovation énergétique</strong>
            (moins consommer, décarboner le chauffage), pas le confort estival en tant que tel.
            Une climatisation réversible coûte généralement entre <strong>1 500 € et 12 000 €</strong>
            posée, selon le nombre de pièces à traiter.
          </p>

          <h2>Le seul vrai coup de pouce : la PAC air/air réversible et les CEE</h2>
          <p>
            Une <strong>pompe à chaleur air/air réversible</strong> chauffe l'hiver et rafraîchit
            l'été. Comme elle sert (aussi) au chauffage, elle peut bénéficier des
            <strong> Certificats d'Économies d'Énergie (CEE)</strong> :
          </p>
          <ul>
            <li>
              Prime CEE indicative <strong>jusqu'à ~1 283 €</strong> pour les ménages les plus
              modestes, et de l'ordre de <strong>770 €</strong> pour les autres (montants variables
              selon revenus, zone et performance de l'appareil).
            </li>
            <li>
              <strong>TVA réduite</strong> sur l'installation (10 % sur la main-d'œuvre dans le cas
              général).
            </li>
            <li>
              Intégrée à une <strong>rénovation d'ampleur</strong>, la PAC air/air peut entrer dans
              l'enveloppe globale et bénéficier de la <strong>TVA à 5,5 %</strong>.
            </li>
          </ul>
          <p className="text-sm text-gray-500">
            Montants indicatifs au 30 juin 2026, soumis à conditions de ressources et aux évolutions
            réglementaires.
          </p>

          <h2>Les vraies solutions (subventionnées) pour un logement frais</h2>
          <p>
            Avant de climatiser, le plus rentable est souvent d'<strong>empêcher la chaleur
            d'entrer</strong> — et là, les aides existent vraiment :
          </p>
          <ul>
            <li>
              <strong>L'isolation de la toiture et des combles</strong> : c'est par le haut que la
              chaleur s'accumule. Bien isolés, ils gardent le logement plus frais l'été (et plus
              chaud l'hiver), avec MaPrimeRénov' et les CEE à la clé.
            </li>
            <li>
              <strong>Les protections solaires</strong> (volets, stores, brise-soleil) : le
              <strong> plan confort d'été présenté par le gouvernement le 18 juin 2026</strong>
              mise précisément sur ces protections et sur les PAC réversibles pour rafraîchir
              logements et écoles.
            </li>
            <li>
              <strong>La ventilation</strong> (VMC, sur-ventilation nocturne) pour évacuer la
              chaleur accumulée.
            </li>
          </ul>
          <p>
            Un <Link to="/dpe-gratuit">audit énergétique avec DPE</Link> permet justement
            d'identifier les travaux prioritaires pour votre logement — souvent l'isolation avant la
            clim.
          </p>

          <h2>Notre conseil avec RenoHab</h2>
          <p>
            Plutôt que de courir après une aide « clim » qui n'existe pas, raisonnez confort global :
            isolation + protection solaire + une PAC réversible bien dimensionnée. En tant
            qu'Accompagnateur Rénov' agréé, RenoHab vérifie votre éligibilité (CEE, MaPrimeRénov'),
            monte les dossiers et coordonne des artisans RGE. Pour chiffrer une solution
            chaud/froid, découvrez notre <Link to="/pompe-a-chaleur">étude pompe à chaleur</Link> ou
            lancez le <Link to="/#simulator">simulateur d'aides</Link>.
          </p>

          <p>
            <strong>À retenir :</strong> la climatisation seule n'est pas aidée en 2026. La voie
            financée, c'est la <strong>PAC air/air réversible (via les CEE)</strong> et surtout les
            travaux qui rendent le logement naturellement plus frais — isolation, protections
            solaires, ventilation.
          </p>
        </article>
      </main>

      <ArticleFooter />
    </div>
  );
}
