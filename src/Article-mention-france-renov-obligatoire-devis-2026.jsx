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

const PUBLISHED = '2026-10-16';
const PATH = '/blog/mention-france-renov-obligatoire-devis-2026';

export default function ArticleMentionFranceRenovObligatoire2026() {
  useSeo({
    title: "Mention France Rénov' obligatoire sur vos devis : votre protection anti-arnaques depuis octobre 2026 | RenoHab",
    description:
      "Depuis le 1er octobre 2026, tout artisan ou entreprise doit afficher la mention France Rénov' sur ses publicités et devis. Ce que ça change pour vous, les sanctions encourues, et comment en faire un critère de choix.",
    path: PATH,
    image: '/blog/mention-france-renov-obligatoire-devis-2026.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline:
        "Mention France Rénov' obligatoire sur vos devis : votre protection anti-arnaques depuis octobre 2026",
      description:
        "Depuis le 1er octobre 2026, tout artisan ou entreprise doit afficher la mention France Rénov' sur ses publicités et devis. Ce que ça change pour vous, les sanctions encourues, et comment en faire un critère de choix.",
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
      about: ["MaPrimeRénov'", 'France Rénov', 'Rénovation énergétique', 'Arnaques travaux'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 16 oct. 2026 · Aides &amp; réglementation
          </p>

          <h1>Mention France Rénov' obligatoire sur vos devis : votre protection anti-arnaques depuis octobre 2026</h1>

          <img
            src="/blog/mention-france-renov-obligatoire-devis-2026.jpg"
            alt="Particulier qui examine un devis de rénovation énergétique avec la mention France Rénov'"
            className="rounded-2xl w-full object-cover max-h-72 mb-8"
            loading="eager"
          />

          <p className="lead">
            Depuis le <strong>1er octobre 2026</strong>, toute publicité pour des travaux de
            rénovation énergétique — flyer, site internet, spot radio, et même votre devis — doit
            comporter une phrase obligatoire renvoyant vers le service public <em>France Rénov'</em>.
            Cette mesure, issue de la loi du 30 juin 2025 contre les fraudes aux aides publiques,
            protège les particuliers et constitue un nouveau critère pour choisir un professionnel
            sérieux. Voici ce que vous devez savoir.
          </p>

          <h2>Qu'est-ce que la mention France Rénov' et à quoi ressemble-t-elle ?</h2>
          <p>
            L'arrêté du 7 juillet 2026, publié au <em>Journal officiel</em> du 31 juillet 2026, fixe
            le texte exact que tout professionnel de la rénovation énergétique doit afficher. La
            formulation est strictement encadrée : elle commence par{' '}
            <strong>« Avant de vous engager… »</strong> et renvoie systématiquement vers{' '}
            <strong>france-renov.gouv.fr</strong>, le portail officiel de l'Agence nationale de
            l'habitat (Anah).
          </p>
          <p>
            Aucune reformulation n'est admise. L'objectif est de garantir que chaque ménage, avant
            de signer un contrat de travaux, soit orienté vers un conseiller public indépendant,
            capable de l'informer sur les aides auxquelles il a réellement droit.
          </p>

          <h3>Quels supports sont concernés ?</h3>
          <ul>
            <li>Flyers, dépliants et toute documentation imprimée</li>
            <li>Sites internet et pages de résultats payants (publicité en ligne)</li>
            <li>Spots radio et messages audio</li>
            <li>Panneaux d'affichage publicitaires</li>
            <li>Devis et propositions commerciales remis au particulier</li>
          </ul>
          <p>
            En pratique, si un artisan vous remet un devis pour l'installation d'une pompe à chaleur
            ou des travaux d'isolation sans cette mention, il n'est pas en règle depuis le
            1er octobre 2026.
          </p>

          <h2>Pourquoi cette obligation a-t-elle été instaurée ?</h2>
          <p>
            La rénovation énergétique représente chaque année plusieurs milliards d'euros d'aides
            publiques (MaPrimeRénov', Certificats d'Économies d'Énergie, Éco-PTZ…). Ce volume
            attire malheureusement des acteurs peu scrupuleux qui surfacturent des travaux,
            démarchent agressivement des ménages vulnérables ou promettent des aides auxquelles le
            client ne peut pas prétendre.
          </p>
          <p>
            La loi du 30 juin 2025 contre les fraudes aux aides publiques vise à briser ce schéma
            en imposant une information neutre et systématique. En renvoyant vers France Rénov', le
            particulier peut <strong>vérifier lui-même</strong> ses droits, comparer les offres et
            signaler un abus, avant même d'avoir signé.
          </p>

          <h3>Des sanctions financières sévères pour les professionnels</h3>
          <p>
            Le non-respect de cette obligation expose les professionnels à des amendes
            administratives significatives :
          </p>
          <ul>
            <li><strong>15 000 €</strong> pour un artisan indépendant ou une micro-entreprise</li>
            <li><strong>75 000 €</strong> pour une société ou un réseau de franchise</li>
          </ul>
          <p>
            Ces montants visent à dissuader les entreprises qui misent sur l'ignorance des
            particuliers. Pour vous, l'absence de cette mention est un signal d'alerte concret.
          </p>

          <h2>Ce que ça change concrètement pour les particuliers</h2>
          <p>
            Avant de signer un devis de rénovation, vous pouvez désormais procéder à une vérification
            simple en trois temps :
          </p>
          <ol>
            <li>
              <strong>La mention est présente ?</strong> Le professionnel respecte la réglementation
              en vigueur.
            </li>
            <li>
              <strong>Rendez-vous sur France Rénov'</strong> (france-renov.gouv.fr) pour un
              rendez-vous de conseil gratuit ou pour simuler vos aides.
            </li>
            <li>
              <strong>Vérifiez la certification RGE</strong> de l'entreprise (obligatoire pour
              déclencher MaPrimeRénov' et les CEE), sur le site officiel{' '}
              <a href="/choisir-artisan-rge" aria-label="Comment choisir un artisan RGE">
                qualiteconstruction.com
              </a>.
            </li>
          </ol>
          <p>
            Cette triple vérification prend moins de dix minutes et peut vous éviter des
            désillusions coûteuses.
          </p>

          <h2>Le contexte : MaPrimeRénov' recentrée, aides en évolution</h2>
          <p>
            Cette obligation arrive dans un paysage des aides qui s'est profondément transformé.
            Depuis le <strong>1er septembre 2026</strong>, MaPrimeRénov' par geste est désormais
            réservée à un nombre limité de travaux : principalement les{' '}
            <a href="/pompe-a-chaleur">pompes à chaleur air/eau et géothermiques</a>, le
            raccordement à un réseau de chaleur, la dépose de cuve à fioul et l'audit énergétique.
            Les isolations, fenêtres et VMC demandées seules ne sont plus éligibles à ce parcours.
          </p>
          <p>
            Dans ce contexte, le risque de démarchage abusif augmente : des professionnels peuvent
            tenter de vous vendre des travaux en vous faisant croire qu'ils sont encore subventionnés
            par MaPrimeRénov' alors qu'ils ne le sont plus. La mention France Rénov' vous incite à
            vérifier par vous-même auprès d'une source officielle.
          </p>
          <p>
            Les ménages dont le logement est classé <strong>F ou G</strong> conservent toutefois un
            accès élargi au parcours MaPrimeRénov' par geste jusqu'au 31 décembre 2027. Si c'est
            votre cas, renseignez-vous avec un conseiller impartial avant tout engagement.
          </p>

          <h2>Accompagnateur Rénov' : votre garantie d'un interlocuteur indépendant</h2>
          <p>
            Pour les projets de{' '}
            <a href="/blog/renovation-ampleur-2026-accompagnateur-renov">rénovation d'ampleur</a>{' '}
            (gain d'au moins deux classes DPE, plusieurs gestes combinés), l'intervention d'un
            Accompagnateur Rénov' agréé est obligatoire. Son rôle est précisément d'être un
            tiers de confiance : il audite votre logement, planifie les travaux, sélectionne des
            artisans RGE et monte le dossier de financement sans conflit d'intérêts avec les
            entreprises de travaux.
          </p>
          <p>
            RenoHab est Accompagnateur Rénov' agréé. Contrairement à un artisan, nous ne vendons
            pas de travaux : nous défendons vos intérêts tout au long du projet, des premières
            simulations jusqu'au versement des primes.
          </p>

          <h2>Récapitulatif : les points clés à retenir</h2>
          <ul>
            <li>
              <strong>1er octobre 2026 :</strong> la mention France Rénov' est obligatoire sur toute
              publicité et tout devis de travaux de rénovation énergétique.
            </li>
            <li>
              Son absence est une irrégularité passible de 15 000 à 75 000 € d'amende — et un
              signal d'alerte pour le particulier.
            </li>
            <li>
              Avant de signer, vérifiez systématiquement la mention, la certification RGE et vos
              droits aux aides sur france-renov.gouv.fr.
            </li>
            <li>
              Depuis le 1er septembre 2026, MaPrimeRénov' par geste ne couvre plus les isolations
              ni les fenêtres demandées seules ; ne vous laissez pas induire en erreur.
            </li>
          </ul>
        </article>

        {/* CTA RenoHab */}
        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">
            Un projet de rénovation ? Parlons-en sans engagement.
          </h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            RenoHab, Accompagnateur Rénov' agréé, vérifie vos droits aux aides, sélectionne des
            artisans RGE certifiés et monte votre dossier de financement de A à Z.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/dpe-gratuit"
              className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all"
            >
              Estimer mon DPE gratuitement
            </a>
            <a
              href="/pompe-a-chaleur"
              className="px-6 py-3 rounded-full border border-white/70 text-white font-semibold hover:bg-white/10 transition-all"
            >
              Voir les aides pompe à chaleur
            </a>
          </div>
        </div>
      </main>

      <ArticleFooter />
    </div>
  );
}
