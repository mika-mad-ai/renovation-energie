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

const PUBLISHED = '2026-07-27';
const PATH = '/blog/plancher-chauffant-eau-prix-aides-2026';

export default function ArticlePlancherChauffantEau() {
  useSeo({
    title: "Plancher chauffant à eau en 2026 : prix, aides et compatibilité avec une pompe à chaleur | RenoHab",
    description:
      "Combien coûte un plancher chauffant hydraulique en 2026 ? Prix au m², aides disponibles (TVA 5,5 %, CEE, Éco-PTZ) et compatibilité avec la pompe à chaleur air/eau : le guide complet.",
    path: PATH,
    image: '/blog/plancher-chauffant-eau-prix-aides-2026.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline:
        "Plancher chauffant à eau en 2026 : prix, aides et compatibilité avec une pompe à chaleur",
      description:
        "Combien coûte un plancher chauffant hydraulique en 2026 ? Prix au m², aides disponibles (TVA 5,5 %, CEE, Éco-PTZ) et compatibilité avec la pompe à chaleur air/eau : le guide complet.",
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
      about: ['Plancher chauffant', 'Rénovation énergétique', 'Pompe à chaleur', 'Aides 2026'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 27 juillet 2026 · Chauffage &amp; confort thermique
          </p>

          <h1>Plancher chauffant à eau en 2026 : prix, aides et compatibilité avec une pompe à chaleur</h1>

          <img
            src="/blog/plancher-chauffant-eau-prix-aides-2026.jpg"
            alt="Installation d'un plancher chauffant hydraulique dans une maison"
            className="w-full rounded-xl shadow-soft mb-8"
            loading="eager"
          />

          <p className="lead">
            Le plancher chauffant hydraulique séduit de plus en plus de propriétaires en rénovation : confort
            incomparable, chaleur douce et homogène, et compatibilité parfaite avec les nouvelles technologies
            de chauffage. Mais combien coûte-t-il vraiment, et peut-on bénéficier d'aides en 2026 ?
            Le point complet.
          </p>

          <h2>Qu'est-ce qu'un plancher chauffant hydraulique ?</h2>
          <p>
            Un plancher chauffant à eau (ou hydraulique) est un système de chauffage central intégré au sol.
            Des tubes en polyéthylène sont coulés dans une chape béton ou posés dans des panneaux isolants
            spéciaux ; l'eau chaude qui y circule à basse température (entre 28 et 45 °C) rayonne une chaleur
            douce et uniforme dans toute la pièce.
          </p>
          <p>
            Contrairement au plancher chauffant électrique — moins efficace et énergivore — le plancher
            hydraulique fonctionne grâce à un générateur de chaleur central, idéalement une pompe à chaleur.
            C'est cette association qui en fait aujourd'hui la solution de référence en rénovation énergétique.
          </p>

          <h2>Combien coûte un plancher chauffant à eau ?</h2>

          <h3>Prix au m² et coût global</h3>
          <p>
            En 2026, le coût moyen d'un plancher chauffant hydraulique se situe entre <strong>70 et 150 € par m²</strong>,
            fourniture et pose comprises, hors générateur de chaleur. Pour une maison de 100 m², comptez
            un budget compris entre 7 000 et 15 000 €.
          </p>
          <p>Ces écarts s'expliquent par plusieurs facteurs :</p>
          <ul>
            <li><strong>La surface à couvrir</strong> : les économies d'échelle jouent fortement au-delà de 80 m².</li>
            <li>
              <strong>Le type de pose</strong> : chape humide (moins coûteuse, délai de séchage de 4 à 6 semaines)
              ou système sec (travaux plus rapides, prix légèrement plus élevé).
            </li>
            <li>
              <strong>L'état du support</strong> : un plancher à redresser ou une isolation à reprendre
              peut ajouter des coûts de maçonnerie significatifs.
            </li>
            <li><strong>La zone géographique</strong> et les tarifs de main-d'œuvre locaux.</li>
          </ul>

          <h3>Le chantier combiné : PAC + plancher chauffant</h3>
          <p>
            La vraie force du plancher chauffant hydraulique, c'est son fonctionnement basse température —
            idéal pour maximiser les performances d'une <a href="/pompe-a-chaleur">pompe à chaleur air/eau</a>.
            Un chantier combiné PAC + plancher chauffant représente un investissement global de l'ordre de
            20 000 à 35 000 €, mais avec un retour rapide grâce aux aides financières et aux économies
            sur la facture de chauffage.
          </p>

          <h2>Quelles aides financières en 2026 ?</h2>

          <h3>MaPrimeRénov' : la PAC est éligible, pas le plancher seul</h3>
          <p>
            Le plancher chauffant hydraulique en tant que tel n'ouvre pas droit à MaPrimeRénov'.
            En revanche, <strong>la pompe à chaleur air/eau qui l'alimente est bien éligible</strong> à
            cette aide, sous condition de revenus et d'installation par un professionnel certifié RGE.
          </p>
          <p>
            <em>Point d'attention en 2026 :</em> le guichet MaPrimeRénov' est actuellement suspendu aux
            nouveaux dossiers dans l'attente du vote du budget 2026. Préparez votre dossier maintenant
            pour être en position de le déposer dès la réouverture.
          </p>

          <h3>TVA à 5,5 % : l'avantage immédiat</h3>
          <p>
            C'est l'aide la plus simple et la plus certaine. Les travaux de rénovation énergétique réalisés
            par un professionnel sur une résidence principale de plus de deux ans bénéficient de la{' '}
            <strong>TVA réduite à 5,5 %</strong> (contre 20 % au taux normal). L'installation d'un plancher
            chauffant hydraulique dans le cadre d'une rénovation est éligible à ce taux réduit.
          </p>

          <h3>Primes CEE</h3>
          <p>
            Les Certificats d'Économies d'Énergie (CEE) peuvent être mobilisés pour l'installation d'un
            système de chauffage basse température couplé à un plancher chauffant. Ces primes, versées
            par les fournisseurs d'énergie, ne dépendent pas de vos revenus et sont cumulables
            avec MaPrimeRénov'.
          </p>

          <h3>Éco-PTZ : financer sans avance de fonds</h3>
          <p>
            L'Éco-Prêt à Taux Zéro permet d'emprunter jusqu'à <strong>50 000 €</strong> sans intérêts
            pour financer un ensemble de travaux de rénovation énergétique — dont le plancher chauffant
            couplé à une PAC. Il est cumulable avec MaPrimeRénov' sous condition de notification Anah.
          </p>

          <h2>Pompe à chaleur + plancher chauffant : pourquoi c'est le duo idéal</h2>
          <p>
            La <a href="/pompe-a-chaleur">pompe à chaleur air/eau</a> est le générateur de chaleur le plus
            adapté au plancher chauffant hydraulique. Trois raisons techniques expliquent ce mariage réussi :
          </p>
          <ul>
            <li>
              <strong>Fonctionnement basse température :</strong> la PAC air/eau produit de l'eau à 35-45 °C,
              ce qui correspond exactement à la plage optimale du plancher chauffant.
            </li>
            <li>
              <strong>COP plus élevé :</strong> plus la température de départ est basse, plus le coefficient
              de performance (COP) de la PAC grimpe — et plus vos factures baissent.
            </li>
            <li>
              <strong>Confort rayonnant :</strong> la chaleur diffuse depuis le sol de façon homogène,
              sans courant d'air ni point chaud, pour un confort thermique sans équivalent.
            </li>
          </ul>
          <p>
            À l'inverse, une pompe à chaleur air/air — qui diffuse de l'air chaud directement dans la pièce
            via des splits — est incompatible avec un plancher chauffant hydraulique, car elle ne dispose
            d'aucun circuit d'eau.
          </p>

          <h2>Ce qu'il faut anticiper avant l'installation</h2>
          <p>
            Intégrer un plancher chauffant dans une rénovation demande quelques vérifications préalables :
          </p>
          <ul>
            <li>
              <strong>Hauteur de sol disponible :</strong> une chape humide ajoute 8 à 12 cm au niveau du sol ;
              un système sec entre 3 et 5 cm. Vérifiez la hauteur sous plafond et la cote des portes.
            </li>
            <li>
              <strong>Isolation du support :</strong> des panneaux isolants sous les tubes sont obligatoires
              pour éviter les pertes vers le bas (planchers sur terre-plein ou sur vide sanitaire).
            </li>
            <li>
              <strong>Revêtements de sol :</strong> carrelage, parquet contrecollé, béton ciré et
              vinyl/LVT sont parfaitement compatibles. Les parquets massifs épais et la moquette
              sont déconseillés.
            </li>
          </ul>
          <p>
            Faire réaliser les travaux par un artisan certifié RGE est indispensable pour accéder aux
            aides et garantir la conformité de l'installation.
          </p>

          <h2>Par où commencer ?</h2>
          <p>
            Avant de vous lancer, évaluez la performance énergétique actuelle de votre logement.
            Un <a href="/dpe-gratuit">DPE gratuit</a> vous indique votre classe actuelle et les gains
            attendus. Utilisez ensuite notre{' '}
            <a href="/simulateur">simulateur d'aides</a> pour estimer votre reste à charge.
          </p>
          <p>
            En tant qu'Accompagnateur Rénov' agréé, RenoHab monte votre dossier d'aides, coordonne
            les artisans RGE et vous guide à chaque étape — du devis à la réception des travaux.
          </p>
        </article>

        {/* CTA RenoHab */}
        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Estimez votre projet chauffage</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            Audit énergétique, montage des aides, artisans RGE : RenoHab vous accompagne de A à Z
            pour votre projet de plancher chauffant + pompe à chaleur.
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
