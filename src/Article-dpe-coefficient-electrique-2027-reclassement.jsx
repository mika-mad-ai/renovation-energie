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

const PUBLISHED = '2026-10-17';
const PATH = '/blog/dpe-coefficient-electrique-2027-reclassement';

export default function ArticleDpeCoefficient2027() {
  useSeo({
    title: "Coefficient électrique DPE 2027 : votre logement peut changer de classe au 1er janvier | RenoHab",
    description:
      "Au 1er janvier 2027, le coefficient de conversion de l'électricité dans le DPE passe de 1,9 à 1,7. Environ 300 000 logements pourraient changer de classe, dont des passoires thermiques. Attestation gratuite ADEME, impact sur la location et la vente.",
    path: PATH,
    image: '/blog/dpe-coefficient-electrique-2027-reclassement.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline:
        "Coefficient électrique DPE 2027 : 300 000 logements changent de classe au 1er janvier",
      description:
        "Au 1er janvier 2027, le coefficient de conversion de l'électricité dans le DPE passe de 1,9 à 1,7. Environ 300 000 logements pourraient changer de classe. Ce que ça change pour les propriétaires, les bailleurs et les vendeurs.",
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
      about: ['DPE', 'Réglementation', 'Passoires thermiques', 'Réforme 2027'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 17 oct. 2026 · DPE
          </p>

          <h1>Coefficient électrique DPE 2027 : 300 000 logements changent de classe au 1er janvier</h1>

          <img
            src="/blog/dpe-coefficient-electrique-2027-reclassement.jpg"
            alt="Étiquette DPE — réforme du coefficient électrique 2027, logements qui changent de classe"
            className="w-full rounded-xl object-cover mb-6"
            style={{ maxHeight: 400 }}
          />

          <p className="lead">
            Un arrêté du 19 août 2026 publié au Journal officiel entérine une nouvelle évolution
            du DPE : au <strong>1er janvier 2027</strong>, le coefficient de conversion de
            l'électricité passera de <strong>1,9 à 1,7</strong>. Environ{' '}
            <strong>300 000 logements</strong> pourraient changer de classe énergétique sans
            aucun travaux. Pour les propriétaires de passoires thermiques chauffées à l'électricité,
            c'est peut-être une très bonne nouvelle.
          </p>

          <h2>Pourquoi un « coefficient électrique » dans le DPE ?</h2>
          <p>
            Le Diagnostic de Performance Énergétique mesure la consommation d'énergie primaire
            d'un logement, c'est-à-dire l'énergie puisée dans les ressources naturelles avant
            toute transformation. L'électricité produite en centrale (nucléaire, hydraulique,
            solaire) étant soumise à des pertes de conversion et de transport, on lui applique un
            <strong> coefficient multiplicateur</strong> pour estimer l'énergie primaire à partir
            de l'énergie finale (celle qui sort de votre prise).
          </p>
          <p>
            Plus ce coefficient est élevé, plus un logement chauffé à l'électricité semble
            « énergivore » dans le calcul DPE, même si sa facture réelle reste modérée. C'est
            pourquoi des dizaines de milliers de logements bien isolés, chauffés par des radiateurs
            ou une pompe à chaleur, se retrouvaient classés F ou G malgré un confort réel satisfaisant.
          </p>

          <h2>L'historique en trois étapes : de 2,3 à 1,7</h2>
          <p>
            La réforme de 2027 s'inscrit dans un mouvement progressif d'alignement sur la réalité
            du mix électrique français :
          </p>
          <ul>
            <li>
              <strong>Jusqu'au 31 décembre 2025</strong> : coefficient de <strong>2,3</strong> —
              héritage d'une époque où le réseau européen était plus carboné.
            </li>
            <li>
              <strong>Depuis le 1er janvier 2026</strong> : coefficient de <strong>1,9</strong> —
              première correction qui avait déjà permis à environ 850 000 logements de gagner une
              classe.
            </li>
            <li>
              <strong>À partir du 1er janvier 2027</strong> : coefficient de <strong>1,7</strong> —
              valeur par défaut retenue au niveau européen, reflétant le caractère très décarboné
              du réseau électrique français (nucléaire, hydraulique, renouvelables).
            </li>
          </ul>
          <p>
            À titre de comparaison, les coefficients du gaz naturel (1,0) et du fioul (1,0) restent
            inchangés : la réforme ne concerne que l'électricité.
          </p>

          <h2>Qui est concerné en 2027 ?</h2>
          <p>
            Seuls les logements dont le chauffage ou la production d'eau chaude repose sur
            l'électricité sont touchés : convecteurs électriques, radiateurs à inertie, pompes à
            chaleur air/eau ou air/air, chauffe-eau thermodynamique, planchers chauffants
            électriques. Un appartement chauffé au gaz ne verra pas son DPE évoluer.
          </p>
          <p>
            L'impact réel dépend de la position du logement par rapport aux seuils de classe.
            Si votre consommation d'énergie primaire calculée est proche de la borne entre deux
            classes, le nouvel abattement de 0,2 points sur le coefficient peut suffire à faire
            basculer l'étiquette d'un cran. Selon les estimations officielles, environ{' '}
            <strong>300 000 logements</strong> supplémentaires devraient changer de classe au
            1er janvier 2027, dont une part significative de biens actuellement classés F ou G.
          </p>

          <h2>Aucun logement ne peut être dégradé</h2>
          <p>
            Le ministère chargé du logement a confirmé que la réforme n'aura pas d'effet négatif :
            en abaissant le coefficient, on réduit mécaniquement la consommation d'énergie
            primaire calculée. Un logement peut donc gagner une classe ou rester identique,
            mais <strong>en aucun cas perdre une classe</strong> à cause de cette réforme.
          </p>

          <h2>Dois-je refaire mon DPE ?</h2>
          <p>
            Non. Les diagnostics établis entre le 1er janvier 2021 et le 31 décembre 2026 restent
            valables 10 ans. L'ADEME met à disposition, sur son{' '}
            <a href="/dpe-gratuit">observatoire, une attestation gratuite</a>{' '}
            qui recalcule automatiquement votre étiquette avec le nouveau coefficient — sans qu'un
            diagnostiqueur ait besoin de se déplacer. Cette attestation a la même valeur légale
            que l'étiquette originale pour les annonces immobilières et les dossiers de location.
          </p>
          <p>
            Si votre DPE date d'avant le 1er janvier 2021, il n'est plus valide et vous devrez
            faire réaliser un nouveau diagnostic par un professionnel certifié.
          </p>

          <h2>Impact pour les propriétaires bailleurs</h2>
          <p>
            C'est l'enjeu le plus direct. Depuis le 1er janvier 2025, les logements classés{' '}
            <strong>G sont interdits à la mise en location</strong>. Les F seront concernés à
            partir du <strong>1er janvier 2028</strong>. Pour un propriétaire dont le bien est
            classé G à cause d'un coefficient électrique élevé, le passage de 1,9 à 1,7 peut
            représenter la différence entre l'obligation de rénover sous contrainte et la possibilité
            de continuer à louer sereinement le temps de planifier les travaux.
          </p>
          <p>
            Si vous avez un bien classé F ou G dont le chauffage est électrique, il est fortement
            conseillé de{' '}
            <a href="/dpe-gratuit">vérifier dès maintenant votre nouveau classement simulé</a>{' '}
            via l'observatoire ADEME et d'en parler avec un{' '}
            <a href="/">Accompagnateur Rénov'</a> pour anticiper la suite.
          </p>

          <h2>Impact pour les vendeurs et acheteurs</h2>
          <p>
            La <em>valeur verte</em> d'un bien — la prime ou la décote liée à son DPE — est
            aujourd'hui mesurable : selon les notaires, un logement classé F ou G subit une décote
            de 5 à 20 % par rapport à un équivalent classé D. Gagner une classe sans travaux
            grâce au nouveau coefficient, c'est potentiellement récupérer plusieurs milliers
            d'euros de valeur à la vente, et surtout sortir de l'obligation d'afficher un audit
            énergétique réglementaire dès la mise en annonce.
          </p>
          <p>
            Pour les acheteurs, la vigilance reste de mise : le DPE actuel (coefficient 1,9) peut
            ne plus refléter la réalité du logement après le 1er janvier 2027. Demandez toujours
            au vendeur de préciser si une attestation ADEME actualisée est disponible, et
            n'hésitez pas à{' '}
            <a href="/blog">consulter nos guides</a> pour comprendre toutes les implications
            réglementaires d'un DPE F ou G.
          </p>

          <h2>Ce que la réforme ne change pas</h2>
          <ul>
            <li>
              Les <strong>seuils de classe</strong> (en kWh d'énergie primaire par m² et par an)
              restent identiques : A (&lt; 70), B (71–110), C (111–180), D (181–250), E (251–330),
              F (331–420), G (&gt; 420).
            </li>
            <li>
              Les obligations d'interdiction de location : calendrier G (2025), F (2028), E (2034)
              inchangé.
            </li>
            <li>
              Les aides à la rénovation : MaPrimeRénov', CEE, éco-PTZ ne dépendent pas du
              coefficient mais du niveau de performance atteint après travaux.
            </li>
            <li>
              Les logements chauffés au gaz, fioul ou bois ne verront aucun changement.
            </li>
          </ul>

          <h2>Que faire dès maintenant ?</h2>
          <ol>
            <li>
              <strong>Récupérez votre attestation ADEME gratuite</strong> dès que le coefficient
              1,7 sera appliqué (janvier 2027) ou simulez votre nouvelle classe via le{' '}
              <a href="/dpe-gratuit">simulateur DPE de RenoHab</a>.
            </li>
            <li>
              <strong>Si votre bien reste F ou G</strong> après la réforme, ne tardez pas : les
              délais pour trouver un artisan RGE, monter un dossier MaPrimeRénov' et réaliser
              les travaux s'allongent. Un rendez-vous France Rénov' gratuit est la première étape.
            </li>
            <li>
              <strong>Si votre bien passe en E ou mieux</strong>, c'est une opportunité pour
              remettre un logement en location, renégocier un prix de vente ou simplement
              planifier des travaux sur un horizon moins contraint.
            </li>
          </ol>

          <p>
            Vous avez un projet de{' '}
            <a href="/pompe-a-chaleur">pompe à chaleur</a> ou d'isolation et vous voulez savoir
            comment cette réforme s'intègre dans votre stratégie ? En tant qu'Accompagnateur
            Rénov' agréé, RenoHab vous aide à combiner la réforme DPE 2027 avec les meilleures
            aides disponibles pour maximiser l'impact de vos travaux.
          </p>
        </article>

        {/* CTA RenoHab */}
        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Mon logement change-t-il de classe en 2027 ?</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            Simulez dès maintenant votre nouveau DPE avec le coefficient 1,7 et découvrez les aides
            disponibles pour aller plus loin.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/dpe-gratuit" className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all">
              Simuler mon DPE gratuit
            </a>
            <a href="/#simulateur" className="px-6 py-3 rounded-full border border-white/70 text-white font-semibold hover:bg-white/10 transition-all">
              Estimer mes aides
            </a>
          </div>
        </div>
      </main>

      <ArticleFooter />
    </div>
  );
}
