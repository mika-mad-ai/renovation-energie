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

const PUBLISHED = '2026-08-06';
const PATH = '/blog/tva-5-5-renovation-energetique-2026';

export default function ArticleTva55RenovationEnergetique2026() {
  useSeo({
    title: "TVA à 5,5 % rénovation énergétique 2026 : travaux éligibles, économies et démarches | RenoHab",
    description:
      "La TVA à 5,5 % s'applique à tous les travaux de rénovation énergétique, sans condition de ressources. Découvrez quels travaux sont éligibles, combien vous économisez et comment en bénéficier depuis la suppression du formulaire Cerfa.",
    path: PATH,
    image: 'https://renohab.fr/blog/tva-5-5-renovation-energetique-2026.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline:
        "TVA à 5,5 % en rénovation énergétique 2026 : comment en bénéficier et combien économiser ?",
      description:
        "La TVA à 5,5 % s'applique à tous les travaux de rénovation énergétique, sans condition de ressources. Découvrez quels travaux sont éligibles, combien vous économisez et comment en bénéficier depuis la suppression du formulaire Cerfa.",
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
      about: ['TVA réduite', 'Rénovation énergétique', 'Aides travaux 2026'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 6 août 2026 · Aides &amp; financement
          </p>

          <h1>TVA à 5,5 % en rénovation énergétique 2026 : comment en bénéficier et combien économiser ?</h1>

          <img
            src="/blog/tva-5-5-renovation-energetique-2026.jpg"
            alt="Travaux de rénovation énergétique éligibles à la TVA à 5,5 %"
            className="w-full rounded-2xl mb-8 object-cover max-h-80"
            loading="eager"
          />

          <p className="lead">
            La TVA réduite à 5,5 % est l'une des aides les plus méconnues de la rénovation
            énergétique, et pourtant l'une des plus accessibles : elle ne dépend ni de vos revenus,
            ni d'un dossier complexe à monter. En 2026, les démarches ont encore été simplifiées
            avec la suppression définitive du formulaire Cerfa. Voici tout ce que vous devez savoir
            pour en profiter.
          </p>

          <h2>Qu'est-ce que la TVA à 5,5 % en rénovation énergétique ?</h2>
          <p>
            En France, le taux normal de TVA est de 20 %, et le taux intermédiaire de 10 % s'applique
            à certains travaux de rénovation. Mais pour les travaux d'amélioration énergétique dans
            des logements achevés depuis plus de 2 ans, la TVA tombe à <strong>5,5 %</strong> —
            soit le même taux que pour les produits alimentaires de première nécessité. C'est l'État
            qui renonce à une partie de la taxe pour encourager la transition énergétique des
            logements.
          </p>
          <p>
            Concrètement, sur une facture de 10 000 € HT de travaux d'isolation, vous payez{' '}
            <strong>550 € de TVA</strong> au lieu de 2 000 € au taux normal : une économie nette de
            1 450 € sans aucune démarche administrative complexe.
          </p>

          <h2>Quels travaux sont éligibles ?</h2>
          <p>
            Le taux de 5,5 % s'applique à l'ensemble des travaux visant à améliorer la performance
            énergétique d'un logement, y compris la fourniture et la pose des équipements. La liste
            inclut notamment :
          </p>
          <ul>
            <li>
              <strong>L'isolation thermique</strong> : combles, murs par l'intérieur et par
              l'extérieur, planchers bas, fenêtres et portes-fenêtres à double ou triple vitrage.
            </li>
            <li>
              <strong>Le chauffage bas-carbone</strong> : pompe à chaleur aérothermique ou
              géothermique, chaudière à granulés ou à bûches, poêle à bois, chauffe-eau thermodynamique.
            </li>
            <li>
              <strong>Le solaire thermique</strong> : panneaux solaires pour la production d'eau chaude
              sanitaire ou pour le chauffage.
            </li>
            <li>
              <strong>La ventilation</strong> : installation ou remplacement d'une VMC simple ou double
              flux pour améliorer la qualité de l'air et limiter les déperditions.
            </li>
            <li>
              <strong>Les équipements de régulation</strong> : thermostats programmables, systèmes de
              gestion technique du bâtiment (GTB).
            </li>
          </ul>
          <p>
            Une règle simple : tous les travaux éligibles à{' '}
            <a href="/pompe-a-chaleur">MaPrimeRénov'</a> bénéficient automatiquement de la TVA à 5,5 %.
            La liste est donc large et couvre la quasi-totalité des chantiers de rénovation
            énergétique.
          </p>

          <h2>Qui peut en bénéficier ?</h2>
          <p>
            La TVA réduite à 5,5 % est accessible <strong>sans condition de ressources</strong>.
            Peu importe votre niveau de revenus, vous pouvez en profiter si vous êtes :
          </p>
          <ul>
            <li>Propriétaire occupant</li>
            <li>Propriétaire bailleur</li>
            <li>Locataire (avec accord du propriétaire pour les travaux)</li>
            <li>Syndicat de copropriétaires</li>
          </ul>
          <p>
            La seule condition impérative : le logement doit être <strong>achevé depuis plus de 2
            ans</strong> à la date de début des travaux. Les logements neufs, ou ceux achevés depuis
            moins de 2 ans, ne sont pas éligibles.
          </p>

          <h2>Suppression du Cerfa : des démarches ultra-simplifiées en 2026</h2>
          <p>
            Jusqu'en 2025, bénéficier de la TVA à 5,5 % impliquait de remplir et signer une
            attestation Cerfa (formulaire n° 1301-SD ou n° 1302-SD) pour chaque chantier. Ce
            formulaire devait être remis à l'artisan avant le démarrage des travaux, et chacun en
            conservait un exemplaire.
          </p>
          <p>
            Depuis le <strong>14 février 2025</strong>, l'attestation Cerfa a été définitivement
            supprimée. Elle est remplacée par une <strong>simple mention sur le devis ou la
            facture</strong> : le client certifie que le logement est achevé depuis plus de 2 ans
            et que les travaux répondent aux critères d'éligibilité. Un devis signé vaut attestation.
            Les deux parties conservent leur exemplaire pendant au moins 5 ans, en cas de contrôle
            fiscal.
          </p>
          <p>
            En pratique, un artisan qualifié RGE applique directement le taux de 5,5 % sur votre
            devis. Vous n'avez rien à faire de plus.
          </p>

          <h2>Peut-on cumuler la TVA réduite avec d'autres aides ?</h2>
          <p>
            Oui — et c'est là toute la puissance du dispositif. La TVA à 5,5 % se cumule librement
            avec l'ensemble des aides à la rénovation énergétique :
          </p>
          <ul>
            <li>
              <strong>MaPrimeRénov'</strong> : la prime de l'État (Parcours par geste ou Parcours
              accompagné), calculée sur le coût TTC des travaux.
            </li>
            <li>
              <strong>Les primes CEE</strong> : versées par les fournisseurs d'énergie, elles
              s'appliquent également sur le montant TTC.
            </li>
            <li>
              <strong>L'Éco-PTZ</strong> : le prêt à taux zéro qui complète le financement sans
              intérêts.
            </li>
            <li>
              <strong>Les aides régionales et locales</strong> : subventions des collectivités
              territoriales qui viennent s'additionner.
            </li>
          </ul>
          <p>
            Autrement dit, la TVA réduite allège d'abord la facture HT, puis les primes viennent
            s'appliquer sur le reste à charge. C'est un levier silencieux mais systématique, qui
            joue en votre faveur dès le premier euro.
          </p>

          <h2>Exemple concret : isolation des combles perdus</h2>
          <p>
            Prenons un chantier d'isolation des combles perdus (100 m²) :
          </p>
          <ul>
            <li>Coût HT : 3 200 €</li>
            <li>TVA à 5,5 % : 176 € — contre 640 € au taux normal de 20 %</li>
            <li>Coût TTC : 3 376 € (économie de 464 € par rapport au taux plein)</li>
            <li>MaPrimeRénov' applicable sur ce montant TTC (selon vos revenus)</li>
          </ul>
          <p>
            Un ménage aux revenus modestes peut recevoir jusqu'à 75 % du coût TTC en prime d'État pour ce type de geste — et la TVA réduite a déjà allégé la base de calcul.
          </p>

          <h2>Comment s'assurer d'en bénéficier ?</h2>
          <p>
            Trois points de vigilance avant de signer votre devis :
          </p>
          <ol>
            <li>
              <strong>Vérifiez que votre artisan est RGE</strong> (Reconnu Garant de l'Environnement) :
              c'est obligatoire pour bénéficier des aides d'État, et les artisans RGE appliquent
              systématiquement la TVA à 5,5 % sur les travaux éligibles.
            </li>
            <li>
              <strong>Contrôlez la mention sur le devis</strong> : le taux de 5,5 % doit apparaître
              explicitement. Si votre devis affiche 10 % ou 20 %, interrogez votre artisan.
            </li>
            <li>
              <strong>Conservez votre devis signé</strong> pendant au moins 5 ans : il tient lieu
              d'attestation depuis la suppression du Cerfa.
            </li>
          </ol>

          <p>
            Pour connaître précisément votre gain énergétique potentiel et les aides auxquelles vous
            avez droit, commencez par évaluer la performance actuelle de votre logement avec notre{' '}
            <a href="/dpe-gratuit">simulateur DPE gratuit</a>.
          </p>
        </article>

        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Calculez vos économies de TVA</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            RenoHab, Accompagnateur Rénov' agréé, vous aide à optimiser toutes les aides disponibles
            — TVA réduite, MaPrimeRénov', CEE, Éco-PTZ — pour réduire votre reste à charge au
            maximum.
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
              Voir les équipements éligibles
            </a>
          </div>
        </div>
      </main>

      <ArticleFooter />
    </div>
  );
}
