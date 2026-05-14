import { useState } from "react";
import { Link } from "wouter";
import { ArrowRight, MapPin, ChevronRight, Clock } from "lucide-react";

// ── データ定義 ────────────────────────────────────────────────
const allCourses = [
  {
    nights: "3泊4日",
    href: "/course/3-4days",
    plans: [
      {
        id: 1,
        title: "文化三角地帯と紅茶列車を体験するプラン",
        subtitle: "シーギリヤ・キャンディ・ヌワラエリヤ",
        tags: ["世界遺産", "紅茶列車", "文化遺産"],
        highlights: [
          "ダンブッラ石窟寺院（世界遺産）",
          "シーギリヤ・ロック（世界遺産）",
          "キャンディ仏歯寺",
          "紅茶列車の旅（キャンディ→ヌワラエリヤ）",
          "ヌワラエリヤ高原の茶畑",
        ],
        days: [
          { day: 1, title: "空港 → シーギリヤ地域へ移動", spots: ["ネゴンボ・コロンボ空港から車で約4時間", "ダンブッラ石窟寺院 観光（世界遺産）", "ヘリタンスカンダラマ泊"] },
          { day: 2, title: "シーギリヤロック → キャンディへ", spots: ["シーギリヤ・ロック観光（世界遺産）", "キャンディへ移動（約3時間）", "キャンディ仏歯寺 夕方のプージャ参詣"] },
          { day: 3, title: "紅茶列車でヌワラエリヤへ", spots: ["キャンディ駅 → ナヌオヤ駅（紅茶列車）", "ヌワラエリヤ市内観光・茶畑散策", "Heritance Tea Factory 泊"] },
          { day: 4, title: "コロンボ経由で空港へ", spots: ["ヌワラエリヤ → コロンボ（車で約5時間）", "コロンボ市内観光・お土産購入", "空港へ移動・帰国"] },
        ],
      },
      {
        id: 2,
        title: "世界遺産を中心に巡るプラン",
        subtitle: "アヌラーダプラ・シーギリヤ・キャンディ",
        tags: ["世界遺産", "古代都市", "文化遺産"],
        highlights: [
          "アヌラーダプラ（世界遺産・古代都市）",
          "ルワンウェリサーヤ大塔",
          "シーギリヤ・ロック（世界遺産）",
          "ダンブッラ石窟寺院（世界遺産）",
          "キャンディ仏歯寺",
        ],
        days: [
          { day: 1, title: "空港 → アヌラーダプラ観光", spots: ["ネゴンボから車で約3.5時間", "アヌラーダプラ観光（世界遺産）", "ヘリタンスカンダラマ泊"] },
          { day: 2, title: "シーギリヤロック → ダンブッラ", spots: ["シーギリヤ・ロック観光（世界遺産）", "ダンブッラ石窟寺院 観光（世界遺産）", "キャンディへ移動"] },
          { day: 3, title: "キャンディ仏歯寺を観光", spots: ["キャンディ仏歯寺 観光", "キャンディ市内散策", "コロンボへ移動"] },
          { day: 4, title: "コロンボ経由で空港へ", spots: ["コロンボ市内観光・お土産購入", "ガンガラーマ寺院", "空港へ移動・帰国"] },
        ],
      },
    ],
  },
  {
    nights: "4泊5日",
    href: "/course/4-5days",
    plans: [
      {
        id: 1,
        title: "世界遺産・紅茶列車・サファリを楽しむ王道プラン",
        subtitle: "シーギリヤ・キャンディ・エッラ・ウダワラウェ・ゴール",
        tags: ["世界遺産", "紅茶列車", "サファリ"],
        highlights: [
          "シーギリヤ・ロック（世界遺産）",
          "キャンディ仏歯寺",
          "紅茶列車（キャンディ→エッラ）",
          "ウダワラウェ国立公園サファリ",
          "ゴール要塞（世界遺産）",
        ],
        days: [
          { day: 1, title: "空港 → シーギリヤ地域へ移動", spots: ["空港から車で約4時間", "ダンブッラ石窟寺院 観光", "シーギリヤ周辺泊"] },
          { day: 2, title: "シーギリヤロック → キャンディへ", spots: ["シーギリヤ・ロック観光（世界遺産）", "キャンディへ移動（約3時間）", "仏歯寺 夕方のプージャ参詣"] },
          { day: 3, title: "紅茶列車でエッラへ", spots: ["キャンディ駅 → エッラ駅（紅茶列車）", "ナインアーチブリッジ観光", "エッラ泊"] },
          { day: 4, title: "エッラ → ウダワラウェ → ゴール", spots: ["ウダワラウェ国立公園サファリ", "ゴール要塞（世界遺産）観光", "ゴール近郊泊"] },
          { day: 5, title: "ゴール観光 → 空港へ", spots: ["ゴール旧市街散策", "コロンボ経由で空港へ移動", "帰国"] },
        ],
      },
      {
        id: 2,
        title: "世界遺産を中心に巡るプラン",
        subtitle: "アヌラーダプラ・シーギリヤ・キャンディ・ゴール",
        tags: ["世界遺産", "古代都市", "文化遺産"],
        highlights: [
          "アヌラーダプラ（世界遺産）",
          "シーギリヤ・ロック（世界遺産）",
          "ポロンナルワ（世界遺産）",
          "ミンネリヤ国立公園サファリ",
          "ゴール要塞（世界遺産）",
        ],
        days: [
          { day: 1, title: "空港 → アヌラーダプラ観光", spots: ["ネゴンボから車で約3.5時間", "アヌラーダプラ観光（世界遺産）", "ヘリタンスカンダラマ泊"] },
          { day: 2, title: "シーギリヤロック → ダンブッラ", spots: ["シーギリヤ・ロック観光（世界遺産）", "ダンブッラ石窟寺院 観光（世界遺産）", "キャンディへ移動"] },
          { day: 3, title: "ポロンナルワ → ミンネリヤサファリ", spots: ["ポロンナルワ観光（世界遺産）", "ミンネリヤ国立公園サファリ", "キャンディ泊"] },
          { day: 4, title: "キャンディ仏歯寺を観光", spots: ["キャンディ仏歯寺 観光", "コロンボへ移動", "ゴール要塞（世界遺産）観光"] },
          { day: 5, title: "コロンボ経由で空港へ", spots: ["コロンボ市内観光", "お土産購入", "空港へ移動・帰国"] },
        ],
      },
    ],
  },
  {
    nights: "5泊6日",
    href: "/course/5-6days",
    plans: [
      {
        id: 1,
        title: "世界遺産・紅茶列車・サファリを楽しむ王道プラン",
        subtitle: "シーギリヤ・キャンディ・ヌワラエリヤ・ヤーラ・ゴール",
        tags: ["世界遺産", "紅茶列車", "サファリ"],
        highlights: [
          "シーギリヤ・ロック（世界遺産）",
          "キャンディ仏歯寺",
          "紅茶列車（ナインアーチブリッジ）",
          "ヤーラ国立公園サファリ",
          "ゴール要塞（世界遺産）",
        ],
        days: [
          { day: 1, title: "空港 → シーギリヤ地域へ移動", spots: ["空港から車で約4時間", "ダンブッラ石窟寺院 観光", "シーギリヤ周辺泊"] },
          { day: 2, title: "シーギリヤロック → キャンディへ", spots: ["シーギリヤ・ロック観光（世界遺産）", "キャンディへ移動（約3時間）", "仏歯寺 夕方のプージャ参詣"] },
          { day: 3, title: "キャンディ → ヌワラエリヤへ移動", spots: ["キャンディ市内観光", "ヌワラエリヤへ移動（約3時間）", "Heritance Tea Factory 泊"] },
          { day: 4, title: "紅茶列車でエッラ → ヤーラへ", spots: ["紅茶列車でエッラへ（ナインアーチブリッジ）", "エッラ → ヤーラ国立公園前泊地へ移動", "ヤーラ近郊泊"] },
          { day: 5, title: "ヤーラサファリ → ゴールへ", spots: ["ヤーラ国立公園サファリ（早朝）", "ゴール要塞（世界遺産）観光", "ゴール近郊泊"] },
          { day: 6, title: "ゴール観光 → 空港へ", spots: ["ゴール旧市街散策", "コロンボ経由で空港へ移動", "帰国"] },
        ],
      },
      {
        id: 2,
        title: "世界遺産を中心に巡るプラン",
        subtitle: "アヌラーダプラ・シーギリヤ・ポロンナルワ・キャンディ・ヌワラエリヤ",
        tags: ["世界遺産", "古代都市", "紅茶列車"],
        highlights: [
          "アヌラーダプラ（世界遺産）",
          "シーギリヤ・ロック（世界遺産）",
          "ポロンナルワ（世界遺産）",
          "ミンネリヤ国立公園サファリ",
          "紅茶列車（キャンディ→ヌワラエリヤ）",
        ],
        days: [
          { day: 1, title: "空港 → アヌラーダプラ観光", spots: ["ネゴンボから車で約3.5時間", "アヌラーダプラ観光（世界遺産）", "ヘリタンスカンダラマ泊"] },
          { day: 2, title: "シーギリヤロック → ダンブッラ", spots: ["シーギリヤ・ロック観光（世界遺産）", "ダンブッラ石窟寺院 観光（世界遺産）", "キャンディへ移動"] },
          { day: 3, title: "ポロンナルワ → ミンネリヤサファリ", spots: ["ポロンナルワ観光（世界遺産）", "ミンネリヤ国立公園サファリ", "キャンディ泊"] },
          { day: 4, title: "キャンディ仏歯寺を観光", spots: ["キャンディ仏歯寺 観光", "キャンディ市内散策", "コロンボへ移動"] },
          { day: 5, title: "紅茶列車でヌワラエリヤへ", spots: ["キャンディ → ヌワラエリヤ（紅茶列車）", "ヌワラエリヤ高原散策", "Heritance Tea Factory 泊"] },
          { day: 6, title: "コロンボ経由で空港へ", spots: ["ヌワラエリヤ → コロンボ（車で約5時間）", "コロンボ市内観光", "空港へ移動・帰国"] },
        ],
      },
    ],
  },
];

