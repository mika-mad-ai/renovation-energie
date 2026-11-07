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

const PUBLISHED = '2026-11-07';
const PATH = '/blog/cheque-energie-2026-montant-beneficiaires-travaux';

export default function ArticleChequenergie2026() {
  useSeo({
    title: "Chèque énergie 2026 : montant, bénéficiaires et travaux de rénovation | RenoHab",
    description:
      "Chèque énergie 2026 : barème de 48 € à 277 €, 4,5 millions de bénéficiaires, comment le recevoir si vous ne l'avez pas reçu et comment l'utiliser pour financer vos travaux de rénovation énergétique.",
    path: PATH,
    image: '/blog/cheque-energie-2026-montant-beneficiaires-travaux.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline:
        "Chèque énergie 2026 : montant, bénéficiaires et comment financer vos travaux de rénovation",
      description:
        "Barème 48 €–277 €, 4,5 millions de foyers bénéficiaires, envoi automatique et utilisation pour les travaux de rénovation énergétique.",
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
      about: ['Chèque énergie', 'Rénovation énergétique', 'Aides financières 2026'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 7 nov. 2026 · Aides financières
          </p>

          <h1>Chèque énergie 2026 : montant, bénéficiaires et comment financer vos travaux</h1>

          <img
            src="/blog/cheque-energie-2026-montant-beneficiaires-travaux.jpg"
            alt="Famille devant leur maison rénovée — chèque énergie 2026 pour financer travaux et factures"
            className="rounded-2xl w-full object-cover max-h-80 mb-8"
            loading="lazy"
          />

          <p className="lead">
            Le chèque énergie est l'aide financière de l'État destinée aux ménages modestes pour
            faire face à leurs dépenses d'énergie — ou financer des travaux de rénovation. En 2026,
            <strong> 4,5 millions de foyers</strong> sont éligibles, pour un montant allant de{' '}
            <strong>48 € à 277 €</strong>. Tour d'horizon complet : qui peut en bénéficier, combien
            vous recevrez, que faire si vous ne l'avez pas reçu, et surtout comment l'utiliser pour
            rénover.
          </p>

          <h2>Qu'est-ce que le chèque énergie ?</h2>
          <p>
            Créé en 2018 pour remplacer les tarifs sociaux de l'énergie, le chèque énergie est un
            bon d'achat émis par l'État, géré par l'<strong>Agence nationale de l'habitat (ANAH)</strong>.
            Il est attribué automatiquement, sans demande préalable, sur la base du{' '}
            <strong>revenu fiscal de référence (RFR) 2024</strong> déclaré en 2025 et du nombre
            d'unités de consommation (UC) du foyer.
          </p>
          <p>
            En 2026, ce sont <strong>700 000 foyers supplémentaires</strong> qui entrent dans le
            dispositif, portant le total à 4,5 millions de bénéficiaires.
          </p>

          <h2>Qui est éligible en 2026 ?</h2>
          <p>
            Pour recevoir le chèque énergie 2026, votre foyer doit remplir deux conditions cumulatives :
          </p>
          <ul>
            <li>
              <strong>Résider dans un logement non collectif</strong> ou dans un logement conventionné
              à titre de résidence principale.
            </li>
            <li>
              <strong>RFR par unité de consommation inférieur à 11 000 €/an</strong>, calculé sur
              votre déclaration de revenus 2024 (traitée en 2025).
            </li>
          </ul>
          <p>
            Le nombre d'unités de consommation se calcule ainsi : 1 UC pour la première personne,
            + 0,5 UC par personne supplémentaire. Un couple compte donc 1,5 UC ; un foyer de 3
            personnes, 2 UC, etc.
          </p>
          <p>
            Si votre RFR annuel divisé par le nombre d'UC de votre foyer est inférieur à 11 000 €,
            vous êtes éligible.
          </p>

          <h2>Quel montant en 2026 ?</h2>
          <p>
            Le barème du chèque énergie n'a pas été revalorisé en 2026 : il reste compris entre{' '}
            <strong>48 € et 277 €</strong>, pour un montant moyen de <strong>153 € par foyer</strong>.
            Le montant dépend du RFR et de la composition du foyer :
          </p>
          <ul>
            <li>
              <strong>Foyers très modestes</strong> (RFR/UC le plus bas) : jusqu'à 194 €–277 €
              selon la taille du foyer.
            </li>
            <li>
              <strong>Foyers modestes</strong> (RFR/UC moyen) : entre 73 € et 161 €.
            </li>
            <li>
              <strong>Foyers à revenus proches du plafond</strong> (RFR/UC proche de 11 000 €) :
              48 €.
            </li>
          </ul>
          <p>
            Les <strong>logements-foyers conventionnés</strong> (EHPAD, résidences étudiantes
            conventionnées, etc.) reçoivent un montant forfaitaire de <strong>192 €</strong>.
          </p>

          <h2>Quand et comment le recevoir ?</h2>
          <p>
            L'envoi est automatique : vous recevez le chèque énergie par courrier postal, sans avoir
            à faire de démarche. Les envois pour la campagne 2026 ont eu lieu au{' '}
            <strong>printemps 2026</strong>.
          </p>
          <h3>Vous ne l'avez pas reçu ?</h3>
          <p>
            Si vous êtes éligible mais n'avez pas reçu votre chèque, rendez-vous sur le site officiel{' '}
            <strong>chequeenergie.gouv.fr</strong> pour faire valoir vos droits. La demande est
            possible jusqu'au <strong>31 décembre 2026</strong>. Passé cette date, les droits pour
            la campagne 2026 seront définitivement perdus.
          </p>
          <p>
            Pour accéder au formulaire, munissez-vous de votre numéro fiscal (disponible sur votre
            avis d'imposition) et de votre numéro de référence fiscale du logement.
          </p>

          <h2>Comment l'utiliser pour financer vos travaux de rénovation ?</h2>
          <p>
            Le chèque énergie ne sert pas uniquement à payer vos factures d'électricité ou de gaz.
            Il peut également être remis directement à une <strong>entreprise certifiée RGE</strong>{' '}
            pour régler une partie de vos travaux de rénovation énergétique. Les gestes éligibles
            comprennent notamment :
          </p>
          <ul>
            <li>L'isolation des combles, des murs ou des planchers bas ;</li>
            <li>L'installation d'une <a href="/pompe-a-chaleur">pompe à chaleur air/eau</a> ou d'un
              autre système de chauffage renouvelable ;</li>
            <li>Le remplacement des fenêtres par des menuiseries à double ou triple vitrage ;</li>
            <li>La mise en place d'une ventilation mécanique contrôlée (VMC).</li>
          </ul>
          <p>
            Pour cela, remettez votre chèque énergie directement à l'artisan ou à l'entreprise qui
            réalise les travaux. Celui-ci le transmet ensuite à l'organisme gestionnaire pour
            remboursement. Le chèque ne peut être utilisé qu'une seule fois et pour un seul
            prestataire.
          </p>
          <p>
            Son montant reste modeste comparé au coût total d'une rénovation, mais il vient en
            complément d'autres aides.
          </p>

          <h2>Peut-on cumuler le chèque énergie avec d'autres aides ?</h2>
          <p>
            Oui, le chèque énergie est cumulable avec l'ensemble des dispositifs d'aide à la
            rénovation énergétique :
          </p>
          <ul>
            <li>
              <strong>MaPrimeRénov' ampleur</strong> : pour les ménages très modestes et modestes,
              le taux de prise en charge peut atteindre 70 % du montant des travaux. Le chèque
              énergie vient en plus.
            </li>
            <li>
              <strong>Certificats d'économies d'énergie (CEE)</strong> : primes versées par les
              fournisseurs d'énergie sur les gestes de rénovation, cumulables avec toutes les autres
              aides.
            </li>
            <li>
              <strong>Éco-PTZ</strong> : prêt à taux zéro pour financer le solde restant à charge
              après toutes les subventions — dont le chèque énergie.
            </li>
            <li>
              <strong>TVA à 5,5 %</strong> : applicable à la quasi-totalité des travaux de rénovation
              énergétique dans les logements de plus de 2 ans.
            </li>
          </ul>
          <p>
            En combinant intelligemment toutes ces aides, le reste à charge peut être considérablement
            réduit. Pour savoir ce à quoi vous avez droit, consultez notre{' '}
            <a href="/simulateur">simulateur d'aides à la rénovation</a> ou demandez un{' '}
            <a href="/dpe-gratuit">diagnostic DPE gratuit</a> à l'un de nos conseillers.
          </p>

          <h2>À retenir pour 2026</h2>
          <ul>
            <li>
              <strong>4,5 millions de foyers éligibles</strong>, dont 700 000 nouveaux bénéficiaires.
            </li>
            <li>
              <strong>Barème : 48 € à 277 €</strong>, montant moyen 153 €, basé sur le RFR 2024 et
              la composition du foyer.
            </li>
            <li>
              <strong>Envoi automatique au printemps 2026</strong> — recours possible jusqu'au
              31 décembre 2026 sur chequeenergie.gouv.fr.
            </li>
            <li>
              <strong>Utilisable pour des travaux RGE</strong>, en complément de MaPrimeRénov', CEE
              et éco-PTZ.
            </li>
          </ul>
          <p>
            Pour aller plus loin, consultez notre{' '}
            <a href="/blog">guide complet des aides à la rénovation énergétique</a> ou prenez
            rendez-vous avec un Accompagnateur Rénov' RenoHab pour un plan de financement personnalisé.
          </p>
        </article>

        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Simulez vos aides en 3 minutes</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            Chèque énergie, MaPrimeRénov', CEE, éco-PTZ : découvrez toutes les aides auxquelles vous
            avez droit et estimez votre reste à charge réel.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/simulateur"
              className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all"
            >
              Simuler mes aides
            </a>
            <a
              href="/dpe-gratuit"
              className="px-6 py-3 rounded-full border border-white/70 text-white font-semibold hover:bg-white/10 transition-all"
            >
              Estimer mon DPE gratuitement
            </a>
          </div>
        </div>
      </main>

      <ArticleFooter />
    </div>
  );
}
