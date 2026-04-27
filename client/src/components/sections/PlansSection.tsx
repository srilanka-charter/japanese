import { useState } from "react";
import { Link } from "wouter";
import { Check } from "lucide-react";

const plans = [
  {
    id: "bronze",
    name: "ブロンズプラン",
    badge: "BRONZE",
    desc: "移動のみ確保したい方・コスト最優先の方",
    features: ["研修中ドライバー手配", "送迎・移動サービス", "英語対応の現地統括", "エアコン完備のクリーンな車両"],
    color: "oklch(0.6_0.05_75)",
    popular: false,
  },
  {
    id: "silver",
    name: "シルバープラン",
    badge: "SILVER",
    desc: "コスパと安心感を両立させたい方",
    features: ["政府公認 Tourist Driver以上を手配", "観光地での同行・解説", "日本語対応の現地統括", "サファリ・アクティビティ手配", "追加料金なしのガイド手配"],
    color: "oklch(0.35_0.12_155)",
    popular: true,
  },
  {
    id: "gold",
    name: "ゴールドプラン",
    badge: "GOLD",
    desc: "最高品質の旅を求める方",
    features: ["高評価 Chauffeur Guide Driver 確約", "全行程での同行・解説", "日本語対応の現地統括", "日本人スタッフによるサポート", "二重のサポート体制"],
    color: "oklch(0.75_0.12_75)",
    popular: false,
  },
];

const pricingData = [
  {
    id: "bronze",
    name: "ブロンズプラン",
    badge: "BRONZE",
    desc: "移動中心のプランで価格重視の方におすすめのプランです",
    accentColor: "#b8924a",
    popular: false,
    pricing: {
      sedan: [45000, 50000, 59000, 72000, 85000, 99000, 112000],
      van: [52000, 59000, 71000, 87000, 103000, 120000, 136000],
      bigvan: [60000, 65000, 79000, 97000, 115000, 134000, 152000],
    },
  },
  {
    id: "silver",
    name: "シルバープラン",
    badge: "SILVER",
    desc: "観光地への同行と説明が入っているプランでリーズナブルな価格で深くスリランカを楽しみたい方におすすめのプランです。SLTCSの看板プランです。",
    accentColor: "#1a9e6e",
    popular: true,
    pricing: {
      sedan: [53000, 62000, 75000, 92000, 109000, 127000, 144000],
      van: [62000, 73000, 88000, 108000, 128000, 149000, 169000],
      bigvan: [71000, 83000, 101000, 124000, 147000, 171000, 194000],
    },
  },
  {
    id: "gold",
    name: "ゴールドプラン",
    badge: "GOLD",
    desc: "最も上位の観光ドライバー資格であるChauffeur Guide Driverの中でも実績があり顧客からの評価が高いドライバーが手配されるラグジュアリープランです。",
    accentColor: "#c8960a",
    popular: false,
    pricing: {
      sedan: [69000, 74000, 91000, 112000, 133000, 155000, 176000],
      van: [80000, 87000, 107000, 131000, 156000, 182000, 207000],
      bigvan: [92000, 99000, 122000, 150000, 178000, 208000, 237000],
    },
  },
];

const vehicleLabels: Record<string, string> = {
  sedan: "Sedan（〜3人）",
  van: "Van（3〜6人）",
  bigvan: "Big Van（6〜9人）",
};

const dayLabels = ["2日間", "3日間", "4日間", "5日間", "6日間", "7日間", "8日間"];