// ── コンポーネント ────────────────────────────────────────────
export default function ModelCourseSection() {
  const [activeNight, setActiveNight] = useState(0);
  const [activePlan, setActivePlan] = useState(0);

  const currentCourse = allCourses[activeNight];
  const currentPlan = currentCourse.plans[activePlan];

  const handleNightChange = (idx: number) => {
    setActiveNight(idx);
    setActivePlan(0); // プランタブをリセット
  };

  return (
    <section className="py-20 bg-[oklch(0.97_0.005_155)]">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-10">
          <p className="text-[oklch(0.55_0.12_75)] text-xs tracking-[0.3em] font-semibold uppercase mb-3">
            — MODEL COURSE —
          </p>
          <h2
            className="text-3xl lg:text-4xl font-black text-[oklch(0.12_0.02_155)] mb-4"
            style={{ fontFamily: "'Noto Serif JP', serif" }}
          >
            タクシーチャーターで巡るモデルコース
          </h2>
          <div className="w-12 h-0.5 bg-[oklch(0.75_0.12_75)] mx-auto mb-4" />
          <p className="text-[oklch(0.45_0.02_155)] text-sm max-w-xl mx-auto leading-relaxed">
            旅の日程に合わせて選べる3つのコース。すべて日本語対応の専属ドライバーが全行程をサポートします。
          </p>
        </div>

        {/* ── 泊数タブ（第1層） ── */}
        <div className="flex justify-center gap-2 mb-8">
          {allCourses.map((course, idx) => (
            <button
              key={course.nights}
              onClick={() => handleNightChange(idx)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-200 border ${
                activeNight === idx
                  ? "bg-[oklch(0.12_0.02_155)] text-white border-[oklch(0.12_0.02_155)] shadow-md"
                  : "bg-white text-[oklch(0.35_0.02_155)] border-[oklch(0.85_0.005_155)] hover:border-[oklch(0.75_0.12_75)] hover:text-[oklch(0.12_0.02_155)]"
              }`}
            >
              {course.nights}
            </button>
          ))}
        </div>

        {/* ── メインカード ── */}
        <div className="bg-white rounded-2xl shadow-lg border border-[oklch(0.92_0.005_155)] overflow-hidden">
          {/* ── プランタブ（第2層） ── */}
          <div className="flex border-b border-[oklch(0.92_0.005_155)] bg-[oklch(0.98_0.003_155)]">
            {currentCourse.plans.map((plan, idx) => (
              <button
                key={plan.id}
                onClick={() => setActivePlan(idx)}
                className={`flex-1 px-4 py-3.5 text-sm font-semibold transition-all duration-200 border-b-2 ${
                  activePlan === idx
                    ? "border-[oklch(0.75_0.12_75)] text-[oklch(0.12_0.02_155)] bg-white"
                    : "border-transparent text-[oklch(0.5_0.02_155)] hover:text-[oklch(0.25_0.02_155)]"
                }`}
              >
                <span className="hidden sm:inline">プラン {idx + 1}：</span>
                {plan.subtitle}
              </button>
            ))}
          </div>

          {/* ── コンテンツエリア ── */}
          <div className="p-6 lg:p-8">
            {/* プランヘッダー */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-6">
              <div>
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {currentPlan.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-[oklch(0.12_0.02_155)/8] text-[oklch(0.25_0.02_155)] text-[11px] px-2.5 py-0.5 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3
                  className="text-lg lg:text-xl font-black text-[oklch(0.12_0.02_155)] leading-snug"
                  style={{ fontFamily: "'Noto Serif JP', serif" }}
                >
                  {currentPlan.title}
                </h3>
                <p className="text-[oklch(0.5_0.02_155)] text-sm flex items-center gap-1 mt-1">
                  <MapPin size={12} className="flex-shrink-0" />
                  {currentPlan.subtitle}
                </p>
              </div>
              <div className="flex items-center gap-1.5 text-[oklch(0.5_0.02_155)] text-xs bg-[oklch(0.97_0.005_155)] px-3 py-1.5 rounded-full flex-shrink-0">
                <Clock size={12} />
                <span>{currentCourse.nights}（スリランカ国内）</span>
              </div>
            </div>

            {/* 2カラム：ハイライト ＋ 日程タイムライン */}
            <div className="grid lg:grid-cols-5 gap-6">
              {/* ハイライト（左） */}
              <div className="lg:col-span-2 bg-[oklch(0.97_0.005_155)] rounded-xl p-5">
                <p className="text-[10px] font-black tracking-widest text-[oklch(0.55_0.12_75)] uppercase mb-3">
                  HIGHLIGHTS
                </p>
                <ul className="space-y-2">
                  {currentPlan.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[oklch(0.25_0.02_155)]">
                      <ChevronRight
                        size={14}
                        className="text-[oklch(0.75_0.12_75)] flex-shrink-0 mt-0.5"
                      />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              {/* 日程タイムライン（右） */}
              <div className="lg:col-span-3">
                <p className="text-[10px] font-black tracking-widest text-[oklch(0.55_0.12_75)] uppercase mb-3">
                  ITINERARY
                </p>
                <div className="space-y-3">
                  {currentPlan.days.map((day, i) => (
                    <div key={i} className="flex gap-3">
                      {/* Day バッジ */}
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full bg-[oklch(0.12_0.02_155)] text-white text-[11px] font-black flex items-center justify-center flex-shrink-0">
                          {String(day.day).padStart(2, "0")}
                        </div>
                        {i < currentPlan.days.length - 1 && (
                          <div className="w-px flex-1 bg-[oklch(0.88_0.005_155)] mt-1 mb-0" />
                        )}
                      </div>
                      {/* 内容 */}
                      <div className="pb-3 flex-1 min-w-0">
                        <p className="text-sm font-bold text-[oklch(0.2_0.02_155)] mb-1">
                          {day.title}
                        </p>
                        <ul className="space-y-0.5">
                          {day.spots.map((spot, j) => (
                            <li
                              key={j}
                              className="text-xs text-[oklch(0.5_0.02_155)] leading-relaxed"
                            >
                              · {spot}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 詳細リンク */}
            <div className="mt-6 pt-5 border-t border-[oklch(0.92_0.005_155)] flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="text-xs text-[oklch(0.55_0.02_155)]">
                ご希望に合わせてカスタマイズも可能です。まずはお気軽にご相談ください。
              </p>
              <div className="flex gap-3">
                <a
                  href="/#contact"
                  className="inline-flex items-center gap-1.5 bg-[oklch(0.75_0.12_75)] hover:bg-[oklch(0.65_0.1_75)] text-[oklch(0.1_0.02_155)] px-5 py-2 rounded-full text-sm font-bold transition-all"
                >
                  無料で相談する
                </a>
                <Link
                  href={currentCourse.href}
                  className="inline-flex items-center gap-1.5 border border-[oklch(0.12_0.02_155)] text-[oklch(0.12_0.02_155)] hover:bg-[oklch(0.12_0.02_155)] hover:text-white px-5 py-2 rounded-full text-sm font-bold transition-all"
                >
                  詳細を見る
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
