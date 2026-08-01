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

const PUBLISHED = '2026-08-01';
const PATH = '/blog/eco-ptz-2026-pret-taux-zero-renovation';

export default function ArticleEcoPtz2026() {
  useSeo({
    title: "Éco-PTZ 2026 : financer sa rénovation énergétique sans payer d'intérêts | RenoHab",
    description:
      "Tout savoir sur l'éco-prêt à taux zéro en 2026 : montants jusqu'à 50 000 €, conditions d'éligibilité, gain de 2 classes DPE, cumul avec MaPrimeRénov' et démarches pas à pas.",
    path: PATH,
    image: 'https://renohab.fr/blog/eco-ptz-2026-pret-taux-zero-renovation.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: "Éco-PTZ 2026 : financer sa rénovation énergétique sans payer d'intérêts",
      description:
        "Tout savoir sur l'éco-prêt à taux zéro en 2026 : montants jusqu'à 50 000 €, conditions d'éligibilité, gain de 2 classes DPE, cumul avec MaPrimeRénov' et démarches pas à pas.",
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
      about: ['Éco-PTZ', 'Financement rénovation', 'Prêt à taux zéro', 'MaPrimeRénov'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">

          <p className="text-sm text-gray-500 !mb-2">
            Publié le 1er août 2026 · Aides &amp; financement
          </p>

          <h1>Éco-PTZ 2026 : financer sa rénovation énergétique sans payer d'intérêts</h1>

          <img
            src="/blog/eco-ptz-2026-pret-taux-zero-renovation.jpg"
            alt="Maison rénovée et économe en énergie — éco-PTZ 2026"
            className="w-full rounded-xl my-6 object-cover max-h-80"
            loading="eager"
          />

          <p className="lead">
            Rénover son logement coûte cher — même après les aides. C'est là qu'intervient l'éco-prêt
            à taux zéro (éco-PTZ) : un prêt bancaire sans intérêts, sans conditions de revenus,
            pouvant atteindre <strong>50 000 €</strong>, pour financer les travaux que subventions et
            primes ne couvrent pas. En 2026, ses conditions ont été harmonisées avec celles de
            MaPrimeRénov', ce qui simplifie considérablement les démarches. Voici tout ce qu'il faut
            savoir avant de vous lancer.
          </p>

          <h2>Qu'est-ce que l'éco-PTZ ?</h2>
          <p>
            L'éco-prêt à taux zéro (éco-PTZ) est un prêt réglementé, distribué par les banques
            conventionnées avec l'État. L'emprunteur ne paie aucun intérêt : c'est l'État qui prend
            en charge le coût du crédit. Ce dispositif existe depuis 2009 et reste l'une des aides
            les plus sous-utilisées de la rénovation énergétique, souvent éclipsée par MaPrimeRénov'
            alors qu'il la complète parfaitement.
          </p>
          <p>
            Contrairement à MaPrimeRénov', l'éco-PTZ ne diminue pas le montant de vos travaux : il
            vous permet de les <em>financer</em> sans frais financiers, sur une durée allant jusqu'à
            20 ans. C'est un levier particulièrement utile pour les ménages des classes
            intermédiaires, éligibles à peu ou pas de subventions.
          </p>

          <h2>Qui peut en bénéficier ?</h2>
          <p>Les conditions d'éligibilité portent sur le logement et sur l'emprunteur :</p>
          <ul>
            <li>
              <strong>Le logement</strong> doit être une résidence principale (propriétaire occupant
              ou bailleur), achevée depuis au moins 2 ans, et située en France métropolitaine ou dans
              les DOM.
            </li>
            <li>
              <strong>L'emprunteur</strong> doit être propriétaire ou copropriétaire, occupant ou
              bailleur. Il n'existe aucune condition de revenus.
            </li>
            <li>
              <strong>Les artisans</strong> doivent obligatoirement être certifiés{' '}
              <strong>RGE</strong> (Reconnu Garant de l'Environnement).
            </li>
          </ul>
          <p>
            Depuis le 1er juillet 2025, une condition technique s'ajoute pour les projets de
            rénovation d'ampleur : les travaux doivent permettre un <strong>gain d'au moins
            2 classes DPE</strong>. Cette règle, qui harmonise l'éco-PTZ avec MaPrimeRénov',
            conditionne l'accès aux montants les plus élevés.{' '}
            <a href="/dpe-gratuit">Connaître votre classe DPE actuelle</a> est donc la première étape.
          </p>

          <h2>Quels montants en 2026 ?</h2>
          <p>Le plafond varie selon la nature et l'ambition du projet :</p>
          <ul>
            <li><strong>7 000 €</strong> — remplacement de fenêtres ou portes-fenêtres seul</li>
            <li><strong>15 000 €</strong> — un seul geste d'isolation ou de chauffage (hors fenêtres)</li>
            <li><strong>25 000 €</strong> — deux types de travaux combinés</li>
            <li><strong>30 000 €</strong> — bouquet de trois actions ou plus</li>
            <li>
              <strong>50 000 €</strong> — rénovation globale avec gain d'au moins 2 classes DPE
              et audit énergétique préalable obligatoire
            </li>
          </ul>
          <p>
            Un copropriétaire peut également bénéficier d'un éco-PTZ pour sa quote-part de travaux
            sur les parties communes, dans la limite de 30 000 €.
          </p>

          <h2>Quels travaux sont éligibles ?</h2>
          <p>L'éco-PTZ couvre un large spectre de travaux :</p>
          <ul>
            <li>
              <strong>Isolation</strong> : combles, murs par l'intérieur ou l'extérieur, plancher bas,
              toiture-terrasse
            </li>
            <li>
              <strong>Chauffage décarboné</strong> : <a href="/pompe-a-chaleur">pompe à chaleur air/eau</a>,
              chaudière à granulés de bois, réseau de chaleur renouvelable, système solaire combiné
            </li>
            <li>
              <strong>Menuiseries</strong> : double ou triple vitrage, portes d'entrée donnant sur
              l'extérieur
            </li>
            <li>
              <strong>Ventilation</strong> : VMC double flux à haute efficacité
            </li>
            <li>
              <strong>Eau chaude sanitaire</strong> : chauffe-eau thermodynamique ou solaire
            </li>
          </ul>
          <p>
            Les travaux doivent être terminés dans les <strong>3 ans</strong> suivant l'émission
            de l'offre de prêt.
          </p>

          <h2>Comment se cumule-t-il avec les autres aides ?</h2>
          <p>
            L'éco-PTZ est cumulable avec l'ensemble des dispositifs en vigueur en 2026 :
          </p>
          <ul>
            <li>
              <strong>MaPrimeRénov'</strong> — les deux aides fonctionnent en tandem depuis leur
              harmonisation de juillet 2025. La subvention MaPrimeRénov' est versée en avance ou en
              solde ; l'éco-PTZ finance ce qui reste à charge.
            </li>
            <li>
              <strong>Prime CEE</strong> — les Certificats d'Économie d'Énergie s'ajoutent sans
              condition de cumul.
            </li>
            <li>
              <strong>TVA à 5,5 %</strong> — applicable à la quasi-totalité des travaux
              de rénovation énergétique réalisés par un professionnel RGE.
            </li>
            <li>
              <strong>Aides locales</strong> — certaines collectivités (régions, départements,
              communes) proposent des aides complémentaires cumulables.
            </li>
          </ul>
          <p>
            Résultat : il est courant que le reste à charge après MaPrimeRénov', CEE et éco-PTZ
            soit nul pour les ménages les plus modestes, et très limité pour les ménages intermédiaires.
          </p>

          <h2>Démarches : comment obtenir l'éco-PTZ ?</h2>
          <ol>
            <li>
              <strong>Obtenez un audit énergétique</strong> (obligatoire pour les rénovations
              d'ampleur, recommandé dans tous les cas). En tant qu'Accompagnateur Rénov' agréé,
              RenoHab vous accompagne dès cette étape.
            </li>
            <li>
              <strong>Faites réaliser les devis</strong> par un ou plusieurs artisans certifiés RGE.
            </li>
            <li>
              <strong>Déposez votre demande auprès d'une banque conventionnée</strong> (la plupart
              des grandes banques françaises proposent l'éco-PTZ) ou contactez France Rénov' au{' '}
              <strong>0 808 800 700</strong> (numéro gratuit) pour être orienté.
            </li>
            <li>
              <strong>Complétez le formulaire FASTT</strong> fourni par votre banque, signé avec
              l'artisan, qui décrit les travaux prévus.
            </li>
            <li>
              <strong>Démarrez les travaux</strong> dans les 3 mois suivant l'émission de l'offre de
              prêt et transmettez les factures à la banque dans les 3 ans.
            </li>
          </ol>
          <p>
            Pour les projets de rénovation globale (gain d'au moins 2 classes DPE), un{' '}
            <strong>rendez-vous préalable avec un conseiller France Rénov'</strong> est désormais
            obligatoire avant tout dépôt de dossier MaPrimeRénov' et éco-PTZ.
          </p>

          <h2>Exemple concret : une rénovation globale à 40 000 €</h2>
          <p>
            Imaginons un propriétaire d'une maison classée E souhaitant atteindre la classe B
            (gain de 3 classes) via isolation des combles, remplacement de la chaudière par une PAC
            air/eau et menuiseries. Devis total : 40 000 €.
          </p>
          <ul>
            <li>MaPrimeRénov' (ménage intermédiaire) : – 12 000 €</li>
            <li>Prime CEE : – 3 000 €</li>
            <li>TVA réduite à 5,5 % (vs 20 %) : – 3 700 €</li>
            <li><strong>Reste à charge : 21 300 €</strong> → financé via éco-PTZ 50 000 € sur 15 ans = ~119 €/mois sans intérêts</li>
          </ul>
          <p>
            À titre de comparaison, un crédit à la consommation classique sur 15 ans à 5 %
            coûterait environ 168 €/mois, soit un surcoût de <strong>8 820 €</strong> sur la durée
            du prêt. L'éco-PTZ vous épargne précisément ces intérêts.
          </p>

          <h2>Ce que RenoHab peut faire pour vous</h2>
          <p>
            En tant qu'Accompagnateur Rénov' agréé par l'ANAH, RenoHab prend en charge la
            coordination complète de votre projet : audit énergétique, sélection des artisans RGE,
            montage des dossiers d'aides (MaPrimeRénov', CEE, éco-PTZ), et suivi de chantier.
            Vous bénéficiez d'un interlocuteur unique du premier rendez-vous jusqu'à la réception
            des travaux.
          </p>
          <p>
            Utilisez notre{' '}
            <a href="/#simulateur">simulateur d'aides</a> pour estimer en quelques minutes les
            subventions auxquelles vous avez droit, puis contactez-nous pour bâtir votre plan de
            financement complet — éco-PTZ inclus.
          </p>

        </article>

        {/* CTA RenoHab */}
        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Simulez votre financement</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            Éco-PTZ, MaPrimeRénov', CEE : RenoHab calcule vos aides et monte votre dossier de A à Z.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/#simulateur"
              className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all"
            >
              Calculer mes aides
            </a>
            <a
              href="/dpe-gratuit"
              className="px-6 py-3 rounded-full border border-white/70 text-white font-semibold hover:bg-white/10 transition-all"
            >
              Estimer mon DPE
            </a>
          </div>
        </div>
      </main>

      <ArticleFooter />
    </div>
  );
}
