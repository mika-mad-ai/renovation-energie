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
        <p className="mt-3 text-sm text-gray-500">
          <a href="/mentions-legales" className="hover:text-emerald-300 transition-colors">Mentions légales</a>
          <span className="mx-2 opacity-60">·</span>
          <a href="/confidentialite" className="hover:text-emerald-300 transition-colors">Politique de confidentialité</a>
        </p>
      </div>
    </footer>
  );
}

const PUBLISHED = '2026-10-10';
const PATH = '/blog/ponts-thermiques-detection-solutions-2026';

export default function ArticlePontsThermiques2026() {
  useSeo({
    title: "Ponts thermiques 2026 : comment les détecter et les traiter pour réduire vos factures | RenoHab",
    description:
      "Les ponts thermiques sont responsables de 5 à 30 % des déperditions de chaleur. Découvrez comment les repérer avec ou sans caméra thermique, et quelles solutions existent en rénovation.",
    path: PATH,
    image: '/blog/ponts-thermiques-detection-solutions-2026.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: "Ponts thermiques 2026 : comment les détecter et les traiter pour réduire vos factures",
      description:
        "Les ponts thermiques sont responsables de 5 à 30 % des déperditions de chaleur. Découvrez comment les repérer avec ou sans caméra thermique, et quelles solutions existent en rénovation.",
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
      about: ['Ponts thermiques', 'Isolation thermique', 'Rénovation énergétique'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 10 octobre 2026 · Isolation
          </p>

          <h1>Ponts thermiques 2026 : comment les détecter et les traiter pour réduire vos factures</h1>

          <img
            src="/blog/ponts-thermiques-detection-solutions-2026.jpg"
            alt="Thermographie infrarouge d'une maison révélant des ponts thermiques sur les murs et fenêtres"
            className="w-full rounded-xl my-6"
            loading="lazy"
          />

          <p className="lead">
            Vous avez isolé votre maison, mais la facture de chauffage reste élevée ? Les ponts
            thermiques sont souvent les coupables silencieux. Ces zones de faiblesse dans l'enveloppe
            du bâtiment laissent fuir la chaleur et peuvent représenter jusqu'à <strong>30 % des
            déperditions totales</strong> d'un logement. Voici comment les identifier et les traiter,
            pour un confort accru et des économies durables.
          </p>

          <h2>Qu'est-ce qu'un pont thermique ?</h2>
          <p>
            Un pont thermique est un point ou une zone de l'enveloppe d'un bâtiment où la résistance
            thermique est localement plus faible qu'ailleurs. La chaleur s'échappe alors
            préférentiellement par ce chemin de moindre résistance — exactement comme l'eau dans un
            tuyau percé.
          </p>
          <p>
            On distingue deux grandes familles :
          </p>
          <ul>
            <li>
              <strong>Les ponts thermiques de structure (ou géométriques)</strong> : ils apparaissent
              aux angles de murs, aux jonctions plancher/mur, aux rebords de balcons ou aux nez de
              dalles. La géométrie du bâtiment crée une surface d'échange plus grande à l'extérieur
              qu'à l'intérieur, ce qui favorise la perte de chaleur.
            </li>
            <li>
              <strong>Les ponts thermiques de matériaux</strong> : ils surviennent lorsqu'un élément
              conducteur traverses la couche isolante — une poutre métallique, un linteau en béton,
              des agrafes de fixation ou des vis en acier au travers d'un isolant.
            </li>
          </ul>
          <p>
            En pratique, les principales zones à risque dans une maison individuelle sont : les
            jonctions mur/plancher bas, les tableaux de fenêtres, les nez de dalles de balcon, les
            angles de murs extérieurs et les liaisons mur/toit.
          </p>

          <h2>Pourquoi les ponts thermiques aggravent votre DPE</h2>
          <p>
            Depuis la réforme du calcul DPE entrée en vigueur en janvier 2026, les ponts thermiques
            sont pris en compte de façon plus précise dans le logiciel de diagnostic. Un audit
            énergétique sérieux les intègre dans le bilan global via le coefficient linéique Ψ
            (psi), exprimé en W/(m·K).
          </p>
          <p>
            Conséquence directe : un logement avec de nombreux ponts thermiques non traités peut
            se voir attribuer un DPE dégradé d'une classe par rapport à un logement équivalent
            correctement isolé. Or, depuis le 1er janvier 2025, les logements <strong>classés G sont
            interdits à la location</strong>, et les F le seront en 2028.{' '}
            <a href="/dpe-gratuit">Estimez votre classe DPE gratuitement</a> pour savoir où vous
            en êtes.
          </p>

          <h2>Comment détecter les ponts thermiques ?</h2>

          <h3>1. La détection visuelle — gratuit et immédiat</h3>
          <p>
            Certains indices ne trompent pas :
          </p>
          <ul>
            <li>Des <strong>traces de condensation ou de moisissures</strong> sur un angle de mur intérieur, signe que la surface est froide en permanence.</li>
            <li>Des <strong>auréoles sombres</strong> sur les plinthes ou les plafonds, dues à la poussière qui se dépose sur les zones froides.</li>
            <li>Un <strong>mur froid au toucher</strong> en hiver à certains endroits, même avec le chauffage en marche.</li>
          </ul>
          <p>
            Ces symptômes suffisent souvent à localiser les zones problématiques sans matériel
            spécifique.
          </p>

          <h3>2. La thermographie infrarouge — la méthode de référence</h3>
          <p>
            Une caméra thermique révèle en couleurs la carte des températures de surface de vos murs.
            Les zones bleues/violettes (froides) indiquent les fuites thermiques. Pour être fiable,
            la thermographie requiert :
          </p>
          <ul>
            <li>Un écart de température d'au moins 10 °C entre intérieur et extérieur ;</li>
            <li>Une absence de rayonnement solaire direct sur les façades dans les heures précédentes ;</li>
            <li>Un logement stabilisé thermiquement (chauffage en marche depuis plusieurs heures).</li>
          </ul>
          <p>
            L'automne et l'hiver sont donc les saisons idéales. Comptez <strong>150 à 400 €</strong>{' '}
            pour une thermographie réalisée par un professionnel certifié. Certains bureaux d'études
            thermiques proposent ce service dans le cadre d'un{' '}
            <a href="/blog/audit-energetique-obligatoire-vente-2026">audit énergétique complet</a>.
          </p>

          <h2>Quelles solutions pour traiter les ponts thermiques ?</h2>

          <h3>L'isolation par l'extérieur (ITE) : la solution la plus efficace</h3>
          <p>
            L'<strong>isolation thermique par l'extérieur</strong> est unanimement reconnue comme la
            méthode la plus efficace contre les ponts thermiques. En enveloppant le bâtiment dans une
            couche continue d'isolant, elle supprime pratiquement tous les ponts thermiques de
            structure : angles, jonctions, tableaux de fenêtres…
          </p>
          <p>
            L'ITE est éligible à <strong>MaPrimeRénov'</strong>, aux <strong>CEE</strong> et à la{' '}
            <strong>TVA réduite à 5,5 %</strong>, à condition de faire appel à un{' '}
            <a href="/blog/choisir-artisan-rge-2026">artisan RGE</a>. Son coût varie de 100 à
            200 €/m² de façade selon le système (enduit, bardage) et la surface traitée.
          </p>

          <h3>L'isolation par l'intérieur (ITI) avec rupteurs de ponts thermiques</h3>
          <p>
            Lorsque l'ITE est impossible — façades classées, mitoyenneté, règles d'urbanisme
            strictes — l'isolation par l'intérieur reste une alternative. Pour en maximiser
            l'efficacité, il faut intégrer des <strong>rupteurs de ponts thermiques</strong> au
            niveau des planchers intermédiaires et des nez de dalles. Ces dispositifs
            interrompent le chemin conducteur tout en préservant la résistance mécanique de la
            structure.
          </p>
          <p>
            Des retours d'isolant sur 50 cm minimum en périphérie des tableaux de fenêtres
            (technique du « manchonnage ») réduisent également les déperditions linéiques
            de façon significative.
          </p>

          <h3>Le calfeutrage des menuiseries</h3>
          <p>
            Les fenêtres sont un point faible majeur. Avant d'envisager un remplacement complet,
            vérifiez l'état des joints de périphérie et du vitrage. Des joints neufs, un mastic
            d'étanchéité entre le châssis et le mur, ou l'ajout d'un film isolant sur un
            simple vitrage peuvent corriger des micro-ponts thermiques à moindre coût.
          </p>
          <p>
            Si le vitrage est vétuste, le{' '}
            <a href="/blog/fenetres-remplacement-aides-2026">remplacement des menuiseries</a>{' '}
            reste la solution pérenne, avec des aides CEE disponibles.
          </p>

          <h2>Ponts thermiques et rénovation d'ampleur : un enjeu clé en 2026</h2>
          <p>
            Dans le cadre d'une <strong>rénovation d'ampleur</strong> financée par MaPrimeRénov',
            le traitement des ponts thermiques est désormais intégré dans les objectifs de
            performance à atteindre. Un logement qui bénéficie d'une isolation et d'un nouveau
            système de chauffage sans traitement des ponts thermiques ne pourra pas atteindre le
            saut de deux classes DPE requis pour déclencher les aides les plus généreuses (jusqu'à
            70 % du montant des travaux pour les foyers très modestes).
          </p>
          <p>
            En tant qu'Accompagnateur Rénov' agréé, RenoHab réalise le bilan thermique complet de
            votre logement — ponts thermiques inclus — et monte un dossier d'aides optimisé.{' '}
            Utilisez notre <a href="/#simulateur">simulateur d'aides</a> pour une première
            estimation en quelques clics.
          </p>

          <h2>Ce qu'il faut retenir</h2>
          <ul>
            <li>Les ponts thermiques représentent <strong>5 à 30 %</strong> des déperditions de chaleur selon l'état du bâti.</li>
            <li>Ils se détectent visuellement (moisissures, condensation) ou par thermographie infrarouge (150–400 €).</li>
            <li>L'ITE est la solution la plus efficace ; l'ITI avec rupteurs est l'alternative en cas d'impossibilité d'ITE.</li>
            <li>Les traiter améliore le DPE et conditionne l'accès aux aides de la rénovation d'ampleur en 2026.</li>
            <li>Un Accompagnateur Rénov' les intègre dans le plan de travaux global pour maximiser le gain énergétique.</li>
          </ul>
        </article>

        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Faites diagnostiquer vos ponts thermiques</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            RenoHab identifie vos zones de déperdition, chiffre les économies réalisables et monte
            votre dossier d'aides (MaPrimeRénov', CEE, TVA 5,5 %).
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/dpe-gratuit" className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all">
              Estimer mon DPE
            </a>
            <a href="/pompe-a-chaleur" className="px-6 py-3 rounded-full border border-white/70 text-white font-semibold hover:bg-white/10 transition-all">
              Étudier une pompe à chaleur
            </a>
          </div>
        </div>
      </main>

      <ArticleFooter />
    </div>
  );
}
