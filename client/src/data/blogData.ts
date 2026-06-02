export interface BlogArticle {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categorySlug: string;
  publishedAt: string;
  thumbnail: string;
  readingTime: number;
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
    slug: "safari-nature",
    label: "サファリ・自然体験",
    description: "ヤーラ国立公園・ミネリヤ国立公園でのサファリ体験や野生動物との出会いを詳しく紹介します。",
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
];

export const blogArticles: BlogArticle[] = [
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
