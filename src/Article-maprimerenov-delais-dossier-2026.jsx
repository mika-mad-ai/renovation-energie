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

const PUBLISHED = '2026-10-19';
const PATH = '/blog/maprimerenov-delais-dossier-2026';

export default function ArticleMaPrimeRenovDelais2026() {
  useSeo({
    title: "MaPrimeRénov' 2026 : délais jusqu'à 6 mois — comment préparer un dossier solide | RenoHab",
    description:
      "Le guichet MaPrimeRénov' a rouvert le 23 février 2026 avec 83 000 dossiers en attente. Délais, pièces requises, erreurs à éviter : le guide pratique pour ne pas perdre votre aide.",
    path: PATH,
    image: '/blog/maprimerenov-delais-dossier-2026.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: "MaPrimeRénov' 2026 : délais jusqu'à 6 mois — comment préparer un dossier solide",
      description:
        "Le guichet MaPrimeRénov' a rouvert le 23 février 2026 avec 83 000 dossiers en attente. Délais, pièces requises, erreurs à éviter : le guide pratique pour ne pas perdre votre aide.",
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
      about: ['MaPrimeRénov', 'Aides rénovation', 'Délais instruction', 'Dossier Anah'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 19 oct. 2026 · Aides
          </p>

          <h1>MaPrimeRénov' 2026 : délais jusqu'à 6 mois — comment préparer un dossier solide</h1>

          <img
            src="/blog/maprimerenov-delais-dossier-2026.jpg"
            alt="Propriétaire remplissant un dossier de demande MaPrimeRénov' sur ordinateur"
            className="w-full rounded-2xl my-6 object-cover"
            style={{ maxHeight: '420px' }}
            loading="eager"
          />

          <p className="lead">
            Après plusieurs semaines de fermeture, le guichet MaPrimeRénov' a rouvert le
            <strong> 23 février 2026</strong>. Mais la reprise s'accompagne d'un embouteillage
            inédit : environ <strong>83 000 dossiers</strong> déposés fin 2025 attendaient encore
            un traitement. Résultat : les délais moyens d'instruction dépassent désormais
            <strong> 6 mois</strong> pour une rénovation d'ampleur, et <strong>3 mois</strong> pour
            un geste de travaux isolé. Voici comment préparer un dossier complet pour ne perdre ni
            temps ni argent.
          </p>

          <h2>Pourquoi les délais se sont autant allongés</h2>
          <p>
            Le guichet avait été suspendu fin 2025 faute de budget voté, laissant des milliers de
            ménages dans l'incertitude. À la réouverture du 23 février 2026, l'Anah a traité en
            priorité le stock de demandes accumulées, avant d'accepter de nouveaux dossiers. Cette
            double file d'attente explique les temps d'instruction record actuels.
          </p>
          <p>
            À cela s'ajoute la nouvelle règle : depuis le 1er septembre 2026, les gestes isolés ne
            sont plus aidés hors contexte de rénovation d'ampleur, ce qui reporte la plupart des
            demandes vers le parcours le plus complexe — et donc le plus long.
          </p>

          <h2>Les délais en pratique : ce qu'il faut savoir</h2>
          <ul>
            <li>
              <strong>Rénovation d'ampleur</strong> (saut de deux classes DPE minimum) : délai
              moyen supérieur à <strong>6 mois</strong> entre la demande et la décision de l'Anah.
            </li>
            <li>
              <strong>Geste isolé encore éligible</strong> (pompe à chaleur, fenêtres dans certains
              cas) : délai moyen d'environ <strong>3 mois</strong>.
            </li>
            <li>
              <strong>Règle absolue</strong> : vous ne pouvez <em>pas</em> commencer les travaux
              avant d'avoir reçu l'accusé de réception de votre dossier par l'Anah. Tout chantier
              démarré prématurément fait perdre définitivement l'aide, sauf en cas de panne de
              chauffage ou de chauffe-eau en période hivernale (urgence justifiable).
            </li>
          </ul>

          <h2>Étape 1 : prendre rendez-vous France Rénov' en priorité</h2>
          <p>
            Pour une <strong>rénovation d'ampleur</strong>, un rendez-vous avec un conseiller
            <a href="/blog/rendez-vous-france-renov-maprimerenov-2026"> France Rénov'</a> est
            désormais <strong>obligatoire avant le dépôt du dossier</strong>. Ce conseiller évalue
            votre situation, identifie les aides auxquelles vous avez droit et valide la cohérence
            de votre projet. Sans ce rendez-vous, le dossier en ligne ne peut pas être finalisé.
          </p>
          <p>
            Prenez ce rendez-vous le plus tôt possible — les créneaux disponibles s'éloignent
            aussi selon les territoires.
          </p>

          <h2>Étape 2 : constituer un dossier complet dès le premier envoi</h2>
          <p>
            C'est le levier le plus efficace pour réduire le délai d'instruction. Un dossier
            incomplet est mis en attente et relance le compteur. Voici les pièces systématiquement
            demandées :
          </p>
          <ul>
            <li>
              <strong>Avis d'imposition N-1</strong> (ou N-2 selon la date de dépôt) pour le calcul
              des revenus fiscaux de référence.
            </li>
            <li>
              <strong>DPE en cours de validité</strong> du logement (moins de 10 ans pour les DPE
              réalisés depuis 2021).
            </li>
            <li>
              <strong>Devis signé d'un artisan RGE</strong> précisant la désignation exacte des
              travaux, la référence de la certification RGE, la surface concernée et le matériel
              installé (marque, modèle, performance).
            </li>
            <li>
              <strong>Titre de propriété ou justificatif d'occupation</strong> du logement.
            </li>
            <li>
              Pour une rénovation d'ampleur : <strong>rapport d'audit énergétique</strong> réalisé
              par un auditeur certifié, attestant le saut de classes prévu.
            </li>
          </ul>

          <h3>Les erreurs qui bloquent le plus souvent les dossiers</h3>
          <ul>
            <li>Devis d'artisan sans mention explicite de la certification RGE.</li>
            <li>DPE dépassé ou réalisé selon l'ancienne méthode d'avant juillet 2021.</li>
            <li>Revenus fiscaux de référence mal calculés (foyer reconstitué incorrectement).</li>
            <li>
              Travaux déjà commencés au moment du dépôt — l'aide est perdue sans exception (hors
              urgence chauffage/eau chaude).
            </li>
          </ul>

          <h2>Étape 3 : choisir le bon artisan RGE</h2>
          <p>
            La certification RGE (Reconnu Garant de l'Environnement) de votre artisan est une
            condition sine qua non de l'aide. Vérifiez sa validité sur le site{' '}
            <a href="/choisir-artisan-rge-2026">france-renov.gouv.fr</a> avant de signer le devis.
            Un artisan dont la certification a expiré vous expose à un refus — même si les travaux
            sont techniquement irréprochables.
          </p>
          <p>
            En tant qu'<strong>Accompagnateur Rénov' agréé</strong>, RenoHab vérifie
            systématiquement les certifications des artisans partenaires et coordonne les devis pour
            que votre dossier soit accepté du premier coup.
          </p>

          <h2>Étape 4 : faire appel à un Accompagnateur Rénov'</h2>
          <p>
            Pour les projets de <strong>rénovation d'ampleur</strong>, l'accompagnement par un
            Accompagnateur Rénov' agréé est <strong>obligatoire</strong> pour bénéficier des taux
            les plus élevés de MaPrimeRénov'. Cet accompagnement, lui-même financé à hauteur de
            jusqu'à <strong>4 000 € TTC</strong> par MaPrimeRénov' (selon les ressources), couvre :
          </p>
          <ul>
            <li>l'audit énergétique préalable,</li>
            <li>le montage complet du dossier d'aides,</li>
            <li>la coordination avec les artisans RGE,</li>
            <li>le suivi de chantier et la validation des travaux.</li>
          </ul>
          <p>
            Un dossier monté par un Accompagnateur Rénov' est plus rarement refusé ou mis en
            attente pour pièce manquante — ce qui réduit concrètement le délai réel de traitement.
            Découvrez{' '}
            <a href="/blog/renovation-ampleur-2026-accompagnateur-renov">
              comment fonctionne la rénovation d'ampleur
            </a>.
          </p>

          <h2>Récapitulatif : le calendrier type d'un projet bien préparé</h2>
          <ul>
            <li>
              <strong>J − 4 à 6 mois</strong> : prise de rendez-vous France Rénov', obtention du
              DPE, sélection de l'artisan RGE.
            </li>
            <li>
              <strong>J − 3 à 4 mois</strong> : réalisation de l'audit énergétique (rénovation
              d'ampleur), finalisation des devis.
            </li>
            <li>
              <strong>J − 2 à 3 mois</strong> : dépôt du dossier complet sur maprimerenov.gouv.fr
              et réception de l'accusé de réception.
            </li>
            <li>
              <strong>J</strong> : démarrage des travaux <em>après</em> l'accusé de réception.
            </li>
            <li>
              <strong>J + 3 mois</strong> : envoi des factures finales et demande de paiement.
            </li>
          </ul>
          <p>
            Avec un dossier complet et un accompagnement professionnel, ce calendrier est tenable.
            Sans préparation, les allers-retours avec l'Anah peuvent doubler les délais.
          </p>

          <h2>Combien puis-je espérer ?</h2>
          <p>
            Le montant de MaPrimeRénov' dépend de vos revenus (ménages modestes ou très modestes
            bénéficient des taux les plus élevés) et du type de travaux. Pour une{' '}
            <a href="/pompe-a-chaleur">pompe à chaleur air/eau</a>, l'aide peut atteindre
            plusieurs milliers d'euros, cumulables avec les{' '}
            <a href="/blog/cee-2026-prime-energie-comment-en-profiter">primes CEE</a> et
            l'<a href="/blog/eco-ptz-2026-pret-taux-zero-renovation">Éco-PTZ</a>.
            Utilisez le <a href="/#simulateur">simulateur RenoHab</a> pour estimer votre
            enveloppe d'aides en quelques minutes.
          </p>
        </article>

        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">On monte votre dossier pour vous</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            Accompagnateur Rénov' agréé, RenoHab vérifie chaque pièce et dépose votre dossier
            MaPrimeRénov' du premier coup — sans attente inutile.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/dpe-gratuit" className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all">
              Estimer mon DPE
            </a>
            <a href="/#simulateur" className="px-6 py-3 rounded-full border border-white/70 text-white font-semibold hover:bg-white/10 transition-all">
              Simuler mes aides
            </a>
          </div>
        </div>
      </main>

      <ArticleFooter />
    </div>
  );
}
