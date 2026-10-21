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

const PUBLISHED = '2026-10-21';
const PATH = '/blog/plan-pluriannuel-travaux-copropriete-2026';

export default function ArticlePlanPlurannuelTravauxCopropriete2026() {
  useSeo({
    title: "Plan Pluriannuel de Travaux (PPT) en copropriété : obligations, étapes et aides 2026 | RenoHab",
    description:
      "Le Plan Pluriannuel de Travaux est obligatoire pour toutes les copropriétés de plus de 15 ans depuis 2025. Découvrez ce qu'il contient, comment le financer et les aides disponibles en 2026.",
    path: PATH,
    image: '/blog/plan-pluriannuel-travaux-copropriete-2026.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline:
        "Plan Pluriannuel de Travaux (PPT) en copropriété : obligations, étapes et aides 2026",
      description:
        "Le Plan Pluriannuel de Travaux est obligatoire pour toutes les copropriétés de plus de 15 ans depuis 2025. Découvrez ce qu'il contient, comment le financer et les aides disponibles en 2026.",
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
      about: ['Copropriété', 'Plan Pluriannuel de Travaux', 'Rénovation énergétique', 'PPT'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 21 octobre 2026 · Copropriété
          </p>

          <h1>Plan Pluriannuel de Travaux en copropriété : ce que chaque copropriétaire doit savoir en 2026</h1>

          <img
            src="/blog/plan-pluriannuel-travaux-copropriete-2026.jpg"
            alt="Immeuble en copropriété avec travaux de rénovation énergétique en cours"
            className="w-full rounded-xl shadow-card mb-8"
            loading="lazy"
          />

          <p className="lead">
            Depuis le 1er janvier 2025, toutes les copropriétés d'habitation de France métropolitaine
            âgées de plus de 15 ans ont l'obligation de se doter d'un <strong>Plan Pluriannuel de Travaux
            (PPT)</strong>. En 2026, cette règle s'applique sans exception — et elle s'articule désormais
            avec le DPE collectif, lui aussi obligatoire. Qu'est-ce que le PPT concrètement ? Qui est
            concerné ? Comment financer les travaux qu'il préconise ? Le point complet.
          </p>

          <h2>Qu'est-ce que le Plan Pluriannuel de Travaux ?</h2>
          <p>
            Le PPT (aussi appelé PPPT — Projet de Plan Pluriannuel de Travaux — dans sa version soumise
            au vote) est un document programmatique qui planifie sur <strong>10 ans</strong> l'ensemble
            des travaux nécessaires à la bonne conservation d'une copropriété. Il couvre à la fois la
            structure du bâtiment (toiture, façades, réseaux) et sa performance énergétique (isolation,
            chauffage collectif, ventilation).
          </p>
          <p>Le PPT doit obligatoirement comporter :</p>
          <ul>
            <li>La liste des travaux nécessaires sur 10 ans, classés par ordre de priorité ;</li>
            <li>Une estimation du coût global de chaque poste ;</li>
            <li>Un calendrier de réalisation prévisionnel ;</li>
            <li>L'impact attendu sur le niveau de performance énergétique du bâtiment.</li>
          </ul>
          <p>
            Il est distinct du budget prévisionnel annuel voté en assemblée générale (AG) et ne doit pas
            être confondu avec le Diagnostic Technique Global (DTG), qui en est souvent le point de départ.
          </p>

          <h2>Qui est concerné par l'obligation PPT en 2026 ?</h2>
          <p>
            La loi Climat et Résilience de 2021 a mis en place un calendrier progressif. Depuis le
            <strong> 1er janvier 2025</strong>, toutes les copropriétés réunissant les trois critères
            suivants sont concernées :
          </p>
          <ul>
            <li>Situées en <strong>France métropolitaine</strong> ;</li>
            <li>À usage total ou partiel d'<strong>habitation</strong> ;</li>
            <li><strong>Âgées de plus de 15 ans</strong>.</li>
          </ul>
          <p>
            Une seule exception : si un DTG récent démontre qu'aucun travail n'est nécessaire au cours
            des 10 prochaines années, la copropriété n'est pas tenue d'élaborer un PPT. En pratique,
            cette situation reste rare.
          </p>

          <h2>Le lien avec le DPE collectif obligatoire depuis 2026</h2>
          <p>
            Depuis le <strong>1er janvier 2026</strong>, le DPE collectif est obligatoire pour toutes les
            copropriétés métropolitaines dont le permis de construire est antérieur au 1er janvier 2013,
            quelle que soit leur taille. Ce diagnostic dresse un état des lieux de la performance
            énergétique du bâtiment et identifie ses faiblesses : isolation des murs, des combles, type
            de chauffage collectif, étanchéité à l'air…
          </p>
          <p>
            Le DPE collectif constitue le socle de la partie énergétique du PPT : il permet de chiffrer
            le gain de classe DPE attendu selon les travaux envisagés et d'orienter les priorités. Une
            copropriété classée <strong>F ou G</strong> (passoire thermique) a tout intérêt à anticiper :
            les appartements qui la composent subissent déjà une décote à la revente, et les logements
            classés G sont interdits à la location depuis le 1er janvier 2025.
          </p>

          <h2>Comment se déroule l'élaboration d'un PPT ?</h2>
          <h3>1. Le diagnostic préalable</h3>
          <p>
            Le syndic mandate un professionnel qualifié (architecte, bureau d'études thermiques, expert
            en bâtiment) pour réaliser le DTG ou s'appuyer sur le DPE collectif déjà disponible. Ce
            diagnostic couvre l'état général du bâti, les installations techniques et l'enveloppe
            thermique.
          </p>

          <h3>2. La rédaction du projet de PPT</h3>
          <p>
            À partir du diagnostic, le professionnel établit le projet de PPT (PPPT). Ce document liste
            les travaux par ordre de priorité, avec leur coût estimatif et leur impact sur la performance
            énergétique. L'élaboration coûte généralement entre <strong>15 et 100 € par lot</strong>,
            selon la taille et la complexité de la copropriété.
          </p>

          <h3>3. La présentation en assemblée générale</h3>
          <p>
            Le syndic est tenu de soumettre le projet de PPT à l'assemblée générale. Les copropriétaires
            peuvent l'adopter, le modifier ou demander des compléments. <strong>L'adoption du PPT
            n'est pas obligatoire</strong>, mais une fois les travaux votés en AG, leur réalisation le
            devient.
          </p>

          <h3>4. La mise à jour décennale</h3>
          <p>
            Le PPT doit être actualisé tous les 10 ans pour tenir compte de l'état réel du bâtiment, des
            travaux déjà réalisés et des nouvelles obligations réglementaires.
          </p>

          <h2>Quelles aides pour financer les travaux inscrits au PPT ?</h2>
          <p>
            Les travaux de rénovation énergétique votés en assemblée générale ouvrent droit à plusieurs
            dispositifs d'aide cumulables :
          </p>
          <ul>
            <li>
              <strong>MaPrimeRénov' Copropriétés</strong> : aide de l'ANAH pouvant couvrir jusqu'à
              25 % du coût des travaux éligibles (isolation des parties communes, chauffage collectif),
              majorée pour les copropriétés en difficulté ou situées en quartiers prioritaires. Pour en
              savoir plus, consultez notre guide <a href="/blog/maprimerenov-coproprietes-2026">MaPrimeRénov' Copropriétés 2026</a>.
            </li>
            <li>
              <strong>Certificats d'Économies d'Énergie (CEE)</strong> : primes versées par les
              fournisseurs d'énergie, cumulables avec MaPrimeRénov'. Particulièrement intéressants pour
              l'isolation des parties communes et les travaux de chauffage collectif.
            </li>
            <li>
              <strong>Éco-PTZ Copropriété</strong> : prêt à taux zéro jusqu'à <strong>50 000 € par
              lot</strong> pour financer les travaux d'économies d'énergie dans les parties communes.
              Accessible sans condition de revenus, remboursable sur 20 ans maximum.
            </li>
            <li>
              <strong>TVA réduite à 5,5 %</strong> : applicable à la plupart des travaux de rénovation
              énergétique dans les logements de plus de 2 ans, y compris en copropriété.
            </li>
          </ul>

          <h2>Que risque-t-on en l'absence de PPT ?</h2>
          <p>
            Ne pas disposer d'un PPT expose la copropriété à plusieurs risques concrets :
          </p>
          <ul>
            <li>
              <strong>Perte des aides publiques</strong> : l'ANAH peut conditionner l'accès à
              MaPrimeRénov' Copropriétés à l'existence d'un PPT validé en AG.
            </li>
            <li>
              <strong>Sanction administrative</strong> : l'autorité compétente peut faire élaborer
              d'office le PPT aux frais du syndicat des copropriétaires.
            </li>
            <li>
              <strong>Dépréciation des lots</strong> : les notaires et agences immobilières vérifient
              désormais l'existence du PPT lors des transactions. Son absence peut signaler un bâtiment
              mal géré et peser à la baisse sur les prix.
            </li>
          </ul>

          <h2>Le rôle de l'Accompagnateur Rénov' dans un projet de copropriété</h2>
          <p>
            Lorsque le PPT identifie des travaux d'ampleur — isolation de façade, remplacement de la
            chaufferie collective, installation d'une VMC — la complexité administrative peut vite
            décourager le conseil syndical. C'est précisément le rôle d'un{' '}
            <strong>Accompagnateur Rénov' agréé</strong> comme RenoHab : audit technique, montage des
            dossiers d'aide, coordination des artisans RGE et suivi jusqu'à la réception des travaux.
          </p>
          <p>
            En tant qu'Accompagnateur Rénov', nous intervenons à toutes les étapes : de la lecture du
            PPT à l'optimisation des aides, en passant par la sélection d'entreprises qualifiées. Notre
            mission : transformer les obligations réglementaires en opportunités de rénovation financée
            et maîtrisée. Utilisez notre{' '}
            <a href="/#simulateur">simulateur d'aides</a> pour estimer rapidement le budget restant à
            charge après financements publics.
          </p>
        </article>

        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Votre copropriété a besoin de rénover ?</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            RenoHab accompagne les syndicats de copropriétaires : audit, montage des dossiers d'aides
            et coordination des travaux. Obtenez une estimation gratuite.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/dpe-gratuit" className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all">
              Estimer mon DPE
            </a>
            <a href="/blog" className="px-6 py-3 rounded-full border border-white/70 text-white font-semibold hover:bg-white/10 transition-all">
              Voir tous nos guides
            </a>
          </div>
        </div>
      </main>

      <ArticleFooter />
    </div>
  );
}
