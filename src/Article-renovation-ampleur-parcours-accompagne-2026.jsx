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

const PUBLISHED = '2026-07-11';
const PATH = '/blog/renovation-ampleur-parcours-accompagne-2026';

export default function ArticleRenovationAmpleur2026() {
  useSeo({
    title: "Rénovation d'ampleur en 2026 : le guide du parcours accompagné | RenoHab",
    description:
      "Qu'est-ce que la rénovation d'ampleur ? Conditions, montants d'aides MaPrimeRénov', rôle de l'Accompagnateur Rénov' et étapes clés du parcours accompagné en 2026.",
    path: PATH,
    image: '/blog/renovation-ampleur-parcours-accompagne-2026.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline:
        "Rénovation d'ampleur en 2026 : le guide complet du parcours accompagné",
      description:
        "Qu'est-ce que la rénovation d'ampleur ? Conditions, montants d'aides MaPrimeRénov', rôle de l'Accompagnateur Rénov' et étapes clés du parcours accompagné en 2026.",
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
      about: ['Rénovation d\'ampleur', 'Parcours accompagné', 'MaPrimeRénov\'', 'Accompagnateur Rénov\''],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 11 juillet 2026 · Aides &amp; financement
          </p>

          <h1>Rénovation d'ampleur en 2026 : le guide complet du parcours accompagné</h1>

          <img
            src="/blog/renovation-ampleur-parcours-accompagne-2026.jpg"
            alt="Maison en cours de rénovation énergétique globale"
            className="w-full rounded-xl object-cover max-h-80 mb-8"
            loading="eager"
          />

          <p className="lead">
            La rénovation d'ampleur, c'est la voie la plus ambitieuse — et la mieux financée — de
            la rénovation énergétique en France. Elle exige un accompagnement professionnel et un
            vrai projet de transformation, mais en contrepartie elle ouvre droit aux aides
            MaPrimeRénov' les plus élevées. Voici ce qu'il faut savoir en 2026 pour se lancer avec
            les bonnes informations.
          </p>

          <h2>Qu'est-ce que la rénovation d'ampleur ?</h2>
          <p>
            La rénovation d'ampleur (aussi appelée « parcours accompagné ») désigne un projet de
            travaux qui permet au logement de gagner <strong>au moins deux classes DPE</strong> —
            par exemple passer de F à D, ou de G à E. Elle se distingue du simple « geste par
            geste » (isolation d'un seul poste, remplacement d'une chaudière) en imposant une
            approche globale et cohérente.
          </p>
          <p>
            Concrètement, le projet doit inclure{' '}
            <strong>au moins deux gestes d'isolation</strong> (combles, murs, planchers ou
            menuiseries) et généralement un renouvellement du système de chauffage, comme une{' '}
            <a href="/pompe-a-chaleur">pompe à chaleur air/eau</a>. L'objectif : traiter les
            causes profondes de la passoire, pas seulement les symptômes.
          </p>

          <h2>Qui peut y prétendre ?</h2>
          <p>Trois conditions s'appliquent au logement :</p>
          <ul>
            <li>Être classé <strong>E, F ou G</strong> au Diagnostic de Performance Énergétique (DPE).</li>
            <li>Avoir <strong>plus de 15 ans</strong> (date de construction ou d'achèvement).</li>
            <li>Permettre un <strong>gain d'au moins 2 classes DPE</strong> à l'issue des travaux.</li>
          </ul>
          <p>
            Contrairement au parcours par geste, la rénovation d'ampleur est accessible à{' '}
            <strong>toutes les tranches de revenus</strong>, y compris les ménages dits
            « supérieurs » (profil Rose) — mais avec des taux et conditions différents (voir
            ci-dessous). Si vous ne connaissez pas encore la classe actuelle de votre logement,
            un <a href="/dpe-gratuit">DPE estimatif gratuit</a> vous donnera un premier repère.
          </p>

          <h2>Des aides qui peuvent couvrir jusqu'à 80 % du chantier</h2>
          <p>
            MaPrimeRénov' dans le parcours accompagné finance un pourcentage du coût HT des
            travaux, dans la limite de deux plafonds de dépenses éligibles :
          </p>
          <ul>
            <li>
              <strong>30 000 € HT</strong> pour un gain de 2 classes DPE.
            </li>
            <li>
              <strong>40 000 € HT</strong> pour un gain de 3 classes ou plus.
            </li>
          </ul>
          <p>
            Le taux de prise en charge dépend de vos revenus (barème ANAH) : les ménages très
            modestes (profil Bleu) bénéficient du taux le plus généreux — jusqu'à{' '}
            <strong>80 % du coût HT</strong>, soit une aide pouvant atteindre{' '}
            <strong>32 000 €</strong> pour un gain de 3 classes ou plus. Les ménages modestes et
            intermédiaires accèdent à des taux inférieurs. Les ménages supérieurs (profil Rose),
            eux, n'y ont droit que s'ils visent un gain d'au moins 3 classes, avec un taux limité
            à 10 %.
          </p>
          <p>
            <strong>Attention :</strong> par rapport à 2024-2025, les montants ont été revus à la
            baisse et le bonus « sortie de passoire » a été supprimé. Pour connaître votre aide
            personnalisée, utilisez le{' '}
            <a href="/#simulateur">simulateur RenoHab</a> ou consultez directement
            France Rénov'.
          </p>
          <p>
            Ces aides se cumulent avec les <strong>primes CEE</strong> (Certificats
            d'Économies d'Énergie, versées par les fournisseurs d'énergie) et avec l'
            <strong>Éco-Prêt à Taux Zéro</strong> (Éco-PTZ, jusqu'à 50 000 € sans intérêts)
            pour financer le reste à charge.
          </p>

          <h2>Le rôle clé de l'Accompagnateur Rénov' (MAR)</h2>
          <p>
            Pour toute demande dans le cadre du parcours accompagné, le recours à un{' '}
            <strong>Mon Accompagnateur Rénov' (MAR) agréé ANAH</strong> est{' '}
            <strong>obligatoire</strong>, quel que soit votre profil de revenus.
          </p>
          <p>
            Son rôle est central : il réalise l'audit énergétique du logement, construit avec vous
            le plan de travaux optimal (ordre des gestes, artisans RGE à mobiliser), monte les
            dossiers d'aides auprès de l'ANAH et assure le suivi jusqu'à la réception du chantier.
            Sa mission est financée en grande partie par les aides publiques.
          </p>
          <p>
            En tant qu'<strong>Accompagnateur Rénov' agréé</strong>, RenoHab assure exactement
            cette mission — de l'audit initial à la clôture des dossiers d'aides — en s'appuyant
            sur un réseau d'artisans certifiés RGE.
          </p>

          <h2>Les étapes du parcours accompagné</h2>
          <ol>
            <li>
              <strong>Audit énergétique</strong> — le MAR visite le logement et établit un
              diagnostic complet (déperditions, classe DPE, scénarios de travaux).
            </li>
            <li>
              <strong>Rendez-vous France Rénov'</strong> — depuis 2026, ce rendez-vous avec un
              conseiller France Rénov' est <em>obligatoire</em> avant le dépôt de la demande
              d'aide, afin de valider la cohérence du projet.
            </li>
            <li>
              <strong>Dépôt du dossier MaPrimeRénov'</strong> — via la plateforme ANAH (le MAR
              peut déposer à votre place). Comptez environ 3 à 6 mois pour l'instruction du
              dossier en 2026, en raison du volume de demandes accumulées.
            </li>
            <li>
              <strong>Réalisation des travaux</strong> — par des artisans certifiés RGE,
              sélectionnés et coordonnés avec l'appui du MAR.
            </li>
            <li>
              <strong>Versement de l'aide</strong> — après vérification de la conformité des
              travaux et du gain de classes DPE effectivement atteint.
            </li>
          </ol>

          <h2>Ce qui a changé en 2026 : points de vigilance</h2>
          <ul>
            <li>
              <strong>Réouverture le 23 février 2026 :</strong> le guichet MaPrimeRénov' avait été
              suspendu début 2026 dans l'attente de la loi de finances. Il est désormais
              pleinement opérationnel.
            </li>
            <li>
              <strong>Montants revus :</strong> les taux de prise en charge ont baissé d'environ
              50 % pour les ménages modestes par rapport aux barèmes 2024-2025.
            </li>
            <li>
              <strong>Bonus supprimé :</strong> le bonus « sortie de passoire » de 10 % applicable
              aux logements F et G n'existe plus.
            </li>
            <li>
              <strong>Logements C et D exclus :</strong> seuls les logements classés E, F ou G
              peuvent accéder au parcours accompagné. Un bien déjà bien classé ne peut pas en
              bénéficier.
            </li>
          </ul>

          <h2>Par où commencer ?</h2>
          <p>
            La première étape concrète reste d'évaluer la situation réelle de votre logement.
            Un <a href="/dpe-gratuit">DPE estimatif gratuit</a> permet de savoir si vous êtes
            dans la cible, et notre <a href="/#simulateur">simulateur d'aides</a> vous donne
            une première estimation du financement accessible. Ensuite, un audit réalisé par votre
            Accompagnateur Rénov' affine le plan et engage le processus de manière sécurisée.
          </p>
        </article>

        {/* CTA RenoHab */}
        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">
            Lancez votre rénovation d'ampleur avec RenoHab
          </h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            Accompagnateur Rénov' agréé ANAH : audit, plan de travaux, dossiers d'aides et
            coordination d'artisans RGE — on s'occupe de tout.
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
