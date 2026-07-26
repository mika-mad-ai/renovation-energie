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

const PUBLISHED = '2026-07-26';
const PATH = '/blog/pac-geothermique-sol-eau-prix-aides-2026';

export default function ArticlePacGeothermique() {
  useSeo({
    title: "Pompe à chaleur géothermique en 2026 : prix, aides et rentabilité | RenoHab",
    description:
      "Tout savoir sur la PAC géothermique sol-eau en 2026 : prix d'installation (captage horizontal ou forage vertical), MaPrimeRénov', CEE et reste à charge réel.",
    path: PATH,
    image: '/blog/pac-geothermique-sol-eau-prix-aides-2026.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline:
        "Pompe à chaleur géothermique sol-eau en 2026 : prix, aides et rentabilité",
      description:
        "Tout savoir sur la PAC géothermique sol-eau en 2026 : prix d'installation (captage horizontal ou forage vertical), MaPrimeRénov', CEE et reste à charge réel.",
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
      about: ['Pompe à chaleur géothermique', 'Rénovation énergétique', 'MaPrimeRénov', 'CEE'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 26 juillet 2026 · Chauffage &amp; aides
          </p>

          <h1>Pompe à chaleur géothermique sol-eau en 2026 : prix, aides et rentabilité</h1>

          <img
            src="/blog/pac-geothermique-sol-eau-prix-aides-2026.jpg"
            alt="Pompe à chaleur géothermique installée dans une maison individuelle avec terrain"
            className="w-full rounded-xl object-cover max-h-80 mb-8"
            loading="lazy"
          />

          <p className="lead">
            Méconnue du grand public mais particulièrement performante, la pompe à chaleur
            géothermique sol-eau puise les calories stockées dans le sol pour chauffer votre
            maison avec un rendement exceptionnel — quel que soit le froid extérieur. En 2026,
            les aides atteignent jusqu'à 11 000 € via MaPrimeRénov'. Voici ce qu'il faut
            savoir avant de vous lancer.
          </p>

          <h2>Qu'est-ce qu'une pompe à chaleur géothermique ?</h2>
          <p>
            Contrairement à la <a href="/pompe-a-chaleur">PAC air/eau</a> qui capte la chaleur
            dans l'air extérieur, la PAC géothermique puise l'énergie dans le sol. La
            température du sol reste stable entre 10 °C et 14 °C toute l'année, ce qui confère
            à ce système un avantage décisif en hiver : son rendement ne chute pas lors des
            grands froids.
          </p>
          <p>
            Le coefficient de performance (COP) d'une PAC géothermique se situe généralement
            entre <strong>4 et 5</strong> : pour 1 kWh d'électricité consommé, le système
            produit 4 à 5 kWh de chaleur. C'est significativement plus stable qu'une PAC
            air/eau dont le COP peut descendre sous 2,5 par temps très froid.
          </p>

          <h2>Les deux types de captage géothermique</h2>

          <h3>Captage horizontal (sondes à plat)</h3>
          <p>
            Des tubes sont enterrés à 60 cm–1,20 m de profondeur sur une grande surface de
            terrain (généralement 1,5 à 2 fois la surface habitable). Cette technique est la
            moins coûteuse mais nécessite un jardin suffisamment grand et non bâti.
          </p>
          <ul>
            <li><strong>Prix tout compris :</strong> 14 000 € à 22 000 €</li>
            <li><strong>Avantage :</strong> pas de forage, chantier moins invasif</li>
            <li><strong>Contrainte :</strong> terrain nu requis (pas de piscine, pas d'arbres)</li>
          </ul>

          <h3>Captage vertical (sondes forées)</h3>
          <p>
            Une ou plusieurs sondes sont descendues dans des forages de 80 à 150 m de
            profondeur. Cette solution s'applique quand le terrain est trop petit pour un
            captage horizontal, et elle offre un rendement légèrement supérieur car la
            température en profondeur est plus stable.
          </p>
          <ul>
            <li><strong>Prix tout compris :</strong> 16 000 € à 25 000 €</li>
            <li><strong>Coût du forage :</strong> 70 € à 100 € par mètre foré (soit 5 000 à 10 000 € pour 100 m)</li>
            <li><strong>Avantage :</strong> emprise au sol minimale, très performant</li>
            <li><strong>Contrainte :</strong> déclaration préalable auprès du BRGM obligatoire</li>
          </ul>

          <h2>Aides disponibles en 2026</h2>
          <p>
            La PAC géothermique est éligible à un cumul d'aides particulièrement avantageux.
            Ces montants sont valables pour une installation principale dans un logement de
            plus de 2 ans, réalisée par un artisan <strong>RGE</strong>.
          </p>

          <h3>MaPrimeRénov' (ANAH)</h3>
          <ul>
            <li><strong>Ménages très modestes (bleu) :</strong> jusqu'à 11 000 €</li>
            <li><strong>Ménages modestes (jaune) :</strong> jusqu'à 9 000 €</li>
            <li><strong>Ménages intermédiaires (violet) :</strong> jusqu'à 6 000 €</li>
            <li><strong>Ménages supérieurs (rose) :</strong> non éligible à ce geste</li>
          </ul>

          <h3>Prime CEE (Certificats d'Économies d'Énergie)</h3>
          <p>
            La prime énergie des fournisseurs d'énergie vient en complément de MaPrimeRénov'.
            Elle peut atteindre <strong>7 500 €</strong> selon les offres et votre situation,
            et n'est soumise à aucune condition de revenus. Comparez les offres pour maximiser
            ce montant — les écarts entre fournisseurs peuvent dépasser 2 000 €.
          </p>

          <h3>TVA à 5,5 % et Éco-PTZ</h3>
          <p>
            Toute l'installation bénéficie de la <strong>TVA réduite à 5,5 %</strong> (au lieu
            de 20 %) dès lors que le logement a plus de 2 ans. L'<strong>éco-PTZ</strong>
            permet ensuite de financer le reste à charge sans intérêts, jusqu'à 50 000 € sur
            20 ans, cumulable avec MaPrimeRénov'. Découvrez notre{' '}
            <a href="/simulateur">simulateur d'aides</a> pour estimer votre reste à charge.
          </p>

          <h2>Exemple de reste à charge réel</h2>
          <p>
            Pour un ménage modeste avec une PAC géothermique à captage horizontal installée à
            18 000 € TTC :
          </p>
          <ul>
            <li>MaPrimeRénov' : <strong>− 9 000 €</strong></li>
            <li>Prime CEE : <strong>− 4 000 €</strong> (selon fournisseur)</li>
            <li>TVA 5,5 % déjà incluse dans le prix</li>
            <li><strong>Reste à charge estimé : 5 000 €</strong> (finançable via éco-PTZ)</li>
          </ul>
          <p>
            Avec des économies annuelles sur la facture de chauffage estimées entre 900 € et
            1 400 € selon la surface et l'ancien système remplacé, le retour sur investissement
            effectif peut se situer entre 4 et 7 ans après aides.
          </p>

          <h2>Pour qui est-ce adapté ?</h2>
          <p>
            La PAC géothermique est particulièrement indiquée dans les cas suivants :
          </p>
          <ul>
            <li>Maison individuelle avec terrain disponible (captage horizontal)</li>
            <li>Maison avec petit terrain mais bonne accessibilité pour le forage (captage vertical)</li>
            <li>Logement mal isolé dans une région froide où la PAC air/eau perd en efficacité</li>
            <li>Remplacement d'une chaudière fioul ou gaz dans le cadre d'une{' '}
              <a href="/dpe-gratuit">amélioration du DPE</a></li>
          </ul>
          <p>
            Elle est en revanche moins adaptée aux appartements, aux maisons en mitoyenneté
            sans terrain accessible, ou aux logements très anciens non isolés (le plancher
            chauffant basse température est idéal pour l'accompagner — à coupler avec des
            travaux d'isolation préalables).
          </p>

          <h2>Les démarches avant de commencer</h2>
          <ol>
            <li><strong>Étude de faisabilité du sol :</strong> entre 1 000 € et 2 000 €, elle vérifie la nature du terrain et oriente vers le bon type de captage.</li>
            <li><strong>Déclaration BRGM :</strong> obligatoire pour tout forage vertical (service gratuit en ligne).</li>
            <li><strong>Demande de MaPrimeRénov' :</strong> dossier à déposer sur maprimerenov.gouv.fr avant le début des travaux.</li>
            <li><strong>Choix d'un artisan RGE Géothermie :</strong> la certification spécifique est obligatoire pour bénéficier des aides.</li>
          </ol>
        </article>

        {/* CTA RenoHab */}
        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">
            Votre maison est-elle compatible avec la géothermie ?
          </h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            RenoHab, Accompagnateur Rénov' agréé, étudie la faisabilité de votre projet,
            monte votre dossier d'aides et coordonne des artisans RGE qualifiés.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/dpe-gratuit"
              className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all"
            >
              Évaluer mon DPE
            </a>
            <a
              href="/simulateur"
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
