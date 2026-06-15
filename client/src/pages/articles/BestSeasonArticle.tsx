import { Link } from "wouter";
import { ChevronRight } from "lucide-react";

// ── ローカルコンポーネント ──────────────────────────────────────
function H2({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="text-xl sm:text-2xl font-bold text-gray-900 border-l-4 border-[oklch(0.35_0.12_155)] pl-4 mb-5 mt-10"
      style={{ fontFamily: "'Shippori Mincho', serif" }}
    >
      {children}
    </h2>
  );
}

function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="inline-flex items-center gap-2 text-base sm:text-lg font-bold mt-6 mb-3">
      <span className="bg-[oklch(0.35_0.12_155)] text-white text-xs font-bold px-2 py-0.5 rounded">
        POINT
      </span>
      <span className="text-[oklch(0.25_0.10_155)] border-b-2 border-[oklch(0.75_0.12_155)] pb-0.5">
        {children}
      </span>
    </h3>
  );
}

export default function BestSeasonArticle() {
  return (
    <article className="text-gray-800">

      {/* ── リード文 ── */}
      <p className="text-base sm:text-lg leading-[1.9] text-gray-700 mb-6">
        「<strong className="text-gray-900">スリランカ ベストシーズン</strong>」「<strong className="text-gray-900">スリランカ 気候</strong>」で検索しているあなたへ。
        スリランカは南北に細長い島国で、地域によって乾季・雨季の時期が異なります。
        「いつ行けばいいのか」は旅行計画の最初の疑問ですが、実は<strong className="text-gray-900">スリランカには年間を通じて旅行できるシーズンがある</strong>のが特徴です。
      </p>

      <p className="text-base sm:text-lg leading-[1.9] text-gray-700 mb-10">
        この記事では、スリランカの気候の仕組みから月別の天気・エリア別のベストシーズン・旅行スタイル別のおすすめ時期まで、
        <strong className="text-gray-900">SLTCSの専用車チャーターと組み合わせた最適な旅行計画</strong>をわかりやすく解説します。
      </p>

      {/* ── 目次 ── */}
      <nav className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-12">
        <p className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-3">目次</p>
        <ol className="space-y-1.5 text-sm">
          {[
            ["1", "スリランカの気候の基本｜2つのモンスーンを理解しよう"],
            ["2", "月別の天気と旅行のしやすさ"],
            ["3", "エリア別ベストシーズン｜行き先によって最適な時期が違う"],
            ["4", "旅行スタイル別おすすめシーズン"],
            ["5", "スリランカの祝日・祭事カレンダー"],
            ["6", "シーズンと専用車チャーターの組み合わせ方"],
            ["7", "よくある質問（FAQ）"],
            ["8", "まとめ"],
          ].map(([num, label]) => (
            <li key={num} className="flex items-start gap-2 text-gray-600">
              <span className="text-[oklch(0.35_0.12_155)] font-bold flex-shrink-0">{num}.</span>
              <span>{label}</span>
            </li>
          ))}
        </ol>
      </nav>

      {/* ════════════════════════════════════════════════════
          H2 ① 気候の基本
      ════════════════════════════════════════════════════ */}
      <section className="mb-14" id="section1">

        <H2 id="section1">スリランカの気候の基本｜2つのモンスーンを理解しよう</H2>

        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          スリランカの気候を理解するうえで最も重要なのが、<strong className="text-gray-900">2つのモンスーン（季節風）</strong>の存在です。
          スリランカには「南西モンスーン」と「北東モンスーン」の2種類があり、それぞれ異なる地域に雨をもたらします。
        </p>

        <p className="text-base leading-[1.9] text-gray-700 mb-6">
          この仕組みにより、島の南西部が雨季のときでも北東部は乾季であることが多く、
          <strong className="text-gray-900">スリランカは年間を通じてどこかのエリアが旅行に適した状態</strong>にあります。
        </p>

        {/* 画像1 */}
        <figure className="mb-8">
          <img
            src="https://images.unsplash.com/photo-1566296314736-6eaac1ca0cb9?w=800&q=80"
            alt="スリランカの青空と緑の風景"
            className="w-full rounded-xl object-cover max-h-72"
          />
          <figcaption className="text-center text-xs text-gray-400 mt-2">
            乾季のスリランカは青空が広がり、観光に最適なコンディションが続きます。
          </figcaption>
        </figure>

        <H3>南西モンスーン（5月〜9月）</H3>

        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          5月から9月にかけて吹く南西モンスーンは、<strong className="text-gray-900">島の南西部・西部・中央高原</strong>に雨をもたらします。
          コロンボ・ゴール・ヌワラエリヤなどがこの影響を受けます。
        </p>

        <p className="text-base leading-[1.9] text-gray-700 mb-6">
          一方、この時期の<strong className="text-gray-900">北部・東部（ジャフナ・トリンコマリー・アルガムベイ）は乾季</strong>となり、
          東海岸のビーチや北部観光に最適なシーズンとなります。
        </p>

        <H3>北東モンスーン（10月〜2月）</H3>

        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          10月から2月にかけて吹く北東モンスーンは、<strong className="text-gray-900">島の北部・東部</strong>に雨をもたらします。
          この時期は南西部・南部（ゴール・ミリッサ・ヤーラ周辺）が乾季となり、
          スリランカで最も人気の高い観光シーズンとなります。
        </p>

        <p className="text-base leading-[1.9] text-gray-700 mb-6">
          12月〜3月は「グランドシーズン」とも呼ばれ、ヨーロッパや日本からの旅行者が最も多い時期です。
          ただしホテル料金も高騰するため、<strong className="text-gray-900">予約は早めに行うことが重要</strong>です。
        </p>

        {/* 2つのモンスーン比較表 */}
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[oklch(0.35_0.12_155)] text-white">
                <th className="px-4 py-3 text-left font-semibold">モンスーン</th>
                <th className="px-4 py-3 text-left font-semibold">時期</th>
                <th className="px-4 py-3 text-left font-semibold">雨が多いエリア</th>
                <th className="px-4 py-3 text-left font-semibold">乾季のエリア</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["南西モンスーン", "5月〜9月", "南西部・西部・中央高原", "北部・東部"],
                ["北東モンスーン", "10月〜2月", "北部・東部", "南西部・南部・中央高原"],
              ].map(([name, period, wet, dry], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-4 py-3 font-medium text-gray-800 border-b border-gray-100">{name}</td>
                  <td className="px-4 py-3 text-gray-700 border-b border-gray-100">{period}</td>
                  <td className="px-4 py-3 text-gray-700 border-b border-gray-100">{wet}</td>
                  <td className="px-4 py-3 text-gray-700 border-b border-gray-100">{dry}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </section>

      {/* ════════════════════════════════════════════════════
          H2 ② 月別の天気
      ════════════════════════════════════════════════════ */}
      <section className="mb-14" id="section2">

        <H2 id="section2">月別の天気と旅行のしやすさ</H2>

        <p className="text-base leading-[1.9] text-gray-700 mb-6">
          以下の表は、スリランカ南西部（コロンボ・ゴール・ヌワラエリヤ方面）を中心とした月別の天気と旅行のしやすさをまとめたものです。
          多くの日本人旅行者が訪れる<strong className="text-gray-900">南西部・中央高原・南部のルート</strong>を基準にしています。
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[oklch(0.35_0.12_155)] text-white">
                <th className="px-3 py-3 text-left font-semibold">月</th>
                <th className="px-3 py-3 text-left font-semibold">天気</th>
                <th className="px-3 py-3 text-left font-semibold">旅行のしやすさ</th>
                <th className="px-3 py-3 text-left font-semibold">備考</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["1月", "☀️ 晴れ多い", "◎ 最高", "グランドシーズン。混雑・高値に注意"],
                ["2月", "☀️ 晴れ多い", "◎ 最高", "ホエールウォッチングのベストシーズン"],
                ["3月", "☀️ 晴れ多い", "◎ 最高", "年間で最も暑い時期。水分補給を忘れずに"],
                ["4月", "🌤 晴れ〜曇り", "○ 良好", "シンハラ正月（4/13〜14）。祝日に注意"],
                ["5月", "🌧 雨が増える", "△ やや注意", "南西モンスーン開始。北部・東部は好天"],
                ["6月", "🌧 雨季", "△ やや注意", "南西部は雨が多い。ヤーラ国立公園は閉園期間"],
                ["7月", "🌧 雨季", "△ やや注意", "東部（アルガムベイ）はサーフィンのベストシーズン"],
                ["8月", "🌧 雨季", "△ やや注意", "キャンディのペラヘラ祭（8月）。混雑する"],
                ["9月", "🌤 回復傾向", "○ 良好", "南西モンスーン終わり。徐々に晴れが増える"],
                ["10月", "🌦 不安定", "△ やや注意", "モンスーン移行期。短時間の雨が多い"],
                ["11月", "☀️ 晴れ増加", "○ 良好", "南部・西部から乾季へ。ヤーラ再開"],
                ["12月", "☀️ 晴れ多い", "◎ 最高", "グランドシーズン開始。年末は特に混雑"],
              ].map(([month, weather, rating, note], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-3 py-3 font-bold text-gray-800 border-b border-gray-100 whitespace-nowrap">{month}</td>
                  <td className="px-3 py-3 text-gray-700 border-b border-gray-100 whitespace-nowrap">{weather}</td>
                  <td className="px-3 py-3 border-b border-gray-100 whitespace-nowrap">
                    <span className={`font-bold ${rating.startsWith("◎") ? "text-emerald-600" : rating.startsWith("○") ? "text-blue-600" : "text-amber-600"}`}>
                      {rating}
                    </span>
                  </td>
                  <td className="px-3 py-3 text-gray-600 border-b border-gray-100 text-xs leading-relaxed">{note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-400 rounded-r-xl p-5 mb-6">
          <p className="text-sm font-bold text-blue-800 mb-2">雨季でも旅行できる？</p>
          <p className="text-sm text-blue-700 leading-relaxed">
            雨季といっても、一日中雨が降り続けるわけではありません。
            スリランカの雨は<strong>スコール（短時間の強雨）</strong>が多く、午後に集中することが多いです。
            午前中は晴れていることも多いため、観光のスケジュールを午前中心に組むことで、雨季でも十分に楽しめます。
            専用車チャーターなら、天候に合わせてスケジュールを柔軟に変更できるのも大きなメリットです。
          </p>
        </div>

      </section>

      {/* ════════════════════════════════════════════════════
          H2 ③ エリア別ベストシーズン
      ════════════════════════════════════════════════════ */}
      <section className="mb-14" id="section3">

        <H2 id="section3">エリア別ベストシーズン｜行き先によって最適な時期が違う</H2>

        <p className="text-base leading-[1.9] text-gray-700 mb-6">
          スリランカは南北約430km・東西約225kmの島ですが、エリアによってベストシーズンが大きく異なります。
          旅行先が決まっている場合は、そのエリアの乾季に合わせて旅行時期を選ぶのが基本です。
        </p>

        {/* 画像2 */}
        <figure className="mb-8">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80"
            alt="スリランカの美しいビーチと海"
            className="w-full rounded-xl object-cover max-h-72"
          />
          <figcaption className="text-center text-xs text-gray-400 mt-2">
            南部のビーチは12月〜3月が最も穏やかで、海水浴やホエールウォッチングに最適です。
          </figcaption>
        </figure>

        <H3>文化三角地帯（シーギリヤ・キャンディ・ダンブッラ）</H3>

        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          スリランカ中央部に位置する<a href="/sigiriya" className="text-[oklch(0.35_0.12_155)] underline underline-offset-2 hover:opacity-80">シーギリヤ</a>・<a href="/kandy" className="text-[oklch(0.35_0.12_155)] underline underline-offset-2 hover:opacity-80">キャンディ</a>・ダンブッラなどの世界遺産エリアは、
          <strong className="text-gray-900">12月〜4月が最もおすすめ</strong>です。
        </p>

        <p className="text-base leading-[1.9] text-gray-700 mb-6">
          シーギリヤロックは急な斜面を登るため、雨の日は足元が滑りやすく危険です。
          乾季の晴れた日に訪れることで、頂上からの360度パノラマビューも最大限に楽しめます。
          なお、8月はキャンディのペラヘラ祭があり、混雑しますが祭り見学には絶好のタイミングです。
        </p>

        <H3>南部ビーチエリア（ミリッサ・ゴール・タンガッレ）</H3>

        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          <a href="/galle" className="text-[oklch(0.35_0.12_155)] underline underline-offset-2 hover:opacity-80">ゴール</a>・ミリッサ・タンガッレなどの南部ビーチエリアのベストシーズンは<strong className="text-gray-900">11月〜4月</strong>です。
          この時期は南西モンスーンの影響が少なく、穏やかな波と晴天が続きます。
        </p>

        <p className="text-base leading-[1.9] text-gray-700 mb-6">
          特に<strong className="text-gray-900">1月〜3月はホエールウォッチングのベストシーズン</strong>で、
          ミリッサ沖ではシロナガスクジラやマッコウクジラを見られる確率が高まります。
          5月〜10月は南西モンスーンの影響で波が高くなり、海水浴には向きません。
        </p>

        <H3>ヤーラ国立公園（サファリ）</H3>

        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          <a href="/safari" className="text-[oklch(0.35_0.12_155)] underline underline-offset-2 hover:opacity-80">ヤーラ国立公園</a>のサファリのベストシーズンは<strong className="text-gray-900">2月〜7月上旬</strong>です。
          乾季に水場に動物が集まるため、ヒョウ・象・クマなどの野生動物を見やすくなります。
        </p>

        <p className="text-base leading-[1.9] text-gray-700 mb-6">
          ヤーラ国立公園は<strong className="text-gray-900">毎年8月〜9月頃に閉園</strong>します（年によって異なる）。
          この時期はサファリができないため、旅行計画の際は必ず事前に開園状況を確認してください。
        </p>

        <H3>中央高原（ヌワラエリヤ・エッラ・紅茶列車）</H3>

        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          <a href="/nuwara-eliya" className="text-[oklch(0.35_0.12_155)] underline underline-offset-2 hover:opacity-80">ヌワラエリヤ</a>・エッラなどの中央高原エリアは標高が高く（1,800m前後）、年間を通じて涼しい気候です。
          ベストシーズンは<strong className="text-gray-900">1月〜4月と7月〜9月</strong>の2つのシーズンがあります。
        </p>

        <p className="text-base leading-[1.9] text-gray-700 mb-6">
          <a href="/blog/sightseeing-guide/tea-train-guide" className="text-[oklch(0.35_0.12_155)] underline underline-offset-2 hover:opacity-80">紅茶列車</a>は年間を通じて運行していますが（一部区間は除く）、
          茶畑が最も美しい緑色に輝くのは<strong className="text-gray-900">雨季明けの9月〜11月頃</strong>です。
          乾季の1月〜3月は晴天率が高く、車窓からの眺めも鮮明に楽しめます。
        </p>

        {/* エリア別まとめ表 */}
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[oklch(0.35_0.12_155)] text-white">
                <th className="px-4 py-3 text-left font-semibold">エリア</th>
                <th className="px-4 py-3 text-left font-semibold">ベストシーズン</th>
                <th className="px-4 py-3 text-left font-semibold">避けたい時期</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["文化三角地帯（シーギリヤ・キャンディ）", "12月〜4月", "5月〜9月（雨が多い）"],
                ["南部ビーチ（ゴール・ミリッサ）", "11月〜4月", "5月〜10月（波が高い）"],
                ["ヤーラ国立公園（サファリ）", "2月〜7月上旬", "8月〜9月（閉園）"],
                ["中央高原（ヌワラエリヤ・エッラ）", "1月〜4月・7月〜9月", "10月〜11月（霧・雨が多い）"],
                ["東部ビーチ（アルガムベイ）", "5月〜9月", "10月〜4月（波が高い）"],
              ].map(([area, best, avoid], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-4 py-3 font-medium text-gray-800 border-b border-gray-100">{area}</td>
                  <td className="px-4 py-3 text-emerald-700 font-semibold border-b border-gray-100">{best}</td>
                  <td className="px-4 py-3 text-amber-700 border-b border-gray-100">{avoid}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </section>

      {/* ════════════════════════════════════════════════════
          H2 ④ 旅行スタイル別おすすめシーズン
      ════════════════════════════════════════════════════ */}
      <section className="mb-14" id="section4">

        <H2 id="section4">旅行スタイル別おすすめシーズン</H2>

        <p className="text-base leading-[1.9] text-gray-700 mb-6">
          旅行の目的によって、最適なシーズンは異なります。
          「何をしたいか」を明確にしてから旅行時期を決めると、より満足度の高い旅になります。
        </p>

        <div className="space-y-4 mb-8">
          {[
            {
              style: "世界遺産・文化観光（シーギリヤ・キャンディ・ダンブッラ）",
              best: "12月～3月",
              reason: "晴天率が高く、シーギリヤロック登頂やキャンディ仏歯寺観光に最適。混雑するが観光条件は最高。",
              link: "/sigiriya",
            },
            {
              style: "ビーチ・海水浴（ミリッサ・ゴール・タンガッレ）",
              best: "12月～3月",
              reason: "南部の海が最も穏やかな時期。透明度も高く、シュノーケリングやダイビングも楽しめる。",
              link: "/galle",
            },
            {
              style: "ホエールウォッチング",
              best: "1月～3月",
              reason: "ミリッサ沖でシロナガスクジラを見られる確率が最も高い。早朝出発のツアーが多い。",
              link: "/whale-watching",
            },
            {
              style: "サファリ（ヤーラ国立公園）",
              best: "2月～6月",
              reason: "举季に水場に動物が集まり、ヒョウの目撃率が上がる。早朝・夕方のジープサファリがおすすめ。",
              link: "/safari",
            },
            {
              style: "紅茶列車・高原観光",
              best: "1月～3月・7月～9月",
              reason: "晴天率が高く、茶畑の車窓風景を楽しみやすい。7～9月は雨季明けで茶畑が鮮やかな緑色に。",
              link: "/blog/sightseeing-guide/tea-train-guide",
            },
            {
              style: "ハネムーン・新婚旅行",
              best: "12月～3月",
              reason: "ビーチ・文化観光・サファリをすべて楽しめるグランドシーズン。早めの予約が必須。",
              link: "/blog/theme-travel/honeymoon-sri-lanka",
            },
          ].map((item, i) => (
            item.link ? (
              <a key={i} href={item.link} className="block bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-[oklch(0.75_0.12_155)] transition-all group">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="text-sm font-bold text-gray-900 group-hover:text-[oklch(0.35_0.12_155)] transition-colors">{item.style}</span>
                  <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-2 py-0.5 rounded-full">
                    ベスト：{item.best}
                  </span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{item.reason}</p>
                <p className="text-xs text-[oklch(0.35_0.12_155)] mt-2 font-medium">詳しく見る →</p>
              </a>
            ) : (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="text-sm font-bold text-gray-900">{item.style}</span>
                  <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-2 py-0.5 rounded-full">
                    ベスト：{item.best}
                  </span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{item.reason}</p>
              </div>
            )
          ))}
        </div>

      </section>

      {/* ════════════════════════════════════════════════════
          H2 ⑤ 祝日・祭事カレンダー
      ════════════════════════════════════════════════════ */}
      <section className="mb-14" id="section5">

        <H2 id="section5">スリランカの祝日・祭事カレンダー</H2>

        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          スリランカには仏教・ヒンドゥー教・イスラム教・キリスト教の祝日が混在しており、
          <strong className="text-gray-900">月に複数の祝日がある</strong>ことも珍しくありません。
          祝日はホテルや観光地が混雑したり、一部の施設が閉まったりすることがあるため、旅行計画の際に把握しておくと安心です。
        </p>

        <p className="text-base leading-[1.9] text-gray-700 mb-6">
          特に注目すべきは、旅行者にとっても見どころとなる大きな祭事です。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[oklch(0.35_0.12_155)] text-white">
                <th className="px-4 py-3 text-left font-semibold">時期</th>
                <th className="px-4 py-3 text-left font-semibold">祭事・祝日</th>
                <th className="px-4 py-3 text-left font-semibold">概要</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["1月（満月の日）", "ドゥルタ・ペラヘラ", "コロンボで行われる象の行列。キャンディのペラヘラより小規模。"],
                ["2月4日", "独立記念日", "スリランカの祝日。コロンボで式典が行われる。"],
                ["4月13〜14日", "シンハラ・タミル新年", "スリランカ最大の正月祭。多くの店・施設が休業。旅行者は注意が必要。"],
                ["5月（満月の日）", "ウェサック祭（仏誕節）", "仏陀の誕生・悟り・入滅を祝う最重要仏教祭事。街中がランタンで彩られる。"],
                ["7〜8月（満月の日）", "エサラ・ペラヘラ", "キャンディで10日間行われる象の行列。スリランカ最大の祭り。要事前予約。"],
                ["10〜11月", "ディーパワリ（光の祭り）", "ヒンドゥー教の祭り。ランプやキャンドルで街が明るく彩られる。"],
                ["12月25日", "クリスマス", "キリスト教の祝日。コロンボ周辺では装飾が見られる。"],
              ].map(([period, name, desc], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-4 py-3 font-medium text-gray-800 border-b border-gray-100 whitespace-nowrap">{period}</td>
                  <td className="px-4 py-3 font-semibold text-[oklch(0.35_0.12_155)] border-b border-gray-100">{name}</td>
                  <td className="px-4 py-3 text-gray-600 border-b border-gray-100 text-xs leading-relaxed">{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-5 mb-6">
          <p className="text-sm font-bold text-amber-800 mb-2">シンハラ・タミル新年（4月13〜14日）に旅行する場合</p>
          <p className="text-sm text-amber-700 leading-relaxed">
            スリランカ最大の正月祭であるシンハラ・タミル新年の前後は、多くの地元の人が帰省するため、
            バス・列車が非常に混雑します。また、商店や観光施設が休業することも多いです。
            専用車チャーターなら公共交通の混雑を避けられますが、ドライバーも祝日料金が発生する場合があります。
            事前にSLTCSへご確認ください。
          </p>
        </div>

      </section>

      {/* ════════════════════════════════════════════════════
          H2 ⑥ シーズンと専用車チャーターの組み合わせ
      ════════════════════════════════════════════════════ */}
      <section className="mb-14" id="section6">

        <H2 id="section6">シーズンと専用車チャーターの組み合わせ方</H2>

        <p className="text-base leading-[1.9] text-gray-700 mb-6">
          スリランカの気候の特性を活かすうえで、<strong className="text-gray-900">専用車チャーターは非常に相性の良い移動手段</strong>です。
          その理由を3点解説します。
        </p>

        <H3>雨季でも天候に合わせてルートを変更できる</H3>

        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          雨季に旅行する場合、当日の天候によって観光順序を入れ替えたり、
          雨の影響が少ないエリアを優先したりする柔軟な対応が必要です。
        </p>

        <p className="text-base leading-[1.9] text-gray-700 mb-6">
          専用車チャーターなら、ドライバーと相談しながらその日の天気に合わせてルートを変更できます。
          公共交通では難しい「臨機応変な旅」が実現します。
        </p>

        <H3>ハイシーズンでも移動の快適さを確保できる</H3>

        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          12月〜3月のグランドシーズンは、バスや列車が非常に混雑します。
          特に年末年始やウェサック祭の時期は、公共交通の座席確保が難しくなります。
        </p>

        <p className="text-base leading-[1.9] text-gray-700 mb-6">
          専用車チャーターなら、混雑に関係なく快適に移動できます。
          荷物も車内に置いたまま観光できるため、混雑期でも疲れにくい旅が実現します。
        </p>

        <H3>シーズンをまたいだ旅程も自由に組める</H3>

        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          「南部ビーチは乾季だが、東部は雨季」という時期でも、
          専用車チャーターなら乾季のエリアを中心に旅程を組み、
          雨の少ない場所を効率よく巡ることができます。
        </p>

        <p className="text-base leading-[1.9] text-gray-700 mb-6">
          SLTCSでは、旅行時期・希望の観光地・日数に合わせて最適なルートをご提案します。
          「この時期に行くなら、どこを回るのがベストか」という相談も無料で承っています。
        </p>

      </section>

      {/* ════════════════════════════════════════════════════
          CTA
      ════════════════════════════════════════════════════ */}
      <div className="bg-[oklch(0.12_0.02_155)] rounded-2xl p-7 sm:p-10 text-center mb-14">
        <p className="text-[oklch(0.75_0.12_75)] text-xs font-semibold tracking-widest uppercase mb-3">
          Free Consultation
        </p>
        <h3
          className="text-white text-xl sm:text-2xl font-bold mb-3"
          style={{ fontFamily: "'Shippori Mincho', serif" }}
        >
          旅行時期に合わせたプランをご提案します
        </h3>
        <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-md mx-auto">
          日程・人数・行きたい場所をお知らせいただければ、<br className="hidden sm:block" />
          シーズンに合わせた最適なモデルコースとお見積もりをご提案します。
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="/#contact"
            onClick={(e) => { e.preventDefault(); window.location.href = '/#contact'; }}
            className="inline-block bg-[oklch(0.75_0.12_75)] text-[oklch(0.12_0.02_155)] font-bold px-8 py-3 rounded-full text-sm hover:opacity-90 transition-opacity"
          >
            無料で相談する
          </a>
          <a
            href="/plan"
            className="inline-block border border-white/30 text-white font-medium px-8 py-3 rounded-full text-sm hover:bg-white/10 transition-colors"
          >
            プランを見る
          </a>
        </div>
      </div>

      {/* ════════════════════════════════════════════════════
          H2 ⑦ FAQ
      ════════════════════════════════════════════════════ */}
      <section className="mb-14" id="section7">

        <H2 id="section7">よくある質問（FAQ）</H2>

        <div className="space-y-3 mb-8">
          {[
            {
              q: "スリランカ旅行のベストシーズンはいつですか？",
              a: "最も旅行しやすいのは12月〜3月の「グランドシーズン」です。南西部・南部・中央高原のほぼすべてのエリアが乾季となり、晴天率が高くなります。ただし混雑・高値になるため、早めの予約が必要です。",
            },
            {
              q: "雨季（5月〜9月）でも旅行できますか？",
              a: "はい、旅行できます。スリランカの雨は午後のスコールが多く、午前中は晴れていることが多いです。また、雨季でも北部・東部エリアは乾季となるため、旅程の工夫次第で十分に楽しめます。",
            },
            {
              q: "日本のゴールデンウィーク（4月末〜5月初旬）はどうですか？",
              a: "4月末は乾季の終わりにあたり、比較的旅行しやすい時期です。ただし5月に入ると南西モンスーンが始まるため、雨が増えてきます。4月中旬のシンハラ正月（4/13〜14）前後は混雑するため注意が必要です。",
            },
            {
              q: "年末年始（12月〜1月）はどうですか？",
              a: "天候は最高ですが、ヨーロッパからの旅行者が多く、ホテルや観光地が非常に混雑します。料金も高騰するため、半年以上前からの予約をおすすめします。",
            },
            {
              q: "スリランカの気温はどのくらいですか？",
              a: "コロンボなどの低地は年間を通じて26〜32℃程度です。ヌワラエリヤ（標高約1,800m）は15〜20℃程度と涼しく、朝晩は10℃を下回ることもあります。高原地帯を訪れる際は薄手の上着を持参することをおすすめします。",
            },
          ].map((item, i) => (
            <details key={i} className="group bg-white border border-gray-200 rounded-xl overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer hover:bg-gray-50 transition-colors">
                <span className="text-sm font-semibold text-gray-800 pr-4">{item.q}</span>
                <ChevronRight size={16} className="text-gray-400 flex-shrink-0 group-open:rotate-90 transition-transform" />
              </summary>
              <div className="px-5 pb-4">
                <p className="text-sm text-gray-600 leading-relaxed">{item.a}</p>
              </div>
            </details>
          ))}
        </div>

      </section>

      {/* ════════════════════════════════════════════════════
          H2 ⑧ まとめ
      ════════════════════════════════════════════════════ */}
      <section className="mb-10" id="section8">

        <H2 id="section8">まとめ</H2>

        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          スリランカのベストシーズンは、<strong className="text-gray-900">旅行先のエリアと旅行スタイルによって異なります</strong>。
          南西部・南部・中央高原を中心に巡る場合は<strong className="text-gray-900">12月〜3月</strong>が最もおすすめですが、
          雨季でも天候の工夫次第で十分に楽しめます。
        </p>

        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          重要なのは、旅行時期に合わせたルート設計です。
          SLTCSでは、旅行時期・希望の観光地・日数をお伝えいただければ、
          シーズンに合わせた最適なモデルコースとお見積もりを無料でご提案します。
        </p>

        <p className="text-base leading-[1.9] text-gray-700">
          スリランカ旅行を検討している方は、まずお気軽に無料相談からご連絡ください。
        </p>

      </section>

      {/* ── 関連記事 ── */}
      <div className="border-t border-gray-200 pt-8">
        <p className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-4">関連記事</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a
            href="/blog/model-course/course-5-6days"
            className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group border border-gray-100"
          >
            <div className="flex-1">
              <p className="text-xs text-[oklch(0.35_0.12_155)] font-semibold mb-1">モデルコース</p>
              <p className="text-sm font-medium text-gray-800 group-hover:text-[oklch(0.35_0.12_155)] transition-colors leading-snug">
                スリランカ 5泊6日 モデルコース
              </p>
            </div>
            <ChevronRight size={16} className="text-gray-400 flex-shrink-0" />
          </a>
          <a
            href="/blog/sightseeing-guide/tea-train-guide"
            className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group border border-gray-100"
          >
            <div className="flex-1">
              <p className="text-xs text-[oklch(0.35_0.12_155)] font-semibold mb-1">観光地ガイド</p>
              <p className="text-sm font-medium text-gray-800 group-hover:text-[oklch(0.35_0.12_155)] transition-colors leading-snug">
                スリランカ紅茶列車（エッラ）完全ガイド
              </p>
            </div>
            <ChevronRight size={16} className="text-gray-400 flex-shrink-0" />
          </a>
          <a
            href="/blog/travel-planning/when-to-book-charter"
            className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group border border-gray-100"
          >
            <div className="flex-1">
              <p className="text-xs text-[oklch(0.35_0.12_155)] font-semibold mb-1">旅行計画・準備</p>
              <p className="text-sm font-medium text-gray-800 group-hover:text-[oklch(0.35_0.12_155)] transition-colors leading-snug">
                専用車チャーターをいつ予約すべき？
              </p>
            </div>
            <ChevronRight size={16} className="text-gray-400 flex-shrink-0" />
          </a>
          <a
            href="/blog/sightseeing-guide/safari-guide"
            className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group border border-gray-100"
          >
            <div className="flex-1">
              <p className="text-xs text-[oklch(0.35_0.12_155)] font-semibold mb-1">観光地ガイド</p>
              <p className="text-sm font-medium text-gray-800 group-hover:text-[oklch(0.35_0.12_155)] transition-colors leading-snug">
                スリランカサファリ完全ガイド
              </p>
            </div>
            <ChevronRight size={16} className="text-gray-400 flex-shrink-0" />
          </a>
        </div>
      </div>

    </article>
  );
}
