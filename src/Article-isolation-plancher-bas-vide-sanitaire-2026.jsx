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

const PUBLISHED = '2026-07-16';
const PATH = '/blog/isolation-plancher-bas-vide-sanitaire-2026';

export default function ArticleIsolationPlancherBas() {
  useSeo({
    title: "Isolation du plancher bas en 2026 — vide sanitaire, prix et aides | RenoHab",
    description:
      "Le plancher bas : le geste d'isolation le plus oublié. Techniques, prix au m², MaPrimeRénov', CEE et TVA à 5,5 % — tout ce qu'il faut savoir pour se lancer en 2026.",
    path: PATH,
    image: 'https://renohab.fr/blog/isolation-plancher-bas-vide-sanitaire-2026.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: "Isolation du plancher bas en 2026 — vide sanitaire, prix et aides",
      description:
        "Le plancher bas : le geste d'isolation le plus oublié. Techniques, prix au m², MaPrimeRénov', CEE et TVA à 5,5 % — tout ce qu'il faut savoir pour se lancer en 2026.",
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
      about: ['Isolation plancher bas', 'Vide sanitaire', 'MaPrimeRénov', 'Rénovation énergétique'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 16 juillet 2026 · Isolation &amp; aides
          </p>

          <h1>Isolation du plancher bas en 2026 — vide sanitaire, prix et aides</h1>

          <img
            src="/blog/isolation-plancher-bas-vide-sanitaire-2026.jpg"
            alt="Isolation d'un vide sanitaire sous une maison"
            className="w-full rounded-xl object-cover mb-8"
            style={{ maxHeight: '420px' }}
          />

          <p className="lead">
            Combles, murs, fenêtres : ces trois gestes d'isolation concentrent toute l'attention.
            Pourtant, le plancher bas — c'est-à-dire le sol de votre maison en contact avec un
            vide sanitaire, un sous-sol non chauffé ou la terre — représente jusqu'à{' '}
            <strong>10 à 15 % des déperditions thermiques</strong> d'un logement non rénové.
            C'est le geste oublié : peu visible, souvent jugé complexe, mais très rentable et
            bien aidé en 2026.
          </p>

          <h2>Pourquoi isoler le plancher bas ?</h2>
          <p>
            La chaleur monte naturellement, mais le sol froid absorbe lui aussi de l'énergie en
            permanence. Dans une maison avec vide sanitaire non isolé, les habitants ressentent
            des <strong>pieds froids</strong> en hiver, un inconfort qui pousse souvent à
            surchauffer. En isolant correctement ce plancher, on gagne :
          </p>
          <ul>
            <li>Un confort immédiat, toute l'année ;</li>
            <li>Une réduction de la consommation de chauffage estimée entre 5 et 10 % ;</li>
            <li>Un meilleur classement au <Link to="/dpe-gratuit">DPE</Link>, critère désormais central dans toute transaction immobilière ;</li>
            <li>Une protection renforcée contre l'humidité remontante et les nuisibles.</li>
          </ul>
          <p>
            Pour les logements déjà isolés en combles et en murs, le plancher bas est souvent le
            dernier maillon manquant d'une enveloppe performante.
          </p>

          <h2>Les trois techniques d'isolation du plancher bas</h2>

          <h3>1. Le soufflage (flocage) de laine minérale</h3>
          <p>
            C'est la technique la plus rapide et la moins coûteuse pour un vide sanitaire
            accessible. Un technicien projette de la ouate de cellulose ou de la laine de roche
            entre les solives du plancher, depuis l'intérieur du vide sanitaire. Elle convient
            parfaitement aux espaces dont la hauteur sous plancher dépasse 50 cm.
          </p>
          <ul>
            <li><strong>Prix indicatif :</strong> 20 à 35 €/m²</li>
            <li><strong>Avantage :</strong> bonne performance thermique, peu perturbant pour les habitants</li>
          </ul>

          <h3>2. Les panneaux rigides (polystyrène extrudé ou polyuréthane)</h3>
          <p>
            Des plaques sont fixées directement sous le plancher ou contre les murs du vide
            sanitaire. Cette technique offre une excellente résistance à l'humidité et des
            performances thermiques élevées pour une épaisseur réduite.
          </p>
          <ul>
            <li><strong>Prix indicatif :</strong> 30 à 55 €/m²</li>
            <li><strong>Avantage :</strong> idéal pour les vides sanitaires humides ou à faible hauteur</li>
          </ul>

          <h3>3. L'insufflation pour les sous-sols fermés</h3>
          <p>
            Lorsque le vide sanitaire n'est pas accessible depuis l'intérieur, des trous sont
            percés dans le plancher pour y insuffler un isolant en vrac. Cette solution évite
            tout déménagement ou perturbation du logement.
          </p>
          <ul>
            <li><strong>Prix indicatif :</strong> 25 à 45 €/m²</li>
            <li><strong>Avantage :</strong> sans travaux invasifs depuis les pièces de vie</li>
          </ul>

          <h2>Quelles aides en 2026 ?</h2>

          <h3>MaPrimeRénov' par geste</h3>
          <p>
            L'isolation du plancher bas reste éligible au <strong>parcours par geste</strong> de
            MaPrimeRénov' en 2026, à condition de confier les travaux à un professionnel certifié{' '}
            <strong>RGE</strong> et de déposer le dossier <em>avant</em> tout engagement de travaux.
            Le taux de prise en charge varie selon vos revenus (calculés d'après les plafonds ANAH) :
          </p>
          <ul>
            <li><strong>Ménages très modestes :</strong> jusqu'à 75 % du montant des travaux ;</li>
            <li><strong>Ménages modestes :</strong> jusqu'à 50 % ;</li>
            <li><strong>Ménages intermédiaires :</strong> jusqu'à 25 % ;</li>
            <li><strong>Ménages aisés :</strong> non éligibles au parcours par geste.</li>
          </ul>
          <p>
            Un plafond de dépenses éligibles s'applique par m² de surface isolée. Pour connaître
            votre montant personnalisé, utilisez le{' '}
            <a href="/#simulator">simulateur RenoHab</a> ou demandez une estimation gratuite.
          </p>

          <h3>Primes CEE (Certificats d'Économies d'Énergie)</h3>
          <p>
            En complément de MaPrimeRénov', les primes CEE sont versées directement par les
            fournisseurs d'énergie. Elles ne dépendent pas des revenus et peuvent représenter
            plusieurs centaines d'euros selon la surface et la résistance thermique atteinte. Elles
            sont cumulables avec MaPrimeRénov'.
          </p>

          <h3>TVA à 5,5 %</h3>
          <p>
            Tous les travaux d'isolation du plancher bas bénéficient automatiquement de la{' '}
            <strong>TVA réduite à 5,5 %</strong> (au lieu de 10 ou 20 %), tant sur la
            main-d'œuvre que sur les matériaux. Votre artisan RGE l'applique directement sur
            le devis.
          </p>

          <h3>Éco-PTZ (prêt à taux zéro)</h3>
          <p>
            Pour financer le reste à charge sans avance de trésorerie, l'Éco-PTZ permet
            d'emprunter jusqu'à <strong>50 000 €</strong> sans intérêts sur une durée allant
            jusqu'à 20 ans. L'isolation du plancher bas est un geste éligible, seul ou combiné
            à d'autres travaux de rénovation énergétique.
          </p>

          <h2>Quelle performance thermique exiger ?</h2>
          <p>
            Pour être éligible à MaPrimeRénov' et aux CEE, le plancher isolé doit atteindre une
            résistance thermique <strong>R ≥ 3 m².K/W</strong>. C'est le minimum réglementaire ;
            viser R ≥ 4 permet d'optimiser les économies sur la durée. Cette performance est
            facilement atteignable avec une épaisseur de 12 à 16 cm de laine minérale ou 8 à
            10 cm de polyuréthane.
          </p>

          <h2>Comment se lancer ?</h2>
          <p>
            La première étape est d'évaluer la configuration de votre vide sanitaire : hauteur
            disponible, niveau d'humidité, accessibilité. Un professionnel RGE viendra réaliser
            un diagnostic et vous remettre un devis incluant les aides déduites.
          </p>
          <p>
            En tant qu'<strong>Accompagnateur Rénov' agréé</strong>, RenoHab vous guide du
            diagnostic jusqu'au versement des aides : sélection de l'artisan RGE adapté,
            montage du dossier MaPrimeRénov', gestion des primes CEE. L'accompagnement est
            lui-même subventionné dans le cadre du{' '}
            <Link to="/pompe-a-chaleur">parcours rénovation d'ampleur</Link>.
          </p>
        </article>

        {/* CTA RenoHab */}
        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">
            Estimez vos aides pour l'isolation du plancher bas
          </h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            En quelques clics, obtenez une estimation personnalisée de vos aides et un devis
            gratuit avec un artisan RGE partenaire.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/#simulator"
              className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all"
            >
              Utiliser le simulateur
            </a>
            <Link
              to="/dpe-gratuit"
              className="px-6 py-3 rounded-full border border-white/70 text-white font-semibold hover:bg-white/10 transition-all"
            >
              Estimer mon DPE
            </Link>
          </div>
        </div>
      </main>

      <ArticleFooter />
    </div>
  );
}
