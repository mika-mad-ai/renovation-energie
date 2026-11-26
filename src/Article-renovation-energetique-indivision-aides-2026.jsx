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

const PUBLISHED = '2026-11-26';
const PATH = '/blog/renovation-energetique-indivision-aides-2026';

export default function ArticleRenovationIndivision2026() {
  useSeo({
    title: "Rénovation énergétique d'un bien en indivision : aides et démarches en 2026 | RenoHab",
    description:
      "Propriété héritée ou achetée à plusieurs ? Découvrez comment accéder à MaPrimeRénov', aux primes CEE et à l'éco-PTZ pour rénover un logement en indivision en 2026 : conditions, documents et étapes.",
    path: PATH,
    image: '/blog/renovation-energetique-indivision-aides-2026.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline:
        "Rénovation énergétique d'un bien en indivision : comment bénéficier des aides en 2026",
      description:
        "Propriété héritée ou achetée à plusieurs ? Découvrez comment accéder à MaPrimeRénov', aux primes CEE et à l'éco-PTZ pour rénover un logement en indivision en 2026 : conditions, documents et étapes.",
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
      about: ["Rénovation énergétique", "Indivision", "MaPrimeRénov'", "Aides travaux"],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">

          <p className="text-sm text-gray-500 !mb-2">
            Publié le 26 novembre 2026 · Aides
          </p>

          <h1>Rénovation énergétique d'un bien en indivision : comment bénéficier des aides en 2026</h1>

          <img
            src="/blog/renovation-energetique-indivision-aides-2026.jpg"
            alt="Maison familiale détenue en indivision — succession et rénovation énergétique"
            className="w-full rounded-2xl shadow-soft my-6"
            loading="lazy"
          />

          <p className="lead">
            Héritage familial, achat en commun, situation post-divorce : en France, des centaines de milliers de logements sont détenus en <strong>indivision</strong>. Ces biens doivent souvent être rénovés — pour respecter les nouvelles règles de décence énergétique, préserver leur valeur ou simplement réduire des factures partagées. Mais peut-on accéder à MaPrimeRénov' et aux autres aides quand on n'est pas seul propriétaire ?
          </p>

          <h2>Qu'est-ce que l'indivision ?</h2>
          <p>
            L'indivision désigne la situation juridique dans laquelle un bien immobilier appartient simultanément à plusieurs personnes — les <em>indivisaires</em> — sans division matérielle entre elles. Chacun détient une <em>quote-part</em>, exprimée en fraction ou en pourcentage, mais aucun ne peut revendiquer une partie précise du bien.
          </p>
          <p>
            L'indivision survient le plus souvent :
          </p>
          <ul>
            <li>après un <strong>héritage</strong> partagé entre plusieurs héritiers ;</li>
            <li>lors d'un <strong>achat en commun</strong> entre concubins, amis ou associés ;</li>
            <li>dans le cadre d'un <strong>divorce</strong> dont la liquidation du régime matrimonial n'est pas encore finalisée.</li>
          </ul>
          <p>
            Selon l'article 815-3 du Code civil, les travaux d'amélioration (par opposition au simple entretien courant) nécessitent l'accord des indivisaires représentant au moins deux tiers des droits indivis. Cette règle peut compliquer le lancement d'un chantier de rénovation, mais elle n'empêche pas d'accéder aux aides.
          </p>

          <h2>MaPrimeRénov' est-elle accessible en indivision ?</h2>
          <p>
            Oui. L'<strong>Anah accepte les demandes MaPrimeRénov' pour les logements en indivision</strong>, sous réserve de respecter quelques règles spécifiques.
          </p>

          <h3>Un seul demandeur, l'accord de tous</h3>
          <p>
            Un seul indivisaire joue le rôle de <strong>demandeur principal</strong> et dépose le dossier sur le portail maprimerenov.gouv.fr. Les autres indivisaires doivent avoir signé une <strong>attestation d'indivision</strong> qui désigne ce demandeur et autorise les travaux en son nom. Sans cette pièce, le dossier est incomplet et peut être rejeté lors de l'instruction.
          </p>

          <h3>Les revenus retenus pour le calcul de l'aide</h3>
          <p>
            Seuls les revenus du <strong>foyer fiscal du demandeur</strong> (revenu fiscal de référence N-2) sont pris en compte pour déterminer le taux d'aide. Les revenus des autres indivisaires n'entrent pas dans le calcul. Cette règle peut constituer un avantage si l'indivisaire le plus modeste est désigné demandeur : son taux d'aide sera le plus élevé.
          </p>

          <h3>Conditions à satisfaire</h3>
          <ul>
            <li>Le logement doit avoir été achevé depuis <strong>au moins 2 ans</strong>.</li>
            <li>Pour la <strong>rénovation d'ampleur</strong> (saut de 2 classes DPE minimum), le logement doit constituer la résidence principale du demandeur, occupée au moins 8 mois par an.</li>
            <li>Pour les propriétaires bailleurs en indivision, le logement loué doit être la résidence principale du locataire.</li>
            <li>Un <a href="/dpe-gratuit">DPE valide</a> est indispensable pour évaluer la classe énergétique de départ et vérifier l'éligibilité aux différentes aides.</li>
          </ul>

          <h2>Usufruit et nue-propriété : qui peut déposer ?</h2>
          <p>
            Après le décès d'un parent, le logement peut être démembré entre un <strong>usufruitier</strong> (souvent le conjoint survivant) et des <strong>nus-propriétaires</strong> (les enfants). Les règles d'éligibilité diffèrent selon la qualité juridique :
          </p>
          <ul>
            <li>L'<strong>usufruitier</strong> est <strong>éligible à MaPrimeRénov'</strong> : il bénéficie de l'usage et des revenus du bien, et peut déposer la demande en son nom propre.</li>
            <li>Le <strong>nu-propriétaire</strong> n'est en revanche <strong>pas éligible</strong> tant qu'il n'occupe pas le logement : il n'en a ni l'usage ni les fruits, ce qui l'exclut des conditions d'accès.</li>
          </ul>
          <p>
            En pratique, l'usufruitier peut solliciter les aides et financer les travaux, en accord avec les nus-propriétaires pour les décisions relatives à l'amélioration du bien.
          </p>

          <h2>Les autres aides accessibles en indivision</h2>

          <h3>Primes CEE (Certificats d'Économies d'Énergie)</h3>
          <p>
            Les <strong>primes CEE</strong> sont versées par les fournisseurs d'énergie ou leurs délégataires (Hellio, Effy, etc.) en contrepartie de travaux d'économies d'énergie. Elles ne sont pas soumises aux mêmes contraintes d'occupation que MaPrimeRénov' et sont accessibles aux propriétaires comme aux locataires, avec ou sans indivision. Un seul indivisaire peut signer la demande au nom de l'ensemble des co-propriétaires. Les primes CEE sont cumulables avec MaPrimeRénov'.
          </p>

          <h3>Éco-PTZ (éco-prêt à taux zéro)</h3>
          <p>
            L'<strong>éco-PTZ</strong> finance jusqu'à 50 000 € de travaux sans intérêts et sans condition de revenus. Il est accessible aux propriétaires occupants et bailleurs, y compris en indivision. Chaque indivisaire peut solliciter un éco-PTZ pour sa quote-part de travaux, mais les banques préfèrent souvent un emprunteur unique accompagné d'un accord formalisé entre co-indivisaires. Renseignez-vous directement auprès de votre établissement.
          </p>

          <h3>TVA à 5,5 %</h3>
          <p>
            La <strong>TVA réduite à 5,5 %</strong> sur les travaux de rénovation énergétique s'applique à tous les logements de plus de 2 ans, sans condition de revenus ni de structure juridique de propriété. Elle bénéficie automatiquement à tout propriétaire ou mandataire qui commande des travaux auprès d'un artisan qualifié — l'économie peut représenter 14,5 points de TVA sur le montant HT.
          </p>

          <h2>Étapes pratiques pour lancer votre projet</h2>

          <h3>1. Obtenez l'accord des co-indivisaires</h3>
          <p>
            Réunissez tous les co-propriétaires, présentez le projet de travaux et recueillez les signatures nécessaires. En cas de désaccord persistant, l'article 815-5 du Code civil permet à un indivisaire de saisir le tribunal judiciaire afin d'être autorisé à effectuer seul les travaux d'amélioration urgents ou nécessaires à la conservation du bien.
          </p>

          <h3>2. Faites évaluer l'état du logement</h3>
          <p>
            Faites réaliser ou actualiser le <a href="/dpe-gratuit">diagnostic de performance énergétique</a> (DPE) du logement : c'est le point de départ indispensable pour connaître la classe actuelle, identifier les travaux prioritaires et vérifier l'éligibilité aux différentes aides. Pour une rénovation d'ampleur (MaPrimeRénov' parcours accompagné), un audit énergétique réglementaire sera requis en complément.
          </p>

          <h3>3. Prenez rendez-vous avec France Rénov'</h3>
          <p>
            Depuis février 2026, un entretien avec un conseiller France Rénov' est <strong>obligatoire</strong> avant tout dépôt de dossier de rénovation d'ampleur. Ce rendez-vous est gratuit, neutre et indépendant de tout vendeur ou artisan. Il vous permet de faire le point sur toutes les aides cumulables et d'obtenir l'attestation de rendez-vous requise dans le dossier.
          </p>

          <h3>4. Simulez vos aides et estimez votre reste à charge</h3>
          <p>
            Utilisez le <a href="/">simulateur RenoHab</a> pour estimer le montant des aides auxquelles vous avez droit selon vos revenus et les travaux envisagés. En tant qu'Accompagnateur Rénov' agréé, RenoHab monte votre dossier, coordonne les artisans RGE et maximise le cumul des financements disponibles.
          </p>

          <h2>Ce qu'il faut retenir</h2>
          <ul>
            <li>L'indivision ne fait <strong>pas obstacle aux aides à la rénovation</strong> : MaPrimeRénov', CEE, éco-PTZ et TVA réduite restent accessibles.</li>
            <li>Un seul indivisaire dépose la demande MaPrimeRénov', avec une <strong>attestation signée par tous les autres</strong>.</li>
            <li>Seuls les <strong>revenus du demandeur</strong> déterminent le taux d'aide — ce qui peut être stratégique.</li>
            <li>L'<strong>usufruitier</strong> est éligible ; le <strong>nu-propriétaire</strong> ne l'est pas.</li>
            <li>En cas de <strong>désaccord entre indivisaires</strong>, une procédure judiciaire permet de débloquer les travaux urgents.</li>
          </ul>

          <div className="not-prose bg-emerald-50 border border-emerald-200 rounded-2xl p-6 mt-8 text-center">
            <p className="text-lg font-semibold text-emerald-800 mb-2">
              Votre bien est en indivision ? Parlons de votre projet.
            </p>
            <p className="text-gray-600 mb-4">
              RenoHab est Accompagnateur Rénov' agréé : nous constituons votre dossier d'aides et coordonnons vos travaux de A à Z, même en situation d'indivision.
            </p>
            <a
              href="/"
              className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold shadow-soft hover:shadow-glow transition-all"
            >
              Estimer mes aides gratuitement
            </a>
          </div>

          <p className="text-sm text-gray-500 mt-8">
            <strong>Sources :</strong>{' '}
            <a href="https://www.anah.gouv.fr" className="text-emerald-700">Anah.gouv.fr</a> — Guide des aides à la rénovation énergétique, éd. février 2026 ·{' '}
            <a href="https://france-renov.gouv.fr" className="text-emerald-700">France-renov.gouv.fr</a> ·{' '}
            Code civil, art. 815-3 et 815-5 · Service-public.fr, fiche « Indivision ».
          </p>

          <p className="text-sm text-gray-500 mt-2">
            Retrouvez d'autres guides pratiques sur <a href="/blog">le blog RenoHab</a>.
          </p>
        </article>
      </main>

      <ArticleFooter />
    </div>
  );
}
