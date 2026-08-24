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

const PUBLISHED = '2026-08-24';
const PATH = '/blog/maprimeadapt-2026-aide-adaptation-logement-seniors';

export default function ArticleMaPrimeAdapt2026() {
  useSeo({
    title: "MaPrimeAdapt' 2026 : guide complet pour adapter votre logement au vieillissement ou au handicap | RenoHab",
    description:
      "MaPrimeAdapt' finance jusqu'à 70 % des travaux d'adaptation de votre logement (seniors, handicap). Conditions, montants, démarches et cumul avec d'autres aides — tout ce qu'il faut savoir en 2026.",
    path: PATH,
    image: '/blog/maprimeadapt-2026-aide-adaptation-logement-seniors.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline:
        "MaPrimeAdapt' 2026 : adapter son logement au vieillissement ou au handicap avec une aide jusqu'à 70 %",
      description:
        "MaPrimeAdapt' finance jusqu'à 70 % des travaux d'adaptation de votre logement (seniors, handicap). Conditions, montants, démarches et cumul avec d'autres aides — tout ce qu'il faut savoir en 2026.",
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
      about: ["MaPrimeAdapt'", 'Adaptation du logement', 'Maintien à domicile', 'Seniors', 'Handicap'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 24 août 2026 · Aides & financement
          </p>

          <h1>MaPrimeAdapt' 2026 : adapter son logement au vieillissement ou au handicap avec une aide jusqu'à 70 %</h1>

          <img
            src="/blog/maprimeadapt-2026-aide-adaptation-logement-seniors.jpg"
            alt="Salle de bain adaptée aux seniors avec douche à l'italienne et barres d'appui"
            className="w-full rounded-xl object-cover max-h-72"
            loading="lazy"
          />

          <p className="lead">
            Escaliers devenus difficiles, salle de bain inadaptée, risque de chute… Adapter son
            logement pour vieillir chez soi — ou pour vivre avec un handicap — est un projet
            concret que l'État finance directement. <strong>MaPrimeAdapt'</strong>, lancée en
            janvier 2024 et désormais accessible via le nouveau compte FranceRénov', couvre entre
            50 % et 70 % du coût des travaux, dans la limite de 22 000 € de dépenses éligibles.
            Voici tout ce qu'il faut savoir pour en bénéficier en 2026.
          </p>

          <h2>Qu'est-ce que MaPrimeAdapt' ?</h2>
          <p>
            MaPrimeAdapt' est une subvention de l'État gérée par l'Anah (Agence nationale de
            l'habitat). Elle a remplacé, depuis le 1er janvier 2024, trois anciens dispositifs :
            « Habiter Facile » de l'Anah, le crédit d'impôt autonomie et les aides de la CNAV
            pour l'adaptation du logement des personnes âgées. L'objectif est d'aider les
            propriétaires et locataires à adapter leur résidence principale pour préserver leur
            autonomie, sans avoir à quitter leur domicile.
          </p>
          <p>
            Depuis le 17 août 2026, la demande se dépose directement depuis le{' '}
            <strong>nouveau compte FranceRénov'</strong> unifié — la même plateforme que
            MaPrimeRénov', Loc'Avantages et Ma Prime Logement Décent. Un seul espace sécurisé par
            FranceConnect+ pour toutes vos démarches.
          </p>

          <h2>Qui peut en bénéficier ?</h2>

          <h3>Conditions liées à la personne</h3>
          <p>Trois catégories de personnes sont éligibles :</p>
          <ul>
            <li>
              <strong>70 ans et plus</strong>, sans condition de dépendance ni de handicap
              à justifier.
            </li>
            <li>
              <strong>60 à 69 ans</strong> en situation de perte d'autonomie, classé en GIR 1
              à 6 (grille AGGIR utilisée pour l'APA).
            </li>
            <li>
              <strong>Personnes en situation de handicap</strong> (tout âge) avec un taux
              d'incapacité reconnu d'au moins 50 %.
            </li>
          </ul>

          <h3>Conditions liées au logement</h3>
          <ul>
            <li>
              Être <strong>propriétaire occupant</strong> — ou locataire du parc privé, avec
              l'accord écrit du bailleur.
            </li>
            <li>
              Occuper le logement en <strong>résidence principale</strong>, au moins 8 mois par an.
            </li>
            <li>
              Le logement doit avoir plus de <strong>15 ans</strong> à la date de dépôt du dossier.
            </li>
          </ul>
          <p>
            Les ressources du demandeur sont prises en compte selon un barème national établi
            par l'Anah — consultez les plafonds en vigueur sur le site officiel avant de déposer
            votre dossier, car ils sont révisés chaque année.
          </p>

          <h2>Quels travaux sont éligibles ?</h2>
          <p>
            MaPrimeAdapt' finance uniquement des travaux qui améliorent concrètement
            l'<strong>accessibilité</strong> et la <strong>sécurité</strong> au quotidien.
            En pratique, cela inclut notamment :
          </p>
          <ul>
            <li>
              <strong>Douche à l'italienne</strong> : remplacement d'une baignoire par une douche
              de plain-pied, avec siège et barres d'appui — le poste le plus courant.
            </li>
            <li>
              <strong>Monte-escalier ou ascenseur privatif</strong> : pour les maisons à plusieurs
              niveaux.
            </li>
            <li>
              <strong>Élargissement de portes</strong> : mise aux normes pour le passage d'un
              fauteuil roulant (minimum 90 cm).
            </li>
            <li>
              <strong>Barres d'appui et mains courantes</strong> : dans les couloirs, la salle
              de bain, les WC.
            </li>
            <li>
              <strong>Rampe d'accès</strong> : à l'entrée du logement ou en remplacement
              de marches.
            </li>
            <li>
              <strong>Revêtements antidérapants</strong> et éclairage adapté (détection de
              présence, veilleuses automatiques).
            </li>
            <li>
              <strong>Domotique d'assistance</strong> : volets motorisés, interphones, alarmes
              de chute.
            </li>
          </ul>
          <p>
            La liste exacte des travaux éligibles est fixée par l'Anah. Tout devis doit être
            réalisé par une entreprise qualifiée avant le dépôt du dossier.
          </p>

          <h2>Quel montant peut-on obtenir ?</h2>
          <p>
            Le taux de prise en charge dépend du niveau de ressources du foyer :
          </p>
          <ul>
            <li>
              <strong>Ménages à revenus modestes</strong> : <strong>50 %</strong> du montant
              des travaux pris en charge.
            </li>
            <li>
              <strong>Ménages à revenus très modestes</strong> : <strong>70 %</strong> du montant
              des travaux pris en charge.
            </li>
          </ul>
          <p>
            Le plafond des travaux éligibles est fixé à <strong>22 000 €</strong>. La subvention
            maximale est donc de <strong>11 000 €</strong> (50 %) ou de <strong>15 400 €</strong>
            {' '}(70 %). Ces montants s'entendent toutes taxes comprises, déduction faite des
            autres aides perçues pour les mêmes travaux.
          </p>

          <h2>Comment faire une demande ?</h2>
          <ol>
            <li>
              <strong>Créez votre compte FranceRénov'</strong> sur{' '}
              <em>monprojet.anah.gouv.fr</em> (connexion via FranceConnect+).
            </li>
            <li>
              <strong>Saisissez votre projet</strong> : nature des travaux, devis, situation
              de la personne, ressources fiscales.
            </li>
            <li>
              <strong>Un Assistant à Maîtrise d'Ouvrage (AMO)</strong> vous est assigné
              gratuitement pour vous aider à compléter le dossier — son accompagnement
              est inclus dans le dispositif.
            </li>
            <li>
              <strong>Attendez l'autorisation de démarrer</strong> : le délai d'instruction
              est de 2 à 4 mois. Ne commencez pas les travaux avant d'avoir reçu l'accord
              écrit de l'Anah sous peine de perdre le bénéfice de l'aide.
            </li>
            <li>
              <strong>Réalisez les travaux</strong> et transmettez les factures pour le
              versement de la subvention.
            </li>
          </ol>

          <h2>MaPrimeAdapt' et autres aides : peut-on cumuler ?</h2>
          <p>
            Oui. MaPrimeAdapt' est cumulable avec plusieurs autres dispositifs :
          </p>
          <ul>
            <li>
              <strong>APA (Allocation Personnalisée d'Autonomie)</strong> pour les personnes
              dépendantes de 60 ans et plus.
            </li>
            <li>
              <strong>PCH (Prestation de Compensation du Handicap)</strong> pour les adultes
              handicapés.
            </li>
            <li>
              <strong>Aides des caisses de retraite</strong> (CARSAT, MSA…) pour
              l'adaptation du domicile.
            </li>
            <li>
              <strong>Crédit d'impôt autonomie</strong> (article 200 quater A du CGI) sur
              certains équipements non couverts par MaPrimeAdapt'.
            </li>
            <li>
              <strong>Primes CEE</strong> : certains équipements éligibles (volets motorisés,
              robinets thermostatiques…) peuvent générer une{' '}
              <a href="/blog/cee-2026-prime-energie-comment-en-profiter">prime énergie CEE</a>
              {' '}complémentaire.
            </li>
          </ul>
          <p>
            En revanche, MaPrimeAdapt' et MaPrimeRénov' ne financent pas les mêmes travaux :
            si votre projet mêle adaptation du logement <em>et</em> rénovation énergétique,
            vous pouvez potentiellement solliciter les deux aides sur des postes distincts.
            Un{' '}
            <a href="/blog/renovation-ampleur-2026-accompagnateur-renov">
              Accompagnateur Rénov'
            </a>
            {' '}peut vous aider à articuler ces demandes.
          </p>
        </article>

        {/* CTA RenoHab */}
        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Vérifiez vos droits à MaPrimeAdapt'</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            Notre simulateur estime en quelques minutes vos aides disponibles — MaPrimeAdapt',
            MaPrimeRénov' et CEE cumulés.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/#simulator" className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all">
              Simuler mes aides
            </a>
            <a href="/dpe-gratuit" className="px-6 py-3 rounded-full border border-white/70 text-white font-semibold hover:bg-white/10 transition-all">
              Obtenir mon DPE gratuit
            </a>
          </div>
        </div>
      </main>

      <ArticleFooter />
    </div>
  );
}
