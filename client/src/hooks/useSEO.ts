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
}: SEOOptions) {
  useEffect(() => {
    const canonicalUrl = `${SITE_URL}${path}`;

    // ── title ──────────────────────────────────────────────
    document.title = title;

    // ── meta description ───────────────────────────────────
    let descEl = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!descEl) {
      descEl = document.createElement("meta");
      descEl.name = "description";
      document.head.appendChild(descEl);
    }
    descEl.setAttribute("content", description);

    // ── OGP ────────────────────────────────────────────────
    const setMeta = (selector: string, value: string) => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute("content", value);
    };
    setMeta('meta[property="og:title"]', title);
    setMeta('meta[property="og:description"]', description);
    setMeta('meta[property="og:url"]', canonicalUrl);
    setMeta('meta[property="og:image"]', ogImage);
    setMeta('meta[name="twitter:title"]', title);
    setMeta('meta[name="twitter:description"]', description);

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
      setMeta('meta[property="og:title"]', DEFAULT_TITLE);
      setMeta('meta[property="og:description"]', DEFAULT_DESC);
      setMeta('meta[property="og:url"]', SITE_URL + "/");
      setMeta('meta[property="og:image"]', DEFAULT_OG_IMAGE);
      setMeta('meta[name="twitter:title"]', DEFAULT_TITLE);
      setMeta('meta[name="twitter:description"]', DEFAULT_DESC);
      document.querySelector('link[rel="canonical"]')?.remove();
      scriptIds.forEach((id) => document.getElementById(id)?.remove());
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, description, path]);
}
