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

const PUBLISHED = '2026-08-16';
const PATH = '/blog/nouveau-calcul-dpe-2026-reclassement';

export default function ArticleNouveauCalculDpe2026() {
  useSeo({
    title: "Nouveau calcul DPE 2026 : 850 000 logements changent de classe sans travaux | RenoHab",
    description:
      "Depuis le 1er janvier 2026, le coefficient électricité du DPE passe de 2,3 à 1,9 : 850 000 logements gagnent une classe énergétique sans travaux. Découvrez comment mettre à jour votre DPE.",
    path: PATH,
    image: '/blog/nouveau-calcul-dpe-2026-reclassement.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline:
        "Nouveau calcul DPE 2026 : 850 000 logements changent de classe sans travaux",
      description:
        "Depuis le 1er janvier 2026, le coefficient électricité du DPE passe de 2,3 à 1,9 : 850 000 logements gagnent une classe énergétique sans travaux. Découvrez comment mettre à jour votre DPE.",
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
      about: ['DPE', 'Diagnostic de Performance Énergétique', 'Rénovation énergétique', 'Passoires thermiques'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 16 août 2026 · DPE &amp; réglementation
          </p>

          <h1>Nouveau calcul DPE 2026 : 850 000 logements changent de classe sans travaux</h1>

          <img
            src="/blog/nouveau-calcul-dpe-2026-reclassement.jpg"
            alt="Étiquette DPE — nouveau calcul coefficient électricité 2026"
            className="w-full rounded-xl shadow-soft mb-8"
            loading="eager"
          />

          <p className="lead">
            Depuis le 1er janvier 2026, la méthode de calcul du Diagnostic de Performance Énergétique (DPE)
            a changé : le coefficient de conversion de l'électricité en énergie primaire est abaissé de
            2,3 à 1,9. Résultat : environ <strong>850 000 logements</strong> gagnent une ou plusieurs
            classes énergétiques sans aucun travaux. Voici ce que cela signifie concrètement pour les
            propriétaires et les bailleurs.
          </p>

          <h2>Pourquoi le calcul du DPE a-t-il changé en 2026 ?</h2>
          <p>
            Le DPE exprime la consommation d'un logement en <em>énergie primaire</em> (en kWh/m²/an).
            Pour convertir l'énergie finale consommée (ce que vous payez sur votre facture) en énergie
            primaire, on applique un coefficient multiplicateur qui tient compte des pertes liées à la
            production et au transport de l'énergie.
          </p>
          <p>
            Jusqu'au 31 décembre 2025, ce coefficient était fixé à <strong>2,3</strong> pour l'électricité
            — une valeur héritée d'une époque où le mix électrique français était moins propre. Avec la
            montée en puissance des énergies renouvelables et la révision de la méthode européenne de
            calcul, ce coefficient est désormais <strong>1,9</strong> depuis le 1er janvier 2026. Source :
            Ministère de la Transition écologique.
          </p>
          <p>
            En pratique, un logement chauffé électriquement consomme « moins » d'énergie primaire sur
            le papier, ce qui améliore mécaniquement sa classe DPE.
          </p>

          <h2>Qui est concerné ? Les 850 000 logements reclassés</h2>

          <h3>Des passoires qui ne le sont plus (officiellement)</h3>
          <p>
            D'après les données du gouvernement (ecologie.gouv.fr, info.gouv.fr), environ{' '}
            <strong>850 000 logements</strong> sortent du statut de passoire thermique (classe F ou G)
            grâce à cette réforme. Parmi eux :
          </p>
          <ul>
            <li>Environ <strong>400 000 logements classés G</strong> remontent vers la classe F ou E.</li>
            <li>Parmi ces logements classés G, <strong>200 000 étaient en location</strong> dans le parc
              privé ou social — leurs propriétaires bénéficiaires d'une bouffée d'air, les logements
              G étant interdits à la location depuis le 1er janvier 2025.</li>
          </ul>
          <p>
            Attention : un logement qui passe de G à F grâce à ce recalcul reste soumis à l'interdiction
            de location des <strong>F à partir de 2028</strong>. Le répit est réel mais temporaire pour
            les bailleurs dont le bien reste en classe F.
          </p>

          <h3>Les logements chauffés à l'électricité, premiers bénéficiaires</h3>
          <p>
            Ce changement ne concerne que les logements utilisant l'électricité comme principale source
            de chauffage : radiateurs électriques, pompe à chaleur, plancher chauffant électrique. Les
            logements chauffés au gaz ou au fioul ne sont <em>pas impactés</em> par cette modification.
          </p>
          <p>
            C'est aussi un signal politique fort : en valorisant davantage le chauffage électrique dans
            le DPE, les pouvoirs publics incitent les propriétaires à{' '}
            <a href="/pompe-a-chaleur">installer une pompe à chaleur</a> plutôt que de conserver un
            système à combustible fossile.
          </p>

          <h2>Comment mettre à jour votre DPE : l'attestation sans nouvelle visite</h2>
          <p>
            Bonne nouvelle pour les propriétaires dont le DPE a été établi <strong>avant le 1er janvier
            2026</strong> : il n'est <strong>pas nécessaire de faire réaliser un nouveau diagnostic
            complet</strong> pour bénéficier du nouveau coefficient. Une{' '}
            <strong>attestation officielle actualisée</strong> peut être délivrée par un diagnostiqueur
            certifié, sans nouvelle visite sur place et sans frais importants.
          </p>
          <p>
            Cette attestation met à jour la classe DPE dans les bases de données de l'ADEME et peut être
            utilisée lors d'une mise en vente, d'une remise en location, ou d'une demande d'aides.
          </p>
          <ul>
            <li>Contactez votre diagnostiqueur DPE d'origine ou un nouveau diagnostiqueur certifié.</li>
            <li>Fournissez le numéro ADEME de votre DPE existant.</li>
            <li>Le professionnel procède au recalcul et émet l'attestation actualisée.</li>
          </ul>
          <p>
            Vous pouvez également faire estimer votre classe actuelle en amont via notre outil{' '}
            <a href="/dpe-gratuit">estimation DPE gratuite</a>.
          </p>

          <h2>Que faire si votre logement reste classé F ou G après recalcul ?</h2>
          <p>
            Pour les propriétaires dont le bien reste en classe F ou G malgré la nouvelle méthode de
            calcul, des travaux de rénovation énergétique restent la seule voie durable. Les aides
            disponibles en 2026 permettent de financer une large part de ces travaux :
          </p>
          <ul>
            <li>
              <strong>MaPrimeRénov'</strong> : jusqu'à 90 % du montant des travaux pour les ménages
              très modestes, dans le cadre d'une rénovation d'ampleur permettant un saut d'au moins
              deux classes DPE.
            </li>
            <li>
              <strong>CEE (Certificats d'Économies d'Énergie)</strong> : cumulables avec MaPrimeRénov',
              ces primes versées par les fournisseurs d'énergie couvrent isolation, chauffage et
              ventilation.
            </li>
            <li>
              <strong>Éco-PTZ</strong> : prêt à taux zéro jusqu'à 50 000 € pour financer le reste
              à charge.
            </li>
            <li>
              <strong>TVA à 5,5 %</strong> : applicable à tous les travaux de rénovation énergétique,
              sans condition de revenus.
            </li>
          </ul>
          <p>
            Notre <a href="/#simulator">simulateur d'aides en ligne</a> vous permet d'estimer en
            quelques minutes le montant auquel vous pouvez prétendre.
          </p>

          <h2>Ce que ce changement ne règle pas</h2>
          <p>
            Il serait trompeur de considérer que ce recalcul règle le problème des passoires thermiques.
            Un logement mal isolé reste inconfortable, énergivore et coûteux à chauffer — même si son
            étiquette DPE s'améliore. Le coefficient de conversion n'agit que sur le calcul
            administratif ; il ne réduit pas les factures réelles d'électricité ni les déperditions
            de chaleur par les murs ou la toiture.
          </p>
          <p>
            La rénovation énergétique effective reste le seul moyen de réduire durablement les charges
            et d'augmenter la valeur du bien. En tant qu'Accompagnateur Rénov' agréé, RenoHab vous aide
            à construire un plan de travaux cohérent, à monter vos dossiers d'aides et à coordonner
            des artisans RGE pour sécuriser chaque étape du chantier.
          </p>
        </article>

        {/* CTA RenoHab */}
        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Votre logement a-t-il changé de classe ?</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            Estimez votre DPE mis à jour et découvrez les aides disponibles pour aller plus loin
            dans la rénovation énergétique.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/dpe-gratuit" className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all">
              Estimer mon DPE gratuitement
            </a>
            <a href="/pompe-a-chaleur" className="px-6 py-3 rounded-full border border-white/70 text-white font-semibold hover:bg-white/10 transition-all">
              Passer à la pompe à chaleur
            </a>
          </div>
        </div>
      </main>

      <ArticleFooter />
    </div>
  );
}
