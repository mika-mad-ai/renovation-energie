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

const PUBLISHED = '2026-07-05';
const PATH = '/blog/audit-energetique-obligatoire-vente-2026';

export default function ArticleAuditEnergetiqueObligatoire() {
  useSeo({
    title: "Audit énergétique obligatoire à la vente : ce que tout propriétaire doit savoir en 2026 | RenoHab",
    description:
      "Depuis janvier 2025, l'audit énergétique est obligatoire pour vendre un logement classé E, F ou G. Prix, contenu, validité et recours : le guide complet.",
    path: PATH,
    image: 'https://renohab.fr/blog/audit-energetique-obligatoire-vente-2026.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline:
        "Audit énergétique obligatoire à la vente : ce que tout propriétaire doit savoir en 2026",
      description:
        "Depuis janvier 2025, l'audit énergétique est obligatoire pour vendre un logement classé E, F ou G. Prix, contenu, validité et recours : le guide complet.",
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
            Publié le 5 juillet 2026 · Réglementation &amp; vente immobilière
          </p>

          <h1>Audit énergétique obligatoire à la vente : ce que tout propriétaire doit savoir en 2026</h1>

          <img
            src="/blog/audit-energetique-obligatoire-vente-2026.jpg"
            alt="Audit énergétique d'un logement avant vente"
            className="w-full rounded-xl object-cover max-h-80 mb-8"
            loading="eager"
          />

          <p className="lead">
            Vendre une maison ou un immeuble classé <strong>E, F ou G</strong> ne se résume plus à
            présenter un DPE. Depuis avril 2023 — et depuis janvier 2025 pour les logements E —,
            un <strong>audit énergétique réglementaire</strong> doit être remis à l'acquéreur dès
            la première visite. Ce document plus complet que le DPE chiffre les travaux à prévoir et
            engage la responsabilité du vendeur. Voici tout ce que vous devez savoir avant de mettre
            votre bien sur le marché.
          </p>

          <h2>Qui est concerné par l'obligation d'audit ?</h2>
          <p>
            L'audit énergétique réglementaire s'applique aux <strong>maisons individuelles</strong> et
            aux <strong>immeubles en monopropriété</strong> (appartenant entièrement à un seul
            propriétaire) mis en vente avec une étiquette DPE <strong>E, F ou G</strong>. Le calendrier
            est issu de la loi Climat et Résilience du 22 août 2021 :
          </p>
          <ul>
            <li><strong>1er avril 2023</strong> : obligation pour les logements classés <strong>F et G</strong></li>
            <li><strong>1er janvier 2025</strong> : extension aux logements classés <strong>E</strong></li>
            <li><strong>1er janvier 2034</strong> : prévu pour les logements classés <strong>D</strong></li>
          </ul>
          <p>
            Important : la vente d'un <strong>lot de copropriété</strong> (un appartement dans un immeuble
            collectif) n'est pas soumise à l'audit énergétique réglementaire, même si le logement est
            classé E, F ou G. Seul le DPE reste obligatoire dans ce cas.
          </p>

          <h2>Quelle est la différence entre le DPE et l'audit énergétique ?</h2>
          <p>
            Le <a href="/dpe-gratuit">Diagnostic de Performance Énergétique (DPE)</a> attribue une
            étiquette de A à G à votre logement en estimant sa consommation annuelle et ses émissions de
            CO₂. C'est un document synthétique, valable 10 ans. L'audit énergétique va bien plus loin :
          </p>
          <ul>
            <li>Il <strong>identifie les points de déperdition</strong> : isolation des murs, combles,
              planchers bas, menuiseries, système de chauffage…</li>
            <li>Il propose <strong>des scénarios de travaux</strong> chiffrés (coût estimatif,
              gain en classe DPE attendu, économies annuelles)</li>
            <li>Il indique les <strong>aides financières mobilisables</strong> (MaPrimeRénov',
              CEE, Éco-PTZ, TVA à 5,5 %)</li>
            <li>Il précise l'ordre de priorité des interventions</li>
          </ul>
          <p>
            Les deux documents sont <strong>complémentaires et tous deux obligatoires</strong> lors
            d'une vente de logement E, F ou G.
          </p>

          <h2>Combien coûte un audit énergétique et qui peut le réaliser ?</h2>
          <p>
            Le coût d'un audit énergétique réglementaire varie généralement entre <strong>500 et
            1 500 €</strong> selon la surface du logement, sa complexité et la région. Un appartement
            de petite taille se situe plutôt dans la fourchette basse ; une grande maison avec des
            systèmes énergétiques multiples se rapproche du haut de la fourchette.
          </p>
          <p>
            L'audit doit impérativement être réalisé par un <strong>professionnel certifié</strong> :
            auditeur RGE (Reconnu Garant de l'Environnement) qualifié pour la mission d'audit
            énergétique. Un simple diagnostiqueur immobilier n'est pas habilité à établir cet audit
            réglementaire.
          </p>
          <p>
            Bonne nouvelle : dans le cadre d'un <strong>parcours MaPrimeRénov' rénovation d'ampleur</strong>,
            le coût de l'audit est partiellement pris en charge dans les honoraires du <strong>Mon
            Accompagnateur Rénov' (MAR)</strong> agréé, eux-mêmes subventionnés par l'Anah. Il peut
            être intégralement financé pour les ménages aux revenus très modestes.
          </p>

          <h2>Quelle est la validité de l'audit et quand le remettre ?</h2>
          <p>
            L'audit énergétique réglementaire est <strong>valable 5 ans</strong>. Si votre logement est
            mis en vente dans ce délai sans que des travaux significatifs aient été réalisés, le même
            document peut être réutilisé.
          </p>
          <p>
            La remise à l'acquéreur doit avoir lieu <strong>dès la première visite</strong> et au plus
            tard lors de la signature du compromis ou de la promesse de vente. Un audit manquant ou
            erroné peut exposer le vendeur à des recours de l'acquéreur (réduction du prix, voire
            annulation de la vente dans les cas les plus graves).
          </p>

          <h2>L'audit oblige-t-il à réaliser des travaux avant la vente ?</h2>
          <p>
            Non. L'audit énergétique <strong>n'oblige pas à réaliser des travaux</strong> avant de
            vendre. Il oblige uniquement à <strong>informer l'acquéreur</strong> de la nature et du
            coût des travaux nécessaires pour améliorer la performance du logement. C'est l'acquéreur
            qui décide ensuite s'il accepte le bien en l'état, négocie le prix en tenant compte du
            coût des travaux, ou choisit de réaliser les rénovations après l'achat.
          </p>
          <p>
            En pratique, un audit bien réalisé, accompagné d'un plan de travaux crédible, peut
            <strong> valoriser le bien</strong> plutôt que de le déprécier : il rassure l'acheteur et
            peut faciliter l'obtention d'un financement (notamment l'Éco-PTZ pour les travaux à venir).
          </p>

          <h2>Réforme DPE 2026 : mon logement est-il encore concerné ?</h2>
          <p>
            Depuis le 1er janvier 2026, le coefficient de conversion de l'électricité dans le calcul du
            DPE est passé de 2,3 à 1,9. Ce changement a fait <strong>gagner une classe DPE</strong> à
            environ 850 000 logements chauffés à l'électricité — sans aucun travaux.
          </p>
          <p>
            Si votre logement est chauffé électriquement et que votre DPE date d'avant le 1er janvier
            2026, il est possible qu'un nouveau DPE vous permette de <strong>sortir de l'obligation
            d'audit</strong> (en passant de F à E ou de G à F avec un impact sur l'obligation selon
            les seuils). Faire réaliser un DPE actualisé coûte entre 100 et 250 € — un investissement
            souvent rentable avant une mise en vente.
          </p>

          <h2>Que contient concrètement l'audit et comment s'y préparer ?</h2>
          <p>
            Un audit énergétique complet comprend :
          </p>
          <ul>
            <li>Un relevé détaillé des caractéristiques du bâti (isolation, menuiseries, système de
              chauffage, ventilation, eau chaude sanitaire)</li>
            <li>Une estimation de la consommation réelle et du coût énergétique annuel</li>
            <li>Au moins <strong>deux scénarios de travaux</strong>, dont un permettant d'atteindre
              la classe B ou mieux</li>
            <li>Le montant estimé des travaux et les aides mobilisables pour chaque scénario</li>
          </ul>
          <p>
            Pour préparer la visite de l'auditeur, rassemblez vos factures d'énergie des deux dernières
            années, les plans du logement si disponibles, et les justificatifs des travaux déjà réalisés
            (isolation, remplacement de chaudière, etc.). Plus l'auditeur est informé, plus l'audit sera
            précis.
          </p>
          <p>
            Si vous envisagez de réaliser des travaux avant la vente — pour valoriser votre bien et
            sortir de la catégorie passoire — une{' '}
            <a href="/pompe-a-chaleur">pompe à chaleur air/eau</a> associée à une isolation des combles
            permet généralement un saut de deux classes DPE, condition d'accès au parcours rénovation
            d'ampleur et aux aides les plus importantes.
          </p>

          <h2>RenoHab vous accompagne, de l'audit à la rénovation</h2>
          <p>
            En tant qu'<strong>Accompagnateur Rénov' agréé</strong>, RenoHab peut vous orienter vers
            un auditeur certifié, vous aider à lire et comprendre les résultats de votre audit, et
            construire un plan de travaux optimisant à la fois votre classe DPE, vos aides et votre
            reste à charge. Si vous décidez de rénover avant de vendre — ou si vous achetez un
            logement énergivore pour le rénover —, nous coordonnons l'ensemble du projet, de la
            constitution des dossiers d'aides jusqu'à la réception du chantier avec des artisans RGE.
          </p>
          <p>
            Commencez par{' '}
            <a href="/dpe-gratuit">estimer gratuitement votre DPE</a> pour savoir si votre logement
            est concerné par l'obligation d'audit. Testez ensuite votre éligibilité aux aides avec
            notre simulateur en ligne pour évaluer le reste à charge d'une rénovation.
          </p>
        </article>

        {/* CTA RenoHab */}
        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Votre logement est-il concerné par l'audit ?</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            Estimez votre DPE et découvrez les aides disponibles pour rénover avant — ou après — la vente.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/dpe-gratuit"
              className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all"
            >
              Estimer mon DPE gratuitement
            </a>
            <a
              href="/#simulator"
              className="px-6 py-3 rounded-full border border-white/70 text-white font-semibold hover:bg-white/10 transition-all"
            >
              Simuler mes aides
            </a>
          </div>
        </div>
      </main>

      <ArticleFooter />
    </div>
  );
}
