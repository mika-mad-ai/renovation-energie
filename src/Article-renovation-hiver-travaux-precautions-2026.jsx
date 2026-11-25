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

const PUBLISHED = '2026-11-25';
const PATH = '/blog/renovation-hiver-travaux-precautions-2026';

export default function ArticleRenovationHiverTravaux2026() {
  useSeo({
    title: "Travaux de rénovation énergétique en hiver : ce qui est possible, ce qu'il faut éviter et comment bien planifier | RenoHab",
    description:
      "Faut-il attendre le printemps pour rénover ? PAC, isolation intérieure, VMC : certains travaux se font très bien en hiver. D'autres (ITE, enduits) nécessitent +5 °C. Le guide complet pour planifier intelligemment.",
    path: PATH,
    image: '/blog/renovation-hiver-travaux-precautions-2026.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline:
        "Travaux de rénovation énergétique en hiver : ce qui est possible, ce qu'il faut éviter et comment planifier",
      description:
        "PAC, isolation intérieure, VMC : certains travaux se font très bien en hiver. ITE, enduits, étanchéité bitumineuse : mieux vaut attendre le printemps. Guide complet pour planifier votre rénovation selon les températures.",
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
      about: ['Rénovation énergétique', 'Travaux en hiver', 'Planification travaux', 'Isolation', 'Pompe à chaleur'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">

          <p className="text-sm text-gray-500 !mb-2">
            Publié le 25 novembre 2026 · Guide pratique
          </p>

          <h1>Travaux de rénovation énergétique en hiver : ce qui est possible, ce qu'il faut éviter et comment bien planifier</h1>

          <img
            src="/blog/renovation-hiver-travaux-precautions-2026.jpg"
            alt="Chantier de rénovation énergétique en hiver : installation d'une pompe à chaleur sur une maison enneigée"
            className="w-full rounded-xl shadow-card mb-8"
            loading="lazy"
          />

          <p className="lead">
            Avec l'arrivée du froid, beaucoup de propriétaires se demandent s'il vaut mieux
            attendre le printemps avant de lancer leurs travaux de rénovation énergétique.
            La réponse dépend entièrement du type de travaux : certains chantiers sont parfaitement
            adaptés à l'hiver — voire plus efficaces à réaliser à cette période — tandis que
            d'autres requièrent des températures minimales que le gel ne permet pas de respecter.
            Voici le guide complet pour décider et planifier intelligemment.
          </p>

          <h2>Les travaux que l'on peut réaliser en hiver sans aucun problème</h2>

          <h3>L'installation d'une pompe à chaleur air/eau</h3>
          <p>
            Contrairement à une idée reçue, l'hiver est un très bon moment pour installer une{' '}
            <a href="/pompe-a-chaleur">pompe à chaleur air/eau</a>. Les PAC modernes sont conçues
            pour fonctionner jusqu'à −15 °C en mode chauffage : leur installation peut donc se
            faire par grand froid. Mieux encore, les techniciens PAC sont souvent plus disponibles
            en novembre et décembre qu'au printemps, période de pointe. Vous évitez ainsi les
            délais de plusieurs semaines observés en mars-avril.
          </p>
          <p>
            Résultat concret : votre nouveau chauffage est opérationnel avant les pics de froid de
            janvier-février, et vous profitez dès cet hiver des économies d'énergie.
          </p>

          <h3>L'isolation par l'intérieur (ITI)</h3>
          <p>
            L'isolation thermique par l'intérieur — pose de laine de verre, laine de roche ou
            isolant en panneaux sur les murs intérieurs — ne dépend pas des conditions climatiques
            extérieures. Le chantier se déroule entièrement à l'intérieur du logement, à l'abri du
            gel. L'ITI est donc réalisable toute l'année, hiver comme été, sans contrainte
            particulière.
          </p>

          <h3>L'installation d'une VMC double flux</h3>
          <p>
            Poser une ventilation mécanique contrôlée double flux est un travail intérieur :
            percement des passages de gaines, pose des bouches, installation de la centrale en
            combles ou en gaine technique. Les températures extérieures n'ont aucun impact sur la
            réalisation ni sur la qualité du résultat. L'hiver est même une période idéale pour
            tester immédiatement le confort thermique et la qualité d'air que procure ce type de
            ventilation.
          </p>

          <h3>Le remplacement du chauffe-eau (thermodynamique ou électrique)</h3>
          <p>
            L'installation d'un chauffe-eau thermodynamique (CET) se déroule entièrement en
            intérieur, dans une pièce non chauffée mais hors gel (cellier, garage, buanderie).
            Le remplacement d'un ancien ballon électrique par un CET peut être fait en une
            demi-journée, quelle que soit la saison.
          </p>

          <h3>L'audit énergétique et les démarches administratives</h3>
          <p>
            L'hiver est le meilleur moment pour lancer la phase de préparation : audit énergétique,
            rendez-vous avec votre conseiller France Rénov', constitution du dossier
            MaPrimeRénov' ou CEE. Ces étapes ne nécessitent aucun chantier et permettent d'être
            prêt pour démarrer les travaux extérieurs dès mars-avril, dès que les températures
            remontent. L'instruction des dossiers prend souvent trois à six mois : mieux vaut
            déposer maintenant.
          </p>

          <h2>Les travaux à reporter après le gel : attention aux contraintes de température</h2>

          <h3>L'isolation thermique par l'extérieur (ITE)</h3>
          <p>
            L'ITE est le chantier le plus sensible au froid. Elle implique la pose d'enduits
            minéraux ou de systèmes de bardage ventilé sur la façade. Les fabricants d'enduits
            imposent presque tous une température minimale de <strong>+5 °C</strong> pendant
            l'application et les 48 heures qui suivent — gel et pluie sont incompatibles avec
            une prise correcte. En cas de non-respect de cette contrainte, des fissurations,
            décollement ou défauts d'adhérence peuvent apparaître et invalider la garantie
            décennale. Mieux vaut planifier une ITE entre mars et octobre.
          </p>

          <h3>L'étanchéité de toiture-terrasse</h3>
          <p>
            Les membranes bitumineuses et les systèmes d'étanchéité liquide nécessitent elles
            aussi des températures positives pour adhérer correctement et se réticuler. En cas de
            gel, la membrane ne se soude pas correctement et des infiltrations peuvent apparaître
            dès le dégel. Ces travaux sont à programmer au printemps ou en été.
          </p>

          <h3>Certains travaux de maçonnerie humide</h3>
          <p>
            Les ragréages de sol, chapes liquides, joints d'étanchéité à base de ciment et
            enduits de façade à la chaux nécessitent des températures positives pour sécher
            correctement. Si le chantier est à l'intérieur et que le logement peut être maintenu
            hors gel, ces travaux restent envisageables sous protection thermique. Dans le doute,
            préférez le printemps.
          </p>

          <h2>L'atout inattendu de l'hiver : la thermographie infrarouge</h2>
          <p>
            Si vous hésitez sur les travaux prioritaires à réaliser, l'hiver est <strong>la seule
            période</strong> propice à la thermographie infrarouge. Cette technique de diagnostic
            détecte les zones de déperditions thermiques (ponts thermiques, défauts d'isolation,
            fuites d'air) grâce à une caméra qui visualise les écarts de température en façade.
            Pour être fiable, elle exige un écart d'au moins 10 °C entre intérieur et extérieur —
            une condition impossible à réunir de mai à septembre.
          </p>
          <p>
            Réaliser une thermographie en novembre ou décembre, avant ou pendant les travaux,
            permet de cibler précisément les zones à traiter plutôt que d'isoler à l'aveugle.
            En savoir plus :{' '}
            <a href="/blog/thermographie-infrarouge-detection-deperditions-2026">
              thermographie infrarouge pour détecter les déperditions thermiques
            </a>.
          </p>

          <h2>Les avantages concrets de rénover en hiver</h2>
          <ul>
            <li>
              <strong>Des artisans plus disponibles.</strong> Le secteur du bâtiment connaît une
              forte saisonnalité. En novembre-décembre, les délais d'intervention sont souvent deux
              à trois fois plus courts qu'au printemps. Vous pouvez parfois négocier le prix des
              devis sur cette période creuse.
            </li>
            <li>
              <strong>Des économies immédiates.</strong> Installer une PAC ou améliorer son
              isolation en novembre, c'est profiter des économies dès janvier — le mois le plus
              froid de l'année.
            </li>
            <li>
              <strong>Un dossier d'aides instruit avant l'été.</strong> Les délais
              d'instruction MaPrimeRénov' dépassent actuellement six mois. Déposer votre dossier
              dès décembre permet d'obtenir votre accord et de démarrer les travaux extérieurs
              dès le printemps en toute sécurité.
            </li>
            <li>
              <strong>Une planification en deux phases naturelle.</strong> Commencer par les
              travaux intérieurs en hiver (PAC, isolation, VMC) puis enchaîner par l'ITE au
              printemps, c'est la séquence logique recommandée par les professionnels : on
              dimensionne d'abord le générateur de chaleur, puis on réduit les besoins.
            </li>
          </ul>

          <h2>Aides disponibles : la saison ne change rien</h2>
          <p>
            MaPrimeRénov', les primes CEE et l'éco-PTZ ne sont soumis à aucune contrainte
            saisonnière. L'élément déterminant est la date de signature du devis : les travaux
            doivent débuter <em>après</em> l'acceptation du dossier (ou après la date d'engagement
            de dépense pour certains dispositifs). En pratique :
          </p>
          <ul>
            <li>
              Vous pouvez déposer votre dossier <a href="/dpe-gratuit">après votre DPE</a> et votre
              rendez-vous France Rénov' dès maintenant.
            </li>
            <li>
              Vous signez les devis après validation du dossier (en ligne, sur{' '}
              <strong>maprimerenov.gouv.fr</strong>).
            </li>
            <li>
              Les travaux démarrent — même en hiver — et vous touchez l'aide après leur achèvement,
              sur présentation des factures.
            </li>
          </ul>
          <p>
            Pour une rénovation d'ampleur (saut de deux classes DPE ou plus), l'Accompagnateur
            Rénov' vous aide à coordonner les phases de travaux entre hiver et printemps, à
            planifier la thermographie, à déposer le dossier et à gérer les versements.
            Cette mission est elle-même finançable jusqu'à 2 000 € dans le cadre de
            MaPrimeRénov'.
          </p>

          <h2>Récapitulatif : que faire en hiver, que reporter au printemps ?</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-emerald-50">
                  <th className="text-left p-3 border border-gray-200">Type de travaux</th>
                  <th className="text-center p-3 border border-gray-200">Réalisable en hiver</th>
                  <th className="text-left p-3 border border-gray-200">Remarque</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border border-gray-200">Installation PAC air/eau</td>
                  <td className="text-center p-3 border border-gray-200 text-emerald-600 font-bold">✔ Oui</td>
                  <td className="p-3 border border-gray-200">PAC opérationnelle dès l'installation</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 border border-gray-200">Isolation intérieure (ITI)</td>
                  <td className="text-center p-3 border border-gray-200 text-emerald-600 font-bold">✔ Oui</td>
                  <td className="p-3 border border-gray-200">Chantier entièrement intérieur</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200">VMC double flux</td>
                  <td className="text-center p-3 border border-gray-200 text-emerald-600 font-bold">✔ Oui</td>
                  <td className="p-3 border border-gray-200">Chantier intérieur</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 border border-gray-200">Chauffe-eau thermodynamique</td>
                  <td className="text-center p-3 border border-gray-200 text-emerald-600 font-bold">✔ Oui</td>
                  <td className="p-3 border border-gray-200">Local hors gel suffisant</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200">Thermographie infrarouge</td>
                  <td className="text-center p-3 border border-gray-200 text-emerald-600 font-bold">✔ Idéal</td>
                  <td className="p-3 border border-gray-200">Exige ≥ 10 °C d'écart intérieur/extérieur</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 border border-gray-200">Audit énergétique / dossier aides</td>
                  <td className="text-center p-3 border border-gray-200 text-emerald-600 font-bold">✔ Idéal</td>
                  <td className="p-3 border border-gray-200">Prêt pour les travaux printaniers</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200">ITE (isolation extérieure)</td>
                  <td className="text-center p-3 border border-gray-200 text-orange-500 font-bold">⚠ Reporter</td>
                  <td className="p-3 border border-gray-200">Exige +5 °C min. pendant et après pose</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 border border-gray-200">Étanchéité toiture-terrasse</td>
                  <td className="text-center p-3 border border-gray-200 text-orange-500 font-bold">⚠ Reporter</td>
                  <td className="p-3 border border-gray-200">Incompatible avec le gel</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200">Enduits de façade</td>
                  <td className="text-center p-3 border border-gray-200 text-orange-500 font-bold">⚠ Reporter</td>
                  <td className="p-3 border border-gray-200">Risque de fissuration</td>
                </tr>
              </tbody>
            </table>
          </div>

        </article>

        {/* CTA */}
        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Démarrez votre rénovation dès cet hiver</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            Audit énergétique, dossier MaPrimeRénov', installation PAC : RenoHab, Accompagnateur
            Rénov' agréé, vous accompagne de la première étape jusqu'à la réception du chantier.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/dpe-gratuit" className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all">
              Estimer mon DPE gratuitement
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
