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

const PUBLISHED = '2026-08-28';
const PATH = '/blog/attestation-dpe-ademe-2026-etiquette-gratuite';

export default function ArticleAttestationDpeAdeme2026() {
  useSeo({
    title: "Attestation DPE ADEME 2026 : obtenez votre nouvelle étiquette gratuitement en 5 minutes | RenoHab",
    description:
      "Votre DPE a été réalisé entre 2021 et 2025 ? Depuis le 1er janvier 2026, vous pouvez télécharger gratuitement une attestation de reclassement via l'ADEME, sans refaire le diagnostic. Mode d'emploi.",
    path: PATH,
    image: '/blog/attestation-dpe-ademe-2026-etiquette-gratuite.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline:
        "Attestation DPE ADEME 2026 : obtenez votre nouvelle étiquette gratuitement en 5 minutes",
      description:
        "Votre DPE a été réalisé entre 2021 et 2025 ? Depuis le 1er janvier 2026, vous pouvez télécharger gratuitement une attestation de reclassement via l'ADEME, sans refaire le diagnostic. Mode d'emploi.",
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
      about: ['DPE', 'Réforme DPE 2026', 'Attestation ADEME', 'Passoires thermiques'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 28 août 2026 · DPE &amp; Réglementation
          </p>

          <h1>Attestation DPE ADEME 2026 : obtenez votre nouvelle étiquette gratuitement en 5 minutes</h1>

          <img
            src="/blog/attestation-dpe-ademe-2026-etiquette-gratuite.jpg"
            alt="Attestation DPE ADEME 2026 : nouvelle étiquette gratuite en ligne"
            className="w-full rounded-xl object-cover mb-8"
            style={{ maxHeight: '420px' }}
            loading="eager"
          />

          <p className="lead">
            Depuis le 1er janvier 2026, le mode de calcul du DPE a changé : le coefficient de
            conversion de l'électricité est passé de 2,3 à 1,9. Résultat : près de 7 millions de
            logements gagnent une classe énergétique — et 850 000 passoires thermiques sortent des
            classes F et G <strong>sans avoir réalisé le moindre travaux</strong>. Si votre DPE
            date de 2021 à 2025, vous pouvez obtenir gratuitement une attestation officielle de
            votre nouvelle étiquette via l'ADEME, en moins de cinq minutes.
          </p>

          <h2>Pourquoi votre étiquette DPE a peut-être changé</h2>
          <p>
            Le Diagnostic de Performance Énergétique évalue la consommation d'énergie primaire d'un
            logement. Jusqu'à fin 2025, l'électricité se voyait appliquer un coefficient de 2,3 dans
            ce calcul — bien supérieur à celui du gaz ou du fioul, qui restent à 1. Ce coefficient
            surestimait donc l'impact des logements chauffés à l'électricité.
          </p>
          <p>
            Depuis le 1er janvier 2026, ce coefficient est aligné sur la valeur européenne actualisée :
            <strong> 1,9</strong>. Une baisse de 17 % qui se traduit directement sur l'étiquette
            énergie. Pour les logements dont le chauffage et la production d'eau chaude sont
            entièrement électriques, le gain peut atteindre deux classes. Pour les petites surfaces
            (studios, T1), l'effet peut même être double grâce à la correction spécifique aux
            petites surfaces prévue dans la réforme.
          </p>
          <p>
            Bonne nouvelle supplémentaire : <strong>la réforme ne peut qu'améliorer ou maintenir
            le classement existant</strong>. Un logement classé D avant le 1er janvier 2026 ne peut
            pas passer en E à cause de ce changement.
          </p>

          <h2>Qui peut obtenir l'attestation gratuite ?</h2>
          <p>
            L'attestation de reclassement concerne les DPE réalisés entre le <strong>1er juillet 2021</strong> et
            le <strong>31 décembre 2025</strong>, c'est-à-dire tous ceux établis sous la méthode de
            calcul dite « 3CL » introduite lors de la réforme de 2021. Les DPE antérieurs à juillet
            2021 (ancienne méthode, dite « sur factures ») ne sont pas concernés et ont d'ailleurs
            expiré depuis.
          </p>
          <p>
            Concrètement, si vous êtes :
          </p>
          <ul>
            <li>Propriétaire occupant souhaitant connaître votre vraie classe énergétique ;</li>
            <li>Propriétaire bailleur dont le logement était classé F ou G et qui espère louer à
              nouveau légalement ;</li>
            <li>Acheteur ou vendeur qui souhaite mettre à jour le DPE d'un compromis en cours ;</li>
          </ul>
          <p>
            … alors l'attestation ADEME vous concerne directement.
          </p>

          <h2>Comment obtenir l'attestation en ligne : étape par étape</h2>
          <p>
            La démarche est entièrement dématérialisée et gratuite sur l'Observatoire DPE-Audit de
            l'ADEME (site officiel de l'ADEME). Voici le processus :
          </p>
          <ol>
            <li>
              <strong>Retrouvez le numéro de votre DPE.</strong> Il figure sur votre rapport de
              diagnostic (première page) ou dans votre espace personnel sur le site de l'ADEME si
              vous l'avez déjà consulté.
            </li>
            <li>
              <strong>Rendez-vous sur l'Observatoire DPE-Audit de l'ADEME</strong> (ademe.fr,
              rubrique « DPE »). Entrez le numéro de votre DPE dans le champ prévu.
            </li>
            <li>
              <strong>Lancez le recalcul automatique.</strong> Le système applique le nouveau
              coefficient de 1,9 à votre DPE existant et calcule votre nouvelle classe énergétique.
            </li>
            <li>
              <strong>Téléchargez l'attestation officielle.</strong> Ce document PDF porte le logo
              de l'ADEME et indique votre ancienne et votre nouvelle étiquette. Il est juridiquement
              valable pour la vente et pour la location, jusqu'à la date d'expiration initiale de votre DPE.
            </li>
          </ol>
          <p>
            Comptez entre <strong>3 et 5 minutes</strong> pour l'ensemble de la démarche.
          </p>

          <h2>Attention aux offres payantes</h2>
          <p>
            Depuis le début de l'année, des prestataires privés proposent de réaliser cette
            «&nbsp;mise à jour DPE&nbsp;» contre paiement (souvent entre 30 et 100 €). Cette
            démarche est <strong>totalement inutile</strong> : la seule source officielle est
            l'Observatoire de l'ADEME, et elle est gratuite. Aucun diagnostiqueur, aucune plateforme
            intermédiaire n'est nécessaire pour obtenir l'attestation.
          </p>
          <p>
            Si un tiers vous propose de le faire à votre place contre rémunération, il s'agit d'un
            service à valeur ajoutée nulle — la démarche est si simple qu'elle ne justifie aucun frais.
          </p>

          <h2>Ce que change l'attestation pour les propriétaires bailleurs</h2>
          <p>
            La réforme du DPE a des conséquences très concrètes pour les propriétaires en location :
          </p>
          <ul>
            <li>
              <strong>Logements classés G :</strong> interdits à la location depuis le 1er janvier 2025.
              Si votre logement G passe en F grâce à l'attestation, vous redevenez légalement en mesure
              de le louer — jusqu'en 2028, date d'interdiction pour les F.
            </li>
            <li>
              <strong>Logements classés F :</strong> interdits à la mise en location (nouveaux
              contrats) à partir du <strong>1er janvier 2028</strong>. Si vous passez en E grâce à
              l'attestation, vous êtes à l'abri jusqu'en 2034.
            </li>
            <li>
              <strong>Loyers gelés :</strong> les passoires thermiques (F et G) ne peuvent pas faire
              l'objet d'une augmentation de loyer. Sortir de ces classes libère le loyer à la révision.
            </li>
          </ul>
          <p>
            Si votre logement reste tout de même en F ou G après le reclassement, l'enjeu devient
            celui des travaux. Notre{' '}
            <a href="/dpe-gratuit">simulateur DPE gratuit</a> vous aide à estimer le potentiel
            d'amélioration, et notre{' '}
            <a href="/simulateur">simulateur d'aides</a> calcule les financements disponibles.
          </p>

          <h2>Et si votre logement ne progresse pas assez ?</h2>
          <p>
            L'attestation règle le problème pour ceux qui chauffent à l'électricité. Mais si votre
            logement est chauffé au gaz ou au fioul et reste en F ou G, des travaux de rénovation
            seront indispensables d'ici 2028.
          </p>
          <p>
            Les bonnes nouvelles côté financement :
          </p>
          <ul>
            <li>
              <strong>MaPrimeRénov' rénovation d'ampleur</strong> couvre jusqu'à 80 % du coût des
              travaux pour les ménages très modestes, avec un plafond de 40 000 € HT.
            </li>
            <li>
              <strong>L'Éco-PTZ</strong> permet de financer jusqu'à 50 000 € de travaux sans
              payer d'intérêts, sur 15 ans.
            </li>
            <li>
              <strong>Les CEE</strong> (Certificats d'Économie d'Énergie) viennent compléter les
              aides publiques, quel que soit votre niveau de revenus.
            </li>
          </ul>
          <p>
            En tant qu'Accompagnateur Rénov' agréé, RenoHab évalue votre logement, définit le plan
            de travaux optimal et monte l'intégralité des dossiers d'aides pour vous.
          </p>

          <h2>À retenir</h2>
          <ul>
            <li>Le coefficient électricité du DPE est passé de 2,3 à 1,9 le 1er janvier 2026.</li>
            <li>850 000 logements sortent des classes F/G ; 7 millions gagnent une classe.</li>
            <li>L'attestation ADEME est gratuite, officielle, et prend 5 minutes en ligne.</li>
            <li>Elle est valable pour la vente comme pour la location.</li>
            <li>Aucun diagnostiqueur ni intermédiaire payant n'est nécessaire.</li>
          </ul>
        </article>

        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Votre logement est encore en F ou G ?</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            Simulez vos travaux et vos aides avec RenoHab, Accompagnateur Rénov' agréé. Gratuit, sans engagement.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/dpe-gratuit" className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all">
              Estimer mon DPE gratuitement
            </a>
            <a href="/simulateur" className="px-6 py-3 rounded-full border border-white/70 text-white font-semibold hover:bg-white/10 transition-all">
              Calculer mes aides
            </a>
          </div>
        </div>
      </main>

      <ArticleFooter />
    </div>
  );
}
