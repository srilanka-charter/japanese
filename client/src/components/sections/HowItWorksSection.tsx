const steps = [
  { num: "01", icon: "💬", title: "お問い合わせ", desc: "フォームまたはメールで旅の日程・人数・ご要望をお知らせください" },
  { num: "02", icon: "📋", title: "プラン提案・見積もり", desc: "24時間以内に最適なプランと見積もりをご提案します" },
  { num: "03", icon: "💳", title: "ご予約・お支払い", desc: "内容にご納得いただけたらご予約確定。お支払い方法はご相談ください" },
  { num: "04", icon: "🕐", title: "旅行前の最終確認", desc: "出発前にドライバーの情報・集合場所・旅程の最終確認をいたします" },
  { num: "05", icon: "🏝️", title: "スリランカで最高の旅", desc: "専属ドライバーが全行程をサポート。忘れられない旅をお楽しみください" },
];

export default function HowItWorksSection() {
  return (
    <section className="py-20 lg:py-28 bg-[oklch(0.12_0.02_155)]">
      <div className="container">
        <div className="mb-12">
          <span className="section-label">HOW IT WORKS</span>
          <h2 className="text-3xl lg:text-4xl font-black text-white mt-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            ご利用の流れ
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 h-full hover:bg-white/10 transition-colors duration-200">
                <div className="text-[oklch(0.75_0.12_75)] font-black text-3xl mb-3" style={{ fontFamily: "'Noto Serif JP', serif" }}>
                  {step.num}
                </div>
                <div className="text-2xl mb-3">{step.icon}</div>
                <h3 className="font-bold text-white mb-2 text-sm">{step.title}</h3>
                <p className="text-white/50 text-xs leading-relaxed">{step.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-2 text-[oklch(0.75_0.12_75)] text-lg z-10">→</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
