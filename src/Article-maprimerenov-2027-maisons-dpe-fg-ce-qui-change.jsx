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

const PUBLISHED = '2026-09-12';
const PATH = '/blog/maprimerenov-2027-maisons-dpe-fg-ce-qui-change';

export default function ArticleMaPrimeRenov2027DpeFG() {
  useSeo({
    title: "Maisons DPE F ou G : ce qui change avec MaPrimeRénov' au 1er janvier 2027 | RenoHab",
    description:
      "À partir du 1er janvier 2027, les maisons classées F ou G devront basculer vers la rénovation d'ampleur pour accéder à MaPrimeRénov'. Tout ce que les propriétaires doivent savoir et faire avant cette échéance.",
    path: PATH,
    image: '/blog/maprimerenov-2027-maisons-dpe-fg-ce-qui-change.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: "Maisons DPE F ou G : ce qui change avec MaPrimeRénov' au 1er janvier 2027",
      description:
        "À partir du 1er janvier 2027, les maisons classées F ou G devront basculer vers la rénovation d'ampleur pour accéder à MaPrimeRénov'. Tout ce que les propriétaires doivent savoir et faire avant cette échéance.",
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
      about: ['MaPrimeRénov', 'DPE', 'Passoire thermique', 'Rénovation d\'ampleur', 'Aides 2027'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 12 septembre 2026 · Aides & financement
          </p>

          <h1>Maisons DPE F ou G : ce qui change avec MaPrimeRénov' au 1er janvier 2027</h1>

          <img
            src="/blog/maprimerenov-2027-maisons-dpe-fg-ce-qui-change.jpg"
            alt="Étiquette DPE F ou G sur une maison individuelle ancienne – réforme MaPrimeRénov' 2027"
            className="w-full rounded-xl shadow-md mb-8 object-cover"
            style={{ maxHeight: '420px' }}
          />

          <p className="lead">
            Si votre logement est classé <strong>F ou G au DPE</strong>, une échéance importante approche : le <strong>1er janvier 2027</strong>. À partir de cette date, les règles d'accès à MaPrimeRénov' changent significativement pour les propriétaires de maisons individuelles qualifiées de passoires thermiques. Comprendre ces évolutions maintenant vous permettra d'agir avant qu'il ne soit trop tard.
          </p>

          <h2>Rappel : la réforme du 1er septembre 2026</h2>
          <p>
            Depuis le 1er septembre 2026, le parcours par geste de MaPrimeRénov' a été profondément recentré. Seules quatre catégories de travaux restent éligibles :
          </p>
          <ul>
            <li>La <a href="/pompe-a-chaleur">pompe à chaleur air/eau</a></li>
            <li>La pompe à chaleur géothermique ou solarothermique</li>
            <li>Le raccordement à un réseau de chaleur ou de froid</li>
            <li>La dépose d'une cuve à fioul</li>
          </ul>
          <p>
            L'audit énergétique reste également pris en charge. Cette réforme d'ampleur impose donc de repenser sa stratégie de rénovation, en particulier pour les ménages dont le logement est classé en catégorie F ou G.
          </p>

          <h2>Ce qui change concrètement au 1er janvier 2027</h2>

          <h3>Le DPE devient obligatoire pour les demandes par geste</h3>
          <p>
            À partir du 1er janvier 2027, toute demande de MaPrimeRénov' dans le cadre du parcours par geste en France métropolitaine devra être accompagnée d'un <a href="/dpe-gratuit">DPE valide</a>. Cette pièce justificative permettra à l'Anah de déterminer dans quel parcours le ménage doit s'inscrire.
          </p>

          <h3>Les maisons F et G orientées vers la rénovation d'ampleur</h3>
          <p>
            Pour les maisons individuelles classées F ou G, le changement est structurel : en matière de décarbonation du chauffage (remplacement d'une chaudière gaz ou fioul par une pompe à chaleur, par exemple), le simple remplacement du système de chauffage ne suffira plus à obtenir MaPrimeRénov'. Ces logements seront orientés vers le <strong>parcours de rénovation d'ampleur</strong>, qui exige :
          </p>
          <ul>
            <li>Un <strong>audit énergétique préalable</strong> réalisé par un professionnel certifié</li>
            <li>L'accompagnement d'un <strong>Mon Accompagnateur Rénov' (MAR)</strong>, dont le coût est en grande partie financé par MaPrimeRénov'</li>
            <li>Un gain d'au moins <strong>deux classes DPE</strong> à l'issue des travaux</li>
            <li>L'incompatibilité avec le maintien ou l'installation d'un système de chauffage fossile (gaz, fioul, charbon)</li>
          </ul>

          <h3>Une extension prévue pour le parcours par geste</h3>
          <p>
            Pour atténuer l'impact de ce basculement, le gouvernement a prévu une période transitoire : les maisons classées F ou G pourront encore accéder au parcours par geste (pour les quatre travaux encore éligibles) jusqu'au <strong>31 décembre 2027</strong> en France métropolitaine. Cette fenêtre de 12 mois supplémentaires permet aux propriétaires de se préparer, mais ne doit pas être une raison de procrastiner.
          </p>

          <h2>Pourquoi agir maintenant, avant 2027 ?</h2>
          <p>
            Si vous êtes propriétaire d'une maison classée F ou G, il y a plusieurs raisons concrètes d'entamer votre démarche avant le 1er janvier 2027 :
          </p>
          <ul>
            <li><strong>Accéder encore au parcours par geste simplifié</strong> : aujourd'hui, il n'est pas encore obligatoire de fournir un DPE ni de passer par un accompagnateur. Ces démarches restent volontaires.</li>
            <li><strong>Éviter la pression de fin d'année</strong> : les entreprises RGE sont très sollicitées en fin d'exercice. Anticiper permet d'obtenir de meilleurs délais et prix.</li>
            <li><strong>Bénéficier des taux de MaPrimeRénov' actuels</strong> : les barèmes peuvent évoluer d'une année à l'autre. Bloquer un dossier maintenant, c'est sécuriser les montants en vigueur.</li>
            <li><strong>Préparer un plan de travaux cohérent</strong> : la rénovation d'ampleur nécessite une vision globale. Un audit énergétique réalisé dès maintenant vous donnera une feuille de route pour prioriser vos investissements.</li>
          </ul>

          <h2>Le parcours rénovation d'ampleur : ce qu'il faut savoir</h2>
          <p>
            Le parcours accompagné (ou rénovation d'ampleur) n'est pas une contrainte supplémentaire : c'est une opportunité de financement plus important et d'une rénovation plus efficace. Pour une maison classée F ou G, les taux de MaPrimeRénov' peuvent atteindre <strong>50 à 70 % du montant des travaux</strong> selon les revenus du ménage, avec un plafond de dépenses éligibles de 70 000 € par logement.
          </p>
          <p>
            Les travaux couverts par ce parcours incluent notamment :
          </p>
          <ul>
            <li>L'isolation des murs, des combles et des planchers</li>
            <li>Le remplacement des fenêtres</li>
            <li>L'installation d'une pompe à chaleur ou le raccordement à un réseau de chaleur</li>
            <li>La ventilation (VMC double flux)</li>
          </ul>
          <p>
            L'objectif est d'atteindre au minimum la classe D, soit un gain d'au moins deux classes DPE. Pour de nombreuses passoires thermiques, cela représente une transformation profonde — mais aussi une valorisation significative du bien immobilier.
          </p>

          <h2>Comment se préparer : les étapes clés</h2>

          <h3>1. Faire réaliser un DPE et un audit énergétique</h3>
          <p>
            Si vous ne connaissez pas encore la classe DPE de votre logement, commencez par obtenir un <a href="/dpe-gratuit">DPE officiel</a>. Pour planifier une rénovation d'ampleur, l'audit énergétique (environ 500 à 1 000 €, en partie remboursé) est l'étape suivante incontournable : il identifie les points faibles du bâtiment et propose plusieurs scénarios de travaux chiffrés.
          </p>

          <h3>2. Prendre rendez-vous avec un conseiller France Rénov'</h3>
          <p>
            Le réseau France Rénov' propose des rendez-vous gratuits avec des conseillers spécialisés. Ils vous aident à comprendre votre situation, les aides auxquelles vous avez droit, et la marche à suivre. C'est le point de départ recommandé pour tout projet de rénovation d'ampleur.
          </p>

          <h3>3. Faire appel à un Accompagnateur Rénov' agréé</h3>
          <p>
            Le MAR (Mon Accompagnateur Rénov') est obligatoire pour les projets de rénovation d'ampleur. Il coordonne les démarches administratives, valide le plan de travaux et s'assure que les résultats attendus sont atteints. <strong>RenoHab est Accompagnateur Rénov' agréé</strong> : nous pouvons vous accompagner de A à Z, depuis l'audit jusqu'à la réception des chantiers.
          </p>

          <h2>Cumuler les aides pour maximiser votre financement</h2>
          <p>
            MaPrimeRénov' n'est pas la seule aide disponible. En rénovation d'ampleur, il est possible de la cumuler avec :
          </p>
          <ul>
            <li>Les <strong>Certificats d'Économies d'Énergie (CEE)</strong>, versés par les fournisseurs d'énergie</li>
            <li>L'<strong>Éco-PTZ</strong> (prêt à taux zéro jusqu'à 50 000 €) pour financer le reste à charge</li>
            <li>Le <strong>Prêt Avance Rénovation (PAR)</strong> pour les ménages ne disposant pas d'apport</li>
            <li>Les aides régionales ou communales selon votre territoire</li>
          </ul>
          <p>
            Pour un logement classé F ou G avec des ménages aux revenus modestes, il n'est pas rare que le reste à charge soit quasi nul une fois toutes les aides cumulées. Vous pouvez estimer votre financement directement depuis notre{' '}
            <a href="/#simulateur">simulateur en ligne</a>.
          </p>

          <h2>Conclusion : ne laissez pas 2027 vous surprendre</h2>
          <p>
            La réforme de MaPrimeRénov' au 1er janvier 2027 marque un tournant pour les propriétaires de passoires thermiques. Le message est clair : les logements les plus énergivores doivent faire l'objet d'une rénovation globale et ambitieuse, pas d'un simple remplacement d'équipement. C'est une opportunité, pas une sanction : les aides n'ont jamais été aussi importantes, et les résultats — confort, économies, valorisation du patrimoine — en valent la peine.
          </p>
          <p>
            <strong>Ne tardez pas.</strong> Contactez un conseiller RenoHab dès aujourd'hui pour lancer votre audit et sécuriser votre dossier d'aide avant les échéances de 2027.
          </p>

          <div className="not-prose mt-10 p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center">
            <p className="text-lg font-semibold text-emerald-800 mb-3">
              Votre maison est classée F ou G ? Parlons-en.
            </p>
            <p className="text-gray-600 mb-5">
              RenoHab, Accompagnateur Rénov' agréé, vous accompagne de l'audit jusqu'aux travaux — sans avance de frais sur les honoraires MAR.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold shadow-md hover:shadow-lg transition-all"
            >
              Obtenir un rendez-vous gratuit
            </a>
          </div>
        </article>
      </main>

      <ArticleFooter />
    </div>
  );
}
