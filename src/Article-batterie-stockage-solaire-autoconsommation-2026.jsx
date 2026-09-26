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

const PUBLISHED = '2026-09-19';
const PATH = '/blog/batterie-stockage-solaire-autoconsommation-2026';

export default function ArticleBatterieStockageSolaire2026() {
  useSeo({
    title: "Batterie de stockage solaire en 2026 : rentabilité, aides et conseils | RenoHab",
    description:
      "Faut-il investir dans une batterie de stockage solaire en 2026 ? Prix, aides disponibles, retour sur investissement et conseils pour maximiser votre autoconsommation.",
    path: PATH,
    image: '/blog/batterie-stockage-solaire-autoconsommation-2026.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline:
        "Batterie de stockage solaire en 2026 : rentabilité, aides et conseils d'installation",
      description:
        "Faut-il investir dans une batterie de stockage solaire en 2026 ? Prix, aides disponibles, retour sur investissement et conseils pour maximiser votre autoconsommation.",
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
      about: ['Batterie solaire', 'Autoconsommation', 'Panneaux photovoltaïques', 'Rénovation énergétique'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 19 septembre 2026 · Énergie solaire
          </p>

          <h1>Batterie de stockage solaire en 2026 : rentabilité, aides et conseils d'installation</h1>

          <img
            src="/blog/batterie-stockage-solaire-autoconsommation-2026.jpg"
            alt="Maison équipée de panneaux solaires et d'une batterie de stockage pour l'autoconsommation"
            className="w-full rounded-xl object-cover mb-6"
            loading="eager"
          />

          <p className="lead">
            Depuis la chute du tarif de rachat d'électricité à <strong>0,011 €/kWh HT</strong> au
            printemps 2026, vendre son surplus photovoltaïque au réseau n'a plus guère d'intérêt.
            Résultat : stocker l'énergie produite pour la consommer soi-même est devenu la
            stratégie la plus rentable. Tour d'horizon complet sur les batteries solaires résidentielles.
          </p>

          <h2>Pourquoi le stockage est (enfin) incontournable en 2026</h2>
          <p>
            Jusqu'en 2025, deux mécanismes soutenaient l'installation de panneaux photovoltaïques
            sans batterie : la <em>prime à l'autoconsommation</em> et un tarif de rachat attractif.
            Ces deux leviers ont été largement réduits ou supprimés :
          </p>
          <ul>
            <li>
              La <strong>prime à l'autoconsommation</strong> a été supprimée par arrêté pour les
              installations dont la demande complète de raccordement est validée à partir du
              5 juin 2026 (pour les installations ≤ 100 kWc).
            </li>
            <li>
              Le <strong>tarif de rachat EDF OA</strong> a chuté à 0,011 €/kWh HT depuis juin 2026 —
              soit environ 18 fois moins qu'un kilowattheure économisé grâce à l'autoconsommation.
            </li>
          </ul>
          <p>
            Dans ce contexte, chaque kWh stocké et autoconsommé vaut environ <strong>0,25 €</strong>
            d'économie sur la facture (prix moyen du kWh réseau en France en 2026), contre
            seulement 0,011 € si revendu. La batterie n'est plus un accessoire : c'est le cœur
            de la rentabilité.
          </p>

          <h2>Comment fonctionne une batterie de stockage solaire ?</h2>
          <p>
            La batterie est couplée à votre onduleur photovoltaïque. Elle absorbe le surplus
            d'énergie produit en journée (typiquement entre 10 h et 15 h), puis restitue cette
            énergie le soir et la nuit, lorsque votre consommation dépasse la production.
          </p>
          <p>
            En 2026, la technologie dominante est la <strong>LiFePO4 (lithium fer phosphate)</strong>,
            dite LFP. Ses atouts :
          </p>
          <ul>
            <li>Plus de <strong>6 000 cycles</strong> de charge/décharge (soit 15 à 20 ans d'usage).</li>
            <li>Rendement aller-retour supérieur à <strong>90 %</strong>.</li>
            <li>Sécurité incendie bien supérieure aux anciennes chimies lithium-ion NMC.</li>
          </ul>

          <h2>Prix d'une batterie solaire en 2026</h2>
          <p>
            Comptez entre <strong>800 et 1 200 €/kWh</strong> installé, installation et mise en
            service incluses, pour une batterie LFP posée par un professionnel. En pratique :
          </p>
          <ul>
            <li><strong>5 kWh</strong> : environ 4 000 – 6 000 € TTC</li>
            <li><strong>10 kWh</strong> : environ 8 000 – 12 000 € TTC</li>
          </ul>
          <p>
            La capacité à choisir dépend de votre profil de consommation quotidienne, de la
            puissance de votre installation PV et de vos plages d'utilisation. Un dimensionnement
            soigné est indispensable pour éviter une batterie surdimensionnée qui ne se rechargera
            jamais complètement.
          </p>

          <h2>Quelles aides financières en 2026 ?</h2>
          <p>
            Soyons clairs : <strong>aucune aide nationale dédiée</strong> ne cible les batteries
            seules en 2026. Voici l'état des lieux :
          </p>

          <h3>TVA à 5,5 %</h3>
          <p>
            Les panneaux photovoltaïques d'une puissance ≤ 9 kWc bénéficient d'une TVA réduite
            à 5,5 %. Lorsque la batterie est installée en même temps que les panneaux, dans le
            cadre d'un système intégré, cette TVA réduite peut s'appliquer à l'ensemble du
            système. En revanche, une batterie ajoutée seule a posteriori à une installation
            existante est soumise au taux normal de <strong>20 %</strong>.
          </p>

          <h3>MaPrimeRénov'</h3>
          <p>
            MaPrimeRénov' ne finance pas les panneaux photovoltaïques (qui produisent de
            l'électricité, à la différence des capteurs solaires thermiques). Les batteries
            de stockage en sont donc également exclues.
          </p>

          <h3>Éco-PTZ</h3>
          <p>
            L'<a href="/blog/eco-ptz-2026-pret-taux-zero-renovation">éco-prêt à taux zéro</a> finance
            certains travaux d'amélioration de la performance énergétique du logement, mais les
            batteries de stockage PV seules n'y sont pas éligibles. Il peut toutefois être mobilisé
            pour d'autres travaux réalisés simultanément (isolation, pompe à chaleur…).
          </p>

          <h3>CEE et aides locales</h3>
          <p>
            Certains fournisseurs d'énergie proposent des primes CEE pour des systèmes de gestion
            intelligente de l'énergie incluant le stockage. Renseignez-vous auprès de votre
            installateur ou d'un conseiller France Rénov'. Des aides régionales ou
            intercommunales peuvent compléter le financement selon votre territoire.
          </p>

          <h2>Quel retour sur investissement attendre ?</h2>
          <p>
            Pour une maison consommant <strong>6 000 kWh/an</strong> équipée d'une installation
            solaire de 6 kWc :
          </p>
          <ul>
            <li>
              Sans batterie : taux d'autoconsommation d'environ <strong>40–50 %</strong>, soit
              2 400 à 3 000 kWh réellement valorisés.
            </li>
            <li>
              Avec une batterie de 8–10 kWh : taux d'autoconsommation porté à
              <strong> 75–80 %</strong>, soit 4 500 à 4 800 kWh valorisés.
            </li>
            <li>
              Économie supplémentaire annuelle grâce à la batterie : <strong>400 à 600 €/an</strong>.
            </li>
          </ul>
          <p>
            Pour une batterie à 8 000 € TTC, le retour sur investissement se situe entre{' '}
            <strong>13 et 20 ans</strong> — dans la fourchette haute de la durée de vie du
            produit. La rentabilité s'améliore significativement si le prix de l'électricité
            continue d'augmenter ou si votre consommation est forte en dehors des heures solaires
            (télétravail le soir, véhicule électrique rechargé la nuit…).
          </p>

          <h2>Quand la batterie est-elle vraiment pertinente ?</h2>
          <p>
            Investir dans une batterie est particulièrement judicieux si vous :
          </p>
          <ul>
            <li>Êtes peu présents à domicile en journée (la production PV n'est pas consommée immédiatement).</li>
            <li>Possédez un véhicule électrique rechargé le soir.</li>
            <li>Cherchez une plus grande indépendance vis-à-vis du réseau.</li>
            <li>Installez votre système PV ex nihilo et pouvez bénéficier de la TVA 5,5 % sur l'ensemble.</li>
          </ul>
          <p>
            En revanche, si vous travaillez depuis chez vous toute la journée ou si vos principales
            consommations coïncident déjà avec la production solaire (piscine, pompe à chaleur
            programmée en journée…), l'intérêt marginal de la batterie se réduit.
          </p>

          <h2>Quelles démarches pour bien installer ?</h2>
          <p>
            Faire appel à un installateur certifié <strong>QualiPV</strong> (qualification
            professionnelle reconnue pour le photovoltaïque) est fortement recommandé. Vérifiez
            également que l'installateur effectue les déclarations préalables en mairie et la
            demande de raccordement Enedis, même si vous ne revendez pas votre surplus.
          </p>
          <p>
            Pour votre projet global de rénovation, pensez à coupler l'installation solaire avec
            les travaux d'isolation ou de{' '}
            <a href="/pompe-a-chaleur">pompe à chaleur</a> : réduire vos besoins énergétiques avant
            d'investir dans la production est toujours la première étape logique. Un{' '}
            <a href="/dpe-gratuit">diagnostic de performance énergétique (DPE)</a> vous donnera
            une image précise de vos consommations et des marges de progrès.
          </p>
        </article>

        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Préparez votre projet énergie solaire</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            Isolation, pompe à chaleur, solaire : RenoHab vous aide à construire la stratégie
            la plus rentable pour votre logement et à activer toutes les aides disponibles.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/dpe-gratuit" className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all">
              Estimer mon DPE
            </a>
            <a href="/pompe-a-chaleur" className="px-6 py-3 rounded-full border border-white/70 text-white font-semibold hover:bg-white/10 transition-all">
              Étudier une pompe à chaleur
            </a>
          </div>
        </div>
      </main>

      <ArticleFooter />
    </div>
  );
}
