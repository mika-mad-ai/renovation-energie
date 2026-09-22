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

const PUBLISHED = '2026-09-22';
const PATH = '/blog/raccordement-reseau-chaleur-urbain-2026';

export default function ArticleRaccordementReseauChaleur2026() {
  useSeo({
    title: "Raccordement réseau de chaleur urbain 2026 : aides MaPrimeRénov', coûts et démarches | RenoHab",
    description:
      "Depuis la réforme du 1er septembre 2026, le raccordement à un réseau de chaleur urbain reste l'un des rares gestes aidés seul par MaPrimeRénov'. Coûts, aides et comment vérifier l'accès à votre adresse.",
    path: PATH,
    image: '/blog/raccordement-reseau-chaleur-urbain-2026.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: "Raccordement à un réseau de chaleur urbain en 2026 : aides, coûts et démarches",
      description:
        "Depuis la réforme du 1er septembre 2026, le raccordement à un réseau de chaleur urbain reste l'un des rares gestes aidés seul par MaPrimeRénov'. Coûts, aides et comment vérifier l'accès à votre adresse.",
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
      about: ['Réseau de chaleur urbain', 'MaPrimeRénov', 'Rénovation énergétique', 'Chauffage'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 22 septembre 2026 · Chauffage &amp; aides
          </p>

          <h1>Raccordement à un réseau de chaleur urbain en 2026 : aides, coûts et démarches</h1>

          <img
            src="/blog/raccordement-reseau-chaleur-urbain-2026.jpg"
            alt="Canalisations de réseau de chaleur urbain en milieu urbain"
            className="w-full rounded-xl object-cover max-h-72 mb-8"
            loading="eager"
          />

          <p className="lead">
            Depuis la réforme MaPrimeRénov' du 1er septembre 2026, le nombre de travaux aidables
            seuls (sans rénovation globale) s'est considérablement réduit. Le raccordement à un{' '}
            <strong>réseau de chaleur urbain</strong> fait partie des rares solutions encore
            éligibles en geste individuel. Si un réseau passe près de chez vous, c'est peut-être
            l'opportunité à saisir cette année.
          </p>

          <h2>Qu'est-ce qu'un réseau de chaleur urbain ?</h2>
          <p>
            Un réseau de chaleur urbain (RCU) est une infrastructure collective qui produit de la
            chaleur en un point central — géothermie, biomasse, chaleur industrielle récupérée ou
            cogénération — et la distribue via des{' '}
            <strong>canalisations souterraines isolées</strong> jusqu'aux logements, bâtiments
            publics ou entreprises connectés.
          </p>
          <p>
            En France, on compte aujourd'hui plus de{' '}
            <strong>900 réseaux de chaleur</strong>, desservant l'équivalent de plusieurs millions
            de logements, principalement en zones urbaines et périurbaines. Plus de{' '}
            <strong>60 % de la chaleur délivrée est d'origine renouvelable ou de récupération</strong>
            , un ratio en constante progression. Pour l'abonné, la chaleur arrive directement via
            une{' '}
            <em>sous-station d'échange</em> installée dans son logement ou sa cave, sans chaudière
            individuelle à entretenir.
          </p>

          <h2>Pourquoi c'est une option clé depuis septembre 2026</h2>
          <p>
            La réforme MaPrimeRénov' entrée en vigueur le <strong>1er septembre 2026</strong> a
            supprimé la subvention individuelle (parcours « par geste ») pour de nombreux travaux
            : isolation des combles, isolation des murs, VMC double flux, chauffe-eau
            thermodynamique, chauffage bois indépendant… Ces travaux restent possibles et aidés,
            mais uniquement dans le cadre d'un{' '}
            <a href="/blog/renovation-ampleur-2026-accompagnateur-renov">
              parcours de rénovation d'ampleur
            </a>{' '}
            accompagné par un Accompagnateur Rénov' agréé.
          </p>
          <p>
            Le raccordement à un réseau de chaleur, lui, <strong>conserve son éligibilité
            en geste monogeste</strong>, au même titre que la pompe à chaleur air/eau, la PAC
            géothermique et la suppression d'une cuve à fioul. Si votre logement est
            raccordable, c'est l'une des voies les plus directes pour obtenir une aide de l'État
            en 2026 sans monter un dossier complet de rénovation globale.
          </p>

          <h2>Combien coûte le raccordement à un réseau de chaleur ?</h2>
          <p>
            Le coût dépend de la configuration de votre logement et de la politique tarifaire du
            gestionnaire du réseau. On distingue généralement deux postes :
          </p>
          <ul>
            <li>
              <strong>La sous-station d'échange individuelle</strong> (ou échangeur de chaleur) :
              entre <strong>2 000 et 5 000 € TTC</strong> pose comprise, selon la puissance
              nécessaire et l'accessibilité technique.
            </li>
            <li>
              <strong>Le branchement au réseau primaire</strong> : dans de nombreux cas, les
              frais de raccordement physique (pose de la canalisation entre le réseau et votre
              bâtiment) sont pris en charge partiellement ou totalement par le gestionnaire du
              réseau, selon la distance et les conventions locales.
            </li>
          </ul>
          <p>
            Une fois raccordé, vous payez un <strong>abonnement annuel</strong> (puissance
            souscrite) et une <strong>part consommation</strong>. Le prix global tourne
            généralement entre <strong>0,08 et 0,14 €/kWh</strong> tout inclus, selon le réseau
            et l'année — un tarif proche du gaz naturel, mais indexé différemment et moins
            exposé aux chocs de marché.
          </p>

          <h2>Les aides financières disponibles</h2>

          <h3>MaPrimeRénov' (geste monogeste)</h3>
          <p>
            Le raccordement à un réseau de chaleur classé{' '}
            <strong>réseau vertueux</strong> (part d'énergie renouvelable supérieure à 50 %) est
            éligible à MaPrimeRénov' en geste monogeste. Le montant de l'aide varie selon votre
            profil de revenus :
          </p>
          <ul>
            <li>
              <strong>Revenus très modestes :</strong> aide pouvant atteindre{' '}
              <strong>50 % des dépenses éligibles</strong>
            </li>
            <li><strong>Revenus modestes :</strong> jusqu'à 40 %</li>
            <li><strong>Revenus intermédiaires :</strong> jusqu'à 30 %</li>
            <li>
              <strong>Revenus supérieurs :</strong> éligibilité réduite — renseignez-vous auprès
              de France Rénov'
            </li>
          </ul>
          <p>
            Les dépenses sont plafonnées et le recours à un <strong>artisan certifié RGE</strong>{' '}
            est obligatoire pour déclencher la subvention. Utilisez notre{' '}
            <a href="/#simulator">simulateur en ligne</a> pour estimer votre aide personnalisée.
          </p>

          <h3>Prime CEE</h3>
          <p>
            Les fournisseurs d'énergie proposent des{' '}
            <strong>primes CEE (Certificats d'Économies d'Énergie)</strong> pour le raccordement
            à un réseau de chaleur. Cette prime est cumulable avec MaPrimeRénov' et ne dépend
            d'aucune condition de revenus.
          </p>

          <h3>TVA à 5,5 %</h3>
          <p>
            Les travaux de raccordement dans un logement de plus de 2 ans bénéficient de la{' '}
            <a href="/blog/tva-5-5-renovation-energetique-2026">TVA au taux réduit de 5,5 %</a>{' '}
            (contre 20 % habituellement), applicable sur la fourniture et la pose, à condition
            que l'entreprise soit certifiée RGE.
          </p>

          <h3>Éco-PTZ et aides locales</h3>
          <p>
            Le raccordement à un réseau de chaleur est éligible à l'{' '}
            <strong>Éco-PTZ</strong> (prêt à taux zéro, jusqu'à 50 000 € pour une rénovation
            globale), cumulable avec MaPrimeRénov'. Certaines collectivités — régions, métropoles,
            communes — proposent par ailleurs des subventions complémentaires locales.
            Renseignez-vous auprès de votre mairie ou de l'espace France Rénov' de votre
            territoire.
          </p>

          <h2>Comment savoir si un réseau de chaleur passe chez vous ?</h2>
          <p>
            La première chose à faire est de vérifier la disponibilité d'un réseau à votre
            adresse. Plusieurs démarches sont possibles :
          </p>
          <ul>
            <li>
              Consultez la{' '}
              <strong>carte interactive officielle</strong> des réseaux de chaleur et de froid
              sur <strong>france-chaleur-urbaine.beta.gouv.fr</strong>, mise à jour
              régulièrement par l'ADEME et les gestionnaires de réseaux.
            </li>
            <li>
              Contactez directement la <strong>mairie ou la métropole</strong> de votre commune :
              elles peuvent vous indiquer le gestionnaire du réseau local et les conditions de
              raccordement.
            </li>
            <li>
              Renseignez-vous auprès d'un{' '}
              <strong>Accompagnateur Rénov' agréé</strong> (comme RenoHab) : il peut réaliser
              une pré-étude de faisabilité et vous aider à monter votre dossier d'aide.
            </li>
          </ul>

          <h2>Les limites à connaître avant de se lancer</h2>
          <p>
            Le raccordement à un réseau de chaleur est une excellente option, mais elle présente
            des contraintes :
          </p>
          <ul>
            <li>
              <strong>Disponibilité géographique :</strong> les RCU se concentrent dans les zones
              urbaines et péri-urbaines. En zone rurale, cette solution est rarement accessible.
            </li>
            <li>
              <strong>Investissement initial :</strong> la sous-station nécessite un espace
              technique (local technique, cave ou sous-sol) et une installation qualifiée.
            </li>
            <li>
              <strong>Dépendance au gestionnaire :</strong> vous dépendez du contrat et de la
              politique tarifaire du gestionnaire du réseau, avec moins de liberté que pour une
              installation individuelle.
            </li>
            <li>
              <strong>Réseau vertueux obligatoire pour les aides :</strong> seuls les réseaux dont
              la part d'énergie renouvelable et de récupération dépasse 50 % ouvrent droit à
              MaPrimeRénov'. La carte france-chaleur-urbaine indique ce critère.
            </li>
          </ul>

          <h2>Par où commencer ?</h2>
          <p>
            Voici le chemin recommandé si vous envisagez ce projet :
          </p>
          <ol>
            <li>
              <strong>Vérifiez la disponibilité</strong> sur france-chaleur-urbaine.beta.gouv.fr
              et notez le gestionnaire du réseau le plus proche.
            </li>
            <li>
              <strong>Faites une demande de devis</strong> auprès du gestionnaire et d'un
              installateur RGE pour la sous-station.
            </li>
            <li>
              <strong>Évaluez votre DPE actuel</strong> avec notre{' '}
              <a href="/dpe-gratuit">outil d'estimation DPE</a> — un bon DPE après raccordement
              peut ouvrir des droits supplémentaires.
            </li>
            <li>
              <strong>Simulez vos aides</strong> via notre{' '}
              <a href="/#simulator">simulateur en ligne</a> ou contactez directement un conseiller
              France Rénov'.
            </li>
            <li>
              Si vous envisagez d'autres travaux en parallèle (isolation, PAC…), explorez le{' '}
              <a href="/blog/renovation-ampleur-2026-accompagnateur-renov">
                parcours de rénovation d'ampleur
              </a>{' '}
              qui peut cumuler plusieurs aides bien plus importantes.
            </li>
          </ol>
        </article>

        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">
            Un réseau de chaleur près de chez vous ?
          </h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            RenoHab, Accompagnateur Rénov' agréé, vous aide à vérifier l'éligibilité, monter votre
            dossier MaPrimeRénov' et trouver un installateur RGE de confiance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/#simulator"
              className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all"
            >
              Simuler mes aides
            </a>
            <a
              href="/pompe-a-chaleur"
              className="px-6 py-3 rounded-full border border-white/70 text-white font-semibold hover:bg-white/10 transition-all"
            >
              Comparer avec une PAC
            </a>
          </div>
        </div>
      </main>

      <ArticleFooter />
    </div>
  );
}
