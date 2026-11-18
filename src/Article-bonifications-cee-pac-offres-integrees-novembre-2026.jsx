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

const PUBLISHED = '2026-11-18';
const PATH = '/blog/bonifications-cee-pac-offres-integrees-novembre-2026';

export default function ArticleBonificationsCeePacNovembre2026() {
  useSeo({
    title: "Nouvelles bonifications CEE pompes à chaleur : ce qui change depuis le 17 novembre 2026 | RenoHab",
    description:
      "Deux arrêtés publiés début novembre 2026 renforcent les aides CEE pour les PAC air/eau via les offres intégrées ADEME. Volumes, conditions, précarité énergétique : tout ce qui change.",
    path: PATH,
    image: '/blog/bonifications-cee-pac-offres-integrees-novembre-2026.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline:
        "Nouvelles bonifications CEE pour pompes à chaleur : ce qui change depuis le 17 novembre 2026",
      description:
        "Deux arrêtés publiés début novembre 2026 renforcent les aides CEE pour les PAC air/eau via les offres intégrées ADEME. Volumes, conditions, précarité énergétique : tout ce qui change.",
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
      about: ['CEE', 'Pompe à chaleur', 'Aides rénovation énergétique', 'Offres intégrées ADEME'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 18 novembre 2026 · Aides &amp; Financement
          </p>

          <h1>Nouvelles bonifications CEE pour pompes à chaleur : ce qui change depuis le 17 novembre 2026</h1>

          <img
            src="/blog/bonifications-cee-pac-offres-integrees-novembre-2026.jpg"
            alt="Pompe à chaleur air/eau installée sur la façade d'une maison individuelle rénovée"
            className="rounded-xl w-full object-cover max-h-80"
            loading="lazy"
          />

          <p className="lead">
            Deux arrêtés publiés au Journal officiel début novembre 2026 renforcent
            significativement les primes CEE (Certificats d'Économies d'Énergie) pour
            l'installation de pompes à chaleur air/eau. L'un, en vigueur depuis le 16 novembre,
            élargit la définition de la précarité énergétique ; l'autre, applicable depuis le
            17 novembre, introduit des bonifications spécifiques aux offres intégrées sélectionnées
            par l'ADEME. Voici ce que cela change concrètement pour votre projet.
          </p>

          <h2>Rappel : qu'est-ce qu'une prime CEE pour une PAC ?</h2>
          <p>
            Les Certificats d'Économies d'Énergie (CEE) sont des aides versées par les
            fournisseurs d'énergie (EDF, TotalEnergies, Engie…) à tout ménage réalisant
            des travaux d'économies d'énergie. Le montant d'une prime CEE se calcule en
            <strong> kWh cumac</strong> — une unité qui représente les économies cumulées
            sur la durée de vie de l'équipement — multiplié par un prix de marché fixé par
            les obligés.
          </p>
          <p>
            Pour une pompe à chaleur air/eau (remplacement d'une chaudière fossile),
            la fiche de référence est la <strong>BAR-TH-104</strong>. Les ménages en
            situation de précarité énergétique bénéficient d'une bonification
            (« Coup de pouce ») qui augmente significativement ce volume.
          </p>

          <h2>Arrêté du 5 novembre : nouvelle définition de la précarité énergétique (en vigueur le 16 novembre)</h2>
          <p>
            Depuis le 16 novembre 2026, les seuils de revenus permettant d'accéder à la
            catégorie « ménage en situation de précarité énergétique » sont révisés à la
            hausse. Cette modification intègre notamment de nouveaux plafonds de ressources
            pour les ménages modestes et très modestes, définis par l'ANAH.
          </p>
          <p>
            En pratique, cela signifie que <strong>davantage de foyers peuvent désormais
            prétendre aux bonifications majorées</strong>. Si vous aviez été écarté de
            la catégorie « modeste » lors d'un précédent projet, il peut valoir la peine
            de re-vérifier votre éligibilité avec les nouveaux plafonds.
          </p>
          <p>
            L'arrêté ajuste aussi les règles de constitution des dossiers CEE pour toutes
            les opérations engagées à partir du 16 novembre, notamment les pièces justificatives
            exigées pour attester de la catégorie de revenus du bénéficiaire.
          </p>

          <h2>Arrêté du 6 novembre : bonifications pour les offres intégrées PAC air/eau (en vigueur le 17 novembre)</h2>

          <h3>Qu'est-ce qu'une offre intégrée ?</h3>
          <p>
            Depuis le 1er octobre 2026, l'ADEME a sélectionné six consortiums d'installateurs
            et d'énergéticiens pour proposer aux ménages des <strong>offres intégrées PAC air/eau</strong>.
            Ces offres regroupent en un seul contrat :
          </p>
          <ul>
            <li>La fourniture et la pose de la pompe à chaleur par un artisan RGE ;</li>
            <li>Le montage et le dépôt du dossier d'aides (CEE, MaPrimeRénov' si applicable) ;</li>
            <li>Une offre d'électricité à prix fixe pendant 3 ans ;</li>
            <li>Un contrat de maintenance de l'équipement d'au moins 3 ans ;</li>
            <li>Un financement du reste à charge.</li>
          </ul>
          <p>
            L'idée : simplifier radicalement le parcours client et garantir un niveau de
            service minimum sur la durée, en échange d'une prime CEE bonifiée.
          </p>

          <h3>Les volumes de bonification applicables</h3>
          <p>
            Pour les ménages remplissant les conditions de précarité énergétique et souscrivant
            à une offre intégrée validée par l'ADEME, l'arrêté du 6 novembre fixe les volumes
            de CEE bonifiés suivants :
          </p>
          <ul>
            <li>
              <strong>760 000 kWh cumac</strong> si la PAC assure uniquement le chauffage ;
            </li>
            <li>
              <strong>875 000 kWh cumac</strong> si la PAC assure le chauffage
              <em> et</em> la production d'eau chaude sanitaire (fonctions couplées).
            </li>
          </ul>
          <p>
            Ces volumes sont nettement supérieurs aux volumes standards de la fiche BAR-TH-104,
            ce qui se traduit par une prime en euros plus élevée selon le prix du kWh cumac
            pratiqué par l'obligé.
          </p>

          <h3>Conditions à respecter</h3>
          <p>
            Pour bénéficier de ces bonifications, plusieurs conditions sont imposées :
          </p>
          <ul>
            <li>
              Remplacement obligatoire d'une <strong>chaudière individuelle au charbon,
              au fioul ou au gaz</strong> (l'arrêté vise la sortie des énergies fossiles) ;
            </li>
            <li>
              Le modèle de PAC installé doit être <strong>agréé à la date d'engagement
              de l'opération</strong> (vérifier la liste publiée par l'ADEME) ;
            </li>
            <li>
              L'opération doit être réalisée dans le cadre d'une des six offres intégrées
              retenues lors de l'appel à candidatures de l'ADEME de septembre 2026 ;
            </li>
            <li>
              Les règles de cumul d'aides sont encadrées : la bonification ne peut pas se
              cumuler avec certains autres dispositifs CEE Coup de pouce simultanément
              (vérifier la compatibilité avec MaPrimeRénov').
            </li>
          </ul>

          <h2>Un renforcement des contrôles en parallèle</h2>
          <p>
            Ces nouvelles bonifications s'accompagnent d'un durcissement des contrôles qualité :
            depuis 2026, le taux de contrôles sur site des chantiers CEE est passé de
            <strong> 15 % à 25 %</strong>. L'objectif est d'enrayer les fraudes détectées
            dans le dispositif et de garantir que les économies d'énergie promises sont
            effectivement réalisées.
          </p>
          <p>
            En tant que bénéficiaire, conservez tous vos documents (devis signé, facture,
            attestation sur l'honneur, photos du chantier avant/après) pendant au moins
            dix ans.
          </p>

          <h2>Et MaPrimeRénov' dans tout ça ?</h2>
          <p>
            La situation budgétaire reste tendue : le projet de loi de finances 2027 (PLF),
            qui prévoit de basculer le financement des PAC des poches de MaPrimeRénov' vers
            les seuls CEE, n'est pas encore adopté au moment de la publication de cet article
            (le 4 novembre 2026, l'Assemblée nationale a rejeté la première partie du PLF).
          </p>
          <p>
            En attendant, <strong>MaPrimeRénov' reste accessible</strong> pour les projets
            de rénovation d'ampleur (deux gestes minimum permettant un saut de deux classes
            DPE) accompagnés par un <a href="/blog/renovation-ampleur-2026-accompagnateur-renov">Accompagnateur Rénov' agréé</a>.
            Pour les travaux par geste, les PAC hybrides sont exclues depuis le 1er septembre 2026,
            mais les PAC air/eau pures restent éligibles selon les plafonds en vigueur.
          </p>
          <p>
            Si vous hésitez sur la stratégie d'aide à privilégier, consultez notre page sur
            {' '}<a href="/pompe-a-chaleur">les pompes à chaleur et leurs aides</a> ou
            utilisez{' '}
            <a href="/">le simulateur RenoHab</a> pour estimer votre prime en quelques minutes.
          </p>

          <h2>Ce qu'il faut retenir</h2>
          <ul>
            <li>
              Deux arrêtés de début novembre 2026 renforcent les primes CEE pour les PAC
              air/eau, applicables depuis les 16 et 17 novembre.
            </li>
            <li>
              Les offres intégrées ADEME permettent aux ménages modestes d'atteindre
              760 000 à 875 000 kWh cumac de bonification — un niveau record.
            </li>
            <li>
              Pour en profiter, la PAC doit remplacer une chaudière fossile, le modèle
              doit être agréé, et l'opération doit passer par l'un des six consortiums retenus.
            </li>
            <li>
              Les contrôles sur site ont été renforcés (25 % des chantiers) : gardez
              tous vos justificatifs.
            </li>
            <li>
              MaPrimeRénov' reste disponible mais son avenir pour les PAC en 2027 dépend
              du vote du budget — agir maintenant reste le choix le plus sûr.
            </li>
          </ul>

          <h2>Prochaine étape : vérifier votre éligibilité</h2>
          <p>
            L'entrée en vigueur simultanée des nouvelles règles de précarité énergétique
            et des offres intégrées crée une fenêtre d'opportunité pour les ménages modestes
            qui souhaitent remplacer leur chaudière au fioul ou au gaz. Si votre
            {' '}<a href="/dpe-gratuit">DPE</a> affiche une étiquette E, F ou G et
            que vos ressources sont proches des plafonds ANAH, vous pourrez peut-être
            bénéficier d'une prime bien plus élevée qu'avant le 16 novembre.
          </p>
        </article>

        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Calculez votre prime CEE PAC</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            RenoHab est Accompagnateur Rénov' agréé. Nous évaluons vos aides CEE, MaPrimeRénov'
            et éco-PTZ et coordonnons votre chantier de A à Z.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/" className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all">
              Simuler mes aides
            </a>
            <a href="/pompe-a-chaleur" className="px-6 py-3 rounded-full border border-white/70 text-white font-semibold hover:bg-white/10 transition-all">
              Découvrir nos PAC
            </a>
          </div>
        </div>
      </main>

      <ArticleFooter />
    </div>
  );
}
