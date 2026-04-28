import { Link } from "wouter";
import { Users, Briefcase, ChevronRight } from "lucide-react";

const vehicles = [
  {
    id: "sedan",
    name: "Sedan",
    subtitle: "〜大人3人",
    image: "/manus-storage/vehicle_sedan_ee212661.webp",
    bestFor: "カップル・少人数旅行（2〜3名）",
    capacity: "大人3人",
    luggage: "大きなスーツケース2個＋小さなスーツケース1個",
    features: ["エアコン完備", "コンパクトで取り回し良好", "市街地・短距離移動に最適", "ミネラルウォーター完備"],
    accentColor: "oklch(0.35_0.12_155)",
    accentHex: "#1a7a52",
    popular: false,
    badge: null,
  },
  {
    id: "van",
    name: "Van",
    subtitle: "〜大人6人",
    image: "/manus-storage/vehicle_van_de904967.webp",
    bestFor: "ファミリー・グループ旅行（4〜6名）",
    capacity: "大人6人",
    luggage: "大きなスーツケース8個",
    features: ["エアコン完備", "広々とした室内空間", "荷物収納スペース充実", "長距離移動も快適"],
    accentColor: "oklch(0.35_0.12_155)",
    accentHex: "#1a7a52",
    popular: true,
    badge: "★ 最も人気の車種",
  },
  {
    id: "bigvan",
    name: "Big Van",
    subtitle: "〜大人10人",
    image: "/manus-storage/vehicle_bigvan_7c49b85f.webp",
    bestFor: "大型グループ・企業旅行（7〜10名）",
    capacity: "大人10人",
    luggage: "大きなスーツケース10個",
    features: ["エアコン完備", "独立シート9席", "大型荷物スペース完備", "長距離移動対応"],
    accentColor: "oklch(0.55_0.1_75)",
    accentHex: "#b8924a",
    popular: false,
    badge: null,
  },
];

export default function VehiclesPreviewSection() {
  return (
    <section className="py-20 bg-white" id="vehicles-preview">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="section-label">VEHICLES</span>
          <h2
            className="text-3xl lg:text-4xl font-black text-[oklch(0.15_0.01_60)] mt-3"
            style={{ fontFamily: "'Noto Serif JP', serif" }}
          >
            あなたに最適な車両を手配
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            人数・荷物量・旅のスタイルに合わせて、Sedan・Van・Big Van の3タイプからご提案します
          </p>
        </div>

        {/* Vehicle cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {vehicles.map((v) => (
            <div
              key={v.id}
              className={`relative rounded-2xl overflow-hidden border bg-white shadow-sm flex flex-col transition-shadow hover:shadow-md ${
                v.popular ? "border-[#1a9e6e] ring-1 ring-[#1a9e6e]/20" : "border-gray-200"
              }`}
            >
              {/* Popular badge */}
              {v.badge && (
                <div className="absolute top-3 left-3 z-10 bg-[#1a9e6e] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow">
                  {v.badge}
                </div>
              )}

              {/* Vehicle image */}
              <div className="relative w-full h-44 overflow-hidden bg-gray-100">
                <img
                  src={v.image}
                  alt={`${v.name} ${v.subtitle}`}
                  className="w-full h-full object-cover object-center"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                {/* Name overlay */}
                <div className="absolute bottom-3 left-4">
                  <span className="text-white font-black text-xl" style={{ fontFamily: "'Noto Serif JP', serif" }}>
                    {v.name}
                  </span>
                  <span className="text-white/80 text-sm ml-2">{v.subtitle}</span>
                </div>
              </div>

              {/* Card body */}
              <div className="p-5 flex flex-col flex-1">
                {/* Best for */}
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">おすすめ</p>
                <p className="text-sm font-bold text-gray-800 mb-4">{v.bestFor}</p>

                {/* Specs */}
                <div className="flex flex-col gap-2 mb-4">
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <Users className="w-3.5 h-3.5 shrink-0" style={{ color: v.accentHex }} />
                    <span>最大乗車人数：<strong>{v.capacity}</strong></span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <Briefcase className="w-3.5 h-3.5 shrink-0" style={{ color: v.accentHex }} />
                    <span>{v.luggage}</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="grid grid-cols-2 gap-x-2 gap-y-1 mb-5">
                  {v.features.map((f) => (
                    <li key={f} className="flex items-center gap-1 text-[11px] text-gray-500">
                      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: v.accentHex }} />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="mt-auto">
                  <Link
                    href="/vehicles"
                    className="flex items-center justify-center gap-1 w-full py-2.5 rounded-xl text-sm font-bold border-2 transition-all duration-150"
                    style={{ borderColor: v.accentHex, color: v.accentHex }}
                  >
                    詳細を見る
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note & CTA */}
        <div className="mt-10 text-center">
          <p className="text-sm text-gray-500 mb-4">
            10名以上のグループの方には、ミニバス・バスなどさらに大きな車両もご手配可能です。
          </p>
          <Link
            href="/vehicles"
            className="inline-flex items-center gap-2 bg-[oklch(0.35_0.12_155)] hover:bg-[oklch(0.28_0.12_155)] text-white px-8 py-3 rounded-full font-bold text-sm tracking-wide transition-all duration-200 shadow-sm"
          >
            車両ラインナップを詳しく見る
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
