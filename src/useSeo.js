import { useEffect } from 'react';

const SITE_URL = 'https://renohab.fr';
const SITE_NAME = 'RenoHab';
const DEFAULT_IMAGE = `${SITE_URL}/logo192-renohab.png`;

/**
 * Met à jour dynamiquement les balises SEO de la page courante (SPA).
 * Couvre : <title>, meta description, canonical, Open Graph, Twitter Card,
 * et l'indexation (noindex éventuel). Indispensable ici car chaque route
 * partagerait sinon les mêmes balises que index.html.
 */
export default function useSeo({
  title,
  description,
  path = '',
  image = DEFAULT_IMAGE,
  type = 'website',
  noindex = false,
  jsonLd = null,
} = {}) {
  useEffect(() => {
    const canonical = `${SITE_URL}${path}`;

    const upsertMeta = (attr, key, content) => {
      if (content == null) return;
      let el = document.head.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    const upsertLink = (rel, href) => {
      let el = document.head.querySelector(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        document.head.appendChild(el);
      }
      el.setAttribute('href', href);
    };

    if (title) document.title = title;
    upsertMeta('name', 'description', description);
    upsertLink('canonical', canonical);

    // Robots : indexation par défaut, sinon noindex pour éviter le contenu dupliqué.
    upsertMeta(
      'name',
      'robots',
      noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large'
    );

    // Open Graph
    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', canonical);
    upsertMeta('property', 'og:type', type);
    upsertMeta('property', 'og:image', image);
    upsertMeta('property', 'og:site_name', SITE_NAME);
    upsertMeta('property', 'og:locale', 'fr_FR');

    // Twitter Card
    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', title);
    upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:image', image);

    // JSON-LD spécifique à la page (injecté via un script dédié et géré).
    let scriptEl = null;
    if (jsonLd) {
      scriptEl = document.createElement('script');
      scriptEl.type = 'application/ld+json';
      scriptEl.setAttribute('data-seo-jsonld', path || '/');
      scriptEl.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(scriptEl);
    }

    return () => {
      if (scriptEl && scriptEl.parentNode) {
        scriptEl.parentNode.removeChild(scriptEl);
      }
    };
  }, [title, description, path, image, type, noindex, jsonLd]);
}
