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

const PUBLISHED = '2026-11-19';
const PATH = '/blog/vote-assemblee-fin-interdiction-location-passoires-2026';

export default function ArticleVoteAssembleePassoires2026() {
  useSeo({
    title: "Vote de l'Assemblée : fin des interdictions de louer des passoires thermiques ? | RenoHab",
    description:
      "Le 17 novembre 2026, les députés ont adopté un amendement supprimant les interdictions de louer les logements classés G, F et E. Ce que cela change — et ne change pas — pour les propriétaires bailleurs.",
    path: PATH,
    image: '/blog/vote-assemblee-fin-interdiction-location-passoires-2026.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline:
        "Vote de l'Assemblée nationale : la fin des interdictions de louer des passoires thermiques ?",
      description:
        "Le 17 novembre 2026, les députés ont adopté un amendement supprimant les interdictions de louer les logements classés G, F et E. Ce que cela change — et ne change pas — pour les propriétaires bailleurs.",
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
      about: ['DPE', 'Passoires thermiques', 'Interdiction de location', 'Réforme législative 2026'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">

          <p className="text-sm text-gray-500 !mb-2">
            Publié le 19 novembre 2026 · DPE &amp; Location
          </p>

          <h1>Vote de l'Assemblée nationale : la fin des interdictions de louer des passoires thermiques ?</h1>

          <img
            src="/blog/vote-assemblee-fin-interdiction-location-passoires-2026.jpg"
            alt="Étiquette DPE d'un logement classé G ou F — vote de l'Assemblée nationale sur les interdictions de location 2026"
            className="w-full rounded-xl my-6 object-cover max-h-80"
            loading="lazy"
          />

          <p className="lead">
            Le 17 novembre 2026, les députés ont adopté, par 108 voix contre 102, un amendement porté
            par le Rassemblement national visant à supprimer les interdictions de louer les logements
            classés G, F et E. Une décision surprise, adoptée contre l'avis du gouvernement, qui
            bouleverse un calendrier réglementaire en place depuis la loi Climat et Résilience de 2021.
            Mais rien n'est encore définitif.
          </p>

          <h2>Que dit cet amendement exactement ?</h2>
          <p>
            L'amendement adopté en séance à l'Assemblée nationale le 17 novembre 2026 vise à abroger
            le mécanisme d'interdiction progressive de location des logements selon leur{' '}
            <a href="/dpe-gratuit">classe DPE</a> :
          </p>
          <ul>
            <li>
              <strong>Classe G :</strong> interdiction de louer en vigueur depuis le 1er janvier
              2025 (nouveaux contrats).
            </li>
            <li>
              <strong>Classe F :</strong> interdiction prévue au 1er janvier 2028.
            </li>
            <li>
              <strong>Classe E :</strong> interdiction prévue au 1er janvier 2034.
            </li>
          </ul>
          <p>
            L'amendement supprime ce calendrier dans son intégralité. Il est présenté par ses auteurs
            comme une mesure de protection des locataires, pour éviter qu'une vague de mise en vente
            de logements anciens ne réduise encore l'offre locative déjà tendue. Le gouvernement s'y
            est opposé, préférant un assouplissement ciblé plutôt qu'une suppression totale.
          </p>

          <h2>Ce que cela change — et ne change pas — aujourd'hui</h2>
          <p>
            Ce vote est une <strong>première lecture à l'Assemblée nationale</strong>. Avant d'avoir
            force de loi, le texte doit :
          </p>
          <ul>
            <li>Être adopté dans les prochaines étapes de la discussion budgétaire ou législative ;</li>
            <li>
              Faire l'objet d'une navette entre l'Assemblée nationale et le Sénat, qui devra se
              prononcer à son tour ;
            </li>
            <li>
              Être éventuellement soumis au Conseil constitutionnel si une commission mixte paritaire
              ne parvient pas à un accord.
            </li>
          </ul>
          <p>
            En l'état, <strong>aucune règle n'a changé</strong> pour les baux en cours ni pour les
            propriétaires en attente de signature. L'interdiction de louer les logements classés G
            (pour les nouveaux contrats) demeure applicable tant que le texte n'est pas promulgué au
            Journal officiel.
          </p>

          <h2>Gel des loyers : il n'est pas concerné par ce vote</h2>
          <p>
            Attention à ne pas confondre les sujets. Le gel des loyers des passoires thermiques —
            en vigueur depuis août 2022 — est un dispositif distinct, qui s'applique aux logements
            classés F ou G. Ce vote ne le touche pas. Tant qu'un propriétaire détient un logement
            classé F ou G, il ne peut pas augmenter le loyer entre deux locataires, ni en cours de
            bail (hors indice IRL). La suppression de l'interdiction de location, si elle était
            définitivement adoptée, ne lèverait pas ce gel.
          </p>

          <h2>Pourquoi les acteurs de la rénovation s'inquiètent</h2>
          <p>
            Associations de propriétaires, fédérations d'artisans et acteurs de la rénovation
            énergétique ont réagi avec inquiétude. Leurs arguments principaux :
          </p>
          <ul>
            <li>
              Supprimer la contrainte réglementaire, c'est retirer la principale incitation à rénover
              pour des centaines de milliers de bailleurs.
            </li>
            <li>
              Les quelque 5 millions de passoires thermiques encore en location resteraient dans le
              parc locatif sans perspective de mise aux normes, au détriment du confort et de la santé
              des locataires.
            </li>
            <li>
              La filière de la rénovation, qui emploie plusieurs centaines de milliers de personnes
              en France, risquerait de voir sa demande se contracter.
            </li>
          </ul>
          <p>
            Du côté des locataires, les associations soulignent que vivre dans une passoire thermique
            signifie des factures de chauffage plus élevées et des conditions de logement dégradées.
            Pour eux, l'interdiction de location était une garantie minimale de qualité.
          </p>

          <h2>Ce que les propriétaires bailleurs doivent retenir</h2>
          <p>
            Quelle que soit l'issue de la navette parlementaire, rénover reste la stratégie la plus
            solide pour un propriétaire bailleur :
          </p>
          <ul>
            <li>
              <strong>La valeur verte :</strong> un logement bien classé se loue plus facilement et
              plus cher. La décote des passoires thermiques à la vente est documentée et persiste
              indépendamment de la réglementation.
            </li>
            <li>
              <strong>Les aides restent disponibles :</strong> MaPrimeRénov' (rénovation d'ampleur),{' '}
              <a href="/blog/eco-ptz-2026-pret-taux-zero-renovation">éco-PTZ</a>,{' '}
              <a href="/blog/cee-2026-prime-energie-comment-en-profiter">primes CEE</a>, TVA à 5,5 %
              et déficit foncier jusqu'à 21 400 € sont toujours accessibles.
            </li>
            <li>
              <strong>Le gel des loyers subsiste</strong> pour les F et G tant que le DPE n'est pas
              amélioré.
            </li>
            <li>
              <strong>Les délais s'allongent :</strong> obtenir un rendez-vous France Rénov', un
              devis d'artisan RGE puis un paiement de MaPrimeRénov' prend en moyenne 6 à 10 mois.
              Attendre une issue parlementaire incertaine, c'est risquer de manquer les aides
              actuelles ou de devoir agir dans la précipitation.
            </li>
          </ul>

          <h2>Que faire concrètement dès maintenant ?</h2>
          <p>
            Première étape : connaître la classe réelle de votre logement avec un{' '}
            <a href="/dpe-gratuit">DPE actualisé</a>. Si votre bien est classé F ou G, un audit
            énergétique permettra de définir le plan de travaux le plus rentable et d'accéder à la
            rénovation d'ampleur via MaPrimeRénov'.
          </p>
          <p>
            En tant qu'<strong>Accompagnateur Rénov' agréé</strong>, RenoHab monte les dossiers
            d'aides, coordonne les artisans RGE et suit votre chantier de bout en bout — quelle que
            soit l'issue de la navette parlementaire.
          </p>
          <p>
            Utilisez notre <a href="/#simulateur">simulateur d'aides</a> pour estimer en 2 minutes
            le montant auquel vous pouvez prétendre selon votre situation.
          </p>

        </article>

        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Votre logement est classé F ou G ?</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            Rénovez maintenant et profitez des aides 2026 : audit, plan de travaux, montage du
            dossier MaPrimeRénov' et suivi de chantier avec un Accompagnateur Rénov' agréé.
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
