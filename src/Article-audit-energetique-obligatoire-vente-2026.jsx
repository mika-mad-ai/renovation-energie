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

const PUBLISHED = '2026-08-03';
const PATH = '/blog/audit-energetique-obligatoire-vente-2026';

export default function ArticleAuditEnergetiqueObligatoire() {
  useSeo({
    title: "Audit énergétique obligatoire à la vente en 2026 : qui est concerné, prix et démarches | RenoHab",
    description:
      "Depuis 2023, vendre une maison classée F ou G impose un audit énergétique réglementaire. En 2025, la classe E a rejoint l'obligation. Guide complet : logements concernés, coût, validité et comment en profiter pour décrocher des aides.",
    path: PATH,
    image: `https://renohab.fr/blog/audit-energetique-obligatoire-vente-2026.jpg`,
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline:
        "Audit énergétique obligatoire à la vente en 2026 : guide complet pour les propriétaires",
      description:
        "Depuis 2023, vendre une maison classée F ou G impose un audit énergétique réglementaire. En 2025, la classe E a rejoint l'obligation. Guide complet : logements concernés, coût, validité et comment en profiter pour décrocher des aides.",
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
      about: ['Audit énergétique', 'Vente immobilière', 'DPE', 'Rénovation énergétique'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 3 août 2026 · Réglementation
          </p>

          <h1>Audit énergétique obligatoire à la vente en 2026 : guide complet pour les propriétaires</h1>

          <img
            src="/blog/audit-energetique-obligatoire-vente-2026.jpg"
            alt="Maison individuelle classée F soumise à l'audit énergétique obligatoire avant vente"
            className="w-full rounded-2xl object-cover max-h-96 mb-8"
            loading="eager"
          />

          <p className="lead">
            Vous vendez une maison classée E, F ou G ? Depuis 2023 pour les classes F et G, et
            depuis le 1er janvier 2025 pour la classe E, la loi vous oblige à remettre un{' '}
            <strong>audit énergétique réglementaire</strong> à l'acquéreur dès la première visite.
            Sans ce document, la plupart des notaires refusent de signer le compromis de vente.
            Ce guide répond aux questions essentielles : qui est concerné, combien ça coûte, et
            comment transformer cette obligation en levier d'aides.
          </p>

          <h2>Qu'est-ce que l'audit énergétique obligatoire et en quoi diffère-t-il du DPE ?</h2>
          <p>
            Le Diagnostic de Performance Énergétique (DPE) mesure la consommation d'énergie et les
            émissions de CO₂ d'un logement sur une échelle de A à G. C'est un état des lieux.
            L'<strong>audit énergétique réglementaire</strong>, lui, va plus loin : il identifie
            les points faibles du bâti et propose au moins deux scénarios de travaux chiffrés pour
            améliorer la performance du logement.
          </p>
          <ul>
            <li>Le DPE est valable <strong>10 ans</strong> ; l'audit n'est valable que <strong>5 ans</strong>.</li>
            <li>L'audit est réalisé par un opérateur certifié (bureau d'études thermiques ou
            diagnostiqueur qualifié), distinct du diagnostiqueur DPE classique.</li>
            <li>L'audit doit obligatoirement être remis à l'acheteur <em>avant</em> la signature du
            compromis — il est annexé au dossier de diagnostics techniques (DDT).</li>
          </ul>
          <p>
            Attention : les appartements en copropriété ne sont <strong>pas</strong> soumis à cette
            obligation à la vente. Seules les maisons individuelles et les immeubles entiers
            (plusieurs logements appartenant à un seul propriétaire) sont concernés.
          </p>

          <h2>Qui est concerné en 2026 ?</h2>
          <p>
            Le calendrier d'application est progressif selon la classe énergétique du logement :
          </p>
          <ul>
            <li><strong>Classes F et G</strong> : obligation depuis le <strong>1er avril 2023</strong>.</li>
            <li><strong>Classe E</strong> : obligation depuis le <strong>1er janvier 2025</strong>.</li>
            <li><strong>Classe D</strong> : non prévue avant le <strong>1er janvier 2034</strong>.</li>
          </ul>
          <p>
            En pratique, si votre maison individuelle est classée E, F ou G et que vous souhaitez
            la mettre en vente aujourd'hui, vous devez faire réaliser un audit énergétique avant
            même de publier votre annonce ou d'organiser des visites.
          </p>
          <p>
            Pour savoir dans quelle classe se situe votre bien, consultez votre DPE existant ou
            utilisez notre <a href="/#simulator">simulateur DPE gratuit</a>. Un{' '}
            <a href="/dpe-gratuit">DPE récent</a> est de toute façon obligatoire lors d'une vente,
            et son résultat conditionne le besoin d'audit.
          </p>

          <h2>Combien coûte un audit énergétique réglementaire ?</h2>
          <p>
            Le tarif varie en fonction de la surface, de la complexité du bien et de la région.
            À titre indicatif :
          </p>
          <ul>
            <li><strong>Petit logement (moins de 80 m²)</strong> : 500 à 800 €.</li>
            <li><strong>Maison individuelle standard (80–130 m²)</strong> : 800 à 1 200 €.</li>
            <li><strong>Grande propriété ou immeuble en monopropriété</strong> : 1 200 à 1 500 € et plus.</li>
          </ul>
          <p>
            Ces coûts sont à la charge du vendeur. Ils ne sont pas déductibles fiscalement dans
            le cadre d'une vente classique, mais peuvent être intégrés dans les frais de cession
            pour le calcul de la plus-value immobilière.
          </p>

          <h2>Que contient l'audit et comment l'utiliser ?</h2>
          <p>
            L'audit énergétique réglementaire comprend obligatoirement :
          </p>
          <ul>
            <li>une description détaillée du bâtiment (enveloppe, systèmes de chauffage, ventilation) ;</li>
            <li>au moins <strong>deux scénarios de travaux</strong>, dont l'un permettant d'atteindre
            la classe C ou au-dessus ;</li>
            <li>une estimation du coût de chaque scénario et des aides financières mobilisables
            (MaPrimeRénov', CEE, Éco-PTZ…) ;</li>
            <li>l'ordre de priorité des travaux recommandés.</li>
          </ul>
          <p>
            Pour le vendeur, l'audit peut devenir un argument de vente : en montrant à l'acheteur
            que des travaux précis et chiffrés sont possibles, il lui permet de se projeter et de
            négocier en connaissance de cause plutôt que de fuir face à l'étiquette G.
          </p>
          <p>
            Pour l'acheteur, c'est une feuille de route : l'audit lui permet de planifier les
            travaux dès l'achat et d'accéder immédiatement aux aides disponibles, notamment la{' '}
            <strong>rénovation d'ampleur</strong> financée par MaPrimeRénov' si le logement monte
            d'au moins deux classes DPE.
          </p>

          <h2>L'audit peut-il déclencher des aides pour le futur propriétaire ?</h2>
          <p>
            Oui. L'audit énergétique réglementaire fourni par le vendeur est directement réutilisable
            par l'acheteur pour monter un dossier d'aides à la rénovation :
          </p>
          <ul>
            <li><strong>MaPrimeRénov' rénovation d'ampleur</strong> : accessible si le bien est classé
            E, F ou G et que les travaux permettent un saut d'au moins deux classes — la prise en
            charge peut atteindre 70 % du montant des travaux pour les ménages très modestes.</li>
            <li><strong>Éco-PTZ</strong> : un prêt sans intérêts jusqu'à 50 000 € pour financer les
            travaux, cumulable avec MaPrimeRénov'. En savoir plus sur l'
            <a href="/blog/eco-ptz-2026-pret-taux-zero-renovation">Éco-PTZ 2026</a>.</li>
            <li><strong>Primes CEE</strong> : les{' '}
            <a href="/blog/cee-2026-prime-energie-comment-en-profiter">primes Certificats d'Économie d'Énergie</a>{' '}
            viennent en complément selon les gestes réalisés.</li>
          </ul>
          <p>
            En tant qu'Accompagnateur Rénov' agréé, RenoHab peut analyser l'audit remis lors de
            l'achat, construire un plan de travaux optimisé et monter l'ensemble des dossiers d'aides
            pour réduire au maximum votre reste à charge.
          </p>

          <h2>Absence d'audit : quels risques pour le vendeur ?</h2>
          <p>
            Vendre sans audit alors que le bien est classé E, F ou G expose le vendeur à plusieurs
            risques :
          </p>
          <ul>
            <li><strong>Refus du notaire</strong> de régulariser la vente — la grande majorité
            des offices exige désormais ce document avant toute signature.</li>
            <li><strong>Action en garantie des vices cachés</strong> : un acheteur qui découvre
            l'obligation post-signature peut invoquer un manquement à l'information précontractuelle.</li>
            <li><strong>Nullité de la vente</strong> dans les cas les plus graves, selon la
            jurisprudence récente (arrêts 2025-2026 des tribunaux judiciaires).</li>
          </ul>
          <p>
            Depuis avril 2026, plusieurs décisions judiciaires ont condamné des vendeurs à des
            dommages et intérêts pour défaut d'audit. Mieux vaut anticiper.
          </p>

          <h2>Comment faire réaliser son audit ?</h2>
          <p>
            L'audit doit être réalisé par un opérateur certifié RGE (Reconnu Garant de
            l'Environnement) spécialisé en audit énergétique. Voici les étapes :
          </p>
          <ol>
            <li>Vérifiez la classe DPE actuelle de votre logement (ou faites un <a href="/dpe-gratuit">DPE</a>
            {' '}si le vôtre date de plus de 10 ans).</li>
            <li>Contactez un opérateur certifié via l'annuaire de l'ADEME ou faites appel à un
            Accompagnateur Rénov' qui coordonne ces démarches.</li>
            <li>Prévoyez une visite de 2 à 4 heures sur site pour un logement standard.</li>
            <li>Recevez le rapport d'audit en 2 à 4 semaines et annexez-le à votre dossier de vente.</li>
          </ol>
          <p>
            RenoHab peut vous mettre en relation avec des opérateurs certifiés dans votre secteur
            et, si vous êtes acheteur, exploiter l'audit existant pour maximiser les aides auxquelles
            vous avez droit dès la prise de possession du bien.
          </p>
        </article>

        {/* CTA RenoHab */}
        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Vendeur ou acheteur d'un logement énergivore ?</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            RenoHab vous accompagne : audit réglementaire, plan de travaux, montage des aides
            MaPrimeRénov', CEE et Éco-PTZ — tout en main.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/dpe-gratuit" className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all">
              Estimer mon DPE
            </a>
            <a href="/pompe-a-chaleur" className="px-6 py-3 rounded-full border border-white/70 text-white font-semibold hover:bg-white/10 transition-all">
              Explorer les travaux éligibles
            </a>
          </div>
        </div>
      </main>

      <ArticleFooter />
    </div>
  );
}
