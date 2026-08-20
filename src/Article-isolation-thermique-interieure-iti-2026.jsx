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

const PUBLISHED = '2026-08-20';
const PATH = '/blog/isolation-thermique-interieure-iti-2026';

export default function ArticleITI2026() {
  useSeo({
    title: "Isolation thermique par l'intérieur (ITI) en 2026 : quand la choisir, prix et aides | RenoHab",
    description:
      "L'isolation par l'intérieur (ITI) reste finançable en 2026 via les CEE, la TVA à 5,5 % et l'éco-PTZ. Découvrez les prix, les techniques et quand l'ITI est préférable à l'ITE.",
    path: PATH,
    image: '/blog/isolation-thermique-interieure-iti-2026.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: "Isolation thermique par l'intérieur (ITI) en 2026 : quand la choisir, prix et aides",
      description:
        "L'isolation par l'intérieur (ITI) reste finançable en 2026 via les CEE, la TVA à 5,5 % et l'éco-PTZ. Découvrez les prix, les techniques et quand l'ITI est préférable à l'ITE.",
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
      about: ["Isolation thermique intérieure", "ITI", "CEE", "Rénovation énergétique", "MaPrimeRénov'"],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 20 août 2026 · Isolation
          </p>

          <h1>Isolation thermique par l'intérieur (ITI) en 2026 : quand la choisir, prix et aides</h1>

          <img
            src="/blog/isolation-thermique-interieure-iti-2026.jpg"
            alt="Chantier d'isolation thermique par l'intérieur dans une pièce de maison"
            className="w-full rounded-xl object-cover max-h-80 mb-8"
            loading="eager"
          />

          <p className="lead">
            Vous ne pouvez pas modifier votre façade — immeuble en copropriété, secteur protégé,
            budget serré — et vous cherchez une solution pour isoler vos murs ? L'isolation
            thermique par l'intérieur (ITI) est faite pour vous. En 2026, les aides ont évolué,
            mais des financements subsistent. Voici tout ce que vous devez savoir avant de lancer
            votre chantier.
          </p>

          <h2>ITI vs ITE : quelle différence et quand choisir l'intérieur ?</h2>
          <p>
            L'isolation thermique par l'extérieur (ITE) habille la façade d'un manteau isolant
            sans toucher à la surface habitable, mais elle nécessite un accès aux murs extérieurs
            et une autorisation de travaux. L'ITI, à l'inverse, est réalisée de l'intérieur du
            logement : on fixe l'isolant directement sur la face interne des murs froids, puis on
            le recouvre d'un parement (plaque de plâtre, lambris…).
          </p>
          <p>
            L'ITI s'impose dans quatre situations typiques :
          </p>
          <ul>
            <li>
              <strong>Appartement en copropriété</strong> : les façades sont des parties communes ;
              l'ITI permet d'agir sans vote en assemblée générale.
            </li>
            <li>
              <strong>Secteur sauvegardé ou bâtiment classé</strong> : la réglementation interdit
              souvent de modifier l'aspect extérieur.
            </li>
            <li>
              <strong>Murs mitoyens</strong> : impossible à isoler par l'extérieur, l'ITI reste la
              seule option.
            </li>
            <li>
              <strong>Budget limité</strong> : l'ITI coûte significativement moins cher au m² que
              l'ITE, tout en apportant un gain thermique réel.
            </li>
          </ul>

          <h2>Techniques d'isolation par l'intérieur</h2>
          <p>
            Trois procédés couvrent l'essentiel du marché :
          </p>
          <ul>
            <li>
              <strong>Doublage collé</strong> : des panneaux composites (polystyrène ou laine minérale
              + plaque de plâtre) sont collés directement sur le mur porteur. Rapide, peu encombrant
              (6 à 10 cm), idéal pour les murs réguliers. Coût : <strong>40 à 60 €/m²</strong> pose
              comprise.
            </li>
            <li>
              <strong>Ossature métallique</strong> : une structure en rails métalliques est fixée au
              mur, l'isolant est glissé entre les montants, puis recouvert d'une plaque de plâtre.
              Plus adaptée aux murs irréguliers et permet d'intégrer des passages de câbles. Coût :
              <strong> 60 à 90 €/m²</strong>.
            </li>
            <li>
              <strong>Contre-cloison en briques ou en blocs</strong> : solution traditionnelle,
              offre une bonne inertie thermique mais consomme davantage d'espace. Coût :
              <strong> 70 à 110 €/m²</strong>.
            </li>
          </ul>
          <p>
            Quelle que soit la technique retenue, la résistance thermique minimale exigée pour être
            éligible aux aides est <strong>R ≥ 3,7 m²·K/W</strong> (arrêté du 26 août 2025,
            applicable depuis le 1er janvier 2026). Vérifiez ce critère sur les fiches techniques
            de l'isolant avec votre artisan RGE.
          </p>

          <h2>Aides disponibles en 2026 pour l'ITI</h2>
          <p>
            La réforme de MaPrimeRénov' de 2026 a modifié le paysage des aides pour l'ITI.
            Voici le tableau complet.
          </p>

          <h3>MaPrimeRénov' Parcours accompagné : oui, sous conditions</h3>
          <p>
            Depuis le 1er janvier 2026, l'ITI n'est <strong>plus finançable via le Parcours par
            geste</strong> de MaPrimeRénov' (qui ne couvre plus aucune isolation de murs). Elle
            reste en revanche pleinement éligible dans le cadre d'un{' '}
            <strong>Parcours accompagné</strong> (rénovation d'ampleur) : gain d'au moins deux
            classes DPE, audit énergétique préalable, et intervention d'un{' '}
            <a href="/dpe-gratuit">Mon Accompagnateur Rénov' (MAR)</a> agréé comme RenoHab.
          </p>
          <p>
            Dans ce cadre, les montants de la prime pour l'isolation des murs intérieurs varient
            selon les revenus du foyer :
          </p>
          <ul>
            <li>Ménages aux revenus <strong>très modestes</strong> : jusqu'à <strong>75 €/m²</strong></li>
            <li>Ménages aux revenus <strong>modestes</strong> : jusqu'à <strong>50 €/m²</strong></li>
            <li>Ménages aux revenus <strong>intermédiaires</strong> : jusqu'à <strong>35 €/m²</strong></li>
            <li>Ménages aux revenus <strong>supérieurs</strong> : jusqu'à <strong>25 €/m²</strong></li>
          </ul>

          <h3>Prime CEE : accessible à tous, sans condition de revenus</h3>
          <p>
            Les Certificats d'Économies d'Énergie (CEE) constituent l'aide la plus accessible pour
            l'ITI en 2026 : aucune condition de ressources, aucune obligation de rénovation globale.
            Les montants varient selon les fournisseurs d'énergie délégataires, mais comptez
            en moyenne <strong>7 à 12 €/m²</strong>, et jusqu'à <strong>40 €/m²</strong> chez
            certains acteurs en cas de cumul avec un CEE Coup de pouce.
          </p>
          <p>
            La prime CEE est cumulable avec MaPrimeRénov' lorsque les travaux s'inscrivent dans
            un parcours accompagné.
          </p>

          <h3>TVA réduite à 5,5 % : systématique</h3>
          <p>
            Pour tout logement de plus de deux ans, les travaux d'isolation bénéficient
            automatiquement de la <strong>TVA à 5,5 %</strong> sur les matériaux et la main-d'œuvre
            (au lieu de 20 %). C'est la condition la plus simple à remplir — il suffit de faire
            appel à un professionnel RGE.
          </p>

          <h3>Éco-PTZ : jusqu'à 50 000 € sans intérêts</h3>
          <p>
            L'éco-prêt à taux zéro permet de financer le reste à charge après déduction des primes,
            jusqu'à <strong>50 000 €</strong> remboursables sur 20 ans et sans intérêts. Il est
            accessible sans condition de revenus et se cumule avec les autres aides.
          </p>

          <h2>Un exemple chiffré : appartement de 60 m² à Paris</h2>
          <p>
            Prenons le cas d'un appartement haussmannien avec 30 m² de murs froids à traiter par
            ossature métallique (75 €/m² TTC avant aides, TVA à 5,5 % incluse) :
          </p>
          <ul>
            <li>Coût brut : <strong>2 250 €</strong></li>
            <li>Prime CEE : <strong>− 270 €</strong> (à 9 €/m²)</li>
            <li>
              MaPrimeRénov' parcours accompagné (ménage modeste, si combinée à d'autres gestes) :
              <strong> − 1 500 €</strong> (à 50 €/m²)
            </li>
            <li>
              <strong>Reste à charge estimé : 480 €</strong>, finançable par éco-PTZ si nécessaire
            </li>
          </ul>
          <p className="text-sm text-gray-500">
            *Exemple indicatif. Les montants réels dépendent de votre situation fiscale, du devis de
            l'artisan et du dossier global de rénovation.
          </p>

          <h2>Précautions à prendre : condensation et ponts thermiques</h2>
          <p>
            L'ITI, mal réalisée, peut provoquer des problèmes d'humidité : le point de rosée se
            déplace à l'intérieur du mur et la vapeur d'eau peut condenser. Pour l'éviter :
          </p>
          <ul>
            <li>
              <strong>Poser un pare-vapeur</strong> côté intérieur de l'isolant pour contrôler la
              migration de vapeur d'eau.
            </li>
            <li>
              <strong>Installer ou vérifier la ventilation</strong> — une{' '}
              <a href="/pompe-a-chaleur">VMC double flux</a> ou au moins une VMC hygro-réglable est
              indispensable pour renouveler l'air sans perdre de chaleur.
            </li>
            <li>
              <strong>Traiter les ponts thermiques</strong> aux jonctions plancher/mur lorsque c'est
              possible (technique du retour d'isolant).
            </li>
          </ul>
          <p>
            Ces précautions sont d'autant plus importantes que l'ITI ne supprime pas les ponts
            thermiques au niveau des planchers intermédiaires et des refends, contrairement à l'ITE.
            C'est l'un des critères à peser dans le choix entre les deux solutions.
          </p>

          <h2>ITI ou ITE : récapitulatif pour choisir</h2>
          <ul>
            <li>
              <strong>Choisissez l'ITI</strong> si vous êtes en appartement, en secteur protégé, ou
              si votre budget est serré.
            </li>
            <li>
              <strong>Choisissez l'ITE</strong> si vous avez accès aux façades, si vous souhaitez
              traiter tous les ponts thermiques et conserver votre surface habitable. L'ITE est
              généralement plus performante sur le plan énergétique.
            </li>
            <li>
              Dans les deux cas, un <a href="/dpe-gratuit">audit énergétique</a> vous permet de
              quantifier le gain DPE attendu et de construire le bon bouquet de travaux pour
              maximiser les aides.
            </li>
          </ul>

          <h2>En résumé</h2>
          <ul>
            <li>L'ITI est la solution d'isolation des murs quand l'extérieur est inaccessible.</li>
            <li>En 2026, MaPrimeRénov' ne la couvre que via le Parcours accompagné (rénovation d'ampleur).</li>
            <li>Les CEE (7 à 40 €/m²), la TVA à 5,5 % et l'éco-PTZ restent accessibles à tous.</li>
            <li>La résistance thermique minimale R ≥ 3,7 m²·K/W est obligatoire pour déclencher les aides.</li>
            <li>Un pare-vapeur et une bonne ventilation sont indispensables pour éviter la condensation.</li>
          </ul>
        </article>

        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Obtenez un bilan isolation gratuit</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            RenoHab, Accompagnateur Rénov' agréé, vous aide à choisir entre ITI et ITE, monte
            votre dossier d'aides et coordonne les artisans RGE.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/dpe-gratuit" className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all">
              Obtenir mon DPE gratuit
            </a>
            <a href="/pompe-a-chaleur" className="px-6 py-3 rounded-full border border-white/70 text-white font-semibold hover:bg-white/10 transition-all">
              Étudier ma pompe à chaleur
            </a>
          </div>
        </div>
      </main>

      <ArticleFooter />
    </div>
  );
}
