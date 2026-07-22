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

const PUBLISHED = '2026-07-22';
const PATH = '/blog/sortir-du-fioul-2026-aides-alternatives';

export default function ArticleSortirDuFioul() {
  useSeo({
    title: "Sortir du fioul en 2026 : alternatives, aides et démarches | RenoHab",
    description:
      "Chaudière fioul interdite à l'installation depuis 2022 : découvrez les meilleures alternatives (PAC, granulés) et les aides 2026 pour financer votre remplacement.",
    path: PATH,
    image: '/blog/sortir-du-fioul-2026-aides-alternatives.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: "Sortir du fioul en 2026 : alternatives, aides et démarches pour les propriétaires",
      description:
        "Chaudière fioul interdite à l'installation depuis 2022 : découvrez les meilleures alternatives (PAC, granulés) et les aides 2026 pour financer votre remplacement.",
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
      about: ['Chaudière fioul', 'Rénovation énergétique', 'MaPrimeRénov', 'Pompe à chaleur'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 22 juillet 2026 · Chauffage &amp; aides
          </p>

          <h1>Sortir du fioul en 2026 : alternatives, aides et démarches pour les propriétaires</h1>

          <img
            src="/blog/sortir-du-fioul-2026-aides-alternatives.jpg"
            alt="Remplacement d'une chaudière fioul par une pompe à chaleur"
            className="w-full rounded-2xl object-cover max-h-80 mb-8"
            loading="eager"
          />

          <p className="lead">
            En France, 2,6 millions de logements étaient encore chauffés au fioul en 2022, selon
            l'INSEE — soit 8,5 % des résidences principales, majoritairement des maisons
            individuelles en zones rurales ou périurbaines. Depuis juillet 2022, toute installation
            d'une chaudière fioul neuve est interdite. En 2026, des aides cumulables très
            substantielles permettent de financer la transition vers une alternative propre et
            performante. Voici tout ce qu'il faut savoir pour agir avant la panne.
          </p>

          <h2>Une interdiction déjà en vigueur : ce que ça change concrètement</h2>
          <p>
            Depuis le 1<sup>er</sup> juillet 2022, installer une chaudière fioul neuve est
            interdit en France, y compris en remplacement d'une ancienne (décret n°2022-8 du
            5 janvier 2022). Le motif technique : une chaudière fioul émet plus de
            300 g de CO₂/kWh PCI, seuil désormais infranchissable pour tout nouvel équipement
            de chauffage.
          </p>
          <p>
            Les chaudières existantes peuvent continuer à fonctionner — mais dès qu'elles sont
            hors d'usage, aucun remplacement identique n'est autorisé. La question n'est donc
            pas <em>« si »</em> vous devrez changer, mais <em>« quand »</em>. Anticiper permet
            de négocier sereinement les prix, d'obtenir les aides dans les règles de l'art
            et de choisir la meilleure solution pour votre logement — plutôt que de subir une
            panne en plein hiver.
          </p>

          <h2>Quelles alternatives pour remplacer une chaudière fioul ?</h2>

          <h3>La pompe à chaleur air/eau — la solution la plus aidée en 2026</h3>
          <p>
            La <a href="/pompe-a-chaleur">pompe à chaleur air/eau</a> est aujourd'hui
            l'alternative la plus répandue et la mieux financée pour sortir du fioul. Elle
            extrait les calories présentes dans l'air extérieur pour chauffer l'eau de votre
            circuit de radiateurs ou de plancher chauffant. Résultat : une consommation
            d'énergie divisée par 3 à 4 par rapport à une chaudière fioul, et une facture
            nettement allégée malgré le prix de l'électricité.
          </p>
          <p>
            Elle est compatible avec la plupart des installations existantes (radiateurs, plancher
            chauffant), parfois moyennant un légère adaptation. Son installation par un
            installateur RGE conditionne l'accès à l'ensemble des aides.
          </p>

          <h3>La chaudière à granulés de bois</h3>
          <p>
            Si votre logement dispose d'un espace suffisant pour stocker les granulés (minimum
            4 à 6 m²), la chaudière biomasse est une excellente alternative : énergie
            renouvelable, confort proche d'une chaudière classique, et coût du combustible
            parmi les plus bas du marché. Son coût d'installation est souvent supérieur à
            celui d'une PAC, mais les aides sont également très généreuses.
          </p>

          <h3>Le raccordement au réseau de chaleur urbain</h3>
          <p>
            Pour les logements situés dans des zones urbaines disposant d'un réseau de chaleur
            (eau chaude distribuée collectivement, souvent alimentée par des énergies
            renouvelables), le raccordement est une option à étudier auprès de votre mairie.
          </p>

          <p>
            <strong>À éviter :</strong> remplacer une chaudière fioul par une chaudière gaz.
            Depuis 2023, cette option ne donne plus droit à MaPrimeRénov' ni aux primes CEE.
            Et les signaux réglementaires pointent vers une interdiction progressive du gaz
            fossile dans le chauffage résidentiel.
          </p>

          <h2>Les aides 2026 pour sortir du fioul</h2>
          <p>
            Plusieurs dispositifs cumulables existent pour financer votre projet. Voici les
            principaux :
          </p>
          <ul>
            <li>
              <strong>MaPrimeRénov'</strong> : pour l'installation d'une PAC air/eau en
              remplacement d'une chaudière fioul, la prime peut atteindre 5 000 € pour les
              ménages aux revenus très modestes. Les seuils de revenus ont été revalorisés
              de +2,4 % en 2026. La demande se fait <em>avant</em> le début des travaux
              sur monprojet.maprimerenov.gouv.fr.
            </li>
            <li>
              <strong>Primes CEE (Certificats d'Économies d'Énergie)</strong> : versées par
              les fournisseurs d'énergie via leurs artisans partenaires, elles s'ajoutent
              à MaPrimeRénov'. Le cumul total est plafonné à 10 800 € pour les ménages
              très modestes (après écrêtement légal).
            </li>
            <li>
              <strong>Bonus dépose de cuve à fioul</strong> : MaPrimeRénov' prévoit une
              prime complémentaire pour la neutralisation et le retrait de votre cuve de
              fioul : 1 200 € pour les très modestes, 800 € pour les modestes,
              400 € pour les revenus intermédiaires.
            </li>
            <li>
              <strong>TVA à 5,5 %</strong> : tous les travaux réalisés par un professionnel
              RGE dans un logement achevé depuis plus de 2 ans bénéficient de la TVA réduite
              à 5,5 % au lieu de 10 %.
            </li>
            <li>
              <strong>Éco-PTZ</strong> : si votre reste à charge reste élevé, ce prêt sans
              intérêt permet d'emprunter jusqu'à 30 000 €, remboursables sur 15 ans, sans
              conditions de revenus.
            </li>
          </ul>

          <p>
            <strong>Exemple concret :</strong> pour une PAC air/eau installée à 14 000 € TTC
            par un artisan RGE, un ménage aux revenus très modestes peut cumuler jusqu'à
            10 800 € d'aides (MaPrimeRénov' + CEE) et 1 200 € de bonus dépose de cuve —
            soit un reste à charge potentiel de 2 000 €, finançable via l'éco-PTZ à 0 %.
          </p>

          <h2>Les étapes pour concrétiser votre projet</h2>
          <ol>
            <li>
              <strong>Évaluez votre logement</strong> : un{' '}
              <a href="/dpe-gratuit">DPE gratuit en ligne</a> ou un audit énergétique vous
              donnent une première vision de votre situation et oriente le choix de la
              solution.
            </li>
            <li>
              <strong>Faites appel à un Accompagnateur Rénov' agréé</strong> : il monte votre
              dossier de subventions, s'assure de la conformité de la demande MaPrimeRénov' et
              coordonne les artisans RGE pour sécuriser le chantier. Son intervention est
              obligatoire pour les rénovations d'ampleur, et fortement recommandée pour toute
              demande de MaPrimeRénov'.
            </li>
            <li>
              <strong>Déposez votre dossier avant de signer le devis</strong> : MaPrimeRénov'
              doit être accordée <em>avant</em> le démarrage des travaux. Ne signez aucun bon
              de commande sans avoir reçu votre accord de principe.
            </li>
            <li>
              <strong>Anticipez les délais</strong> : entre l'instruction du dossier, la
              disponibilité des artisans RGE et la livraison de l'équipement, comptez
              plusieurs semaines à plusieurs mois. Mieux vaut planifier votre sortie du fioul
              avant l'hiver.
            </li>
          </ol>

          <p>
            Vous pouvez aussi utiliser notre{' '}
            <a href="/simulateur">simulateur de rénovation</a> pour estimer en quelques minutes
            le montant des aides auxquelles vous pouvez prétendre selon votre situation.
          </p>
        </article>

        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Votre chaudière fioul va rendre l'âme ?</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            RenoHab, Accompagnateur Rénov' agréé, monte votre dossier d'aides et coordonne
            des artisans RGE pour remplacer votre chaudière fioul au meilleur coût.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/dpe-gratuit" className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all">
              Estimer mon DPE
            </a>
            <a href="/pompe-a-chaleur" className="px-6 py-3 rounded-full border border-white/70 text-white font-semibold hover:bg-white/10 transition-all">
              Découvrir les PAC
            </a>
          </div>
        </div>
      </main>

      <ArticleFooter />
    </div>
  );
}
