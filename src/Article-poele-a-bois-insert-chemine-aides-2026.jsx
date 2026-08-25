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

const PUBLISHED = '2026-08-25';
const PATH = '/blog/poele-a-bois-insert-chemine-aides-2026';

export default function ArticlePoeleABoisInsertChemine2026() {
  useSeo({
    title: "Poêle à bois et insert de cheminée : les aides à saisir avant le 1er septembre 2026 | RenoHab",
    description:
      "MaPrimeRénov' pour les poêles à bois et inserts de cheminée s'arrête le 1er septembre 2026. Montants, conditions Flamme Verte, CEE et démarches pour agir à temps.",
    path: PATH,
    image: `https://renohab.fr${PATH}.jpg`,
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: "Poêle à bois et insert de cheminée : les aides à saisir avant le 1er septembre 2026",
      description:
        "MaPrimeRénov' pour les poêles à bois et inserts de cheminée s'arrête le 1er septembre 2026. Montants, conditions Flamme Verte, CEE et démarches pour agir à temps.",
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
      about: ['Poêle à bois', 'Insert de cheminée', 'MaPrimeRénov', 'Chauffage bois', 'Aides rénovation énergétique'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 25 août 2026 · Chauffage & aides
          </p>

          <h1>Poêle à bois et insert de cheminée : les aides à saisir avant le 1er septembre 2026</h1>

          <img
            src="/blog/poele-a-bois-insert-chemine-aides-2026.jpg"
            alt="Poêle à bois moderne dans un salon — chauffage au bois avec aides en 2026"
            className="w-full rounded-xl object-cover mb-8"
            style={{ maxHeight: '420px' }}
            loading="lazy"
          />

          <p className="lead">
            Le poêle à bois à bûches et l'insert de cheminée sont des équipements de chauffage
            appréciés pour leur confort, leur autonomie et leur faible empreinte carbone lorsqu'ils
            sont correctement dimensionnés. En 2026, ils bénéficient encore de plusieurs aides
            publiques — mais la fenêtre se referme : <strong>MaPrimeRénov' par geste pour ces
            appareils prend fin le 1er septembre 2026</strong>. Il reste quelques jours pour monter
            son dossier.
          </p>

          <h2>Poêle à bois et insert : quelle différence ?</h2>
          <p>
            Le <strong>poêle à bois</strong> est un appareil indépendant posé dans une pièce, relié
            à un conduit d'évacuation. Il chauffe principalement la pièce dans laquelle il se trouve,
            et parfois les espaces adjacents.
          </p>
          <p>
            L'<strong>insert de cheminée</strong> (ou foyer fermé) s'installe dans une cheminée
            ouverte existante pour la transformer en équipement performant. Là où un foyer ouvert
            traditionnel ne restitue que 8 à 15 % de l'énergie du bois, un insert labellisé{' '}
            <strong>Flamme Verte</strong> affiche un rendement supérieur à 75 %, avec des émissions
            de particules fines très réduites. C'est cette performance qui conditionne l'accès aux
            aides.
          </p>

          <h2>Les conditions pour être éligible aux aides</h2>
          <p>Pour décrocher MaPrimeRénov' ou les primes CEE sur un poêle à bois ou un insert, plusieurs critères doivent être réunis :</p>
          <ul>
            <li>Le logement doit être une <strong>résidence principale</strong>, achevée depuis au moins <strong>15 ans</strong>.</li>
            <li>Les travaux doivent être réalisés par un artisan certifié <strong>RGE</strong> (Reconnu Garant de l'Environnement).</li>
            <li>L'appareil doit être labellisé <strong>Flamme Verte 7 étoiles</strong> ou présenter des performances équivalentes (rendement ≥ 75 %, émissions de CO et de particules sous les seuils réglementaires).</li>
            <li>Le ménage doit appartenir aux catégories de revenus <strong>très modestes, modestes ou intermédiaires</strong> pour MaPrimeRénov'. Les foyers aux revenus supérieurs ne sont pas éligibles à cette aide.</li>
          </ul>

          <h2>Montants de MaPrimeRénov' en 2026</h2>
          <p>
            Pour un poêle à bois à bûches ou un insert de cheminée à foyer fermé, les montants
            forfaitaires de MaPrimeRénov' par geste sont les suivants en 2026 :
          </p>
          <ul>
            <li><strong>Revenus très modestes</strong> : jusqu'à <strong>1 250 €</strong></li>
            <li><strong>Revenus modestes</strong> : jusqu'à <strong>1 000 €</strong></li>
            <li><strong>Revenus intermédiaires</strong> : jusqu'à <strong>500 €</strong></li>
          </ul>
          <p>
            Ces montants s'appliquent sur la fourniture et la pose de l'équipement éligible. Ils
            viennent en déduction de votre reste-à-charge, après application de la TVA à taux
            réduit.
          </p>

          <h2>Les autres aides cumulables</h2>
          <p>
            MaPrimeRénov' n'est pas la seule aide disponible. D'autres dispositifs peuvent se
            combiner pour réduire davantage votre investissement :
          </p>

          <h3>La Prime CEE (Certificats d'Économies d'Énergie)</h3>
          <p>
            Contrairement à MaPrimeRénov', la{' '}
            <a href="/blog/cee-2026-prime-energie-comment-en-profiter">prime CEE</a> est accessible
            à <strong>tous les profils de revenus</strong>, y compris les foyers aisés. Son montant
            dépend de la zone géographique, de la surface chauffée et de l'offre du fournisseur
            d'énergie (Effy, TotalEnergies, EDF…). Elle se cumule directement avec MaPrimeRénov'.
          </p>

          <h3>La TVA à 5,5 %</h3>
          <p>
            L'installation d'un poêle à bois ou d'un insert dans une résidence principale de plus de
            2 ans bénéficie de la{' '}
            <a href="/blog/tva-5-5-renovation-energetique-2026">TVA réduite à 5,5 %</a> sur la
            fourniture et la pose, au lieu des 20 % habituels. C'est un avantage immédiat et
            automatique, appliqué directement sur la facture de l'artisan RGE.
          </p>

          <h3>L'éco-PTZ</h3>
          <p>
            L'éco-Prêt à Taux Zéro permet de financer jusqu'à 50 000 € de travaux sans intérêt sur
            20 ans. Le poêle à bois ou l'insert peut être intégré dans un bouquet de travaux
            éligible. C'est une solution idéale si vous rénovez en même temps votre isolation ou
            votre ventilation.
          </p>

          <h3>Les aides locales</h3>
          <p>
            Certaines collectivités (régions, départements, communes) proposent des subventions
            complémentaires pour les équipements de chauffage au bois. Renseignez-vous auprès de
            votre mairie ou de votre conseil régional, ou consultez le site de l'ADEME.
          </p>

          <h2>Pourquoi agir avant le 1er septembre 2026 ?</h2>
          <p>
            Le gouvernement a confirmé que les poêles à bois à bûches et les inserts de cheminée
            sortent du parcours MaPrimeRénov' « par geste » à compter du{' '}
            <strong>1er septembre 2026</strong>. Cette suppression s'inscrit dans la stratégie de
            recentrage des aides sur les équipements les plus efficaces et les rénovations globales.
          </p>
          <p>
            Concrètement, pour bénéficier de la prime, votre <strong>devis doit être signé
            et la demande d'aide déposée avant cette date</strong> (les règles exactes de
            recevabilité peuvent varier selon les derniers textes publiés sur{' '}
            <a href="https://www.maprimerenov.gouv.fr" target="_blank" rel="noopener noreferrer">
              maprimerenov.gouv.fr
            </a>
            ). Il est donc urgent de lancer vos démarches si vous envisagez ce type d'installation.
          </p>

          <h2>Poêle à bois ou pompe à chaleur : comment choisir ?</h2>
          <p>
            Le poêle à bois convient particulièrement aux maisons avec un conduit de fumée existant,
            dans les zones où le bois de chauffage est accessible et peu onéreux, et pour des
            ménages qui apprécient le confort radiant d'un feu.
          </p>
          <p>
            Si votre objectif est d'obtenir le meilleur{' '}
            <a href="/dpe-gratuit">gain de classe DPE</a> ou de chauffer l'intégralité du logement
            de façon automatisée, la{' '}
            <a href="/pompe-a-chaleur">pompe à chaleur air/eau</a> reste l'équipement le plus
            performant, avec des aides plus élevées dans le cadre d'une rénovation d'ampleur.
            Les deux solutions ne sont pas incompatibles : un poêle en appoint d'une PAC peut
            optimiser confort et facture.
          </p>

          <h2>Les étapes pour monter votre dossier rapidement</h2>
          <ol>
            <li>
              <strong>Vérifiez votre éligibilité</strong> : tranche de revenus MaPrimeRénov' sur{' '}
              <a href="https://www.maprimerenov.gouv.fr" target="_blank" rel="noopener noreferrer">
                maprimerenov.gouv.fr
              </a>{' '}
              (barèmes ANAH).
            </li>
            <li>
              <strong>Choisissez un artisan RGE</strong> : vérifiez la certification sur{' '}
              <a href="https://www.faire.gouv.fr" target="_blank" rel="noopener noreferrer">
                faire.gouv.fr
              </a>
              . L'artisan doit également être en mesure de fournir la fiche technique Flamme Verte de l'appareil.
            </li>
            <li>
              <strong>Obtenez un devis</strong> détaillé mentionnant la marque, le modèle, le
              rendement et la certification de l'appareil.
            </li>
            <li>
              <strong>Déposez votre demande d'aide</strong> sur maprimerenov.gouv.fr{' '}
              <em>avant</em> de commencer les travaux et avant le 1er septembre 2026.
            </li>
            <li>
              <strong>Cumulez avec la prime CEE</strong> : votre artisan RGE ou un mandataire CEE
              peut s'en charger directement.
            </li>
          </ol>

          <p>
            RenoHab, en tant qu'<strong>Accompagnateur Rénov' agréé</strong>, peut vous aider à
            monter l'ensemble du dossier et à coordonner les artisans RGE de votre zone. N'attendez
            pas la dernière minute.
          </p>
        </article>

        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Agissez avant le 1er septembre 2026</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            RenoHab monte votre dossier MaPrimeRénov' et coordonne un artisan RGE qualifié pour
            votre poêle à bois ou insert de cheminée — avant la fin des aides.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/dpe-gratuit" className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all">
              Estimer mon DPE
            </a>
            <a href="/pompe-a-chaleur" className="px-6 py-3 rounded-full border border-white/70 text-white font-semibold hover:bg-white/10 transition-all">
              Comparer avec une PAC
            </a>
          </div>
        </div>
      </main>

      <ArticleFooter />
    </div>
  );
}
