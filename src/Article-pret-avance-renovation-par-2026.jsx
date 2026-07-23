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

const PUBLISHED = '2026-07-23';
const PATH = '/blog/pret-avance-renovation-par-2026';

export default function ArticlePretAvanceRenovationPAR() {
  useSeo({
    title: "Prêt Avance Rénovation (PAR) 2026 — rénover sans avancer un euro | RenoHab",
    description:
      "Le Prêt Avance Rénovation (PAR et PAR+) vous permet de financer vos travaux et de ne rembourser le capital qu'à la vente de votre bien. Guide complet 2026 : conditions, montants, banques et combinaison avec MaPrimeRénov'.",
    path: PATH,
    image: `https://renohab.fr${PATH}.jpg`,
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: "Prêt Avance Rénovation (PAR) 2026 — rénover sans avancer un euro",
      description:
        "Le Prêt Avance Rénovation (PAR et PAR+) vous permet de financer vos travaux et de ne rembourser le capital qu'à la vente de votre bien. Guide complet 2026.",
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
      about: ['Prêt Avance Rénovation', 'Financement rénovation énergétique', 'PAR', 'PAR+', 'Aides 2026'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 23 juillet 2026 · Financement &amp; aides
          </p>

          <h1>Prêt Avance Rénovation (PAR) 2026 — rénover sans avancer un euro</h1>

          <img
            src="/blog/pret-avance-renovation-par-2026.jpg"
            alt="Maison en cours de rénovation énergétique avec financement PAR"
            className="w-full rounded-2xl object-cover max-h-72 mb-8"
            loading="eager"
          />

          <p className="lead">
            Vous souhaitez rénover votre logement mais vous n'avez pas les liquidités pour avancer
            les travaux, même après déduction des aides ? Le <strong>Prêt Avance Rénovation
            (PAR)</strong> a été conçu pour vous : vous empruntez aujourd'hui, et vous ne
            remboursez le capital qu'à la vente de votre bien ou lors de la succession. Un
            dispositif méconnu, pourtant très adapté aux propriétaires occupants qui souhaitent
            franchir le pas sans fragiliser leur budget mensuel.
          </p>

          <h2>Qu'est-ce que le Prêt Avance Rénovation ?</h2>
          <p>
            Le PAR est un <strong>crédit hypothécaire in fine</strong> : la banque prend une
            garantie (une hypothèque) sur votre résidence principale, et l'État garantit 75 % du
            montant emprunté via un fonds de garantie public. Résultat : le risque est mutualisé,
            ce qui permet aux établissements partenaires de proposer des conditions favorables même
            à des ménages sans épargne mobilisable.
          </p>
          <p>
            Concrètement, vous ne remboursez <strong>que les intérêts</strong> pendant la durée du
            prêt — voire rien du tout pendant dix ans si vous êtes éligible à la version bonifiée
            (PAR+). Le capital, lui, est remboursé en une seule fois au moment de la vente du
            logement ou du règlement de la succession.
          </p>

          <h2>PAR ou PAR+ : deux versions selon vos revenus</h2>

          <h3>Le PAR standard — ouvert à tous les propriétaires</h3>
          <ul>
            <li><strong>Taux fixe : 2 %</strong> (hors assurance).</li>
            <li>Les intérêts sont versés périodiquement (en général mensuellement) pour les
            emprunteurs de moins de 60 ans.</li>
            <li>Capital remboursé à la vente ou à la succession.</li>
            <li>Montant : jusqu'à <strong>50 000 €</strong>, selon la nature des travaux et la
            banque choisie.</li>
          </ul>

          <h3>Le PAR+ — sans intérêts pendant 10 ans pour les ménages modestes</h3>
          <ul>
            <li>Réservé aux ménages dont les revenus ne dépassent pas les <strong>plafonds ANAH
            2026</strong> : à titre d'exemple, 29 253 € par an pour une personne seule en
            Île-de-France, 22 259 € dans les autres régions.</li>
            <li><strong>Aucun intérêt à payer pendant les 10 premières années.</strong></li>
            <li>Au-delà de 10 ans, les intérêts s'appliquent selon le taux en vigueur.</li>
            <li>Capital toujours remboursable à la vente ou la succession.</li>
          </ul>
          <p>
            Pour les ménages très modestes, le PAR+ peut ainsi couvrir une partie des travaux
            <em> sans aucune sortie d'argent</em> pendant une décennie — un véritable levier pour
            sortir d'une passoire thermique sans mettre en péril le budget du foyer.
          </p>

          <h2>Qui peut en bénéficier ?</h2>
          <p>Le PAR s'adresse aux propriétaires occupants dont :</p>
          <ul>
            <li>le logement est leur <strong>résidence principale</strong> ;</li>
            <li>les travaux concernent la <strong>performance énergétique</strong> (isolation,
            chauffage, ventilation, menuiseries…) et sont réalisés par un artisan <strong>RGE</strong>
            (Reconnu Garant de l'Environnement) ;</li>
            <li>le bien est éligible à une hypothèque (titre de propriété indivis ou non).</li>
          </ul>
          <p>
            Les propriétaires bailleurs ne peuvent pas, en principe, recourir au PAR pour un
            logement mis en location. Ce dispositif vise avant tout à aider les occupants à
            améliorer leur propre confort et à faire baisser leur facture énergétique.
          </p>

          <h2>Quelles banques proposent le PAR en 2026 ?</h2>
          <p>
            Le réseau de distribution reste encore limité. En 2026, les établissements partenaires
            officiels sont :
          </p>
          <ul>
            <li><strong>La Banque Postale</strong> — à partir de 3 500 € ;</li>
            <li><strong>Crédit Mutuel / CIC</strong> — entre 5 000 € et 30 000 €.</li>
          </ul>
          <p>
            D'autres établissements pourraient rejoindre le dispositif d'ici fin 2026. Renseignez-vous
            auprès de votre banque habituelle et comparez les conditions, notamment les frais
            d'hypothèque (notaire) qui viennent s'ajouter au coût total du prêt.
          </p>

          <h2>Combiner le PAR avec MaPrimeRénov' et les CEE</h2>
          <p>
            Le PAR n'est pas exclusif des autres aides à la rénovation : il peut être combiné avec
            <strong> MaPrimeRénov'</strong>, les <strong>Certificats d'Économies d'Énergie (CEE)</strong>
            {' '}et même l'<strong>Éco-PTZ</strong> (prêt à taux zéro jusqu'à 50 000 €).
            La logique est la suivante :
          </p>
          <ol>
            <li>Les <strong>subventions</strong> (MaPrimeRénov', CEE) couvrent une partie des travaux
            dès le départ.</li>
            <li>L'<strong>Éco-PTZ</strong> complète si votre capacité de remboursement mensuel le
            permet.</li>
            <li>Le <strong>PAR</strong> intervient pour le solde que vous ne pouvez pas avancer
            — sans alourdir vos charges mensuelles.</li>
          </ol>
          <p>
            Par exemple, pour une rénovation d'ampleur à 40 000 € : avec 15 000 € de MaPrimeRénov'
            et 10 000 € de CEE, il reste 15 000 € à financer. Un PAR à 2 % vous permet de couvrir
            ce solde en ne payant que les intérêts mensuels (~25 €/mois), tout en conservant votre
            pouvoir d'achat.
          </p>
          <p>
            Pour savoir quelles aides vous êtes éligible et dans quelle proportion, la première
            étape est d'estimer votre{' '}
            <a href="/dpe-gratuit">DPE avec notre outil gratuit</a>
            {' '}puis de{' '}
            <a href="/simulateur">simuler vos aides en ligne</a>.
          </p>

          <h2>Avantages et points de vigilance</h2>

          <h3>Ce qui plaide pour le PAR</h3>
          <ul>
            <li><strong>Pas de remboursement du capital pendant la durée de détention</strong> du
            logement : idéal si vous n'envisagez pas de vendre avant 10–15 ans.</li>
            <li>Charges mensuelles très faibles (intérêts uniquement, voire nulles avec le PAR+).</li>
            <li>Cumul possible avec toutes les autres aides publiques.</li>
            <li>Accès facilité grâce à la garantie publique à 75 %.</li>
          </ul>

          <h3>Points de vigilance</h3>
          <ul>
            <li>Des <strong>frais d'hypothèque</strong> (acte notarié) sont à prévoir : environ
            1,5 % à 2 % du montant emprunté. À intégrer dans le coût global.</li>
            <li>À la vente, le capital remboursé réduit votre plus-value nette : anticipez-le dans
            votre stratégie patrimoniale.</li>
            <li>Le réseau bancaire est encore restreint : comparez bien les offres disponibles.</li>
          </ul>

          <h2>Comment faire la demande ?</h2>
          <p>
            La démarche est simple, mais elle gagne à être préparée :
          </p>
          <ol>
            <li><strong>Faites réaliser un audit énergétique ou un devis</strong> par un artisan RGE
            pour définir les travaux éligibles.</li>
            <li><strong>Constituez votre dossier d'aides</strong> (MaPrimeRénov', CEE) avec l'aide
            d'un <a href="/pompe-a-chaleur">Accompagnateur Rénov' agréé</a> comme RenoHab.</li>
            <li><strong>Présentez votre projet à la banque partenaire</strong> (La Banque Postale ou
            Crédit Mutuel/CIC) avec vos justificatifs de revenus et les devis travaux.</li>
            <li><strong>Signez l'acte hypothécaire</strong> chez le notaire — étape obligatoire pour
            débloquer les fonds.</li>
            <li>Les travaux sont réalisés et réglés directement par les artisans RGE.</li>
          </ol>
          <p>
            En tant qu'Accompagnateur Rénov' agréé, RenoHab vous accompagne de l'audit à la
            constitution du dossier d'aides, pour maximiser les subventions et réduire la part
            que vous devrez éventuellement financer via le PAR.
          </p>
        </article>

        {/* CTA RenoHab */}
        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Votre projet financé de A à Z</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            RenoHab monte vos dossiers MaPrimeRénov', CEE et vous aide à identifier les meilleures
            options de financement — dont le PAR — pour que vous ne déboursiez que le strict minimum.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/dpe-gratuit" className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all">
              Estimer mon DPE gratuitement
            </a>
            <a href="/simulateur" className="px-6 py-3 rounded-full border border-white/70 text-white font-semibold hover:bg-white/10 transition-all">
              Simuler mes aides
            </a>
          </div>
        </div>
      </main>

      <ArticleFooter />
    </div>
  );
}
