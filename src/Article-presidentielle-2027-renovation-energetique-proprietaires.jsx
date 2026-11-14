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
        <p className="mt-3 text-sm text-gray-500">
          <a href="/mentions-legales" className="hover:text-emerald-300 transition-colors">Mentions légales</a>
          <span className="mx-2 opacity-60">·</span>
          <a href="/confidentialite" className="hover:text-emerald-300 transition-colors">Politique de confidentialité</a>
        </p>
      </div>
    </footer>
  );
}

const PUBLISHED = '2026-11-14';
const PATH = '/blog/presidentielle-2027-renovation-energetique-proprietaires';

export default function ArticlePresidentielle2027Renovation() {
  useSeo({
    title: "Présidentielle 2027 et rénovation énergétique : faut-il attendre les élections pour rénover ? | RenoHab",
    description:
      "Élection présidentielle 2027, MaPrimeRénov', DPE, aides : pourquoi les propriétaires ne doivent pas attendre le résultat des urnes pour lancer leurs travaux de rénovation énergétique.",
    path: PATH,
    image: '/blog/presidentielle-2027-renovation-energetique-proprietaires.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline:
        "Présidentielle 2027 et rénovation énergétique : faut-il attendre les élections pour rénover ?",
      description:
        "Élection présidentielle 2027, MaPrimeRénov', DPE, aides : pourquoi les propriétaires ne doivent pas attendre le résultat des urnes pour lancer leurs travaux de rénovation énergétique.",
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
      about: ['Rénovation énergétique', 'MaPrimeRénov', 'Présidentielle 2027', 'Aides travaux'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 14 novembre 2026 · Aides &amp; Politique
          </p>

          <h1>Présidentielle 2027 et rénovation énergétique : faut-il attendre les élections pour rénover&nbsp;?</h1>

          <img
            src="/blog/presidentielle-2027-renovation-energetique-proprietaires.jpg"
            alt="Maison rénovée avec panneau solaire — enjeux de la présidentielle 2027 pour la rénovation énergétique"
            className="w-full rounded-xl shadow-soft my-6"
            loading="lazy"
          />

          <p className="lead">
            Avec l'élection présidentielle fixée au printemps 2027, de nombreux propriétaires hésitent :
            vaut-il mieux attendre de connaître le programme du futur locataire de l'Élysée avant de
            lancer des travaux de rénovation énergétique&nbsp;? La réponse courte est non. Voici pourquoi,
            et ce que les candidats proposent vraiment.
          </p>

          <h2>Le calendrier de la présidentielle et des aides</h2>
          <p>
            Le premier tour de l'élection présidentielle est prévu en avril 2027, le second tour en mai.
            Mais les arbitrages budgétaires qui fixeront les aides à la rénovation pour les années
            suivantes seront décidés à l'automne 2027, lors de l'examen du projet de loi de finances (PLF).
            Même si un nouveau président est élu au printemps, <strong>le cadre des aides ne changera pas
            avant le 1er janvier 2028 au plus tôt</strong>. D'ici là, le dispositif actuel — CEE, éco-PTZ,
            TVA à 5,5 %, MaPrimeRénov' — reste le seul jeu en ville.
          </p>

          <h2>Ce que les principaux candidats ont avancé</h2>
          <p>
            Les positions sur la rénovation énergétique varient selon les formations politiques. Voici
            ce qui ressort des programmes et déclarations publics disponibles à ce stade.
          </p>
          <ul>
            <li>
              <strong>Marine Le Pen (RN)</strong> propose de transformer MaPrimeRénov' en un prêt
              remboursable lors de la revente du logement, plutôt qu'en subvention directe. Elle souhaite
              aussi assouplir les obligations liées aux interdictions de location DPE.
            </li>
            <li>
              <strong>Gabriel Attal (Renaissance)</strong> mise sur un fonds de rénovation financé en
              partie par une taxe sur les rachats d'actions, avec un objectif déclaré de 300&nbsp;000
              logements supplémentaires rénovés.
            </li>
            <li>
              <strong>Marine Tondelier (Les Écologistes)</strong> place la transition énergétique au cœur
              de son programme, avec un accent marqué sur les ménages modestes et les passoires
              thermiques.
            </li>
            <li>
              <strong>Édouard Philippe (Horizons)</strong> oriente sa politique énergétique
              prioritairement vers le nucléaire, avec moins de détails publiés sur le volet logement.
            </li>
          </ul>
          <p>
            Selon un sondage réalisé par Hellio en octobre 2026, <strong>83&nbsp;% des Français
            considèrent la rénovation énergétique des logements comme une priorité nationale</strong>,
            ce qui incite la quasi-totalité des candidats à s'y intéresser — à des degrés et selon des
            modalités très différentes.
          </p>

          <h2>Pourquoi attendre l'élection serait une erreur</h2>

          <h3>1. Les aides actuelles sont connues et applicables maintenant</h3>
          <p>
            Qu'importe le résultat des urnes, trois dispositifs restent accessibles dès aujourd'hui et
            jusqu'en 2027 au minimum&nbsp;:
          </p>
          <ul>
            <li>
              L'<strong>éco-PTZ</strong> (jusqu'à 50&nbsp;000&nbsp;€ à taux zéro pour une rénovation
              d'ampleur), prolongé jusqu'au 31 décembre 2027 par la loi de finances 2026.
            </li>
            <li>
              Les <strong>Certificats d'Économies d'Énergie (CEE)</strong>, dont la 6e période couvre
              2026-2030, avec un budget dédié à la lutte contre la précarité énergétique.
            </li>
            <li>
              La <strong>TVA à 5,5&nbsp;%</strong> sur les travaux de rénovation énergétique, applicable
              sans condition de revenus.
            </li>
          </ul>
          <p>
            MaPrimeRénov', encadrée par des restrictions budgétaires, reste accessible pour les
            rénovations d'ampleur sur les passoires thermiques classées E, F ou G.
          </p>

          <h3>2. Les délais de traitement des dossiers sont longs</h3>
          <p>
            Monter un dossier de rénovation d'ampleur via un Accompagnateur Rénov' prend en moyenne
            4 à 6 mois. Si vous attendez le résultat de l'élection pour commencer vos démarches,
            vous ne démarrerez pas les travaux avant l'hiver 2027-2028 — avec un cadre d'aides
            encore incertain à cette date.
          </p>

          <h3>3. Les interdictions de location avancent indépendamment du calendrier électoral</h3>
          <p>
            L'<strong>interdiction de louer les logements classés F en 2028</strong> et E en 2034 est
            inscrite dans la loi. Même si un futur gouvernement l'assouplit, les banques et les
            acheteurs continueront à valoriser les biens bien classés&nbsp;: la décote des passoires
            thermiques sur le marché immobilier est une réalité économique qui ne disparaîtra pas
            avec un changement de gouvernement.
          </p>

          <h3>4. Les prix des travaux ne baisseront pas</h3>
          <p>
            Les artisans RGE qualifiés sont sollicités. Les délais d'intervention tendent à s'allonger
            à l'approche des pics de demande post-électoraux, lorsque les propriétaires se décident
            tous en même temps. Réserver un artisan maintenant, c'est sécuriser un planning et éviter
            les majorations tarifaires de dernière minute.
          </p>

          <h2>Ce qui pourrait changer après 2027 : les scénarios</h2>
          <p>
            Honnêtement, plusieurs scénarios sont envisageables selon l'orientation du futur
            gouvernement&nbsp;:
          </p>
          <ul>
            <li>
              <strong>Renforcement des aides&nbsp;:</strong> certains candidats souhaitent porter le
              budget annuel de MaPrimeRénov' à 4 milliards d'euros. Ce serait une bonne nouvelle pour
              les dossiers déposés dès 2028.
            </li>
            <li>
              <strong>Transformation en prêt remboursable&nbsp;:</strong> si MaPrimeRénov' devient un
              dispositif de type « prêt adossé au logement », les ménages modestes perdraient leur
              principale aide en capital — un risque réel pour ceux qui ne peuvent pas s'endetter.
            </li>
            <li>
              <strong>Assouplissement du DPE&nbsp;:</strong> décaler les interdictions de location ne
              ferait pas disparaître la valeur verte du marché immobilier, mais réduirait la pression
              réglementaire à court terme pour les bailleurs.
            </li>
          </ul>
          <p>
            Dans tous les cas, les travaux réalisés aujourd'hui seront valorisés quel que soit le
            scénario politique. Un logement rénové est toujours une valeur sûre.
          </p>

          <h2>Ce que vous pouvez faire concrètement</h2>

          <h3>Propriétaire occupant d'une passoire thermique</h3>
          <ol>
            <li>
              Faites réaliser un <a href="/dpe-gratuit">diagnostic de performance énergétique</a> par
              un professionnel certifié.
            </li>
            <li>
              Montez votre dossier de <a href="/pompe-a-chaleur">rénovation d'ampleur</a> avec un
              Accompagnateur Rénov' agréé dès maintenant.
            </li>
            <li>
              Cumulez éco-PTZ, CEE et MaPrimeRénov' pour maximiser les aides disponibles sous le
              cadre actuel.
            </li>
          </ol>

          <h3>Propriétaire bailleur d'un logement classé F ou G</h3>
          <p>
            L'interdiction de louer arrive en 2028, soit dans moins de 14 mois. Chaque mois d'attente
            est un mois de loyer potentiellement perdu ou de risque juridique accru. Consultez le{' '}
            <a href="/blog">guide complet sur notre blog</a> pour connaître vos obligations et les
            démarches à lancer en priorité.
          </p>

          <h2>En résumé</h2>
          <p>
            L'incertitude électorale de 2027 ne doit pas paralyser vos projets de rénovation
            énergétique. Les aides actuelles sont substantielles, les délais de traitement longs,
            et les obligations réglementaires avancent indépendamment des cycles politiques. Agir
            maintenant, c'est choisir la certitude des aides d'aujourd'hui plutôt que les promesses
            — ou les coupes — de demain.
          </p>

          <div className="not-prose bg-emerald-50 border border-emerald-200 rounded-2xl p-6 mt-10">
            <h3 className="text-lg font-bold text-emerald-800 mb-2">
              Besoin d'un accompagnement personnalisé&nbsp;?
            </h3>
            <p className="text-emerald-700 mb-4">
              RenoHab, Accompagnateur Rénov' agréé, analyse votre projet, identifie les aides
              auxquelles vous avez droit et monte votre dossier sans frais avancés — quelle que soit
              l'issue des prochaines élections.
            </p>
            <a
              href="/"
              className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold shadow-soft hover:shadow-glow transition-all"
            >
              Simuler mes aides gratuitement →
            </a>
          </div>
        </article>
      </main>

      <ArticleFooter />
    </div>
  );
}
