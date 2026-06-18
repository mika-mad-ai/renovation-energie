export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // ✅ Récupère l’URL depuis l’ENV (Vercel Settings → Environment Variables)
  const webhookUrl = process.env.SHEET_WEBHOOK_URL;

  if (!webhookUrl) {
    console.error('Missing SHEET_WEBHOOK_URL env var');
    return res.status(500).json({ error: 'Server not configured' });
  }

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      // On forward exactement le body reçu côté front (Home / PAC)
      body: JSON.stringify(req.body),
      // Pas obligatoire, mais évite des caches/proxies bizarres
      cache: 'no-store',
    });

    const text = await response.text(); // Apps Script renvoie souvent du texte
    // Tu peux aussi tenter JSON.parse(text) si tu veux normaliser
    return res.status(200).send(text);
  } catch (error) {
    console.error('Erreur proxy :', error);
    return res.status(500).json({ error: "Erreur lors de l'appel du script Google Apps" });
  }
}
