import React from 'react';
import { Link } from 'react-router-dom';
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

const PUBLISHED = '2026-08-26';
const PATH = '/blog/cee-renovation-ampleur-classes-efg-septembre-2026';

export default function ArticleCEERenovationAmpleurClassesEFG2026() {
  useSeo({
    title: "CEE rénovation d'ampleur : seuls les logements E, F, G éligibles dès le 1er septembre 2026 | RenoHab",
    description:
      "L'arrêté du 17 août 2026 restreint la prime CEE rénovation d'ampleur (BAR-TH-174/175) aux logements classés E, F ou G à partir du 1er septembre. Ce que ça change, qui est touché, et la dérogation à connaître si votre dossier est déjà déposé.",
    path: PATH,
    image: '/blog/cee-renovation-ampleur-classes-efg-septembre-2026.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline:
        "CEE rénovation d'ampleur : seuls les logements E, F, G éligibles dès le 1er septembre 2026",
      description:
        "L'arrêté du 17 août 2026 restreint la prime CEE rénovation d'ampleur (BAR-TH-174/175) aux logements classés E, F ou G à partir du 1er septembre. Ce que ça change, qui est touché, et la dérogation à connaître.",
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
      about: ['CEE', 'Rénovation d\'ampleur', 'BAR-TH-174', 'BAR-TH-175', 'Prime énergie'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 26 août 2026 · Prime CEE &amp; Aides
          </p>

          <h1>CEE rénovation d'ampleur : seuls les logements E, F, G éligibles dès le 1er septembre 2026</h1>

          <img
            src="/blog/cee-renovation-ampleur-classes-efg-septembre-2026.jpg"
            alt="Rénovation d'ampleur et classes DPE E F G éligibles CEE"
            className="w-full rounded-xl shadow-soft mb-8 object-cover"
            style={{ maxHeight: '420px' }}
            loading="eager"
          />

          <p className="lead">
            Un arrêté publié au Journal officiel le 23 août 2026 resserre le périmètre des primes CEE
            dédiées à la rénovation d'ampleur. À compter du <strong>1er septembre 2026</strong>, les
            fiches BAR-TH-174 (maisons individuelles) et BAR-TH-175 (appartements) ne s'appliquent
            plus qu'aux logements classés <strong>E, F ou G</strong>. Les propriétaires d'un logement
            en classe D sont directement concernés — voici ce qui change et ce qu'il faut savoir avant
            la date limite.
          </p>

          <h2>Ce que prévoit l'arrêté du 17 août 2026</h2>
          <p>
            L'arrêté du 17 août 2026, publié au JORF du 23 août, modifie les conditions d'éligibilité
            des deux principales fiches d'opérations standardisées qui financent la{' '}
            <strong>rénovation d'ampleur</strong> via les certificats d'économies d'énergie (CEE) :
          </p>
          <ul>
            <li>
              <strong>BAR-TH-174</strong> : rénovation d'ampleur d'une maison individuelle en
              métropole.
            </li>
            <li>
              <strong>BAR-TH-175</strong> : rénovation d'ampleur d'un appartement individuel en
              métropole.
            </li>
          </ul>
          <p>
            Jusqu'au 31 août 2026, ces deux fiches étaient ouvertes aux logements classés D, E, F ou G.
            À partir du <strong>1er septembre 2026</strong>, seuls les logements classés{' '}
            <strong>E, F ou G au DPE</strong> restent éligibles. Un logement en classe D ne peut plus
            bénéficier de la prime CEE rénovation d'ampleur pour des opérations engagées à cette date
            ou après.
          </p>

          <h2>Condition supplémentaire pour les maisons individuelles (BAR-TH-174)</h2>
          <p>
            L'arrêté ajoute une seconde exigence spécifique aux maisons individuelles. Pour être
            éligibles à la fiche BAR-TH-174 après le 1er septembre 2026, les travaux doivent aboutir
            à une <strong>décarbonation totale du chauffage et de la production d'eau chaude
            sanitaire</strong> (ECS). Autrement dit, après rénovation, aucune source d'énergie fossile
            (gaz, fioul) ne doit rester pour couvrir le chauffage ou l'ECS du logement.
          </p>
          <p>
            Cette exigence fait écho à la règle MaPrimeRénov' déjà en vigueur depuis le 1er septembre
            2026 : une rénovation d'ampleur subventionnée par l'Anah ne doit plus conserver de
            chauffage majoritairement au gaz après travaux. Les deux dispositifs convergent donc vers
            les mêmes objectifs de décarbonation.
          </p>

          <h2>Qui est touché ? L'impact pour les logements classés D</h2>
          <p>
            En France, une part significative du parc résidentiel est classée D — soit une performance
            énergétique « moyenne » qui n'est ni une passoire thermique ni un logement performant. Ces
            propriétaires, souvent engagés dans une démarche d'amélioration volontaire, perdent l'accès
            à la prime CEE rénovation d'ampleur pour toute opération engagée à partir du 1er septembre.
          </p>
          <p>
            Concrètement, cela signifie que le coup de pouce financier lié à BAR-TH-174/175 — qui
            pouvait représenter plusieurs milliers d'euros selon l'obligé CEE sollicité — disparaît
            pour eux, sauf à bénéficier de la dérogation ci-dessous.
          </p>

          <h2>La dérogation à connaître : dossiers déposés avant le 1er septembre</h2>
          <p>
            L'arrêté prévoit une <strong>clause de sauvegarde</strong> importante pour les projets en
            cours. Lorsque le demandeur de certificats est l'<strong>Anah</strong> (Agence nationale de
            l'habitat), les dispositions des fiches BAR-TH-174 et BAR-TH-175 dans leur version
            antérieure au 1er septembre 2026 continuent de s'appliquer si le{' '}
            <strong>dossier d'aide a été déposé auprès de l'Anah avant cette date</strong>, même pour
            des opérations dont les travaux débutent le 1er septembre ou après.
          </p>
          <p>
            L'Anah doit transmettre la liste des dossiers concernés aux obligés CEE avant le{' '}
            <strong>15 octobre 2026</strong>. Si votre dossier était déposé avant le couperet, vous
            restez éligible aux anciennes conditions — y compris si vous êtes en classe D.
          </p>

          <h2>Ce qu'il faut faire maintenant</h2>
          <p>
            Si vous envisagez une rénovation d'ampleur et que votre logement est classé D, la
            priorité absolue est de <strong>vérifier si votre dossier est bien déposé à l'Anah</strong>{' '}
            avant le 1er septembre 2026. Passé cette date, la dérogation ne s'appliquera plus aux
            nouvelles demandes.
          </p>
          <ul>
            <li>
              <strong>Dossier déjà déposé avant le 1er septembre :</strong> vous bénéficiez des
              anciennes règles. Vérifiez son statut sur votre espace France Rénov'.
            </li>
            <li>
              <strong>Logement classé E, F ou G :</strong> aucun changement pour vous — vous restez
              éligible aux CEE rénovation d'ampleur dans les nouvelles conditions.
            </li>
            <li>
              <strong>Maison individuelle :</strong> assurez-vous que le projet inclut un système de
              chauffage entièrement décarboné (pompe à chaleur, électrique, etc.) pour satisfaire la
              nouvelle condition BAR-TH-174.
            </li>
          </ul>

          <h2>Rénovation d'ampleur : les aides qui restent disponibles</h2>
          <p>
            Même si la prime CEE rénovation d'ampleur se recentre sur les passoires énergétiques, le
            paysage des aides reste fourni pour les logements classés D :
          </p>
          <ul>
            <li>
              <strong>MaPrimeRénov' par geste :</strong> jusqu'au 31 août 2026, les gestes individuels
              (isolation, <Link to="/pompe-a-chaleur">pompe à chaleur</Link>, VMC…) restent accessibles
              pour les ménages éligibles.
            </li>
            <li>
              <strong>TVA à 5,5 % :</strong> applicable à tous les travaux de rénovation énergétique,
              quel que soit le DPE.
            </li>
            <li>
              <strong>Éco-PTZ :</strong> le prêt à taux zéro reste ouvert pour financer des bouquets
              de travaux, sans condition de classe DPE.
            </li>
            <li>
              <strong>CEE par geste :</strong> les fiches classiques (isolation, PAC, VMC…) ne sont
              pas concernées par cet arrêté et demeurent accessibles.
            </li>
          </ul>
          <p>
            Pour identifier précisément les aides auxquelles vous avez droit compte tenu de votre
            classe DPE, votre situation et vos revenus, le{' '}
            <a href="/#simulator">simulateur RenoHab</a> permet d'obtenir une estimation personnalisée
            en quelques minutes. En tant qu'Accompagnateur Rénov' agréé, RenoHab monte ensuite les
            dossiers pour sécuriser l'ensemble des financements disponibles.
          </p>

          <h2>À retenir</h2>
          <ul>
            <li>
              Depuis le <strong>1er septembre 2026</strong>, les CEE rénovation d'ampleur (BAR-TH-174/175)
              sont réservés aux logements classés <strong>E, F ou G</strong>.
            </li>
            <li>
              Pour les maisons individuelles, une <strong>décarbonation totale</strong> du chauffage et
              de l'ECS est désormais exigée.
            </li>
            <li>
              <strong>Dérogation :</strong> les dossiers déposés à l'Anah avant le 1er septembre
              bénéficient des anciennes règles, même pour des travaux ultérieurs.
            </li>
            <li>
              D'autres aides restent accessibles pour les logements classés D : TVA réduite,
              Éco-PTZ, CEE par geste.
            </li>
          </ul>
          <p>
            Vous avez un projet de rénovation d'ampleur ? Faites estimer votre{' '}
            <a href="/dpe-gratuit">DPE gratuitement</a> et découvrez les aides auxquelles vous êtes
            éligible avant que le calendrier réglementaire ne se resserre davantage.
          </p>
        </article>

        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Vérifiez votre éligibilité aux CEE</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            Classe DPE, revenus, type de travaux : RenoHab identifie toutes les aides disponibles pour
            votre rénovation d'ampleur et monte les dossiers pour vous.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/dpe-gratuit"
              className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all"
            >
              Estimer mon DPE
            </a>
            <a
              href="/#simulator"
              className="px-6 py-3 rounded-full border border-white/70 text-white font-semibold hover:bg-white/10 transition-all"
            >
              Simuler mes aides
            </a>
          </div>
        </div>
      </main>

      <ArticleFooter />
    </div>
  );
}
