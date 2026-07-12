import React from 'react';
import { Link } from 'react-router-dom';
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
      </div>
    </footer>
  );
}

const PUBLISHED = '2026-07-12';
const PATH = '/blog/isolation-murs-ite-iti-2026';

export default function ArticleIsolationMursIteIti2026() {
  useSeo({
    title: "Isolation des murs en 2026 : ITE ou ITI, prix, aides et ce qui a changé | RenoHab",
    description:
      "Les murs représentent jusqu'à 25 % des déperditions thermiques. En 2026, MaPrimeRénov' ne finance plus l'isolation des murs en mono-geste. Découvrez ITE, ITI, prix au m², CEE et les solutions pour financer vos travaux.",
    path: PATH,
    image: '/blog/isolation-murs-ite-iti-2026.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline:
        "Isolation des murs en 2026 : ITE ou ITI, prix, aides et ce qui a changé",
      description:
        "Les murs représentent jusqu'à 25 % des déperditions thermiques. En 2026, MaPrimeRénov' ne finance plus l'isolation des murs en mono-geste. Découvrez ITE, ITI, prix au m², CEE et les solutions pour financer vos travaux.",
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
      about: ['Isolation des murs', 'ITE', 'ITI', 'Rénovation énergétique', 'MaPrimeRénov 2026'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 12 juillet 2026 · Isolation &amp; aides
          </p>

          <h1>Isolation des murs en 2026 : ITE ou ITI, prix, aides et ce qui a changé</h1>

          <img
            src="/blog/isolation-murs-ite-iti-2026.jpg"
            alt="Isolation des murs d'une maison — travaux ITE extérieure"
            className="w-full rounded-xl object-cover max-h-80 mb-8"
            loading="eager"
          />

          <p className="lead">
            Après les combles, les <strong>murs</strong> sont le deuxième poste de déperdition
            thermique d'un logement : ils peuvent représenter jusqu'à <strong>25 % des pertes de
            chaleur</strong>. Pourtant, en 2026, une règle clé a changé : MaPrimeRénov' ne finance
            plus l'isolation des murs réalisée seule, en « mono-geste ». Avant de lancer un
            chantier, voici ce qu'il faut savoir sur les techniques, les prix et les aides encore
            disponibles.
          </p>

          <h2>ITE ou ITI : comment choisir sa technique ?</h2>
          <p>
            Il existe deux grandes façons d'isoler un mur. Le choix dépend de la configuration du
            logement, du budget et des contraintes architecturales.
          </p>

          <h3>L'isolation par l'extérieur (ITE)</h3>
          <p>
            L'ITE consiste à envelopper la maison d'un manteau isolant posé sur la façade, puis
            recouvert d'un enduit ou d'un bardage. Ses atouts sont nombreux :
          </p>
          <ul>
            <li><strong>Aucune perte de surface habitable</strong> à l'intérieur.</li>
            <li>Suppression des <strong>ponts thermiques</strong> au niveau des planchers et refends.</li>
            <li>Chantier réalisable sans quitter le logement.</li>
            <li>Rafraîchissement de la façade en prime.</li>
          </ul>
          <p>
            Contrepartie : le coût est plus élevé (120 à 270 €/m² selon la technique — enduit ou
            bardage — et la surface), et le permis de construire peut être requis si la façade est
            visible depuis la rue.
          </p>

          <h3>L'isolation par l'intérieur (ITI)</h3>
          <p>
            L'ITI se pose contre le mur intérieur, souvent sous forme de panneaux rigides ou de
            doublage. Elle coûte nettement moins cher (26 à 52 €/m²) mais présente quelques
            limites :
          </p>
          <ul>
            <li>Légère <strong>perte de surface</strong> (5 à 10 cm par mur traité).</li>
            <li>Les ponts thermiques aux planchers subsistent.</li>
            <li>Le chantier se déroule pièce par pièce, souvent avec dépose des plinthes et
            remise en peinture.</li>
          </ul>
          <p>
            L'ITI reste la solution privilégiée pour les appartements, les maisons mitoyennes ou
            les facades classées.
          </p>

          <h2>Prix en 2026 : quel budget prévoir ?</h2>
          <p>
            Les tarifs varient selon la technique, la surface, l'isolant choisi et la région. À
            titre indicatif pour une maison de 100 m² de surface habitable :
          </p>
          <ul>
            <li><strong>ITE par enduit :</strong> 12 000 à 22 000 € TTC (pose + matériaux, TVA 5,5 % incluse).</li>
            <li><strong>ITE par bardage :</strong> 18 000 à 27 000 € TTC.</li>
            <li><strong>ITI :</strong> 2 600 à 5 200 € TTC pour une pièce de 50 m² de parois.</li>
          </ul>
          <p>
            Ces montants sont donnés <em>hors aides</em>. Avec les dispositifs cumulables, le reste
            à charge peut être sensiblement réduit — à condition de monter correctement le dossier.
          </p>

          <h2>Aides disponibles en 2026 : ce qui a changé</h2>

          <h3>MaPrimeRénov' : fin du mono-geste pour les murs</h3>
          <p>
            C'est le changement majeur de 2026 : depuis le 1er janvier, <strong>l'isolation des
            murs (ITE et ITI) n'est plus finançable par MaPrimeRénov' dans le cadre d'un
            projet « par geste »</strong> réalisé seul. En d'autres termes, si vous ne faites
            qu'isoler vos murs sans l'inscrire dans un projet global, vous ne pouvez plus prétendre
            à cette aide pour ce poste.
          </p>
          <p>
            En revanche, MaPrimeRénov' <strong>reste accessible</strong> si l'isolation des murs
            fait partie d'une <strong>rénovation d'ampleur</strong> combinant au moins deux gestes
            énergétiques significatifs, avec un saut minimal de deux classes DPE. Les plafonds
            atteignent alors 40 à 80 % du montant des travaux selon les revenus.
          </p>

          <h3>La prime CEE : sans condition de revenus</h3>
          <p>
            Les <strong>Certificats d'Économies d'Énergie (CEE)</strong> restent accessibles pour
            l'ITE et l'ITI, sans condition de ressources. Le montant varie selon la surface traitée,
            la zone climatique et l'organisme financeur, mais la prime CEE peut représenter 10 à
            20 % du coût des travaux. Elle est cumulable avec les autres aides.
          </p>
          <p>
            Attention : la demande de prime CEE doit impérativement être déposée <strong>avant
            la signature du devis</strong> — une fois le bon de commande signé, il est trop tard.
          </p>

          <h3>TVA réduite à 5,5 %</h3>
          <p>
            Les travaux d'isolation réalisés par un <strong>artisan RGE</strong> bénéficient
            automatiquement d'une TVA à 5,5 % au lieu de 20 %. Sur un chantier ITE à 20 000 €,
            cela représente une économie d'environ 2 900 €.
          </p>

          <h3>Éco-PTZ jusqu'à 15 000 €</h3>
          <p>
            L'<strong>Éco-Prêt à Taux Zéro</strong> permet de financer jusqu'à 15 000 € de travaux
            d'isolation des murs, sans intérêts et sans condition de revenus. Il peut couvrir le
            reste à charge après déduction des autres aides, et se cumule avec MaPrimeRénov' dans
            le cadre d'une rénovation d'ampleur. Pour en savoir plus sur ce dispositif, consultez
            notre page <a href="/simulateur">simulateur d'aides RenoHab</a>.
          </p>

          <h2>La stratégie gagnante : intégrer les murs dans une rénovation globale</h2>
          <p>
            En 2026, isoler ses murs seul — sans toucher au chauffage ni aux combles — est moins
            rentable en termes d'aides. La logique des pouvoirs publics est claire : inciter à des
            rénovations ambitieuses qui font réellement changer de classe DPE.
          </p>
          <p>
            La bonne approche consiste à combiner :
          </p>
          <ul>
            <li><strong>Isolation des murs</strong> (ITE ou ITI) + <strong>combles</strong> : les
            deux postes représentent ensemble jusqu'à 50 % des déperditions.</li>
            <li><strong>Remplacement du système de chauffage</strong> par une{' '}
              <Link to="/pompe-a-chaleur">pompe à chaleur air/eau</Link> ou un chauffe-eau
              thermodynamique : condition pour débloquer les aides MaPrimeRénov' les plus
              généreuses.</li>
            <li>Un <strong>audit énergétique</strong> préalable pour valider le scénario de travaux
            et sécuriser les dossiers d'aides. Découvrez{' '}
              <a href="/dpe-gratuit">comment estimer votre DPE actuel</a>.</li>
          </ul>
          <p>
            C'est exactement ce qu'un <strong>Accompagnateur Rénov' agréé</strong> comme RenoHab
            est mandaté pour faire : bâtir le plan de travaux optimal, vérifier l'éligibilité aux
            aides, constituer les dossiers et coordonner des artisans RGE de confiance.
          </p>
        </article>

        {/* CTA RenoHab */}
        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">
            Chiffrez votre projet d'isolation des murs
          </h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            Audit, plan de travaux, montage des aides CEE et Éco-PTZ : RenoHab vous accompagne de
            A à Z pour maximiser les économies sur votre chantier.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/dpe-gratuit"
              className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all"
            >
              Estimer mon DPE
            </a>
            <a
              href="/simulateur"
              className="px-6 py-3 rounded-full border border-white/70 text-white font-semibold hover:bg-white/10 transition-all"
            >
              Simuler mes aides
            </a>
          </div>
        </div>
      </main>

      <ArticleFooter />
    </div>
  );
}
