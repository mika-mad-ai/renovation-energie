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

const PUBLISHED = '2026-10-27';
const PATH = '/blog/arnaques-renovation-energetique-comment-se-proteger-2026';

export default function ArticleArnaquesRenovation2026() {
  useSeo({
    title: "Arnaques en rénovation énergétique : comment les reconnaître et se protéger en 2026 | RenoHab",
    description:
      "Démarchage abusif, fausse aide gratuite, usurpation d'identité : les escroqueries en rénovation énergétique explosent. Découvrez les signaux d'alerte et les bons réflexes pour ne pas tomber dans le piège.",
    path: PATH,
    image: '/blog/arnaques-renovation-energetique-comment-se-proteger-2026.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline:
        "Arnaques en rénovation énergétique : comment les reconnaître et se protéger en 2026",
      description:
        "Démarchage abusif, fausse aide gratuite, usurpation d'identité : les escroqueries en rénovation énergétique explosent. Découvrez les signaux d'alerte et les bons réflexes pour ne pas tomber dans le piège.",
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
      about: ['Arnaques rénovation énergétique', 'Démarchage abusif', 'Protection consommateur', 'MaPrimeRénov'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 27 oct. 2026 · Protection consommateur
          </p>

          <h1>Arnaques en rénovation énergétique : comment les reconnaître et se protéger en 2026</h1>

          <img
            src="/blog/arnaques-renovation-energetique-comment-se-proteger-2026.jpg"
            alt="Particulier qui examine attentivement un devis de rénovation énergétique pour détecter une arnaque"
            className="rounded-2xl w-full object-cover my-6"
            loading="lazy"
          />

          <p className="lead">
            Près de <strong>52 000 signalements</strong> liés à la rénovation énergétique ont été
            enregistrés par la DGCCRF en 2025, soit presque le double en deux ans. Les fraudeurs
            profitent de la complexité des aides publiques — MaPrimeRénov', CEE, Éco-PTZ — et de
            chaque période de changement de règles pour tromper des milliers de ménages. Voici les
            pièges les plus courants et les bons réflexes pour s'en prémunir.
          </p>

          <h2>Pourquoi les arnaques à la rénovation explosent-elles en 2026 ?</h2>
          <p>
            La rénovation énergétique mobilise aujourd'hui des milliards d'euros d'aides publiques.
            Cette manne attire des acteurs malveillants qui savent que de nombreux particuliers ne
            maîtrisent pas les détails du dispositif. Chaque modification des règles — suspension
            puis réouverture de MaPrimeRénov', suppression de certains gestes, réforme du label
            RGE — crée une <strong>fenêtre de confusion</strong> que les escrocs exploitent
            immédiatement.
          </p>
          <p>
            Les cibles privilégiées sont souvent les personnes âgées ou en situation de vulnérabilité,
            approchées à domicile par des démarcheurs qui se présentent comme des « contrôleurs de
            l'État » ou des agents d'EDF, d'Engie ou de l'ANAH. Dans certains cas documentés, des
            ménages se sont retrouvés endettés de <strong>plusieurs dizaines de milliers d'euros</strong>
            après avoir cru bénéficier de travaux « gratuits ».
          </p>

          <h2>Les principales formes d'arnaques à connaître</h2>

          <h3>1. La fausse « aide gratuite »</h3>
          <p>
            Un commercial vous contacte — par téléphone, par message ou en se présentant à votre
            porte — en affirmant que vous avez droit à des travaux entièrement gratuits grâce aux
            aides de l'État. Il insiste pour signer rapidement un bon de commande. En réalité, les
            travaux sont financés par un <strong>crédit à la consommation</strong> souscrit à votre
            nom, souvent à des taux élevés, et la qualité des équipements est très en dessous des
            standards.
          </p>

          <h3>2. L'usurpation d'identité d'un organisme officiel</h3>
          <p>
            Certains fraudeurs se font passer pour des agents de l'ANAH, de France Rénov' ou d'un
            fournisseur d'énergie connu. Ils demandent vos données fiscales (numéro fiscal, avis
            d'imposition) et bancaires pour « monter votre dossier d'aide ». Ces informations
            permettent ensuite de déposer frauduleusement une demande de MaPrimeRénov' avec votre
            identité.
          </p>

          <h3>3. Le faux artisan RGE</h3>
          <p>
            Le label <a href="/blog/label-rge-artisan-reforme-2026">RGE (Reconnu Garant de l'Environnement)</a> est
            obligatoire pour accéder aux principales aides. Des artisans non qualifiés présentent
            de faux certificats RGE, voire se font « couvrir » par une entreprise certifiée qui
            sous-traite illégalement. Résultat : les travaux ne sont pas éligibles aux aides, et
            vous n'avez aucun recours.
          </p>

          <h3>4. Le devis gonflé avec prime détournée</h3>
          <p>
            L'artisan sur-facture les travaux pour capturer la totalité de la prime, laissant le
            particulier sans reste à charge apparent… mais avec des équipements bas de gamme et
            une installation bâclée. La prime couvre le devis gonflé, mais rien ne reste pour des
            matériaux ou une main-d'œuvre de qualité.
          </p>

          <h2>Les 7 signaux d'alerte à ne jamais ignorer</h2>
          <ul>
            <li><strong>On vous promet des travaux « entièrement gratuits »</strong> sans aucune explication sur le financement réel.</li>
            <li><strong>Le démarcheur se présente à votre domicile sans rendez-vous</strong> et crée une pression à la signature immédiate.</li>
            <li><strong>On vous demande vos coordonnées bancaires ou votre avis d'imposition</strong> lors d'un premier contact.</li>
            <li><strong>L'entreprise ne peut pas fournir son numéro de qualification RGE</strong> vérifiable sur le site officiel <em>qualibat.com</em> ou <em>qualifelec.fr</em>.</li>
            <li><strong>Le devis est rédigé à la main, sans en-tête claire</strong>, ou ne détaille pas les marques et références des équipements.</li>
            <li><strong>On vous contacte en se présentant comme un agent de l'État ou de l'ANAH</strong> : ces organismes ne démarchent jamais par téléphone ni à domicile.</li>
            <li><strong>On vous demande de signer un document avant toute visite technique</strong> du logement.</li>
          </ul>

          <h2>Vos droits et les bons réflexes</h2>

          <h3>Le droit de rétractation de 14 jours</h3>
          <p>
            Tout contrat signé à la suite d'un démarchage à domicile ou par téléphone vous donne
            un <strong>droit de rétractation de 14 jours</strong>, sans motif à justifier. L'artisan
            ne peut légalement démarrer les travaux qu'à l'issue de ce délai (sauf demande expresse
            de votre part par écrit). Si vous avez signé sous pression, exercez ce droit sans
            attendre.
          </p>

          <h3>Vérifier le label RGE en ligne</h3>
          <p>
            Avant de signer tout devis, consultez le <strong>annuaire officiel des artisans RGE</strong>
            sur <em>france-renov.gouv.fr</em>. Entrez le nom ou le numéro SIRET de l'entreprise
            pour confirmer que sa qualification est active et couvre bien les travaux envisagés.
            Un artisan légitime vous y encourage lui-même.
          </p>

          <h3>Passer par un Accompagnateur Rénov' agréé</h3>
          <p>
            La meilleure protection reste de confier votre projet à un <a href="/blog/renovation-ampleur-2026-accompagnateur-renov">Accompagnateur Rénov' agréé</a>,
            comme RenoHab. Son rôle est de définir le programme de travaux, de sélectionner des
            artisans RGE vérifiés et de monter les dossiers d'aides pour votre compte. Il est
            rémunéré par les aides publiques et n'a aucun intérêt à vous vendre des produits
            supplémentaires. L'accompagnement est <strong>obligatoire pour la rénovation d'ampleur</strong>
            et constitue un filet de sécurité solide contre les arnaques.
          </p>

          <h3>Signaler et obtenir de l'aide</h3>
          <p>
            Si vous pensez avoir été victime d'une arnaque, plusieurs recours existent :
          </p>
          <ul>
            <li><strong>SignalConso</strong> (signal.conso.gouv.fr) : signaler une pratique commerciale douteuse à la DGCCRF.</li>
            <li><strong>France Rénov'</strong> (0 808 800 700, appel gratuit) : conseils et orientation vers les structures agréées.</li>
            <li><strong>ADIL</strong> (Agence Départementale d'Information sur le Logement) : aide juridique gratuite en cas de litige.</li>
            <li><strong>Gendarmerie ou police</strong> : dépôt de plainte en cas de fraude avérée.</li>
          </ul>

          <h2>Ce que RenoHab fait pour vous protéger</h2>
          <p>
            En tant qu'Accompagnateur Rénov' agréé par l'ANAH, RenoHab opère selon une charte
            stricte : transparence des devis, sélection rigoureuse des artisans RGE, dépôt des
            dossiers d'aides directement sur la plateforme officielle, et aucun démarchage commercial
            agressif. Notre mission est de vous permettre de réaliser des travaux de qualité en
            mobilisant toutes les aides auxquelles vous avez légitimement droit — sans mauvaise
            surprise.
          </p>
          <p>
            Vous souhaitez vérifier les aides disponibles pour votre logement ?
            Consultez notre <a href="/#simulateur">simulateur d'aides</a> ou prenez contact directement.
            Renseignez-vous aussi sur le <a href="/dpe-gratuit">DPE gratuit</a> pour connaître le
            point de départ de votre rénovation.
          </p>
        </article>

        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Rénovez en toute sécurité avec RenoHab</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            Accompagnateur Rénov' agréé ANAH : artisans RGE vérifiés, dossiers d'aides pris en charge, zéro démarchage abusif.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/dpe-gratuit" className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all">
              Estimer mon DPE gratuitement
            </a>
            <a href="/pompe-a-chaleur" className="px-6 py-3 rounded-full border border-white/70 text-white font-semibold hover:bg-white/10 transition-all">
              Découvrir nos solutions
            </a>
          </div>
        </div>
      </main>

      <ArticleFooter />
    </div>
  );
}
