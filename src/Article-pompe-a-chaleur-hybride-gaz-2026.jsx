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

const PUBLISHED = '2026-09-26';
const PATH = '/blog/pompe-a-chaleur-hybride-gaz-2026';

export default function ArticlePACHybride2026() {
  useSeo({
    title: "Pompe à chaleur hybride gaz : quelles aides après septembre 2026 ? | RenoHab",
    description:
      "La pompe à chaleur hybride (PAC + chaudière gaz) reste-t-elle éligible à MaPrimeRénov' et aux CEE après les réformes de septembre 2026 ? Montants, conditions et alternatives.",
    path: PATH,
    image: '/blog/pompe-a-chaleur-hybride-gaz-2026.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline:
        "Pompe à chaleur hybride gaz : quelles aides après septembre 2026 ?",
      description:
        "La pompe à chaleur hybride (PAC + chaudière gaz) reste-t-elle éligible à MaPrimeRénov' et aux CEE après les réformes de septembre 2026 ? Montants, conditions et alternatives.",
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
      about: ['Pompe à chaleur hybride', 'MaPrimeRénov', 'CEE', 'Rénovation énergétique 2026'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 26 sept. 2026 · Chauffage
          </p>

          <h1>Pompe à chaleur hybride gaz : quelles aides après septembre 2026 ?</h1>

          <img
            src="/blog/pompe-a-chaleur-hybride-gaz-2026.jpg"
            alt="Unité extérieure d'une pompe à chaleur hybride installée sur une maison individuelle"
            className="rounded-xl w-full object-cover"
            style={{ maxHeight: '400px' }}
            loading="eager"
          />

          <p className="lead">
            Depuis le 1er septembre 2026, les règles de MaPrimeRénov' ont été profondément
            remaniées. Pour les propriétaires qui envisagent une <strong>pompe à chaleur hybride</strong> —
            solution qui combine une PAC électrique et une chaudière à gaz — la question est
            cruciale : ces systèmes sont-ils encore aidés ? La réponse est nuancée et dépend
            du parcours d'aides choisi.
          </p>

          <h2>Qu'est-ce qu'une pompe à chaleur hybride ?</h2>
          <p>
            Une PAC hybride associe une <strong>pompe à chaleur air/eau électrique</strong> et
            une <strong>chaudière à gaz à condensation</strong> au sein d'un même système de
            chauffage. L'intelligence embarquée bascule automatiquement entre les deux sources :
          </p>
          <ul>
            <li>La PAC produit la chaleur tant que la température extérieure le permet (généralement jusqu'à −7 °C), ce qui couvre la grande majorité des heures de chauffe annuelles.</li>
            <li>La chaudière gaz prend le relais lors des pics de froid hivernal, évitant toute déconfort thermique.</li>
          </ul>
          <p>
            Ce système séduit les ménages qui vivent dans des régions à hivers rigoureux ou dont
            le logement n'est pas encore suffisamment isolé pour passer à une PAC 100 % électrique.
            En pratique, la consommation de gaz peut être réduite de 50 à 70 % par rapport à une
            chaudière gaz seule.
          </p>

          <h2>MaPrimeRénov' par geste : la PAC hybride reste éligible</h2>
          <p>
            Le <strong>parcours par geste</strong> de MaPrimeRénov' permet de financer des
            équipements individuellement, sans obligation de réaliser une rénovation globale.
            Bonne nouvelle : les PAC hybrides (air/eau avec appoint gaz intégré) figurent
            toujours dans la liste des travaux éligibles à ce parcours.
          </p>
          <p>
            Les montants de prime varient selon la catégorie de revenus du ménage et la puissance
            de l'installation. Pour obtenir le montant précis applicable à votre situation,
            consultez le simulateur officiel sur{' '}
            <a href="/dpe-gratuit" rel="noopener">france-renov.gouv.fr via notre outil</a> ou
            directement auprès d'un Accompagnateur Rénov'.
          </p>

          <h3>Conditions à respecter</h3>
          <ul>
            <li>Le logement doit avoir été construit <strong>depuis plus de 15 ans</strong>.</li>
            <li>L'installation doit être réalisée par un artisan <strong>certifié RGE</strong> (Reconnu Garant de l'Environnement).</li>
            <li>La PAC hybride doit être raccordée à un réseau de distribution eau chaude existant (systèmes radiateurs ou plancher chauffant).</li>
            <li>Le devis et la facture doivent correspondre aux exigences de l'ANAH.</li>
          </ul>

          <h2>MaPrimeRénov' ampleur : la PAC hybride exclue depuis septembre 2026</h2>
          <p>
            C'est ici que réside la principale nouveauté depuis le 1er septembre 2026.
            Le parcours <strong>rénovation d'ampleur</strong> — le plus généreux, avec des
            aides pouvant atteindre 70 % du montant des travaux — <strong>exclut désormais
            tout équipement qui conserve un chauffage au gaz ou au fioul</strong> après
            les travaux.
          </p>
          <p>
            Une PAC hybride, par définition, maintient une dépendance au gaz comme appoint.
            Elle ne permet donc plus d'accéder aux aides de la rénovation d'ampleur depuis
            cette réforme. Pour bénéficier du parcours d'ampleur, le projet doit viser une
            sortie complète des énergies fossiles — typiquement avec une{' '}
            <a href="/pompe-a-chaleur">PAC air/eau 100 % électrique</a>.
          </p>

          <h2>CEE (Certificats d'Économies d'Énergie) : attention au Coup de Pouce</h2>
          <p>
            La situation est également évoluée du côté des CEE :
          </p>
          <ul>
            <li>
              <strong>Prime CEE classique</strong> : les PAC hybrides restent éligibles aux
              certificats d'économies d'énergie de droit commun. Les montants versés par les
              obligés (énergéticiens) dépendent du volume d'économies d'énergie estimé.
            </li>
            <li>
              <strong>Coup de Pouce Chauffage</strong> : les PAC hybrides ont été retirées
              du dispositif Coup de Pouce depuis janvier 2026, ce dispositif étant réservé
              aux équipements sans combustible fossile (PAC air/eau pure électrique, chaudière
              biomasse, pompe à chaleur géothermique).
            </li>
          </ul>
          <p>
            En clair : une prime CEE est toujours possible pour une PAC hybride, mais elle sera
            moins élevée qu'elle ne l'aurait été avant 2026.
          </p>

          <h2>TVA réduite et Éco-PTZ : toujours disponibles</h2>
          <p>
            Deux leviers de financement restent pleinement accessibles pour une PAC hybride :
          </p>
          <ul>
            <li>
              <strong><a href="/blog/tva-5-5-renovation-energetique-2026">TVA à 5,5 %</a></strong> :
              elle s'applique à la fourniture et à la pose d'une PAC hybride dans un logement
              achevé depuis plus de 2 ans. C'est une économie directe de 14,5 points par
              rapport au taux normal.
            </li>
            <li>
              <strong><a href="/blog/eco-ptz-2026-pret-taux-zero-renovation">Éco-PTZ</a></strong> :
              le prêt à taux zéro pour la rénovation énergétique, d'un montant pouvant
              atteindre 50 000 €, est cumulable avec MaPrimeRénov' et reste accessible pour
              l'installation d'une PAC hybride.
            </li>
          </ul>

          <h2>PAC hybride ou PAC 100 % électrique : quelle option choisir ?</h2>
          <p>
            La PAC hybride reste une solution pertinente dans plusieurs cas :
          </p>
          <ul>
            <li>Logement mal isolé avec des besoins de chaleur élevés par grand froid.</li>
            <li>Zone climatique froide (altitude, nord-est de la France) où une PAC seule atteint ses limites de performance.</li>
            <li>Budget limité qui ne permet pas de réaliser en même temps l'isolation et la PAC.</li>
          </ul>
          <p>
            En revanche, si votre objectif est de maximiser les aides et de préparer votre logement
            aux échéances réglementaires (interdiction de location des logements classés F en 2028,
            E en 2034), une <strong>rénovation d'ampleur avec PAC 100 % électrique</strong> reste
            la voie la plus avantageuse financièrement sur le long terme.
          </p>
          <p>
            N'hésitez pas à utiliser notre{' '}
            <a href="/#simulateur">simulateur d'aides</a> pour comparer les scénarios et estimer
            votre reste à charge selon votre profil de revenus.
          </p>

          <h2>Comment monter votre dossier ?</h2>
          <p>
            Que vous optiez pour une PAC hybride ou une PAC 100 % électrique, le montage
            du dossier d'aides suit les mêmes étapes :
          </p>
          <ol>
            <li>Obtenir un <strong>devis signé d'un artisan RGE</strong> avant tout commencement des travaux.</li>
            <li>Déposer la demande d'aide <strong>avant</strong> de signer le devis (règle MaPrimeRénov').</li>
            <li>Faire réaliser les travaux et récupérer la facture finale.</li>
            <li>Déposer les justificatifs sur la plateforme France Rénov' pour déclencher le versement.</li>
          </ol>
          <p>
            En tant qu'Accompagnateur Rénov' agréé, RenoHab vous guide à chaque étape : audit,
            plan de financement, sélection d'artisans RGE et suivi des dossiers d'aides.
          </p>
        </article>

        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Quel système de chauffage pour votre logement ?</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            PAC hybride, PAC air/eau, géothermie… RenoHab vous aide à choisir la solution
            optimale et à maximiser vos aides.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/pompe-a-chaleur" className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all">
              Étudier une pompe à chaleur
            </a>
            <a href="/dpe-gratuit" className="px-6 py-3 rounded-full border border-white/70 text-white font-semibold hover:bg-white/10 transition-all">
              Estimer mon DPE
            </a>
          </div>
        </div>
      </main>

      <ArticleFooter />
    </div>
  );
}
