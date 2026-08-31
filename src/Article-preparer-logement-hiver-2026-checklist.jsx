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

const PUBLISHED = '2026-08-31';
const PATH = '/blog/preparer-logement-hiver-2026-checklist';

export default function ArticlePreparerLogementHiver2026() {
  useSeo({
    title: "Préparer son logement pour l'hiver 2026 : la checklist complète | RenoHab",
    description:
      "Entretien chaudière, purge des radiateurs, VMC, isolation : la liste des vérifications à faire avant novembre 2026 pour chauffer efficacement et réduire sa facture.",
    path: PATH,
    image: '/blog/preparer-logement-hiver-2026-checklist.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: "Préparer son logement pour l'hiver 2026 : checklist des travaux et entretiens indispensables",
      description:
        "Entretien chaudière, purge des radiateurs, VMC, isolation : la liste des vérifications à faire avant novembre 2026 pour chauffer efficacement et réduire sa facture.",
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
      about: ['Chauffage', 'Rénovation énergétique', 'Entretien logement', 'Hiver 2026'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 31 août 2026 · Chauffage &amp; confort hivernal
          </p>

          <h1>Préparer son logement pour l'hiver 2026 : la checklist complète</h1>

          <img
            src="/blog/preparer-logement-hiver-2026-checklist.jpg"
            alt="Logement chauffé et bien isolé pour l'hiver 2026"
            className="w-full rounded-2xl object-cover max-h-96 mb-8"
            loading="eager"
          />

          <p className="lead">
            À la fin de l'été, il est temps d'anticiper la saison froide. Un logement bien préparé,
            c'est moins de pannes en plein hiver, une facture d'énergie maîtrisée et un confort
            réel au quotidien. Voici la liste complète des vérifications et entretiens à réaliser
            avant novembre 2026 — des gestes simples aux travaux qui ouvrent droit à des aides.
          </p>

          <h2>1. Faire entretenir sa chaudière : une obligation légale</h2>
          <p>
            L'entretien annuel de la chaudière est <strong>obligatoire</strong> pour toute
            installation individuelle au gaz ou au fioul d'une puissance comprise entre 4 et
            400 kW (décret n° 2009-649 du 9 juin 2009). Il doit être réalisé par un professionnel
            qualifié, qui remet une attestation à conserver. Comptez entre <strong>80 et 150 €</strong>{' '}
            selon la région et le prestataire.
          </p>
          <p>
            Cet entretien comprend le nettoyage du brûleur, la vérification du circuit de
            combustion et le contrôle des sécurités. Il améliore le rendement de l'appareil et
            réduit les émissions de CO₂ — jusqu'à 8 % d'économies supplémentaires selon l'ADEME.
          </p>
          <p>
            <strong>Bon à savoir :</strong> si votre chaudière a plus de 15 ans, c'est le bon
            moment pour évaluer son remplacement. Une{' '}
            <a href="/pompe-a-chaleur">pompe à chaleur air/eau</a> est aujourd'hui éligible à
            MaPrimeRénov', aux CEE et à la TVA à 5,5 %, ce qui réduit considérablement le reste
            à charge.
          </p>

          <h2>2. Purger les radiateurs</h2>
          <p>
            L'air emprisonné dans les radiateurs les empêche de chauffer correctement et fait
            travailler la chaudière pour rien. La purge est un geste simple, gratuit, à réaliser
            avant de remettre le chauffage en marche :
          </p>
          <ol>
            <li>Mettez le chauffage en route et attendez que la pression soit revenue à la normale.</li>
            <li>Éteignez le chauffage et laissez refroidir.</li>
            <li>Placez un récipient sous la vis de purge (en haut du radiateur, sur le côté).</li>
            <li>Ouvrez doucement la vis jusqu'à entendre un sifflement d'air, puis refermez dès que l'eau s'écoule sans bulle.</li>
            <li>Vérifiez la pression du circuit (indicateur sur la chaudière) et rajoutez de l'eau si nécessaire (généralement entre 1 et 1,5 bar).</li>
          </ol>

          <h2>3. Vérifier et régler les robinets thermostatiques</h2>
          <p>
            Les robinets thermostatiques permettent de moduler la température pièce par pièce.
            Un réglage adapté (18 °C dans les chambres, 20-21 °C dans les pièces de vie, 17 °C
            dans les pièces peu utilisées) peut générer jusqu'à <strong>10 à 15 %</strong>{' '}
            d'économies sur la facture de chauffage.
          </p>
          <p>
            Si vos robinets sont bloqués ou défectueux, leur remplacement est simple et peu
            coûteux. L'idéal est de les coupler à un <strong>thermostat programmable</strong> ou
            connecté pour automatiser les plages horaires de chauffe (nuit, absence).
          </p>

          <h2>4. Contrôler la ventilation (VMC)</h2>
          <p>
            Une VMC encrassée réduit la qualité de l'air intérieur et peut favoriser l'humidité,
            source de ponts thermiques et de moisissures. Avant l'hiver :
          </p>
          <ul>
            <li>Dépoussiérez les bouches d'entrée d'air (grilles en haut des fenêtres) et les bouches d'extraction (cuisine, salle de bain, WC).</li>
            <li>Vérifiez que les bouches ne sont pas obstruées par des meubles ou des rideaux.</li>
            <li>Si vous avez une VMC double flux : changez les filtres (F7/G4 selon le modèle) au moins une fois par an.</li>
          </ul>
          <p>
            Une bonne ventilation est aussi la condition pour que l'isolation fonctionne : sans
            renouvellement d'air maîtrisé, l'humidité dégrade les matériaux isolants sur le long terme.
          </p>

          <h2>5. Vérifier l'isolation : combles, fenêtres et joints</h2>
          <p>
            Jusqu'à <strong>30 % des déperditions thermiques</strong> d'un logement passent par la
            toiture. Avant l'hiver, montez dans vos combles pour vérifier l'état et l'épaisseur
            de l'isolant : une couche de laine soufflée de moins de 10 cm est clairement
            insuffisante (il en faut au moins 30 cm pour atteindre un bon niveau de performance).
          </p>
          <p>
            Inspectez également :
          </p>
          <ul>
            <li><strong>Les joints de fenêtres</strong> : un joint usé ou décollé laisse passer des courants d'air froids. Le remplacement coûte quelques euros et se fait en 10 minutes.</li>
            <li><strong>Les bas de portes</strong> : un joint brosse ou une bande autocollante supprime les infiltrations sans travaux.</li>
            <li><strong>Les prises électriques sur les murs extérieurs</strong> : elles peuvent être des points de froid invisibles à traiter avec des cache-prises isolants.</li>
          </ul>
          <p>
            Si vos fenêtres sont en simple vitrage ou que votre isolation des combles est quasi
            inexistante, c'est le bon moment pour déposer un dossier{' '}
            <a href="/dpe-gratuit">d'estimation DPE</a> et préparer un plan de travaux financé
            par MaPrimeRénov'.
          </p>

          <h2>6. Faire ramoner sa cheminée ou son poêle</h2>
          <p>
            Le ramonage des conduits de fumée est <strong>obligatoire au moins une fois par an</strong>{' '}
            (deux fois pour les conduits d'appareils à bois dans de nombreuses communes), conformément
            aux arrêtés municipaux et aux règlements sanitaires départementaux. Il doit être
            réalisé par un professionnel qui délivre un certificat. Comptez entre{' '}
            <strong>50 et 100 €</strong> selon la longueur du conduit.
          </p>
          <p>
            Un conduit encrassé peut provoquer un incendie de cheminée ou un refoulement de
            monoxyde de carbone dans le logement — un risque vital à ne pas négliger.
          </p>

          <h2>7. Tester et régler son thermostat</h2>
          <p>
            Si vous n'avez pas encore de thermostat programmable, c'est l'investissement le plus
            rentable que vous puissiez faire cet automne (moins de 100 € pour un modèle filaire,
            150 à 300 € pour un thermostat connecté Wi-Fi). Les économies estimées vont de{' '}
            <strong>15 à 25 %</strong> sur la facture de chauffage (source : ADEME).
          </p>
          <p>
            Programmez au minimum :
          </p>
          <ul>
            <li>Une température de confort (20 °C) pendant les heures de présence.</li>
            <li>Une température réduite (16-17 °C) la nuit et lors des absences prolongées.</li>
            <li>Un mode hors-gel (7 °C) si vous vous absentez plusieurs jours.</li>
          </ul>

          <h2>8. Anticiper les travaux : déposer son dossier d'aides maintenant</h2>
          <p>
            Si votre logement est mal classé (DPE D, E, F ou G) et que vous envisagez des
            travaux de rénovation cette année ou au printemps 2027, septembre est le bon moment
            pour <strong>préparer votre dossier MaPrimeRénov'</strong>. Les délais de traitement
            peuvent atteindre plusieurs semaines ; anticiper vous évite de démarrer les travaux
            avant d'avoir obtenu votre accord.
          </p>
          <p>
            Rappel des principales aides mobilisables en 2026 :
          </p>
          <ul>
            <li><strong>MaPrimeRénov'</strong> (gestes individuels ou rénovation d'ampleur) : isolation, PAC, VMC, fenêtres.</li>
            <li><strong>CEE</strong> (Certificats d'Économies d'Énergie) : cumulables avec MaPrimeRénov'.</li>
            <li><strong>Éco-PTZ</strong> : prêt à taux zéro pour financer le reste à charge.</li>
            <li><strong>TVA à 5,5 %</strong> : applicable sur tous les travaux d'amélioration énergétique pour les logements de plus de 2 ans.</li>
          </ul>
          <p>
            En tant qu'Accompagnateur Rénov' agréé, RenoHab vous aide à établir le bon plan de
            travaux, à déposer vos dossiers et à coordonner des artisans RGE — tout en maximisant
            vos aides.
          </p>

          <h3>Résumé : la checklist de rentrée en un coup d'œil</h3>
          <ul>
            <li>☑ Entretien annuel de la chaudière (obligatoire)</li>
            <li>☑ Purge des radiateurs</li>
            <li>☑ Réglage des robinets thermostatiques</li>
            <li>☑ Nettoyage des bouches VMC + remplacement filtres</li>
            <li>☑ Vérification isolation combles et joints de fenêtres</li>
            <li>☑ Ramonage cheminée/poêle (obligatoire)</li>
            <li>☑ Programmation du thermostat</li>
            <li>☑ Estimation DPE et dossier aides si travaux envisagés</li>
          </ul>
        </article>

        {/* CTA RenoHab */}
        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Passez à l'action avant l'hiver</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            Estimez votre DPE, simulez vos aides et planifiez vos travaux avec l'appui d'un
            Accompagnateur Rénov' agréé. Réponse rapide, sans engagement.
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
