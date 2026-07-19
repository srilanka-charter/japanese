export interface BlogArticle {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categorySlug: string;
  publishedAt: string;
  thumbnail: string;
  readingTime: number;
  /** SEOキーワード（JSON-LD keywords フィールドに使用） */
  keywords?: string[];
  /** 外部ページへの直接リンク（設定時はブログ記事詳細ではなくこのURLへ遷移） */
  externalHref?: string;
}

export interface BlogCategory {
  slug: string;
  label: string;
  description: string;
}

export const blogCategories: BlogCategory[] = [
  {
    slug: "model-course",
    label: "モデルコース",
    description: "3泊4日・4泊5日など日数別のスリランカ観光モデルコースを専用車チャーターで紹介します。",
  },
  {
    slug: "taxi-charter-basics",
    label: "タクシーチャーターの基礎",
    description: "スリランカのタクシーチャーターとは何か、料金・予約方法・専用車のメリットをわかりやすく解説します。",
  },
  {
    slug: "sightseeing-guide",
    label: "観光地ガイド",
    description: "シーギリヤ・キャンディ・ゴール・ヌワラエリヤなどスリランカ主要観光地の見どころ・アクセス・所要時間を解説します。",
  },
  {
    slug: "activity",
    label: "アクティビティ",
    description: "サファリ・ホエールウォッチング・占星術・アーユルヴェーダなど、スリランカで体験できるアクティビティを紹介します。",
  },
  {
    slug: "travel-by-type",
    label: "属性別旅行",
    description: "家族旅行・一人旅・シニア旅行など、旅のスタイル別にスリランカ専用車チャーターの活用法を紹介します。",
  },
  {
    slug: "travel-planning",
    label: "旅行計画・準備",
    description: "スリランカ旅行の費用・治安・持ち物・日数など、計画段階で知っておきたい情報をまとめます。",
  },
  {
    slug: "theme-travel",
    label: "テーマ旅行",
    description: "アーユルヴェーダ・ジェフリーバワ建築など、テーマを絞ったスリランカ旅行の楽しみ方を紹介します。",
  },
  {
    slug: "hotel",
    label: "ホテル",
    description: "シーギリヤ・キャンディ・コロンボなど、スリランカ各地のおすすめホテルを内装・外装写真とともに詳しく紹介します。",
  },
];

