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

const PUBLISHED = '2026-07-30';
const PATH = '/blog/dpe-2026-passoires-thermiques-location';

export default function ArticleDpe2026PassoiresThermiques() {
  useSeo({
    title: "DPE 2026 : passoires thermiques, reclassification et règles de location | RenoHab",
    description:
      "850 000 logements automatiquement reclassés depuis le 1er janvier 2026, projet de loi Lecornu sur la location des F et G, audit énergétique obligatoire : tout ce qui change pour les propriétaires en 2026.",
    path: PATH,
    image: 'https://renohab.fr/blog/dpe-2026-passoires-thermiques-location.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline:
        "DPE 2026 : passoires thermiques, reclassification et nouvelles règles de location",
      description:
        "850 000 logements automatiquement reclassés depuis le 1er janvier 2026, projet de loi Lecornu sur la location des F et G, audit énergétique obligatoire : tout ce qui change pour les propriétaires en 2026.",
      datePublished: PUBLISHED,
      dateModified: PUBLISHED,
      inLanguage: 'fr-FR',
      image: 'https://renohab.fr/blog/dpe-2026-passoires-thermiques-location.jpg',
      mainEntityOfPage: { '@type': 'WebPage', '@id': `https://renohab.fr${PATH}` },
      author: { '@type': 'Organization', name: 'RenoHab', url: 'https://renohab.fr/' },
      publisher: {
        '@type': 'Organization',
        name: 'RenoHab',
        logo: { '@type': 'ImageObject', url: 'https://renohab.fr/logo192-renohab.png' },
      },
      about: ['DPE 2026', 'Passoire thermique', 'Location logement', 'Rénovation énergétique'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 30 juillet 2026 · DPE &amp; réglementation
          </p>

          <h1>DPE 2026 : passoires thermiques, reclassification et nouvelles règles de location</h1>

          <img
            src="/blog/dpe-2026-passoires-thermiques-location.jpg"
            alt="Étiquette DPE et logement — réglementation 2026"
            className="w-full rounded-xl object-cover max-h-72 mb-8"
            loading="eager"
          />

          <p className="lead">
            Depuis le 1er janvier 2026, le calcul du DPE a changé : près de 850 000 logements
            autrefois classés F ou G ont automatiquement gagné une ou deux classes — sans aucun
            travaux. En parallèle, un projet de loi déposé en avril 2026 prévoit d'assouplir
            l'interdiction de location des passoires thermiques, sous conditions. Propriétaires
            bailleurs et vendeurs : voici ce que vous devez savoir.
          </p>

          <h2>La grande reclassification du 1er janvier 2026</h2>
          <p>
            Un arrêté ministériel du 13 août 2025 a abaissé le coefficient de conversion de
            l'électricité primaire de <strong>2,3 à 1,9</strong>, avec effet au 1er janvier 2026.
            Résultat : les logements chauffés à l'électricité consomment « moins » en énergie
            primaire aux yeux du DPE, ce qui fait mécaniquement remonter leur classe.
          </p>
          <p>
            Selon les estimations officielles, environ <strong>850 000 logements</strong>
            précédemment étiquetés F ou G ont ainsi automatiquement quitté le statut de passoire
            thermique. Ce changement reconnaît le faible contenu carbone du réseau électrique
            français — argument structurel souvent ignoré dans les anciens barèmes.
          </p>
          <p>
            À noter : le DPE conserve son double seuil (consommation en kWh/m²/an{' '}
            <em>et</em> émissions CO₂ en kg/m²/an). Un logement n'obtient une classe qu'à
            condition de satisfaire les deux critères ; sinon, c'est le moins bon des deux qui
            s'applique. Vérifiez donc votre DPE avec les nouvelles valeurs avant de tirer des
            conclusions.
          </p>
          <p>
            Vous souhaitez connaître la classe énergétique probable de votre logement ?{' '}
            <a href="/dpe-gratuit">Obtenez une estimation DPE gratuite</a> en quelques minutes.
          </p>

          <h2>Location des passoires thermiques : où en est la loi ?</h2>
          <p>
            Depuis le <strong>1er janvier 2025</strong>, les logements classés{' '}
            <strong>G</strong> sont interdits à la mise en location (nouveaux baux). Les propriétaires
            concernés ne peuvent ni signer un nouveau contrat, ni renouveler un bail existant.
            L'interdiction était programmée pour s'étendre aux <strong>classes F en 2028</strong>{' '}
            et aux <strong>classes E en 2034</strong>.
          </p>

          <h3>Le projet de loi Lecornu d'avril 2026</h3>
          <p>
            Le 23 avril 2026, le Premier ministre Sébastien Lecornu a présenté à Marseille un
            projet de loi qui marque un virage significatif. Ce texte prévoit de permettre aux
            bailleurs de logements classés <strong>F ou G</strong> de remettre leur bien en
            location, à une condition : signer un contrat avec une entreprise de travaux
            s'engageant à rénover le logement dans un délai de{' '}
            <strong>3 ans pour une maison individuelle</strong> ou de{' '}
            <strong>5 ans pour un appartement en copropriété</strong>. À l'issue de ce délai,
            le logement doit avoir quitté le statut de passoire thermique.
          </p>
          <p>
            Ce mécanisme vise à débloquer une partie du parc locatif immobilisé, tout en
            maintenant une obligation réelle de travaux. Le projet de loi est en cours
            d'examen parlementaire : suivez les évolutions avec votre conseiller juridique
            ou un Accompagnateur Rénov' agréé.
          </p>

          <h2>L'audit énergétique obligatoire en cas de vente</h2>
          <p>
            Depuis le 1er janvier 2025, la vente d'une maison individuelle classée{' '}
            <strong>E, F ou G</strong> impose la réalisation d'un{' '}
            <strong>audit énergétique</strong> (distinct du simple DPE). Cet audit, dont le
            coût varie généralement entre <strong>500 et 1 500 €</strong>, est à la charge
            du vendeur et reste valable 5 ans. Il doit proposer au moins{' '}
            <strong>deux scénarios de rénovation</strong> permettant d'atteindre la classe B,
            avec estimation des travaux et des gains énergétiques.
          </p>
          <ul>
            <li>
              <strong>Obligatoire dès la mise en vente</strong> — les annonces immobilières
              doivent y faire référence.
            </li>
            <li>
              <strong>L'acheteur n'est pas contraint de réaliser les travaux</strong>, mais
              dispose d'une feuille de route claire.
            </li>
            <li>
              <strong>Les copropriétés sont exemptées</strong> de l'audit obligatoire pour
              la vente (mais pas du DPE de lot).
            </li>
          </ul>

          <h2>Que faire si votre logement est encore classé F ou G ?</h2>
          <p>
            Même avec la reclassification de janvier 2026, un grand nombre de logements
            restent en zone rouge. Agir maintenant permet de cumuler plusieurs aides et
            d'anticiper les futures obligations.
          </p>

          <h3>Les aides mobilisables en 2026</h3>
          <ul>
            <li>
              <strong>MaPrimeRénov'</strong> — subvention de l'État, modulée selon les revenus
              du foyer. La rénovation d'ampleur (saut de deux classes minimum) donne accès aux
              bonus les plus élevés.
            </li>
            <li>
              <strong>Certificats d'Économies d'Énergie (CEE)</strong> — la 6e période des CEE
              (2026–2030) porte l'obligation à 5 250 TWh cumac, soit des primes versées par les
              fournisseurs d'énergie en hausse sensible.
            </li>
            <li>
              <strong>Éco-PTZ</strong> — prêt à taux zéro jusqu'à 50 000 € pour financer un
              bouquet de travaux ou une rénovation globale.
            </li>
            <li>
              <strong>TVA à 5,5 %</strong> sur les travaux de rénovation énergétique réalisés
              par un artisan RGE.
            </li>
          </ul>
          <p>
            La <a href="/pompe-a-chaleur">pompe à chaleur air/eau</a> reste l'un des équipements
            les plus aidés : en combinant MaPrimeRénov', CEE et Coup de pouce chauffage,
            l'aide totale peut dépasser 9 000 €.
          </p>

          <h3>Par où commencer ?</h3>
          <p>
            Avant tout travaux, un <strong>audit énergétique</strong> ou une{' '}
            <strong>visite conseil</strong> par un Accompagnateur Rénov' agréé permet de définir
            le bon ordre des chantiers, d'optimiser les aides et d'éviter les erreurs coûteuses.
            En tant qu'Accompagnateur Rénov', RenoHab réalise ce diagnostic, monte les dossiers
            de financement et coordonne les artisans RGE certifiés.
          </p>
          <p>
            Utilisez notre{' '}
            <a href="/#simulateur">simulateur d'aides</a> pour estimer en deux minutes les
            subventions auxquelles vous avez droit selon votre logement et votre situation.
          </p>
        </article>

        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Votre DPE va-t-il changer ?</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            Obtenez une estimation gratuite de la classe énergétique de votre logement et découvrez
            les aides disponibles pour sortir du statut de passoire thermique.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/dpe-gratuit"
              className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all"
            >
              Estimer mon DPE gratuitement
            </a>
            <a
              href="/pompe-a-chaleur"
              className="px-6 py-3 rounded-full border border-white/70 text-white font-semibold hover:bg-white/10 transition-all"
            >
              Découvrir la pompe à chaleur
            </a>
          </div>
        </div>
      </main>

      <ArticleFooter />
    </div>
  );
}
