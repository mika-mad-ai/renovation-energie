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
      </div>
    </footer>
  );
}

const PUBLISHED = '2026-07-01';
const PATH = '/blog/audit-energetique-obligatoire-2026';

export default function ArticleAuditEnergetique() {
  useSeo({
    title: "Audit énergétique obligatoire 2026 : qui est concerné, prix et démarches | RenoHab",
    description:
      "Vendre une maison classée E, F ou G impose un audit énergétique depuis 2025. Découvrez qui est concerné, combien ça coûte et comment s'y préparer en 2026.",
    path: PATH,
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline:
        "Audit énergétique obligatoire 2026 : tout ce que les propriétaires doivent savoir avant de vendre",
      description:
        "Vendre une maison classée E, F ou G impose un audit énergétique depuis 2025. Découvrez qui est concerné, combien ça coûte et comment s'y préparer en 2026.",
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
      about: ['Audit énergétique', 'DPE', 'Vente immobilière', 'Rénovation énergétique'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 1er juillet 2026 · Vente & réglementation
          </p>

          <h1>Audit énergétique obligatoire 2026 : tout ce que les propriétaires doivent savoir avant de vendre</h1>

          <img
            src="/blog/audit-energetique-obligatoire-2026.webp"
            alt="Étiquette DPE et performance énergétique d'un logement"
            className="w-full rounded-2xl object-cover max-h-80 mb-8"
            loading="eager"
          />

          <p className="lead">
            Vous envisagez de vendre votre maison classée E, F ou G ? Depuis 2025, un simple DPE ne
            suffit plus : vous devez fournir un <strong>audit énergétique réglementaire</strong>. Ce
            document, plus complet qu'un Diagnostic de Performance Énergétique, détaille les travaux
            prioritaires et les aides disponibles. Voici tout ce qu'il faut savoir avant de mettre
            votre bien sur le marché.
          </p>

          <h2>Qu'est-ce que l'audit énergétique réglementaire ?</h2>
          <p>
            L'audit énergétique réglementaire est un diagnostic approfondi réalisé par un professionnel
            certifié. Contrairement au DPE qui se limite à attribuer une note (de A à G) et à estimer
            les consommations, l'audit va bien plus loin :
          </p>
          <ul>
            <li>Il décrit l'état actuel de l'enveloppe du bâtiment (murs, toiture, fenêtres, planchers).</li>
            <li>Il propose au moins <strong>deux scénarios de travaux</strong> chiffrés, du geste unique à la rénovation globale.</li>
            <li>Il estime les économies d'énergie et les gains en classe DPE pour chaque scénario.</li>
            <li>Il indique les aides financières auxquelles le propriétaire peut prétendre (MaPrimeRénov', CEE, Éco-PTZ…).</li>
          </ul>
          <p>
            Le rapport est remis en version numérique et papier, en principe dans le mois suivant la
            visite du professionnel. Sa durée de validité est de <strong>5 ans</strong>.
          </p>

          <h2>Qui est concerné par cette obligation en 2026 ?</h2>

          <h3>Le calendrier d'entrée en vigueur</h3>
          <p>
            L'obligation d'audit s'est déployée progressivement, en ciblant d'abord les logements les
            plus énergivores :
          </p>
          <ul>
            <li>
              <strong>Depuis le 1er avril 2023</strong> : obligatoire pour la vente des maisons
              individuelles et immeubles en monopropriété classés <strong>F ou G</strong> (les
              « passoires thermiques »).
            </li>
            <li>
              <strong>Depuis le 1er janvier 2025</strong> : l'obligation est étendue aux logements
              classés <strong>E</strong>.
            </li>
          </ul>
          <p>
            En 2026, si vous vendez une maison individuelle notée E, F ou G, vous devez donc
            obligatoirement joindre cet audit au dossier de diagnostic technique (DDT) dès la mise
            en vente.
          </p>

          <h3>Les logements non concernés</h3>
          <p>
            L'audit réglementaire de vente ne s'applique <em>pas</em> aux :
          </p>
          <ul>
            <li>Appartements en copropriété (seul le DPE collectif ou individuel est requis).</li>
            <li>Logements classés A, B, C ou D — le DPE seul suffit.</li>
            <li>Locations : l'audit n'est pas exigé pour un bail résidentiel classique.</li>
          </ul>

          <h2>Combien coûte un audit énergétique ?</h2>
          <p>
            Le tarif d'un audit énergétique réglementaire n'est pas encadré par la loi. En pratique,
            il varie entre <strong>700 et 1 500 euros</strong> selon la taille du logement, sa
            complexité et la région. Quelques points à retenir :
          </p>
          <ul>
            <li>
              Les auditeurs doivent être certifiés (formation reconnue par le ministère de la
              Transition écologique). Vérifiez toujours la qualification avant de signer.
            </li>
            <li>
              Pour une rénovation accompagnée (MaPrimeRénov' rénovation d'ampleur), l'audit peut être
              financé en partie par les aides de l'Anah.
            </li>
            <li>
              Certaines collectivités territoriales proposent des subventions locales pour couvrir
              tout ou partie du coût.
            </li>
          </ul>

          <h2>Audit énergétique vs DPE : quelles différences ?</h2>
          <p>
            Les deux documents coexistent et sont tous deux obligatoires pour vendre un logement E, F
            ou G. Mais ils n'ont pas le même rôle :
          </p>
          <ul>
            <li>
              Le <strong>DPE</strong> donne la note de performance (lettre A à G) et estime les
              consommations annuelles en énergie et en CO₂. Il est produit en quelques heures par un
              diagnostiqueur.
            </li>
            <li>
              L'<strong>audit énergétique</strong> va plus loin : il analyse chaque composante du bâti,
              propose des scénarios de travaux hiérarchisés, chiffre les coûts et les économies, et
              liste les aides mobilisables. C'est un véritable outil d'aide à la décision pour
              l'acheteur et le vendeur.
            </li>
          </ul>
          <p>
            Si votre logement est déjà classé A, B, C ou D, seul le{' '}
            <a href="/dpe-gratuit">DPE gratuit</a> est requis à la vente.
          </p>

          <h2>L'audit, passeport pour les aides à la rénovation</h2>
          <p>
            Au-delà de l'obligation légale à la vente, l'audit énergétique est devenu la porte
            d'entrée indispensable pour accéder aux aides les plus généreuses :
          </p>
          <ul>
            <li>
              <strong>MaPrimeRénov' rénovation d'ampleur</strong> : depuis 2024, aucun dossier de
              rénovation globale n'est accepté par l'Anah sans un audit préalable validé. Le montant
              de la prime peut atteindre <strong>70 000 €</strong> pour les ménages très modestes.
            </li>
            <li>
              <strong>Éco-PTZ</strong> : le prêt à taux zéro pour la rénovation énergétique (jusqu'à
              50 000 € sur 20 ans) est conditionné à un plan de travaux cohérent, que l'audit
              permet de constituer.
            </li>
            <li>
              <strong>CEE (Certificats d'Économies d'Énergie)</strong> : les opérations « coup de
              pouce » bénéficient d'une prime bonifiée lorsqu'elles s'inscrivent dans un programme
              de rénovation global documenté.
            </li>
          </ul>
          <p>
            En tant qu'Accompagnateur Rénov' agréé, RenoHab peut mandater un auditeur certifié,
            coordonner les artisans RGE et monter l'intégralité des dossiers d'aides — pour que
            vous n'ayez pas à gérer cette complexité seul.
          </p>

          <h2>Ce qui attend les passoires thermiques : la pression réglementaire s'intensifie</h2>
          <p>
            L'audit à la vente n'est qu'un maillon d'un calendrier réglementaire plus large qui
            pèse sur les logements énergivores :
          </p>
          <ul>
            <li>
              <strong>1er janvier 2025</strong> : interdiction de mise en location des logements
              classés <strong>G</strong> (déjà en vigueur).
            </li>
            <li>
              <strong>1er janvier 2028</strong> : interdiction étendue aux logements classés{' '}
              <strong>F</strong>.
            </li>
            <li>
              <strong>1er janvier 2034</strong> : interdiction étendue aux logements classés{' '}
              <strong>E</strong>.
            </li>
          </ul>
          <p>
            Pour un propriétaire bailleur, attendre n'est pas une option. Anticiper les travaux
            permet de conserver la possibilité de louer et d'accéder aux aides — dont les montants
            et les conditions peuvent évoluer chaque année.
          </p>

          <h2>Par où commencer ?</h2>
          <p>
            Si vous envisagez de vendre ou de rénover votre logement, la première étape est de
            connaître sa classe DPE actuelle. C'est elle qui détermine vos obligations et votre
            accès aux aides.
          </p>
          <p>
            RenoHab vous propose une{' '}
            <a href="/dpe-gratuit">estimation de DPE gratuite en ligne</a>, sans engagement, pour
            savoir où vous en êtes. Si votre logement est classé E, F ou G, nous vous orientons vers
            un auditeur certifié et vous accompagnons dans le montage de votre plan de rénovation —{' '}
            <a href="/pompe-a-chaleur">pompe à chaleur</a>, isolation, ventilation — avec toutes les
            aides disponibles.
          </p>
        </article>

        {/* CTA RenoHab */}
        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Votre logement est-il concerné ?</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            Estimation DPE gratuite, audit énergétique, plan de travaux et montage des aides :
            RenoHab vous accompagne de A à Z.
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
              Étudier ma rénovation
            </a>
          </div>
        </div>
      </main>

      <ArticleFooter />
    </div>
  );
}
