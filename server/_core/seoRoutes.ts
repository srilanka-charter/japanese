import { blogArticles, blogCategories } from "../../client/src/data/blogData";

const staticRoutes = new Set([
  "/",
  "/vehicles",
  "/course/3-4days",
  "/course/4-5days",
  "/course/5-6days",
  "/thanks",
  "/another",
  "/privacy",
  "/terms",
  "/pricing",
  "/faq",
  "/sigiriya",
  "/kandy",
  "/galle",
  "/nuwara-eliya",
  "/activity",
  "/safari",
  "/whale-watching",
  "/astrology",
  "/travel-planning",
  "/taxi-charter-basics",
]);

const staticRedirects = new Map<string, string>([
  ["/plan", "/pricing"],
]);

export function normalizeSeoPath(pathname: string): string {
  if (!pathname || pathname === "/") return "/";
  const normalized = pathname.replace(/\/+$/, "");
  return normalized || "/";
}

export function getCanonicalRedirect(pathname: string): string | null {
  const path = normalizeSeoPath(pathname);
  const staticRedirect = staticRedirects.get(path);
  if (staticRedirect) return staticRedirect;

  const article = blogArticles.find(
    candidate => path === `/${candidate.categorySlug}/${candidate.slug}`
  );
  return article?.externalHref ?? null;
}

export function isKnownSiteRoute(pathname: string): boolean {
  const path = normalizeSeoPath(pathname);

  if (staticRoutes.has(path)) return true;
  if (blogCategories.some(category => path === `/${category.slug}`)) return true;

  return blogArticles.some(
    article => path === `/${article.categorySlug}/${article.slug}`
  );
}
