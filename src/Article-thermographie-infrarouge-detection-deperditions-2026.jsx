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
        <p className="mt-3 text-sm text-gray-500">
          <a href="/mentions-legales" className="hover:text-emerald-300 transition-colors">Mentions légales</a>
          <span className="mx-2 opacity-60">·</span>
          <a href="/confidentialite" className="hover:text-emerald-300 transition-colors">Politique de confidentialité</a>
        </p>
      </div>
    </footer>
  );
}

const PUBLISHED = '2026-11-17';
const PATH = '/blog/thermographie-infrarouge-detection-deperditions-2026';

export default function ArticleThermographieInfrarougeDeperditions2026() {
  useSeo({
    title: "Thermographie infrarouge : détecter les déperditions thermiques de sa maison en hiver | RenoHab",
    description:
      "Caméra thermique, ponts thermiques, fuites d'air : comment fonctionne un diagnostic par thermographie infrarouge, quand le réaliser, combien ça coûte et que faire des résultats.",
    path: PATH,
    image: '/blog/thermographie-infrarouge-detection-deperditions-2026.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline:
        "Thermographie infrarouge : comment détecter les déperditions thermiques de sa maison en hiver",
      description:
        "Caméra thermique, ponts thermiques, fuites d'air : comment fonctionne un diagnostic par thermographie infrarouge, quand le réaliser, combien ça coûte et que faire des résultats.",
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
      about: ['Thermographie infrarouge', 'Déperditions thermiques', 'Diagnostic énergétique', 'Rénovation énergétique'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 17 nov. 2026 · Diagnostic énergétique
          </p>

          <h1>Thermographie infrarouge : comment détecter les déperditions thermiques de sa maison en hiver</h1>

          <img
            src="/blog/thermographie-infrarouge-detection-deperditions-2026.jpg"
            alt="Façade d'une maison vue en thermographie infrarouge révélant des zones de déperditions thermiques"
            className="w-full rounded-xl shadow-card mb-8"
            loading="lazy"
          />

          <p className="lead">
            Vous chauffez votre maison mais votre facture reste élevée malgré les travaux d'isolation ?
            Certaines déperditions thermiques restent invisibles à l'œil nu. La{' '}
            <strong>thermographie infrarouge</strong> permet de les localiser précisément grâce à une
            caméra thermique — et l'hiver est la meilleure saison pour le faire. Tour complet de ce
            diagnostic méconnu mais très utile avant une rénovation.
          </p>

          <h2>Qu'est-ce que la thermographie infrarouge ?</h2>
          <p>
            Une caméra thermique détecte le rayonnement infrarouge émis par les surfaces et le
            convertit en image colorée : les zones chaudes apparaissent en rouge-jaune, les zones
            froides en bleu-violet. Appliquée au bâtiment, elle révèle en quelques minutes où la
            chaleur s'échappe — ou où le froid entre.
          </p>
          <p>
            La norme <strong>NF EN 13187</strong> encadre cette méthode pour les bâtiments. Elle ne
            remplace pas le{' '}
            <a href="/dpe-gratuit">Diagnostic de Performance Énergétique (DPE)</a>, mais le complète
            utilement : là où le DPE calcule une performance globale, la thermographie <em>localise</em>{' '}
            les défauts.
          </p>

          <h2>Ce qu'une caméra thermique peut révéler</h2>
          <ul>
            <li>
              <strong>Les ponts thermiques</strong> : angles de murs, appuis de fenêtres,
              linteaux, jonctions dalle/mur — ces zones mal traitées sont souvent responsables de
              5 à 15 % des déperditions totales.
            </li>
            <li>
              <strong>Les défauts d'isolation</strong> : discontinuités dans la laine de verre ou
              le polystyrène, zones oubliées lors de la pose.
            </li>
            <li>
              <strong>Les infiltrations d'air</strong> : fuites autour des fenêtres, des portes,
              des prises électriques encastrées ou des passages de gaines.
            </li>
            <li>
              <strong>Les problèmes d'humidité</strong> : l'eau dans les matériaux refroidit
              localement les parois, ce qui apparaît clairement sur le cliché.
            </li>
            <li>
              <strong>Les défauts de planchers chauffants</strong> : tubes bouchés ou déplacés
              dans une dalle rayonnante.
            </li>
          </ul>

          <h2>Quand réaliser une thermographie ? (le timing compte)</h2>
          <p>
            Pour être fiable, la thermographie exige un <strong>écart d'au moins 10 °C</strong> entre
            la température intérieure et la température extérieure. En France, cette condition est
            réunie de <strong>novembre à février</strong>, avec un optimum en décembre et janvier.
          </p>
          <p>
            Quelques règles pratiques à respecter :
          </p>
          <ul>
            <li>Préférer la nuit ou un ciel couvert (le soleil chauffe les façades et fausse les mesures).</li>
            <li>Chauffer normalement le logement pendant au moins 24 h avant l'intervention.</li>
            <li>Éviter les jours venteux, qui perturbent la lecture des températures en surface.</li>
            <li>Laisser les meubles loin des murs pour que les parois soient accessibles à la caméra.</li>
          </ul>
          <p>
            La thermographie se fait généralement <strong>de l'extérieur</strong> (façades, toiture)
            et <strong>de l'intérieur</strong> (plafonds, murs, angles). Un opérateur expérimenté
            parcourt une maison de 100 m² en 1 à 2 heures.
          </p>

          <h2>Combien coûte un diagnostic thermographique ?</h2>
          <p>
            Pour une maison individuelle, le prix varie selon la surface et le prestataire :
          </p>
          <ul>
            <li><strong>200 à 500 €</strong> pour une maison jusqu'à 150 m².</li>
            <li><strong>500 à 800 €</strong> pour une surface plus grande ou un rapport détaillé.</li>
          </ul>
          <p>
            Certains <a href="/blog/rendez-vous-france-renov-maprimerenov-2026">conseillers France Rénov'</a>{' '}
            proposent des thermographies dans le cadre d'un accompagnement global, parfois à tarif
            réduit. L'opérateur remet un rapport illustré identifiant chaque défaut et proposant
            des préconisations de travaux.
          </p>
          <p>
            À noter : la thermographie seule n'est <strong>pas obligatoire</strong> et n'est pas
            financée par MaPrimeRénov'. En revanche, elle est fréquemment intégrée dans un{' '}
            <a href="/blog/audit-energetique-obligatoire-vente-2026">audit énergétique réglementaire</a>,
            lui-même éligible à des aides.
          </p>

          <h2>Thermographie vs test d'infiltrométrie : deux outils complémentaires</h2>
          <p>
            La thermographie <em>localise</em> les fuites de chaleur, mais ne les quantifie pas.
            Le <strong>test d'infiltrométrie</strong> (ou « blower door test ») mesure, lui, le
            débit total d'air qui s'infiltre dans le logement — il donne un chiffre global mais
            ne dit pas où les fuites se trouvent.
          </p>
          <p>
            Associer les deux donne le tableau complet : on sait combien d'air entre, et on sait
            exactement où colmater. C'est d'ailleurs cette combinaison qu'utilisent les
            professionnels avant une{' '}
            <a href="/blog/renovation-ampleur-2026-accompagnateur-renov">rénovation d'ampleur</a>{' '}
            pour prioriser les travaux d'isolation et d'étanchéité à l'air.
          </p>

          <h2>Que faire des résultats ?</h2>
          <p>
            Une fois les défauts identifiés, plusieurs actions sont possibles selon leur nature :
          </p>
          <ul>
            <li>
              <strong>Ponts thermiques de structure</strong> → traitement par isolation thermique
              par l'extérieur (<a href="/blog/isolation-murs-exterieure-ite-2026">ITE</a>) ou par
              l'intérieur (<a href="/blog/isolation-thermique-interieure-iti-2026">ITI</a>).
            </li>
            <li>
              <strong>Fuites d'air</strong> → pose de joints, mousse expansive, membrane
              d'étanchéité — interventions légères et peu coûteuses.
            </li>
            <li>
              <strong>Isolation déficiente</strong> → reprise de l'isolant en combles, en murs
              ou en plancher bas selon la zone défaillante.
            </li>
            <li>
              <strong>Humidité infiltrée</strong> → diagnostic complémentaire (sondage
              hygrométrique) avant tout travaux d'isolation pour ne pas emprisonner l'humidité.
            </li>
          </ul>
          <p>
            En tant qu'<strong>Accompagnateur Rénov' agréé</strong>, RenoHab intègre les résultats
            d'une thermographie dans la stratégie de travaux et monte les dossiers d'aides
            (MaPrimeRénov', CEE, éco-PTZ) adaptés à chaque défaut identifié.
          </p>

          <h2>Trouver un thermographe qualifié</h2>
          <p>
            Il n'existe pas de certification légalement obligatoire pour réaliser une thermographie
            de bâtiment, mais plusieurs signes de qualité existent :
          </p>
          <ul>
            <li>Accréditation COFRAC (Comité français d'accréditation) pour les opérateurs.</li>
            <li>Qualification CERTIBAT ou niveau II/III en thermographie selon la norme ISO 9712.</li>
            <li>Utilisation d'une caméra calibrée avec une résolution thermique ≤ 0,1 °C.</li>
          </ul>
          <p>
            Demandez systématiquement un <strong>exemple de rapport</strong> avant de commander une
            prestation. Un bon rapport comprend des images annotées, l'identification de chaque défaut
            et des préconisations chiffrées.
          </p>

          <h2>Thermographie et DPE : deux diagnostics différents</h2>
          <p>
            Contrairement au{' '}
            <a href="/dpe-gratuit">DPE</a>, la thermographie ne génère pas d'étiquette
            énergétique et n'est pas opposable lors d'une vente ou d'une location. Elle ne se
            substitue pas à un audit énergétique réglementaire pour les logements classés F ou G.
            En revanche, elle est un outil de pilotage très efficace pour savoir <em>où</em>{' '}
            investir en priorité et <em>vérifier</em> la qualité des travaux après chantier.
          </p>
          <p>
            Réaliser une thermographie <strong>après travaux</strong> permet de confirmer que
            l'isolation posée ne présente pas de défauts — une garantie concrète de la qualité
            du chantier.
          </p>
        </article>

        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Passez à l'étape suivante</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            Thermographie réalisée ou envie d'aller plus loin ? RenoHab vous aide à prioriser vos
            travaux, à monter votre dossier MaPrimeRénov' et à trouver des artisans RGE de confiance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/dpe-gratuit" className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all">
              Estimer mon DPE gratuitement
            </a>
            <a href="/simulateur" className="px-6 py-3 rounded-full border border-white/70 text-white font-semibold hover:bg-white/10 transition-all">
              Simuler mes aides
            </a>
          </div>
        </div>
      </main>

      <ArticleFooter />
    </div>
  );
}
