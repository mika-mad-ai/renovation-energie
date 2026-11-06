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

const PUBLISHED = '2026-11-06';
const PATH = '/blog/erreurs-dossier-maprimerenov-refuse-2026';

export default function ArticleErreursDossierMaPrimeRenov2026() {
  useSeo({
    title: "7 erreurs qui font rejeter votre dossier MaPrimeRénov' (et comment les éviter) | RenoHab",
    description:
      "Devis signé trop tôt, artisan non-RGE, logement trop récent… Découvrez les 7 erreurs les plus fréquentes qui entraînent le rejet d'un dossier MaPrimeRénov' en 2026 et comment les éviter.",
    path: PATH,
    image: '/blog/erreurs-dossier-maprimerenov-refuse-2026.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline:
        "7 erreurs qui font rejeter votre dossier MaPrimeRénov' (et comment les éviter en 2026)",
      description:
        "Devis signé trop tôt, artisan non-RGE, logement trop récent… Les 7 pièges à déjouer pour obtenir MaPrimeRénov' sans rejet.",
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
      about: ['MaPrimeRénov', 'Aides rénovation énergétique', 'Dossier Anah'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 6 novembre 2026 · Aides
          </p>

          <h1>7 erreurs qui font rejeter votre dossier MaPrimeRénov' (et comment les éviter en 2026)</h1>

          <img
            src="/blog/erreurs-dossier-maprimerenov-refuse-2026.jpg"
            alt="Dossier de demande MaPrimeRénov' sur un bureau avec devis et documents de rénovation énergétique"
            className="rounded-2xl w-full object-cover max-h-80 mb-8"
            loading="lazy"
          />

          <p className="lead">
            MaPrimeRénov' est l'une des aides les plus généreuses pour financer votre rénovation
            énergétique — mais c'est aussi l'une des plus exigeantes sur le plan procédural. Chaque
            année, des milliers de dossiers sont refusés ou bloqués à cause d'erreurs évitables.
            Voici les sept pièges les plus fréquents en 2026, et les bons réflexes pour les déjouer
            avant même de déposer votre demande.
          </p>

          <h2>Erreur n°1 : signer le devis avant de déposer la demande</h2>
          <p>
            C'est l'erreur la plus courante et la plus fatale. MaPrimeRénov' doit
            impérativement être demandée sur <strong>maprimerenov.gouv.fr avant</strong> la
            signature de tout devis. L'Anah vérifie la chronologie des dates : si votre devis porte
            une date antérieure à votre demande, le dossier est irrecevable, sans exception ni
            recours possible.
          </p>
          <p>
            L'ordre correct à respecter est le suivant :
          </p>
          <ol>
            <li>Dépôt de la demande sur maprimerenov.gouv.fr</li>
            <li>Réception de la notification d'accord de financement de l'Anah</li>
            <li>Signature du devis avec l'artisan RGE</li>
            <li>Début des travaux</li>
            <li>Dépôt du dossier de solde après réception du chantier</li>
          </ol>
          <p>
            Toute inversion dans cet ordre entraîne le rejet. Prenez le temps de bien déposer votre
            demande en ligne <em>avant</em> de valider quoi que ce soit avec votre artisan.
          </p>

          <h2>Erreur n°2 : commencer les travaux avant l'accord de financement</h2>
          <p>
            Même si vous avez déposé votre demande à temps, ne démarrez pas les travaux avant d'avoir
            reçu le document officiel d'accord de financement de l'Anah. Ce document confirme votre
            éligibilité, fixe le montant de la prime et vous autorise à engager le chantier. Des
            travaux débutés avant cet accord entraînent systématiquement le rejet du dossier de
            solde — et vous perdez l'intégralité de l'aide.
          </p>

          <h2>Erreur n°3 : choisir un artisan non-RGE ou dont le label a expiré</h2>
          <p>
            Le label <strong>RGE (Reconnu Garant de l'Environnement)</strong> doit être détenu par
            l'entreprise qui réalise effectivement les travaux, dans la spécialité concernée
            (chauffage, isolation, menuiseries…). Un mandataire RGE qui sous-traite à un artisan
            sans label invalide votre droit à l'aide.
          </p>
          <p>
            Vérifiez toujours la validité du label directement sur{' '}
            <strong>renovation.gouv.fr/professionnels</strong>, car les qualifications se renouvellent
            tous les quatre ans et certains artisans oublient de les maintenir. Un RGE expiré le jour
            de la réception du chantier suffit à bloquer votre prime.
          </p>

          <h2>Erreur n°4 : sauter le rendez-vous France Rénov' (parcours accompagné)</h2>
          <p>
            Pour une <strong>rénovation d'ampleur</strong> — c'est-à-dire un projet visant au moins
            deux sauts de classe DPE via le parcours accompagné — un rendez-vous préalable avec un
            conseiller France Rénov' est obligatoire depuis janvier 2026. Sans ce RDV, votre dossier
            ampleur sera automatiquement rejeté à l'instruction.
          </p>
          <p>
            Prenez rendez-vous au{' '}
            <a href="/blog" aria-label="Ressources conseils France Rénov'">
              0 808 800 700 (numéro gratuit)
            </a>{' '}
            ou via le site France Rénov'. Ce conseiller vous orientera aussi vers le bon parcours —
            par geste ou accompagné — en fonction de l'ampleur de votre projet.
          </p>

          <h2>Erreur n°5 : logement trop récent ou mal occupé</h2>
          <p>
            Deux conditions d'éligibilité sont souvent sous-estimées :
          </p>
          <ul>
            <li>
              <strong>Logement achevé depuis plus de 2 ans</strong> à la date de dépôt de la demande.
              Une maison neuve ou livrée il y a moins de deux ans n'est pas éligible à MaPrimeRénov'.
            </li>
            <li>
              <strong>Résidence principale effective du demandeur.</strong> Le logement doit être
              occupé à titre de résidence principale (au minimum 8 mois par an). Un investissement
              locatif vide au moment de la demande, ou une résidence secondaire, ne remplit pas cette
              condition — sauf à passer par le dispositif{' '}
              <a href="/blog/maprimerenov-proprietaire-bailleur-2026">
                MaPrimeRénov' propriétaires bailleurs
              </a>
              .
            </li>
          </ul>

          <h2>Erreur n°6 : revenus dépassant les plafonds MaPrimeRénov' ampleur</h2>
          <p>
            MaPrimeRénov' est accessible jusqu'aux ménages dits <em>«&nbsp;supérieurs&nbsp;»</em>
            (revenus intermédiaires élevés selon les barèmes Anah). Les foyers dont les ressources
            dépassent ce plafond — environ 73 000 €/an pour un couple à Paris en 2026 — ne peuvent
            pas bénéficier de la prime ampleur. Ils peuvent en revanche cumuler{' '}
            <a href="/blog/cumul-aides-renovation-maprimerenov-cee-eco-ptz">
              CEE et Éco-PTZ
            </a>{' '}
            pour financer leurs travaux.
          </p>
          <p>
            Vérifiez votre tranche de revenus avant tout engagement : un rejet pour plafond dépassé
            intervient tardivement dans l'instruction et peut vous laisser avec des travaux engagés
            sans aide.
          </p>

          <h2>Erreur n°7 : dossier incomplet ou devis sans mention France Rénov'</h2>
          <p>
            Un dossier incomplet est mis en attente, puis rejeté si les pièces manquantes ne sont
            pas fournies dans les délais. Les documents indispensables à réunir avant tout dépôt :
          </p>
          <ul>
            <li>
              Devis détaillé avec la <strong>mention France Rénov' obligatoire</strong> (arrêté du
              25 octobre 2024), incluant l'adresse du chantier et la description précise des
              matériaux
            </li>
            <li>Attestation RGE de l'artisan, en cours de validité à la date des travaux</li>
            <li>Avis d'imposition de l'année N-2 de tous les occupants du foyer fiscal</li>
            <li>Photos du logement avant travaux (pièces concernées, équipements existants)</li>
            <li>Numéro SIRET de l'entreprise attributaire</li>
            <li>
              Pour la rénovation d'ampleur : rapport d'<a href="/blog/audit-energetique-obligatoire-vente-2026">audit énergétique</a>{' '}
              avant travaux réalisé par un diagnostiqueur certifié
            </li>
          </ul>

          <h2>Comment sécuriser votre dossier dès le départ</h2>
          <p>
            La meilleure façon d'éviter ces sept erreurs : faire appel à un{' '}
            <strong>Accompagnateur Rénov' agréé</strong> dès la phase de réflexion. Ce professionnel
            certifié vérifie l'éligibilité du logement et du ménage, établit le plan de financement,
            sélectionne les artisans RGE et constitue l'intégralité du dossier dans le bon ordre.
          </p>
          <p>
            En tant qu'Accompagnateur Rénov' agréé, RenoHab accompagne les propriétaires de bout en
            bout — de l'estimation du{' '}
            <a href="/dpe-gratuit">DPE gratuit</a> jusqu'au versement de la prime — pour maximiser
            vos aides et éviter tout risque de rejet.
          </p>

          <h3>Récapitulatif : la checklist anti-rejet</h3>
          <ul>
            <li>✔ Dépôt de la demande AVANT la signature du devis</li>
            <li>✔ Accord de financement reçu AVANT le début des travaux</li>
            <li>✔ Artisan RGE dans la bonne spécialité, label valide</li>
            <li>✔ RDV France Rénov' effectué (parcours accompagné)</li>
            <li>✔ Logement achevé depuis plus de 2 ans, résidence principale</li>
            <li>✔ Revenus dans les plafonds Anah</li>
            <li>✔ Devis avec mention France Rénov', audit énergétique si ampleur</li>
          </ul>
        </article>

        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Votre dossier MaPrimeRénov', monté sans erreur</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            RenoHab, Accompagnateur Rénov' agréé, vérifie votre éligibilité, constitue le dossier
            et coordonne les artisans RGE — pour que vous touchiez votre prime du premier coup.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/dpe-gratuit" className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all">
              Estimer mon DPE
            </a>
            <a href="/simulateur" className="px-6 py-3 rounded-full border border-white/70 text-white font-semibold hover:bg-white/10 transition-all">
              Simuler mes aides
            </a>
          </div>
        </div>
      </main>

      <ArticleFooter />
    </div>
  );
}
