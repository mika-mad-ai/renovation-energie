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

const PUBLISHED = '2026-08-09';
const PATH = '/blog/isolation-combles-perdus-2026';

export default function ArticleIsolationComblesPerdus2026() {
  useSeo({
    title: "Isolation des combles perdus en 2026 : aides, prix et urgence avant septembre | RenoHab",
    description:
      "Tout savoir sur l'isolation des combles perdus en 2026 : coût au m², montants MaPrimeRénov', prime CEE et TVA 5,5 %. Attention : MaPrimeRénov' monogeste disparaît en septembre 2026.",
    path: PATH,
    image: '/blog/isolation-combles-perdus-2026.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline:
        "Isolation des combles perdus en 2026 : agissez avant septembre pour cumuler MaPrimeRénov' et CEE",
      description:
        "Tout savoir sur l'isolation des combles perdus en 2026 : coût au m², montants MaPrimeRénov', prime CEE et TVA 5,5 %. Attention : MaPrimeRénov' monogeste disparaît en septembre 2026.",
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
      about: ['Isolation des combles', 'MaPrimeRénov\'', 'Prime CEE', 'Rénovation énergétique'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 9 août 2026 · Guide pratique
          </p>

          <h1>Isolation des combles perdus en 2026 : agissez avant septembre pour cumuler MaPrimeRénov' et CEE</h1>

          <img
            src="/blog/isolation-combles-perdus-2026.jpg"
            alt="Isolation des combles perdus — laine soufflée dans des combles"
            className="w-full rounded-xl object-cover max-h-80 my-6"
            loading="lazy"
          />

          <p className="lead">
            Les combles non isolés représentent jusqu'à 30 % des déperditions thermiques d'un
            logement. C'est le chantier le plus rentable en rénovation énergétique — et le plus
            financé. En 2026, MaPrimeRénov' propose encore des aides pour ce geste en monogeste,
            mais cette possibilité <strong>disparaît dès le 1er septembre 2026</strong>.
            Si vous envisagez d'isoler vos combles perdus, c'est maintenant qu'il faut agir.
          </p>

          <h2>Pourquoi les combles perdus sont-ils une priorité ?</h2>
          <p>
            Les combles perdus — ces espaces situés sous le toit, non aménagés et inaccessibles à
            pied — sont de loin le point le plus simple à isoler. La chaleur montant naturellement,
            une toiture mal isolée laisse s'échapper l'essentiel de l'énergie produite par votre
            système de chauffage.
          </p>
          <ul>
            <li><strong>30 % des pertes énergétiques</strong> d'une maison passent par le toit non isolé.</li>
            <li>Travaux rapides (1 à 2 jours) avec une faible perturbation du quotidien.</li>
            <li>Retour sur investissement parmi les plus courts : 3 à 7 ans selon le logement.</li>
            <li>Impact immédiat sur votre <a href="/dpe-gratuit">DPE</a> et donc sur la valeur de votre bien.</li>
          </ul>
          <p>
            Pour les logements classés F ou G, l'isolation des combles peut parfois suffire à
            changer de classe et à sortir du statut de « passoire thermique ». C'est aussi l'étape
            recommandée <strong>avant</strong> de changer de système de chauffage : inutile
            d'installer une <a href="/pompe-a-chaleur">pompe à chaleur</a> dans un logement qui
            perd sa chaleur par le toit.
          </p>

          <h2>Combien coûte l'isolation des combles perdus en 2026 ?</h2>
          <p>
            Le coût dépend principalement du matériau isolant choisi et de la surface à traiter.
            En 2026, les prix moyens pour une pose par un artisan RGE se situent entre
            <strong> 20 et 60 € par m²</strong>, fourniture et pose comprises.
          </p>
          <ul>
            <li>
              <strong>Laine soufflée</strong> (ouate de cellulose, laine minérale) : 20 à 35 €/m².
              Solution la plus répandue pour les combles perdus, rapide à mettre en œuvre.
            </li>
            <li>
              <strong>Laine en vrac projetée</strong> : 25 à 45 €/m². Bonne performance acoustique
              en plus de l'isolation thermique.
            </li>
            <li>
              <strong>Panneaux rigides</strong> (laine de roche, polyuréthane) : 35 à 60 €/m².
              Plutôt utilisés quand la surface est accessible et régulière.
            </li>
          </ul>
          <p>
            Pour une maison de 100 m² de surface habitable avec environ 80 m² de combles,
            comptez entre 1 600 € et 4 800 € brut avant aides. Après déduction des aides cumulées
            (MaPrimeRénov', CEE, TVA réduite), le reste à charge peut descendre à quelques
            centaines d'euros pour les ménages modestes.
          </p>

          <h2>Quelles aides pour isoler ses combles perdus en 2026 ?</h2>

          <h3>MaPrimeRénov' — à demander avant le 1er septembre 2026</h3>
          <p>
            C'est <strong>l'urgence absolue</strong> : la version monogeste de MaPrimeRénov' pour
            l'isolation des combles perdus est supprimée à compter du 1er septembre 2026.
            Les dossiers déposés avant cette date et instruits selon les règles en vigueur restent
            éligibles — mais il faut avoir signé un devis avec un artisan RGE et initié la demande
            avant la date butoir.
          </p>
          <p>Les montants actuels selon le profil de revenus (barème Anah 2026) :</p>
          <ul>
            <li><strong>Ménages très modestes (bleu)</strong> : jusqu'à 75 €/m².</li>
            <li><strong>Ménages modestes (jaune)</strong> : jusqu'à 60 €/m².</li>
            <li><strong>Ménages intermédiaires (violet)</strong> : jusqu'à 40 €/m².</li>
            <li><strong>Ménages aisés (rose)</strong> : plus d'aide MPR en monogeste combles dès septembre.</li>
          </ul>
          <p>
            Condition technique impérative : la résistance thermique installée doit être
            <strong> R ≥ 7 m².K/W</strong>.
          </p>

          <h3>Prime CEE — disponible toute l'année, sans date limite</h3>
          <p>
            Bonne nouvelle pour ceux qui passeront après septembre : les Certificats d'Économie
            d'Énergie (CEE), distribués par les fournisseurs d'énergie sous l'opération
            BAR-EN-101, <strong>ne sont pas supprimés</strong>. Ils continueront de financer
            l'isolation des combles perdus avec un montant typiquement compris entre
            5 et 13 €/m² selon la zone climatique (H1/H2/H3) et vos revenus.
          </p>
          <p>
            Ces primes sont versées directement par l'obligé (EDF, Engie, Total Énergie…) ou via
            un délégataire. En pratique, votre artisan peut vous proposer de les gérer pour vous.
            Renseignez-vous auprès de notre <a href="/#simulator">simulateur d'aides</a>.
          </p>

          <h3>TVA à 5,5 %</h3>
          <p>
            Tous travaux d'isolation des combles dans une résidence principale de plus de 2 ans
            bénéficient de la TVA réduite à <strong>5,5 %</strong> au lieu de 10 % ou 20 %. Cette
            réduction s'applique à la fourniture et à la pose, sans condition de ressources, et
            est automatiquement répercutée par l'artisan sur la facture.
          </p>

          <h3>Éco-PTZ — financer le reste à charge sans intérêts</h3>
          <p>
            Si une partie du coût reste à votre charge, l'
            <a href="/blog/eco-ptz-2026-pret-taux-zero-renovation">éco-prêt à taux zéro (éco-PTZ)</a>
            {' '}permet d'emprunter jusqu'à 30 000 € sans payer d'intérêts pour financer des
            travaux d'isolation. Accessible sans condition de ressources et compatible avec
            MaPrimeRénov' et les CEE.
          </p>

          <h2>Quelles performances exiger de votre artisan ?</h2>
          <p>
            Pour bénéficier de toutes les aides, votre artisan doit être certifié
            <strong> RGE (Reconnu Garant de l'Environnement)</strong>. Vérifiez la certification
            sur le site officiel Qualibat ou CERTIBAT avant de signer le devis.
          </p>
          <p>Les critères techniques à vérifier sur votre devis :</p>
          <ul>
            <li>Résistance thermique R ≥ 7 m².K/W (obligatoire pour MPR et CEE).</li>
            <li>Matériau précisé avec sa conductivité λ (lambda) et son épaisseur.</li>
            <li>Traitement des ponts thermiques et des trappes d'accès.</li>
            <li>Mise en place d'un pare-vapeur si nécessaire (combles non ventilés).</li>
          </ul>
          <p>
            Un bon artisan vous proposera également un contrôle de l'état de la charpente et de
            la toiture avant intervention : il serait dommage d'isoler des combles qui présentent
            des infiltrations d'eau.
          </p>

          <h2>Étapes pour lancer votre projet avant septembre 2026</h2>
          <ol>
            <li>
              <strong>Estimez votre DPE actuel</strong> sur notre{' '}
              <a href="/dpe-gratuit">outil gratuit</a> pour situer votre logement.
            </li>
            <li>
              <strong>Obtenez 3 devis</strong> auprès d'artisans RGE certifiés dans votre secteur.
            </li>
            <li>
              <strong>Déposez votre dossier MaPrimeRénov'</strong> sur maprimerenov.gouv.fr{' '}
              <em>avant</em> de signer les devis (le dépôt doit précéder le commencement des travaux).
            </li>
            <li>
              <strong>Cumulez les CEE</strong> : demandez à votre artisan ou à un délégataire
              de déposer le dossier prime énergie BAR-EN-101 en parallèle.
            </li>
            <li>
              <strong>Planifiez les travaux</strong> : une fois les aides accordées, les combles
              perdus s'isolent en 1 à 2 jours de chantier.
            </li>
          </ol>
          <p>
            En tant qu'Accompagnateur Rénov' agréé, RenoHab vous aide à monter l'intégralité de
            vos dossiers d'aides, à trouver des artisans RGE et à coordonner votre chantier pour
            que vous n'ayez qu'un interlocuteur du diagnostic à la facture.
          </p>
        </article>

        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Isolez vos combles avant le 1er septembre</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            MaPrimeRénov' pour les combles perdus disparaît fin août 2026. Vérifiez vos aides dès maintenant et déposez votre dossier à temps.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/dpe-gratuit" className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all">
              Estimer mon DPE gratuitement
            </a>
            <a href="/#simulator" className="px-6 py-3 rounded-full border border-white/70 text-white font-semibold hover:bg-white/10 transition-all">
              Simuler mes aides
            </a>
          </div>
        </div>
      </main>

      <ArticleFooter />
    </div>
  );
}
