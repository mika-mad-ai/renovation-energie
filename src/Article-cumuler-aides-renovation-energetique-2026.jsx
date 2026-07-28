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

const PUBLISHED = '2026-07-28';
const PATH = '/blog/cumuler-aides-renovation-energetique-2026';

export default function ArticleCumulerAidesRenovationEnergetique2026() {
  useSeo({
    title: "Cumuler MaPrimeRénov', CEE et Éco-PTZ en 2026 : mode d'emploi et exemple chiffré | RenoHab",
    description:
      "MaPrimeRénov', primes CEE, Éco-PTZ, TVA à 5,5 % : ces aides se cumulent. Mode d'emploi et exemple chiffré pour couvrir jusqu'à 90 % du coût de vos travaux de rénovation énergétique en 2026.",
    path: PATH,
    image: 'https://renohab.fr/blog/cumuler-aides-renovation-energetique-2026.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline:
        "Cumuler MaPrimeRénov', CEE et Éco-PTZ en 2026 : mode d'emploi et exemple chiffré",
      description:
        "MaPrimeRénov', primes CEE, Éco-PTZ, TVA à 5,5 % : ces aides se cumulent. Mode d'emploi et exemple chiffré pour couvrir jusqu'à 90 % du coût de vos travaux de rénovation énergétique en 2026.",
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
      about: ["MaPrimeRénov'", 'CEE', 'Éco-PTZ', 'Aides rénovation énergétique', 'Financement travaux'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 28 juillet 2026 · Aides &amp; financement
          </p>

          <h1>Cumuler MaPrimeRénov', CEE et Éco-PTZ en 2026 : mode d'emploi et exemple chiffré</h1>

          <img
            src="/blog/cumuler-aides-renovation-energetique-2026.jpg"
            alt="Financement rénovation énergétique : cumul des aides MPR, CEE et Éco-PTZ"
            className="w-full rounded-xl shadow-soft mb-8 object-cover max-h-80"
            loading="eager"
          />

          <p className="lead">
            Une idée reçue court dans de nombreux foyers : il faudrait <em>choisir</em> entre les
            aides. C'est faux. MaPrimeRénov', primes CEE, Éco-PTZ et TVA réduite à 5,5 % sont{' '}
            <strong>cumulables</strong>, et bien orchestrées, elles permettent de couvrir entre
            60 % et plus de 90 % du coût de vos travaux selon votre profil de revenus. Tour
            d'horizon de chaque dispositif et d'un exemple chiffré concret.
          </p>

          <h2>MaPrimeRénov' : le socle de l'aide d'État</h2>
          <p>
            Gérée par l'Agence nationale de l'habitat (ANAH), MaPrimeRénov' (MPR) est la principale
            aide nationale à la rénovation énergétique. Elle s'adresse aux propriétaires occupants
            et bailleurs pour leur résidence principale, sous conditions de ressources.
          </p>
          <p>
            Depuis janvier 2026, deux grandes voies coexistent :
          </p>
          <ul>
            <li>
              <strong>Le parcours par geste</strong> : pour un travail ciblé comme l'installation
              d'une{' '}
              <Link to="/pompe-a-chaleur">pompe à chaleur</Link>, d'une VMC double flux ou de
              menuiseries performantes.
            </li>
            <li>
              <strong>Le parcours accompagné</strong> (rénovation d'ampleur) : pour les projets
              multi-gestes visant un saut d'au moins deux classes DPE, obligatoirement piloté par
              un Mon Accompagnateur Rénov' agréé.
            </li>
          </ul>
          <p>
            Pour l'installation d'une pompe à chaleur air/eau en geste unique, les montants 2026
            sont les suivants (source : Guide des aides ANAH, février 2026) :
          </p>

          <div className="overflow-x-auto not-prose my-6">
            <table className="w-full text-sm border-collapse rounded-xl overflow-hidden shadow-soft">
              <thead>
                <tr className="bg-emerald-600 text-white">
                  <th className="px-4 py-3 text-left font-semibold">Profil de revenus</th>
                  <th className="px-4 py-3 text-right font-semibold">Montant MPR (PAC air/eau)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b border-gray-100">
                  <td className="px-4 py-3">Très modestes <span className="text-blue-600 font-semibold">(Bleu)</span></td>
                  <td className="px-4 py-3 text-right font-semibold">5 000 €</td>
                </tr>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <td className="px-4 py-3">Modestes <span className="text-yellow-600 font-semibold">(Jaune)</span></td>
                  <td className="px-4 py-3 text-right font-semibold">4 000 €</td>
                </tr>
                <tr className="bg-white border-b border-gray-100">
                  <td className="px-4 py-3">Intermédiaires <span className="text-violet-600 font-semibold">(Violet)</span></td>
                  <td className="px-4 py-3 text-right font-semibold">3 000 €</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3">Supérieurs <span className="text-rose-600 font-semibold">(Rose)</span></td>
                  <td className="px-4 py-3 text-right text-gray-500">Non éligible</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            <strong>Condition clé :</strong> l'installateur doit être certifié RGE et la pompe à
            chaleur doit afficher une efficacité thermique annuelle saisonnière (ETAS) d'au moins
            140 %. La demande doit impérativement être déposée sur{' '}
            <strong>maprimerenov.gouv.fr avant le début des travaux</strong>.
          </p>

          <h2>Les primes CEE : l'aide sans condition de revenus</h2>
          <p>
            Les <strong>Certificats d'Économies d'Énergie (CEE)</strong> reposent sur un mécanisme
            distinct : les fournisseurs d'énergie (EDF, TotalEnergies, Engie, etc.) sont contraints
            par l'État de financer des économies d'énergie chez les particuliers. En pratique, ils
            versent une prime que votre installateur répercute directement en déduction de facture.
          </p>
          <p>
            Contrairement à MaPrimeRénov', <strong>les CEE ne dépendent pas de vos revenus</strong>.
            Tout ménage, quelle que soit sa situation, peut y accéder dès lors que les travaux sont
            réalisés par un professionnel RGE. Pour une pompe à chaleur air/eau, la prime CEE peut
            atteindre environ <strong>5 800 €</strong> — le montant exact varie selon le fournisseur,
            votre zone climatique et la surface chauffée. Comparer plusieurs offres en ligne prend
            quelques minutes et peut représenter plusieurs centaines d'euros de différence.
          </p>
          <p>
            Depuis l'entrée dans la 6e période des CEE (2026-2030), les contrôles sont renforcés :
            jusqu'à 50 % des chantiers font l'objet d'une inspection sur site. Ce durcissement
            protège les ménages contre les arnaques mais impose de choisir un installateur sérieux.
          </p>
          <p>
            CEE et MaPrimeRénov' <strong>se cumulent sans restriction</strong> : percevoir l'une ne
            réduit en rien le montant de l'autre.
          </p>

          <h2>La TVA réduite à 5,5 % : un avantage automatique</h2>
          <p>
            Tous les travaux d'amélioration de la performance énergétique d'un logement de plus de
            deux ans bénéficient d'une <strong>TVA à 5,5 %</strong> (contre 20 % en droit commun).
            Votre installateur RGE l'applique directement sur le devis. Sur une installation à
            15 000 € TTC, cela représente une économie d'environ <strong>2 000 €</strong> par rapport
            à une TVA à taux normal.
          </p>
          <p>
            Aucune démarche spécifique n'est nécessaire : il suffit de compléter l'attestation
            simplifiée fournie par votre artisan.
          </p>

          <h2>L'Éco-PTZ : financer le reste à charge à taux zéro</h2>
          <p>
            Même après avoir cumulé MPR, CEE et TVA réduite, il reste souvent un solde à financer.
            C'est là qu'intervient l'<strong>Éco-Prêt à Taux Zéro (Éco-PTZ)</strong> : un prêt sans
            intérêts ni frais de dossier, accordé par les banques partenaires agréées par l'État
            (Crédit Agricole, BNP Paribas, Caisse d'Épargne, Banque Populaire, etc.).
          </p>
          <p>
            En 2026, l'Éco-PTZ permet d'emprunter :
          </p>
          <ul>
            <li>
              Jusqu'à <strong>30 000 €</strong> pour un ou deux gestes de rénovation (durée
              maximale 15 ans)
            </li>
            <li>
              Jusqu'à <strong>50 000 €</strong> pour une rénovation d'ampleur accompagnée (durée
              maximale 20 ans)
            </li>
          </ul>
          <p>
            <strong>Pas de condition de revenus</strong> : propriétaire occupant ou bailleur, vous
            y êtes éligible dès lors que le logement a plus de deux ans. L'Éco-PTZ se cumule
            librement avec MaPrimeRénov' et les CEE — il s'agit d'un prêt, pas d'une subvention,
            donc aucune règle de plafonnement ne s'applique entre les deux.
          </p>

          <h2>Exemple chiffré : PAC air/eau pour un ménage Violet</h2>
          <p>
            Prenons le cas d'un ménage <strong>Violet</strong> (revenus intermédiaires), propriétaire
            d'une maison de 120 m², souhaitant remplacer sa vieille chaudière au fioul par une pompe
            à chaleur air/eau avec un devis à <strong>15 000 € TTC</strong> (TVA 5,5 % incluse).
          </p>

          <div className="not-prose my-6 rounded-xl bg-emerald-50 border border-emerald-200 p-5">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-700">Devis total TTC (TVA 5,5 %)</span>
                <span className="font-semibold text-gray-900">15 000 €</span>
              </div>
              <div className="flex justify-between text-emerald-700">
                <span>− MaPrimeRénov' (profil Violet)</span>
                <span className="font-semibold">− 3 000 €</span>
              </div>
              <div className="flex justify-between text-emerald-700">
                <span>− Prime CEE (estimation)</span>
                <span className="font-semibold">− 4 000 €</span>
              </div>
              <div className="border-t border-emerald-300 pt-2 flex justify-between">
                <span className="font-bold text-gray-900">Reste à charge</span>
                <span className="font-bold text-emerald-800 text-base">8 000 €</span>
              </div>
              <div className="flex justify-between text-gray-500 text-xs pt-1">
                <span>Financement Éco-PTZ 0 % sur 10 ans</span>
                <span>≈ 66 €/mois</span>
              </div>
              <div className="flex justify-between text-gray-500 text-xs">
                <span>Économies mensuelles de chauffage estimées</span>
                <span>80 – 120 €/mois</span>
              </div>
            </div>
            <p className="mt-3 text-xs text-gray-500">
              Résultat : le projet s'autofinance en moins de 10 ans. Les économies de chauffage
              dépassent les mensualités Éco-PTZ dès la première saison.
            </p>
          </div>

          <p>
            Pour un ménage <strong>Bleu</strong> (très modestes), MaPrimeRénov' atteint 5 000 € et
            les aides totales (MPR + CEE) peuvent couvrir jusqu'à <strong>90 % du montant TTC</strong>{' '}
            de la facture, ramenant le reste à charge à quelques centaines d'euros.
          </p>

          <h2>Dans quel ordre déposer les dossiers ?</h2>
          <p>
            L'ordre des étapes est crucial : une erreur de séquençage peut entraîner le refus
            de MaPrimeRénov' ou de la prime CEE.
          </p>
          <ol>
            <li>
              <strong>Vérifiez votre profil de revenus</strong> sur france-renov.gouv.fr (outil
              en ligne gratuit, résultat immédiat).
            </li>
            <li>
              <strong>Choisissez un artisan RGE</strong> via l'annuaire qualirenovation.fr ou
              directement via votre conseiller{' '}
              <Link to="/dpe-gratuit">France Rénov'</Link>.
            </li>
            <li>
              <strong>Obtenez des devis</strong> — au moins un pour MPR, et plusieurs pour comparer
              les offres CEE de différents fournisseurs d'énergie.
            </li>
            <li>
              <strong>Ouvrez votre dossier MaPrimeRénov' avant le début des travaux</strong>{' '}
              sur maprimerenov.gouv.fr. Depuis 2025, un entretien préalable avec un conseiller
              France Rénov' est requis pour le parcours accompagné.
            </li>
            <li>
              <strong>Signez l'accord CEE avec votre fournisseur d'énergie</strong> avant la pose
              de l'équipement (l'engagement préalable est obligatoire pour valider la prime).
            </li>
            <li>
              <strong>Demandez l'Éco-PTZ à votre banque</strong> une fois les montants MPR et CEE
              connus, pour financer le reste à charge.
            </li>
          </ol>

          <h2>Le rôle clé de Mon Accompagnateur Rénov' pour les projets ambitieux</h2>
          <p>
            Si votre projet dépasse un seul geste ou si vous visez un{' '}
            <strong>saut de deux classes DPE ou plus</strong>, l'intervention d'un Mon Accompagnateur
            Rénov' (MAR) agréé devient obligatoire pour débloquer les taux d'aide du parcours
            accompagné — les plus généreux du dispositif.
          </p>
          <p>
            En tant qu'Accompagnateur Rénov' agréé, RenoHab monte les dossiers MaPrimeRénov',
            identifie les meilleures offres CEE du marché, vérifie la conformité technique des
            devis et coordonne les artisans RGE — pour que vous n'ayez qu'un seul interlocuteur
            et qu'aucune aide ne vous échappe.
          </p>
        </article>

        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Calculez vos aides en 2 minutes</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            RenoHab identifie toutes les aides cumulables pour votre projet et monte les dossiers
            MPR, CEE et Éco-PTZ à votre place.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/#simulateur"
              className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all"
            >
              Simuler mes aides
            </a>
            <Link
              to="/dpe-gratuit"
              className="px-6 py-3 rounded-full border border-white/70 text-white font-semibold hover:bg-white/10 transition-all"
            >
              Estimer mon DPE
            </Link>
          </div>
        </div>
      </main>

      <ArticleFooter />
    </div>
  );
}
