import React from 'react';
import useSeo from './useSeo';

// En-tête et pied de page locaux, alignés sur le style du reste du site.
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

const PUBLISHED = '2026-06-30';
const PATH = '/blog/audit-energetique-obligatoire-vente-2026';

export default function ArticleAuditEnergetiqueObligatoireVente() {
  useSeo({
    title: "Audit énergétique obligatoire à la vente en 2026 : qui est concerné ? | RenoHab",
    description:
      "Maison classée E, F ou G : l'audit énergétique réglementaire est obligatoire pour la vendre en 2026. Calendrier, contenu, prix et durée de validité.",
    path: PATH,
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: "Audit énergétique obligatoire à la vente en 2026 : ce qu'il faut savoir",
      description:
        "Maison classée E, F ou G : l'audit énergétique réglementaire est obligatoire pour la vendre en 2026. Calendrier, contenu, prix et durée de validité.",
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
      about: ['Audit énergétique', 'DPE', 'Vente immobilière', 'Rénovation énergétique'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 30 juin 2026 · Réglementation
          </p>

          <h1>Audit énergétique obligatoire à la vente en 2026 : ce qu'il faut savoir</h1>

          <img
            src="/DALL-E-2-maison.webp"
            alt="Maison individuelle dont la performance énergétique est évaluée avant une vente"
            loading="lazy"
            className="w-full h-auto rounded-2xl shadow-soft my-6"
          />

          <p className="lead">
            Vendre une maison mal isolée n'est plus aussi simple qu'avant : depuis le 1er janvier 2025,
            un audit énergétique réglementaire est obligatoire en plus du DPE pour les logements classés
            E, F ou G. Qui est concerné, que contient ce document, combien il coûte et combien de temps
            il reste valable : voici l'essentiel pour aborder une vente sereinement.
          </p>

          <h2>Qu'est-ce que l'audit énergétique réglementaire ?</h2>
          <p>
            Issu de la loi Climat et Résilience, l'audit énergétique réglementaire va plus loin que le
            DPE. Là où le DPE se contente d'attribuer une étiquette énergétique au logement, l'audit
            propose un véritable <strong>parcours de travaux chiffré</strong> : il indique la classe
            énergétique atteignable après rénovation, le coût estimé des travaux, les économies
            d'énergie attendues et les aides financières mobilisables. L'objectif est de donner à
            l'acheteur une vision concrète de ce qu'implique la rénovation du bien — un enjeu d'autant
            plus sensible que les logements les plus énergivores sont aussi, progressivement, interdits
            à la location.
          </p>

          <h2>Qui est concerné en 2026 ?</h2>
          <p>L'obligation s'applique progressivement, par classe de performance énergétique :</p>
          <ul>
            <li><strong>Classes F et G</strong> : obligatoire depuis le 1er avril 2023.</li>
            <li><strong>Classe E</strong> : obligatoire depuis le 1er janvier 2025.</li>
            <li><strong>Classe D</strong> : obligatoire à compter du 1er janvier 2034.</li>
          </ul>
          <p>
            Mi-2026, l'audit est donc exigible pour toute vente d'un logement classé <strong>E, F ou
            G</strong>. Il ne concerne que les <strong>maisons individuelles</strong> et les{' '}
            <strong>immeubles en monopropriété</strong> (un seul propriétaire) : un lot de copropriété
            vendu isolément n'y est pas soumis. L'audit doit être remis par le vendeur (ou son
            mandataire) à l'acheteur dès sa première visite du bien.
          </p>

          <h2>Que contient le document, concrètement ?</h2>
          <p>
            L'audit présente généralement <strong>plusieurs scénarios de travaux</strong>, du geste
            isolé à la rénovation globale, avec pour chacun :
          </p>
          <ul>
            <li>la nouvelle étiquette DPE obtenue après travaux ;</li>
            <li>une estimation du coût des travaux ;</li>
            <li>les économies d'énergie et l'impact sur la facture ;</li>
            <li>les aides financières mobilisables (MaPrimeRénov', CEE, Éco-PTZ...).</li>
          </ul>
          <p>
            L'audit doit être réalisé par un professionnel qualifié (auditeur certifié ou bureau
            d'études RGE), qui ne peut pas sous-traiter la mission et doit effectuer au moins une visite
            du logement.
          </p>

          <h2>Combien coûte un audit énergétique, et qui le finance ?</h2>
          <p>
            Comptez généralement <strong>entre 800 € et 1 500 €</strong> pour une maison individuelle,
            selon sa surface et la complexité du bâti. Ce montant est à la charge du vendeur. Point
            important : l'aide MaPrimeRénov' dédiée à l'audit énergétique ne s'applique qu'à l'
            <strong>audit dit « incitatif »</strong>, réalisé volontairement avant un projet de travaux —
            pas à l'audit réglementaire obligatoire lié à une vente, qui reste entièrement à la charge
            du propriétaire.
          </p>

          <h2>Quelle est sa durée de validité ?</h2>
          <p>
            L'audit énergétique réglementaire est valable <strong>5 ans</strong>, contre 10 ans pour le
            DPE. Si des travaux ont déjà été réalisés ou si la réglementation a évolué entre-temps, il
            est recommandé de vérifier que l'audit reflète toujours la réalité du logement avant de le
            transmettre à un acheteur.
          </p>

          <h2>Que risque-t-on en l'absence d'audit ?</h2>
          <p>
            La loi Climat et Résilience ne prévoit pas d'amende spécifique pour un vendeur qui omet
            l'audit. En pratique, ses conséquences sont surtout civiles : comme le DPE, l'audit est
            opposable, et l'acheteur peut conditionner son engagement à sa fourniture, demander un
            délai pour l'étudier, ou engager après coup la responsabilité du vendeur pour manquement à
            son obligation d'information. Dans les faits, le <strong>notaire refuse le plus souvent de
            signer l'acte authentique</strong> tant que l'audit n'a pas été produit, ce qui peut
            retarder — voire compromettre — une transaction déjà engagée. Mieux vaut donc anticiper ce
            diagnostic dès le début du projet de vente plutôt que de le découvrir au moment du
            compromis.
          </p>

          <h2>Et après la vente : comment financer les travaux ?</h2>
          <p>
            Pour l'acheteur comme pour le vendeur qui anticipe sa mise en vente, l'audit devient un
            véritable outil de pilotage : il permet de prioriser les travaux (isolation, ventilation,
            remplacement du chauffage) et de monter un dossier d'aides cohérent. RenoHab, Accompagnateur
            Rénov' agréé, vous aide à transformer ce diagnostic en plan d'action chiffré, en coordonnant
            des artisans RGE et en sécurisant l'accès aux aides disponibles — notamment pour une{' '}
            <a href="/pompe-a-chaleur">pompe à chaleur air/eau</a>, souvent le geste le plus efficace
            pour gagner plusieurs classes DPE.
          </p>
          <p>
            Vous ne savez pas dans quelle classe se situe votre logement, ni si l'audit vous concerne
            déjà ? Commencez par <a href="/dpe-gratuit">estimer votre DPE gratuitement</a>, ou utilisez
            notre <a href="/#simulator">simulateur d'aides</a> pour évaluer le budget de vos travaux en
            quelques minutes.
          </p>
        </article>

        {/* CTA RenoHab */}
        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Anticipez votre audit énergétique</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            RenoHab vous accompagne pour comprendre votre DPE, planifier vos travaux et sécuriser vos aides.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/dpe-gratuit" className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all">
              Estimer mon DPE
            </a>
            <a href="/pompe-a-chaleur" className="px-6 py-3 rounded-full border border-white/70 text-white font-semibold hover:bg-white/10 transition-all">
              Étudier une pompe à chaleur
            </a>
          </div>
        </div>
      </main>

      <ArticleFooter />
    </div>
  );
}
