import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { Users, Briefcase, Check } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";

const vehicles = [
  {
    id: "sedan",
    name: "Sedan",
    subtitle: "〜大人3人",
    image: "/manus-storage/vehicle_sedan_ee212661.webp",
    capacity: "最大 大人3人",
    comfortCapacity: "快適 大人2人＋子供1人",
    luggage: "大きなスーツケース2個＋小さなスーツケース1個",
    color: "oklch(0.35_0.12_155)",
    popular: false,
    specs: [
      { label: "最大乗車人数", value: "大人3人" },
      { label: "快適に過ごせる最大人数", value: "大人2人＋子供1人" },
      { label: "最大積載荷物量", value: "大きなスーツケース2個＋小さなスーツケース1個" },
    ],
    desc: "セダンの最大乗車人数は3名です。ただし、トランクに積めるスーツケースは2個と小さなスーツケース1個までとなります。そのため、セダンは大人2名と子ども1名までのご利用をおすすめします。大人3名で移動し、より快適な旅をご希望の場合は、Vanをおすすめします。",
    bestFor: "カップル・少人数旅行（2〜3名）",
    features: [
      "エアコン完備",
      "コンパクトで取り回し良好",
      "市街地・短距離移動に最適",
      "ミネラルウォーター完備",
    ],
  },
  {
    id: "van",
    name: "Van",
    subtitle: "〜大人6人",
    image: "/manus-storage/vehicle_van_de904967.webp",
    capacity: "最大 大人6人",
    comfortCapacity: "快適 大人4人＋子供2人",
    luggage: "大きなスーツケース8個",
    color: "oklch(0.35_0.12_155)",
    popular: true,
    specs: [
      { label: "最大乗車人数", value: "大人6人" },
      { label: "快適に過ごせる最大人数", value: "大人4人＋子供2人" },
      { label: "最大積載荷物量", value: "大きなスーツケース8個" },
    ],
    desc: "最大乗車人数は6名までです。ただし、3人掛け×2列の座席配置のため、大人6名ですとやや窮屈に感じる場合があります。より快適にご利用いただくためには、大人4名＋子ども2名でのご利用をおすすめします。大人5名以上でご旅行される場合は、Big Vanのご利用をご検討ください。",
    bestFor: "ファミリー・グループ旅行（4〜6名）",
    features: [
      "エアコン完備",
      "広々とした室内空間",
      "荷物収納スペース充実",
      "ミネラルウォーター完備",
      "長距離移動も快適",
    ],
  },
  {
    id: "bigvan",
    name: "Big Van",
    subtitle: "〜大人10人",
    image: "/manus-storage/vehicle_bigvan_7c49b85f.webp",
    capacity: "最大 大人10人",
    comfortCapacity: "快適 大人9人",
    luggage: "大きなスーツケース10個",
    color: "oklch(0.55_0.1_75)",
    popular: false,
    specs: [
      { label: "最大乗車人数", value: "大人10人" },
      { label: "快適に過ごせる最大人数", value: "大人9人" },
      { label: "最大積載荷物量", value: "大きなスーツケース10個" },
    ],
    desc: "大型バン（Big Van）は独立した座席が9席あり、大人9名まで快適にご乗車いただけます。助手席（前方の乗客席）も使用すれば、最大10名まで乗車可能です。グループが10名以上の場合は、ミニバスなど、さらに大きな車両をご検討ください。",
    bestFor: "大型グループ・企業旅行（7〜10名）",
    features: [
      "エアコン完備",
      "独立シート9席",
      "大型荷物スペース完備",
      "ミネラルウォーター完備",
      "長距離移動対応",
    ],
  },
];

