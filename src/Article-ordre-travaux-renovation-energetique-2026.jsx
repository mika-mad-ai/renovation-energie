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

const PUBLISHED = '2026-08-08';
const PATH = '/blog/ordre-travaux-renovation-energetique-2026';

export default function ArticleOrdreTravauxRenovation2026() {
  useSeo({
    title: "Rénovation énergétique : dans quel ordre réaliser ses travaux en 2026 ? | RenoHab",
    description:
      "Isoler d'abord, changer le chauffage ensuite : découvrez le bon ordre des travaux de rénovation énergétique en 2026 pour maximiser vos aides et la performance finale de votre logement.",
    path: PATH,
    image: '/blog/ordre-travaux-renovation-energetique-2026.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: "Rénovation énergétique 2026 : dans quel ordre réaliser ses travaux pour maximiser les aides ?",
      description:
        "Isoler d'abord, changer le chauffage ensuite : découvrez le bon ordre des travaux de rénovation énergétique en 2026 pour maximiser vos aides et la performance finale de votre logement.",
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
      about: ['Rénovation énergétique', 'Ordre des travaux', 'Isolation thermique', 'MaPrimeRénov', 'Pompe à chaleur'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 8 août 2026 · Guide pratique
          </p>

          <h1>Rénovation énergétique : dans quel ordre réaliser ses travaux en 2026 ?</h1>

          <img
            src="/blog/ordre-travaux-renovation-energetique-2026.jpg"
            alt="Chantier d'isolation et de rénovation énergétique d'une maison"
            className="w-full rounded-2xl object-cover max-h-80 mb-8"
            loading="eager"
          />

          <p className="lead">
            Faire ses travaux de rénovation énergétique dans le mauvais ordre, c'est risquer
            un système de chauffage surdimensionné, des aides non optimisées et des reprises
            coûteuses. En 2026, avec les évolutions de MaPrimeRénov' et du parcours accompagné,
            la séquence des travaux est plus stratégique que jamais. Voici la méthode pour
            réussir votre projet et décrocher les aides maximales.
          </p>

          <h2>Pourquoi l'ordre des travaux est déterminant</h2>
          <p>
            Imaginez installer une pompe à chaleur dimensionnée pour chauffer une maison
            énergivore, puis isoler les combles six mois plus tard : l'équipement sera
            surdimensionné, son efficacité diminuée, et vos économies amoindries. L'ordre
            des travaux influe sur trois variables clés :
          </p>
          <ul>
            <li>
              <strong>La puissance du futur équipement de chauffage :</strong> moins le bâtiment
              perd de chaleur, moins le chauffage doit être puissant — et donc moins il coûte.
            </li>
            <li>
              <strong>L'accès aux aides MaPrimeRénov' :</strong> le parcours accompagné exige
              un saut d'au moins deux classes DPE ; un mauvais ordonnancement peut vous priver
              de cette bonification.
            </li>
            <li>
              <strong>La cohérence du chantier :</strong> poser du parquet sur un plancher bas
              non isolé, ou rénover les fenêtres avant l'isolation par l'extérieur des murs,
              oblige à des reprises inutiles.
            </li>
          </ul>

          <h2>Étape 0 — Le bilan énergétique : votre carte de navigation</h2>
          <p>
            Avant tout travaux, faites réaliser un{' '}
            <a href="/dpe-gratuit">diagnostic de performance énergétique (DPE) ou un audit
            énergétique complet</a>. Ce document identifie les postes de déperdition
            prioritaires, estime le saut de classes atteignable et conditionne l'accès aux
            aides les plus généreuses.
          </p>
          <p>
            Pour les logements classés F ou G mis en vente, l'audit énergétique est
            obligatoire depuis 2023. Mais même sans obligation légale, il est le meilleur
            investissement avant de se lancer : un audit bien mené évite des milliers d'euros
            de travaux mal ciblés.
          </p>

          <h2>Étape 1 — Isoler l'enveloppe du bâtiment</h2>
          <p>
            C'est le point de départ incontournable. Une maison mal isolée perd de la chaleur
            en permanence, ce qui rend tout autre investissement moins rentable.
          </p>

          <h3>Les combles en priorité</h3>
          <p>
            Les combles perdus ou la toiture représentent jusqu'à{' '}
            <strong>25 à 30 % des déperditions thermiques</strong> d'un logement mal isolé,
            selon l'ADEME. L'isolation des combles est le geste offrant le meilleur rapport
            coût / gain énergétique : les travaux sont peu intrusifs, rapides, et le retour
            sur investissement est généralement inférieur à cinq ans.
          </p>

          <h3>Les murs extérieurs — attention aux règles 2026</h3>
          <p>
            L'isolation thermique par l'extérieur (ITE) ou par l'intérieur (ITI) réduit les
            déperditions de <strong>20 à 25 %</strong>. Attention cependant :{' '}
            <strong>depuis janvier 2026, l'isolation des murs extérieurs a été retirée du
            parcours par geste de MaPrimeRénov'</strong>. Elle n'est finançable via
            MaPrimeRénov' que dans le cadre d'une{' '}
            <Link to="/blog/renovation-ampleur-2026-accompagnateur-renov">rénovation d'ampleur
            (parcours accompagné)</Link>, avec l'appui d'un Mon Accompagnateur Rénov' agréé.
            La TVA à 5,5 % et les CEE restent disponibles pour ce geste en dehors de ce parcours.
          </p>

          <h3>Le plancher bas</h3>
          <p>
            Souvent oublié, l'isolation du plancher bas — vide sanitaire, sous-sol ou dalle
            sur terre-plein — élimine <strong>7 à 10 % des pertes de chaleur</strong>
            supplémentaires. À intégrer dès la première phase, avant la pose de tout nouveau
            revêtement de sol.
          </p>

          <h2>Étape 2 — Remplacer le système de chauffage</h2>
          <p>
            Une fois l'enveloppe traitée, la puissance nécessaire pour chauffer le logement
            est nettement réduite. C'est le bon moment pour remplacer une ancienne chaudière
            par un équipement performant et éligible aux aides.
          </p>

          <h3>La pompe à chaleur air/eau</h3>
          <p>
            La <a href="/pompe-a-chaleur">pompe à chaleur air/eau</a> est la solution
            plébiscitée en 2026 : elle extrait les calories de l'air extérieur pour chauffer
            le logement et l'eau sanitaire, avec un coefficient de performance (COP) de
            3 à 4. MaPrimeRénov' couvre une partie significative du coût — de 3 000 € pour
            les ménages intermédiaires à 5 000 € pour les très modestes — cumulable avec
            les primes CEE et la TVA à 5,5 %.
          </p>

          <h3>La chaudière à granulés de bois</h3>
          <p>
            Alternative solide pour les logements ruraux sans réseau de chaleur ou mal adaptés
            à une PAC, la chaudière biomasse bénéficie également d'aides substantielles et
            offre une autonomie appréciable en cas de tension sur les prix de l'électricité.
          </p>

          <h2>Étape 3 — Renouveler la ventilation</h2>
          <p>
            Paradoxe courant après une isolation réussie : le logement devient si étanche que
            l'air y stagne, favorisant condensation et moisissures. La{' '}
            <strong>VMC double flux</strong> est la réponse adaptée : elle extrait l'air vicié
            tout en récupérant 70 à 90 % de la chaleur de l'air sortant pour préchauffer l'air
            frais entrant. Résultat : qualité de l'air améliorée et facture de chauffage encore
            réduite.
          </p>
          <p>
            Ce poste est souvent intégré à une rénovation d'ampleur, après l'isolation, pour
            tirer le maximum de bénéfice de l'étanchéité améliorée. Un système mal dimensionné
            ou installé avant les travaux d'isolation peut nécessiter un réglage complet.
          </p>

          <h2>Étape 4 — Les menuiseries (fenêtres et portes-fenêtres)</h2>
          <p>
            Le remplacement de simples vitrages par du double ou triple vitrage réduit les
            déperditions de <strong>10 à 15 %</strong> et améliore significativement le
            confort acoustique. Ce geste est efficace, mais doit être planifié{' '}
            <em>après l'isolation des murs</em> si vous prévoyez une ITE : les fenêtres
            doivent s'adapter au nouveau tableau créé par l'isolant extérieur, sous peine
            de pont thermique.
          </p>

          <h2>Parcours par geste ou rénovation d'ampleur : lequel choisir ?</h2>
          <p>
            En 2026, MaPrimeRénov' propose deux parcours distincts :
          </p>
          <ul>
            <li>
              <strong>Parcours par geste :</strong> vous réalisez un ou plusieurs travaux
              séparément (isolation des combles, pompe à chaleur, VMC…) sans obligation de
              saut global de classes DPE. Démarches simplifiées, aides versées geste par geste.
              Attention : depuis janvier 2026, l'isolation des murs extérieurs n'est plus
              éligible dans ce parcours.
            </li>
            <li>
              <strong>Parcours accompagné (rénovation d'ampleur) :</strong> vous combinez
              plusieurs travaux pour atteindre un saut d'au moins deux classes DPE. L'appui
              d'un Mon Accompagnateur Rénov' est obligatoire. Les aides sont plus élevées et
              une avance sur les fonds est possible pour les ménages très modestes. Le plafond
              de travaux est fixé à 40 000 € HT pour un saut de trois classes en 2026.
            </li>
          </ul>
          <p>
            La rénovation d'ampleur est souvent la stratégie la plus rentable sur dix à quinze
            ans, surtout pour les logements classés E, F ou G — et la seule voie pour financer
            l'isolation des murs extérieurs via MaPrimeRénov'.
          </p>

          <h2>En résumé : la règle d'or</h2>
          <p>
            <strong>Isoler d'abord, changer le chauffage ensuite, ventiler en cohérence.</strong>{' '}
            Ce principe simple conditionne la performance finale du logement et le retour sur
            investissement de chaque euro investi. Avec un bon diagnostic de départ et un
            plan de travaux séquencé, un ménage modeste peut voir jusqu'à{' '}
            <strong>80 % de ses travaux financés</strong> dans le cadre d'une rénovation d'ampleur.
          </p>
        </article>

        {/* CTA RenoHab */}
        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">
            Simulez votre projet de rénovation
          </h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            RenoHab, Accompagnateur Rénov' agréé, vous aide à définir le bon ordre de travaux,
            à monter vos dossiers d'aides et à coordonner des artisans RGE.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/#simulator"
              className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all"
            >
              Simuler mes aides
            </a>
            <a
              href="/dpe-gratuit"
              className="px-6 py-3 rounded-full border border-white/70 text-white font-semibold hover:bg-white/10 transition-all"
            >
              Estimer mon DPE
            </a>
          </div>
        </div>
      </main>

      <ArticleFooter />
    </div>
  );
}
