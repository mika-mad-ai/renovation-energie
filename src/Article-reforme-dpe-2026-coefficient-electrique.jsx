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

const PUBLISHED = '2026-07-02';
const PATH = '/blog/reforme-dpe-2026-coefficient-electrique';

export default function ArticleRefomeDPE2026() {
  useSeo({
    title: "Réforme DPE 2026 : le nouveau calcul qui change la classe de 850 000 logements | RenoHab",
    description:
      "Depuis le 1er janvier 2026, le coefficient électrique du DPE passe de 2,3 à 1,9. Résultat : 850 000 logements sortent des passoires thermiques. Ce que ça change pour les propriétaires, bailleurs et vendeurs.",
    path: PATH,
    image: '/blog/reforme-dpe-2026-coefficient-electrique.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline:
        "Réforme DPE 2026 : le nouveau calcul qui fait sortir 850 000 logements des passoires thermiques",
      description:
        "Depuis le 1er janvier 2026, le coefficient électrique du DPE passe de 2,3 à 1,9. Ce que ça change pour les propriétaires, bailleurs et vendeurs.",
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
      about: ['DPE', 'Réforme DPE 2026', 'Passoires thermiques', 'Rénovation énergétique'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 2 juillet 2026 · Réglementation &amp; DPE
          </p>

          <h1>Réforme DPE 2026 : le nouveau calcul qui fait sortir 850 000 logements des passoires thermiques</h1>

          <img
            src="/blog/reforme-dpe-2026-coefficient-electrique.jpg"
            alt="Étiquette DPE sur une maison — réforme 2026"
            className="w-full rounded-xl shadow-soft my-6 object-cover max-h-80"
            loading="eager"
          />

          <p className="lead">
            Depuis le 1er janvier 2026, la méthode de calcul du Diagnostic de Performance Énergétique
            (DPE) a changé. En abaissant le coefficient de conversion de l'électricité de 2,3 à 1,9,
            le gouvernement a fait gagner une étiquette énergétique à environ 7 millions de logements
            — et sorti près de 850 000 passoires thermiques (classes F et G) de leur statut. Ce
            bouleversement discret mais concret a des répercussions immédiates sur la location, la
            vente et le financement des travaux.
          </p>

          <h2>Qu'est-ce qui change dans le calcul du DPE ?</h2>
          <p>
            Le DPE mesure la consommation d'énergie primaire d'un logement, exprimée en kWh/m²/an.
            Pour passer de l'énergie finale (ce que vous consommez réellement) à l'énergie primaire
            (ce que la production d'énergie a nécessité), on applique un <strong>facteur de
            conversion</strong>. Jusqu'au 31 décembre 2025, ce coefficient était fixé à <strong>2,3
            pour l'électricité</strong> — ce qui pénalisait fortement les logements chauffés à
            l'électricité, même quand ils étaient bien isolés.
          </p>
          <p>
            Depuis le 1er janvier 2026, ce coefficient est abaissé à <strong>1,9</strong>, en
            cohérence avec les normes européennes et la décarbonation du réseau électrique français
            (parc nucléaire + énergies renouvelables). Cette modification ne change pas les étiquettes
            A à G elles-mêmes, mais déplace les seuils : un logement qui consommait 280 kWh/m²/an
            en énergie primaire en voit désormais recalculées environ 220 kWh/m²/an, ce qui peut
            faire passer son étiquette de G à F, ou de F à E.
          </p>

          <h2>Qui bénéficie de la réforme — et qui ne voit pas de différence ?</h2>
          <p>
            La réforme profite exclusivement aux logements dont le chauffage ou la production d'eau
            chaude sanitaire repose sur l'électricité. Concrètement :
          </p>
          <ul>
            <li>
              <strong>Radiateurs électriques, convecteurs, planchers chauffants électriques</strong> :
              gain d'une classe fréquent, parfois deux classes pour les petites surfaces.
            </li>
            <li>
              <strong>Pompe à chaleur air/eau ou air/air</strong> : gain également possible, la PAC
              étant déjà très efficace (COP élevé), l'effet est amplifié.
            </li>
            <li>
              <strong>Chaudières gaz, fioul ou biomasse</strong> : aucun changement — le coefficient
              de ces énergies reste inchangé.
            </li>
          </ul>
          <p>
            Selon les estimations du ministère de la Transition écologique, environ
            <strong> 50 % des logements chauffés à l'électricité</strong> gagnent au moins une classe,
            et parmi eux, 850 000 sortent du classement F ou G (les fameuses « passoires
            thermiques »).
          </p>

          <h2>Interdiction de location des passoires : ce que la réforme change pour les bailleurs</h2>
          <p>
            Le calendrier issu de la loi Climat et Résilience est le suivant :
          </p>
          <ul>
            <li>
              Depuis le <strong>1er janvier 2025</strong> : les logements classés <strong>G</strong>{' '}
              ne peuvent plus être mis en location (nouveaux baux ou renouvellements).
            </li>
            <li>
              Au <strong>1er janvier 2028</strong> : même interdiction pour les logements classés{' '}
              <strong>F</strong>.
            </li>
            <li>
              Au <strong>1er janvier 2034</strong> : les logements classés <strong>E</strong> seront
              à leur tour concernés.
            </li>
          </ul>
          <p>
            Pour un propriétaire bailleur dont le logement chauffé à l'électricité était classé G ou
            F avant 2026, la réforme peut représenter une bouffée d'air : en faisant réaliser un
            nouveau DPE avec la méthode 2026, il est possible de sortir du statut de passoire — et
            donc de continuer à louer légalement sans travaux immédiats.
          </p>
          <p>
            <strong>Attention</strong> : un DPE établi avant le 1er janvier 2026 n'est pas
            automatiquement mis à jour. C'est le propriétaire qui doit faire réaliser un nouveau
            diagnostic s'il souhaite bénéficier du nouveau calcul. Le coût d'un DPE varie entre 100
            et 250 € selon la surface et la région — un investissement souvent rentabilisé si le
            logement gagne une étiquette décisive.
          </p>

          <h2>Vente immobilière : l'audit énergétique obligatoire peut aussi évoluer</h2>
          <p>
            Depuis avril 2023, tout propriétaire qui vend un logement classé F ou G doit fournir un
            <strong> audit énergétique</strong> (en complément du DPE) dès la première visite. Depuis
            le 1er janvier 2025, cette obligation s'étend aux logements classés E. L'audit, réalisé
            par un professionnel certifié, coûte entre 500 et 1 500 € et est valable 5 ans.
          </p>
          <p>
            La réforme DPE 2026 peut permettre à certains vendeurs d'y échapper : si votre logement
            passe de F à E, voire de G à F, grâce au nouveau coefficient, et que vous faites
            réaliser un DPE actualisé avant la mise en vente, vous pourriez sortir de l'obligation
            d'audit — ou n'être soumis qu'à l'obligation E (valable depuis janvier 2025, au lieu de
            la plus contraignante F/G).
          </p>

          <h2>La réforme ne dispense pas de rénover</h2>
          <p>
            Gagner une lettre sur l'étiquette DPE sans travaux, c'est une bonne nouvelle
            administrative — mais ça ne réduit pas la facture de chauffage ni le confort du logement.
            Un bien classé E chauffé à l'électricité reste énergivore ; l'acheteur ou le locataire
            le paiera en charges.
          </p>
          <p>
            De plus, les aides financières comme <strong>MaPrimeRénov'</strong> (rouverte depuis le
            23 février 2026) et les <strong>Certificats d'Économies d'Énergie (CEE)</strong> restent
            pleinement accessibles, avec des montants significatifs pour l'installation d'une{' '}
            <a href="/pompe-a-chaleur">pompe à chaleur</a>, l'isolation des combles ou la pose d'une
            VMC double flux. Sur le long terme, rénover conserve un retour sur investissement
            incomparable par rapport à un simple recalcul de DPE.
          </p>
          <p>
            En tant qu'Accompagnateur Rénov' agréé, RenoHab peut vous aider à savoir si un nouveau
            DPE est pertinent pour votre situation, et à construire un plan de travaux optimisant à
            la fois votre classe énergétique, vos aides et votre reste à charge. Commencez par une{' '}
            <a href="/dpe-gratuit">estimation gratuite de votre DPE</a> ou testez votre éligibilité
            avec notre <a href="/simulateur">simulateur d'aides en ligne</a>.
          </p>

          <h2>En résumé : ce que vous devez retenir</h2>
          <ul>
            <li>
              Le coefficient électrique du DPE passe de <strong>2,3 à 1,9</strong> depuis le
              1er janvier 2026 — les logements à chauffage électrique en bénéficient directement.
            </li>
            <li>
              Environ <strong>850 000 logements</strong> sortent des catégories F et G sans aucun
              travaux, et 7 millions de résidences gagnent au moins une classe énergétique.
            </li>
            <li>
              Un DPE établi avant 2026 n'est <strong>pas mis à jour automatiquement</strong> : il
              faut en faire réaliser un nouveau pour bénéficier du recalcul.
            </li>
            <li>
              Pour les bailleurs de passoires G ou F chauffées à l'électricité, un nouveau DPE peut
              permettre de <strong>continuer à louer légalement</strong> ou de repousser l'échéance
              avant travaux.
            </li>
            <li>
              La réforme ne supprime pas l'intérêt de rénover : les aides 2026 sont toujours
              disponibles et un logement performant se vend et se loue mieux.
            </li>
          </ul>
        </article>

        {/* CTA RenoHab */}
        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">
            Votre DPE 2026 a peut-être changé de classe
          </h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            Estimez votre nouvelle étiquette énergétique et découvrez les aides disponibles pour
            aller encore plus loin.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/dpe-gratuit"
              className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all"
            >
              Estimer mon DPE gratuitement
            </a>
            <a
              href="/simulateur"
              className="px-6 py-3 rounded-full border border-white/70 text-white font-semibold hover:bg-white/10 transition-all"
            >
              Tester mon éligibilité aux aides
            </a>
          </div>
        </div>
      </main>

      <ArticleFooter />
    </div>
  );
}
