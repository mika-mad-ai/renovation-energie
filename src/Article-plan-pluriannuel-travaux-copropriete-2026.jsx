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

const PUBLISHED = '2026-10-13';
const PATH = '/blog/plan-pluriannuel-travaux-copropriete-2026';

export default function ArticlePptCopropriete2026() {
  useSeo({
    title: "Plan pluriannuel de travaux (PPT) en copropriété : obligations et financement en 2026 | RenoHab",
    description:
      "Le PPT est désormais obligatoire pour toutes les copropriétés françaises. Découvrez ce qu'il contient, comment le financer et comment accéder aux aides à la rénovation énergétique.",
    path: PATH,
    image: '/blog/plan-pluriannuel-travaux-copropriete-2026.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline:
        "Plan pluriannuel de travaux (PPT) en copropriété : obligations et financement en 2026",
      description:
        "Le PPT est désormais obligatoire pour toutes les copropriétés françaises. Découvrez ce qu'il contient, comment le financer et comment accéder aux aides à la rénovation énergétique.",
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
      about: ['Copropriété', 'Plan pluriannuel de travaux', 'Rénovation énergétique', 'MaPrimeRénov'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 13 octobre 2026 · Copropriété
          </p>

          <h1>Plan pluriannuel de travaux (PPT) en copropriété : obligations et financement en 2026</h1>

          <img
            src="/blog/plan-pluriannuel-travaux-copropriete-2026.jpg"
            alt="Immeuble en copropriété faisant l'objet d'un plan pluriannuel de travaux de rénovation énergétique"
            className="rounded-xl w-full object-cover max-h-80 mb-8"
            loading="lazy"
          />

          <p className="lead">
            Depuis la loi Climat et Résilience (août 2021), le Plan Pluriannuel de Travaux (PPT) est
            progressivement devenu obligatoire pour toutes les copropriétés françaises dont l'immeuble a
            plus de quinze ans. En 2026, il concerne désormais les copropriétés de toutes tailles,
            y compris les plus petites. Voici ce que vous devez savoir pour vous mettre en conformité
            — et surtout pour en faire un levier de rénovation énergétique financée.
          </p>

          <h2>Qu'est-ce que le Plan Pluriannuel de Travaux ?</h2>
          <p>
            Le PPT est un document de planification sur <strong>dix ans</strong> qui recense l'ensemble
            des travaux nécessaires à la conservation et à l'amélioration d'un immeuble en copropriété.
            Introduit à l'article 14-2 de la loi du 10 juillet 1965 (modifié par la loi n° 2021-1104
            du 22 août 2021), il doit obligatoirement inclure :
          </p>
          <ul>
            <li>les travaux nécessaires à la sauvegarde de l'immeuble et à la santé des occupants ;</li>
            <li>les travaux d'amélioration de la <strong>performance énergétique</strong> de l'immeuble ;</li>
            <li>une estimation du coût et un calendrier de réalisation pour chaque tranche de travaux.</li>
          </ul>
          <p>
            Ce plan doit être actualisé tous les dix ans. Il est distinct du{' '}
            <strong>Diagnostic Technique Global (DTG)</strong>, même si ce dernier peut en constituer
            la base documentaire.
          </p>

          <h2>Quelles copropriétés sont concernées en 2026 ?</h2>
          <p>
            L'obligation s'est déployée progressivement selon la taille de la copropriété (nombre de lots
            principaux à usage de logements, bureaux ou commerces) :
          </p>
          <ul>
            <li><strong>Plus de 200 lots</strong> : PPT obligatoire depuis le 1er janvier 2023.</li>
            <li><strong>51 à 200 lots</strong> : obligatoire depuis le 1er janvier 2024.</li>
            <li><strong>50 lots et moins</strong> : obligatoire depuis le 1er janvier 2026.</li>
          </ul>
          <p>
            En parallèle, le <strong>DPE collectif</strong> (Diagnostic de Performance Énergétique à
            l'échelle de l'immeuble) est devenu obligatoire pour toutes les copropriétés au
            1er janvier 2026. Ce diagnostic alimente directement le PPT : il identifie les gisements
            d'économies d'énergie et oriente les priorités de travaux.
          </p>

          <h2>Comment établir un PPT ?</h2>
          <p>
            Le PPT est élaboré par un <strong>technicien qualifié</strong> (bureau d'études, architecte,
            diagnostiqueur certifié) mandaté par le syndic. Il se base sur une inspection de l'immeuble
            et, idéalement, sur le DPE collectif déjà réalisé.
          </p>
          <p>
            Une fois établi, le projet de PPT est soumis au vote de l'assemblée générale des
            copropriétaires à la <strong>majorité simple</strong> (article 24 de la loi de 1965).
            L'approbation du PPT ne vaut pas vote des travaux eux-mêmes : chaque tranche devra faire
            l'objet d'une décision distincte en AG. Comptez entre <strong>1 500 € et 5 000 €</strong>{' '}
            pour une copropriété de taille moyenne selon la complexité de l'immeuble.
          </p>

          <h2>Comment financer les travaux prévus au PPT ?</h2>
          <p>
            L'un des intérêts du PPT est qu'il ouvre la porte à plusieurs dispositifs d'aides publiques.
          </p>

          <h3>Le Fonds de travaux</h3>
          <p>
            Toute copropriété doit constituer un <strong>Fonds de travaux</strong> alimenté par des
            cotisations annuelles. Depuis la loi ALUR (2014), ce fonds est obligatoire dès la cinquième
            année de l'immeuble. Lorsqu'un PPT existe, la cotisation minimale correspond au montant
            de la première tranche de travaux prévue ; à défaut de PPT, elle doit représenter au
            moins <strong>5 % du budget prévisionnel</strong> annuel de la copropriété.
          </p>

          <h3>MaPrimeRénov' Copropriétés</h3>
          <p>
            L'aide phare de l'Anah est accessible aux syndicats de copropriétaires qui s'engagent
            dans une <strong>rénovation d'ampleur</strong> : isolation des parties communes, remplacement
            d'une chaudière collective, VMC hygroréglable… L'aide peut atteindre <strong>25 % du
            montant des travaux</strong>, avec un plafond par logement variable selon la nature des
            gestes. Un accompagnement par un{' '}
            <a href="/blog/renovation-ampleur-2026-accompagnateur-renov">Accompagnateur Rénov'</a> est
            obligatoire pour les dossiers de rénovation d'ampleur.
          </p>

          <h3>Les Certificats d'Économies d'Énergie (CEE)</h3>
          <p>
            Les CEE viennent compléter MaPrimeRénov' pour de nombreux gestes : isolation des combles,
            calorifugeage des réseaux de chaleur, régulation du chauffage collectif… En 2026, l'enveloppe
            nationale des CEE est en <strong>hausse de 27 %</strong> par rapport à 2025, ce qui
            signifie des primes potentiellement plus élevées.{' '}
            <a href="/blog/cee-2026-prime-energie-comment-en-profiter">En savoir plus sur les CEE en 2026</a>.
          </p>

          <h3>L'Éco-PTZ copropriété</h3>
          <p>
            Chaque copropriétaire peut contracter un <strong>Éco-Prêt à Taux Zéro</strong> pour
            financer sa quote-part des travaux collectifs, sans condition de ressources. Le prêt peut
            aller jusqu'à <strong>50 000 €</strong> par logement et se rembourse sur 20 ans sans intérêts.
            Certains syndicats ont également la possibilité de contracter un éco-PTZ collectif.
          </p>

          <h2>Le rôle clé de l'Accompagnateur Rénov'</h2>
          <p>
            Pour une copropriété qui souhaite aller au-delà du simple PPT et engager une rénovation
            d'ampleur, l'accompagnement par un <strong>Accompagnateur Rénov' agréé</strong> est
            indispensable. Cet expert :
          </p>
          <ul>
            <li>analyse le DPE collectif et les besoins techniques de l'immeuble ;</li>
            <li>prépare le dossier MaPrimeRénov' Copropriétés et coordonne les CEE ;</li>
            <li>aide à choisir des artisans RGE adaptés au marché local ;</li>
            <li>suit le chantier jusqu'à la réception des travaux.</li>
          </ul>
          <p>
            RenoHab est Accompagnateur Rénov' agréé par l'Anah. Nous intervenons auprès des syndicats
            de copropriétaires pour transformer un PPT en programme de travaux concret, financé et
            suivi de A à Z.
          </p>

          <h2>Par où commencer ?</h2>
          <p>
            La première étape est toujours le <strong>DPE collectif</strong> : il fournit une photographie
            précise de la consommation de l'immeuble et des axes d'amélioration prioritaires. Si votre
            copropriété ne l'a pas encore réalisé, c'est urgent : l'obligation est en vigueur depuis
            janvier 2026. Ensuite, le syndic mandate un professionnel pour établir le PPT, qui
            devient la feuille de route pour les dix prochaines années.
          </p>
          <p>
            Pour les travaux énergétiques prévus au PPT, consultez notre{' '}
            <a href="/blog">guide complet des aides 2026</a> ou utilisez notre{' '}
            <a href="/#simulateur">simulateur d'aides en ligne</a> pour estimer les subventions
            auxquelles votre copropriété peut prétendre.
          </p>
        </article>

        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Votre copropriété a besoin d'un PPT ou d'un DPE collectif ?</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            RenoHab, Accompagnateur Rénov' agréé, vous guide du diagnostic jusqu'au financement des travaux.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/dpe-gratuit" className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all">
              Estimer mon DPE
            </a>
            <a href="/pompe-a-chaleur" className="px-6 py-3 rounded-full border border-white/70 text-white font-semibold hover:bg-white/10 transition-all">
              Explorer les solutions chauffage
            </a>
          </div>
        </div>
      </main>

      <ArticleFooter />
    </div>
  );
}
