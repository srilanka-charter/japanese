export default function WorriesSection() {
  const worries = [
    { icon: "🗣️", text: "言葉が通じるか不安" },
    { icon: "🚌", text: "移動手段の確保が難しい" },
    { icon: "💸", text: "ぼったくりが心配" },
    { icon: "🚕", text: "タクシーの安全性が不明" },
    { icon: "📍", text: "観光地への行き方がわからない" },
    { icon: "⏰", text: "時間通りに動けるか心配" },
    { icon: "👨‍👩‍👧", text: "子連れ・高齢者同伴で不安" },
    { icon: "🏨", text: "ホテルの手配も大変" },
  ];

  return (
    <section className="py-20 bg-[oklch(0.12_0.02_155)]">
      <div className="container">
        <div className="text-center mb-12">
          <span className="section-label">YOUR WORRIES</span>
          <h2 className="text-3xl lg:text-4xl font-black text-white mt-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            スリランカ旅行でこんな不安、<br />ありませんか？
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
          {worries.map((w, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition-colors duration-200">
              <span className="text-2xl mb-2 block">{w.icon}</span>
              <span className="text-white/80 text-sm">{w.text}</span>
            </div>
          ))}
        </div>

        <div className="bg-[oklch(0.35_0.12_155)]/30 border border-[oklch(0.35_0.12_155)]/40 rounded-2xl p-8 text-center">
          <h3 className="text-2xl lg:text-3xl font-black text-white mb-3" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            すべての不安を<span className="text-[oklch(0.75_0.12_75)]">SLTCSが解決します</span>
          </h3>
          <p className="text-white/70 mb-6">日本語対応の専属ドライバーが旅の<strong className="text-white">すべてをサポート</strong><br />あなたは旅を楽しむことだけに集中してください</p>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
            className="inline-block bg-[oklch(0.75_0.12_75)] hover:bg-[oklch(0.65_0.1_75)] text-[oklch(0.12_0.02_155)] px-8 py-3 rounded-full font-bold tracking-wide transition-all duration-200"
          >
            今すぐ相談する（無料）
          </a>
        </div>
      </div>
    </section>
  );
}
