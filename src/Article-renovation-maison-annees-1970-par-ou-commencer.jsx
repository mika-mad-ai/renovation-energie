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

const PUBLISHED = '2026-11-15';
const PATH = '/blog/renovation-maison-annees-1970-par-ou-commencer';

export default function ArticleRenovationMaisonAnnees1970() {
  useSeo({
    title: "Rénover une maison des années 1970 : par où commencer et quelles aides en 2026 | RenoHab",
    description:
      "Maison en parpaing ou en brique construite dans les années 1970 ? Découvrez les travaux prioritaires, l'ordre logique à respecter et toutes les aides disponibles en 2026 pour financer votre rénovation énergétique.",
    path: PATH,
    image: '/blog/renovation-maison-annees-1970-par-ou-commencer.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: "Rénover une maison des années 1970 : par où commencer et quelles aides en 2026 ?",
      description:
        "Maison en parpaing ou en brique construite dans les années 1970 ? Découvrez les travaux prioritaires, l'ordre logique à respecter et toutes les aides disponibles en 2026 pour financer votre rénovation énergétique.",
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
      about: ['Rénovation énergétique', 'Maison des années 1970', 'Isolation', 'MaPrimeRénov'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 15 nov. 2026 · Rénovation
          </p>

          <h1>Rénover une maison des années 1970 : par où commencer et quelles aides en 2026 ?</h1>

          <img
            src="/blog/renovation-maison-annees-1970-par-ou-commencer.jpg"
            alt="Façade d'une maison individuelle des années 1970 en parpaing avant travaux d'isolation"
            className="rounded-xl w-full object-cover max-h-80 mb-8"
            loading="lazy"
          />

          <p className="lead">
            Les maisons construites entre 1960 et 1980 constituent le parc le plus énergivore de
            France. Béton, parpaing, brique creuse, sans aucune isolation thermique : elles
            affichent souvent un DPE E, F ou G et engloutissent des budgets de chauffage
            considérables. Bonne nouvelle : elles se rénovent bien, les aides n'ont jamais été
            aussi accessibles, et l'ordre des travaux est clairement balisé.
          </p>

          <h2>Pourquoi les maisons des années 1970 sont-elles si énergivores ?</h2>
          <p>
            La première réglementation thermique française (RT 1974) a été adoptée… en réaction au
            choc pétrolier de 1973. Les maisons construites <em>avant</em> cette date, et même
            celles érigées dans les premières années qui ont suivi, n'intégraient aucune isolation :
            ni dans les murs, ni sous la toiture, ni sous le plancher. Les ponts thermiques — ces
            zones de liaison entre dalle, mur et fenêtre — y sont légion.
          </p>
          <p>
            Résultat : une maison type des années 1970, non rénovée, consomme entre 250 et
            400 kWh/m²/an, soit deux à quatre fois plus qu'un logement récent. Elle se classe
            presque systématiquement <strong>E ou F</strong> au DPE, ce qui déclenche des
            obligations légales pour les propriétaires bailleurs (interdiction de louer un F dès
            janvier 2028, un E dès 2034).
          </p>

          <h2>L'ordre des travaux : l'enveloppe d'abord, le chauffage ensuite</h2>
          <p>
            L'erreur la plus fréquente est d'installer une pompe à chaleur ou une chaudière à
            granulés dans une maison mal isolée. L'équipement se retrouve surdimensionné, fonctionne
            en cycles courts et s'use prématurément. La règle d'or : <strong>traiter l'enveloppe
            avant le système de chauffage</strong>.
          </p>

          <h3>1. Commencer par un audit énergétique</h3>
          <p>
            L'audit énergétique est obligatoire pour accéder à MaPrimeRénov' Ampleur (rénovation
            d'au moins deux classes DPE). Il coûte entre 800 et 1 500 € selon la superficie, mais
            il est en partie financé par les aides et vous évite des dépenses inutiles.{' '}
            <a href="/dpe-gratuit">Une première estimation de votre DPE est disponible gratuitement</a> sur
            RenoHab pour évaluer votre situation de départ.
          </p>

          <h3>2. Isoler les combles ou la toiture (priorité absolue)</h3>
          <p>
            La toiture et les combles représentent <strong>25 à 30 % des déperditions thermiques</strong>{' '}
            d'une maison des années 1970. L'isolation des combles perdus par soufflage de ouate de
            cellulose ou de laine minérale reste le geste au meilleur rapport coût/efficacité :
            compter 20 à 40 €/m², avec un retour sur investissement inférieur à cinq ans.
          </p>
          <p>
            Si vos combles sont aménagés, l'isolation par sarking (pose sur les chevrons) ou par
            l'intérieur est adaptée, mais plus coûteuse.
          </p>

          <h3>3. Isoler les murs</h3>
          <p>
            Les murs en parpaing non isolés sont responsables de 20 à 25 % des pertes. Deux
            options s'offrent à vous :
          </p>
          <ul>
            <li>
              <strong>Isolation thermique par l'extérieur (ITE)</strong> : elle supprime les ponts
              thermiques, ne réduit pas la surface habitable et peut être couplée à un ravalement.
              Elle est recommandée pour les parpaings.
            </li>
            <li>
              <strong>Isolation thermique par l'intérieur (ITI)</strong> : moins chère mais elle
              réduit la surface et ne traite pas les ponts thermiques. Elle peut suffire pour des
              travaux partiels.
            </li>
          </ul>

          <h3>4. Remplacer les menuiseries et isoler le plancher bas</h3>
          <p>
            Le simple vitrage des fenêtres des années 1970 est un gouffre thermique. Le passage au
            double vitrage réduit les pertes par fenêtre de 50 %. Si la maison repose sur un vide
            sanitaire, l'isolation du plancher bas ajoute 10 à 15 % d'économies supplémentaires.
          </p>

          <h3>5. Remplacer le système de chauffage en dernier</h3>
          <p>
            Une fois l'enveloppe traitée, les besoins de chauffage chutent. Vous pouvez alors
            dimensionner correctement une{' '}
            <a href="/pompe-a-chaleur">pompe à chaleur air/eau</a> ou un autre équipement
            performant — et bénéficier des meilleures aides, puisque la combinaison isolation +
            PAC dans le cadre d'une rénovation d'ampleur ouvre droit aux taux les plus élevés de
            MaPrimeRénov'.
          </p>

          <h2>Les aides disponibles en 2026 pour rénover une maison des années 1970</h2>

          <h3>MaPrimeRénov' Ampleur : jusqu'à 90 % du coût</h3>
          <p>
            Si vos travaux permettent un gain d'au moins <strong>deux classes DPE</strong> (par
            exemple passer de F à D), vous accédez à MaPrimeRénov' Ampleur, l'aide la plus
            généreuse de l'État :
          </p>
          <ul>
            <li>Ménages aux revenus <strong>très modestes</strong> : jusqu'à 90 % du montant éligible.</li>
            <li>Ménages aux revenus <strong>modestes</strong> : jusqu'à 75 %.</li>
            <li>Ménages aux revenus <strong>intermédiaires</strong> : jusqu'à 60 %.</li>
            <li>Ménages aux revenus <strong>supérieurs</strong> : jusqu'à 40 %.</li>
          </ul>
          <p>
            Un accompagnateur Rénov' agréé comme RenoHab est obligatoire pour monter le dossier.
            Il vérifie l'éligibilité, coordonne les artisans RGE et suit les démarches jusqu'au
            versement de la prime.
          </p>

          <h3>Primes CEE et éco-PTZ</h3>
          <p>
            Les <strong>certificats d'économies d'énergie (CEE)</strong> sont cumulables avec
            MaPrimeRénov' et financent chaque geste d'isolation ou de remplacement de chauffage,
            selon un barème actualisé tous les trimestres. L'<strong>éco-PTZ</strong>, prêt à taux
            zéro pouvant atteindre <strong>50 000 €</strong>, permet de financer le reste à charge
            sans intérêts. Ces deux dispositifs fonctionnent ensemble, sans plafond commun.
          </p>

          <h3>TVA à 5,5 %</h3>
          <p>
            Tous les travaux de rénovation énergétique dans un logement achevé depuis plus de deux
            ans bénéficient d'une TVA réduite à 5,5 % (au lieu de 10 % pour des travaux courants
            et 20 % pour le neuf). C'est automatique, sans démarche, dès lors que l'artisan est
            bien qualifié RGE.
          </p>

          <h2>Quel gain énergétique et quel DPE espérer ?</h2>
          <p>
            Une rénovation complète (toiture + murs + fenêtres + plancher + PAC) d'une maison de
            100 m² des années 1970 initialement classée F ou G peut la faire passer en classe B ou
            C. La consommation chute de 300 à 400 kWh/m²/an à moins de 100 kWh/m²/an, soit une
            économie de <strong>1 500 à 2 500 € par an</strong> sur la facture d'énergie selon les
            prix actuels.
          </p>
          <p>
            Pour estimer précisément votre situation,{' '}
            <a href="/blog">consultez nos guides thématiques</a> ou utilisez{' '}
            <a href="/#simulateur">le simulateur d'aides de la page d'accueil</a>.
          </p>

          <h2>Les pièges à éviter</h2>
          <ul>
            <li>
              <strong>Isoler sans ventiler :</strong> une maison hermétique sans VMC accumule
              l'humidité et génère des moisissures. Prévoyez une VMC hygro-réglable type B ou une
              double flux dès que vous isolez.
            </li>
            <li>
              <strong>Choisir l'artisan selon le prix seul :</strong> un installateur RGE (Reconnu
              Garant de l'Environnement) est obligatoire pour déclencher les aides. Vérifiez la
              qualification sur le site Faire.fr.
            </li>
            <li>
              <strong>Isoler par l'intérieur sur des murs humides :</strong> traitez d'abord les
              infiltrations et remontées capillaires avant toute isolation, sous peine d'emprisonner
              l'humidité.
            </li>
          </ul>
        </article>

        {/* CTA RenoHab */}
        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Votre maison des années 1970 mérite mieux</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            RenoHab est Accompagnateur Rénov' agréé. On établit votre plan de travaux, on monte
            votre dossier MaPrimeRénov' et on coordonne des artisans RGE qualifiés.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/dpe-gratuit" className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all">
              Estimer mon DPE gratuitement
            </a>
            <a href="/pompe-a-chaleur" className="px-6 py-3 rounded-full border border-white/70 text-white font-semibold hover:bg-white/10 transition-all">
              Découvrir la pompe à chaleur
            </a>
          </div>
        </div>
      </main>

      <ArticleFooter />
    </div>
  );
}
