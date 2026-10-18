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
        <p className="mt-3 text-sm text-gray-500">
          <a href="/mentions-legales" className="hover:text-emerald-300 transition-colors">Mentions légales</a>
          <span className="mx-2 opacity-60">·</span>
          <a href="/confidentialite" className="hover:text-emerald-300 transition-colors">Politique de confidentialité</a>
        </p>
      </div>
    </footer>
  );
}

const PUBLISHED = '2026-10-18';
const PATH = '/blog/garantie-decennale-renovation-energetique-2026';

export default function ArticleGarantieDecennale2026() {
  useSeo({
    title: "Garantie décennale et rénovation énergétique : les 3 protections légales en 2026 | RenoHab",
    description:
      "Garantie de parfait achèvement, biennale ou décennale : quels travaux de rénovation énergétique sont couverts, comment vérifier l'assurance de votre artisan et quels réflexes adopter avant de signer.",
    path: PATH,
    image: '/blog/garantie-decennale-renovation-energetique-2026.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline:
        "Garantie décennale et rénovation énergétique : les 3 protections légales en 2026",
      description:
        "Garantie de parfait achèvement, biennale ou décennale : quels travaux de rénovation énergétique sont couverts, comment vérifier l'assurance de votre artisan et quels réflexes adopter avant de signer.",
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
      about: ['Garantie décennale', 'Rénovation énergétique', 'Assurance travaux', 'Artisan RGE'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 18 oct. 2026 · Démarches &amp; aides
          </p>

          <h1>Garantie décennale et rénovation énergétique : les 3 protections légales en 2026</h1>

          <img
            src="/blog/garantie-decennale-renovation-energetique-2026.jpg"
            alt="Artisan RGE présentant une attestation d'assurance décennale pour des travaux de rénovation énergétique"
            className="w-full rounded-2xl object-cover max-h-80 mb-8"
            loading="lazy"
          />

          <p className="lead">
            Vous investissez dans une pompe à chaleur, une isolation par l'extérieur ou une VMC
            double flux : vous bénéficiez automatiquement de <strong>trois protections légales</strong>.
            Pourtant, moins de la moitié des propriétaires savent comment les activer — ni même
            quels travaux sont réellement couverts. Tour d'horizon des garanties légales applicables
            à la rénovation énergétique et des bons réflexes à adopter avant de signer un devis.
          </p>

          <h2>1. La garantie de parfait achèvement (1 an)</h2>
          <p>
            Prévue par l'article 1792-6 du Code civil, elle oblige l'artisan à réparer{' '}
            <strong>tous les désordres signalés</strong> lors de la réception du chantier ou
            constatés dans l'année qui suit : isolation mal posée laissant des courants d'air,
            joint défaillant sur un chauffe-eau thermodynamique, pont thermique visible sur une
            ITE...
          </p>
          <h3>Comment l'activer ?</h3>
          <ul>
            <li>
              À la <strong>réception des travaux</strong>, notez par écrit chaque réserve sur le
              procès-verbal, même minime.
            </li>
            <li>
              En cas de problème découvert après coup, adressez une{' '}
              <strong>lettre recommandée avec AR</strong> dans l'année suivant la réception.
            </li>
            <li>
              L'artisan dispose d'un délai raisonnable pour intervenir ; en cas d'inaction, vous
              pouvez faire exécuter les réparations à ses frais après mise en demeure.
            </li>
          </ul>

          <h2>2. La garantie biennale (2 ans)</h2>
          <p>
            Appelée aussi « garantie de bon fonctionnement », elle couvre pendant deux ans les{' '}
            <strong>éléments dissociables</strong> du bâtiment : équipements qui peuvent être
            retirés sans endommager la structure. En rénovation énergétique, cela concerne
            notamment :
          </p>
          <ul>
            <li>les thermostats programmables et sondes de régulation</li>
            <li>les pompes de circulation dans un plancher chauffant</li>
            <li>les volets roulants motorisés installés lors du chantier</li>
            <li>les radiateurs électriques posés en remplacement</li>
          </ul>
          <p>
            Un équipement est « dissociable » s'il peut être retiré sans endommager le bâtiment ;
            dans le cas contraire, il relève de la garantie décennale.
          </p>

          <h2>3. La garantie décennale (10 ans)</h2>
          <p>
            C'est la protection la plus importante. Elle couvre pendant dix ans les{' '}
            <strong>dommages compromettant la solidité de l'ouvrage</strong> ou le rendant{' '}
            <strong>impropre à sa destination</strong> — inhabitable, ou impossible à chauffer
            correctement. Elle est souscrite par l'artisan (obligation légale) et activable même
            si l'entreprise a fermé entre-temps.
          </p>

          <h3>Ce qu'elle couvre pour les travaux de rénovation énergétique</h3>
          <div className="overflow-x-auto not-prose my-6">
            <table className="min-w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
              <thead className="bg-emerald-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Type de travaux</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Garantie décennale</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="bg-white">
                  <td className="px-4 py-3">Isolation thermique par l'extérieur (ITE)</td>
                  <td className="px-4 py-3 text-emerald-700 font-medium">✅ Oui — défauts d'étanchéité ou de solidité</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3">Isolation des combles et planchers bas</td>
                  <td className="px-4 py-3 text-emerald-700 font-medium">✅ Oui — logement rendu inconfortable ou non chauffable</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3">Pompe à chaleur air/eau intégrée au bâti</td>
                  <td className="px-4 py-3 text-emerald-700 font-medium">✅ Oui — si dysfonctionnement rendant le logement impropre à destination (Cass. 3e civ.)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3">VMC double flux intégrée en faux plafond</td>
                  <td className="px-4 py-3 text-emerald-700 font-medium">✅ Oui — selon degré d'intégration au bâti</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3">Radiateurs en remplacement (dissociables)</td>
                  <td className="px-4 py-3 text-red-600 font-medium">❌ Non — garantie biennale (2 ans)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            <strong>Jurisprudence 2024 :</strong> la Cour de cassation (3e chambre civile) a
            confirmé que la garantie décennale peut s'appliquer à une{' '}
            <a href="/pompe-a-chaleur">pompe à chaleur</a> installée dans un logement existant, si
            son dysfonctionnement rend la maison impropre à sa destination. Chaque situation reste
            appréciée au cas par cas.
          </p>

          <h3>L'assurance dommages-ouvrage (DO) : facultative mais précieuse</h3>
          <p>
            L'assurance dommages-ouvrage (DO) est souscrite{' '}
            <strong>par le propriétaire maître d'ouvrage</strong>, avant le début des travaux.
            Elle permet d'être indemnisé rapidement en cas de sinistre couvert par la décennale,
            sans attendre un jugement sur la responsabilité de l'artisan — ce qui peut prendre des
            années.
          </p>
          <p>
            Elle est techniquement obligatoire pour toute construction neuve ou rénovation lourde
            couverte par la décennale. En pratique, elle est souvent négligée pour les chantiers
            de rénovation énergétique ; son coût (entre 1 % et 3 % du montant des travaux) peut
            néanmoins se justifier pour un projet important comme une rénovation d'ampleur.
          </p>

          <h2>Ce que vous devez demander à votre artisan avant de signer</h2>
          <p>Avant de signer un devis de rénovation énergétique, exigez systématiquement :</p>
          <ol>
            <li>
              <strong>L'attestation d'assurance décennale en cours de validité</strong>, précisant
              le type de travaux couvert. Ce document est obligatoire et doit être remis avec le
              devis. Son absence est un signal d'alarme à ne pas ignorer.
            </li>
            <li>
              <strong>La certification RGE</strong> (Reconnu Garant de l'Environnement) : elle
              conditionne l'accès à toutes les aides (MaPrimeRénov', CEE, Éco-PTZ) et garantit
              une formation spécifique aux techniques de rénovation énergétique.{' '}
              <a href="/dpe-gratuit">Évaluez d'abord votre logement</a> pour cibler les bons
              travaux et choisir le bon professionnel.
            </li>
            <li>
              <strong>Un devis détaillé</strong> précisant les matériaux, marques et performances
              visées (résistance thermique R, COP de la PAC, classe acoustique des fenêtres...).
              Ces données serviront de référence en cas de litige.
            </li>
          </ol>
          <p>
            Vous pouvez vérifier vous-même la validité d'une assurance décennale en contactant
            directement l'assureur mentionné sur l'attestation ou en consultant le registre
            professionnel.
          </p>

          <h2>Bonne nouvelle 2026 : moins de paperasse pour les PAC</h2>
          <p>
            Depuis le <strong>décret du 20 février 2026</strong>, l'installation d'une pompe à
            chaleur dans une maison individuelle ne nécessite plus de déclaration préalable de
            travaux en mairie dans la grande majorité des cas. Cette simplification administrative
            réduit les délais de démarrage — mais n'exonère pas pour autant l'artisan de ses
            obligations de garantie, ni le propriétaire de demander les attestations d'assurance.
          </p>
          <p>
            Cette mesure s'inscrit dans un mouvement plus large de simplification de la{' '}
            <a href="/blog">rénovation énergétique</a> en France, en parallèle des nouvelles
            règles CEE et de la réforme de MaPrimeRénov'.
          </p>

          <h2>En résumé : vos 3 réflexes avant de signer</h2>
          <ul>
            <li>
              Demandez l'attestation d'assurance décennale <em>avant</em> la signature du devis,
              pas après.
            </li>
            <li>
              Vérifiez que la certification RGE de l'artisan est valide sur le site{' '}
              <em>France Rénov'</em> (france-renov.gouv.fr &gt; Trouver un professionnel).
            </li>
            <li>
              Notez toutes vos réserves par écrit à la réception des travaux pour activer la
              garantie de parfait achèvement si nécessaire.
            </li>
          </ul>
        </article>

        {/* CTA RenoHab */}
        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Lancez votre projet en toute sécurité</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            RenoHab sélectionne des artisans RGE assurés, vérifie les attestations décennales et
            monte vos dossiers d'aides. Accompagnateur Rénov' agréé, sans frais pour vous.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/dpe-gratuit" className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all">
              Évaluer mon logement
            </a>
            <a href="/pompe-a-chaleur" className="px-6 py-3 rounded-full border border-white/70 text-white font-semibold hover:bg-white/10 transition-all">
              Étudier une pompe à chaleur
            </a>
          </div>
        </div>
      </main>

      <ArticleFooter />
    </div>
  );
}
