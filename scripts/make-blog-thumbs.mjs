// Génère des vignettes légères (WebP, 640 px de large) pour les cartes d'articles,
// à partir des images déclarées dans src/blog/articles.js.
//
// Pourquoi : les photos Pexels font ~1 900 px / 300-350 Ko alors que la carte les
// affiche en ~310 px de large. Une vignette WebP pèse ~15-30 Ko : la page /blog
// (≈50 cartes) et l'accueil chargent 10× moins d'images.
//
// Exécuté automatiquement avant `npm start` et `npm run build` (hooks prestart/prebuild).
// Les vignettes sont écrites dans public/blog/thumbs/ (ignoré par git) et régénérées
// uniquement si l'image source est plus récente. N'échoue jamais le build.

import { mkdir, readFile, stat } from 'node:fs/promises';
import path from 'node:path';

const ARTICLES_FILE = 'src/blog/articles.js';
const OUT_DIR = 'public/blog/thumbs';
const WIDTH = 640;
const HEIGHT = 420; // ratio proche de la carte (h-52 ≈ 208 px pour ~310 px de large)

let sharp;
try {
  sharp = (await import('sharp')).default;
} catch (e) {
  console.log(`⚠️  sharp indisponible (${e.message}) — pas de vignettes, les images d'origine seront utilisées.`);
  process.exit(0);
}

const source = await readFile(ARTICLES_FILE, 'utf8').catch(() => '');
// Extraction volontairement simple (pas d'import ESM du fichier React) :
// une entrée = un bloc { slug: "...", ..., image: "..." }.
const entries = [];
const re = /slug:\s*"([^"]+)"[\s\S]*?image:\s*"([^"]+)"/g;
let m;
while ((m = re.exec(source))) entries.push({ slug: m[1], image: m[2] });

if (entries.length === 0) {
  console.log('Aucun article trouvé dans src/blog/articles.js — rien à faire.');
  process.exit(0);
}

await mkdir(OUT_DIR, { recursive: true });

let made = 0;
let skipped = 0;
for (const { slug, image } of entries) {
  const src = path.join('public', image.replace(/^\//, ''));
  const dest = path.join(OUT_DIR, `${slug}.webp`);
  try {
    const srcStat = await stat(src);
    const destStat = await stat(dest).catch(() => null);
    if (destStat && destStat.mtimeMs >= srcStat.mtimeMs) {
      skipped += 1;
      continue;
    }
    await sharp(src)
      .rotate()
      .resize(WIDTH, HEIGHT, { fit: 'cover', position: 'attention' })
      .webp({ quality: 74 })
      .toFile(dest);
    made += 1;
  } catch (e) {
    console.log(`⚠️  Vignette impossible pour "${slug}" (${src}) : ${e.message}`);
  }
}
console.log(`✓ Vignettes blog : ${made} générée(s), ${skipped} à jour, ${entries.length} article(s).`);
