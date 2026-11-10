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

const PUBLISHED = '2026-11-10';
const PATH = '/blog/credit-impot-renovation-energetique-2026';

export default function ArticleCreditImpotRenovation2026() {
  useSeo({
    title: "Crédit d'impôt rénovation énergétique en 2026 : ce qui a remplacé le CITE | RenoHab",
    description:
      "Le CITE a été supprimé en 2021. Quels avantages fiscaux subsistent pour financer vos travaux en 2026 ? TVA à 5,5 %, MaPrimeRénov', déficit foncier, Loc'Avantages : le tour complet.",
    path: PATH,
    image: '/blog/credit-impot-renovation-energetique-2026.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: "Crédit d'impôt rénovation énergétique en 2026 : ce qui a remplacé le CITE",
      description:
        "Le CITE a été supprimé en 2021. Quels avantages fiscaux subsistent pour financer vos travaux en 2026 ? TVA à 5,5 %, MaPrimeRénov', déficit foncier, Loc'Avantages : le tour complet.",
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
      about: ["Crédit d'impôt", 'Rénovation énergétique', 'MaPrimeRénov', 'TVA réduite', 'Fiscalité immobilière'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 10 novembre 2026 · Fiscalité
          </p>

          <h1>Crédit d'impôt rénovation énergétique en 2026 : ce qui a remplacé le CITE</h1>

          <img
            src="/blog/credit-impot-renovation-energetique-2026.jpg"
            alt="Propriétaire consultant ses documents fiscaux pour financer ses travaux de rénovation énergétique"
            className="w-full rounded-2xl my-6"
            loading="lazy"
          />

          <p className="lead">
            Chaque année, des dizaines de milliers de propriétaires cherchent un « crédit d'impôt travaux rénovation ».
            Bonne nouvelle : les aides d'aujourd'hui sont souvent plus généreuses que l'ancien CITE. Mais elles
            fonctionnent différemment. Tour d'horizon de ce qui subsiste — et de ce qui s'est amélioré.
          </p>

          <h2>Le CITE, c'est fini : mais ce qui l'a remplacé est plus avantageux</h2>
          <p>
            Le <strong>Crédit d'Impôt pour la Transition Énergétique (CITE)</strong> permettait aux propriétaires
            occupants de déduire une partie de leurs dépenses de travaux de leur impôt sur le revenu. Il a été
            progressivement remplacé à partir de 2020 par <strong>MaPrimeRénov'</strong>, puis définitivement
            supprimé.
          </p>
          <p>
            La différence fondamentale : le CITE exigeait d'avancer l'argent, puis d'attendre la déclaration
            d'impôts pour être remboursé — avec un délai d'un an ou plus. MaPrimeRénov' est une
            <strong> subvention directe</strong>, versée après les travaux (ou en partie en avance) : vous n'avez pas
            besoin d'être imposable pour en bénéficier, et les taux atteignent jusqu'à <strong>70 %</strong> du
            montant des travaux pour les ménages les plus modestes.
          </p>
          <p>
            Pour les ménages aux revenus intermédiaires ou supérieurs, le taux est moindre — mais l'aide reste réelle
            et se cumule avec d'autres mécanismes. C'est précisément l'objet de cet article.
          </p>

          <h2>La TVA à 5,5 % : un avantage fiscal immédiat et universel</h2>
          <p>
            C'est l'avantage fiscal le plus concret et le plus accessible en 2026 : la{' '}
            <strong>TVA réduite à 5,5 %</strong> s'applique aux travaux d'amélioration de la qualité énergétique
            réalisés par un professionnel dans un logement de plus de deux ans.
          </p>
          <ul>
            <li>Isolation des murs, combles, planchers</li>
            <li>Chauffe-eau thermodynamique, pompe à chaleur, chaudière à granulés</li>
            <li>Remplacement des fenêtres et portes-fenêtres</li>
            <li>Systèmes de ventilation (VMC double flux, VMC hygro)</li>
            <li>Régulation du chauffage (thermostats programmables)</li>
          </ul>
          <p>
            Pour ces travaux, l'artisan facture directement à 5,5 % au lieu de 10 % (taux intermédiaire normal pour
            la rénovation) ou 20 %. Sur un chantier de 20 000 €, l'économie atteint <strong>900 €</strong> par
            rapport au taux normal de 10 %. Aucune démarche administrative de votre côté : c'est le professionnel
            qui applique le taux réduit.
          </p>
          <p>
            Ce dispositif ne s'appelle pas « crédit d'impôt » — pourtant, il réduit bien le montant que vous payez
            au fisc, via votre artisan. Il est valable pour tous les propriétaires et locataires, sans condition de
            revenus.
          </p>

          <h2>Pour les propriétaires bailleurs : deux dispositifs à cumuler</h2>

          <h3>Le déficit foncier : déduire les travaux de ses revenus locatifs</h3>
          <p>
            Si vous louez un logement non meublé et que vous réalisez des travaux d'entretien, de réparation ou
            d'amélioration, ces dépenses sont <strong>déductibles de vos revenus fonciers</strong>. Si elles
            dépassent vos revenus locatifs, le déficit peut s'imputer sur votre revenu global (dans la limite de
            10 700 € par an).
          </p>
          <p>
            Ce mécanisme peut représenter une économie fiscale substantielle pour les bailleurs fortement imposés.
            Notre article dédié explique{' '}
            <a href="/blog/deficit-foncier-renovation-energetique-2026">
              comment optimiser le déficit foncier pour votre rénovation
            </a>.
          </p>

          <h3>Loc'Avantages : réduire ses impôts en louant à loyer modéré</h3>
          <p>
            <strong>Loc'Avantages</strong> est un dispositif fiscal distinct : en échange d'un engagement de louer
            à un loyer plafonné (selon la zone géographique) pendant au moins 6 ans, le propriétaire bénéficie
            d'un <strong>abattement fiscal de 15 % à 65 %</strong> sur ses revenus locatifs. Plus le loyer est
            abordable, plus l'abattement est élevé.
          </p>
          <p>
            Le point clé pour la rénovation : Loc'Avantages se <strong>cumule avec MaPrimeRénov'</strong>. Un
            bailleur peut donc à la fois recevoir une subvention pour ses travaux (MaPrimeRénov' ampleur) et
            bénéficier d'un abattement fiscal sur ses revenus locatifs futurs. Selon plusieurs sources, le dispositif
            est prolongé jusqu'à fin 2027.
          </p>

          <h2>L'exonération de taxe foncière : une prime locale souvent ignorée</h2>
          <p>
            Certaines communes accordent une <strong>exonération partielle de taxe foncière</strong> (de 50 % à
            100 %, pour 1 à 5 ans) aux propriétaires qui réalisent des travaux d'économies d'énergie. Elle concerne
            notamment les travaux de remplacement de chaudière, d'isolation ou d'installation d'équipements
            utilisant des énergies renouvelables.
          </p>
          <p>
            Ce dispositif étant à la discrétion des communes, il faut se renseigner auprès de votre mairie ou de
            votre centre des impôts fonciers. Notre article détaillé présente{' '}
            <a href="/blog/exoneration-taxe-fonciere-renovation-energetique-2026">
              comment obtenir l'exonération de taxe foncière pour vos travaux
            </a>.
          </p>

          <h2>Et MaPrimeRénov' dans tout ça ?</h2>
          <p>
            MaPrimeRénov' n'est pas techniquement un « crédit d'impôt » — c'est une subvention directe de l'État,
            versée par l'Anah. Mais son impact sur le reste à charge est souvent bien supérieur à ce que proposait
            l'ancien CITE.
          </p>
          <ul>
            <li>
              <strong>Rénovation d'ampleur</strong> (gain d'au moins 2 classes DPE, avec Mon Accompagnateur
              Rénov') : jusqu'à 70 % du montant des travaux pour les ménages très modestes, et jusqu'à 50 % pour
              les ménages modestes, dans la limite d'un plafond de dépenses.
            </li>
            <li>
              <strong>Prime CEE</strong> (certificats d'économies d'énergie) : cumulable avec MaPrimeRénov', elle
              est versée par les fournisseurs d'énergie via les entreprises RGE.
            </li>
            <li>
              <strong>Éco-PTZ</strong> (éco-prêt à taux zéro) : jusqu'à 50 000 € sans intérêts pour compléter le
              financement, cumulable avec MaPrimeRénov'.
            </li>
          </ul>
          <p>
            Le tout sans avoir à avancer l'intégralité des sommes ni attendre une déclaration fiscale. Pour en
            savoir plus, consultez notre guide sur la{' '}
            <a href="/pompe-a-chaleur">pompe à chaleur et les aides disponibles</a> ou demandez votre{' '}
            <a href="/dpe-gratuit">estimation DPE gratuite</a> pour savoir de quel profil vous relevez.
          </p>

          <h2>Récapitulatif : les avantages fiscaux réels en 2026</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm border-collapse">
              <thead>
                <tr className="bg-emerald-50">
                  <th className="border border-gray-200 px-3 py-2 text-left">Mécanisme</th>
                  <th className="border border-gray-200 px-3 py-2 text-left">Qui en bénéficie ?</th>
                  <th className="border border-gray-200 px-3 py-2 text-left">Avantage</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-3 py-2">TVA à 5,5 %</td>
                  <td className="border border-gray-200 px-3 py-2">Tous propriétaires et locataires</td>
                  <td className="border border-gray-200 px-3 py-2">Économie directe sur la facture artisan</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-3 py-2">MaPrimeRénov' ampleur</td>
                  <td className="border border-gray-200 px-3 py-2">Propriétaires occupants et bailleurs</td>
                  <td className="border border-gray-200 px-3 py-2">Jusqu'à 70 % selon revenus</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-3 py-2">Déficit foncier</td>
                  <td className="border border-gray-200 px-3 py-2">Propriétaires bailleurs</td>
                  <td className="border border-gray-200 px-3 py-2">Déduction des travaux des revenus fonciers</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-3 py-2">Loc'Avantages</td>
                  <td className="border border-gray-200 px-3 py-2">Bailleurs à loyer plafonné</td>
                  <td className="border border-gray-200 px-3 py-2">Abattement 15 % à 65 % sur loyers</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-3 py-2">Exonération taxe foncière</td>
                  <td className="border border-gray-200 px-3 py-2">Selon commune</td>
                  <td className="border border-gray-200 px-3 py-2">Jusqu'à 100 % pendant 1 à 5 ans</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Par où commencer ?</h2>
          <p>
            La première étape reste de savoir quel est le DPE actuel de votre logement et quel profil de revenus
            vous correspond pour MaPrimeRénov'. Ces deux informations déterminent votre potentiel d'aide et la
            stratégie de travaux la plus rentable.
          </p>
          <p>
            En tant qu'<strong>Accompagnateur Rénov' agréé</strong>, RenoHab vous guide dans le choix des travaux,
            monte votre dossier de financement (MaPrimeRénov', CEE, éco-PTZ, TVA réduite) et coordonne les
            artisans RGE — pour que vous bénéficiiez de tous les leviers disponibles, sans en manquer un seul.
          </p>
        </article>

        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Simulez vos aides en 2 minutes</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            DPE, MaPrimeRénov', CEE, éco-PTZ : découvrez ce à quoi vous avez droit avant de démarrer vos travaux.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/dpe-gratuit" className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all">
              Estimer mon DPE
            </a>
            <a href="/blog" className="px-6 py-3 rounded-full border border-white/70 text-white font-semibold hover:bg-white/10 transition-all">
              Tous nos guides
            </a>
          </div>
        </div>
      </main>

      <ArticleFooter />
    </div>
  );
}
