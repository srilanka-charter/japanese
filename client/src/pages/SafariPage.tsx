import { useState } from "react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";

// ── 画像URL ──────────────────────────────────────────────
const SAFARI_MAP = "/manus-storage/safari_map_12bb9538.png";
const SAFARI_JEEP = "/manus-storage/safari_jeep_collage2_a2fd01e1.png";
const SAFARI_MINNERIYA =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/U5GFZm3GAbGuGjN2pLu33k/safari_minneriya-DFmuXZWM85cLvqifNNGpak.webp";
const SAFARI_WILPATTU =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/U5GFZm3GAbGuGjN2pLu33k/safari_wilpattu-CGm7FRoz5Pg7tRhhZPgrbn.webp";
const SAFARI_UDAWALAWE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/U5GFZm3GAbGuGjN2pLu33k/safari_udawalawe-YyiJqjuBS4LGuLpyvMwomf.webp";
const SAFARI_YALA =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/U5GFZm3GAbGuGjN2pLu33k/safari_yala-DHuiEEKaC8N3uTq5Lw5Gue.webp";

// ── タブデータ ────────────────────────────────────────────
type ParkTab = {
  id: string;
  label: string;
  image: string;
  group?: boolean;
  content: React.ReactNode;
};

const PARK_TABS: ParkTab[] = [
  {
    id: "central",
    label: "ミンネリア / カドゥッラ / フルル",
    image: SAFARI_MINNERIYA,
    group: true,
    content: (
      <div className="space-y-4">
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
          <p className="text-amber-800 font-semibold text-sm">
            ✦ SLTCSの特別サービス
          </p>
          <p className="text-amber-700 text-sm mt-1">
            この3か所は距離が近く、その日の象の出没状況によって最も遭遇率の高い公園をご案内します。
            事前に情報を収集し、最適な公園をドライバーが選定します。
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white border border-stone-200 rounded-lg p-4">
            <h4 className="font-bold text-stone-800 mb-2">① ミンネリア国立公園</h4>
            <p className="text-stone-600 text-sm">
              「ザ・ギャザリング」と呼ばれる世界最大規模の象の集結で有名。乾季（7〜10月）には数百頭もの象がミンネリア貯水池周辺に集まる壮観な光景が見られます。
            </p>
            <div className="mt-2 text-xs text-stone-500">
              <span className="font-semibold">主な動物：</span>象・鹿・孔雀・ワニ・各種野鳥
            </div>
            <div className="mt-1 text-xs text-amber-700 font-semibold">
              ベストシーズン：7〜10月
            </div>
          </div>
          <div className="bg-white border border-stone-200 rounded-lg p-4">
            <h4 className="font-bold text-stone-800 mb-2">② カドゥッラ国立公園</h4>
            <p className="text-stone-600 text-sm">
              ミンネリアに隣接する公園。乾季には同様に象の群れが集まり、ミンネリアと合わせて「エレファント・コリドー」と呼ばれる象の回廊を形成します。
            </p>
            <div className="mt-2 text-xs text-stone-500">
              <span className="font-semibold">主な動物：</span>象・ヒョウ・スローロリス・各種野鳥
            </div>
            <div className="mt-1 text-xs text-amber-700 font-semibold">
              ベストシーズン：7〜10月
            </div>
          </div>
          <div className="bg-white border border-stone-200 rounded-lg p-4">
            <h4 className="font-bold text-stone-800 mb-2">③ フルルエコパーク</h4>
            <p className="text-stone-600 text-sm">
              比較的小規模ながら象の遭遇率が高く、混雑が少ないのが特徴。ミンネリア・カドゥッラが混雑する時期でも穴場として機能します。
            </p>
            <div className="mt-2 text-xs text-stone-500">
              <span className="font-semibold">主な動物：</span>象・水牛・各種野鳥・ワニ
            </div>
            <div className="mt-1 text-xs text-amber-700 font-semibold">
              ベストシーズン：通年（特に6〜10月）
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "wilpattu",
    label: "ウィルパトゥ国立公園",
    image: SAFARI_WILPATTU,
    content: (
      <div className="space-y-4">
        <p className="text-stone-700">
          スリランカ最大の国立公園。「ヴィル（Villus）」と呼ばれる天然の湖が点在する独特の景観が特徴で、ヒョウの生息密度が高いことで知られています。コロンボから北に約180kmに位置し、北部観光と組み合わせることができます。
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white border border-stone-200 rounded-lg p-4">
            <h4 className="font-semibold text-stone-800 mb-2">主な見どころ</h4>
            <ul className="text-stone-600 text-sm space-y-1">
              <li>・スリランカヒョウ（遭遇率が比較的高い）</li>
              <li>・スリランカゾウ</li>
              <li>・スポッテッドディア（斑点鹿）</li>
              <li>・ワニ・水牛・各種野鳥</li>
            </ul>
          </div>
          <div className="bg-white border border-stone-200 rounded-lg p-4">
            <h4 className="font-semibold text-stone-800 mb-2">基本情報</h4>
            <ul className="text-stone-600 text-sm space-y-1">
              <li>・<span className="font-semibold">ベストシーズン：</span>2〜10月</li>
              <li>・<span className="font-semibold">特徴：</span>スリランカ最大面積</li>
              <li>・<span className="font-semibold">景観：</span>ジャングルと湖が混在</li>
              <li>・<span className="font-semibold">混雑度：</span>比較的少ない</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "udawalawe",
    label: "ウダワラウェ国立公園",
    image: SAFARI_UDAWALAWE,
    content: (
      <div className="space-y-4">
        <p className="text-stone-700">
          象の遭遇率がスリランカ最高水準と言われる公園。広大な草原と貯水池を持ち、象の群れが常時生息しています。ヤーラへの道中に位置するため、南部観光と組み合わせやすいのも魅力です。
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white border border-stone-200 rounded-lg p-4">
            <h4 className="font-semibold text-stone-800 mb-2">主な見どころ</h4>
            <ul className="text-stone-600 text-sm space-y-1">
              <li>・スリランカゾウ（常時200頭以上が生息）</li>
              <li>・水牛・ワニ・孔雀</li>
              <li>・各種猛禽類・野鳥</li>
              <li>・サルの群れ</li>
            </ul>
          </div>
          <div className="bg-white border border-stone-200 rounded-lg p-4">
            <h4 className="font-semibold text-stone-800 mb-2">基本情報</h4>
            <ul className="text-stone-600 text-sm space-y-1">
              <li>・<span className="font-semibold">ベストシーズン：</span>通年（乾季の5〜9月が特に良い）</li>
              <li>・<span className="font-semibold">特徴：</span>象の遭遇率No.1</li>
              <li>・<span className="font-semibold">景観：</span>草原・貯水池</li>
              <li>・<span className="font-semibold">混雑度：</span>中程度</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "yala",
    label: "ヤーラ国立公園",
    image: SAFARI_YALA,
    content: (
      <div className="space-y-4">
        <div className="bg-red-50 border border-red-200 rounded-lg p-3">
          <p className="text-red-700 text-sm font-semibold">
            ⚠ 閉園期間のご注意
          </p>
          <p className="text-red-600 text-sm mt-1">
            ヤーラ国立公園は毎年9月〜10月にかけて約1か月間の閉園期間があります。この時期にご旅行の方は他の公園をご検討ください。
          </p>
        </div>
        <p className="text-stone-700">
          スリランカで最も有名な国立公園のひとつ。世界最高密度のヒョウが生息することで知られ、「ヒョウに会えるサファリ」として世界中のウォッチャーが訪れます。南部のゴールやハンバントタからのアクセスも良好です。
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white border border-stone-200 rounded-lg p-4">
            <h4 className="font-semibold text-stone-800 mb-2">主な見どころ</h4>
            <ul className="text-stone-600 text-sm space-y-1">
              <li>・スリランカヒョウ（世界最高密度）</li>
              <li>・スリランカゾウ</li>
              <li>・ワニ・水牛・孔雀</li>
              <li>・各種野鳥（200種以上）</li>
            </ul>
          </div>
          <div className="bg-white border border-stone-200 rounded-lg p-4">
            <h4 className="font-semibold text-stone-800 mb-2">基本情報</h4>
            <ul className="text-stone-600 text-sm space-y-1">
              <li>・<span className="font-semibold">ベストシーズン：</span>2〜7月</li>
              <li>・<span className="font-semibold">閉園期間：</span>毎年9〜10月頃（約1か月）</li>
              <li>・<span className="font-semibold">特徴：</span>ヒョウ遭遇率No.1</li>
              <li>・<span className="font-semibold">混雑度：</span>高め（早朝がおすすめ）</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
];

// ── コンポーネント ─────────────────────────────────────────
export default function SafariPage() {
  const [activeTab, setActiveTab] = useState<string>("central");

  const activepark = PARK_TABS.find((t) => t.id === activeTab)!;

  useSEO({
    title: "スリランカのサファリ完全ガイド｜6つの国立公園と象・ヒョウの見どころ | SLTCS",
    description: "スリランカのサファリが有名な理由から、ミンネリア・ヤーラ・ウダワラウェなど６つの国立公園の特徴・ベストシーズン・主な動物まで徹底解説。SLTCSのプラチナプラン以上ではジープ手配も可能です。",
    path: "/safari",
    ogImage: SAFARI_MINNERIYA,
    jsonLdList: [{
      "@context": "https://schema.org",
      "@type": "TouristAttraction",
      "name": "スリランカサファリ",
      "description": "スリランカの国立公園で象・ヒョウなど野生動物を観察。SLTCSのタクシーチャーターで送迎付きでご案内。",
      "url": "https://sltcs.srilanka-charter.com/safari",
      "image": SAFARI_MINNERIYA,
      "touristType": "Wildlife Tourism",
    }],
    jsonLdIdPrefix: "safari",
  });

  return (
    <>
      <div className="min-h-screen bg-white">
        <Header />

        {/* ── ヒーロー ── */}
        <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
          <img
            src={SAFARI_MINNERIYA}
            alt="スリランカのサファリ"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <p className="text-amber-300 text-sm font-semibold tracking-widest uppercase mb-3">
              Sri Lanka Safari Guide
            </p>
            <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight drop-shadow-lg">
              スリランカのサファリ
              <br />
              完全ガイド
            </h1>
            <p className="text-white/90 mt-4 text-lg max-w-xl">
              6つの国立公園の特徴・ベストシーズン・動物情報を徹底解説
            </p>
          </div>
        </section>

        {/* ── パンくず ── */}
        <nav className="bg-stone-50 border-b border-stone-200 py-3 px-4">
          <div className="max-w-5xl mx-auto text-sm text-stone-500">
            <Link href="/" className="hover:text-stone-700">ホーム</Link>
            <span className="mx-2">/</span>
            <Link href="/activity" className="hover:text-stone-700">アクティビティ</Link>
            <span className="mx-2">/</span>
            <span className="text-stone-800">サファリ</span>
          </div>
        </nav>

        <div className="max-w-5xl mx-auto px-4 py-12 space-y-20">

          {/* ── Section 1: なぜ有名か ── */}
          <section>
            <h2 className="text-3xl font-bold text-stone-800 mb-2">
              スリランカのサファリが有名な理由
            </h2>
            <div className="w-16 h-1 bg-amber-500 mb-6" />
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="space-y-4 text-stone-700 leading-relaxed">
                <p>
                  スリランカは国土面積が日本の北海道とほぼ同じながら、<strong>野生のアジアゾウ・ヒョウ・クマ・ワニ</strong>など多様な野生動物が生息する希少な国です。国土の約30%が自然保護区・国立公園に指定されており、アフリカのサバンナとは異なる<strong>密林・草原・湖が混在する独自の生態系</strong>が広がっています。
                </p>
                <p>
                  特にミンネリア国立公園で毎年見られる「<strong>ザ・ギャザリング（The Gathering）</strong>」は、数百頭もの野生象が一か所に集まる世界最大規模の象の集結として知られ、BBCやNational Geographicでも特集されてきました。
                </p>
                <p>
                  またヤーラ国立公園は<strong>世界最高密度のヒョウ</strong>が生息することで知られ、アフリカのサファリでは難しいヒョウとの遭遇が比較的高い確率で期待できます。
                </p>
                <div className="grid grid-cols-3 gap-3 mt-4">
                  {[
                    { num: "6", label: "主要国立公園" },
                    { num: "200+", label: "象の生息数（ウダワラウェのみ）" },
                    { num: "世界最高", label: "ヒョウ密度（ヤーラ）" },
                  ].map((s) => (
                    <div key={s.label} className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-amber-700">{s.num}</div>
                      <div className="text-xs text-stone-600 mt-1">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <img
                  src={SAFARI_MAP}
                  alt="スリランカの6つのサファリマップ"
                  className="w-full h-auto rounded-xl shadow-md"
                />
                <p className="text-xs text-stone-400 mt-2 text-center">スリランカの主要サファリ国立公園マップ</p>
              </div>
            </div>
          </section>

          {/* ── Section 2: Jeepが必須 ── */}
          <section>
            <h2 className="text-3xl font-bold text-stone-800 mb-2">
              サファリにはジープが必須
            </h2>
            <div className="w-16 h-1 bg-amber-500 mb-6" />
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <img
                  src={SAFARI_JEEP}
                  alt="SLTCSのサファリジープ"
                  className="w-full h-auto rounded-xl shadow-md"
                />
                <p className="text-xs text-stone-400 mt-2 text-center">SLTCSが手配するプライベートジープ</p>
              </div>
              <div className="space-y-4 text-stone-700 leading-relaxed">
                <p>
                  スリランカの国立公園内はすべて<strong>四輪駆動のジープ（サファリビークル）</strong>での移動が義務付けられています。公園の入り口でジープに乗り換えて園内を巡るスタイルが一般的です。
                </p>
                <p>
                  <strong>SLTCSのプラチナプラン以上</strong>では、チャーター車とは別にサファリ用のジープを手配することができます。
                </p>
                <div className="bg-stone-50 border border-stone-200 rounded-xl p-5 space-y-3">
                  <h3 className="font-bold text-stone-800">SLTCSでジープを手配するメリット</h3>
                  {[
                    "合流・解散場所で悩む必要がない。前の観光スポットからスムーズにジープツアーを始められ、終わった後も次の観光地へスムーズに移動できます",
                    "ドライバーが同乗して解説。日本語ドライバーなら日本語でのガイドが受けられます",
                    "質の高いジープを手配。安価なサービスでは車両の状態が悪いケースも多く、快適性・安全性に差が出ます",
                    "他の旅行客との混載ではなく、グループだけのプライベートサファリを楽しめます",
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3">
                      <span className="text-amber-500 font-bold shrink-0">✔</span>
                      <p className="text-stone-600 text-sm">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ── Section 3: 各国立公園（タブ） ── */}
          <section>
            <h2 className="text-3xl font-bold text-stone-800 mb-2">
              各国立公園の魅力
            </h2>
            <div className="w-16 h-1 bg-amber-500 mb-6" />

            {/* タブ */}
            <div className="flex flex-wrap gap-2 mb-6">
              {PARK_TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
                    activeTab === tab.id
                      ? "bg-amber-600 text-white border-amber-600"
                      : "bg-white text-stone-600 border-stone-300 hover:border-amber-400 hover:text-amber-700"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* タブコンテンツ */}
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200">
              <div className="relative h-64 md:h-80 overflow-hidden">
                <img
                  src={activepark.image}
                  alt={activepark.label}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <h3 className="text-white text-2xl font-bold drop-shadow">
                    {activepark.label}
                    {activepark.group && (
                      <span className="ml-2 text-sm bg-amber-500 text-white px-2 py-0.5 rounded-full">
                        SLTCS最適化
                      </span>
                    )}
                  </h3>
                </div>
              </div>
              <div className="p-6">{activepark.content}</div>
            </div>


          </section>

          {/* ── Section 4: モデルコース ── */}
          <section className="py-4">
            <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mb-2">
              スリランカのサファリを巡るモデルコース
            </h2>
            <p className="text-stone-500 text-sm mb-8">
              世界遺産・紅茶列車・ヤーラサファリを組み合わせた6日間の王道ルート
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {/* 左: 旅程マップ */}
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/manus-storage/safari_model_course_map_3641f841.png"
                  alt="スリランカ旅程マップ 6日間 サファリモデルコース"
                  className="w-full h-auto"
                />
              </div>

              {/* 右: モデルコース詳細 */}
              <div className="space-y-4">
                {[
                  {
                    day: "DAY 1",
                    color: "bg-red-500",
                    title: "空港 → シーギリヤ",
                    items: [
                      "コロンボ空港からシーギリヤ地域まで車で約4時間",
                      "途中、ダンブッラ石窟寺院（世界遺産）に立ち寄り",
                      "シーギリヤ近郊のホテルに宿泊",
                    ],
                  },
                  {
                    day: "DAY 2",
                    color: "bg-orange-500",
                    title: "シーギリヤ → キャンディ",
                    items: [
                      "シーギリヤ・ロック観光（高さ200mの岩山要塞）",
                      "キャンディへ移動（約3時間）",
                      "キャンディ仏歯寺を夕方のプージャに合わせて参詣",
                    ],
                  },
                  {
                    day: "DAY 3",
                    color: "bg-green-600",
                    title: "キャンディ → ヌワラエリヤ",
                    items: [
                      "高原地帯へ車で移動（約3時間）",
                      "茶畑の車窓を楽しみながらヌワラエリヤへ",
                      "紅茶工場改装ホテルなどに宿泊",
                    ],
                  },
                  {
                    day: "DAY 4",
                    color: "bg-blue-600",
                    title: "紅茶列車 → ヤーラ前泊",
                    items: [
                      "Bandarawelaから紅茶列車に乗車（ナインアーチブリッジ区間）",
                      "エッラでランチ後、ヤーラ国立公園近郊へ移動",
                      "翌朝の早朝サファリに備えてヤーラ近郊に宿泊",
                    ],
                  },
                  {
                    day: "DAY 5",
                    color: "bg-purple-600",
                    title: "ヤーラ国立公園 → ゴール",
                    items: [
                      "早朝5〜6時からジープサファリ体験（ヒョウに遭遇できる確率が高い）",
                      "午前中のサファリ終了後、ゴール近郊へ移動（約2時間）",
                      "インド洋を望むリゾートホテルに宿泊",
                    ],
                  },
                  {
                    day: "DAY 6",
                    color: "bg-teal-600",
                    title: "ゴール観光 → 空港へ",
                    items: [
                      "ゴール要塞（世界遺産）を散策",
                      "コロンボ経由で市内観光・お土産購入",
                      "バンダラナイケ国際空港から帰国",
                    ],
                  },
                ].map(({ day, color, title, items }) => (
                  <div key={day} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <span className={`inline-flex items-center justify-center w-16 h-7 rounded-full text-white text-xs font-bold ${color}`}>
                        {day}
                      </span>
                    </div>
                    <div className="flex-1 border-l-2 border-stone-200 pl-4 pb-4">
                      <h3 className="font-bold text-stone-800 mb-1">{title}</h3>
                      <ul className="space-y-1">
                        {items.map((item, i) => (
                          <li key={i} className="text-sm text-stone-600 flex gap-2">
                            <span className="text-amber-500 flex-shrink-0 mt-0.5">▸</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}

                <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-xl text-sm text-stone-700">
                  <span className="font-semibold text-amber-700">💡 このルートの詳細はこちら：</span>
                  <a
                    href="/course/5-6days"
                    className="ml-1 text-amber-600 hover:text-amber-700 underline"
                  >
                    5泊6日モデルコース（世界遺産・紅茶列車・サファリを楽しむ王道プラン）
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* ── Section 5: お問い合わせ ── */}
          <section className="bg-stone-800 text-white rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              サファリをご旅行に組み込みたい方へ
            </h2>
            <p className="text-stone-300 max-w-2xl mx-auto mb-6 leading-relaxed">
              どの国立公園が良いか、ジープの手配方法、最適な訪問時期など、お気軽にご相談ください。
              もちろん、ご自身でジープを手配されても問題ありません。SLTCSはチャーター車でのスムーズな移動をサポートします。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#contact"
                className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-3 rounded-full transition-colors"
              >
                サファリについて問い合わせる
              </a>
              <Link
                href="/activity"
                className="inline-block bg-transparent border border-white/50 hover:border-white text-white font-semibold px-8 py-3 rounded-full transition-colors"
              >
                アクティビティ一覧に戻る
              </Link>
            </div>
          </section>

        </div>

        <Footer />
      </div>
    </>
  );
}
