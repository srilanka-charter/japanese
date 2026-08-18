import { readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { getCanonicalRedirect, isKnownSiteRoute } from "./_core/seoRoutes";

const SITE_ORIGIN = "https://sltcs.srilanka-charter.com";
const SITEMAP_PATH = path.resolve(process.cwd(), "client/public/sitemap.xml");

function getSitemapPaths() {
  const xml = readFileSync(SITEMAP_PATH, "utf8");
  return [...xml.matchAll(/<loc>(https:\/\/sltcs\.srilanka-charter\.com[^<]*)<\/loc>/g)].map(
    ([, url]) => new URL(url).pathname
  );
}

describe("sitemap.xml", () => {
  it("is valid XML with a unique list of canonical, known public URLs", () => {
    const xml = readFileSync(SITEMAP_PATH, "utf8");
    const paths = getSitemapPaths();

    expect(xml).toMatch(/^<\?xml version="1\.0" encoding="UTF-8"\?>\n<urlset xmlns="http:\/\/www\.sitemaps\.org\/schemas\/sitemap\/0\.9">/);
    expect(xml.trimEnd()).toMatch(/<\/urlset>$/);
    expect(paths).toHaveLength(40);
    expect(new Set(paths).size).toBe(paths.length);

    for (const pagePath of paths) {
      expect(isKnownSiteRoute(pagePath), `${pagePath} must be a known route`).toBe(true);
      expect(getCanonicalRedirect(pagePath), `${pagePath} must not redirect`).toBeNull();
    }
  });

  it("does not include noindex or non-existent URLs", () => {
    const paths = getSitemapPaths();
    const excludedPaths = ["/thanks", "/another", "/privacy", "/terms", "/404", "/contact", "/tea-train"];

    for (const pagePath of excludedPaths) {
      expect(paths).not.toContain(pagePath);
    }
  });
});
