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

const PUBLISHED = '2026-10-09';
const PATH = '/blog/chauffe-eau-thermodynamique-vs-solaire-2026';

export default function ArticleCETvsSolaire2026() {
  useSeo({
    title: "Chauffe-eau thermodynamique ou solaire : lequel choisir en 2026 ? | RenoHab",
    description:
      "Comparatif chauffe-eau thermodynamique (CET) vs chauffe-eau solaire individuel (CESI) en 2026 : prix, aides MaPrimeRénov', CEE, TVA 5,5 % et critères de choix.",
    path: PATH,
    image: '/blog/chauffe-eau-thermodynamique-vs-solaire-2026.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline:
        "Chauffe-eau thermodynamique ou solaire : lequel choisir en 2026 ?",
      description:
        "Comparatif chauffe-eau thermodynamique (CET) vs chauffe-eau solaire individuel (CESI) en 2026 : prix, aides MaPrimeRénov', CEE, TVA 5,5 % et critères de choix.",
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
      about: ['Chauffe-eau thermodynamique', 'Chauffe-eau solaire', 'Eau chaude sanitaire', 'Aides rénovation'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 9 oct. 2026 · Eau chaude sanitaire
          </p>

          <h1>Chauffe-eau thermodynamique ou solaire : lequel choisir en 2026 ?</h1>

          <img
            src="/blog/chauffe-eau-thermodynamique-vs-solaire-2026.jpg"
            alt="Chauffe-eau thermodynamique installé dans une maison individuelle moderne"
            className="w-full rounded-xl mb-8 object-cover max-h-80"
            loading="lazy"
          />

          <p className="lead">
            Remplacer un vieux chauffe-eau électrique à accumulation peut diviser votre facture
            d'eau chaude sanitaire par deux ou trois. Mais faut-il opter pour un chauffe-eau
            thermodynamique (CET) ou un chauffe-eau solaire individuel (CESI) ? Les deux
            technologies sont subventionnées en 2026 — pas de la même façon. Voici le comparatif
            complet pour faire le bon choix.
          </p>

          <h2>Principe de fonctionnement : deux logiques différentes</h2>

          <h3>Le chauffe-eau thermodynamique (CET)</h3>
          <p>
            Le CET fonctionne comme une petite pompe à chaleur : il puise les calories présentes
            dans l'air ambiant (air extérieur ou air du local technique) pour chauffer l'eau du
            ballon. Son coefficient de performance (COP) est typiquement compris entre 2,5 et 4,
            ce qui signifie qu'il produit 2,5 à 4 kWh de chaleur pour 1 kWh d'électricité consommé.
            Un foyer de 4 personnes peut ainsi voir sa consommation liée à l'eau chaude baisser de
            60 à 70 % par rapport à un cumulus classique.
          </p>
          <ul>
            <li><strong>Contrainte principale :</strong> nécessite un espace ventilé d'au moins 10 à 20 m² (garage, sous-sol, buanderie) ou un raccordement à l'air extérieur.</li>
            <li><strong>Résistance électrique intégrée :</strong> prend le relais en cas de grand froid ou de forte demande, ce qui garantit une eau chaude en toute circonstance.</li>
            <li><strong>Durée de vie :</strong> 15 à 20 ans avec un entretien annuel léger.</li>
          </ul>

          <h3>Le chauffe-eau solaire individuel (CESI)</h3>
          <p>
            Le CESI capte l'énergie du rayonnement solaire via des capteurs thermiques posés en
            toiture et la transfère à un ballon de stockage. Un appoint électrique (ou gaz)
            complète la production en période nuageuse ou en hiver. La couverture solaire atteint
            généralement <strong>50 à 70 % des besoins annuels en eau chaude</strong> selon
            l'exposition et la région.
          </p>
          <ul>
            <li><strong>Condition indispensable :</strong> une toiture exposée au sud (entre SE et SO) avec peu d'ombrage et une inclinaison de 30 à 60°.</li>
            <li><strong>Durée de vie :</strong> 20 à 30 ans pour les capteurs ; faibles coûts d'exploitation une fois l'installation amortie.</li>
            <li><strong>Contrainte de maintenance :</strong> circuit hydraulique à entretenir ; vérification du fluide caloporteur tous les 5 ans environ.</li>
          </ul>

          <h2>Prix d'installation en 2026</h2>
          <p>
            Les coûts varient selon la taille du ballon, le type d'installation et la région, mais
            on peut retenir les fourchettes suivantes pour une maison individuelle :
          </p>
          <ul>
            <li><strong>CET :</strong> 2 500 à 5 000 € TTC pose incluse (ballon 200-300 litres).</li>
            <li><strong>CESI :</strong> 3 500 à 6 500 € TTC pose incluse (2 m² de capteurs, ballon 200-300 litres).</li>
          </ul>
          <p>
            Le CESI est donc généralement plus coûteux à l'installation — mais les aides publiques
            sont aussi plus généreuses pour compenser cet écart.
          </p>

          <h2>Les aides disponibles en 2026</h2>

          <h3>TVA à 5,5 %</h3>
          <p>
            Les deux équipements bénéficient automatiquement de la <strong>TVA réduite à 5,5 %</strong>
            sur la fourniture et la pose, dès lors que votre logement a plus de deux ans et que les
            travaux sont réalisés par un artisan RGE (Reconnu Garant de l'Environnement).
          </p>

          <h3>MaPrimeRénov' par geste</h3>
          <p>
            En 2026, les deux chauffe-eaux restent éligibles au <strong>parcours par geste</strong> de
            MaPrimeRénov' pour les logements des classes A à E. Les montants (sous réserve des
            conditions de revenus et de la réglementation en vigueur au moment du dépôt) sont
            généralement plus élevés pour le CESI que pour le CET, ce qui reflète son coût
            d'installation supérieur :
          </p>
          <ul>
            <li>
              <strong>CET (fiche BAR-TH-148) :</strong> aide allant jusqu'à environ 1 200 € pour les
              ménages aux revenus très modestes ; non éligible pour les revenus supérieurs.
            </li>
            <li>
              <strong>CESI (fiche BAR-TH-101) :</strong> aide pouvant atteindre 4 000 € pour les
              ménages aux revenus très modestes, et 2 000 € pour les revenus intermédiaires.
            </li>
          </ul>
          <p>
            <em>Vérifiez toujours le barème actualisé sur le simulateur de{' '}
            <a href="https://france-renov.gouv.fr" target="_blank" rel="noopener noreferrer">France Rénov'</a>{' '}
            avant de déposer votre dossier.</em>
          </p>

          <h3>Prime CEE (Certificats d'Économies d'Énergie)</h3>
          <p>
            Les deux technologies ouvrent droit à une <a href="/blog/cee-2026-prime-energie-comment-en-profiter">prime CEE</a>,
            versée par les fournisseurs d'énergie (EDF, Engie, TotalEnergies…). Son montant
            dépend de votre zone climatique, de vos revenus et de l'obligé choisi. Elle se cumule
            avec MaPrimeRénov' et la TVA réduite.
          </p>

          <h3>Éco-PTZ</h3>
          <p>
            Si votre reste à charge reste élevé après les aides, l'<a href="/blog/eco-ptz-2026-pret-taux-zero-renovation">Éco-Prêt à Taux Zéro</a> peut
            financer jusqu'à 15 000 € de travaux sans intérêts, sous conditions de ressources et
            de l'âge du logement.
          </p>

          <h2>Tableau comparatif synthétique</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-emerald-50">
                <tr>
                  <th className="px-4 py-2 text-left font-semibold text-gray-700"></th>
                  <th className="px-4 py-2 text-left font-semibold text-emerald-700">CET</th>
                  <th className="px-4 py-2 text-left font-semibold text-teal-700">CESI solaire</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-2 font-medium text-gray-600">Prix installation</td>
                  <td className="px-4 py-2">2 500 – 5 000 €</td>
                  <td className="px-4 py-2">3 500 – 6 500 €</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-2 font-medium text-gray-600">MaPrimeRénov' max.</td>
                  <td className="px-4 py-2">~1 200 € (très modestes)</td>
                  <td className="px-4 py-2">~4 000 € (très modestes)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-medium text-gray-600">CEE cumulable</td>
                  <td className="px-4 py-2">✓</td>
                  <td className="px-4 py-2">✓</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-2 font-medium text-gray-600">TVA 5,5 %</td>
                  <td className="px-4 py-2">✓</td>
                  <td className="px-4 py-2">✓</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-medium text-gray-600">Contrainte toiture</td>
                  <td className="px-4 py-2">Aucune</td>
                  <td className="px-4 py-2">Exposition sud obligatoire</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-2 font-medium text-gray-600">Espace requis</td>
                  <td className="px-4 py-2">Local ventilé ≥ 10 m²</td>
                  <td className="px-4 py-2">Toiture + local ballon</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-medium text-gray-600">Durée de vie</td>
                  <td className="px-4 py-2">15 – 20 ans</td>
                  <td className="px-4 py-2">20 – 30 ans</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-2 font-medium text-gray-600">Couverture solaire</td>
                  <td className="px-4 py-2">—</td>
                  <td className="px-4 py-2">50 – 70 % des besoins</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Comment choisir ?</h2>

          <h3>Optez pour le CET si…</h3>
          <ul>
            <li>Vous habitez en appartement ou dans une maison sans toiture accessible.</li>
            <li>Vous disposez d'un garage, d'un sous-sol ou d'une buanderie ventilée.</li>
            <li>Vous souhaitez un chantier rapide (1 journée) et une installation simple.</li>
            <li>Votre budget travaux est limité et vous préférez un reste à charge minimal.</li>
          </ul>

          <h3>Optez pour le CESI si…</h3>
          <ul>
            <li>Vous êtes propriétaire d'une maison individuelle avec une toiture bien exposée au sud.</li>
            <li>Vous visez la solution la plus autonome sur le long terme.</li>
            <li>Vos revenus vous donnent accès aux aides MaPrimeRénov' les plus élevées (très modestes ou modestes), ce qui réduit considérablement le reste à charge.</li>
            <li>Votre projet s'inscrit dans une <a href="/blog/renovation-ampleur-2026-accompagnateur-renov">rénovation d'ampleur</a> incluant déjà une toiture ou une couverture.</li>
          </ul>

          <h3>Et si vous avez déjà une pompe à chaleur air/eau ?</h3>
          <p>
            Certaines PAC air/eau produisent aussi l'eau chaude sanitaire via un ballon thermodynamique
            intégré. Si vous envisagez d'installer ou de remplacer votre système de chauffage
            principal, pensez à cette option tout-en-un avant d'investir séparément dans un CET
            ou un CESI. Consultez notre guide sur la{' '}
            <a href="/pompe-a-chaleur">pompe à chaleur air/eau en 2026</a> pour en savoir plus.
          </p>

          <h2>Les étapes pour bénéficier des aides</h2>
          <ol>
            <li><strong>Ne signez aucun devis avant</strong> de déposer votre dossier MaPrimeRénov' sur <a href="https://www.maprimerenov.gouv.fr" target="_blank" rel="noopener noreferrer">maprimerenov.gouv.fr</a>.</li>
            <li>Faites réaliser vos travaux par un artisan <strong>RGE</strong> (qualification Qualibat, Qualipac ou équivalent selon l'équipement).</li>
            <li>Demandez la prime CEE auprès d'un fournisseur d'énergie <em>avant</em> le début du chantier.</li>
            <li>Conservez toutes les factures : elles sont indispensables pour le versement des aides.</li>
          </ol>
          <p>
            Besoin d'aide pour monter votre dossier ?{' '}
            <a href="/dpe-gratuit">Estimez votre situation gratuitement avec RenoHab</a> et
            accédez à un accompagnateur certifié.
          </p>
        </article>

        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Quel chauffe-eau pour votre logement ?</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            CET ou CESI : nos conseillers RenoHab analysent votre situation, calculent vos aides
            et vous mettent en relation avec un artisan RGE proche de chez vous.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/dpe-gratuit" className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all">
              Estimer mes aides gratuitement
            </a>
            <a href="/blog" className="px-6 py-3 rounded-full border border-white/70 text-white font-semibold hover:bg-white/10 transition-all">
              Tous nos guides
            </a>
          </div>
        </div>
      </main>

      <ArticleFooter />
    </div>
  );
}
