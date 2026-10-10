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
        <p className="text-gray-400">Votre Rénovation Énergétique, Simplifiée &amp; Financée.</p>
        <p className="mt-6 text-sm text-gray-500">© {new Date().getFullYear()} RenoHab. Tous droits réservés.</p>
      </div>
    </footer>
  );
}

const PUBLISHED = '2026-09-18';
const PATH = '/blog/radiateurs-inertie-convecteurs-aides-2026';

export default function ArticleRadiateursInertie2026() {
  useSeo({
    title: "Radiateurs à inertie 2026 : remplacer ses vieux convecteurs et toucher la prime CEE | RenoHab",
    description:
      "Remplacement de convecteurs électriques par des radiateurs à inertie en 2026 : prime CEE, TVA réduite, éco-PTZ, conseils de choix et retour sur investissement.",
    path: PATH,
    image: 'https://renohab.fr/blog/radiateurs-inertie-convecteurs-aides-2026.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline:
        "Radiateurs à inertie en 2026 : remplacer ses vieux convecteurs et toucher la prime CEE",
      description:
        "Remplacement de convecteurs électriques par des radiateurs à inertie en 2026 : prime CEE, TVA réduite, éco-PTZ, conseils de choix et retour sur investissement.",
      datePublished: PUBLISHED,
      dateModified: PUBLISHED,
      inLanguage: 'fr-FR',
      image: 'https://renohab.fr/blog/radiateurs-inertie-convecteurs-aides-2026.jpg',
      mainEntityOfPage: { '@type': 'WebPage', '@id': `https://renohab.fr${PATH}` },
      author: { '@type': 'Organization', name: 'RenoHab', url: 'https://renohab.fr/' },
      publisher: {
        '@type': 'Organization',
        name: 'RenoHab',
        logo: { '@type': 'ImageObject', url: 'https://renohab.fr/logo192-renohab.png' },
      },
      about: ['Radiateurs à inertie', 'Prime CEE', 'Chauffage électrique', 'Rénovation énergétique'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 18 septembre 2026 · Chauffage &amp; aides
          </p>

          <h1>Radiateurs à inertie en 2026 : remplacer ses vieux convecteurs et toucher la prime CEE</h1>

          <img
            src="/blog/radiateurs-inertie-convecteurs-aides-2026.jpg"
            alt="Radiateur à inertie moderne dans un salon rénové"
            className="w-full rounded-xl my-6 object-cover max-h-80"
            loading="eager"
          />

          <p className="lead">
            Des millions de logements français sont encore équipés de vieux convecteurs à effet
            Joule, ces appareils surnommés « grille-pain » pour leur consommation excessive. Les
            remplacer par des <strong>radiateurs à inertie</strong> améliore le confort thermique
            et réduit la facture d'électricité. En 2026, cette opération ouvre droit à une
            <strong> prime CEE</strong> et peut s'intégrer dans un plan de rénovation plus global.
            Mode d'emploi.
          </p>

          <h2>Convecteurs vs radiateurs à inertie : quelle différence ?</h2>
          <p>
            Un convecteur classique chauffe l'air en faisant circuler de l'électricité dans une
            résistance. La chaleur produite monte rapidement… et redescend tout aussi vite dès que
            l'appareil s'éteint. Il consomme à plein régime dès qu'il démarre, sans jamais
            « stocker » d'énergie.
          </p>
          <p>
            Un <strong>radiateur à inertie</strong> fonctionne différemment : il chauffe un
            matériau à forte capacité thermique (fonte, pierre réfractaire ou fluide caloporteur)
            qui restitue ensuite la chaleur de façon douce et prolongée. Les cycles de chauffe
            sont plus longs mais moins fréquents, ce qui réduit les pics de consommation et les
            variations de température ressenties.
          </p>

          <h3>Deux familles de radiateurs à inertie</h3>
          <ul>
            <li>
              <strong>Inertie sèche</strong> (pierre, briques réfractaires, fonte) : montée en
              température plus lente, restitution très douce. Idéal pour une utilisation continue.
            </li>
            <li>
              <strong>Inertie fluide</strong> (huile caloporteuse) : réactivité intermédiaire,
              bonne homogénéité de chaleur. Bon compromis pour les pièces occupées par intermittence.
            </li>
          </ul>

          <h2>Quelles aides financières en 2026 ?</h2>

          <h3>La prime CEE : le principal levier</h3>
          <p>
            Le remplacement d'un convecteur électrique par un radiateur à inertie est éligible
            aux <strong>Certificats d'Économies d'Énergie (CEE)</strong> dans le cadre de la fiche
            d'opération standardisée <em>BAR-TH-158</em>. En pratique, un fournisseur d'énergie
            (obligé CEE) ou son délégataire verse une prime directement à l'installateur ou à
            vous-même. Le montant varie selon la puissance des appareils et votre tranche de
            revenus, généralement entre <strong>50 et 300 € par radiateur</strong>.
          </p>
          <p>
            Condition impérative : l'installation doit être réalisée par un professionnel
            <strong> qualifié RGE</strong> (Reconnu Garant de l'Environnement). Cette obligation
            s'applique à toutes les aides CEE depuis le durcissement des contrôles en 2025.
          </p>

          <h3>TVA réduite à 10 %</h3>
          <p>
            La pose de radiateurs à inertie dans un logement achevé depuis plus de 2 ans bénéficie
            de la <strong>TVA à taux réduit de 10 %</strong> (au lieu de 20 %). Cela représente
            une économie immédiate sur la facture de votre artisan.
          </p>
          <p>
            Attention : la TVA à <strong>5,5 %</strong> est réservée aux travaux d'isolation
            thermique, et non au simple remplacement de radiateurs. L'artisan doit mentionner le
            taux applicable sur son devis.
          </p>

          <h3>L'éco-prêt à taux zéro (Éco-PTZ)</h3>
          <p>
            Seul, le remplacement de radiateurs ne suffit pas à déclencher un{' '}
            <a href="/blog/eco-ptz-2026-pret-taux-zero-renovation">Éco-PTZ</a>. En revanche,
            si vous combinez ce geste avec d'autres travaux éligibles (isolation, ventilation,
            pompe à chaleur…), l'ensemble peut former un <strong>bouquet de travaux</strong>{' '}
            finançable jusqu'à 30 000 €, voire 50 000 € dans le cadre d'une rénovation d'ampleur.
          </p>

          <h3>MaPrimeRénov' : pas de prime par geste pour les radiateurs</h3>
          <p>
            Depuis le 1er septembre 2026, MaPrimeRénov' <strong>ne finance plus le remplacement
            de radiateurs électriques</strong> en parcours par geste. Ce type de travaux reste
            finançable uniquement dans le cadre d'un{' '}
            <a href="/blog/renovation-ampleur-2026-accompagnateur-renov">parcours accompagné</a>
            {' '}de rénovation d'ampleur, piloté par un Accompagnateur Rénov' agréé, lorsque la
            rénovation globale prévoit un gain d'au moins deux classes DPE.
          </p>

          <h2>Bien choisir et dimensionner ses radiateurs</h2>
          <p>
            Le critère numéro un est la <strong>puissance adaptée à la pièce</strong>. Une règle
            empirique : compter environ 100 W par m² pour une pièce bien isolée, jusqu'à 150 W/m²
            dans une maison ancienne peu étanche. Pour une chambre de 12 m² avec isolation standard,
            un radiateur de 1 000 à 1 500 W convient.
          </p>
          <ul>
            <li>
              <strong>Pièces à vivre (salon, cuisine ouverte)</strong> : privilégiez l'inertie
              sèche pierre ou fonte pour un confort radiant prolongé.
            </li>
            <li>
              <strong>Chambres et pièces peu occupées</strong> : l'inertie fluide ou un modèle
              programmable suffit.
            </li>
            <li>
              <strong>Salles de bain</strong> : optez pour un sèche-serviettes à inertie, compatible
              avec les normes électriques des pièces humides (IP24 minimum).
            </li>
          </ul>
          <p>
            Associés à un <strong>thermostat programmable ou connecté</strong>, les radiateurs à
            inertie révèlent tout leur potentiel : la programmation par plages horaires (présence,
            nuit, absence) peut réduire la consommation électrique de 15 à 25 %. Pour aller plus
            loin, consultez notre guide sur le{' '}
            <a href="/blog/thermostat-programmable-regulation-chauffage-2026">thermostat programmable</a>.
          </p>

          <h2>Quel retour sur investissement ?</h2>
          <p>
            Compter en moyenne <strong>200 à 600 € par radiateur à inertie</strong> de qualité,
            pose comprise (hors prime CEE). Pour un appartement de 60 m² équipé de 5 convecteurs
            anciens, le remplacement complet représente un investissement de 1 500 à 3 000 €,
            déduction faite des primes CEE.
          </p>
          <p>
            Les économies sur la facture d'électricité dépendent de votre contrat tarifaire (heures
            pleines/creuses, option base) et de l'état de l'isolation de votre logement. Sur un
            logement <strong>bien isolé</strong>, passer des convecteurs à l'inertie peut réduire
            la consommation de chauffage de <strong>20 à 30 %</strong>. Sur une passoire thermique,
            l'impact est plus limité : dans ce cas, il est préférable de commencer par{' '}
            <a href="/dpe-gratuit">évaluer votre DPE</a> et de combiner les travaux.
          </p>

          <h2>Radiateurs à inertie vs pompe à chaleur : que choisir ?</h2>
          <p>
            Les radiateurs à inertie restent un chauffage <strong>100 % électrique à effet Joule</strong>.
            Leur COP (coefficient de performance) est de 1 : un kilowattheure consommé produit
            un kilowattheure de chaleur.
          </p>
          <p>
            Une <a href="/pompe-a-chaleur">pompe à chaleur air/eau</a>, en revanche, affiche un
            COP de 3 à 4 : elle produit 3 à 4 kWh de chaleur pour 1 kWh consommé. À long terme,
            pour une maison entière, la pompe à chaleur est plus économique et ouvre droit à des
            aides plus importantes (MaPrimeRénov', CEE bonifiée, TVA à 5,5 %).
          </p>
          <p>
            Les radiateurs à inertie restent néanmoins pertinents dans trois cas :
          </p>
          <ul>
            <li>Un appartement où l'installation d'une PAC est impossible (copropriété restrictive, absence d'espace extérieur).</li>
            <li>Un logement dont l'isolation est déjà excellente et dont la consommation est faible.</li>
            <li>Un complément de chauffage dans une pièce peu utilisée ou une résidence secondaire.</li>
          </ul>

          <h2>Les démarches en pratique</h2>
          <ol>
            <li>
              <strong>Obtenir plusieurs devis</strong> d'artisans RGE. La qualification RGE est
              indispensable pour la prime CEE.
            </li>
            <li>
              <strong>Déposer le dossier CEE</strong> avant le début des travaux auprès du
              fournisseur d'énergie ou d'un délégataire. Le bon de commande signé constitue la
              preuve d'engagement préalable.
            </li>
            <li>
              <strong>Conserver les factures</strong> et attestations de travaux pendant 10 ans :
              elles peuvent être contrôlées par les organismes de certification.
            </li>
            <li>
              Si vous envisagez une rénovation plus globale, demander un{' '}
              <a href="/blog/rendez-vous-france-renov-maprimerenov-2026">rendez-vous France Rénov'</a>
              {' '}gratuit pour cartographier l'ensemble des aides accessibles.
            </li>
          </ol>
        </article>

        {/* CTA RenoHab */}
        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Besoin d'un bilan chauffage personnalisé ?</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            RenoHab identifie le chauffage le plus adapté à votre logement et monte les dossiers
            d'aides CEE, MaPrimeRénov' et Éco-PTZ pour vous.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/dpe-gratuit" className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all">
              Estimer mon DPE
            </a>
            <a href="/pompe-a-chaleur" className="px-6 py-3 rounded-full border border-white/70 text-white font-semibold hover:bg-white/10 transition-all">
              Découvrir la pompe à chaleur
            </a>
          </div>
        </div>
      </main>

      <ArticleFooter />
    </div>
  );
}
