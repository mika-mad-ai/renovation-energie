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

const PUBLISHED = '2026-09-10';
const PATH = '/blog/entretien-pompe-a-chaleur-pac-2026';

export default function ArticleEntretienPompeAChaleur2026() {
  useSeo({
    title: "Entretien pompe à chaleur 2026 : obligations, fréquence et prix | RenoHab",
    description:
      "Combien coûte l'entretien d'une pompe à chaleur en 2026 ? À quelle fréquence ? Quelles obligations réglementaires (F-Gaz) ? Guide complet pour maintenir votre PAC au top.",
    path: PATH,
    image: `https://renohab.fr${PATH}.jpg`,
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: "Entretien pompe à chaleur 2026 : obligations, fréquence et prix",
      description:
        "Combien coûte l'entretien d'une pompe à chaleur en 2026 ? À quelle fréquence ? Quelles obligations réglementaires (F-Gaz) ? Guide complet pour maintenir votre PAC au top.",
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
      about: ['Pompe à chaleur', 'Entretien PAC', 'Rénovation énergétique', 'Chauffage'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 10 septembre 2026 · Maintenance &amp; entretien
          </p>

          <h1>Entretien pompe à chaleur 2026 : obligations, fréquence et prix</h1>

          <p className="lead">
            Une pompe à chaleur bien entretenue consomme jusqu'à 20 % d'énergie en moins et peut durer
            15 à 20 ans. À l'approche de l'hiver, c'est le bon moment pour vérifier le bon
            fonctionnement de votre installation — et pour savoir ce que la réglementation vous impose
            réellement.
          </p>

          <img
            src="/blog/entretien-pompe-a-chaleur-pac-2026.jpg"
            alt="Technicien en train d'effectuer la maintenance d'une pompe à chaleur extérieure"
            className="rounded-2xl w-full object-cover max-h-72 my-6"
            loading="lazy"
          />

          <h2>Pourquoi entretenir sa pompe à chaleur ?</h2>
          <p>
            La pompe à chaleur est un système mécanique et frigorifique : ses performances se dégradent
            progressivement si elle n'est pas entretenue. Un filtre encrassé, une fuite minime de
            fluide frigorigène ou une unité extérieure obstruée par des feuilles mortes peuvent faire
            chuter le <strong>coefficient de performance (COP)</strong> de manière significative.
          </p>
          <p>
            Concrètement, une PAC avec un COP nominal de 4 mal entretenue peut tomber à un COP de 2,5,
            ce qui signifie que vous payez votre chaleur presque deux fois plus cher. L'entretien
            régulier est donc un investissement rentable, et non une dépense superflue.
          </p>

          <h2>Quelles obligations réglementaires pour votre PAC ?</h2>

          <h3>Le règlement F-Gaz sur les fluides frigorigènes</h3>
          <p>
            En France comme dans toute l'Union européenne, le <strong>règlement F-Gaz (UE) 2024/573</strong>{' '}
            impose des contrôles d'étanchéité obligatoires pour les équipements contenant des
            hydrofluorocarbures (HFC) au-delà de certains seuils :
          </p>
          <ul>
            <li>
              <strong>≥ 5 tonnes d'équivalent CO₂ :</strong> contrôle d'étanchéité au moins une fois par an
            </li>
            <li>
              <strong>≥ 50 tonnes CO₂éq :</strong> contrôle tous les 6 mois
            </li>
            <li>
              <strong>≥ 500 tonnes CO₂éq :</strong> contrôle tous les 3 mois (avec système de détection automatique)
            </li>
          </ul>
          <p>
            Pour une PAC résidentielle, cela dépend du fluide utilisé. Avec le fluide R-410A
            (GWP = 2 088), le seuil de 5 tonnes CO₂éq est atteint avec environ 2,4 kg de réfrigérant.
            Avec le fluide R-32 plus écologique (GWP = 675), il faut plus de 7 kg pour atteindre le
            seuil — la majorité des PAC résidentielles récentes au R-32 en restent donc en dessous.
          </p>
          <p>
            Dans tous les cas, <strong>toute intervention sur le circuit frigorifique</strong> (recharge,
            vidange, contrôle d'étanchéité) doit impérativement être réalisée par un technicien
            titulaire de l'<strong>attestation de capacité</strong> délivrée par un organisme agréé,
            conformément à l'arrêté du 29 février 2016.
          </p>

          <h3>L'entretien des systèmes de chauffage : recommandation forte</h3>
          <p>
            Contrairement aux chaudières à gaz ou fioul pour lesquelles l'entretien annuel est légalement
            obligatoire (décret n° 2009-649 du 9 juin 2009), l'entretien annuel d'une PAC résidentielle
            n'est pas imposé par la loi dans tous les cas. Cependant, il est <strong>fortement recommandé
            par l'ADEME et par tous les fabricants</strong>, et souvent exigé pour maintenir la garantie
            constructeur.
          </p>

          <h2>À quelle fréquence entretenir sa pompe à chaleur ?</h2>
          <p>
            La fréquence recommandée dépend du type d'installation :
          </p>
          <ul>
            <li>
              <strong>PAC air/eau ou air/air :</strong> entretien complet une fois par an, idéalement en
              début d'automne avant la montée en charge hivernale
            </li>
            <li>
              <strong>PAC géothermique sol/eau :</strong> entretien bisannuel recommandé, avec une
              inspection approfondie tous les 2 à 3 ans pour le circuit sol (sonde verticale ou capteur
              horizontal)
            </li>
          </ul>
          <p>
            Entre les visites professionnelles, certaines vérifications simples peuvent être faites par
            le propriétaire lui-même (voir ci-dessous).
          </p>

          <h2>Que comprend un entretien professionnel de PAC ?</h2>
          <p>Lors d'une visite annuelle, le technicien réalise généralement :</p>
          <ul>
            <li>Nettoyage des filtres à air de l'unité intérieure</li>
            <li>Nettoyage et inspection de l'unité extérieure (évaporateur, ventilateur)</li>
            <li>Vérification des pressions dans le circuit frigorifique</li>
            <li>Contrôle d'étanchéité du circuit (obligatoire si le seuil F-Gaz est atteint)</li>
            <li>Inspection des connexions électriques et des sondes de température</li>
            <li>Vérification du dégivrage automatique (PAC air/eau)</li>
            <li>Test de fonctionnement en mode chauffage et, si applicable, en mode rafraîchissement</li>
            <li>Vérification du circulateur et du niveau de pression du circuit hydraulique (PAC eau)</li>
          </ul>

          <h2>Ce que vous pouvez faire vous-même entre deux entretiens</h2>
          <p>
            Pour maintenir l'efficacité de votre PAC entre les visites professionnelles, quelques gestes
            simples font la différence :
          </p>
          <ul>
            <li>Nettoyer les filtres de l'unité intérieure tous les 2 à 3 mois</li>
            <li>Dégager l'unité extérieure des feuilles, herbes hautes ou objets qui l'obstruent</li>
            <li>
              Vérifier que la pression du circuit hydraulique (PAC air/eau) se situe entre 1 et 2 bars
              au manomètre
            </li>
            <li>
              Ajuster la courbe de chauffe sur votre thermostat en fonction des températures extérieures —
              consultez notre article sur le{' '}
              <Link to="/blog/thermostat-programmable-regulation-chauffage-2026">
                thermostat programmable et la régulation du chauffage
              </Link>
            </li>
            <li>
              S'assurer que les radiateurs ou planchers chauffants ne sont pas obstrués par des meubles
            </li>
          </ul>

          <h2>Prix d'un entretien de pompe à chaleur en 2026</h2>
          <p>
            Le coût varie selon le type de PAC, la région et le prestataire :
          </p>
          <ul>
            <li>
              <strong>Visite de maintenance ponctuelle :</strong> entre 100 € et 300 € (main-d'œuvre + déplacement)
            </li>
            <li>
              <strong>Contrat d'entretien annuel :</strong> entre 150 € et 400 € par an selon les prestations
              incluses
            </li>
            <li>
              <strong>Contrat multiservice (entretien + dépannage prioritaire) :</strong> jusqu'à 600 € par an
            </li>
          </ul>
          <p>
            Certains contrats d'entretien incluent la garantie pièces et main-d'œuvre en cas de panne,
            ce qui peut être intéressant une fois la garantie constructeur expirée.
          </p>

          <h2>Durée de vie et garanties d'une pompe à chaleur</h2>
          <p>
            Avec un entretien régulier, une pompe à chaleur de qualité présente une durée de vie de
            <strong> 15 à 20 ans</strong>. Plusieurs niveaux de garantie vous protègent :
          </p>
          <ul>
            <li>
              <strong>Garantie légale de conformité :</strong> 2 ans minimum (Code civil, art. 1641)
            </li>
            <li>
              <strong>Garantie constructeur :</strong> en général 2 à 5 ans sur les pièces, parfois 10 ans
              sur le compresseur si un contrat d'entretien est souscrit
            </li>
            <li>
              <strong>Garantie décennale de l'installateur :</strong> 10 ans sur l'installation
              (art. 1792 du Code civil), obligatoire pour tout professionnel{' '}
              <Link to="/blog/choisir-artisan-rge-2026">certifié RGE</Link>
            </li>
          </ul>
          <p>
            Attention : la plupart des fabricants conditionnent le maintien de leur garantie étendue à la
            réalisation de l'entretien annuel par un professionnel qualifié. Conservez précieusement
            toutes vos factures d'entretien.
          </p>

          <h2>Quand faut-il remplacer sa pompe à chaleur ?</h2>
          <p>
            Quelques signes indiquent qu'il est peut-être temps de remplacer votre installation plutôt
            que de la réparer :
          </p>
          <ul>
            <li>La PAC a plus de 15 ans et les pannes se multiplient</li>
            <li>Le coût de réparation dépasse 50 % du prix d'une PAC neuve équivalente</li>
            <li>Le COP mesuré est nettement inférieur aux valeurs nominales même après entretien</li>
            <li>Le fluide utilisé (R-22 par exemple) est interdit ou difficile à approvisionner</li>
          </ul>
          <p>
            Dans ce cas, le remplacement peut être une occasion de bénéficier des{' '}
            <Link to="/pompe-a-chaleur">aides à l'installation d'une PAC neuve</Link>, notamment
            MaPrimeRénov', les primes CEE et l'Éco-PTZ.
          </p>

          <h2>Conclusion : l'entretien, clé de la performance et de la longévité</h2>
          <p>
            L'entretien de votre pompe à chaleur n'est pas une contrainte administrative : c'est un
            levier concret pour maintenir votre facture d'énergie au plus bas et prolonger la durée de
            vie de votre équipement. Prévoyez une visite professionnelle chaque automne, respectez les
            obligations F-Gaz si votre installation y est soumise, et réalisez les vérifications
            simples tout au long de l'année.
          </p>

          <div className="not-prose mt-10 p-6 bg-emerald-50 border border-emerald-200 rounded-2xl">
            <h3 className="text-lg font-bold text-emerald-800 mb-2">
              Vous envisagez d'installer ou de remplacer votre pompe à chaleur ?
            </h3>
            <p className="text-gray-700 mb-4">
              RenoHab vous accompagne de A à Z : audit énergétique, choix de l'équipement, mise en relation
              avec des installateurs RGE, et montage de vos dossiers d'aides (MaPrimeRénov', CEE,
              Éco-PTZ). Faites une{' '}
              <a href="/#simulateur" className="text-emerald-700 font-semibold underline">
                simulation gratuite
              </a>{' '}
              en 2 minutes pour connaître vos aides.
            </p>
            <a
              href="/#simulateur"
              className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold shadow hover:shadow-lg transition-all"
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
