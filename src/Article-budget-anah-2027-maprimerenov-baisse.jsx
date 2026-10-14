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
        <p className="mt-3 text-sm text-gray-500">
          <a href="/mentions-legales" className="hover:text-emerald-300 transition-colors">Mentions légales</a>
          <span className="mx-2 opacity-60">·</span>
          <a href="/confidentialite" className="hover:text-emerald-300 transition-colors">Politique de confidentialité</a>
        </p>
      </div>
    </footer>
  );
}

const PUBLISHED = '2026-10-11';
const PATH = '/blog/budget-anah-2027-maprimerenov-baisse';

export default function ArticleBudgetAnah2027() {
  useSeo({
    title: "Budget 2027 : l'Anah perd 200 M€ — ce qui change pour MaPrimeRénov' | RenoHab",
    description:
      "Le projet de loi de finances 2027 réduit de 200 millions d'euros la dotation de l'Anah. Quelles conséquences sur MaPrimeRénov', les gestes isolés et les rénovations en cours ?",
    path: PATH,
    image: '/blog/budget-anah-2027-maprimerenov-baisse.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: "Budget 2027 : l'Anah perd 200 millions d'euros — ce qui change pour MaPrimeRénov'",
      description:
        "Le projet de loi de finances 2027 réduit de 200 millions d'euros la dotation de l'Anah. Quelles conséquences sur MaPrimeRénov', les gestes isolés et les rénovations en cours ?",
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
      about: ["MaPrimeRénov'", 'Anah', 'Budget 2027', 'Rénovation énergétique'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 11 oct. 2026 · Aides & financement
          </p>

          <h1>Budget 2027 : l'Anah perd 200 millions d'euros — ce qui change pour MaPrimeRénov'</h1>

          <img
            src="/blog/budget-anah-2027-maprimerenov-baisse.jpg"
            alt="Maison individuelle rénovée avec panneau solaire — budget MaPrimeRénov' 2027"
            className="rounded-2xl w-full object-cover mb-8"
            loading="lazy"
            onError={(e) => { e.currentTarget.src = '/DALL-E-2-maison.webp'; }}
          />

          <p className="lead">
            Le projet de loi de finances (PLF) 2027 présenté début octobre 2026 prévoit de réduire
            la dotation de l'État à l'Anah de <strong>200 millions d'euros</strong>, passant de
            1,4 milliard à 1,2 milliard de crédits de paiement. Une coupe de 14 % qui soulève des
            questions légitimes : mon dossier MaPrimeRénov' est-il menacé ? Puis-je encore obtenir
            une aide pour isoler mes murs ? Faut-il accélérer mes travaux ?
          </p>

          <h2>Ce que prévoit le PLF 2027 concrètement</h2>
          <p>
            Le gouvernement justifie cette baisse par deux arguments : un <em>recentrage de la
            rénovation énergétique sur la décarbonation</em>, en lien avec le plan d'électrification
            national, et un transfert de la prise en charge de certains gestes vers les{' '}
            <strong>Certificats d'Économies d'Énergie (CEE)</strong>, financés par les
            fournisseurs d'énergie plutôt que par le budget de l'État.
          </p>
          <p>
            En pratique, le PLF prévoit que <strong>MaPrimeRénov' par geste</strong> serait
            réservée à trois postes de travaux uniquement :
          </p>
          <ul>
            <li>La <strong>pompe à chaleur</strong> (air/eau, géothermique, eau/eau)</li>
            <li>Le <strong>raccordement à un réseau de chaleur urbain</strong></li>
            <li>L'<strong>audit énergétique réglementaire</strong> (dans le cadre d'une rénovation d'ampleur)</li>
          </ul>
          <p>
            Les autres gestes — isolation des murs, des combles, remplacement de fenêtres,
            chauffe-eau thermodynamique, poêles à bois — seraient financés <strong>uniquement
            via les CEE</strong> et non plus via MaPrimeRénov'.
          </p>

          <h2>Dossiers en cours : aucun risque immédiat</h2>
          <p>
            Il est important de le rappeler : le PLF n'est qu'un <strong>projet de budget</strong>.
            Il doit encore être discuté et voté à l'Assemblée nationale puis au Sénat avant
            d'entrer en vigueur, probablement pas avant janvier 2027. Les règles
            actuelles de MaPrimeRénov' restent donc applicables jusqu'à la fin de 2026.
          </p>
          <p>
            Par ailleurs, selon les informations publiées par Actual Immo et Batirama début
            octobre 2026, les dossiers MaPrimeRénov' <strong>déjà acceptés ou en cours
            d'instruction</strong> ne sont pas remis en cause par cette réforme budgétaire.
          </p>

          <h2>Les CEE prennent le relais : ce que ça change pour vous</h2>
          <p>
            Si les gestes isolés basculent définitivement vers les CEE, cela ne signifie pas
            la fin des aides. Les{' '}
            <a href="/blog/cee-2026-prime-energie-comment-en-profiter">primes CEE</a>{' '}
            couvrent déjà la plupart des travaux d'isolation et de chauffage, avec des montants
            significatifs selon les revenus et le type de logement.
          </p>
          <p>
            La différence principale : les CEE sont distribués par des <em>obligés</em> (EDF,
            TotalEnergies, Engie…) qui négocient directement avec les artisans ou les courtiers.
            La démarche administrative est souvent plus simple qu'un dossier Anah — mais les
            montants peuvent être inférieurs aux anciennes primes MaPrimeRénov' pour les ménages
            modestes, qui bénéficiaient d'un bonus lié aux revenus.
          </p>

          <h2>La rénovation d'ampleur reste la priorité de l'État</h2>
          <p>
            Le signal envoyé est clair : le gouvernement souhaite orienter les aides publiques
            vers les <strong>rénovations globales</strong> (gain d'au moins 2 classes DPE) plutôt
            que vers des gestes ponctuels. Cette logique s'applique notamment via{' '}
            <a href="/blog/maprimerenov-ampleur-fin-gaz-septembre-2026">MaPrimeRénov' Ampleur</a>,
            qui reste dotée et accessible aux ménages de toutes tranches de revenus.
          </p>
          <p>
            Concrètement, un propriétaire qui réalise une rénovation permettant de passer de
            l'étiquette F à C bénéficie toujours d'aides pouvant couvrir <strong>jusqu'à 70 %</strong>{' '}
            du coût des travaux pour les ménages très modestes. La condition : être accompagné
            par un Accompagnateur Rénov' agréé, comme RenoHab.
          </p>

          <h2>Faut-il accélérer ses travaux avant 2027 ?</h2>
          <p>
            La question est légitime, mais la réponse est nuancée. Précipiter des travaux mal
            préparés pour «&nbsp;attraper les aides&nbsp;» est risqué : un dossier incomplet,
            un artisan non RGE ou des travaux mal séquencés peuvent entraîner un refus ou
            réduire le gain énergétique réel.
          </p>
          <p>
            En revanche, si vous avez déjà un{' '}
            <a href="/dpe-gratuit">DPE récent</a> et un projet de travaux défini, déposer votre
            dossier MaPrimeRénov' avant la fin de l'année 2026 — sous les règles actuelles — est
            une démarche sensée. Les règles de 2026 sont connues ; celles de 2027 restent encore
            incertaines.
          </p>

          <h3>Les points à vérifier dès maintenant</h3>
          <ul>
            <li>Votre <strong>DPE</strong> est-il à jour (moins de 10 ans) ? Il est obligatoire pour tout dossier Anah.</li>
            <li>Votre projet inclut-il une <strong>pompe à chaleur</strong> ? C'est le geste le mieux maintenu dans les deux scénarios (2026 et 2027).</li>
            <li>Votre logement est-il en classe F ou G ? La{' '}
              <a href="/blog/dpe-2026-passoires-thermiques-location">réglementation sur les passoires</a>{' '}
              impose de toute façon des travaux avant 2028 pour les propriétaires bailleurs F.</li>
            <li>Avez-vous cumulé toutes les aides disponibles ? MaPrimeRénov' + CEE + Éco-PTZ peuvent se combiner.</li>
          </ul>

          <h2>Ce que RenoHab retient</h2>
          <p>
            La baisse du budget Anah 2027 est une réalité probable, mais pas encore définitive.
            Elle traduit une tendance de fond : l'État concentre ses aides sur les rénovations
            globales et la décarbonation (sortie du gaz, installation de PAC), et délègue les
            gestes d'isolation aux CEE. Pour la grande majorité des propriétaires, les aides
            restent disponibles — elles changent simplement de guichet.
          </p>
          <p>
            La meilleure stratégie reste la même : établir un plan de travaux cohérent, adapté
            à votre logement et à votre situation financière, en mobilisant toutes les aides
            cumulables. C'est exactement ce qu'un Accompagnateur Rénov' est là pour faire.
          </p>
        </article>

        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Simulez vos aides 2026 maintenant</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            Les règles actuelles s'appliquent jusqu'à fin 2026. Calculez votre plan de financement
            avant les changements de 2027 avec l'aide de nos experts.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/#simulateur" className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all">
              Simuler mes aides
            </a>
            <a href="/pompe-a-chaleur" className="px-6 py-3 rounded-full border border-white/70 text-white font-semibold hover:bg-white/10 transition-all">
              Étudier une pompe à chaleur
            </a>
          </div>
        </div>
      </main>

      <ArticleFooter />
    </div>
  );
}
