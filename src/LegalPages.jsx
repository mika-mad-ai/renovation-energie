import React from 'react';
import useSeo from './useSeo';
import { SiteHeader, SiteFooter } from './SiteChrome';

// Pages légales : Mentions légales et Politique de confidentialité.
// ⚠️ Les champs entre crochets « [à compléter] » doivent être renseignés avec les
//    informations officielles de la société (raison sociale, SIREN, siège, contact).

const LAST_UPDATE = '24 septembre 2026';

export function LegalLinks({ className = '' }) {
  return (
    <p className={`text-sm ${className}`}>
      <a href="/mentions-legales" className="hover:text-emerald-300 transition-colors">Mentions légales</a>
      <span className="mx-2 opacity-60">·</span>
      <a href="/confidentialite" className="hover:text-emerald-300 transition-colors">Politique de confidentialité</a>
    </p>
  );
}

function LegalLayout({ title, intro, children }) {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800 flex flex-col">
      <SiteHeader />
      <main className="flex-grow max-w-3xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700">
          <h1>{title}</h1>
          <p className="text-sm text-gray-500 !mt-0">Dernière mise à jour : {LAST_UPDATE}</p>
          {intro && <p className="lead">{intro}</p>}
          {children}
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}

export function MentionsLegales() {
  useSeo({
    title: 'Mentions légales | RenoHab',
    description: "Mentions légales du site renohab.fr : éditeur, hébergeur, propriété intellectuelle et contact.",
    path: '/mentions-legales',
    type: 'website',
    noindex: true,
  });

  return (
    <LegalLayout
      title="Mentions légales"
      intro="Conformément à la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique (LCEN), voici les informations relatives à l'éditeur et à l'hébergeur du site renohab.fr."
    >
      <h2>Éditeur du site</h2>
      <ul>
        <li><strong>Dénomination</strong> : RenoHab, Accompagnateur Rénov' agréé par l'État</li>
        <li><strong>Forme juridique et capital</strong> : [à compléter]</li>
        <li><strong>SIREN / RCS</strong> : [à compléter]</li>
        <li><strong>Siège social</strong> : [à compléter]</li>
        <li><strong>Directeur de la publication</strong> : [à compléter]</li>
        <li><strong>Contact</strong> : via le formulaire de contact du site (section « Démarrer mon projet »)</li>
      </ul>

      <h2>Hébergement</h2>
      <p>
        Le site est hébergé par <strong>Vercel Inc.</strong>, 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis
        (<a href="https://vercel.com" rel="noreferrer" target="_blank">vercel.com</a>).
      </p>

      <h2>Propriété intellectuelle</h2>
      <p>
        L'ensemble des contenus du site (textes, visuels, logos, guides, structure) est protégé par le droit d'auteur.
        Toute reproduction ou représentation, totale ou partielle, sans autorisation écrite préalable est interdite.
        Les photographies d'illustration des articles proviennent de banques d'images libres de droits (Pexels) ou sont
        la propriété de RenoHab. Les marques citées (MaPrimeRénov', France Rénov', Anah, marques de fabricants)
        appartiennent à leurs titulaires respectifs.
      </p>

      <h2>Informations sur les aides</h2>
      <p>
        Les montants d'aides, taux et calendriers réglementaires présentés sur le site sont fournis à titre indicatif,
        d'après les textes officiels en vigueur à la date de mise à jour indiquée sur chaque page. Ils ne constituent pas
        un engagement contractuel : l'éligibilité définitive dépend de la situation de chaque ménage et des décisions des
        organismes financeurs (Anah, fournisseurs d'énergie, établissements bancaires).
      </p>

      <h2>Outils tiers</h2>
      <p>
        Le simulateur d'aides est fourni par notre partenaire Kelvin (app.go-kelvin.com) et s'affiche dans une fenêtre
        intégrée. La saisie d'adresse utilise l'API Google Maps Places. L'utilisation de ces services est soumise à leurs
        conditions propres.
      </p>

      <h2>Données personnelles</h2>
      <p>
        Le traitement des données collectées via les formulaires est décrit dans notre{' '}
        <a href="/confidentialite">politique de confidentialité</a>.
      </p>
    </LegalLayout>
  );
}

export function Confidentialite() {
  useSeo({
    title: 'Politique de confidentialité | RenoHab',
    description: "Comment RenoHab collecte, utilise et protège vos données personnelles (formulaires, simulateur, cookies et mesure d'audience).",
    path: '/confidentialite',
    type: 'website',
    noindex: true,
  });

  return (
    <LegalLayout
      title="Politique de confidentialité"
      intro="RenoHab s'engage à protéger vos données personnelles conformément au Règlement général sur la protection des données (RGPD, règlement UE 2016/679) et à la loi Informatique et Libertés."
    >
      <h2>Responsable du traitement</h2>
      <p>RenoHab, [raison sociale et siège à compléter]. Contact : via le formulaire du site ou par courrier au siège social.</p>

      <h2>Données collectées</h2>
      <ul>
        <li>
          <strong>Formulaires de contact et de demande d'audit ou de devis</strong> : prénom, nom, e-mail, téléphone / WhatsApp,
          type de résidence, adresse du bien, informations sur votre projet.
        </li>
        <li>
          <strong>Simulateur d'aides (partenaire Kelvin)</strong> : données de votre logement et de votre situation que vous
          saisissez dans le simulateur ; lorsque vous validez une simulation, l'identifiant de simulation et vos coordonnées
          nous sont transmis pour vous recontacter.
        </li>
        <li>
          <strong>Données de navigation</strong> : mesure d'audience (Google Analytics via Google Tag Manager) et, sur la page
          pompe à chaleur, pixel Meta pour la mesure des campagnes publicitaires.
        </li>
      </ul>

      <h2>Finalités et bases légales</h2>
      <ul>
        <li>Répondre à vos demandes, réaliser votre étude et monter vos dossiers d'aides (exécution de mesures précontractuelles).</li>
        <li>Vous recontacter au sujet de votre projet de rénovation (intérêt légitime, avec possibilité d'opposition à tout moment).</li>
        <li>Mesurer l'audience du site et l'efficacité de nos campagnes (consentement pour les cookies non essentiels).</li>
      </ul>
      <p>
        Conformément à la loi n° 2025-594 du 30 juin 2025, RenoHab ne pratique aucun démarchage téléphonique non sollicité :
        nous ne vous contactons qu'à la suite d'une demande de votre part.
      </p>

      <h2>Destinataires</h2>
      <p>
        Vos données sont traitées par l'équipe RenoHab et, pour les besoins de votre projet, transmises aux artisans RGE
        partenaires sélectionnés et aux organismes instructeurs des aides (Anah, délégataires CEE). Nos prestataires techniques
        (hébergement Vercel, outils de gestion des demandes, Google, Meta, Kelvin) n'y accèdent que dans la limite de leurs
        prestations. Certains de ces prestataires sont situés hors de l'Union européenne ; les transferts sont encadrés par
        les clauses contractuelles types de la Commission européenne.
      </p>

      <h2>Durée de conservation</h2>
      <p>
        Les données de prospects sont conservées 3 ans à compter du dernier contact ; celles des clients pendant la durée de
        la relation contractuelle puis selon les obligations légales (10 ans pour les pièces comptables). Les données de
        mesure d'audience sont conservées au maximum 25 mois.
      </p>

      <h2>Vos droits</h2>
      <p>
        Vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation, d'opposition et de portabilité de vos
        données, ainsi que du droit de définir des directives post-mortem. Pour l'exercer, contactez-nous via le formulaire du
        site ou par courrier au siège social, en justifiant de votre identité. Vous pouvez également introduire une réclamation
        auprès de la CNIL (<a href="https://www.cnil.fr" rel="noreferrer" target="_blank">cnil.fr</a>).
      </p>

      <h2>Cookies</h2>
      <p>
        Le site utilise des cookies techniques nécessaires à son fonctionnement et, sous réserve de votre consentement, des
        cookies de mesure d'audience et publicitaires (Google Analytics, Meta). Vous pouvez à tout moment configurer votre
        navigateur pour les refuser ou les supprimer.
      </p>

      <h2>Sécurité</h2>
      <p>
        Les échanges avec le site sont chiffrés (HTTPS). Nous mettons en œuvre des mesures techniques et organisationnelles
        adaptées pour protéger vos données contre la perte, l'accès non autorisé ou la divulgation.
      </p>
    </LegalLayout>
  );
}
