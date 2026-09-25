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

const PUBLISHED = '2026-09-23';
const PATH = '/blog/chaudiere-gaz-2026-remplacement-cout';

export default function ArticleChaudiereGaz2026() {
  useSeo({
    title: "Chaudière à gaz en 2026 : encore légale mais sans aide — ce que ça coûte vraiment | RenoHab",
    description:
      "Remplacer une chaudière à gaz en 2026 est toujours autorisé, mais aucune aide (MaPrimeRénov', CEE, TVA réduite) n'est disponible. Découvrez le vrai coût et les alternatives subventionnées.",
    path: PATH,
    type: 'article',
    image: 'https://renohab.fr/blog/chaudiere-gaz-2026-remplacement-cout.jpg',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: "Chaudière à gaz en 2026 : encore légale mais sans aide — ce que ça coûte vraiment",
      description:
        "Remplacer une chaudière à gaz en 2026 est toujours autorisé, mais aucune aide (MaPrimeRénov', CEE, TVA réduite) n'est disponible. Découvrez le vrai coût et les alternatives subventionnées.",
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
      about: ['Chaudière à gaz', 'Rénovation énergétique', 'Aides 2026', 'MaPrimeRénov'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 23 septembre 2026 · Chauffage &amp; aides
          </p>

          <h1>Chaudière à gaz en 2026 : encore légale mais sans aide — ce que ça coûte vraiment</h1>

          <img
            src="/blog/chaudiere-gaz-2026-remplacement-cout.jpg"
            alt="Chaudière à gaz murale dans un logement en cours de rénovation"
            className="w-full rounded-xl shadow-soft mb-8"
            loading="lazy"
          />

          <p className="lead">
            Votre chaudière à gaz est en fin de vie et vous envisagez de la remplacer ? En 2026,
            l'opération est toujours <strong>techniquement légale</strong> dans un logement
            existant — mais vous devrez financer le remplacement <strong>entièrement à vos
            frais</strong> : plus aucune aide publique (MaPrimeRénov', CEE, TVA réduite) ne
            s'applique aux chaudières à gaz ou au fioul depuis 2025. Voici ce que ça change
            concrètement, et pourquoi la comparaison avec une pompe à chaleur est désormais
            en faveur du chauffage décarboné.
          </p>

          <h2>Est-ce encore autorisé de remplacer une chaudière à gaz en 2026 ?</h2>
          <p>
            Oui — il n'existe <strong>aucune interdiction générale</strong> de remplacer ou
            d'installer une chaudière à gaz dans un logement existant en 2026. La réglementation
            distingue deux situations :
          </p>
          <ul>
            <li>
              <strong>Construction neuve :</strong> la réglementation environnementale RE2020
              interdit les chaudières 100 % gaz dans les maisons individuelles neuves depuis
              janvier 2022, et dans les logements collectifs neufs depuis janvier 2025.
            </li>
            <li>
              <strong>Rénovation (logement existant) :</strong> le remplacement reste autorisé,
              mais aucune aide de l'État ne le soutient. C'est le changement essentiel.
            </li>
          </ul>
          <p>
            Cette distinction est souvent mal comprise. Le terme « interdiction des chaudières à
            gaz » fait régulièrement le tour des médias, mais il ne concerne que le neuf. Dans
            votre maison ou appartement existant, vous pouvez techniquement faire installer une
            nouvelle chaudière gaz — mais l'État ne vous y aidera pas financièrement.
          </p>

          <h2>Pourquoi les aides ont-elles disparu pour le gaz ?</h2>
          <p>
            La disparition des aides suit une logique de décarbonation progressive :
          </p>
          <ul>
            <li>
              <strong>MaPrimeRénov' :</strong> les chaudières à gaz et au fioul sont exclues
              du dispositif depuis 2023. En 2026, seuls les équipements utilisant des énergies
              renouvelables ou décarbonées y sont éligibles (pompes à chaleur, chaudières bois,
              solaire thermique, etc.).
            </li>
            <li>
              <strong>Certificats d'Économies d'Énergie (CEE) :</strong> les primes énergie ne
              s'appliquent plus aux chaudières fossiles depuis 2024.
            </li>
            <li>
              <strong>TVA :</strong> depuis mars 2025, les chaudières à combustibles fossiles
              (gaz, fioul) sont taxées au taux normal de <strong>20 %</strong>, contre 5,5 %
              pour les équipements de chauffage renouvelable installés par un professionnel RGE.
            </li>
          </ul>
          <p>
            Résultat : remplacer une vieille chaudière gaz par une neuve revient à payer
            le matériel et la main-d'œuvre à plein tarif, sans aucun retour.
          </p>

          <h2>Quel est le vrai coût d'une chaudière à gaz neuve en 2026 ?</h2>
          <p>
            Sans aide, le remplacement d'une chaudière gaz à condensation (le seul modèle encore
            commercialisé) représente en général :
          </p>
          <ul>
            <li><strong>Matériel :</strong> 1 200 € à 3 500 € selon la marque et la puissance</li>
            <li><strong>Installation :</strong> 800 € à 2 000 € (main-d'œuvre, raccordements, mise en service)</li>
            <li><strong>TVA à 20 % :</strong> s'applique à l'ensemble de la prestation</li>
            <li>
              <strong>Total réel :</strong> <strong>2 400 € à 6 600 € TTC</strong>, entièrement
              à la charge du propriétaire
            </li>
          </ul>
          <p>
            À cela s'ajoute un coût d'usage en hausse : le prix du gaz naturel reste volatile et
            orienté à la hausse sur le long terme. Une chaudière gaz neuve achetée en 2026 vous
            engage à dépendre du gaz pour 15 à 20 ans.
          </p>

          <h2>Comparaison avec une pompe à chaleur air/eau subventionnée</h2>
          <p>
            Une <a href="/pompe-a-chaleur">pompe à chaleur air/eau</a>, posée par un installateur
            certifié RGE QualiPAC, bénéficie en 2026 de plusieurs aides cumulables :
          </p>
          <ul>
            <li>
              <strong>MaPrimeRénov' :</strong> jusqu'à <strong>5 000 €</strong> selon vos revenus
            </li>
            <li>
              <strong>Prime CEE :</strong> de <strong>2 500 € à 4 000 €</strong> selon votre profil
            </li>
            <li>
              <strong>TVA à 5,5 %</strong> sur la fourniture et la pose
            </li>
            <li>
              <strong>Éco-PTZ :</strong> jusqu'à 50 000 € à taux zéro, prolongé jusqu'au
              31 décembre 2027
            </li>
          </ul>
          <p>
            Coût brut d'une PAC air/eau : 8 000 à 16 000 € selon la puissance. Après aides,
            le <strong>reste à charge tombe à 3 000–6 000 €</strong> dans de nombreux cas — soit
            moins que certains remplacements de chaudière gaz sans aide. Et avec une consommation
            divisée par 3 à 4 par rapport à une chaudière gaz (le COP d'une PAC moderne dépasse
            3), le retour sur investissement est généralement inférieur à 5 ans.
          </p>
          <p>
            Pour évaluer votre situation précise, le <a href="/simulateur">simulateur d'aides
            RenoHab</a> calcule en quelques minutes les montants auxquels vous avez droit.
          </p>

          <h2>Puis-je encore utiliser l'Éco-PTZ si je garde le gaz ?</h2>
          <p>
            L'Éco-PTZ (prêt à taux zéro) peut financer un remplacement de chaudière gaz si et
            seulement si ce remplacement fait partie d'un <strong>bouquet de travaux</strong>
            incluant au moins un geste d'isolation (combles, murs, fenêtres…). Seul, le
            remplacement d'une chaudière fossile n'ouvre pas droit à l'Éco-PTZ.
          </p>
          <p>
            En revanche, l'Éco-PTZ finance pleinement l'installation d'une pompe à chaleur, avec
            ou sans autres travaux.
          </p>

          <h2>Mon logement est classé F ou G : que faire ?</h2>
          <p>
            Si votre logement est une <strong>passoire thermique (F ou G)</strong>, remplacer la
            chaudière gaz par une autre chaudière gaz ne changera pas votre étiquette DPE — et
            ne vous évitera pas les contraintes qui s'appliquent déjà (interdiction de location
            pour les G depuis janvier 2025, pour les F en 2028).
          </p>
          <p>
            La bonne stratégie pour un logement F ou G est une <strong>rénovation d'ampleur</strong>
            combinant isolation et remplacement du système de chauffage par un équipement
            décarboné. C'est précisément ce que l'<a href="/dpe-gratuit">audit énergétique</a>
            obligatoire lors d'une vente vous permettra d'anticiper.
          </p>
          <p>
            En tant qu'Accompagnateur Rénov' agréé, RenoHab monte vos dossiers de financement
            et coordonne les artisans RGE pour maximiser vos aides et la performance de votre
            rénovation.
          </p>

          <h2>Ce qu'il faut retenir</h2>
          <ul>
            <li>Remplacer une chaudière à gaz reste <strong>légal</strong> dans un logement existant en 2026.</li>
            <li><strong>Aucune aide</strong> (MaPrimeRénov', CEE, TVA réduite) ne s'applique aux chaudières fossiles.</li>
            <li>Le coût réel, sans subvention, se situe entre <strong>2 400 et 6 600 € TTC</strong>.</li>
            <li>Une pompe à chaleur air/eau, après aides, revient souvent <strong>moins cher</strong> et consomme 3 à 4 fois moins d'énergie.</li>
            <li>Pour un logement F ou G, la chaudière gaz ne résout pas le problème réglementaire : une rénovation d'ampleur est nécessaire.</li>
          </ul>
        </article>

        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Passez à un chauffage décarboné</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            RenoHab étudie votre projet de pompe à chaleur, monte vos dossiers d'aides et vous met
            en relation avec des installateurs RGE QualiPAC.
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
