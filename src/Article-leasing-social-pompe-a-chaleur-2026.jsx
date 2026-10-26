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

const PUBLISHED = '2026-10-26';
const PATH = '/blog/leasing-social-pompe-a-chaleur-2026';

export default function ArticleLeasingSocialPompeAChaleur2026() {
  useSeo({
    title: "Leasing social pompe à chaleur 2026 : conditions, reste à charge et démarches | RenoHab",
    description:
      "Le leasing social PAC est ouvert depuis le 1er octobre 2026. Ménages modestes propriétaires de maisons au fioul ou au gaz : voici les conditions d'éligibilité, le fonctionnement du contrat et les démarches pour en profiter.",
    path: PATH,
    image: '/blog/leasing-social-pompe-a-chaleur-2026.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline:
        "Leasing social pompe à chaleur 2026 : la nouvelle aide pour les ménages modestes",
      description:
        "Le leasing social PAC est ouvert depuis le 1er octobre 2026. Conditions, reste à charge, démarches : tout ce qu'il faut savoir.",
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
      about: ['Leasing social PAC', 'Pompe à chaleur', 'Aides rénovation énergétique', 'Ménages modestes'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 26 oct. 2026 · Aides rénovation
          </p>

          <h1>Leasing social pompe à chaleur 2026 : la nouvelle aide pour les ménages modestes</h1>

          <img
            src="/blog/leasing-social-pompe-a-chaleur-2026.jpg"
            alt="Unité extérieure de pompe à chaleur installée sur une maison individuelle — leasing social PAC 2026"
            className="w-full rounded-xl shadow-card mb-8"
            loading="lazy"
          />

          <p className="lead">
            Depuis le <strong>1er octobre 2026</strong>, un nouveau dispositif permet aux ménages
            modestes de remplacer leur chaudière au fioul ou au gaz par une pompe à chaleur, avec
            un reste à charge de l'ordre de <strong>1 000 à 1 500 €</strong> seulement. Ce «
            leasing social PAC » est financé par les Certificats d'Économie d'Énergie (CEE) et
            vise 55 000 installations d'ici fin 2028.
          </p>

          <h2>Qu'est-ce que le leasing social pompe à chaleur ?</h2>
          <p>
            Inspiré du leasing social voiture lancé en 2024, ce dispositif permet aux ménages
            éligibles d'accéder à une <a href="/pompe-a-chaleur">pompe à chaleur air/eau</a> neuve
            sans avoir à avancer le coût total de l'installation. Le contrat regroupe en un seul
            engagement mensuel :
          </p>
          <ul>
            <li>l'installation complète de la PAC par un installateur agréé ;</li>
            <li>la maintenance et l'entretien pendant toute la durée du contrat ;</li>
            <li>le financement par crédit (vous devenez propriétaire de l'équipement immédiatement) ;</li>
            <li>dans certaines offres, un contrat d'électricité associé pour piloter la PAC de façon optimisée.</li>
          </ul>
          <p>
            Il ne s'agit <strong>pas</strong> d'un contrat de location avec option d'achat (LOA) :
            la pompe à chaleur vous appartient dès l'installation. Le terme « leasing » désigne ici
            le paiement échelonné, avec une mensualité conçue pour être inférieure ou égale à
            l'ancienne facture de chauffage.
          </p>

          <h2>Qui peut en bénéficier ?</h2>

          <h3>Conditions sur le logement</h3>
          <ul>
            <li>Résidence principale, en <strong>maison individuelle</strong>.</li>
            <li>Chauffage actuel au <strong>fioul ou au gaz naturel</strong>.</li>
            <li>Surface et configuration compatibles avec une PAC air/eau (critères vérifiés lors de la visite technique gratuite).</li>
          </ul>

          <h3>Conditions de revenus</h3>
          <p>
            Le dispositif est réservé aux ménages dont les revenus ne dépassent pas les plafonds
            de ressources de l'Anah pour les ménages <strong>modestes</strong> et <strong>très
            modestes</strong>. À titre indicatif, le seuil pour une personne seule en Île-de-France
            est d'environ 23 541 € de revenus fiscaux de référence annuels (ménage modeste). Ces
            plafonds varient selon la composition du foyer et la zone géographique : vérifiez votre
            éligibilité sur le site de l'Anah ou lors d'un <a href="/dpe-gratuit">bilan
            énergétique gratuit</a>.
          </p>

          <h2>Comment fonctionne le contrat ?</h2>
          <p>
            Six consortiums ont été sélectionnés par appel d'offres public en septembre 2026.
            Chacun propose une offre intégrée : du choix du modèle à l'installation, en passant par
            le financement. Voici le déroulé type :
          </p>
          <ol>
            <li><strong>Inscription en ligne</strong> sur le site d'un des opérateurs agréés (accessibles via le portail du ministère de la Transition écologique).</li>
            <li><strong>Visite technique gratuite</strong> pour confirmer l'éligibilité technique du logement.</li>
            <li><strong>Signature du contrat</strong> avec choix de la durée de remboursement (souvent 10 à 15 ans).</li>
            <li><strong>Installation</strong> par un installateur RGE : premières poses prévues dès novembre 2026.</li>
          </ol>
          <p>
            Les contrats pourront être signés jusqu'au <strong>31 décembre 2028</strong>. Si vous
            êtes éligible, il n'y a donc pas d'urgence absolue — mais les 55 000 places sont
            contingentées et les premières listes de précommandes sont déjà ouvertes.
          </p>

          <h2>Quel reste à charge pour vous ?</h2>
          <p>
            Grâce aux aides CEE (Certificats d'Économie d'Énergie) mobilisées par les consortiums,
            le reste à charge estimé se situe entre <strong>1 000 et 1 500 €</strong> pour un
            ménage modeste. Ce montant est ensuite intégré dans le crédit et lissé sur les mensualités.
          </p>
          <p>
            L'objectif affiché est que la mensualité totale (remboursement + maintenance + éventuel
            contrat électricité) reste <strong>inférieure ou égale à votre facture actuelle de
            chauffage</strong> au fioul ou au gaz. Pour une maison de 120 m² se chauffant au fioul,
            le gain annuel sur la facture d'énergie peut dépasser 1 200 €.
          </p>

          <h2>Leasing social ou MaPrimeRénov' classique : que choisir ?</h2>
          <p>
            Si vous bénéficiez de MaPrimeRénov' aujourd'hui, les forfaits PAC air/eau vont de
            3 000 à 5 000 € selon vos revenus (arrêtés du 25 août 2026). Mais le projet de loi
            de finances 2027 prévoit d'orienter les PAC vers les seuls CEE dès le 1er janvier 2027.
            En cas d'adoption, MaPrimeRénov' pour une PAC seule disparaîtrait.
          </p>
          <ul>
            <li><strong>Leasing social</strong> : idéal si votre reste à charge MaPrimeRénov' reste élevé, ou si vous ne souhaitez pas avancer les fonds.</li>
            <li><strong>MaPrimeRénov' + CEE classiques</strong> : toujours pertinent si vous êtes éligible et préférez un montage en subvention directe plutôt qu'un crédit.</li>
            <li><strong>Rénovation d'ampleur</strong> : si votre logement est classé E, F ou G, un parcours global (isolation + PAC) permet de cumuler les aides les plus généreuses — c'est le cœur de métier de RenoHab.</li>
          </ul>
          <p>
            Pour comparer les options selon votre situation, consultez notre <a href="/blog">guide
            des aides à la rénovation énergétique</a>.
          </p>

          <h2>Ce qu'il faut retenir</h2>
          <ul>
            <li>Le leasing social PAC est ouvert depuis le 1er octobre 2026 pour les ménages modestes chauffés au fioul ou au gaz.</li>
            <li>Reste à charge estimé : 1 000 à 1 500 €, mensualité ≤ ancienne facture d'énergie.</li>
            <li>Vous êtes propriétaire de la PAC dès l'installation.</li>
            <li>55 000 places jusqu'au 31 décembre 2028 — inscrivez-vous tôt pour éviter les délais.</li>
            <li>Le PLF 2027 prévoit de supprimer MaPrimeRénov' pour les PAC seules : le leasing social pourrait devenir la solution principale pour les ménages modestes.</li>
          </ul>
        </article>

        {/* CTA RenoHab */}
        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Vérifiez votre éligibilité gratuitement</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            Leasing social, MaPrimeRénov' ou rénovation d'ampleur : RenoHab analyse votre situation et vous oriente vers la meilleure combinaison d'aides.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/dpe-gratuit" className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all">
              Obtenir mon bilan gratuit
            </a>
            <a href="/pompe-a-chaleur" className="px-6 py-3 rounded-full border border-white/70 text-white font-semibold hover:bg-white/10 transition-all">
              En savoir plus sur les PAC
            </a>
          </div>
        </div>
      </main>

      <ArticleFooter />
    </div>
  );
}
