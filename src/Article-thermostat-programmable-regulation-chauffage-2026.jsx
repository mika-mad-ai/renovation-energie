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

const PUBLISHED = '2026-09-08';
const PATH = '/blog/thermostat-programmable-regulation-chauffage-2026';

export default function ArticleThermostatProgrammable2026() {
  useSeo({
    title: "Thermostat programmable en 2026 : économies, obligation et aides disponibles | RenoHab",
    description:
      "Le thermostat programmable deviendra obligatoire pour tous les logements d'ici 2030. Découvrez les économies possibles, les équipements éligibles et les aides CEE encore disponibles en 2026.",
    path: PATH,
    image: '/blog/thermostat-programmable-regulation-chauffage-2026.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline:
        "Thermostat programmable en 2026 : économies réelles, réglementation et aides CEE",
      description:
        "Le thermostat programmable deviendra obligatoire pour tous les logements d'ici 2030. Découvrez les économies possibles, les équipements éligibles et les aides CEE encore disponibles en 2026.",
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
      about: ['Thermostat programmable', 'Régulation du chauffage', 'CEE', 'Économies énergie'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 8 septembre 2026 · Régulation du chauffage
          </p>

          <h1>Thermostat programmable en 2026 : économies réelles, réglementation et aides disponibles</h1>

          <img
            src="/blog/thermostat-programmable-regulation-chauffage-2026.jpg"
            alt="Thermostat programmable installé dans un logement rénové"
            className="w-full rounded-xl object-cover max-h-80 !mt-6 !mb-8"
            loading="eager"
          />

          <p className="lead">
            Le chauffage représente en moyenne 60 à 70 % de la facture énergétique d'un logement.
            Baisser la température d'un seul degré fait chuter la consommation de 7 % selon l'ADEME.
            Le thermostat programmable est l'un des gestes les plus simples et les plus rentables en
            rénovation énergétique — et une obligation légale se profile pour tous les logements d'ici 2030.
          </p>

          <h2>Combien peut-on vraiment économiser ?</h2>
          <p>
            Les chiffres de l'ADEME sont clairs : une bonne programmation du chauffage génère entre{' '}
            <strong>5 et 15 % d'économies</strong> sur la facture annuelle. Pour un foyer qui dépense
            2 000 € par an en chauffage, cela représente entre 100 € et 300 € économisés chaque année —
            sans isolation supplémentaire, sans changer de chaudière.
          </p>
          <p>
            La logique est simple : pourquoi chauffer une chambre à 20 °C à 6 h du matin quand tout le
            monde dort ? Un thermostat programmable adapte la température aux horaires réels du foyer :
            réduction de nuit, hors présence, et remontée en douceur avant le réveil. À cela s'ajoute
            la règle de base : chaque degré retiré en dessous de 19 °C économise 7 % de chauffage.
          </p>
          <ul>
            <li>19 °C dans les pièces de vie (recommandation réglementaire)</li>
            <li>17 °C dans les chambres la nuit</li>
            <li>16 °C en mode hors-gel lors d'une longue absence</li>
          </ul>

          <h2>Thermostat d'ambiance, tête thermostatique, connecté : quel équipement choisir ?</h2>
          <p>
            Il n'existe pas un seul thermostat, mais plusieurs familles d'équipements aux performances
            et aux coûts très différents.
          </p>
          <h3>Le thermostat d'ambiance central</h3>
          <p>
            Il régule la température de l'ensemble du logement depuis une sonde placée dans la pièce
            principale. Simple à installer et peu coûteux, il constitue un premier pas efficace pour
            les maisons avec un système de chauffage central à eau.
          </p>
          <h3>Les têtes thermostatiques sur radiateurs</h3>
          <p>
            Montées sur chaque radiateur à eau, elles permettent de régler la température pièce par pièce.
            Une chambre peut ainsi être maintenue à 17 °C pendant que le salon reste à 20 °C. Le coût
            est faible (15 à 40 € par tête) mais l'installation multipliée par le nombre de radiateurs.
          </p>
          <h3>Le thermostat connecté avec programmation horaire</h3>
          <p>
            C'est l'équipement de référence en 2026 : il combine la régulation centrale et la programmation
            à distance via smartphone. Les modèles compatibles avec les signaux <strong>EcoWatt</strong> et{' '}
            <strong>EcoGaz</strong> permettent aussi d'adapter automatiquement la consommation aux pics de
            tension sur le réseau. Ils sont les seuls à ouvrir droit au CEE BAR-TH-173 en 2026.
          </p>

          <h2>La réglementation en 2026 : une obligation à venir pour tous</h2>
          <p>
            Le décret n°2023-444 du 7 juin 2023 impose l'installation d'un <strong>système automatique
            de régulation du chauffage, programmable heure par heure et pièce par pièce</strong>, dans
            tous les logements. L'échéance initialement fixée au 1er janvier 2027 a été reportée au{' '}
            <strong>1er janvier 2030</strong> pour les logements existants.
          </p>
          <p>
            Concrètement, cela signifie que propriétaires occupants et bailleurs devront équiper leur
            logement avant cette date. Pour les <a href="/blog/maprimerenov-proprietaire-bailleur-2026">propriétaires bailleurs</a>,
            la responsabilité de l'installation incombe au propriétaire, pas au locataire.
          </p>
          <p>
            Anticiper cette obligation aujourd'hui permet de bénéficier des aides encore disponibles —
            et d'éviter une installation dans la précipitation en 2029.
          </p>

          <h2>Les aides disponibles en 2026</h2>
          <h3>CEE BAR-TH-173 : la prime directe pour le thermostat connecté</h3>
          <p>
            Le dispositif des <strong>Certificats d'Économies d'Énergie (CEE)</strong> via la fiche
            d'opération standardisée <strong>BAR-TH-173</strong> («&nbsp;Système de régulation par
            programmation horaire pièce par pièce&nbsp;») reste actif en 2026.
          </p>
          <p>
            Pour en bénéficier, le thermostat installé doit respecter plusieurs critères :
          </p>
          <ul>
            <li>Classe A ou B selon la norme <strong>NF EN ISO 52120-1</strong></li>
            <li>Programmation horaire <strong>pièce par pièce</strong></li>
            <li>Compatibilité avec les signaux <strong>EcoWatt</strong> et <strong>EcoGaz</strong></li>
            <li>Installation réalisée par un professionnel (pas d'autoconstruction)</li>
          </ul>
          <p>
            La prime CEE pour un thermostat BAR-TH-173 varie selon la zone climatique et les revenus
            du ménage. Elle se situe généralement entre <strong>50 et 200 €</strong>.
          </p>
          <p>
            À noter : le «&nbsp;Coup de pouce Pilotage connecté&nbsp;», qui permettait d'obtenir jusqu'à
            80 % du coût de l'installation, a été définitivement supprimé le 22 novembre 2024 en raison
            de dérives importantes (démarchages abusifs, fraudes aux CEE). Seule la prime CEE classique
            BAR-TH-173 subsiste.
          </p>
          <h3>TVA à 5,5 %</h3>
          <p>
            L'installation d'un thermostat par un professionnel dans un logement de plus de 2 ans est
            soumise à la <a href="/blog/tva-5-5-renovation-energetique-2026">TVA réduite à 5,5 %</a>{' '}
            (au lieu de 20 %). Cela s'applique à la fois à la fourniture de l'équipement et à la
            main-d'œuvre.
          </p>
          <h3>MaPrimeRénov' et Éco-PTZ</h3>
          <p>
            MaPrimeRénov' ne finance pas l'installation d'un thermostat seul — cela n'entre pas dans
            les gestes éligibles individuellement. En revanche, si le thermostat est posé dans le cadre
            d'une{' '}
            <a href="/blog/renovation-ampleur-2026-accompagnateur-renov">rénovation d'ampleur</a>,
            il peut être intégré au plan de financement global.
          </p>
          <p>
            L'Éco-prêt à taux zéro (Éco-PTZ) peut financer un thermostat si l'installation est couplée
            à au moins un autre geste de rénovation éligible (isolation, changement de chauffage, etc.).
          </p>

          <h2>Coupler le thermostat à d'autres travaux : l'effet levier</h2>
          <p>
            Un thermostat seul dans une passoire thermique a des limites : si les murs laissent passer le
            froid, même une régulation parfaite ne compensera pas les déperditions. C'est pourquoi
            l'installation d'un thermostat prend tout son sens <strong>après ou en même temps que des travaux
            d'isolation</strong> ou le remplacement d'une chaudière ancienne par une{' '}
            <a href="/pompe-a-chaleur">pompe à chaleur</a>.
          </p>
          <p>
            Un logement bien isolé avec un thermostat programmable peut réduire sa consommation de
            chauffage de <strong>30 à 50 %</strong> par rapport à un logement non rénové sans régulation.
            C'est cette combinaison que RenoHab aide à planifier et financer, dans le cadre de son rôle
            d'Accompagnateur Rénov' agréé.
          </p>
          <p>
            Pour savoir par quels travaux commencer et comment maximiser les aides disponibles, commencez
            par faire évaluer la performance actuelle de votre logement.
          </p>
        </article>

        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Identifiez les gestes les plus rentables pour votre logement</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            DPE, audit énergétique, plan de travaux et montage des aides : RenoHab vous accompagne de A à Z pour rénover intelligemment.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/dpe-gratuit" className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all">
              Estimer mon DPE gratuitement
            </a>
            <a href="/#simulator" className="px-6 py-3 rounded-full border border-white/70 text-white font-semibold hover:bg-white/10 transition-all">
              Simuler mes aides
            </a>
          </div>
        </div>
      </main>

      <ArticleFooter />
    </div>
  );
}
