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
        <p className="text-gray-400">Votre Rénovation Énergétique, Simplifiée & Financée.</p>
        <p className="mt-6 text-sm text-gray-500">© {new Date().getFullYear()} RenoHab. Tous droits réservés.</p>
      </div>
    </footer>
  );
}

const PUBLISHED = '2026-08-15';
const PATH = '/blog/fenetres-remplacement-aides-2026';

export default function ArticleFenetresRemplacement2026() {
  useSeo({
    title: "Remplacement des fenêtres en 2026 : aides, coûts et démarches | RenoHab",
    description:
      "Guide complet pour remplacer vos fenêtres en 2026 : MaPrimeRénov', CEE, TVA à 5,5 %, conditions d'éligibilité, performance thermique et démarches pas à pas.",
    path: PATH,
    image: '/blog/fenetres-remplacement-aides-2026.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: "Remplacement des fenêtres en 2026 : toutes les aides disponibles",
      description:
        "Guide complet pour remplacer vos fenêtres en 2026 : MaPrimeRénov', CEE, TVA à 5,5 %, conditions d'éligibilité, performance thermique et démarches pas à pas.",
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
      about: ['Remplacement fenêtres', 'MaPrimeRénov', 'Isolation thermique', 'Aides rénovation 2026'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 15 août 2026 · Travaux & isolation
          </p>

          <h1>Remplacement des fenêtres en 2026 : toutes les aides disponibles</h1>

          <img
            src="/blog/fenetres-remplacement-aides-2026.jpg"
            alt="Remplacement de fenêtres double vitrage pour améliorer l'isolation thermique"
            className="w-full rounded-2xl my-6 object-cover"
            style={{ maxHeight: '420px' }}
            loading="eager"
          />

          <p className="lead">
            Remplacer vos fenêtres simple vitrage par du double ou triple vitrage performant peut réduire vos
            pertes de chaleur de 10 à 15 % et améliorer significativement votre confort. En 2026, plusieurs
            aides de l'État et des fournisseurs d'énergie permettent de financer une grande partie de ces
            travaux — à condition de respecter certaines règles d'éligibilité.
          </p>

          <h2>Pourquoi remplacer ses fenêtres est une priorité thermique</h2>

          <p>
            Les fenêtres représentent entre 10 et 15 % des déperditions thermiques d'un logement mal isolé.
            Un simple vitrage laisse passer jusqu'à 5 fois plus de chaleur qu'un double vitrage récent. Pour
            les logements classés F ou G au <Link to="/dpe-gratuit">DPE</Link>, le remplacement des menuiseries
            est souvent une étape incontournable avant toute rénovation globale.
          </p>

          <p>
            Au-delà des économies d'énergie, des fenêtres performantes améliorent le confort acoustique,
            réduisent les phénomènes de condensation et peuvent augmenter la valeur de revente du bien.
          </p>

          <h2>Quelles fenêtres sont éligibles aux aides ?</h2>

          <p>
            Pour bénéficier des aides publiques, les fenêtres posées doivent respecter des critères minimaux
            de performance thermique fixés par l'État :
          </p>

          <ul>
            <li>
              <strong>Coefficient thermique Uw ≤ 1,3 W/m²·K</strong> — mesure la perte de chaleur à
              travers toute la fenêtre (vitrage + cadre).
            </li>
            <li>
              <strong>Facteur solaire Sw ≥ 0,3</strong> — garantit que la fenêtre laisse entrer suffisamment
              de lumière solaire pour contribuer au chauffage passif en hiver.
            </li>
          </ul>

          <p>
            Ces seuils sont compatibles avec la plupart des doubles vitrages récents (Uw ≈ 1,1–1,3) et
            tous les triples vitrages (Uw ≈ 0,6–0,9). Vérifiez ces valeurs sur la fiche technique fournie
            par votre installateur.
          </p>

          <h3>Simple, double ou triple vitrage ?</h3>

          <ul>
            <li>
              <strong>Double vitrage standard</strong> (Uw ≈ 1,2–1,3) : l'option la plus répandue et la
              plus abordable. Suffit à satisfaire les critères d'éligibilité aux aides.
            </li>
            <li>
              <strong>Double vitrage à isolation renforcée (VIR)</strong> (Uw ≈ 1,0–1,1) : meilleure
              performance, idéal pour les zones climatiques froides.
            </li>
            <li>
              <strong>Triple vitrage</strong> (Uw ≈ 0,6–0,9) : recommandé pour les maisons très bien
              isolées ou les régions nordiques, mais coût plus élevé.
            </li>
          </ul>

          <h2>Les aides disponibles en 2026</h2>

          <h3>MaPrimeRénov' par geste</h3>

          <p>
            MaPrimeRénov' reste la principale aide de l'État pour financer le remplacement de fenêtres.
            Les montants varient selon votre profil de revenus :
          </p>

          <ul>
            <li>
              <strong>Ménages très modestes (profil Bleu)</strong> : 100 € par fenêtre ou porte-fenêtre.
            </li>
            <li>
              <strong>Ménages modestes (profil Jaune)</strong> : 80 € par fenêtre.
            </li>
            <li>
              <strong>Revenus intermédiaires (profil Violet)</strong> : 40 € par fenêtre.
            </li>
            <li>
              <strong>Revenus supérieurs (profil Rose)</strong> : non éligibles au parcours par geste
              pour les fenêtres.
            </li>
          </ul>

          <p>
            <strong>Attention :</strong> depuis septembre 2026, plusieurs gestes monogestes sont en cours
            de réexamen dans le cadre de la réforme MaPrimeRénov'. Les fenêtres font partie des travaux
            dont l'éligibilité au parcours par geste pourrait évoluer. Consultez{' '}
            <Link to="/blog/maprimerenov-septembre-2026-gestes-suppression">
              notre article dédié aux changements de septembre 2026
            </Link>{' '}
            pour les dernières informations, ou contactez un{' '}
            <a href="/#simulator">conseiller RenoHab</a> pour vérifier votre éligibilité.
          </p>

          <p>
            Pour bénéficier de MaPrimeRénov', le logement doit avoir plus de 15 ans, être votre résidence
            principale, et les travaux doivent être réalisés par un artisan certifié{' '}
            <strong>RGE (Reconnu Garant de l'Environnement)</strong>.
          </p>

          <h3>Prime CEE (Certificats d'Économies d'Énergie)</h3>

          <p>
            Les fournisseurs d'énergie (EDF, TotalEnergies, Engie, etc.) proposent des primes CEE
            cumulables avec MaPrimeRénov'. Les montants varient selon les opérateurs et la superficie de
            vos fenêtres. Il est fortement conseillé de comparer plusieurs offres avant de choisir un
            installateur.
          </p>

          <p>
            La prime CEE s'obtient en signant un devis avec un professionnel partenaire CEE{' '}
            <em>avant</em> le début des travaux — ne commencez jamais les travaux sans avoir
            préalablement validé votre dossier.
          </p>

          <h3>TVA à 5,5 %</h3>

          <p>
            La TVA réduite à 5,5 % s'applique automatiquement à la fourniture et à la pose de fenêtres
            performantes dans un logement de plus de 2 ans. Elle concerne aussi bien la résidence
            principale que la résidence secondaire, sans condition de revenus. Elle est cumulable avec
            MaPrimeRénov' et les primes CEE.
          </p>

          <h3>Éco-PTZ : l'emprunt à taux zéro</h3>

          <p>
            Si votre reste à charge reste élevé après les aides, l'{' '}
            <Link to="/blog/eco-ptz-2026-pret-taux-zero-renovation">Éco-PTZ 2026</Link> vous permet
            d'emprunter jusqu'à 50 000 € à taux zéro pour financer des travaux de rénovation
            énergétique, dont le remplacement de fenêtres. Ce prêt est cumulable avec toutes les aides
            mentionnées ci-dessus.
          </p>

          <h2>Exemple de financement pour 10 fenêtres</h2>

          <p>
            Pour un ménage à revenus modestes (profil Jaune) remplaçant 10 fenêtres à 800 € l'unité (pose
            incluse) :
          </p>

          <ul>
            <li>Coût total HT : 8 000 €</li>
            <li>TVA à 5,5 % au lieu de 10 % : économie d'environ 360 €</li>
            <li>MaPrimeRénov' : 10 × 80 € = 800 €</li>
            <li>Prime CEE (estimation) : 200 à 600 € selon l'opérateur</li>
            <li>
              <strong>Reste à charge estimé : 6 200 à 6 600 €</strong>, éventuellement financé par
              un Éco-PTZ sans intérêts.
            </li>
          </ul>

          <p>
            <em>
              Ces chiffres sont indicatifs. Les montants réels dépendent de la taille des fenêtres, des
              matériaux choisis et des offres CEE du moment.
            </em>
          </p>

          <h2>Comment se déroulent les travaux ?</h2>

          <h3>1. Évaluer vos besoins</h3>
          <p>
            Commencez par identifier les fenêtres les plus défaillantes : condensation entre les vitres,
            courants d'air, châssis dégradés. Un{' '}
            <Link to="/dpe-gratuit">bilan thermique simplifié</Link> permet de prioriser les postes de
            déperdition.
          </p>

          <h3>2. Constituer votre dossier</h3>
          <p>
            Déposez une demande sur le portail Ma Prime Rénov' (maprimerenov.gouv.fr){' '}
            <strong>avant</strong> de signer le devis de travaux. Renseignez votre numéro fiscal,
            l'adresse du logement et les références de l'artisan RGE que vous avez sélectionné.
          </p>

          <h3>3. Choisir un professionnel RGE</h3>
          <p>
            La certification RGE est obligatoire pour que les travaux ouvrent droit aux aides. Demandez
            plusieurs devis incluant la référence RGE de l'entreprise et les caractéristiques techniques
            des fenêtres proposées (Uw, Sw, label CEKAL ou équivalent).
          </p>

          <h3>4. Faire réaliser les travaux et percevoir les aides</h3>
          <p>
            MaPrimeRénov' est versée après la fin des travaux, sur présentation de la facture. La prime
            CEE peut être déduite directement sur la facture si l'installateur est partenaire d'un
            fournisseur d'énergie.
          </p>

          <h2>Intégrer le remplacement des fenêtres dans une rénovation globale</h2>

          <p>
            Le remplacement des fenêtres est efficace, mais son impact est maximisé lorsqu'il est combiné
            avec d'autres travaux : isolation des murs, isolation des combles et installation d'un
            système de chauffage performant comme une{' '}
            <Link to="/pompe-a-chaleur">pompe à chaleur</Link>. Dans ce cas, envisagez le{' '}
            <Link to="/blog/renovation-ampleur-2026-accompagnateur-renov">
              parcours Rénovation d'Ampleur
            </Link>
            , qui ouvre droit à des aides plus importantes et à un accompagnement personnalisé par un
            Accompagnateur Rénov' agréé.
          </p>

          <p>
            Simulez votre projet et obtenez une estimation personnalisée de vos aides en quelques minutes
            sur notre <a href="/#simulator">simulateur de rénovation énergétique</a>.
          </p>

          <div className="not-prose mt-10 p-6 bg-emerald-50 border border-emerald-200 rounded-2xl">
            <p className="text-emerald-900 font-semibold text-lg mb-2">
              Prêt à remplacer vos fenêtres ?
            </p>
            <p className="text-emerald-800 mb-4">
              Nos conseillers RenoHab, Accompagnateurs Rénov' agréés, vous aident à monter votre dossier
              d'aides et à trouver des artisans RGE de confiance dans votre région.
            </p>
            <a
              href="/#simulator"
              className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold shadow-soft hover:shadow-glow transition-all"
            >
              Estimer mes aides gratuitement →
            </a>
          </div>
        </article>
      </main>

      <ArticleFooter />
    </div>
  );
}
