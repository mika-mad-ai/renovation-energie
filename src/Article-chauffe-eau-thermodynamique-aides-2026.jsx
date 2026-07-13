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

const PUBLISHED = '2026-07-13';
const PATH = '/blog/chauffe-eau-thermodynamique-aides-2026';

export default function ArticleChauffeEauThermodynamique() {
  useSeo({
    title: "Chauffe-eau thermodynamique en 2026 : prix, aides et économies | RenoHab",
    description:
      "Tout savoir sur le chauffe-eau thermodynamique en 2026 : prix d'achat, aides MaPrimeRénov', prime CEE (BAR-TH-148), TVA à 5,5 % et reste à charge réel.",
    path: PATH,
    image: '/blog/chauffe-eau-thermodynamique-aides-2026.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline:
        "Chauffe-eau thermodynamique en 2026 : prix, aides et économies",
      description:
        "Tout savoir sur le chauffe-eau thermodynamique en 2026 : prix d'achat, aides MaPrimeRénov', prime CEE (BAR-TH-148), TVA à 5,5 % et reste à charge réel.",
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
      about: ['Chauffe-eau thermodynamique', 'MaPrimeRénov', 'CEE', 'Eau chaude sanitaire', 'Rénovation énergétique'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 13 juillet 2026 · Eau chaude &amp; aides
          </p>

          <h1>Chauffe-eau thermodynamique en 2026 : prix, aides et économies</h1>

          <img
            src="/blog/chauffe-eau-thermodynamique-aides-2026.jpg"
            alt="Chauffe-eau thermodynamique installé dans une buanderie"
            className="w-full rounded-xl object-cover mb-8"
            style={{ maxHeight: '420px' }}
          />

          <p className="lead">
            La production d'eau chaude sanitaire représente en moyenne 10 à 15 % de la facture
            énergétique d'un foyer. Le chauffe-eau thermodynamique (CET) permet de diviser ce
            poste de dépense par deux à trois, tout en bénéficiant d'aides publiques conséquentes
            en 2026. Décryptage complet.
          </p>

          <h2>Qu'est-ce qu'un chauffe-eau thermodynamique ?</h2>
          <p>
            Le CET fonctionne comme une <strong>petite pompe à chaleur</strong> dédiée à l'eau
            chaude. Il capte les calories présentes dans l'air ambiant (garage, cave, buanderie)
            pour chauffer l'eau stockée dans un ballon de 200 à 300 litres. Son{' '}
            <strong>coefficient de performance (COP) oscille entre 2,5 et 4</strong> selon les
            modèles : pour 1 kWh d'électricité consommé, il produit 2,5 à 4 kWh de chaleur.
          </p>
          <p>
            Un ballon électrique classique a un COP de 1 (il convertit l'électricité en chaleur
            sans amplification). Passer au CET, c'est donc <strong>diviser la consommation
            dédiée à l'eau chaude par 2,5 à 4</strong>.
          </p>

          <h2>Prix d'un chauffe-eau thermodynamique en 2026</h2>
          <p>
            Le coût d'un CET dépend du volume du ballon, de la marque et du type d'installation
            (air ambiant, air extérieur ou air extrait). Voici les fourchettes constatées en 2026 :
          </p>
          <ul>
            <li><strong>Équipement seul</strong> : 2 500 € à 5 000 €</li>
            <li><strong>Pose par un plombier RGE</strong> : 500 € à 1 000 €</li>
            <li><strong>Total moyen</strong> : 3 000 € à 6 000 € TTC</li>
          </ul>
          <p>
            La TVA est réduite à <strong>5,5 %</strong> sur l'ensemble du chantier (matériel +
            main-d'œuvre) pour tout logement de plus de deux ans, ce qui allège déjà la facture
            par rapport au taux normal de 20 %.
          </p>

          <h2>Quelles aides pour un CET en 2026 ?</h2>

          <h3>MaPrimeRénov' (geste par geste)</h3>
          <p>
            Le chauffe-eau thermodynamique est éligible à <strong>MaPrimeRénov'</strong> dans le
            cadre du financement par geste. Le montant versé dépend de vos revenus — quatre
            profils, du plus aidé au moins aidé :
          </p>
          <ul>
            <li>
              <strong>Bleu (revenus très modestes)</strong> : jusqu'à <strong>1 200 €</strong>
            </li>
            <li>
              <strong>Jaune (revenus modestes)</strong> : jusqu'à <strong>800 €</strong>
            </li>
            <li>
              <strong>Violet (revenus intermédiaires)</strong> : jusqu'à <strong>400 €</strong>
            </li>
            <li>
              <strong>Rose (revenus supérieurs)</strong> : non éligible à cette aide
            </li>
          </ul>
          <p>
            Ces montants sont calculés dans la limite de <strong>3 500 € HT de travaux</strong>.
            La demande se fait sur le portail{' '}
            <a
              href="https://www.maprimerenov.gouv.fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              MaPrimeRénov'.gouv.fr
            </a>{' '}
            avant le début des travaux, via un mandataire agréé comme RenoHab.
          </p>

          <h3>Prime CEE – fiche BAR-TH-148</h3>
          <p>
            La <strong>prime énergie CEE</strong> (Certificats d'Économies d'Énergie) est versée
            par un fournisseur d'énergie sans condition de revenus. Pour un CET, elle correspond
            à la fiche standardisée <strong>BAR-TH-148</strong> (version vA78.4 en vigueur depuis
            le 1er janvier 2026).
          </p>
          <p>
            Le montant de la prime CEE varie selon l'obligé choisi et les volumes kWh cumac
            certifiés (14 700 kWh cumac pour une maison individuelle, 11 800 kWh cumac pour un
            appartement). Comptez <strong>environ 100 à 200 €</strong> selon les offres du marché.
            Elle se cumule intégralement avec MaPrimeRénov'.
          </p>
          <p>
            Depuis le 1er janvier 2026, la fiche BAR-TH-148 impose également des seuils
            d'efficacité énergétique selon le profil de soutirage déclaré (M, L ou XL) : 95 %,
            100 % ou 110 %. Vérifiez que le modèle choisi est bien conforme.
          </p>

          <h3>Éco-PTZ</h3>
          <p>
            L'installation d'un CET ouvre droit à l'<strong>éco-prêt à taux zéro (Éco-PTZ)</strong>,
            empruntable sans intérêts jusqu'à <strong>15 000 €</strong> pour un geste unique, sur
            15 ans maximum. Il permet de financer le reste à charge sans avancer de trésorerie.
            Pour en savoir plus, consultez notre guide sur l'
            <a href="/#financial-aids">éco-PTZ et les autres aides</a>.
          </p>

          <h2>Exemple concret de reste à charge</h2>
          <p>
            Pour un ménage aux revenus modestes (<strong>profil Jaune</strong>), voici un exemple
            chiffré :
          </p>
          <ul>
            <li>Coût total TTC (TVA 5,5 % déjà appliquée) : <strong>4 000 €</strong></li>
            <li>MaPrimeRénov' : <strong>− 800 €</strong></li>
            <li>Prime CEE : <strong>− 150 €</strong></li>
            <li><strong>Reste à charge : environ 3 050 €</strong></li>
          </ul>
          <p>
            Ce reste à charge peut être intégralement financé via l'Éco-PTZ. Sur 10 ans, cela
            représente environ <strong>25 € par mois</strong> — souvent inférieur aux économies
            réalisées sur la facture d'eau chaude.
          </p>

          <h2>Conditions à respecter pour bénéficier des aides</h2>
          <ul>
            <li>
              <strong>Professionnel RGE certifié</strong> : l'installation doit être réalisée par
              un artisan Reconnu Garant de l'Environnement (qualification Qualibat 5711 ou équivalent).
            </li>
            <li>
              <strong>Résidence principale</strong> : le logement doit être votre résidence principale
              ou celle de votre locataire.
            </li>
            <li>
              <strong>Logement de plus de 2 ans</strong> : les constructions neuves ne sont pas éligibles.
            </li>
            <li>
              <strong>Dossier déposé avant travaux</strong> : la demande MaPrimeRénov' doit précéder
              tout début de chantier.
            </li>
          </ul>
          <p>
            En tant qu'<strong>Accompagnateur Rénov' agréé</strong>, RenoHab prépare votre dossier
            d'aides, sélectionne un artisan RGE partenaire et suit le chantier de A à Z.
          </p>

          <h2>CET ou ballon électrique : quelle économie réelle ?</h2>
          <p>
            Pour un foyer de 4 personnes consommant en moyenne 2 500 kWh/an pour l'eau chaude :
          </p>
          <ul>
            <li>
              Avec un <strong>ballon électrique</strong> (COP 1, tarif Bleu à ~0,25 €/kWh) :
              environ <strong>625 €/an</strong>
            </li>
            <li>
              Avec un <strong>CET</strong> (COP 3 moyen) : environ <strong>210 €/an</strong>
            </li>
            <li>
              <strong>Économie annuelle : 415 €</strong>
            </li>
          </ul>
          <p>
            Avec un reste à charge de 3 050 €, le retour sur investissement se situe autour de{' '}
            <strong>7 à 8 ans</strong> — sans compter la hausse probable des tarifs de l'électricité.
          </p>

          <h2>Le CET, un geste compatible avec la rénovation globale</h2>
          <p>
            Installé seul, le CET améliore votre DPE et réduit vos charges. Intégré à une{' '}
            <strong>rénovation d'ampleur</strong> (isolation + <a href="/pompe-a-chaleur">pompe
            à chaleur air/eau</a>), il peut contribuer à un saut de classe significatif. Certaines
            PAC air/eau intègrent d'ailleurs la production d'eau chaude, rendant les deux
            équipements complémentaires.
          </p>
          <p>
            Pour savoir si votre logement est prioritairement concerné par ce type de travaux,
            commencez par <a href="/dpe-gratuit">estimer votre DPE</a> : c'est gratuit et sans
            engagement.
          </p>
        </article>

        {/* CTA RenoHab */}
        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Votre projet eau chaude, financé et suivi</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            RenoHab monte votre dossier MaPrimeRénov' + CEE, vous met en relation avec un artisan
            RGE et vous accompagne jusqu'au versement des aides.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/dpe-gratuit" className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all">
              Estimer mon DPE
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
