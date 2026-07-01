import { useEffect, useState, useCallback } from "react";
import { ChevronDown, MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/BHJpmNEJeYmvs6JETpsBKm/hero_sigiriya-ZeDHtHYKtDzHRVw7Kf5mNK.webp",
    label: "TAXI CHARTER",
    title: "スリランカを\nタクシーチャーターで\n駆け抜ける",
    subtitle: "日本語対応の専用車・カーチャーターで、スリランカを自由に旅しよう",
    badge: "スリランカ全土",
    isH1: true,
  },
  {
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/BHJpmNEJeYmvs6JETpsBKm/hero_train-e4cT44tSVSFMse7HoCf8pK.webp",
    label: "TEA TRAIN",
    title: "紅茶列車で\n駆け抜ける\n高原の絶景",
    subtitle: "エッラの九連アーチ橋を渡る青い列車と、広大な茶畑の風景",
    badge: "キャンディ〜エッラ",
  },
  {
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/BHJpmNEJeYmvs6JETpsBKm/hero_safari-JViTbLqQxwmS9rhf9nSVyM.webp",
    label: "SAFARI",
    title: "野生の王国へ\nジープで\n踏み込む",
    subtitle: "ヤラ国立公園でヒョウとゾウが共存する、息をのむ大自然",
    badge: "ヤラ国立公園",
  },
  {
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/BHJpmNEJeYmvs6JETpsBKm/hero_sigiriya-ZeDHtHYKtDzHRVw7Kf5mNK.webp",
    label: "WORLD HERITAGE",
    title: "天空の宮殿と\n聖なる仏歯寺\n世界遺産の旅",
    subtitle: "シーギリヤロックとキャンディ仏歯寺——スリランカが誇る二大世界遺産",
    badge: "シーギリヤ・キャンディ",
  },
  {
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/BHJpmNEJeYmvs6JETpsBKm/hero_surfing-6iWVFB3AcyCRfbJVEa6GUh.webp",
    label: "INDIAN OCEAN",
    title: "インド洋の\n碧い波に\n乗り込め",
    subtitle: "アルガム湾の透き通る海——サーファーの聖地で最高の波を体感",
    badge: "アルガム湾",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const goTo = useCallback((idx: number) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(idx);
      setAnimating(false);
    }, 600);
  }, [animating]);

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length);
  }, [current, goTo]);

  const next = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, goTo]);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const slide = slides[current];

  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
      {/* Background images */}
      {slides.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-700 ease-in-out"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <img
            src={s.image}
            alt={s.label}
            className="w-full h-full object-cover"
            style={{ transform: i === current ? "scale(1.03)" : "scale(1)", transition: "transform 6s ease-out" }}
            {...(i === 0
              ? { fetchPriority: "high" as const, loading: "eager" as const }
              : { loading: "lazy" as const })}
          />
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div
        className="relative z-10 h-full flex flex-col justify-center px-8 lg:px-20 xl:px-28"
        style={{
          opacity: loaded ? 1 : 0,
          transform: loaded ? "none" : "translateY(20px)",
          transition: "opacity 1s ease, transform 1s ease",
        }}
      >
        {/* Top label */}
        <div
          className="mb-6"
          style={{
            opacity: animating ? 0 : 1,
            transform: animating ? "translateY(-10px)" : "translateY(0)",
            transition: "opacity 0.5s ease, transform 0.5s ease",
          }}
        >
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.3em] text-white/60 uppercase">
            <span className="w-8 h-px bg-[oklch(0.75_0.12_75)]" />
            SRI LANKA PRIVATE CHARTER SERVICE
            <span className="w-8 h-px bg-[oklch(0.75_0.12_75)]" />
          </span>
        </div>

        {/* Slide label badge */}
        <div
          className="mb-4"
          style={{
            opacity: animating ? 0 : 1,
            transform: animating ? "translateX(-20px)" : "translateX(0)",
            transition: "opacity 0.5s ease 0.1s, transform 0.5s ease 0.1s",
          }}
        >
          <span className="inline-block text-xs font-bold tracking-[0.2em] text-[oklch(0.75_0.12_75)] border border-[oklch(0.75_0.12_75)]/40 px-3 py-1 rounded-full">
            {slide.label}
          </span>
        </div>

        {/* Main title */}
        <div
          style={{
            opacity: animating ? 0 : 1,
            transform: animating ? "translateY(20px)" : "translateY(0)",
            transition: "opacity 0.6s ease 0.15s, transform 0.6s ease 0.15s",
          }}
        >
          {slide.isH1 ? (
            <>
              {/* SEO用H1（視覚的に非表示・検索エンジンには認識される） */}
              <h1 className="sr-only">スリランカタクシーチャーターならSLTCS｜日本語対応の専用車で自由に周遊</h1>
              {/* ビジュアル用テキスト（divに変更・見た目は同じ） */}
              <div
                className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[1.05] mb-6"
                style={{
                  fontFamily: "'Noto Serif JP', serif",
                  textShadow: "0 4px 32px rgba(0,0,0,0.5)",
                  whiteSpace: "pre-line",
                }}
              >
                {slide.title}
              </div>
            </>
          ) : (
            <h2
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[1.05] mb-6"
              style={{
                fontFamily: "'Noto Serif JP', serif",
                textShadow: "0 4px 32px rgba(0,0,0,0.5)",
                whiteSpace: "pre-line",
              }}
            >
              {slide.title}
            </h2>
          )}
        </div>

        {/* Subtitle */}
        <div
          style={{
            opacity: animating ? 0 : 1,
            transform: animating ? "translateY(10px)" : "translateY(0)",
            transition: "opacity 0.5s ease 0.25s, transform 0.5s ease 0.25s",
          }}
        >
          <p className="text-white/70 text-sm lg:text-base max-w-lg mb-8 leading-relaxed">
            {slide.subtitle}
          </p>
        </div>

        {/* Badges — 常時表示 */}
        <div className="flex flex-wrap gap-2 mb-10">
          {["日本語対応", "完全チャーター", "政府公認ドライバー"].map((b) => (
            <span
              key={b}
              className="text-xs font-medium text-white/90 border border-white/30 px-3 py-1 rounded-full backdrop-blur-sm bg-white/10"
            >
              {b}
            </span>
          ))}
        </div>

        {/* CTA — 常時表示 */}
        <div>
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 bg-[oklch(0.75_0.12_75)] hover:bg-[oklch(0.65_0.1_75)] text-[oklch(0.1_0.02_155)] font-bold px-8 py-4 rounded-full text-sm tracking-wide transition-all duration-300 hover:scale-105 shadow-2xl"
          >
            <MessageCircle size={16} />
            無料で旅を相談する
          </button>
        </div>
      </div>

      {/* Slide controls */}
      <div className="absolute bottom-24 left-8 lg:left-20 xl:left-28 z-20 flex items-center gap-4">
        {/* Dots */}
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="transition-all duration-300"
              aria-label={`Slide ${i + 1}`}
            >
              <span
                className="block rounded-full transition-all duration-300"
                style={{
                  width: i === current ? "2rem" : "0.5rem",
                  height: "0.5rem",
                  backgroundColor: i === current ? "oklch(0.75 0.12 75)" : "rgba(255,255,255,0.4)",
                }}
              />
            </button>
          ))}
        </div>
        {/* Counter */}
        <span className="text-white/40 text-xs font-mono tracking-widest">
          {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        </span>
      </div>

      {/* Arrow controls */}
      <div className="absolute bottom-20 right-8 lg:right-20 z-20 flex gap-3">
        <button
          onClick={prev}
          className="w-11 h-11 rounded-full border border-white/30 flex items-center justify-center text-white/70 hover:text-white hover:border-white/60 hover:bg-white/10 transition-all duration-200 backdrop-blur-sm"
          aria-label="前のスライド"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={next}
          className="w-11 h-11 rounded-full border border-white/30 flex items-center justify-center text-white/70 hover:text-white hover:border-white/60 hover:bg-white/10 transition-all duration-200 backdrop-blur-sm"
          aria-label="次のスライド"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Slide location badge */}
      <div className="absolute top-1/2 right-8 lg:right-20 -translate-y-1/2 z-20">
        <div
          className="text-right"
          style={{
            opacity: animating ? 0 : 1,
            transform: animating ? "translateX(10px)" : "translateX(0)",
            transition: "opacity 0.5s ease 0.2s, transform 0.5s ease 0.2s",
          }}
        >
          <p className="text-white/40 text-xs tracking-widest uppercase mb-1">LOCATION</p>
          <p className="text-white font-bold text-sm">{slide.badge}</p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1">
        <span className="text-white/40 text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <ChevronDown size={16} className="text-white/40 animate-bounce" />
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20 h-0.5 bg-white/10">
        <div
          className="h-full bg-[oklch(0.75_0.12_75)]"
          style={{
            width: `${((current + 1) / slides.length) * 100}%`,
            transition: "width 0.6s ease",
          }}
        />
      </div>
    </section>
  );
}
