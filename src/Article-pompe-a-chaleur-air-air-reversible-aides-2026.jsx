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

const PUBLISHED = '2026-09-07';
const PATH = '/blog/pompe-a-chaleur-air-air-reversible-aides-2026';

export default function ArticlePACairair2026() {
  useSeo({
    title: "Pompe à chaleur air/air réversible : aides, prix et conditions en 2026 | RenoHab",
    description:
      "PAC air/air (split réversible) : prime CEE jusqu'à 975 €, TVA à 5,5 % depuis juillet 2026, conditions d'éligibilité et comparatif avec la PAC air/eau.",
    path: PATH,
    image: '/blog/pompe-a-chaleur-air-air-reversible-aides-2026.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline:
        "Pompe à chaleur air/air réversible : aides, prix et conditions en 2026",
      description:
        "PAC air/air (split réversible) : prime CEE jusqu'à 975 €, TVA à 5,5 % depuis juillet 2026, conditions d'éligibilité et comparatif avec la PAC air/eau.",
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
      about: ['Pompe à chaleur air/air', 'Réversible', 'Aides 2026', 'CEE', 'TVA réduite'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 7 septembre 2026 · Chauffage & climatisation
          </p>

          <h1>Pompe à chaleur air/air réversible : aides, prix et conditions en 2026</h1>

          <img
            src="/blog/pompe-a-chaleur-air-air-reversible-aides-2026.jpg"
            alt="Unité extérieure de pompe à chaleur air/air réversible"
            className="w-full rounded-xl object-cover max-h-72 mb-8"
            loading="eager"
          />

          <p className="lead">
            La pompe à chaleur air/air réversible — souvent appelée <em>split réversible</em> ou
            <em> climatisation réversible</em> — chauffe en hiver et rafraîchit en été, le tout
            avec un rendement bien supérieur au chauffage électrique traditionnel. En 2026, les
            aides ont évolué : TVA réduite à 5,5 % depuis le 18 juillet, prime CEE maintenue,
            mais MaPrimeRénov' inaccessible en geste isolé. Voici le point complet.
          </p>

          <h2>Fonctionnement d'une PAC air/air réversible</h2>
          <p>
            Une pompe à chaleur air/air capte les calories présentes dans l'air extérieur
            pour les diffuser à l'intérieur du logement via une ou plusieurs <strong>unités
            intérieures</strong> (splits muraux, cassettes de plafond). En mode rafraîchissement,
            le cycle est inversé : l'appareil extrait la chaleur de l'air intérieur pour la
            rejeter dehors.
          </p>
          <p>
            Contrairement à la <a href="/pompe-a-chaleur">PAC air/eau</a>, elle n'alimente pas
            un circuit d'eau chaude ni des radiateurs existants : elle renouvelle directement
            l'air ambiant de chaque pièce équipée. C'est pourquoi elle convient
            particulièrement aux logements sans réseau de chauffage central (radiateurs
            électriques à grille-pain, maison sans plancher chauffant).
          </p>
          <ul>
            <li><strong>SCOP typique :</strong> 3,5 à 4,5 — pour 1 kWh électrique consommé, 3,5 à 4,5 kWh de chaleur produits.</li>
            <li><strong>Double usage :</strong> chauffage en hiver, climatisation en été.</li>
            <li><strong>Installation rapide :</strong> 1 à 2 jours par unité intérieure, sans travaux lourds.</li>
            <li><strong>Entretien annuel :</strong> nettoyage des filtres + vérification du circuit frigorifique par un professionnel certifié.</li>
          </ul>

          <h2>Prix d'une PAC air/air réversible en 2026</h2>
          <p>
            Le coût total dépend de la puissance et du nombre d'unités intérieures installées :
          </p>
          <ul>
            <li><strong>Mono-split (1 unité intérieure) :</strong> 4 000 à 8 000 € fourniture et pose.</li>
            <li><strong>Multi-split (2 à 5 unités) :</strong> 8 000 à 18 000 € selon la configuration.</li>
          </ul>
          <p>
            Pour un logement de 90 m² actuellement chauffé à l'électricité (convecteurs), le
            retour sur investissement se situe entre <strong>5 et 8 ans</strong>, hors aides.
            Avec les aides et la TVA réduite, il tombe souvent à 4-6 ans.
          </p>

          <h2>Les aides disponibles en 2026</h2>

          <h3>Prime CEE (fiche BAR-TH-171)</h3>
          <p>
            Les Certificats d'Économies d'Énergie (CEE) restent l'aide principale pour la
            PAC air/air en 2026. Le montant dépend de vos revenus et de votre fournisseur
            d'énergie :
          </p>
          <ul>
            <li><strong>Ménages très modestes :</strong> jusqu'à 975 € de prime.</li>
            <li><strong>Ménages modestes et intermédiaires :</strong> jusqu'à 770 €.</li>
          </ul>
          <p>
            La prime est versée directement par le fournisseur d'énergie (obligataire CEE)
            après signature d'une convention avant le début des travaux. Elle est cumulable
            avec la TVA réduite et l'Éco-PTZ.
          </p>

          <h3>TVA à 5,5 % : la nouveauté du 18 juillet 2026</h3>
          <p>
            Depuis le <strong>18 juillet 2026</strong>, les pompes à chaleur air/air les plus
            performantes bénéficient du taux réduit de TVA à 5,5 % (au lieu de 10 % ou 20 %),
            applicable à la fois sur le matériel et la main-d'œuvre. Pour en profiter :
          </p>
          <ul>
            <li>SCOP (coefficient de performance saisonnier) <strong>≥ 3,9</strong>.</li>
            <li>Puissance nominale <strong>≤ 12 kW</strong>.</li>
            <li>Pose par un professionnel certifié RGE.</li>
            <li>Logement achevé depuis plus de 2 ans.</li>
          </ul>
          <p>
            Sur un devis de 6 000 €, la TVA à 5,5 % représente une économie d'environ
            <strong> 690 €</strong> par rapport au taux de 20 %.
          </p>

          <h3>MaPrimeRénov' : non accessible en geste isolé</h3>
          <p>
            En 2026, la PAC air/air <strong>n'est pas éligible à MaPrimeRénov' en geste
            isolé</strong>. Elle peut néanmoins être intégrée dans un bouquet de travaux de
            rénovation d'ampleur si elle accompagne d'autres gestes (isolation, ventilation)
            permettant un gain de 2 classes DPE. Dans ce cas, le dossier doit être monté
            avec un Accompagnateur Rénov' agréé.
          </p>

          <h3>Éco-PTZ</h3>
          <p>
            L'Éco-Prêt à Taux Zéro reste disponible en 2026 pour financer l'installation
            d'une PAC air/air dans le cadre d'une liste de travaux éligibles. Le prêt peut
            atteindre 50 000 € sur 20 ans, sans intérêts ni frais de dossier, pour les
            ménages réalisant un bouquet de travaux ou une rénovation d'ampleur.
          </p>

          <h2>Conditions à respecter pour les aides</h2>
          <p>Pour bénéficier de la prime CEE et de la TVA à 5,5 %, il faut réunir les conditions suivantes :</p>
          <ul>
            <li>Logement construit depuis <strong>plus de 2 ans</strong>.</li>
            <li>Résidence principale ou secondaire (propriétaire occupant, bailleur ou locataire).</li>
            <li>Installation réalisée par un artisan <strong>certifié RGE</strong> (Reconnu Garant de l'Environnement).</li>
            <li>Appareil avec SCOP <strong>≥ 3,9</strong> et puissance ≤ 12 kW.</li>
            <li>Engagement signé avec l'obligataire CEE <strong>avant le début des travaux</strong>.</li>
          </ul>
          <p>
            Pour vérifier l'éligibilité RGE de votre installateur, consultez l'annuaire officiel
            sur <a href="/dpe-gratuit">notre espace diagnostic</a> ou demandez directement
            une mise en relation via <a href="/">notre simulateur d'aides</a>.
          </p>

          <h2>PAC air/air ou PAC air/eau : comment choisir ?</h2>
          <p>
            Le choix dépend avant tout de votre installation existante :
          </p>
          <ul>
            <li>
              <strong>PAC air/air</strong> : idéale si vous chauffez actuellement à l'électricité
              (convecteurs, plinthes), si vous souhaitez aussi la climatisation, et si votre
              logement n'a pas de réseau de chauffage central.
            </li>
            <li>
              <strong><a href="/pompe-a-chaleur">PAC air/eau</a></strong> : recommandée si vous
              avez déjà des radiateurs ou un plancher chauffant, et si vous souhaitez aussi
              produire de l'eau chaude sanitaire. Elle ouvre droit à MaPrimeRénov' en geste isolé.
            </li>
          </ul>
          <p>
            Sur le plan des aides, la PAC air/eau est aujourd'hui plus généreusement subventionnée
            (MaPrimeRénov' + CEE + TVA 5,5 %). La PAC air/air reste attractive pour les profils
            qui n'ont pas de réseau d'eau chaude à chauffer et qui veulent un double usage
            chaud/froid.
          </p>
        </article>

        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Quelle PAC est faite pour vous ?</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            Simulez vos aides en 2 minutes et obtenez un conseil personnalisé de notre équipe
            d'Accompagnateurs Rénov' agréés.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/" className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all">
              Simuler mes aides
            </a>
            <a href="/pompe-a-chaleur" className="px-6 py-3 rounded-full border border-white/70 text-white font-semibold hover:bg-white/10 transition-all">
              Comparer les PAC
            </a>
          </div>
        </div>
      </main>

      <ArticleFooter />
    </div>
  );
}
