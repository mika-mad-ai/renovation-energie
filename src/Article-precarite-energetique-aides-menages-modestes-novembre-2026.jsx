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

const PUBLISHED = '2026-11-20';
const PATH = '/blog/precarite-energetique-aides-menages-modestes-novembre-2026';

export default function ArticlePrecariteEnergetiqueAides2026() {
  useSeo({
    title: "Précarité énergétique en 2026 : 3,9 millions de passoires thermiques — ce que les ménages modestes peuvent encore obtenir | RenoHab",
    description:
      "Après la fermeture de MaPrimeRénov' et la chute de 41 % des rénovations Anah, que reste-t-il comme aides pour les ménages modestes face aux passoires thermiques ? Le point complet en novembre 2026.",
    path: PATH,
    image: '/blog/precarite-energetique-aides-menages-modestes-novembre-2026.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline:
        "Précarité énergétique en 2026 : 3,9 millions de passoires thermiques — ce que les ménages modestes peuvent encore obtenir",
      description:
        "Après la fermeture de MaPrimeRénov' et la chute de 41 % des rénovations Anah, que reste-t-il comme aides pour les ménages modestes face aux passoires thermiques ? Le point complet en novembre 2026.",
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
      about: ['Précarité énergétique', 'Passoires thermiques', 'MaPrimeRénov', 'Aides rénovation 2026'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 20 nov. 2026 · Aides &amp; financement
          </p>

          <h1>Précarité énergétique en 2026 : 3,9 millions de passoires thermiques — ce que les ménages modestes peuvent encore obtenir</h1>

          <img
            src="/blog/precarite-energetique-aides-menages-modestes-novembre-2026.jpg"
            alt="Logement passoire thermique classé F ou G — précarité énergétique en France en 2026"
            className="w-full rounded-xl shadow-soft my-6"
            loading="lazy"
          />

          <p className="lead">
            Le 18 novembre 2026, lors de la 6e Journée nationale contre la précarité énergétique,
            une vingtaine d'organisations ont tiré la sonnette d'alarme : la France compte encore
            3,9 millions de passoires thermiques, les rénovations financées par l'Anah ont chuté
            de 41 % en 2026, et MaPrimeRénov' est fermé depuis janvier. Que peut-on encore obtenir
            pour rénover un logement énergivore quand on a des revenus modestes ?
          </p>

          <h2>Un bilan alarmant : moins de rénovations, plus de précarité</h2>
          <p>
            Selon les données publiées par l'Agence nationale de l'habitat (Anah) et reprises par
            les organisations lors de la journée du 18 novembre, les rénovations financées en 2026
            ont reculé de <strong>41 %</strong> par rapport à l'année précédente. La cause directe :
            les guichets de MaPrimeRénov' ont fermé en janvier 2026, à la suite de coupes
            budgétaires intervenues fin 2025. Dans le même temps, le gouvernement a annoncé la
            fin des programmes de certificats d'économies d'énergie (CEE) spécifiquement dédiés
            à la lutte contre la précarité énergétique.
          </p>
          <p>
            Résultat, selon les estimations des associations : <strong>36 % des ménages français</strong>,
            soit plusieurs millions de foyers, sont aujourd'hui en situation de précarité énergétique —
            incapables de maintenir leur logement à une température confortable sans y consacrer une
            part excessive de leur budget. Les 3,9 millions de passoires thermiques encore sur le
            marché locatif et en propriété occupante concentrent l'essentiel du problème.
          </p>
          <p>
            Pour les propriétaires bailleurs, la pression réglementaire reste pourtant intacte :
            les logements classés <strong>G sont déjà interdits à la location</strong> depuis le
            1er janvier 2025, les F le seront en 2028 et les E en 2034 — calendrier que l'Assemblée
            nationale a tenté de supprimer mi-novembre 2026, sans succès définitif à ce stade
            (voir notre article <a href="/blog/vote-assemblee-fin-interdiction-location-passoires-2026">vote des députés sur les interdictions de location</a>).
          </p>

          <h2>Ce que les associations réclament pour 2027</h2>
          <p>
            La charte présentée le 18 novembre 2026 par vingt organisations (associations de
            mal-logement, défenseurs des locataires, acteurs de l'efficacité énergétique) comporte
            huit mesures phares :
          </p>
          <ul>
            <li>La <strong>réouverture durable de MaPrimeRénov'</strong> avec des budgets sanctuarisés sur plusieurs années.</li>
            <li>Le <strong>rétablissement des programmes CEE</strong> ciblant spécifiquement les ménages en précarité énergétique.</li>
            <li>La <strong>revalorisation du chèque énergie</strong>, dont le montant moyen (~150 €) n'a pas été relevé depuis 2019 alors que les prix de l'énergie ont fortement augmenté.</li>
            <li>L'élargissement du chèque énergie à l'ensemble des foyers éligibles, dont plus d'un million n'ont pas reçu leur chèque en 2025 à la suite de la réforme de la taxe d'habitation.</li>
            <li>Un meilleur accès à l'<strong>accompagnement humain</strong> (Accompagnateur Rénov') pour les ménages les plus vulnérables.</li>
          </ul>
          <p>
            Ces mesures seront portées devant les candidats à l'élection présidentielle de 2027.
            En attendant, voici ce qui reste accessible dès maintenant.
          </p>

          <h2>Les aides encore disponibles pour les ménages modestes en 2026</h2>

          <h3>1. Les certificats d'économies d'énergie (CEE) classiques</h3>
          <p>
            Les primes CEE versées par les fournisseurs d'énergie (EDF, Engie, TotalEnergies, etc.)
            restent actives en 2026. Depuis novembre 2026, une réforme intègre les ménages modestes
            dans la catégorie des bénéficiaires de CEE <em>bonifiés</em>, au même titre que les
            ménages très modestes jusqu'ici. Concrètement, cela signifie des primes plus élevées
            pour les travaux d'isolation, l'installation d'une pompe à chaleur ou la pose d'une VMC.
          </p>
          <p>
            Les CEE se cumulent avec d'autres aides et ne dépendent pas d'un budget étatique
            limité : ils constituent donc le filet de sécurité le plus robuste en cette période
            de restriction budgétaire.
          </p>

          <h3>2. L'éco-prêt à taux zéro (éco-PTZ)</h3>
          <p>
            L'<a href="/blog/eco-ptz-2026-pret-taux-zero-renovation">éco-PTZ</a> reste disponible
            en 2026 et peut financer jusqu'à 50 000 € de travaux de rénovation énergétique sans
            intérêts. Il est accessible sans condition de revenus et peut être mobilisé même
            lorsque MaPrimeRénov' est fermé. Certaines banques le proposent en complément d'un
            prêt immobilier ou à la consommation.
          </p>

          <h3>3. La TVA à 5,5 % sur les travaux</h3>
          <p>
            Les travaux d'amélioration énergétique (isolation, pompe à chaleur, VMC, menuiseries)
            réalisés dans une résidence principale de plus de deux ans bénéficient d'une TVA
            réduite à <strong>5,5 %</strong> au lieu de 10 % ou 20 %. Cette mesure s'applique
            automatiquement et représente une économie substantielle sur des chantiers à plusieurs
            milliers d'euros.
          </p>

          <h3>4. Le chèque énergie pour les factures immédiates</h3>
          <p>
            Malgré ses lacunes, le chèque énergie reste la seule aide directe pour les foyers
            en situation de précarité énergétique. Il est attribué automatiquement sous condition
            de revenus. Si vous ne l'avez pas reçu, vous pouvez vérifier votre éligibilité sur
            le site officiel chequeenergie.gouv.fr.
          </p>

          <h3>5. Les aides locales et régionales</h3>
          <p>
            Certaines régions, départements et intercommunalités maintiennent des dispositifs
            propres : subventions directes, fonds d'aide à la rénovation thermique, prêts bonifiés.
            Ces aides varient selon les territoires mais peuvent compenser partiellement la
            fermeture des dispositifs nationaux.
          </p>

          <h2>Faut-il attendre le retour de MaPrimeRénov' ?</h2>
          <p>
            La tentation est grande de reporter les travaux en espérant la réouverture du dispositif.
            C'est pourtant une stratégie risquée pour plusieurs raisons :
          </p>
          <ul>
            <li>Chaque hiver passé dans une passoire thermique, c'est une facture de chauffage inutilement élevée — souvent plusieurs centaines d'euros de plus qu'après rénovation.</li>
            <li>Les artisans RGE sont actuellement plus disponibles et les délais de chantier plus courts qu'en période de forte demande.</li>
            <li>Pour les propriétaires bailleurs, le compte à rebours de l'interdiction de louer en 2028 (classe F) continue de tourner, aides ou non.</li>
          </ul>
          <p>
            En combinant CEE bonifiés, éco-PTZ et TVA à 5,5 %, il est possible de financer un
            premier geste de rénovation — isolation des combles ou
            <a href="/pompe-a-chaleur"> remplacement d'une chaudière par une pompe à chaleur</a> —
            avec un reste à charge maîtrisé, même sans MaPrimeRénov'.
          </p>

          <h2>Comment savoir quelles aides vous restent accessibles ?</h2>
          <p>
            La situation des aides évolue rapidement et les règles d'éligibilité dépendent de
            vos revenus, du type de logement et des travaux envisagés. La meilleure approche
            reste de <a href="/dpe-gratuit">faire estimer le DPE de votre logement</a> pour
            identifier les travaux prioritaires, puis de lancer une simulation personnalisée.
          </p>
          <p>
            En tant qu'<strong>Accompagnateur Rénov' agréé</strong>, RenoHab monte les dossiers
            de financement et coordonne les artisans RGE — y compris dans les situations où
            les aides classiques sont restreintes. <a href="/blog">Consultez nos guides</a> pour
            préparer votre projet de rénovation.
          </p>
        </article>

        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Simulez vos aides disponibles</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            Même sans MaPrimeRénov', des financements existent. RenoHab calcule votre reste à charge réel et monte votre dossier.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/#simulator" className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all">
              Lancer le simulateur
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
