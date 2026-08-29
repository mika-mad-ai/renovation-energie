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

const PUBLISHED = '2026-08-29';
const PATH = '/blog/choisir-artisan-rge-2026';

export default function ArticleChoisirArtisanRge() {
  useSeo({
    title: "Artisan RGE 2026 : comment trouver et vérifier un professionnel certifié | RenoHab",
    description:
      "Sans artisan RGE, pas d'aide à la rénovation : ni MaPrimeRénov', ni CEE, ni Éco-PTZ. Guide complet pour trouver, vérifier et choisir un professionnel certifié RGE en 2026.",
    path: PATH,
    image: '/blog/choisir-artisan-rge-2026.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: "Artisan RGE 2026 : comment trouver et vérifier un professionnel certifié",
      description:
        "Sans artisan RGE, pas d'aide à la rénovation : ni MaPrimeRénov', ni CEE, ni Éco-PTZ. Guide complet pour trouver, vérifier et choisir un professionnel certifié RGE en 2026.",
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
      about: ['Artisan RGE', 'MaPrimeRénov\'', 'Rénovation énergétique', 'Aides travaux 2026'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 29 août 2026 · Démarches & aides
          </p>

          <h1>Artisan RGE en 2026 : comment le trouver, le vérifier et éviter les arnaques</h1>

          <img
            src="/blog/choisir-artisan-rge-2026.jpg"
            alt="Artisan RGE réalisant des travaux de rénovation énergétique"
            className="w-full rounded-xl my-6 object-cover max-h-80"
            loading="lazy"
          />

          <p className="lead">
            Que vous souhaitiez isoler votre maison, installer une pompe à chaleur ou changer vos
            fenêtres, un point est non négociable : votre artisan doit être <strong>certifié RGE</strong>.
            Sans cette mention, vous perdez l'accès à MaPrimeRénov', aux CEE, à l'Éco-PTZ et même
            à la TVA réduite à 5,5 %. Voici comment identifier le bon professionnel — et ne pas
            tomber dans un piège.
          </p>

          <h2>Qu'est-ce que la certification RGE ?</h2>
          <p>
            RGE signifie <strong>Reconnu Garant de l'Environnement</strong>. C'est un label d'État
            attribué par des organismes indépendants accrédités (Qualibat, Cerqual, Bureau Veritas…)
            à des entreprises du bâtiment qui ont prouvé leurs compétences en rénovation énergétique.
            La certification est renouvelée tous les quatre ans, avec un contrôle en chantier tous
            les deux ans. Elle garantit que le professionnel maîtrise les techniques et les
            matériaux adaptés à votre projet.
          </p>
          <p>
            Ce label conditionne le versement de toutes les principales aides à la rénovation
            énergétique en France : <a href="/blog/rendez-vous-france-renov-maprimerenov-2026">MaPrimeRénov'</a>,
            Certificats d'Économies d'Énergie (CEE), <a href="/blog/eco-ptz-2026-pret-taux-zero-renovation">Éco-PTZ</a> et TVA à 5,5 %.
            Un artisan non certifié peut très bien exécuter des travaux de qualité, mais vous n'aurez
            alors droit à aucune subvention.
          </p>

          <h2>RGE n'est pas un label unique : connaître les qualifications par domaine</h2>
          <p>
            La certification RGE recouvre plusieurs qualifications spécialisées selon le type de
            travaux. Il est essentiel de choisir un artisan dont la qualification correspond à votre
            chantier :
          </p>
          <ul>
            <li>
              <strong>Qualibat RGE</strong> – isolation des murs, combles, planchers, remplacement
              des menuiseries (fenêtres, portes).
            </li>
            <li>
              <strong>QualiPAC</strong> – installation de pompes à chaleur air/eau, air/air ou
              géothermiques.
            </li>
            <li>
              <strong>QualiAir</strong> – systèmes de ventilation, dont la VMC double flux.
            </li>
            <li>
              <strong>Qualibois</strong> – chaudières et poêles à bois ou granulés.
            </li>
            <li>
              <strong>QualiSol</strong> – chauffe-eau solaires et systèmes solaires combinés.
            </li>
            <li>
              <strong>RGE Études</strong> – bureaux d'études thermiques et auditeurs énergétiques.
            </li>
          </ul>
          <p>
            Un artisan peut cumuler plusieurs qualifications : vérifiez toujours que la
            qualification affichée correspond précisément aux travaux envisagés.
          </p>

          <h2>Comment trouver un artisan RGE officiel ?</h2>
          <p>
            L'annuaire de référence est <strong>france-renov.gouv.fr</strong> (annuaire des
            professionnels), le portail officiel du service public de la rénovation de l'habitat.
            Vous y saisissez votre code postal et le type de travaux, et obtenez la liste des
            entreprises certifiées à proximité avec leur numéro SIRET et le détail de leurs
            qualifications.
          </p>
          <p>
            Ce que vous devez vérifier avant de signer un devis :
          </p>
          <ul>
            <li>La qualification RGE correspond bien au type de travaux (isolation, PAC, etc.).</li>
            <li>La certification est <strong>en cours de validité</strong> (date d'expiration visible sur l'annuaire).</li>
            <li>Le numéro SIRET de la facture est le même que celui de l'annuaire.</li>
            <li>Le devis mentionne explicitement le label RGE et le numéro de qualification.</li>
          </ul>

          <h2>Les règles à respecter pour ne pas perdre vos aides</h2>
          <h3>Le devis doit précéder les travaux</h3>
          <p>
            Pour MaPrimeRénov' et les CEE, les travaux sont considérés comme <em>engagés</em> à
            la date de signature du devis par les deux parties. Si vous commencez des travaux avant
            d'avoir un devis signé et daté, vous perdez le droit aux aides — sans exception. Prenez
            le temps de comparer au moins deux devis avant de signer.
          </p>
          <h3>Jamais d'avance supérieure à 30 %</h3>
          <p>
            La loi interdit aux artisans d'exiger plus de 30 % d'acompte sur les travaux de
            rénovation. Méfiez-vous des professionnels qui réclament un paiement intégral avant
            le début du chantier ou qui refusent de vous remettre un devis détaillé par écrit.
          </p>

          <h2>Reconnaître et éviter les arnaques</h2>
          <p>
            Le démarchage téléphonique ou à domicile pour des travaux de rénovation énergétique
            est <strong>strictement encadré par la loi</strong> (loi du 27 mars 2017 et articles
            L. 221-18 et suivants du Code de la consommation). Tout contrat conclu lors d'une visite
            à domicile non sollicitée peut être annulé dans les 14 jours suivant la signature.
          </p>
          <p>
            Signes d'alerte à surveiller :
          </p>
          <ul>
            <li>Un artisan qui prétend intervenir <em>au nom de l'État</em> ou d'une collectivité.</li>
            <li>Une offre de « travaux gratuits » ou « entièrement pris en charge par MaPrimeRénov' ».</li>
            <li>L'absence de devis écrit détaillé ou une pression pour signer dans la journée.</li>
            <li>Un numéro de qualification RGE introuvable sur l'annuaire officiel.</li>
          </ul>
          <p>
            En cas de doute, signalez l'entreprise sur <strong>signal.conso.gouv.fr</strong> et
            consultez votre conseiller <a href="/dpe-gratuit">France Rénov'</a> avant tout engagement.
          </p>

          <h2>Pourquoi passer par un Accompagnateur Rénov' ?</h2>
          <p>
            Dans le cadre d'une <a href="/blog/renovation-ampleur-2026-accompagnateur-renov">rénovation d'ampleur</a>,
            le recours à un <strong>Mon Accompagnateur Rénov' (MAR)</strong> agréé est obligatoire pour
            bénéficier de MaPrimeRénov'. En dehors de cette obligation, l'accompagnateur joue un rôle
            précieux : il vérifie les qualifications des artisans, coordonne les devis, monte le
            dossier de financement (MaPrimeRénov' + CEE + Éco-PTZ) et suit le chantier jusqu'à la
            réception des travaux.
          </p>
          <p>
            RenoHab est Accompagnateur Rénov' agréé par l'État. Notre réseau d'artisans RGE
            partenaires, contrôlés et sélectionnés, vous évite les démarches de vérification et
            réduit le risque de mauvaises surprises.
          </p>
        </article>

        {/* CTA RenoHab */}
        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Trouvez des artisans RGE vérifiés</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            RenoHab sélectionne et coordonne des artisans certifiés RGE pour votre projet. Estimez
            vos aides et démarrez votre chantier en confiance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/#simulateur"
              className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all"
            >
              Simuler mes aides
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
