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
        <p className="mt-3 text-sm text-gray-500">
          <a href="/mentions-legales" className="hover:text-emerald-300 transition-colors">Mentions légales</a>
          <span className="mx-2 opacity-60">·</span>
          <a href="/confidentialite" className="hover:text-emerald-300 transition-colors">Politique de confidentialité</a>
        </p>
      </div>
    </footer>
  );
}

const PUBLISHED = '2026-11-21';
const PATH = '/blog/granules-bois-vs-pompe-chaleur-comparatif-2026';

export default function ArticleGranulesBoisVsPompeAChaleur2026() {
  useSeo({
    title: "Chaudière à granulés ou pompe à chaleur air/eau : comment choisir en 2026 ? | RenoHab",
    description:
      "Coûts d'installation, dépenses énergétiques, aides disponibles, critères de choix : le comparatif complet entre chaudière à granulés de bois et pompe à chaleur air/eau pour remplacer votre chauffage en 2026.",
    path: PATH,
    image: '/blog/granules-bois-vs-pompe-chaleur-comparatif-2026.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline:
        "Chaudière à granulés ou pompe à chaleur air/eau : comment choisir en 2026 ?",
      description:
        "Coûts d'installation, dépenses énergétiques, aides disponibles, critères de choix : le comparatif complet entre chaudière à granulés de bois et pompe à chaleur air/eau pour remplacer votre chauffage en 2026.",
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
      about: ['Chaudière à granulés', 'Pompe à chaleur', 'Rénovation énergétique', 'Comparatif chauffage'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 21 nov. 2026 · Chauffage
          </p>

          <h1>Chaudière à granulés ou pompe à chaleur air/eau : comment choisir en 2026 ?</h1>

          <img
            src="/blog/granules-bois-vs-pompe-chaleur-comparatif-2026.jpg"
            alt="Comparatif chaudière à granulés de bois et pompe à chaleur air/eau pour le chauffage résidentiel"
            className="w-full rounded-xl shadow-md mb-8"
            loading="lazy"
          />

          <p className="lead">
            Vous voulez remplacer votre chaudière fioul ou gaz et hésitez entre la chaudière à
            granulés de bois et la pompe à chaleur air/eau ? Ces deux systèmes exploitent des
            énergies renouvelables et ouvrent droit aux mêmes aides publiques, mais leur logique
            de fonctionnement, leurs contraintes d'installation et leurs coûts de fonctionnement
            diffèrent sensiblement. Voici un comparatif factuel pour choisir en toute connaissance
            de cause.
          </p>

          <h2>Principe de fonctionnement : deux technologies très différentes</h2>

          <h3>La chaudière à granulés (ou « pellets »)</h3>
          <p>
            Une chaudière à granulés brûle des cylindres de bois compressé (granulés normalisés
            selon la norme ENplus) pour produire de l'eau chaude qui alimente un circuit de radiateurs
            ou un plancher chauffant. Le combustible est stocké dans un silo attenant ou intégré
            à l'appareil. L'alimentation peut être automatique via une vis sans fin. Elle requiert
            un conduit de fumée (neuf ou réhabilité) et un entretien annuel obligatoire par un
            professionnel.
          </p>
          <ul>
            <li><strong>Rendement :</strong> 85 à 95 % selon les modèles (label Flamme Verte obligatoire pour les aides).</li>
            <li><strong>Énergie produite :</strong> chaleur par combustion — 100 % renouvelable, neutre en CO₂ sur le cycle du bois.</li>
            <li><strong>Contrainte principale :</strong> nécessite un espace de stockage pour le silo (5 à 10 m² au minimum) et un approvisionnement régulier en granulés.</li>
          </ul>

          <h3>La pompe à chaleur air/eau (PAC)</h3>
          <p>
            Une pompe à chaleur air/eau capte les calories présentes dans l'air extérieur et les
            transfère à un circuit d'eau chaude pour le chauffage et l'eau chaude sanitaire.
            Elle consomme de l'électricité pour faire fonctionner son compresseur, mais produit
            généralement 3 à 4 kWh de chaleur pour chaque kWh électrique consommé (COP moyen
            de 3 à 4). Elle s'installe sans conduit de fumée ni silo.
          </p>
          <ul>
            <li><strong>COP :</strong> 3 à 4 en conditions normales (moins efficace sous −5 °C).</li>
            <li><strong>Énergie produite :</strong> chaleur par thermodynamique — faible empreinte carbone grâce au mix électrique français (90 % bas carbone).</li>
            <li><strong>Contrainte principale :</strong> nécessite une unité extérieure (bruits possibles, règles d'implantation à respecter) et une bonne isolation du logement pour être rentable.</li>
          </ul>

          <h2>Coût d'installation : un investissement initial à bien comparer</h2>

          <p>
            Les fourchettes constatées en 2026 (fourniture + pose par un professionnel RGE) :
          </p>
          <ul>
            <li>
              <strong>Pompe à chaleur air/eau :</strong> 10 000 à 16 000 € TTC selon la puissance
              et la marque. Compatible avec un plancher chauffant basse température ou des radiateurs
              haute température (modèles spécifiques). Pas de travaux de maçonnerie ni de conduit
              de fumée.
            </li>
            <li>
              <strong>Chaudière à granulés :</strong> 14 000 à 22 000 € TTC selon la puissance,
              le type de silo (intégré ou déporté) et les travaux annexes (conduit de fumée,
              maçonnerie). L'investissement initial est en général plus élevé, mais le prix des
              granulés est plus stable que celui de l'électricité.
            </li>
          </ul>
          <p>
            Dans les deux cas, la TVA est réduite à <strong>5,5 %</strong> sur la fourniture et
            la pose, à condition que le logement soit achevé depuis plus de deux ans.
          </p>

          <h2>Coût de fonctionnement : l'énergie fait la différence</h2>

          <p>
            Pour 10 000 kWh de besoins de chauffage annuels (maison de 100 m² bien isolée),
            les estimations 2026 donnent :
          </p>
          <ul>
            <li>
              <strong>PAC air/eau :</strong> environ 700 à 1 100 €/an en électricité (avec un
              COP de 3 à 4 et un tarif moyen de 0,25 €/kWh). Optimisable avec le{' '}
              <a href="/blog/tarif-tempo-edf-pompe-a-chaleur-hiver-2026">tarif Tempo EDF</a> si
              vous acceptez des contraintes de consommation.
            </li>
            <li>
              <strong>Chaudière à granulés :</strong> environ 1 500 à 2 200 €/an en granulés
              (à ~300 €/tonne en 2026, avec un rendement de 90 %). Le prix des granulés a baissé
              depuis 2022–2023 et reste plus prévisible que l'électricité.
            </li>
          </ul>
          <p>
            Sur le long terme (15 à 20 ans), la PAC est généralement moins chère à l'usage si
            le logement est bien isolé. La chaudière à granulés compense par un investissement
            initial parfois inférieur et une indépendance vis-à-vis des variations du tarif électrique.
          </p>

          <h2>Aides financières disponibles en novembre 2026</h2>

          <p>
            En novembre 2026, <strong>MaPrimeRénov'</strong> reste suspendue aux nouvelles
            demandes pour les gestes individuels dans le cadre du budget serré de l'Anah. Cela
            ne signifie pas que les aides ont disparu : d'autres leviers restent actifs.
          </p>
          <ul>
            <li>
              <strong>Certificats d'économies d'énergie (CEE) :</strong> prime versée directement
              par les fournisseurs d'énergie, sans condition de revenus, pour toute installation
              par un artisan RGE. Les{' '}
              <a href="/blog/bonifications-cee-pac-offres-integrees-novembre-2026">
                nouvelles bonifications CEE pour les PAC air/eau
              </a>{' '}
              entrées en vigueur en novembre 2026 peuvent atteindre plusieurs milliers d'euros
              pour les ménages modestes.
            </li>
            <li>
              <strong>Éco-PTZ :</strong> prêt à taux zéro sans condition de revenus,{' '}
              prolongé jusqu'au 31 décembre 2027. Jusqu'à 30 000 € pour un geste seul, 50 000 €
              pour un bouquet de trois travaux ou une rénovation d'ampleur. Accordé par les
              banques partenaires.
            </li>
            <li>
              <strong>TVA à 5,5 % :</strong> systématique pour ces deux systèmes dans un
              logement de plus de deux ans.
            </li>
          </ul>
          <p>
            Pour connaître vos droits réels, consultez France Rénov' (france-renov.gouv.fr) ou
            faites-vous accompagner par un{' '}
            <a href="/blog/renovation-ampleur-2026-accompagnateur-renov">
              Accompagnateur Rénov' agréé
            </a>{' '}
            comme RenoHab, qui monte les dossiers d'aides gratuitement.
          </p>

          <h2>Critères décisifs pour choisir</h2>

          <h3>Choisissez la pompe à chaleur air/eau si…</h3>
          <ul>
            <li>Votre logement est correctement isolé (DPE D ou mieux, ou rénovation en cours).</li>
            <li>Vous ne disposez pas de place pour un silo à granulés (moins de 5 m² disponibles).</li>
            <li>Vous souhaitez également produire de l'eau chaude sanitaire avec le même appareil.</li>
            <li>Votre maison est équipée d'un plancher chauffant ou de radiateurs basse température.</li>
            <li>Vous habitez en zone littorale ou à altitude modérée (températures hivernales rarement inférieures à −10 °C).</li>
          </ul>

          <h3>Choisissez la chaudière à granulés si…</h3>
          <ul>
            <li>Votre maison est grande (plus de 150 m²) ou imparfaitement isolée : la chaudière à granulés supporte mieux les forts besoins de chaleur.</li>
            <li>Vous disposez d'un espace extérieur ou d'une chaufferie pour accueillir le silo (livraisons en vrac 2 à 3 fois par an).</li>
            <li>Vous habitez une région rurale avec un réseau de fournisseurs de granulés locaux bien développé.</li>
            <li>Vous préférez une énergie dont le prix est moins corrélé aux variations des marchés de l'électricité.</li>
            <li>Votre maison possède déjà un réseau de radiateurs haute température difficile à remplacer.</li>
          </ul>

          <h2>Notre recommandation</h2>
          <p>
            En 2026, pour une maison individuelle de moins de 150 m² avec une isolation correcte,
            la <strong>pompe à chaleur air/eau</strong> reste le choix le plus pertinent : coût
            de fonctionnement plus bas, installation sans contrainte de stockage, éligibilité aux
            CEE bonifiées et démarches simplifiées. Pour les maisons mal isolées, de grande
            surface ou situées en zone froide, la <strong>chaudière à granulés</strong> offre une
            alternative solide et décarbonée.
          </p>
          <p>
            Dans tous les cas, un{' '}
            <a href="/dpe-gratuit">diagnostic de performance énergétique</a> actualisé et un
            audit thermique permettent de dimensionner précisément le système et d'optimiser les
            aides disponibles. RenoHab, en tant qu'Accompagnateur Rénov' agréé, réalise ce travail
            gratuitement dans le cadre d'un projet de rénovation.
          </p>
        </article>

        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Quel système est fait pour vous ?</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            Répondez à quelques questions et obtenez une recommandation personnalisée — PAC ou
            granulés — avec une estimation des aides auxquelles vous avez droit.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/#simulateur" className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all">
              Lancer le simulateur
            </a>
            <a href="/pompe-a-chaleur" className="px-6 py-3 rounded-full border border-white/70 text-white font-semibold hover:bg-white/10 transition-all">
              En savoir plus sur les PAC
            </a>
          </div>
        </div>
      </main>

      <ArticleFooter />
    </div>
  );
}
