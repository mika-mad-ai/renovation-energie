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

const PUBLISHED = '2026-11-03';
const PATH = '/blog/interdiction-location-classe-e-2034-bailleurs';

export default function ArticleInterdictionLocationClasseE2034() {
  useSeo({
    title: "Logement classé E en 2026 : anticiper l'interdiction de louer en 2034 | RenoHab",
    description:
      "Au 1er janvier 2034, les logements classés E seront interdits à la location. Que faire maintenant ? DPE, travaux, aides CEE, éco-PTZ et déficit foncier : le guide complet pour propriétaires bailleurs.",
    path: PATH,
    image: '/blog/interdiction-location-classe-e-2034-bailleurs.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline:
        "Logement classé E en 2026 : anticiper l'interdiction de louer en 2034 — guide des bailleurs",
      description:
        "Au 1er janvier 2034, les logements classés E seront interdits à la location. Que faire maintenant ? DPE, travaux, aides CEE, éco-PTZ et déficit foncier : le guide complet pour propriétaires bailleurs.",
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
      about: ['DPE classe E', 'Interdiction de location', 'Rénovation énergétique', 'Propriétaire bailleur'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 3 novembre 2026 · DPE &amp; Location
          </p>

          <h1>Logement classé E en 2026 : anticiper l'interdiction de louer en 2034</h1>

          <img
            src="/blog/interdiction-location-classe-e-2034-bailleurs.jpg"
            alt="Propriétaire bailleur devant un logement classé E sur le DPE — calendrier d'interdiction de location 2034"
            className="w-full rounded-2xl my-6 shadow-card"
            loading="lazy"
          />

          <p className="lead">
            Les logements classés G sont interdits à la location depuis le 1er janvier 2025. Les
            F suivront en 2028. La prochaine étape, fixée par la <strong>loi Climat et Résilience
            du 22 août 2021</strong>, concerne la classe <strong>E : interdiction au 1er janvier
            2034</strong>. Huit ans, c'est à la fois long et court. Pour les bailleurs concernés,
            c'est maintenant qu'il faut agir pour éviter la mise en demeure — et profiter des
            aides encore disponibles.
          </p>

          <h2>Le calendrier légal de l'interdiction de location</h2>
          <p>
            La loi Climat et Résilience a établi un calendrier progressif d'interdiction à la
            mise en location des logements énergivores :
          </p>
          <ul>
            <li><strong>Classe G :</strong> interdiction depuis le 1er janvier 2025 (nouvelles locations et renouvellements de bail).</li>
            <li><strong>Classe F :</strong> interdiction à compter du 1er janvier 2028.</li>
            <li><strong>Classe E :</strong> interdiction à compter du <strong>1er janvier 2034</strong>.</li>
          </ul>
          <p>
            Concrètement, l'interdiction s'applique aux <em>nouvelles mises en location</em> et
            aux <em>renouvellements ou reconductions tacites de bail</em>. Un bail en cours peut
            théoriquement se poursuivre, mais à son terme, le renouvellement sera bloqué si le
            logement est encore classé E (ou moins bien) en 2034.
          </p>
          <p>
            Important : en cas de non-respect, le locataire peut engager la responsabilité du
            bailleur et obtenir une réduction de loyer, voire la résiliation du bail aux torts du
            propriétaire. Le risque juridique et financier est réel.
          </p>

          <h2>Votre logement E est-il vraiment encore classé E ?</h2>
          <p>
            Avant de planifier des travaux, une première vérification s'impose : <strong>votre
            DPE est-il à jour</strong> ? Depuis le 1er janvier 2026, le coefficient de conversion
            de l'électricité est passé de 2,3 à 1,9 dans le calcul du DPE (arrêté du 13 août
            2025). Résultat : les logements chauffés à l'électricité voient leur consommation
            affichée réduite mécaniquement, et certains logements auparavant classés E ont gagné
            une ou deux classes sans aucun travaux.
          </p>
          <p>
            Si votre DPE date d'avant le 1er janvier 2026, il est recommandé de faire réaliser
            un nouveau diagnostic pour connaître votre classe réelle sous la nouvelle méthode de
            calcul. Un <a href="/dpe-gratuit">bilan énergétique gratuit</a> peut vous aider à
            orienter votre décision.
          </p>
          <p>
            Si votre logement est confirmé classé E après ce nouveau calcul, l'heure est à
            l'anticipation.
          </p>

          <h2>Quels travaux permettent de sortir de la classe E ?</h2>
          <p>
            Passer d'un logement E à D (ou mieux) requiert en général une combinaison de gestes
            ciblés. Les travaux les plus efficaces selon la configuration du bien :
          </p>

          <h3>L'isolation : le geste le plus rentable</h3>
          <ul>
            <li><strong>Combles et toiture :</strong> jusqu'à 30 % des déperditions de chaleur passent par le toit. C'est souvent le premier chantier à engager.</li>
            <li><strong>Murs (ITE ou ITI) :</strong> isolation thermique par l'extérieur ou l'intérieur selon la configuration du bâtiment.</li>
            <li><strong>Plancher bas sur vide sanitaire :</strong> souvent négligé mais très efficace sur les maisons de plain-pied.</li>
          </ul>

          <h3>Le remplacement du système de chauffage</h3>
          <p>
            Remplacer une chaudière à gaz ou au fioul par une{' '}
            <a href="/pompe-a-chaleur">pompe à chaleur air/eau</a> est souvent décisif pour
            sauter plusieurs classes DPE. La PAC reste éligible à MaPrimeRénov' par geste en 2026
            et aux primes CEE.
          </p>

          <h3>La ventilation</h3>
          <p>
            Une VMC double flux améliore la qualité de l'air et réduit les besoins de chauffage.
            Elle est financée par une prime CEE (fiche BAR-TH-125).
          </p>

          <h2>Quelles aides pour financer les travaux ?</h2>
          <p>
            La bonne nouvelle : même après la réforme de MaPrimeRénov' de septembre 2026, des
            aides significatives restent accessibles pour les propriétaires bailleurs.
          </p>

          <h3>Les Certificats d'Économie d'Énergie (CEE)</h3>
          <p>
            Les primes CEE sont versées par les fournisseurs d'énergie et restent accessibles
            pour la plupart des travaux d'isolation, de chauffage et de ventilation — quelle que
            soit la destination du logement (résidence principale, secondaire ou logement loué).
            Elles ne sont pas soumises aux mêmes conditions de ressources que MaPrimeRénov'.
          </p>

          <h3>MaPrimeRénov' — parcours accompagné</h3>
          <p>
            Pour les logements loués, MaPrimeRénov' est accessible aux propriétaires bailleurs
            dans le cadre du <strong>parcours accompagné (rénovation d'ampleur)</strong>, à
            condition que le logement soit la résidence principale du locataire et que les travaux
            permettent un gain d'au moins <strong>deux classes DPE</strong>. Un accompagnateur
            Rénov' agréé (comme RenoHab) est obligatoire pour monter le dossier.
          </p>

          <h3>L'éco-prêt à taux zéro (éco-PTZ)</h3>
          <p>
            Le propriétaire bailleur peut emprunter jusqu'à <strong>50 000 €</strong> à taux zéro
            pour financer une rénovation d'ampleur. Les intérêts sont pris en charge par l'État.
            L'éco-PTZ est cumulable avec les primes CEE.
          </p>

          <h3>Le déficit foncier — plafond doublé à 21 400 €/an</h3>
          <p>
            Pour les propriétaires bailleurs relevant du régime réel d'imposition, les travaux
            de rénovation énergétique permettent de créer un <strong>déficit foncier</strong>
            déductible du revenu global jusqu'à <strong>21 400 € par an</strong> (plafond doublé
            temporairement pour les travaux permettant de sortir du statut de passoire). C'est
            un levier fiscal puissant, souvent sous-estimé.
          </p>

          <h3>La TVA à 5,5 %</h3>
          <p>
            La TVA réduite à 5,5 % s'applique à l'ensemble des travaux de rénovation énergétique
            réalisés par un artisan RGE dans un logement de plus de 2 ans, qu'il soit occupé ou
            loué.
          </p>

          <h2>Pourquoi agir maintenant plutôt qu'en 2033 ?</h2>
          <p>
            Attendre la dernière minute comporte plusieurs risques :
          </p>
          <ul>
            <li><strong>La saturation des artisans :</strong> les délais d'intervention des professionnels RGE s'allongent. En 2027-2028, les bailleurs propriétaires de logements F se ruent sur les artisans — les E suivront en 2032-2033.</li>
            <li><strong>L'évolution des aides :</strong> les dispositifs actuels (CEE, éco-PTZ, MaPrimeRénov') ne sont pas garantis à l'identique jusqu'en 2034. Les règles changent chaque année.</li>
            <li><strong>Le risque locatif :</strong> un locataire informé peut anticiper et refuser le renouvellement, ou engager une procédure judiciaire.</li>
            <li><strong>La décote à la vente :</strong> un logement classé E vaut moins qu'un logement D ou mieux sur le marché immobilier actuel.</li>
          </ul>
          <p>
            En agissant dès 2026 ou 2027, vous pouvez étaler les travaux sur plusieurs exercices
            fiscaux pour maximiser l'avantage du déficit foncier, et profiter des aides avant
            qu'elles ne soient réduites ou modifiées.
          </p>

          <h2>Par où commencer ?</h2>
          <ol>
            <li><strong>Faire un nouveau DPE</strong> si votre diagnostic date d'avant le 1er janvier 2026 (coefficient électricité modifié).</li>
            <li><strong>Commander un audit énergétique</strong> obligatoire pour toute rénovation d'ampleur — il identifie les travaux prioritaires et chiffre les gains énergétiques attendus.</li>
            <li><strong>Contacter un accompagnateur Rénov'</strong> pour monter le dossier d'aides, coordonner les artisans RGE et garantir le gain de classes DPE.</li>
          </ol>
          <p>
            Retrouvez tous les articles pratiques sur les aides, les travaux et le DPE dans notre{' '}
            <a href="/blog">guide complet de la rénovation énergétique</a>.
          </p>
        </article>

        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Votre logement classé E : que faire ?</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            RenoHab, Accompagnateur Rénov' agréé, évalue votre bien, monte le dossier d'aides
            et coordonne les artisans RGE pour sortir de la classe E avant 2034.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/dpe-gratuit" className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all">
              Estimer mon DPE gratuitement
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
