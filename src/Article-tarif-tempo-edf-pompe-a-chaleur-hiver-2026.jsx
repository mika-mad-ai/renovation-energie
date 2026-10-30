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

const PUBLISHED = '2026-10-30';
const PATH = '/blog/tarif-tempo-edf-pompe-a-chaleur-hiver-2026';

export default function ArticleTempoEdfPompeAChaleur2026() {
  useSeo({
    title: "Tarif Tempo EDF et pompe à chaleur : 5 stratégies pour l'hiver 2026-2027 | RenoHab",
    description:
      "Avec 22 jours rouges dès novembre 2026, le tarif Tempo EDF peut peser lourd sur la facture d'une pompe à chaleur. Découvrez 5 stratégies concrètes pour limiter la note cet hiver.",
    path: PATH,
    image: '/blog/tarif-tempo-edf-pompe-a-chaleur-hiver-2026.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline:
        "Tarif Tempo EDF et pompe à chaleur : 5 stratégies pour passer l'hiver 2026-2027 sans facture salée",
      description:
        "Avec 22 jours rouges dès novembre 2026, le tarif Tempo EDF peut peser lourd sur la facture d'une pompe à chaleur. Découvrez 5 stratégies concrètes pour limiter la note cet hiver.",
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
      about: ['Pompe à chaleur', 'Tarif Tempo EDF', 'Optimisation facture électricité'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 30 oct. 2026 · Chauffage
          </p>

          <h1>Tarif Tempo EDF et pompe à chaleur : 5 stratégies pour passer l'hiver 2026-2027 sans facture salée</h1>

          <img
            src="/blog/tarif-tempo-edf-pompe-a-chaleur-hiver-2026.jpg"
            alt="Unité extérieure de pompe à chaleur en hiver avec givre, facture d'électricité sur fond"
            className="w-full rounded-xl shadow-soft"
            loading="lazy"
          />

          <p className="lead">
            Depuis le 1er novembre 2026, les 22 jours rouges du calendrier Tempo EDF sont officiellement lancés.
            Pour les foyers chauffés à la pompe à chaleur, ce tarif peut diviser par deux la facture annuelle
            — ou la faire exploser si l'on ne connaît pas les règles. Voici comment tirer le meilleur parti
            de Tempo cet hiver.
          </p>

          <h2>Qu'est-ce que l'option Tempo EDF ?</h2>
          <p>
            Tempo est un tarif proposé par EDF qui découpe l'année en <strong>trois types de journées</strong>,
            selon la tension sur le réseau électrique :
          </p>
          <ul>
            <li><strong>Jours bleus</strong> (environ 300 par an) : électricité très bon marché, idéale pour chauffer.</li>
            <li><strong>Jours blancs</strong> (environ 43 par an) : tarif intermédiaire, proche du tarif réglementé.</li>
            <li><strong>Jours rouges</strong> (22 par an, concentrés de novembre à mars) : électricité très chère en heures pleines.</li>
          </ul>
          <p>
            L'écart de prix entre un jour bleu en heures creuses et un jour rouge en heures pleines est
            considérable. À titre indicatif, selon les grilles tarifaires en vigueur à l'automne 2026
            publiées par plusieurs comparateurs spécialisés, le kilowattheure rouge en heures pleines
            tourne autour de <strong>0,73 €/kWh</strong>, contre environ <strong>0,13 €/kWh</strong> pour
            un jour bleu en heures creuses — soit un rapport de 1 à 5. Vérifiez les tarifs officiels
            à jour sur le site d'EDF ou de la Commission de Régulation de l'Énergie (CRE) avant tout calcul.
          </p>
          <p>
            Pour souscrire, il faut disposer d'un compteur <strong>Linky</strong> et d'une puissance
            souscrite d'au moins 6 kVA. Le changement d'option est gratuit et sans engagement.
          </p>

          <h2>Pourquoi les propriétaires de pompe à chaleur sont particulièrement concernés</h2>
          <p>
            Une <a href="/pompe-a-chaleur">pompe à chaleur air/eau</a> est l'équipement de chauffage le
            plus efficace du marché (COP de 3 à 5), mais c'est aussi un gros consommateur électrique :
            entre 3 000 et 8 000 kWh par an selon la surface et le climat. Sur un jour rouge, allumer
            sa PAC sans précaution en heures pleines peut coûter autant en quelques heures que chauffer
            une semaine entière un jour bleu.
          </p>
          <p>
            La bonne nouvelle : la PAC est aussi l'équipement le plus <em>pilotable</em>. Contrairement
            à une résistance électrique, elle peut fonctionner en avance de phase (préchauffage la nuit
            précédente) et stocker de l'énergie dans la masse thermique du bâtiment ou dans un ballon tampon.
          </p>

          <h2>5 stratégies concrètes pour limiter la facture Tempo avec une PAC</h2>

          <h3>1. Anticiper et préchauffer avant les jours rouges</h3>
          <p>
            EDF annonce les couleurs la veille avant 11h. Dès qu'un jour rouge est annoncé, montez
            la consigne de votre PAC en heures creuses de la nuit précédente (minuit à 8h) pour
            stocker de la chaleur dans les murs, le plancher chauffant ou un ballon tampon.
            Le lendemain matin, réduisez la consigne : le logement se déchargera progressivement
            sans que la PAC ait besoin de tourner à plein régime en heures pleines.
          </p>

          <h3>2. Réduire ou couper la PAC durant les heures pleines rouges (8h–22h)</h3>
          <p>
            C'est le geste le plus impactant. En heures pleines d'un jour rouge, baissez la consigne
            à 16-17 °C ou activez le mode "hors-gel" si la maison est bien isolée. Cette plage de
            14 heures représente l'essentiel du surcoût Tempo : la maîtriser, c'est préserver
            l'essentiel des économies accumulées sur les jours bleus.
          </p>

          <h3>3. Programmer le ballon d'eau chaude sanitaire sur les heures creuses bleues</h3>
          <p>
            Si votre chauffe-eau est couplé à la PAC ou électrique séparé, programmez-le exclusivement
            sur les heures creuses des jours bleus. C'est un levier simple, souvent négligé, qui peut
            représenter 200 à 400 kWh d'économies sur la saison.
          </p>

          <h3>4. Utiliser un gestionnaire d'énergie ou une box domotique</h3>
          <p>
            Des solutions comme un thermostat connecté (Netatmo, Tado, Heatzy) ou une box domotique
            peuvent recevoir automatiquement le signal Tempo et ajuster la consigne de la PAC sans
            intervention manuelle. Une fois configuré, vous n'avez plus à surveiller le calendrier.
          </p>

          <h3>5. Fermer les volets et isoler les fuites de chaleur</h3>
          <p>
            L'inertie thermique est votre alliée les jours rouges. Plus le logement est hermétique,
            plus longtemps il conserve la chaleur stockée. Fermez les volets dès la tombée de la nuit,
            couvrez les ponts thermiques et vérifiez l'étanchéité des fenêtres et portes. Chaque degré
            conservé sans consommer vaut entre 3 et 6 % d'économie sur la facture.
          </p>

          <h2>Tempo est-il vraiment rentable avec une pompe à chaleur ?</h2>
          <p>
            Oui — à condition de respecter les jours rouges. Des simulations publiées par des comparateurs
            indiquent qu'une maison bien isolée avec PAC, qui réduit sa consommation lors des 22 jours rouges,
            peut économiser <strong>15 à 30 %</strong> par rapport au tarif base ou HP/HC classique.
            À l'inverse, une mauvaise gestion de seulement 10 jours rouges peut annuler l'intégralité
            des gains.
          </p>
          <p>
            La clé est donc double : <strong>piloter la PAC</strong> intelligemment, et disposer d'un
            <strong> logement suffisamment isolé</strong> pour encaisser les heures d'arrêt forcé sans
            chute de température inconfortable.
          </p>

          <h2>Le rôle décisif de l'isolation</h2>
          <p>
            Un logement mal isolé (classé F ou G au <a href="/dpe-gratuit">DPE</a>) perd sa chaleur
            trop vite pour que la stratégie de préchauffage fonctionne correctement. À l'inverse,
            une maison bien isolée (classe C ou B) peut tenir 8 à 12 heures sans relance de la PAC,
            ce qui couvre intégralement la plage des heures pleines d'un jour rouge.
          </p>
          <p>
            C'est pourquoi une <a href="/blog">rénovation énergétique globale</a> — isolation des
            combles, des murs, remplacement des menuiseries — transforme non seulement la facture
            annuelle, mais aussi la flexibilité de pilotage de la PAC sur les tarifs modulés comme Tempo.
            En tant qu'Accompagnateur Rénov', RenoHab accompagne les ménages de l'audit au chantier
            pour maximiser l'efficacité de votre pompe à chaleur et vos économies d'énergie.
          </p>
        </article>

        {/* CTA RenoHab */}
        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Optimisez votre PAC cet hiver</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            Audit énergétique, plan d'isolation, montage des aides : RenoHab vous accompagne pour
            que votre pompe à chaleur tourne le moins possible les jours rouges.
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
