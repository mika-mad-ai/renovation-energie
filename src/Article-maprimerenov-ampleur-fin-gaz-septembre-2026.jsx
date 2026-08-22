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

const PUBLISHED = '2026-08-22';
const PATH = '/blog/maprimerenov-ampleur-fin-gaz-septembre-2026';

export default function ArticleMaPrimeRenovAmpleurFinGaz2026() {
  useSeo({
    title: "MaPrimeRénov' rénovation d'ampleur : fin du chauffage au gaz au 1er septembre 2026 | RenoHab",
    description:
      "Dès le 1er septembre 2026, toute rénovation d'ampleur financée par MaPrimeRénov' dans une maison individuelle devra abandonner le gaz. Ce qui change, les alternatives et comment anticiper.",
    path: PATH,
    image: 'https://renohab.fr/blog/maprimerenov-ampleur-fin-gaz-septembre-2026.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: "MaPrimeRénov' rénovation d'ampleur : fin du chauffage au gaz au 1er septembre 2026",
      description:
        "Dès le 1er septembre 2026, toute rénovation d'ampleur financée par MaPrimeRénov' dans une maison individuelle devra abandonner le gaz. Ce qui change, les alternatives et comment anticiper.",
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
      about: ["MaPrimeRénov'", "Rénovation d'ampleur", 'Chauffage gaz', 'Pompe à chaleur', 'Aides 2026'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 22 août 2026 · MaPrimeRénov'
          </p>

          <h1>MaPrimeRénov' rénovation d'ampleur : fin du chauffage au gaz au 1er septembre 2026</h1>

          <img
            src="/blog/maprimerenov-ampleur-fin-gaz-septembre-2026.jpg"
            alt="Maison individuelle avec pompe à chaleur installée en remplacement d'une chaudière gaz"
            className="w-full rounded-2xl object-cover max-h-80 mb-8"
            loading="eager"
          />

          <p className="lead">
            Dans moins de dix jours, une règle majeure entre en vigueur : à compter du{' '}
            <strong>1er septembre 2026</strong>, les propriétaires de maisons individuelles ne
            pourront plus bénéficier de MaPrimeRénov' pour une{' '}
            <strong>rénovation d'ampleur</strong> s'ils conservent un chauffage au gaz à l'issue
            des travaux. Une mesure issue du plan d'électrification du gouvernement, annoncé le 23
            avril 2026, qui rebat les cartes pour des milliers de ménages en cours de projet.
          </p>

          <h2>Qu'est-ce que la rénovation d'ampleur ?</h2>
          <p>
            La <strong>rénovation d'ampleur</strong> (parfois appelée « parcours accompagné ») est
            le volet de MaPrimeRénov' qui finance des projets globaux permettant un saut d'au moins
            deux classes au DPE. À la différence du parcours par geste — qui finance une isolation
            ou un équipement à la fois — la rénovation d'ampleur exige un{' '}
            <a href="/dpe-gratuit">audit énergétique</a> préalable et l'accompagnement par un{' '}
            <strong>Accompagnateur Rénov' agréé</strong>. En contrepartie, les montants d'aide sont
            nettement plus élevés, pouvant atteindre 70 % du coût des travaux pour les ménages très
            modestes.
          </p>
          <p>
            Jusqu'au 31 août 2026, un ménage pouvait inclure des travaux d'isolation et de
            ventilation dans son dossier de rénovation d'ampleur tout en conservant sa chaudière
            gaz. Cette porte de sortie disparaît à minuit le 1er septembre.
          </p>

          <h2>Ce qui change concrètement au 1er septembre 2026</h2>
          <ul>
            <li>
              <strong>Maisons individuelles uniquement :</strong> la mesure s'applique aux maisons
              individuelles. Les copropriétés ne sont pas concernées par cette restriction pour
              l'instant.
            </li>
            <li>
              <strong>Dossiers déposés à partir du 1er septembre :</strong> les demandes envoyées
              avant cette date conservent les règles actuelles. Si votre dossier est en cours de
              constitution, il peut être impératif de le finaliser avant la fin août.
            </li>
            <li>
              <strong>Obligation de changer de mode de chauffage :</strong> pour accéder à
              MaPrimeRénov' rénovation d'ampleur, le projet devra impérativement prévoir le
              remplacement du système de chauffage fossile (gaz, fioul, propane) par une solution
              décarbonée.
            </li>
            <li>
              <strong>Le parcours par geste reste disponible :</strong> il est toujours possible de
              financer des travaux d'isolation ou de ventilation via le parcours par geste, sans
              condition sur le mode de chauffage, mais avec des plafonds d'aide inférieurs.
            </li>
          </ul>

          <h2>Pourquoi cette décision ?</h2>
          <p>
            Le gouvernement veut que l'argent public soutienne uniquement des projets qui rompent
            durablement avec les énergies fossiles. Selon les données de l'Anah, environ{' '}
            <strong>10 % des rénovations d'ampleur</strong> conservaient jusqu'à présent un mode
            de chauffage fossile à l'issue des travaux — ce que les autorités qualifient de «
            rénovations incomplètes ». L'objectif déclaré est d'atteindre un{' '}
            <strong>million de pompes à chaleur françaises</strong> installées par an d'ici 2030.
          </p>
          <p>
            Cette mesure s'inscrit dans le plan d'électrification des usages présenté par le
            gouvernement Lecornu le 23 avril 2026, qui vise à réduire la dépendance aux énergies
            fossiles dans le bâtiment, les transports et l'industrie.
          </p>

          <h2>Quelles alternatives au gaz pour rester éligible ?</h2>
          <p>
            La solution la plus plébiscitée — et la plus aidée — est la{' '}
            <strong>pompe à chaleur air/eau</strong>. Elle extrait les calories de l'air extérieur
            pour chauffer l'eau du circuit de chauffage central, avec un coefficient de performance
            (COP) compris entre 3 et 5 selon les modèles. Son installation est cumulable avec{' '}
            MaPrimeRénov', les CEE et la TVA à 5,5 %.{' '}
            <a href="/pompe-a-chaleur">Découvrir les pompes à chaleur RenoHab.</a>
          </p>
          <ul>
            <li>
              <strong>Pompe à chaleur air/eau :</strong> la plus répandue en maison individuelle,
              compatible avec les radiateurs existants si le plancher chauffant n'est pas présent.
              Coût moyen entre 10 000 et 18 000 € (pose incluse), partiellement financé.
            </li>
            <li>
              <strong>Poêle ou insert à granulés (pellets) :</strong> solution de chauffage
              d'appoint ou principal dans les petits volumes. Attention : depuis septembre 2025,
              les poêles à granulés ont été exclus du parcours par geste de MaPrimeRénov' mais
              restent éligibles dans certaines conditions de la rénovation d'ampleur si combinés
              à d'autres travaux.
            </li>
            <li>
              <strong>Chauffage électrique à inertie :</strong> solution économique à l'installation
              mais plus coûteuse à l'usage. Acceptée dans la rénovation d'ampleur uniquement si
              le logement atteint une performance thermique élevée.
            </li>
            <li>
              <strong>Réseau de chaleur urbain :</strong> là où il existe, le raccordement à un
              réseau alimenté majoritairement par des EnR est éligible.
            </li>
          </ul>

          <h2>Quel surcoût prévoir ?</h2>
          <p>
            Remplacer une chaudière gaz par une pompe à chaleur représente un investissement
            supplémentaire estimé entre <strong>8 000 et 12 000 €</strong> par rapport à un
            projet d'isolation sans changement de chaudière. Toutefois, une partie significative
            de ce surcoût est compensée :
          </p>
          <ul>
            <li>
              MaPrimeRénov' couvre entre 25 % et 70 % du coût de la pompe à chaleur selon les
              revenus du ménage.
            </li>
            <li>
              Les <strong>CEE (Certificats d'Économies d'Énergie)</strong> peuvent apporter un
              complément de prime de 2 000 à 5 000 € selon les fournisseurs d'énergie.
            </li>
            <li>
              La <strong>TVA à 5,5 %</strong> s'applique à l'ensemble du chantier de rénovation
              énergétique.
            </li>
            <li>
              L'<strong>Éco-PTZ</strong> permet de financer le reste à charge sans intérêts,
              jusqu'à 50 000 € sur 20 ans.
            </li>
          </ul>
          <p>
            À long terme, le remplacement du gaz par une pompe à chaleur génère des économies sur
            la facture énergétique : selon l'Ademe, le coût du kWh utile d'une PAC est en moyenne
            deux fois inférieur à celui d'une chaudière gaz aux tarifs actuels.
          </p>

          <h2>Que faire si votre dossier est en cours ?</h2>
          <p>
            Si vous avez déjà engagé une rénovation d'ampleur avec conservation du gaz, la règle
            clé est la <strong>date de dépôt de votre dossier</strong> auprès de l'Anah. Un
            dossier complet déposé avant le 1er septembre conserve les règles actuelles, même si
            les travaux se déroulent après cette date.
          </p>
          <p>
            En revanche, si votre dossier n'est pas encore finalisé, deux options s'offrent à vous :
          </p>
          <ol>
            <li>
              <strong>Anticiper et intégrer dès maintenant</strong> le remplacement de la chaudière
              dans le projet global, ce qui ouvre droit aux aides bonifiées les plus élevées.
            </li>
            <li>
              <strong>Opter pour le parcours par geste</strong> pour financer isolation et
              ventilation sans condition sur le chauffage, puis planifier le changement de chaudière
              ultérieurement.
            </li>
          </ol>
          <p>
            Un <a href="/#simulator">Accompagnateur Rénov' agréé</a> comme RenoHab peut analyser
            votre situation, chiffrer les deux scénarios et vous aider à monter le dossier le plus
            avantageux avant la date limite.
          </p>

          <h2>En résumé</h2>
          <ul>
            <li>
              Au 1er septembre 2026, <strong>plus d'aide MaPrimeRénov' rénovation d'ampleur</strong>{' '}
              si la chaudière gaz est conservée dans une maison individuelle.
            </li>
            <li>
              Les dossiers déposés avant le 1er septembre ne sont pas affectés.
            </li>
            <li>
              La <strong>pompe à chaleur air/eau</strong> est l'alternative la plus aidée et la
              plus performante.
            </li>
            <li>
              Le cumul MaPrimeRénov' + CEE + TVA 5,5 % + Éco-PTZ peut couvrir une grande partie
              du surcoût du changement de système de chauffage.
            </li>
            <li>
              Le parcours par geste reste une option valable pour les propriétaires qui ne souhaitent
              pas encore changer leur chaudière.
            </li>
          </ul>
        </article>

        {/* CTA RenoHab */}
        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Démarrez avant le 1er septembre</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            Notre équipe d'Accompagnateurs Rénov' agréés analyse votre dossier, identifie les meilleures aides
            et monte le projet adapté à votre situation — avant la fermeture des règles actuelles.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/#simulator" className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all">
              Simuler mon projet
            </a>
            <a href="/pompe-a-chaleur" className="px-6 py-3 rounded-full border border-white/70 text-white font-semibold hover:bg-white/10 transition-all">
              Découvrir les PAC éligibles
            </a>
          </div>
        </div>
      </main>

      <ArticleFooter />
    </div>
  );
}
