import { describe, expect, it } from "vitest";
import { injectSsrPage, renderSsrPage } from "../client/src/ssr";

describe("SSR SEO出力", () => {
  it("URL固有のtitle・canonical・本文H1を初期HTMLに含める", () => {
    const { appHtml, seoHead } = renderSsrPage("/pricing");

    expect(seoHead).toContain("スリランカタクシーチャーターサービスの料金(価格)とは？ | SLTCS");
    expect(seoHead).toContain('href="https://sltcs.srilanka-charter.com/pricing"');
    expect(appHtml).toContain("<h1");
  });

  it("blogDataへ登録された記事は初期HTMLでも記事固有のSEO情報を出力する", () => {
    const { appHtml, seoHead } = renderSsrPage("/taxi-charter-basics/one-day-charter");

    expect(seoHead).toContain("スリランカで1日のタクシーチャーターをご希望の方へ | SLTCS");
    expect(seoHead).toContain(
      'href="https://sltcs.srilanka-charter.com/taxi-charter-basics/one-day-charter"'
    );
    expect(appHtml).toContain("スリランカを1日だけ専用車でめぐりたい");
  });

  it("未知URLはnoindexを含む404用の初期HTMLを返せる", () => {
    const { appHtml, seoHead } = renderSsrPage("/seo-audit-nonexistent-page-9f3c", true);

    expect(seoHead).toContain('content="noindex,nofollow"');
    expect(seoHead).toContain("404 ページが見つかりません");
    expect(appHtml).toContain("404 ページが見つかりません");
  });

  it("SSR済み本文とURL固有のheadをHTMLテンプレートへ注入できる", () => {
    const document = injectSsrPage(
      '<head><!--ssr-seo-head--></head><body><div id="root"></div></body>',
      "<main>本文</main>",
      "<title>URL固有タイトル</title>"
    );

    expect(document).toContain("<title>URL固有タイトル</title>");
    expect(document).toContain('<div id="root"><main>本文</main></div>');
  });
});
