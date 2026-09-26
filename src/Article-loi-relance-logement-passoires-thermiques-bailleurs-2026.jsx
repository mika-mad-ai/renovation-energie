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

const PUBLISHED = '2026-09-21';
const PATH = '/blog/loi-relance-logement-passoires-thermiques-bailleurs-2026';

export default function ArticleLoiRelanceLogement2026() {
  useSeo({
    title: "Loi Relance Logement 2026 : passoires thermiques, bailleurs et interdiction de location | RenoHab",
    description:
      "La loi Relance Logement adoptée par le Sénat en juillet 2026 pourrait permettre aux propriétaires de logements G et F de continuer à louer sous conditions. Ce que ça change, et pourquoi rénover reste la meilleure stratégie.",
    path: PATH,
    image: '/blog/loi-relance-logement-passoires-thermiques-bailleurs-2026.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline:
        "Loi Relance Logement 2026 : les propriétaires bailleurs de passoires thermiques peuvent-ils encore louer ?",
      description:
        "La loi Relance Logement adoptée par le Sénat en juillet 2026 pourrait permettre aux propriétaires de logements G et F de continuer à louer sous conditions. Ce que ça change, et pourquoi rénover reste la meilleure stratégie.",
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
      about: ['Rénovation énergétique', 'Passoires thermiques', 'Propriétaires bailleurs', 'DPE location', 'Loi Relance Logement'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 21 septembre 2026 · Propriétaires bailleurs
          </p>

          <h1>Loi Relance Logement 2026 : les propriétaires bailleurs de passoires thermiques peuvent-ils encore louer ?</h1>

          <img
            src="/blog/loi-relance-logement-passoires-thermiques-bailleurs-2026.jpg"
            alt="Maison classée G ou F avec étiquette DPE : interdiction de location passoires thermiques 2026"
            className="w-full rounded-xl shadow-soft mb-8"
            loading="lazy"
          />

          <p className="lead">
            Depuis le 1er janvier 2025, les logements classés <strong>G au DPE</strong> sont
            officiellement interdits à la location. La prochaine échéance — l'interdiction des
            logements <strong>F en 2028</strong> — plane sur des centaines de milliers de
            propriétaires bailleurs. Mais un projet de loi adopté par le Sénat en juillet 2026
            pourrait assouplir ce calendrier. Tour d'horizon de la situation, de ce qui pourrait
            changer, et de la stratégie la plus sûre pour protéger son patrimoine.
          </p>

          <h2>Rappel du calendrier actuel : ce qui est déjà en vigueur</h2>
          <p>
            La loi Climat et Résilience de 2021 a instauré un calendrier progressif d'interdiction
            de mise en location des logements énergivores :
          </p>
          <ul>
            <li><strong>1er janvier 2023 :</strong> interdiction des logements G+ (consommation supérieure à 450 kWh/m²/an)</li>
            <li><strong>1er janvier 2025 :</strong> interdiction de tous les logements classés <strong>G</strong></li>
            <li><strong>1er janvier 2028 :</strong> extension prévue aux logements classés <strong>F</strong></li>
            <li><strong>1er janvier 2034 :</strong> extension prévue aux logements classés <strong>E</strong></li>
          </ul>
          <p>
            Concrètement, depuis début 2025, un propriétaire ne peut plus signer de nouveau bail
            ou renouveler un contrat de location pour un logement G. Les baux en cours ne sont
            pas résiliés d'office, mais le locataire peut exiger des travaux ou obtenir une
            réduction de loyer.
          </p>
          <p>
            <strong>Point important :</strong> la réforme du coefficient de conversion de
            l'électricité entrée en vigueur le 1er janvier 2026 (abaissé de 2,3 à 1,9) a permis à
            environ 850 000 logements chauffés à l'électricité de gagner une classe DPE sans
            travaux. Si votre bien était classé G avec un chauffage électrique, il vaut la peine
            de{' '}
            <a href="/dpe-gratuit">vérifier votre étiquette DPE actualisée</a>.
          </p>

          <h2>La Loi Relance Logement : ce qui est proposé</h2>
          <p>
            Face à la tension sur le marché locatif — on estime que jusqu'à 700 000 logements
            pourraient quitter le parc locatif privé d'ici 2028 si le calendrier actuel est
            appliqué sans aménagement — le gouvernement a soutenu un projet de loi dit
            « Relance Logement ».
          </p>
          <p>
            Ce texte a été <strong>adopté par le Sénat le 8 juillet 2026</strong> et était en
            examen à l'Assemblée nationale à l'automne 2026 selon une procédure accélérée.
          </p>
          <p>La mesure principale concernant les bailleurs prévoit :</p>
          <ul>
            <li>
              Les propriétaires de logements <strong>F ou G</strong> pourraient continuer à louer
              leur bien à condition de s'engager formellement à réaliser des travaux de
              rénovation dans un délai de <strong>3 ans</strong> pour une maison individuelle ou
              de <strong>5 ans</strong> pour un logement en copropriété.
            </li>
            <li>
              Cet engagement prendrait la forme d'un <strong>contrat de travaux signé avant le
              1er janvier 2030</strong>.
            </li>
            <li>
              Le loyer resterait plafonné ou ne pourrait pas être augmenté tant que les travaux
              ne sont pas réalisés.
            </li>
          </ul>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 not-prose my-6">
            <p className="text-amber-800 text-sm font-semibold">
              ⚠️ Attention : au moment de la publication de cet article, ce projet de loi
              n'était <strong>pas encore promulgué</strong>. Son contenu peut évoluer lors de
              l'examen parlementaire. Consultez{' '}
              <a href="https://www.legifrance.gouv.fr" target="_blank" rel="noopener noreferrer" className="underline">
                Légifrance
              </a>{' '}
              pour connaître la version définitivement adoptée.
            </p>
          </div>

          <h2>Pourquoi cet assouplissement ne change pas fondamentalement la donne</h2>
          <p>
            Même si la loi Relance Logement est adoptée telle quelle, elle ne supprime pas
            l'obligation de rénover : elle la décale dans le temps sous conditions. Pour un
            propriétaire bailleur, plusieurs raisons militent pour agir dès maintenant plutôt
            qu'attendre :
          </p>
          <h3>1. Les aides atteignent leur niveau maximal en 2026</h3>
          <p>
            MaPrimeRénov', les primes CEE et l'Éco-PTZ sont aujourd'hui les plus généreux depuis
            la création de ces dispositifs. La rénovation d'ampleur peut être subventionnée à
            hauteur de <strong>50 % à 70 % du coût des travaux</strong> selon les revenus du
            foyer. En attendant 2028 ou 2030, ces conditions pourraient se dégrader.
          </p>
          <h3>2. La valeur du bien augmente immédiatement</h3>
          <p>
            Un logement rénové et reclassé en C ou D voit sa valeur locative et vénale progresser.
            La décote des passoires thermiques à la vente peut atteindre 10 % à 20 % selon les
            marchés. Rénover, c'est aussi sécuriser la revente future.
          </p>
          <h3>3. Les locataires sont mieux protégés — et plus exigeants</h3>
          <p>
            Même si la location reste légalement possible pour un temps, un locataire peut
            aujourd'hui invoquer la non-décence énergétique pour demander une réduction de loyer
            ou contraindre le bailleur à réaliser des travaux. Le risque juridique et locatif
            existe indépendamment de la date d'interdiction.
          </p>

          <h2>Quels travaux réaliser en priorité ?</h2>
          <p>
            Pour sortir de la classe F ou G, les travaux les plus efficaces sont généralement :
          </p>
          <ul>
            <li>
              <strong>L'isolation thermique</strong> (combles, murs, plancher bas) : réduction
              immédiate des déperditions
            </li>
            <li>
              <strong>Le remplacement du système de chauffage</strong> par une{' '}
              <a href="/pompe-a-chaleur">pompe à chaleur air/eau</a>, seul équipement encore
              éligible en monogeste MaPrimeRénov' depuis septembre 2026
            </li>
            <li>
              <strong>La ventilation (VMC double flux)</strong> pour le confort et la qualité
              de l'air
            </li>
          </ul>
          <p>
            Combinés dans une <strong>rénovation d'ampleur</strong>, ces gestes permettent un
            saut de deux classes DPE minimum — condition pour accéder aux aides les plus
            importantes via MaPrimeRénov' Rénovation d'Ampleur.
          </p>

          <h2>Le rôle clé de l'Accompagnateur Rénov' (MAR)</h2>
          <p>
            Depuis 2024, la rénovation d'ampleur nécessite obligatoirement l'intervention d'un
            <strong> Maître d'Ouvrage Accompagnateur Rénov'</strong> (MAR) agréé pour débloquer
            les aides les plus élevées. Cet accompagnateur :
          </p>
          <ul>
            <li>Réalise un audit énergétique complet du logement</li>
            <li>Définit le scénario de travaux optimisé pour le saut de classes DPE</li>
            <li>Monte les dossiers MaPrimeRénov' et CEE</li>
            <li>Coordonne les artisans RGE et contrôle la qualité des travaux</li>
          </ul>
          <p>
            En tant qu'Accompagnateur Rénov' agréé, RenoHab prend en charge l'intégralité de
            cette démarche pour les propriétaires bailleurs souhaitant rénover leur bien avant
            les prochaines échéances réglementaires.
          </p>

          <h2>Ce qu'il faut retenir</h2>
          <ul>
            <li>L'interdiction de location des logements G est en vigueur depuis le 1er janvier 2025.</li>
            <li>La loi Relance Logement pourrait assouplir temporairement l'interdiction F (2028) sous conditions de travaux, mais n'est pas encore définitivement adoptée.</li>
            <li>Les aides 2026 (MaPrimeRénov', CEE, Éco-PTZ) permettent de financer une large part des travaux.</li>
            <li>Rénover maintenant protège la valeur du bien, évite les risques locatifs et sécurise les revenus à long terme.</li>
          </ul>
          <p>
            Pour connaître précisément la classe DPE actuelle de votre logement et le scénario
            de travaux le plus adapté,{' '}
            <a href="/#simulateur">utilisez notre simulateur gratuit</a> ou contactez
            directement un conseiller RenoHab.
          </p>
        </article>

        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Votre bien est classé F ou G ?</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            Obtenez un bilan énergétique gratuit et découvrez combien d'aides vous pouvez mobiliser pour rénover votre logement dès 2026.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/dpe-gratuit" className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all">
              Estimer mon DPE gratuitement
            </a>
            <a href="/pompe-a-chaleur" className="px-6 py-3 rounded-full border border-white/70 text-white font-semibold hover:bg-white/10 transition-all">
              Découvrir les solutions chauffage
            </a>
          </div>
        </div>
      </main>

      <ArticleFooter />
    </div>
  );
}
