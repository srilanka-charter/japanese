/**
 * Design: Luxury travel itinerary page
 * Dark forest green (#0D2B1E) base, gold (#C9A84C) accents
 * Clean timeline layout with day-by-day breakdown
 */

import { useEffect } from "react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MessageCircle, ArrowLeft, Clock, MapPin, Utensils, Hotel } from "lucide-react";

const plans = [
  {
    id: 1,
    title: "世界遺産を巡るプラン",
    subtitle: "アヌラーダプラ・シーギリヤ・キャンディ・コロンボ",
    tags: ["世界遺産", "文化遺産", "歴史"],
    days: [
      {
        day: 1,
        title: "成田 → ネゴンボ",
        items: [
          { type: "flight", text: "成田 11:15発 → コロンボ 17:05着（スリランカ航空直行便）" },
          { type: "hotel", text: "ネゴンボ泊｜Heritance Negombo / Jetwing Blue / Jetwing Lagoon" },
        ],
      },
      {
        day: 2,
        title: "アヌラーダプラ観光 → ヘリタンスカンダラマ",
        items: [
          { type: "spot", text: "世界遺産アヌラーダプラへ（約3.5時間）・観光（2〜3時間）" },
          { type: "food", text: "ランチ｜Seedevi Family Restaurant または Ceylan Lodge Restaurant" },
          { type: "hotel", text: "ヘリタンスカンダラマ泊｜アーユルヴェーダ体験も可（要予約・約70USD）" },
        ],
      },
      {
        day: 3,
        title: "シーギリヤロック → ダンブッラ石窟寺院",
        items: [
          { type: "spot", text: "シーギリヤロック観光（約2時間）" },
          { type: "food", text: "ランチ｜Ahinsa Restaurant または Soul Food Café" },
          { type: "spot", text: "ダンブッラ石窟寺院 観光（約1時間）" },
          { type: "hotel", text: "ヘリタンスカンダラマ 連泊" },
        ],
      },
      {
        day: 4,
        title: "紅茶工場 or 紅茶列車体験 → キャンディ仏歯寺",
        items: [
          { type: "spot", text: "①紅茶工場 Giragama Tea Factory 見学、または②キャンディ駅 11:15発 → Hatton 13:31着（紅茶列車）" },
          { type: "food", text: "ランチ｜Devon Restaurant & Bakery または Slightly Chilled Lounge" },
          { type: "spot", text: "キャンディ仏歯寺 観光" },
          { type: "hotel", text: "キャンディ泊｜The Golden Crown Hotel / Cinnamon Citadel Kandy / Earl's Regent Hotel" },
        ],
      },
      {
        day: 5,
        title: "コロンボ観光 → 帰国フライト",
        items: [
          { type: "spot", text: "コロンボへ移動（約3時間）・市内観光・お土産購入" },
          { type: "food", text: "アフタヌーンティー｜Galle Face Hotel または Shangri‑La Colombo" },
          { type: "flight", text: "コロンボ 19:50発" },
        ],
      },
      {
        day: 6,
        title: "成田空港到着",
        items: [
          { type: "flight", text: "成田 8:10着" },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "アーユルヴェーダを満喫するプラン",
    subtitle: "シーギリヤ・ネゴンボ・コロンボ",
    tags: ["アーユルヴェーダ", "癒し", "リゾート"],
    days: [
      {
        day: 1,
        title: "成田 → ネゴンボ",
        items: [
          { type: "flight", text: "成田 11:15発 → コロンボ 17:05着" },
          { type: "hotel", text: "ネゴンボ泊" },
        ],
      },
      {
        day: 2,
        title: "シーギリヤ → アーユルヴェーダリゾート",
        items: [
          { type: "spot", text: "シーギリヤロック観光（約3時間）" },
          { type: "hotel", text: "Ayugiri Ayurveda Wellness Resort Sigiriya 泊（施術込みプランを事前予約推奨）" },
        ],
      },
      {
        day: 3,
        title: "アーユルヴェーダ三昧",
        items: [
          { type: "spot", text: "終日アーユルヴェーダ体験（医師の問診・食事・トリートメント）" },
          { type: "spot", text: "余裕があればピドゥランガラ・ロックからシーギリヤの絶景を" },
          { type: "hotel", text: "Ayugiri 連泊" },
        ],
      },
      {
        day: 4,
        title: "ネゴンボ・Jetwing Ayurveda Pavilionsへ",
        items: [
          { type: "spot", text: "ダンブッラ石窟寺院 観光（約1時間）" },
          { type: "spot", text: "Jetwing Ayurveda Pavilions へ移動（約3時間）" },
          { type: "hotel", text: "Jetwing Ayurveda Pavilions 泊（Booking.comでトリートメント付きプランを予約推奨）" },
        ],
      },
      {
        day: 5,
        title: "アーユルヴェーダ → コロンボへ",
        items: [
          { type: "spot", text: "ホテルでトリートメントを受ける" },
          { type: "spot", text: "コロンボへ移動（約40分）・市内観光" },
          { type: "flight", text: "コロンボ 19:50発" },
        ],
      },
      {
        day: 6,
        title: "成田空港到着",
        items: [
          { type: "flight", text: "成田 8:10着" },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "紅茶列車を満喫するプラン",
    subtitle: "キャンディ・エッラ・コロンボ",
    tags: ["紅茶列車", "絶景", "世界遺産"],
    days: [
      {
        day: 1,
        title: "成田 → ネゴンボ",
        items: [
          { type: "flight", text: "成田 11:15発 → コロンボ 17:05着" },
          { type: "hotel", text: "ネゴンボ泊" },
        ],
      },
      {
        day: 2,
        title: "キャンディ → 仏歯寺",
        items: [
          { type: "spot", text: "キャンディへ移動（約3時間）" },
          { type: "spot", text: "Giragama Tea Factory 見学" },
          { type: "spot", text: "キャンディ仏歯寺 観光" },
          { type: "hotel", text: "キャンディ泊" },
        ],
      },
      {
        day: 3,
        title: "紅茶列車でエッラへ",
        items: [
          { type: "spot", text: "キャンディ駅 8:55発 → エッラ 15:38着（世界一美しい鉄道の旅）" },
          { type: "food", text: "ランチボックス持参｜Buono または Cafe Secret Alley で調達" },
          { type: "hotel", text: "エッラ泊｜98 Acres Resort & Spa / HIDE ELLA HOTEL & RESORT" },
        ],
      },
      {
        day: 4,
        title: "エッラ観光 → ゴール要塞",
        items: [
          { type: "spot", text: "エッラ・ロック、ナインアーチブリッジ観光" },
          { type: "spot", text: "南部の世界遺産都市ゴールへ（約3.5時間）" },
          { type: "hotel", text: "ゴール近郊泊｜アマンガラ など" },
        ],
      },
      {
        day: 5,
        title: "コロンボ観光 → 帰国フライト",
        items: [
          { type: "spot", text: "コロンボへ移動（約2.5時間）・市内観光・お土産購入" },
          { type: "food", text: "アフタヌーンティー｜Galle Face Hotel または Shangri‑La Colombo" },
          { type: "flight", text: "コロンボ 19:50発" },
        ],
      },
      {
        day: 6,
        title: "成田空港到着",
        items: [
          { type: "flight", text: "成田 8:10着" },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "アーユルヴェーダ体験プラン",
    subtitle: "ネゴンボ・コロンボ（ゆったり癒し旅）",
    tags: ["アーユルヴェーダ", "癒し", "ビーチ"],
    days: [
      {
        day: 1,
        title: "成田 → ネゴンボ",
        items: [
          { type: "flight", text: "成田 11:15発 → コロンボ 17:05着" },
          { type: "hotel", text: "ネゴンボ泊" },
        ],
      },
      {
        day: 2,
        title: "Jetwing Ayurveda Pavilionsでアーユルヴェーダ",
        items: [
          { type: "spot", text: "Jetwing Ayurveda Pavilions へ（Booking.comでトリートメント付きプランを予約推奨）" },
          { type: "hotel", text: "Jetwing Ayurveda Pavilions 泊" },
        ],
      },
      {
        day: 3,
        title: "アーユルヴェーダ 2日目",
        items: [
          { type: "spot", text: "終日アーユルヴェーダ体験" },
          { type: "hotel", text: "連泊" },
        ],
      },
      {
        day: 4,
        title: "ピンナワラ象の孤児院 or ゆっくり過ごす",
        items: [
          { type: "spot", text: "ピンナワラ象の孤児院（片道約2時間）または近郊観光" },
          { type: "hotel", text: "連泊" },
        ],
      },
      {
        day: 5,
        title: "コロンボ観光 → 帰国フライト",
        items: [
          { type: "spot", text: "ホテルでトリートメント後、コロンボへ（約40分）・市内観光" },
          { type: "food", text: "アフタヌーンティー｜Galle Face Hotel または Shangri‑La Colombo" },
          { type: "flight", text: "コロンボ 19:50発" },
        ],
      },
      {
        day: 6,
        title: "成田空港到着",
        items: [
          { type: "flight", text: "成田 8:10着" },
        ],
      },
    ],
  },
  {
    id: 5,
    title: "世界遺産とアーユルヴェーダ体験プラン",
    subtitle: "シーギリヤ・ネゴンボ・コロンボ",
    tags: ["世界遺産", "アーユルヴェーダ", "癒し"],
    days: [
      {
        day: 1,
        title: "成田 → ネゴンボ",
        items: [
          { type: "flight", text: "成田 11:15発 → コロンボ 17:05着" },
          { type: "hotel", text: "ネゴンボ泊" },
        ],
      },
      {
        day: 2,
        title: "シーギリヤロック観光",
        items: [
          { type: "spot", text: "シーギリヤロック観光（約3時間）" },
          { type: "hotel", text: "Ayugiri Ayurveda Wellness Resort Sigiriya 泊（施術込みプランを事前予約推奨）" },
        ],
      },
      {
        day: 3,
        title: "アーユルヴェーダ三昧",
        items: [
          { type: "spot", text: "終日アーユルヴェーダ体験" },
          { type: "hotel", text: "Ayugiri 連泊" },
        ],
      },
      {
        day: 4,
        title: "Jetwing Ayurveda Pavilionsへ移動",
        items: [
          { type: "spot", text: "ダンブッラ石窟寺院 観光（約1時間）" },
          { type: "spot", text: "Jetwing Ayurveda Pavilions へ移動（約3時間）" },
          { type: "hotel", text: "Jetwing Ayurveda Pavilions 泊" },
        ],
      },
      {
        day: 5,
        title: "アーユルヴェーダ → コロンボへ",
        items: [
          { type: "spot", text: "ホテルでトリートメントを受ける" },
          { type: "spot", text: "コロンボへ移動（約40分）・市内観光" },
          { type: "flight", text: "コロンボ 19:50発" },
        ],
      },
      {
        day: 6,
        title: "成田空港到着",
        items: [
          { type: "flight", text: "成田 8:10着" },
        ],
      },
    ],
  },
  {
    id: 6,
    title: "サファリ体験とビーチリゾートプラン",
    subtitle: "シーギリヤ・ミンネリヤ・ベントータ・ゴール",
    tags: ["サファリ", "ビーチ", "世界遺産"],
    days: [
      {
        day: 1,
        title: "成田 → ネゴンボ",
        items: [
          { type: "flight", text: "成田 11:15発 → コロンボ 17:05着" },
          { type: "hotel", text: "ネゴンボ泊" },
        ],
      },
      {
        day: 2,
        title: "シーギリヤロック → ヘリタンスカンダラマ",
        items: [
          { type: "spot", text: "シーギリヤロック観光（約2時間）" },
          { type: "hotel", text: "ヘリタンスカンダラマ泊" },
        ],
      },
      {
        day: 3,
        title: "ミンネリヤ国立公園 サファリ → キャンディ",
        items: [
          { type: "spot", text: "Minneriya National Park でサファリ体験" },
          { type: "food", text: "ランチ｜The Wadiya または Alo‑Ha Coffee Habarana" },
          { type: "spot", text: "キャンディへ移動（約2.5時間）" },
          { type: "hotel", text: "キャンディ泊" },
        ],
      },
      {
        day: 4,
        title: "ゴール要塞 → ベントータ",
        items: [
          { type: "spot", text: "南部の世界遺産都市ゴールへ（約3.5時間）・観光" },
          { type: "spot", text: "ベントータのビーチリゾートへ移動（約1時間）" },
          { type: "hotel", text: "ベントータ泊｜Jetwing Saman Villas / Taj Bentota Resort & Spa" },
        ],
      },
      {
        day: 5,
        title: "コロンボ観光 → 帰国フライト",
        items: [
          { type: "spot", text: "コロンボへ移動（約1.5時間）・市内観光・お土産購入" },
          { type: "food", text: "アフタヌーンティー｜Galle Face Hotel または Shangri‑La Colombo" },
          { type: "flight", text: "コロンボ 19:50発" },
        ],
      },
      {
        day: 6,
        title: "成田空港到着",
        items: [
          { type: "flight", text: "成田 8:10着" },
        ],
      },
    ],
  },
];

const iconMap: Record<string, React.ReactNode> = {
  flight: <span className="text-[oklch(0.75_0.12_75)]">✈</span>,
  spot: <MapPin size={14} className="text-[oklch(0.55_0.15_155)] flex-shrink-0 mt-0.5" />,
  food: <Utensils size={14} className="text-[oklch(0.65_0.1_75)] flex-shrink-0 mt-0.5" />,
  hotel: <Hotel size={14} className="text-[oklch(0.5_0.1_240)] flex-shrink-0 mt-0.5" />,
};

export default function Course56Page() {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "スリランカ 5泊6日 モデルコース｜タクシーチャーターで巡る完全プライベート旅行";

    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const created = !meta;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    const prevDesc = meta.content;
    meta.content = "スリランカ5泊6日のモデルコースをご紹介。シーギリヤ・ダンブッラ・ティッサマハーラ・コロンボなどを専用タクシーチャーターでゆったり巡る完全プライベート旅行プラン。日本語対応ドライバーがサポート。";

    return () => {
      document.title = prevTitle;
      if (created) {
        meta?.parentNode?.removeChild(meta);
      } else if (meta) {
        meta.content = prevDesc;
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-[oklch(0.97_0.005_155)]">
      <Header />

      {/* Hero */}
      <section className="relative bg-[oklch(0.12_0.02_155)] pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 20% 50%, oklch(0.75 0.12 75) 0%, transparent 60%), radial-gradient(circle at 80% 20%, oklch(0.35 0.12 155) 0%, transparent 50%)" }}
        />
        <div className="container relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-white/50 hover:text-[oklch(0.75_0.12_75)] text-sm mb-6 transition-colors">
            <ArrowLeft size={14} />
            トップへ戻る
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-[oklch(0.75_0.12_75)] text-[oklch(0.12_0.02_155)] text-xs font-black px-3 py-1 rounded-full tracking-widest">5泊6日</span>
            <span className="text-white/40 text-sm">6プラン収録</span>
          </div>
          <h1 className="text-3xl lg:text-5xl font-black text-white leading-tight mb-4" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            5泊6日<br />スリランカモデルコース
          </h1>
          <p className="text-white/60 max-w-xl leading-relaxed">
            世界遺産・紅茶列車・アーユルヴェーダ・サファリ・ビーチリゾートを目的別に6プランをご用意。成田発着、タクシーチャーターで快適に巡るモデルコースです。
          </p>
          <div className="flex items-center gap-4 mt-6">
            <div className="flex items-center gap-2 text-white/50 text-sm">
              <Clock size={14} />
              <span>5泊6日（成田発着）</span>
            </div>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-16">
        <div className="container">
          <div className="space-y-16">
            {plans.map((plan) => (
              <div key={plan.id} className="bg-white rounded-2xl shadow-sm border border-[oklch(0.92_0.005_155)] overflow-hidden">
                <div className="bg-[oklch(0.12_0.02_155)] px-6 py-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[oklch(0.75_0.12_75)] font-black text-sm">PLAN {plan.id}</span>
                    <div className="flex flex-wrap gap-1.5">
                      {plan.tags.map((tag) => (
                        <span key={tag} className="bg-white/10 text-white/70 text-xs px-2 py-0.5 rounded-full">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <h2 className="text-white font-black text-lg lg:text-xl" style={{ fontFamily: "'Noto Serif JP', serif" }}>
                    {plan.title}
                  </h2>
                  <p className="text-white/50 text-sm mt-1">{plan.subtitle}</p>
                </div>

                <div className="p-6">
                  <div className="space-y-0">
                    {plan.days.map((day, idx) => (
                      <div key={day.day} className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div className="w-10 h-10 rounded-full bg-[oklch(0.12_0.02_155)] flex items-center justify-center flex-shrink-0">
                            <span className="text-[oklch(0.75_0.12_75)] font-black text-xs">DAY{day.day}</span>
                          </div>
                          {idx < plan.days.length - 1 && (
                            <div className="w-px flex-1 bg-[oklch(0.9_0.005_155)] my-1" />
                          )}
                        </div>
                        <div className="pb-6 flex-1">
                          <h3 className="font-bold text-[oklch(0.15_0.01_60)] text-base mb-2 leading-snug">{day.title}</h3>
                          <ul className="space-y-1.5">
                            {day.items.map((item, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-[oklch(0.4_0.02_155)]">
                                {iconMap[item.type]}
                                <span>{item.text}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-[oklch(0.12_0.02_155)] rounded-2xl p-8 text-center">
            <h3 className="text-white font-black text-xl mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
              このコースで旅を計画しませんか？
            </h3>
            <p className="text-white/60 text-sm mb-6">ご希望に合わせてカスタマイズも可能です。まずはお気軽にご相談ください。</p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 bg-[oklch(0.75_0.12_75)] hover:bg-[oklch(0.65_0.1_75)] text-[oklch(0.12_0.02_155)] px-8 py-3 rounded-full font-bold text-sm transition-all hover:scale-105 shadow-lg"
            >
              <MessageCircle size={16} />
              無料で相談する
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
