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

const PUBLISHED = '2026-11-12';
const PATH = '/blog/pompe-a-chaleur-appartement-copropriete-2026';

export default function ArticlePompeAChaleurAppartement2026() {
  useSeo({
    title: "Pompe à chaleur en appartement : autorisations, démarches et aides en copropriété (2026) | RenoHab",
    description:
      "Installer une pompe à chaleur dans un appartement en copropriété est possible : voici les autorisations à obtenir, les modèles adaptés et les aides disponibles en 2026.",
    path: PATH,
    image: '/blog/pompe-a-chaleur-appartement-copropriete-2026.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline:
        "Pompe à chaleur en appartement : autorisations, démarches et aides en copropriété (2026)",
      description:
        "Installer une pompe à chaleur dans un appartement en copropriété est possible : voici les autorisations à obtenir, les modèles adaptés et les aides disponibles en 2026.",
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
      about: ['Pompe à chaleur', 'Copropriété', 'Rénovation énergétique', 'Aides financières'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 12 novembre 2026 · Chauffage
          </p>

          <h1>Pompe à chaleur en appartement : autorisations, démarches et aides en copropriété (2026)</h1>

          <img
            src="/blog/pompe-a-chaleur-appartement-copropriete-2026.jpg"
            alt="Unité extérieure de pompe à chaleur installée sur un balcon d'appartement en copropriété"
            className="w-full rounded-xl shadow-soft my-6"
            loading="lazy"
          />

          <p className="lead">
            Les pompes à chaleur ne sont pas réservées aux maisons individuelles. En appartement, il
            est tout à fait possible d'installer un système de chauffage ou de climatisation réversible
            basé sur ce principe — à condition de respecter quelques règles propres à la copropriété.
            Tour d'horizon des modèles adaptés, des autorisations nécessaires et des aides financières
            disponibles en 2026.
          </p>

          <h2>Quelle pompe à chaleur pour un appartement ?</h2>
          <p>
            Deux grandes familles de PAC sont envisageables en appartement :
          </p>
          <ul>
            <li>
              <strong>La PAC air/air réversible (climatiseur réversible)</strong> : c'est la solution
              la plus courante en appartement. Une unité intérieure (split) diffuse l'air chaud ou
              frais dans une pièce, tandis qu'une unité extérieure extrait ou rejette l'air. Elle peut
              couvrir plusieurs pièces avec un système <em>multi-split</em>. Son point faible : elle
              souffle de l'air sec et n'alimente pas les radiateurs à eau existants.
            </li>
            <li>
              <strong>La PAC air/eau</strong> : elle chauffe l'eau d'un circuit de chauffage central
              (plancher chauffant, radiateurs à basse température). Elle est adaptée aux appartements
              bénéficiant d'un chauffage individuel à eau. Plus rare en appartement, elle est en
              revanche très pertinente pour les immeubles en rénovation globale.
            </li>
          </ul>
          <p>
            À noter : depuis le 1er septembre 2026, la{' '}
            <strong>PAC air/air n'est plus éligible à MaPrimeRénov'</strong> dans le cadre du
            parcours par geste. Seules les PAC air/eau et géothermiques restent financées à ce titre.
          </p>

          <h2>Les autorisations nécessaires en copropriété</h2>
          <p>
            Installer une PAC en appartement touche souvent aux parties communes ou à l'aspect
            extérieur de l'immeuble (façade, terrasse). Cela implique des démarches spécifiques.
          </p>

          <h3>Vérifiez d'abord le règlement de copropriété</h3>
          <p>
            Avant toute démarche, lisez attentivement votre règlement de copropriété. Certains
            règlements interdisent explicitement la pose d'équipements sur les façades ou imposent
            des règles esthétiques strictes. Si l'unité extérieure est posée sur une terrasse
            privative sans modification de l'aspect extérieur, les démarches peuvent être allégées —
            mais une information préalable au syndic reste conseillée.
          </p>

          <h3>Vote en assemblée générale</h3>
          <p>
            Dès que l'unité extérieure est fixée sur une partie commune (mur de façade, toiture,
            balcon d'aspect commun) ou modifie l'apparence de l'immeuble, un{' '}
            <strong>vote en assemblée générale est obligatoire</strong>. Selon la loi du 10 juillet
            1965, ce type de travaux privatifs affectant l'aspect de l'immeuble relève généralement
            de la <strong>majorité absolue de l'article 25</strong> (majorité de tous les
            copropriétaires, présents, représentés ou absents). Si cette majorité n'est pas atteinte
            mais que le vote recueille au moins un tiers des voix, un second vote à la majorité
            simple de l'article 24 peut être organisé immédiatement.
          </p>
          <p>
            Conseil pratique : soumettez le projet en amont au syndic avec un devis d'un installateur
            RGE QualiPAC, les caractéristiques acoustiques de l'unité extérieure et un plan de pose.
            Un dossier bien préparé facilite l'acceptation en AG.
          </p>

          <h3>Contraintes acoustiques</h3>
          <p>
            L'unité extérieure doit respecter les seuils réglementaires de bruit. La réglementation
            française impose de ne pas dépasser une émergence de <strong>+5 dB(A) le jour</strong>{' '}
            et <strong>+3 dB(A) la nuit</strong> par rapport au bruit ambiant (article R1336-6 du
            code de la santé publique). Les fabricants sérieux publient les données acoustiques de
            leurs équipements : choisissez un modèle basse nuisance (généralement ≤ 40–45 dB(A)) et
            faites poser l'unité sur silent-blocs antivibratoires.
          </p>

          <h2>Les aides financières disponibles en 2026</h2>
          <p>
            Même en appartement, plusieurs dispositifs permettent de réduire significativement le
            coût d'installation.
          </p>

          <h3>MaPrimeRénov' (parcours par geste)</h3>
          <p>
            Pour une PAC air/eau installée dans un appartement individuel (chauffage à eau existant),
            les montants accordés par l'ANAH sont les mêmes que pour une maison :
          </p>
          <ul>
            <li><strong>Ménages très modestes</strong> (couleur bleue) : jusqu'à <strong>5 000 €</strong></li>
            <li><strong>Ménages modestes</strong> (couleur jaune) : jusqu'à <strong>4 000 €</strong></li>
            <li><strong>Ménages intermédiaires</strong> (couleur violet) : jusqu'à <strong>3 000 €</strong></li>
            <li><strong>Ménages supérieurs</strong> (couleur rose) : non éligibles au parcours par geste depuis septembre 2026</li>
          </ul>
          <p>
            Rappel important : le dossier MaPrimeRénov' doit être déposé{' '}
            <strong>avant le début des travaux</strong>, et l'installateur doit être certifié{' '}
            <strong>RGE QualiPAC</strong>. Un{' '}
            <a href="/blog/rendez-vous-france-renov-maprimerenov-2026">
              rendez-vous avec un conseiller France Rénov'
            </a>{' '}
            est obligatoire pour accéder au parcours accompagné (rénovation d'ampleur), mais reste
            facultatif pour le geste isolé.
          </p>

          <h3>MaPrimeRénov' Copropriétés</h3>
          <p>
            Si l'immeuble entier décide de passer à une PAC collective (système de chauffage
            commun), la copropriété peut bénéficier de{' '}
            <strong>MaPrimeRénov' Copropriétés</strong>, qui finance jusqu'à 45 % des travaux de
            rénovation globale avec un plafond de 25 000 € par logement. Cette voie est
            particulièrement pertinente pour les immeubles classés E, F ou G au{' '}
            <a href="/dpe-gratuit">DPE collectif</a>.
          </p>

          <h3>Éco-PTZ (prêt à taux zéro)</h3>
          <p>
            L'éco-PTZ est accessible aux propriétaires occupants et bailleurs, sans condition de
            revenus, pour financer l'installation d'une PAC. Le plafond est de{' '}
            <strong>15 000 €</strong> pour ce geste seul, et peut monter jusqu'à 50 000 € si
            plusieurs gestes sont combinés dans une rénovation globale. La durée de remboursement
            peut aller jusqu'à 20 ans.
          </p>

          <h3>Prime CEE (Certificats d'Économies d'Énergie)</h3>
          <p>
            En complément des aides publiques, les obligés (EDF, Engie, TotalEnergies…) versent une
            prime CEE pour l'installation d'une PAC performante, que ce soit en maison ou en
            appartement. Depuis le 1er septembre 2026, la{' '}
            <strong>prime « Coup de pouce chauffage »</strong> est réservée aux installateurs
            disposant de l'agrément PAC correspondant. Vérifiez que votre artisan est bien agréé.
          </p>

          <h3>TVA à 5,5 %</h3>
          <p>
            Les travaux d'installation d'une PAC dans un logement achevé depuis plus de 2 ans
            bénéficient de la <strong>TVA réduite à 5,5 %</strong> (au lieu de 20 %). C'est une
            économie automatique sur la facture de l'installateur.
          </p>

          <h2>Étapes pratiques pour se lancer</h2>
          <ul>
            <li>
              <strong>1. Faire réaliser un bilan thermique</strong> de l'appartement pour dimensionner
              correctement la PAC (puissance nécessaire selon la surface, l'isolation existante et
              l'orientation).
            </li>
            <li>
              <strong>2. Obtenir plusieurs devis</strong> d'installateurs certifiés RGE QualiPAC,
              avec les données acoustiques du modèle proposé.
            </li>
            <li>
              <strong>3. Consulter le syndic et soumettre le projet</strong> à l'assemblée générale
              si l'unité extérieure touche aux parties communes ou à l'aspect extérieur.
            </li>
            <li>
              <strong>4. Déposer le dossier MaPrimeRénov'</strong> sur maprimerenov.gouv.fr avant
              la signature du devis de travaux.
            </li>
            <li>
              <strong>5. Faire réaliser les travaux</strong> et conserver toutes les factures pour
              le déblocage des aides.
            </li>
          </ul>

          <p>
            En tant qu'Accompagnateur Rénov', <strong>RenoHab</strong> peut vous aider à monter votre
            dossier d'aides, identifier les installateurs RGE de votre secteur et maximiser le cumul
            des financements disponibles. Utilisez notre{' '}
            <a href="/">simulateur d'aides</a> pour estimer en quelques minutes votre reste à charge.
          </p>

          <h2>Ce qu'il faut retenir</h2>
          <p>
            Installer une <a href="/pompe-a-chaleur">pompe à chaleur</a> en appartement est
            réalisable, mais demande plus de préparation qu'en maison individuelle. Les points clés :
            vérifier le règlement de copropriété, obtenir l'accord de l'AG si nécessaire, choisir un
            modèle silencieux, et s'appuyer sur un installateur RGE pour accéder aux aides. Avec
            MaPrimeRénov', l'éco-PTZ et la prime CEE, le financement peut couvrir une part
            substantielle de l'investissement — même pour un seul appartement.
          </p>
        </article>

        {/* CTA RenoHab */}
        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Votre PAC en appartement, financée au maximum</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            RenoHab monte votre dossier MaPrimeRénov' et coordonne les démarches en copropriété.
            Obtenez votre estimation gratuite en 2 minutes.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/pompe-a-chaleur" className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all">
              Découvrir nos PAC
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
