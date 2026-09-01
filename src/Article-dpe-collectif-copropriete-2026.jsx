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

const PUBLISHED = '2026-09-01';
const PATH = '/blog/dpe-collectif-copropriete-2026';

export default function ArticleDpeCollectifCopropriete2026() {
  useSeo({
    title: "DPE collectif en copropriété : obligations 2026, coût et démarches | RenoHab",
    description:
      "Depuis le 1er janvier 2026, le DPE collectif est obligatoire pour toutes les copropriétés. Qui est concerné, combien ça coûte, comment l'obtenir et quelles aides en découlent ?",
    path: PATH,
    image: '/blog/dpe-collectif-copropriete-2026.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: "DPE collectif en copropriété : obligations 2026, coût et démarches",
      description:
        "Depuis le 1er janvier 2026, le DPE collectif est obligatoire pour toutes les copropriétés. Qui est concerné, combien ça coûte, comment l'obtenir et quelles aides en découlent ?",
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
      about: ['DPE collectif', 'Copropriété', 'Rénovation énergétique', 'Obligations 2026'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 1er septembre 2026 · Copropriété & DPE
          </p>

          <h1>DPE collectif en copropriété : obligations 2026, coût et démarches</h1>

          <img
            src="/blog/dpe-collectif-copropriete-2026.jpg"
            alt="Immeuble de copropriété soumis au DPE collectif obligatoire en 2026"
            className="w-full rounded-xl my-6 object-cover"
            style={{ maxHeight: '420px' }}
          />

          <p className="lead">
            Depuis le <strong>1er janvier 2026</strong>, le Diagnostic de Performance Énergétique
            collectif (DPE collectif) est obligatoire pour <em>toutes</em> les copropriétés dont le
            permis de construire a été déposé avant 2013 — y compris les plus petites, de moins de
            50 lots. Beaucoup de syndics et de copropriétaires l'ignorent encore. Voici ce que cela
            implique concrètement : qui est concerné, combien ça coûte, comment l'obtenir, et
            surtout comment en tirer parti pour accéder aux aides à la rénovation.
          </p>

          <h2>Qu'est-ce que le DPE collectif ?</h2>
          <p>
            Le DPE collectif évalue la performance énergétique d'un immeuble entier, pas d'un
            logement individuel. Il analyse les parties communes et les équipements collectifs
            (chauffage, eau chaude sanitaire, ventilation…), attribue une étiquette de A à G à
            l'ensemble du bâtiment, et identifie les travaux prioritaires pour améliorer sa
            performance.
          </p>
          <p>
            À ne pas confondre avec le <a href="/dpe-gratuit">DPE individuel</a> que chaque
            propriétaire réalise lors d'une vente ou d'une location : le DPE collectif porte sur les
            parties communes et les systèmes partagés, et est à la charge du syndicat de
            copropriété.
          </p>

          <h2>Qui est obligé depuis le 1er janvier 2026 ?</h2>
          <p>
            L'obligation a été déployée en trois vagues, selon la taille de la copropriété :
          </p>
          <ul>
            <li>
              <strong>Plus de 200 lots</strong> : obligatoire depuis le 1er janvier 2024.
            </li>
            <li>
              <strong>51 à 200 lots</strong> : obligatoire depuis le 1er janvier 2025.
            </li>
            <li>
              <strong>50 lots ou moins</strong> : obligatoire depuis le 1er janvier 2026.
            </li>
          </ul>
          <p>
            <strong>Condition commune</strong> : le permis de construire de l'immeuble doit avoir
            été déposé avant le 1er janvier 2013. Les immeubles plus récents sont déjà classés et
            n'entrent pas dans ce dispositif.
          </p>

          <h3>Quelle est la durée de validité ?</h3>
          <p>
            Le DPE collectif est valable <strong>10 ans</strong>. Exception : si le diagnostic
            attribue une étiquette <strong>A, B ou C</strong> à l'immeuble, la validité est
            illimitée (renouvellement uniquement en cas de travaux importants modifiant la
            performance).
          </p>

          <h2>Combien coûte un DPE collectif ?</h2>
          <p>
            Le tarif n'est pas réglementé, mais les fourchettes observées en 2026 sont les
            suivantes :
          </p>
          <ul>
            <li>
              <strong>Petite copropriété (moins de 20 lots)</strong> : 1 000 à 2 000 €
            </li>
            <li>
              <strong>Copropriété moyenne (20 à 100 lots)</strong> : 2 000 à 3 500 €
            </li>
            <li>
              <strong>Grande copropriété (plus de 100 lots)</strong> : 3 500 à 5 000 € et plus
            </li>
          </ul>
          <p>
            Ce coût est réparti entre tous les copropriétaires, au prorata de leurs tantièmes. Pour
            une petite copropriété de 10 appartements, la part individuelle dépasse rarement 150 à
            200 €.
          </p>

          <h2>Quelles sont les conséquences en cas d'absence de DPE collectif ?</h2>
          <p>
            Il n'existe pas de sanction pénale ou administrative directe pour la copropriété en
            tant que telle. Cependant :
          </p>
          <ul>
            <li>
              Le <strong>syndic a l'obligation légale</strong> d'inscrire le vote du DPE collectif
              à l'ordre du jour de l'assemblée générale. S'il omet de le faire, sa responsabilité
              professionnelle peut être engagée.
            </li>
            <li>
              Sans DPE collectif, la copropriété ne peut pas prétendre aux principales{' '}
              <strong>aides à la rénovation collective</strong> (MaPrimeRénov' Copropriétés, CEE,
              éco-PTZ collectif).
            </li>
            <li>
              En cas de vente d'un lot dans un immeuble sans DPE collectif, l'absence peut
              constituer un vice de transparence vis-à-vis de l'acquéreur.
            </li>
          </ul>

          <h2>DPE collectif et Plan Pluriannuel de Travaux (PPT)</h2>
          <p>
            Le DPE collectif est directement lié au{' '}
            <strong>Plan Pluriannuel de Travaux (PPT)</strong>, lui aussi obligatoire depuis 2023
            pour les copropriétés de plus de 15 ans. Le PPT doit être élaboré notamment à partir
            des résultats du DPE collectif, qui identifie les postes de travaux les plus urgents
            et leur impact sur l'étiquette énergie.
          </p>
          <p>
            Concrètement, si votre immeuble est classé E, F ou G, le DPE collectif va chiffrer
            le gain possible avec :
          </p>
          <ul>
            <li>L'isolation de la toiture et des murs extérieurs</li>
            <li>Le remplacement du système de chauffage collectif (pompe à chaleur, raccordement réseau de chaleur…)</li>
            <li>La rénovation de la ventilation collective</li>
            <li>Le remplacement des menuiseries des parties communes</li>
          </ul>
          <p>
            Ces travaux, intégrés dans une{' '}
            <strong>rénovation d'ampleur</strong> visant au moins deux classes DPE de gain,
            ouvrent droit aux aides les plus élevées.
          </p>

          <h2>Quelles aides sont accessibles grâce au DPE collectif ?</h2>
          <p>
            Le DPE collectif est le sésame pour débloquer les financements collectifs. Trois
            leviers principaux :
          </p>

          <h3>MaPrimeRénov' Copropriétés</h3>
          <p>
            Cette aide finance les travaux sur les parties communes des immeubles en copropriété,
            à hauteur de <strong>25 % à 45 % du montant des travaux</strong> selon le profil des
            ménages résidants. Elle exige la réalisation d'un DPE collectif ou d'un audit
            énergétique préalable, et que les travaux permettent un gain d'au moins{' '}
            <strong>35 % de la consommation d'énergie primaire</strong>. En 2026, l'enveloppe
            nationale de l'Anah pour ce dispositif est de plusieurs centaines de millions d'euros.
          </p>

          <h3>Certificats d'Économies d'Énergie (CEE)</h3>
          <p>
            Les CEE viennent en complément de MaPrimeRénov' et peuvent représenter plusieurs
            milliers d'euros de prime selon les travaux réalisés (isolation, pompe à chaleur
            collective…). Ils sont cumulables avec les aides de l'Anah.
          </p>

          <h3>Éco-PTZ collectif</h3>
          <p>
            Le prêt à taux zéro collectif permet à chaque copropriétaire de financer sa quote-part
            de travaux sans intérêts, jusqu'à <strong>30 000 € par lot</strong>. Il est accessible
            sans condition de ressources et est accordé par les banques partenaires.
          </p>

          <h2>Comment obtenir le DPE collectif : les étapes</h2>
          <ol>
            <li>
              <strong>Vote en assemblée générale</strong> : le syndic inscrit la réalisation du
              DPE collectif à l'ordre du jour. Il est adopté à la majorité simple (article 24 de
              la loi de 1965).
            </li>
            <li>
              <strong>Choix du diagnostiqueur</strong> : il doit être certifié et habilité à
              réaliser des DPE collectifs (certification spécifique). Demandez plusieurs devis.
            </li>
            <li>
              <strong>Réalisation du diagnostic</strong> : le diagnostiqueur visite les parties
              communes, collecte les données de consommation, modélise le bâtiment et remet son
              rapport sous 2 à 4 semaines.
            </li>
            <li>
              <strong>Présentation en AG</strong> : les résultats et les recommandations de travaux
              sont présentés aux copropriétaires, qui peuvent voter un PPT adapté.
            </li>
            <li>
              <strong>Dépôt sur le registre ADEME</strong> : comme pour les DPE individuels, les
              résultats doivent être transmis à l'ADEME via le registre national.
            </li>
          </ol>

          <h2>Faut-il attendre ou agir maintenant ?</h2>
          <p>
            L'obligation est entrée en vigueur, mais de nombreuses petites copropriétés n'ont pas
            encore réalisé leur DPE collectif. Agir maintenant présente plusieurs avantages :
          </p>
          <ul>
            <li>
              Anticiper les obligations légales et dégager la responsabilité du syndic.
            </li>
            <li>
              Préparer le plan de travaux avant que les enveloppes d'aides soient épuisées —
              MaPrimeRénov' Copropriétés est soumise à des quotas annuels.
            </li>
            <li>
              Valoriser l'immeuble : un immeuble bien classé se vend et se loue mieux, et les
              charges de chauffage baissent pour tous les occupants.
            </li>
          </ul>
          <p>
            RenoHab, en tant qu'<strong>Accompagnateur Rénov' agréé</strong>, peut intervenir
            en copropriété pour coordonner le DPE collectif, monter le dossier de financement et
            sélectionner des artisans RGE. Utilisez notre{' '}
            <a href="/#simulator">simulateur d'aides</a> pour estimer le potentiel de votre
            copropriété.
          </p>

          <h2>En résumé</h2>
          <ul>
            <li>
              <strong>Obligatoire depuis janvier 2026</strong> pour toutes les copropriétés (permis
              avant 2013).
            </li>
            <li>
              <strong>Coût</strong> : 1 000 à 5 000 € selon la taille, réparti entre copropriétaires.
            </li>
            <li>
              <strong>Validité</strong> : 10 ans (illimitée pour les classes A à C).
            </li>
            <li>
              <strong>Pas de sanction directe</strong>, mais obligatoire pour accéder aux aides
              collectives (MaPrimeRénov' Copro, CEE, éco-PTZ).
            </li>
            <li>
              Il déclenche le <strong>Plan Pluriannuel de Travaux</strong> et donne la feuille de
              route pour gagner des classes DPE.
            </li>
          </ul>
        </article>

        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Votre copropriété est-elle prête ?</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            RenoHab vous accompagne : DPE collectif, dossier MaPrimeRénov' Copropriétés, sélection d'artisans RGE. Contactez-nous pour un bilan gratuit.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/dpe-gratuit" className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all">
              Estimer mon DPE
            </a>
            <a href="/pompe-a-chaleur" className="px-6 py-3 rounded-full border border-white/70 text-white font-semibold hover:bg-white/10 transition-all">
              Découvrir les solutions
            </a>
          </div>
        </div>
      </main>

      <ArticleFooter />
    </div>
  );
}
