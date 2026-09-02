import React from 'react';
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
        <p className="text-gray-400">Votre Rénovation Énergétique, Simplifiée & Financée.</p>
        <p className="mt-6 text-sm text-gray-500">© {new Date().getFullYear()} RenoHab. Tous droits réservés.</p>
      </div>
    </footer>
  );
}

const PUBLISHED = '2026-09-02';
const PATH = '/blog/pompe-a-chaleur-geothermique-sol-eau-2026';

export default function ArticlePompeAChaleurGeothermique2026() {
  useSeo({
    title: "Pompe à chaleur géothermique (sol/eau) : fonctionnement, prix et aides en 2026 | RenoHab",
    description:
      "Tout savoir sur la pompe à chaleur géothermique sol/eau en 2026 : capteurs horizontaux ou sondes verticales, COP, coût d'installation, aides (CEE, TVA 5,5 %, Éco-PTZ, MaPrimeRénov').",
    path: PATH,
    image: '/blog/pompe-a-chaleur-geothermique-sol-eau-2026.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline:
        "Pompe à chaleur géothermique (sol/eau) : fonctionnement, prix et aides en 2026",
      description:
        "Tout savoir sur la pompe à chaleur géothermique sol/eau en 2026 : capteurs horizontaux ou sondes verticales, COP, coût d'installation, aides (CEE, TVA 5,5 %, Éco-PTZ, MaPrimeRénov').",
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
      about: ['Pompe à chaleur géothermique', 'Rénovation énergétique', 'Aides 2026', 'PAC sol/eau'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 2 septembre 2026 · Chauffage &amp; aides
          </p>

          <h1>Pompe à chaleur géothermique (sol/eau) : fonctionnement, prix et aides en 2026</h1>

          <img
            src="/blog/pompe-a-chaleur-geothermique-sol-eau-2026.jpg"
            alt="Installation d'une pompe à chaleur géothermique sol/eau"
            className="w-full rounded-xl object-cover mb-8"
            style={{ maxHeight: '420px' }}
            loading="eager"
          />

          <p className="lead">
            Silencieuse, performante et indépendante des caprices météorologiques, la pompe à
            chaleur géothermique sol/eau exploite l'énergie naturellement stockée dans le sol pour
            chauffer votre logement. Elle affiche parmi les meilleurs coefficients de performance
            du marché — et reste éligible à des aides significatives en 2026, notamment dans le
            cadre d'une rénovation d'ampleur. Décryptage complet.
          </p>

          <h2>Comment fonctionne une PAC géothermique sol/eau ?</h2>
          <p>
            À la différence d'une{' '}
            <a href="/pompe-a-chaleur">pompe à chaleur air/eau</a>, qui puise la chaleur dans
            l'air extérieur, la PAC géothermique capte la chaleur contenue dans le sol ou dans une
            nappe phréatique. Le sol, à faible profondeur, maintient une température relativement
            stable tout au long de l'année — entre 10 °C et 15 °C en France selon les régions. Un
            fluide frigorigène circulant dans des capteurs enterrés absorbe cette chaleur, qu'une
            pompe thermodynamique concentre et restitue à un circuit d'eau chaude alimentant les
            radiateurs ou le plancher chauffant.
          </p>
          <p>
            Résultat : pour 1 kWh d'électricité consommé, une PAC géothermique restituera entre
            3,5 et 5 kWh de chaleur — c'est ce qu'on appelle le{' '}
            <strong>Coefficient de Performance (COP)</strong>. Ce rendement est généralement
            supérieur à celui des modèles air/eau (COP de 2,5 à 4), surtout lors des vagues de
            froid où les PAC air/eau peinent davantage.
          </p>

          <h2>Capteurs horizontaux ou sondes verticales : quelle différence ?</h2>
          <p>
            Il existe deux grandes configurations pour les capteurs géothermiques, chacune adaptée
            à un profil de terrain différent :
          </p>

          <h3>Capteurs horizontaux</h3>
          <ul>
            <li>
              Des tubes sont enterrés à environ <strong>60 à 120 cm de profondeur</strong>,
              répartis sur une grande surface de terrain.
            </li>
            <li>
              La surface nécessaire représente <strong>1 à 1,5 fois la surface habitable</strong>{' '}
              du logement (ex. : 150 à 225 m² de terrain pour une maison de 150 m²).
            </li>
            <li>
              Coût d'installation moins élevé, mais terrain imperméabilisé (pas de piscine, ni
              plantation d'arbres au-dessus des capteurs).
            </li>
          </ul>

          <h3>Sondes géothermiques verticales</h3>
          <ul>
            <li>
              Des forages atteignent <strong>80 à 200 m de profondeur</strong>, ce qui nécessite
              peu de terrain en surface.
            </li>
            <li>
              Solution idéale pour les terrains restreints ou les zones urbaines.
            </li>
            <li>
              Coût de forage plus élevé, et une{' '}
              <strong>déclaration préfectorale obligatoire</strong> au-delà de 10 m de forage.
            </li>
          </ul>

          <h2>Quel est le coût d'une PAC géothermique en 2026 ?</h2>
          <p>
            L'investissement est plus conséquent que pour une PAC air/eau, notamment en raison des
            travaux de terrassement ou de forage. À titre indicatif :
          </p>
          <ul>
            <li>
              <strong>PAC géothermique à capteurs horizontaux</strong> : entre 15 000 € et
              22 000 € TTC fourniture et pose pour une maison de 100 à 150 m².
            </li>
            <li>
              <strong>PAC géothermique à sondes verticales</strong> : entre 18 000 € et 35 000 €
              TTC selon le nombre de forages requis.
            </li>
          </ul>
          <p>
            Ces fourchettes varient selon la région, la nature du sol, le dimensionnement de
            l'installation et les tarifs des installateurs. Un devis comparatif auprès de
            plusieurs artisans <strong>RGE (Reconnu Garant de l'Environnement)</strong> est
            indispensable pour cadrer le budget réel.
          </p>

          <h2>Quelles aides en 2026 pour financer une PAC géothermique ?</h2>
          <p>
            Depuis la réforme de septembre 2026, <strong>MaPrimeRénov'</strong> ne finance plus
            les gestes de chauffage à titre isolé. En revanche, la PAC géothermique reste
            éligible dans le cadre d'une{' '}
            <strong>rénovation d'ampleur</strong> permettant un saut d'au moins deux classes DPE,
            accompagnée par un Accompagnateur Rénov' agréé. Les taux de subvention (de 30 % à
            65 % du montant des travaux plafonné, selon les revenus du foyer) représentent alors
            une aide très significative.
          </p>
          <p>Hors MaPrimeRénov', plusieurs dispositifs restent accessibles sans condition de
          rénovation globale :</p>
          <ul>
            <li>
              <strong>TVA à 5,5 %</strong> sur la fourniture et la pose, au lieu de 20 %,
              applicable dès lors que l'installateur est un professionnel qualifié RGE.
            </li>
            <li>
              <strong>Certificats d'Économie d'Énergie (CEE)</strong> : prime versée par les
              fournisseurs d'énergie (obligés), calculée sur les kWh d'énergie économisés. Son
              montant varie selon les offres du marché.
            </li>
            <li>
              <strong>Éco-PTZ</strong> : prêt à taux zéro pouvant atteindre{' '}
              <strong>50 000 €</strong> sur 20 ans pour financer une rénovation énergétique
              performante. Cumulable avec les CEE et MaPrimeRénov'.
            </li>
          </ul>
          <p>
            Utilisez notre{' '}
            <a href="/#simulator">simulateur d'aides</a> pour estimer rapidement le reste à
            charge de votre projet en fonction de vos revenus.
          </p>

          <h2>PAC géothermique vs PAC air/eau : quand choisir la géothermie ?</h2>
          <p>
            La PAC géothermique s'impose dans plusieurs situations :
          </p>
          <ul>
            <li>
              Vous disposez d'un <strong>terrain suffisant</strong> (capteurs horizontaux) ou
              d'un budget permettant le forage (sondes verticales).
            </li>
            <li>
              Vous souhaitez un équipement <strong>totalement silencieux</strong> sans unité
              extérieure visible.
            </li>
            <li>
              Votre logement est situé dans une région à <strong>hivers rigoureux</strong>, où
              le COP d'une PAC air/eau chute fortement lors des grands froids.
            </li>
            <li>
              Vous planifiez une rénovation d'ampleur et visez un{' '}
              <strong>DPE A ou B</strong> à long terme.
            </li>
          </ul>
          <p>
            Si vous n'avez pas de terrain ou si votre budget est plus restreint, la{' '}
            <a href="/pompe-a-chaleur">pompe à chaleur air/eau</a> reste la solution la plus
            répandue et souvent la plus accessible. Nos conseillers peuvent vous orienter selon
            votre situation lors d'un{' '}
            <a href="/dpe-gratuit">bilan énergétique gratuit</a>.
          </p>

          <h2>Les étapes pour installer une PAC géothermique</h2>
          <ol>
            <li>
              <strong>Audit énergétique</strong> : indispensable pour dimensionner correctement
              l'installation et vérifier l'éligibilité aux aides.
            </li>
            <li>
              <strong>Étude de sol</strong> : le géologue ou l'installateur évalue la conductivité
              thermique du terrain pour choisir le type de capteurs.
            </li>
            <li>
              <strong>Déclarations administratives</strong> : déclaration en préfecture pour les
              forages de plus de 10 m, et information de la mairie dans certains cas.
            </li>
            <li>
              <strong>Installation par un artisan RGE</strong> : obligatoire pour accéder aux
              aides. L'artisan s'occupe du dimensionnement, de la pose et de la mise en service.
            </li>
            <li>
              <strong>Montage des dossiers d'aides</strong> : CEE, Éco-PTZ, MaPrimeRénov' en
              rénovation d'ampleur. En tant qu'Accompagnateur Rénov' agréé, RenoHab prend en
              charge ce suivi administratif.
            </li>
          </ol>

          <h2>Ce qu'il faut retenir</h2>
          <p>
            La pompe à chaleur géothermique sol/eau est l'une des solutions de chauffage les
            plus performantes sur le marché : meilleur COP, absence d'unité extérieure, durée
            de vie élevée (20 à 25 ans). Son coût d'installation plus élevé est compensé par
            des économies substantielles sur la facture de chauffage — souvent 50 à 70 % par
            rapport au fioul — et par un ensemble d'aides cumulables. Dans le cadre d'une
            rénovation d'ampleur, c'est souvent le choix le plus rentable à long terme.
          </p>
        </article>

        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Votre projet géothermique, financé et accompagné</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            RenoHab, Accompagnateur Rénov' agréé, évalue la faisabilité de votre projet, monte
            vos dossiers d'aides et coordonne les artisans RGE.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/dpe-gratuit" className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all">
              Obtenir mon bilan gratuit
            </a>
            <a href="/pompe-a-chaleur" className="px-6 py-3 rounded-full border border-white/70 text-white font-semibold hover:bg-white/10 transition-all">
              Comparer les PAC
            </a>
          </div>
        </div>
      </main>

      <ArticleFooter />
    </div>
  );
}
