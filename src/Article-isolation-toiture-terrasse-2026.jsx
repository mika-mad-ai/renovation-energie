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

const PUBLISHED = '2026-09-20';
const PATH = '/blog/isolation-toiture-terrasse-2026';

export default function ArticleIsolationToitureTerrasse2026() {
  useSeo({
    title: "Isolation de la toiture-terrasse en 2026 : techniques, aides et retour sur investissement | RenoHab",
    description:
      "Toiture-terrasse inaccessible, accessible ou végétalisée : découvrez les techniques d'isolation adaptées, les aides disponibles en 2026 (MaPrimeRénov', CEE, TVA 5,5 %) et comment financer vos travaux.",
    path: PATH,
    image: 'https://renohab.fr/blog/isolation-toiture-terrasse-2026.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: "Isolation de la toiture-terrasse en 2026 : techniques, aides et retour sur investissement",
      description:
        "Toiture-terrasse inaccessible, accessible ou végétalisée : techniques d'isolation adaptées, aides disponibles en 2026 (MaPrimeRénov', CEE, TVA 5,5 %) et comment financer vos travaux.",
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
      about: ['Isolation toiture-terrasse', 'Rénovation énergétique', 'MaPrimeRénov 2026', 'Aides isolation'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 20 septembre 2026 · Isolation
          </p>

          <h1>Isolation de la toiture-terrasse en 2026 : techniques, aides et retour sur investissement</h1>

          <img
            src="/blog/isolation-toiture-terrasse-2026.jpg"
            alt="Toiture-terrasse d'une maison moderne avec isolation thermique"
            className="w-full rounded-xl my-6 object-cover max-h-80"
            loading="lazy"
          />

          <p className="lead">
            La toiture-terrasse représente jusqu'à 30 % des déperditions thermiques d'un logement
            à toit plat. Pourtant, son isolation reste moins connue que celle des combles perdus ou des
            murs. En 2026, avec la réforme de MaPrimeRénov' et les nouvelles obligations de rénovation
            d'ampleur, c'est précisément le bon moment pour agir — et bénéficier d'aides généreuses.
          </p>

          <h2>Toiture-terrasse : un cas particulier dans la rénovation thermique</h2>
          <p>
            Contrairement à une toiture inclinée avec combles, la toiture-terrasse cumule deux fonctions :
            assurer l'étanchéité à l'eau et garantir l'isolation thermique. Ces deux exigences doivent être
            traitées ensemble pour éviter tout risque de condensation ou de dégradation de la structure.
          </p>
          <p>
            On distingue trois grandes configurations :
          </p>
          <ul>
            <li>
              <strong>La toiture-terrasse inaccessible</strong> : recouverte de gravillons ou de bitume,
              elle n'est pas praticable. C'est la configuration la plus répandue dans les immeubles
              collectifs et certaines maisons individuelles des années 1970–1990.
            </li>
            <li>
              <strong>La toiture-terrasse accessible</strong> : espace de vie (terrasse, toit-jardin),
              elle supporte des charges importantes et nécessite une isolation compatible avec une
              protection lourde (dalles sur plots, lames de bois).
            </li>
            <li>
              <strong>La toiture-terrasse végétalisée</strong> : dotée d'un substrat planté, elle apporte
              une isolation supplémentaire naturelle tout en gérant les eaux pluviales.
            </li>
          </ul>

          <h2>Les techniques d'isolation d'une toiture-terrasse</h2>

          <h3>L'isolation sous protection lourde (procédé « traditonnel »)</h3>
          <p>
            L'isolant (polystyrène extrudé XPS, polyisocyanurate PIR ou laine minérale) est posé
            <strong> sous</strong> la membrane d'étanchéité. C'est la méthode la plus courante pour une
            toiture inaccessible. Elle nécessite la dépose complète de l'ancienne étanchéité, ce qui
            représente un coût plus élevé mais garantit une performance optimale.
          </p>

          <h3>L'isolation inversée</h3>
          <p>
            Ici, l'isolant (obligatoirement en XPS, imperméable à l'eau) est posé <strong>sur</strong> la
            membrane d'étanchéité existante. Avantage majeur : pas besoin de déposer l'étanchéité, ce qui
            réduit la durée et le coût du chantier. Cette technique convient aux toitures dont l'étanchéité
            est encore en bon état. Elle est particulièrement adaptée aux terrasses accessibles (dalles
            sur plots par-dessus l'isolant).
          </p>

          <h3>Le complexe toiture-terrasse végétalisée</h3>
          <p>
            La végétalisation extensive (sedums, mousses) ajoute 2 à 4 cm de substrat qui contribuent à
            l'isolation, tout en retenant les eaux de pluie. Elle est cumulable avec les autres techniques
            d'isolation et bénéficie souvent d'aides locales spécifiques dans les grandes agglomérations.
          </p>

          <h2>Performances attendues et épaisseurs recommandées</h2>
          <p>
            La réglementation thermique (RT 2012 pour les constructions neuves) impose une résistance
            thermique minimale de <strong>R ≥ 4 m².K/W</strong> en rénovation pour les toitures-terrasses,
            ce qui correspond à environ :
          </p>
          <ul>
            <li>15 à 20 cm de polystyrène extrudé (XPS, λ ≈ 0,033–0,036 W/m.K)</li>
            <li>12 à 16 cm de mousse polyuréthane projetée (λ ≈ 0,025 W/m.K)</li>
            <li>18 à 22 cm de laine de roche (λ ≈ 0,038–0,040 W/m.K)</li>
          </ul>
          <p>
            Viser <strong>R ≥ 6</strong> permet de maximiser l'économie d'énergie et d'atteindre les
            critères d'une rénovation d'ampleur, déclenchant les aides les plus importantes.
          </p>

          <h2>Quelles aides financières en 2026 ?</h2>

          <h3>MaPrimeRénov' dans le parcours rénovation d'ampleur</h3>
          <p>
            Depuis le 1er septembre 2026, l'isolation de toiture (y compris les toitures-terrasses)
            n'est plus finançable seule via le parcours « mono-geste » de MaPrimeRénov'. Elle doit
            s'inscrire dans un <strong>parcours de rénovation d'ampleur</strong> permettant un gain d'au
            moins deux classes DPE. Dans ce cadre, les aides peuvent couvrir jusqu'à{' '}
            <strong>70 % du coût des travaux</strong> pour les ménages aux revenus modestes.
          </p>
          <p>
            <strong>Exception :</strong> les propriétaires de logements classés F ou G conservent
            l'accès au parcours par geste jusqu'au 31 décembre 2027, leur permettant de financer
            l'isolation seule dans un premier temps.
          </p>
          <p>
            Pour évaluer votre classe DPE actuelle et estimer les gains attendus,{' '}
            <a href="/dpe-gratuit">utilisez notre simulateur DPE gratuit</a>.
          </p>

          <h3>Les primes CEE (Certificats d'Économies d'Énergie)</h3>
          <p>
            Les primes CEE couvrent l'isolation des toitures-terrasses via la fiche standardisée
            <em> BAR-EN-05</em>. Elles sont versées par les fournisseurs d'énergie (obligés CEE) et sont
            cumulables avec MaPrimeRénov'. Le montant dépend de la surface isolée, de la zone climatique
            et des revenus du ménage.
          </p>

          <h3>La TVA réduite à 5,5 %</h3>
          <p>
            Tous les travaux d'isolation réalisés dans un logement de plus de 2 ans bénéficient de la
            TVA réduite à <strong>5,5 %</strong> (au lieu de 20 %), à condition que l'artisan soit
            mandaté directement et que la facture soit établie à son nom.
          </p>

          <h3>L'éco-prêt à taux zéro (éco-PTZ)</h3>
          <p>
            L'<strong>éco-PTZ</strong> permet d'emprunter jusqu'à 50 000 € sans intérêts sur 20 ans pour
            financer des travaux d'amélioration énergétique. Il est accessible sans condition de ressources
            et peut financer l'isolation de la toiture-terrasse, seule ou en combinaison avec d'autres gestes.
          </p>

          <h2>Combien ça coûte, et quel retour sur investissement ?</h2>
          <p>
            Le coût d'une isolation de toiture-terrasse varie fortement selon la technique choisie,
            la surface et l'état de l'étanchéité existante :
          </p>
          <ul>
            <li><strong>Isolation inversée sur étanchéité saine</strong> : 60 à 100 € /m² (fourniture + pose)</li>
            <li><strong>Isolation sous protection lourde avec dépose et refonte de l'étanchéité</strong> : 120 à 200 € /m²</li>
            <li><strong>Complexe végétalisé extensif</strong> : 80 à 150 € /m² (selon substrat et végétaux)</li>
          </ul>
          <p>
            Après aides, le reste à charge peut descendre à <strong>30 à 50 € /m²</strong> pour un
            ménage aux revenus modestes. Le retour sur investissement est généralement atteint en 8 à
            12 ans grâce aux économies sur la facture de chauffage et de climatisation.
          </p>

          <h2>Associer l'isolation à un nouveau système de chauffage</h2>
          <p>
            L'isolation de la toiture-terrasse prend tout son sens combinée à un système de chauffage
            performant. Une <a href="/pompe-a-chaleur">pompe à chaleur air/eau</a>, par exemple, tire
            pleinement parti d'une enveloppe bien isolée : moins de pertes thermiques signifie un
            coefficient de performance (COP) plus élevé et des factures d'énergie encore réduites.
          </p>
          <p>
            Pour les logements en classe F ou G, cette combinaison (isolation + PAC) constitue souvent
            le cœur d'une rénovation d'ampleur permettant un saut de deux classes DPE ou plus, condition
            pour accéder aux aides les plus élevées de MaPrimeRénov'.
          </p>

          <h2>Les étapes clés d'un projet d'isolation de toiture-terrasse</h2>
          <ol>
            <li>
              <strong>Diagnostic de l'existant</strong> : état de l'étanchéité, présence d'humidité,
              charge admissible de la dalle. Un professionnel peut réaliser un test d'imperméabilité.
            </li>
            <li>
              <strong>Choix de la technique</strong> selon le budget, l'usage de la terrasse et l'état
              du complexe étanchéité existant.
            </li>
            <li>
              <strong>Sélection d'un artisan RGE</strong> qualifié « Isolation » : obligatoire pour
              bénéficier de MaPrimeRénov' et des primes CEE.
            </li>
            <li>
              <strong>Dépôt du dossier d'aides</strong> avant tout commencement des travaux : via
              France Rénov' (MaPrimeRénov') et votre fournisseur d'énergie (CEE). RenoHab, en tant
              qu'Accompagnateur Rénov' agréé, monte ces dossiers pour vous.
            </li>
            <li>
              <strong>Réalisation du chantier</strong>, suivi de la visite de contrôle post-travaux
              si requise pour valider les aides.
            </li>
          </ol>
        </article>

        {/* CTA RenoHab */}
        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Votre toiture-terrasse mérite une isolation performante</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            RenoHab analyse votre logement, sélectionne la technique adaptée et monte vos dossiers
            d'aides (MaPrimeRénov', CEE, éco-PTZ). Faites estimer vos travaux gratuitement.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/dpe-gratuit" className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all">
              Estimer mon DPE gratuitement
            </a>
            <a href="/pompe-a-chaleur" className="px-6 py-3 rounded-full border border-white/70 text-white font-semibold hover:bg-white/10 transition-all">
              Découvrir la pompe à chaleur
            </a>
          </div>
        </div>
      </main>

      <ArticleFooter />
    </div>
  );
}
