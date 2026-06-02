import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { Check } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";

const plans = [
  {
    id: "bronze",
    name: "ブロンズプラン",
    badge: "BRONZE",
    tagline: "移動のみ確保したい方・コスト最優先の方",
    color: "oklch(0.6_0.05_75)",
    bgColor: "oklch(0.97_0.01_75)",
    features: [
      "研修中ドライバーの手配",
      "送迎・移動サービス",
      "英語対応の現地統括スタッフ",
      "エアコン完備のクリーンな車両",
      "空港送迎対応",
    ],
    desc: "コストを抑えながらスリランカを移動したい方に最適なプランです。研修中のドライバーが丁寧に対応いたします。",
  },
  {
    id: "silver",
    name: "シルバープラン",
    badge: "SILVER",
    tagline: "コスパと安心感を両立させたい方",
    color: "oklch(0.35_0.12_155)",
    bgColor: "oklch(0.96_0.02_155)",
    popular: true,
    features: [
      "政府公認 Tourist Driver の手配",
      "観光地での同行・解説",
      "日本語対応の現地統括スタッフ",
      "サファリ・アクティビティ手配",
      "追加料金なしのガイド手配",
      "旅程のカスタマイズ対応",
    ],
    desc: "最も人気のプランです。政府公認のTourist Driverが観光地での案内も担当。コストパフォーマンスと安心感を両立しています。",
  },
  {
    id: "gold",
    name: "ゴールドプラン",
    badge: "GOLD",
    tagline: "最高品質の旅を求める方",
    color: "oklch(0.65_0.1_75)",
    bgColor: "oklch(0.97_0.02_75)",
    features: [
      "高評価 Chauffeur Guide Driver の確約",
      "全行程での同行・解説",
      "日本語対応の現地統括スタッフ",
      "日本人スタッフによるサポート",
      "二重のサポート体制",
      "プレミアム車両の優先手配",
      "緊急時の24時間対応",
    ],
    desc: "最高品質の旅を求める方のためのプレミアムプランです。高評価のChauffeur Guide Driverが全行程をサポートし、忘れられない旅をお届けします。",
  },
];

export default function PlanPage() {
  useSEO({
    title: "スリランカタクシーチャーターのプラン一覧｜ブロンズ・シルバー・ゴールド | SLTCS",
    description: "スリランカ専用車チャーターサービスSLTCSのプラン一覧。ブロンズ（移動のみ）・シルバー（政府公認ドライバー）・ゴールド（プレミアム）の3プランからお選びいただけます。日本語対応・政府公認ドライバーで安心のスリランカ旅行を。",
    path: "/plan",
    jsonLdList: [{
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "SLTCS スリランカタクシーチャーターサービス",
      "description": "スリランカ専用車チャーターサービス。ブロンズ・シルバー・ゴールドの3プラン。",
      "provider": { "@type": "Organization", "name": "SLTCS" },
      "areaServed": { "@type": "Country", "name": "Sri Lanka" },
      "url": "https://sltcs.srilanka-charter.com/plan",
    }],
    jsonLdIdPrefix: "plan",
  });

  const scrollToContact = () => {
    window.location.href = "/#contact";
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <div className="bg-[oklch(0.12_0.02_155)] pt-28 pb-16 text-center">
        <span className="section-label">OUR PLANS</span>
        <h1 className="text-4xl lg:text-5xl font-black text-white mt-3" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          プラン一覧
        </h1>
        <p className="text-white/60 mt-4 max-w-xl mx-auto">
          旅のスタイルや予算に合わせて3つのプランからお選びください
        </p>
      </div>

      {/* Plans */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-5xl mx-auto">
          <div className="space-y-8">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`rounded-2xl border-2 overflow-hidden ${plan.popular ? "border-[oklch(0.35_0.12_155)] shadow-xl" : "border-[oklch(0.9_0.01_155)]"}`}
              >
                {plan.popular && (
                  <div className="bg-[oklch(0.35_0.12_155)] text-white text-center py-2 text-sm font-bold tracking-wide">
                    ★ 最も人気のプランです
                  </div>
                )}
                <div className="p-8 lg:p-10">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    <div className="lg:w-1/3">
                      <span
                        className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-3"
                        style={{ backgroundColor: `${plan.color}20`, color: plan.color }}
                      >
                        {plan.badge}
                      </span>
                      <h2 className="text-2xl lg:text-3xl font-black text-[oklch(0.15_0.01_60)] mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
                        {plan.name}
                      </h2>
                      <p className="text-sm text-[oklch(0.5_0.02_155)] mb-4">{plan.tagline}</p>
                      <p className="text-sm text-[oklch(0.35_0.02_155)] leading-relaxed">{plan.desc}</p>
                    </div>
                    <div className="lg:w-1/3">
                      <h3 className="font-bold text-[oklch(0.25_0.05_155)] mb-4 text-sm uppercase tracking-wide">含まれるサービス</h3>
                      <ul className="space-y-2">
                        {plan.features.map((f, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-[oklch(0.3_0.02_155)]">
                            <Check size={14} style={{ color: plan.color }} className="flex-shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="lg:w-1/3 flex flex-col justify-between">
                      <div
                        className="rounded-xl p-5 mb-4"
                        style={{ backgroundColor: plan.bgColor }}
                      >
                        <p className="text-sm font-medium text-[oklch(0.3_0.02_155)] mb-1">料金について</p>
                        <p className="text-xs text-[oklch(0.5_0.02_155)] leading-relaxed">
                          旅の日程・人数・車種によって異なります。まずはお気軽にお問い合わせください。24時間以内に見積もりをご提案いたします。
                        </p>
                      </div>
                      <button
                        onClick={scrollToContact}
                        className="w-full py-3 rounded-xl font-bold text-sm transition-all duration-200 text-white"
                        style={{ backgroundColor: plan.color }}
                      >
                        このプランで相談する
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-[oklch(0.5_0.02_155)] mb-4">どのプランが最適かわからない場合は、お気軽にご相談ください</p>
            <button
              onClick={scrollToContact}
              className="inline-block bg-[oklch(0.35_0.12_155)] hover:bg-[oklch(0.25_0.1_155)] text-white px-10 py-4 rounded-full font-bold tracking-wide transition-all duration-200 shadow-lg"
            >
              無料で相談する
            </button>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </div>
  );
}
