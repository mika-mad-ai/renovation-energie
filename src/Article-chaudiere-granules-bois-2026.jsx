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

const PUBLISHED = '2026-07-20';
const PATH = '/blog/chaudiere-granules-bois-2026-prix-aides';

export default function ArticleChaudiereGranulesBois2026() {
  useSeo({
    title: "Chaudière à granulés de bois en 2026 : prix, aides et alternatives au gaz | RenoHab",
    description:
      "Chaudière à granulés en 2026 : ce qui change avec MaPrimeRénov', les aides qui restent (CEE, Éco-PTZ, TVA 5,5 %), les prix réels et quand la préférer à une pompe à chaleur.",
    path: PATH,
    image: 'https://renohab.fr/blog/chaudiere-granules-bois-2026-prix-aides.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline:
        "Chaudière à granulés de bois en 2026 : prix, aides et alternatives au gaz",
      description:
        "Chaudière à granulés en 2026 : ce qui change avec MaPrimeRénov', les aides qui restent (CEE, Éco-PTZ, TVA 5,5 %), les prix réels et quand la préférer à une pompe à chaleur.",
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
      about: ['Chaudière à granulés', 'Biomasse', 'Aides rénovation 2026', 'Chauffage bois'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 20 juillet 2026 · Chauffage &amp; aides
          </p>

          <h1>Chaudière à granulés de bois en 2026 : prix, aides et alternatives au gaz</h1>

          <img
            src="/blog/chaudiere-granules-bois-2026-prix-aides.jpg"
            alt="Chaudière à granulés de bois installée dans une maison"
            className="w-full rounded-xl object-cover max-h-80 mb-8"
            loading="lazy"
          />

          <p className="lead">
            Face à la flambée des prix du gaz et au durcissement des règles sur les{' '}
            <strong>passoires thermiques</strong>, la chaudière à granulés de bois attire de plus
            en plus de propriétaires. Mais en 2026, le paysage des aides a changé : MaPrimeRénov'
            par geste n'est plus accessible pour ce type de travaux. On fait le point sur ce qui
            reste finançable, les prix réels et quand préférer la biomasse à une pompe à chaleur.
          </p>

          <h2>Comment fonctionne une chaudière à granulés ?</h2>
          <p>
            Une chaudière à granulés (ou <em>pellets</em>) brûle des cylindres de bois compressé
            pour produire de la chaleur. Elle alimente un réseau de radiateurs à eau ou un plancher
            chauffant, exactement comme une chaudière gaz ou fioul. Le combustible, stocké dans
            une trémie automatique, se charge via une vis sans fin : l'entretien se limite à vider
            les cendres toutes les deux à quatre semaines.
          </p>
          <p>
            Les modèles actuels affichent un <strong>rendement de 85 à 92 %</strong> (condensation
            incluse). Le bois étant considéré comme une énergie à faibles émissions fossiles, la
            chaudière à granulés est éligible aux aides à la décarbonation — à condition de
            respecter les critères techniques en vigueur.
          </p>

          <h2>Ce qui change en 2026 : MaPrimeRénov' par geste exclue</h2>
          <p>
            Depuis le <strong>1er janvier 2026</strong>, l'installation d'une chaudière biomasse
            seule (granulés ou bûches) <strong>n'est plus éligible au parcours MaPrimeRénov'
            par geste</strong>. Cette réforme vise à concentrer la subvention sur les gestes les
            plus décarbonants, en priorité les pompes à chaleur, et à encourager les rénovations
            globales plutôt que les gestes isolés.
          </p>
          <p>
            Une exception subsiste temporairement jusqu'au <strong>31 décembre 2026</strong> pour
            les passoires thermiques classées <strong>F ou G</strong> : elles conservent un accès
            limité au parcours par geste pour un certain nombre de travaux, mais la chaudière
            biomasse seule ne figure pas dans la liste maintenue.
          </p>

          <h3>Les aides qui restent disponibles en 2026</h3>
          <p>
            Même sans MaPrimeRénov' par geste, plusieurs dispositifs permettent de financer une
            chaudière à granulés :
          </p>
          <ul>
            <li>
              <strong>Prime CEE (Certificats d'Économies d'Énergie)</strong> : versée par les
              fournisseurs d'énergie, sans condition de revenus. Comptez <strong>2 000 à 4 000 €</strong>,
              avec un bonus significatif si vous remplacez une chaudière au fioul, au charbon ou
              au gaz.
            </li>
            <li>
              <strong>TVA à 5,5 %</strong> : automatiquement applicable sur la fourniture et
              la pose pour tout logement de plus de 2 ans. Représente une économie de 14,5 points
              sur le taux normal.
            </li>
            <li>
              <strong>Éco-PTZ</strong> : prêt à taux zéro jusqu'à <strong>50 000 €</strong> pour
              des bouquets de travaux performants, remboursable sur 20 ans, sans avance de
              trésorerie. Cumulable avec les CEE.{' '}
              <a href="/simulateur">Estimez votre financement avec notre simulateur</a>.
            </li>
            <li>
              <strong>MaPrimeRénov' parcours accompagné (rénovation d'ampleur)</strong> : si
              vous combinez la chaudière à granulés avec au moins un autre geste (isolation,
              ventilation…) pour gagner deux classes DPE ou plus, la subvention peut atteindre
              jusqu'à <strong>80 % du montant des travaux</strong> pour les ménages très modestes,
              dans la limite de 40 000 € HT. En tant qu'Accompagnateur Rénov', RenoHab monte
              ce dossier pour vous.
            </li>
          </ul>

          <h2>Prix d'une chaudière à granulés en 2026</h2>
          <p>
            Le coût d'une installation complète (matériel + pose + trémie) se situe entre
            <strong> 10 000 et 18 000 €</strong> selon la puissance et la configuration du logement.
            Pour un chantier standard :
          </p>
          <ul>
            <li>Chaudière seule (8 à 25 kW) : 4 000 à 10 000 €</li>
            <li>Trémie de stockage et visserie : 1 000 à 3 000 €</li>
            <li>Installation et mise en service : 3 000 à 5 000 €</li>
          </ul>
          <p>
            Côté combustible, le sac de granulés de 15 kg se négociait entre{' '}
            <strong>5,50 € et 6,50 €</strong> pendant l'hiver 2025–2026, soit environ 380 à 430 €
            la tonne. La consommation annuelle d'une maison de 120 m² correctement isolée tourne
            autour de 2 à 3 tonnes.
          </p>

          <h2>Chaudière à granulés ou pompe à chaleur : laquelle choisir ?</h2>
          <p>
            Les deux systèmes réduisent efficacement la facture énergétique et les émissions de CO₂.
            Le bon choix dépend de votre situation :
          </p>
          <ul>
            <li>
              <strong>Optez pour la chaudière à granulés</strong> si votre logement est mal isolé
              (la PAC perd en efficacité sous des températures très basses), si vous êtes en zone
              rurale éloignée du réseau électrique renforcé, ou si vous disposez déjà d'un réseau
              de radiateurs haute température qu'il serait coûteux de remplacer.
            </li>
            <li>
              <strong>Préférez la pompe à chaleur air/eau</strong> si votre logement est bien isolé,
              si vous souhaitez bénéficier d'un refroidissement en été (PAC réversible), ou si la
              gestion du stockage de granulés est contraignante.{' '}
              <a href="/pompe-a-chaleur">Découvrez nos offres PAC air/eau</a>.
            </li>
          </ul>
          <p>
            Dans les deux cas, un <a href="/dpe-gratuit">DPE actualisé</a> est indispensable pour
            choisir le système adapté à votre logement et maximiser les aides disponibles.
          </p>

          <h2>La rénovation d'ampleur : le meilleur levier pour financer la biomasse</h2>
          <p>
            Depuis la réforme 2026 de MaPrimeRénov', la <strong>rénovation d'ampleur</strong>{' '}
            (parcours accompagné) est la voie royale pour financer une chaudière à granulés avec
            une subvention substantielle. Le principe : associer la chaudière à au moins un geste
            complémentaire (isolation des combles, des murs, ventilation), réaliser un audit
            énergétique et être accompagné par un professionnel agréé.
          </p>
          <p>
            Ce parcours est plus exigeant, mais les montants d'aides sont sans commune mesure avec
            les anciens dispositifs. Pour un ménage aux revenus intermédiaires, la subvention peut
            couvrir 45 à 60 % du devis global travaux.
          </p>
          <p>
            RenoHab, <strong>Accompagnateur Rénov' agréé</strong>, vous aide à construire ce
            dossier de A à Z : audit énergétique, choix des gestes, coordination des artisans
            RGE et dépôt des demandes de subvention — le tout sans avance de trésorerie pour la
            partie aidée.
          </p>
        </article>

        {/* CTA RenoHab */}
        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">
            Financez votre chaudière à granulés en 2026
          </h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            Audit énergétique, montage des aides CEE + Éco-PTZ + rénovation d'ampleur :
            RenoHab coordonne tout pour maximiser votre subvention et réduire votre reste à charge.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/dpe-gratuit"
              className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all"
            >
              Obtenir mon DPE gratuit
            </a>
            <a
              href="/pompe-a-chaleur"
              className="px-6 py-3 rounded-full border border-white/70 text-white font-semibold hover:bg-white/10 transition-all"
            >
              Comparer avec une PAC
            </a>
          </div>
        </div>
      </main>

      <ArticleFooter />
    </div>
  );
}
