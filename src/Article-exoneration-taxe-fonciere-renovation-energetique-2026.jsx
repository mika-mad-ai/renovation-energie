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

const PUBLISHED = '2026-11-04';
const PATH = '/blog/exoneration-taxe-fonciere-renovation-energetique-2026';

export default function ArticleExonerationTaxeFonciere2026() {
  useSeo({
    title: "Exonération de taxe foncière après rénovation énergétique : dernière chance avant 2027 | RenoHab",
    description:
      "L'article 1383-0 B du CGI permet d'obtenir 50 à 100 % d'exonération de taxe foncière pendant 3 ans après rénovation énergétique. Conditions, travaux éligibles et démarches à faire avant le 1er janvier 2027.",
    path: PATH,
    image: '/blog/exoneration-taxe-fonciere-renovation-energetique-2026.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline:
        "Exonération de taxe foncière après rénovation énergétique : dernière chance avant le 1er janvier 2027",
      description:
        "L'article 1383-0 B du CGI permet d'obtenir 50 à 100 % d'exonération de taxe foncière pendant 3 ans après rénovation énergétique. Conditions, travaux éligibles et démarches à faire avant le 1er janvier 2027.",
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
      about: ['Exonération taxe foncière', 'Rénovation énergétique', 'Fiscalité immobilière'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 4 novembre 2026 · Fiscalité
          </p>

          <h1>Exonération de taxe foncière après rénovation énergétique : dernière chance avant le 1er janvier 2027</h1>

          <img
            src="/blog/exoneration-taxe-fonciere-renovation-energetique-2026.jpg"
            alt="Maison rénovée avec panneau solaire, symbolisant une économie sur la taxe foncière après travaux d'efficacité énergétique"
            className="w-full rounded-xl my-6 object-cover"
            style={{ maxHeight: '420px' }}
            loading="lazy"
          />

          <p className="lead">
            La taxe foncière a bondi de plus de 20 % en moyenne depuis 2022. Peu de propriétaires
            le savent, mais un dispositif fiscal méconnu permet d'en être exonéré <strong>de 50 à
            100 %</strong> pendant trois ans après des travaux de rénovation énergétique. Ce
            mécanisme, fondé sur l'article 1383-0 B du Code général des impôts, risque toutefois
            d'être abrogé au 1er janvier 2027. Novembre 2026, c'est le dernier moment pour agir.
          </p>

          <h2>Qu'est-ce que l'exonération de taxe foncière pour rénovation énergétique ?</h2>
          <p>
            L'article 1383-0 B du CGI autorise les communes et les établissements publics de
            coopération intercommunale (EPCI) à voter, par délibération, une exonération
            temporaire de taxe foncière sur les propriétés bâties (TFPB) en faveur des
            propriétaires ayant réalisé des travaux d'amélioration énergétique.
          </p>
          <p>
            Concrètement, si votre commune a adopté ce dispositif, vous pouvez bénéficier d'une
            réduction de <strong>50 % ou 100 %</strong> sur la part communale (et éventuellement
            intercommunale) de votre taxe foncière, pendant <strong>trois années consécutives</strong>.
            Sur un logement taxé 2 000 € par an, cela représente jusqu'à 6 000 € d'économies.
          </p>
          <p>
            Le dispositif est <em>facultatif</em> pour les collectivités : certaines l'ont voté,
            d'autres non. La première démarche est donc de contacter votre mairie ou de consulter
            la délibération locale sur le site de votre commune.
          </p>

          <h2>Quelles sont les conditions pour en bénéficier ?</h2>
          <p>Pour être éligible, trois critères doivent être réunis simultanément :</p>
          <ul>
            <li>
              <strong>Ancienneté du logement :</strong> le bien doit avoir été achevé depuis plus
              de dix ans au 1er janvier de la première année d'exonération demandée.
            </li>
            <li>
              <strong>Montant des dépenses :</strong> vous devez avoir payé plus de{' '}
              <strong>10 000 € TTC</strong> de travaux éligibles au cours de l'année précédant la
              demande, ou plus de <strong>15 000 € TTC</strong> cumulés sur les trois années qui
              la précèdent.
            </li>
            <li>
              <strong>Nature des travaux :</strong> seules les prestations bénéficiant du taux
              réduit de TVA à 5,5 % entrent dans le calcul. Les travaux doivent donc relever de
              l'amélioration de la performance énergétique du logement (isolation, chauffage
              renouvelable, ventilation, menuiseries…) et être réalisés par un artisan{' '}
              <a href="/blog/choisir-artisan-rge-2026">certifié RGE</a>.
            </li>
          </ul>
          <p>
            À noter : la résidence principale, secondaire et les biens locatifs peuvent tous être
            concernés dès lors que ces conditions sont remplies.
          </p>

          <h2>Quels travaux sont pris en compte ?</h2>
          <p>
            Sont éligibles les travaux d'amélioration de la qualité énergétique qui bénéficient
            du taux de TVA à 5,5 % (article 278-0 bis A du CGI). Cela couvre notamment :
          </p>
          <ul>
            <li>L'isolation des combles, toitures, murs et planchers bas ;</li>
            <li>L'installation ou le remplacement d'une <a href="/pompe-a-chaleur">pompe à chaleur</a> (air/eau, géothermique) ;</li>
            <li>La pose de panneaux solaires thermiques ou d'un chauffe-eau thermodynamique ;</li>
            <li>L'installation ou le remplacement d'une chaudière à granulés de bois ;</li>
            <li>La mise en place d'une VMC double flux ou hygroréglable ;</li>
            <li>Le remplacement de fenêtres par des vitrages à haute performance (Ug ≤ 1,0 W/m²K).</li>
          </ul>
          <p>
            En revanche, les chaudières à gaz, au fioul ou au propane <strong>ne sont pas
            éligibles</strong> au taux de TVA réduit depuis la loi de finances 2025, et ne comptent
            donc pas dans le calcul des dépenses ouvrant droit à l'exonération.
          </p>

          <h2>Comment faire la démarche ?</h2>
          <p>La procédure se déroule en quatre étapes :</p>
          <ol>
            <li>
              <strong>Vérifiez la délibération locale :</strong> renseignez-vous auprès de votre
              mairie ou consultez le site de votre EPCI pour savoir si l'exonération a été votée
              et à quel taux (50 % ou 100 %).
            </li>
            <li>
              <strong>Réunissez vos factures :</strong> conservez toutes les factures acquittées
              des artisans RGE (mentionnant la TVA à 5,5 %) correspondant aux travaux éligibles.
            </li>
            <li>
              <strong>Déposez votre déclaration :</strong> remplissez l'imprimé H1 ou H2 (selon
              le type de logement) auprès du centre des finances publiques (SIP) dont dépend votre
              bien, en joignant les factures. Cette déclaration doit être faite <strong>avant le
              1er janvier</strong> de la première année pour laquelle vous souhaitez bénéficier
              de l'exonération.
            </li>
            <li>
              <strong>Suivi :</strong> l'administration fiscale confirme l'exonération lors de
              l'émission de l'avis de taxe foncière de l'année suivante.
            </li>
          </ol>

          <h2>Pourquoi agir avant fin 2026 ?</h2>
          <p>
            Selon plusieurs sources juridiques, l'article 1383-0 B du CGI tel qu'il s'applique
            aujourd'hui est prévu d'être abrogé au <strong>1er janvier 2027</strong>. Cela
            signifie que les travaux réalisés en 2025 ou 2026 pourraient être les derniers à
            ouvrir droit à ce dispositif dans sa forme actuelle.
          </p>
          <p>
            Concrètement : si vous avez dépensé plus de 10 000 € de travaux éligibles en 2025 ou
            2026, déposez votre demande au plus tard au 31 décembre 2026 pour déclencher trois
            années d'exonération à partir de 2027. Ne laissez pas passer cette fenêtre.
          </p>
          <p>
            Pour être certain de l'état du texte au moment de votre démarche, consultez{' '}
            <strong>Légifrance</strong> (legifrance.gouv.fr) et le site{' '}
            <strong>service-public.fr</strong>, qui font référence.
          </p>

          <h2>Cumuler l'exonération avec d'autres aides</h2>
          <p>
            L'exonération de taxe foncière est entièrement cumulable avec les autres aides à la
            rénovation énergétique : <a href="/blog/cumul-aides-renovation-maprimerenov-cee-eco-ptz">MaPrimeRénov', les CEE et l'Éco-PTZ</a> peuvent financer
            vos travaux, tandis que l'exonération vous réduit la facture fiscale une fois le
            chantier terminé. Pour un projet de rénovation d'ampleur faisant sauter de deux
            classes DPE ou plus, l'ensemble des dispositifs peut couvrir jusqu'à 70 % du coût
            total des travaux — avant même de compter les années d'exonération fiscale.
          </p>
          <p>
            En tant qu'<a href="/">Accompagnateur Rénov' agréé</a>, RenoHab identifie toutes les
            aides auxquelles vous avez droit — y compris les dispositifs locaux souvent oubliés
            — et monte les dossiers pour vous.
          </p>
        </article>

        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Vérifiez vos droits avant le 31 décembre</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            Un audit gratuit avec RenoHab permet d'identifier les aides cumulables — dont
            l'exonération de taxe foncière — et de préparer votre dossier avant la date limite.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/dpe-gratuit" className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all">
              Estimer mon DPE gratuitement
            </a>
            <a href="/pompe-a-chaleur" className="px-6 py-3 rounded-full border border-white/70 text-white font-semibold hover:bg-white/10 transition-all">
              Découvrir la pompe à chaleur
            </a>
          </div>
        </div>
      </main>

      <ArticleFooter />
    </div>
  );
}
