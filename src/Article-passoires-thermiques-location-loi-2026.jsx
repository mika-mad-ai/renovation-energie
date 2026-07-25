import React from 'react';
import { Link } from 'react-router-dom';
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

const PUBLISHED = '2026-07-25';
const PATH = '/blog/passoires-thermiques-location-loi-2026';

export default function ArticlePassoiresThermiquesLocation() {
  useSeo({
    title: "Passoires thermiques en 2026 : louer un F ou G est-il à nouveau possible ? | RenoHab",
    description:
      "Le Sénat a voté le 8 juillet 2026 pour permettre la relocation des logements F et G sous engagement de travaux. Calendrier, sanctions et aides pour propriétaires bailleurs.",
    path: PATH,
    image: '/blog/passoires-thermiques-location-loi-2026.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline:
        "Passoires thermiques en 2026 : louer un F ou G est-il à nouveau possible ?",
      description:
        "Le Sénat a voté le 8 juillet 2026 pour permettre la relocation des logements F et G sous engagement de travaux. Calendrier, sanctions et aides pour propriétaires bailleurs.",
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
      about: ['Passoires thermiques', 'DPE', 'Location immobilière', 'MaPrimeRénov\''],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 25 juillet 2026 · Réglementation &amp; location
          </p>

          <h1>Passoires thermiques en 2026 : louer un F ou G est-il à nouveau possible ?</h1>

          <img
            src="/blog/passoires-thermiques-location-loi-2026.jpg"
            alt="Diagnostic de performance énergétique affiché sur un logement à louer"
            className="w-full rounded-2xl shadow-card mb-8 object-cover"
            style={{ maxHeight: '420px' }}
          />

          <p className="lead">
            Depuis le 1er janvier 2025, les logements classés G au{' '}
            <Link to="/dpe-gratuit">DPE</Link> sont officiellement interdits à la location. Les
            F devaient suivre en 2028. Mais le vote du Sénat du <strong>8 juillet 2026</strong>{' '}
            rebat les cartes : un propriétaire bailleur pourrait de nouveau louer son passoire
            thermique, à condition de s'engager formellement à rénover. Voici ce qui change, ce
            qui reste obligatoire, et comment en profiter pour valoriser votre bien.
          </p>

          <h2>Le calendrier d'interdiction : ce qui était prévu</h2>
          <p>
            La loi Climat et Résilience de 2021 avait fixé un calendrier progressif d'exclusion
            des logements énergivores du marché locatif :
          </p>
          <ul>
            <li><strong>Classe G</strong> : interdite à la location depuis le 1<sup>er</sup> janvier 2025.</li>
            <li><strong>Classe F</strong> : interdiction prévue au 1<sup>er</sup> janvier 2028.</li>
            <li><strong>Classe E</strong> : interdiction prévue au 1<sup>er</sup> janvier 2034.</li>
          </ul>
          <p>
            En pratique, un bailleur dont le logement classé G est sous bail en cours ne peut
            plus le relouer à un nouveau locataire depuis début 2025. En cas de violation, le
            locataire peut exiger une réduction de loyer ou engager la responsabilité du
            propriétaire.
          </p>

          <h2>Ce que change la loi Relance logement (vote Sénat du 8 juillet 2026)</h2>
          <p>
            Face au risque de retrait massif de logements du marché locatif — environ{' '}
            <strong>700 000 biens</strong> concernés —, le gouvernement a présenté en urgence
            le projet de loi <em>Relance et décentralisation du logement</em>. Adopté par le
            Sénat le 8 juillet 2026 et transmis à l'Assemblée nationale le lendemain, il prévoit
            une voie de sortie pour les propriétaires de F et G :
          </p>
          <ul>
            <li>
              <strong>Engagement de travaux</strong> : le bailleur signe un contrat avec une
              entreprise du bâtiment avant 2030 pour rénover le logement ; il peut alors le
              relouer pendant la durée des travaux.
            </li>
            <li>
              <strong>Impossibilité technique</strong> : si le syndicat de copropriété refuse
              les travaux, le propriétaire est exonéré de l'obligation à titre provisoire.
            </li>
            <li>
              <strong>Objectif affiché</strong> : remettre 650 000 à 700 000 logements dans le
              circuit locatif d'ici 2028 tout en maintenant l'obligation de rénover.
            </li>
          </ul>
          <p>
            <em>
              Attention : à la date de publication de cet article, le texte a été adopté en
              première lecture par le Sénat mais doit encore être examiné par l'Assemblée
              nationale. Les modalités exactes (délais, sanctions) peuvent évoluer.
            </em>
          </p>

          <h2>Le coup de pouce DPE 2026 : 850 000 logements sortent de la passoire</h2>
          <p>
            En parallèle, une réforme technique du DPE est entrée en vigueur le{' '}
            <strong>1er janvier 2026</strong> : le coefficient de conversion de l'énergie
            électrique est passé de 2,3 à <strong>1,9</strong>. Résultat : environ{' '}
            <strong>850 000 logements</strong> chauffés à l'électricité ont gagné une classe DPE
            — sans aucun travaux. Si votre logement est classé F ou G avec un chauffage
            électrique, il vaut la peine de faire établir un nouveau{' '}
            <Link to="/dpe-gratuit">diagnostic DPE</Link> : il se peut que vous soyez déjà sorti
            du statut de passoire.
          </p>

          <h2>Les aides disponibles pour rénover une passoire thermique</h2>
          <p>
            Qu'il s'agisse d'éviter les sanctions ou d'anticiper la future interdiction des F,
            rénover reste la meilleure stratégie. Les propriétaires bailleurs bénéficient
            aujourd'hui d'un arsenal d'aides conséquent :
          </p>

          <h3>MaPrimeRénov' (parcours accompagné)</h3>
          <p>
            Les logements classés F ou G sont désormais exclus du parcours geste par geste.
            Seul le <strong>parcours accompagné</strong> (rénovation d'ampleur avec saut d'au
            moins deux classes DPE) est accessible — et il est très généreux :
          </p>
          <ul>
            <li>
              Jusqu'à <strong>80 % du coût des travaux</strong> financés pour les revenus
              modestes.
            </li>
            <li>
              Plafonds de dépenses : <strong>30 000 € HT</strong> pour un gain de 2 classes,{' '}
              <strong>40 000 € HT</strong> pour un gain de 3 classes ou plus.
            </li>
            <li>
              Un rendez-vous préalable avec un conseiller{' '}
              <strong>France Rénov'</strong> est désormais obligatoire avant toute demande.
            </li>
          </ul>
          <p>
            <em>
              Conseil pratique : les logements F ou G peuvent encore accéder au parcours
              geste par geste jusqu'au <strong>31 décembre 2026</strong>. À partir du{' '}
              1<sup>er</sup> janvier 2027, seul le parcours accompagné sera disponible — autant
              anticiper.
            </em>
          </p>

          <h3>Les Certificats d'Économies d'Énergie (CEE)</h3>
          <p>
            Les primes CEE sont cumulables avec MaPrimeRénov' et accessibles sans condition
            de revenus. Isolation des combles, pompe à chaleur, VMC double flux : chaque geste
            éligible génère une prime versée par les fournisseurs d'énergie. RenoHab monte
            l'intégralité des dossiers CEE pour ses clients.
          </p>

          <h3>L'Éco-PTZ</h3>
          <p>
            Le prêt à taux zéro pour la rénovation peut financer jusqu'à 50 000 € de travaux
            sur 20 ans, sans avance de trésorerie pour le bailleur. Il est cumulable avec
            MaPrimeRénov'.
          </p>

          <h2>Quelle stratégie adopter selon votre situation ?</h2>
          <ul>
            <li>
              <strong>Logement G sous bail actif</strong> : vérifiez d'abord si la réforme DPE
              2026 vous fait passer en F — un nouveau diagnostic suffit. Sinon, engagez la
              rénovation dès maintenant pour éviter toute sanction.
            </li>
            <li>
              <strong>Logement F vacant</strong> : attendez la publication définitive de la loi
              Relance logement, mais préparez dès à présent votre plan de travaux avec un
              accompagnateur pour dépôt de dossier rapide.
            </li>
            <li>
              <strong>Logement E ou D</strong> : anticipez — une{' '}
              <Link to="/pompe-a-chaleur">pompe à chaleur air/eau</Link> combinée à une
              isolation performante permet souvent de sauter deux classes DPE et d'ouvrir le
              parcours accompagné.
            </li>
          </ul>

          <h2>Par où commencer ?</h2>
          <p>
            La première étape est toujours un diagnostic fiable de votre logement. En tant
            qu'<strong>Accompagnateur Rénov' agréé</strong>, RenoHab analyse votre DPE actuel,
            identifie les travaux prioritaires, monte les dossiers MaPrimeRénov' et CEE, et
            coordonne les artisans RGE. Un seul interlocuteur, du diagnostic à la prime versée.
          </p>
        </article>

        {/* CTA */}
        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Votre logement est-il concerné ?</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            Estimez gratuitement la classe DPE de votre bien et découvrez les aides disponibles
            pour sortir du statut de passoire thermique.
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
