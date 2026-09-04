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
      </div>
    </footer>
  );
}

const PUBLISHED = '2026-09-04';
const PATH = '/blog/renovation-appartement-copropriete-travaux-privatifs-2026';

export default function ArticleRenovationAppartementCopropriete2026() {
  useSeo({
    title: "Rénovation énergétique en appartement : quels travaux sans vote en AG ? | RenoHab",
    description:
      "Isolation intérieure, chauffe-eau, VMC : ce qu'un copropriétaire peut faire seul dans son appartement pour améliorer son DPE, les aides disponibles et les travaux qui nécessitent un vote en assemblée générale.",
    path: PATH,
    image: '/blog/renovation-appartement-copropriete-travaux-privatifs-2026.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline:
        "Rénovation énergétique en appartement en copropriété : quels travaux sans vote en AG ?",
      description:
        "Isolation intérieure, chauffe-eau, VMC : ce qu'un copropriétaire peut faire seul dans son appartement pour améliorer son DPE, les aides disponibles et les travaux qui nécessitent un vote en assemblée générale.",
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
      about: ['Copropriété', 'Rénovation énergétique', 'Appartement', 'MaPrimeRénov\'', 'DPE'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 4 septembre 2026 · Copropriété &amp; rénovation
          </p>

          <h1>Rénovation énergétique en appartement : quels travaux sans vote en AG ?</h1>

          <img
            src="/blog/renovation-appartement-copropriete-travaux-privatifs-2026.jpg"
            alt="Travaux de rénovation énergétique dans un appartement en copropriété"
            className="w-full rounded-2xl object-cover max-h-96 mb-8"
            loading="eager"
          />

          <p className="lead">
            Propriétaire d'un appartement, vous souhaitez améliorer votre DPE, réduire vos factures
            ou éviter l'interdiction de location qui frappe les passoires thermiques — mais vous
            pensez que la copropriété vous bloque. Bonne nouvelle : plusieurs travaux de rénovation
            énergétique peuvent être réalisés <strong>dans votre seule partie privative</strong>,
            sans attendre un vote en assemblée générale. Voici ce que vous pouvez faire, ce qui
            requiert l'accord des autres copropriétaires, et les aides auxquelles vous avez droit.
          </p>

          <h2>Parties privatives et parties communes : ce que dit la loi</h2>
          <p>
            La <strong>loi du 10 juillet 1965</strong> sur la copropriété distingue deux catégories
            au sein d'un immeuble :
          </p>
          <ul>
            <li>
              <strong>Les parties privatives</strong> : les locaux appartenant exclusivement à un
              copropriétaire — sol, murs intérieurs non porteurs, équipements internes à votre lot
              (chauffe-eau, tableau électrique, etc.). Vous en êtes propriétaire et vous pouvez y
              intervenir librement, dans les limites du règlement de copropriété.
            </li>
            <li>
              <strong>Les parties communes</strong> : la façade, la toiture, les murs porteurs, les
              canalisations partagées, les halls et escaliers. Tout travail sur ces éléments
              nécessite un vote en assemblée générale (AG), généralement à la majorité absolue de
              l'article 25 de la loi de 1965.
            </li>
          </ul>
          <p>
            Le règlement de copropriété peut affiner cette répartition. <strong>En cas de doute,
            consultez-le avant d'engager des travaux</strong> : certains règlements classent par
            exemple les volets ou les balcons différemment de la règle générale.
          </p>

          <h2>Travaux que vous pouvez lancer sans vote en AG</h2>

          <h3>1. L'isolation thermique par l'intérieur (ITI)</h3>
          <p>
            Si vous souhaitez isoler un mur donnant sur l'extérieur ou sur une cave, vous pouvez
            poser un doublage isolant <strong>sur la face intérieure</strong> de ce mur — c'est
            votre partie privative. L'ITI est le levier le plus courant pour les appartements :
            elle peut améliorer votre DPE d'une à deux classes sur les murs les plus froids et
            réduire les pertes thermiques de 15 à 25 % sur les parois traitées.
          </p>
          <p>
            Attention : ITI réduit légèrement la surface habitable (3 à 8 cm par paroi traitée) et
            ne traite pas les ponts thermiques en façade. Elle reste néanmoins la seule option
            réaliste quand l'assemblée ne vote pas l'isolation par l'extérieur (ITE).
          </p>

          <h3>2. Le remplacement du chauffe-eau</h3>
          <p>
            Si votre chauffe-eau est individuel (dans votre appartement ou un placard privatif),
            vous pouvez le remplacer librement. Passer d'un chauffe-eau électrique à résistance à
            un <strong>chauffe-eau thermodynamique</strong> divise par deux à trois la consommation
            électrique pour l'eau chaude sanitaire — un gain direct sur votre DPE et votre facture.
            Ce remplacement est éligible aux CEE (fiche BAR-TH-148) et à la TVA à 5,5 %.
          </p>

          <h3>3. La ventilation individuelle (VMC)</h3>
          <p>
            Dans les immeubles dotés de gaines de ventilation individuelles par appartement (ce qui
            est le cas de la majorité des constructions depuis les années 1980), vous pouvez faire
            installer ou remplacer votre propre unité VMC simple flux hygro-réglable ou double flux
            sans toucher aux parties communes. Une bonne ventilation conditionne l'efficacité de
            l'isolation : sans renouvellement d'air maîtrisé, l'humidité dégrade les matériaux et
            peut entraîner des moisissures.
          </p>

          <h3>4. Les robinets thermostatiques</h3>
          <p>
            Si vous disposez de radiateurs à eau chaude alimentés par un circuit individuel, vous
            pouvez remplacer les robinets existants par des <strong>robinets thermostatiques</strong>
            ou des têtes thermostatiques connectées. Coût modeste (10 à 30 € par robinet en
            auto-installation), gain de 10 à 15 % sur la facture de chauffage selon l'ADEME.
          </p>

          <h3>5. La porte palière intérieure</h3>
          <p>
            La face intérieure de votre porte palière appartient à votre partie privative. Vous
            pouvez y ajouter un joint d'étanchéité, un seuil de porte ou remplacer la porte par un
            modèle plus isolant — à condition que la face extérieure (partie commune) reste
            conforme aux prescriptions du règlement de copropriété.
          </p>

          <h2>Travaux nécessitant un vote en assemblée générale</h2>
          <p>
            Ces travaux touchent aux parties communes et ne peuvent être entrepris sans décision
            collective :
          </p>
          <ul>
            <li>
              <strong>L'isolation par l'extérieur (ITE)</strong> : la façade est une partie commune.
              C'est pourtant la solution la plus efficace pour traiter les ponts thermiques. Vous
              pouvez la mettre à l'ordre du jour de la prochaine AG et convaincre vos copropriétaires
              grâce aux aides collectives disponibles (MaPrimeRénov' Copropriétés, CEE, Éco-PTZ
              collectif).
            </li>
            <li>
              <strong>Le remplacement des fenêtres</strong> : dans la très grande majorité des
              copropriétés, l'aspect extérieur (dormant, couleur, style) est une partie commune.
              Même si vous payez le remplacement, un vote en AG est généralement requis pour
              modifier les fenêtres — vérifiez votre règlement de copropriété.
            </li>
            <li>
              <strong>La toiture et le ravalement</strong> : toujours en partie commune.
            </li>
            <li>
              <strong>Les colonnes montantes et réseaux collectifs</strong> : chauffage collectif,
              colonnes d'eau chaude partagées — toute modification nécessite une décision d'AG.
            </li>
          </ul>

          <h2>Quelles aides pour un copropriétaire souhaitant rénover son appartement ?</h2>
          <p>
            En tant que propriétaire occupant ou bailleur d'un appartement, vous pouvez accéder à
            plusieurs dispositifs pour vos travaux privatifs :
          </p>
          <ul>
            <li>
              <strong>MaPrimeRénov'</strong> (ANAH) : pour les travaux éligibles réalisés dans
              votre partie privative par un artisan RGE. Les conditions et montants évoluent
              régulièrement ; consultez le simulateur France Rénov' pour connaître vos droits
              actuels selon votre revenu et la nature des travaux.
            </li>
            <li>
              <strong>Les CEE (Certificats d'Économies d'Énergie)</strong> : une prime versée par
              les fournisseurs d'énergie pour des travaux standardisés (isolation, chauffe-eau
              thermodynamique, VMC…). Cumulable avec MaPrimeRénov'.
            </li>
            <li>
              <strong>La TVA à 5,5 %</strong> : pour tous les travaux de rénovation énergétique
              réalisés par un professionnel dans un logement de plus de deux ans, au lieu du taux
              normal de 20 %.
            </li>
            <li>
              <strong>L'Éco-PTZ</strong> : un prêt à taux zéro jusqu'à 50 000 € sur 20 ans pour
              financer vos travaux de rénovation énergétique, accessible sans condition de revenus.
            </li>
          </ul>
          <p>
            Pour connaître précisément le montant auquel vous avez droit,{' '}
            <a href="/dpe-gratuit">obtenez une estimation gratuite de votre DPE</a> et utilisez
            notre simulateur pour évaluer les aides accessibles selon votre situation.
          </p>

          <h2>Améliorer son DPE d'appartement : la stratégie gagnante</h2>
          <p>
            Chaque appartement dispose de <strong>son propre DPE individuel</strong>, distinct du
            DPE collectif de l'immeuble. Il prend en compte les parois de votre logement, votre
            système de chauffage, votre production d'eau chaude et votre ventilation — autant
            d'éléments que vous pouvez en partie maîtriser dans votre partie privative.
          </p>
          <p>
            La stratégie la plus efficace combine deux niveaux d'action :
          </p>
          <ol>
            <li>
              <strong>À court terme</strong> : agissez sur vos parties privatives (ITI, chauffe-eau
              thermodynamique, VMC individuelle, robinets thermostatiques). Ces travaux améliorent
              votre DPE sans attendre l'accord des autres copropriétaires.
            </li>
            <li>
              <strong>À moyen terme</strong> : participez activement aux AG pour faire voter des
              travaux sur les parties communes (ITE, toiture, fenêtres). Les aides collectives
              — notamment MaPrimeRénov' Copropriétés — rendent ces projets financièrement
              accessibles, et l'accompagnateur Rénov' peut préparer le dossier pour le syndicat.
            </li>
          </ol>
          <p>
            Si votre appartement est classé F ou G, cette double approche est d'autant plus urgente :
            les logements classés G sont déjà interdits à la location depuis janvier 2025, et les F
            suivront en 2028. Chaque classe gagnée sur le DPE protège la valeur et la louabilité
            de votre bien.
          </p>

          <h2>Par où commencer ?</h2>
          <p>
            Avant de lancer des travaux, deux réflexes sont essentiels :
          </p>
          <ul>
            <li>
              <strong>Relisez votre règlement de copropriété</strong> pour vérifier la répartition
              exacte des parties privatives et communes, notamment pour les fenêtres.
            </li>
            <li>
              <strong>Faites réaliser un DPE ou un audit énergétique</strong> de votre appartement
              pour identifier les postes de déperdition prioritaires et dimensionner les travaux au
              plus juste.
            </li>
          </ul>
          <p>
            RenoHab, <strong>Accompagnateur Rénov' agréé</strong>, vous guide de l'audit à la
            réception des travaux, en optimisant vos aides et en coordonnant les artisans RGE.{' '}
            <a href="/simulateur">Utilisez notre simulateur</a> pour une première estimation en
            quelques minutes, ou{' '}
            <a href="/pompe-a-chaleur">découvrez nos solutions de chauffage performantes</a>{' '}
            adaptées aux appartements.
          </p>

          <div className="not-prose mt-10 rounded-2xl bg-emerald-50 border border-emerald-200 p-6 md:p-8">
            <h3 className="text-xl font-bold text-emerald-900 font-display mb-2">
              Rénover votre appartement avec les meilleures aides
            </h3>
            <p className="text-emerald-800 mb-4">
              RenoHab vous accompagne de A à Z : audit énergétique, montage de dossier MaPrimeRénov',
              sélection d'artisans RGE et suivi de chantier. Gratuit et sans engagement.
            </p>
            <a
              href="/dpe-gratuit"
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold shadow-soft hover:shadow-glow transition-all"
            >
              Estimer mon DPE gratuitement →
            </a>
          </div>
        </article>
      </main>

      <ArticleFooter />
    </div>
  );
}
