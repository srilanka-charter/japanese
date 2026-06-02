import { Link, useParams } from "wouter";
import { Calendar, Clock, ChevronRight, BookOpen } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  blogCategories,
  getCategoryBySlug,
  getArticlesByCategory,
  type BlogArticle,
} from "@/data/blogData";

/** 記事カード：externalHrefがある場合は直接そのページへ遷移 */
function ArticleCard({ article }: { article: BlogArticle }) {
  const href = article.externalHref ?? `/${article.categorySlug}/${article.slug}`;
  const isExternal = !!article.externalHref;

  const inner = (
    <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 h-full flex flex-col">
      {/* Thumbnail */}
      <div className="relative overflow-hidden aspect-[16/9]">
        <img
          src={article.thumbnail}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-[oklch(0.35_0.12_155)] text-white text-xs font-medium px-2.5 py-1 rounded-md">
            {article.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h2 className="text-gray-900 font-bold text-base leading-snug mb-3 group-hover:text-[oklch(0.35_0.12_155)] transition-colors line-clamp-3 flex-1">
          {article.title}
        </h2>
        <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-4">
          {article.excerpt}
        </p>
        <div className="flex items-center gap-4 text-xs text-gray-400">
          <span className="flex items-center gap-1">
            <Calendar size={12} />
            {article.publishedAt}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={12} />
            約{article.readingTime}分
          </span>
        </div>
      </div>
    </div>
  );

  if (isExternal) {
    return (
      <a href={href} className="block h-full">
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className="block h-full">
      {inner}
    </Link>
  );
}

export default function BlogCategoryPage() {
  const params = useParams<{ category: string }>();
  const categorySlug = params.category;
  const category = getCategoryBySlug(categorySlug);
  const articles = getArticlesByCategory(categorySlug);

  if (!category) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="pt-32 pb-20 text-center">
          <p className="text-gray-500 text-lg">カテゴリーが見つかりませんでした。</p>
          <Link href="/" className="mt-4 inline-block text-emerald-600 hover:underline">
            トップページへ戻る
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero */}
      <div className="bg-[oklch(0.12_0.02_155)] pt-28 pb-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-white/50 mb-6">
            <Link href="/" className="hover:text-white/80 transition-colors">
              トップ
            </Link>
            <ChevronRight size={14} />
            <span className="text-[oklch(0.75_0.12_75)]">お役立ち情報</span>
            <ChevronRight size={14} />
            <span className="text-white/70">{category.label}</span>
          </nav>

          <div className="flex items-start gap-4">
            <div className="w-1 h-12 bg-[oklch(0.75_0.12_75)] rounded-full flex-shrink-0 mt-1" />
            <div>
              <p className="text-[oklch(0.75_0.12_75)] text-sm tracking-widest uppercase mb-2 font-medium">
                - category -
              </p>
              <h1
                className="text-3xl sm:text-4xl font-bold text-white mb-3"
                style={{ fontFamily: "'Shippori Mincho', serif" }}
              >
                {category.label}
              </h1>
              <p className="text-white/60 text-sm sm:text-base max-w-2xl leading-relaxed">
                {category.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Category Nav */}
      <div className="bg-white border-b border-gray-200 sticky top-16 lg:top-20 z-40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide">
            {blogCategories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/${cat.slug}`}
                className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 ${
                  cat.slug === categorySlug
                    ? "bg-[oklch(0.35_0.12_155)] text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Articles */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {articles.length === 0 ? (
          <div className="text-center py-20">
            <BookOpen size={48} className="mx-auto text-gray-300 mb-4" />
            <p className="text-gray-500 text-lg mb-2">記事を準備中です</p>
            <p className="text-gray-400 text-sm">このカテゴリーの記事は近日公開予定です。</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 bg-[oklch(0.12_0.02_155)] rounded-2xl p-8 text-center">
          <p className="text-[oklch(0.75_0.12_75)] text-sm tracking-widest mb-3 font-medium">
            FREE CONSULTATION
          </p>
          <h3
            className="text-white text-xl sm:text-2xl font-bold mb-3"
            style={{ fontFamily: "'Shippori Mincho', serif" }}
          >
            スリランカ旅行の相談はSLTCSへ
          </h3>
          <p className="text-white/60 text-sm mb-6 max-w-md mx-auto leading-relaxed">
            日程・人数・行きたい場所をお知らせいただければ、専用車チャーターに適したモデルコースとお見積もりをご提案します。
          </p>
          <a
            href="/#contact"
            className="inline-block bg-[oklch(0.75_0.12_75)] text-[oklch(0.12_0.02_155)] font-bold px-8 py-3 rounded-full text-sm hover:opacity-90 transition-opacity"
          >
            無料で相談する
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
