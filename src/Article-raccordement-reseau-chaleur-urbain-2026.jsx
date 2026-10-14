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

const PUBLISHED = '2026-09-27';
const PATH = '/blog/raccordement-reseau-chaleur-urbain-2026';

export default function ArticleRaccordementReseauChaleurUrbain2026() {
  useSeo({
    title: "Réseau de chaleur urbain en 2026 : raccordement, aides et démarches | RenoHab",
    description:
      "Se raccorder à un réseau de chaleur urbain reste l'un des 4 gestes encore éligibles à MaPrimeRénov' après septembre 2026. Aides jusqu'à 1 200 €, CEE, TVA 5,5 % et démarches expliqués.",
    path: PATH,
    image: '/blog/raccordement-reseau-chaleur-urbain-2026.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: "Réseau de chaleur urbain en 2026 : raccordement, aides et démarches",
      description:
        "Se raccorder à un réseau de chaleur urbain reste l'un des 4 gestes encore éligibles à MaPrimeRénov' après septembre 2026. Aides jusqu'à 1 200 €, CEE, TVA 5,5 % et démarches expliqués.",
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
      about: ['Réseau de chaleur urbain', 'Chauffage urbain', 'MaPrimeRénov', 'Rénovation énergétique'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 27 sept. 2026 · Chauffage
          </p>

          <h1>Réseau de chaleur urbain en 2026 : raccordement, aides et démarches</h1>

          <img
            src="/blog/raccordement-reseau-chaleur-urbain-2026.jpg"
            alt="Réseau de chaleur urbain — chaufferie collective et réseau de distribution"
            className="w-full rounded-2xl shadow-card my-6"
            loading="eager"
          />

          <p className="lead">
            Depuis le 1er septembre 2026, MaPrimeRénov' par geste ne finance plus que quatre
            types de travaux : les pompes à chaleur, la dépose de cuve à fioul, l'audit
            énergétique… et le <strong>raccordement à un réseau de chaleur ou de froid</strong>.
            Pourtant, ce dernier geste reste très peu connu. Pour les copropriétés et certaines
            maisons individuelles situées en zone urbaine, il peut représenter une alternative
            sérieuse à une pompe à chaleur — avec des aides cumulables et un impact carbone
            souvent bien meilleur.
          </p>

          <h2>Qu'est-ce qu'un réseau de chaleur urbain ?</h2>
          <p>
            Un réseau de chaleur urbain (ou « chauffage urbain ») est une infrastructure qui
            produit de l'énergie thermique dans une chaufferie centrale, puis la distribue via
            un réseau de canalisations souterraines à des bâtiments abonnés. Ces bâtiments
            (immeubles, hôpitaux, lycées, logements individuels) reçoivent la chaleur dans leur
            sous-station, sans avoir besoin de leur propre chaudière.
          </p>
          <p>
            En France, on compte plus de <strong>900 réseaux de chaleur</strong>, concentrés
            surtout dans les grandes agglomérations (Île-de-France, Bordeaux, Grenoble, Lyon,
            Strasbourg…). La loi impose que ces réseaux utilisent majoritairement des{' '}
            <strong>énergies renouvelables ou de récupération</strong> (EnR&R) pour être éligibles
            aux aides : géothermie, biomasse, chaleur industrielle récupérée, solaire thermique.
            Résultat : le contenu en CO₂ de la chaleur livrée est souvent 3 à 5 fois inférieur
            à celui d'une chaudière gaz individuelle.
          </p>

          <h2>Qui peut se raccorder ?</h2>
          <p>
            Techniquement, tout logement situé à proximité d'un réseau peut demander le
            raccordement — à condition que le gestionnaire du réseau (souvent une collectivité
            ou un délégataire) accepte d'étendre sa desserte. En pratique :
          </p>
          <ul>
            <li>
              <strong>Les copropriétés</strong> sont les premières concernées : remplacer
              une chaufferie collective fioul ou gaz par un raccordement au réseau supprime
              les contraintes de maintenance, les risques d'explosion ou de fuite, et le
              coût des entretiens annuels obligatoires.
            </li>
            <li>
              <strong>Les maisons individuelles</strong> peuvent aussi être raccordées, mais
              c'est plus rare : le réseau doit physiquement passer devant la propriété, et
              la puissance requise est souvent moindre qu'en collectif.
            </li>
            <li>
              <strong>Les logements neufs</strong> situés en zone de développement prioritaire
              peuvent avoir l'obligation de raccordement imposée par le Plan Local d'Urbanisme.
            </li>
          </ul>
          <p>
            Pour savoir si un réseau dessert votre adresse, le site{' '}
            <strong>France Chaleur Urbaine</strong> (france-chaleur-urbaine.beta.gouv.fr),
            outil officiel du gouvernement, permet de vérifier la disponibilité en quelques
            secondes et de déposer une demande de contact auprès des opérateurs locaux.
          </p>

          <h2>Les aides disponibles en 2026</h2>

          <h3>MaPrimeRénov' par geste : jusqu'à 1 200 €</h3>
          <p>
            Le raccordement à un réseau de chaleur et de froid alimenté majoritairement par des
            EnR&R est l'un des <strong>quatre gestes encore éligibles</strong> à MaPrimeRénov'
            par geste depuis le 1er septembre 2026, selon le guide des aides financières de
            l'Anah (édition septembre 2026). Les montants sont les suivants, sur un plafond de
            dépenses retenu de <strong>1 800 €</strong> :
          </p>
          <ul>
            <li><strong>Ménages très modestes</strong> : 1 200 €</li>
            <li><strong>Ménages modestes</strong> : 800 €</li>
            <li><strong>Ménages intermédiaires</strong> : 400 €</li>
            <li><strong>Ménages aisés</strong> : non éligibles</li>
          </ul>
          <p>
            Ces montants concernent la partie « raccordement intérieur » (sous-station,
            émetteurs, tuyauteries internes au logement). Les travaux sur le réseau public
            relèvent du gestionnaire du réseau.
          </p>

          <h3>Prime CEE cumulable</h3>
          <p>
            La prime issue des Certificats d'Économies d'Énergie (CEE) s'ajoute à
            MaPrimeRénov' sans plafond commun. Son montant dépend de l'offre de votre
            fournisseur d'énergie ou d'un obligé CEE. Pour les copropriétés, des fiches
            spécifiques (BAR-TH-161, BAR-TH-166) encadrent ce dispositif avec des montants
            souvent plus élevés qu'en individuel.
          </p>

          <h3>TVA à 5,5 % et éco-PTZ</h3>
          <p>
            Les travaux de raccordement bénéficient automatiquement de la{' '}
            <strong>TVA réduite à 5,5 %</strong> (au lieu de 10 % pour les travaux
            d'entretien standard), dès lors que le logement a plus de 2 ans et que le
            réseau utilise des EnR. L'<strong>éco-PTZ</strong> (jusqu'à 50 000 €, sans
            intérêts) peut financer le reste à charge, sans conditions de revenus — c'est
            le complément idéal si vous devez aussi refaire vos émetteurs de chaleur.
          </p>

          <h2>Combien coûte le raccordement ?</h2>
          <p>
            Le coût varie fortement selon la distance du réseau, la configuration du
            bâtiment et la puissance souscrite. On distingue :
          </p>
          <ul>
            <li>
              <strong>Le droit de raccordement</strong> : forfait facturé par le gestionnaire
              du réseau, généralement entre 1 000 € et 5 000 € pour une maison individuelle,
              et de 5 000 € à 30 000 € pour une copropriété selon la taille.
            </li>
            <li>
              <strong>La sous-station d'échange</strong> : équipement installé dans le
              bâtiment (entre 3 000 € et 8 000 €), amortissable sur 15 à 20 ans.
            </li>
            <li>
              <strong>Le coût annuel d'abonnement et de consommation</strong> : indexé sur un
              tarif réglementé tenant compte de l'énergie primaire. En 2026, le prix moyen du
              kWh livré sur les réseaux classés EnR tourne autour de 0,09 à 0,12 €/kWh TTC,
              soit un niveau compétitif face aux chaudières gaz (environ 0,12 à 0,15 €/kWh).
            </li>
          </ul>

          <h2>Impact sur le DPE</h2>
          <p>
            La méthode de calcul du DPE (3CL-DPE 2021, révisée en janvier 2026) valorise
            fortement les réseaux classés EnR&R. Un logement chauffé par un réseau labellisé
            voit ses émissions de CO₂ calculées selon un coefficient d'émission propre au
            réseau, souvent très faible. Concrètement, un appartement chauffé au gaz classé{' '}
            <strong>E</strong> peut passer en <strong>C ou D</strong> après raccordement à un
            réseau biomasse — sans toucher à l'enveloppe du bâtiment.
          </p>
          <p>
            Ce gain de classe ouvre droit à des aides supplémentaires si vous engagez
            ensuite une{' '}
            <a href="/blog/renovation-ampleur-2026-accompagnateur-renov">
              rénovation d'ampleur
            </a>{' '}
            globale, et sécurise la location de votre bien face aux{' '}
            <a href="/blog/dpe-2026-passoires-thermiques-location">
              interdictions de louer les passoires thermiques
            </a>
            .
          </p>

          <h2>Comment procéder ?</h2>
          <ol>
            <li>
              <strong>Vérifiez la disponibilité</strong> : rendez-vous sur France Chaleur
              Urbaine pour savoir si un réseau dessert votre commune et votre rue.
            </li>
            <li>
              <strong>Contactez le gestionnaire</strong> : il réalise une étude de
              raccordabilité gratuite et vous adresse un devis détaillant le droit de
              raccordement, la sous-station et les conditions d'abonnement.
            </li>
            <li>
              <strong>Déposez votre dossier MaPrimeRénov'</strong> : la demande s'effectue
              sur le compte FranceRénov' (maprimerenov.gouv.fr), avant le début des travaux
              de raccordement intérieur. L'artisan en charge doit être{' '}
              <a href="/blog/choisir-artisan-rge-2026">certifié RGE</a>.
            </li>
            <li>
              <strong>Cumulez CEE et éco-PTZ</strong> : demandez simultanément un devis CEE
              auprès de votre fournisseur d'énergie et, si besoin, un éco-PTZ auprès de
              votre banque pour financer le reste à charge.
            </li>
          </ol>

          <h2>Ce qu'il faut retenir</h2>
          <p>
            Le raccordement au réseau de chaleur urbain est discret mais stratégique : c'est
            l'un des rares gestes encore financés par MaPrimeRénov' par geste en 2026,
            cumulable avec les CEE, la TVA à 5,5 % et l'éco-PTZ. Il supprime la chaudière
            collective ou individuelle, améliore le DPE sans travaux d'isolation, et réduit
            significativement l'empreinte carbone du logement. Pour les copropriétés situées
            en zone urbaine dense, c'est souvent la solution la plus simple à mettre en
            œuvre — et la plus rentable à moyen terme.
          </p>
          <p>
            Besoin d'évaluer votre situation ? RenoHab, en tant
            qu'<strong>Accompagnateur Rénov' agréé</strong>, analyse vos options de
            chauffage, monte vos dossiers d'aides et vous oriente vers les{' '}
            <a href="/dpe-gratuit">meilleures solutions pour votre DPE</a>.
          </p>
        </article>

        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">
            Votre logement est-il raccordable ?
          </h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            RenoHab vérifie la disponibilité d'un réseau près de chez vous, chiffre le reste à
            charge et dépose les dossiers MaPrimeRénov' et CEE à votre place.
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
              Voir aussi les pompes à chaleur
            </a>
          </div>
        </div>
      </main>

      <ArticleFooter />
    </div>
  );
}
