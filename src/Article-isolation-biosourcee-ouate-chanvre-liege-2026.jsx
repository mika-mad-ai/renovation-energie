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

const PUBLISHED = '2026-10-24';
const PATH = '/blog/isolation-biosourcee-ouate-chanvre-liege-2026';

export default function ArticleIsolationBiosourcee2026() {
  useSeo({
    title: "Isolation biosourcée en 2026 : ouate de cellulose, laine de chanvre et liège — guide et aides | RenoHab",
    description:
      "Ouate de cellulose, laine de chanvre, liège : tout savoir sur les isolants biosourcés en 2026. Performances, prix au m², aides CEE et TVA 5,5 % disponibles.",
    path: PATH,
    image: '/blog/isolation-biosourcee-ouate-chanvre-liege-2026.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline:
        "Isolation biosourcée en 2026 : ouate de cellulose, laine de chanvre et liège — guide et aides",
      description:
        "Ouate de cellulose, laine de chanvre, liège : tout savoir sur les isolants biosourcés en 2026. Performances, prix au m², aides CEE et TVA 5,5 % disponibles.",
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
      about: ['Isolation biosourcée', 'Ouate de cellulose', 'Laine de chanvre', 'Liège', 'Rénovation énergétique'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 24 oct. 2026 · Isolation
          </p>

          <h1>Isolation biosourcée en 2026 : ouate de cellulose, laine de chanvre et liège — guide et aides</h1>

          <img
            src="/blog/isolation-biosourcee-ouate-chanvre-liege-2026.jpg"
            alt="Matériaux d'isolation biosourcés : ouate de cellulose, laine de chanvre et liège pour la rénovation énergétique"
            className="w-full rounded-xl my-6"
            loading="lazy"
          />

          <p className="lead">
            Laine de verre ou laine de roche ne sont plus les seules options pour isoler votre logement.
            Ouate de cellulose, laine de chanvre, liège expansé ou fibres de bois : les isolants
            biosourcés gagnent du terrain. En 2026, ils sont éligibles aux mêmes aides que les
            matériaux conventionnels, à condition de respecter les critères techniques. Ce guide
            fait le point sur leurs performances, leurs prix et les financements disponibles.
          </p>

          <h2>Qu'est-ce qu'un isolant biosourcé ?</h2>
          <p>
            Un isolant est dit <strong>biosourcé</strong> lorsqu'il est fabriqué à partir de matières
            premières d'origine végétale ou animale renouvelables. Les plus répandus sur le marché
            français sont :
          </p>
          <ul>
            <li>
              <strong>L'ouate de cellulose</strong> : fabriquée à partir de papier journal recyclé,
              elle est soufflée en vrac dans les combles perdus ou insufflée dans les murs creux.
              C'est l'isolant biosourcé le moins cher.
            </li>
            <li>
              <strong>La laine de chanvre</strong> : produite à partir de la tige du chanvre industriel,
              disponible en panneaux, rouleaux ou vrac. Très respirante, elle convient particulièrement
              aux bâtiments anciens en pierre ou en brique.
            </li>
            <li>
              <strong>Le liège expansé</strong> : matériau naturellement imputrescible, résistant à
              l'humidité et aux nuisibles. Son prix élevé est compensé par sa très longue durée de vie
              et ses excellentes performances acoustiques.
            </li>
            <li>
              <strong>Les panneaux de fibres de bois</strong> : issus de résidus de scierie, ils
              excellent en isolation de toiture et en isolation par l'extérieur (ITE), grâce à leur
              forte densité et leur inertie thermique.
            </li>
          </ul>

          <h2>Performances thermiques : que valent ces matériaux ?</h2>
          <p>
            Les isolants biosourcés atteignent des valeurs de conductivité thermique (λ) comparables
            aux isolants minéraux. À titre indicatif :
          </p>
          <ul>
            <li><strong>Ouate de cellulose</strong> : λ entre 0,038 et 0,042 W/m·K selon la technique de pose</li>
            <li><strong>Laine de chanvre</strong> : λ entre 0,038 et 0,044 W/m·K</li>
            <li><strong>Liège expansé</strong> : λ entre 0,037 et 0,043 W/m·K</li>
            <li><strong>Fibres de bois</strong> : λ entre 0,038 et 0,050 W/m·K selon la densité</li>
          </ul>
          <p>
            Ces valeurs permettent d'atteindre les résistances thermiques (R) exigées par les fiches
            CEE — par exemple R ≥ 7 m²·K/W pour les combles perdus en zone H1, R ≥ 3,7 m²·K/W pour
            les murs. La certification <strong>ACERMI</strong> (ou équivalent) attestant la performance
            du produit est indispensable pour accéder aux aides financières.
          </p>

          <h2>Les vrais avantages des biosourcés par rapport aux isolants minéraux</h2>

          <h3>Confort d'été</h3>
          <p>
            Grâce à leur forte densité et leur capacité thermique massique élevée, les fibres de bois
            et le liège <strong>amortissent les pics de chaleur estivaux</strong>. En maison
            individuelle non climatisée, cet effet « déphasage thermique » peut faire gagner plusieurs
            heures avant que la chaleur extérieure n'atteigne les pièces de vie.
          </p>

          <h3>Compatibilité avec le bâti ancien</h3>
          <p>
            Les murs en pierre ou en pisé nécessitent un isolant <strong>perméable à la vapeur d'eau</strong>
            (« respirant »). La laine de chanvre et la ouate de cellulose répondent à cette exigence :
            elles régulent l'humidité sans piéger l'humidité dans les parois, ce qui prévient les
            moisissures et la dégradation des matériaux. La laine de verre ou le polystyrène extrudé,
            peu perméables, sont déconseillés dans ces configurations.
          </p>

          <h3>Bilan carbone favorable</h3>
          <p>
            Ces matériaux stockent le carbone absorbé pendant la croissance de la plante. La ouate de
            cellulose, fabriquée à partir de papier recyclé, affiche un bilan carbone négatif sur
            l'ensemble de son cycle de vie. Cet argument pèse dans les projets de rénovation visant
            une labellisation BBC Rénovation ou Effinergie Rénovation.
          </p>

          <h2>Prix au m² en 2026 (fourniture et pose)</h2>
          <p>
            Les fourchettes ci-dessous sont indicatives ; elles varient selon la zone géographique,
            l'épaisseur et la technique de pose :
          </p>
          <ul>
            <li><strong>Ouate de cellulose soufflée en combles perdus</strong> : 20 à 55 €/m²</li>
            <li><strong>Laine de chanvre en panneaux (cloisons, rampants)</strong> : 30 à 60 €/m²</li>
            <li><strong>Liège expansé en panneaux (ITE ou sol)</strong> : 50 à 90 €/m²</li>
            <li><strong>Fibres de bois en ITE</strong> : 60 à 110 €/m² selon l'épaisseur</li>
          </ul>
          <p>
            La ouate soufflée reste l'option la plus compétitive pour les combles perdus, souvent
            comparable en coût total à la laine de verre tout en offrant de meilleures performances
            en confort d'été.
          </p>

          <h2>Quelles aides financières en 2026 ?</h2>
          <p>
            Depuis le 1er septembre 2026, l'isolation seule n'est plus finançable via{' '}
            <strong>MaPrimeRénov' par geste</strong>. En revanche, plusieurs dispositifs restent
            accessibles :
          </p>

          <h3>Prime CEE (Certificats d'Économie d'Énergie)</h3>
          <p>
            Les fiches standardisées CEE (notamment <em>BAR-EN-101</em> pour les combles,{' '}
            <em>BAR-EN-102</em> pour les murs et <em>BAR-EN-103</em> pour les planchers bas) sont
            applicables à tous les isolants certifiés ACERMI atteignant le R minimum requis, quelle
            que soit leur origine biosourcée ou minérale. Le montant varie selon l'obligé (fournisseur
            d'énergie) qui verse la prime et la zone climatique du logement.
          </p>

          <h3>TVA à 5,5 %</h3>
          <p>
            Tous les travaux d'isolation thermique bénéficient de la <a href="/dpe-gratuit">TVA réduite
            à 5,5 %</a>, sans condition de revenus, dès lors que le logement a plus de 2 ans et que
            l'artisan pose une simple mention sur le devis.
          </p>

          <h3>Éco-PTZ</h3>
          <p>
            Le prêt à taux zéro écologique, accessible sans condition de ressources jusqu'à
            50 000 €, peut financer des travaux d'isolation biosourcée seuls ou combinés à d'autres
            gestes.
          </p>

          <h3>MaPrimeRénov' rénovation d'ampleur</h3>
          <p>
            Si l'isolation s'inscrit dans un projet global permettant un saut d'au moins deux classes
            DPE, elle peut être intégrée à la{' '}
            <a href="/blog">rénovation d'ampleur</a> et financer jusqu'à 80 % du coût total
            des travaux pour les ménages très modestes. L'isolant biosourcé est éligible au même titre
            qu'un isolant conventionnel, à condition qu'il soit certifié.
          </p>

          <h2>Quel isolant biosourcé choisir selon la situation ?</h2>
          <ul>
            <li>
              <strong>Combles perdus</strong> : ouate de cellulose soufflée — meilleur rapport
              performance/prix, bonne inertie.
            </li>
            <li>
              <strong>Rampants de toiture ou cloisons intérieures</strong> : laine de chanvre en
              rouleaux ou panneaux — facile à poser, très respirante.
            </li>
            <li>
              <strong>Isolation par l'extérieur (ITE) ou toiture-terrasse</strong> : fibres de bois
              haute densité ou liège expansé — résistance mécanique et imperméabilité.
            </li>
            <li>
              <strong>Maison ancienne en pierre (avant 1948)</strong> : laine de chanvre ou ouate —
              perméance à la vapeur indispensable.
            </li>
          </ul>

          <h2>Points de vigilance</h2>
          <p>
            Quelques précautions à garder en tête avant de commander :
          </p>
          <ul>
            <li>
              Exiger la fiche ACERMI du produit : c'est elle qui justifie la performance R déclarée
              et conditionne les aides CEE.
            </li>
            <li>
              Faire appel à un artisan <strong>RGE</strong> (Reconnu Garant de l'Environnement) :
              c'est obligatoire pour toute demande CEE ou Éco-PTZ.
            </li>
            <li>
              Prévoir un <a href="/dpe-gratuit">DPE actualisé</a> après travaux : il valorise votre
              bien et peut débloquer l'attestation d'amélioration de classe pour la revente ou la
              location.
            </li>
          </ul>
        </article>

        {/* CTA RenoHab */}
        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Votre projet d'isolation, financé et accompagné</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            Audit énergétique, choix des matériaux, montage des dossiers CEE et éco-PTZ :
            RenoHab, Accompagnateur Rénov' agréé, prend en charge tout le processus.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/dpe-gratuit" className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all">
              Estimer mon DPE
            </a>
            <a href="/pompe-a-chaleur" className="px-6 py-3 rounded-full border border-white/70 text-white font-semibold hover:bg-white/10 transition-all">
              Voir les aides chauffage
            </a>
          </div>
        </div>
      </main>

      <ArticleFooter />
    </div>
  );
}
