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

const PUBLISHED = '2026-07-18';
const PATH = '/blog/maprimerenov-coproprietes-2026';

export default function ArticleMaprimeRenovCoproprietes() {
  useSeo({
    title: "MaPrimeRénov' Copropriétés en 2026 : guide complet pour rénover son immeuble | RenoHab",
    description:
      "MaPrimeRénov' Copropriétés finance jusqu'à 45 % des travaux de rénovation énergétique d'un immeuble en 2026. Conditions, montants, procédure : le guide complet.",
    path: PATH,
    image: '/blog/maprimerenov-coproprietes-2026.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline:
        "MaPrimeRénov' Copropriétés en 2026 : guide complet pour rénover son immeuble",
      description:
        "MaPrimeRénov' Copropriétés finance jusqu'à 45 % des travaux de rénovation énergétique d'un immeuble en 2026. Conditions, montants, procédure : le guide complet.",
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
      about: [
        'MaPrimeRénov Copropriétés',
        'Rénovation énergétique copropriété',
        'Aides rénovation immeuble 2026',
      ],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 18 juillet 2026 · Copropriétés &amp; aides collectives
          </p>

          <h1>MaPrimeRénov' Copropriétés en 2026 : guide complet pour rénover son immeuble</h1>

          <img
            src="/blog/maprimerenov-coproprietes-2026.jpg"
            alt="Immeuble en copropriété en cours de rénovation énergétique"
            className="w-full rounded-xl object-cover max-h-96 mb-8"
            loading="eager"
          />

          <p className="lead">
            Près de la moitié des logements français se trouvent en copropriété. Pourtant,
            beaucoup de copropriétaires ignorent qu'il existe une aide dédiée à la rénovation
            collective de leur immeuble : <strong>MaPrimeRénov' Copropriétés</strong>. Distincte
            de la prime individuelle, elle finance une part significative des travaux sur les
            parties communes — à condition de remplir certaines exigences de performance
            énergétique. Tour d'horizon de ce dispositif en 2026.
          </p>

          <h2>MaPrimeRénov' Copropriétés : une aide collective, pas individuelle</h2>
          <p>
            La confusion est fréquente : MaPrimeRénov' existe en deux versions bien distinctes.
            La version <em>individuelle</em> s'adresse à chaque propriétaire pour financer ses
            propres travaux dans son logement (isolation des combles, pompe à chaleur, etc.).
            La version <em>Copropriétés</em>, elle, est versée au{' '}
            <strong>syndicat de copropriétaires</strong> pour des travaux réalisés sur les
            parties communes ou à l'échelle de l'immeuble entier — façade, toiture, chaufferie
            collective, ventilation commune.
          </p>
          <p>
            C'est l'<strong>ANAH</strong> (Agence nationale de l'habitat) qui gère ce dispositif
            via la plateforme MonAccompagnateurRénov'. Les propriétaires individuels ne déposent
            pas de dossier : c'est le syndic qui agit au nom du syndicat, après un vote en
            assemblée générale.
          </p>

          <h2>Quels immeubles et quels travaux sont éligibles ?</h2>
          <h3>Conditions liées à l'immeuble</h3>
          <ul>
            <li>Immeuble en copropriété d'au moins <strong>3 logements</strong>.</li>
            <li>
              Construction achevée depuis plus de <strong>15 ans</strong> (critère durci en 2026,
              contre 2 ans auparavant pour les travaux par geste individuels).
            </li>
            <li>
              Le bâtiment doit servir principalement de résidence principale (au moins 75 % des
              lots à usage d'habitation principale).
            </li>
          </ul>

          <h3>Condition de performance énergétique</h3>
          <p>
            C'est le critère central : le projet de travaux doit permettre un{' '}
            <strong>gain énergétique d'au moins 35 %</strong> par rapport à la consommation
            initiale du bâtiment. Ce seuil est validé par un auditeur thermique qui produit un
            audit énergétique collectif avant et un bilan prévisionnel après travaux.
          </p>
          <p>
            En pratique, les travaux éligibles incluent l'isolation thermique de la façade
            (ITE), de la toiture ou des planchers bas, le remplacement de la chaufferie
            collective (PAC collective, chaudière bois-énergie), la pose d'une ventilation
            collective, ou encore le remplacement des menuiseries des parties communes. La
            combinaison de plusieurs gestes est souvent nécessaire pour atteindre les 35 %.
          </p>

          <h2>Montants de l'aide en 2026</h2>
          <p>
            Le taux de subvention varie selon le{' '}
            <strong>profil socio-économique de la copropriété</strong>, c'est-à-dire la
            proportion de ménages modestes et très modestes parmi les copropriétaires :
          </p>
          <ul>
            <li>
              <strong>Copropriété « fragile »</strong> (majorité de ménages modestes) : jusqu'à
              45 % du montant HT des travaux subventionnables.
            </li>
            <li>
              <strong>Copropriété « standard »</strong> : de 25 % à 35 % selon la part de
              ménages aux revenus intermédiaires.
            </li>
          </ul>
          <p>
            Ces taux s'appliquent dans la limite d'un plafond de dépenses{' '}
            <strong>par logement</strong> fixé par l'ANAH. Un bonus peut s'ajouter si le gain
            énergétique dépasse 50 %, ou si la copropriété est en situation de fragilité
            financière.
          </p>
          <p>
            <strong>Attention :</strong> les montants ont été révisés en 2026 dans le cadre de
            la réforme budgétaire. Consultez le simulateur ou contactez un Accompagnateur
            Rénov' pour obtenir une estimation précise et à jour.
          </p>

          <h2>Les aides complémentaires à cumuler</h2>
          <p>
            MaPrimeRénov' Copropriétés n'est pas la seule source de financement. Elle peut se
            cumuler avec :
          </p>
          <ul>
            <li>
              <strong>Les CEE (Certificats d'Économie d'Énergie)</strong> : les fournisseurs
              d'énergie versent une prime directe sur les gestes éligibles réalisés sur les
              parties communes. Ces primes ne dépendent pas des revenus et sont cumulables avec
              MaPrimeRénov'.
            </li>
            <li>
              <strong>L'Éco-PTZ collectif</strong> : un prêt sans intérêts souscrit par le
              syndicat de copropriétaires, jusqu'à 30 000 € par logement sur 20 ans, sans
              condition de revenus. Il permet de préfinancer les travaux avant de recevoir les
              aides.
            </li>
            <li>
              <strong>La TVA à 5,5 %</strong> : applicable sur la quasi-totalité des travaux
              d'amélioration énergétique réalisés dans un logement de plus de 2 ans, ce qui
              réduit significativement la facture.
            </li>
          </ul>

          <h2>La procédure étape par étape</h2>
          <h3>1. Audit énergétique collectif</h3>
          <p>
            Un auditeur thermique certifié réalise un{' '}
            <a href="/dpe-gratuit">diagnostic de performance</a> du bâtiment et propose
            plusieurs scénarios de travaux. C'est la base du dossier de financement.
          </p>
          <h3>2. Vote en assemblée générale</h3>
          <p>
            Le projet de travaux doit être voté en AG à la majorité absolue des tantièmes
            (article 25 de la loi de 1965). Le syndic présente le programme, les devis, et
            le plan de financement incluant MaPrimeRénov' et les autres aides.
          </p>
          <h3>3. Dépôt du dossier par le syndic</h3>
          <p>
            Le syndic, mandaté par l'assemblée générale, dépose la demande d'aide auprès de
            l'ANAH. L'intervention d'un Accompagnateur Rénov' ou d'un AMO (Assistant à
            Maîtrise d'Ouvrage) est fortement recommandée — et parfois obligatoire — pour
            constituer un dossier complet et éligible.
          </p>
          <h3>4. Réalisation des travaux et solde</h3>
          <p>
            Les travaux sont confiés à des entreprises <strong>RGE</strong> (Reconnu Garant
            de l'Environnement). Un contrôle post-travaux valide l'atteinte du gain énergétique
            prévu. L'aide est versée après ce contrôle.
          </p>

          <h2>Le rôle de l'Accompagnateur Rénov' en copropriété</h2>
          <p>
            Pour les projets complexes, faire appel à un{' '}
            <strong>Accompagnateur Rénov' agréé</strong> est un atout majeur. Ce professionnel
            aide à structurer le projet, choisir les bons gestes pour atteindre les 35 % de
            gain, monter le dossier de financement, et coordonner les artisans RGE. Son coût
            est en partie financé par MaPrimeRénov'.
          </p>
          <p>
            RenoHab est Accompagnateur Rénov' agréé et intervient auprès des syndicats de
            copropriétaires pour accompagner les projets de rénovation collective de A à Z —
            du premier audit jusqu'au versement des aides. Vous pouvez aussi utiliser notre{' '}
            <a href="/simulateur">simulateur d'aides</a> pour estimer votre budget avant la
            première AG.
          </p>

          <h2>Que retenir pour votre copropriété ?</h2>
          <ul>
            <li>MaPrimeRénov' Copropriétés est distincte de la prime individuelle et gérée par le syndic.</li>
            <li>Le gain énergétique minimum de 35 % est non négociable : il requiert un audit sérieux et un programme de travaux cohérent.</li>
            <li>Les taux d'aide peuvent atteindre 45 % pour les copropriétés fragiles ; les aides CEE et l'Éco-PTZ collectif viennent en complément.</li>
            <li>Un Accompagnateur Rénov' sécurise le montage financier et évite les erreurs qui entraîneraient un refus ou un remboursement d'aide.</li>
            <li>L'immeuble doit avoir plus de 15 ans et la majorité des lots être utilisés en résidence principale.</li>
          </ul>
        </article>

        {/* CTA RenoHab */}
        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Votre copropriété veut rénover ?</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            RenoHab accompagne les syndicats de copropriétaires : audit, montage du dossier
            ANAH, coordination des artisans RGE et suivi jusqu'au versement des aides.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/dpe-gratuit"
              className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all"
            >
              Estimer mon DPE
            </a>
            <a
              href="/pompe-a-chaleur"
              className="px-6 py-3 rounded-full border border-white/70 text-white font-semibold hover:bg-white/10 transition-all"
            >
              Découvrir les solutions de chauffage
            </a>
          </div>
        </div>
      </main>

      <ArticleFooter />
    </div>
  );
}
