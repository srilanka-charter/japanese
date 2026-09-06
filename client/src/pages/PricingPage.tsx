import { useState } from "react";
import { AlertTriangle, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { useSEO } from "@/hooks/useSEO";

const PRICING_TITLE = "スリランカタクシーチャーターサービスの料金(価格)とは？";
const PRICING_DESCRIPTION = "スリランカタクシーチャーターサービス（SLTCS）の料金・価格一覧。Sedan・Van・Big Vanの車種別に、スリランカ周遊の専用車チャーター料金をご案内します。ご旅程に合わせたお見積もりも日本語で承ります。";

const bronzePlan = {
  name: "ブロンズプラン",
  badge: "BRONZE",
  desc: "移動中心で、価格を重視する方におすすめのプランです。",
  accentColor: "#c8a96e",
  pricing: {
    sedan: [45000, 50000, 59000, 72000, 85000, 99000, 112000],
    van: [52000, 59000, 71000, 87000, 103000, 120000, 136000],
    bigvan: [60000, 65000, 79000, 97000, 115000, 134000, 152000],
  },
};

const days = [2, 3, 4, 5, 6, 7, 8];

const vehicleTypes = [
  { key: "sedan", label: "Sedan（〜3人）" },
  { key: "van", label: "Van（3〜6人）" },
  { key: "bigvan", label: "Big Van（6〜9人）" },
];

function PlanPricingTable({ plan }: { plan: typeof bronzePlan }) {
  const [activeVehicle, setActiveVehicle] = useState<"sedan" | "van" | "bigvan">("sedan");

  return (
    <div className="mt-6">
      {/* Vehicle tabs */}
      <div className="flex gap-2 mb-4 flex-wrap">
        {vehicleTypes.map((v) => (
          <button
            key={v.key}
            onClick={() => setActiveVehicle(v.key as "sedan" | "van" | "bigvan")}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
              activeVehicle === v.key
                ? "text-[#0a1a12] shadow-md"
                : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
            }`}
            style={activeVehicle === v.key ? { backgroundColor: plan.accentColor } : {}}
          >
            {v.label}
          </button>
        ))}
      </div>

      {/* Price table */}
      <div className="overflow-x-auto rounded-xl border border-white/10">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left py-3 px-4 text-white/60 font-medium">日数</th>
              <th className="text-right py-3 px-4 text-white/60 font-medium">料金（税込）</th>
            </tr>
          </thead>
          <tbody>
            {days.map((d, i) => (
              <tr key={d} className={`border-b border-white/5 ${i % 2 === 0 ? "bg-white/5" : ""}`}>
                <td className="py-3 px-4 text-white/80">{d}日間</td>
                <td className="py-3 px-4 text-right font-bold text-white" style={{ color: plan.accentColor }}>
                  ¥{plan.pricing[activeVehicle][i].toLocaleString()}〜
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function PricingPage() {
  useSEO({
    title: PRICING_TITLE + " | SLTCS",
    description: PRICING_DESCRIPTION,
    path: "/pricing",
    jsonLdList: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "SLTCS スリランカタクシーチャーターサービス 料金プラン",
        "description": PRICING_DESCRIPTION,
        "provider": { "@type": "Organization", "name": "SLTCS", "url": "https://sltcs.srilanka-charter.com" },
        "areaServed": { "@type": "Country", "name": "Sri Lanka" },
        "url": "https://sltcs.srilanka-charter.com/pricing",
        "offers": [
          {
            "@type": "Offer",
            "name": "ブロンズプラン（2日間／Sedan）",
            "priceCurrency": "JPY",
            "price": "45000",
            "priceSpecification": {
              "@type": "PriceSpecification",
              "price": "45000",
              "priceCurrency": "JPY",
              "minPrice": "45000",
              "maxPrice": "216000",
              "description": "2日間｜2泊3日から対応。Sedan（｜3名）・Van（3｜6名）・Big Van（6｜9名）の3車種。"
            },
            "eligibleQuantity": { "@type": "QuantitativeValue", "minValue": 1, "maxValue": 3, "unitText": "名" },
            "availability": "https://schema.org/InStock",
            "url": "https://sltcs.srilanka-charter.com/pricing"
          },
        ],
      },
    ],
    jsonLdIdPrefix: "pricing",
  });

  const scrollToContact = () => {
    if (window.location.pathname !== "/") {
      window.location.href = "/#contact";
      return;
    }
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#0a1a12]">
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f2318] via-[#0a1a12] to-[#060e0a]" />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: "rgba(245,208,106,0.08)" }} />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl" style={{ backgroundColor: "rgba(110,226,176,0.08)" }} />
        <div className="container relative z-10 text-center">
          <span className="inline-block text-xs font-bold tracking-widest text-[#f5d06a] uppercase mb-4 border border-[#f5d06a]/30 px-4 py-1.5 rounded-full">
            PRICING
          </span>
          <h1
            className="text-4xl lg:text-6xl font-black text-white leading-tight mt-2"
            style={{ fontFamily: "'Noto Serif JP', serif" }}
          >
            スリランカタクシー<br />チャーターサービスの価格
          </h1>
          <p className="text-white/60 mt-6 text-lg max-w-2xl mx-auto leading-relaxed">
            業界最安水準の透明な定額料金で、<br className="hidden sm:block" />
            安心・安全なスリランカの旅をご提供します。
          </p>
        </div>
      </section>

      {/* Intro text */}
      <section className="py-16 bg-[#0d1f16]">
        <div className="container max-w-3xl">
          <p className="text-white/80 leading-relaxed text-base lg:text-lg">
            スリランカタクシーチャーターサービス（SLTCS）では、厳選されたドライバーをできる限りお求めやすい価格でご利用いただくために、業界最安水準まで料金を抑えてご案内しております。現在より低い価格での提供となると、サービスの質を維持することが困難になります。
          </p>
        </div>
      </section>

      {/* Warning section */}
      <section className="py-16 bg-[#0a1a12]">
        <div className="container max-w-3xl">
          <div className="border border-[#e8a04a]/30 bg-[#e8a04a]/5 rounded-2xl p-6 lg:p-8">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle size={22} className="text-[#e8a04a] flex-shrink-0" />
              <h2 className="text-lg font-bold text-[#f5c878]">
                格安サービスご利用時のリスクについて
              </h2>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-5">
              価格の安さを全面に打ち出しているサービスでは、以下のようなトラブルが発生する可能性がありますのでご注意ください。
            </p>
            <ul className="space-y-3">
              {[
                "事前に伝えられた金額と最終的に請求される金額に大きな乖離がある",
                "問い合わせ段階から日本語での対応が受けられない",
                "古い中古車が手配される",
                "キックバックのある提携店に執拗に案内されて旅程に乱れが生じる",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-white/80">
                  <span className="text-[#e8a04a] mt-0.5 flex-shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-white/70 text-sm leading-relaxed mt-6">
              特に一見すると低価格に見えるサービスでは、距離制限が設けられており超過距離に対して追加料金が発生する契約になっているケースがあります。現地でドライバーが申告する走行距離が実際より長く、想定を大幅に上回る金額を請求されたという事例も少なくありません。
            </p>
            <p className="text-white/70 text-sm leading-relaxed mt-4">
              料金の内訳や注意点について詳しくは、
              <a
                href="/taxi-charter-basics/price-breakdown-risks"
                className="text-[#6ee2b0] underline underline-offset-2 hover:opacity-80"
              >
                スリランカのタクシーチャーター料金の内訳とは？安いサービスには気をつけよう！
              </a>
              をご覧ください。
            </p>
          </div>
        </div>
      </section>

      {/* SLTCS commitment */}
      <section className="py-16 bg-[#0d1f16]">
        <div className="container max-w-3xl">
          <div className="border border-[#6ee2b0]/20 bg-[#6ee2b0]/5 rounded-2xl p-6 lg:p-8">
            <h2 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "'Noto Serif JP', serif" }}>
              SLTCSの安心・透明な料金体系
            </h2>
            <p className="text-white/75 text-sm leading-relaxed mb-4">
              スリランカタクシーチャーターサービスでは、事前にいただいた旅程をもとに<strong className="text-white">定額の料金</strong>をご提示します。相談段階から日本語でやりとりができるため、安心して手続きを進めていただけます。
            </p>
            <p className="text-white/75 text-sm leading-relaxed">
              まだ旅程は決まっていないが、行きたいスポットは決まっているという場合でも、最適なルートを組んでお見積もりいたします。お気軽にお問い合わせください。
            </p>
          </div>
        </div>
      </section>

      {/* Price note */}
      <section className="py-8 bg-[#0a1a12]">
        <div className="container max-w-3xl">
          <p className="text-white/60 text-sm leading-relaxed text-center">
            以下はすべて<strong className="text-white/90">税込価格</strong>です。業界最安水準の料金となっています。距離やドライバーの言語によって金額が変わりますので、お気軽にお問い合わせください。以下は<strong className="text-white/90">英語ドライバー</strong>の価格です。日本語ドライバーをご希望の場合の料金についても、お見積もり時にご案内いたします。
          </p>
        </div>
      </section>

      {/* Bronze pricing table */}
      <section className="py-16 bg-[#0a1a12]">
        <div className="container max-w-5xl">
          <div className="rounded-2xl border border-white/10 bg-[#0d1f16] p-6 lg:p-8">
            <div className="flex items-center gap-3 mb-2 flex-wrap">
              <span
                className="inline-block text-xs font-bold px-3 py-1 rounded-full text-[#0a1a12]"
                style={{ backgroundColor: bronzePlan.accentColor }}
              >
                {bronzePlan.badge}
              </span>
              <h2 className="text-xl font-black text-white" style={{ fontFamily: "'Noto Serif JP', serif" }}>
                {bronzePlan.name}
              </h2>
            </div>
            <p className="text-sm text-white/55 mb-4 leading-relaxed">{bronzePlan.desc}</p>
            <PlanPricingTable plan={bronzePlan} />
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <p className="text-white/60 mb-6 text-sm leading-relaxed">
              旅程が決まっていない場合でも、行きたいスポットをお伝えいただければ最適なルートとお見積もりをご案内します。
            </p>
            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 text-[#0a1a12] px-10 py-4 rounded-full font-bold tracking-wide transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
              style={{ backgroundColor: "#6ee2b0" }}
            >
              <MessageCircle size={18} />
              無料でお見積もりを依頼する
            </button>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </div>
  );
}
