/**
 * Design: Luxury travel itinerary page
 * Dark forest green (#0D2B1E) base, gold (#C9A84C) accents
 * Clean timeline layout with day-by-day breakdown
 */
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MessageCircle, ArrowLeft, Clock, MapPin, Utensils, Hotel } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";

const plans = [
  {
    id: 1,
    title: "世界遺産・紅茶列車・サファリを楽しむ王道プラン",
    subtitle: "シーギリヤ・キャンディ・ヌワラエリヤ・ヤーラ・ゴール",
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
        title: "キャンディ → ヌワラエリヤへ移動",
        items: [
          { type: "spot", text: "キャンディからヌワラエリヤへ（車で約3時間）｜サイクロンの影響で列車は運休中のため車移動" },
          { type: "spot", text: "茶畑の車窓を楽しみながら高原地帯へ。好きな場所で停車して写真撮影も可能" },
          { type: "hotel", text: "ヌワラエリヤ泊｜Heritance Tea Factory（紅茶工場を改装したバワ風ホテル）/ The Grand Hotel / Jetwing St. Andrew's" },
        ],
      },
      {
        day: 4,
        title: "紅茶列車を体験してヤーラ国立公園に前泊",
        items: [
          { type: "spot", text: "ヌワラエリヤからBandarawelaへ（車で約1.5時間）｜Bandarawela 10:54発 → Demodara（ナインアーチブリッジ区間）" },
          { type: "spot", text: "紅茶列車体験（約1時間）｜茶畑の景色とナインアーチブリッジが見どころ。Demodaraまで乗車推奨" },
          { type: "food", text: "ランチ（エッラ）｜AK Ristoro / MozzarElla / The Barn by Starbeans / Matey Hut" },
          { type: "spot", text: "ヤーラ国立公園近くのホテルへ移動（車で約3時間）" },
          { type: "hotel", text: "ヤーラ近郊泊｜Wild Coast Tented Lodge（高級）/ Jetwing Yala / Cinnamon Wild Yala / Laya Safari Resorts & Spa" },
        ],
      },
      {
        day: 5,
        title: "ヤーラ国立公園でサファリ → ゴール近郊へ",
        items: [
          { type: "spot", text: "早朝5〜6時からヤーラ国立公園でジープサファリ体験｜スリランカヒョウを見られる確率が高い（9〜10月は休業）" },
          { type: "spot", text: "午前サファリ後、ゴール近郊へ移動（車で約2時間）" },
          { type: "hotel", text: "ゴール近郊泊｜Jetwing Lighthouse（バワ建築）/ Le Grand Galle / Galle Fort Hotel / Araliya Beach Resort（Unawatuna）" },
        ],
      },
      {
        day: 6,
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
    subtitle: "アヌラーダプラ・シーギリヤ・ポロンナルワ・キャンディ・ヌワラエリヤ",
    tags: ["世界遺産", "古代都市", "紅茶列車"],
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
        title: "紅茶列車でヌワラエリヤへ",
        items: [
          { type: "spot", text: "Bandarawelaへ移動（車で約2.5時間）後、紅茶列車体験（Bandarawela → Demodara、約1時間）" },
          { type: "spot", text: "ナインアーチブリッジ区間を通過｜茶畑の絶景と石造りの橋が見どころ" },
          { type: "spot", text: "ヌワラエリヤへ移動・チェックイン" },
          { type: "hotel", text: "ヌワラエリヤ泊｜Heritance Tea Factory / The Grand Hotel / Jetwing St. Andrew's" },
        ],
      },
      {
        day: 6,
        title: "コロンボ経由で空港へ",
        items: [
          { type: "spot", text: "ヌワラエリヤからコロンボへ（車で約5時間）" },
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

export default function Course67Page() {
  useSEO({
    title: "スリランカ 5泊6日 モデルコース｜タクシーチャーターでゆったり周遊する旅 | SLTCS",
    description: "スリランカ5泊6日のモデルコースをご紹介。シーギリヤ・キャンディ・ヌワラエリヤ・ヤーラ国立公園・ゴールなど主要観光地を専用タクシーチャーターでゆったり周遊。日本語対応ドライバーが旅をサポートします。",
    path: "/course/5-6days",
    jsonLdList: [{
      "@context": "https://schema.org",
      "@type": "TouristTrip",
      "name": "スリランカ 5泊6日 モデルコース",
      "description": "シーギリヤ・キャンディ・ヌワラエリヤ・ヤーラ国立公園・ゴールなど主要観光地を専用タクシーチャーターで周遊。",
      "url": "https://sltcs.srilanka-charter.com/course/5-6days",
      "touristType": "日本人旅行者",
    }],
    jsonLdIdPrefix: "course-5-6days",
  });

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
            <span className="text-white/40 text-sm">2プラン収録</span>
          </div>
          <h1 className="text-3xl lg:text-5xl font-black text-white leading-tight mb-4" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            5泊6日<br />スリランカモデルコース
          </h1>
          <p className="text-white/60 max-w-xl leading-relaxed">
            スリランカを満喫するのに最適な期間。世界遺産・紅茶列車・サファリを余裕を持って体験できる2プランをご用意。タクシーチャーターで快適に巡るモデルコースです。
          </p>
          <div className="flex items-center gap-4 mt-6">
            <div className="flex items-center gap-2 text-white/50 text-sm">
              <Clock size={14} />
              <span>5泊6日（スリランカ国内）</span>
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
