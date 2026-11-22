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

const PUBLISHED = '2026-11-22';
const PATH = '/blog/renovation-energetique-zone-abf-contraintes-solutions-2026';

export default function ArticleRenovationZoneABF2026() {
  useSeo({
    title: "Rénovation énergétique en zone ABF : contraintes, solutions et aides pour les logements protégés | RenoHab",
    description:
      "Votre logement est situé à moins de 500 m d'un monument historique ? Découvrez quels travaux d'économies d'énergie sont possibles, comment obtenir l'accord de l'ABF et quelles aides mobiliser en 2026.",
    path: PATH,
    image: '/blog/renovation-energetique-zone-abf-contraintes-solutions-2026.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline:
        "Rénovation énergétique en zone ABF : contraintes, solutions et aides pour les logements protégés en 2026",
      description:
        "Votre logement est situé à moins de 500 m d'un monument historique ? Découvrez quels travaux d'économies d'énergie sont possibles, comment obtenir l'accord de l'ABF et quelles aides mobiliser en 2026.",
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
      about: ['Rénovation énergétique', 'Zone ABF', 'Patrimoine', 'Isolation', 'Aides travaux'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 22 novembre 2026 · Patrimoine &amp; Réglementation
          </p>

          <h1>Rénovation énergétique en zone ABF : contraintes, solutions et aides pour les logements protégés en 2026</h1>

          <img
            src="/blog/renovation-energetique-zone-abf-contraintes-solutions-2026.jpg"
            alt="Façade d'une maison ancienne en pierre dans un périmètre de protection patrimoniale — zone ABF"
            className="w-full rounded-xl my-6 object-cover"
            loading="lazy"
          />

          <p className="lead">
            En France, des millions de logements sont situés dans le périmètre de protection d'un
            monument historique — ce que l'on appelle la <strong>zone ABF</strong> (Architecte des
            Bâtiments de France). Rénover pour économiser de l'énergie y est tout à fait possible,
            mais certains travaux en façade nécessitent un accord préalable. Voici le guide pratique
            pour rénover efficacement en respectant les règles du patrimoine.
          </p>

          <h2>Qu'est-ce qu'une zone ABF ?</h2>
          <p>
            La zone ABF désigne le périmètre de protection autour d'un monument historique classé
            ou inscrit. Par défaut, ce périmètre couvre un rayon de <strong>500 mètres</strong>{' '}
            autour du monument, limité aux bâtiments <em>visibles du monument</em> ou{' '}
            <em>visibles en même temps que lui</em>. Lorsqu'un{' '}
            <strong>Périmètre Délimité des Abords (PDA)</strong> a été approuvé, il remplace ce
            rayon par une délimitation sur mesure, plus précise.
          </p>
          <p>
            D'autres zonages patrimoniaux impliquent également l'intervention de l'ABF : les{' '}
            <strong>sites patrimoniaux remarquables</strong> (anciennes ZPPAUP et AVAP), les sites
            classés, et certains secteurs sauvegardés. Pour savoir si votre bien est concerné,
            consultez le{' '}
            <strong>Géoportail de l'urbanisme</strong> (géoportail-urbanisme.gouv.fr) ou
            l'Atlas des patrimoines (atlas.patrimoines.fr).
          </p>
          <p>
            Dans ces périmètres, tous les travaux <strong>modifiant l'aspect extérieur</strong>{' '}
            d'un bâtiment sont soumis à une déclaration préalable ou à un permis de construire, et
            nécessitent l'<strong>avis conforme</strong> de l'ABF — un avis qui s'impose à la
            mairie.
          </p>

          <h2>Quels travaux sont possibles sans accord de l'ABF ?</h2>
          <p>
            La bonne nouvelle pour les propriétaires est que la plupart des travaux d'économies
            d'énergie <strong>ne modifient pas l'aspect extérieur</strong> du logement et peuvent
            donc être réalisés librement, sans l'accord de l'ABF :
          </p>
          <ul>
            <li>
              <strong>Isolation thermique par l'intérieur (ITI)</strong> : pose de laine de verre,
              laine de roche ou isolants biosourcés sur les murs intérieurs — aucune contrainte
              patrimoniale.
            </li>
            <li>
              <strong>Isolation des combles perdus ou aménagés</strong> : par soufflage ou en
              sarking, dès lors que la toiture n'est pas modifiée en façade sur voie publique.
            </li>
            <li>
              <strong>Isolation du plancher bas</strong> : sur vide sanitaire ou sous-sol, sans
              aucun impact visuel.
            </li>
            <li>
              <strong>Remplacement du système de chauffage</strong> : installation d'une{' '}
              <a href="/pompe-a-chaleur">pompe à chaleur air/eau</a> (unité intérieure et tuyauteries),
              d'une chaudière à granulés, ou d'un plancher chauffant — travaux purement intérieurs.
            </li>
            <li>
              <strong>Ventilation (VMC double flux)</strong> : pose d'une centrale de ventilation
              et de gaines en combles ou sous dalle, sans incidence patrimoniale.
            </li>
            <li>
              <strong>Thermostat connecté et régulation</strong> : zéro contrainte.
            </li>
          </ul>
          <p>
            En pratique, une <strong>rénovation d'ampleur</strong> — combinant isolation des
            combles, isolation des murs par l'intérieur, nouvelle pompe à chaleur et VMC — est
            parfaitement réalisable en zone ABF, avec tous les gains thermiques et toutes les aides
            associées.
          </p>

          <h2>Travaux en façade : que dit l'ABF ?</h2>
          <p>
            Les travaux qui <strong>modifient l'aspect extérieur</strong> (façade sur rue,
            toiture, menuiseries visibles, équipements en saillie) requièrent une instruction avec
            avis de l'ABF. Voici ce qu'il faut savoir cas par cas :
          </p>

          <h3>Isolation thermique par l'extérieur (ITE)</h3>
          <p>
            L'ITE en façade <strong>sur voie publique</strong> est dans la grande majorité des
            cas refusée en zone ABF : elle modifie le nu du mur, les proportions des ouvertures
            et l'aspect général de la façade. En revanche, une ITE sur une{' '}
            <strong>façade arrière non visible</strong> de la voie publique ni du monument est
            souvent négociable, en particulier si les matériaux de finition s'intègrent
            harmonieusement.
          </p>
          <p>
            Un guide co-rédigé en 2026 par l'ADEME et les services ABF reconnaît qu'une ITE
            peut être envisageable lorsque la façade est dépourvue de décors architecturaux.
            La consultation préalable de l'ABF — avant tout dépôt de dossier — reste
            indispensable pour éviter un refus.
          </p>

          <h3>Remplacement des menuiseries</h3>
          <p>
            Le remplacement des fenêtres, portes et volets est généralement accepté à condition
            de conserver les <strong>matériaux et proportions d'origine</strong>. Le bois double
            vitrage à l'identique est la solution la plus souvent validée. Le PVC blanc standard
            est fréquemment refusé sur les façades de rue.
          </p>

          <h3>Unité extérieure de pompe à chaleur et panneaux solaires</h3>
          <p>
            L'unité extérieure d'une PAC air/eau ou air/air visible depuis la rue nécessite une
            déclaration préalable et l'accord de l'ABF. Positionnée sur une terrasse arrière, dans
            un jardin non visible ou en toiture non visible depuis l'espace public, l'installation
            est généralement acceptée. Les panneaux solaires thermiques ou photovoltaïques en
            toiture sur rue sont soumis aux mêmes règles.
          </p>

          <h2>Comment obtenir l'accord de l'ABF : le bon processus</h2>
          <p>
            Pour tout projet de travaux extérieurs en zone ABF, adoptez cette démarche en quatre
            étapes :
          </p>
          <ul>
            <li>
              <strong>1. Consultation préalable informelle</strong> : prenez rendez-vous à l'UDAP
              (Unité Départementale de l'Architecture et du Patrimoine) pour présenter votre
              projet avant de déposer quoi que ce soit. L'ABF peut indiquer les matériaux et
              techniques acceptables.
            </li>
            <li>
              <strong>2. Dossier de déclaration préalable</strong> : préparez un dossier
              photographique complet (façade actuelle, insertion du projet, échantillons de
              matériaux). Un architecte spécialisé dans le bâti ancien facilite souvent l'accord.
            </li>
            <li>
              <strong>3. Délai d'instruction</strong> : comptez environ <strong>2 mois</strong>{' '}
              pour une déclaration préalable en zone ABF (contre 1 mois hors zone). Un permis de
              construire peut prendre 3 à 4 mois.
            </li>
            <li>
              <strong>4. Recours en cas de refus</strong> : un refus de l'ABF peut faire l'objet
              d'un recours hiérarchique auprès du Préfet de région, puis d'un recours contentieux
              devant le tribunal administratif.
            </li>
          </ul>

          <h2>Quelles aides pour rénover en zone ABF ?</h2>
          <p>
            La zone ABF n'exclut <strong>aucune aide</strong> à la rénovation énergétique. Toutes
            les aides habituelles restent mobilisables :
          </p>
          <ul>
            <li>
              <strong>MaPrimeRénov' Parcours accompagné</strong> (rénovation d'ampleur) : jusqu'à
              70 % des travaux pris en charge pour les ménages modestes, dès lors que le logement
              gagne au moins deux classes DPE. Travaux intérieurs éligibles sans restriction
              patrimoniale. Pour les travaux de façade, l'accord préalable de l'ABF doit être
              obtenu avant le démarrage.
            </li>
            <li>
              <strong>Primes CEE</strong> (Certificats d'économies d'énergie) : accessibles pour
              l'isolation des combles, des murs par l'intérieur, du plancher bas, et pour la
              pompe à chaleur.
            </li>
            <li>
              <strong>Éco-PTZ</strong> : prêt à taux zéro jusqu'à 50 000 € pour financer le
              reste à charge des travaux.
            </li>
            <li>
              <strong>TVA réduite à 5,5 %</strong> sur tous les travaux d'amélioration de la
              performance énergétique, sans restriction liée à la zone ABF.
            </li>
            <li>
              <strong>Aides locales</strong> : certaines régions et collectivités accordent des
              subventions complémentaires, parfois majorées pour le bâti ancien patrimonial.
            </li>
          </ul>
          <p>
            Pour les travaux de menuiseries, notez que le remplacement des fenêtres n'est plus
            éligible au parcours par geste de MaPrimeRénov' depuis septembre 2026 — mais reste
            finançable via l'éco-PTZ et les CEE dans le cadre d'un bouquet de travaux.
          </p>

          <h2>L'accompagnement, clé du succès en zone protégée</h2>
          <p>
            Rénover en zone ABF demande un <strong>double niveau d'expertise</strong> : technique
            (identifier les solutions compatibles avec le bâti ancien) et administratif (préparer
            un dossier convaincant pour l'ABF et les services instructeurs). Un{' '}
            <a href="/blog">Accompagnateur Rénov'</a> agréé, comme RenoHab, peut coordonner
            l'ensemble : audit énergétique, dialogue avec l'ABF, sélection d'artisans RGE
            expérimentés en bâti patrimonial, et montage des dossiers d'aides.
          </p>
          <p>
            Avant tout dépôt, consultez notre{' '}
            <a href="/#simulateur">simulateur d'aides</a> pour évaluer le budget et les
            financements disponibles pour votre projet.
          </p>
        </article>

        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Rénover en zone protégée : faites-vous accompagner</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            RenoHab monte votre dossier ABF et vos demandes d'aides de A à Z — quel que soit le
            statut patrimonial de votre logement.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/dpe-gratuit" className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all">
              Évaluer mon logement
            </a>
            <a href="/pompe-a-chaleur" className="px-6 py-3 rounded-full border border-white/70 text-white font-semibold hover:bg-white/10 transition-all">
              Découvrir les solutions chauffage
            </a>
          </div>
        </div>
      </main>

      <ArticleFooter />
    </div>
  );
}
