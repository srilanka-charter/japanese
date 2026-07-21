import { Link } from "wouter";
import { useSEO } from "@/hooks/useSEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { ChevronRight, BookOpen, ArrowRight } from "lucide-react";

// ── タクシーチャーターの基礎カテゴリーの記事一覧 ─────────────────────────────
const articles = [
  {
    number: "01",
    slug: "why-taxi-charter-is-recommended",
    title: "スリランカ旅行でタクシーチャーターがおすすめな理由",
    subtitle: "公共交通との違いをわかりやすく解説",
    description:
      "スリランカを旅行するなら、公共交通と専用車チャーターのどちらが向いているのか。鉄道・バス・配車アプリと比較しながら、タクシーチャーターが選ばれる理由をわかりやすく解説します。",
    tags: ["移動手段", "メリット", "公共交通比較"],
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80",
  },
  {
    number: "02",
    slug: "price-breakdown-risks",
    title: "スリランカのタクシーチャーター料金の内訳とは？",
    subtitle: "安いサービスには気をつけよう！",
    description:
      "スリランカのタクシーチャーター料金に大きな差がある理由とは？格安サービスに潜む追加請求・旧型車・サポート不足のリスクと、日本車への高関税・円安が料金に与える影響をわかりやすく解説します。",
    tags: ["料金", "内訳", "格安リスク"],
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/U5GFZm3GAbGuGjN2pLu33k/blog-course-4-5days-KXcqn2CWtUmAAGVJ4hdpbL.webp",
  },
  {
    number: "03",
    slug: "when-to-book-charter",
    title: "スリランカの専用車チャーターをいつ予約すべき？",
    subtitle: "予約タイミング完全ガイド",
    description:
      "スリランカ旅行の専用車チャーターは、いつ予約するのがベストか？ハイシーズン・年末年始・GWなど時期別の推奨タイミングと、予約前に決めておくべきことをわかりやすく解説します。",
    tags: ["予約", "タイミング", "ハイシーズン"],
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/U5GFZm3GAbGuGjN2pLu33k/blog-booking-timing-MRqrgcQXvfYZKvH7j2ycGu.webp",
  },
  {
    number: "04",
    slug: "tip-manner-guide",
    title: "スリランカのチップ・マナー完全ガイド",
    subtitle: "ドライバー・ホテル・レストランの相場",
    description:
      "スリランカ旅行でチップはいくら渡せばいい？ドライバー・ホテルスタッフ・レストランなどシーン別の相場と、渡し方のマナーをわかりやすく解説します。小額紙幣の準備方法や注意点も紹介します。",
    tags: ["チップ", "マナー", "現地ルール"],
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/U5GFZm3GAbGuGjN2pLu33k/blog-booking-timing-MRqrgcQXvfYZKvH7j2ycGu.webp",
  },
  {
    number: "05",
    slug: "one-day-charter",
    title: "スリランカで1日チャーターをご希望の方へ",
    subtitle: "プラットフォームを使ったドライバー手配・予約手順",
    description:
      "スリランカで1日だけ専用車をチャーターしたい方へ。プラットフォームを使ったドライバーの探し方・予約手順・WhatsApp準備まで、1日チャーターに必要な情報をわかりやすく解説します。",
    tags: ["1日チャーター", "プラットフォーム", "予約方法"],
    image: "/manus-storage/platform-top_6c3b990b.png",
  },
];

// ── 基礎知識チェックリスト ───────────────────────────────────────────────────
const checklistItems = [
  { label: "タクシーチャーターと公共交通の違いを理解する", slug: "why-taxi-charter-is-recommended" },
  { label: "料金の内訳と格安サービスのリスクを把握する", slug: "price-breakdown-risks" },
  { label: "予約のベストタイミングを確認する", slug: "when-to-book-charter" },
  { label: "チップ・マナーの相場を事前に知っておく", slug: "tip-manner-guide" },
  { label: "1日チャーターの予約方法とプラットフォームの使い方を確認する", slug: "one-day-charter" },
];

