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

const PUBLISHED = '2026-11-11';
const PATH = '/blog/passoire-thermique-calendrier-renovation-avant-2028';

export default function ArticlePassoireCalendrier2028() {
  useSeo({
    title: "Passoire thermique F ou G : combien de temps pour rénover avant 2028 ? | RenoHab",
    description:
      "L'interdiction de louer un logement classé F arrive le 1er janvier 2028. Audit, dossier MaPrimeRénov', travaux, nouveau DPE : combien de mois faut-il vraiment compter ?",
    path: PATH,
    image: '/blog/passoire-thermique-calendrier-renovation-avant-2028.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline:
        "Passoire thermique F ou G : combien de temps pour rénover avant l'interdiction de location en 2028 ?",
      description:
        "L'interdiction de louer un logement classé F arrive le 1er janvier 2028. Audit, dossier MaPrimeRénov', travaux, nouveau DPE : combien de mois faut-il vraiment compter ?",
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
      about: ['Passoire thermique', 'DPE F G', 'Rénovation énergétique', 'MaPrimeRénov'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 11 novembre 2026 · DPE
          </p>

          <h1>Passoire thermique F ou G : combien de temps pour rénover avant l'interdiction de location en 2028 ?</h1>

          <img
            src="/blog/passoire-thermique-calendrier-renovation-avant-2028.jpg"
            alt="Façade d'une maison ancienne à rénover pour améliorer sa classe DPE avant 2028"
            className="w-full rounded-xl shadow-card mb-8"
            loading="lazy"
          />

          <p className="lead">
            Le 1er janvier 2028, les logements classés <strong>F</strong> seront formellement interdits
            à la location sur tout le territoire français. Après les G, exclus du marché locatif depuis
            le 1er janvier 2025, ce sont plus d'un million de logements supplémentaires qui devront
            avoir gagné au moins deux classes DPE pour rester sur le marché. La question que se posent
            la plupart des propriétaires bailleurs : <em>ai-je encore le temps ?</em>
          </p>

          <h2>Rappel du calendrier réglementaire</h2>
          <p>
            La loi Climat et Résilience a établi un calendrier progressif d'interdiction à la location
            des passoires thermiques :
          </p>
          <ul>
            <li><strong>Depuis le 1er janvier 2025</strong> : interdiction de mise en location des logements classés <strong>G</strong>.</li>
            <li><strong>Au 1er janvier 2028</strong> : extension aux logements classés <strong>F</strong> (environ 1,2 million de biens en France).</li>
            <li><strong>Au 1er janvier 2034</strong> : extension aux logements classés <strong>E</strong>.</li>
          </ul>
          <p>
            Concrètement, un propriétaire qui loue un logement F après le 31 décembre 2027 s'expose à
            l'impossibilité de renouveler ou de signer un nouveau bail, et son locataire peut demander
            une mise en conformité ou une réduction de loyer. L'enjeu est donc patrimonial autant que
            réglementaire.
          </p>

          <h2>Pourquoi le délai est plus court qu'on ne le pense</h2>
          <p>
            Il reste moins de 14 mois avant la date butoir de janvier 2028. Or, une
            rénovation permettant un gain de deux classes DPE — condition minimale pour sortir d'un
            classement F — ne se réalise pas en quelques semaines. Elle implique un enchaînement
            d'étapes administratives, techniques et logistiques dont les délais s'accumulent.
          </p>
          <p>
            En pratique, les professionnels du secteur observent qu'une rénovation d'ampleur bien
            préparée demande <strong>entre 6 et 18 mois</strong> du premier rendez-vous à la remise
            du DPE post-travaux. Dans les zones tendues où les artisans RGE sont sollicités, les
            délais de planification s'allongent encore.
          </p>

          <h2>Les étapes obligatoires et leur durée réelle</h2>

          <h3>1. Le rendez-vous France Rénov' et le choix d'un Accompagnateur Rénov' (2 à 4 semaines)</h3>
          <p>
            Pour accéder à <a href="/blog/renovation-ampleur-2026-accompagnateur-renov">MaPrimeRénov' Rénovation d'ampleur</a>,
            un premier rendez-vous avec un conseiller France Rénov' (numéro gratuit : <strong>0 808 800 700</strong>)
            est obligatoire depuis l'arrêté du 20 février 2026. Ce conseiller oriente ensuite vers un
            Accompagnateur Rénov' agréé (MAR), dont l'intervention est elle aussi obligatoire pour
            toute demande d'aide en parcours accompagné.
          </p>

          <h3>2. L'audit énergétique (4 à 8 semaines)</h3>
          <p>
            L'audit réalisé par un professionnel certifié est le document de référence du projet : il
            identifie les travaux prioritaires, les gains attendus et les scénarios de financement.
            Entre la prise de rendez-vous, la visite et la rédaction du rapport, comptez 4 à 8 semaines.
            L'audit est partiellement financé dans le cadre de MaPrimeRénov' ampleur.
          </p>

          <h3>3. L'obtention des devis d'artisans RGE (2 à 6 semaines)</h3>
          <p>
            Les travaux doivent être réalisés par des entreprises certifiées <a href="/blog/choisir-artisan-rge-2026">RGE (Reconnu Garant de l'Environnement)</a>.
            La recherche, la prise de contact et l'obtention de devis comparatifs prennent en moyenne
            2 à 6 semaines — et davantage dans les bassins où la demande est forte.
          </p>

          <h3>4. L'instruction du dossier MaPrimeRénov' (4 à 12 semaines)</h3>
          <p>
            Une fois le dossier déposé sur la plateforme france-renov.gouv.fr, l'instruction par
            l'ANAH prend entre 4 et 12 semaines selon les périodes. L'accord de financement doit être
            obtenu <strong>avant</strong> le début des travaux.
          </p>

          <h3>5. La réalisation des travaux (3 à 10 semaines)</h3>
          <p>
            La durée du chantier dépend de la nature des interventions : isolation des combles seule
            (2 à 3 jours), remplacement d'une chaudière par une <a href="/pompe-a-chaleur">pompe à chaleur air/eau</a> (3 à 5 jours),
            ou combinaison isolation + PAC + ventilation (3 à 6 semaines).
          </p>

          <h3>6. Le DPE post-travaux (2 à 4 semaines)</h3>
          <p>
            Pour justifier l'atteinte des objectifs et clôturer le dossier MaPrimeRénov', un
            diagnostiqueur certifié réalise un nouveau DPE. Ce document atteste officiellement du
            changement de classe — c'est lui qui rend le logement de nouveau louable légalement.
          </p>

          <h2>Synthèse : un calendrier réaliste</h2>
          <p>
            En additionnant toutes ces étapes sans délai imprévu, voici ce qu'on obtient :
          </p>
          <ul>
            <li>Scénario favorable (rénovation simple, artisans disponibles) : <strong>5 à 7 mois</strong></li>
            <li>Scénario courant (rénovation d'ampleur standard) : <strong>8 à 12 mois</strong></li>
            <li>Scénario tendu (zone sous tension, dossier complexe) : <strong>12 à 18 mois</strong></li>
          </ul>
          <p>
            Avec une échéance à janvier 2028, un propriétaire qui ne démarre pas son projet avant
            <strong> le premier trimestre 2027</strong> prend un risque réel de ne pas obtenir son
            DPE post-travaux à temps. Et le marché des artisans RGE sera de plus en plus saturé à
            l'approche de la date limite.
          </p>

          <h2>Les aides disponibles pour financer la rénovation</h2>
          <p>
            Pour un logement classé F ou G, les aides sont substantielles :
          </p>
          <ul>
            <li>
              <strong>MaPrimeRénov' Rénovation d'ampleur</strong> : jusqu'à 80 % du montant des travaux,
              dans la limite de 30 000 € HT pour un gain de 2 classes DPE, ou 40 000 € HT pour un gain
              de 3 classes ou plus. Les taux varient selon les revenus du propriétaire.
            </li>
            <li>
              <strong>Primes CEE</strong> : cumulables avec MaPrimeRénov', elles sont bonifiées pour les
              logements des classes E, F et G depuis septembre 2026.
            </li>
            <li>
              <strong><a href="/blog/eco-ptz-2026-pret-taux-zero-renovation">Éco-PTZ</a></strong> :
              prêt à taux zéro jusqu'à 50 000 € pour financer le reste à charge, sans conditions de
              ressources pour les travaux de rénovation d'ampleur.
            </li>
            <li>
              <strong>TVA à 5,5 %</strong> : applicable sur l'ensemble des travaux d'amélioration
              énergétique réalisés par des professionnels.
            </li>
          </ul>

          <h2>Ne pas attendre : trois raisons d'agir maintenant</h2>
          <ol>
            <li>
              <strong>Le budget ANAH se resserre.</strong> Les enveloppes MaPrimeRénov' sont contingentées
              chaque année. Plus les dossiers s'accumulent en fin d'année, plus les délais s'allongent —
              et plus le risque d'un report à l'exercice suivant est élevé.
            </li>
            <li>
              <strong>Les artisans RGE sont en tension.</strong> La demande de professionnels certifiés
              dépasse déjà l'offre dans de nombreuses régions. Attendre 2027 signifie faire la queue
              derrière des milliers de propriétaires dans la même situation.
            </li>
            <li>
              <strong>Vous perdez des loyers ou prenez un risque juridique.</strong> Continuer à louer un
              logement F après 2028 expose au contentieux locatif. Chaque mois de retard dans le
              démarrage du projet est un mois de risque supplémentaire.
            </li>
          </ol>
        </article>

        {/* CTA RenoHab */}
        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Votre logement est classé F ou G ?</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            RenoHab est Accompagnateur Rénov' agréé. Nous établissons votre plan de rénovation,
            constituons votre dossier d'aides et coordonnons les artisans RGE — pour que vous soyez
            en conformité avant la date limite.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/dpe-gratuit" className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all">
              Évaluer mon DPE gratuitement
            </a>
            <a href="/" className="px-6 py-3 rounded-full border border-white/70 text-white font-semibold hover:bg-white/10 transition-all">
              Simuler mes aides
            </a>
          </div>
        </div>
      </main>

      <ArticleFooter />
    </div>
  );
}
