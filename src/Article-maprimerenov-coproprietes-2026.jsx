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

const PUBLISHED = '2026-08-17';
const PATH = '/blog/maprimerenov-coproprietes-2026';

export default function ArticleMaPrimeRenovCoproprietes2026() {
  useSeo({
    title: "MaPrimeRénov' Copropriétés 2026 : jusqu'à 25 000 € par logement pour rénover votre immeuble | RenoHab",
    description:
      "Barèmes, conditions, travaux éligibles et nouveauté 2026 : le guide complet de MaPrimeRénov' Copropriétés pour financer la rénovation énergétique de votre immeuble collectif.",
    path: PATH,
    image: 'https://renohab.fr/blog/maprimerenov-coproprietes-2026.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline:
        "MaPrimeRénov' Copropriétés 2026 : jusqu'à 25 000 € par logement pour rénover votre immeuble",
      description:
        "Barèmes, conditions, travaux éligibles et nouveauté 2026 : le guide complet de MaPrimeRénov' Copropriétés pour financer la rénovation énergétique de votre immeuble collectif.",
      datePublished: PUBLISHED,
      dateModified: PUBLISHED,
      inLanguage: 'fr-FR',
      image: 'https://renohab.fr/blog/maprimerenov-coproprietes-2026.jpg',
      mainEntityOfPage: { '@type': 'WebPage', '@id': `https://renohab.fr${PATH}` },
      author: { '@type': 'Organization', name: 'RenoHab', url: 'https://renohab.fr/' },
      publisher: {
        '@type': 'Organization',
        name: 'RenoHab',
        logo: { '@type': 'ImageObject', url: 'https://renohab.fr/logo192-renohab.png' },
      },
      about: ['MaPrimeRénov Copropriétés', 'Rénovation énergétique', 'Copropriété', 'Aides travaux 2026'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 17 août 2026 · Copropriétés &amp; aides
          </p>

          <h1>MaPrimeRénov' Copropriétés 2026 : jusqu'à 25 000 € par logement pour rénover votre immeuble</h1>

          <img
            src="/blog/maprimerenov-coproprietes-2026.jpg"
            alt="Immeuble en copropriété bénéficiant d'une rénovation énergétique — isolation façade"
            className="w-full rounded-xl object-cover max-h-80 mb-8"
            loading="eager"
          />

          <p className="lead">
            Les appartements représentent plus de 40 % du parc résidentiel français, pourtant
            la rénovation énergétique des copropriétés reste bien moins connue que les aides
            destinées aux maisons individuelles. En 2026, le dispositif{' '}
            <strong>MaPrimeRénov' Copropriétés</strong> est pleinement opérationnel, avec des
            subventions pouvant atteindre <strong>45 % des travaux</strong> et un plafond de{' '}
            <strong>25 000 € par logement</strong>. Voici tout ce qu'il faut savoir pour en
            bénéficier.
          </p>

          <h2>Qu'est-ce que MaPrimeRénov' Copropriétés ?</h2>
          <p>
            MaPrimeRénov' Copropriétés est une aide de l'ANAH (Agence Nationale de l'Habitat)
            destinée aux <strong>syndicats de copropriétaires</strong> qui souhaitent engager
            des travaux de rénovation énergétique sur les parties communes ou les parties
            privatives d'intérêt collectif. Contrairement aux aides individuelles, c'est la
            copropriété — via son syndic — qui dépose la demande et perçoit la prime, puis la
            répercute sur les charges de chaque copropriétaire.
          </p>
          <p>
            Le guichet, fermé du 1er janvier au 23 février 2026 dans l'attente de la loi de
            finances, est <strong>pleinement actif depuis le 23 février 2026</strong> avec un
            budget ANAH confirmé à 3,6 milliards d'euros pour l'année.
          </p>

          <h2>Qui peut en bénéficier ? Les conditions d'éligibilité</h2>

          <h3>Conditions sur la copropriété</h3>
          <ul>
            <li>
              Immeuble collectif de plus de <strong>15 ans</strong> à la date du dépôt de dossier.
            </li>
            <li>
              Copropriété <strong>immatriculée au Registre National des Copropriétés</strong> et
              à jour de ses obligations.
            </li>
            <li>
              Part de <strong>résidences principales</strong> suffisante : au moins{' '}
              <strong>65 %</strong> pour les copropriétés de 20 lots ou moins, et au moins{' '}
              <strong>75 %</strong> au-delà.
            </li>
            <li>
              Vote des travaux acquis en <strong>assemblée générale</strong> des copropriétaires.
            </li>
          </ul>

          <h3>Conditions sur les travaux</h3>
          <ul>
            <li>
              Les travaux doivent être réalisés par des entreprises certifiées{' '}
              <strong>RGE (Reconnu Garant de l'Environnement)</strong>.
            </li>
            <li>
              Le projet doit générer un <strong>gain énergétique d'au moins 35 %</strong> pour
              déclencher l'aide minimale — et de 50 % pour le taux majoré.
            </li>
            <li>
              Un <strong>AMO (Assistance à Maîtrise d'Ouvrage)</strong> est obligatoire pour
              accompagner la copropriété tout au long du projet.
            </li>
          </ul>

          <h2>Combien peut-on obtenir ? Les barèmes 2026</h2>
          <p>
            Le montant de la prime dépend du gain énergétique atteint par le projet :
          </p>
          <ul>
            <li>
              <strong>30 % des travaux</strong> éligibles si le gain énergétique est compris
              entre 35 % et 49 %.
            </li>
            <li>
              <strong>45 % des travaux</strong> éligibles si le gain énergétique est supérieur
              ou égal à 50 %.
            </li>
          </ul>
          <p>
            Dans tous les cas, le montant est plafonné à <strong>25 000 € par logement</strong>.
            Pour une copropriété de 20 appartements, cela représente jusqu'à{' '}
            <strong>500 000 € de subvention</strong>.
          </p>
          <p>
            Deux bonus peuvent s'ajouter à ces taux de base :
          </p>
          <ul>
            <li>
              <strong>+20 %</strong> pour les copropriétés en difficulté (dites « fragiles »),
              reconnues par l'ANAH.
            </li>
            <li>
              Un <strong>bonus sortie de passoire thermique</strong> pour les immeubles dont
              plusieurs logements passent d'une classe F ou G à une classe C ou supérieure.
            </li>
          </ul>
          <p>
            Le coût de l'AMO (Assistance à Maîtrise d'Ouvrage) est lui-même{' '}
            <strong>subventionnable</strong> dans le cadre du dispositif.
          </p>

          <h2>Quels travaux sont pris en charge ?</h2>
          <p>
            MaPrimeRénov' Copropriétés finance les travaux portant sur les parties communes ou
            les parties privatives d'intérêt collectif :
          </p>
          <ul>
            <li>
              <strong>Isolation des façades</strong> par l'extérieur (ITE) ou par l'intérieur.
            </li>
            <li>
              <strong>Isolation de la toiture-terrasse</strong> ou de la toiture inclinée.
            </li>
            <li>
              <strong>Remplacement du système de chauffage ou d'eau chaude collectif</strong>{' '}
              (passage à une chaudière biomasse collective, à un réseau de chaleur renouvelable…).
            </li>
            <li>
              <strong>Isolation du plancher bas</strong> donnant sur des caves ou un vide
              sanitaire non chauffé.
            </li>
          </ul>
          <p>
            Les travaux sur menuiseries (fenêtres) des parties privatives ne sont en revanche
            pas couverts par ce dispositif collectif — chaque copropriétaire peut néanmoins
            déposer sa propre demande MaPrimeRénov' individuelle pour ses fenêtres.
          </p>

          <h2>La nouveauté 2026 : le rendez-vous France Rénov' obligatoire</h2>
          <p>
            Depuis la réouverture du guichet en février 2026, une nouvelle étape est{' '}
            <strong>obligatoire avant tout dépôt de dossier</strong> : un rendez-vous avec un
            conseiller <strong>France Rénov'</strong>. Ce point de contact, gratuit, permet de
            valider la cohérence du projet, d'identifier les aides cumulables (CEE, Éco-PTZ
            collectif) et de s'assurer que le dossier est complet avant soumission.
          </p>
          <p>
            Cette étape ne doit pas être perçue comme une contrainte : elle sécurise le projet
            et réduit les risques de rejet ou de demande de pièces complémentaires.
          </p>

          <h2>Le rôle clé de l'AMO (Mon Accompagnateur Rénov')</h2>
          <p>
            L'<strong>Assistance à Maîtrise d'Ouvrage</strong> est obligatoire pour toute
            demande MaPrimeRénov' Copropriétés. Son rôle est central : audit énergétique du
            bâtiment, définition des travaux permettant d'atteindre les seuils de gain,
            montage du dossier ANAH, coordination des entreprises RGE, suivi des travaux et
            demande de versement de la prime.
          </p>
          <p>
            En tant qu'<strong>Accompagnateur Rénov' agréé</strong>,{' '}
            <a href="/pompe-a-chaleur">RenoHab</a> intervient à chaque étape du projet
            collectif — de l'évaluation initiale du bâtiment jusqu'à l'obtention effective de
            la prime. Le coût de cet accompagnement est inclus dans l'assiette des dépenses
            subventionnables.
          </p>

          <h2>Comment cumuler MaPrimeRénov' Copropriétés avec d'autres aides ?</h2>
          <p>
            Le dispositif est cumulable avec :
          </p>
          <ul>
            <li>
              Les <strong>Certificats d'Économies d'Énergie (CEE)</strong>, négociés par l'AMO
              auprès des fournisseurs d'énergie.
            </li>
            <li>
              L'<strong>Éco-PTZ collectif</strong>, un prêt à taux zéro accessible à la
              copropriété pour financer le reste à charge.
            </li>
            <li>
              Les <strong>aides régionales</strong> et municipales spécifiques aux
              copropriétés (notamment à Paris, Lyon ou Bordeaux).
            </li>
          </ul>
          <p>
            En combinant ces sources, le reste à charge de chaque copropriétaire peut être
            significativement réduit — parfois en dessous de 20 % du coût total des travaux.
          </p>

          <h2>Par où commencer ?</h2>
          <ol>
            <li>
              <strong>Faire réaliser un audit énergétique</strong> du bâtiment par un
              opérateur certifié pour connaître votre DPE collectif et les pistes de travaux.
            </li>
            <li>
              <strong>Voter les travaux en assemblée générale</strong> avec l'appui de votre
              syndic — la majorité requise dépend de la nature des travaux.
            </li>
            <li>
              <strong>Prendre rendez-vous avec France Rénov'</strong> (étape désormais
              obligatoire depuis 2026).
            </li>
            <li>
              <strong>Mandater un AMO</strong> agréé — comme RenoHab — pour monter le dossier
              ANAH, coordonner les entreprises RGE et piloter le chantier jusqu'au versement
              de la prime.
            </li>
          </ol>
          <p>
            Vous pouvez dès maintenant estimer le potentiel d'aides de votre copropriété grâce
            au{' '}
            <a href="/#simulator">simulateur RenoHab</a>. Pour un projet collectif, notre
            équipe vous accompagne de A à Z.
          </p>
        </article>

        {/* CTA RenoHab */}
        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">
            Votre copropriété est-elle éligible ?
          </h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            Audit collectif, montage du dossier ANAH, coordination des artisans RGE : RenoHab
            pilote votre projet de A à Z en tant qu'Accompagnateur Rénov' agréé.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/#simulator"
              className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all"
            >
              Estimer mes aides
            </a>
            <a
              href="/dpe-gratuit"
              className="px-6 py-3 rounded-full border border-white/70 text-white font-semibold hover:bg-white/10 transition-all"
            >
              Mon DPE gratuit
            </a>
          </div>
        </div>
      </main>

      <ArticleFooter />
    </div>
  );
}
