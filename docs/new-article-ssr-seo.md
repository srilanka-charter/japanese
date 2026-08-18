# 新規記事のSSR SEO適用ルール

新しい記事は、`client/src/data/blogData.ts` の `blogArticles` に記事メタデータを登録することで、サーバー側のルート判定と初期HTMLのSEO出力対象に自動で含まれます。`BlogArticlePage.tsx` は記事データからtitle・description・canonical・OGP・Article JSON-LDを生成し、SSRがJavaScript実行前のHTMLへ出力します。

> 記事コンポーネント内で`document.title`や独自の`useEffect`によってSEOタグを操作しないでください。ページ共通の`BlogArticlePage.tsx`と`useSEO`が初期HTML・クライアント遷移の両方を管理します。

## 新規記事追加時の必須手順

| 手順 | 実施内容 | SSR SEOへの影響 |
|---|---|---|
| 1 | `pages/articles/` に記事本文コンポーネントを作成する | SSRで本文・H1を出力できる |
| 2 | `BlogArticlePage.tsx` の `ArticleContent` にslug分岐を追加する | 該当URLで記事本文を表示できる |
| 3 | `blogData.ts` にslug・title・excerpt・categorySlug・thumbnail・keywordsを登録する | URL固有のtitle・description・canonical・Article JSON-LDを初期HTMLに出力する |
| 4 | `sitemap.xml` に正規URLだけを追加する | 検索エンジンへ正規URLを案内する |
| 5 | `pnpm test` と初期HTML確認を実行する | SSR出力とルートの回帰を防ぐ |

記事固有のtitleは`blogData.ts`の`title`、メタディスクリプションは`excerpt`から生成されます。したがって、`excerpt`は検索結果向けの要約として具体性を持たせ、概ね120〜160文字を目安に記述してください。
