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
    features: ["政府公認 Tourist Driver 手配", "観光地での同行・解説", "日本語対応の現地統括", "サファリ・アクティビティ手配", "追加料金なしのガイド手配"],
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
      </div>
    </section>
  );
}
