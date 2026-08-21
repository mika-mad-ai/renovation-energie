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

const PUBLISHED = '2026-08-21';
const PATH = '/blog/france-renov-compte-unique-aides-anah-2026';

export default function ArticleFranceRenovCompteUnique2026() {
  useSeo({
    title: "Nouveau compte FranceRénov' : toutes les aides Anah centralisées depuis août 2026 | RenoHab",
    description:
      "Depuis le 17 août 2026, MaPrimeRénov', MaPrimeAdapt', Ma Prime Logement Décent et Loc'Avantages sont accessibles via un compte unique FranceRénov' sécurisé par FranceConnect+. Ce que ça change pour vos démarches.",
    path: PATH,
    image: 'https://renohab.fr/blog/france-renov-compte-unique-aides-anah-2026.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline:
        "Nouveau compte FranceRénov' : toutes les aides Anah centralisées depuis août 2026",
      description:
        "Depuis le 17 août 2026, MaPrimeRénov', MaPrimeAdapt', Ma Prime Logement Décent et Loc'Avantages sont accessibles via un compte unique FranceRénov' sécurisé par FranceConnect+.",
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
      about: ['FranceRénov', 'MaPrimeRénov', 'Anah', 'Aides rénovation énergétique 2026'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 21 août 2026 · Aides &amp; financement
          </p>

          <h1>Nouveau compte FranceRénov' : toutes les aides Anah centralisées depuis août 2026</h1>

          <img
            src="/blog/france-renov-compte-unique-aides-anah-2026.jpg"
            alt="Plateforme FranceRénov' — compte unique pour les aides à la rénovation énergétique"
            className="w-full rounded-xl my-6 object-cover"
            style={{ maxHeight: '420px' }}
          />

          <p className="lead">
            Depuis le <strong>17 août 2026</strong>, l'ensemble des aides à la rénovation de
            l'Agence nationale de l'habitat (Anah) sont regroupées sur un seul et même espace :
            le compte personnel <strong>FranceRénov'</strong>. MaPrimeRénov', MaPrimeAdapt', Ma
            Prime Logement Décent et Loc'Avantages se gèrent désormais en un clic, via une
            authentification renforcée par <strong>FranceConnect+</strong>. Tour d'horizon de ce
            qui change — et de ce que cela signifie concrètement pour votre projet de travaux.
          </p>

          <h2>Pourquoi cette centralisation ?</h2>
          <p>
            Jusqu'au 16 août 2026, les ménages devaient jongler entre plusieurs portails :
            maprimerenov.gouv.fr pour les travaux énergétiques, monprojet.anah.gouv.fr pour
            d'autres dispositifs, et des procédures de connexion distinctes selon l'aide visée.
            Cette dispersion était source de confusions, de doublons et, selon l'Anah, de
            tentatives de fraude croissantes.
          </p>
          <p>
            L'Anah justifie la migration par la volonté de « renforcer la protection des
            usagers, lutter contre l'usurpation d'identité et prévenir les tentatives de
            fraude tout au long du parcours de rénovation ». La centralisation permet
            également de croiser en temps réel les données fiscales, cadastrales et bancaires,
            pour un traitement de dossier plus rapide.
          </p>

          <h2>Les quatre aides désormais accessibles sur un seul compte</h2>
          <ul>
            <li>
              <strong>MaPrimeRénov'</strong> — l'aide phare pour les travaux d'économies
              d'énergie, ouverte aux propriétaires occupants et, sous conditions, aux
              bailleurs. En 2026, elle se concentre sur les rénovations globales permettant
              un saut d'au moins deux classes DPE.
            </li>
            <li>
              <strong>MaPrimeAdapt'</strong> — subvention pour adapter le logement au
              vieillissement ou au handicap (douche à l'italienne, rampe d'accès, etc.).
            </li>
            <li>
              <strong>Ma Prime Logement Décent</strong> — aide destinée à sortir les
              logements insalubres ou très dégradés de l'indignité.
            </li>
            <li>
              <strong>Loc'Avantages</strong> — dispositif fiscal pour les bailleurs qui
              proposent un loyer modéré, accompagné d'une aide à la remise en état du bien.
            </li>
          </ul>

          <h2>FranceConnect+ : comment ça marche ?</h2>
          <p>
            La connexion au nouveau compte FranceRénov' passe obligatoirement par
            <strong> FranceConnect+</strong>, version renforcée de FranceConnect qui exige
            une vérification d'identité à l'inscription (carte nationale d'identité,
            passeport ou titre de séjour). Cette étape ne se fait qu'une seule fois.
          </p>
          <p>
            Si vous aviez déjà un compte sur maprimerenov.gouv.fr ou monprojet.anah.gouv.fr,
            vos informations et dossiers en cours sont automatiquement transférés après
            confirmation de votre identité via FranceConnect+. En cas de difficulté (pas
            d'identité numérique disponible), une procédure alternative par courrier est prévue.
          </p>
          <p>
            <strong>À noter :</strong> les plateformes maprimerenov.gouv.fr et
            monprojet.anah.gouv.fr ont été placées en maintenance technique du 3 au 17 août
            2026 pour permettre la bascule. Elles redirigent désormais toutes vers
            france-renov.gouv.fr.
          </p>

          <h2>État des lieux des aides en 2026 : ce qu'il faut savoir</h2>
          <p>
            La réforme du portail s'inscrit dans un contexte plus large de resserrement des
            aides. Au premier semestre 2026, les dossiers de rénovation globale ont chuté de
            75 % par rapport à la même période en 2025, passant de 95 000 à seulement
            20 000 demandes — reflet de conditions d'éligibilité plus strictes.
          </p>
          <ul>
            <li>
              La <strong>subvention maximale</strong> pour les ménages très modestes
              en rénovation d'ampleur a été divisée par deux, passant de 63 000 € à
              32 000 €.
            </li>
            <li>
              Un <strong>rendez-vous préalable avec un conseiller France Rénov'</strong> est
              désormais obligatoire avant tout dépôt de dossier de rénovation d'ampleur.
            </li>
            <li>
              L'enveloppe globale de MaPrimeRénov' pour 2026 est fixée à
              <strong> 3,6 milliards d'euros</strong>, concentrée sur les chantiers les
              plus complets.
            </li>
            <li>
              L'<a href="/blog/eco-ptz-2026-pret-taux-zero-renovation">Éco-PTZ</a> et le
              Prêt Avance Rénovation (PAR+) restent accessibles sans condition de
              ressources pour compléter le financement.
            </li>
          </ul>

          <h2>Ce que ça change pour votre projet de rénovation</h2>
          <p>
            Concrètement, si vous envisagez des travaux à l'automne 2026, trois points
            méritent votre attention :
          </p>
          <ol>
            <li>
              <strong>Créez ou mettez à jour votre compte FranceRénov'</strong> dès
              maintenant sur france-renov.gouv.fr. La vérification FranceConnect+ peut
              prendre quelques jours si vous choisissez la procédure postale.
            </li>
            <li>
              <strong>Demandez un rendez-vous avec un conseiller</strong> : ce rendez-vous
              est obligatoire pour les rénovations d'ampleur et est gratuit. Il vous permet
              également de valider votre éligibilité aux aides et de définir un plan de
              travaux cohérent.
            </li>
            <li>
              <strong>Anticipez le <a href="/dpe-gratuit">diagnostic de performance énergétique</a></strong> :
              le DPE avant travaux conditionne le montant des aides et la classe cible à
              atteindre. Un saut d'au moins deux classes reste la condition du bonus
              rénovation globale.
            </li>
          </ol>

          <h2>Rénovation d'ampleur : un parcours accompagné, pas une démarche solitaire</h2>
          <p>
            Face à la complexité croissante des dossiers — audit énergétique, plan de
            financement, coordination des artisans RGE, suivi du chantier —, le recours à
            un <strong>Accompagnateur Rénov' agréé</strong> est non seulement conseillé,
            mais obligatoire pour bénéficier du taux de subvention maximal en rénovation
            d'ampleur. RenoHab est agréé Accompagnateur Rénov' et vous guide de l'audit
            initial jusqu'au versement des aides.
          </p>
          <p>
            Notre équipe peut notamment vérifier votre éligibilité à MaPrimeRénov', estimer
            le gain de classes DPE attendu et monter le dossier complet sur le nouveau
            portail FranceRénov'. Grâce au{' '}
            <a href="/#simulateur">simulateur d'aides RenoHab</a>, obtenez une première
            estimation de votre enveloppe de financement en moins de deux minutes.
          </p>

          <h2>À retenir</h2>
          <ul>
            <li>Depuis le 17 août 2026, toutes les aides Anah sont sur <strong>france-renov.gouv.fr</strong>.</li>
            <li>Connexion via FranceConnect+ obligatoire — à créer en amont de votre projet.</li>
            <li>Les dossiers existants sont transférés automatiquement.</li>
            <li>Les subventions sont plus ciblées mais toujours cumulables avec les CEE et l'Éco-PTZ.</li>
            <li>Un Accompagnateur Rénov' reste le meilleur allié pour optimiser votre dossier.</li>
          </ul>
        </article>

        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Montez votre dossier avec un expert</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            RenoHab, Accompagnateur Rénov' agréé, prend en charge votre dossier sur FranceRénov'
            de A à Z — du DPE à la réception du virement.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/dpe-gratuit" className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all">
              Estimer mon DPE gratuit
            </a>
            <a href="/#simulateur" className="px-6 py-3 rounded-full border border-white/70 text-white font-semibold hover:bg-white/10 transition-all">
              Simuler mes aides
            </a>
          </div>
        </div>
      </main>

      <ArticleFooter />
    </div>
  );
}
