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

const PUBLISHED = '2026-08-18';
const PATH = '/blog/isolation-plancher-bas-vide-sanitaire-2026';

export default function ArticleIsolationPlancherBas2026() {
  useSeo({
    title: "Isolation plancher bas et vide sanitaire en 2026 : aides, prix et démarches | RenoHab",
    description:
      "Isolation du plancher bas (sous-sol ou vide sanitaire) : éligible MaPrimeRénov' par geste et CEE en 2026. Prix, conditions techniques et démarches pour réduire sa facture.",
    path: PATH,
    image: '/blog/isolation-plancher-bas-vide-sanitaire-2026.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline:
        "Isolation plancher bas et vide sanitaire en 2026 : aides, prix et démarches",
      description:
        "Isolation du plancher bas (sous-sol ou vide sanitaire) : éligible MaPrimeRénov' par geste et CEE en 2026. Prix, conditions techniques et démarches pour réduire sa facture.",
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
      about: ['Isolation plancher bas', 'Vide sanitaire', 'MaPrimeRénov', 'CEE', 'Rénovation énergétique'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 18 août 2026 · Isolation
          </p>

          <h1>Isolation plancher bas et vide sanitaire en 2026 : aides, prix et démarches</h1>

          <img
            src="/blog/isolation-plancher-bas-vide-sanitaire-2026.jpg"
            alt="Isolation du plancher bas sous une maison — vide sanitaire"
            className="w-full rounded-xl object-cover h-64 md:h-80 mb-8"
            loading="eager"
          />

          <p className="lead">
            L'isolation du plancher bas reste en 2026 l'un des gestes les plus rentables et les
            moins visibles de la rénovation énergétique. Souvent oublié au profit des combles ou
            des murs, le sol représente pourtant 7 à 10 % des déperditions thermiques d'une
            maison. Bonne nouvelle : ce geste est <strong>toujours éligible au parcours par geste
            de MaPrimeRénov'</strong> et aux Certificats d'Économies d'Énergie (CEE) — même
            après la réforme de janvier 2026 qui a exclu l'isolation des murs (ITE/ITI) de ce
            parcours.
          </p>

          <h2>Pourquoi isoler le plancher bas ?</h2>
          <p>
            Le plancher bas désigne la dalle ou le plancher situé au-dessus d'un vide sanitaire,
            d'un sous-sol non chauffé ou d'un passage ouvert. En hiver, l'air froid stagne sous
            la maison et refroidit le sol par contact direct : résultat, les pieds ont froid, le
            chauffage compense en surconsommant.
          </p>
          <p>
            Isoler cette surface présente plusieurs avantages concrets :
          </p>
          <ul>
            <li>Réduction des déperditions thermiques par le sol (7 à 10 % des pertes totales).</li>
            <li>Suppression des ponts thermiques entre dalle et murs extérieurs.</li>
            <li>Amélioration du confort au quotidien : sol plus chaud, moins de courants d'air.</li>
            <li>Gain possible d'une <strong>demi-classe à une classe DPE</strong>, ce qui peut sortir un logement du statut de passoire thermique.</li>
          </ul>

          <h2>Les techniques d'isolation du plancher bas</h2>

          <h3>Par soufflage ou projection (accès par le dessous)</h3>
          <p>
            Lorsque le vide sanitaire est accessible (hauteur minimale de 40 à 50 cm selon les
            matériaux), un artisan peut projeter ou souffler de la laine minérale, de la ouate de
            cellulose ou de la mousse polyuréthane directement contre la face inférieure du
            plancher. C'est la technique la moins coûteuse : <strong>20 à 35 €/m²</strong> pose
            comprise.
          </p>

          <h3>Par panneaux rigides (par le dessus ou le dessous)</h3>
          <p>
            Des panneaux de polystyrène expansé (PSE), de polyuréthane ou de laine de roche sont
            fixés sous la dalle ou posés sur celle-ci avant la chape. Cette méthode est souvent
            choisie lors d'une rénovation complète du sol intérieur. Compter <strong>30 à
            50 €/m²</strong> selon le matériau et l'épaisseur.
          </p>

          <h3>Condition technique pour les aides : R ≥ 3 m².K/W</h3>
          <p>
            Quelle que soit la technique retenue, la résistance thermique de l'isolant doit
            atteindre <strong>au minimum R = 3 m².K/W</strong> pour ouvrir droit aux aides
            (CEE et MaPrimeRénov'). En pratique, 10 cm de polyuréthane ou 14 cm de laine de
            roche suffisent à atteindre ce seuil.
          </p>

          <h2>Les aides disponibles en 2026</h2>

          <h3>MaPrimeRénov' — parcours par geste</h3>
          <p>
            L'isolation du plancher bas reste éligible au <strong>parcours par geste</strong> de
            MaPrimeRénov', contrairement à l'isolation des murs par l'extérieur (ITE) ou par
            l'intérieur (ITI), exclues de ce parcours depuis le 1er janvier 2026. Le montant de
            la prime dépend de la catégorie de revenus du foyer :
          </p>
          <ul>
            <li><strong>Ménages très modestes (profil Bleu)</strong> : jusqu'à 75 % du coût des travaux, plafonné à 15 €/m².</li>
            <li><strong>Ménages modestes (profil Jaune)</strong> : jusqu'à 50 %, plafonné à 12 €/m².</li>
            <li><strong>Ménages intermédiaires (profil Violet)</strong> : jusqu'à 25 %, plafonné à 8 €/m².</li>
            <li><strong>Ménages aisés (profil Rose)</strong> : pas de MaPrimeRénov' pour ce geste.</li>
          </ul>
          <p>
            Le plafond cumulé du parcours par geste est de <strong>20 000 € sur 5 ans</strong>,
            tous gestes confondus. Les travaux doivent obligatoirement être réalisés par un
            artisan certifié <strong>RGE (Reconnu Garant de l'Environnement)</strong>.
          </p>

          <h3>Certificats d'Économies d'Énergie (CEE) — 6e période</h3>
          <p>
            Les primes CEE de la 6e période (2026–2030), revalorisées de 27 % par rapport à la
            période précédente, s'appliquent à l'isolation du plancher bas sans condition de
            revenus. Le montant indicatif est de <strong>4 à 6 €/m²</strong> selon la zone
            climatique et l'obligataire choisi. Ces primes sont cumulables avec MaPrimeRénov'.
          </p>

          <h3>TVA à 5,5 %</h3>
          <p>
            Les travaux d'isolation du plancher bas dans une résidence principale de plus de 2 ans
            bénéficient automatiquement de la <a href="/blog/tva-5-5-renovation-energetique-2026">TVA réduite à 5,5 %</a> (au lieu de 10 % ou 20 %), ce qui représente
            une économie supplémentaire de 4,5 points sur la facture matériaux et main-d'œuvre.
          </p>

          <h3>Éco-PTZ et aides locales</h3>
          <p>
            L'isolation du plancher bas est également éligible à l'Éco-Prêt à Taux Zéro (Éco-PTZ)
            pour financer le reste à charge — jusqu'à 50 000 € sur 20 ans sans intérêts. Certaines
            régions et collectivités complètent ces aides nationales ; renseignez-vous auprès de
            votre conseiller France Rénov'.
          </p>

          <h2>Exemple de financement pour 80 m² de plancher bas</h2>
          <p>
            Pour un ménage modeste (profil Jaune) isolant 80 m² de plancher bas par soufflage :
          </p>
          <ul>
            <li>Coût brut des travaux : environ <strong>2 400 €</strong> (30 €/m²).</li>
            <li>MaPrimeRénov' (50 %, plafonné à 12 €/m²) : − 960 €.</li>
            <li>Prime CEE (5 €/m²) : − 400 €.</li>
            <li>TVA à 5,5 % (économie vs 10 %) : − 108 €.</li>
            <li><strong>Reste à charge estimé : environ 932 €</strong>, soit moins de 40 % du coût initial.</li>
          </ul>
          <p>
            Ces chiffres sont indicatifs ; le montant exact dépend des devis, de la zone
            climatique et de la situation fiscale du foyer.
          </p>

          <h2>Comment lancer son projet d'isolation plancher bas ?</h2>
          <ol>
            <li>
              <strong>Évaluer la faisabilité :</strong> vérifier la hauteur et l'accessibilité du
              vide sanitaire, repérer la présence d'humidité (traitement préalable obligatoire si
              nécessaire).
            </li>
            <li>
              <strong>Faire réaliser un <a href="/dpe-gratuit">DPE</a> si ce n'est pas fait :</strong> il
              permettra de mesurer le gain énergétique attendu et de prioriser les gestes.
            </li>
            <li>
              <strong>Obtenir au moins 3 devis</strong> d'artisans RGE et comparer les matériaux,
              épaisseurs et valeurs R garanties.
            </li>
            <li>
              <strong>Déposer la demande de prime</strong> sur le portail MaPrimeRénov' (maprimerenov.gouv.fr)
              <em>avant le début des travaux</em> ; la prime CEE est, elle, négociée directement
              avec l'artisan ou un agrégateur.
            </li>
            <li>
              <strong>Combiner avec d'autres gestes</strong> pour maximiser la performance globale :
              l'isolation des combles perdus et une <a href="/pompe-a-chaleur">pompe à chaleur</a> sont
              souvent les priorités complémentaires recommandées.
            </li>
          </ol>

          <h2>Isolation plancher bas et rénovation d'ampleur : un geste à ne pas négliger</h2>
          <p>
            Dans le cadre d'une <strong>rénovation globale</strong> visant un saut de deux classes
            DPE ou plus, l'isolation du plancher bas s'inscrit naturellement dans le programme de
            travaux aux côtés des combles, des murs et du système de chauffage. En tant
            qu'Accompagnateur Rénov' agréé, RenoHab vous aide à séquencer les chantiers dans le
            bon ordre, à monter les dossiers d'aides et à coordonner les artisans RGE pour un
            résultat optimal — et finançable.
          </p>
          <p>
            Utilisez notre <a href="/#simulator">simulateur d'aides</a> pour estimer en quelques
            minutes ce que l'État peut financer dans votre situation.
          </p>
        </article>

        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Simulez vos aides isolation en 2 minutes</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            MaPrimeRénov', CEE, TVA réduite : RenoHab calcule votre reste à charge et monte votre dossier de A à Z.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/#simulator" className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all">
              Simuler mes aides
            </a>
            <a href="/dpe-gratuit" className="px-6 py-3 rounded-full border border-white/70 text-white font-semibold hover:bg-white/10 transition-all">
              Estimer mon DPE
            </a>
          </div>
        </div>
      </main>

      <ArticleFooter />
    </div>
  );
}
