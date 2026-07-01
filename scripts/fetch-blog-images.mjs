// Récupère les vraies photos Pexels pour les articles de blog, AU MOMENT DU BUILD (CI).
// L'agent cloud n'a pas accès à Pexels (réseau bloqué) : il dépose seulement, à côté de
// public/blog/<slug>.jpg (image de repli), un fichier public/blog/<slug>.pexels-query.txt
// contenant des mots-clés en anglais. Ce script (exécuté en CI, réseau OK) remplace alors
// l'image de repli par une vraie photo Pexels. En cas d'échec, l'image de repli est conservée.

import { readdir, readFile, writeFile } from 'node:fs/promises';

const DIR = 'public/blog';
const KEY = process.env.PEXELS_API_KEY;

if (!KEY) {
  console.log('PEXELS_API_KEY absente — on garde les images de repli.');
  process.exit(0);
}

const files = await readdir(DIR).catch(() => []);
const queryFiles = files.filter((f) => f.endsWith('.pexels-query.txt'));

if (queryFiles.length === 0) {
  console.log('Aucun fichier .pexels-query.txt — rien à récupérer.');
  process.exit(0);
}

for (const qf of queryFiles) {
  const slug = qf.replace('.pexels-query.txt', '');
  const query = (await readFile(`${DIR}/${qf}`, 'utf8')).trim();
  if (!query) continue;

  try {
    const res = await fetch(
      `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&orientation=landscape&per_page=10`,
      { headers: { Authorization: KEY } }
    );
    if (!res.ok) {
      console.log(`⚠️  Pexels ${res.status} pour "${slug}" — repli conservé.`);
      continue;
    }
    const data = await res.json();
    const photo = data.photos?.[0];
    if (!photo) {
      console.log(`⚠️  Aucun résultat Pexels pour "${slug}" ("${query}") — repli conservé.`);
      continue;
    }
    const imgUrl = photo.src?.large2x || photo.src?.large || photo.src?.original;
    const imgRes = await fetch(imgUrl);
    const buf = Buffer.from(await imgRes.arrayBuffer());
    if (buf.length < 10000) {
      console.log(`⚠️  Image trop petite pour "${slug}" — repli conservé.`);
      continue;
    }
    await writeFile(`${DIR}/${slug}.jpg`, buf);
    console.log(`✓ ${slug}.jpg ← Pexels (${Math.round(buf.length / 1024)} Ko, © ${photo.photographer})`);
  } catch (e) {
    console.log(`⚠️  Erreur Pexels pour "${slug}": ${e.message} — repli conservé.`);
  }
}
