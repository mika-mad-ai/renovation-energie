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

const PUBLISHED = '2026-08-23';
const PATH = '/blog/chaudiere-granules-bois-aides-2026';

export default function ArticleChaudiereGranulesBois2026() {
  useSeo({
    title: "Chaudière à granulés de bois 2026 : fin de MaPrimeRénov' par geste, quelles aides restent ? | RenoHab",
    description:
      "Depuis le 1er janvier 2026, la chaudière à granulés n'est plus éligible à MaPrimeRénov' par geste. Découvrez les aides encore disponibles (CEE, TVA 5,5 %, Éco-PTZ, parcours accompagné) et comment optimiser votre financement.",
    path: PATH,
    image: '/blog/chaudiere-granules-bois-aides-2026.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: "Chaudière à granulés de bois 2026 : fin de MaPrimeRénov' par geste, quelles aides restent ?",
      description:
        "Depuis le 1er janvier 2026, la chaudière à granulés n'est plus éligible à MaPrimeRénov' par geste. Découvrez les aides encore disponibles et comment optimiser votre financement.",
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
      about: ['Chaudière granulés bois', 'MaPrimeRénov', 'CEE', 'Aides rénovation énergétique 2026'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 23 août 2026 · Chauffage &amp; aides
          </p>

          <h1>Chaudière à granulés de bois 2026 : fin de MaPrimeRénov' par geste, quelles aides restent ?</h1>

          <img
            src="/blog/chaudiere-granules-bois-aides-2026.jpg"
            alt="Chaudière à granulés de bois dans une maison rénovée"
            className="w-full rounded-2xl object-cover mb-8"
            style={{ maxHeight: '420px' }}
            loading="eager"
          />

          <p className="lead">
            La chaudière à granulés de bois (ou pellets) a longtemps été l'une des alternatives les
            plus aidées pour remplacer une chaudière fioul ou gaz. Depuis le <strong>1er janvier 2026</strong>,
            la donne change : MaPrimeRénov' ne finance plus cet équipement dans le cadre du parcours
            dit « par geste ». Ce que cela signifie concrètement, et comment continuer à bénéficier
            d'aides significatives — c'est ce que ce guide explique.
          </p>

          <h2>Ce qui a changé au 1er janvier 2026</h2>
          <p>
            La réforme de MaPrimeRénov' entrée en vigueur au 1er janvier 2026 a recentré le dispositif
            sur les équipements jugés les plus performants en termes de décarbonation à long terme :
            pompes à chaleur, solaire thermique, chauffe-eau thermodynamiques. Les <strong>chaudières
            biomasse</strong> (bois, granulés, plaquettes) ont été exclues du parcours monogeste, celui
            qui permettait d'obtenir une prime pour un seul équipement sans obligation de réaliser une
            rénovation complète.
          </p>
          <p>
            Cette exclusion s'inscrit dans la logique de la 6e période des Certificats d'Économies
            d'Énergie (CEE, 2026–2030), qui oriente l'effort public vers les rénovations globales et
            les équipements les plus efficaces sur le long terme. Elle ne signifie pas pour autant la
            fin de toute aide : plusieurs dispositifs restent accessibles.
          </p>

          <h2>Les aides encore disponibles en 2026</h2>

          <h3>La prime CEE (Certificats d'Économies d'Énergie)</h3>
          <p>
            C'est aujourd'hui le principal coup de pouce disponible pour une chaudière à granulés.
            La prime CEE est versée par les fournisseurs d'énergie (EDF, TotalEnergies, Engie, etc.)
            en échange de l'installation d'un équipement éligible. Son montant dépend de l'énergéticien
            choisi, de vos revenus et de la zone climatique de votre logement. En 2026, les primes
            CEE pour une chaudière biomasse en remplacement d'un équipement fossile peuvent atteindre
            <strong> environ 1 500 €</strong>, parfois davantage si l'on passe par un opérateur
            spécialisé qui agrège plusieurs bonifications.
          </p>

          <h3>La TVA à 5,5 %</h3>
          <p>
            Sans condition de ressources ni de plafond particulier, l'installation d'une chaudière
            à granulés dans une résidence principale de plus de deux ans bénéficie du <strong>taux
            réduit de TVA à 5,5 %</strong> sur la main-d'œuvre et le matériel. Sur une facture totale
            de 12 000 €, la différence entre la TVA à 20 % et à 5,5 % représente une économie de
            l'ordre de <strong>1 740 €</strong> — un avantage souvent sous-estimé.
          </p>

          <h3>L'Éco-PTZ (prêt à taux zéro)</h3>
          <p>
            Vous pouvez financer l'installation via un <a href="/simulateur">Éco-PTZ</a> d'un montant
            pouvant atteindre <strong>50 000 €</strong> sans intérêts, remboursable sur 20 ans. Ce prêt
            est accessible dans les banques partenaires sans condition de ressources. Il se cumule avec
            la prime CEE et la TVA réduite.
          </p>

          <h3>MaPrimeRénov' dans le cadre d'une rénovation d'ampleur</h3>
          <p>
            La chaudière à granulés reste éligible à MaPrimeRénov' à condition d'être intégrée dans un
            projet de <strong>rénovation d'ampleur</strong> (parcours accompagné). Ce parcours impose :
          </p>
          <ul>
            <li>Un <a href="/dpe-gratuit">audit énergétique</a> préalable du logement.</li>
            <li>L'accompagnement obligatoire par un Accompagnateur Rénov' agréé (c'est le rôle de RenoHab).</li>
            <li>La réalisation d'au moins deux gestes de rénovation permettant un saut d'au moins deux classes DPE.</li>
          </ul>
          <p>
            Dans ce cadre, la subvention peut couvrir entre 40 % et 70 % du coût des travaux selon
            les revenus du ménage. Pour les profils les plus modestes, le reste à charge peut être
            très faible, voire nul avec le cumul des aides.
          </p>

          <h2>Prix d'une chaudière à granulés : à quoi s'attendre ?</h2>
          <p>
            Une installation complète — chaudière, silo à granulés, pose par un installateur RGE — se
            situe généralement entre <strong>10 000 et 20 000 €</strong> selon la puissance de la
            chaudière (en kW), la taille du silo et les contraintes du bâtiment. Les chaudières les
            plus performantes (à condensation, avec modules de régulation intelligente) se trouvent
            plutôt en haut de cette fourchette.
          </p>
          <p>
            Comparée à une pompe à chaleur air/eau, la chaudière à granulés présente l'avantage d'un
            coût du combustible stable et compétitif, mais l'inconvénient d'un approvisionnement
            logistique à gérer (livraisons régulières, espace de stockage). Si vous hésitez entre les
            deux options, un <a href="/pompe-a-chaleur">simulateur dédié aux pompes à chaleur</a> vous
            aide à comparer les coûts et les performances.
          </p>

          <h2>Conditions à respecter pour bénéficier des aides</h2>
          <ul>
            <li><strong>Artisan RGE</strong> : l'installation doit obligatoirement être réalisée par un professionnel
              certifié RGE (Reconnu Garant de l'Environnement).</li>
            <li><strong>Résidence principale</strong> : le logement doit être votre résidence principale et avoir
              plus de deux ans.</li>
            <li><strong>Critère de performance</strong> : la chaudière doit afficher un rendement saisonnier (Etas)
              conforme aux exigences de la fiche CEE applicable.</li>
            <li><strong>Devis avant travaux</strong> : pour la prime CEE, le devis signé doit être antérieur au
              début des travaux.</li>
          </ul>

          <h2>Stratégie recommandée en 2026</h2>
          <p>
            Si votre logement est classé <strong>F ou G au DPE</strong> et que vous envisagez plusieurs
            travaux (isolation + chauffage), le parcours accompagné reste la meilleure voie pour accéder
            aux aides les plus généreuses, y compris pour une chaudière à granulés. Il demande un peu
            plus de préparation, mais les économies potentielles sur le reste à charge sont substantielles.
          </p>
          <p>
            En revanche, si votre logement est déjà bien isolé et classé D ou C, une simple installation
            financée par la prime CEE, l'Éco-PTZ et la TVA réduite peut suffire à réduire
            significativement votre facture de chauffage tout en améliorant votre bilan carbone.
          </p>
          <p>
            Dans tous les cas, commencez par <a href="/dpe-gratuit">estimer le DPE de votre logement</a> :
            c'est lui qui conditionne la stratégie de travaux et les aides auxquelles vous pouvez prétendre.
          </p>
        </article>

        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Votre projet chaudière à granulés, bien financé</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            Audit énergétique, dossier d'aides, mise en relation avec des installateurs RGE : RenoHab
            vous accompagne de A à Z pour maximiser vos subventions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/dpe-gratuit" className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all">
              Estimer mon DPE gratuitement
            </a>
            <a href="/pompe-a-chaleur" className="px-6 py-3 rounded-full border border-white/70 text-white font-semibold hover:bg-white/10 transition-all">
              Comparer avec la pompe à chaleur
            </a>
          </div>
        </div>
      </main>

      <ArticleFooter />
    </div>
  );
}
