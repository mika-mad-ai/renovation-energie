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

const PUBLISHED = '2026-08-11';
const PATH = '/blog/isolation-murs-exterieure-ite-2026';

export default function ArticleIsolationMursExterieure2026() {
  useSeo({
    title: "Isolation des murs par l'extérieur (ITE) en 2026 : prix, aides et démarches | RenoHab",
    description:
      "Tout savoir sur l'isolation thermique par l'extérieur (ITE) en 2026 : coût au m², aides MaPrimeRénov' et CEE disponibles, conditions d'éligibilité et étapes du chantier.",
    path: PATH,
    image: '/blog/isolation-murs-exterieure-ite-2026.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: "Isolation des murs par l'extérieur (ITE) en 2026 : prix, aides et démarches",
      description:
        "Tout savoir sur l'isolation thermique par l'extérieur (ITE) en 2026 : coût au m², aides MaPrimeRénov' et CEE disponibles, conditions d'éligibilité et étapes du chantier.",
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
      about: ['Isolation thermique extérieure', 'ITE', 'MaPrimeRénov', 'Rénovation énergétique'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 11 août 2026 · Isolation
          </p>

          <h1>Isolation des murs par l'extérieur (ITE) en 2026 : prix, aides et démarches</h1>

          <img
            src="/blog/isolation-murs-exterieure-ite-2026.jpg"
            alt="Chantier d'isolation thermique par l'extérieur sur une maison individuelle"
            className="w-full rounded-xl object-cover max-h-80 mb-8"
            loading="eager"
          />

          <p className="lead">
            Les murs représentent jusqu'à <strong>25 % des déperditions thermiques</strong> d'un
            logement. L'isolation thermique par l'extérieur (ITE) est la solution la plus efficace
            pour les traiter sans empiéter sur la surface habitable. En 2026, les règles d'accès
            aux aides ont évolué : voici ce que vous devez savoir avant de lancer votre chantier.
          </p>

          <h2>Qu'est-ce que l'isolation thermique par l'extérieur (ITE) ?</h2>
          <p>
            L'ITE consiste à habiller les murs extérieurs du logement d'un manteau isolant —
            généralement de la laine de roche, du polystyrène expansé ou de la fibre de bois —
            recouvert d'un parement (enduit, bardage ou vêture). Contrairement à l'isolation par
            l'intérieur (ITI), l'ITE :
          </p>
          <ul>
            <li>ne réduit pas la surface habitable ;</li>
            <li>supprime tous les ponts thermiques (angles, planchers intermédiaires) ;</li>
            <li>protège la structure du bâtiment des variations de température ;</li>
            <li>peut être réalisée sans déménager les occupants.</li>
          </ul>
          <p>
            En termes de performance, une ITE correctement dimensionnée permet de{' '}
            <strong>gagner une à deux classes au DPE</strong>, ce qui peut suffire à sortir un
            logement F ou G de la catégorie « passoire thermique ».
          </p>

          <h2>Prix de l'ITE en 2026 : ce qu'il faut budgéter</h2>
          <p>
            Le coût de l'isolation par l'extérieur varie selon le procédé choisi et la surface à
            traiter :
          </p>
          <ul>
            <li>
              <strong>Enduit sur isolant (ETICS)</strong> : entre 120 et 180 €/m² pose comprise.
              C'est la solution la plus répandue, adaptée aux maisons en parpaing ou en brique.
            </li>
            <li>
              <strong>Bardage sur ossature bois</strong> : entre 180 et 270 €/m². Plus esthétique,
              recommandé pour les façades présentant des reliefs ou en zone côtière.
            </li>
            <li>
              <strong>Vêture et vêtage</strong> : entre 150 et 220 €/m², idéal pour des chantiers
              rapides sur grandes surfaces.
            </li>
          </ul>
          <p>
            Pour une maison individuelle de 100 m² avec 80 m² de façades à isoler, le budget
            brut se situe entre <strong>9 600 € et 21 600 €</strong> avant aides. Après déductions,
            le reste à charge réel tombe souvent entre <strong>3 000 € et 8 000 €</strong> selon
            les revenus du foyer.
          </p>

          <h2>Aides disponibles en 2026 : attention aux nouvelles règles</h2>
          <p>
            Depuis le 1er janvier 2026, les règles d'accès à{' '}
            <strong>MaPrimeRénov'</strong> ont profondément changé pour l'ITE :
          </p>
          <ul>
            <li>
              Le <strong>Parcours par geste</strong> (aide pour un seul travaux isolé) ne finance
              plus l'isolation des murs, ni par l'extérieur ni par l'intérieur.
            </li>
            <li>
              Pour obtenir MaPrimeRénov', l'ITE doit désormais s'inscrire dans un{' '}
              <strong>Parcours accompagné (rénovation d'ampleur)</strong> : au moins deux gestes
              complémentaires visant un gain de deux classes DPE minimum.
            </li>
          </ul>

          <h3>Montants MaPrimeRénov' Parcours accompagné (ITE incluse)</h3>
          <p>
            Dans ce cadre, la prime couvre jusqu'à <strong>70 % du coût total des travaux</strong>{' '}
            (80 % pour les ménages très modestes), avec un plafond de dépenses de 70 000 € HT :
          </p>
          <ul>
            <li>Ménages très modestes : jusqu'à 80 % de prise en charge</li>
            <li>Ménages modestes : jusqu'à 60 %</li>
            <li>Ménages intermédiaires : jusqu'à 45 %</li>
            <li>Ménages aisés : jusqu'à 30 %</li>
          </ul>

          <h3>Primes CEE : cumulables sans condition de ressources</h3>
          <p>
            Les Certificats d'Économies d'Énergie (CEE) restent accessibles à tous les foyers,
            sans plafond de revenus. Pour l'ITE, les primes CEE se situent entre{' '}
            <strong>8 et 12 €/m²</strong> selon les fournisseurs d'énergie. Elles se cumulent avec
            MaPrimeRénov' lorsque les dossiers sont montés dans le bon ordre.
          </p>

          <h3>Autres aides mobilisables</h3>
          <ul>
            <li>
              <strong>TVA réduite à 5,5 %</strong> sur les matériaux et la main-d'œuvre (au lieu
              de 20 %), applicable dès lors que le logement a plus de 2 ans.
            </li>
            <li>
              <strong>Éco-PTZ</strong> : prêt à taux zéro jusqu'à 50 000 € pour financer le reste
              à charge, remboursable sur 20 ans.
            </li>
            <li>
              <strong>Aides locales</strong> : certaines régions et collectivités abondent les
              aides nationales — renseignez-vous auprès de votre Espace Conseil France Rénov'.
            </li>
          </ul>

          <h2>L'audit énergétique : obligatoire pour déclencher les aides</h2>
          <p>
            Depuis le 1er janvier 2026, un{' '}
            <a href="/dpe-gratuit">diagnostic de performance énergétique (DPE)</a> ou un audit
            énergétique doit être réalisé <strong>avant</strong> de déposer une demande de
            MaPrimeRénov' Parcours accompagné. L'audit identifie les travaux prioritaires et
            valide la cohérence du bouquet de rénovation.
          </p>
          <p>
            En tant qu'Accompagnateur Rénov' agréé, RenoHab réalise cet audit et monte l'intégralité
            du dossier d'aides — de l'audit initial à la validation finale des travaux.
          </p>

          <h2>Les étapes clés d'un chantier ITE réussi</h2>
          <ol>
            <li>
              <strong>Audit énergétique</strong> : définir le gain de classes DPE visé et le bouquet
              de travaux associé (ITE + pompe à chaleur, VMC double flux, etc.).
            </li>
            <li>
              <strong>Devis de trois artisans RGE</strong> : la qualification RGE (Reconnu Garant
              de l'Environnement) est obligatoire pour débloquer les aides.
            </li>
            <li>
              <strong>Dépôt de la demande d'aides avant travaux</strong> : ne jamais commencer le
              chantier avant la validation du dossier MaPrimeRénov'.
            </li>
            <li>
              <strong>Réalisation des travaux</strong> : en général 5 à 10 jours pour une maison
              individuelle standard.
            </li>
            <li>
              <strong>Vérification finale et versement de la prime</strong> : l'Accompagnateur Rénov'
              contrôle la conformité et déclenche le paiement.
            </li>
          </ol>

          <h2>ITE et DPE : quel impact attendre ?</h2>
          <p>
            Une ITE bien dimensionnée (résistance thermique R ≥ 3,7 m²·K/W) combinée à un autre
            geste — par exemple le remplacement d'une chaudière fioul par une{' '}
            <a href="/pompe-a-chaleur">pompe à chaleur air/eau</a> — permet typiquement de passer
            d'un logement classé F ou G à un logement C ou D. C'est précisément le saut de deux
            classes exigé pour le Parcours accompagné, et le seuil à partir duquel la plus-value
            immobilière devient significative.
          </p>
          <p>
            Si votre logement est classé F ou G, sachez que les passoires thermiques sont
            progressivement interdites à la location : depuis janvier 2025 pour les G, en 2028
            pour les F. Rénover maintenant, c'est aussi sécuriser vos revenus locatifs.
          </p>

          <h2>Pourquoi choisir l'ITE plutôt que l'ITI ?</h2>
          <p>
            L'isolation par l'intérieur (ITI) coûte moins cher mais présente des inconvénients
            majeurs : perte de surface habitable (5 à 15 cm par mur traité), ponts thermiques
            résiduels, et nécessité de déplacer tous les radiateurs et prises. L'ITE, malgré un
            coût plus élevé, offre une performance supérieure et perturbe moins le quotidien des
            occupants. Elle est également la seule option dans les copropriétés où l'accès aux murs
            intérieurs est difficile.
          </p>

          <h2>En résumé</h2>
          <ul>
            <li>L'ITE traite jusqu'à 25 % des déperditions thermiques sans réduire la surface habitable.</li>
            <li>En 2026, MaPrimeRénov' n'est accessible que via le Parcours accompagné (rénovation d'ampleur).</li>
            <li>Les primes CEE restent accessibles à tous, sans condition de ressources.</li>
            <li>Un audit énergétique préalable est obligatoire pour déclencher les aides.</li>
            <li>Combiner ITE et changement de chauffage permet souvent de gagner 2 classes DPE ou plus.</li>
          </ul>
        </article>

        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Estimez votre projet ITE gratuitement</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            RenoHab, Accompagnateur Rénov' agréé, réalise votre audit énergétique, monte le dossier
            MaPrimeRénov' et coordonne les artisans RGE pour votre isolation par l'extérieur.
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
