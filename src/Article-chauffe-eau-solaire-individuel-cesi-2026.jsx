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

const PUBLISHED = '2026-09-06';
const PATH = '/blog/chauffe-eau-solaire-individuel-cesi-2026';

export default function ArticleCesiSolaire2026() {
  useSeo({
    title: "Chauffe-eau solaire individuel (CESI) : aides disponibles en 2026 | RenoHab",
    description:
      "MaPrimeRénov' par geste ne finance plus le CESI depuis septembre 2026. Quelles aides restent ? CEE, TVA 5,5 %, Éco-PTZ, rénovation d'ampleur : on fait le point.",
    path: PATH,
    image: `https://renohab.fr${PATH}.jpg`,
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline:
        "Chauffe-eau solaire individuel (CESI) en 2026 : quelles aides après la réforme de septembre ?",
      description:
        "MaPrimeRénov' par geste ne finance plus le CESI depuis septembre 2026. Quelles aides restent ? CEE, TVA 5,5 %, Éco-PTZ, rénovation d'ampleur : on fait le point.",
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
      about: ['Chauffe-eau solaire', 'CESI', 'Aides rénovation énergétique', 'CEE', 'Éco-PTZ'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 6 septembre 2026 · Eau chaude sanitaire
          </p>

          <h1>Chauffe-eau solaire individuel (CESI) en 2026 : quelles aides après la réforme de septembre ?</h1>

          <img
            src="/blog/chauffe-eau-solaire-individuel-cesi-2026.jpg"
            alt="Capteurs solaires thermiques sur le toit d'une maison individuelle"
            className="w-full rounded-xl object-cover mb-8"
            style={{ maxHeight: '420px' }}
            loading="eager"
          />

          <p className="lead">
            Depuis le 1er septembre 2026, le chauffe-eau solaire individuel n'est plus financé
            par MaPrimeRénov' Parcours par geste. Une réforme qui surprend certains ménages — mais
            qui ne ferme pas toutes les portes. D'autres aides restent cumulables, et le CESI
            demeure une solution rentable pour couvrir 60 à 70 % de vos besoins en eau chaude
            sanitaire grâce à l'énergie du soleil.
          </p>

          <h2>CESI ou panneaux photovoltaïques : ne pas confondre les deux</h2>
          <p>
            Le <strong>chauffe-eau solaire individuel (CESI)</strong> est un équipement de{' '}
            <em>solaire thermique</em> : ses capteurs absorbent la chaleur du soleil pour chauffer
            directement l'eau sanitaire stockée dans un ballon. Il ne produit pas d'électricité —
            c'est le rôle des{' '}
            <a href="/blog/panneaux-solaires-photovoltaiques-aides-2026">panneaux photovoltaïques</a>.
          </p>
          <p>
            Un CESI se compose de 2 à 4 m² de capteurs thermiques (posés en toiture ou en façade
            sud), d'un ballon de stockage de 200 à 300 litres et d'un appoint électrique ou au gaz
            pour les jours peu ensoleillés. Son rendement en France métropolitaine dépasse 60 % sur
            l'année, ce qui en fait l'un des systèmes de production d'eau chaude les moins
            énergivores.
          </p>

          <h2>Ce qui a changé au 1er septembre 2026</h2>
          <p>
            La réforme de septembre 2026 a recentré{' '}
            <a href="/blog/maprimerenov-septembre-2026-gestes-suppression">MaPrimeRénov' Parcours par geste</a>{' '}
            sur la décarbonation du chauffage : seules les pompes à chaleur air/eau et géothermiques,
            le raccordement à un réseau de chaleur et la dépose de cuve à fioul restent éligibles.
            Le CESI — ainsi que le chauffe-eau thermodynamique — en sont exclus.
          </p>
          <p>
            Conséquence directe : si vous installez un CESI en geste isolé à partir du 1er septembre
            2026, vous ne pouvez plus prétendre à la prime MaPrimeRénov' par geste, qui pouvait
            atteindre 4 000 € pour les ménages aux revenus très modestes.
          </p>

          <h2>Les aides qui restent disponibles en 2026</h2>
          <p>
            Bonne nouvelle : d'autres dispositifs compensent en partie cette perte, et peuvent
            se cumuler entre eux.
          </p>

          <h3>La prime CEE (Certificats d'Économies d'Énergie)</h3>
          <p>
            Les CEE ne dépendent pas de MaPrimeRénov' et restent pleinement applicables au CESI.
            Proposées par les fournisseurs d'énergie (EDF, TotalEnergies, Engie…) ou des
            courtiers en primes comme <a href="/">RenoHab</a>, elles représentent entre 100 et 400 €
            selon votre situation géographique et le volume de vos travaux.
          </p>

          <h3>La TVA réduite à 5,5 %</h3>
          <p>
            L'installation d'un CESI dans un logement de plus de deux ans bénéficie toujours
            de la <a href="/blog/tva-5-5-renovation-energetique-2026">TVA à 5,5 %</a> (contre
            10 % pour les travaux courants et 20 % pour le taux normal). Sur un chantier facturé
            7 000 €, la réduction de TVA représente environ 650 € d'économie directe.
          </p>

          <h3>L'Éco-Prêt à Taux Zéro (Éco-PTZ)</h3>
          <p>
            L'<a href="/blog/eco-ptz-2026-pret-taux-zero-renovation">Éco-PTZ</a> permet de financer
            jusqu'à 50 000 € de travaux à 0 % d'intérêt sur 20 ans. Un CESI peut être inclus dans
            ce prêt, seul ou combiné à d'autres gestes (isolation, menuiseries…). Aucune condition
            de ressources n'est exigée pour y accéder.
          </p>

          <h3>MaPrimeRénov' Ampleur : la voie royale pour les passoires</h3>
          <p>
            Si votre logement est classé E, F ou G au DPE et que vous prévoyez une rénovation
            globale visant un saut d'au moins deux classes, le CESI peut être intégré dans un
            dossier <strong>MaPrimeRénov' Rénovation d'ampleur</strong>. Dans ce cadre, il reste
            finançable et contribue à la performance globale du projet. L'aide peut représenter
            jusqu'à 90 % du coût total des travaux pour les ménages aux revenus très modestes.
          </p>

          <h2>Récapitulatif des aides cumulables (geste isolé)</h2>
          <ul>
            <li><strong>Prime CEE :</strong> 100 – 400 €</li>
            <li><strong>TVA à 5,5 % :</strong> économie de l'ordre de 600 – 900 € sur un chantier de 6 000 à 8 000 €</li>
            <li><strong>Éco-PTZ :</strong> jusqu'à 50 000 € à 0 % d'intérêt</li>
            <li><strong>MaPrimeRénov' par geste :</strong> ❌ supprimée depuis le 1er septembre 2026</li>
          </ul>

          <h2>Le CESI reste-t-il rentable en 2026 ?</h2>
          <p>
            Le coût d'installation d'un CESI oscille entre <strong>4 000 et 8 000 €</strong> selon
            la capacité du ballon et la complexité de la pose. Après prime CEE et avantage TVA,
            le reste à charge se situe généralement entre 3 000 et 6 000 €, finançable via
            l'Éco-PTZ sans débourser le moindre intérêt.
          </p>
          <p>
            En termes de retour sur investissement, un foyer de 4 personnes consommant environ
            2 000 kWh/an d'eau chaude peut économiser jusqu'à 250 à 350 € par an sur sa facture
            d'énergie (base tarif réglementé EDF 2026). Le temps de retour sur investissement
            varie de 10 à 15 ans selon l'ensoleillement local — bien inférieur à la durée de vie
            de l'équipement (25 à 30 ans).
          </p>
          <p>
            Par ailleurs, l'installation d'un CESI par un artisan <strong>certifié RGE QualiSol</strong>
            est obligatoire pour accéder à toutes les aides mentionnées. RenoHab sélectionne
            uniquement des professionnels qualifiés pour garantir la conformité de votre chantier.
          </p>

          <h2>CESI, chauffe-eau thermodynamique ou PAC : comment choisir ?</h2>
          <p>
            Si votre budget est serré et que vous cherchez à maximiser les aides publiques en 2026,
            une <a href="/pompe-a-chaleur">pompe à chaleur air/eau</a> reste l'option la plus
            soutenue par MaPrimeRénov'. Elle couvre à la fois le chauffage et l'eau chaude.
          </p>
          <p>
            Le CESI, lui, est pertinent si vous disposez d'une bonne exposition sud, souhaitez
            décarboner spécifiquement votre eau chaude sanitaire sans toucher à votre système de
            chauffage, ou si vous intégrez le projet dans une rénovation d'ampleur. Dans ce dernier
            cas, le <a href="/dpe-gratuit">simulateur DPE de RenoHab</a> vous permet d'évaluer
            l'impact sur la classe énergétique de votre logement avant même de démarrer les travaux.
          </p>

          <h2>Les démarches à suivre</h2>
          <ol>
            <li>
              <strong>Évaluer votre éligibilité :</strong> DPE en cours de validité, logement de
              plus de deux ans, toiture orientée sud avec peu d'ombrage.
            </li>
            <li>
              <strong>Obtenir un devis d'un artisan RGE QualiSol :</strong> c'est la condition
              sine qua non pour la TVA à 5,5 % et la prime CEE.
            </li>
            <li>
              <strong>Déposer la demande de prime CEE</strong> avant le début des travaux (obligation
              antériorité du devis).
            </li>
            <li>
              <strong>Demander l'Éco-PTZ</strong> auprès de votre banque partenaire si vous
              souhaitez étaler le financement.
            </li>
          </ol>
        </article>

        {/* CTA RenoHab */}
        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Votre projet eau chaude solaire, sans les tracas</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            RenoHab vérifie vos aides CEE, mobilise un artisan RGE QualiSol et monte votre dossier
            Éco-PTZ. Gratuit et sans engagement.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/dpe-gratuit" className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all">
              Estimer mon DPE
            </a>
            <a href="/pompe-a-chaleur" className="px-6 py-3 rounded-full border border-white/70 text-white font-semibold hover:bg-white/10 transition-all">
              Explorer les pompes à chaleur
            </a>
          </div>
        </div>
      </main>

      <ArticleFooter />
    </div>
  );
}
