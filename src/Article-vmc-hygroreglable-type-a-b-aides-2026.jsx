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

const PUBLISHED = '2026-10-14';
const PATH = '/blog/vmc-hygroreglable-type-a-b-aides-2026';

export default function ArticleVmcHygroreglable2026() {
  useSeo({
    title: "VMC hygroréglable type A et B : fonctionnement, prix et aides CEE en 2026 | RenoHab",
    description:
      "VMC hygroréglable type A ou type B : comment ça fonctionne, quelles différences, quel prix posé et quelles aides CEE (fiche BAR-TH-127) en 2026 ? Guide complet.",
    path: PATH,
    image: '/blog/vmc-hygroreglable-type-a-b-aides-2026.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: "VMC hygroréglable type A et B : fonctionnement, prix et aides CEE en 2026",
      description:
        "VMC hygroréglable type A ou type B : comment ça fonctionne, quelles différences, quel prix posé et quelles aides CEE (fiche BAR-TH-127) en 2026 ?",
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
      about: ['VMC hygroréglable', 'Ventilation', 'CEE', 'Rénovation énergétique'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 14 octobre 2026 · Ventilation
          </p>

          <h1>VMC hygroréglable type A et B : fonctionnement, prix et aides CEE en 2026</h1>

          <img
            src="/blog/vmc-hygroreglable-type-a-b-aides-2026.jpg"
            alt="VMC hygroréglable installée dans une salle de bain — ventilation adaptée à l'humidité"
            className="w-full rounded-xl my-6 object-cover max-h-80"
            loading="lazy"
            onError={(e) => { e.currentTarget.src = '/ventilation.webp'; }}
          />

          <p className="lead">
            Mauvaise ventilation = humidité, condensation, moisissures et surconsommation de
            chauffage. La <strong>VMC hygroréglable</strong> répond à ce problème en adaptant
            automatiquement le débit d'air à l'humidité réelle de chaque pièce. Moins coûteuse
            qu'une VMC double flux, elle bénéficie d'une prime CEE et d'une TVA réduite. Voici
            tout ce qu'il faut savoir pour choisir entre le <strong>type A</strong> et le{' '}
            <strong>type B</strong> — et en financer l'installation.
          </p>

          <h2>Qu'est-ce qu'une VMC hygroréglable ?</h2>
          <p>
            Une VMC (Ventilation Mécanique Contrôlée) hygroréglable est une VMC simple flux dont
            les bouches sont équipées de <strong>capteurs d'humidité</strong>. Contrairement à une
            VMC autoréglable classique qui extrait un débit d'air constant, la version hygroréglable
            module le débit en temps réel selon le taux d'humidité mesuré dans chaque pièce humide
            (salle de bain, cuisine, WC).
          </p>
          <p>
            Résultat : quand la salle de bain n'est pas occupée, le débit se réduit, ce qui limite
            les déperditions de chaleur en hiver. Quand vous prenez une douche, le débit s'accroît
            automatiquement pour évacuer la vapeur d'eau. C'est un équilibre entre confort,
            qualité de l'air et économies d'énergie.
          </p>

          <h2>Type A vs type B : quelle différence ?</h2>

          <h3>VMC hygroréglable type A</h3>
          <p>
            Seules les <strong>bouches d'extraction</strong> (dans les pièces humides) sont
            hygroréglables, c'est-à-dire à débit variable selon l'humidité. Les{' '}
            <strong>entrées d'air</strong> situées dans les pièces sèches (salon, chambres) sont
            autoréglables : leur débit reste fixe, quelles que soient les conditions intérieures.
          </p>
          <ul>
            <li>Solution d'entrée de gamme</li>
            <li>Installation plus simple et moins coûteuse</li>
            <li>Adaptée aux logements peu sujets aux variations d'humidité importantes</li>
          </ul>

          <h3>VMC hygroréglable type B</h3>
          <p>
            Les bouches d'extraction <strong>et</strong> les entrées d'air sont toutes
            hygroréglables. L'ensemble du système s'adapte en temps réel aux conditions
            d'humidité de chaque pièce, qu'il s'agisse d'extraire l'air vicié ou de réguler
            l'apport d'air frais.
          </p>
          <ul>
            <li>Performances supérieures au type A</li>
            <li>Meilleure maîtrise des déperditions thermiques en hiver</li>
            <li>Recommandée pour les logements avec grandes variations d'humidité (nombreux occupants, cuisines actives)</li>
            <li>Prix d'installation plus élevé, mais économies accrues sur la facture de chauffage</li>
          </ul>

          <h2>Quelles aides financières en 2026 ?</h2>

          <h3>Prime CEE (fiche BAR-TH-127)</h3>
          <p>
            La VMC hygroréglable simple flux est éligible aux{' '}
            <strong>Certificats d'Économies d'Énergie (CEE)</strong> via la fiche standardisée{' '}
            <strong>BAR-TH-127</strong>, valable pour les opérations engagées jusqu'au 30 juin
            2028 (6e période des CEE). Le montant de la prime varie selon l'offre de votre
            fournisseur d'énergie ou d'un organisme agréé : comptez en général entre{' '}
            <strong>50 et 200 €</strong>, parfois davantage selon les négociations et votre
            situation géographique.
          </p>
          <p>
            Pour en profiter, faites réaliser les travaux par un artisan{' '}
            <a href="/blog/choisir-artisan-rge-2026">certifié RGE</a> et demandez la prime CEE
            avant de signer le bon de commande.
          </p>

          <h3>MaPrimeRénov' : non applicable ici</h3>
          <p>
            Contrairement à la{' '}
            <a href="/blog/vmc-double-flux-aides-2026">VMC double flux</a>, la VMC simple flux
            hygroréglable n'est <strong>pas éligible à MaPrimeRénov'</strong>. Ce dispositif
            réserve son financement aux systèmes de ventilation à récupération de chaleur (double
            flux) et, depuis septembre 2026, uniquement dans le cadre d'un parcours de rénovation
            d'ampleur accompagné.
          </p>

          <h3>TVA réduite</h3>
          <p>
            L'installation d'une VMC hygroréglable par un professionnel dans un logement de plus de
            2 ans bénéficie de la <strong>TVA réduite à 5,5 %</strong> au titre des travaux
            d'amélioration de la qualité énergétique — une économie non négligeable sur la
            facture finale.
          </p>

          <h2>Quel prix pour une VMC hygroréglable installée ?</h2>
          <p>
            Le tarif varie fortement selon la surface du logement, le nombre de pièces humides et la
            complexité du réseau de gaines. À titre indicatif :
          </p>
          <ul>
            <li>
              <strong>Type A :</strong> entre 1 000 et 2 500 € fourniture et pose pour un
              appartement ou une maison standard
            </li>
            <li>
              <strong>Type B :</strong> entre 1 500 et 3 500 € selon la configuration du logement
            </li>
          </ul>
          <p>
            Ces fourchettes, issues des guides de prix du secteur, doivent être confirmées par{' '}
            <strong>plusieurs devis d'artisans RGE</strong>. Les prix peuvent varier selon votre
            région et la marque choisie.
          </p>

          <h2>VMC hygroréglable ou double flux : comment choisir ?</h2>
          <p>
            La{' '}
            <a href="/blog/vmc-double-flux-aides-2026">VMC double flux</a> récupère la chaleur de
            l'air extrait pour préchauffer l'air entrant : elle est plus performante sur le plan
            thermique, mais son installation est nettement plus complexe (réseau de gaines dans
            toute la maison) et son coût bien plus élevé (6 000 à 15 000 €). Elle est recommandée
            pour les maisons basse consommation ou les rénovations lourdes.
          </p>
          <p>
            La VMC hygroréglable type B est un excellent compromis pour{' '}
            <strong>rénover la ventilation d'un logement existant</strong> sans travaux invasifs,
            à un coût maîtrisé, avec un retour sur investissement rapide grâce aux économies sur
            la facture de chauffage.
          </p>

          <h2>Comment faire réaliser les travaux ?</h2>
          <ol>
            <li>
              <strong>Évaluation du logement :</strong> un conseiller{' '}
              <a href="/dpe-gratuit">France Rénov'</a> peut vous orienter gratuitement sur les
              travaux prioritaires.
            </li>
            <li>
              <strong>Devis comparatifs :</strong> faites appel à au moins deux{' '}
              <a href="/blog/choisir-artisan-rge-2026">artisans certifiés RGE</a> pour comparer
              les offres et vous assurer de l'éligibilité CEE.
            </li>
            <li>
              <strong>Demande de prime CEE :</strong> souscrivez la prime avant de signer le bon
              de commande, auprès d'un fournisseur d'énergie ou d'un agrégateur CEE.
            </li>
            <li>
              <strong>Réception des travaux :</strong> vérifiez que l'installateur vous remet
              l'attestation sur l'honneur et que le matériel posé correspond bien aux
              caractéristiques techniques de la fiche BAR-TH-127.
            </li>
          </ol>

          <h2>En résumé</h2>
          <p>
            La VMC hygroréglable est une solution ventilation efficace et abordable pour améliorer
            la qualité de l'air intérieur et réduire les déperditions thermiques d'un logement. Le
            type B offre les meilleures performances, tandis que le type A convient aux budgets
            plus limités. Ni l'un ni l'autre ne sont éligibles à MaPrimeRénov', mais la prime CEE
            (BAR-TH-127) et la TVA à 5,5 % allègent significativement la facture.
          </p>

          <div className="not-prose mt-10 rounded-2xl bg-emerald-50 border border-emerald-200 p-6 text-center">
            <p className="text-lg font-semibold text-emerald-800 mb-3">
              Vous souhaitez rénover votre ventilation ?
            </p>
            <p className="text-gray-700 mb-4">
              RenoHab, Accompagnateur Rénov' agréé, vous guide dans vos travaux et vous aide à
              cumuler toutes les aides disponibles : CEE, éco-PTZ et aides locales.
            </p>
            <a
              href="/"
              className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold shadow hover:shadow-glow transition-all"
            >
              Simuler mes aides gratuitement
            </a>
          </div>
        </article>
      </main>

      <ArticleFooter />
    </div>
  );
}
