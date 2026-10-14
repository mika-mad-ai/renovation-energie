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
        <p className="mt-3 text-sm text-gray-500">
          <a href="/mentions-legales" className="hover:text-emerald-300 transition-colors">Mentions légales</a>
          <span className="mx-2 opacity-60">·</span>
          <a href="/confidentialite" className="hover:text-emerald-300 transition-colors">Politique de confidentialité</a>
        </p>
      </div>
    </footer>
  );
}

const PUBLISHED = '2026-10-08';
const PATH = '/blog/radiateurs-inertie-aides-2026';

export default function ArticleRadiateursInertie2026() {
  useSeo({
    title: "Radiateurs à inertie 2026 : prime CEE, TVA 5,5 % et guide pour bien choisir | RenoHab",
    description:
      "Remplacer vos vieux convecteurs par des radiateurs à inertie : prime CEE (fiche BAR-TH-158), TVA à 5,5 %, prix 2026 et critères pour être éligible. Guide complet.",
    path: PATH,
    image: '/blog/radiateurs-inertie-aides-2026.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: "Radiateurs à inertie 2026 : prime CEE, TVA 5,5 % et guide pour bien choisir",
      description:
        "Remplacer vos vieux convecteurs par des radiateurs à inertie : prime CEE (fiche BAR-TH-158), TVA à 5,5 %, prix 2026 et critères pour être éligible.",
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
      about: ['Radiateurs à inertie', 'Prime CEE', 'Chauffage électrique', 'Aides rénovation'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 8 oct. 2026 · Chauffage
          </p>

          <h1>Radiateurs à inertie 2026 : prime CEE, TVA à 5,5 % et guide pour bien choisir</h1>

          <img
            src="/blog/radiateurs-inertie-aides-2026.jpg"
            alt="Radiateurs à inertie électriques dans un salon rénové — aides 2026"
            className="w-full rounded-2xl my-6 object-cover"
            style={{ maxHeight: '420px' }}
            loading="lazy"
          />

          <p className="lead">
            Avec l'arrivée de l'automne, remplacer de vieux convecteurs énergivores par des
            radiateurs à inertie est l'une des améliorations les plus accessibles — et les mieux
            soutenues. En 2026, la prime CEE (fiche BAR-TH-158) reste disponible pour les modèles
            conformes, la TVA est réduite à 5,5 %, et aucune condition de ressources n'est requise.
            Voici tout ce qu'il faut savoir avant d'acheter.
          </p>

          <h2>Inertie sèche, inertie fluide, double cœur de chauffe : quelle différence ?</h2>
          <p>
            Le terme « radiateur à inertie » recouvre trois technologies distinctes, chacune avec
            ses avantages :
          </p>
          <ul>
            <li>
              <strong>Inertie sèche :</strong> le cœur de chauffe est une pierre réfractaire
              (stéatite, céramique, fonte). Montée en température plus lente, mais chaleur douce et
              rayonnante diffusée longtemps après extinction. Prix : 200 à 2 000 € selon puissance
              et marque.
            </li>
            <li>
              <strong>Inertie fluide :</strong> l'élément chauffant est entouré d'un liquide
              caloporteur (huile, bain d'eau). Réaction plus rapide que la pierre, diffusion plus
              homogène. Prix : 300 à 1 000 €.
            </li>
            <li>
              <strong>Double cœur de chauffe :</strong> combine un élément à inertie et un
              convecteur classique pour une montée rapide en température. Prix : 300 à 1 500 €. Ce
              type de radiateur peut être particulièrement performant en régulation fine.
            </li>
          </ul>
          <p>
            Dans tous les cas, l'avantage par rapport aux vieux convecteurs à résistance nue est
            réel : la chaleur est plus uniforme, le confort perçu est meilleur et la consommation
            peut être réduite grâce à une régulation plus précise.
          </p>

          <h2>Quelles aides en 2026 pour les radiateurs à inertie ?</h2>

          <h3>Prime CEE (fiche BAR-TH-158) : jusqu'à 300 € par radiateur</h3>
          <p>
            La fiche d'opération standardisée <strong>BAR-TH-158</strong> (« Émetteur électrique à
            régulation électronique à variation continue ») permet d'obtenir une{' '}
            <a href="/blog/cee-2026-prime-energie-comment-en-profiter">prime CEE</a> sans condition
            de revenus pour l'installation de radiateurs électriques performants. Le montant varie
            selon l'organisme financeur et la zone climatique, mais se situe généralement entre{' '}
            <strong>50 et 300 € par appareil</strong>.
          </p>
          <p>Conditions techniques pour être éligible :</p>
          <ul>
            <li>
              Régulation électronique avec une <strong>amplitude de régulation ≤ 0,3 K</strong> et
              une <strong>dérive ≤ 1 K</strong>.
            </li>
            <li>
              Fonctions avancées obligatoires : détection de fenêtre ouverte, détection de présence
              (ou programmation horaire), indicateur de surconsommation.
            </li>
            <li>
              <strong>Alternative :</strong> le label{' '}
              <strong>NF Électricité Performance 3 étoiles œil</strong> équivaut à ces critères — un
              bon réflexe à vérifier sur l'étiquette avant d'acheter.
            </li>
          </ul>
          <p>Conditions administratives :</p>
          <ul>
            <li>Logement achevé depuis <strong>plus de 2 ans</strong>.</li>
            <li>Installation réalisée par un <strong>professionnel RGE</strong>.</li>
            <li>
              Demande de prime CEE déposée <strong>avant</strong> la signature du devis — sans cette
              étape préalable, la prime est perdue.
            </li>
          </ul>

          <h3>TVA à 5,5 % : un avantage immédiat sans démarche</h3>
          <p>
            La{' '}
            <a href="/blog/tva-5-5-renovation-energetique-2026">TVA réduite à 5,5 %</a> s'applique
            à la fourniture et à la pose de radiateurs à inertie dans un logement de plus de 2 ans,
            dès lors qu'un artisan RGE réalise les travaux. Depuis la suppression du formulaire
            Cerfa, une simple mention sur le devis suffit à formaliser l'éligibilité. Sur une
            installation de 2 000 €, l'économie de TVA atteint environ 290 €.
          </p>

          <h3>MaPrimeRénov' : non éligible en parcours par geste</h3>
          <p>
            Contrairement à la pompe à chaleur ou à l'isolation, les radiateurs électriques — y
            compris à inertie — <strong>ne sont pas pris en charge</strong> par MaPrimeRénov' dans
            le parcours par geste. Ils peuvent en revanche être inclus dans un projet de rénovation
            d'ampleur si les travaux permettent un saut de deux classes DPE. Dans ce cas,
            l'ensemble du chantier (isolation + chauffage) peut bénéficier d'un taux d'aide de 40
            à 80 % selon les revenus — mais la PAC reste alors souvent le système de chauffage
            conseillé.
          </p>

          <h3>Éco-PTZ : financement possible en rénovation globale</h3>
          <p>
            L'{' '}
            <a href="/blog/eco-ptz-2026-pret-taux-zero-renovation">éco-PTZ</a> peut financer le
            remplacement de radiateurs électriques dans le cadre d'un bouquet de travaux ou d'une
            rénovation globale. Le prêt peut atteindre 50 000 € à 0 % d'intérêt, sans condition de
            ressources. Il est cumulable avec la prime CEE.
          </p>

          <h2>Prix et économies attendues</h2>
          <p>
            Pour une maison de 100 m² chauffée par 6 vieux convecteurs à résistance nue, une
            installation de radiateurs à inertie performants avec régulation fine représente un
            investissement de <strong>3 000 à 8 000 €</strong> (matériel + pose), selon les modèles
            choisis.
          </p>
          <ul>
            <li>
              Prime CEE cumulée (6 radiateurs) : environ <strong>300 à 1 000 €</strong> selon
              l'organisme.
            </li>
            <li>TVA réduite à 5,5 % : économie de 14,5 % sur le total HT.</li>
            <li>
              Économies sur la facture : une meilleure régulation peut réduire la consommation de
              chauffage de <strong>10 à 25 %</strong> par rapport à des convecteurs anciens sans
              thermostat programmable.
            </li>
          </ul>
          <p>
            Pour maximiser l'impact sur le DPE de votre logement, associez ce remplacement à de
            l'isolation des combles ou des murs. Un{' '}
            <a href="/dpe-gratuit">diagnostic de performance énergétique</a> préalable permet
            d'identifier les gestes les plus rentables.
          </p>

          <h2>Les bonnes questions avant d'acheter</h2>
          <ul>
            <li>
              <strong>Puissance adaptée au volume :</strong> comptez environ 80 à 120 W/m² pour une
              pièce bien isolée, jusqu'à 150 W/m² pour une pièce mal isolée.
            </li>
            <li>
              <strong>Vérifiez le label NF Électricité Performance :</strong> la mention « 3 étoiles
              œil » sur l'appareil atteste de l'éligibilité CEE sans démarche supplémentaire.
            </li>
            <li>
              <strong>Connectivité :</strong> beaucoup de modèles récents se pilotent via
              application mobile ou sont compatibles avec les gestionnaires d'énergie. Un atout pour
              la régulation pièce par pièce.
            </li>
            <li>
              <strong>Devis avant demande CEE :</strong> ne signez rien avant d'avoir déposé la
              demande de prime auprès de votre fournisseur d'énergie ou d'un agrégateur CEE — la
              règle est stricte.
            </li>
            <li>
              <strong>Professionnel RGE :</strong> la pose par un artisan{' '}
              <a href="/blog/choisir-artisan-rge-2026">certifié RGE</a> est indispensable pour la
              TVA à 5,5 % et la prime CEE.
            </li>
          </ul>

          <h2>Radiateurs à inertie ou pompe à chaleur : comment choisir ?</h2>
          <p>
            Les radiateurs à inertie électriques sont une solution particulièrement adaptée dans
            plusieurs situations : appartement sans espace extérieur pour une unité de PAC,
            logement occupé partiellement (résidence secondaire, pièces peu utilisées), ou budget
            limité. En revanche, pour une maison individuelle, la{' '}
            <a href="/pompe-a-chaleur">pompe à chaleur air/eau</a> reste la solution la plus
            subventionnée et la plus rentable sur le long terme, avec un COP de 3 à 4,5 contre 1
            pour les radiateurs électriques.
          </p>
          <p>
            Si vous hésitez, un bilan thermique rapide réalisé par un Accompagnateur Rénov' comme
            RenoHab vous donnera la réponse adaptée à votre logement et à vos contraintes.
          </p>
        </article>

        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Quel chauffage est le plus rentable pour vous ?</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            RenoHab analyse votre logement, compare les solutions et monte vos dossiers CEE et
            MaPrimeRénov'. Échangez avec un conseiller gratuitement.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/dpe-gratuit" className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all">
              Estimer mon DPE
            </a>
            <a href="/pompe-a-chaleur" className="px-6 py-3 rounded-full border border-white/70 text-white font-semibold hover:bg-white/10 transition-all">
              Découvrir nos PAC
            </a>
          </div>
        </div>
      </main>

      <ArticleFooter />
    </div>
  );
}
