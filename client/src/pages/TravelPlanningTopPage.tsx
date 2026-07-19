import { Link } from "wouter";
import { useSEO } from "@/hooks/useSEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { ChevronRight, CheckCircle2, ArrowRight } from "lucide-react";

// ── 旅行計画・準備カテゴリーの記事一覧 ─────────────────────────────────────
const articles = [
  {
    number: "01",
    slug: "best-season-guide",
    title: "スリランカ旅行のベストシーズンと気候完全ガイド",
    subtitle: "月別の天気・乾季・雨季を解説",
    description:
      "スリランカは地域によって乾季・雨季が異なります。訪問エリアと旅行時期を合わせることで、天候リスクを大幅に減らせます。月別の気候データと地域別のベストシーズンを詳しく解説します。",
    icon: "🌤️",
    tags: ["気候", "ベストシーズン", "月別天気"],
    image: "https://images.unsplash.com/photo-1566296314736-6eaac1ca0cb9?w=600&q=80",
  },
  {
    number: "02",
    slug: "forex",
    title: "スリランカ両替ガイド",
    subtitle: "空港・市内の両替方法と1日の必要現金は？",
    description:
      "到着直後から現金が必要になるスリランカ旅行。空港両替の手順、市内の銀行・両替所の使い方、1日あたりの現金目安、チップの相場まで、現地でお金に困らないための情報をまとめました。",
    icon: "💱",
    tags: ["両替", "現金", "ルピー"],
    image: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=600&q=80",
  },
  {
    number: "03",
    slug: "insurance",
    title: "スリランカ旅行に海外旅行保険は欠かせない？",
    subtitle: "加入すべき理由と賢い選び方とは？",
    description:
      "医療費が高額になりやすいスリランカでは、海外旅行保険の加入が強く推奨されます。クレジットカード付帯保険との違い、補償内容の見方、おすすめの保険会社を分かりやすく解説します。",
    icon: "🛡️",
    tags: ["保険", "医療費", "補償"],
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80",
  },
  {
    number: "04",
    slug: "whats-app",
    title: "WhatsAppのダウンロードと設定方法",
    subtitle: "ドライバーとの連絡に必須のアプリを準備しよう",
    description:
      "スリランカではドライバーや現地スタッフとの連絡にWhatsAppが広く使われています。アプリのダウンロードから電話番号認証、プロフィール設定まで、スクリーンショット付きで丁寧に解説します。",
    icon: "📱",
    tags: ["WhatsApp", "連絡手段", "アプリ"],
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=600&q=80",
  },
  {
    number: "05",
    slug: "esim",
    title: "スリランカ到着後すぐにネットを使うには？",
    subtitle: "空港でのSIM購入＆eSIM完全ガイド",
    description:
      "地図検索、ドライバーとの連絡、翻訳アプリなど、旅行中の通信環境は安心感に直結します。空港でのDialog SIM購入手順、eSIMの設定方法、各キャリアの料金プランを詳しく解説します。",
    icon: "📶",
    tags: ["SIM", "eSIM", "通信"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
  },
];

// ── チェックリスト ──────────────────────────────────────────────────────────
const checklistItems = [
  { label: "ベストシーズンを確認して旅行時期を決める", slug: "best-season-guide" },
  { label: "海外旅行保険に加入する（またはカード付帯を確認）", slug: "insurance" },
  { label: "WhatsAppをダウンロード・設定する", slug: "whats-app" },
  { label: "SIM・eSIMの手配方法を確認する", slug: "esim" },
  { label: "両替の方法と必要な現金額を把握する", slug: "forex" },
];

export default function TravelPlanningTopPage() {
  useSEO({
    title: "スリランカ旅行の準備完全ガイド｜出発前に確認したい5つのチェックリスト | SLTCS",
    description:
      "ベストシーズン・両替・海外旅行保険・WhatsApp・SIM/eSIMなど、スリランカ旅行の出発前に確認しておきたい準備項目を一気に整理。各テーマの詳しい解説記事へすぐ進める一覧型まとめ記事です。",
    path: "/travel-planning",
    noindex: false,
    jsonLdList: [
      {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "スリランカ旅行の準備完全ガイド｜出発前に確認したい5つのチェックリスト",
        description:
          "ベストシーズン・両替・海外旅行保険・WhatsApp・SIM/eSIMなど、スリランカ旅行の出発前に確認しておきたい準備項目を一気に整理。",
        url: "https://sltcs.srilanka-charter.com/travel-planning",
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
    jsonLdIdPrefix: "travel-planning-top",
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
              "url('https://images.unsplash.com/photo-1566296314736-6eaac1ca0cb9?w=1200&q=60')",
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
            <span className="text-white font-medium">旅行計画・準備</span>
          </nav>

          <div className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
            旅行計画・準備
          </div>

          <h1
            className="text-2xl sm:text-4xl font-bold mb-4 leading-tight"
            style={{ fontFamily: "'Shippori Mincho', serif" }}
          >
            スリランカ旅行の準備完全ガイド
            <br />
            <span className="text-xl sm:text-2xl font-normal text-white/90">
              出発前に確認したい5つのチェックリスト
            </span>
          </h1>

          <p className="text-white/85 text-sm sm:text-base leading-relaxed max-w-2xl">
            ベストシーズン、両替・現金、海外旅行保険、WhatsApp、SIM・eSIMなど、出発前に確認しておきたい準備項目を一気に整理しました。
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
            まず確認したい準備チェックリスト
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {checklistItems.map((item) => (
              <Link
                key={item.slug}
                href={`/travel-planning/${item.slug}`}
                className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:border-[oklch(0.55_0.12_155)] hover:shadow-md transition-all group"
              >
                <CheckCircle2
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
            旅行計画・準備の記事一覧
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
                        <span className="text-lg">{article.icon}</span>
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
                        href={`/travel-planning/${article.slug}`}
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

      {/* ── 準備の流れ（まとめ） ── */}
      <section className="bg-[oklch(0.97_0.01_155)] py-12 border-t border-gray-100">
        <div className="container max-w-4xl mx-auto px-4">
          <h2
            className="text-xl sm:text-2xl font-bold text-gray-900 border-l-4 border-[oklch(0.35_0.12_155)] pl-4 mb-6"
            style={{ fontFamily: "'Shippori Mincho', serif" }}
          >
            まとめ：準備が整うと、スリランカ旅行はもっと自由になる
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6 text-sm sm:text-base">
            ベストシーズンの確認、両替・現金の準備、海外旅行保険の加入、WhatsAppの設定、SIM・eSIMの手配を出発前に整えておくことで、現地では観光や体験に集中しやすくなります。
          </p>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            スリランカ旅行の準備で迷ったら、このまとめ記事を起点に、各テーマの詳しい記事を確認してみてください。
          </p>
        </div>
      </section>

      {/* ── CTAセクション ── */}
      <section className="py-12 bg-white">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <p className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed">
            旅行準備と合わせて、現地の移動手段も早めに検討しておきましょう。
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
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </div>
  );
}
