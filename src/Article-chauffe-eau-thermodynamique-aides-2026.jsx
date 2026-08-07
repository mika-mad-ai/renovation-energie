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

const PUBLISHED = '2026-08-07';
const PATH = '/blog/chauffe-eau-thermodynamique-aides-2026';

export default function ArticleCETAides2026() {
  useSeo({
    title: "Chauffe-eau thermodynamique 2026 : prix, aides et économies — Guide complet | RenoHab",
    description:
      "Découvrez comment le chauffe-eau thermodynamique divise votre facture d'eau chaude par 3, les aides 2026 disponibles (MaPrimeRénov', CEE, TVA 5,5 %, Éco-PTZ) et comment choisir le bon modèle.",
    path: PATH,
    image: '/blog/chauffe-eau-thermodynamique-aides-2026.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: "Chauffe-eau thermodynamique 2026 : prix, aides et économies",
      description:
        "Découvrez comment le chauffe-eau thermodynamique divise votre facture d'eau chaude par 3, les aides 2026 disponibles et comment choisir le bon modèle.",
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
      about: ['Chauffe-eau thermodynamique', 'MaPrimeRénov', 'Aides rénovation énergétique', 'CEE'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 7 août 2026 · Équipement &amp; économies
          </p>

          <h1>Chauffe-eau thermodynamique 2026 : prix, aides et économies</h1>

          <img
            src="/blog/chauffe-eau-thermodynamique-aides-2026.jpg"
            alt="Chauffe-eau thermodynamique — installation dans un logement"
            className="w-full rounded-xl object-cover max-h-80 mb-8"
            loading="eager"
          />

          <p className="lead">
            L'eau chaude sanitaire représente en moyenne <strong>10 à 15 % de la facture d'énergie</strong> d'un foyer.
            Le chauffe-eau thermodynamique (CET) est aujourd'hui l'équipement le plus efficace pour réduire cette dépense :
            il consomme jusqu'à trois fois moins d'électricité qu'un chauffe-eau classique, et il est éligible à
            plusieurs aides financières cumulables en 2026. Voici tout ce que vous devez savoir avant de vous lancer.
          </p>

          <h2>Comment fonctionne un chauffe-eau thermodynamique ?</h2>
          <p>
            Contrairement à un chauffe-eau électrique traditionnel qui convertit l'électricité en chaleur par
            effet Joule, le CET fonctionne comme une <strong>pompe à chaleur miniature</strong>. Il capte les calories
            présentes dans l'air ambiant (ou l'air extérieur) grâce à un circuit frigorifique — évaporateur,
            compresseur, condenseur — et les transfère à l'eau contenue dans son ballon.
          </p>
          <p>
            Résultat : pour <strong>1 kWh d'électricité consommé</strong>, le CET restitue entre <strong>2,5 et 4 kWh de chaleur</strong>,
            selon la température de l'air source. Ce ratio s'appelle le coefficient de performance (COP).
            En pratique, cela représente une économie de <strong>60 à 75 % sur la production d'eau chaude</strong>
            par rapport à un chauffe-eau électrique à résistance.
          </p>

          <h3>Les trois grandes configurations</h3>
          <ul>
            <li>
              <strong>Air extrait</strong> : le CET puise les calories dans l'air vicié de la pièce où il est installé
              (buanderie, garage, cellier). C'est la solution la plus courante en rénovation.
            </li>
            <li>
              <strong>Air ambiant</strong> : l'appareil prélève l'air de la pièce et le rejette dans la même pièce,
              légèrement refroidi. Convient aux espaces chauffés mais non habités.
            </li>
            <li>
              <strong>Air extérieur (split)</strong> : l'unité de production de chaleur est installée à l'extérieur et
              reliée au ballon d'eau chaude à l'intérieur. Idéal pour les logements sans espace dédié.
            </li>
          </ul>

          <h2>Prix d'un chauffe-eau thermodynamique en 2026</h2>
          <p>
            En 2026, le coût d'un CET, fourniture et installation comprises, se situe entre <strong>2 000 € et 4 500 € TTC</strong>.
            Ce prix varie selon :
          </p>
          <ul>
            <li>la <strong>capacité du ballon</strong> (150 à 300 litres selon la taille du foyer) ;</li>
            <li>le <strong>type de configuration</strong> (monobloc ou split) ;</li>
            <li>la <strong>marque et le modèle</strong> (Atlantic, Thermor, Ariston, Daikin…) ;</li>
            <li>la <strong>complexité de l'installation</strong> (dépose de l'ancien équipement, plomberie).</li>
          </ul>
          <p>
            Grâce aux économies réalisées sur la facture d'énergie — <strong>jusqu'à 300 € par an</strong> pour un foyer
            de 4 personnes — l'investissement est généralement amorti en <strong>5 à 10 ans</strong>, parfois moins si les
            aides financières sont bien combinées.
          </p>

          <h2>Quelles aides financières pour un CET en 2026 ?</h2>
          <p>
            Plusieurs dispositifs d'aide sont <strong>cumulables</strong> pour l'installation d'un chauffe-eau
            thermodynamique dans votre résidence principale. L'installation doit obligatoirement être réalisée
            par un <strong>artisan certifié RGE</strong> (Reconnu Garant de l'Environnement).
          </p>

          <h3>MaPrimeRénov' — parcours par geste</h3>
          <p>
            Le CET est éligible à <strong>MaPrimeRénov'</strong> dans le cadre du parcours par geste, avec un montant
            qui varie selon le niveau de ressources du ménage :
          </p>
          <ul>
            <li><strong>Ménages modestes</strong> (revenus MaPrimeRénov' bleus / jaunes) : jusqu'à <strong>1 200 €</strong></li>
            <li><strong>Ménages intermédiaires</strong> (verts) : environ <strong>800 €</strong></li>
            <li><strong>Ménages aisés</strong> (roses) : environ <strong>400 €</strong></li>
          </ul>
          <p>
            À noter : le gouvernement a annoncé des ajustements du parcours par geste à partir de septembre 2026.
            Renseignez-vous sur les{' '}
            <a href="/blog/maprimerenov-septembre-2026-gestes-suppression">
              évolutions de MaPrimeRénov' pour l'automne 2026
            </a>{' '}
            avant de déposer votre dossier.
          </p>

          <h3>Prime CEE (Certificats d'Économies d'Énergie)</h3>
          <p>
            Les fournisseurs d'énergie sont tenus de financer des travaux d'économies d'énergie via les CEE.
            Pour un CET, la prime CEE oscille généralement entre <strong>90 et 150 €</strong>, parfois davantage
            selon le fournisseur et la localisation géographique du logement.
            Elle est <strong>sans condition de ressources</strong> et s'ajoute à MaPrimeRénov'.
            Comparez les offres de plusieurs obligés (EDF, Engie, TotalEnergies, Eneco…) pour obtenir le meilleur montant.
          </p>

          <h3>TVA réduite à 5,5 %</h3>
          <p>
            L'ensemble du chantier — fourniture et pose — bénéficie d'une <strong>TVA à 5,5 %</strong> au lieu
            de 20 %, sans condition de ressources, dès lors que le logement a plus de 2 ans et que les travaux
            sont réalisés par un professionnel. Pour un CET à 3 500 € HT, cela représente une économie
            d'environ <strong>500 €</strong> par rapport au taux normal.
            En savoir plus sur la{' '}
            <a href="/blog/tva-5-5-renovation-energetique-2026">TVA à 5,5 % en rénovation énergétique</a>.
          </p>

          <h3>Éco-PTZ — prêt à taux zéro</h3>
          <p>
            L'<strong>Éco-prêt à taux zéro</strong> (Éco-PTZ) permet de financer les travaux sans intérêts,
            jusqu'à <strong>15 000 €</strong> pour un seul geste éligible. Il est accessible sans conditions de
            ressources et remboursable sur 15 ans. Idéal pour couvrir l'investissement initial sans puiser dans
            votre épargne.
          </p>

          <h2>Quel chauffe-eau thermodynamique choisir ?</h2>
          <p>
            Quelques critères pour ne pas vous tromper :
          </p>
          <ul>
            <li>
              <strong>Capacité du ballon</strong> : comptez 50 litres par personne en moyenne (200 litres
              pour un foyer de 4 personnes). Un ballon sous-dimensionné imposera des résistances d'appoint
              énergivores.
            </li>
            <li>
              <strong>Espace disponible</strong> : le CET monobloc nécessite un volume d'au moins 20 m³ autour
              de lui pour fonctionner correctement (garage, comble, buanderie). En appartement ou espace réduit,
              préférez un modèle split.
            </li>
            <li>
              <strong>Niveau sonore</strong> : les CET dégagent un léger bruit de ventilation (40 à 55 dB).
              Évitez de les installer près d'une chambre.
            </li>
            <li>
              <strong>COP certifié</strong> : vérifiez le COP mesuré à 15 °C — un COP ≥ 2,9 garantit
              de bonnes performances toute l'année.
            </li>
            <li>
              <strong>Connectivité</strong> : certains modèles sont pilotables via une application
              et s'adaptent aux heures creuses ou à la production solaire, maximisant ainsi les économies.
            </li>
          </ul>

          <h2>Le chauffe-eau thermodynamique améliore-t-il le DPE ?</h2>
          <p>
            Oui — et c'est souvent sous-estimé. La production d'eau chaude sanitaire est intégrée dans le
            calcul du <a href="/dpe-gratuit">Diagnostic de Performance Énergétique (DPE)</a>. Remplacer un
            vieux chauffe-eau électrique par un CET réduit la consommation conventionnelle du logement et peut
            contribuer à un gain de classe DPE, notamment pour les logements en classe E ou F qui cherchent
            à atteindre la classe D — seuil d'exemption de l'interdiction de location.
          </p>
          <p>
            Combiné à des travaux d'isolation ou à une{' '}
            <a href="/pompe-a-chaleur">pompe à chaleur air/eau</a>, le CET s'intègre dans une stratégie de
            rénovation globale pour maximiser la valeur verte de votre logement.
          </p>
        </article>

        {/* CTA RenoHab */}
        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Passez à l'eau chaude économique</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            RenoHab vous aide à choisir le bon équipement, à monter votre dossier MaPrimeRénov' et à trouver
            un installateur RGE qualifié. Estimez vos aides en quelques minutes.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/simulateur"
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
