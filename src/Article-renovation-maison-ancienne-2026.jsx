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

const PUBLISHED = '2026-08-13';
const PATH = '/blog/renovation-maison-ancienne-2026';

export default function ArticleRenovationMaisonAncienne2026() {
  useSeo({
    title: "Rénover une maison ancienne en 2026 : guide pratique, pièges et aides | RenoHab",
    description:
      "Isolation, humidité, aides MaPrimeRénov' : tout ce qu'il faut savoir pour rénover efficacement une maison ancienne en 2026 sans créer de pathologies.",
    path: PATH,
    image: '/blog/renovation-maison-ancienne-2026.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: "Rénover une maison ancienne en 2026 : guide pratique, pièges et aides disponibles",
      description:
        "Isolation, humidité, aides MaPrimeRénov' : tout ce qu'il faut savoir pour rénover efficacement une maison ancienne en 2026 sans créer de pathologies.",
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
      about: ['Rénovation maison ancienne', 'Isolation thermique', 'MaPrimeRénov', 'Humidité bâti ancien'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">

          <p className="text-sm text-gray-500 !mb-2">
            Publié le 13 août 2026 · Rénovation & bâti ancien
          </p>

          <h1>Rénover une maison ancienne en 2026 : guide pratique, pièges et aides disponibles</h1>

          <img
            src="/blog/renovation-maison-ancienne-2026.jpg"
            alt="Maison ancienne en pierre avant rénovation énergétique"
            className="w-full rounded-xl my-6 object-cover max-h-72"
            loading="lazy"
          />

          <p className="lead">
            Plus de 12 millions de logements construits avant 1975 sont encore en service en France — la grande
            majorité sans aucune isolation initiale. Rénover une maison ancienne, c'est un projet porteur, mais
            il obéit à des règles différentes du neuf. Mal réalisée, une isolation peut piéger l'humidité et
            causer des dégâts structurels coûteux. Bien conduite, elle permet des économies substantielles et
            l'accès à de généreuses aides publiques en 2026.
          </p>

          <h2>Pourquoi le bâti ancien est-il différent ?</h2>
          <p>
            Avant la première réglementation thermique de 1974, les maisons étaient conçues pour
            <strong> respirer</strong> : les murs en pierre, en brique ou en pisé régulent naturellement
            l'humidité en absorbant et en restituant la vapeur d'eau. Ce phénomène, appelé{' '}
            <em>hygroscopicité</em>, est une qualité — mais elle impose de choisir des isolants et des
            techniques compatibles. Poser un isolant étanche à la vapeur (polystyrène expansé, panneaux PIR)
            contre un mur en pierre, c'est bloquer cette migration : l'humidité s'accumule à l'interface,
            dégrade la maçonnerie et favorise les moisissures.
          </p>
          <p>
            Autre spécificité : les ponts thermiques sont souvent nombreux (planchers bois, solives, hourdis
            anciens), et l'état sanitaire doit être vérifié avant tout chantier — traitement de l'humidité
            ascensionnelle, consolidation des enduits, purge des fissures.
          </p>

          <h2>Les techniques d'isolation adaptées au bâti ancien</h2>

          <h3>Isolation des murs : privilégier les matériaux respirants</h3>
          <p>
            Pour les murs en pierre ou en brique ancienne, les isolants <strong>perméables à la vapeur d'eau</strong>{' '}
            s'imposent :
          </p>
          <ul>
            <li>
              <strong>Fibre de bois</strong> : excellent régulateur hygrique, bonne inertie thermique, faible empreinte carbone.
            </li>
            <li>
              <strong>Chanvre et laine de chanvre</strong> : isolant naturel très respirant, adapté à l'isolation
              intérieure (ITI) en doublage ou projeté.
            </li>
            <li>
              <strong>Laine de mouton</strong> : perméable, résistante à l'humidité modérée, bonne en combles ou
              sous-toiture.
            </li>
          </ul>
          <p>
            Une <strong>lame d'air ventilée de 2 à 3 cm</strong> entre la paroi et l'isolant est souvent
            recommandée pour permettre l'évacuation de la vapeur. La pose doit être réalisée par un{' '}
            <strong>artisan RGE</strong> qualifié pour ouvrir droit aux aides.
          </p>
          <p>
            L'isolation par l'extérieur (ITE) est techniquement possible sur les maisons anciennes, mais elle
            peut modifier l'aspect architectural et nécessite parfois une déclaration préalable de travaux.
            Elle efface aussi les ponts thermiques plus efficacement que l'ITI — un avantage non négligeable
            sur les constructions d'avant 1950. Consultez notre guide sur l'
            <a href="/blog/isolation-murs-exterieure-ite-2026">isolation des murs par l'extérieur en 2026</a>.
          </p>

          <h3>Combles et toiture</h3>
          <p>
            Les combles perdus représentent souvent <strong>25 à 30 % des déperditions thermiques</strong> d'une
            maison. C'est le geste le plus rentable et le plus simple à mettre en œuvre : soufflage de laine
            minérale ou de ouate de cellulose sur le plancher des combles. Le retour sur investissement
            s'observe en quelques années. Pour les combles aménagés, l'isolation sous rampants impose davantage
            de précautions sur la gestion de la vapeur d'eau et la ventilation.
          </p>

          <h3>Ventilation : indispensable avant et après travaux</h3>
          <p>
            Améliorer l'isolation sans adapter la ventilation, c'est rendre le logement plus étanche sans lui
            donner les moyens d'évacuer l'humidité produite par les occupants. Une VMC simple flux bien
            réglée est le minimum requis. Une{' '}
            <a href="/blog/vmc-double-flux-aides-2026">VMC double flux</a> permet en outre de récupérer la
            chaleur de l'air extrait, réduisant encore la consommation de chauffage.
          </p>

          <h2>Quelle source de chauffage pour une maison ancienne rénovée ?</h2>
          <p>
            Une fois l'enveloppe isolée, les besoins en chauffage chutent fortement. La{' '}
            <a href="/pompe-a-chaleur">pompe à chaleur air/eau</a> devient alors pleinement adaptée : elle
            produit de la chaleur à basse température, idéale pour alimenter un plancher chauffant ou des
            radiateurs basse température. Elle est éligible à MaPrimeRénov' et aux CEE, et son efficacité
            (COP supérieur à 3) réduit significativement la facture énergétique.
          </p>
          <p>
            Pour les maisons qui conservent un poêle ou une cheminée à bois existante, le raccordement à un
            circuit hydraulique (poêle hydro) est une option complémentaire, à étudier au cas par cas avec un
            professionnel.
          </p>

          <h2>Les aides disponibles en 2026 pour une maison ancienne</h2>
          <p>
            Les logements anciens sont <strong>pleinement éligibles</strong> aux aides à la rénovation
            énergétique, à condition d'avoir été achevés depuis plus de 15 ans (condition MaPrimeRénov').
          </p>
          <ul>
            <li>
              <strong>MaPrimeRénov' Parcours Accompagné</strong> : pour les projets de rénovation d'ampleur
              (gain de 2 classes DPE minimum), la prime peut atteindre <strong>70 000 €</strong> pour les
              ménages modestes. Ce parcours est obligatoire pour les travaux d'isolation des murs en 2026.
            </li>
            <li>
              <strong>Certificats d'Économies d'Énergie (CEE)</strong> : cumulables avec MaPrimeRénov', ils
              valorisent les kilowattheures économisés. Les primes sont versées par les fournisseurs d'énergie.
            </li>
            <li>
              <strong>Éco-PTZ</strong> : prêt à taux zéro jusqu'à 50 000 € pour financer le reste à charge
              sans intérêts, sur 20 ans maximum.
            </li>
            <li>
              <strong>TVA à 5,5 %</strong> : applicable à tous les travaux de rénovation énergétique, sans
              condition de revenus, dès lors que l'artisan est RGE.
            </li>
          </ul>
          <p>
            Pour maximiser ces aides, un <strong>Accompagnateur Rénov'</strong> est indispensable dans le
            parcours d'ampleur — son intervention est elle-même financée jusqu'à 100 % pour les ménages
            modestes. RenoHab est agréé Accompagnateur Rénov' et prend en charge le montage complet de
            votre dossier.
          </p>

          <h2>Par où commencer ?</h2>
          <p>
            Toute rénovation réussie d'une maison ancienne commence par un <strong>audit énergétique</strong>{' '}
            complet : il identifie les points faibles du bâti (ponts thermiques, zones d'humidité, état des
            parois), chiffre les gains attendus pour chaque geste, et propose un plan de travaux priorisé.
            C'est la condition sine qua non pour ne pas isoler « au mauvais endroit » et pour déclencher les
            aides les plus importantes.
          </p>
          <p>
            Obtenez une première estimation de votre DPE et de votre potentiel d'amélioration avec notre{' '}
            <a href="/dpe-gratuit">outil de diagnostic gratuit</a>, puis échangez avec un conseiller RenoHab
            pour affiner le plan de travaux.
          </p>
        </article>

        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Évaluez votre maison ancienne gratuitement</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            Audit énergétique, plan de travaux adapté au bâti ancien, montage des aides : RenoHab prend
            en charge chaque étape de votre rénovation.
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
              Étudier une pompe à chaleur
            </a>
          </div>
        </div>
      </main>

      <ArticleFooter />
    </div>
  );
}
