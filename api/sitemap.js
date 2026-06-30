// Uniquement les routes réelles et indexables.
// Exclues volontairement : les ancres (#...) qui ne sont pas des pages,
// /simulateur (iframe, bloquée par robots.txt) et /pompe-a-chaleur-classique (noindex, doublon).
const STATIC_URLS = [
  { loc: 'https://renohab.fr/', priority: '1.0', changefreq: 'weekly' },
  { loc: 'https://renohab.fr/pompe-a-chaleur', priority: '0.9', changefreq: 'weekly' },
  { loc: 'https://renohab.fr/dpe-gratuit', priority: '0.8', changefreq: 'monthly' },
  { loc: 'https://renohab.fr/blog/valorisation-immobiliere-renovation-energetique', priority: '0.6', changefreq: 'monthly' },
  { loc: 'https://renohab.fr/blog/audit-energetique-obligatoire-vente-2026', priority: '0.6', changefreq: 'monthly' },
];

const normalizeSlug = (str = '') =>
  (str || '')
    .toString()
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'produit';

const buildProductSlug = (p = {}) => normalizeSlug(p.reference || p.title || '');

const normalizeLabel = (label = '') => {
  const str = label.toString();
  const normalized = typeof str.normalize === 'function' ? str.normalize('NFD') : str;
  return normalized.replace(/[\u0300-\u036f]/g, '').trim().toLowerCase();
};

const HEADER_ALIASES = {
  title: ['titre', 'title', 'nom produit'],
  reference: ['ref', 'reference', 'code'],
  longDescription: ['descriptif', 'description longue', 'descriptif long', 'contenu produit', 'body'],
};

const normalizeAliases = Object.fromEntries(
  Object.entries(HEADER_ALIASES).map(([key, values]) => [key, values.map(normalizeLabel)])
);

function buildColumnIndex(cols) {
  const index = {};
  Object.entries(normalizeAliases).forEach(([key, aliases]) => {
    const idx = cols.findIndex((label) => aliases.includes(label));
    if (idx !== -1) index[key] = idx;
  });
  return index;
}

function formatCell(cell) {
  if (!cell) return '';
  if (cell.v !== undefined && cell.v !== null) {
    return String(cell.v);
  }
  if (cell.f) {
    const imageMatch = cell.f.match(/=IMAGE\("([^"]+)"/i);
    if (imageMatch) return imageMatch[1];
    const hyperlinkMatch = cell.f.match(/=HYPERLINK\("([^"]+)"/i);
    if (hyperlinkMatch) return hyperlinkMatch[1];
    return cell.f;
  }
  return '';
}

function mapRow(row, columnIndex) {
  if (!row?.c) return null;
  const pick = (key) => {
    const idx = columnIndex[key];
    if (idx === undefined) return '';
    return formatCell(row.c[idx]);
  };

  const title = pick('title');
  if (!title) return null;

  return {
    title,
    reference: pick('reference'),
  };
}

function parseGviz(raw) {
  const start = raw.indexOf('{');
  const end = raw.lastIndexOf('}');
  if (start === -1 || end === -1) throw new Error('Réponse Google Sheet inattendue');
  const json = JSON.parse(raw.slice(start, end + 1));
  if (json.status !== 'ok') throw new Error('La Google Sheet renvoie une erreur');
  const cols = (json.table?.cols || []).map((col) => normalizeLabel(col.label || col.id || ''));
  const rows = json.table?.rows || [];
  if (!cols.length) return [];
  const columnIndex = buildColumnIndex(cols);
  return rows.map((row) => mapRow(row, columnIndex)).filter(Boolean);
}

