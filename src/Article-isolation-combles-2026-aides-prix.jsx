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

const PUBLISHED = '2026-07-09';
const PATH = '/blog/isolation-combles-2026-aides-prix';
const IMAGE = 'https://renohab.fr/blog/isolation-combles-2026-aides-prix.jpg';

export default function ArticleIsolationCombles2026() {
  useSeo({
    title: "Isolation des combles en 2026 : aides, prix et ce qui a changé avec MaPrimeRénov' | RenoHab",
    description:
      "Depuis janvier 2026, l'isolation des combles perdus n'est plus finançable par le parcours par geste de MaPrimeRénov'. Quelles aides restent disponibles ? Prix, CEE, rénovation d'ampleur : le guide complet.",
    path: PATH,
    image: IMAGE,
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline:
        "Isolation des combles en 2026 : aides, prix et ce qui a changé avec MaPrimeRénov'",
      description:
        "Depuis janvier 2026, l'isolation des combles perdus n'est plus finançable par le parcours par geste de MaPrimeRénov'. Quelles aides restent disponibles ? Prix, CEE, rénovation d'ampleur : le guide complet.",
      datePublished: PUBLISHED,
      dateModified: PUBLISHED,
      inLanguage: 'fr-FR',
      image: IMAGE,
      mainEntityOfPage: { '@type': 'WebPage', '@id': `https://renohab.fr${PATH}` },
      author: { '@type': 'Organization', name: 'RenoHab', url: 'https://renohab.fr/' },
      publisher: {
        '@type': 'Organization',
        name: 'RenoHab',
        logo: { '@type': 'ImageObject', url: 'https://renohab.fr/logo192-renohab.png' },
      },
      about: ['Isolation des combles', 'MaPrimeRénov', 'Rénovation énergétique', 'CEE'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 9 juillet 2026 · Isolation &amp; aides
          </p>

          <h1>Isolation des combles en 2026 : aides, prix et ce qui a changé avec MaPrimeRénov'</h1>

          <img
            src="/blog/isolation-combles-2026-aides-prix.jpg"
            alt="Travaux d'isolation des combles perdus par soufflage"
            className="w-full rounded-xl object-cover max-h-80 mb-8"
            loading="eager"
          />

          <p className="lead">
            Isoler ses combles reste l'un des gestes les plus rentables en matière de rénovation
            énergétique : jusqu'à 30 % des déperditions thermiques d'une maison passent par le toit.
            Mais depuis le <strong>1er janvier 2026</strong>, les règles du financement ont changé.
            Si vous envisagez des travaux, voici ce que vous devez savoir pour ne pas rater les
            aides auxquelles vous avez droit.
          </p>

          <h2>Ce qui a changé le 1er janvier 2026</h2>
          <p>
            Jusqu'au 31 décembre 2025, l'isolation des combles perdus (non aménageables) pouvait
            être financée seule, via le <strong>parcours par geste</strong> de MaPrimeRénov'. Ce
            n'est plus le cas depuis le 1er janvier 2026.
          </p>
          <p>
            L'État a recentré le parcours par geste sur des travaux couplés à une logique de
            rénovation plus globale. Résultat : les combles perdus ne sont plus éligibles en
            isolation, sauf dans le cadre d'une <strong>rénovation d'ampleur</strong> (parcours
            accompagné). Ce changement touche des centaines de milliers de propriétaires qui
            projetaient d'isoler leurs combles cet hiver sans engager d'autres travaux en même temps.
          </p>

          <h2>Combles perdus vs combles aménageables : la distinction clé</h2>
          <p>
            Avant de parler d'aides, rappelons les deux cas de figure :
          </p>
          <ul>
            <li>
              <strong>Combles perdus</strong> : espace sous toiture non accessible à la vie (hauteur
              insuffisante, absence d'escalier fixe). L'isolation se fait par soufflage ou
              épandage d'un isolant en vrac sur le plancher des combles.
            </li>
            <li>
              <strong>Combles aménageables</strong> : espace suffisamment haut pour être transformé
              en pièce de vie. L'isolation se fait sous rampant (entre les chevrons) ou en sarking.
            </li>
          </ul>
          <p>
            Cette distinction est essentielle car les deux types n'ont pas le même accès aux aides
            en 2026.
          </p>

          <h2>Les aides disponibles en 2026 selon le type de combles</h2>

          <h3>Pour les combles perdus</h3>
          <p>
            Le parcours par geste de MaPrimeRénov' ne s'applique plus. Trois leviers restent
            cependant cumulables :
          </p>
          <ul>
            <li>
              <strong>La prime CEE (Certificats d'Économie d'Énergie)</strong> — fiche BAR-EN-101 :
              elle exige une résistance thermique R ≥ 7 m².K/W (facilement atteignable avec 30 cm de
              laine soufflée) et son montant varie selon la zone climatique et les revenus du foyer.
              Cette prime est versée directement par un fournisseur d'énergie ou un intermédiaire
              agréé et n'est pas conditionnée à une rénovation globale.
            </li>
            <li>
              <strong>La TVA réduite à 5,5 %</strong> : applicable à la main-d'œuvre et aux
              matériaux (au lieu de 20 %), dès lors que le logement a plus de deux ans et que les
              travaux sont réalisés par un professionnel. Ce seul levier représente une économie
              substantielle sur le devis.
            </li>
            <li>
              <strong>MaPrimeRénov' rénovation d'ampleur</strong> : si vous associez l'isolation des
              combles à au moins un autre geste significatif (remplacement du système de chauffage,
              isolation des murs…), le dossier peut entrer dans le parcours accompagné. La prise en
              charge peut alors atteindre 10 % à 80 % du montant HT selon les revenus. En tant
              qu'Accompagnateur Rénov' agréé, RenoHab monte et suit ce dossier pour vous.
            </li>
          </ul>

          <h3>Pour les combles aménageables</h3>
          <p>
            Bonne nouvelle : les combles aménageables restent éligibles au <strong>parcours par
            geste</strong> de MaPrimeRénov' en 2026. Le montant de l'aide est fixé au mètre carré
            selon les revenus :
          </p>
          <ul>
            <li>Revenus très modestes (catégorie bleue) : 25 €/m²</li>
            <li>Revenus modestes (catégorie jaune) : 20 €/m²</li>
            <li>Revenus intermédiaires (catégorie violet) : 15 €/m²</li>
          </ul>
          <p>
            Cette aide se cumule avec la prime CEE et la TVA réduite à 5,5 %. Le reste à charge
            peut ainsi être considérablement réduit.
          </p>

          <h2>Prix des travaux : ce qu'il faut budgéter</h2>
          <p>
            Les tarifs varient selon le type de combles et la méthode choisie :
          </p>
          <ul>
            <li>
              <strong>Soufflage en combles perdus</strong> : entre 20 et 50 € TTC/m², toutes
              fournitures et pose incluses. C'est la méthode la plus rapide (une journée pour 100 m²)
              et souvent la moins chère.
            </li>
            <li>
              <strong>Isolation sous rampant (combles aménageables)</strong> : entre 50 et
              150 € TTC/m² selon l'isolant (laine de verre, ouate de cellulose, laine de bois) et
              la complexité de la charpente.
            </li>
          </ul>
          <p>
            Pour une maison de 100 m² de surface habitable avec 80 m² de combles perdus, comptez
            entre 1 600 et 4 000 € TTC <em>avant</em> déduction des aides — une enveloppe qui peut
            être ramenée à quelques centaines d'euros selon le profil de revenus.
          </p>

          <h2>Les conditions incontournables</h2>
          <p>
            Quelle que soit l'aide visée, deux conditions s'appliquent systématiquement :
          </p>
          <ul>
            <li>
              <strong>Artisan certifié RGE</strong> (Reconnu Garant de l'Environnement) : les devis
              et factures d'une entreprise non RGE rendent le dossier inéligible.
            </li>
            <li>
              <strong>Logement de plus de deux ans</strong> : les constructions neuves ne sont pas
              concernées par ces dispositifs.
            </li>
          </ul>
          <p>
            Si vous visez la rénovation d'ampleur, un <strong>audit énergétique préalable</strong>{' '}
            est également requis pour valider le scénario de travaux — c'est l'une des premières
            étapes que RenoHab réalise pour vous.
          </p>

          <h2>Par où commencer ?</h2>
          <p>
            La première étape est de connaître la classe énergétique actuelle de votre logement.
            Elle conditionne à la fois l'étendue des travaux nécessaires et le niveau des aides
            auxquelles vous avez droit. Si votre logement est classé{' '}
            <strong>F ou G</strong>, isoler les combles s'inscrit souvent dans une stratégie plus
            large de sortie de passoire thermique — avec des aides bonifiées à la clé.
          </p>
          <p>
            Ensuite, obtenez plusieurs devis d'artisans RGE pour comparer. RenoHab peut vous
            accompagner dans cette démarche : en tant qu'Accompagnateur Rénov' agréé, nous
            coordonnons les artisans, constituons les dossiers d'aides et assurons le suivi du
            chantier de A à Z. Nous travaillons aussi avec vous sur la{' '}
            <a href="/pompe-a-chaleur">pompe à chaleur</a> si le système de chauffage est à
            renouveler en même temps.
          </p>
          <p>
            Commencez par estimer votre{' '}
            <a href="/dpe-gratuit">DPE en ligne gratuitement</a> pour avoir une première idée du
            potentiel de votre logement, ou utilisez notre{' '}
            <a href="/#simulateur">simulateur d'aides</a> pour estimer votre reste à charge.
          </p>
        </article>

        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">
            Isolez vos combles avec les bonnes aides
          </h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            RenoHab identifie vos aides, coordonne les artisans RGE et monte votre dossier
            MaPrimeRénov' — sans frais d'accompagnement à l'avance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/dpe-gratuit"
              className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all"
            >
              Estimer mon DPE gratuitement
            </a>
            <a
              href="/#simulateur"
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
