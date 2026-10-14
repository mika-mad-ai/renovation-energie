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

const PUBLISHED = '2026-09-28';
const PATH = '/blog/maprimerenov-par-geste-apres-septembre-2026';

export default function ArticleMaPrimeRenovParGeste2026() {
  useSeo({
    title: "MaPrimeRénov' par geste après le 1er septembre 2026 : les 3 aides encore disponibles | RenoHab",
    description:
      "Depuis le 1er septembre 2026, seuls 3 gestes restent éligibles à MaPrimeRénov' par geste : PAC, réseau de chaleur et audit énergétique. Montants, conditions et démarches.",
    path: PATH,
    image: '/blog/maprimerenov-par-geste-apres-septembre-2026.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: "MaPrimeRénov' par geste après le 1er septembre 2026 : les 3 aides encore disponibles",
      description:
        "Depuis le 1er septembre 2026, seuls 3 gestes restent éligibles à MaPrimeRénov' par geste : PAC, réseau de chaleur et audit énergétique. Montants, conditions et démarches.",
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
      about: ["MaPrimeRénov'", 'Pompe à chaleur', 'Aides rénovation énergétique'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 28 sept. 2026 · Aides &amp; financement
          </p>

          <h1>MaPrimeRénov' par geste après le 1er septembre 2026 : les 3 aides encore disponibles</h1>

          <img
            src="/blog/maprimerenov-par-geste-apres-septembre-2026.jpg"
            alt="Pompe à chaleur installée devant une maison rénovée — MaPrimeRénov' par geste 2026"
            className="w-full rounded-xl shadow-soft mb-6"
            loading="eager"
          />

          <p className="lead">
            Le décret du 25 août 2026 a profondément recentré le parcours par geste de MaPrimeRénov'.
            Depuis le 1er septembre, cinq catégories de travaux ont quitté le dispositif en France
            métropolitaine. Résultat : seuls <strong>3 gestes</strong> restent directement finançables
            à la date d'aujourd'hui. Ce guide fait le point sur ce qui est accessible maintenant,
            les montants exacts et les étapes pour constituer votre dossier.
          </p>

          <h2>Pourquoi le parcours par geste a été recentré</h2>
          <p>
            Depuis sa création, MaPrimeRénov' était accessible pour de nombreux travaux individuels :
            isolation des combles, fenêtres, VMC, chauffe-eau solaire, poêle à bois, etc. La réforme
            de septembre 2026 opère un choix clair : concentrer les deniers publics sur la
            <strong> décarbonation du chauffage</strong>, c'est-à-dire remplacer les équipements
            fossiles (fioul, gaz) par des solutions bas-carbone. Les travaux d'isolation et de
            menuiserie restent finançables via d'autres dispositifs (CEE, éco-PTZ, TVA à 5,5 %),
            mais ne donnent plus droit à MaPrimeRénov' en geste isolé.
          </p>

          <h2>Les 3 gestes encore éligibles au 1er septembre 2026</h2>

          <h3>1. La pompe à chaleur (PAC) pour le chauffage</h3>
          <p>
            La <a href="/pompe-a-chaleur">pompe à chaleur</a> est le geste-phare du parcours par geste
            réformé. Trois types sont éligibles :
          </p>
          <ul>
            <li><strong>PAC air/eau :</strong> la plus répandue, elle chauffe l'eau du circuit de chauffage central à partir de l'air extérieur.</li>
            <li><strong>PAC eau/eau (géothermique) :</strong> puise les calories dans les nappes phréatiques ou le sol via des sondes ou capteurs.</li>
            <li><strong>PAC solarothermique :</strong> combine capteurs solaires thermiques et pompe à chaleur pour produire chauffage et eau chaude sanitaire.</li>
          </ul>
          <p>
            Attention : depuis le 1er septembre 2026, les PAC hybrides (couplées à une chaudière gaz)
            restent éligibles au parcours par geste, mais elles sont exclues du parcours
            rénovation d'ampleur si le gaz est conservé comme appoint principal.
          </p>

          <h3>2. Le raccordement à un réseau de chaleur et/ou de froid</h3>
          <p>
            Se raccorder à un réseau de chaleur urbain alimenté principalement par des énergies
            renouvelables ou de récupération reste un geste éligible. C'est une option particulièrement
            intéressante pour les habitants des grandes villes où ces réseaux se développent rapidement.
            L'aide varie entre <strong>400 € et 1 200 €</strong> selon les revenus du ménage, cumulable
            avec les CEE.
          </p>

          <h3>3. L'audit énergétique hors obligation réglementaire (sous conditions)</h3>
          <p>
            Un audit énergétique non obligatoire est éligible à MaPrimeRénov' par geste
            <strong> à condition d'être couplé à au moins un geste de travaux</strong> parmi les
            catégories encore finançables. Il ne peut donc pas constituer le seul geste d'un dossier.
            Cet audit permet d'identifier les travaux prioritaires, d'établir un plan pluriannuel et,
            surtout, de préparer une éventuelle rénovation d'ampleur ultérieure.
          </p>

          <h2>Les montants MaPrimeRénov' par geste en 2026</h2>
          <p>
            Les aides sont exprimées en pourcentage du coût des travaux ou en forfait, selon les
            ressources du ménage. Pour une PAC air/eau installée par un artisan <strong>RGE</strong>,
            voici les montants indicatifs :
          </p>
          <ul>
            <li><strong>Ménage très modeste :</strong> jusqu'à 5 000 €</li>
            <li><strong>Ménage modeste :</strong> jusqu'à 4 000 €</li>
            <li><strong>Ménage intermédiaire :</strong> jusqu'à 3 000 €</li>
            <li><strong>Ménage supérieur :</strong> non éligible au parcours par geste</li>
          </ul>
          <p>
            Pour une PAC géothermique, les montants peuvent être significativement plus élevés
            en raison du coût d'installation (forage ou capteurs). Ces montants sont à cumuler
            avec la <strong>prime CEE</strong> (sans conditions de revenus) et la <strong>TVA à 5,5 %</strong>,
            ce qui peut couvrir une part très significative du coût total.
          </p>

          <h2>L'exception pour les passoires thermiques F et G</h2>
          <p>
            Si votre logement est classé <strong>F ou G au DPE</strong>, une mesure transitoire
            vous permet de continuer à bénéficier de tous les gestes — y compris ceux supprimés
            depuis le 1er septembre — jusqu'au <strong>31 décembre 2026</strong>. Cette dérogation
            vise à ne pas bloquer les propriétaires de passoires qui n'ont pas encore pu s'engager
            dans une rénovation d'ampleur.
          </p>
          <p>
            Par ailleurs, le décret a repoussé au <strong>1er janvier 2028</strong> (au lieu du
            1er janvier 2027) l'obligation de fournir un DPE pour accéder au parcours par geste
            pour les logements F et G. Vous avez donc encore quelques mois pour agir.
          </p>

          <h2>Ce qui n'est plus finançable seul par MaPrimeRénov' par geste</h2>
          <p>
            Depuis le 1er septembre 2026, les gestes suivants ne sont plus éligibles en
            monogeste en France métropolitaine (hors dérogation F/G) :
          </p>
          <ul>
            <li>Isolation des combles perdus, aménagés ou de la toiture</li>
            <li>Isolation des murs (par l'extérieur ou par l'intérieur)</li>
            <li>Isolation du plancher bas</li>
            <li>Remplacement des fenêtres et portes-fenêtres</li>
            <li>VMC simple ou double flux</li>
            <li>Chauffe-eau solaire individuel (CESI)</li>
            <li>Chaudière à biomasse (granulés, bûches)</li>
            <li>Poêle à bois ou insert de cheminée</li>
            <li>PAC dédiée à la production d'eau chaude sanitaire</li>
          </ul>
          <p>
            Ces travaux restent néanmoins finançables via les <strong>CEE (Certificats d'Économies
            d'Énergie)</strong>, la <strong>TVA à 5,5 %</strong> et l'<strong>éco-PTZ</strong>,
            et peuvent s'intégrer dans un parcours rénovation d'ampleur qui, lui, ouvre l'accès
            aux aides les plus importantes.
          </p>

          <h2>Comment monter votre dossier MaPrimeRénov' par geste maintenant</h2>
          <ol>
            <li>
              <strong>Vérifiez votre éligibilité :</strong> les aides par geste sont réservées à
              la résidence principale, occupée depuis plus de deux ans, construite il y a plus de
              15 ans.
            </li>
            <li>
              <strong>Obtenez un <a href="/dpe-gratuit">DPE à jour</a> :</strong> indispensable
              pour définir la classe de votre logement et savoir si vous bénéficiez de la
              dérogation F/G.
            </li>
            <li>
              <strong>Choisissez un artisan RGE :</strong> sans certification RGE (Reconnu
              Garant de l'Environnement), aucune aide publique n'est accessible, que ce soit
              MaPrimeRénov' ou les CEE.
            </li>
            <li>
              <strong>Déposez votre dossier avant le début des travaux</strong> sur
              maprimerenov.gouv.fr, puis signez le devis. L'ordre est impératif : engagement
              ANAH → devis → chantier → paiement → versement de la prime.
            </li>
            <li>
              <strong>Cumulez avec les CEE :</strong> la prime CEE peut être déduite directement
              de la facture par votre artisan ou versée séparément. Votre <a href="/blog">conseiller
              rénovation</a> peut vous aider à vérifier l'ensemble des aides mobilisables.
            </li>
          </ol>

          <h2>Rénovation d'ampleur : la voie à fort potentiel d'aide</h2>
          <p>
            Si votre logement est classé D, E, F ou G et que vous envisagez plusieurs postes de
            travaux, le <strong>parcours rénovation d'ampleur</strong> (saut de deux classes DPE
            minimum, Accompagnateur Rénov' obligatoire) ouvre des aides nettement plus élevées —
            jusqu'à 80 % du montant HT des travaux pour les ménages très modestes, avec un plafond
            de 70 000 € de travaux. Depuis le 1er septembre 2026, ce parcours exige également
            l'abandon total du chauffage au gaz ou au fioul pour les maisons individuelles.
          </p>
          <p>
            En tant qu'<strong>Accompagnateur Rénov' agréé</strong>, RenoHab peut vous aider à
            évaluer si une rénovation d'ampleur est plus avantageuse qu'un simple geste isolé,
            à monter le dossier et à coordonner les artisans RGE.
          </p>
        </article>

        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Quel geste est le plus rentable pour vous ?</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            PAC, réseau de chaleur ou rénovation d'ampleur : RenoHab analyse votre situation et
            monte votre dossier d'aides gratuitement.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/dpe-gratuit" className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all">
              Estimer mon DPE
            </a>
            <a href="/pompe-a-chaleur" className="px-6 py-3 rounded-full border border-white/70 text-white font-semibold hover:bg-white/10 transition-all">
              Étudier une PAC
            </a>
          </div>
        </div>
      </main>

      <ArticleFooter />
    </div>
  );
}
