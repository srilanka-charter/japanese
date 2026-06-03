import { ChevronRight } from "lucide-react";

const HERO_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/U5GFZm3GAbGuGjN2pLu33k/blog-course-10days-5oo5hk9wkcUpAUQhRGKDKE.webp";

// 口コミセクションの写真（タクシーチャーター顧客とドライバー）
const CHARTER_IMG = "/manus-storage/review_tk_couple_07b5bba1.png";

const SAFARI_IMG =
  "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=900&q=80";

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2
    className="text-xl sm:text-2xl font-bold text-gray-900 border-l-4 border-[oklch(0.35_0.12_155)] pl-4 mb-5 mt-4"
    style={{ fontFamily: "'Shippori Mincho', serif" }}
  >
    {children}
  </h2>
);

let _h3Counter = 0;
const H3 = ({ children, index }: { children: React.ReactNode; index?: number }) => {
  const nums = ["\u2460","\u2461","\u2462","\u2463","\u2464","\u2465","\u2466","\u2467","\u2468","\u2469"];
  const badge = index !== undefined ? nums[index] ?? String(index + 1) : "\u2022";
  return (
    <h3 className="text-base sm:text-lg font-bold mt-12 mb-4 pb-2 border-b-2 border-[oklch(0.35_0.12_155)] flex items-center gap-2">
      <span className="w-6 h-6 rounded bg-[oklch(0.35_0.12_155)] text-white text-xs flex items-center justify-center font-bold flex-shrink-0">{badge}</span>
      <span className="text-[oklch(0.35_0.12_155)]">{children}</span>
    </h3>
  );
};