export const blogArticles: BlogArticle[] = [
  // ── モデルコース ──────────────────────────────────────────────────────────
  {
    slug: "course-3-4days",
    title: "スリランカ 3泊4日 モデルコース｜タクシーチャーターで巡る短期周遊プラン",
    excerpt:
      "シーギリヤ・キャンディ・ヌワラエリヤを3泊4日でぎゅっと凝縮。紅茶列車や世界遺産を効率よく楽しむ専用車チャーターのモデルコースをご紹介します。",
    category: "モデルコース",
    categorySlug: "model-course",
    publishedAt: "2026-06-01",
    thumbnail:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/U5GFZm3GAbGuGjN2pLu33k/blog-course-3-4days-QkoH7BFAYewytqQgdFSgNm.webp",
    readingTime: 6,
    keywords: ["スリランカ 3泊4日", "スリランカ モデルコース", "スリランカ 旅行 短期", "タクシーチャーター モデルコース", "スリランカ シーギリヤ キャンディ"],
    externalHref: "/course/3-4days",
  },
  {
    slug: "course-4-5days",
    title: "スリランカ 4泊5日 モデルコース｜タクシーチャーターで巡る王道周遊プラン",
    excerpt:
      "スリランカ旅行の王道コース。シーギリヤ・キャンディ・ゴール・ヌワラエリヤを4泊5日でゆったり巡る専用車チャーターのモデルプランです。",
    category: "モデルコース",
    categorySlug: "model-course",
    publishedAt: "2026-06-01",
    thumbnail:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/U5GFZm3GAbGuGjN2pLu33k/blog-course-4-5days-KXcqn2CWtUmAAGVJ4hdpbL.webp",
    readingTime: 7,
    keywords: ["スリランカ 4泊5日", "スリランカ モデルコース 王道", "スリランカ 旅行 日程", "タクシーチャーター 観光", "スリランカ シーギリヤ ゴール"],
    externalHref: "/course/4-5days",
  },
  {
    slug: "course-5-6days",
    title: "スリランカ 5泊6日 モデルコース｜タクシーチャーターでゆったり周遊する旅",
    excerpt:
      "時間に余裕を持って楽しむ5泊6日プラン。サファリ・アーユルヴェーダ・世界遺産をすべて盛り込んだ、スリランカの魅力を存分に体験できるコースです。",
    category: "モデルコース",
    categorySlug: "model-course",
    publishedAt: "2026-06-01",
    thumbnail:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/U5GFZm3GAbGuGjN2pLu33k/blog-course-5-6days-EjXwMbGq2hXDp9w4ZRfuDS.webp",
    readingTime: 8,
    keywords: ["スリランカ 5泊6日", "スリランカ モデルコース", "スリランカ サファリ アーユルヴェーダ", "スリランカ 世界遺産 旅行", "タクシーチャーター ゆったり"],
    externalHref: "/course/5-6days",
  },

  // ── モデルコース（長期） ───────────────────────────────────────────────────
  {
    slug: "course-10days",
    title: "スリランカを10日間で周遊する大満足モデルコース",
    excerpt:
      "スリランカの魅力をすべて詰め込んだ10日間の周遊プラン。世界遺産・サファリ・紅茶列車・ビーチ・ホエールウォッチングまで、専用車チャーターで余裕を持って巡る大満足の旅程をご紹介します。",
    category: "モデルコース",
    categorySlug: "model-course",
    publishedAt: "2026-06-02",
    thumbnail:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/U5GFZm3GAbGuGjN2pLu33k/blog-course-10days-5oo5hk9wkcUpAUQhRGKDKE.webp",
    readingTime: 12,
    keywords: ["スリランカ 10日間", "スリランカ 長期旅行", "スリランカ 周遊 モデルコース", "スリランカ ホエールウォッチング", "タクシーチャーター 10日"],
  },

  // ── タクシーチャーターの基礎（追加） ─────────────────────────────────────────
  {
    slug: "tip-manner-guide",
    title: "スリランカのチップ・マナー完全ガイド｜ドライバー・ホテル・レストランの相場",
    excerpt:
      "スリランカ旅行でチップはいくら渡せばいい？ドライバー・ホテルスタッフ・レストランなどシーン別の相場と、渡し方のマナーをわかりやすく解説します。小額紙幣の準備方法や注意点も紹介。初めてのスリランカ旅行でも安心して対応できます。",
    category: "タクシーチャーターの基礎",
    categorySlug: "taxi-charter-basics",
    publishedAt: "2026-06-06",
    thumbnail:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/U5GFZm3GAbGuGjN2pLu33k/blog-booking-timing-MRqrgcQXvfYZKvH7j2ycGu.webp",
    readingTime: 8,
    keywords: ["スリランカ チップ", "スリランカ チップ 相場", "スリランカ マナー", "スリランカ ドライバー チップ", "スリランカ ホテル チップ"],
  },

  // ── 旅行計画・準備 ──────────────────────────────────────────────────────────
  {
    slug: "best-season-guide",
    title: "スリランカ旅行のベストシーズンと気候完全ガイド｜月別の天気・乾季・雨季を解説",
    excerpt:
      "「スリランカ ベストシーズン」「スリランカ 気候」で検索しているあなたへ。スリランカは2つのモンスーンの影響で地域によって乾季・雨季が異なります。月別の天気・エリア別ベストシーズン・旅行スタイル別おすすめ時期をわかりやすく解説します。",
    category: "旅行計画・準備",
    categorySlug: "travel-planning",
    publishedAt: "2026-06-15",
    thumbnail:
      "https://images.unsplash.com/photo-1566296314736-6eaac1ca0cb9?w=800&q=80",
    readingTime: 9,
    keywords: ["スリランカ ベストシーズン", "スリランカ 気候", "スリランカ 天気", "スリランカ 乾季 雨季", "スリランカ 旅行 時期"],
  },
  {
    slug: "when-to-book-charter",
    title: "スリランカの専用車チャーターをいつ予約すべき？｜予約タイミング完全ガイド",
    excerpt:
      "スリランカ旅行の専用車チャーターは、いつ予約するのがベストか？ハイシーズン・年末年始・GWなど時期別の推奨タイミングと、予約前に決めておくべきことをわかりやすく解説します。",
    category: "旅行計画・準備",
    categorySlug: "travel-planning",
    publishedAt: "2026-06-02",
    thumbnail:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/U5GFZm3GAbGuGjN2pLu33k/blog-booking-timing-MRqrgcQXvfYZKvH7j2ycGu.webp",
    readingTime: 7,
    keywords: ["スリランカ タクシーチャーター 予約", "スリランカ 旅行 予約 タイミング", "スリランカ ハイシーズン", "スリランカ 年末年始 旅行", "専用車チャーター いつ予約"],
  },

  // ── 旅行計画・準備（追加分） ─────────────────────────────────────────────────
  {
    slug: "insurance",
    title: "スリランカ旅行に海外旅行保険は欠かせない？加入すべき理由と賢い選び方とは？",
    excerpt:
      "スリランカでは現地の車両保険の補償水準が非常に低く、旅行者自身による保険準備が不可欠です。クレジットカード付帯保険の活用法から有料保険の選び方、推奨補償額まで、SLTCSがわかりやすく解説します。",
    category: "旅行計画・準備",
    categorySlug: "travel-planning",
    publishedAt: "2026-04-07",
    thumbnail:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
    readingTime: 6,
    keywords: ["スリランカ 海外旅行保険", "スリランカ 旅行 保険", "クレジットカード 付帯保険 海外", "海外旅行保険 選び方", "スリランカ 旅行 準備"],
  },
  {
    slug: "whats-app",
    title: "WhatsAppのダウンロードと設定方法をわかりやすく説明します",
    excerpt:
      "スリランカではWhatsAppが現地の標準的な連絡手段です。インストール方法・初期設定・ドライバーへの連絡方法まで、旅行前に準備しておくべき手順をわかりやすく解説します。",
    category: "旅行計画・準備",
    categorySlug: "travel-planning",
    publishedAt: "2026-04-07",
    thumbnail:
      "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&q=80",
    readingTime: 5,
    keywords: ["WhatsApp 使い方", "ワッツアップ 設定", "スリランカ 連絡", "WhatsApp インストール", "スリランカ 旅行 準備"],
  },
  {
    slug: "esim",
    title: "スリランカ到着後すぐにネットを使うには？空港でのSIM購入＆eSIM完全ガイド",
    excerpt:
      "バンダラナイケ空港でのDialog SIM購入手順とeSIMの事前設定方法を徹底解説。料金比較・物理SIM vs eSIMの選び方まで、スリランカ旅行者向けにSLTCSがまとめました。",
    category: "旅行計画・準備",
    categorySlug: "travel-planning",
    publishedAt: "2026-04-07",
    thumbnail:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    readingTime: 7,
    keywords: ["スリランカ SIM", "スリランカ eSIM", "Dialog SIM スリランカ", "スリランカ 空港 SIM", "スリランカ 旅行 ネット"],
  },

  // ── タクシーチャーターの基礎 ──────────────────────────────────────────────
  {
    slug: "price-breakdown-risks",
    title: "スリランカのタクシーチャーター料金の内訳とは？安いサービスには気をつけよう！",
    excerpt:
      "「スリランカ タクシーチャーター 料金」を調べると価格帯に大きな差があります。人件費が安い国なのになぜ高い？格安サービスに潜む追加請求・旧型車・サポート不足のリスクと、日本車への高関税・円安が料金に与える影響をSLTCSがわかりやすく解説します。",
    category: "タクシーチャーターの基礎",
    categorySlug: "taxi-charter-basics",
    publishedAt: "2026-06-03",
    thumbnail:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/U5GFZm3GAbGuGjN2pLu33k/blog-course-4-5days-KXcqn2CWtUmAAGVJ4hdpbL.webp",
    readingTime: 9,
    keywords: ["スリランカ タクシーチャーター 料金", "スリランカ 専用車 料金 内訳", "スリランカ タクシー 安い リスク", "スリランカ 旅行 費用", "タクシーチャーター 格安 注意"],
  },
  {
    slug: "why-taxi-charter-is-recommended",
    title: "スリランカ旅行でタクシーチャーターがおすすめな理由｜公共交通との違い",
    excerpt:
      "スリランカを旅行するなら、公共交通と専用車チャーターのどちらが向いているのか。鉄道・バス・配車アプリと比較しながら、タクシーチャーターが選ばれる理由をわかりやすく解説します。",
    category: "タクシーチャーターの基礎",
    categorySlug: "taxi-charter-basics",
    publishedAt: "2026-06-02",
    thumbnail:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80",
    readingTime: 8,
    keywords: ["スリランカ タクシーチャーター おすすめ", "スリランカ 移動手段", "スリランカ 専用車 メリット", "スリランカ 鉄道 バス 比較", "スリランカ 旅行 交通"],
  },

  // ── 観光地ガイド ──────────────────────────────────────────────────────────
  {
    slug: "sigiriya-guide",
    title: "シーギリヤロック完全ガイド｜見どころ・登り方・アクセスをわかりやすく解説",
    excerpt:
      "スリランカを代表する世界遺産シーギリヤロック。5世紀の岩山宮殿の見どころ・登頂のコツ・ベストシーズン・タクシーチャーターでのアクセス方法を詳しく解説します。",
    category: "観光地ガイド",
    categorySlug: "sightseeing-guide",
    publishedAt: "2026-05-15",
    thumbnail:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/U5GFZm3GAbGuGjN2pLu33k/sigiriya_rock_hero-WvSdEsM6SGKw7D3K9DXp8D.webp",
    readingTime: 8,
    keywords: ["シーギリヤ", "シーギリヤロック", "スリランカ 世界遺産", "シーギリヤ 登り方", "シーギリヤ アクセス"],
    externalHref: "/sigiriya",
  },
  {
    slug: "kandy-guide",
    title: "キャンディ観光完全ガイド｜仏歯寺・ペラヘラ祭・アクセス方法を解説",
    excerpt:
      "スリランカの古都キャンディ。世界遺産の仏歯寺、キャンディアンダンス、ペラヘラ祭など見どころ満載の街を専用車チャーターで快適に観光する方法をご紹介します。",
    category: "観光地ガイド",
    categorySlug: "sightseeing-guide",
    publishedAt: "2026-05-10",
    thumbnail:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/U5GFZm3GAbGuGjN2pLu33k/kandy_tooth_relic_temple_hero-H5KPCu2wFYrgvuf3d6Q945.webp",
    readingTime: 7,
    keywords: ["キャンディ 観光", "スリランカ キャンディ", "仏歯寺", "キャンディ ペラヘラ祭", "キャンディ アクセス"],
    externalHref: "/kandy",
  },
  {
    slug: "galle-guide",
    title: "ゴール旧市街の行き方・見どころ完全ガイド｜タクシーチャーターで快適アクセス",
    excerpt:
      "オランダ統治時代の面影を残すゴール要塞は、スリランカ南部を代表する世界遺産。城壁散歩・灯台・コロニアル建築など見どころと、コロンボからの移動方法を詳しく解説します。",
    category: "観光地ガイド",
    categorySlug: "sightseeing-guide",
    publishedAt: "2026-05-05",
    thumbnail:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/U5GFZm3GAbGuGjN2pLu33k/galle_fort_hero-DUKxQjoVyFYYNXeLGiZBub.webp",
    readingTime: 7,
    keywords: ["ゴール 観光", "スリランカ ゴール", "ゴール要塞", "スリランカ 南部 観光", "ゴール アクセス コロンボ"],
    externalHref: "/galle",
  },
  {
    slug: "safari-guide",
    title: "スリランカサファリ完全ガイド｜ヤーラ国立公園でヒョウに会おう",
    excerpt:
      "スリランカ南東部に広がるヤーラ国立公園は、世界最高密度のヒョウの生息地。サファリの見どころ・ベストシーズン・SLTCSのサファリ手配サービスを詳しく紹介します。",
    category: "観光地ガイド",
    categorySlug: "sightseeing-guide",
    publishedAt: "2026-04-20",
    thumbnail:
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&q=80",
    readingTime: 9,
    keywords: ["スリランカ サファリ", "ヤーラ国立公園", "スリランカ ヒョウ", "スリランカ 動物 観光", "ヤーラ サファリ ツアー"],
    externalHref: "/safari",
  },
  {
    slug: "tea-train-guide",
    title: "スリランカ紅茶列車（エッラ）完全ガイド｜キャンディ〜エッラ間の乗り方・予約方法",
    excerpt:
      "世界で最も美しい鉄道路線のひとつ、キャンディ〜エッラ間の紅茶列車。九連アーチ橋・茶畑の絶景・列車の予約方法・SLTCSの送迎サービスを詳しく解説します。",
    category: "観光地ガイド",
    categorySlug: "sightseeing-guide",
    publishedAt: "2026-04-10",
    thumbnail:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/U5GFZm3GAbGuGjN2pLu33k/blog-tea-train-guide-2ddzgbXcNQFiTJrQfuf4it.webp",
    readingTime: 8,
    keywords: ["スリランカ 紅茶列車", "スリランカ エッラ 列車", "キャンディ エッラ 鉄道", "スリランカ 列車 予約", "九連アーチ橋"],
  },
  // テーマ旅行
  {
    slug: "senior-travel-charter",
    title: "スリランカのシニア旅行完全ガイド｜60代・70代でも安心の専用車チャーター旅",
    excerpt:
      "「スリランカ シニア旅行」「スリランカ 60代 旅行」で検索している方必見。体力的な不安や言葉の壁を解消し、自分たちのペースでゆったり観光できる専用車チャーターの魅力と、シニア世代向け5泊6日モデルコースを詳しく解説します。世界遺産・サファリ・アーユルヴェーダなど多彩な体験が一島に凝縮されたスリランカは、60代・70代のシニア旅行先として最適です。",
    category: "テーマ旅行",
    categorySlug: "theme-travel",
    publishedAt: "2026-06-09",
    thumbnail:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/U5GFZm3GAbGuGjN2pLu33k/blog-senior-travel-hero-N3vErakmjh5szFE9xtAqWY.webp",
    readingTime: 9,
    keywords: ["スリランカ シニア旅行", "スリランカ 60代 旅行", "スリランカ 70代 旅行", "シニア 海外旅行 おすすめ", "スリランカ 専用車 シニア"],
  },
  {
    slug: "family-travel-charter",
    title: "スリランカ家族旅行完全ガイド｜子連れで安心のタクシーチャーターモデルコース",
    excerpt:
      "「スリランカ 家族旅行」「子連れ スリランカ」で検索している方必見。荷物管理・日本語対応・子どものペース対応など、専用車チャーターがスリランカ家族旅行に適している6つの理由と、子連れ家族向けモデルコースを詳しく解説。スリランカは子どもが喜ぶ象・安全な環境・豊かな自然が揃い、アジア有数の子連れ家族向き旅行先です。",
    category: "テーマ旅行",
    categorySlug: "theme-travel",
    publishedAt: "2026-06-02",
    thumbnail:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/U5GFZm3GAbGuGjN2pLu33k/blog-family-travel-hero-MxVNfzXrPpRtNveAS4zeaF.webp",
    readingTime: 8,
    keywords: ["スリランカ 家族旅行", "子連れ スリランカ", "スリランカ 子供 旅行", "スリランカ ファミリー旅行", "スリランカ 象 子供"],
  },
  {
    slug: "solo-women-travel-charter",
    title: "スリランカ女子旅・一人旅安全ガイド｜タクシーチャーターで安心の個人旅行モデルコース",
    excerpt:
      "「スリランカ 女子旅」「スリランカ 一人旅」で検索している方必見。専用車チャーターなら完全貸し切りで安心・快適に移動できます。日本語対応ドライバー・緊急時サポートなど、スリランカ女子旅に専用車が選ばれる5つの理由とモデルコースを詳しく解説。スリランカは女性一人旅にも安全で楽しめるアジア有数の旅行先です。",
    category: "テーマ旅行",
    categorySlug: "theme-travel",
    publishedAt: "2026-06-03",
    thumbnail:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/U5GFZm3GAbGuGjN2pLu33k/blog-women-travel-hero-QvZf6gWCAaZReNfWoUne2Q.webp",
    readingTime: 7,
    keywords: ["スリランカ 女子旅", "スリランカ 一人旅", "スリランカ 女性 安全", "スリランカ 一人旅 女性", "スリランカ 個人旅行"],
  },
  {
    slug: "honeymoon-sri-lanka",
    title: "スリランカハネムーン・新婚旅行完全ガイド｜タクシーチャーターで行く6泊7日モデルコース",
    excerpt:
      "「スリランカ ハネムーン」で検索しているカップル必見。世界遺産・ビーチ・サファリ・茶畑が一島に凝縮されたスリランカは、ハワイ・バリ島よりコスパ良好で多彩な体験ができる新婚旅行先。専用車チャーターを使った二人だけのプライベートな旅を楽しもう。6泊7日のモデルコース・民族衣装・サンセット演出などハネムーンならではの特別体験も詳しく解説。",
    category: "テーマ旅行",
    categorySlug: "theme-travel",
    publishedAt: "2026-06-03",
    thumbnail:
      "/manus-storage/blog-honeymoon-couple_5fca0963.jpg",
    readingTime: 8,
    keywords: ["スリランカ ハネムーン", "スリランカ 新婚旅行", "スリランカ カップル旅行", "スリランカ ハネムーン モデルコース", "スリランカ 新婚旅行 費用"],
  },
  // ホテル
  {
    slug: "sigiriya-dambulla-hotels",
    title: "シーギリヤとダンブッラ地域でおすすめのホテル4選",
    excerpt:
      "スリランカ有数のリゾートホテルが集まるシーギリヤ・ダンブッラ地域。ヘリタンスカンダラマ・ホテルシーギリヤ・アマヤレイク・ジェットウィング・ヴィル・ウヤナの4ホテルを内装・外装写真とともに詳しく紹介します。",
    category: "ホテル",
    categorySlug: "hotel",
    publishedAt: "2026-07-12",
    thumbnail: "/manus-storage/heritance_exterior1_51d2726f.jpg",
    readingTime: 7,
    keywords: ["シーギリヤ ホテル", "ダンブッラ ホテル", "スリランカ リゾート", "ヘリタンスカンダラマ", "ジェットウィング ヴィル ウヤナ"],
  },
  {
    slug: "kandy-hotels",
    title: "キャンディ観光に適したおすすめホテル4選",
    excerpt:
      "スリランカの古都キャンディに宿泊するならこの4ホテル。The Grand Kandyan・Queen's Hotel・Earl's Regency・Cinnamon Citadelを内装・外装写真とともに詳しく紹介します。",
    category: "ホテル",
    categorySlug: "hotel",
    publishedAt: "2026-07-12",
    thumbnail: "/manus-storage/grandkandyan_exterior1_be8148ca.jpg",
    readingTime: 7,
    keywords: ["キャンディ ホテル", "スリランカ ホテル キャンディ", "Earl's Regency", "Cinnamon Citadel Kandy", "The Grand Kandyan"],
  },
];

export function getCategoryBySlug(slug: string): BlogCategory | undefined {
  return blogCategories.find((c) => c.slug === slug);
}

export function getArticlesByCategory(categorySlug: string): BlogArticle[] {
  return blogArticles.filter((a) => a.categorySlug === categorySlug);
}

export function getArticleBySlug(slug: string): BlogArticle | undefined {
  return blogArticles.find((a) => a.slug === slug);
}
