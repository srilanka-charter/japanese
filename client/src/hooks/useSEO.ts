import { useEffect } from "react";

const DEFAULT_TITLE =
  "スリランカタクシーチャーターならSLTCS｜日本語対応の専用車で自由に周遊";
const DEFAULT_DESC =
  "スリランカタクシーチャーターならSLTCS。日本語対応の専用車・カーチャーターで、シーギリヤ・キャンディ・ヤラなどスリランカ全土を自由に周遊。政府公認ドライバーによる完全プライベートチャーターをご提供します。";
const SITE_URL = "https://sltcs.srilanka-charter.com";
const DEFAULT_OG_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/U5GFZm3GAbGuGjN2pLu33k/sigiriya_rock_hero-WvSdEsM6SGKw7D3K9DXp8D.webp";

export interface SEOOptions {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  /** JSON-LD 構造化データの配列 */
  jsonLdList?: object[];
  /** JSON-LD スクリプトに付与する一意のIDプレフィックス */
  jsonLdIdPrefix?: string;
  /** true の場合、robots meta に noindex,nofollow を設定 */
  noindex?: boolean;
}

/** meta要素を取得または作成するヘルパー */
function getOrCreateMeta(selector: string, attrName: string, attrValue: string): HTMLMetaElement {
  let el = document.querySelector(selector) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attrName, attrValue);
    document.head.appendChild(el);
  }
  return el;
}

/**
 * ページごとの SEO メタデータを管理するカスタムフック。
 * title / meta description / OGP / canonical / JSON-LD を設定し、
 * アンマウント時にデフォルト値へ復元する。
 */
export function useSEO({
  title,
  description,
  path,
  ogImage = DEFAULT_OG_IMAGE,
  jsonLdList = [],
  jsonLdIdPrefix = "page",
  noindex = false,
}: SEOOptions) {
  useEffect(() => {
    const canonicalUrl = `${SITE_URL}${path}`;

    // ── title ──────────────────────────────────────────────
    document.title = title;

    // ── meta description ───────────────────────────────────
    const descEl = getOrCreateMeta('meta[name="description"]', "name", "description");
    descEl.setAttribute("content", description);

    // ── OGP ────────────────────────────────────────────────
    const ogTitleEl = getOrCreateMeta('meta[property="og:title"]', "property", "og:title");
    ogTitleEl.setAttribute("content", title);

    const ogDescEl = getOrCreateMeta('meta[property="og:description"]', "property", "og:description");
    ogDescEl.setAttribute("content", description);

    const ogUrlEl = getOrCreateMeta('meta[property="og:url"]', "property", "og:url");
    ogUrlEl.setAttribute("content", canonicalUrl);

    const ogImageEl = getOrCreateMeta('meta[property="og:image"]', "property", "og:image");
    ogImageEl.setAttribute("content", ogImage);

    // ── Twitter Card ───────────────────────────────────────
    const twTitleEl = getOrCreateMeta('meta[name="twitter:title"]', "name", "twitter:title");
    twTitleEl.setAttribute("content", title);

    const twDescEl = getOrCreateMeta('meta[name="twitter:description"]', "name", "twitter:description");
    twDescEl.setAttribute("content", description);

    const twImageEl = getOrCreateMeta('meta[name="twitter:image"]', "name", "twitter:image");
    twImageEl.setAttribute("content", ogImage);

    // ── noindex ──────────────────────────────────────────────
    const robotsMeta = getOrCreateMeta('meta[name="robots"]', "name", "robots");
    robotsMeta.setAttribute("content", noindex ? "noindex,nofollow" : "index,follow");

    // ── canonical ──────────────────────────────────────────
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    // ── JSON-LD ────────────────────────────────────────────
    const scriptIds: string[] = [];
    jsonLdList.forEach((data, i) => {
      const id = `${jsonLdIdPrefix}-jsonld-${i}`;
      scriptIds.push(id);
      // 既存スクリプトを削除してから再追加（HMR 対策）
      document.getElementById(id)?.remove();
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = id;
      script.textContent = JSON.stringify(data);
      document.head.appendChild(script);
    });

    // ── クリーンアップ ─────────────────────────────────────
    return () => {
      document.title = DEFAULT_TITLE;
      const d = document.querySelector('meta[name="description"]');
      if (d) d.setAttribute("content", DEFAULT_DESC);
      const ogT = document.querySelector('meta[property="og:title"]');
      if (ogT) ogT.setAttribute("content", DEFAULT_TITLE);
      const ogD = document.querySelector('meta[property="og:description"]');
      if (ogD) ogD.setAttribute("content", DEFAULT_DESC);
      const ogU = document.querySelector('meta[property="og:url"]');
      if (ogU) ogU.setAttribute("content", SITE_URL + "/");
      const ogI = document.querySelector('meta[property="og:image"]');
      if (ogI) ogI.setAttribute("content", DEFAULT_OG_IMAGE);
      const twT = document.querySelector('meta[name="twitter:title"]');
      if (twT) twT.setAttribute("content", DEFAULT_TITLE);
      const twD = document.querySelector('meta[name="twitter:description"]');
      if (twD) twD.setAttribute("content", DEFAULT_DESC);
      const twI = document.querySelector('meta[name="twitter:image"]');
      if (twI) twI.setAttribute("content", DEFAULT_OG_IMAGE);
      const canonicalEl = document.querySelector('link[rel="canonical"]');
      if (canonicalEl) canonicalEl.setAttribute("href", SITE_URL + "/");
      scriptIds.forEach((id) => document.getElementById(id)?.remove());
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, description, path, ogImage]);
}