const itinerary = [
  {
    day: "Day 1", title: "コロンボ到着・市内観光", area: "コロンボ",
    spots: ["ガンガラーマ寺院", "コロンボ国立博物館", "ゴール・フェイスグリーン"],
    body: "スリランカの玄関口、バンダラナイケ国際空港に到着後、専用車でコロンボへ。ガンガラーマ寺院では色鮮やかな仏像と象に出会え、国立博物館ではスリランカの歴史を一望できます。夜は海沿いのゴール・フェイスグリーンで夕涼みを楽しみましょう。",
    link: null,
  },
  {
    day: "Day 2", title: "コロンボ → アヌラーダプラ → シーギリヤ泊", area: "文化三角地帯",
    spots: ["アヌラーダプラ（世界遺産）", "スリー・マハー菩提樹", "ルワンウェリサーヤ大塔", "シーギリヤ周辺ホテル泊"],
    body: "専用車で北上し、まずスリランカ最古の都市アヌラーダプラへ。2,000年以上前の仏塔や世界最古の菩提樹（スリー・マハー菩提樹）が今も信仰を集めています。午後はシーギリヤへ移動し、翌朝の登山に備えてゆっくり休息します。",
    link: null,
  },
  {
    day: "Day 3", title: "シーギリヤロック → ダンブッラ石窟寺院", area: "シーギリヤ・ダンブッラ",
    spots: ["シーギリヤロック（世界遺産）", "ダンブッラ石窟寺院（世界遺産）"],
    body: "早朝、シーギリヤロックへ。5世紀に築かれた岩山宮殿の頂上からは360度のパノラマが広がります。午後はダンブッラ石窟寺院へ移動。5つの石窟に150体以上の仏像が並ぶ壮観な世界遺産です。",
    link: "/sigiriya",
    linkLabel: "シーギリヤ詳細ページを見る",
  },
  {
    day: "Day 4", title: "ポロンナルワ → ミンネリア国立公園", area: "ポロンナルワ・ミンネリア",
    spots: ["ポロンナルワ古代都市（世界遺産）", "ミンネリア国立公園（象の集会）"],
    body: "ポロンナルワへ移動し、12世紀の王都跡に残る仏塔や宮殿址を自転車で巡ります。午後はミンネリア国立公園へ。乾季（6〜9月）には数百頭の象が水辺に集まる「ギャザリング」が見られ、スリランカ随一の野生動物体験です。",
    link: null,
  },
  {
    day: "Day 5", title: "キャンディへ移動・仏歯寺参拝", area: "キャンディ",
    spots: ["仏歯寺（世界遺産）", "キャンディアンダンスショー", "キャンディ湖散策"],
    body: "スリランカの古都キャンディへ。世界遺産の仏歯寺には仏陀の歯が祀られ、夕方のプージャ（礼拝）は荘厳な雰囲気に包まれます。夜はキャンディアンダンスの伝統舞踊ショーを鑑賞しましょう。",
    link: "/kandy",
    linkLabel: "キャンディ詳細ページを見る",
  },
  {
    day: "Day 6", title: "紅茶列車でエッラへ・ナインアーチブリッジ", area: "キャンディ〜エッラ",
    spots: ["キャンディ〜エッラ間の紅茶列車", "ナインアーチブリッジ", "リトルアダムスピーク"],
    body: "世界で最も美しい鉄道路線のひとつ、キャンディ〜エッラ間の紅茶列車に乗車。緑の茶畑と霧の山岳地帯を抜ける約7時間の旅は、スリランカ旅行のハイライトのひとつです。エッラ到着後はナインアーチブリッジへ。",
    link: null,
  },
  {
    day: "Day 7", title: "ヤーラ国立公園サファリ", area: "ヤーラ",
    spots: ["ヤーラ国立公園（サファリ）", "ヒョウ・象・クジャク観察"],
    body: "スリランカ南東部のヤーラ国立公園は、世界最高密度のヒョウの生息地として知られています。早朝と夕方の2回サファリに出かけることで、ヒョウ・象・クジャク・ワニなど多彩な野生動物に出会える確率が高まります。",
    link: "/safari",
    linkLabel: "サファリ詳細ページを見る",
  },
  {
    day: "Day 8", title: "ゴール旧市街観光・ビーチリゾート", area: "ゴール・南部海岸",
    spots: ["ゴール要塞（世界遺産）", "灯台・城壁散歩", "ウナワトゥナビーチ"],
    body: "オランダ統治時代の面影を残すゴール要塞は、スリランカ南部を代表する世界遺産。石畳の旧市街を散策し、コロニアル建築のカフェでひと休み。午後はウナワトゥナビーチでインド洋の青い海を満喫しましょう。",
    link: "/galle",
    linkLabel: "ゴール詳細ページを見る",
  },
  {
    day: "Day 9", title: "ミリッサ・ホエールウォッチング（11〜4月）", area: "ミリッサ",
    spots: ["ホエールウォッチングボートツアー", "ミリッサビーチ"],
    body: "11〜4月のシーズンに訪れるなら、ミリッサからのホエールウォッチングが絶対おすすめ。ブルーホエール（シロナガスクジラ）に出会える確率が世界トップクラスです。午後はミリッサビーチでのんびり過ごしましょう。",
    link: null,
  },
  {
    day: "Day 10", title: "コロンボへ移動・帰国", area: "コロンボ",
    spots: ["コロンボ市内ショッピング", "空港送迎"],
    body: "最終日は専用車でコロンボへ。出発前にコロンボのショッピングモールやスパイスマーケットでお土産を購入しましょう。SLTCSの専用車が空港まで確実にお送りします。",
    link: null,
  },
];

