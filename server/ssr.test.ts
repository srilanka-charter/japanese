import { describe, expect, it } from "vitest";
import { injectSsrPage, renderSsrPage } from "../client/src/ssr";

describe("SSR SEO出力", () => {
  it("URL固有のtitle・canonical・本文H1を初期HTMLに含める", () => {
    const { appHtml, seoHead } = renderSsrPage("/pricing");

    expect(seoHead).toContain("スリノワの料金(価格)とは？ | SriNowa");
    expect(seoHead).toContain('href="https://ja.srinowa.com/pricing"');
    expect(appHtml).toContain("<h1");
  });

  it("blogDataへ登録された記事は初期HTMLでも記事固有のSEO情報を出力する", () => {
    const { appHtml, seoHead } = renderSsrPage("/taxi-charter-basics/one-day-charter");

    expect(seoHead).toContain("スリランカで1日のタクシーチャーターをご希望の方へ | SriNowa");
    expect(seoHead).toContain(
      'href="https://ja.srinowa.com/taxi-charter-basics/one-day-charter"'
    );
    expect(appHtml).toContain("スリランカを1日だけ専用車でめぐりたい");
  });

  it("対応が確認済みの日本語ページに相互hreflangを出力する", () => {
    const expectedByPath = {
      "/": [
        'hreflang="ja" href="https://ja.srinowa.com/"',
        'hreflang="en" href="https://srinowa.com/"',
        'hreflang="de" href="https://de.srinowa.com/"',
        'hreflang="fr" href="https://fr.srinowa.com/"',
        'hreflang="es" href="https://es.srinowa.com/"',
        'hreflang="x-default" href="https://srinowa.com/"',
      ],
      "/pricing": [
        'hreflang="ja" href="https://ja.srinowa.com/pricing"',
        'hreflang="en" href="https://srinowa.com/price"',
        'hreflang="de" href="https://de.srinowa.com/price"',
        'hreflang="fr" href="https://fr.srinowa.com/price"',
        'hreflang="es" href="https://es.srinowa.com/price"',
        'hreflang="x-default" href="https://srinowa.com/price"',
      ],
      "/faq": [
        'hreflang="ja" href="https://ja.srinowa.com/faq"',
        'hreflang="en" href="https://srinowa.com/faq"',
        'hreflang="de" href="https://de.srinowa.com/faq"',
        'hreflang="fr" href="https://fr.srinowa.com/faq"',
        'hreflang="es" href="https://es.srinowa.com/faq"',
        'hreflang="x-default" href="https://srinowa.com/faq"',
      ],
      "/vehicles": [
        'hreflang="ja" href="https://ja.srinowa.com/vehicles"',
        'hreflang="en" href="https://srinowa.com/vehicles"',
        'hreflang="x-default" href="https://srinowa.com/vehicles"',
      ],
    } as const;

    for (const [path, expectedLinks] of Object.entries(expectedByPath)) {
      const { seoHead } = renderSsrPage(path);
      expectedLinks.forEach(link => expect(seoHead).toContain(link));
    }
  });

  it("未知URLはnoindexを含む404用の初期HTMLを返せる", () => {
    const { appHtml, seoHead } = renderSsrPage("/seo-audit-nonexistent-page-9f3c", true);

    expect(seoHead).toContain('content="noindex,nofollow"');
    expect(seoHead).toContain("404 ページが見つかりません");
    expect(appHtml).toContain("404 ページが見つかりません");
  });

  it("利用規約第2条の更新済み定義を初期HTMLに含める", () => {
    const { appHtml, seoHead } = renderSsrPage("/terms");

    expect(seoHead).toContain('content="noindex,nofollow"');
    expect(appHtml).toContain("「運営会社」");
    expect(appHtml).toContain("タクシーチャータードライバーとのオンラインマッチングサービス");
    expect(appHtml).toContain("現地のTour Operatorが手配するドライバー");
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
