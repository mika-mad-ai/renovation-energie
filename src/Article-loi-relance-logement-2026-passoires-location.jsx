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

const PUBLISHED = '2026-07-04';
const PATH = '/blog/loi-relance-logement-2026-passoires-location';

export default function ArticleLoiRelanceLogement() {
  useSeo({
    title: "Passoires thermiques : la loi Relance logement 2026 autorise la location sous engagement de travaux | RenoHab",
    description:
      "Le projet de loi Relance logement présenté le 24 juin 2026 permet de relouer les passoires F et G sous condition de rénover dans un délai de 3 à 5 ans. Ce que cela change pour les propriétaires bailleurs.",
    path: PATH,
    image: 'https://renohab.fr/blog/loi-relance-logement-2026-passoires-location.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline:
        "Passoires thermiques : la loi Relance logement 2026 autorise la location sous engagement de travaux",
      description:
        "Le projet de loi Relance logement présenté le 24 juin 2026 permet de relouer les passoires F et G sous condition de rénover dans un délai de 3 à 5 ans.",
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
      about: ['Passoires thermiques', 'Loi logement 2026', 'DPE', 'Location', 'Rénovation énergétique'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 4 juillet 2026 · Réglementation &amp; bailleurs
          </p>

          <h1>Passoires thermiques : la loi Relance logement 2026 autorise la location sous engagement de travaux</h1>

          <img
            src="/blog/loi-relance-logement-2026-passoires-location.jpg"
            alt="Maison à rénover — passoires thermiques et loi logement 2026"
            className="w-full rounded-xl object-cover max-h-80 mb-8"
            loading="eager"
          />

          <p className="lead">
            Depuis le 1er janvier 2025, les logements classés G au DPE ne peuvent plus être mis en
            location. Les F devaient suivre en 2028. Mais le projet de loi « Relance du logement »,
            présenté en conseil des ministres le 24 juin 2026, assouplit ces interdictions : 700 000
            passoires thermiques pourraient revenir sur le marché locatif — sous condition de
            s'engager à rénover dans un délai défini.
          </p>

          <h2>Ce que prévoit le projet de loi Relance logement</h2>
          <p>
            Présenté par Vincent Jeanbrun, ministre de la Ville et du Logement, le texte compte dix
            articles organisés autour de cinq axes : un statut du bailleur privé, la remise en
            location des passoires thermiques, la simplification administrative, un rôle renforcé des
            maires et l'habitat partagé pour les seniors. L'objectif affiché : produire 2 millions de
            logements supplémentaires d'ici 2030, soit 400 000 par an.
          </p>
          <p>
            La mesure phare concernant les passoires consiste à autoriser la location d'un logement
            classé F ou G en échange d'un <strong>engagement contractuel de rénovation</strong> :
          </p>
          <ul>
            <li><strong>3 ans</strong> pour une maison individuelle</li>
            <li><strong>5 ans</strong> pour un logement en copropriété</li>
          </ul>
          <p>
            À l'échéance, le logement doit avoir quitté le statut de passoire énergétique. Le texte
            définitif précisera l'étiquette DPE minimale à atteindre.
          </p>

          <h2>Pourquoi ce revirement du gouvernement ?</h2>
          <p>
            Le gouvernement défend une logique pragmatique : l'interdiction stricte a poussé des
            centaines de milliers de biens hors du marché locatif, aggravant la tension sur l'offre
            dans de nombreuses villes. Plutôt qu'un retrait brutal, l'exécutif mise sur une{' '}
            <em>« grande vague de rénovation »</em> progressive, avec un délai raisonnable pour les
            propriétaires.
          </p>
          <p>
            Cette approche est critiquée par les associations environnementales, qui y voient un recul
            de l'ambition climatique. Pour les bailleurs, en revanche, elle offre un souffle bienvenu
            — à condition que les travaux soient engagés dans le délai imparti et vérifiés.
          </p>

          <h2>Ce que cela change concrètement pour les propriétaires</h2>

          <h3>Logement classé G : une ouverture conditionnelle</h3>
          <p>
            Depuis le 1er janvier 2025, un logement G ne peut plus faire l'objet d'un nouveau bail ni
            d'un renouvellement. Avec le projet de loi Relance logement, il pourrait être reloué
            légalement en contrepartie d'un engagement formalisé de rénovation. Ce dispositif n'est
            pas encore en vigueur : le texte doit passer par le Parlement. Son calendrier d'adoption
            est à surveiller de près.
          </p>

          <h3>Logement classé F : le couperet de 2028 transformé en engagement</h3>
          <p>
            L'interdiction de location prévue en 2028 pour les F pourrait être remplacée par un
            engagement de travaux à horizon 3 à 5 ans. Là encore, le calendrier parlementaire
            tranchera.
          </p>

          <h3>Dans tous les cas : vérifiez d'abord votre étiquette DPE actuelle</h3>
          <p>
            Un DPE établi avant le 1er janvier 2026 ne tient pas compte du nouveau coefficient de
            conversion de l'électricité, abaissé de 2,3 à 1,9. Ce changement a fait gagner une classe
            à environ 850 000 logements chauffés à l'électricité — sans aucun travaux. Si votre DPE
            est ancien, votre logement est peut-être déjà sorti du statut de passoire selon la
            méthode 2026.
          </p>
          <p>
            → <a href="/dpe-gratuit">Estimez votre DPE gratuitement avec RenoHab</a>
          </p>

          <h2>Rénover reste la meilleure stratégie, quoi qu'il arrive</h2>
          <p>
            L'assouplissement temporaire donne du temps — il ne supprime pas l'obligation de fond. Et
            anticiper la rénovation permet de bénéficier des aides 2026, avant de nouveaux ajustements
            budgétaires.
          </p>

          <h3>Les travaux prioritaires pour sortir du statut de passoire</h3>
          <ul>
            <li><strong>Isolation des combles perdus</strong> : le meilleur rapport coût / gain énergétique, jusqu'à 30 % d'économies sur le chauffage</li>
            <li><strong>Isolation des murs</strong> par l'intérieur (ITI) ou l'extérieur (ITE)</li>
            <li>
              <strong>Remplacement de la chaudière fioul ou gaz</strong> par une{' '}
              <a href="/pompe-a-chaleur">pompe à chaleur air/eau</a>, désormais seul équipement de
              chauffage encore éligible au parcours par geste
            </li>
            <li><strong>Remplacement des menuiseries</strong> : double ou triple vitrage pour limiter les déperditions</li>
          </ul>
          <p>
            Combinés, ces gestes permettent un saut de deux classes DPE, condition d'accès à la{' '}
            <strong>rénovation d'ampleur</strong> — le parcours le plus avantageux financièrement.
          </p>

          <h3>Les aides disponibles en 2026</h3>
          <ul>
            <li>
              <strong>MaPrimeRénov' rénovation d'ampleur</strong> : jusqu'à 70 % du coût des travaux
              pour les ménages modestes, plafond de 40 000 à 55 000 € HT selon le saut de classes
            </li>
            <li><strong>Certificats d'Économies d'Énergie (CEE)</strong> : primes versées par les fournisseurs d'énergie</li>
            <li><strong>Éco-PTZ</strong> : financement à taux zéro du reste à charge, cumulable avec MaPrimeRénov'</li>
            <li><strong>TVA à 5,5 %</strong> : applicable à l'ensemble des travaux d'amélioration énergétique</li>
          </ul>
          <p>
            → <a href="/simulateur">Testez votre éligibilité aux aides avec notre simulateur</a>
          </p>

          <h2>Par où commencer ?</h2>
          <p>
            Que vous attendiez le vote de la loi ou que vous souhaitiez anticiper, voici les étapes
            concrètes :
          </p>
          <ol>
            <li>
              <strong>Faire réaliser un DPE actualisé</strong> si le vôtre date d'avant 2026 — le
              nouveau calcul peut vous faire gagner une classe décisive.
            </li>
            <li>
              <strong>Commander un audit énergétique</strong> pour identifier les travaux les plus
              pertinents et leur coût réel.
            </li>
            <li>
              <strong>Déposer un dossier MaPrimeRénov'</strong> rapidement si vous visez des travaux
              encore éligibles au parcours par geste avant septembre 2026.
            </li>
            <li>
              <strong>Se faire accompagner par un Mon Accompagnateur Rénov' (MAR) agréé</strong>,
              dont le rôle est précisément de coordonner travaux et financement.
            </li>
          </ol>
        </article>

        {/* CTA RenoHab */}
        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Propriétaire bailleur ? On monte votre dossier</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            Audit énergétique, plan de travaux, montage des aides MaPrimeRénov' et CEE : RenoHab,
            Accompagnateur Rénov' agréé, vous accompagne de A à Z pour rénover votre passoire et
            sécuriser vos revenus locatifs.
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
              Étudier une pompe à chaleur
            </a>
          </div>
        </div>
      </main>

      <ArticleFooter />
    </div>
  );
}
