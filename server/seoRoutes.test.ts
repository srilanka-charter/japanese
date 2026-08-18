import { describe, expect, it } from "vitest";
import { getCanonicalRedirect, isKnownSiteRoute, normalizeSeoPath } from "./_core/seoRoutes";

describe("SEOルート制御", () => {
  it("既知の公開ページだけをSPAとして許可する", () => {
    expect(isKnownSiteRoute("/pricing")).toBe(true);
    expect(isKnownSiteRoute("/taxi-charter-basics/one-day-charter")).toBe(true);
    expect(isKnownSiteRoute("/seo-audit-nonexistent-page-9f3c")).toBe(false);
    expect(isKnownSiteRoute("/travel-planning/not-a-real-article")).toBe(false);
  });

  it("末尾スラッシュを正規化する", () => {
    expect(normalizeSeoPath("/pricing/")).toBe("/pricing");
    expect(normalizeSeoPath("/")).toBe("/");
  });

  it("重複する記事URLを正規ページへ301転送できる", () => {
    expect(getCanonicalRedirect("/sightseeing-guide/sigiriya-guide")).toBe("/sigiriya");
    expect(getCanonicalRedirect("/model-course/course-3-4days")).toBe("/course/3-4days");
    expect(getCanonicalRedirect("/pricing")).toBeNull();
  });
});
