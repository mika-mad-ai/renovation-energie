import { useEffect, useState } from "react";

const HEADER_ALIASES = {
  title: ["titre", "title", "nom produit"],
  reference: ["ref", "reference", "code"],
  description: ["description"],
  longDescription: ["descriptif", "description longue", "descriptif long", "contenu produit", "body"],
  logo: ["logo marque", "logo", "brand logo"],
  brand: ["marque", "marque produit", "brand", "nom marque"],
  rating: ["etoile", "étoile", "etoiles", "étoiles", "rating", "stars"],
  cooling: [
    "description - capacite de refroidissement",
    "description - capacité de refroidissement",
    "description - refroidissement",
    "capacite de refroidissement",
    "capacité de refroidissement",
    "refroidissement",
    "cooling",
  ],
  heating: [
    "description - capacite de chauffage",
    "description - capacité de chauffage",
    "description - chauffage",
    "capacite de chauffage",
    "capacité de chauffage",
    "chauffage",
    "heating",
  ],
  fluid: [
    "description - fluide de refroidissement",
    "description - fluide",
    "fluide de refroidissement",
    "fluide",
    "refrigerant",
    "gaz",
  ],
  energyClass: [
    "classification energetique",
    "classification énergétique",
    "classe energie",
    "classe énergétique",
    "description - classification energetique",
  ],
  photo: ["photo", "visuel", "image", "url image"],
  basePrice: ["prix de base", "prix public", "prix avant financement"],
  financedPrice: ["prix post financement", "prix net", "prix aides", "prix maprimerenov"],
};

const normalizeLabel = (label = "") => {
  const str = label.toString();
  const normalized = typeof str.normalize === "function" ? str.normalize("NFD") : str;
  return normalized.replace(/[\u0300-\u036f]/g, "").trim().toLowerCase();
};

const normalizeAliases = Object.fromEntries(
  Object.entries(HEADER_ALIASES).map(([key, values]) => [key, values.map(normalizeLabel)])
);

export function useSheetProducts(sheetUrl) {
  const normalizedUrl = normalizeSheetUrl(sheetUrl);
  const [state, setState] = useState({ products: [], loading: Boolean(normalizedUrl), error: null });

  useEffect(() => {
    if (!normalizedUrl) {
      setState({ products: [], loading: false, error: null });
      return;
    }

    let isMounted = true;
    const controller = new AbortController();

    async function load() {
      setState((prev) => ({ ...prev, loading: true, error: null }));
      try {
        const res = await fetch(normalizedUrl, { signal: controller.signal });
        if (!res.ok) throw new Error("Impossible de charger la Google Sheet");
        const raw = await res.text();
        const products = parseSheet(raw);
        if (!isMounted) return;
        setState({ products, loading: false, error: null });
      } catch (err) {
        if (!isMounted || err.name === "AbortError") return;
        setState({ products: [], loading: false, error: err });
      }
    }

    load();
    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [normalizedUrl]);

  return state;
}

function parseSheet(raw) {
  try {
    return parseGviz(raw);
  } catch (err) {
    try {
      return parseTsv(raw);
    } catch (tsvError) {
      throw err;
    }
  }
}

function parseGviz(raw) {
  const json = extractPayload(raw);
  const cols = (json.table?.cols || []).map((col) => normalizeLabel(col.label || col.id || ""));
  const rows = json.table?.rows || [];
  if (!cols.length) return [];

  const columnIndex = buildColumnIndex(cols);
  return rows
    .map((row) => mapRow(row, columnIndex))
    .filter(Boolean);
}

function parseTsv(raw) {
  const text = raw.replace(/^\uFEFF/, "").trim();
  if (!text) return [];
  const lines = text.split(/\r?\n/).filter(Boolean);
  if (!lines.length) return [];
  const headers = lines[0].split("\t").map((label) => normalizeLabel(label));
  const columnIndex = buildColumnIndex(headers);

  return lines
    .slice(1)
    .map((line) => line.split("\t"))
    .map((cells) => mapCells(cells, columnIndex))
    .filter(Boolean);
}

function mapCells(cells, columnIndex) {
  const pick = (key) => {
    const idx = columnIndex[key];
    if (idx === undefined) return "";
    return cells[idx] ?? "";
  };

  const title = pick("title");
  if (!title) return null;

  return {
    title,
    reference: pick("reference"),
    brand: pick("brand"),
    description: pick("description"),
    longDescription: pick("longDescription"),
    logo: pick("logo"),
    rating: pick("rating"),
    cooling: pick("cooling"),
    heating: pick("heating"),
    fluid: pick("fluid"),
    energyClass: pick("energyClass"),
    photo: pick("photo"),
    basePrice: pick("basePrice"),
    financedPrice: pick("financedPrice"),
  };
}

function extractPayload(text) {
  const start = text.indexOf("{");
  const end = text.lastIndexOf("}");
  if (start === -1 || end === -1) throw new Error("Réponse Google Sheet inattendue");
  const json = JSON.parse(text.slice(start, end + 1));
  if (json.status !== "ok") throw new Error("La Google Sheet renvoie une erreur");
  return json;
}

function buildColumnIndex(cols) {
  const index = {};
  Object.entries(normalizeAliases).forEach(([key, aliases]) => {
    const idx = cols.findIndex((label) => aliases.includes(label));
    if (idx !== -1) index[key] = idx;
  });
  return index;
}

function mapRow(row, columnIndex) {
  if (!row?.c) return null;
  const pick = (key) => {
    const idx = columnIndex[key];
    if (idx === undefined) return "";
    return formatCell(row.c[idx]);
  };

  const title = pick("title");
  if (!title) return null;

  return {
    title,
    reference: pick("reference"),
    brand: pick("brand"),
    description: pick("description"),
    longDescription: pick("longDescription"),
    logo: pick("logo"),
    rating: pick("rating"),
    cooling: pick("cooling"),
    heating: pick("heating"),
    fluid: pick("fluid"),
    energyClass: pick("energyClass"),
    photo: pick("photo"),
    basePrice: pick("basePrice"),
    financedPrice: pick("financedPrice"),
  };
}

function formatCell(cell) {
  if (!cell) return "";
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
  return "";
}

function normalizeSheetUrl(url) {
  if (!url) return "";
  let parsed;
  try {
    parsed = new URL(url);
  } catch {
    return url;
  }

  if (/\/gviz\/tq/.test(parsed.pathname)) {
    parsed.searchParams.set("tqx", parsed.searchParams.get("tqx") || "out:json");
    return parsed.toString();
  }

  if (/\/pubhtml/.test(parsed.pathname)) {
    parsed.pathname = parsed.pathname.replace("/pubhtml", "/pub");
    parsed.searchParams.set("output", "tsv");
    if (!parsed.searchParams.has("single")) {
      parsed.searchParams.set("single", "true");
    }
    return parsed.toString();
  }

  if (/\/spreadsheets\/d\/[^/]+\/edit/.test(parsed.pathname)) {
    const match = parsed.pathname.match(/\/spreadsheets\/d\/([^/]+)/);
    const sheetId = match ? match[1] : "";
    const gid = parsed.searchParams.get("gid") || parsed.hash.replace("#gid=", "");
    parsed.pathname = `/spreadsheets/d/${sheetId}/gviz/tq`;
    parsed.search = "";
    if (gid) parsed.searchParams.set("gid", gid);
    parsed.searchParams.set("tqx", "out:json");
    return parsed.toString();
  }

  return url;
}
