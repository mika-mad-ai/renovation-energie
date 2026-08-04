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

const PUBLISHED = '2026-08-04';
const PATH = '/blog/renovation-ampleur-2026-accompagnateur-renov';

export default function ArticleRenovationAmpleur2026() {
  useSeo({
    title: "Rénovation d'ampleur 2026 : jusqu'à 80 % de vos travaux financés avec Mon Accompagnateur Rénov' | RenoHab",
    description:
      "Tout savoir sur MaPrimeRénov' Rénovation d'ampleur en 2026 : conditions, taux d'aide selon vos revenus (80 / 60 / 45 / 10 %), rôle obligatoire de l'Accompagnateur Rénov' et étapes pour démarrer.",
    path: PATH,
    image: `https://renohab.fr/blog/renovation-ampleur-2026-accompagnateur-renov.jpg`,
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline:
        "Rénovation d'ampleur 2026 : jusqu'à 80 % de vos travaux financés avec Mon Accompagnateur Rénov'",
      description:
        "Tout savoir sur MaPrimeRénov' Rénovation d'ampleur en 2026 : conditions, taux d'aide selon vos revenus, rôle de l'Accompagnateur Rénov' et démarches.",
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
      about: [
        "MaPrimeRénov' Rénovation d'ampleur",
        'Accompagnateur Rénov',
        'Rénovation énergétique',
        'Aides 2026',
      ],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 4 août 2026 · Aides &amp; financement
          </p>

          <h1>Rénovation d'ampleur 2026 : jusqu'à 80 % de vos travaux financés avec Mon Accompagnateur Rénov'</h1>

          <img
            src="/blog/renovation-ampleur-2026-accompagnateur-renov.jpg"
            alt="Maison rénovée après une rénovation d'ampleur en 2026"
            className="w-full rounded-xl shadow-soft mb-8 object-cover"
            style={{ maxHeight: '420px' }}
          />

          <p className="lead">
            Changer de chaudière ou isoler un mur, c'est bien. Transformer radicalement la
            performance de son logement, c'est encore mieux — et surtout, c'est là que les aides
            de l'État atteignent leur plafond. En 2026, le parcours <strong>MaPrimeRénov'
            Rénovation d'ampleur</strong> permet de financer jusqu'à 80 % du coût des travaux pour
            les ménages les plus modestes. La clé : gagner au moins deux classes au DPE avec
            l'accompagnement d'un Accompagnateur Rénov' agréé.
          </p>

          <h2>Qu'est-ce que la rénovation d'ampleur ?</h2>
          <p>
            La <strong>rénovation d'ampleur</strong> désigne un programme de travaux suffisamment
            complet pour faire sauter votre logement d'au moins deux lettres au
            Diagnostic de Performance Énergétique (DPE). Concrètement, un logement classé
            <strong> E</strong> doit atteindre au minimum le niveau <strong>C</strong> ; un
            logement classé <strong>G</strong> (passoire thermique) doit monter en{' '}
            <strong>E</strong> au minimum, voire plus haut.
          </p>
          <p>
            Pour y parvenir, il faut généralement combiner plusieurs postes de travaux :
          </p>
          <ul>
            <li>
              <strong>Isolation thermique</strong> : combles, murs, planchers — souvent la
              première étape, car elle supprime les déperditions à la source.
            </li>
            <li>
              <strong>Remplacement du système de chauffage</strong> : passage d'une chaudière
              au fioul ou au gaz vers une{' '}
              <a href="/pompe-a-chaleur">pompe à chaleur air/eau</a>, dont le coefficient de
              performance (COP) peut atteindre 4 ou 5.
            </li>
            <li>
              <strong>Ventilation double flux (VMC)</strong> : pour renouveler l'air sans perdre
              la chaleur gagnée par l'isolation.
            </li>
            <li>
              <strong>Remplacement des menuiseries</strong> : fenêtres à double ou triple
              vitrage pour limiter les ponts thermiques.
            </li>
          </ul>
          <p>
            Le bouquet exact est défini dans un <strong>audit énergétique</strong> du logement,
            document obligatoire pour accéder à ce parcours. Cet audit identifie les travaux
            prioritaires, chiffre les gains attendus et propose plusieurs scénarios avec leur
            retour sur investissement.
          </p>

          <h2>Combien peut-on recevoir ? Les taux 2026 selon les revenus</h2>
          <p>
            L'aide de l'Anah se calcule en appliquant un <strong>taux</strong> à un plafond de
            dépenses subventionnables (hors taxes) :
          </p>
          <ul>
            <li>
              <strong>30 000 € HT</strong> de travaux pris en compte pour un saut de 2 classes
              au DPE.
            </li>
            <li>
              <strong>40 000 € HT</strong> pour un saut de 3 classes ou plus.
            </li>
          </ul>
          <p>
            Les taux varient selon la catégorie de revenus du ménage (barème Anah 2026) :
          </p>
          <ul>
            <li>
              <strong>Ménages très modestes : 80 %</strong> → jusqu'à 24 000 € (2 classes) ou
              32 000 € (3 classes et plus).
            </li>
            <li>
              <strong>Ménages modestes : 60 %</strong> → jusqu'à 18 000 € ou 24 000 €.
            </li>
            <li>
              <strong>Ménages intermédiaires : 45 %</strong> → jusqu'à 13 500 € ou 18 000 €.
            </li>
            <li>
              <strong>Ménages supérieurs : 10 %</strong> → jusqu'à 3 000 € ou 4 000 €.
            </li>
          </ul>
          <p>
            À ces montants s'ajoute la prise en charge partielle des honoraires de
            l'Accompagnateur Rénov' (voir ci-dessous). Le total de l'ensemble des aides
            publiques est plafonné respectivement à 100, 90, 80 et 50 % du coût total des
            travaux selon la catégorie de revenus, afin d'éviter tout « reste à charge »
            négatif.
          </p>

          <h2>L'Accompagnateur Rénov' (MAR) : obligatoire et en partie pris en charge</h2>
          <p>
            Depuis 2024, le recours à un <strong>Accompagnateur Rénov' agréé par l'État</strong>{' '}
            (dit « MAR ») est obligatoire pour accéder au parcours Rénovation d'ampleur.
            En 2026, une nouvelle étape s'ajoute : avant de déposer la demande de prime,
            vous devez prendre rendez-vous avec un conseiller{' '}
            <strong>France Rénov'</strong> pour valider votre projet.
          </p>
          <p>L'Accompagnateur Rénov' prend en charge plusieurs missions essentielles :</p>
          <ul>
            <li>Organisation et analyse de l'audit énergétique.</li>
            <li>
              Élaboration du scénario de travaux et sélection des artisans{' '}
              <strong>RGE</strong> (Reconnu Garant de l'Environnement).
            </li>
            <li>Vérification de la cohérence des devis.</li>
            <li>
              Montage et suivi du dossier MaPrimeRénov', CEE et Éco-PTZ auprès des
              organismes concernés.
            </li>
            <li>Contrôle de la bonne réalisation des travaux.</li>
          </ul>
          <p>
            Ses honoraires sont partiellement financés par l'Anah : jusqu'à{' '}
            <strong>2 000 €</strong> pour les ménages très modestes et modestes,{' '}
            <strong>1 000 €</strong> pour les autres catégories. RenoHab est Accompagnateur
            Rénov' agréé : nous pilotons l'intégralité du processus, de l'audit à la réception
            des travaux. <a href="/#simulator">Utilisez notre simulateur</a> pour estimer le
            montant de vos aides en quelques minutes.
          </p>

          <h2>Cumuler les aides : le trio gagnant pour financer votre rénovation</h2>
          <p>
            MaPrimeRénov' Rénovation d'ampleur n'est pas la seule aide mobilisable. Le parcours
            accompagné permet de cumuler plusieurs dispositifs :
          </p>
          <ul>
            <li>
              <strong>Primes CEE</strong> (Certificats d'Économie d'Énergie) : versées par les
              fournisseurs d'énergie, cumulables avec MaPrimeRénov'. Elles peuvent représenter
              plusieurs milliers d'euros selon les travaux réalisés.
            </li>
            <li>
              <strong>Éco-PTZ</strong> (prêt à taux zéro) : jusqu'à 50 000 € sans intérêts,
              remboursables sur 20 ans. Idéal pour financer le reste à charge sans sortir de
              trésorerie.
            </li>
            <li>
              <strong>TVA à 5,5 %</strong> : applicable à tous les travaux de rénovation
              énergétique dans les logements achevés depuis plus de 2 ans — l'artisan l'applique
              directement sur la facture, sans démarche supplémentaire de votre part.
            </li>
          </ul>
          <p>
            En combinant ces dispositifs, un ménage très modeste peut voir son reste à charge
            tomber à <strong>zéro</strong> pour une rénovation complète. Un ménage intermédiaire
            peut financer jusqu'à 80 % de son projet toutes aides confondues.
          </p>

          <h2>Exemple chiffré : maison G vers D</h2>
          <p>
            Prenons une maison classée <strong>G</strong>, avec un devis de travaux à
            <strong> 38 000 € HT</strong> (isolation combles + murs + pompe à chaleur) visant
            une classe <strong>D</strong> (saut de 3 classes). Pour un ménage modeste :
          </p>
          <ul>
            <li>
              Plafond de travaux pris en compte : <strong>40 000 € HT</strong> (saut ≥ 3
              classes).
            </li>
            <li>
              Taux MaPrimeRénov' : <strong>60 %</strong> → aide = 60 % × 38 000 = environ{' '}
              <strong>22 800 €</strong>.
            </li>
            <li>
              Primes CEE estimées : <strong>3 000 à 5 000 €</strong> selon les travaux.
            </li>
            <li>
              Reste à charge avant Éco-PTZ : environ <strong>10 200 €</strong>, finançable à
              taux zéro sur 15 ans (≈ 57 €/mois).
            </li>
          </ul>
          <p>
            <em>
              Ces montants sont indicatifs ; les barèmes exacts dépendent de la composition du
              foyer, du département et des travaux retenus.
            </em>
          </p>

          <h2>Les étapes concrètes pour démarrer</h2>
          <ol>
            <li>
              <strong>Prise de rendez-vous France Rénov'</strong> : gratuit, obligatoire depuis
              2026. Le conseiller valide l'éligibilité et oriente vers un MAR agréé.
            </li>
            <li>
              <strong>Audit énergétique</strong> du logement par un auditeur certifié :
              document socle du dossier. <a href="/dpe-gratuit">Obtenez une estimation de
              votre DPE actuel</a> sur RenoHab pour préparer ce rendez-vous.
            </li>
            <li>
              <strong>Choix du scénario de travaux</strong> avec votre Accompagnateur Rénov' :
              sélection des gestes, recueil de devis auprès d'artisans RGE.
            </li>
            <li>
              <strong>Dépôt de la demande de prime</strong> sur le portail MaPrimeRénov' avant
              le début des travaux.
            </li>
            <li>
              <strong>Réalisation des travaux</strong> et visite de contrôle post-chantier.
            </li>
            <li>
              <strong>Versement des aides</strong> à la fin du chantier, sur présentation des
              factures.
            </li>
          </ol>
          <p>
            La rénovation d'ampleur est un projet de plusieurs mois, mais les économies annuelles
            sur les factures d'énergie — souvent comprises entre <strong>500 et 2 000 €/an</strong>{' '}
            selon la taille du logement et les travaux — en font l'investissement le plus rentable
            à long terme.
          </p>
        </article>

        {/* CTA RenoHab */}
        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">
            Calculez vos aides pour une rénovation d'ampleur
          </h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            Audit, scénario de travaux, montage des dossiers CEE et MaPrimeRénov' : RenoHab
            accompagne votre projet de A à Z en tant qu'Accompagnateur Rénov' agréé.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/dpe-gratuit"
              className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all"
            >
              Estimer mon DPE
            </a>
            <a
              href="/pompe-a-chaleur"
              className="px-6 py-3 rounded-full border border-white/70 text-white font-semibold hover:bg-white/10 transition-all"
            >
              Découvrir la pompe à chaleur
            </a>
          </div>
        </div>
      </main>

      <ArticleFooter />
    </div>
  );
}