function parseTsv(raw) {
  const text = raw.replace(/^\uFEFF/, '').trim();
  if (!text) return [];
  const lines = text.split(/\r?\n/).filter(Boolean);
  if (!lines.length) return [];
  const headers = lines[0].split('\t').map((label) => normalizeLabel(label));
  const columnIndex = buildColumnIndex(headers);
  return lines
    .slice(1)
    .map((line) => line.split('\t'))
    .map((cells) => {
      const pick = (key) => {
        const idx = columnIndex[key];
        if (idx === undefined) return '';
        return cells[idx] ?? '';
      };
      const title = pick('title');
      if (!title) return null;
      return { title, reference: pick('reference') };
    })
    .filter(Boolean);
}

function normalizeSheetUrl(url) {
  if (!url) return '';
  let parsed;
  try {
    parsed = new URL(url);
  } catch {
    return url;
  }

  if (/\/gviz\/tq/.test(parsed.pathname)) {
    parsed.searchParams.set('tqx', parsed.searchParams.get('tqx') || 'out:json');
    return parsed.toString();
  }

  if (/\/pubhtml/.test(parsed.pathname)) {
    parsed.pathname = parsed.pathname.replace('/pubhtml', '/pub');
    parsed.searchParams.set('output', 'tsv');
    if (!parsed.searchParams.has('single')) {
      parsed.searchParams.set('single', 'true');
    }
    return parsed.toString();
  }

  if (/\/spreadsheets\/d\/[^/]+\/edit/.test(parsed.pathname)) {
    const match = parsed.pathname.match(/\/spreadsheets\/d\/([^/]+)/);
    const sheetId = match ? match[1] : '';
    const gid = parsed.searchParams.get('gid') || parsed.hash.replace('#gid=', '');
    parsed.pathname = `/spreadsheets/d/${sheetId}/gviz/tq`;
    parsed.search = '';
    if (gid) parsed.searchParams.set('gid', gid);
    parsed.searchParams.set('tqx', 'out:json');
    return parsed.toString();
  }

  return url;
}

async function fetchProducts(sheetUrl) {
  const normalizedUrl = normalizeSheetUrl(sheetUrl);
  if (!normalizedUrl) return [];
  const res = await fetch(normalizedUrl);
  if (!res.ok) throw new Error('Impossible de charger la Google Sheet');
  const raw = await res.text();
  try {
    return parseGviz(raw);
  } catch {
    return parseTsv(raw);
  }
}

function buildXml(urls) {
  const urlset = urls
    .map(
      (item) => `
  <url>
    <loc>${item.loc}</loc>
    ${item.lastmod ? `<lastmod>${item.lastmod}</lastmod>` : ''}
    ${item.changefreq ? `<changefreq>${item.changefreq}</changefreq>` : ''}
    ${item.priority ? `<priority>${item.priority}</priority>` : ''}
  </url>`
    )
    .join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlset}
</urlset>`;
}

export default async function handler(req, res) {
  const baseUrls = STATIC_URLS.map((u) => ({
    ...u,
    lastmod: u.lastmod || new Date().toISOString().slice(0, 10),
  }));

  const sheetUrl = process.env.REACT_APP_PAC_PRODUCTS_SHEET_URL || '';
  const today = new Date().toISOString().slice(0, 10);
  let productUrls = [];

  try {
    const products = await fetchProducts(sheetUrl);
    // Déduplication par slug (deux lignes peuvent produire le même slug).
    const seen = new Set();
    productUrls = products
      .map((p) => buildProductSlug(p))
      .filter((slug) => slug && slug !== 'produit' && !seen.has(slug) && seen.add(slug))
      .map((slug) => ({
        loc: `https://renohab.fr/pompe-a-chaleur/${slug}`,
        lastmod: today,
        changefreq: 'weekly',
        priority: '0.7',
      }));
  } catch (err) {
    console.error('Sitemap: impossible de charger la sheet produits', err);
  }

  const xml = buildXml([...baseUrls, ...productUrls]);
  res.setHeader('Content-Type', 'application/xml');
  // Cache CDN : régénéré au plus une fois par heure, sert l'ancienne version pendant le rafraîchissement.
  res.setHeader('Cache-Control', 'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400');
  res.status(200).send(xml);
}
