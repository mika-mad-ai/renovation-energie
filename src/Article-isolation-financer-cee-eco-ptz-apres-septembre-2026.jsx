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

const PUBLISHED = '2026-11-09';
const PATH = '/blog/isolation-financer-cee-eco-ptz-apres-septembre-2026';

export default function ArticleIsolationFinancerCeeEcoPtz2026() {
  useSeo({
    title: "Financer l'isolation de sa maison après septembre 2026 : CEE, éco-PTZ et TVA à 5,5 % | RenoHab",
    description:
      "MaPrimeRénov' par geste ne couvre plus l'isolation depuis le 1er septembre 2026. Découvrez les trois alternatives pour financer vos travaux d'isolation : prime CEE, éco-PTZ jusqu'à 50 000 € et TVA réduite à 5,5 %.",
    path: PATH,
    image: '/blog/isolation-financer-cee-eco-ptz-apres-septembre-2026.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline:
        "Financer l'isolation de sa maison après septembre 2026 : CEE, éco-PTZ et TVA à 5,5 %",
      description:
        "MaPrimeRénov' par geste ne couvre plus l'isolation depuis le 1er septembre 2026. Découvrez les trois alternatives pour financer vos travaux d'isolation : prime CEE, éco-PTZ jusqu'à 50 000 € et TVA réduite à 5,5 %.",
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
      about: ['Isolation thermique', 'CEE', 'Éco-PTZ', 'Rénovation énergétique', 'Aides financières'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 9 novembre 2026 · Isolation
          </p>

          <h1>Financer l'isolation de sa maison après septembre 2026 : CEE, éco-PTZ et TVA à 5,5 %</h1>

          <img
            src="/blog/isolation-financer-cee-eco-ptz-apres-septembre-2026.jpg"
            alt="Travaux d'isolation thermique par l'extérieur sur une maison individuelle"
            className="w-full rounded-xl shadow-soft my-6"
            loading="eager"
          />

          <p className="lead">
            Depuis le 1er septembre 2026, le parcours par geste de MaPrimeRénov' est
            recentré uniquement sur les pompes à chaleur. L'isolation des combles, des murs,
            des planchers et des fenêtres n'y est plus éligible. Bonne nouvelle : trois
            dispositifs solides — la prime CEE, l'éco-PTZ et la TVA réduite à 5,5 % —
            permettent toujours de financer ces travaux. Tour d'horizon de ce qui reste
            disponible et comment en profiter.
          </p>

          <h2>Pourquoi l'isolation a disparu de MaPrimeRénov' par geste</h2>
          <p>
            La réforme du 1er septembre 2026 a simplifié le parcours par geste pour
            concentrer les deniers publics sur la décarbonation du chauffage. Désormais,
            seuls les équipements utilisant une énergie renouvelable comme source principale
            (pompe à chaleur air/eau, géothermie, raccordement à un réseau de chaleur) sont
            financés par ce parcours.
          </p>
          <p>
            L'isolation, la VMC et le chauffe-eau thermodynamique ont été sortis de ce
            dispositif à cette date. Cela ne signifie pas que ces travaux ne sont plus aidés :
            ils bénéficient de trois leviers majeurs qui, combinés, peuvent couvrir une part
            significative du coût du chantier.
          </p>

          <h2>La prime CEE : l'alternative directe</h2>
          <p>
            Les <strong>Certificats d'Économies d'Énergie (CEE)</strong> sont distribués par
            les fournisseurs d'énergie (EDF, Engie, TotalEnergies…) et restent intégralement
            cumulables avec les autres aides. Pour l'isolation, les fiches applicables sont
            nombreuses :
          </p>
          <ul>
            <li>
              <strong>BAR-EN-101</strong> : isolation des combles perdus — la prime la plus
              élevée en proportion du coût, souvent entre 10 et 30 € par m².
            </li>
            <li>
              <strong>BAR-EN-102</strong> : isolation du plancher bas (vide sanitaire ou
              sous-sol non chauffé).
            </li>
            <li>
              <strong>BAR-EN-104</strong> : isolation des murs par l'extérieur (ITE) ou par
              l'intérieur (ITI).
            </li>
            <li>
              <strong>BAR-EN-106</strong> : isolation des combles aménagés (sarking).
            </li>
          </ul>
          <p>
            Le montant de la prime varie selon votre catégorie de revenus (barème ANAH),
            la surface isolée, la zone géographique et le fournisseur choisi.{' '}
            <strong>Important : demandez systématiquement la prime CEE avant de signer
            votre devis</strong>, car tout bon de commande signé préalablement annule le
            droit à la prime.
          </p>

          <h2>L'éco-PTZ : financer jusqu'à 50 000 € sans intérêts</h2>
          <p>
            L'<strong>éco-prêt à taux zéro (éco-PTZ)</strong> est un prêt bancaire sans
            intérêts accordé par toute banque ayant signé une convention avec l'État. Il est
            prolongé jusqu'en 2027 et finance directement les travaux d'isolation non couverts
            par d'autres aides.
          </p>
          <ul>
            <li>
              <strong>Montant</strong> : jusqu'à <strong>50 000 €</strong> pour une
              rénovation globale (plusieurs gestes combinés), 30 000 € pour un geste unique.
            </li>
            <li>
              <strong>Durée de remboursement</strong> : jusqu'à 20 ans.
            </li>
            <li>
              <strong>Cumul</strong> : intégralement cumulable avec la prime CEE, la TVA à
              5,5 % et les aides des collectivités.
            </li>
            <li>
              <strong>Artisan</strong> : les travaux doivent être réalisés par un professionnel
              certifié <strong>RGE</strong> (Reconnu Garant de l'Environnement).
            </li>
          </ul>
          <p>
            L'éco-PTZ est particulièrement pertinent pour les ménages dont les revenus
            dépassent les plafonds ANAH et qui ne bénéficiaient de MaPrimeRénov' qu'à taux
            réduit. Il permet de lisser le reste à charge sur plusieurs années sans coût
            financier supplémentaire.
          </p>

          <h2>La TVA à 5,5 % : une aide automatique et sous-estimée</h2>
          <p>
            Tous les travaux d'amélioration énergétique réalisés dans une résidence principale
            de plus de deux ans bénéficient de la <strong>TVA à taux réduit de 5,5 %</strong>
            (au lieu de 10 % ou 20 % selon les cas), pour autant que l'artisan soit assujetti
            à la TVA et que les travaux portent sur de la main-d'œuvre et des matériaux.
          </p>
          <p>
            Pour une ITE à 15 000 € HT, la TVA réduite représente une économie d'environ
            675 € par rapport au taux de 10 %. Ce taux s'applique automatiquement : c'est à
            l'entreprise de l'appliquer sur votre devis, sans démarche de votre part. Vérifiez
            que le devis indique bien <em>« TVA 5,5 % — travaux d'amélioration de la
            performance énergétique »</em>.
          </p>

          <h2>La rénovation d'ampleur : isolation toujours couverte</h2>
          <p>
            Si vous combinez l'isolation avec d'autres travaux (remplacement du chauffage,
            VMC…) pour atteindre un gain d'au moins deux classes DPE, le{' '}
            <strong>parcours accompagné (rénovation d'ampleur)</strong> reste accessible.
            Ce parcours finance toujours l'isolation dans le cadre d'un projet global.
          </p>
          <p>
            Pour être éligible, un{' '}
            <a href="/dpe-gratuit">audit énergétique préalable</a> est obligatoire, et les
            travaux doivent être coordonnés par un Accompagnateur Rénov' agréé comme RenoHab.
            Les aides peuvent atteindre <strong>50 à 70 % du montant des travaux</strong>
            pour les ménages modestes.
          </p>

          <h2>Autres leviers à ne pas négliger</h2>
          <h3>Le prêt avance rénovation (PAR)</h3>
          <p>
            Ce prêt hypothécaire sans mensualité, remboursé à la revente ou à la succession
            du bien, est destiné aux propriétaires occupants à revenus modestes qui ne
            disposent pas d'épargne suffisante. Il couvre le reste à charge après déduction
            des aides.
          </p>
          <h3>Les aides des collectivités locales</h3>
          <p>
            Certaines régions (Île-de-France, Bretagne, Occitanie…) et communes versent des
            compléments d'aide pour l'isolation. Consultez le conseiller France Rénov' de
            votre département pour en avoir la liste à jour.
          </p>
          <h3>L'exonération de taxe foncière</h3>
          <p>
            Certaines communes accordent une exonération partielle ou totale de taxe foncière
            (jusqu'à 3 ans) après des travaux d'économie d'énergie. Cette mesure est à risque
            de suppression en 2027 : renseignez-vous auprès de votre mairie avant la fin
            de l'année.
          </p>

          <h2>Stratégie recommandée : combiner les trois dispositifs</h2>
          <p>
            Pour une isolation des combles et des murs d'une maison de 100 m², le montage
            optimal ressemble à ceci :
          </p>
          <ol>
            <li>Obtenez un devis d'un artisan <strong>RGE</strong>.</li>
            <li>
              Demandez la <strong>prime CEE</strong> auprès d'un mandataire (Hellio, Effy,
              Engie…) <em>avant</em> de signer le devis.
            </li>
            <li>
              Faites une demande d'<strong>éco-PTZ</strong> à votre banque pour financer
              le reste à charge.
            </li>
            <li>
              Vérifiez que le devis mentionne la <strong>TVA à 5,5 %</strong>.
            </li>
            <li>
              Renseignez-vous sur les aides de votre collectivité via{' '}
              <a href="/blog">France Rénov'</a>.
            </li>
          </ol>
          <p>
            Ce cumul peut couvrir 30 à 50 % du coût total pour un ménage à revenus
            intermédiaires, sans recourir à MaPrimeRénov'.
          </p>

          <h2>Et si je veux aussi changer de chauffage ?</h2>
          <p>
            L'idéal reste de combiner isolation et changement de chauffage dans le même projet :
            isoler d'abord réduit la puissance nécessaire de la{' '}
            <a href="/pompe-a-chaleur">pompe à chaleur</a>, ce qui diminue son coût
            d'installation et sa consommation électrique. Dans ce cas, MaPrimeRénov' par geste
            (PAC) et la prime CEE (isolation) peuvent être mobilisés en parallèle pour le même
            chantier, à condition que les deux devis soient bien distincts.
          </p>
        </article>

        {/* CTA RenoHab */}
        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Montez votre dossier d'aides avec RenoHab</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            En tant qu'Accompagnateur Rénov' agréé, RenoHab identifie toutes les aides cumulables
            pour votre projet d'isolation et coordonne les artisans RGE de votre secteur.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/dpe-gratuit" className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all">
              Évaluer mon logement
            </a>
            <a href="/pompe-a-chaleur" className="px-6 py-3 rounded-full border border-white/70 text-white font-semibold hover:bg-white/10 transition-all">
              Découvrir la PAC
            </a>
          </div>
        </div>
      </main>

      <ArticleFooter />
    </div>
  );
}
