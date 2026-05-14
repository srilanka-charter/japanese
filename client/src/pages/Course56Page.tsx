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
    title: "世界遺産・紅茶列車・サファリを楽しむ王道プラン",
    subtitle: "シーギリヤ・キャンディ・エッラ・ウダワラウェ・ゴール",
    tags: ["世界遺産", "紅茶列車", "サファリ"],
    days: [
      {
        day: 1,
        title: "空港 → シーギリヤ地域へ移動",
        items: [
          { type: "spot", text: "ネゴンボ・コロンボ・空港からシーギリヤ地域まで車で約4時間" },
          { type: "food", text: "ランチ｜Fika The Outlet / Ahinsa Restaurant / Soul Food Café / Cafe De Sky Lark（シーギリヤ周辺）" },
          { type: "spot", text: "ダンブッラ石窟寺院 観光（約1時間）｜400段の階段を登り5つの洞窟に仏像・壁画が並ぶ世界遺産" },
          { type: "hotel", text: "ヘリタンスカンダラマ泊｜バワ建築の名宿。カンダラマ湖と一体となったインフィニティプール。アーユルヴェーダ体験も可（要予約・約70USD）" },
        ],
      },
      {
        day: 2,
        title: "シーギリヤロック観光後にキャンディへ移動",
        items: [
          { type: "spot", text: "シーギリヤ・ロック観光（約3時間）｜高さ200mの岩山要塞。シーギリヤ・レディの壁画が見どころ" },
          { type: "food", text: "ランチ｜ダンブッラ周辺のおすすめレストランを参考に" },
          { type: "spot", text: "キャンディへ移動（約3時間）｜途中マータレーのSpice Ceylonに立ち寄り可" },
          { type: "spot", text: "キャンディ仏歯寺 観光｜夕方18:30のプージャに合わせて参詣がおすすめ" },
          { type: "hotel", text: "キャンディ泊｜Queen's Hotel Kandy / Earl's Regency Kandy / Cinnamon Citadel Kandy" },
        ],
      },
      {
        day: 3,
        title: "紅茶列車でエッラへ",
        items: [
          { type: "spot", text: "キャンディ駅 8:55発 → エッラ 15:38着（世界一美しい鉄道の旅）｜茶畑・滝・トンネルが続く絶景ルート" },
          { type: "spot", text: "ナインアーチブリッジ観光｜EllaとDemodaraの間。Demodaraまで乗車してピックアップ後にEllaへ" },
          { type: "food", text: "ディナー｜AK Ristoro / MozzarElla / The Barn by Starbeans（エッラ）" },
          { type: "hotel", text: "エッラ泊｜98 Acres Resort & Spa（高級）/ EKHO Ella / Zion View Ella Green Retreat" },
        ],
      },
      {
        day: 4,
        title: "エッラ → ウダワラウェ国立公園 → ゴール",
        items: [
          { type: "spot", text: "エッラからウダワラウェ国立公園へ（車で約2時間）" },
          { type: "spot", text: "ウダワラウェ国立公園でジープサファリ体験｜象を年間を通じて安定して見られる国立公園" },
          { type: "spot", text: "ゴール近郊へ移動（車で約2.5時間）" },
          { type: "hotel", text: "ゴール近郊泊｜Jetwing Lighthouse（バワ建築）/ Le Grand Galle / Galle Fort Hotel" },
        ],
      },
      {
        day: 5,
        title: "ゴール観光 → コロンボ経由で空港へ",
        items: [
          { type: "spot", text: "ゴール要塞（世界遺産）観光（約2時間）｜オランダ・イギリス植民地時代の城壁・灯台を散策" },
          { type: "spot", text: "コロンボへ移動（約2.5時間）" },
          { type: "spot", text: "コロンボ市内観光｜ガンガラーマ寺院・ペター地区・お土産購入" },
          { type: "food", text: "アフタヌーンティー｜Galle Face Hotel または Shangri-La Colombo" },
          { type: "spot", text: "空港へ移動（市内から約30分）" },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "世界遺産を中心に巡るプラン",
    subtitle: "アヌラーダプラ・シーギリヤ・キャンディ・ゴール",
    tags: ["世界遺産", "古代都市", "文化遺産"],
    days: [
      {
        day: 1,
        title: "空港 → アヌラーダプラ → ヘリタンスカンダラマ",
        items: [
          { type: "spot", text: "アヌラーダプラへ（ネゴンボから車で約3.5時間）｜スリランカ初代の都・世界遺産の古都" },
          { type: "food", text: "ランチ｜Palhena Restaurant / Little Paradise Anuradhapura / Stargate Restaurant" },
          { type: "spot", text: "アヌラーダプラ観光（2〜3時間）｜ルワンウェリサーヤ大塔・スリー・マハー菩提樹など" },
          { type: "hotel", text: "ヘリタンスカンダラマ泊｜バワ建築の名宿（アヌラーダプラから車で約1.5時間）。アーユルヴェーダ体験も可（要予約・約70USD）" },
        ],
      },
      {
        day: 2,
        title: "シーギリヤロック → ダンブッラ石窟寺院",
        items: [
          { type: "spot", text: "シーギリヤ・ロック観光（約3時間）｜高さ200mの岩山要塞・シーギリヤ・レディの壁画" },
          { type: "food", text: "ランチ｜Ahinsa Restaurant / Soul Food Café（シーギリヤ周辺）" },
          { type: "spot", text: "ダンブッラ石窟寺院 観光（約1時間）｜5つの洞窟に仏像・壁画が並ぶ世界遺産" },
          { type: "hotel", text: "ヘリタンスカンダラマ連泊" },
        ],
      },
      {
        day: 3,
        title: "ポロンナルワ観光 → ミンネリヤ国立公園でサファリ",
        items: [
          { type: "spot", text: "ポロンナルワ観光（約2時間）｜12世紀の古都・世界遺産。ガルヴィハーラの巨大仏像群が見どころ" },
          { type: "food", text: "ランチ｜Dinemore Polonnaruwa / Sudu Araliya Hotel Restaurant" },
          { type: "spot", text: "ミンネリヤ国立公園でサファリ体験（夕方）｜象の群れに遭遇できる可能性大" },
          { type: "hotel", text: "ヘリタンスカンダラマ 3泊目" },
        ],
      },
      {
        day: 4,
        title: "キャンディ仏歯寺を観光",
        items: [
          { type: "spot", text: "キャンディへ移動（約3時間）" },
          { type: "food", text: "ランチ｜Devon Restaurant & Bakery または Slightly Chilled Lounge" },
          { type: "spot", text: "キャンディ仏歯寺 観光｜夕方18:30のプージャに合わせて参詣がおすすめ" },
          { type: "hotel", text: "キャンディ泊｜Queen's Hotel Kandy / Earl's Regency Kandy / Cinnamon Citadel Kandy" },
        ],
      },
      {
        day: 5,
        title: "コロンボ経由で空港へ",
        items: [
          { type: "spot", text: "コロンボへ移動（約3.5時間）" },
          { type: "spot", text: "コロンボ市内観光｜ガンガラーマ寺院・ペター地区・お土産購入" },
          { type: "food", text: "アフタヌーンティー｜Galle Face Hotel または Shangri-La Colombo" },
          { type: "spot", text: "空港へ移動（市内から約30分）" },
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
    document.title = "スリランカ 4泊5日 モデルコース｜タクシーチャーターで巡る王道周遊プラン";

    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const created = !meta;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    const prevDesc = meta.content;
    meta.content = "スリランカ4泊5日のモデルコースをご紹介。シーギリヤ・キャンディ・エッラ・ウダワラウェ・ゴールなど主要観光地を専用タクシーチャーターで周遊。日本語対応ドライバーが旅をサポートします。";

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
            <span className="bg-[oklch(0.75_0.12_75)] text-[oklch(0.12_0.02_155)] text-xs font-black px-3 py-1 rounded-full tracking-widest">4泊5日</span>
            <span className="text-white/40 text-sm">2プラン収録</span>
          </div>
          <h1 className="text-3xl lg:text-5xl font-black text-white leading-tight mb-4" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            4泊5日<br />スリランカモデルコース
          </h1>
          <p className="text-white/60 max-w-xl leading-relaxed">
            世界遺産・紅茶列車・サファリ・ビーチを目的別に2プランをご用意。タクシーチャーターで快適に巡るモデルコースです。
          </p>
          <div className="flex items-center gap-4 mt-6">
            <div className="flex items-center gap-2 text-white/50 text-sm">
              <Clock size={14} />
              <span>4泊5日（スリランカ国内）</span>
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
                {/* Plan Header */}
                <div className="bg-[oklch(0.12_0.02_155)] px-6 py-5 flex items-start justify-between gap-4">
                  <div>
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
                </div>

                {/* Timeline */}
                <div className="p-6">
                  <div className="space-y-0">
                    {plan.days.map((day, idx) => (
                      <div key={day.day} className="flex gap-4">
                        {/* Day indicator */}
                        <div className="flex flex-col items-center">
                          <div className="w-10 h-10 rounded-full bg-[oklch(0.12_0.02_155)] flex items-center justify-center flex-shrink-0">
                            <span className="text-[oklch(0.75_0.12_75)] font-black text-xs">DAY{day.day}</span>
                          </div>
                          {idx < plan.days.length - 1 && (
                            <div className="w-px flex-1 bg-[oklch(0.9_0.005_155)] my-1" />
                          )}
                        </div>
                        {/* Content */}
                        <div className={`pb-6 flex-1`}>
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

          {/* CTA */}
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
