import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import superjson from "superjson";
import App from "./App";
import { trpc } from "./lib/trpc";
import type { SEOOptions } from "./hooks/useSEO";

const SITE_URL = "https://sltcs.srilanka-charter.com";
const DEFAULT_OG_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/U5GFZm3GAbGuGjN2pLu33k/sigiriya_rock_hero-WvSdEsM6SGKw7D3K9DXp8D.webp";

const notFoundSeo: SEOOptions = {
  title: "404 ページが見つかりません｜SLTCS スリランカタクシーチャーターサービス",
  description: "お探しのページは見つかりませんでした。トップページに戻ってください。",
  path: "/404",
  noindex: true,
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function getSeoHead(options: SEOOptions): string {
  const canonicalUrl = `${SITE_URL}${options.path}`;
  const ogImage = options.ogImage ?? DEFAULT_OG_IMAGE;
  const robots = options.noindex ? "noindex,nofollow" : "index,follow";
  const jsonLd = (options.jsonLdList ?? [])
    .map((data, index) => {
      const safeJson = JSON.stringify(data).replace(/</g, "\\u003c");
      return `<script id="${escapeHtml(options.jsonLdIdPrefix ?? "page")}-jsonld-${index}" type="application/ld+json">${safeJson}</script>`;
    })
    .join("\n    ");
  const hreflang = (options.hreflangList ?? [])
    .map(
      entry =>
        `<link rel="alternate" hreflang="${escapeHtml(entry.hreflang)}" href="${escapeHtml(entry.href)}" />`
    )
    .join("\n    ");

  return `
    <title>${escapeHtml(options.title)}</title>
    <meta name="description" content="${escapeHtml(options.description)}" />
    <meta name="robots" content="${robots}" />
    <link rel="canonical" href="${escapeHtml(canonicalUrl)}" />
    ${hreflang}
    <meta property="og:type" content="website" />
    <meta property="og:title" content="${escapeHtml(options.title)}" />
    <meta property="og:description" content="${escapeHtml(options.description)}" />
    <meta property="og:url" content="${escapeHtml(canonicalUrl)}" />
    <meta property="og:locale" content="ja_JP" />
    <meta property="og:image" content="${escapeHtml(ogImage)}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(options.title)}" />
    <meta name="twitter:description" content="${escapeHtml(options.description)}" />
    <meta name="twitter:image" content="${escapeHtml(ogImage)}" />
    ${jsonLd}`;
}

export function renderSsrPage(pathname: string, isNotFound = false) {
  let capturedSeo: SEOOptions | null = null;
  const queryClient = new QueryClient();
  const trpcClient = trpc.createClient({
    links: [
      httpBatchLink({
        url: `${SITE_URL}/api/trpc`,
        transformer: superjson,
      }),
    ],
  });
  const appHtml = renderToString(
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <Router ssrPath={pathname}>
          <App ssrSeoCapture={options => {
            capturedSeo = options;
          }} />
        </Router>
      </QueryClientProvider>
    </trpc.Provider>
  );

  const seo = isNotFound ? notFoundSeo : capturedSeo ?? notFoundSeo;
  return { appHtml, seoHead: getSeoHead(seo) };
}

export function injectSsrPage(template: string, appHtml: string, seoHead: string): string {
  return template
    .replace("<!--ssr-seo-head-->", seoHead)
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
}
