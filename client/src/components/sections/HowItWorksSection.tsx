const steps = [
  {
    num: "01",
    title: "お問い合わせ",
    desc: "フォームまたはメールで旅の日程・人数・ご要望をお知らせください",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3" />
        <path d="M10 16C10 14.9 10.9 14 12 14H36C37.1 14 38 14.9 38 16V30C38 31.1 37.1 32 36 32H28L24 36L20 32H12C10.9 32 10 31.1 10 30V16Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" fill="none" />
        <circle cx="18" cy="23" r="1.5" fill="currentColor" />
        <circle cx="24" cy="23" r="1.5" fill="currentColor" />
        <circle cx="30" cy="23" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "プラン提案・見積もり",
    desc: "24時間以内に最適なプランと見積もりをご提案します",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3" />
        <rect x="13" y="10" width="22" height="28" rx="2" stroke="currentColor" strokeWidth="1.8" fill="none" />
        <line x1="18" y1="17" x2="30" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="18" y1="22" x2="30" y2="22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="18" y1="27" x2="24" y2="27" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M27 30L29 32L33 27" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "ご予約・お支払い",
    desc: "内容にご納得いただけたらご予約確定。お支払い方法はご相談ください",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3" />
        <rect x="10" y="16" width="28" height="18" rx="2.5" stroke="currentColor" strokeWidth="1.8" fill="none" />
        <line x1="10" y1="22" x2="38" y2="22" stroke="currentColor" strokeWidth="1.8" />
        <path d="M22 30L25 33L32 26" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "旅行前の最終確認",
    desc: "出発前にドライバーの情報・集合場所・旅程の最終確認をいたします",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3" />
        <circle cx="24" cy="24" r="12" stroke="currentColor" strokeWidth="1.8" fill="none" />
        <line x1="24" y1="14" x2="24" y2="24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="24" y1="24" x2="30" y2="28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="24" cy="24" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "スリランカで最高の旅",
    desc: "専属ドライバーが全行程をサポート。忘れられない旅をお楽しみください",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3" />
        <ellipse cx="24" cy="36" rx="10" ry="2.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M24 36 C23 30 22 26 24 20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none" />
        <path d="M24 20 C20 17 15 18 14 14 C18 14 22 17 24 20Z" stroke="currentColor" strokeWidth="1.2" fill="none" />
        <path d="M24 20 C28 17 33 18 34 14 C30 14 26 17 24 20Z" stroke="currentColor" strokeWidth="1.2" fill="none" />
        <path d="M24 20 C22 15 23 11 24 10 C25 11 26 15 24 20Z" stroke="currentColor" strokeWidth="1.2" fill="none" />
        <circle cx="34" cy="18" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
      </svg>
    ),
  },
];

export default function HowItWorksSection() {
  return (
    <section
      className="relative py-20 lg:py-28 overflow-hidden"
      style={{
        background: "radial-gradient(ellipse at 20% 50%, oklch(0.15 0.04 155) 0%, oklch(0.08 0.02 155) 60%)",
      }}
    >
      {/* 背景装飾 */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 5% 10%, oklch(0.75 0.12 75) 0%, transparent 30%), radial-gradient(circle at 95% 90%, oklch(0.35 0.08 155) 0%, transparent 30%)",
        }}
      />
      <div
        className="pointer-events-none absolute top-0 left-0 w-64 h-64 opacity-15"
        style={{
          background: "conic-gradient(from 120deg at 0% 0%, oklch(0.75 0.12 75), transparent 40%)",
        }}
      />

      <div className="container relative z-10">
        {/* ヘッダー */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            <svg width="8" height="8" viewBox="0 0 8 8" className="text-[oklch(0.75_0.12_75)]">
              <rect x="1" y="1" width="6" height="6" transform="rotate(45 4 4)" fill="currentColor" />
            </svg>
          </div>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[oklch(0.75_0.12_75)]" />
            <span
              className="text-[oklch(0.75_0.12_75)] text-xs tracking-[0.35em] font-semibold"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              HOW IT WORKS
            </span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[oklch(0.75_0.12_75)]" />
          </div>

          <h2
            className="text-4xl lg:text-5xl font-black text-white mb-5"
            style={{ fontFamily: "'Noto Serif JP', serif" }}
          >
            ご予約からご利用の流れ
          </h2>

          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-[oklch(0.75_0.12_75)]/50" />
            <div
              className="w-2.5 h-2.5 rounded-full border-2 border-[oklch(0.75_0.12_75)]"
              style={{ background: "oklch(0.35 0.1 155)" }}
            />
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-[oklch(0.75_0.12_75)]/50" />
          </div>
        </div>

        {/* カードグリッド */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 lg:gap-4">
          {steps.map((step, i) => (
            <div key={i} className="relative flex flex-col">
              {/* ステップ番号バッジ */}
              <div className="flex justify-center mb-[-20px] relative z-10">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center font-black text-lg"
                  style={{
                    background: "oklch(0.12 0.03 155)",
                    border: "2px solid oklch(0.75 0.12 75)",
                    boxShadow: "0 0 16px oklch(0.75 0.12 75 / 0.5), inset 0 0 8px oklch(0.75 0.12 75 / 0.1)",
                    color: "oklch(0.75 0.12 75)",
                    fontFamily: "'Cormorant Garamond', serif",
                  }}
                >
                  {step.num}
                </div>
              </div>

              {/* カード本体 */}
              <div
                className="flex-1 flex flex-col items-center text-center pt-8 pb-7 px-5 rounded-2xl relative overflow-hidden"
                style={{
                  background: "linear-gradient(160deg, oklch(0.14 0.04 155) 0%, oklch(0.10 0.02 155) 100%)",
                  border: "1.5px solid oklch(0.75 0.12 75 / 0.5)",
                  boxShadow: "0 0 24px oklch(0.75 0.12 75 / 0.12), inset 0 0 40px oklch(0.75 0.12 75 / 0.04)",
                }}
              >
                {/* コーナー装飾 */}
                <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-[oklch(0.75_0.12_75)]/60" />
                <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-[oklch(0.75_0.12_75)]/60" />
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-[oklch(0.75_0.12_75)]/60" />
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-[oklch(0.75_0.12_75)]/60" />

                {/* アイコン */}
                <div
                  className="text-[oklch(0.75_0.12_75)] mb-4 mt-1"
                  style={{ filter: "drop-shadow(0 0 8px oklch(0.75 0.12 75 / 0.6))" }}
                >
                  {step.icon}
                </div>

                {/* タイトル */}
                <h3
                  className="font-bold text-white text-sm mb-3 leading-snug"
                  style={{ fontFamily: "'Noto Serif JP', serif" }}
                >
                  {step.title}
                </h3>

                {/* 区切り線 */}
                <div className="w-8 h-px bg-[oklch(0.75_0.12_75)]/40 mb-3" />

                {/* 説明文 */}
                <p className="text-white/55 text-xs leading-relaxed">{step.desc}</p>
              </div>

              {/* 矢印コネクター（PC） */}
              {i < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-3 z-20 items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path
                      d="M4 9H14M14 9L10 5M14 9L10 13"
                      stroke="oklch(0.75 0.12 75)"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