export default function VehiclesPage() {
  useSEO({
    title: "スリランカタクシーチャーターの車両ラインナップ｜セダン・バン・ミニバン【SLTCS】",
    description: "スリランカタクシーチャーターサービスSLTCSの車両ラインナップ。セダン（2｜3名）・バン（4｜6名）・ミニバン（6｜9名）をグループ規模に合わせて選択。エアコン・ミネラルウォーター完備。",
    path: "/vehicles",
    jsonLdList: [
      {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "SLTCS スリランカタクシーチャーター 車両ラインナップ",
        "url": "https://sltcs.srilanka-charter.com/vehicles",
        "numberOfItems": 3,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "item": {
              "@type": "Product",
              "name": "Sedan （セダン）―スリランカタクシーチャーター",
              "description": "カップル・少人数旅行（2｜3名）に最適。エアコン・ミネラルウォーター完備。大きなスーツケース2個＋小さなスーツケース1個まで積載可能。",
              "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/U5GFZm3GAbGuGjN2pLu33k/vehicle_sedan_ee212661.webp",
              "brand": { "@type": "Brand", "name": "SLTCS" },
              "offers": {
                "@type": "Offer",
                "priceCurrency": "JPY",
                "price": "45000",
                "priceSpecification": {
                  "@type": "PriceSpecification",
                  "price": "45000",
                  "priceCurrency": "JPY",
                  "minPrice": "45000",
                  "maxPrice": "176000",
                  "description": "2日間から8日間まで対応。ブロンズ／シルバー／ゴールドプラン選択可能。"
                },
                "availability": "https://schema.org/InStock",
                "url": "https://sltcs.srilanka-charter.com/pricing"
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "item": {
              "@type": "Product",
              "name": "Van （バン）―スリランカタクシーチャーター",
              "description": "ファミリー・グループ旅行（4｜6名）に最適。広々とした室内空間と充実した荷物収納スペース。大きなスーツケース8個まで積載可能。",
              "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/U5GFZm3GAbGuGjN2pLu33k/vehicle_van_de904967.webp",
              "brand": { "@type": "Brand", "name": "SLTCS" },
              "offers": {
                "@type": "Offer",
                "priceCurrency": "JPY",
                "price": "52000",
                "priceSpecification": {
                  "@type": "PriceSpecification",
                  "price": "52000",
                  "priceCurrency": "JPY",
                  "minPrice": "52000",
                  "maxPrice": "200000",
                  "description": "2日間から8日間まで対応。ブロンズ／シルバー／ゴールドプラン選択可能。"
                },
                "availability": "https://schema.org/InStock",
                "url": "https://sltcs.srilanka-charter.com/pricing"
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 3,
            "item": {
              "@type": "Product",
              "name": "Big Van （ビッグバン）―スリランカタクシーチャーター",
              "description": "大型グループ・企業旅行（7｜10名）に最適。独立シート9席、大型荷物スペース完備。大きなスーツケース10個まで積載可能。",
              "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/U5GFZm3GAbGuGjN2pLu33k/vehicle_bigvan_7c49b85f.webp",
              "brand": { "@type": "Brand", "name": "SLTCS" },
              "offers": {
                "@type": "Offer",
                "priceCurrency": "JPY",
                "price": "60000",
                "priceSpecification": {
                  "@type": "PriceSpecification",
                  "price": "60000",
                  "priceCurrency": "JPY",
                  "minPrice": "60000",
                  "maxPrice": "216000",
                  "description": "2日間から8日間まで対応。ブロンズ／シルバー／ゴールドプラン選択可能。"
                },
                "availability": "https://schema.org/InStock",
                "url": "https://sltcs.srilanka-charter.com/pricing"
              }
            }
          }
        ]
      }
    ],
    jsonLdIdPrefix: "vehicles",
  });

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
                <div className={`grid lg:grid-cols-2 ${i % 2 === 1 ? "" : ""}`}>
                  <div className="relative bg-[oklch(0.95_0.005_155)] flex items-center justify-center p-4 min-h-[280px] lg:min-h-[360px]">
                    <img
                      src={v.image}
                      alt={v.name}
                      className="w-full h-full object-contain max-h-[340px]"
                    />
                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1.5 rounded-full">
                      <span className="font-black text-lg">{v.name}</span>
                      <span className="text-white/70 text-sm ml-2">{v.subtitle}</span>
                    </div>
                  </div>
                  <div className="p-8 lg:p-10">
                    <div className="flex items-start justify-between mb-5">
                      <div>
                        <h2 className="text-2xl lg:text-3xl font-black text-[oklch(0.15_0.01_60)]" style={{ fontFamily: "'Noto Serif JP', serif" }}>
                          {v.name}
                          <span className="text-base font-medium text-[oklch(0.5_0.02_155)] ml-2">{v.subtitle}</span>
                        </h2>
                      </div>
                    </div>

                    {/* Specs table */}
                    <div className="bg-[oklch(0.97_0.005_155)] rounded-xl p-4 mb-5">
                      <table className="w-full text-sm">
                        <tbody>
                          {v.specs.map((s, si) => (
                            <tr key={si} className={si < v.specs.length - 1 ? "border-b border-[oklch(0.9_0.005_155)]" : ""}>
                              <td className="py-2 pr-3 text-[oklch(0.5_0.02_155)] font-medium whitespace-nowrap">{s.label}</td>
                              <td className="py-2 text-[oklch(0.2_0.01_60)] font-bold">{s.value}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
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
                      className="w-full py-3 rounded-xl font-bold text-sm text-white transition-all duration-200 hover:opacity-90"
                      style={{ backgroundColor: v.color }}
                    >
                      この車両で予約する
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="mt-8 bg-[oklch(0.97_0.005_155)] border border-[oklch(0.9_0.01_155)] rounded-xl p-5 text-sm text-[oklch(0.4_0.02_155)]">
            <p className="font-bold text-[oklch(0.2_0.01_60)] mb-1">10名以上のグループの方へ</p>
            <p>ミニバス・バスなど、さらに大きな車両もご手配可能です。お問い合わせフォームの自由記入欄にご希望の人数をご記載ください。</p>
          </div>

          <div className="mt-8 bg-[oklch(0.12_0.02_155)] rounded-2xl p-8 text-center">
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
