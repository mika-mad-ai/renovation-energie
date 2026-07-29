import React from 'react';
import { Link } from 'react-router-dom';
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

const PUBLISHED = '2026-07-29';
const PATH = '/blog/maprimerenov-2026-mode-emploi-dossier';

export default function ArticleMaPrimeRenov2026ModeEmploi() {
  useSeo({
    title: "MaPrimeRénov' 2026 : guide pratique pour déposer votre dossier | RenoHab",
    description:
      "Rendez-vous France Rénov' obligatoire, nouveaux montants, conditions d'éligibilité et démarches pas à pas : tout ce qu'il faut savoir pour obtenir MaPrimeRénov' en 2026.",
    path: PATH,
    image: '/blog/maprimerenov-2026-mode-emploi-dossier.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline:
        "MaPrimeRénov' 2026 : le guide pratique pour déposer votre dossier",
      description:
        "Rendez-vous France Rénov' obligatoire, montants par profil, conditions et démarches étape par étape pour obtenir MaPrimeRénov' en 2026.",
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
      about: ["MaPrimeRénov'", 'Rénovation énergétique', 'Aides travaux 2026'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 29 juillet 2026 · Aides &amp; financement
          </p>

          <h1>MaPrimeRénov' 2026 : le guide pratique pour déposer votre dossier</h1>

          <img
            src="/blog/maprimerenov-2026-mode-emploi-dossier.jpg"
            alt="Maison rénovée avec isolation et pompe à chaleur"
            className="w-full rounded-2xl shadow-soft mb-8 object-cover max-h-80"
            loading="eager"
          />

          <p className="lead">
            Après des mois de blocage faute de loi de finances votée, le guichet MaPrimeRénov' a
            rouvert le <strong>23 février 2026</strong>. Mais les règles ont changé : un
            rendez-vous préalable avec un conseiller France Rénov' est désormais obligatoire avant
            tout dépôt de dossier pour une rénovation d'ampleur. Voici tout ce qu'il faut savoir
            pour ne pas se faire piéger — montants, conditions, et démarches pas à pas.
          </p>

          <h2>Un guichet rouvert, un budget historique</h2>
          <p>
            Fin 2025, plus de <strong>83 000 dossiers étaient en suspens</strong>, faute de crédits
            alloués. La promulgation de la loi de finances 2026 a tout débloqué d'un coup. Pour
            cette année, l'État consacre <strong>3,6 milliards d'euros</strong> à MaPrimeRénov', avec
            un double objectif : financer <strong>120 000 rénovations d'ampleur</strong> et
            <strong> 150 000 rénovations par geste</strong> sur l'ensemble du territoire.
          </p>
          <p>
            Autre changement notable : la condition d'ancienneté du logement est désormais fixée à
            <strong> 15 ans</strong> (au lieu de 2 ans auparavant). Un appartement ou une maison
            construits après 2011 ne sont donc plus éligibles à MaPrimeRénov'.
          </p>

          <h2>La grande nouveauté : le rendez-vous France Rénov' est obligatoire</h2>
          <p>
            Depuis 2026, <strong>tout ménage souhaitant déposer un dossier de rénovation d'ampleur
            (parcours accompagné) doit au préalable prendre rendez-vous avec un conseiller France
            Rénov'</strong>. Ce rendez-vous gratuit — en agence locale ou par téléphone — dure
            environ 45 minutes et permet au conseiller d'évaluer la situation du logement, d'orienter
            vers les aides les plus adaptées et de valider la faisabilité du projet avant la mise en
            route.
          </p>
          <p>
            Ce n'est pas une simple formalité : sans attestation de ce rendez-vous, l'ANAH
            n'instruit pas le dossier. Pensez à le planifier <em>avant</em> de solliciter votre
            Accompagnateur Rénov' et vos devis d'artisans.
          </p>
          <ul>
            <li>Trouver un espace France Rénov' près de chez vous : <strong>france-renov.gouv.fr</strong></li>
            <li>Rendez-vous possible par téléphone au <strong>0 808 800 700</strong> (gratuit, lun–ven)</li>
            <li>Délai moyen d'obtention : 2 à 4 semaines selon les territoires</li>
          </ul>

          <h2>Êtes-vous éligible ? Les conditions clés</h2>
          <p>Pour bénéficier de MaPrimeRénov' en 2026, votre logement doit remplir ces critères :</p>
          <ul>
            <li>
              <strong>Ancienneté ≥ 15 ans</strong> : logement construit avant le 1er janvier 2011.
            </li>
            <li>
              <strong>Résidence principale</strong> : le logement doit être occupé au moins 8 mois
              par an par le demandeur ou le locataire.
            </li>
            <li>
              <strong>Artisan certifié RGE</strong> (Reconnu Garant de l'Environnement) obligatoire
              pour l'ensemble des travaux subventionnés.
            </li>
            <li>
              <strong>Accompagnateur Rénov' agréé</strong> pour toute rénovation d'ampleur (gain de
              2 classes DPE ou plus). Sans lui, le dossier est irrecevable.
            </li>
          </ul>
          <p>
            La première étape pour savoir où vous en êtes reste le{' '}
            <Link to="/dpe-gratuit">diagnostic de performance énergétique</Link>. Il détermine
            votre classe actuelle, la marge de progression et donc votre accès aux aides les plus
            généreuses.
          </p>

          <h2>Combien pouvez-vous obtenir ? Les montants 2026</h2>
          <p>
            MaPrimeRénov' est modulée selon le profil de revenus du ménage, divisé en quatre
            catégories (bleu, jaune, violet, rose). Exemples de montants plafonds pour les travaux
            les plus demandés :
          </p>

          <div className="overflow-x-auto not-prose my-6">
            <table className="w-full text-sm border-collapse rounded-xl overflow-hidden shadow-soft">
              <thead>
                <tr className="bg-emerald-600 text-white">
                  <th className="px-4 py-3 text-left font-semibold">Type de travaux</th>
                  <th className="px-4 py-3 text-center font-semibold">Très modestes</th>
                  <th className="px-4 py-3 text-center font-semibold">Modestes</th>
                  <th className="px-4 py-3 text-center font-semibold">Intermédiaires</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-800">Pompe à chaleur air/eau</td>
                  <td className="px-4 py-3 text-center text-emerald-700 font-semibold">5 000 €</td>
                  <td className="px-4 py-3 text-center text-emerald-600">4 000 €</td>
                  <td className="px-4 py-3 text-center text-emerald-500">3 000 €</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-800">Isolation toiture/combles</td>
                  <td className="px-4 py-3 text-center text-emerald-700 font-semibold">25 €/m²</td>
                  <td className="px-4 py-3 text-center text-emerald-600">18 €/m²</td>
                  <td className="px-4 py-3 text-center text-emerald-500">7 €/m²</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-800">ITE murs extérieurs</td>
                  <td className="px-4 py-3 text-center text-emerald-700 font-semibold">75 €/m²</td>
                  <td className="px-4 py-3 text-center text-emerald-600">40 €/m²</td>
                  <td className="px-4 py-3 text-center text-emerald-500">15 €/m²</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-800">VMC double flux</td>
                  <td className="px-4 py-3 text-center text-emerald-700 font-semibold">2 500 €</td>
                  <td className="px-4 py-3 text-center text-emerald-600">1 500 €</td>
                  <td className="px-4 py-3 text-center text-emerald-500">700 €</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Ces montants sont cumulables avec les{' '}
            <strong>Certificats d'Économies d'Énergie (CEE)</strong> — sans condition de revenus —
            et avec l'<strong>Éco-PTZ</strong> (prêt à taux zéro jusqu'à 50 000 €). Pour une{' '}
            <Link to="/pompe-a-chaleur">pompe à chaleur air/eau</Link>, le cumul MaPrimeRénov' +
            CEE peut atteindre <strong>10 800 €</strong> pour les ménages très modestes.
          </p>

          <h2>Le parcours en 5 étapes</h2>
          <ol>
            <li>
              <strong>Faire évaluer son DPE.</strong> Le{' '}
              <Link to="/dpe-gratuit">DPE gratuit en ligne</Link> vous donne une première
              estimation de votre classe énergétique et des travaux prioritaires.
            </li>
            <li>
              <strong>Prendre rendez-vous France Rénov'.</strong> Obligatoire pour le parcours
              accompagné. Prévoyez ce rendez-vous en premier, avant toute autre démarche.
            </li>
            <li>
              <strong>Choisir un Accompagnateur Rénov' agréé.</strong> Pour toute rénovation
              d'ampleur, son rôle est défini par arrêté : il coordonne le projet, monte les dossiers
              d'aides et supervise les artisans RGE. C'est précisément ce que fait RenoHab.
            </li>
            <li>
              <strong>Obtenir les devis d'artisans RGE.</strong> Au moins deux devis comparatifs
              sont recommandés. Vérifiez la certification sur{' '}
              <strong>qualit-enr.org</strong> ou <strong>rge-pro.fr</strong>.
            </li>
            <li>
              <strong>Déposer le dossier en ligne.</strong> Sur{' '}
              <strong>maprimerenov.gouv.fr</strong>, après création de votre espace personnel.
              Attention : le dossier doit être déposé <em>avant</em> le début des travaux.
            </li>
          </ol>

          <p>
            Si votre projet implique plusieurs gestes (isolation + chauffage + ventilation), utilisez
            notre{' '}
            <Link to="/simulateur">simulateur de rénovation</Link> pour estimer le reste à charge
            selon votre profil de revenus.
          </p>

          <h2>Les erreurs à éviter</h2>
          <ul>
            <li>
              <strong>Commencer les travaux avant le dépôt du dossier</strong> : vous perdez
              l'éligibilité à MaPrimeRénov', sans exception.
            </li>
            <li>
              <strong>Oublier le rendez-vous France Rénov'</strong> : depuis 2026, c'est un
              prérequis bloquant pour le parcours accompagné.
            </li>
            <li>
              <strong>Choisir un artisan non certifié RGE</strong> : même un excellent devis est
              irrecevable s'il ne provient pas d'un professionnel RGE en cours de validité.
            </li>
            <li>
              <strong>Sous-estimer le délai de traitement</strong> : comptez 2 à 4 mois entre le
              dépôt du dossier et le versement de la prime. Prévoyez votre trésorerie en conséquence.
            </li>
          </ul>
        </article>

        {/* CTA RenoHab */}
        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">
            Votre dossier MaPrimeRénov', pris en charge de A à Z
          </h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            En tant qu'Accompagnateur Rénov' agréé, RenoHab prend en main le rendez-vous France
            Rénov', le montage du dossier ANAH et la coordination des artisans RGE — pour que vous
            n'ayez qu'à valider.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/dpe-gratuit"
              className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all"
            >
              Estimer mon DPE gratuitement
            </a>
            <a
              href="/pompe-a-chaleur"
              className="px-6 py-3 rounded-full border border-white/70 text-white font-semibold hover:bg-white/10 transition-all"
            >
              Étudier une pompe à chaleur
            </a>
          </div>
        </div>
      </main>

      <ArticleFooter />
    </div>
  );
}
