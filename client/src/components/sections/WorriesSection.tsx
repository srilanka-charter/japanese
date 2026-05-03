export default function WorriesSection() {
  const leftWorries = [
    {
      svgIcon: (
        <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6">
          <circle cx="16" cy="16" r="13" stroke="oklch(0.72 0.12 85)" strokeWidth="1.5" fill="oklch(0.18 0.06 155)" />
          <path d="M10 16c0-3.31 2.69-6 6-6s6 2.69 6 6c0 2-1 3.77-2.5 4.87V22h-7v-1.13C11 19.77 10 18 10 16z" stroke="oklch(0.72 0.12 85)" strokeWidth="1.2" fill="none" />
          <path d="M13 22v1a1 1 0 001 1h4a1 1 0 001-1v-1" stroke="oklch(0.72 0.12 85)" strokeWidth="1.2" />
          <circle cx="16" cy="11" r="1" fill="oklch(0.72 0.12 85)" />
        </svg>
      ),
      text: "言葉が通じるか不安",
    },
    {
      svgIcon: (
        <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6">
          <circle cx="16" cy="16" r="13" stroke="oklch(0.72 0.12 85)" strokeWidth="1.5" fill="oklch(0.18 0.06 155)" />
          <rect x="8" y="14" width="16" height="8" rx="2" stroke="oklch(0.72 0.12 85)" strokeWidth="1.2" />
          <rect x="10" y="11" width="12" height="5" rx="2" stroke="oklch(0.72 0.12 85)" strokeWidth="1.2" />
          <circle cx="11" cy="22" r="1.5" fill="oklch(0.72 0.12 85)" />
          <circle cx="21" cy="22" r="1.5" fill="oklch(0.72 0.12 85)" />
        </svg>
      ),
      text: "移動手段の確保が難しい",
    },
    {
      svgIcon: (
        <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6">
          <circle cx="16" cy="16" r="13" stroke="oklch(0.72 0.12 85)" strokeWidth="1.5" fill="oklch(0.18 0.06 155)" />
          <path d="M10 20l3-8 3 5 2-3 3 6" stroke="oklch(0.72 0.12 85)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="16" cy="12" r="1.5" fill="oklch(0.72 0.12 85)" />
        </svg>
      ),
      text: "観光地への行き方がわからない",
    },
    {
      svgIcon: (
        <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6">
          <circle cx="16" cy="16" r="13" stroke="oklch(0.72 0.12 85)" strokeWidth="1.5" fill="oklch(0.18 0.06 155)" />
          <circle cx="16" cy="16" r="6" stroke="oklch(0.72 0.12 85)" strokeWidth="1.2" />
          <path d="M16 12v4l2.5 2.5" stroke="oklch(0.72 0.12 85)" strokeWidth="1.3" strokeLinecap="round" />
        </svg>
      ),
      text: "時間通りに動けるか心配",
    },
  ];

  const rightWorries = [
    {
      svgIcon: (
        <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6">
          <circle cx="16" cy="16" r="13" stroke="oklch(0.72 0.12 85)" strokeWidth="1.5" fill="oklch(0.18 0.06 155)" />
          <path d="M16 10c-2.21 0-4 1.79-4 4 0 1.5.83 2.81 2.05 3.5L14 20h4l-.05-2.5C19.17 16.81 20 15.5 20 14c0-2.21-1.79-4-4-4z" stroke="oklch(0.72 0.12 85)" strokeWidth="1.2" fill="none" />
          <path d="M13 20h6" stroke="oklch(0.72 0.12 85)" strokeWidth="1.2" strokeLinecap="round" />
          <circle cx="16" cy="22" r="1" fill="oklch(0.72 0.12 85)" />
        </svg>
      ),
      text: "ぼったくりが心配",
    },
    {
      svgIcon: (
        <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6">
          <circle cx="16" cy="16" r="13" stroke="oklch(0.72 0.12 85)" strokeWidth="1.5" fill="oklch(0.18 0.06 155)" />
          <rect x="9" y="15" width="14" height="7" rx="2" stroke="oklch(0.72 0.12 85)" strokeWidth="1.2" />
          <rect x="11" y="12" width="10" height="5" rx="2" stroke="oklch(0.72 0.12 85)" strokeWidth="1.2" />
          <text x="13" y="20" fontSize="5" fill="oklch(0.72 0.12 85)" fontWeight="bold">TAXI</text>
          <circle cx="12" cy="22" r="1.2" fill="oklch(0.72 0.12 85)" />
          <circle cx="20" cy="22" r="1.2" fill="oklch(0.72 0.12 85)" />
        </svg>
      ),
      text: "タクシーの安全性が不明",
    },
    {
      svgIcon: (
        <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6">
          <circle cx="16" cy="16" r="13" stroke="oklch(0.72 0.12 85)" strokeWidth="1.5" fill="oklch(0.18 0.06 155)" />
          <circle cx="12" cy="13" r="2.5" stroke="oklch(0.72 0.12 85)" strokeWidth="1.2" />
          <circle cx="20" cy="13" r="2.5" stroke="oklch(0.72 0.12 85)" strokeWidth="1.2" />
          <path d="M8 22c0-2.21 1.79-4 4-4h8c2.21 0 4 1.79 4 4" stroke="oklch(0.72 0.12 85)" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      ),
      text: "子連れ・高齢者同伴で不安",
    },
    {
      svgIcon: (
        <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6">
          <circle cx="16" cy="16" r="13" stroke="oklch(0.72 0.12 85)" strokeWidth="1.5" fill="oklch(0.18 0.06 155)" />
          <rect x="9" y="11" width="14" height="11" rx="1.5" stroke="oklch(0.72 0.12 85)" strokeWidth="1.2" />
          <path d="M12 11V9M20 11V9" stroke="oklch(0.72 0.12 85)" strokeWidth="1.2" strokeLinecap="round" />
          <circle cx="20" cy="19" r="2" fill="oklch(0.72 0.12 85)" fillOpacity="0.6" />
          <path d="M9 15h14" stroke="oklch(0.72 0.12 85)" strokeWidth="1" />
        </svg>
      ),
      text: "観光地の説明が欲しい",
    },
  ];

  return (
    <section className="py-20 bg-[oklch(0.10_0.04_155)]">
      <div className="container">
        {/* ===== 不安カード + 中央タイトル ===== */}
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-4 mb-12">

          {/* 中央タイトル（スマホ版：最上部表示） */}
          <div className="flex lg:hidden w-full flex-col items-center justify-center text-center px-4 py-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[oklch(0.72_0.12_85)] text-xs">◆</span>
              <span className="text-xs font-bold tracking-[0.35em] text-[oklch(0.72_0.12_85)] uppercase">YOUR WORRIES</span>
              <span className="text-[oklch(0.72_0.12_85)] text-xs">◆</span>
            </div>
            <div
              className="relative flex items-center justify-center p-8"
              style={{
                background: 'radial-gradient(ellipse at center, oklch(0.18 0.08 155) 0%, oklch(0.10 0.04 155) 70%)',
                clipPath: 'polygon(15% 0%, 85% 0%, 100% 15%, 100% 85%, 85% 100%, 15% 100%, 0% 85%, 0% 15%)',
                border: '1px solid oklch(0.72 0.12 85 / 0.4)',
                minWidth: '220px',
              }}
            >
              <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[oklch(0.72_0.12_85)]" />
              <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[oklch(0.72_0.12_85)]" />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[oklch(0.72_0.12_85)]" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[oklch(0.72_0.12_85)]" />
              <h2
                className="text-2xl font-black text-white leading-snug"
                style={{ fontFamily: "'Noto Serif JP', serif", textShadow: '0 0 30px oklch(0.72 0.12 85 / 0.3)' }}
              >
                スリランカ旅行<br />こんな不安、<br />ありませんか？
              </h2>
            </div>
            <div className="mt-4">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 0L10 6H16L11 9L13 16L8 12L3 16L5 9L0 6H6L8 0Z" fill="oklch(0.72 0.12 85)" fillOpacity="0.5" />
              </svg>
            </div>
          </div>

          {/* 左カード群 */}
          <div className="flex flex-col gap-3 w-full lg:w-[30%]">
            {leftWorries.map((w, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-4 py-3 rounded-xl border border-[oklch(0.72_0.12_85)]/30 bg-[oklch(0.14_0.05_155)] hover:border-[oklch(0.72_0.12_85)]/60 transition-all duration-200"
                style={{ boxShadow: 'inset 0 0 12px oklch(0.72 0.12 85 / 0.04)' }}
              >
                <div className="w-10 h-10 rounded-lg border border-[oklch(0.72_0.12_85)]/40 bg-[oklch(0.18_0.06_155)] flex items-center justify-center flex-shrink-0">
                  {w.svgIcon}
                </div>
                <span className="text-white/85 text-sm font-medium">{w.text}</span>
              </div>
            ))}
          </div>

          {/* 中央タイトル（PC版のみ表示） */}
          <div className="hidden lg:flex flex-1 flex-col items-center justify-center text-center px-4 lg:px-8 py-8">
            {/* 上部デコレーション */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[oklch(0.72_0.12_85)] text-xs">◆</span>
              <span className="text-xs font-bold tracking-[0.35em] text-[oklch(0.72_0.12_85)] uppercase">YOUR WORRIES</span>
              <span className="text-[oklch(0.72_0.12_85)] text-xs">◆</span>
            </div>
            {/* 八角形風の枠 */}
            <div
              className="relative flex items-center justify-center p-8"
              style={{
                background: 'radial-gradient(ellipse at center, oklch(0.18 0.08 155) 0%, oklch(0.10 0.04 155) 70%)',
                clipPath: 'polygon(15% 0%, 85% 0%, 100% 15%, 100% 85%, 85% 100%, 15% 100%, 0% 85%, 0% 15%)',
                border: '1px solid oklch(0.72 0.12 85 / 0.4)',
                minWidth: '220px',
              }}
            >
              {/* ゴールドコーナー装飾 */}
              <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[oklch(0.72_0.12_85)]" />
              <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[oklch(0.72_0.12_85)]" />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[oklch(0.72_0.12_85)]" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[oklch(0.72_0.12_85)]" />
              <h2
                className="text-2xl lg:text-3xl font-black text-white leading-snug"
                style={{ fontFamily: "'Noto Serif JP', serif", textShadow: '0 0 30px oklch(0.72 0.12 85 / 0.3)' }}
              >
                スリランカ旅行<br />こんな不安、<br />ありませんか？
              </h2>
            </div>
            {/* 下部デコレーション */}
            <div className="mt-4">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 0L10 6H16L11 9L13 16L8 12L3 16L5 9L0 6H6L8 0Z" fill="oklch(0.72 0.12 85)" fillOpacity="0.5" />
              </svg>
            </div>
          </div>

          {/* 右カード群 */}
          <div className="flex flex-col gap-3 w-full lg:w-[30%]">
            {rightWorries.map((w, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-4 py-3 rounded-xl border border-[oklch(0.72_0.12_85)]/30 bg-[oklch(0.14_0.05_155)] hover:border-[oklch(0.72_0.12_85)]/60 transition-all duration-200"
                style={{ boxShadow: 'inset 0 0 12px oklch(0.72 0.12 85 / 0.04)' }}
              >
                <div className="w-10 h-10 rounded-lg border border-[oklch(0.72_0.12_85)]/40 bg-[oklch(0.18_0.06_155)] flex items-center justify-center flex-shrink-0">
                  {w.svgIcon}
                </div>
                <span className="text-white/85 text-sm font-medium">{w.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ===== すべての不安をSLTCSが解決します（そのまま） ===== */}
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
