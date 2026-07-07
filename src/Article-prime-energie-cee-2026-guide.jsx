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

const PUBLISHED = '2026-07-07';
const PATH = '/blog/prime-energie-cee-2026-guide';

export default function ArticlePrimeEnergieCEE() {
  useSeo({
    title: "Prime énergie CEE 2026 : l'aide méconnue qui finance vos travaux sans condition de revenus | RenoHab",
    description:
      "Les Certificats d'Économies d'Énergie (CEE) financent isolation, pompe à chaleur, VMC et plus — sans plafond de revenus, cumulables avec MaPrimeRénov'. Guide complet 2026.",
    path: PATH,
    image: '/blog/prime-energie-cee-2026-guide.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline:
        "Prime énergie CEE 2026 : l'aide méconnue qui finance vos travaux sans condition de revenus",
      description:
        "Les Certificats d'Économies d'Énergie (CEE) financent isolation, pompe à chaleur, VMC et plus — sans plafond de revenus, cumulables avec MaPrimeRénov'. Guide complet 2026.",
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
      about: ['Certificats d\'Économies d\'Énergie', 'Prime énergie', 'CEE', 'Rénovation énergétique', 'Aides travaux'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 7 juillet 2026 · Aides &amp; financement
          </p>

          <h1>Prime énergie CEE 2026 : l'aide méconnue qui finance vos travaux sans condition de revenus</h1>

          <img
            src="/blog/prime-energie-cee-2026-guide.jpg"
            alt="Certificats d'Économies d'Énergie – prime énergie pour la rénovation"
            className="w-full rounded-xl object-cover max-h-80 mb-8"
            loading="lazy"
          />

          <p className="lead">
            MaPrimeRénov' concentre toute l'attention, mais il existe une autre aide — plus discrète,
            jamais suspendue — que des millions de Français laissent sur la table : la{' '}
            <strong>prime énergie CEE</strong>. En 2026, alors que MaPrimeRénov' réduit son périmètre,
            les Certificats d'Économies d'Énergie (CEE) restent pleinement ouverts, sans plafond de
            revenus, pour une large gamme de travaux. Voici comment en profiter.
          </p>

          <h2>Qu'est-ce que la prime énergie CEE ?</h2>
          <p>
            Les Certificats d'Économies d'Énergie sont un dispositif créé par la loi en 2005. Son
            principe est simple : l'État impose aux grands fournisseurs d'énergie — EDF, Engie,
            TotalEnergies, distributeurs de carburants, grandes enseignes de la distribution — d'inciter
            leurs clients à réduire leur consommation d'énergie. Faute d'atteindre leurs objectifs, ces
            « obligés » s'exposent à des pénalités financières lourdes.
          </p>
          <p>
            Pour remplir leur quota, ils financent des travaux d'économies d'énergie chez les
            particuliers, les entreprises et les collectivités. Le résultat, côté propriétaire : une{' '}
            <strong>prime versée directement</strong>, sans plafond de revenus, en échange de la
            réalisation de travaux par un artisan certifié{' '}
            <abbr title="Reconnu Garant de l'Environnement">RGE</abbr>. Depuis sa création, le
            dispositif a financé plus de 1 000 milliards de kWh économisés. En 2026, la 6e période
            du dispositif est en cours, avec des objectifs encore plus ambitieux.
          </p>

          <h2>Pourquoi les CEE sont-ils particulièrement importants en 2026 ?</h2>
          <p>
            MaPrimeRénov' a été suspendue de janvier à fin février 2026, faute de loi de finances
            votée. Et depuis, plusieurs types de travaux ont été ou seront retirés du parcours
            par geste (isolation des combles perdus déjà exclu, fenêtres et VMC à suivre en
            septembre). Les CEE, eux, <strong>n'ont jamais été suspendus</strong>. Ils constituent
            une aide complémentaire — et parfois alternative — incontournable pour les travaux qui
            sortent progressivement du périmètre de MaPrimeRénov'.
          </p>
          <p>
            De plus, depuis le 1er octobre 2025, le montant de la prime CEE pour l'installation
            d'une{' '}
            <a href="/pompe-a-chaleur">pompe à chaleur</a> a été{' '}
            <strong>multiplié par cinq</strong>, sans condition de revenus — une revalorisation
            exceptionnelle pour accélérer la sortie des chaudières fossiles.
          </p>

          <h2>Quels travaux sont éligibles à la prime énergie ?</h2>
          <p>
            Le catalogue des travaux éligibles aux CEE est défini par arrêté. Il couvre l'essentiel
            des postes de rénovation énergétique dans le résidentiel :
          </p>

          <h3>Isolation thermique</h3>
          <ul>
            <li>
              <strong>Isolation des combles perdus</strong> (fiche BAR-EN-101) : la prime est
              calculée au m² en fonction de la zone climatique — de 5 €/m² en zone H3 (Sud) à
              13 €/m² en zone H1 (Nord), pour une résistance thermique R ≥ 7 m².K/W.
            </li>
            <li>
              <strong>Isolation des murs</strong> par l'intérieur ou l'extérieur (BAR-EN-102) :
              mêmes principes de calcul, pour R ≥ 3,7 m².K/W.
            </li>
            <li>
              <strong>Isolation des planchers bas</strong> (sous-sol, vide sanitaire, garage) avec
              R ≥ 3 m².K/W.
            </li>
            <li>
              <strong>Remplacement des fenêtres et portes-fenêtres</strong> : double ou triple vitrage
              performant (Uw ≤ 1,3 W/m².K).
            </li>
          </ul>

          <h3>Chauffage et eau chaude sanitaire</h3>
          <ul>
            <li>
              <strong>Pompe à chaleur air/eau</strong> pour le chauffage central : la prime CEE est
              significativement revalorisée depuis octobre 2025 — jusqu'à plusieurs milliers d'euros
              selon la puissance et la zone géographique.
            </li>
            <li>
              <strong>Chauffe-eau thermodynamique</strong> (COP ≥ 2,5) : prime au forfait, accessible
              sans démarche MaPrimeRénov'.
            </li>
            <li>
              <strong>Poêle à bois ou à granulés</strong> (rendement ≥ 70 %, émissions limitées) :
              prime CEE disponible même si MaPrimeRénov' ne finance plus ce geste après septembre 2026.
            </li>
            <li>
              <strong>Raccordement à un réseau de chaleur</strong> alimenté par des énergies renouvelables
              ou de récupération.
            </li>
          </ul>

          <h3>Ventilation</h3>
          <ul>
            <li>
              <strong>VMC double flux</strong> : prime CEE pour l'installation en maison individuelle
              ou en appartement, avec récupération de chaleur (rendement ≥ 75 %).
            </li>
          </ul>

          <h2>Comment obtenir sa prime énergie CEE en 2026 ?</h2>
          <p>
            La démarche suit une règle impérative : la demande de prime doit être faite{' '}
            <strong>avant la signature du devis artisan</strong>. Tout dossier constitué après le
            début des travaux est irrecevable. Voici les étapes :
          </p>
          <ol>
            <li>
              <strong>Choisissez un signataire</strong> : il peut s'agir directement d'un fournisseur
              d'énergie (EDF, Engie, TotalEnergies…) ou d'un intermédiaire mandaté (courtier en
              primes énergie, plateforme spécialisée). Les montants varient selon les offres — comparer
              est judicieux.
            </li>
            <li>
              <strong>Déposez votre demande en ligne</strong> : le signataire vous demande les
              caractéristiques du logement (surface, type d'énergie de chauffage, zone climatique) et
              le devis descriptif de l'artisan RGE.
            </li>
            <li>
              <strong>Faites réaliser les travaux</strong> par l'artisan certifié RGE. Le logement
              doit avoir plus de deux ans à la date de début des travaux.
            </li>
            <li>
              <strong>Transmettez les factures</strong> : le signataire verse la prime par virement,
              généralement dans les semaines suivant la réception du dossier complet.
            </li>
          </ol>

          <h2>CEE et MaPrimeRénov' : peut-on cumuler les deux aides ?</h2>
          <p>
            Oui, et c'est même la stratégie optimale. CEE et MaPrimeRénov' sont{' '}
            <strong>entièrement cumulables</strong>. Le CEE réduit le reste à charge après déduction
            de MaPrimeRénov', de la TVA à 5,5 % et de l'éco-PTZ. En pratique, pour une pompe à chaleur
            air/eau chez un ménage aux revenus intermédiaires :
          </p>
          <ul>
            <li>MaPrimeRénov' (parcours par geste) : environ 4 000 à 6 000 €</li>
            <li>Prime CEE (depuis la revalorisation octobre 2025) : 1 500 à 4 000 € selon la zone et la puissance</li>
            <li>TVA à 5,5 % : économie de ~1 500 € sur une installation de 14 000 €</li>
            <li>
              <strong>Reste à charge net : souvent inférieur à 6 000 €</strong>, finançable par l'éco-PTZ
              sans intérêts
            </li>
          </ul>
          <p>
            Pour l'isolation des combles perdus — exclue du parcours MaPrimeRénov' par geste depuis
            début 2026 — les CEE restent <strong>la principale aide accessible</strong> sans passer
            par le parcours rénovation d'ampleur, avec des montants de 5 à 13 €/m² selon la région.
          </p>

          <h2>Conditions à vérifier avant de se lancer</h2>
          <ul>
            <li>
              <strong>Logement de plus de 2 ans</strong> à la date de début des travaux (construction
              neuve non éligible).
            </li>
            <li>
              <strong>Artisan certifié RGE</strong> obligatoire — vérifiable sur le site France Rénov'.
            </li>
            <li>
              <strong>Demande déposée avant la signature du devis</strong> — c'est la condition la plus
              souvent négligée, et qui fait perdre la prime.
            </li>
            <li>
              Résidences principales et secondaires éligibles, ainsi que les locaux professionnels et les
              copropriétés.
            </li>
          </ul>

          <h2>Par où commencer ?</h2>
          <p>
            La première étape reste l'évaluation de votre logement. Un{' '}
            <a href="/dpe-gratuit">DPE gratuit en ligne</a> permet d'identifier les postes les plus
            énergivores et de prioriser les travaux. Notre{' '}
            <a href="/#simulator">simulateur d'aides</a> calcule ensuite l'ensemble des financements
            mobilisables pour votre projet — CEE, MaPrimeRénov', éco-PTZ et TVA réduite — en quelques
            minutes.
          </p>
          <p>
            En tant qu'Accompagnateur Rénov' agréé, RenoHab constitue et dépose les dossiers CEE et
            MaPrimeRénov' pour vous, sélectionne les artisans RGE adaptés à votre projet, et s'assure
            que la demande de prime est bien effectuée dans le bon ordre — avant toute signature. C'est
            ce point de procédure, simple en apparence, qui fait échouer la plupart des dossiers
            montés sans accompagnement.
          </p>
        </article>

        {/* CTA RenoHab */}
        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Calculez vos primes énergie</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            RenoHab monte vos dossiers CEE et MaPrimeRénov' et vous met en relation avec des artisans
            RGE qualifiés pour maximiser vos aides.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/#simulator"
              className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all"
            >
              Simuler mes aides
            </a>
            <a
              href="/pompe-a-chaleur"
              className="px-6 py-3 rounded-full border border-white/70 text-white font-semibold hover:bg-white/10 transition-all"
            >
              Étude pompe à chaleur
            </a>
          </div>
        </div>
      </main>

      <ArticleFooter />
    </div>
  );
}
