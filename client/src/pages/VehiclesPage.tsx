import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { Users, Briefcase, Check } from "lucide-react";

const vehicles = [
  {
    id: "sedan",
    name: "セダン",
    subtitle: "Toyota Allion / Premio",
    image: "/manus-storage/car_sedan_0d7a34cc.jpg",
    capacity: "〜3名",
    luggage: "スーツケース2個",
    color: "oklch(0.35_0.12_155)",
    features: [
      "エアコン完備",
      "USB充電ポート",
      "Wi-Fi対応（オプション）",
      "ミネラルウォーター完備",
      "清潔な内装",
    ],
    desc: "カップルや少人数のグループに最適。快適な乗り心地で、スリランカの観光地を効率よく巡ることができます。",
    bestFor: "2〜3名のカップル・友人旅行",
  },
  {
    id: "minivan",
    name: "ミニバン",
    subtitle: "Toyota KDH / Hiace",
    image: "/manus-storage/car_van_117a1299.jpg",
    capacity: "〜8名",
    luggage: "スーツケース5個",
    color: "oklch(0.55_0.12_155)",
    popular: true,
    features: [
      "エアコン完備",
      "USB充電ポート",
      "広々とした室内空間",
      "ミネラルウォーター完備",
      "荷物収納スペース充実",
    ],
    desc: "家族旅行や小グループに最も人気の車種。広い室内で長距離移動も快適。スリランカ観光の定番車両です。",
    bestFor: "4〜8名のファミリー・グループ旅行",
  },
  {
    id: "bigvan",
    name: "ラージバン",
    subtitle: "Rosa Bus / Coaster",
    image: "/manus-storage/car_bigvan_a488c4dd.jpg",
    capacity: "〜20名",
    luggage: "大型荷物対応",
    color: "oklch(0.65_0.1_75)",
    features: [
      "エアコン完備",
      "大型荷物スペース",
      "マイクロバス仕様",
      "グループ向け設備",
      "長距離移動対応",
    ],
    desc: "大型グループや企業視察に対応。20名まで乗車可能な大型バスで、グループ全員が一緒に移動できます。",
    bestFor: "9〜20名の大型グループ・企業旅行",
  },
];

export default function VehiclesPage() {
  const scrollToContact = () => {
    window.location.href = "/#contact";
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <div className="bg-[oklch(0.12_0.02_155)] pt-28 pb-16 text-center">
        <span className="section-label">VEHICLES</span>
        <h1 className="text-4xl lg:text-5xl font-black text-white mt-3" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          車両ラインナップ
        </h1>
        <p className="text-white/60 mt-4 max-w-xl mx-auto">
          人数・旅のスタイルに合わせた最適な車両をご用意しています
        </p>
      </div>

      {/* Vehicles */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-5xl mx-auto">
          <div className="space-y-10">
            {vehicles.map((v, i) => (
              <div
                key={v.id}
                className={`rounded-2xl border-2 overflow-hidden ${v.popular ? "border-[oklch(0.35_0.12_155)] shadow-xl" : "border-[oklch(0.9_0.01_155)]"}`}
              >
                {v.popular && (
                  <div className="bg-[oklch(0.35_0.12_155)] text-white text-center py-2 text-sm font-bold tracking-wide">
                    ★ 最も人気の車種です
                  </div>
                )}
                <div className={`grid lg:grid-cols-2 ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                  <div className="relative h-56 lg:h-auto">
                    <img
                      src={v.image}
                      alt={v.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
                  </div>
                  <div className="p-8 lg:p-10">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h2 className="text-2xl lg:text-3xl font-black text-[oklch(0.15_0.01_60)]" style={{ fontFamily: "'Noto Serif JP', serif" }}>
                          {v.name}
                        </h2>
                        <p className="text-sm text-[oklch(0.5_0.02_155)]">{v.subtitle}</p>
                      </div>
                    </div>

                    <div className="flex gap-4 mb-4">
                      <div className="flex items-center gap-1.5 text-sm text-[oklch(0.35_0.02_155)]">
                        <Users size={14} style={{ color: v.color }} />
                        {v.capacity}
                      </div>
                      <div className="flex items-center gap-1.5 text-sm text-[oklch(0.35_0.02_155)]">
                        <Briefcase size={14} style={{ color: v.color }} />
                        {v.luggage}
                      </div>
                    </div>

                    <p className="text-sm text-[oklch(0.4_0.02_155)] leading-relaxed mb-4">{v.desc}</p>

                    <div className="mb-4">
                      <p className="text-xs font-bold text-[oklch(0.35_0.05_155)] uppercase tracking-wide mb-2">おすすめ</p>
                      <p className="text-sm text-[oklch(0.3_0.02_155)] font-medium">{v.bestFor}</p>
                    </div>

                    <ul className="grid grid-cols-2 gap-1.5 mb-6">
                      {v.features.map((f, fi) => (
                        <li key={fi} className="flex items-center gap-1.5 text-xs text-[oklch(0.4_0.02_155)]">
                          <Check size={12} style={{ color: v.color }} className="flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={scrollToContact}
                      className="w-full py-3 rounded-xl font-bold text-sm text-white transition-all duration-200"
                      style={{ backgroundColor: v.color }}
                    >
                      この車両で予約する
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-[oklch(0.12_0.02_155)] rounded-2xl p-8 text-center">
            <h3 className="text-xl font-black text-white mb-3" style={{ fontFamily: "'Noto Serif JP', serif" }}>
              どの車両が最適かわからない場合は
            </h3>
            <p className="text-white/60 text-sm mb-6">人数・荷物量・旅のスタイルをお知らせいただければ、最適な車両をご提案します</p>
            <button
              onClick={scrollToContact}
              className="inline-block bg-[oklch(0.75_0.12_75)] hover:bg-[oklch(0.65_0.1_75)] text-[oklch(0.12_0.02_155)] px-10 py-4 rounded-full font-bold tracking-wide transition-all duration-200"
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
