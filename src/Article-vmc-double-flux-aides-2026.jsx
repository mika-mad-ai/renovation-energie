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

const PUBLISHED = '2026-08-12';
const PATH = '/blog/vmc-double-flux-aides-2026';

export default function ArticleVmcDoubleFlux2026() {
  useSeo({
    title: "VMC double flux en 2026 : prix, aides et règle MaPrimeRénov' à connaître | RenoHab",
    description:
      "Depuis 2026, la VMC double flux n'est plus finançable en geste isolé par MaPrimeRénov'. Découvrez les montants d'aides, les prix d'installation et comment déclencher la subvention.",
    path: PATH,
    image: '/blog/vmc-double-flux-aides-2026.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: "VMC double flux en 2026 : prix, aides MaPrimeRénov', CEE et règle du geste couplé",
      description:
        "Depuis 2026, la VMC double flux n'est plus finançable en geste isolé par MaPrimeRénov'. Découvrez les montants d'aides, les prix d'installation et comment déclencher la subvention.",
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
      about: ['VMC double flux', 'Ventilation', 'MaPrimeRénov', 'Rénovation énergétique'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 12 août 2026 · Ventilation &amp; qualité de l'air
          </p>

          <h1>VMC double flux en 2026 : prix, aides MaPrimeRénov' et la règle du geste couplé</h1>

          <img
            src="/blog/vmc-double-flux-aides-2026.jpg"
            alt="Installation d'une VMC double flux dans une maison individuelle"
            className="w-full rounded-xl object-cover max-h-72 mb-8"
            loading="eager"
          />

          <p className="lead">
            Renouveler l'air intérieur sans perdre la chaleur : c'est la promesse de la VMC double
            flux. En 2026, une règle importante change pour MaPrimeRénov' — l'installation n'est
            plus subventionnable en geste isolé. Voici tout ce que vous devez savoir avant de
            démarrer votre projet.
          </p>

          <h2>Pourquoi la VMC double flux est-elle indispensable dans un logement rénové ?</h2>
          <p>
            Plus une maison est bien isolée, moins les infiltrations d'air naturelles renouvellent
            l'air intérieur. Sans ventilation mécanique efficace, la qualité de l'air se dégrade,
            l'humidité s'accumule et les moisissures apparaissent. La VMC double flux résout ce
            paradoxe : elle extrait l'air vicié des pièces humides (cuisine, salle de bain) tout
            en insufflant de l'air frais filtré dans les pièces de vie, <strong>et récupère
            75 à 85 % de la chaleur de l'air extrait</strong> avant de l'expulser grâce à un
            échangeur thermique.
          </p>
          <p>
            Résultat : l'air intérieur est renouvelé en permanence sans créer de courant d'air
            froid, ce qui réduit la facture de chauffage de{' '}
            <strong>20 à 30 % par rapport à une VMC simple flux</strong> dans un logement bien
            isolé.
          </p>

          <h2>Prix d'une VMC double flux en 2026</h2>
          <p>
            L'installation d'une VMC double flux dans une maison individuelle représente un
            investissement plus conséquent qu'une simple flux, en raison de la double gaine et du
            caisson central :
          </p>
          <ul>
            <li><strong>Fourniture + pose : entre 7 000 et 10 000 €</strong> pour une maison de 80 à 120 m²</li>
            <li>Coût du caisson seul : 1 500 à 4 000 € selon la gamme et la marque</li>
            <li>Main d'œuvre et réseau de gaines : 2 000 à 5 000 € selon la complexité du chantier</li>
          </ul>
          <p>
            Ces prix s'entendent hors aides. Avec le cumul MaPrimeRénov' + CEE + TVA à 5,5 %, le
            reste à charge peut descendre significativement pour les ménages éligibles.
          </p>

          <h2>La règle du geste couplé : le grand changement 2026</h2>
          <p>
            Depuis le <strong>1er janvier 2026</strong>, la VMC double flux <strong>ne peut plus
            être financée par MaPrimeRénov' en tant que geste isolé</strong>. Pour déclencher la
            subvention, son installation doit obligatoirement être couplée à{' '}
            <strong>au moins un geste d'isolation thermique</strong> parmi les suivants :
          </p>
          <ul>
            <li>Isolation des combles perdus ou aménagés</li>
            <li>Isolation des murs par l'extérieur ou l'intérieur (via le Parcours accompagné pour les murs)</li>
            <li>Isolation du plancher bas</li>
            <li>Remplacement des fenêtres et menuiseries</li>
          </ul>
          <p>
            Cette évolution traduit la logique de la rénovation globale : améliorer la ventilation
            n'a de sens que dans un bâtiment correctement isolé. Si vous envisagez uniquement la
            VMC sans travaux d'isolation, vous devrez vous tourner vers les Certificats d'Économies
            d'Énergie (CEE) comme principal dispositif de financement.
          </p>

          <h2>Montants des aides en 2026</h2>

          <h3>MaPrimeRénov' (geste couplé à l'isolation)</h3>
          <p>
            Le plafond de dépenses éligibles est fixé à <strong>6 000 € TTC</strong> (matériel +
            pose). Les montants d'aide sont les suivants selon vos revenus :
          </p>
          <ul>
            <li><strong>Revenus très modestes :</strong> jusqu'à 2 500 €</li>
            <li><strong>Revenus modestes :</strong> jusqu'à 2 000 €</li>
            <li><strong>Revenus intermédiaires :</strong> jusqu'à 1 500 €</li>
            <li><strong>Revenus supérieurs :</strong> aucune aide MaPrimeRénov' sur ce geste</li>
          </ul>
          <p>
            Pour connaître votre profil de revenus, vous pouvez utiliser le{' '}
            <a href="/#simulator">simulateur de notre page d'accueil</a> ou consulter les
            barèmes officiels de l'ANAH.
          </p>

          <h3>Prime CEE (Certificats d'Économies d'Énergie)</h3>
          <p>
            Les fournisseurs d'énergie versent une prime CEE pouvant aller de{' '}
            <strong>149 à 619 €</strong> selon l'organisme choisi. Cette prime est cumulable avec
            MaPrimeRénov' et la TVA réduite. Les CEE ne sont soumis à aucune condition de revenus.
          </p>

          <h3>TVA à 5,5 %</h3>
          <p>
            Les travaux d'installation d'une VMC dans un logement de plus de 2 ans bénéficient de
            la <a href="/blog/tva-5-5-renovation-energetique-2026">TVA au taux réduit de 5,5 %</a>{' '}
            (contre 20 % normalement). Cette réduction s'applique sur l'ensemble de la facture
            matériel + main d'œuvre, à condition que l'installateur soit un artisan RGE.
          </p>

          <h3>Éco-PTZ</h3>
          <p>
            L'<a href="/blog/eco-ptz-2026-pret-taux-zero-renovation">Éco-Prêt à Taux Zéro</a>{' '}
            vous permet de financer le reste à charge jusqu'à <strong>50 000 €</strong> sans
            intérêts sur 20 ans, sans condition de ressources. Il est cumulable avec toutes les
            aides ci-dessus.
          </p>

          <h2>Critères techniques pour être éligible aux aides</h2>
          <p>
            Pour que votre VMC double flux soit éligible à MaPrimeRénov', le système doit répondre
            à des exigences précises :
          </p>
          <ul>
            <li>
              <strong>Classe d'efficacité énergétique A minimum</strong> pour le caisson de
              ventilation
            </li>
            <li>
              <strong>Efficacité thermique de l'échangeur supérieure à 85 %</strong>, certifiée
              selon la norme NF EN 13141-7 (ou équivalent NF 205)
            </li>
            <li>
              Pose obligatoirement réalisée par un <strong>artisan RGE</strong> (Reconnu Garant de
              l'Environnement)
            </li>
            <li>
              Le logement doit être votre <strong>résidence principale</strong>, achevée depuis
              plus de 2 ans
            </li>
          </ul>

          <h2>Comment combiner VMC double flux et isolation pour maximiser vos aides ?</h2>
          <p>
            La stratégie la plus rentable consiste à combiner la VMC double flux avec l'isolation
            des combles perdus (toujours éligible en mono-geste MaPrimeRénov' jusqu'au 1er
            septembre 2026) ou une isolation des murs. Ce bouquet de travaux :
          </p>
          <ul>
            <li>Débloque MaPrimeRénov' pour les deux gestes</li>
            <li>Peut générer un gain de 1 à 2 classes DPE</li>
            <li>Réduit significativement la facture énergétique</li>
            <li>Améliore durablement le confort et la qualité de l'air</li>
          </ul>
          <p>
            Si vous visez un gain de 2 classes DPE ou plus, le{' '}
            <a href="/blog/renovation-ampleur-2026-accompagnateur-renov">Parcours accompagné
            MaPrimeRénov' Rénovation d'ampleur</a> peut financer jusqu'à 70 % des travaux sur un
            plafond de 40 000 € pour un gain de 3 classes et plus.
          </p>

          <h2>Par où commencer ?</h2>
          <p>
            Avant tout investissement, faites réaliser un{' '}
            <a href="/dpe-gratuit">audit énergétique ou un DPE</a> de votre logement. Ce document
            identifie les points de déperdition prioritaires et détermine la séquence de travaux
            optimale. C'est aussi la base du dossier d'aides pour MaPrimeRénov'.
          </p>
          <p>
            En tant qu'Accompagnateur Rénov' agréé, RenoHab coordonne l'ensemble de votre projet :
            diagnostic initial, sélection d'artisans RGE, montage complet des dossiers MaPrimeRénov',
            CEE et Éco-PTZ, et suivi de chantier.
          </p>
        </article>

        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Démarrez votre projet ventilation</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            Audit, plan de travaux couplé isolation + VMC, montage des dossiers d'aides : RenoHab
            s'occupe de tout pour maximiser vos subventions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/dpe-gratuit"
              className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all"
            >
              Estimer mon DPE
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
