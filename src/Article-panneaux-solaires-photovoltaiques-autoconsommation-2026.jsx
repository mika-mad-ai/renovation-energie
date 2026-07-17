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

const PUBLISHED = '2026-07-17';
const PATH = '/blog/panneaux-solaires-photovoltaiques-autoconsommation-2026';

export default function ArticlePanneauxSolaires2026() {
  useSeo({
    title: "Panneaux solaires en 2026 : prime supprimée, TVA réduite et stratégie autoconsommation | RenoHab",
    description:
      "Depuis juin 2026, la prime à l'autoconsommation est supprimée. Découvrez ce qui reste : TVA à 5,5 %, tarif de rachat garanti 20 ans et pourquoi l'autoconsommation directe est désormais la clé de la rentabilité.",
    path: PATH,
    image: '/blog/panneaux-solaires-photovoltaiques-autoconsommation-2026.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline:
        "Panneaux solaires en 2026 : la prime à l'autoconsommation supprimée — ce qui change et comment rester rentable",
      description:
        "Depuis juin 2026, la prime à l'autoconsommation est supprimée. TVA à 5,5 %, tarif de rachat EDF OA garanti 20 ans et stratégie d'autoconsommation directe : le guide complet.",
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
      about: ['Panneaux solaires', 'Autoconsommation', 'Énergie photovoltaïque', 'Rénovation énergétique'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 17 juillet 2026 · Énergies renouvelables &amp; aides
          </p>

          <h1>Panneaux solaires en 2026 : la prime à l'autoconsommation supprimée — ce qui change et comment rester rentable</h1>

          <img
            src="/blog/panneaux-solaires-photovoltaiques-autoconsommation-2026.jpg"
            alt="Maison avec panneaux solaires photovoltaïques sur le toit"
            className="w-full rounded-xl shadow-soft mb-8"
            loading="eager"
          />

          <p className="lead">
            Le 5 juin 2026, un nouvel arrêté tarifaire (dit « S21 ») a rebattu les cartes du marché
            solaire résidentiel en France. La prime à l'autoconsommation — jusqu'ici versée par
            EDF OA à l'installation — est supprimée pour toutes les nouvelles demandes. Le tarif de
            rachat du surplus s'établit désormais à 1,1 c€/kWh HT sur 20 ans. En clair : revendre
            de l'électricité n'est plus rentable, mais <strong>produire pour consommer directement</strong>{' '}
            n'a jamais été aussi intéressant.
          </p>

          <h2>Que contenait la réforme du 5 juin 2026 ?</h2>
          <p>
            L'arrêté S21 a modifié deux paramètres clés pour toutes les installations photovoltaïques
            résidentielles inférieures à 9 kWc dont la demande de raccordement est déposée après
            cette date :
          </p>
          <ul>
            <li>
              <strong>Fin de la prime à l'autoconsommation</strong> : auparavant de 80 €/kWc
              (soit environ 360 € pour une installation de 4,5 kWc), elle n'est plus versée pour
              les nouveaux projets.
            </li>
            <li>
              <strong>Tarif de rachat du surplus abaissé à 1,1 c€/kWh HT</strong>, garanti pendant
              20 ans par EDF OA, contre environ 4 c€/kWh avant la réforme. L'indexation annuelle
              de 2 % reste en place.
            </li>
          </ul>
          <p>
            Conséquence directe : avec un prix de l'électricité réseau avoisinant 21 c€/kWh et un
            tarif de rachat dix-neuf fois inférieur, revendre son surplus n'est plus la stratégie
            à privilégier. <strong>Chaque kilowattheure autoconsommé vaut vingt fois plus que celui
            revendu.</strong>
          </p>

          <h2>Les aides qui restent disponibles en 2026</h2>
          <h3>La TVA réduite à 5,5 %</h3>
          <p>
            C'est l'aide la plus immédiate et la plus concrète. Depuis le 1er octobre 2025, la TVA
            est abaissée à <strong>5,5 %</strong> pour toutes les installations photovoltaïques en
            autoconsommation dont la puissance est inférieure ou égale à 9 kWc dans un logement
            achevé depuis plus de deux ans. À titre d'exemple, sur une installation à 10 000 € HT,
            l'économie de TVA (différence entre 20 % et 5,5 %) représente 1 450 € directement
            déduits de la facture.
          </p>
          <h3>Le tarif de rachat garanti 20 ans</h3>
          <p>
            Si le niveau est bas (1,1 c€/kWh), il reste <em>garanti</em> par l'État sur vingt ans
            via le contrat EDF OA. Pour un logement absent en journée (télétravail impossible,
            vacances longues), revendre le surplus conserve un intérêt pour ne pas gaspiller la
            production. La stratégie optimale : <strong>maximiser d'abord l'autoconsommation</strong>,
            puis vendre le résidu.
          </p>
          <h3>L'exonération fiscale des revenus de revente</h3>
          <p>
            Les revenus tirés de la revente du surplus restent <strong>exonérés d'impôt sur le
            revenu et de prélèvements sociaux</strong> tant que la puissance de l'installation
            n'excède pas 3 kWc ou que les recettes annuelles restent inférieures à un seuil fixé
            par l'administration fiscale. Au-delà, une déclaration s'impose.
          </p>
          <h3>MaPrimeRénov' : non pour le PV, oui pour le thermique</h3>
          <p>
            MaPrimeRénov' ne finance <strong>pas</strong> les panneaux photovoltaïques classiques.
            En revanche, elle peut couvrir jusqu'à 4 000 € pour un <em>chauffe-eau solaire</em>{' '}
            thermique, et intervenir sur des panneaux hybrides dans le cadre d'une rénovation
            d'ampleur. Si votre projet inclut simultanément de l'isolation ou une{' '}
            <a href="/pompe-a-chaleur">pompe à chaleur</a>, les aides peuvent se cumuler.
          </p>

          <h2>Prix et rentabilité : ce qu'il faut prévoir en 2026</h2>
          <p>
            Le coût d'une installation photovoltaïque résidentielle varie entre{' '}
            <strong>1 500 et 2 200 € par kWc TTC</strong> (TVA 5,5 % comprise), installation,
            onduleur et démarches de raccordement inclus. En pratique :
          </p>
          <ul>
            <li><strong>3 kWc</strong> (maison ≤ 4 personnes, faible consommation) : environ 6 000–8 000 €</li>
            <li><strong>6 kWc</strong> (maison standard) : environ 10 000–13 000 €</li>
            <li><strong>9 kWc</strong> (grande maison, piscine, recharge VE) : environ 14 000–18 000 €</li>
          </ul>
          <p>
            Sans prime à l'autoconsommation, l'amortissement repose presque entièrement sur la
            valeur des kWh autoconsommés. Pour un foyer qui consomme 60 à 70 % de sa production
            solaire en direct (ce qui est réaliste avec un taux de présence normale ou un ballon
            d'eau chaude thermodynamique branché sur l'excédent), le retour sur investissement se
            situe entre <strong>8 et 12 ans</strong> — contre 10 à 14 ans sans optimisation.
          </p>

          <h2>3 leviers pour maximiser l'autoconsommation sans batterie</h2>
          <p>
            Installer une batterie de stockage reste coûteux (3 000 à 8 000 € supplémentaires).
            Il existe des alternatives moins chères pour absorber le surplus en journée :
          </p>
          <ul>
            <li>
              <strong>Programmer le lave-linge, lave-vaisselle et sèche-linge</strong> entre 10 h
              et 15 h : on consomme les kWh solaires à 21 c€ au lieu de les revendre à 1,1 c€.
            </li>
            <li>
              <strong>Coupler les panneaux à un chauffe-eau thermodynamique ou à une PAC
              réversible</strong> : l'excédent de production chauffe l'eau chaude sanitaire ou
              pré-refroidit la maison, ce qui réduit d'autant la facture nocturne. Voir notre guide
              sur la <a href="/pompe-a-chaleur">pompe à chaleur</a>.
            </li>
            <li>
              <strong>Recharger un véhicule électrique</strong> avec un chargeur solaire piloté :
              la voiture absorbe le surplus en priorité, éliminant presque totalement l'injection sur
              le réseau.
            </li>
          </ul>

          <h2>Démarches : par où commencer ?</h2>
          <ol>
            <li>
              <strong>Estimer son potentiel solaire</strong> : exposition, inclinaison du toit,
              ombrages éventuels. Un outil gratuit comme le simulateur de l'ADEME ou notre{' '}
              <a href="/#simulator">simulateur en ligne</a> donne une première idée de la production
              annuelle.
            </li>
            <li>
              <strong>Faire appel à un installateur RGE</strong> (mention QualiPV) : obligatoire
              pour bénéficier de la TVA à 5,5 % et signer un contrat EDF OA.
            </li>
            <li>
              <strong>Déposer la demande de raccordement</strong> auprès d'Enedis avant les travaux :
              le délai moyen est de 3 à 6 semaines.
            </li>
            <li>
              <strong>Vérifier les règles d'urbanisme locales</strong> : une déclaration préalable
              de travaux est généralement exigée ; certaines communes en secteur ABF imposent des
              contraintes esthétiques.
            </li>
          </ol>
          <p>
            Si votre logement est classé D, E, F ou G au <a href="/dpe-gratuit">DPE</a>, il peut
            être judicieux d'associer les panneaux solaires à une rénovation thermique globale :
            une maison mieux isolée consomme moins et autoconsomme une part plus élevée de sa
            production, ce qui raccourcit le retour sur investissement.
          </p>

          <h2>En résumé</h2>
          <ul>
            <li>La prime à l'autoconsommation a été supprimée depuis le 5 juin 2026.</li>
            <li>La TVA à 5,5 % reste la principale aide directe pour les installations ≤ 9 kWc.</li>
            <li>Le tarif de rachat du surplus (1,1 c€/kWh sur 20 ans) rend la vente peu attractive.</li>
            <li>La rentabilité repose désormais sur la <strong>maximisation de l'autoconsommation directe</strong>.</li>
            <li>Amortissement réaliste : 8 à 12 ans pour un foyer optimisé.</li>
            <li>Installateur certifié RGE (QualiPV) indispensable.</li>
          </ul>
        </article>

        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Optimisez votre rénovation énergétique globale</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            Panneaux solaires, pompe à chaleur, isolation : RenoHab monte votre dossier d'aides et
            coordonne les artisans RGE pour un chantier clé en main.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/dpe-gratuit"
              className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all"
            >
              Estimer mon DPE
            </a>
            <a
              href="/pompe-a-chaleur"
              className="px-6 py-3 rounded-full border border-white/70 text-white font-semibold hover:bg-white/10 transition-all"
            >
              Découvrir la pompe à chaleur
            </a>
          </div>
        </div>
      </main>

      <ArticleFooter />
    </div>
  );
}
