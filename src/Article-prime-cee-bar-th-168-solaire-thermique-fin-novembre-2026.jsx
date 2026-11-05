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

const PUBLISHED = '2026-11-05';
const PATH = '/blog/prime-cee-bar-th-168-solaire-thermique-fin-novembre-2026';

export default function ArticleBarTh168SolaireThermiqueFin2026() {
  useSeo({
    title: "Fin de la prime CEE BAR-TH-168 au 4 novembre 2026 : chauffe-eau solaire thermique, ce qui change | RenoHab",
    description:
      "L'arrêté du 28 octobre 2026 supprime la fiche CEE BAR-TH-168 « Dispositif solaire thermique » dès le 4 novembre. MaPrimeRénov' déjà absente depuis septembre : que reste-t-il pour financer un chauffe-eau solaire ?",
    path: PATH,
    image: '/blog/prime-cee-bar-th-168-solaire-thermique-fin-novembre-2026.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline:
        "Fin de la prime CEE BAR-TH-168 au 4 novembre 2026 : chauffe-eau solaire thermique, ce qui change",
      description:
        "L'arrêté du 28 octobre 2026 supprime la fiche CEE BAR-TH-168 « Dispositif solaire thermique » dès le 4 novembre. MaPrimeRénov' déjà absente depuis septembre : que reste-t-il pour financer un chauffe-eau solaire ?",
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
      about: ['Chauffe-eau solaire', 'CEE', 'BAR-TH-168', 'Rénovation énergétique', 'Aides 2026'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 5 novembre 2026 · Eau chaude sanitaire
          </p>

          <h1>Fin de la prime CEE BAR-TH-168 au 4 novembre 2026 : chauffe-eau solaire thermique, ce qui change</h1>

          <img
            src="/blog/prime-cee-bar-th-168-solaire-thermique-fin-novembre-2026.jpg"
            alt="Capteurs solaires thermiques sur toiture d'une maison individuelle pour la production d'eau chaude sanitaire"
            className="rounded-2xl w-full object-cover max-h-80"
            loading="eager"
          />

          <p className="lead">
            Coup sur coup, le solaire thermique domestique perd ses deux principales aides. MaPrimeRénov' par geste avait déjà disparu au 1er septembre 2026 pour les chauffe-eau solaires en métropole. Désormais, l'arrêté du 28 octobre 2026, publié au <em>Journal officiel</em> le 3 novembre et entré en vigueur le 4, supprime la fiche d'opération standardisée <strong>BAR-TH-168</strong> du dispositif des Certificats d'Économie d'Énergie (CEE). Voici ce que cela signifie concrètement, ce qu'il reste pour financer votre installation, et quelle alternative envisager.
          </p>

          <h2>Qu'était exactement la fiche BAR-TH-168 ?</h2>
          <p>
            La fiche BAR-TH-168 « Dispositif solaire thermique individuel à appoint séparé » permettait d'obtenir une prime CEE pour l'installation d'un ballon solaire raccordé à un appoint calorifique <strong>existant ou neuf mais séparé</strong> — typiquement une chaudière à condensation gaz, un poêle à bois ou une pompe à chaleur. Le dispositif ciblait donc les situations où le propriétaire conservait ou installait un générateur de chaleur principal distinct du ballon solaire, l'appoint solaire couvrant 40 à 60 % des besoins en eau chaude sanitaire.
          </p>
          <p>
            Ce n'est pas la même chose que le CESI (chauffe-eau solaire individuel) classique, qui dispose de son propre appoint intégré et relevait de la fiche <strong>BAR-TH-101</strong>. Cette nuance est importante pour comprendre ce qui reste accessible.
          </p>

          <h2>Pourquoi cette fiche a-t-elle été supprimée ?</h2>
          <p>
            Selon les informations disponibles, la décision résulte de <strong>dérives de dimensionnement</strong> constatées par les pouvoirs publics. Des opérateurs avaient pris l'habitude de surdimensionner les installations solaires afin de maximiser le volume de CEE générés, sans que les économies d'énergie réelles ne soient proportionnelles. Face à ces abus, et dans un contexte de rationalisation des fiches CEE, le gouvernement a choisi de supprimer purement et simplement la fiche plutôt que de la réformer.
          </p>

          <h2>Une mesure transitoire : déclarez avant le 13 novembre 2026</h2>
          <p>
            Si vous avez signé un devis pour une installation relevant de BAR-TH-168 <strong>avant le 4 novembre 2026</strong> et que votre dossier n'a pas encore été déposé auprès d'un obligé CEE, une fenêtre transitoire existe. Les opérateurs avaient jusqu'au <strong>13 novembre 2026</strong> pour recenser et transmettre la liste des opérations engagées avant la suppression mais dont la demande de prime n'avait pas encore été formalisée. Si vous êtes dans cette situation, contactez sans délai l'organisme auprès duquel vous avez souscrit votre offre CEE pour savoir si votre dossier peut encore être pris en compte.
          </p>

          <h2>Ce qui reste disponible pour financer un chauffe-eau solaire</h2>
          <p>
            La suppression de BAR-TH-168 ne condamne pas toutes les formes de chauffe-eau solaire. D'autres fiches CEE restent actives — sous conditions strictes :
          </p>
          <ul>
            <li>
              <strong>BAR-TH-101 – CESI avec appoint intégré</strong> : le chauffe-eau solaire individuel doté de son propre système d'appoint (résistance électrique ou échangeur intégré) conserve sa prime CEE, avec un <strong>bonus disponible jusqu'au 31 décembre 2026</strong>. Condition impérative depuis septembre 2026 : aucun équipement fonctionnant à une énergie fossile (gaz, fioul) ne doit être installé ou maintenu pour l'eau chaude sanitaire. Un logement dont la chaudière gaz assure l'eau chaude ne peut plus bénéficier de cette fiche.
            </li>
            <li>
              <strong>BAR-TH-143 – Système solaire combiné (SSC)</strong> : finance les installations solaires qui couvrent à la fois le chauffage et l'eau chaude sanitaire. Fiche toujours active, sous réserve de critères techniques précis (surface de capteurs, volume ballon, appoint non fossile).
            </li>
            <li>
              <strong>BAR-TH-162 – Capteurs solaires hybrides</strong> (photovoltaïque + thermique) : maintenue en vigueur.
            </li>
          </ul>
          <p>
            En dehors des CEE, la <strong>TVA à 5,5 %</strong> (au lieu de 10 % ou 20 %) s'applique toujours aux travaux de pose d'un chauffe-eau solaire dans un logement achevé depuis plus de deux ans. Et l'<strong>Éco-PTZ</strong> peut financer jusqu'à 50 000 € à taux zéro, sans conditions de revenus, pour des travaux d'amélioration de la performance énergétique incluant un CESI.
          </p>
          <p>
            À noter : en <strong>Outre-mer</strong>, MaPrimeRénov' finance toujours l'eau chaude solaire, le gisement solaire y justifiant des taux d'aide spécifiques.
          </p>

          <h2>Le chauffe-eau thermodynamique : l'alternative la mieux soutenue en 2026</h2>
          <p>
            Face au retrait progressif des aides au solaire thermique, le <strong>chauffe-eau thermodynamique (CET)</strong> s'impose comme l'alternative la plus subventionnée en métropole. Il utilise les calories de l'air ambiant (ou extérieur) pour produire de l'eau chaude sanitaire, avec un coefficient de performance (COP) de 2,5 à 3,5 : il consomme 2 à 3 fois moins d'électricité qu'un chauffe-eau électrique classique.
          </p>
          <p>
            Le CET bénéficie toujours d'une prime CEE via la fiche <strong>BAR-TH-148</strong>, ainsi que d'une TVA à 5,5 % et de la possibilité de financement via l'Éco-PTZ. Pour une comparaison détaillée des deux technologies, rendez-vous sur notre article <a href="/blog/chauffe-eau-thermodynamique-vs-solaire-2026">Chauffe-eau thermodynamique ou solaire : lequel choisir en 2026 ?</a>
          </p>

          <h2>Le solaire thermique reste-t-il rentable sans aide ?</h2>
          <p>
            Pour les installations relevant de BAR-TH-168, la question se pose frontalement. Dans les régions bénéficiant d'un fort ensoleillement (<strong>PACA, Occitanie, Corse, Nouvelle-Aquitaine côtière</strong>), un dispositif solaire thermique peut encore présenter un retour sur investissement acceptable, même sans prime CEE, grâce à l'économie annuelle sur la facture d'eau chaude (400 à 700 € selon la taille du foyer et l'énergie de l'appoint).
          </p>
          <p>
            En revanche, dans les régions moins ensoleillées (Nord, Normandie, Île-de-France), la suppression de la prime CEE dégrade sensiblement la rentabilité. Dans ces cas, le chauffe-eau thermodynamique devient presque toujours le choix plus judicieux, à la fois techniquement et financièrement.
          </p>

          <h2>Comment RenoHab peut vous aider</h2>
          <p>
            En tant qu'<strong>Accompagnateur Rénov' agréé</strong>, RenoHab analyse votre situation spécifique : localisation géographique, type de logement, système de chauffage existant, budget. Nous identifions les fiches CEE encore mobilisables et construisons le plan de financement optimal pour votre projet d'eau chaude sanitaire — ou plus largement votre rénovation énergétique globale. <a href="/blog">Consultez notre blog</a> pour découvrir tous nos guides, ou utilisez notre <a href="/#simulateur">simulateur d'aides</a> pour estimer votre reste à charge en quelques minutes.
          </p>
        </article>

        {/* CTA RenoHab */}
        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Quelle solution pour votre eau chaude ?</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            CESI, chauffe-eau thermodynamique ou autre équipement : RenoHab vous aide à choisir la meilleure option et à monter votre dossier d'aides.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/dpe-gratuit" className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all">
              Estimer mon DPE
            </a>
            <a href="/pompe-a-chaleur" className="px-6 py-3 rounded-full border border-white/70 text-white font-semibold hover:bg-white/10 transition-all">
              Découvrir la pompe à chaleur
            </a>
          </div>
        </div>
      </main>

      <ArticleFooter />
    </div>
  );
}
