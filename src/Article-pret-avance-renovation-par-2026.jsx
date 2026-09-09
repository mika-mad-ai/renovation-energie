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

const PUBLISHED = '2026-09-09';
const PATH = '/blog/pret-avance-renovation-par-2026';

export default function ArticlePretAvanceRenovationPar2026() {
  useSeo({
    title: "Prêt Avance Rénovation (PAR et PAR+) 2026 : financer ses travaux sans avance de fonds | RenoHab",
    description:
      "Le Prêt Avance Rénovation (PAR) et sa version PAR+ à taux zéro permettent de financer sa rénovation énergétique sans débourser d'argent immédiatement. Montants, conditions, banques partenaires : guide complet 2026.",
    path: PATH,
    image: `https://renohab.fr${PATH}.jpg`,
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline:
        "Prêt Avance Rénovation (PAR et PAR+) 2026 : financer ses travaux sans avance de fonds",
      description:
        "Le Prêt Avance Rénovation (PAR) et sa version PAR+ à taux zéro permettent de financer sa rénovation énergétique sans débourser d'argent immédiatement. Montants, conditions, banques partenaires : guide complet 2026.",
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
      about: ['Prêt Avance Rénovation', 'PAR+', 'Financement rénovation', 'Rénovation énergétique'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 9 septembre 2026 · Financement travaux
          </p>

          <h1>Prêt Avance Rénovation (PAR et PAR+) : financer ses travaux sans avance de fonds en 2026</h1>

          <img
            src="/blog/pret-avance-renovation-par-2026.jpg"
            alt="Maison rénovée avec financement PAR"
            className="w-full rounded-xl my-6 object-cover max-h-72"
            loading="lazy"
          />

          <p className="lead">
            Vous souhaitez rénover votre logement mais le reste à charge, même après les aides, reste
            difficile à financer d'un coup ? Le <strong>Prêt Avance Rénovation (PAR)</strong> — et sa
            version bonifiée <strong>PAR+</strong> à taux zéro — est conçu pour vous : vous réalisez vos
            travaux aujourd'hui, et vous ne remboursez qu'à la vente du bien ou lors de la succession.
            Tour d'horizon complet pour 2026.
          </p>

          <h2>Qu'est-ce que le Prêt Avance Rénovation ?</h2>
          <p>
            Le PAR est un prêt bancaire <strong>garanti par une hypothèque</strong> sur votre résidence
            principale et bénéficiant d'une <strong>garantie publique à hauteur de 75 %</strong> du
            montant emprunté. Sa particularité principale : vous ne remboursez ni le capital ni les
            intérêts (selon la formule choisie) <strong>tant que vous restez propriétaire</strong>. La
            dette est soldée lors de la vente du logement ou au règlement de la succession.
          </p>
          <p>
            Il existe deux versions du dispositif :
          </p>
          <ul>
            <li>
              <strong>PAR « classique »</strong> : taux d'intérêt de 2 %, sans condition de ressources
              depuis juin 2024. Ouvert à tous les propriétaires occupants.
            </li>
            <li>
              <strong>PAR+</strong> (dit « Prêt Avance Mutation ») : <strong>0 % d'intérêt pendant les
              10 premières années</strong>, puis un taux très modéré. Réservé aux ménages modestes et
              très modestes selon les plafonds ANAH, <strong>revalorisés au 1er janvier 2026</strong>.
            </li>
          </ul>
          <p>
            À ne pas confondre avec l'<a href="/blog/eco-ptz-2026-pret-taux-zero-renovation">Éco-PTZ</a>,
            qui est un prêt à taux zéro remboursé en mensualités classiques. Le PAR, lui, ne génère
            aucune mensualité pendant toute la durée de détention du bien.
          </p>

          <h2>Quels travaux sont éligibles ?</h2>
          <p>
            Le PAR finance toute opération améliorant la performance énergétique du logement, notamment :
          </p>
          <ul>
            <li>Isolation des combles, des murs, du plancher bas ;</li>
            <li>Remplacement d'une chaudière fossile par une <a href="/pompe-a-chaleur">pompe à chaleur</a> ou
            une chaudière biomasse ;</li>
            <li>Installation d'une VMC double flux ;</li>
            <li>Remplacement des fenêtres et portes-fenêtres ;</li>
            <li>Travaux de rénovation globale combinant plusieurs gestes.</li>
          </ul>
          <p>
            Les travaux doivent être réalisés par un artisan <strong>RGE (Reconnu Garant de
            l'Environnement)</strong> et concerner la résidence principale de l'emprunteur.
          </p>

          <h2>Montants : de 3 500 € à 50 000 €</h2>
          <p>
            Le montant du prêt est compris entre <strong>3 500 € et 50 000 €</strong>, selon le nombre
            et la nature des travaux :
          </p>
          <ul>
            <li>Jusqu'à <strong>10 000 €</strong> pour un geste unique (ex. remplacement des fenêtres) ;</li>
            <li>Jusqu'à <strong>20 000 €</strong> pour deux types de travaux ;</li>
            <li>Jusqu'à <strong>30 000 €</strong> pour trois types de travaux ou plus ;</li>
            <li>
              Jusqu'à <strong>50 000 €</strong> dans le cadre d'une rénovation d'ampleur (saut d'au moins
              deux classes DPE).
            </li>
          </ul>
          <p>
            Ces plafonds s'appliquent après déduction des autres aides perçues (MaPrimeRénov', CEE…). Le
            PAR peut ainsi couvrir le reste à charge une fois les subventions encaissées, sans alourdir
            votre budget mensuel.
          </p>

          <h2>PAR+ : qui peut en bénéficier ?</h2>
          <p>
            Le PAR+ est réservé aux ménages dont le <strong>revenu fiscal de référence (RFR) est
            inférieur aux plafonds ANAH « modestes » ou « très modestes »</strong> — les mêmes que pour
            MaPrimeRénov'. Ces seuils ont été revalorisés au 1er janvier 2026. À titre indicatif, pour
            un foyer de 2 personnes en Île-de-France, le plafond « modeste » se situe autour de
            40 000 € de RFR annuel.
          </p>
          <p>
            La grande force du PAR+ : <strong>0 % d'intérêt pendant 10 ans</strong>. Pour un ménage
            modeste qui ne dispose pas d'épargne suffisante, c'est un levier puissant pour engager des
            travaux sans aucun coût financier immédiat.
          </p>

          <h2>Quelles banques proposent le PAR en 2026 ?</h2>
          <p>
            Le dispositif est distribué par un réseau de banques partenaires agréées par l'État :
          </p>
          <ul>
            <li><strong>Groupe BPCE</strong> : Banques Populaires et Caisses d'Épargne ;</li>
            <li><strong>Crédit Mutuel</strong> (via ses différentes fédérations régionales) ;</li>
            <li><strong>CIC</strong> ;</li>
            <li><strong>Crédit Agricole</strong> (la plupart des caisses régionales).</li>
          </ul>
          <p>
            Prenez rendez-vous directement auprès de votre agence habituelle pour vérifier la disponibilité
            et les conditions exactes. La demande peut être initiée simultanément à votre dossier
            MaPrimeRénov'.
          </p>

          <h2>PAR vs Éco-PTZ : lequel choisir ?</h2>
          <p>
            Ces deux dispositifs sont complémentaires et <strong>cumulables</strong> :
          </p>
          <ul>
            <li>
              <strong>Éco-PTZ</strong> : prêt sans intérêt remboursé en mensualités (jusqu'à 240 mois),
              sans hypothèque. Idéal si vous pouvez supporter des mensualités supplémentaires.
            </li>
            <li>
              <strong>PAR / PAR+</strong> : pas de mensualités, remboursement différé à la vente.
              Idéal si votre capacité de remboursement mensuel est saturée ou si vous souhaitez préserver
              votre cash-flow.
            </li>
          </ul>
          <p>
            Dans une rénovation d'ampleur, on peut par exemple utiliser l'Éco-PTZ pour couvrir une partie
            des travaux et le PAR pour le reliquat, en restant sous les plafonds de chacun. Votre{' '}
            <a href="/dpe-gratuit">bilan DPE</a> gratuit vous permettra d'estimer le montant total de
            chantier et d'optimiser ce montage.
          </p>

          <h2>Les étapes pour obtenir un PAR</h2>
          <ol>
            <li>
              <strong>Faire établir un DPE</strong> ou un audit énergétique pour connaître le point de
              départ et les travaux prioritaires.
            </li>
            <li>
              <strong>Obtenir des devis</strong> auprès d'artisans RGE. Un Accompagnateur Rénov'
              peut vous aider à sélectionner les bons professionnels et à valider la cohérence du projet.
            </li>
            <li>
              <strong>Monter le dossier MaPrimeRénov' en parallèle</strong> sur France Rénov' pour
              maximiser les subventions avant de dimensionner le PAR au reste à charge.
            </li>
            <li>
              <strong>Contacter une banque partenaire</strong> avec vos devis, votre DPE et vos derniers
              avis d'imposition (pour le PAR+).
            </li>
            <li>
              <strong>Signer l'offre de prêt</strong> et démarrer les travaux après respect du délai légal
              de réflexion (10 jours).
            </li>
          </ol>

          <h2>Ce que RenoHab fait pour vous</h2>
          <p>
            En tant qu'<strong>Accompagnateur Rénov' agréé</strong>, RenoHab vous aide à :
          </p>
          <ul>
            <li>Définir le scénario de travaux le plus performant (saut de classes DPE optimal) ;</li>
            <li>Monter vos dossiers MaPrimeRénov', CEE et Éco-PTZ ;</li>
            <li>Constituer le dossier technique nécessaire à l'obtention du PAR ;</li>
            <li>Coordonner les artisans RGE pour sécuriser le chantier et les aides.</li>
          </ul>
          <p>
            Résultat : vous avancez sans avance de fonds, et votre logement gagne en valeur et en confort
            dès la fin du chantier.
          </p>
        </article>

        {/* CTA RenoHab */}
        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Rénovez sans avancer l'argent</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            RenoHab monte votre dossier de financement complet — MaPrimeRénov', CEE, Éco-PTZ et PAR —
            pour que vous puissiez démarrer sans attendre.
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