function PlanPriceCard({ plan }: { plan: typeof pricingData[0] }) {
  const [activeVehicle, setActiveVehicle] = useState<"sedan" | "van" | "bigvan">("sedan");
  const prices = plan.pricing[activeVehicle];

  return (
    <div className={`rounded-2xl border bg-white p-6 shadow-sm ${plan.popular ? "border-[#1a9e6e] shadow-md ring-1 ring-[#1a9e6e]/20" : "border-gray-200"}`}>
      {/* Header */}
      <div className="flex items-center gap-3 mb-1 flex-wrap">
        <span
          className="inline-block text-xs font-bold px-3 py-1 rounded-full"
          style={{ backgroundColor: `${plan.accentColor}20`, color: plan.accentColor }}
        >
          {plan.badge}
        </span>
        <h3 className="text-lg font-black text-gray-800" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          {plan.name}
        </h3>
        {plan.popular && (
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#1a9e6e] text-white">人気 No.1</span>
        )}
      </div>
      <p className="text-xs text-gray-500 mb-4">{plan.desc}</p>

      {/* Vehicle tabs */}
      <div className="flex gap-2 mb-4 flex-wrap">
        {(["sedan", "van", "bigvan"] as const).map((v) => (
          <button
            key={v}
            onClick={() => setActiveVehicle(v)}
            className="px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-150"
            style={
              activeVehicle === v
                ? { backgroundColor: plan.accentColor, color: "white" }
                : { backgroundColor: "#f3f4f6", color: "#4b5563" }
            }
          >
            {vehicleLabels[v]}
          </button>
        ))}
      </div>

      {/* Price table */}
      <div className="rounded-xl overflow-hidden border border-gray-100">
        <div className="grid grid-cols-2 bg-gray-50 px-4 py-2 text-xs font-semibold text-gray-500">
          <span>日数</span>
          <span className="text-right">料金（税込）</span>
        </div>
        {dayLabels.map((day, i) => (
          <div
            key={day}
            className={`grid grid-cols-2 px-4 py-2.5 text-sm border-t border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}
          >
            <span className="text-gray-700">{day}</span>
            <span className="text-right font-bold" style={{ color: plan.accentColor }}>
              ¥{prices[i].toLocaleString()}〜
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PlansSection() {
  return (
    <section className="py-20 lg:py-28 bg-[oklch(0.98_0_0)]">
      <div className="container">
        <div className="text-center mb-12">
          <span className="section-label">OUR PLANS</span>
          <h2 className="text-3xl lg:text-4xl font-black text-[oklch(0.15_0.01_60)] mt-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            3つのプランから<br />あなたに最適な旅を
          </h2>
          <p className="text-[oklch(0.5_0.02_155)] mt-3">旅のスタイルや予算に合わせてお選びください</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-2xl border-2 p-6 flex flex-col ${
                plan.popular
                  ? "border-[oklch(0.35_0.12_155)] shadow-2xl shadow-[oklch(0.35_0.12_155)]/20 scale-105"
                  : "border-[oklch(0.9_0.01_155)]"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[oklch(0.75_0.12_75)] text-[oklch(0.12_0.02_155)] text-xs font-bold px-4 py-1.5 rounded-full">
                  人気 No.1
                </div>
              )}
              <div className="mb-4">
                <span
                  className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-3"
                  style={{ backgroundColor: `${plan.color}20`, color: plan.color }}
                >
                  {plan.badge}
                </span>
                <h3 className="text-xl font-black text-[oklch(0.15_0.01_60)]" style={{ fontFamily: "'Noto Serif JP', serif" }}>
                  {plan.name}
                </h3>
                <p className="text-xs text-[oklch(0.5_0.02_155)] mt-1">{plan.desc}</p>
              </div>

              <ul className="space-y-2 flex-1 mb-6">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[oklch(0.3_0.02_155)]">
                    <Check size={14} className="mt-0.5 flex-shrink-0" style={{ color: plan.color }} />
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href="/plan"
                className="block text-center py-3 rounded-xl font-bold text-sm transition-all duration-200"
                style={
                  plan.popular
                    ? { backgroundColor: plan.color, color: "white" }
                    : { border: `2px solid ${plan.color}`, color: plan.color }
                }
              >
                プラン詳細を見る
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/plan"
            className="inline-block border-2 border-[oklch(0.35_0.12_155)] text-[oklch(0.35_0.12_155)] hover:bg-[oklch(0.35_0.12_155)] hover:text-white px-8 py-3 rounded-full font-bold tracking-wide transition-all duration-200"
          >
            全プランの詳細を見る
          </Link>
        </div>

        {/* ===== 価格テーブルセクション ===== */}
        <div className="mt-16 max-w-5xl mx-auto">
          {/* 説明文 */}
          <p className="text-sm text-gray-600 leading-relaxed text-center mb-4 max-w-2xl mx-auto">
            以下はすべて税込価格です。業界最安水準の料金となっています。距離やドライバーの言語によって金額が変わりますので、お気軽にお問い合わせください。以下は英語ドライバーの価格です。日本語ドライバーをご希望の場合の料金についても、お見積もり時にご案内いたします。
          </p>

          {/* 詳細はこちらボタン */}
          <div className="text-center mb-10">
            <a
              href="https://sltcs.srilanka-charter.com/pricing"
              className="inline-block bg-[oklch(0.35_0.12_155)] hover:bg-[oklch(0.28_0.12_155)] text-white px-8 py-3 rounded-full font-bold text-sm tracking-wide transition-all duration-200 shadow-sm"
            >
              詳細はこちら
            </a>
          </div>

          {/* プランカード */}
          <div className="grid md:grid-cols-3 gap-6">
            {pricingData.map((plan) => (
              <PlanPriceCard key={plan.id} plan={plan} />
            ))}
          </div>
        </div>
        {/* ===== /価格テーブルセクション ===== */}
      </div>
    </section>
  );
}
