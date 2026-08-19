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

const PUBLISHED = '2026-08-19';
const PATH = '/blog/cumul-aides-renovation-maprimerenov-cee-eco-ptz';

export default function ArticleCumulAidesRenovation() {
  useSeo({
    title: "Cumuler MaPrimeRénov', CEE et Éco-PTZ en 2026 : mode d'emploi complet | RenoHab",
    description:
      "Comment combiner MaPrimeRénov', les CEE et l'Éco-PTZ pour financer jusqu'à 90 % de vos travaux de rénovation énergétique en 2026. Règles, plafonds et ordre des démarches.",
    path: PATH,
    image: '/blog/cumul-aides-renovation-maprimerenov-cee-eco-ptz.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline:
        "Cumuler MaPrimeRénov', CEE et Éco-PTZ en 2026 : mode d'emploi complet",
      description:
        "Comment combiner MaPrimeRénov', les CEE et l'Éco-PTZ pour financer jusqu'à 90 % de vos travaux de rénovation énergétique en 2026. Règles, plafonds et ordre des démarches.",
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
      about: ['MaPrimeRénov', 'CEE', 'Éco-PTZ', 'Rénovation énergétique', 'Aides travaux 2026'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 19 août 2026 · Financement & aides
          </p>

          <h1>Cumuler MaPrimeRénov', CEE et Éco-PTZ en 2026 : mode d'emploi complet</h1>

          <img
            src="/blog/cumul-aides-renovation-maprimerenov-cee-eco-ptz.jpg"
            alt="Maison rénovée — cumul des aides MaPrimeRénov', CEE et Éco-PTZ en 2026"
            className="w-full rounded-xl shadow-soft mb-8 object-cover"
            style={{ maxHeight: '420px' }}
          />

          <p className="lead">
            En 2026, la rénovation énergétique d'un logement peut être financée à hauteur de{' '}
            <strong>75 à 90 % du montant des travaux</strong> pour les ménages modestes, à
            condition de bien combiner les dispositifs disponibles. MaPrimeRénov', les Certificats
            d'Économies d'Énergie (CEE) et l'Éco-PTZ forment un trio puissant — encore faut-il
            connaître les règles du jeu.
          </p>

          <h2>Les trois piliers du financement de la rénovation</h2>

          <h3>MaPrimeRénov' (ANAH)</h3>
          <p>
            Versée par l'ANAH, MaPrimeRénov' est la subvention centrale de l'État. Elle se décline
            en deux parcours en 2026 :
          </p>
          <ul>
            <li>
              <strong>Parcours par geste</strong> : isolation, pompe à chaleur, VMC double flux,
              chauffe-eau thermodynamique… chaque poste ouvre droit à une prime calculée selon les
              revenus et la zone géographique.
            </li>
            <li>
              <strong>Parcours rénovation d'ampleur</strong> : pour les projets visant un saut
              d'au moins deux classes DPE, les aides atteignent jusqu'à 70 % des dépenses
              (plafonnées à 70 000 €), avec un bonus si le logement sort de la classe F ou G.
            </li>
          </ul>
          <p>
            Retrouvez le détail des montants sur notre page dédiée à la{' '}
            <a href="/">rénovation d'ampleur et à l'accompagnement RenoHab</a>.
          </p>

          <h3>Les CEE (Certificats d'Économies d'Énergie)</h3>
          <p>
            Les CEE sont financés par les fournisseurs d'énergie (EDF, TotalEnergies, Engie…),
            qui sont légalement obligés de financer des travaux d'économies d'énergie. Leur
            enveloppe globale dépasse <strong>8 milliards d'euros</strong> pour la 6e période
            (2022-2026). Les primes CEE s'obtiennent via un délégataire ou directement auprès d'un
            fournisseur, et se cumulent avec MaPrimeRénov' dans le parcours par geste.
          </p>
          <p>
            <strong>Règle absolue :</strong> la demande de prime CEE doit être effectuée{' '}
            <em>avant</em> la signature du devis de travaux. Tout devis signé avant l'accord CEE
            entraîne la perte de la prime.
          </p>

          <h3>L'Éco-PTZ (Prêt à Taux Zéro)</h3>
          <p>
            L'Éco-PTZ permet d'emprunter sans intérêts pour financer le reste à charge après
            subventions. En 2026, son plafond monte à <strong>50 000 €</strong> pour une
            rénovation d'ampleur, remboursables sur <strong>20 ans maximum</strong>. Il est
            accordé par une banque partenaire et ne nécessite pas de conditions de ressources.
          </p>
          <p>
            Pour en savoir plus sur les conditions et démarches,{' '}
            <a href="/blog/eco-ptz-2026-pret-taux-zero-renovation">
              consultez notre guide complet sur l'Éco-PTZ 2026
            </a>
            .
          </p>

          <h2>Les règles de cumul à connaître</h2>

          <h3>Plafonds selon les revenus</h3>
          <p>
            Le cumul de MaPrimeRénov' + CEE + Éco-PTZ (complété par la TVA à 5,5 % et les aides
            locales) est encadré par un <strong>taux d'aide maximum</strong> calculé sur le montant
            HT des travaux :
          </p>
          <ul>
            <li>
              <strong>Ménages très modestes :</strong> jusqu'à <strong>90 %</strong> du coût des
              travaux.
            </li>
            <li>
              <strong>Ménages modestes :</strong> jusqu'à <strong>75 %</strong>.
            </li>
            <li>
              <strong>Revenus intermédiaires :</strong> jusqu'à <strong>60 %</strong>.
            </li>
            <li>
              <strong>Revenus supérieurs :</strong> jusqu'à <strong>40 %</strong> (uniquement en
              rénovation d'ampleur).
            </li>
          </ul>
          <p>
            Ces plafonds sont globaux : si l'ensemble des aides dépasse le seuil applicable, la
            prime MaPrimeRénov' est réduite en conséquence.
          </p>

          <h3>Rénovation d'ampleur : le CEE est intégré au dossier ANAH</h3>
          <p>
            Dans le <strong>parcours rénovation d'ampleur</strong>, vous n'avez pas à démarcher
            vous-même un délégataire CEE : l'ANAH intègre les CEE dans le calcul de votre
            dossier MaPrimeRénov'. L'Accompagnateur Rénov' coordonne l'ensemble des démarches.
          </p>
          <p>
            En revanche, dans le <strong>parcours par geste</strong>, CEE et MaPrimeRénov' sont
            deux démarches distinctes à mener en parallèle — et la demande CEE doit précéder la
            signature du devis.
          </p>

          <h3>La TVA à 5,5 % et les aides locales s'ajoutent au cumul</h3>
          <p>
            La{' '}
            <a href="/blog/tva-5-5-renovation-energetique-2026">TVA réduite à 5,5 %</a> s'applique
            automatiquement sur les travaux de rénovation énergétique réalisés par une entreprise
            qualifiée RGE. Elle représente un gain réel de 14,5 points de TVA sur le montant facturé.
            Les aides régionales, départementales ou communales (Action Logement, aides locales…)
            sont elles aussi cumulables dans la limite des plafonds ci-dessus.
          </p>

          <h2>L'ordre des démarches : ne pas brûler les étapes</h2>
          <ol>
            <li>
              <strong>Faire réaliser un audit énergétique ou un DPE</strong> pour connaître la
              classe actuelle du logement et cibler les travaux prioritaires.
            </li>
            <li>
              <strong>Obtenir un accord de principe CEE</strong> auprès d'un délégataire{' '}
              <em>avant</em> de signer le moindre devis.
            </li>
            <li>
              <strong>Déposer la demande MaPrimeRénov'</strong> sur le portail ANAH (avec
              l'aide de l'Accompagnateur Rénov' pour le parcours d'ampleur).
            </li>
            <li>
              <strong>Signer les devis et lancer les travaux</strong> après avoir reçu les accords
              de subvention.
            </li>
            <li>
              <strong>Solliciter l'Éco-PTZ</strong> auprès d'une banque partenaire pour couvrir
              le reste à charge, en présentant les devis et la décision d'accord MaPrimeRénov'.
            </li>
          </ol>

          <h2>Un exemple concret : isolation + pompe à chaleur pour une maison individuelle</h2>
          <p>
            Prenons une famille aux <strong>revenus modestes</strong> qui engage{' '}
            <strong>30 000 € HT</strong> de travaux (isolation des combles, murs et installation
            d'une <a href="/pompe-a-chaleur">pompe à chaleur air/eau</a>) :
          </p>
          <ul>
            <li>MaPrimeRénov' (parcours d'ampleur) : environ 15 000 à 18 000 €.</li>
            <li>CEE intégrés au dossier : 1 500 à 3 000 € supplémentaires.</li>
            <li>TVA à 5,5 % : économie de 14,5 % sur 30 000 € soit 4 350 € nets.</li>
            <li>
              Reste à charge estimé : 8 000 à 10 000 €, finançable via Éco-PTZ sans intérêts.
            </li>
          </ul>
          <p>
            Résultat : des travaux à 30 000 € financés à plus de 65 %, avec un prêt à taux zéro
            pour le solde. Un projet qui se rembourse en partie via les économies de chauffage.
          </p>

          <h2>Ce qui change à partir de septembre 2026</h2>
          <p>
            Depuis le 1er septembre 2026, la liste des gestes éligibles au parcours par geste
            MaPrimeRénov' a été réduite : certains travaux d'isolation secondaires ne sont plus
            finançables en mono-geste. Le cumul avec les CEE reste possible sur les gestes encore
            éligibles. Pour connaître l'impact sur votre projet,{' '}
            <a href="/#simulator">utilisez notre simulateur en ligne</a>.
          </p>
        </article>

        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">
            Maximisez vos aides avec RenoHab
          </h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            Accompagnateur Rénov' agréé, RenoHab monte votre dossier MaPrimeRénov', coordonne les
            CEE et vous aide à décrocher l'Éco-PTZ. Résultat : le reste à charge le plus bas
            possible.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/dpe-gratuit"
              className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all"
            >
              Obtenir mon DPE gratuit
            </a>
            <a
              href="/pompe-a-chaleur"
              className="px-6 py-3 rounded-full border border-white/70 text-white font-semibold hover:bg-white/10 transition-all"
            >
              Étudier une pompe à chaleur
            </a>
          </div>
        </div>
      </main>

      <ArticleFooter />
    </div>
  );
}
