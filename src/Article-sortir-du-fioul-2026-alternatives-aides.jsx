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

const PUBLISHED = '2026-08-10';
const PATH = '/blog/sortir-du-fioul-2026-alternatives-aides';

export default function ArticleSortirDuFioul2026() {
  useSeo({
    title: "Sortir du fioul en 2026 : alternatives, aides et démarches pour changer de chauffage | RenoHab",
    description:
      "Comment remplacer une chaudière fioul en 2026 : pompe à chaleur, granulés, hybride. Aides MaPrimeRénov', CEE Coup de pouce, éco-PTZ et TVA 5,5 % — guide complet.",
    path: PATH,
    image: '/blog/sortir-du-fioul-2026-alternatives-aides.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline:
        "Sortir du fioul en 2026 : alternatives, aides et démarches pour changer de chauffage",
      description:
        "Comment remplacer une chaudière fioul en 2026 : pompe à chaleur, granulés, hybride. Aides MaPrimeRénov', CEE Coup de pouce, éco-PTZ et TVA 5,5 %.",
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
      about: ['Chaudière fioul', 'Pompe à chaleur', 'MaPrimeRénov\'', 'Rénovation énergétique'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 10 août 2026 · Guide pratique
          </p>

          <h1>Sortir du fioul en 2026 : alternatives, aides et démarches pour changer de chauffage</h1>

          <img
            src="/blog/sortir-du-fioul-2026-alternatives-aides.jpg"
            alt="Chaudière à remplacer — transition vers le chauffage propre"
            className="w-full rounded-xl object-cover max-h-80 my-6"
            loading="lazy"
          />

          <p className="lead">
            Environ 3,5 millions de logements en France fonctionnent encore au fioul domestique. C'est
            le mode de chauffage le plus polluant parmi les énergies fossiles, et son prix reste soumis
            aux aléas des marchés pétroliers. Depuis 2022, la loi interdit d'installer de nouvelles
            chaudières fioul. En 2026, les aides pour la transition sont particulièrement généreuses.
            Voici tout ce qu'il faut savoir pour franchir le pas.
          </p>

          <h2>Ce que dit la loi sur les chaudières fioul en 2026</h2>
          <p>
            La loi Énergie-Climat de 2019 a posé le cadre : depuis le{' '}
            <strong>1er juillet 2022</strong>, il est interdit d'installer une nouvelle chaudière
            fioul dans un logement résidentiel. Cette interdiction s'applique à tout appareil neuf,
            qu'il s'agisse d'une première installation ou d'un remplacement planifié.
          </p>
          <p>
            Concrètement, pour les propriétaires actuels :
          </p>
          <ul>
            <li>
              <strong>L'entretien et la réparation</strong> de la chaudière fioul existante restent
              autorisés tant qu'elle fonctionne.
            </li>
            <li>
              En cas de <strong>panne irréparable</strong>, le remplacement à l'identique par du fioul
              est désormais impossible : il faut basculer vers une alternative.
            </li>
            <li>
              Remplacer sa chaudière fioul par une <strong>chaudière gaz</strong> ne donne plus droit
              à MaPrimeRénov' ni aux primes CEE Coup de pouce depuis 2023 — seul l'éco-PTZ reste
              accessible dans ce cas.
            </li>
          </ul>
          <p>
            Au-delà de la réglementation, les ménages au fioul subissent une double pénalité : un
            coût de l'énergie élevé et un impact négatif sur le{' '}
            <a href="/dpe-gratuit">DPE</a>, ce qui peut compromettre la mise en location ou la vente
            du bien.
          </p>

          <h2>Quelles alternatives pour remplacer une chaudière fioul ?</h2>

          <h3>La pompe à chaleur air/eau : la solution plébiscitée</h3>
          <p>
            La <a href="/pompe-a-chaleur">pompe à chaleur air/eau</a> s'est imposée comme la
            référence pour remplacer le fioul : elle puise les calories de l'air extérieur pour
            chauffer l'eau du circuit de chauffage. Son coefficient de performance (COP) varie de
            3 à 5, ce qui signifie qu'un kilowattheure électrique consommé produit 3 à 5 kWh de
            chaleur. Résultat : une division par 3 à 4 de la facture énergétique par rapport au fioul.
          </p>
          <ul>
            <li><strong>Compatible avec les radiateurs existants</strong> à haute température (modèles haute température) ou avec un plancher chauffant.</li>
            <li><strong>Prix d'installation</strong> : entre 12 000 et 20 000 € TTC, pose comprise, selon la puissance et la marque.</li>
            <li>C'est la solution la plus financée par l'État en 2026, avec le cumul maximal d'aides.</li>
          </ul>

          <h3>La chaudière à granulés de bois (pellets)</h3>
          <p>
            Si votre logement dispose d'un espace de stockage adapté (silo ou sac de 15 kg), la
            chaudière à granulés est une alternative biomasse performante. Elle offre un confort
            similaire au fioul et émet très peu de CO₂ net. Son coût d'installation est compris entre
            8 000 et 15 000 €. Elle est éligible à MaPrimeRénov' et aux CEE, bien que les montants
            pour la biomasse aient été revus à la baisse en 2026 par rapport aux années précédentes.
          </p>

          <h3>Le système hybride PAC + appoint</h3>
          <p>
            Pour les logements mal isolés ou les régions très froides, un système hybride associe une
            pompe à chaleur air/eau et une chaudière d'appoint (gaz, granulés ou autre). La PAC prend
            le relais jusqu'à environ -5 °C, l'appoint prenant le dessus lors des pics de froid.
            Ce type de système est éligible à MaPrimeRénov' dans le cadre d'une rénovation globale
            accompagnée.
          </p>

          <h2>Les aides financières pour sortir du fioul en 2026</h2>
          <p>
            La transition depuis le fioul est le scénario le <strong>mieux aidé</strong> par l'État :
            plusieurs dispositifs cumulables permettent de couvrir une grande partie du coût des
            travaux.
          </p>

          <h3>MaPrimeRénov'</h3>
          <p>
            C'est la principale subvention de l'État pour l'installation d'une PAC en remplacement
            d'une chaudière fossile. Les montants 2026 pour une PAC air/eau varient selon votre
            profil de revenus (barème Anah) :
          </p>
          <ul>
            <li><strong>Ménages très modestes (bleu)</strong> : jusqu'à 5 000 €.</li>
            <li><strong>Ménages modestes (jaune)</strong> : jusqu'à 4 000 €.</li>
            <li><strong>Ménages intermédiaires (violet)</strong> : jusqu'à 3 000 €.</li>
            <li><strong>Ménages aisés (rose)</strong> : non éligible en parcours par geste — accès possible via la rénovation d'ampleur.</li>
          </ul>
          <p>
            Conditions : logement en résidence principale âgé de plus de 15 ans (ou plus de 2 ans
            avec dépose de cuve fioul), artisan certifié{' '}
            <strong>RGE QualiPAC</strong>, dossier déposé <em>avant</em> la signature du devis.
          </p>

          <h3>Prime CEE « Coup de pouce chauffage »</h3>
          <p>
            Les{' '}
            <a href="/blog/cee-2026-prime-energie-comment-en-profiter">Certificats d'Économie d'Énergie</a>
            {' '}(CEE) complètent MaPrimeRénov' sans plafond de cumul. L'opération
            « Coup de pouce chauffage » prévoit une prime pouvant atteindre{' '}
            <strong>4 000 €</strong> pour les ménages modestes remplaçant une chaudière fioul ou
            charbon par une PAC. Elle est distribuée par les fournisseurs d'énergie (EDF, Engie,
            TotalÉnergies…) ou via des plateformes délégataires — votre artisan peut en général gérer
            le dossier pour vous.
          </p>

          <h3>Éco-PTZ</h3>
          <p>
            L'
            <a href="/blog/eco-ptz-2026-pret-taux-zero-renovation">éco-prêt à taux zéro</a>{' '}
            vous permet d'emprunter jusqu'à 50 000 € sans intérêts pour financer le reste à charge,
            sans condition de ressources. Il est prolongé jusqu'au 31 décembre 2027 et compatible
            avec toutes les autres aides.
          </p>

          <h3>TVA à 5,5 %</h3>
          <p>
            L'installation d'une PAC dans une résidence principale de plus de 2 ans bénéficie de la
            TVA réduite à <strong>5,5 %</strong> au lieu de 20 %, soit une économie de 14,5 % sur le
            montant des travaux. Cette réduction s'applique automatiquement sur la facture de
            l'artisan, sans démarche supplémentaire.
          </p>

          <h2>Les étapes concrètes pour lancer votre projet</h2>
          <ol>
            <li>
              <strong>Évaluez votre logement</strong> : faites estimer votre DPE avec notre{' '}
              <a href="/dpe-gratuit">outil gratuit</a> pour connaître la classe actuelle et mesurer
              le gain potentiel après travaux.
            </li>
            <li>
              <strong>Simulez vos aides</strong> : utilisez notre{' '}
              <a href="/#simulator">simulateur d'aides</a> pour connaître les montants auxquels
              vous avez droit selon vos revenus et votre projet.
            </li>
            <li>
              <strong>Déposez le dossier MaPrimeRénov'</strong> sur maprimerenov.gouv.fr
              <em> avant</em> de signer le moindre devis (la règle est impérative).
            </li>
            <li>
              <strong>Obtenez au moins 3 devis</strong> auprès d'artisans certifiés RGE QualiPAC
              dans votre secteur. Vérifiez la certification sur le site Qualibat.
            </li>
            <li>
              <strong>Cumulez les CEE</strong> : demandez à votre artisan ou à un délégataire de
              monter le dossier Coup de pouce en parallèle de MaPrimeRénov'.
            </li>
            <li>
              <strong>Financez le reste à charge</strong> avec un éco-PTZ si nécessaire — sans
              conditions de ressources et sans intérêts.
            </li>
          </ol>
          <p>
            En tant qu'Accompagnateur Rénov' agréé, RenoHab monte l'intégralité de vos dossiers
            d'aides, sélectionne des artisans RGE qualifiés et coordonne le chantier de A à Z. Vous
            n'avez qu'un seul interlocuteur du diagnostic à la réception des travaux.
          </p>

          <h2>Pourquoi agir en 2026 plutôt qu'attendre ?</h2>
          <ul>
            <li>
              Les aides sont amenées à évoluer à la baisse après les réformes de septembre 2026 ;
              les conditions actuelles restent favorables.
            </li>
            <li>
              Chaque hiver passé au fioul représente une dépense imprévisible, indexée sur un marché
              pétrolier volatil.
            </li>
            <li>
              Un meilleur DPE augmente directement la valeur locative et la valeur vénale de votre
              bien — les passoires thermiques (F/G) sont de plus en plus difficiles à louer ou vendre.
            </li>
            <li>
              Les artisans RGE sont très sollicités : anticiper évite des délais d'attente de plusieurs
              mois.
            </li>
          </ul>
        </article>

        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Estimez vos aides pour sortir du fioul</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            Audit énergétique, montage des dossiers MaPrimeRénov' + CEE, artisans RGE : RenoHab
            gère tout pour que vous bénéficiiez du maximum d'aides.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/dpe-gratuit" className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all">
              Estimer mon DPE gratuitement
            </a>
            <a href="/#simulator" className="px-6 py-3 rounded-full border border-white/70 text-white font-semibold hover:bg-white/10 transition-all">
              Simuler mes aides
            </a>
          </div>
        </div>
      </main>

      <ArticleFooter />
    </div>
  );
}
