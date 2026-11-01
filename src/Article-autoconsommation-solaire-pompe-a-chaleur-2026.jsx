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

const PUBLISHED = '2026-11-01';
const PATH = '/blog/autoconsommation-solaire-pompe-a-chaleur-2026';

export default function ArticleAutoconsommationSolairePAC() {
  useSeo({
    title: "Panneaux solaires et pompe à chaleur : la combinaison gagnante pour l'autoconsommation en 2026 | RenoHab",
    description:
      "Associer des panneaux photovoltaïques à une pompe à chaleur permet de réduire sa facture d'électricité de 30 à 50 %. Guide pratique, aides disponibles et conseils de pilotage pour en profiter au maximum en 2026.",
    path: PATH,
    image: '/blog/autoconsommation-solaire-pompe-a-chaleur-2026.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline:
        "Panneaux solaires et pompe à chaleur : la combinaison gagnante pour l'autoconsommation en 2026",
      description:
        "Associer des panneaux photovoltaïques à une pompe à chaleur permet de réduire sa facture d'électricité de 30 à 50 %. Guide pratique, aides disponibles et conseils de pilotage.",
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
      about: ['Panneaux solaires', 'Pompe à chaleur', 'Autoconsommation', 'Rénovation énergétique'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 1er novembre 2026 · Chauffage & Énergie
          </p>

          <h1>Panneaux solaires et pompe à chaleur : la combinaison gagnante pour l'autoconsommation en 2026</h1>

          <img
            src="/blog/autoconsommation-solaire-pompe-a-chaleur-2026.jpg"
            alt="Maison avec panneaux solaires en toiture et pompe à chaleur extérieure"
            className="w-full rounded-xl shadow-card mb-8"
            loading="eager"
          />

          <p className="lead">
            Avec la quasi-disparition de la revente d'électricité à prix attractif, l'autoconsommation
            s'impose comme la stratégie la plus rentable pour un foyer équipé de panneaux
            photovoltaïques. Et la <strong>pompe à chaleur air/eau</strong> (PAC) est le meilleur
            allié de cette démarche : elle absorbe l'électricité produite par vos panneaux, la
            transforme en chaleur avec un rendement de 300 à 400 %, et peut diviser votre facture
            d'énergie globale de <strong>30 à 50 %</strong>.
          </p>

          <h2>Pourquoi la PAC et le solaire forment un duo idéal</h2>
          <p>
            Une pompe à chaleur air/eau est le plus grand consommateur électrique d'une maison bien
            isolée : en chauffage, elle représente 60 à 75 % de la consommation annuelle du foyer.
            C'est précisément ce qui en fait le compagnon parfait d'une installation solaire.
          </p>
          <p>
            Le principe est simple : vos panneaux produisent de l'électricité entre 9 h et 17 h
            (selon la saison). En programmant votre PAC pour fonctionner en priorité sur ces
            créneaux — chauffage, production d'eau chaude sanitaire, préchauffage du plancher
            chauffant — vous consommez directement l'électricité que vous produisez, sans la
            revendre à un prix dérisoire (autour de 1 à 2 centimes le kWh en 2026) ni acheter
            de l'électricité au réseau (12 à 25 centimes le kWh selon les offres).
          </p>
          <p>
            Grâce au{' '}
            <strong>coefficient de performance (COP) de la PAC</strong>, compris entre 3 et 4,
            chaque kilowattheure solaire consommé par la pompe produit 3 à 4 kWh de chaleur. Un
            radiateur électrique, lui, produirait seulement 1 kWh pour 1 kWh consommé — la
            comparaison est sans appel.
          </p>

          <h2>Quel dimensionnement viser ?</h2>
          <h3>Pour la PAC</h3>
          <p>
            Une pompe à chaleur air/eau pour une maison de 100 à 150 m² bien isolée est typiquement
            dimensionnée entre <strong>6 et 10 kW</strong>. En régime de chauffage normal, sa
            consommation électrique instantanée varie entre 1,5 et 3 kW selon la température extérieure.
          </p>
          <h3>Pour les panneaux solaires</h3>
          <p>
            Une installation de <strong>3 à 6 kWc</strong> (kilowatts-crête) suffit pour couvrir
            l'essentiel de la consommation diurne de la PAC en demi-saison (printemps, automne).
            En hiver, les journées courtes et la forte demande de chauffage réduisent le taux
            d'autoconsommation : l'apport du réseau reste nécessaire. En été, le surplus sert à
            l'eau chaude sanitaire et à une éventuelle recharge de véhicule électrique.
          </p>

          <h2>Le pilotage : la clé pour maximiser l'autoconsommation</h2>
          <p>
            Un simple programmateur horaire, réglé pour forcer le fonctionnement de la PAC entre
            10 h et 15 h, suffit dans un premier temps. Pour aller plus loin, deux options existent :
          </p>
          <ul>
            <li>
              <strong>La régulation par signal CPL ou contact sec :</strong> l'onduleur solaire
              envoie un signal à la PAC quand la production est suffisante. La plupart des PAC
              récentes (Mitsubishi, Daikin, Atlantic, Viessmann…) sont compatibles avec ce type
              de pilotage.
            </li>
            <li>
              <strong>La box énergie ou la domotique :</strong> une passerelle type Homepilot,
              Home Assistant ou box opérateur pilote l'ensemble des équipements selon la
              production solaire en temps réel. Plus onéreux à installer, mais plus précis.
            </li>
          </ul>
          <p>
            En hiver, un autre levier consiste à profiter des heures creuses nocturnes pour
            préchauffer le plancher chauffant, en complément du solaire diurne. Pour en savoir plus
            sur ce cas de figure,{' '}
            <a href="/blog/tarif-tempo-edf-pompe-a-chaleur-hiver-2026">
              notre guide sur le tarif Tempo et la pompe à chaleur en hiver
            </a>{' '}
            détaille les stratégies tarifaires à combiner.
          </p>

          <h2>Les aides disponibles en 2026</h2>
          <h3>Pour la pompe à chaleur air/eau</h3>
          <p>
            Depuis le 1er septembre 2026, la PAC air/eau est l'un des seuls équipements encore
            éligibles au <strong>parcours par geste de MaPrimeRénov'</strong>. Les montants varient
            selon les revenus du ménage (de 1 000 € à plus de 6 000 €) et la puissance installée.
            Les CEE (certificats d'économies d'énergie) sont cumulables, de même que la
            <strong> TVA réduite à 5,5 %</strong> sur la main-d'œuvre et les équipements.
            Consultez notre page dédiée à la{' '}
            <a href="/pompe-a-chaleur">pompe à chaleur pour connaître les aides actuelles</a>.
          </p>
          <h3>Pour les panneaux photovoltaïques</h3>
          <p>
            Les panneaux solaires photovoltaïques sont éligibles aux <strong>CEE</strong> via des
            offres de rachat de primes énergie. Une prime spécifique à l'autoconsommation existait
            jusqu'en 2026 : son statut exact doit être vérifié au moment de votre projet, car les
            règles ont évolué en cours d'année. Avant tout engagement, demandez des devis à des
            installateurs RGE qui vous indiqueront les aides actuellement applicables.
          </p>

          <h2>Ce que vous pouvez attendre comme économies</h2>
          <p>
            Pour une maison de 120 m² passant d'une chaudière gaz à une PAC air/eau couplée à
            4 kWc de panneaux solaires :
          </p>
          <ul>
            <li>
              <strong>Suppression de la facture de gaz</strong> (environ 1 200 à 1 800 €/an selon
              les prix).
            </li>
            <li>
              <strong>Nouvelle facture d'électricité</strong> pour la PAC : environ 1 200 à
              1 600 €/an à pleine consommation, ramenée à 700-900 €/an grâce à l'autoconsommation
              solaire.
            </li>
            <li>
              <strong>Économie nette estimée</strong> : 600 à 1 100 €/an selon l'exposition et
              les habitudes, soit un retour sur investissement de l'installation solaire entre
              8 et 12 ans (hors aides et hors évolution des prix de l'énergie).
            </li>
          </ul>
          <p>
            Ces chiffres sont indicatifs. Un{' '}
            <a href="/dpe-gratuit">
              audit énergétique ou une simulation personnalisée
            </a>{' '}
            permettent d'affiner les projections selon votre logement et votre profil de
            consommation.
          </p>

          <h2>Contraintes et points de vigilance</h2>
          <ul>
            <li>
              <strong>Isolation en premier :</strong> coupler une PAC à une maison mal isolée est
              contre-productif. Les déperditions thermiques annulent le gain solaire. L'ordre
              recommandé reste : isolation, puis remplacement du système de chauffage.
            </li>
            <li>
              <strong>Orientation et masques solaires :</strong> une toiture orientée plein sud
              avec un angle de 30 à 40° est idéale. Les masques (arbres, cheminées, bâtiments
              voisins) réduisent sensiblement la production.
            </li>
            <li>
              <strong>Démarche administrative :</strong> toute installation de plus de 3 kWc
              nécessite une déclaration préalable en mairie. Pour les installations raccordées
              au réseau (injection du surplus), une demande de raccordement auprès d'Enedis est
              obligatoire.
            </li>
            <li>
              <strong>Artisans RGE :</strong> pour bénéficier de MaPrimeRénov' et des CEE, la
              PAC doit être posée par un artisan certifié{' '}
              <a href="/blog/choisir-artisan-rge-2026">RGE (Reconnu Garant de l'Environnement)</a>.
            </li>
          </ul>

          <h2>Comment démarrer votre projet ?</h2>
          <p>
            La première étape est d'obtenir un état des lieux précis de votre logement (DPE,
            consommations réelles, orientation de la toiture) et un bilan des aides auxquelles
            vous avez droit. En tant qu'Accompagnateur Rénov' agréé, RenoHab monte votre dossier
            d'aides, coordonne les artisans RGE et vous accompagne de A à Z — de l'audit au
            solde des primes.
          </p>
        </article>

        {/* CTA RenoHab */}
        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Calculez vos économies solaires + PAC</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            Simulation gratuite : découvrez les aides auxquelles vous avez droit et l'économie
            réelle attendue pour votre logement.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/#simulateur" className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all">
              Simuler mes aides
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
