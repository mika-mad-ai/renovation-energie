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

const PUBLISHED = '2026-07-19';
const PATH = '/blog/accompagnateur-renov-2026-guide';

export default function ArticleAccompagnateurRenov() {
  useSeo({
    title: "Mon Accompagnateur Rénov' en 2026 : rôle, obligation et comment bien choisir | RenoHab",
    description:
      "Le recours à un Accompagnateur Rénov' agréé est obligatoire pour tout parcours accompagné MaPrimeRénov'. Découvrez son rôle, son coût, sa prise en charge et nos conseils pour le choisir.",
    path: PATH,
    image: '/blog/accompagnateur-renov-2026-guide.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: "Mon Accompagnateur Rénov' en 2026 : rôle, obligation et comment bien choisir",
      description:
        "Le recours à un Accompagnateur Rénov' agréé est obligatoire pour tout parcours accompagné MaPrimeRénov'. Découvrez son rôle, son coût, sa prise en charge et nos conseils pour le choisir.",
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
      about: ["Mon Accompagnateur Rénov'", 'MaPrimeRénov', 'Rénovation énergétique', 'Aides travaux 2026'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 19 juillet 2026 · Aides &amp; accompagnement
          </p>

          <h1>Mon Accompagnateur Rénov' en 2026 : rôle, obligation et comment bien choisir</h1>

          <img
            src="/blog/accompagnateur-renov-2026-guide.jpg"
            alt="Conseiller en rénovation énergétique accompagnant un propriétaire"
            className="w-full rounded-xl object-cover mb-8"
            style={{ maxHeight: '420px' }}
          />

          <p className="lead">
            Depuis janvier 2024, toute demande MaPrimeRénov' dans le cadre du parcours accompagné — dit
            « rénovation d'ampleur » — est conditionnée au recours à un <strong>Accompagnateur Rénov' agréé
            Anah</strong> (MAR). En 2026, ce dispositif se renforce : rendez-vous obligatoire chez France
            Rénov', nouveaux formulaires d'agrément, et une prise en charge pouvant atteindre 100 % des
            frais pour les ménages modestes. Voici tout ce que vous devez savoir avant de lancer votre projet.
          </p>

          <h2>Qu'est-ce que l'Accompagnateur Rénov' ?</h2>
          <p>
            L'Accompagnateur Rénov' (MAR) est un professionnel indépendant agréé par l'Agence nationale de
            l'habitat (Anah). Sa mission couvre l'intégralité de votre projet de rénovation :
          </p>
          <ul>
            <li><strong>Diagnostic et scénario de travaux</strong> : il analyse votre logement, établit un plan
            de rénovation adapté à vos objectifs (gain de classe DPE, confort, budget) et identifie les
            gestes prioritaires.</li>
            <li><strong>Montage des dossiers d'aides</strong> : MaPrimeRénov', certificats d'économies d'énergie
            (CEE), Éco-PTZ, TVA à 5,5 %… le MAR constitue et dépose vos demandes auprès de l'Anah.</li>
            <li><strong>Sélection et coordination des artisans RGE</strong> : il vous aide à choisir des
            entreprises qualifiées et s'assure de la conformité des travaux réalisés.</li>
            <li><strong>Suivi post-travaux</strong> : il vérifie que les performances attendues sont bien
            atteintes et finalise le versement des aides.</li>
          </ul>
          <p>
            Point crucial : le MAR doit être <strong>totalement indépendant des entreprises</strong> qui
            interviennent sur votre chantier. Toute rémunération reçue d'un artisan entraînerait la perte
            immédiate de son agrément Anah.
          </p>

          <h2>Depuis quand est-il obligatoire, et pour quels projets ?</h2>
          <p>
            Le recours à un MAR est obligatoire depuis le <strong>1er janvier 2024</strong> pour tout projet
            entrant dans le <strong>parcours accompagné MaPrimeRénov'</strong>. Ce parcours concerne les
            rénovations dites « performantes » :
          </p>
          <ul>
            <li>Au moins deux gestes d'isolation thermique ;</li>
            <li>Un gain d'au moins deux classes au <a href="/dpe-gratuit">DPE</a> ;</li>
            <li>Le logement ne doit pas rester classé F ou G après travaux.</li>
          </ul>
          <p>
            En 2026, l'obligation s'est encore renforcée : depuis mars 2026, un <strong>rendez-vous
            personnalisé avec un conseiller France Rénov'</strong> est obligatoire avant tout dépôt de
            demande. Ce rendez-vous gratuit permet de valider le scénario de travaux et de s'assurer que le
            projet est cohérent avant d'engager des frais.
          </p>

          <h2>Combien ça coûte — et qui paye ?</h2>
          <p>
            Les tarifs de la prestation MAR sont libres, mais l'Anah plafonne la prise en charge à
            <strong> 2 000 € TTC</strong> pour un accompagnement standard (4 000 € TTC pour les situations
            d'habitat indigne ou de perte d'autonomie). En pratique, les MAR facturent entre 2 000 et
            2 800 € pour un projet complet.
          </p>
          <p>
            La bonne nouvelle : MaPrimeRénov' couvre une large part de ces frais, selon vos revenus :
          </p>
          <ul>
            <li><strong>Ménages très modestes</strong> : prise en charge à <strong>100 %</strong> — reste à charge nul.</li>
            <li><strong>Ménages modestes</strong> : prise en charge à <strong>80 %</strong> (soit 1 600 € sur 2 000 €).</li>
            <li><strong>Revenus intermédiaires</strong> : prise en charge à <strong>40 %</strong> (soit 800 €).</li>
            <li><strong>Revenus supérieurs</strong> : prise en charge à <strong>20 %</strong> (soit 400 €).</li>
          </ul>
          <p>
            Pour les ménages aux revenus très modestes et modestes, l'accompagnement est donc quasi gratuit — ce qui
            en fait un levier essentiel pour accéder aux aides les plus importantes du parcours accompagné.
          </p>

          <h2>Comment vérifier l'agrément d'un MAR ?</h2>
          <p>
            Avant de signer quoi que ce soit, vérifiez que votre Accompagnateur Rénov' dispose bien d'un
            <strong> agrément Anah en cours de validité</strong>. La liste officielle des opérateurs agréés est
            consultable sur le site{' '}
            <a href="https://france-renov.gouv.fr/preparer-projet/mon-accompagnateur-renov" target="_blank" rel="noopener noreferrer">
              France Rénov'
            </a>
            . Un MAR sans agrément ne permet pas d'accéder à MaPrimeRénov' dans le cadre du parcours
            accompagné.
          </p>
          <p>Quelques questions à poser avant de vous engager :</p>
          <ul>
            <li>Avez-vous des références de projets similaires dans ma région ?</li>
            <li>Comment garantissez-vous votre indépendance vis-à-vis des artisans ?</li>
            <li>Quel est votre délai moyen entre le premier rendez-vous et le dépôt de dossier ?</li>
            <li>Assurez-vous le suivi jusqu'au versement final des aides ?</li>
          </ul>

          <h2>Parcours accompagné ou par gestes : comment choisir ?</h2>
          <p>
            Si vous envisagez un seul geste de travaux — installer une{' '}
            <a href="/pompe-a-chaleur">pompe à chaleur</a> ou remplacer une fenêtre — vous n'avez pas besoin
            d'un MAR. Le parcours « par gestes » est accessible directement, sans accompagnement obligatoire.
          </p>
          <p>
            En revanche, dès que votre projet combine plusieurs postes de travaux (isolation + changement de
            chauffage, par exemple) et vise un saut de deux classes DPE, le parcours accompagné devient
            incontournable. C'est précisément là que l'investissement dans un bon MAR est le plus rentable :
            les aides du parcours accompagné peuvent représenter <strong>jusqu'à 90 % du montant total des
            travaux</strong> pour les ménages très modestes.
          </p>
          <p>
            Vous hésitez encore ? Le{' '}
            <a href="/#simulator">simulateur d'aides de RenoHab</a> vous permet d'estimer en quelques minutes
            les subventions auxquelles vous pouvez prétendre selon vos revenus et vos travaux envisagés.
          </p>

          <h2>RenoHab : votre Accompagnateur Rénov' agréé</h2>
          <p>
            RenoHab est un <strong>Accompagnateur Rénov' agréé par l'Anah</strong>. Nos conseillers
            interviennent de l'audit initial jusqu'au versement des aides, en coordonnant des artisans RGE
            sélectionnés pour leur sérieux et leurs délais. Notre objectif : que vous récupériez le maximum
            d'aides disponibles, avec un chantier livré dans les règles.
          </p>
        </article>

        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Lancez votre rénovation d'ampleur</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            Audit gratuit, montage des aides, coordination RGE : RenoHab vous accompagne à chaque étape
            du parcours accompagné MaPrimeRénov'.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/dpe-gratuit" className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all">
              Évaluer mon DPE
            </a>
            <a href="/#simulator" className="px-6 py-3 rounded-full border border-white/70 text-white font-semibold hover:bg-white/10 transition-all">
              Simuler mes aides
            </a>
          </div>
        </div>
      </main>

      <ArticleFooter />
    </div>
  );
}
