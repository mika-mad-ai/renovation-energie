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

const PUBLISHED = '2026-08-27';
const PATH = '/blog/rendez-vous-france-renov-maprimerenov-2026';

export default function ArticleRendezVousFranceRenov2026() {
  useSeo({
    title: "Rendez-vous France Rénov' obligatoire 2026 : comment le préparer pour débloquer MaPrimeRénov' | RenoHab",
    description:
      "Depuis février 2026, un entretien gratuit avec un conseiller France Rénov' est obligatoire avant toute demande MaPrimeRénov' rénovation d'ampleur. Mode d'emploi complet.",
    path: PATH,
    image: '/blog/rendez-vous-france-renov-maprimerenov-2026.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline:
        "Rendez-vous France Rénov' obligatoire en 2026 : l'étape clé avant MaPrimeRénov' rénovation d'ampleur",
      description:
        "Depuis février 2026, un entretien gratuit avec un conseiller France Rénov' est obligatoire avant toute demande MaPrimeRénov' rénovation d'ampleur. Mode d'emploi complet.",
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
      about: ["MaPrimeRénov'", 'France Rénov', 'Rénovation d\'ampleur', 'Aides rénovation énergétique'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 27 août 2026 · Aides &amp; démarches
          </p>

          <h1>Rendez-vous France Rénov' obligatoire en 2026 : l'étape clé avant MaPrimeRénov' rénovation d'ampleur</h1>

          <img
            src="/blog/rendez-vous-france-renov-maprimerenov-2026.jpg"
            alt="Conseiller France Rénov' en entretien préalable rénovation énergétique"
            className="w-full rounded-xl shadow-soft mb-6"
            loading="eager"
          />

          <p className="lead">
            Depuis la réouverture de MaPrimeRénov' le 23 février 2026, une nouvelle règle s'impose
            pour les projets de rénovation d'ampleur : un entretien préalable gratuit avec un
            conseiller France Rénov' est <strong>obligatoire avant tout dépôt de dossier</strong>.
            Sans cette étape, votre demande ne peut pas aboutir. Voici tout ce qu'il faut savoir
            pour préparer ce rendez-vous et ne pas bloquer votre projet.
          </p>

          <h2>Pourquoi ce rendez-vous est-il devenu obligatoire ?</h2>
          <p>
            Jusqu'en 2025, MaPrimeRénov' fonctionnait principalement en auto-déclaration : les
            ménages déposaient leur dossier en ligne et obtenaient une validation sous réserve de
            contrôle. Ce système a montré ses limites : fraudes, malfaçons, projets inadaptés au
            logement… L'État a donc décidé de sécuriser le parcours en imposant un entretien
            personnalisé en amont.
          </p>
          <p>
            L'objectif est triple : s'assurer que le projet est techniquement cohérent, informer
            le ménage sur les aides réellement mobilisables (MaPrimeRénov', CEE, Éco-PTZ, aides
            régionales), et vérifier que les conditions d'éligibilité sont bien réunies — notamment
            le gain minimal de <strong>deux classes DPE</strong> exigé pour la rénovation d'ampleur.
          </p>

          <h2>Qui est concerné par cette obligation ?</h2>
          <p>
            Le rendez-vous préalable s'applique <strong>exclusivement aux projets de rénovation
            d'ampleur</strong>. Les demandes MaPrimeRénov' par geste (isolation d'un seul
            élément, remplacement d'une chaudière…) ne sont pas soumises à cette obligation et
            suivent le parcours habituel.
          </p>
          <p>
            En pratique, la rénovation d'ampleur concerne les logements classés E, F ou G au
            DPE. Elle vise un gain d'au moins deux classes énergétiques en combinant au minimum
            deux gestes d'isolation. C'est le dispositif le plus généreux en termes d'aides —
            jusqu'à 70 % du montant des travaux pour les foyers modestes — mais aussi le plus
            encadré.
          </p>

          <h2>Comment prendre rendez-vous avec France Rénov' ?</h2>
          <p>
            Trois canaux sont disponibles pour obtenir votre entretien préalable :
          </p>
          <ul>
            <li>
              <strong>Par téléphone</strong> : le numéro gratuit{' '}
              <strong>0 808 800 700</strong> (service France Rénov') est ouvert en semaine.
            </li>
            <li>
              <strong>En ligne</strong> : sur le site france-renov.gouv.fr, rubrique « Trouver un
              conseiller » pour localiser les 614 espaces conseil France Rénov' répartis sur
              l'ensemble du territoire.
            </li>
            <li>
              <strong>Directement en espace conseil</strong> : certaines structures acceptent les
              visites sans rendez-vous ou proposent des permanences.
            </li>
          </ul>
          <p>
            Le rendez-vous peut se tenir <strong>en présentiel, en visioconférence ou par
            téléphone</strong> lorsque les pièces justificatives ont été transmises en amont. Il
            est entièrement gratuit et sans engagement.
          </p>

          <h2>Comment préparer votre entretien ?</h2>
          <p>
            Un rendez-vous bien préparé se traduit par un entretien plus court et une attestation
            délivrée sans délai. Rassemblez avant votre RDV :
          </p>
          <ul>
            <li>
              <strong>Le DPE de votre logement</strong> (daté de moins de 10 ans) pour que le
              conseiller puisse vérifier la classe actuelle et le potentiel d'amélioration.{' '}
              <Link to="/dpe-gratuit">Estimez votre DPE en ligne</Link> si vous ne le connaissez pas.
            </li>
            <li>
              <strong>Vos derniers avis d'imposition</strong> : ils déterminent votre tranche de
              revenus et le taux de subvention applicable.
            </li>
            <li>
              <strong>Un descriptif sommaire des travaux envisagés</strong> : type d'isolation,
              remplacement du système de chauffage (pompe à chaleur, etc.), fenêtres…
            </li>
            <li>
              <strong>Les coordonnées de votre logement</strong> : adresse, année de construction,
              surface habitable, type de chauffage actuel.
            </li>
          </ul>
          <p>
            Si vous avez déjà été accompagné par un{' '}
            <Link to="/blog/renovation-ampleur-2026-accompagnateur-renov">
              Mon Accompagnateur Rénov' (MAR)
            </Link>
            , il peut souvent vous aider à structurer le dossier avant l'entretien France Rénov'.
          </p>

          <h2>Que se passe-t-il lors de l'entretien ?</h2>
          <p>
            Durant l'entretien, le conseiller France Rénov' va :
          </p>
          <ul>
            <li>Vérifier l'éligibilité de votre logement (classe DPE, statut d'occupant).</li>
            <li>Présenter les aides disponibles et estimer les montants auxquels vous pouvez prétendre.</li>
            <li>Expliquer le parcours de la rénovation d'ampleur, les étapes et les artisans RGE.</li>
            <li>
              Évaluer si le projet prévisionnel permet bien le gain de deux classes DPE minimum.
            </li>
          </ul>
          <p>
            À l'issue de cet entretien, une <strong>attestation de rendez-vous</strong> vous est
            remise. Ce document est indispensable : vous devrez le joindre à votre dossier
            MaPrimeRénov' lors du dépôt en ligne sur maprimerenov.gouv.fr. Sans lui, la demande
            sera rejetée.
          </p>

          <h2>Délais à prévoir</h2>
          <p>
            Depuis la réouverture du dispositif en février 2026, la demande de rendez-vous est
            soutenue. Dans les grandes agglomérations, les délais d'attente peuvent atteindre
            plusieurs semaines. Anticipez donc cette étape le plus tôt possible, avant même de
            contacter des artisans pour obtenir des devis.
          </p>
          <p>
            Le bon ordre est : <strong>France Rénov' → devis artisans RGE → dépôt MaPrimeRénov'
            (avec attestation) → démarrage des travaux</strong>. Ne commencer aucun chantier
            avant validation de la demande d'aide, sous peine de perdre le droit aux subventions.
          </p>

          <h2>Et pour la rénovation par geste ?</h2>
          <p>
            Si votre projet ne porte que sur un ou deux gestes — isolation des combles, chauffe-eau
            thermodynamique, pompe à chaleur — le parcours MaPrimeRénov' par geste reste ouvert
            sans rendez-vous préalable. Mais attention : au 1er septembre 2026,{' '}
            <Link to="/blog/maprimerenov-septembre-2026-gestes-suppression">
              plusieurs gestes sont supprimés de la liste éligible
            </Link>
            . Vérifiez bien que vos travaux sont encore financés avant de vous engager.
          </p>

          <h3>En résumé</h3>
          <ul>
            <li>Rendez-vous France Rénov' <strong>gratuit et obligatoire</strong> pour toute rénovation d'ampleur.</li>
            <li>Numéro gratuit : <strong>0 808 800 700</strong> · 614 espaces conseil en France.</li>
            <li>Formats disponibles : présentiel, visio ou téléphone.</li>
            <li>L'attestation délivrée est <strong>indispensable</strong> pour le dépôt MaPrimeRénov'.</li>
            <li>Anticipez : délais de plusieurs semaines dans les grandes villes.</li>
          </ul>
        </article>

        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Préparez votre dossier avec RenoHab</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            En tant qu'Accompagnateur Rénov' agréé, RenoHab vous aide à préparer l'entretien
            France Rénov', à monter votre dossier MaPrimeRénov' et à coordonner les artisans RGE.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/#simulator" className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all">
              Simuler mes aides
            </a>
            <a href="/dpe-gratuit" className="px-6 py-3 rounded-full border border-white/70 text-white font-semibold hover:bg-white/10 transition-all">
              Estimer mon DPE
            </a>
          </div>
        </div>
      </main>

      <ArticleFooter />
    </div>
  );
}
