import React from 'react';
import useSeo from './useSeo';

// En-tête et pied de page locaux, alignés sur le style du reste du site.
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

const PUBLISHED = '2026-06-30';
const PATH = '/blog/maprimerenov-travaux-exclus-2026';

export default function ArticleMaprimerenovTravauxExclus2026() {
  useSeo({
    title: "MaPrimeRénov' 2026 : quels travaux sortent des aides en septembre ? | RenoHab",
    description:
      "Isolation, fenêtres, poêle à bois, VMC : le gouvernement prépare un nouveau recentrage de MaPrimeRénov' pour septembre 2026. Ce qui change et comment anticiper.",
    path: PATH,
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline:
        "MaPrimeRénov' 2026 : les travaux qui sortent des aides en septembre, et comment anticiper",
      description:
        "Isolation, fenêtres, poêle à bois, VMC : le gouvernement prépare un nouveau recentrage de MaPrimeRénov' pour septembre 2026. Ce qui change et comment anticiper.",
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
      about: ["MaPrimeRénov'", 'Aides à la rénovation énergétique', "Réforme 2026"],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 30 juin 2026 · Aides &amp; réglementation
          </p>

          <h1>MaPrimeRénov' 2026 : les travaux qui sortent des aides en septembre, et comment anticiper</h1>

          <img
            src="/DALL-E-2-maison.webp"
            alt="Travaux d'isolation et de rénovation énergétique d'une maison"
            loading="lazy"
            className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-card !mt-4 !mb-6"
          />

          <p className="lead">
            Fin juin 2026, le ministère chargé du Logement a confirmé un nouveau resserrement de
            MaPrimeRénov' : plusieurs travaux réalisés seuls (les « monogestes ») devraient sortir
            du dispositif à compter de septembre 2026. Isolation des combles, changement de
            fenêtres, poêle à bois, VMC... voici ce qui est annoncé, ce qui reste financé, et
            comment ajuster son calendrier de travaux.
          </p>

          <h2>Un nouveau coup de rabot annoncé fin juin 2026</h2>
          <p>
            Selon plusieurs médias spécialisés de la construction et de la rénovation énergétique,
            un décret et un arrêté doivent être présentés au Conseil national de l'habitat (CNH) le
            2 juillet 2026, pour une entrée en vigueur des nouvelles règles en septembre. L'objectif
            affiché par le ministère est de « concentrer l'argent public sur les rénovations les
            plus efficaces », c'est-à-dire les rénovations d'ampleur permettant de gagner au moins
            deux classes de Diagnostic de Performance Énergétique (DPE) en un seul chantier.
          </p>
          <p>
            <strong>Important :</strong> au moment de la publication de cet article, le texte n'est
            pas encore définitivement adopté — il doit d'abord passer devant le CNH. Le calendrier
            (présentation le 2 juillet, application en septembre) est toutefois confirmé par
            plusieurs sources concordantes. Nous mettrons cet article à jour dès la publication
            officielle du décret.
          </p>

          <h2>Les travaux qui devraient sortir du parcours « par geste »</h2>
          <p>
            D'après les éléments communiqués, les aides MaPrimeRénov' par geste (monogeste)
            seraient supprimées pour :
          </p>
          <ul>
            <li>Les poêles à bois ou à granulés ;</li>
            <li>Les chauffe-eau et chauffages solaires (hors Outre-mer) ;</li>
            <li>Les pompes à chaleur dédiées uniquement à la production d'eau chaude sanitaire ;</li>
            <li>Les systèmes de ventilation (VMC) ;</li>
            <li>L'isolation des toitures et des combles ;</li>
            <li>Le remplacement des fenêtres.</li>
          </ul>
          <p>
            Ce nouveau recentrage s'ajoute à un premier durcissement déjà entré en vigueur le 1er
            janvier 2026, qui avait exclu l'isolation des murs et les chaudières biomasse du
            parcours par geste, ainsi que les maisons individuelles classées F ou G de ce même
            parcours.
          </p>

          <h2>Ce qui resterait éligible au parcours par geste</h2>
          <p>
            Les aides par geste continueraient de financer l'essentiel : les pompes à chaleur
            utilisées pour le chauffage (air/eau notamment), le raccordement à un réseau de chaleur
            ou de froid, et la dépose d'une cuve à fioul. La voie de la <strong>rénovation
            d'ampleur</strong> — plusieurs gestes combinés pour un saut de classes DPE — resterait,
            elle, pleinement soutenue, et même renforcée dans sa logique.
          </p>
          <p>
            Cette logique n'est pas nouvelle : depuis plusieurs années, les pouvoirs publics
            cherchent à éviter le « saupoudrage » d'aides sur des travaux isolés qui, pris
            séparément, n'améliorent que marginalement la performance d'un logement. En resserrant
            encore le parcours par geste, le gouvernement pousse les ménages vers des projets
            globaux, pensés avec un professionnel, plutôt que vers une succession de petits
            chantiers décidés au coup par coup.
          </p>

          <h2>Que faire si vous avez un projet de travaux ?</h2>
          <h3>Si vous envisagiez un monogeste concerné</h3>
          <p>
            Si votre projet porte sur l'isolation des combles, le changement de fenêtres, l'achat
            d'un poêle ou d'une VMC, mieux vaut déposer votre dossier de demande avant l'entrée en
            vigueur des nouvelles règles, ou étudier dès maintenant d'autres leviers : les{' '}
            <strong>Certificats d'Économies d'Énergie (CEE)</strong>, cumulables et indépendants de
            MaPrimeRénov', l'<strong>Éco-PTZ</strong> (prêt à taux zéro), et la{' '}
            <strong>TVA à taux réduit (5,5 %)</strong> sur les travaux de rénovation énergétique
            restent disponibles quelle que soit l'évolution de MaPrimeRénov'.
          </p>
          <h3>Si vous pouvez viser une rénovation d'ampleur</h3>
          <p>
            Regrouper plusieurs travaux (isolation, ventilation, chauffage) en un seul projet
            coordonné par un <strong>Accompagnateur Rénov'</strong> reste la stratégie la plus
            sécurisée : c'est la voie la mieux financée, et la moins exposée aux prochains coups de
            rabot. Avant toute décision, faites d'abord le point sur votre{' '}
            <a href="/dpe-gratuit">DPE actuel</a> pour savoir quelle classe énergétique viser, puis
            étudiez le remplacement de votre chauffage par une{' '}
            <a href="/pompe-a-chaleur">pompe à chaleur air/eau</a>, qui reste l'un des gestes les
            mieux soutenus.
          </p>

          <h2>Estimez votre projet dès maintenant</h2>
          <p>
            Les règles évoluent, mais le réflexe reste le même : évaluer précisément votre logement
            avant d'agir. Utilisez notre{' '}
            <a href="/simulateur">simulateur d'aides à la rénovation énergétique</a> pour estimer ce
            à quoi vous avez droit aujourd'hui, et sécurisez votre dossier avant que les nouvelles
            règles n'entrent en vigueur.
          </p>
          <p>
            Dans tous les cas, ne décidez pas dans la précipitation : un projet mal préparé, même
            déposé avant la date butoir, peut être retardé par un dossier incomplet ou un artisan
            non certifié RGE. Le plus sûr reste de partir d'un diagnostic fiable de votre logement,
            puis de bâtir un plan de travaux cohérent — seul ou avec un accompagnement reconnu par
            l'État — avant de choisir entre un geste isolé et une rénovation d'ampleur.
          </p>
        </article>

        {/* CTA RenoHab */}
        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Anticipez la réforme de MaPrimeRénov'</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            RenoHab, Accompagnateur Rénov' agréé, monte votre dossier d'aides et sécurise votre
            calendrier de travaux avant l'entrée en vigueur des nouvelles règles.
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
