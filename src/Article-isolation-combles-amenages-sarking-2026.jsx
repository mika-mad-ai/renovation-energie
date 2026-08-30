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

const PUBLISHED = '2026-08-30';
const PATH = '/blog/isolation-combles-amenages-sarking-2026';

export default function ArticleIsolationComblesAmenagesSarking2026() {
  useSeo({
    title: "Isolation des combles aménagés 2026 : Sarking, prix et aides MaPrimeRénov' | RenoHab",
    description:
      "Vous avez des combles aménagés ? Découvrez la technique Sarking, ses alternatives, les prix 2026 et toutes les aides disponibles (MaPrimeRénov', CEE, TVA 5,5 %).",
    path: PATH,
    image: '/blog/isolation-combles-amenages-sarking-2026.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: "Isolation des combles aménagés en 2026 : Sarking, techniques et aides financières",
      description:
        "Combles aménagés : différences avec les combles perdus, technique Sarking, isolation par l'intérieur, prix 2026 et aides MaPrimeRénov', CEE et TVA réduite.",
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
      about: ['Isolation combles aménagés', 'Sarking', 'MaPrimeRénov 2026', 'Rénovation énergétique'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 30 août 2026 · Isolation &amp; travaux
          </p>

          <h1>Isolation des combles aménagés en 2026 : Sarking, techniques et aides financières</h1>

          <img
            src="/blog/isolation-combles-amenages-sarking-2026.jpg"
            alt="Isolation de toiture en pente par la technique Sarking sur des combles aménagés"
            className="w-full rounded-xl shadow-card my-6"
            loading="lazy"
          />

          <p className="lead">
            Vous habitez sous les toits ? Les combles aménagés — ces espaces de vie directement sous
            la charpente — sont parmi les zones les plus difficiles à isoler, mais aussi les plus
            rentables. La technique <strong>Sarking</strong>, alternative à l'isolation par l'intérieur,
            offre d'excellentes performances sans empiéter sur votre surface habitable. Tour d'horizon
            des solutions et des aides 2026.
          </p>

          <h2>Combles aménagés vs combles perdus : quelle différence ?</h2>
          <p>
            La confusion est fréquente, mais la distinction est essentielle pour choisir la bonne
            technique d'isolation :
          </p>
          <ul>
            <li>
              <strong>Combles perdus</strong> : l'espace sous la toiture est inaccessible ou non
              habitable. On isole le <em>plancher</em> de cet espace (au-dessus des pièces). C'est
              simple et peu coûteux (insufflation ou soufflage de ouate de cellulose ou laine minérale).
            </li>
            <li>
              <strong>Combles aménagés</strong> : cet espace constitue une ou plusieurs pièces de vie
              (chambre, bureau, salle de jeux). On doit alors isoler <em>la toiture elle-même</em> —
              les rampants et les parties horizontales — ce qui est techniquement plus complexe.
            </li>
          </ul>
          <p>
            Selon l'ADEME, 25 à 30 % des déperditions thermiques d'un logement se produisent par le
            toit. Dans une maison avec des combles aménagés mal isolés, les habitants souffrent de
            froid en hiver et de surchauffe en été.
          </p>

          <h2>Les deux grandes techniques pour les combles aménagés</h2>

          <h3>1. L'isolation par l'extérieur : la technique Sarking</h3>
          <p>
            Le <strong>Sarking</strong> consiste à poser des panneaux isolants rigides directement
            sur la charpente, sous ou à la place de la couverture (tuiles, ardoises). C'est une
            solution par l'extérieur (ITE de toiture) qui présente plusieurs avantages majeurs :
          </p>
          <ul>
            <li>
              <strong>Aucune perte de surface habitable</strong> : toute l'isolation est posée côté
              extérieur, les chevrons restent apparents à l'intérieur si on le souhaite.
            </li>
            <li>
              <strong>Traitement des ponts thermiques</strong> : les chevrons ne créent plus de
              ruptures dans l'isolant, ce qui améliore considérablement l'efficacité.
            </li>
            <li>
              <strong>Idéal lors d'une réfection de toiture</strong> : si la couverture est à
              refaire, le Sarking est souvent l'occasion d'isoler en une seule intervention.
            </li>
            <li>
              <strong>Performances thermiques élevées</strong> : résistance thermique R atteignant
              facilement 7 à 8 m².K/W avec des panneaux de polyisocyanurate (PIR) ou de laine de
              bois.
            </li>
          </ul>
          <p>
            <strong>Inconvénient</strong> : le Sarking est plus coûteux qu'une isolation par l'intérieur
            (les travaux impliquent le dépose et la repose de la couverture), et nécessite un artisan
            couvreur-zingueur qualifié <strong>RGE</strong>.
          </p>
          <p>
            <strong>Prix indicatif</strong> : entre 150 et 300 €/m² fourniture et pose incluses, selon
            le type d'isolant, la pente du toit et la région. Pour 80 m² de surface de comble, le
            budget varie typiquement entre 12 000 et 24 000 € avant aides.
          </p>

          <h3>2. L'isolation par l'intérieur (entre et sous chevrons)</h3>
          <p>
            Plus accessible financièrement, cette technique consiste à poser un isolant souple
            (laine de verre, laine de roche, ouate de cellulose) entre les chevrons, puis une
            deuxième couche croisée sous les chevrons pour supprimer les ponts thermiques. Un pare-vapeur
            est indispensable pour éviter la condensation dans la structure.
          </p>
          <ul>
            <li>
              <strong>Avantage</strong> : travaux réalisables depuis l'intérieur, sans toucher à la
              couverture. Moins coûteux.
            </li>
            <li>
              <strong>Inconvénient</strong> : légère perte de surface (5 à 10 cm de hauteur sous
              comble selon l'épaisseur d'isolant) et ponts thermiques plus difficiles à éliminer
              complètement.
            </li>
          </ul>
          <p>
            <strong>Prix indicatif</strong> : entre 60 et 150 €/m² pour une isolation complète
            entre et sous chevrons, selon les matériaux et l'accessibilité du chantier.
          </p>

          <h2>Quelles aides financières en 2026 ?</h2>
          <p>
            L'isolation des combles aménagés est un <strong>geste d'isolation de toiture</strong>
            éligible à plusieurs dispositifs cumulables :
          </p>

          <h3>MaPrimeRénov'</h3>
          <p>
            Pour les gestes mono (travaux isolés), MaPrimeRénov' subventionne l'isolation des
            rampants de toiture et des plafonds de combles aménagés à condition que la résistance
            thermique atteigne au minimum <strong>R ≥ 6 m².K/W</strong> et que les travaux soient
            réalisés par un artisan certifié <strong>RGE (Reconnu Garant de l'Environnement)</strong>.
            Le montant de la prime varie selon vos revenus (ménages modestes à très modestes
            bénéficient des taux les plus élevés). Consultez le simulateur France Rénov' ou
            contactez un <a href="/">Accompagnateur Rénov'</a> agréé pour un chiffrage précis.
          </p>

          <h3>CEE — Certificats d'Économies d'Énergie</h3>
          <p>
            Les primes CEE sont versées par les fournisseurs d'énergie (EDF, Total Energies, etc.)
            pour les travaux d'isolation de toiture en pente. Elles s'ajoutent à MaPrimeRénov' et
            peuvent représenter plusieurs centaines d'euros selon la surface isolée.
          </p>

          <h3>TVA à 5,5 %</h3>
          <p>
            Tous les travaux d'isolation sur un logement de plus de 2 ans bénéficient automatiquement
            de la <a href="/blog/tva-5-5-renovation-energetique-2026">TVA réduite à 5,5 %</a> (au
            lieu de 20 %) dès lors qu'ils sont réalisés par un professionnel qualifié. Cette réduction
            s'applique aussi bien sur la main-d'œuvre que sur les matériaux.
          </p>

          <h3>Éco-PTZ</h3>
          <p>
            L'isolation des combles aménagés est également éligible à l'Éco-Prêt à Taux Zéro
            (Éco-PTZ), qui permet d'emprunter jusqu'à 50 000 € sans intérêts pour financer des
            travaux de rénovation énergétique.
          </p>

          <h2>Quel matériau isolant choisir ?</h2>
          <p>
            Le choix de l'isolant dépend de la technique retenue et de vos priorités :
          </p>
          <ul>
            <li>
              <strong>Laine de roche / laine de verre</strong> : excellent rapport qualité-prix,
              bonnes performances thermiques et acoustiques, bonne résistance au feu. Incontournable
              pour l'isolation entre chevrons.
            </li>
            <li>
              <strong>Ouate de cellulose</strong> : isolant biosourcé fabriqué à partir de papier
              recyclé, très bon déphasage thermique (confort été), idéal en projection humide entre
              chevrons.
            </li>
            <li>
              <strong>Panneaux PIR (polyisocyanurate)</strong> : le plus performant au m², idéal pour
              le Sarking où l'épaisseur disponible est limitée. Résistance thermique élevée pour une
              faible épaisseur.
            </li>
            <li>
              <strong>Laine de bois</strong> : biosourcée, excellente inertie thermique (été),
              compatible Sarking. Prix plus élevé mais bilan carbone avantageux.
            </li>
          </ul>

          <h2>Les points de vigilance</h2>
          <ul>
            <li>
              <strong>Pare-vapeur ou frein-vapeur</strong> : indispensable côté intérieur pour éviter
              la condensation dans l'épaisseur de l'isolant, surtout pour les isolants minéraux.
            </li>
            <li>
              <strong>Ventilation de la lame d'air</strong> : en Sarking, une lame d'air ventilée
              entre l'isolant et la couverture est souvent nécessaire pour protéger la charpente.
            </li>
            <li>
              <strong>Traitement des châssis de toit (Velux)</strong> : les fenêtres de toit créent
              des ponts thermiques — prévoir des coffrets isolants spécifiques.
            </li>
            <li>
              <strong>Accessibilité</strong> : la pente du toit, la présence d'éléments architecturaux
              (chiens-assis, lucarnes) et l'état de la charpente influent fortement sur le coût.
            </li>
          </ul>

          <h2>Par où commencer ?</h2>
          <p>
            Avant de vous lancer, deux étapes sont essentielles :
          </p>
          <ol>
            <li>
              <strong>Réaliser un <a href="/dpe-gratuit">diagnostic de performance énergétique (DPE)</a></strong> :
              il identifie les déperditions de votre logement et conditionne l'accès aux aides.
            </li>
            <li>
              <strong>Obtenir des devis d'artisans RGE</strong> : pour être éligible à MaPrimeRénov'
              et aux CEE, l'entreprise doit impérativement posséder la certification RGE pour la
              catégorie de travaux concernée (isolation des toitures en pente).
            </li>
          </ol>
          <p>
            En tant qu'<strong>Accompagnateur Rénov' agréé</strong>, RenoHab vous guide dans le choix
            de la technique, monte vos dossiers d'aides et coordonne des artisans RGE de confiance.
            Vous pouvez aussi utiliser notre{' '}
            <a href="/#simulator">simulateur d'aides</a> pour estimer rapidement le montant des
            subventions auxquelles vous avez droit.
          </p>
          <p>
            Bien isolés, vos combles aménagés deviendront l'une des pièces les plus confortables de
            votre maison — et votre facture de chauffage s'en ressentira. Un logement mieux classé
            au DPE, c'est aussi une{' '}
            <a href="/pompe-a-chaleur">pompe à chaleur</a> plus efficace : les deux travaux sont
            complémentaires et souvent réalisés dans le cadre d'une rénovation d'ampleur.
          </p>
        </article>

        {/* CTA RenoHab */}
        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">
            Estimez vos aides pour l'isolation de vos combles
          </h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            MaPrimeRénov', CEE, Éco-PTZ, TVA réduite : RenoHab calcule vos droits et monte vos
            dossiers. Service gratuit, sans engagement.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/dpe-gratuit"
              className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all"
            >
              Obtenir mon DPE
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
