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

const PUBLISHED = '2026-10-12';
const PATH = '/blog/dpe-coefficient-electricite-2027-impact-maprimerenov';

export default function ArticleDpeCoefficient2027() {
  useSeo({
    title: "DPE 2027 : le coefficient électricité passe à 1,7 — votre logement gagne peut-être une classe | RenoHab",
    description:
      "Au 1er janvier 2027, le coefficient de conversion de l'électricité baisse de 1,9 à 1,7. Certains logements gagnent une classe DPE sans travaux — et risquent de perdre jusqu'à 8 000 € d'aides. Ce qu'il faut faire avant la fin décembre.",
    path: PATH,
    image: '/blog/dpe-coefficient-electricite-2027-impact-maprimerenov.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline:
        "DPE 2027 : le coefficient électricité passe à 1,7 — votre logement gagne peut-être une classe",
      description:
        "Au 1er janvier 2027, le coefficient de conversion de l'électricité baisse de 1,9 à 1,7. Certains logements gagnent une classe DPE sans travaux — et risquent de perdre jusqu'à 8 000 € d'aides. Ce qu'il faut faire avant la fin décembre.",
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
      about: ['DPE', 'Coefficient énergie primaire', 'MaPrimeRénov', 'Rénovation énergétique 2027'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 12 oct. 2026 · DPE
          </p>

          <h1>DPE 2027 : le coefficient électricité passe à 1,7 — votre logement gagne peut-être une classe</h1>

          <img
            src="/blog/dpe-coefficient-electricite-2027-impact-maprimerenov.jpg"
            alt="Étiquette DPE affichée sur une maison individuelle avec panneau de diagnostic énergétique"
            className="w-full rounded-xl shadow-card mb-8"
            loading="lazy"
          />

          <p className="lead">
            Un arrêté du 19 août 2026, publié au Journal officiel du 26 août, entérine un nouveau
            changement de méthode de calcul du DPE : à partir du <strong>1er janvier 2027</strong>,
            le coefficient de conversion de l'électricité en énergie primaire passe de <strong>1,9
            à 1,7</strong>. Pour des millions de logements chauffés à l'électricité, la note DPE
            s'améliore sur le papier — sans aucun travaux. En apparence, c'est une bonne nouvelle.
            En pratique, cela peut coûter plusieurs milliers d'euros d'aides si vous attendez le
            1er janvier avant de déposer votre dossier.
          </p>

          <h2>Comprendre le coefficient de conversion de l'électricité</h2>
          <p>
            Le DPE ne mesure pas la consommation d'énergie finale (les kWh que vous payez sur votre
            facture) mais l'<strong>énergie primaire</strong> — c'est-à-dire la quantité de
            ressources naturelles nécessaires pour produire l'énergie que vous consommez. Pour
            l'électricité, on multiplie la consommation finale par un coefficient afin d'obtenir
            cette valeur primaire.
          </p>
          <p>
            Ce coefficient a été régulièrement révisé à la baisse depuis 2021, reflétant la
            décarbonation progressive du réseau électrique français :
          </p>
          <ul>
            <li><strong>Avant 2021 :</strong> coefficient à 2,58</li>
            <li><strong>2021 – 2025 :</strong> coefficient à 2,3</li>
            <li><strong>Depuis le 1er janvier 2026 :</strong> coefficient à 1,9</li>
            <li><strong>À partir du 1er janvier 2027 :</strong> coefficient à <strong>1,7</strong></li>
          </ul>
          <p>
            Chaque baisse améliore mécaniquement la classe DPE des logements chauffés à l'électricité,
            sans qu'une seule tuile d'isolation soit posée.
          </p>

          <h2>Qui est concerné par ce changement ?</h2>
          <p>
            Sont principalement touchés les logements dont le système de chauffage et/ou de
            production d'eau chaude repose intégralement ou majoritairement sur l'électricité :
          </p>
          <ul>
            <li>Radiateurs électriques (convecteurs, panneaux rayonnants, radiateurs à inertie)</li>
            <li>Pompes à chaleur air/air ou air/eau</li>
            <li>Chauffe-eau électrique ou thermodynamique</li>
            <li>Planchers chauffants électriques</li>
          </ul>
          <p>
            Pour un logement 100 % électrique, la consommation en énergie primaire affichée au DPE
            baissera d'environ <strong>10,5 %</strong> au 1er janvier 2027 — là encore, sans aucun
            travaux. Selon plusieurs estimations, jusqu'à 300 000 passoires thermiques pourraient
            ainsi changer de classe.
          </p>

          <h2>Pourquoi cette amélioration peut vous coûter cher</h2>
          <p>
            Le paradoxe de ce changement tient aux règles de MaPrimeRénov' « Parcours accompagné »
            (rénovation d'ampleur). Cette aide est conditionnée à un <strong>gain minimum de
            deux classes DPE</strong> après travaux. La classe de départ — celle mesurée
            <em>avant</em> les travaux — détermine directement le montant maximal de l'aide.
          </p>
          <p>
            Prenons un exemple concret, basé sur les barèmes en vigueur :
          </p>
          <ul>
            <li>
              Un logement classé <strong>G</strong> en 2026, qui passe en <strong>F</strong> au
              1er janvier 2027 par le seul effet du nouveau coefficient, perd sa classe G comme
              point de départ. Il ne peut plus viser un saut G→D (3 classes) mais seulement F→D
              (2 classes), ce qui réduit le plafond de travaux éligibles.
            </li>
            <li>
              Selon les calculs de certains spécialistes, la perte d'aide peut atteindre{' '}
              <strong>8 000 € sur un même projet de travaux</strong> lorsque la classe G disparaît.
            </li>
          </ul>
          <p>
            La règle est simple : le DPE qui sert de référence pour MaPrimeRénov' est celui réalisé
            <em>avant</em> le dépôt du dossier. Si vous attendez février 2027 pour faire établir
            votre DPE, il sera calculé avec le coefficient 1,7 — et votre logement sera peut-être
            mieux classé, mais vos aides seront moindres.
          </p>

          <h2>Les DPE existants restent valables</h2>
          <p>
            Bonne nouvelle : tout diagnostic établi jusqu'au <strong>31 décembre 2026</strong> reste
            calculé avec le coefficient 1,9. Sa validité réglementaire (10 ans pour la vente et la
            location) n'est pas remise en cause. Vous pouvez donc utiliser votre DPE 2026 pour
            constituer un dossier MaPrimeRénov' début 2027 — à condition qu'il ait bien été réalisé
            avant le 1er janvier.
          </p>
          <p>
            En revanche, si vous faites réaliser un <em>nouveau</em> DPE après le 1er janvier 2027,
            ou si votre DPE actuel date de plus de 10 ans, il sera établi avec la valeur 1,7.
          </p>

          <h2>Que faire avant le 31 décembre 2026 ?</h2>
          <p>
            Si votre logement est classé F ou G et que vous envisagez une rénovation d'ampleur,
            voici les étapes à enclencher dès maintenant :
          </p>
          <ol>
            <li>
              <strong>Faire réaliser votre DPE par un diagnostiqueur certifié ADEME</strong> avant
              le 31 décembre 2026, pour figer la classe actuelle (calculée avec 1,9). Une simple{' '}
              <a href="/dpe-gratuit">estimation DPE en ligne</a> peut vous donner une première
              indication, mais seul un DPE officiel compte pour les aides.
            </li>
            <li>
              <strong>Prendre rendez-vous avec un Accompagnateur Rénov'</strong> pour définir votre
              plan de travaux. L'accompagnateur est obligatoire pour accéder à MaPrimeRénov'
              Parcours accompagné, et le délai de montage de dossier peut dépasser plusieurs semaines.
            </li>
            <li>
              <strong>Constituer votre dossier de demande d'aide</strong> sur le portail France
              Rénov' (anah.fr) en utilisant le DPE établi avant le changement de coefficient.
            </li>
          </ol>
          <p>
            Il reste environ <strong>80 jours</strong> avant le 31 décembre 2026. C'est suffisant
            pour agir, mais pas pour tergiverser.
          </p>

          <h2>Ce que ce changement confirme : le tout-électrique favorisé</h2>
          <p>
            Cette troisième révision à la baisse du coefficient traduit une politique claire : la
            France encourage l'électrification des usages — notamment via les{' '}
            <a href="/pompe-a-chaleur">pompes à chaleur</a> — pour réduire la dépendance aux
            énergies fossiles. En baissant le coefficient, les logements équipés de PAC ou de
            radiateurs électriques voient leur DPE s'améliorer, les rendant moins susceptibles
            d'être classifiés comme passoires et moins soumis aux restrictions de location.
          </p>
          <p>
            C'est cohérent avec l'<a href="/blog/maprimerenov-ampleur-fin-gaz-septembre-2026">
            interdiction de conserver un chauffage au gaz dans les rénovations d'ampleur</a> (depuis
            septembre 2026) : l'État pousse vers l'abandon des combustibles fossiles, et le DPE
            accompagne ce mouvement.
          </p>

          <h2>Récapitulatif : l'essentiel à retenir</h2>
          <ul>
            <li>
              Le coefficient de l'électricité passe de <strong>1,9 à 1,7</strong> au 1er janvier 2027
              (arrêté du 19 août 2026).
            </li>
            <li>
              Les logements tout-électriques verront leur consommation primaire affichée baisser
              d'environ <strong>10,5 %</strong>, ce qui peut faire gagner une classe DPE.
            </li>
            <li>
              Si votre logement est classé F ou G, déposer votre dossier MaPrimeRénov' avec un
              DPE 2026 (coefficient 1,9) peut vous permettre de{' '}
              <strong>conserver plusieurs milliers d'euros d'aides supplémentaires</strong>.
            </li>
            <li>
              Les DPE établis avant le 31 décembre 2026 restent valables pour les dossiers d'aide.
            </li>
            <li>
              Agissez avant la fin de l'année : faire son DPE et prendre contact avec un
              Accompagnateur Rénov' maintenant, c'est sécuriser son éligibilité.
            </li>
          </ul>
        </article>

        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Sécurisez vos aides avant le 1er janvier 2027</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            RenoHab, Accompagnateur Rénov' agréé, vous aide à évaluer votre DPE actuel, à
            dimensionner vos travaux et à monter votre dossier MaPrimeRénov' avant le changement
            de coefficient.
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
