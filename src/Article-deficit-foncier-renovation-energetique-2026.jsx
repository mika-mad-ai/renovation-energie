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
        <p className="mt-3 text-sm text-gray-500">
          <a href="/mentions-legales" className="hover:text-emerald-300 transition-colors">Mentions légales</a>
          <span className="mx-2 opacity-60">·</span>
          <a href="/confidentialite" className="hover:text-emerald-300 transition-colors">Politique de confidentialité</a>
        </p>
      </div>
    </footer>
  );
}

const PUBLISHED = '2026-10-28';
const PATH = '/blog/deficit-foncier-renovation-energetique-2026';

export default function ArticleDeficitFoncierRenovation2026() {
  useSeo({
    title: "Déficit foncier et rénovation énergétique 2026 : plafond doublé à 21 400 € | RenoHab",
    description:
      "Propriétaires bailleurs : le plafond du déficit foncier est doublé à 21 400 €/an pour les travaux de rénovation énergétique sur les passoires thermiques. Conditions, calcul et démarches.",
    path: PATH,
    image: '/blog/deficit-foncier-renovation-energetique-2026.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: "Déficit foncier et rénovation énergétique 2026 : comment profiter du plafond doublé à 21 400 €",
      description:
        "Propriétaires bailleurs : le plafond du déficit foncier est doublé à 21 400 €/an pour les travaux de rénovation énergétique sur les passoires thermiques. Conditions, calcul et démarches.",
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
      about: ['Déficit foncier', 'Rénovation énergétique', 'Fiscalité immobilière', 'Propriétaire bailleur'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 28 oct. 2026 · Fiscalité & Aides
          </p>

          <h1>Déficit foncier et rénovation énergétique 2026 : profiter du plafond doublé à 21 400 €</h1>

          <img
            src="/blog/deficit-foncier-renovation-energetique-2026.jpg"
            alt="Propriétaire bailleur calculant les avantages fiscaux du déficit foncier pour sa rénovation énergétique"
            className="w-full rounded-xl shadow-card my-6"
            loading="lazy"
          />

          <p className="lead">
            Si vous louez un logement classé <strong>E, F ou G</strong> et prévoyez des travaux de
            rénovation énergétique, vous pouvez déduire jusqu'à <strong>21 400 € par an</strong> de
            votre revenu global grâce au déficit foncier doublé. Ce levier fiscal, prolongé jusqu'au
            31 décembre 2027, s'ajoute aux aides classiques (CEE, éco-PTZ) et peut représenter
            plusieurs milliers d'euros d'économies d'impôt supplémentaires.
          </p>

          <h2>Qu'est-ce que le déficit foncier ?</h2>
          <p>
            Lorsque les charges déductibles d'un bien mis en location nue (non meublée) dépassent les
            loyers perçus, on parle de <strong>déficit foncier</strong>. Ce déficit s'impute en
            priorité sur les autres revenus fonciers, puis, dans la limite de <strong>10 700 €</strong>,
            directement sur votre revenu global imposable — ce qui réduit mécaniquement votre impôt
            sur le revenu.
          </p>
          <p>
            Les charges concernées comprennent les travaux de réparation et d'amélioration, les
            intérêts d'emprunt, les frais de gestion et les charges de copropriété. La fraction du
            déficit supérieure au plafond est reportable sur les revenus fonciers des <strong>10
            années suivantes</strong>.
          </p>

          <h2>Le doublement à 21 400 € pour la rénovation énergétique</h2>
          <p>
            Depuis 2023, une disposition spéciale permet aux propriétaires bailleurs de porter ce
            plafond annuel de <strong>10 700 € à 21 400 €</strong> lorsque les dépenses visent à
            faire sortir un logement du statut de passoire thermique. La loi de finances pour 2026 a
            prorogé ce dispositif jusqu'au <strong>31 décembre 2027</strong>.
          </p>
          <p>
            Concrètement, un contribuable soumis à une tranche marginale d'imposition (TMI) de 41 %
            peut économiser jusqu'à <strong>8 774 € d'impôt</strong> en une seule année fiscale sur
            le seul plafond bonifié (21 400 € × 41 %).
          </p>

          <h2>Conditions pour bénéficier du plafond doublé</h2>
          <p>
            Ce doublement est soumis à des critères stricts définis à l'article 156 du Code général
            des impôts :
          </p>
          <ul>
            <li>
              <strong>Logement classé E, F ou G avant travaux</strong> : un DPE réalisé <em>avant</em>{' '}
              le début des travaux est obligatoire pour prouver le niveau de départ.
            </li>
            <li>
              <strong>Logement classé A, B, C ou D après travaux</strong> : un second DPE réalisé{' '}
              <em>après</em> l'achèvement des travaux doit attester l'amélioration.
            </li>
            <li>
              <strong>Location nue uniquement</strong> : le dispositif ne s'applique pas aux
              locations meublées (LMNP, LMP) ni aux SCI soumises à l'impôt sur les sociétés.
            </li>
            <li>
              <strong>Engagement de location de 3 ans</strong> : le propriétaire doit s'engager à
              louer le bien nu pendant au moins 3 ans à compter de l'imputation du déficit majoré.
            </li>
            <li>
              <strong>Artisan RGE obligatoire</strong> : les travaux éligibles doivent être réalisés
              par un professionnel certifié Reconnu Garant de l'Environnement (RGE), condition
              identique à celle des autres aides à la rénovation.
            </li>
          </ul>

          <h2>Quels travaux sont déductibles ?</h2>
          <p>
            Toutes les dépenses réelles de travaux améliorant la performance énergétique entrent dans
            l'assiette : isolation des combles et des murs, remplacement du système de chauffage
            (pompe à chaleur, chaudière biomasse), installation d'une VMC double flux, remplacement
            des menuiseries… Les matériaux et la main-d'œuvre facturés par l'entreprise RGE sont
            déductibles.
          </p>
          <p>
            En revanche, les travaux de construction ou d'agrandissement, les dépenses en capital
            (mobilier) et les travaux réalisés par le propriétaire lui-même ne sont pas admis.
          </p>

          <h3>Exemple chiffré</h3>
          <p>
            Imaginons un propriétaire bailleur dont le bien classé <strong>G</strong> génère 8 000 €
            de loyers annuels. Il engage 40 000 € de travaux (PAC + isolation) pour atteindre la
            classe <strong>C</strong>. Ses charges déductibles de l'année s'élèvent à 42 000 €.
          </p>
          <ul>
            <li>Déficit foncier total : 42 000 − 8 000 = <strong>34 000 €</strong></li>
            <li>Imputable sur le revenu global (plafond doublé) : <strong>21 400 €</strong></li>
            <li>Report sur les revenus fonciers des 10 prochaines années : <strong>12 600 €</strong></li>
            <li>Économie d'impôt immédiate à 41 % de TMI : <strong>8 774 €</strong></li>
          </ul>
          <p>
            Sans le doublement du plafond, seuls 10 700 € auraient été imputables, soit une économie
            maximale de 4 387 € — la moitié.
          </p>

          <h2>Cumul avec les autres aides à la rénovation</h2>
          <p>
            Le déficit foncier majoré se cumule avec d'autres dispositifs, sous réserve que les
            dépenses déduites ne soient pas également prises en charge par une aide directe sur la
            même facture :
          </p>
          <ul>
            <li>
              <strong>Prime CEE</strong> : versée directement, elle vient réduire le montant de la
              facture — et donc les charges déductibles. Le montant net facturé après déduction de la
              CEE est la base déductible.
            </li>
            <li>
              <strong>Éco-PTZ</strong> : le prêt à taux zéro finance les travaux, mais les intérêts
              (nuls) ne sont pas déductibles. Le capital emprunté n'entre pas dans le calcul des
              charges — seules les dépenses réellement payées le sont.
            </li>
            <li>
              <strong>MaPrimeRénov'</strong> : les propriétaires bailleurs peuvent y accéder pour
              leur résidence principale, mais non pour un logement locatif hors conditions spécifiques.
              Consultez votre situation avec un conseiller{' '}
              <a href="/blog">France Rénov'</a>.
            </li>
          </ul>
          <p>
            En pratique, la stratégie optimale consiste à mobiliser d'abord les CEE pour réduire le
            reste à charge, puis à financer le solde avec un éco-PTZ, et enfin à déduire les
            dépenses nettes via le déficit foncier.
          </p>

          <h2>Démarches pratiques</h2>
          <ol>
            <li>
              <strong>Faire réaliser un DPE avant travaux</strong> par un diagnostiqueur certifié
              — indispensable pour prouver la classe de départ (E, F ou G).
            </li>
            <li>
              <strong>Sélectionner un artisan RGE</strong> pour chaque poste de travaux. Vérifiez la
              validité de la certification sur le site{' '}
              <a href="/blog/choisir-artisan-rge-2026">faire-soi-meme ou pro RGE</a>.
            </li>
            <li>
              <strong>Conserver toutes les factures</strong> : dates de paiement, montants TTC,
              mention RGE de l'entreprise.
            </li>
            <li>
              <strong>Faire réaliser un DPE après travaux</strong> attestant la classe cible (A à D).
            </li>
            <li>
              <strong>Déclarer le déficit</strong> sur votre déclaration de revenus fonciers
              (formulaire 2044) en cochant la case prévue pour le doublement du plafond lié à la
              rénovation énergétique.
            </li>
          </ol>
          <p>
            Un expert-comptable ou un conseiller fiscal peut sécuriser votre dossier, notamment pour
            les cas de travaux étalés sur plusieurs années ou de biens en indivision.
          </p>

          <h2>Points de vigilance</h2>
          <ul>
            <li>
              <strong>Location effective</strong> : si vous vendez ou cessez de louer le bien dans
              les 3 ans suivant l'imputation, le déficit majoré est remis en cause et vous devrez
              rembourser l'avantage fiscal.
            </li>
            <li>
              <strong>Plafond global des niches fiscales</strong> : le déficit foncier n'est pas
              soumis au plafonnement des niches fiscales à 10 000 € (ou 18 000 €) — c'est l'un de
              ses atouts majeurs.
            </li>
            <li>
              <strong>Revenus fonciers insuffisants</strong> : si vous n'avez pas ou peu de revenus
              fonciers, l'essentiel du déficit sera reporté sur les années suivantes et vous ne
              profiterez pas immédiatement de l'avantage.
            </li>
          </ul>

          <h2>Agir avant fin 2027</h2>
          <p>
            Le plafond doublé à 21 400 € est temporaire : à ce stade, il couvre les dépenses payées
            jusqu'au <strong>31 décembre 2027</strong>. Au-delà, le droit commun (10 700 €) devrait
            s'appliquer à nouveau, sauf nouvelle prolongation législative. Les chantiers longs — DPE
            de départ, travaux, DPE de fin — demandent plusieurs mois : engager la démarche dès
            maintenant permet de sécuriser le bénéfice du dispositif.
          </p>
          <p>
            RenoHab vous accompagne en tant qu'<a href="/blog/renovation-ampleur-2026-accompagnateur-renov">Accompagnateur Rénov' agréé</a> pour évaluer votre passoire thermique,
            monter le plan de travaux, choisir les artisans RGE et coordonner les démarches d'aides.
            Commencez par{' '}
            <a href="/dpe-gratuit">estimer gratuitement votre DPE</a> pour connaître votre situation
            de départ.
          </p>
        </article>

        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Optimisez fiscalité et rénovation</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            DPE de départ, plan de travaux, artisans RGE et montage des aides : RenoHab prend en
            charge toutes les étapes pour que vous profitiez du plafond doublé.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/dpe-gratuit"
              className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all"
            >
              Estimer mon DPE gratuitement
            </a>
            <a
              href="/pompe-a-chaleur"
              className="px-6 py-3 rounded-full border border-white/70 text-white font-semibold hover:bg-white/10 transition-all"
            >
              Étudier une pompe à chaleur
            </a>
          </div>
        </div>
      </main>

      <ArticleFooter />
    </div>
  );
}
