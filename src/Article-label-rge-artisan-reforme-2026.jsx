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

const PUBLISHED = '2026-10-25';
const PATH = '/blog/label-rge-artisan-reforme-2026';

export default function ArticleLabelRgeArtisanReforme2026() {
  useSeo({
    title: "Label RGE 2026 : réforme, comment vérifier un artisan et éviter les arnaques | RenoHab",
    description:
      "L'arrêté du 23 juin 2026 renforce les critères du label RGE. Sans artisan certifié RGE, aucune aide — MaPrimeRénov', CEE, éco-PTZ — n'est accessible. Guide pratique pour vérifier la qualification et comprendre ce qui change.",
    path: PATH,
    image: '/blog/label-rge-artisan-reforme-2026.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: "Label RGE 2026 : réforme, comment vérifier un artisan et éviter les arnaques",
      description:
        "L'arrêté du 23 juin 2026 renforce les critères du label RGE. Sans artisan certifié RGE, aucune aide — MaPrimeRénov', CEE, éco-PTZ — n'est accessible. Guide pratique pour vérifier la qualification et comprendre ce qui change.",
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
      about: ['Label RGE', 'Artisan RGE', 'MaPrimeRénov', 'Réforme 2026', 'Rénovation énergétique'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 25 octobre 2026 · Artisans &amp; qualifications
          </p>

          <h1>Label RGE 2026 : réforme, comment vérifier un artisan et éviter les arnaques</h1>

          <img
            src="/blog/label-rge-artisan-reforme-2026.jpg"
            alt="Artisan certifié RGE sur un chantier de rénovation énergétique — plaquette de certification RGE"
            className="w-full rounded-2xl shadow-card my-6"
            loading="lazy"
          />

          <p className="lead">
            Impossible d'obtenir <strong>MaPrimeRénov'</strong>, une{' '}
            <strong>prime CEE</strong> ou un <strong>éco-PTZ</strong> sans faire appel à un
            artisan titulaire du label <em>Reconnu Garant de l'Environnement</em> (RGE). Ce
            sésame, souvent mentionné mais rarement expliqué, a été{' '}
            <strong>réformé par un arrêté du 23 juin 2026</strong> : contrôles plus stricts,
            nouvelle voie d'accès par la validation des acquis (VAE), sanctions renforcées. Ce
            guide vous explique ce que signifie vraiment le label RGE, comment vérifier qu'un
            artisan est bien qualifié et ce qui change avec la réforme.
          </p>

          <h2>Qu'est-ce que le label RGE ?</h2>
          <p>
            Le label <strong>RGE (Reconnu Garant de l'Environnement)</strong> est attribué par
            des organismes de qualification accrédités — Qualibat, Qualit'EnR, QualiPAC,
            Qualifelec, etc. — aux entreprises qui justifient d'une formation technique en
            rénovation énergétique, d'une expérience de chantier vérifiée et d'une assurance
            responsabilité civile professionnelle à jour.
          </p>
          <p>
            Première règle à retenir : <strong>la qualification est attribuée par domaine de
            travaux</strong>, pas à l'entreprise dans sa globalité. Un artisan certifié RGE pour
            l'installation de pompes à chaleur n'est pas automatiquement qualifié pour
            l'isolation thermique. Vérifiez toujours que la qualification couvre bien le
            type de travaux envisagé.
          </p>

          <h2>Pourquoi c'est indispensable pour obtenir les aides</h2>
          <p>
            La condition RGE est le filtre central de toutes les aides à la rénovation
            énergétique en France :
          </p>
          <ul>
            <li>
              <strong>MaPrimeRénov' :</strong> les travaux doivent être réalisés par un artisan
              RGE dans la spécialité concernée. La prime est versée après transmission d'une
              facture acquittée d'une entreprise qualifiée.
            </li>
            <li>
              <strong>Prime CEE :</strong> les{' '}
              <a href="/blog/cee-2026-prime-energie-comment-en-profiter">
                Certificats d'Économies d'Énergie
              </a>{' '}
              exigent eux aussi un professionnel RGE. La condition doit être remplie{' '}
              <em>avant la signature du devis</em> — un artisan qui obtient son RGE après ne rend
              pas les travaux déjà devisés éligibles.
            </li>
            <li>
              <strong>Éco-PTZ :</strong> le prêt à taux zéro pour la rénovation est conditionné
              à l'intervention d'une entreprise RGE pour les travaux éligibles.
            </li>
          </ul>
          <p>
            En pratique, si un artisan vous propose un devis en affirmant que vous pourrez
            bénéficier des aides mais ne peut pas justifier de son RGE, <strong>ne signez
            pas</strong>.
          </p>

          <h2>Comment vérifier la qualification RGE d'un artisan</h2>

          <h3>Étape 1 : l'annuaire France Rénov'</h3>
          <p>
            Le moyen officiel et le plus fiable est l'<strong>annuaire en ligne de France
            Rénov'</strong> (france-renov.gouv.fr). Il recense tous les artisans RGE actifs,
            filtrables par code postal, type de travaux et qualification. Une recherche prend
            moins d'une minute.
          </p>
          <p>
            Conseil : copiez le numéro SIRET de l'entreprise depuis l'annuaire pour le
            confronter à celui du devis. Des escrocs utilisent le nom d'une entreprise certifiée
            pour se faire passer pour elle.
          </p>

          <h3>Étape 2 : vérifier la validité et le domaine</h3>
          <p>
            La qualification RGE a une durée de validité de <strong>4 ans</strong>. Certains
            artisans affichent encore un logo RGE périmé sur leur site ou leurs véhicules.
            L'annuaire France Rénov' indique la date d'expiration : vérifiez qu'elle dépasse la
            date prévue de fin de chantier.
          </p>
          <p>
            Vérifiez également que la <strong>mention exacte</strong> du domaine correspond à vos
            travaux. Par exemple : « Isolation des murs en façade par l'extérieur » ou
            « Installation de pompes à chaleur » sont deux qualifications distinctes.
          </p>

          <h3>Étape 3 : croiser avec le devis</h3>
          <p>
            Depuis octobre 2026, tout devis d'un montant supérieur à 300 € TTC pour des travaux
            de rénovation énergétique doit{' '}
            <a href="/blog/mention-france-renov-obligatoire-devis-2026">
              comporter la mention France Rénov'
            </a>{' '}
            obligatoire. Cette mention inclut le numéro RGE de l'entreprise : il doit correspondre
            exactement à celui de l'annuaire.
          </p>

          <h2>Ce que change la réforme de juin 2026</h2>
          <p>
            L'arrêté du 23 juin 2026 (Journal officiel du 26 juin) modifie en profondeur le
            cahier des charges du label RGE. Trois évolutions principales :
          </p>

          <h3>1. Contrôles de chantier renforcés</h3>
          <p>
            Les organismes de qualification devront désormais combiner un{' '}
            <strong>audit documentaire</strong> (formation, assurance, références) et une{' '}
            <strong>visite physique de chantier</strong>, complétée par une analyse de la
            sinistralité sur les quatre dernières années. Les contrôles partiels qui permettaient
            à certaines entreprises de maintenir leur qualification sans visite terrain disparaissent.
          </p>

          <h3>2. Sanctions graduées jusqu'au retrait</h3>
          <p>
            En cas de manquement constaté lors d'un contrôle, la qualification peut être{' '}
            <strong>suspendue jusqu'à 24 mois</strong>. Les récidives ou les fraudes graves
            peuvent entraîner un retrait définitif. Un registre des sanctions devient accessible
            aux organismes financeurs — ce qui signifie qu'un artisan suspendu ne pourra plus
            déposer de dossiers d'aides pour ses clients.
          </p>

          <h3>3. Une nouvelle voie d'accès par la VAE (à partir de mars 2027)</h3>
          <p>
            La validation des acquis de l'expérience (VAE) permettra à des artisans
            expérimentés d'obtenir la qualification RGE <strong>sans formation préalable</strong>,
            sur la base de trois chantiers audités conformes. La durée d'expérience requise varie
            selon le niveau de diplôme : de un an pour un ingénieur jusqu'à sept ans pour un
            artisan sans diplôme. Cette voie entre en vigueur au <strong>1er mars 2027</strong>.
          </p>
          <p>
            Concrètement, la VAE devrait élargir le vivier d'artisans qualifiés et réduire les
            délais d'attente pour les particuliers, problème récurrent depuis l'accélération des
            rénovations.
          </p>

          <h2>Ce que ça change pour vous, en tant que particulier</h2>
          <ul>
            <li>
              <strong>Des contrôles plus fréquents → moins d'arnaques :</strong> les entreprises
              frauduleuses qui utilisaient un RGE périmé ou volé seront plus rapidement
              détectées et sanctionnées.
            </li>
            <li>
              <strong>Des devis plus fiables :</strong> la mention obligatoire du numéro RGE sur
              les devis, croisée avec l'annuaire, vous donne un double filet de sécurité.
            </li>
            <li>
              <strong>Plus d'artisans qualifiés à partir de 2027 :</strong> la VAE devrait
              faciliter l'accès à des professionnels qualifiés, notamment dans les zones où les
              délais étaient les plus longs (isolation, pompes à chaleur).
            </li>
          </ul>

          <h2>Les points de vigilance avant de signer</h2>
          <ul>
            <li>
              Vérifiez le RGE <strong>avant</strong> de signer le devis, pas après — la règle
              pour les CEE est particulièrement stricte sur ce point.
            </li>
            <li>
              Un artisan RGE peut sous-traiter. À partir du 1er janvier 2027, l'entreprise qui
              facture devra être RGE elle-même ; la sous-traitance à une entreprise non qualifiée
              ne permettra plus d'accéder aux aides.
            </li>
            <li>
              Si un démarcheur à domicile vous propose des travaux « entièrement financés par
              l'État », c'est un signal d'alarme. Consultez{' '}
              <a href="/dpe-gratuit">notre simulateur</a> pour estimer les aides réelles avant
              tout engagement.
            </li>
          </ul>

          <h2>Ce qu'il faut retenir</h2>
          <ul>
            <li>
              Le label RGE est <strong>indispensable</strong> pour déclencher MaPrimeRénov', les
              CEE et l'éco-PTZ.
            </li>
            <li>
              Il est <strong>par domaine de travaux</strong>, valable 4 ans, vérifiable en
              quelques clics sur france-renov.gouv.fr.
            </li>
            <li>
              L'<strong>arrêté du 23 juin 2026</strong> renforce les contrôles de chantier et
              les sanctions ; une nouvelle voie VAE ouvrira en mars 2027.
            </li>
            <li>
              Croisez toujours le numéro RGE du devis avec l'annuaire officiel avant de signer.
            </li>
          </ul>
        </article>

        {/* CTA RenoHab */}
        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">
            Besoin d'artisans RGE de confiance ?
          </h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            En tant qu'Accompagnateur Rénov' agréé, RenoHab sélectionne et coordonne
            des artisans RGE certifiés pour chaque type de travaux, et monte vos dossiers
            d'aides de A à Z.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/dpe-gratuit"
              className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all"
            >
              Estimer mes aides
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