export default function TaxiCharterBasicsTopPage() {
  useSEO({
    title: "タクシーチャーターの基礎知識まとめ｜料金・予約・マナーをわかりやすく解説 | SLTCS",
    description:
      "スリランカのタクシーチャーターを初めて利用する方向けに、移動手段の選び方・料金の内訳・予約タイミング・チップマナーなど基礎知識を一気に整理。各テーマの詳しい解説記事へすぐ進める一覧型まとめ記事です。",
    path: "/taxi-charter-basics",
    noindex: false,
    jsonLdList: [
      {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "タクシーチャーターの基礎知識まとめ｜料金・予約・マナーをわかりやすく解説",
        description:
          "スリランカのタクシーチャーターを初めて利用する方向けに、移動手段の選び方・料金の内訳・予約タイミング・チップマナーなど基礎知識を一気に整理。",
        url: "https://sltcs.srilanka-charter.com/taxi-charter-basics",
        inLanguage: "ja",
        author: {
          "@type": "Organization",
          name: "SLTCS スリランカタクシーチャーターサービス",
        },
        publisher: {
          "@type": "Organization",
          name: "SLTCS スリランカタクシーチャーターサービス",
          url: "https://sltcs.srilanka-charter.com",
        },
      },
    ],
    jsonLdIdPrefix: "taxi-charter-basics-top",
  });

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* ── ヒーローセクション ── */}
      <section className="relative bg-gradient-to-br from-[oklch(0.22_0.08_155)] to-[oklch(0.35_0.12_155)] text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200&q=60')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative container max-w-4xl mx-auto px-4 py-16 sm:py-20">
          {/* パンくずリスト */}
          <nav className="flex items-center gap-1 text-white/70 text-sm mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              ホーム
            </Link>
            <ChevronRight size={14} />
            <span className="text-white font-medium">タクシーチャーターの基礎</span>
          </nav>

          <div className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
            タクシーチャーターの基礎
          </div>

          <h1
            className="text-2xl sm:text-4xl font-bold mb-4 leading-tight"
            style={{ fontFamily: "'Shippori Mincho', serif" }}
          >
            タクシーチャーターの基礎知識まとめ
            <br />
            <span className="text-xl sm:text-2xl font-normal text-white/90">
              料金・予約・マナーをわかりやすく解説
            </span>
          </h1>

          <p className="text-white/85 text-sm sm:text-base leading-relaxed max-w-2xl">
            スリランカのタクシーチャーターを初めて利用する方向けに、移動手段の選び方・料金の内訳・予約タイミング・チップマナーなど、知っておくべき基礎知識を一気に整理しました。
            各テーマの詳しい解説記事へすぐ進める一覧型のまとめ記事です。
          </p>
        </div>
      </section>

      {/* ── チェックリスト ── */}
      <section className="bg-[oklch(0.97_0.01_155)] py-10 border-b border-gray-100">
        <div className="container max-w-4xl mx-auto px-4">
          <h2
            className="text-lg sm:text-xl font-bold text-gray-800 mb-5"
            style={{ fontFamily: "'Shippori Mincho', serif" }}
          >
            出発前に確認しておきたい基礎知識
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {checklistItems.map((item) => (
              <Link
                key={item.slug}
                href={`/taxi-charter-basics/${item.slug}`}
                className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:border-[oklch(0.55_0.12_155)] hover:shadow-md transition-all group"
              >
                <BookOpen
                  size={20}
                  className="text-[oklch(0.45_0.12_155)] mt-0.5 flex-shrink-0 group-hover:text-[oklch(0.35_0.12_155)] transition-colors"
                />
                <span className="text-sm text-gray-700 font-medium group-hover:text-[oklch(0.25_0.10_155)] transition-colors">
                  {item.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 記事一覧 ── */}
      <section className="py-12 sm:py-16">
        <div className="container max-w-4xl mx-auto px-4">
          <h2
            className="text-xl sm:text-2xl font-bold text-gray-900 border-l-4 border-[oklch(0.35_0.12_155)] pl-4 mb-8"
            style={{ fontFamily: "'Shippori Mincho', serif" }}
          >
            タクシーチャーターの基礎記事一覧
          </h2>

          <div className="space-y-8">
            {articles.map((article) => (
              <article
                key={article.slug}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col sm:flex-row">
                  {/* 画像 */}
                  <div className="sm:w-56 sm:flex-shrink-0">
                    <img
                      src={article.image}
                      alt={article.title}
                      loading="lazy"
                      className="w-full h-48 sm:h-full object-cover"
                    />
                  </div>

                  {/* コンテンツ */}
                  <div className="flex-1 p-5 sm:p-6 flex flex-col justify-between">
                    <div>
                      {/* 番号バッジ */}
                      <div className="flex items-center gap-2 mb-3">
                        <span className="bg-[oklch(0.35_0.12_155)] text-white text-xs font-bold px-2.5 py-0.5 rounded-full">
                          {article.number}
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {article.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs text-[oklch(0.35_0.12_155)] bg-[oklch(0.95_0.03_155)] px-2 py-0.5 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* タイトル */}
                      <h3
                        className="text-base sm:text-lg font-bold text-gray-900 mb-1 leading-snug"
                        style={{ fontFamily: "'Shippori Mincho', serif" }}
                      >
                        {article.title}
                      </h3>
                      <p className="text-sm text-[oklch(0.45_0.12_155)] font-medium mb-3">
                        {article.subtitle}
                      </p>
                      <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                        {article.description}
                      </p>
                    </div>

                    {/* リンク */}
                    <div className="mt-4">
                      <Link
                        href={`/taxi-charter-basics/${article.slug}`}
                        className="inline-flex items-center gap-1.5 text-sm font-bold text-[oklch(0.35_0.12_155)] hover:text-[oklch(0.25_0.10_155)] transition-colors group"
                      >
                        詳しく読む
                        <ArrowRight
                          size={15}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── まとめセクション ── */}
      <section className="bg-[oklch(0.97_0.01_155)] py-12 border-t border-gray-100">
        <div className="container max-w-4xl mx-auto px-4">
          <h2
            className="text-xl sm:text-2xl font-bold text-gray-900 border-l-4 border-[oklch(0.35_0.12_155)] pl-4 mb-6"
            style={{ fontFamily: "'Shippori Mincho', serif" }}
          >
            まとめ：基礎知識を押さえると、スリランカ旅行の不安が減る
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
            タクシーチャーターを選ぶ理由、料金の仕組み、予約のタイミング、チップのマナーを事前に理解しておくことで、現地での判断に迷いにくくなります。
          </p>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            スリランカのタクシーチャーターについて疑問があれば、このまとめ記事を起点に、各テーマの詳しい記事を確認してみてください。
          </p>
        </div>
      </section>

      {/* ── CTAセクション ── */}
      <section className="py-12 bg-white">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <p className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed">
            基礎知識を確認したら、次は実際の旅程を検討してみましょう。
            <br className="hidden sm:block" />
            SLTCSでは専用車チャーターで空港から観光地まで快適に移動できます。
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 bg-[oklch(0.35_0.12_155)] text-white font-bold px-6 py-3 rounded-xl hover:bg-[oklch(0.28_0.10_155)] transition-colors text-sm"
            >
              無料で相談する
              <ArrowRight size={16} />
            </a>
            <Link
              href="/plan"
              className="inline-flex items-center justify-center gap-2 border-2 border-[oklch(0.35_0.12_155)] text-[oklch(0.35_0.12_155)] font-bold px-6 py-3 rounded-xl hover:bg-[oklch(0.97_0.01_155)] transition-colors text-sm"
            >
              プランを見る
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </div>
  );
}
