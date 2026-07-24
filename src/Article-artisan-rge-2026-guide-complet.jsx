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

const PUBLISHED = '2026-07-24';
const PATH = '/blog/artisan-rge-2026-guide-complet';

export default function ArticleArtisanRge2026() {
  useSeo({
    title: "Artisan RGE en 2026 : comment trouver et vérifier un professionnel certifié | RenoHab",
    description:
      "Pourquoi le label RGE est obligatoire pour MaPrimeRénov', comment trouver un artisan certifié sur france-renov.gouv.fr et les pièges à éviter avant de signer.",
    path: PATH,
    image: `https://renohab.fr/blog/artisan-rge-2026-guide-complet.jpg`,
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: "Artisan RGE en 2026 : comment trouver et vérifier un professionnel certifié pour vos aides",
      description:
        "Pourquoi le label RGE est obligatoire pour MaPrimeRénov', comment trouver un artisan certifié sur france-renov.gouv.fr et les pièges à éviter avant de signer.",
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
      about: ['RGE', 'Rénovation énergétique', 'MaPrimeRénov', 'Artisan certifié'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 24 juillet 2026 · Guide pratique
          </p>

          <h1>Artisan RGE en 2026 : comment trouver et vérifier un professionnel certifié pour vos aides</h1>

          <img
            src="/blog/artisan-rge-2026-guide-complet.jpg"
            alt="Artisan certifié RGE réalisant des travaux de rénovation énergétique"
            className="w-full rounded-xl shadow-soft mb-8 object-cover max-h-80"
            loading="lazy"
          />

          <p className="lead">
            Pour bénéficier de MaPrimeRénov', des primes CEE ou de l'éco-PTZ, une règle s'impose :
            vos travaux doivent être réalisés par un artisan labellisé{' '}
            <strong>RGE (Reconnu Garant de l'Environnement)</strong>. Sans cette certification, aucune
            aide n'est versée, quelle que soit la qualité du chantier. Voici comment trouver le bon
            professionnel, vérifier sa certification et éviter les arnaques les plus courantes.
          </p>

          <h2>Pourquoi le label RGE est-il obligatoire ?</h2>
          <p>
            Le label RGE est une certification délivrée par des organismes accrédités (Qualibat,
            Qualit'EnR…) à des entreprises qui ont prouvé leur compétence en rénovation énergétique.
            L'État l'a rendu obligatoire pour deux raisons : garantir la qualité technique des travaux
            et s'assurer que les économies d'énergie annoncées seront bien au rendez-vous.
          </p>
          <p>Sans artisan RGE, il est impossible d'obtenir :</p>
          <ul>
            <li><strong>MaPrimeRénov'</strong> (par geste ou parcours accompagné)</li>
            <li><strong>Les primes CEE</strong> (Certificats d'Économies d'Énergie)</li>
            <li><strong>L'éco-PTZ</strong> (prêt à taux zéro pour la rénovation)</li>
            <li><strong>La TVA réduite à 5,5 %</strong> sur les travaux d'amélioration énergétique</li>
          </ul>
          <p>
            En pratique, un projet de rénovation sans artisan RGE peut se retrouver à financer 100 %
            du chantier sans aucun soutien public — ce qui change radicalement la rentabilité de
            l'opération. Commencer par vérifier le label est donc la toute première étape.
          </p>

          <h2>Les différents labels RGE selon les travaux</h2>
          <p>
            Attention : un artisan n'est pas RGE pour <em>tous</em> les types de travaux. La
            certification est spécifique à un domaine d'intervention. Un professionnel certifié pour
            l'installation d'une <a href="/pompe-a-chaleur">pompe à chaleur air/eau</a> n'est pas
            automatiquement habilité pour poser une isolation des combles.
          </p>
          <ul>
            <li>
              <strong>Qualibat</strong> : isolation thermique (combles, murs, planchers),
              menuiseries, étanchéité à l'air
            </li>
            <li>
              <strong>QualiPAC</strong> : pompes à chaleur air/eau, air/air, eau/eau et
              chauffe-eau thermodynamiques
            </li>
            <li>
              <strong>Qualit'EnR</strong> : énergies renouvelables — solaire thermique, bois
              énergie, géothermie
            </li>
            <li>
              <strong>QUALIBOIS</strong> : poêles à bois, inserts, chaudières et chauffe-eau
              biomasse
            </li>
            <li>
              <strong>QualiSOL</strong> : capteurs solaires thermiques (eau chaude sanitaire)
            </li>
            <li>
              <strong>RGE Études</strong> : maîtres d'œuvre et bureaux d'études thermiques
            </li>
          </ul>
          <p>
            Vérifiez toujours que la spécialité de l'artisan correspond <strong>exactement</strong>{' '}
            aux travaux que vous envisagez. En cas de doute, demandez le numéro SIRET et vérifiez
            en ligne (voir ci-dessous).
          </p>

          <h2>Comment trouver un artisan RGE près de chez vous</h2>
          <p>
            Deux outils officiels et gratuits recensent tous les professionnels certifiés en France :
          </p>
          <ul>
            <li>
              <strong>france-renov.gouv.fr</strong> — le portail officiel du service public de la
              rénovation énergétique, avec un moteur de recherche par code postal et par type de
              travaux.
            </li>
            <li>
              <strong>map.rge.gouv.fr</strong> — la cartographie interactive des entreprises RGE,
              mise à jour régulièrement par l'ADEME.
            </li>
          </ul>
          <p>Quelques conseils pratiques pour bien choisir :</p>
          <ul>
            <li>Demandez au moins <strong>3 devis</strong> détaillés et comparables.</li>
            <li>Privilégiez un artisan <strong>local avec des références vérifiables</strong>.</li>
            <li>Exigez une copie de l'attestation RGE valide à la date du chantier.</li>
            <li>
              Vérifiez que l'entreprise dispose d'une <strong>assurance garantie décennale</strong>{' '}
              couvrant les travaux concernés.
            </li>
          </ul>

          <h2>Comment vérifier qu'un artisan est bien certifié RGE</h2>
          <p>
            La vérification prend moins de deux minutes et est entièrement gratuite. Ne vous fiez pas
            uniquement à un document papier : les certifications ont une durée de validité limitée et
            peuvent être suspendues.
          </p>
          <ol>
            <li>
              Rendez-vous sur <strong>france-renov.gouv.fr</strong> ou{' '}
              <strong>map.rge.gouv.fr</strong>.
            </li>
            <li>
              Saisissez le <strong>nom de l'entreprise</strong> ou son numéro <strong>SIRET</strong>.
            </li>
            <li>
              Vérifiez que la certification est <strong>en cours de validité</strong> et que la
              spécialité couvre vos travaux.
            </li>
          </ol>
          <p>
            Si l'entreprise n'apparaît pas ou si sa certification a expiré, ne signez rien. Vous
            perdriez l'accès à toutes les aides.
          </p>

          <h3>Les pièges à éviter absolument</h3>
          <ul>
            <li>
              <strong>Le démarchage téléphonique ou à domicile</strong> : il est interdit pour les
              travaux de rénovation énergétique depuis 2023. Une offre spontanée de travaux
              « entièrement gratuits » est systématiquement une arnaque.
            </li>
            <li>
              <strong>Le sous-traitant non certifié</strong> : l'entreprise mandataire peut être RGE,
              mais sous-traiter à une entreprise qui ne l'est pas. Exigez que la société qui réalise
              physiquement les travaux soit elle-même certifiée.
            </li>
            <li>
              <strong>Le devis signé avant audit</strong> : dans le cadre du parcours accompagné
              MaPrimeRénov', l'<a href="/dpe-gratuit">audit énergétique</a> doit obligatoirement
              précéder la signature des devis.
            </li>
            <li>
              <strong>L'avance de fonds avant versement des aides</strong> : les artisans sérieux
              vous aident à monter les dossiers d'aides ; ils ne vous demandent pas de verser
              l'intégralité du montant avant de commencer.
            </li>
          </ul>

          <h2>Le rôle de l'Accompagnateur Rénov' pour sécuriser votre projet</h2>
          <p>
            Pour une rénovation d'ampleur (saut de 2 classes DPE ou plus), faire appel à un{' '}
            <strong>Mon Accompagnateur Rénov' (MAR)</strong> agréé par l'État est obligatoire pour
            accéder aux aides les plus élevées. Son rôle va au-delà du simple conseil : il audite
            votre logement, propose un plan de travaux cohérent, sélectionne des artisans RGE
            qualifiés et monte les dossiers d'aides à votre place.
          </p>
          <p>
            En tant qu'Accompagnateur Rénov' agréé, RenoHab vous met en relation avec des artisans
            RGE de confiance, coordonne le chantier et maximise le cumul des aides (MaPrimeRénov' +
            CEE + éco-PTZ). Utilisez notre{' '}
            <a href="/#simulator">simulateur d'aides</a> pour estimer votre reste à charge en
            quelques clics.
          </p>

          <h2>En résumé : les 5 réflexes avant de choisir votre artisan</h2>
          <ol>
            <li>
              <strong>Vérifiez le label RGE</strong> sur france-renov.gouv.fr avant tout engagement.
            </li>
            <li>
              <strong>Contrôlez la spécialité</strong> : elle doit correspondre exactement à vos
              travaux.
            </li>
            <li>
              <strong>Comparez au moins 3 devis</strong> détaillés et demandez des références.
            </li>
            <li>
              <strong>Méfiez-vous du démarchage</strong> et des promesses de travaux « gratuits ».
            </li>
            <li>
              <strong>Faites-vous accompagner</strong> par un MAR agréé pour une rénovation globale.
            </li>
          </ol>
        </article>

        {/* CTA RenoHab */}
        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">
            Trouvez des artisans RGE de confiance avec RenoHab
          </h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            En tant qu'Accompagnateur Rénov' agréé, nous sélectionnons des professionnels certifiés
            et montons vos dossiers d'aides de A à Z.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/dpe-gratuit"
              className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all"
            >
              Estimer mon DPE gratuit
            </a>
            <a
              href="/pompe-a-chaleur"
              className="px-6 py-3 rounded-full border border-white/70 text-white font-semibold hover:bg-white/10 transition-all"
            >
              Étudier une pompe à chaleur
            </a>
          </div>
        </div>
      </main>

      <ArticleFooter />
    </div>
  );
}
