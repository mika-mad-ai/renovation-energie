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

const PUBLISHED = '2026-09-13';
const PATH = '/blog/renovation-energetique-residence-secondaire-2026';

export default function ArticleRenovationResidenceSecondaire2026() {
  useSeo({
    title: "Résidence secondaire : quelles aides à la rénovation énergétique en 2026 ? | RenoHab",
    description:
      "MaPrimeRénov' est réservée à la résidence principale, mais votre maison de vacances peut bénéficier de la TVA à 5,5 % et des CEE. Guide complet des aides accessibles en 2026.",
    path: PATH,
    image: '/blog/renovation-energetique-residence-secondaire-2026.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: "Résidence secondaire : quelles aides à la rénovation énergétique en 2026 ?",
      description:
        "MaPrimeRénov' est réservée à la résidence principale, mais votre maison de vacances peut bénéficier de la TVA à 5,5 % et des CEE. Guide complet des aides accessibles en 2026.",
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
      about: ['Résidence secondaire', 'Aides rénovation', 'CEE', 'TVA réduite', 'MaPrimeRénov'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 13 septembre 2026 · Aides &amp; financement
          </p>

          <h1>Résidence secondaire : quelles aides à la rénovation énergétique en 2026 ?</h1>

          <img
            src="/blog/renovation-energetique-residence-secondaire-2026.jpg"
            alt="Maison de vacances en France bénéficiant d'une rénovation énergétique"
            className="w-full rounded-xl object-cover max-h-80 mb-8"
            loading="eager"
          />

          <p className="lead">
            Vous possédez une maison de campagne, un appartement à la montagne ou un pied-à-terre au bord de la mer ?
            Beaucoup de propriétaires pensent à tort qu'ils ne peuvent bénéficier d'aucune aide pour rénover leur résidence secondaire.
            La réalité est plus nuancée : si <strong>MaPrimeRénov'</strong> reste réservée à la résidence principale,
            la <strong>TVA réduite à 5,5 %</strong> et les <strong>CEE (Certificats d'Économies d'Énergie)</strong>
            s'appliquent également à votre maison de vacances. Voici le guide complet pour faire les bons choix en 2026.
          </p>

          <h2>MaPrimeRénov' : une aide conditionnée à la résidence principale</h2>
          <p>
            MaPrimeRénov', gérée par l'Anah, est la principale aide à la rénovation énergétique en France.
            Elle est soumise à une condition fondamentale : le logement doit être occupé{' '}
            <strong>à titre de résidence principale</strong>, c'est-à-dire au moins 8 mois par an par son propriétaire
            occupant ou par son locataire.
          </p>
          <p>
            Une résidence secondaire est donc, par définition, <strong>exclue du dispositif</strong>. Il existe cependant deux exceptions :
          </p>
          <ul>
            <li>
              <strong>Engagement de changement de résidence :</strong> si vous vous engagez à habiter le logement comme résidence
              principale à l'issue des travaux (au moins 8 mois/an pendant 3 ans), la demande est acceptée. C'est
              utile si vous envisagez une retraite dans votre maison de campagne.
            </li>
            <li>
              <strong>Copropriété majoritairement résidence principale :</strong> lorsqu'une copropriété vote des travaux collectifs
              et qu'elle est majoritairement composée de résidences principales, la quote-part de l'aide s'applique également
              aux lots utilisés comme résidences secondaires.
            </li>
          </ul>

          <h2>TVA réduite à 5,5 % : oui, même pour votre résidence secondaire</h2>
          <p>
            C'est l'aide la plus simple et la plus souvent oubliée : la <strong>TVA à taux réduit de 5,5 %</strong> s'applique
            à tous les logements achevés depuis plus de 2 ans, quelle que soit leur nature (résidence principale ou secondaire).
            Il n'y a pas de condition de revenus ni d'occupation.
          </p>
          <p>
            En pratique, l'artisan facture directement ses prestations à 5,5 % au lieu de 20 %,
            ce qui représente une économie de <strong>14,5 % sur la main-d'œuvre et les matériaux</strong>.
            Sur 15 000 € de travaux d'isolation ou de chauffage, c'est plus de 2 000 € d'économie immédiate,
            sans aucune démarche administrative.
          </p>
          <p>
            Les travaux éligibles couvrent l'isolation (combles, murs, planchers), le remplacement du système
            de chauffage, l'installation d'une{' '}
            <a href="/pompe-a-chaleur">pompe à chaleur</a>,
            une VMC, ou encore le remplacement des menuiseries. L'artisan doit simplement faire signer une
            attestation de résidence que vous lui fournissez.
          </p>

          <h2>Les CEE : une prime énergie accessible sans condition d'occupation</h2>
          <p>
            Les <strong>Certificats d'Économies d'Énergie (CEE)</strong> constituent la deuxième source d'aide
            accessible pour une résidence secondaire. Contrairement à MaPrimeRénov', ils ne dépendent pas du statut
            du logement : propriétaires de résidences secondaires et propriétaires bailleurs y ont tous accès,
            sans condition de revenus.
          </p>
          <p>
            Les conditions à remplir sont simples :
          </p>
          <ul>
            <li>Le logement doit être achevé depuis <strong>plus de 2 ans</strong>.</li>
            <li>Les travaux doivent être réalisés par un artisan certifié <strong>RGE</strong> (Reconnu Garant de l'Environnement).</li>
            <li>
              Depuis le <strong>1er septembre 2026</strong>, les CEE pour les travaux de chauffage sont accessibles
              uniquement aux logements classés <strong>E, F ou G</strong> avant travaux (dans le cadre des rénovations d'ampleur).
              Pour les autres opérations (isolation, VMC…), les conditions restent plus ouvertes.
            </li>
          </ul>
          <p>
            La prime CEE est versée par un <em>obligé</em> (fournisseur d'énergie) en échange de l'engagement
            des travaux. Son montant varie selon la nature et la localisation du bien, mais peut représenter
            plusieurs centaines, voire milliers d'euros pour des travaux d'isolation ou l'installation d'une
            pompe à chaleur.
          </p>

          <h2>L'Éco-PTZ : non disponible pour les résidences secondaires</h2>
          <p>
            L'Éco-prêt à taux zéro (Éco-PTZ) finance jusqu'à 50 000 € de travaux de rénovation énergétique
            sans intérêts, mais il est expressément <strong>réservé aux résidences principales</strong>.
            Une résidence secondaire en est donc exclue, même si vous y réalisez des travaux ambitieux.
          </p>
          <p>
            <strong>Exception :</strong> si vous êtes propriétaire bailleur et que le logement constitue la
            résidence principale de votre locataire, l'Éco-PTZ est accessible — mais cela implique une location
            à l'année, pas une location saisonnière.
          </p>

          <h2>Location saisonnière et DPE : un risque à ne pas ignorer</h2>
          <p>
            Si vous louez votre résidence secondaire à des vacanciers (Airbnb, Abritel, Gîtes de France…),
            la réglementation sur les passoires thermiques vous concerne aussi.
            Depuis le <strong>1er janvier 2025</strong>, les logements classés <strong>G</strong> ne peuvent
            plus faire l'objet de nouveaux baux, y compris pour des locations saisonnières selon les précisions
            réglementaires. Les logements <strong>F</strong> suivront en 2028.
          </p>
          <p>
            Avant de mettre votre bien en location, vérifiez sa classe DPE. Un diagnostic défavorable peut
            non seulement bloquer la location, mais aussi pénaliser la valeur du bien à la revente. Un
            bilan rapide est accessible via notre{' '}
            <a href="/dpe-gratuit">estimateur de DPE en ligne</a>.
          </p>

          <h2>Ce que vous pouvez cumuler pour une résidence secondaire</h2>
          <p>
            En résumé, voici ce qui est accessible pour votre résidence secondaire en 2026 :
          </p>
          <ul>
            <li>✅ <strong>TVA à 5,5 %</strong> sur tous les travaux éligibles (logement &gt; 2 ans)</li>
            <li>✅ <strong>CEE</strong> (prime énergie) pour les opérations de rénovation éligibles, via un artisan RGE</li>
            <li>❌ <strong>MaPrimeRénov'</strong> (sauf exceptions : engagement RP ou copropriété majoritaire RP)</li>
            <li>❌ <strong>Éco-PTZ</strong> (sauf si vous louez à un locataire à titre de résidence principale)</li>
          </ul>
          <p>
            Même sans MaPrimeRénov', la combinaison TVA à 5,5 % + CEE peut alléger significativement la facture.
            Pour simuler vos économies potentielles sur les postes chauffage et isolation,
            rendez-vous sur notre{' '}
            <a href="/#simulator">simulateur d'économies</a>.
          </p>

          <h2>Votre plan d'action</h2>
          <ol>
            <li><strong>Faites réaliser un DPE</strong> par un diagnostiqueur certifié : c'est obligatoire pour louer et utile pour prioriser les travaux.</li>
            <li><strong>Choisissez un artisan RGE</strong> pour tout travail de rénovation : c'est la condition sine qua non des CEE et de la TVA à 5,5 %.</li>
            <li><strong>Demandez un devis TVA 5,5 %</strong> : l'artisan doit vous faire remplir une attestation simplifiée.</li>
            <li><strong>Négociez votre prime CEE</strong> en passant par un délégataire ou en faisant comparer les offres.</li>
            <li>Si vos travaux sont importants, <strong>envisagez le passage en résidence principale</strong> pour accéder à MaPrimeRénov'.</li>
          </ol>
          <p>
            En tant qu'Accompagnateur Rénov' agréé, RenoHab vous aide à identifier les aides disponibles
            et à piloter votre projet de rénovation — même pour une résidence secondaire.
          </p>
        </article>

        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Vérifiez vos aides disponibles</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            Résidence principale ou secondaire, RenoHab identifie les aides accessibles et monte votre dossier avec des artisans RGE.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/dpe-gratuit" className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all">
              Estimer mon DPE
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
