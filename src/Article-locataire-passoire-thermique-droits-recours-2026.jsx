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

const PUBLISHED = '2026-11-13';
const PATH = '/blog/locataire-passoire-thermique-droits-recours-2026';

export default function ArticleLocatairePassoireThermique2026() {
  useSeo({
    title: "Locataire en passoire thermique : vos droits et recours en 2026 | RenoHab",
    description:
      "Logement classé F ou G, loyer gelé, droit à des travaux, préavis réduit en zone tendue, chèque énergie : le guide complet des droits du locataire face à une passoire thermique en 2026.",
    path: PATH,
    image: '/blog/locataire-passoire-thermique-droits-recours-2026.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: "Locataire en passoire thermique : vos droits et recours en 2026",
      description:
        "Logement classé F ou G, loyer gelé, droit à des travaux, préavis réduit en zone tendue, chèque énergie : le guide complet des droits du locataire face à une passoire thermique en 2026.",
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
      about: ['Passoire thermique', 'DPE', 'Droits des locataires', 'Rénovation énergétique'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 13 nov. 2026 · Droits &amp; démarches
          </p>

          <h1>Locataire en passoire thermique : vos droits et recours en 2026</h1>

          <img
            src="/blog/locataire-passoire-thermique-droits-recours-2026.jpg"
            alt="Étiquette DPE d'un logement classé F ou G — passoire thermique en location"
            className="w-full rounded-xl shadow-soft my-6"
            loading="lazy"
          />

          <p className="lead">
            Vous louez un appartement ou une maison classée <strong>F ou G au DPE</strong> et vos
            factures de chauffage s'envolent chaque hiver ? Vous n'êtes pas sans recours. Depuis
            2022, la loi encadre strictement les logements énergivores mis en location : loyer
            gelé, obligation de décence énergétique, droit à des travaux. Voici ce que vous pouvez
            exiger en 2026.
          </p>

          <h2>Ce que dit la loi sur les passoires thermiques en location</h2>
          <p>
            La loi Climat et Résilience de 2021 a instauré un calendrier d'interdiction progressive
            des logements les plus énergivores :
          </p>
          <ul>
            <li>
              <strong>Logements classés G :</strong> interdits à la location depuis le{' '}
              <strong>1er janvier 2025</strong>. Ils sont désormais considérés comme non décents au
              sens de la loi du 6 juillet 1989. Un bailleur ne peut ni louer un logement G à un
              nouveau locataire, ni renouveler un bail existant.
            </li>
            <li>
              <strong>Logements classés F :</strong> interdiction à la location à compter du{' '}
              <strong>1er janvier 2028</strong>.
            </li>
            <li>
              <strong>Logements classés E :</strong> interdiction à partir du{' '}
              <strong>1er janvier 2034</strong>.
            </li>
          </ul>
          <p>
            En 2026, si vous occupez un logement G, votre bail actuel peut techniquement se
            poursuivre — mais le propriétaire ne peut plus l'augmenter ni le renouveler sans
            engager des travaux. Et vous disposez d'outils concrets pour faire valoir vos droits.
          </p>

          <h2>Le gel du loyer : une protection immédiate</h2>
          <p>
            Depuis le <strong>24 août 2022</strong>, les logements classés <strong>F ou G</strong>{' '}
            bénéficient d'un gel de loyer automatique. Concrètement :
          </p>
          <ul>
            <li>
              Votre loyer ne peut pas être <strong>révisé à la hausse</strong> (pas d'application
              de l'IRL, l'Indice de Référence des Loyers).
            </li>
            <li>
              À la <strong>relocation</strong> (nouveau locataire), le propriétaire doit maintenir
              le loyer au niveau du précédent occupant.
            </li>
            <li>
              Au <strong>renouvellement de bail</strong>, toute hausse de loyer est interdite.
            </li>
          </ul>
          <p>
            Si votre bailleur a appliqué une révision de loyer depuis août 2022 sur un logement F
            ou G, vous pouvez demander le remboursement du trop-perçu, avec l'aide d'un avocat ou
            de l'ADIL (Agence Départementale d'Information sur le Logement) de votre département.
          </p>

          <h2>Exiger des travaux : la démarche étape par étape</h2>
          <p>
            Votre logement est froid, humide, coûteux à chauffer ? En tant que locataire, vous
            avez le droit de demander à votre propriétaire de réaliser des travaux pour respecter
            les <strong>critères de décence</strong>. Voici comment procéder :
          </p>

          <h3>1. Envoyez une mise en demeure par courrier recommandé</h3>
          <p>
            Rédigez un courrier recommandé avec accusé de réception dans lequel vous décrivez
            précisément les problèmes constatés (factures élevées, inconfort thermique,
            condensation, pont thermique visible) et demandez au propriétaire de mettre le logement
            en conformité avec les normes de décence dans un délai raisonnable (généralement 2 mois).
          </p>

          <h3>2. Saisissez la Commission Départementale de Conciliation (CDC)</h3>
          <p>
            En l'absence de réponse ou de travaux engagés, vous pouvez saisir gratuitement la{' '}
            <strong>CDC de votre département</strong>. Cette instance paritaire (représentants
            locataires et propriétaires) tente de trouver un accord amiable. La démarche est
            gratuite et obligatoire avant toute action en justice pour les litiges sur la décence.
          </p>

          <h3>3. Saisir le tribunal judiciaire</h3>
          <p>
            Si la conciliation échoue, le <strong>tribunal judiciaire</strong> peut :
          </p>
          <ul>
            <li>Imposer au propriétaire la réalisation des travaux sous astreinte ;</li>
            <li>
              Ordonner une <strong>réduction de loyer</strong> proportionnelle au préjudice subi
              durant la période d'inaction ;</li>
            <li>Condamner le propriétaire à des dommages et intérêts.</li>
          </ul>
          <p>
            L'aide juridictionnelle est accessible sous conditions de ressources. L'ADIL ou une
            association de locataires (CNL, CLCV) peut vous accompagner gratuitement dans vos
            démarches.
          </p>

          <h2>Vérifiez votre DPE : il est peut-être erroné</h2>
          <p>
            Depuis le <strong>1er janvier 2026</strong>, le mode de calcul du DPE a évolué : le
            coefficient énergie primaire de l'électricité est passé de 2,3 à 1,9. De nombreux
            logements chauffés à l'électricité ont ainsi gagné une ou deux classes.{' '}
            <strong>
              Si votre DPE date d'avant 2021, il n'est plus valide légalement
            </strong>{' '}
            (les DPE réalisés avant juillet 2021 ont expiré au 31 décembre 2024). Un DPE récent et
            exact est la base de tout recours. Vous pouvez consulter{' '}
            <a href="/dpe-gratuit">notre outil d'estimation DPE gratuit</a> pour avoir une
            première idée de la classe de votre logement.
          </p>

          <h2>Les aides auxquelles vous avez droit en tant que locataire</h2>
          <p>
            Même sans pouvoir financer des travaux lourds, plusieurs dispositifs sont accessibles
            directement aux locataires :
          </p>
          <ul>
            <li>
              <strong>Chèque énergie :</strong> envoyé automatiquement chaque printemps aux foyers
              aux revenus modestes (plafond ERDF). En 2026, il varie entre 48 € et 277 € selon les
              ressources et la composition du foyer. Il peut être utilisé pour payer vos factures
              d'énergie ou des petits travaux.
            </li>
            <li>
              <strong>Prime CEE pour petits travaux :</strong> avec l'accord écrit de votre
              propriétaire, vous pouvez faire réaliser certains travaux (thermostat programmable,
              isolation des combles ou du plancher bas) et percevoir une prime des fournisseurs
              d'énergie via les Certificats d'Économies d'Énergie.
            </li>
            <li>
              <strong>TVA à 5,5 % :</strong> applicable sur les travaux d'amélioration thermique
              dans les logements de plus de 2 ans, même locatifs (c'est le propriétaire qui en
              bénéficie, mais vous pouvez négocier qu'il s'en saisisse).
            </li>
          </ul>

          <h2>Quitter un logement énergivore : le préavis en zone tendue</h2>
          <p>
            Si vous souhaitez quitter votre logement F ou G, sachez que dans les{' '}
            <strong>zones tendues</strong> (Paris, Lyon, Bordeaux, Marseille, Lille et des
            centaines d'autres communes), le préavis légal est de <strong>1 mois</strong> au lieu
            de 3 mois pour les locations non meublées. Cette règle s'applique à tous les locataires
            de ces zones, indépendamment du classement énergétique.
          </p>
          <p>
            Hors zone tendue, si votre logement est classé G (non décent depuis le 1er janvier
            2025), un avocat spécialisé peut vous conseiller sur les possibilités de résiliation
            anticipée fondée sur le défaut de décence du logement.
          </p>

          <h2>Propriétaire bailleur : anticipez avant l'interdiction de 2028</h2>
          <p>
            Si vous êtes propriétaire d'un logement classé F ou G, l'interdiction de louer en 2028
            se rapproche. Des aides significatives existent pour financer les travaux :{' '}
            <strong>MaPrimeRénov' bailleur</strong>, primes CEE, éco-PTZ jusqu'à 50 000 €, TVA à
            5,5 %. En tant qu'Accompagnateur Rénov', RenoHab monte les dossiers d'aides et
            coordonne des artisans RGE pour sécuriser votre chantier et préserver la valeur
            locative de votre bien.
          </p>
          <p>
            Découvrez aussi{' '}
            <a href="/blog/interdiction-location-classe-f-2028">
              notre guide complet sur l'interdiction de louer les logements F en 2028
            </a>{' '}
            et{' '}
            <a href="/blog/passoire-thermique-calendrier-renovation-avant-2028">
              le calendrier réaliste pour rénover avant l'échéance
            </a>
            .
          </p>
        </article>

        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Votre logement est classé F ou G ?</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            Propriétaires : obtenez une estimation gratuite de votre DPE et découvrez les aides disponibles pour rénover avant l'interdiction de 2028.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/dpe-gratuit" className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all">
              Estimer mon DPE gratuitement
            </a>
            <a href="/pompe-a-chaleur" className="px-6 py-3 rounded-full border border-white/70 text-white font-semibold hover:bg-white/10 transition-all">
              Découvrir les solutions chauffage
            </a>
          </div>
        </div>
      </main>

      <ArticleFooter />
    </div>
  );
}
