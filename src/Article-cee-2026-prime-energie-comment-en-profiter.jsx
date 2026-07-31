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

const PUBLISHED = '2026-07-31';
const PATH = '/blog/cee-2026-prime-energie-comment-en-profiter';

export default function ArticleCee2026PrimeEnergie() {
  useSeo({
    title: "Prime CEE 2026 : comment profiter des Certificats d'Économie d'Énergie pour vos travaux | RenoHab",
    description:
      "Découvrez comment fonctionnent les Certificats d'Économie d'Énergie (CEE) en 2026, quels travaux sont éligibles et comment cumuler prime énergie et MaPrimeRénov' pour réduire votre reste à charge.",
    path: PATH,
    image: 'https://renohab.fr/blog/cee-2026-prime-energie-comment-en-profiter.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: "Prime CEE 2026 : comment profiter des Certificats d'Économie d'Énergie pour vos travaux",
      description:
        "Fonctionnement des CEE, travaux éligibles, montants et cumul avec MaPrimeRénov' : le guide complet de la prime énergie 2026.",
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
      about: ["Certificats d'Économie d'Énergie", 'Prime énergie', 'Rénovation énergétique', 'Aides 2026'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 31 juillet 2026 · Aides &amp; financement
          </p>

          <h1>Prime CEE 2026 : comment profiter des Certificats d'Économie d'Énergie pour vos travaux</h1>

          <img
            src="/blog/cee-2026-prime-energie-comment-en-profiter.jpg"
            alt="Maison rénovée avec isolation et équipements énergétiques performants"
            className="w-full rounded-2xl object-cover max-h-80 mb-8"
            loading="eager"
          />

          <p className="lead">
            Moins médiatisées que MaPrimeRénov', les primes CEE (Certificats d'Économie d'Énergie)
            représentent pourtant des milliers d'euros d'économies pour vos travaux de rénovation
            énergétique — sans condition de revenus. En 2026, la 6ème période du dispositif
            est en plein déploiement avec des règles plus précises et des montants revus. Tour
            d'horizon de ce qu'il faut savoir pour en profiter.
          </p>

          <h2>Qu'est-ce que la prime CEE et comment ça fonctionne ?</h2>
          <p>
            Le dispositif des Certificats d'Économie d'Énergie oblige les fournisseurs d'énergie
            (EDF, Engie, Total Énergies, etc.) à financer des travaux d'économies d'énergie chez
            les particuliers. En pratique, ces « obligés » vous versent une prime en échange de
            la preuve que vos travaux ont bien été réalisés par un artisan <strong>RGE
            (Reconnu Garant de l'Environnement)</strong>.
          </p>
          <p>
            Ce mécanisme présente un avantage clé : <strong>il n'y a aucune condition de
            ressources</strong>. Propriétaires occupants, bailleurs et même locataires (sous
            conditions) peuvent en bénéficier. Le montant de la prime varie selon le type de
            travaux, votre zone climatique (H1, H2 ou H3) et la surface de votre logement.
          </p>

          <h2>La 6ème période CEE (P6) : ce qui change en 2026</h2>
          <p>
            La 6ème période des CEE, entrée en vigueur le <strong>1er janvier 2026</strong>,
            relève les objectifs d'économies d'énergie de <strong>27 %</strong> par rapport à
            la période précédente. Plus de <strong>8 milliards d'euros</strong> sont mobilisés
            pour financer les primes à la rénovation sur cette nouvelle période.
          </p>
          <p>
            Depuis le <strong>1er juillet 2026</strong>, une nouvelle doctrine d'application
            est entrée en vigueur. Elle renforce :
          </p>
          <ul>
            <li>La lutte contre les fraudes (contrôles renforcés sur les dossiers)</li>
            <li>La précision du calcul (intégration de la zone climatique et de la surface chauffée)</li>
            <li>Le soutien aux ménages modestes, avec des bonifications plus importantes</li>
            <li>La qualité des travaux, avec une sélection plus stricte des artisans éligibles</li>
          </ul>
          <p>
            Concrètement, le calcul de votre prime intègre désormais votre zone géographique
            (H1 pour le nord et les zones de montagne, H2 pour le centre, H3 pour le
            pourtour méditerranéen) afin de refléter les économies réelles réalisées.
          </p>

          <h2>Quels travaux sont éligibles aux CEE en 2026 ?</h2>

          <h3>Isolation thermique</h3>
          <p>
            L'isolation reste le poste le plus générateur de CEE. Les travaux éligibles incluent :
          </p>
          <ul>
            <li><strong>Isolation des combles perdus</strong> : jusqu'à 25 €/m² pour les ménages modestes</li>
            <li><strong>Isolation des murs par l'extérieur (ITE)</strong> : de l'ordre de 20 à 35 €/m²</li>
            <li><strong>Isolation du plancher bas</strong> : montants variables selon la surface</li>
          </ul>
          <p>
            Pour une maison avec 100 m² de murs à isoler par l'extérieur, un ménage modeste
            peut obtenir entre <strong>2 800 et 3 800 € de prime CEE</strong> pour ce seul poste.
          </p>

          <h3>Chauffage renouvelable</h3>
          <p>
            Les équipements de chauffage performants bénéficient d'une <strong>bonification
            exceptionnelle</strong> en 2026, avec des montants qui ont significativement
            augmenté :
          </p>
          <ul>
            <li><strong>Pompe à chaleur air/eau</strong> : prime variable selon la puissance et la zone, cumulable avec MaPrimeRénov'</li>
            <li><strong>Chaudière à granulés (biomasse)</strong> : éligible avec un COP minimal</li>
            <li><strong>Pompe à chaleur hybride</strong> : combinaison PAC + chaudière gaz à condensation</li>
          </ul>
          <p>
            Pour en savoir plus sur les aides à la{' '}
            <a href="/pompe-a-chaleur">pompe à chaleur</a>, retrouvez notre guide dédié.
          </p>

          <h3>Ventilation et menuiseries</h3>
          <ul>
            <li><strong>VMC double flux</strong> : éligible CEE, améliore à la fois le confort et la classe DPE</li>
            <li><strong>Remplacement de fenêtres</strong> : prime pour les fenêtres à double ou triple vitrage performants</li>
          </ul>

          <h2>Comment calculer et obtenir votre prime énergie ?</h2>
          <p>
            La démarche se fait en trois étapes :
          </p>
          <ol>
            <li>
              <strong>Avant les travaux</strong> : vous signalez votre projet à un organisme CEE
              (votre fournisseur d'énergie ou un agrégateur comme Hellio, Sonergia, etc.) et
              obtenez un devis d'un artisan RGE.
            </li>
            <li>
              <strong>Pendant les travaux</strong> : l'artisan RGE réalise les travaux et
              complète une attestation sur l'honneur confirmant la conformité des travaux.
            </li>
            <li>
              <strong>Après les travaux</strong> : vous transmettez les justificatifs (facture,
              attestation) et la prime vous est versée — directement ou en déduction de votre
              facture de travaux si vous passez par un prestataire qui gère tout.
            </li>
          </ol>
          <p>
            <strong>Important</strong> : la demande de prime doit être initiée
            <em> avant le début des travaux</em>. Un chantier déjà commencé n'est pas éligible.
          </p>

          <h2>CEE + MaPrimeRénov' : peut-on cumuler les deux ?</h2>
          <p>
            Oui, dans la plupart des cas. CEE et MaPrimeRénov' sont deux dispositifs
            complémentaires qui peuvent se <strong>cumuler sur les mêmes travaux</strong>.
            La condition : le total des aides ne doit pas dépasser 100 % du coût HT des travaux
            (ce qui n'arrive jamais en pratique).
          </p>
          <p>
            Par exemple, pour une{' '}
            <a href="/pompe-a-chaleur">pompe à chaleur air/eau</a> installée par un ménage
            intermédiaire, il est courant d'obtenir à la fois une prime MaPrimeRénov' et
            une prime CEE, réduisant le reste à charge de façon très significative.
            N'oubliez pas non plus la{' '}
            <a href="/dpe-gratuit">TVA à 5,5 %</a> qui s'applique automatiquement sur tous
            les travaux de rénovation énergétique.
          </p>

          <h2>RenoHab vous aide à maximiser vos aides</h2>
          <p>
            En tant qu'<strong>Accompagnateur Rénov' agréé</strong>, RenoHab monte vos
            dossiers d'aides — MaPrimeRénov', CEE, Éco-PTZ — et coordonne des artisans
            RGE pour que chaque euro investi génère le maximum de retour. Nous analysons
            votre situation, votre zone climatique et vos travaux envisagés pour identifier
            toutes les primes auxquelles vous avez droit, sans que vous ayez à naviguer
            seul dans la complexité administrative.
          </p>
          <p>
            Commencez par simuler votre DPE actuel : c'est la première étape pour
            identifier les gestes prioritaires et les aides associées.
          </p>
        </article>

        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Calculez vos primes CEE + MaPrimeRénov'</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            Simulez votre DPE, identifiez vos travaux prioritaires et découvrez toutes les aides auxquelles vous avez droit.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/dpe-gratuit" className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all">
              Simuler mon DPE gratuitement
            </a>
            <a href="/pompe-a-chaleur" className="px-6 py-3 rounded-full border border-white/70 text-white font-semibold hover:bg-white/10 transition-all">
              Découvrir les aides PAC
            </a>
          </div>
        </div>
      </main>

      <ArticleFooter />
    </div>
  );
}