export default function Course10DaysArticle() {
  return (
    <article className="text-gray-800">
      <p className="text-base sm:text-lg leading-[1.9] text-gray-700 mb-10">
        スリランカは小さな島国でありながら、世界遺産・サファリ・紅茶列車・ビーチ・ホエールウォッチングと、旅の楽しみが凝縮されています。
        10日間あれば、北部の文化三角地帯から南部のビーチリゾートまで、スリランカの魅力をほぼすべて体験できます。
        この記事では、<strong className="text-gray-900">専用車チャーター（タクシーチャーター）</strong>を使った10日間の大満足モデルコースをご紹介します。
      </p>

      {/* 旅程サマリーカード */}
      <div className="bg-[oklch(0.12_0.02_155)] rounded-2xl p-6 mb-10 text-white">
        <p className="text-[oklch(0.75_0.12_75)] text-xs font-semibold tracking-widest uppercase mb-4">Course Overview</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          {[
            { label: "日数", value: "10日間" },
            { label: "世界遺産", value: "7箇所" },
            { label: "移動手段", value: "専用車" },
            { label: "難易度", value: "★★★☆☆" },
          ].map((item) => (
            <div key={item.label} className="bg-white/10 rounded-xl p-3">
              <p className="text-white/50 text-xs mb-1">{item.label}</p>
              <p className="text-white font-bold text-base">{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 目次 */}
      <nav className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-12">
        <p className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-3">目次</p>
        <ol className="space-y-1.5 text-sm">
          {[
            ["1", "10日間コースの全体像"],
            ["2", "日程詳細（Day 1〜10）"],
            ["3", "専用車チャーターを使うメリット"],
            ["4", "ベストシーズンと注意点"],
            ["5", "まとめ"],
          ].map(([num, label]) => (
            <li key={num} className="flex items-start gap-2 text-gray-600">
              <span className="text-[oklch(0.35_0.12_155)] font-bold flex-shrink-0">{num}.</span>
              <span>{label}</span>
            </li>
          ))}
        </ol>
      </nav>

      {/* H2① 全体像 */}
      <section className="mb-14">
        <H2>10日間コースの全体像</H2>
        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          このコースは「北部の文化三角地帯」「中部の高原・紅茶列車」「南部のサファリ・ビーチ」という3つのゾーンを専用車で繋ぐ構成です。
        </p>
        <p className="text-base leading-[1.9] text-gray-700 mb-6">
          移動は毎日ありますが、専用車なら荷物を車に置いたまま移動できるため、体力的な負担を最小限に抑えられます。
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {[
            { zone: "ゾーン①", label: "北部・文化三角地帯", days: "Day 1〜4", color: "bg-amber-50 border-amber-200 text-amber-800" },
            { zone: "ゾーン②", label: "中部・高原・紅茶列車", days: "Day 5〜6", color: "bg-emerald-50 border-emerald-200 text-emerald-800" },
            { zone: "ゾーン③", label: "南部・サファリ・ビーチ", days: "Day 7〜10", color: "bg-blue-50 border-blue-200 text-blue-800" },
          ].map((z) => (
            <div key={z.zone} className={`border rounded-xl px-4 py-3 text-sm ${z.color}`}>
              <p className="font-bold text-xs mb-0.5">{z.zone} / {z.days}</p>
              <p className="font-semibold">{z.label}</p>
            </div>
          ))}
        </div>
        <figure className="mb-6">
          <img src={HERO_IMG} alt="スリランカ10日間周遊モデルコースのイメージ" className="w-full rounded-xl object-cover max-h-80" />
          <figcaption className="text-center text-xs text-gray-400 mt-2">シーギリヤ・キャンディ・ヤーラ・ゴール・ミリッサ…スリランカの魅力が凝縮された10日間。</figcaption>
        </figure>
      </section>

      {/* H2② 日程詳細 */}
      <section className="mb-14">
        <H2>日程詳細（Day 1〜10）</H2>
        <div className="space-y-0">
          {itinerary.map((item, index) => (
            <div key={item.day} className="relative pl-8 pb-10 last:pb-0">
              {index < itinerary.length - 1 && (
                <div className="absolute left-3 top-8 bottom-0 w-0.5 bg-gray-200" />
              )}
              <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-[oklch(0.12_0.02_155)] text-[oklch(0.75_0.12_75)] flex items-center justify-center text-[10px] font-bold flex-shrink-0">
                {index + 1}
              </div>
              <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span className="text-xs font-bold text-[oklch(0.35_0.12_155)] bg-[oklch(0.35_0.12_155)]/10 px-2 py-0.5 rounded-md">{item.day}</span>
                  <span className="text-xs text-gray-400">{item.area}</span>
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2" style={{ fontFamily: "'Shippori Mincho', serif" }}>{item.title}</h3>
                <p className="text-sm leading-[1.9] text-gray-600 mb-3">{item.body}</p>
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {item.spots.map((spot) => (
                    <span key={spot} className="text-xs bg-gray-50 border border-gray-200 text-gray-600 px-2 py-0.5 rounded-md">{spot}</span>
                  ))}
                </div>
                {item.link && (
                  <a
                    href={item.link}
                    className="inline-flex items-center gap-1 text-xs text-[oklch(0.35_0.12_155)] font-semibold hover:underline mt-1"
                  >
                    {item.linkLabel}
                    <ChevronRight size={12} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* H2③ 専用車チャーターのメリット */}
      <section className="mb-14">
        <H2>専用車チャーターを使うメリット</H2>
        <figure className="mb-7">
          <img src={CHARTER_IMG} alt="SLTCSのタクシーチャーターを利用するお客様とドライバー" className="w-full rounded-xl object-cover max-h-72" />
          <figcaption className="text-center text-xs text-gray-400 mt-2">SLTCSのタクシーチャーターを利用するお客様とドライバー。日本語でのやり取りで安心の旅を。</figcaption>
        </figure>
        <H3 index={0}>10日間の移動を一括手配できる</H3>
        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          10日間の旅程では、コロンボ・アヌラーダプラ・シーギリヤ・キャンディ・エッラ・ヤーラ・ゴール・ミリッサと、多くの都市間移動が発生します。
        </p>
        <p className="text-base leading-[1.9] text-gray-700 mb-6">
          専用車チャーターなら、すべての移動を出発前に一括で手配できるため、現地での移動手段探しに時間を取られません。
        </p>
        <H3 index={1}>荷物を車に置いたまま観光できる</H3>
        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          10日間の旅行では大きなスーツケースを持ち歩く機会が多くなります。専用車があれば荷物を車内に置いたまま観光地を回れるため、身軽に動けます。
        </p>
        <p className="text-base leading-[1.9] text-gray-700 mb-6">
          特に家族旅行やシニア旅行では、荷物の負担軽減が旅の快適さに直結します。
        </p>
        <H3 index={2}>日本語で相談しながら旅ができる</H3>
        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          SLTCSでは、予約から当日の移動まで日本語でのやり取りが可能です。
        </p>
        <p className="text-base leading-[1.9] text-gray-700 mb-6">
          「ヤーラのサファリは早朝と夕方どちらがおすすめ？」「紅茶列車の座席はどこが景色がいい？」といった質問にも、経験豊富なスタッフが日本語で丁寧にお答えします。
        </p>
        <figure className="mb-2">
          <img src={SAFARI_IMG} alt="ヤーラ国立公園のサファリ" className="w-full rounded-xl object-cover max-h-72" />
          <figcaption className="text-center text-xs text-gray-400 mt-2">Day 7：ヤーラ国立公園のサファリ。専用車なら早朝の開園直後に入場できます。</figcaption>
        </figure>
        <div className="mt-4">
          <a
            href="/safari"
            className="inline-flex items-center gap-1 text-sm text-[oklch(0.35_0.12_155)] font-semibold hover:underline"
          >
            サファリ詳細ページを見る
            <ChevronRight size={14} />
          </a>
        </div>
      </section>

      {/* H2④ ベストシーズン */}
      <section className="mb-14">
        <H2>ベストシーズンと注意点</H2>
        <div className="overflow-x-auto rounded-xl border border-gray-200 mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[oklch(0.12_0.02_155)] text-white">
                <th className="px-4 py-3 text-left font-semibold">時期</th>
                <th className="px-4 py-3 text-center font-semibold">北部・中部</th>
                <th className="px-4 py-3 text-center font-semibold">南部・ビーチ</th>
                <th className="px-4 py-3 text-center font-semibold">ホエールウォッチング</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                { period: "11〜4月", north: "◎ 晴れ多い", south: "◎ 晴れ多い", whale: "◎ ベストシーズン", highlight: true },
                { period: "5〜9月", north: "◎ 晴れ多い", south: "△ 雨季", whale: "△ 荒れやすい", highlight: false },
                { period: "10月", north: "△ 雨季", south: "◎ 晴れ多い", whale: "△ 荒れやすい", highlight: false },
              ].map((row) => (
                <tr key={row.period} className={row.highlight ? "bg-emerald-50" : "bg-white"}>
                  <td className={`px-4 py-3 font-semibold ${row.highlight ? "text-[oklch(0.35_0.12_155)]" : "text-gray-800"}`}>{row.period}</td>
                  <td className="px-4 py-3 text-center text-gray-700">{row.north}</td>
                  <td className="px-4 py-3 text-center text-gray-700">{row.south}</td>
                  <td className="px-4 py-3 text-center text-gray-700">{row.whale}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 text-sm text-amber-800">
          <p className="font-bold mb-2">注意点</p>
          <ul className="space-y-1.5">
            <li className="flex items-start gap-2"><span className="font-bold flex-shrink-0">・</span>ホエールウォッチングは11〜4月がベストシーズン。5〜10月は海が荒れやすく欠航になる場合があります。</li>
            <li className="flex items-start gap-2"><span className="font-bold flex-shrink-0">・</span>ミンネリア国立公園の「象の集会」は6〜9月の乾季がピーク。</li>
            <li className="flex items-start gap-2"><span className="font-bold flex-shrink-0">・</span>紅茶列車は人気が高く、特に1等・2等は早めの予約が必要です（SLTCSで代行手配可）。</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <div className="bg-[oklch(0.12_0.02_155)] rounded-2xl p-7 sm:p-10 text-center mb-14">
        <p className="text-[oklch(0.75_0.12_75)] text-xs font-semibold tracking-widest uppercase mb-3">Free Consultation</p>
        <h3 className="text-white text-xl sm:text-2xl font-bold mb-3" style={{ fontFamily: "'Shippori Mincho', serif" }}>
          10日間のスリランカ旅行をSLTCSに相談する
        </h3>
        <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-md mx-auto">
          日程・人数・行きたい場所をお知らせいただければ、10日間のモデルコースとお見積もりをご提案します。
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="/#contact"
            onClick={(e) => { e.preventDefault(); window.location.href = "/#contact"; }}
            className="inline-block bg-[oklch(0.75_0.12_75)] text-[oklch(0.12_0.02_155)] font-bold px-8 py-3 rounded-full text-sm hover:opacity-90 transition-opacity"
          >
            無料で相談する
          </a>
          <a href="/plan" className="inline-block border border-white/30 text-white font-medium px-8 py-3 rounded-full text-sm hover:bg-white/10 transition-colors">
            プランを見る
          </a>
        </div>
      </div>

      {/* H2⑤ まとめ */}
      <section className="mb-10">
        <H2>まとめ</H2>
        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          10日間あれば、スリランカの文化・自然・食・アクティビティをほぼすべて体験できます。
        </p>
        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          文化三角地帯の世界遺産めぐり、キャンディ〜エッラの紅茶列車、ヤーラのサファリ、ゴールの旧市街、ミリッサのホエールウォッチングと、どれも一生の思い出になる体験ばかりです。
        </p>
        <p className="text-base leading-[1.9] text-gray-700">
          SLTCSでは、このコースをベースに日程・人数・ご予算に合わせたカスタマイズプランをご提案しています。まずはお気軽に無料相談からご連絡ください。
        </p>
      </section>

      {/* 関連記事 */}
      <div className="border-t border-gray-200 pt-8">
        <p className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-4">関連記事</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a href="/course/5-6days" className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group border border-gray-100">
            <div className="flex-1">
              <p className="text-xs text-[oklch(0.35_0.12_155)] font-semibold mb-1">モデルコース</p>
              <p className="text-sm font-medium text-gray-800 group-hover:text-[oklch(0.35_0.12_155)] transition-colors leading-snug">5泊6日モデルコースを見る</p>
            </div>
            <ChevronRight size={16} className="text-gray-400 flex-shrink-0" />
          </a>
          <a href="/plan" className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group border border-gray-100">
            <div className="flex-1">
              <p className="text-xs text-[oklch(0.35_0.12_155)] font-semibold mb-1">プラン</p>
              <p className="text-sm font-medium text-gray-800 group-hover:text-[oklch(0.35_0.12_155)] transition-colors leading-snug">SLTCSのタクシーチャータープランを見る</p>
            </div>
            <ChevronRight size={16} className="text-gray-400 flex-shrink-0" />
          </a>
        </div>
      </div>
    </article>
  );
}
