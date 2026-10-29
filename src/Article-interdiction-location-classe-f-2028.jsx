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

const PUBLISHED = '2026-10-29';
const PATH = '/blog/interdiction-location-classe-f-2028';

export default function ArticleInterdictionLocationClasseF2028() {
  useSeo({
    title: "Interdiction de louer les logements classe F en 2028 : que faire avant l'échéance ? | RenoHab",
    description:
      "Au 1er janvier 2028, les logements classés F seront interdits à la location. Plus d'un million de bailleurs sont concernés. Voici les travaux à planifier et les aides disponibles.",
    path: PATH,
    image: '/blog/interdiction-location-classe-f-2028.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline:
        "Interdiction de louer les logements classés F en 2028 : ce que doit faire le propriétaire bailleur",
      description:
        "Au 1er janvier 2028, les logements classés F seront interdits à la location. Plus d'un million de bailleurs sont concernés. Voici les travaux à planifier et les aides disponibles.",
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
      about: ['DPE classe F', 'Interdiction de location', 'Rénovation énergétique', 'Propriétaire bailleur'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 29 octobre 2026 · DPE &amp; Location
          </p>

          <h1>Interdiction de louer les logements classés F en 2028 : ce que doit faire le propriétaire bailleur</h1>

          <img
            src="/blog/interdiction-location-classe-f-2028.jpg"
            alt="Logement classé F sur le DPE : un propriétaire bailleur face à l'obligation de rénover avant 2028"
            className="w-full rounded-xl shadow-card mb-6"
            loading="lazy"
          />

          <p className="lead">
            Le 1er janvier 2025, les logements classés <strong>G</strong> ont été interdits à la
            location. Dans exactement <strong>15 mois</strong>, c'est au tour des logements
            classés <strong>F</strong> : à partir du <strong>1er janvier 2028</strong>, il sera
            légalement impossible de louer ou de renouveler un bail pour ce type de bien. Plus d'un
            million de propriétaires bailleurs sont concernés. Si votre bien est en classe F, le
            moment d'agir, c'est maintenant.
          </p>

          <h2>Le calendrier de la loi Climat et Résilience</h2>
          <p>
            La{' '}
            <strong>loi Climat et Résilience du 22 août 2021</strong> a fixé un calendrier
            progressif d'élimination des « passoires thermiques » du parc locatif :
          </p>
          <ul>
            <li>
              <strong>Depuis le 1er août 2022 :</strong> gel des loyers pour les logements F et G
              (aucune augmentation possible, même à la relocation).
            </li>
            <li>
              <strong>Depuis le 1er janvier 2025 :</strong> les logements classés <strong>G</strong>{' '}
              (consommation supérieure à 450 kWh/m²/an) sont interdits à la mise en location. Les
              baux existants ne peuvent plus être renouvelés.
            </li>
            <li>
              <strong>À partir du 1er janvier 2028 :</strong> les logements classés <strong>F</strong>{' '}
              (entre 331 et 450 kWh/m²/an) seront interdits à la location, y compris pour les baux
              en cours.
            </li>
            <li>
              <strong>À partir du 1er janvier 2034 :</strong> les logements classés <strong>E</strong>{' '}
              seront à leur tour concernés.
            </li>
          </ul>
          <p>
            Ces interdictions s'appliquent à toute mise en location d'un logement constituant la
            résidence principale du locataire, en France métropolitaine. Les DOM-TOM bénéficient de
            calendriers légèrement décalés.
          </p>

          <h2>Combien de logements F sont en location ?</h2>
          <p>
            Selon les données de l'ADEME et du ministère du Logement, les logements classés F
            représentent environ <strong>11 % du parc locatif privé</strong> en France
            métropolitaine. On estime à plus d'<strong>un million</strong> le nombre de logements
            locatifs concernés par l'échéance de 2028. Ce sont autant de propriétaires bailleurs
            qui devront soit rénover leur bien, soit renoncer à le louer — au risque de voir leur
            patrimoine perdre fortement de sa valeur.
          </p>
          <p>
            Rappelons que dès aujourd'hui, un logement F ne peut plus faire l'objet d'une
            augmentation de loyer : le gel s'applique déjà depuis 2022. La valeur locative de ces
            biens s'érode année après année, tandis que les contraintes légales se renforcent.
          </p>

          <h2>Quelles sanctions en cas de non-respect ?</h2>
          <p>
            La loi ne crée pas d'amende directe pour le propriétaire qui louerait quand même un
            logement interdit. En revanche, elle ouvre plusieurs voies de recours au locataire :
          </p>
          <ul>
            <li>
              Saisine du juge pour <strong>contraindre le bailleur à réaliser des travaux</strong>{' '}
              sous astreinte.
            </li>
            <li>
              Demande de <strong>réduction de loyer</strong> proportionnelle à l'indécence du
              logement.
            </li>
            <li>
              En cas de litige porté en justice, le propriétaire peut se voir condamné à rembourser
              des loyers perçus pour un logement non-conforme.
            </li>
          </ul>
          <p>
            En pratique, la pression viendra aussi des agences immobilières et des notaires, qui
            refuseront de gérer ou de vendre un bien en situation d'illégalité locative.
          </p>

          <h2>Comment sortir d'un DPE classe F ?</h2>
          <p>
            La classe F est souvent liée à une combinaison de défauts : mauvaise isolation,
            chauffage énergivore (électricité à effet joule ou fioul ancien), menuiseries datées.
            Les travaux à privilégier sont :
          </p>

          <h3>1. L'isolation thermique en priorité</h3>
          <p>
            L'isolation des combles perdus, des murs (par l'extérieur ou l'intérieur) et du
            plancher bas représente souvent le levier le plus efficace pour faire progresser la
            classe DPE. Un logement mal isolé peut perdre jusqu'à 30 % de sa chaleur par le toit.
            Ces travaux sont éligibles à <strong>MaPrimeRénov'</strong> et aux{' '}
            <strong>Certificats d'Économies d'Énergie (CEE)</strong>, avec une TVA réduite à 5,5 %.
          </p>

          <h3>2. Le remplacement du système de chauffage</h3>
          <p>
            Remplacer une chaudière au fioul ou des convecteurs électriques par une{' '}
            <a href="/pompe-a-chaleur">pompe à chaleur air/eau</a> permet un gain de 1 à 2 classes
            DPE à lui seul. La <strong>pompe à chaleur air/eau</strong> est aujourd'hui le système
            de chauffage le mieux subventionné : jusqu'à 70 % de prise en charge pour les ménages
            modestes, dans le cadre de MaPrimeRénov'.
          </p>

          <h3>3. La ventilation</h3>
          <p>
            Une VMC hygro-réglable ou double flux améliore le confort tout en optimisant le calcul
            du DPE. Elle est indispensable dès lors qu'on isole fortement un logement, pour éviter
            les problèmes d'humidité et préserver la qualité de l'air.
          </p>

          <h3>4. Le remplacement des menuiseries</h3>
          <p>
            Fenêtres double vitrage, portes d'entrée isolantes : ces gestes apportent un gain de
            confort sensible et contribuent, à la marge, à l'amélioration de la classe DPE.
          </p>

          <h2>Les aides disponibles pour les propriétaires bailleurs</h2>
          <p>
            Bonne nouvelle : les propriétaires bailleurs ont accès aux mêmes aides que les
            propriétaires occupants, sous réserve de respecter les plafonds de loyers après
            travaux (dans le cadre du dispositif Loc'Avantages pour MaPrimeRénov' bailleur).
          </p>
          <ul>
            <li>
              <strong>MaPrimeRénov' Bailleur</strong> : jusqu'à 25 % du montant des travaux (en
              dehors de la rénovation d'ampleur), plafonné selon les revenus et les travaux.
            </li>
            <li>
              <strong>CEE (Certificats d'Économies d'Énergie)</strong> : primes versées par les
              fournisseurs d'énergie pour chaque geste d'isolation ou changement de chauffage,
              cumulables avec MaPrimeRénov'.
            </li>
            <li>
              <strong>Éco-PTZ</strong> : prêt à taux zéro jusqu'à 50 000 € pour financer une
              rénovation d'ampleur, accessible aux bailleurs.
            </li>
            <li>
              <strong>TVA à 5,5 %</strong> sur tous les travaux de rénovation énergétique réalisés
              par un artisan RGE.
            </li>
            <li>
              <strong>Déficit foncier doublé</strong> : les propriétaires bailleurs qui réalisent
              des travaux permettant de sortir d'une classe F peuvent déduire jusqu'à
              21 400 €/an de leur revenu global (dispositif 2023–2025, prolongeable).
            </li>
          </ul>
          <p>
            Pour en savoir plus sur les aides spécifiques aux bailleurs, consultez notre article
            dédié sur{' '}
            <a href="/blog/maprimerenov-proprietaire-bailleur-2026">
              MaPrimeRénov' pour les propriétaires bailleurs en 2026
            </a>
            .
          </p>

          <h2>Pourquoi commencer dès maintenant, sans attendre 2027 ?</h2>
          <p>
            Quinze mois, c'est court. Voici pourquoi il ne faut pas attendre :
          </p>
          <ul>
            <li>
              <strong>Les délais de traitement ANAH</strong> : un dossier MaPrimeRénov' peut
              prendre 3 à 6 mois entre le dépôt et le versement de l'aide. Commencer les travaux
              sans aide versée expose à des difficultés de trésorerie.
            </li>
            <li>
              <strong>Les délais de chantier</strong> : entre la recherche d'un{' '}
              <a href="/blog/choisir-artisan-rge-2026">artisan RGE</a> disponible, l'établissement
              des devis, la commande de matériaux et la réalisation, comptez 4 à 8 mois pour un
              chantier complet.
            </li>
            <li>
              <strong>L'engorgement prévisible</strong> : à l'approche de janvier 2028, la demande
              va exploser. Les artisans RGE seront pris d'assaut, comme ce fut le cas fin 2024
              avant l'interdiction des G. Les délais s'allongeront et les prix augmenteront.
            </li>
            <li>
              <strong>L'audit énergétique</strong> : pour une rénovation d'ampleur finançable par
              MaPrimeRénov' Ampleur, un audit préalable est obligatoire. Cet audit doit être réalisé
              par un Accompagnateur Rénov' agréé avant le démarrage des travaux.
            </li>
          </ul>

          <h2>Par où commencer : les 3 premières étapes</h2>
          <ol>
            <li>
              <strong>Faire vérifier votre DPE actuel :</strong> si votre logement n'a pas de DPE
              récent (postérieur au 1er juillet 2021), faites-en réaliser un nouveau. Depuis janvier
              2026, le nouveau coefficient de calcul de l'électricité peut avoir fait progresser
              votre logement d'une classe.{' '}
              <a href="/dpe-gratuit">Estimez gratuitement votre DPE avec RenoHab.</a>
            </li>
            <li>
              <strong>Identifier les travaux prioritaires :</strong> un audit énergétique ou un
              bilan thermique permet de hiérarchiser les travaux selon leur impact sur la classe DPE
              et leur coût. L'Accompagnateur Rénov' de RenoHab réalise ce diagnostic et vous
              propose un plan de travaux sur mesure.
            </li>
            <li>
              <strong>Monter le dossier d'aides en amont :</strong> les aides sont soumises à
              condition que le dossier soit déposé avant le démarrage des travaux. RenoHab prend en
              charge l'intégralité du montage administratif pour vous.
            </li>
          </ol>
        </article>

        {/* CTA RenoHab */}
        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">
            Votre logement est en classe F ? Agissez avant 2028
          </h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            RenoHab, Accompagnateur Rénov' agréé, prend en charge votre dossier de A à Z : audit,
            plan de travaux, montage des aides et coordination des artisans RGE. Évitez l'urgence
            de 2027 — commencez dès aujourd'hui.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/dpe-gratuit"
              className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all"
            >
              Estimer mon DPE gratuitement
            </a>
            <a
              href="/#simulateur"
              className="px-6 py-3 rounded-full border border-white/70 text-white font-semibold hover:bg-white/10 transition-all"
            >
              Simuler mes aides
            </a>
          </div>
        </div>
      </main>

      <ArticleFooter />
    </div>
  );
}
