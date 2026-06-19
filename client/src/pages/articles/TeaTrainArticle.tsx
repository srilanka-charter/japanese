import { Link } from "wouter";

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

// ── アイコンなしカードコンポーネント ──────────────────────────────
function FeatureCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
      <h3 className="font-bold text-gray-900 mb-2 text-sm sm:text-base tracking-wide">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
    </div>
  );
}

export default function TeaTrainArticle() {
  return (
    <article className="text-gray-800">

      {/* ── リード文 ── */}
      <p className="text-base sm:text-lg leading-[1.9] text-gray-700 mb-6">
        「<strong className="text-gray-900">スリランカ 紅茶列車</strong>」「<strong className="text-gray-900">キャンディ エッラ 列車</strong>」で検索しているあなたへ。
        キャンディ〜エッラ間の鉄道は、CNNトラベルが選ぶ「世界で最も美しい鉄道路線」のひとつに数えられています。
        茶畑の緑・九連アーチ橋・霧に包まれた高原の絶景を車窓から楽しめるこの列車は、スリランカ旅行のハイライトとして多くの旅行者を魅了しています。
      </p>
      <p className="text-base sm:text-lg leading-[1.9] text-gray-700 mb-10">
        この記事では、紅茶列車の歴史的背景から乗り方・座席の選び方・予約方法・失敗しないための注意点まで、
        <strong className="text-gray-900">SLTCSの専用車チャーターと組み合わせた最適な楽しみ方</strong>を詳しく解説します。
      </p>

      {/* ── 運行状況アラート ── */}
      <div className="bg-blue-50 border-l-4 border-blue-400 rounded-r-xl p-5 mb-10">
        <p className="text-sm font-bold text-blue-800 mb-2">🔔 最新情報（2026年6月20日更新）</p>
        <p className="text-sm text-blue-700 leading-relaxed mb-2">
          <strong>2026年6月20日より、Nanu Oya〜Badulla間での運行が再開されました。</strong>
          ヌワラエリヤ観光の玄関口であるNanu Oya駅から、Ella・Demodara方面を経由してBadullaまで向かう紅茶列車の旅を再び楽しめます。
          ただし、Kandy〜Nanu Oya間は引き続き運休中です。
        </p>
        <p className="text-sm text-blue-700 leading-relaxed">
          SLTCSが現在おすすめする乗車区間は、<strong>Nanu OyaからDemodaraまでの区間</strong>です。
          詳細は後述の「SLTCSおすすめ区間」セクションをご覧ください。
        </p>
      </div>

      {/* ── 目次 ── */}
      <nav className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-12">
        <p className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-3">目次</p>
        <ol className="space-y-1.5 text-sm">
          {[
            ["1", "紅茶列車とは？スリランカ高原鉄道の歴史と魅力"],
            ["2", "現在の運行状況とSLTCSおすすめ区間"],
            ["3", "キャンディ〜エッラ間の絶景スポット"],
            ["4", "座席の種類と選び方｜1等・2等・3等の違い"],
            ["5", "列車の予約方法と注意点"],
            ["6", "SLTCSの専用車チャーターとの組み合わせ方"],
            ["7", "よくある失敗談と対策"],
            ["8", "紅茶列車 よくある質問（FAQ）"],
            ["9", "まとめ"],
          ].map(([num, label]) => (
            <li key={num} className="flex items-start gap-2 text-gray-600">
              <span className="text-[oklch(0.35_0.12_155)] font-bold flex-shrink-0">{num}.</span>
              <span>{label}</span>
            </li>
          ))}
        </ol>
      </nav>

      {/* ════════════════════════════════════════════════════
          H2 ① 紅茶列車とは？
      ════════════════════════════════════════════════════ */}
      <section className="mb-14" id="section1">
        <H2 id="section1">紅茶列車とは？スリランカ高原鉄道の歴史と魅力</H2>
        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          スリランカの高原鉄道は、19世紀のイギリス植民地時代に建設されました。
          当時、高原地帯で栽培されるセイロンティーをコロンボ港まで輸送するために敷設されたこの路線は、
          現在も「紅茶列車」として観光客に親しまれています。
        </p>
        <p className="text-base leading-[1.9] text-gray-700 mb-5">
          全長約290kmにわたるメインライン（コロンボ〜バドゥッラ）のうち、
          <strong className="text-gray-900">キャンディ〜エッラ間（約5〜6時間）</strong>が最も景観に優れた区間として知られています。
          標高差約1,800mを駆け上がりながら、茶畑・滝・霧の渓谷・九連アーチ橋と、次々に変わる絶景が車窓を彩ります。
        </p>

        {/* ヒーロー画像 */}
        <figure className="mb-7 rounded-2xl overflow-hidden shadow-md">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/U5GFZm3GAbGuGjN2pLu33k/blog-tea-train-guide-2ddzgbXcNQFiTJrQfuf4it.webp"
            alt="スリランカの茶畑と九連アーチ橋を走る紅茶列車"
            className="w-full object-cover max-h-[420px]"
          />
          <figcaption className="text-center text-xs text-gray-400 mt-2 pb-1">
            茶畑の緑と青空の下を走る紅茶列車。キャンディ〜エッラ間は世界屈指の絶景路線。
          </figcaption>
        </figure>

        {/* 路線概要表 */}
        <div className="overflow-x-auto mb-8 rounded-xl shadow-sm">
          <table className="min-w-[480px] w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[oklch(0.25_0.08_155)] text-white">
                <th className="px-4 py-3 text-left font-semibold">項目</th>
                <th className="px-4 py-3 text-left font-semibold">詳細</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["路線名", "スリランカ国鉄メインライン（高原鉄道）"],
                ["主要区間", "キャンディ → ナヌオヤ → バドゥッラ（エッラ経由）"],
                ["所要時間", "キャンディ〜エッラ：約5〜6時間"],
                ["距離", "約180km"],
                ["最高標高", "約1,868m（ピドゥルタラガラ付近）"],
                ["運行本数", "1日数本（時期により変動）"],
                ["現在の運行区間", "Ambewela〜Badulla（2026年6月現在）"],
              ].map(([label, value], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-4 py-3 font-medium text-gray-700 border-b border-gray-100">{label}</td>
                  <td className="px-4 py-3 text-gray-600 border-b border-gray-100">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          H2 ② 現在の運行状況とSLTCSおすすめ区間
      ════════════════════════════════════════════════════ */}
      <section className="mb-14" id="section2">
        <H2 id="section2">現在の運行状況とSLTCSおすすめ区間</H2>

        {/* ── 最新情報バナー ── */}
        <div className="bg-blue-50 border-2 border-blue-400 rounded-xl p-5 mb-8">
          <p className="text-sm font-bold text-blue-800 mb-1">🔔 最新情報（2026年6月20日更新）</p>
          <p className="text-sm text-blue-700 leading-relaxed">
            <strong>2026年6月20日より、Nanu Oya〜Badulla間での運行が再開されました。</strong>
            ヌワラエリヤ観光の玄関口であるNanu Oya駅から、Ella・Demodara方面を経由してBadullaまで向かう紅茶列車の旅を再び楽しめます。
            SLTCSおすすめ乗車区間も更新しています（下記参照）。
          </p>
        </div>

        {/* 路線状況インフォグラフィック */}
        <figure className="mb-8 rounded-2xl overflow-hidden shadow-md">
          <img
            src="/manus-storage/tea-train-route-status_1fc850ba.png"
            alt="スリランカ紅茶列車の最新運行状況マップ（2026年6月）"
            className="w-full object-contain max-h-[600px] bg-white"
          />
          <figcaption className="text-center text-xs text-gray-400 mt-2 pb-1">
            2026年6月時点の路線区間と運行状況。Nanu Oya〜Badulla間が6月20日より運行再開。
          </figcaption>
        </figure>

        <H3>2025年サイクロンによる運休区間と復旧状況</H3>
        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          2025年11月末にスリランカを直撃したサイクロン・ディトワにより、高原鉄道の一部区間が被害を受けました。
          長らくAmbewela〜Badulla間のみの運行が続いていましたが、<strong className="text-gray-900">2026年6月20日よりNanu Oya〜Badulla間での運行が再開</strong>されました。
          ただし、<strong className="text-gray-900">Kandy〜Nanu Oya間は引き続き運休中</strong>です。
        </p>
        <p className="text-base leading-[1.9] text-gray-700 mb-6">
          旅行前には必ずスリランカ国鉄の公式情報や現地エージェントを通じて最新の運行状況をご確認ください。
          SLTCSでもご相談時に最新情報をお伝えしています。
        </p>

        {/* 区間別運行状況表 */}
        <div className="overflow-x-auto mb-8 rounded-xl shadow-sm">
          <table className="min-w-[480px] w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[oklch(0.35_0.12_155)] text-white">
                <th className="px-4 py-3 text-left font-semibold">区間</th>
                <th className="px-4 py-3 text-left font-semibold">運行状況</th>
                <th className="px-4 py-3 text-left font-semibold">備考</th>
              </tr>
            </thead>
            <tbody>
              {[
                { section: "Kandy → Nanu Oya", status: "運休中", statusColor: "text-red-600", note: "サイクロン被害により引き続き運休" },
                { section: "Nanu Oya → Ambewela", status: "6月20日より運行再開", statusColor: "text-blue-600", note: "2026年6月20日より復旧" },
                { section: "Ambewela → Demodara", status: "運行中", statusColor: "text-green-600", note: "九連アーチ橋・デモダラループを通過" },
                { section: "Demodara → Badulla", status: "運行中", statusColor: "text-green-600", note: "終点バドゥッラまで" },
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-4 py-3 font-medium text-gray-900 border-b border-gray-100">{row.section}</td>
                  <td className={`px-4 py-3 font-bold border-b border-gray-100 ${row.statusColor}`}>{row.status}</td>
                  <td className="px-4 py-3 text-gray-600 border-b border-gray-100">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <H3>2026年6月20日以降の時刻表</H3>
        <p className="text-base leading-[1.9] text-gray-700 mb-5">
          Nanu Oyaからは当面1日2〜3本の運行予定です（水曜日のみ運行本数が異なります）。
          天候・線路復旧状況・安全確認の結果によって急きょ変更・運休となる場合があるため、旅行前に必ず最新情報をご確認ください。
        </p>

        {/* 時刻表画像 */}
        <figure className="mb-8 rounded-2xl overflow-hidden shadow-md">
          <img
            src="/manus-storage/tea-train-timetable_fb5116f3.png"
            alt="紅茶列車の時刻表（Nanu Oya発・Badulla発）2026年6月20日以降"
            className="w-full object-contain max-h-[700px] bg-white"
          />
          <figcaption className="text-center text-xs text-gray-400 mt-2 pb-1">
            2026年6月20日以降の紅茶列車時刻表。Nanu Oya発・Badulla発の各列車と発車時刻。
          </figcaption>
        </figure>

        {/* 時刻表テキスト版 */}
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <div className="bg-[oklch(0.96_0.02_155)] border border-[oklch(0.82_0.06_155)] rounded-xl p-5">
            <p className="text-sm font-bold text-[oklch(0.25_0.10_155)] mb-3">Nanu Oya 発</p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex justify-between"><span>Podi Manike</span><span className="font-semibold">9:00</span></li>
              <li className="flex justify-between"><span>Udarata Manike</span><span className="font-semibold">14:30（水曜除く）</span></li>
              <li className="flex justify-between"><span>Ella Oddesy</span><span className="font-semibold">13:00（水曜のみ）</span></li>
            </ul>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
            <p className="text-sm font-bold text-amber-800 mb-3">Badulla 発</p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex justify-between"><span>Udarata Manike</span><span className="font-semibold">9:00（水曜除く）</span></li>
              <li className="flex justify-between"><span>Podi Manike</span><span className="font-semibold">15:00</span></li>
              <li className="flex justify-between"><span>Ella Oddesy</span><span className="font-semibold">7:45（水曜のみ）</span></li>
            </ul>
          </div>
        </div>

        {/* Kandy〜Nanu Oya運休の注意 */}
        <div className="bg-red-50 border-l-4 border-red-400 rounded-r-xl p-5 mb-8">
          <p className="text-sm font-bold text-red-800 mb-2">Kandy〜Nanu Oya間は引き続き運休中</p>
          <p className="text-sm text-red-700 leading-relaxed mb-3">
            コロンボ・キャンディ方面から紅茶列車で直接Nanu Oyaへ向かう従来のルートは、まだ復旧していません。
            そのため、現在は以下の旅程設計が現実的です。
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-[360px] w-full text-xs border-collapse">
              <thead>
                <tr className="bg-red-100">
                  <th className="px-3 py-2 text-left text-red-800">移動区間</th>
                  <th className="px-3 py-2 text-left text-red-800">推奨移動方法</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Kandy → Nanu Oya", "SLTCSの専用車チャーターで移動"],
                  ["Nanu Oya → Demodara / Ella / Badulla", "紅茶列車を利用"],
                  ["Ella / Demodara / Badulla到着後", "SLTCSの専用車チャーターでホテル・次の観光地へ"],
                ].map(([from, to], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-red-50"}>
                    <td className="px-3 py-2 text-gray-700 border-b border-red-100">{from}</td>
                    <td className="px-3 py-2 text-gray-700 border-b border-red-100">{to}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <H3>SLTCSおすすめ区間：Nanu Oya → Demodara（約3時間）</H3>
        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          Nanu Oya〜Badulla間の運行再開により、SLTCSが現在おすすめする乗車区間は<strong className="text-gray-900">Nanu OyaからDemodaraまでの約3時間の区間</strong>です。
          ヌワラエリヤの茶畝を抑えたNanu Oya駅を出発点に、Ambewela・Ellaを経由して、九連アーチ橋とデモダラループがあるDemodaraまでの全区間を楽しめます。
        </p>
        <p className="text-base leading-[1.9] text-gray-700 mb-5">
          この区間をおすすめする理由は3つあります。
        </p>

        <div className="space-y-4 mb-8">
          {[
            {
              num: "01",
              title: "九連アーチ橋（ナイン・アーチ・ブリッジ）を車窓から体験できる",
              desc: "スリランカで最も有名な鉄道橋を、列車の中から渡ることができます。1921年建設のレンガ造り9連アーチが茶畑と青空に映える光景は、スリランカ旅行の象徴的な瞬間です。",
            },
            {
              num: "02",
              title: "デモダラループも体験できる",
              desc: "デモダラ駅付近には、列車が急勾配を下るために螺旋状に走る「デモダラループ」があります。列車が自分たちの通ってきたトンネルの上を走るという珍しい構造で、鉄道ファンだけでなく一般の旅行者にも人気のスポットです。",
            },
            {
              num: "03",
              title: "万が一立ち席になっても1時間なら十分楽しめる",
              desc: "ハイシーズンや直前予約では指定席が取れず、3等自由席の立ち乗りになることがあります。長時間の立ち乗りは体力的に辛いですが、1時間程度であれば絶景を楽しみながら乗り切れます。",
            },
          ].map((item) => (
            <div key={item.num} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-start gap-4 mb-3">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[oklch(0.35_0.12_155)] text-white text-sm font-bold flex items-center justify-center">
                  {item.num}
                </span>
                <h3 className="font-bold text-gray-900 text-sm sm:text-base pt-2">{item.title}</h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed pl-14">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* 注意：EllaではなくDemodaraまで */}
        <div className="bg-[oklch(0.96_0.02_155)] border border-[oklch(0.82_0.06_155)] rounded-xl p-5 mb-6">
          <p className="text-sm font-bold text-[oklch(0.25_0.10_155)] mb-2">Ellaではなく、ひとつ先のDemodaraまで乗ることを強くおすすめします</p>
          <p className="text-sm text-[oklch(0.30_0.10_155)] leading-relaxed">
            九連アーチ橋はEllaとDemodaraの間に位置しています。<strong>Ella駅で下車してしまうと、列車の中から九連アーチ橋を渡ることができません。</strong>
            橋を車窓から体験するには、必ずEllaの次の駅であるDemodaraまで乗車してください。
            SLTCSのドライバーがDemodara駅でお出迎えし、そのままEllaへご案内します。
          </p>
        </div>

        {/* 事前予約が取れなかった方へ */}
        <div className="bg-green-50 border border-green-300 rounded-2xl p-6 mb-6">
          <p className="text-sm font-bold text-green-800 mb-3">✅ 事前予約が取れなかった方もご安心ください</p>
          <p className="text-sm text-green-700 leading-relaxed mb-3">
            ハイシーズンや人気列車は指定席が満席になることがありますが、<strong>当日、SLTCSのドライバーの補助のもと、自由席の当日券を購入することが可能です。</strong>
          </p>
          <p className="text-sm text-green-700 leading-relaxed mb-3">
            また、万が一ハイシーズンで立ち席になったとしても、SLTCSがご案内する区間は<strong>Ella〜Demodara間の約1時間</strong>です。
            <strong>立ち席になったとしても、車窓の絶景を十分楽しめる1時間程度の区間をご案内します。</strong>
          </p>
          <ul className="space-y-1.5 text-sm text-green-700">
            <li className="flex items-start gap-2"><span className="flex-shrink-0 mt-0.5">•</span><span>当日券の購入はドライバーがサポートしますので、言語の心配は不要です</span></li>
            <li className="flex items-start gap-2"><span className="flex-shrink-0 mt-0.5">•</span><span>Ella駅から乗車し、Demodara駅でSLTCSドライバーがお待ちしています</span></li>
            <li className="flex items-start gap-2"><span className="flex-shrink-0 mt-0.5">•</span><span>九連アーチ橋を車窓から渡る体験は、立ち席でも十分楽しめます</span></li>
          </ul>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          H2 ③ 絶景スポット
      ════════════════════════════════════════════════════ */}
      <section className="mb-14" id="section3">
        <H2 id="section3">キャンディ〜エッラ間の絶景スポット</H2>
        <p className="text-base leading-[1.9] text-gray-700 mb-6">
          この区間には、車窓から見逃せない絶景ポイントが点在しています。
          乗車前に場所を把握しておくことで、写真撮影のタイミングを逃さずに済みます。
        </p>

        <div className="space-y-6 mb-8">
          {[
            {
              num: "01",
              title: "九連アーチ橋（ナイン・アーチ・ブリッジ）",
              location: "Ella〜Demodara間",
              desc: "スリランカで最も有名な鉄道橋。1921年に建設されたレンガ造りの9連アーチが、緑の茶畑と青空に映える絶景は、スリランカ旅行の象徴的な光景です。列車が橋を渡る瞬間を橋の下から撮影することもでき、SNSで人気のフォトスポットになっています。",
              tip: "Ella駅から徒歩約20分。列車の通過時刻に合わせて橋の下から撮影するのもおすすめ。列車の中から渡るにはDemodara駅まで乗車が必須。",
            },
            {
              num: "02",
              title: "デモダラループ",
              location: "Demodara駅付近",
              desc: "急勾配を下るために列車が螺旋状に走る珍しい構造の路線。列車が自分たちの通ってきたトンネルの上を走るという不思議な体験ができます。世界でも珍しい鉄道工学の傑作として知られています。",
              tip: "Demodara駅で下車すると、ループを見下ろす展望スポットへ歩いて行くことができます。",
            },
            {
              num: "03",
              title: "ヌワラエリヤ周辺の茶畑",
              location: "ナヌオヤ駅付近",
              desc: "「スリランカのリトルイングランド」と呼ばれるヌワラエリヤ周辺は、一面に広がる茶畑が圧巻。列車は茶畑の中をゆっくりと走り抜け、茶摘み作業をする人々の姿も車窓から見えることがあります。霧がかかる早朝は特に幻想的な景色が楽しめます。",
              tip: "ナヌオヤ駅はヌワラエリヤの最寄り駅。駅から市街地まで車で約30分。",
            },
            {
              num: "04",
              title: "ラワナ滝（エッラ手前）",
              location: "エッラ駅手前",
              desc: "高さ約25mのラワナ滝は、スリランカの古代叙事詩「ラーマーヤナ」にも登場する伝説の滝。列車の車窓からも見ることができ、エッラ周辺の観光スポットとしても人気です。雨季（5〜9月）には水量が増し、より迫力のある姿が見られます。",
              tip: "エッラ駅から車で約10分。専用車チャーターで立ち寄ることができます。",
            },
          ].map((spot) => (
            <div key={spot.num} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-start gap-4 mb-3">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[oklch(0.35_0.12_155)] text-white text-sm font-bold flex items-center justify-center">
                  {spot.num}
                </span>
                <div>
                  <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-0.5">{spot.title}</h3>
                  <span className="text-xs text-[oklch(0.35_0.12_155)] bg-[oklch(0.92_0.04_155)] px-2 py-0.5 rounded-full font-medium">
                    {spot.location}
                  </span>
                </div>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">{spot.desc}</p>
              <div className="bg-[oklch(0.96_0.02_155)] rounded-lg px-4 py-2.5 text-xs text-[oklch(0.30_0.12_155)]">
                <span className="font-bold">ポイント：</span>{spot.tip}
              </div>
            </div>
          ))}
        </div>

        {/* 九連アーチ橋の画像 */}
        <figure className="mb-7 rounded-2xl overflow-hidden shadow-md">
          <img
            src="/manus-storage/ella_nine_arch_8f10f348.webp"
            alt="スリランカ・エッラの九連アーチ橋を渡る紅茶列車"
            className="w-full object-cover max-h-[380px]"
          />
          <figcaption className="text-center text-xs text-gray-400 mt-2 pb-1">
            エッラの九連アーチ橋。レンガ造りの9連アーチと緑の茶畑が織りなす絶景はスリランカ旅行の象徴。
          </figcaption>
        </figure>
      </section>

      {/* ════════════════════════════════════════════════════
          H2 ④ 座席の種類と選び方
      ════════════════════════════════════════════════════ */}
      <section className="mb-14" id="section4">
        <H2 id="section4">座席の種類と選び方｜1等・2等・3等の違い</H2>
        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          スリランカ国鉄には1等・2等・3等の座席クラスがあり、それぞれ快適さと料金が異なります。
        </p>
        <p className="text-base leading-[1.9] text-gray-700 mb-6">
          外国人旅行者には<strong className="text-gray-900">2等指定席</strong>が最もおすすめです。窓を開けて風を感じながら景色を楽しめる上、料金面でもコスパ良好です。<strong className="text-gray-900">1等（エクスポジャーワゴン）</strong>は展望車として人気がありますが、窓が開かないためご注意ください。
        </p>

        <div className="overflow-x-auto mb-8 rounded-xl shadow-sm">
          <table className="min-w-[560px] w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[oklch(0.25_0.08_155)] text-white">
                <th className="px-4 py-3 text-left font-semibold">クラス</th>
                <th className="px-4 py-3 text-center font-semibold">料金目安</th>
                <th className="px-4 py-3 text-left font-semibold">特徴</th>
                <th className="px-4 py-3 text-center font-semibold">おすすめ度</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["1等（エクスポジャーワゴン）", "約2,000〜3,000円", "展望車・エアコンなし・大きな窓・指定席。ただし窓が開かないため、風を感じながら景色を楽しむなら2等がおすすめ", "○"],
                ["2等指定席", "約700〜1,500円", "指定席・扇風機あり・窓を開けることができるので風を感じながら景色を楽しめる。コスパ良好でSLTCSが最もおすすめ", "◎"],
                ["3等自由席", "約200〜500円", "自由席・混雑時は立ち乗りも。1時間程度の区間なら許容範囲", "△"],
              ].map(([cls, price, desc, rec], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-4 py-3 font-medium text-gray-700 border-b border-gray-100">{cls}</td>
                  <td className="px-4 py-3 text-center text-gray-600 border-b border-gray-100">{price}</td>
                  <td className="px-4 py-3 text-gray-600 border-b border-gray-100 text-xs leading-relaxed">{desc}</td>
                  <td className="px-4 py-3 text-center font-bold text-[oklch(0.35_0.12_155)] border-b border-gray-100">{rec}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-6">
          <p className="text-sm font-bold text-amber-800 mb-2">1等エクスポジャーワゴンについて</p>
          <p className="text-sm text-amber-700 leading-relaxed">
            展望車（エクスポジャーワゴン）は特定の列車にのみ連結されており、すべての列車に設定されているわけではありません。
            乗車前に時刻表と車両編成を確認することをおすすめします。
            また、人気が高いため早めの予約が必要です。
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          H2 ⑤ 列車の予約方法と注意点
      ════════════════════════════════════════════════════ */}
      <section className="mb-14" id="section5">
        <H2 id="section5">列車の予約方法と注意点</H2>
        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          スリランカ国鉄の指定席は、出発の30日前から予約が可能です。
        </p>
        <p className="text-base leading-[1.9] text-gray-700 mb-6">
          特に<strong className="text-gray-900">ハイシーズン（12〜3月）</strong>や週末は席が埋まりやすいため、旅行日程が決まり次第、早めに予約することをおすすめします。
        </p>

        <div className="space-y-4 mb-8">
          {[
            {
              method: "オンライン予約（12Go.Asia）",
              desc: "外国人旅行者に最も利用されているオンライン予約サービス。英語対応・クレジットカード決済可能。手数料が加算されますが、日本からでも簡単に予約できます。",
              url: "https://12go.asia/",
            },
            {
              method: "スリランカ国鉄公式サイト",
              desc: "公式サイトからも予約可能ですが、外国人には使いにくい場合があります。英語対応はされていますが、決済に問題が生じることもあります。",
              url: "https://www.railway.gov.lk/",
            },
            {
              method: "駅窓口での購入",
              desc: "Bandarawela駅の窓口で直接購入できます。ただし、指定席は早期に売り切れることが多く、当日購入は難しい場合があります。",
              url: null,
            },
          ].map((item, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
              <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-2">{item.method}</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-2">{item.desc}</p>
              {item.url && (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[oklch(0.35_0.12_155)] hover:underline"
                >
                  {item.url}
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="bg-red-50 border border-red-200 rounded-xl p-5 mb-6">
          <p className="text-sm font-bold text-red-800 mb-2">SLTCSは列車チケットの手配を行っていません</p>
          <p className="text-sm text-red-700 leading-relaxed">
            SLTCSの専用車チャーターサービスは、列車の乗車駅・下車駅への送迎を担当します。
            列車チケットのご手配はお客様ご自身でお願いいたします。
            ご不明な点はお気軽にご相談ください。
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          H2 ⑥ SLTCSの専用車チャーターとの組み合わせ方
      ════════════════════════════════════════════════════ */}
      <section className="mb-14" id="section6">
        <H2 id="section6">SLTCSの専用車チャーターとの組み合わせ方</H2>
        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          紅茶列車の最大の課題は、<strong className="text-gray-900">乗り降りの駅への移動</strong>です。
          Bandarawela駅・Demodara駅はいずれも観光地から離れており、荷物を持ってのアクセスは大変です。
        </p>
        <p className="text-base leading-[1.9] text-gray-700 mb-6">
          SLTCSの専用車チャーターを組み合わせることで、列車旅をより快適・安心に楽しめます。
        </p>

        {/* 列車画像 */}
        <figure className="mb-7 rounded-2xl overflow-hidden shadow-md">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/U5GFZm3GAbGuGjN2pLu33k/nuwara_eliya_train_ella-Y3vannLMwdJL9wmfVcm2zh.webp"
            alt="スリランカの茶畑の中を走る列車とヌワラエリヤの高原風景"
            className="w-full object-cover max-h-[380px]"
          />
          <figcaption className="text-center text-xs text-gray-400 mt-2 pb-1">
            ヌワラエリヤ周辺の茶畑を走る列車。霧がかかる高原の景色は幻想的。
          </figcaption>
        </figure>

        <div className="bg-[oklch(0.96_0.02_155)] rounded-2xl p-6 mb-8">
          <p className="text-sm font-bold text-[oklch(0.25_0.08_155)] mb-4">SLTCSおすすめ 6日間プラン例</p>
          <div className="space-y-3">
            {[
              { day: "1日目", content: "コロンボ空港 → キャンディ（専用車）。キャンディ市内観光（仏歯寺・キャンディ湖）。キャンディ泊。" },
              { day: "2日目", content: "専用車でヌワラエリヤ方面へ。車の車窓から茶畑の絶景を堪能しながらBandarawela方面へ移動。Bandarawela泊。" },
              { day: "3日目", content: "ナヌオヤ駅からBandarawela駅まで専用車で移動。Bandarawela駅から列車に乗車し、九連アーチ橋・デモダラループを体験しながらDemodara駅まで約1時間の列車旅。Demodara駅でSLTCSドライバーがお出迎えし、そのままEllaへ。Ella観光（エッラロック・ラワナ滝）。Ella泊。" },
              { day: "4日目", content: "Ellaからヤラ国立公園（Yala）へ専用車で移動（約2.5時間）。ヤラ周辺のホテルにチェックイン。Yala泊。" },
              { day: "5日目", content: "早朝からヤラ国立公園でジープサファリツアー（ヒョウ・ゾウ・クジャクなどを観察）。ツアー後、専用車でミリッサ（Mirissa）へ移動（約2時間）。ビーチでリラックス。ミリッサ泊。" },
              { day: "6日目", content: "ミリッサからゴール（Galle）へ専用車で移動（約30分）。ゴール旧市街・ゴール要塞を観光。その後、コロンボ国際空港へ向けて出発（約2.5時間）。帰国の途へ。" },
            ].map((item, i) => (
              <div key={i} className="flex gap-3 items-start">
                <span className="flex-shrink-0 bg-[oklch(0.35_0.12_155)] text-white text-xs font-bold px-2 py-1 rounded-md min-w-[60px] text-center">
                  {item.day}
                </span>
                <p className="text-sm text-gray-700 leading-relaxed pt-0.5">{item.content}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-4">
            ※ 上記はあくまで一例です。ご旅行の日程・ご希望に合わせてカスタマイズいたします。
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          <FeatureCard
            title="駅への送迎"
            desc="Bandarawela駅・Demodara駅など、ご希望の駅まで専用車でお送りします。重い荷物も車内に積んだまま移動できます。"
          />
          <FeatureCard
            title="荷物の心配なし"
            desc="列車に乗る区間だけ身軽に乗車し、大きなスーツケースは専用車で次の目的地まで運びます。"
          />
          <FeatureCard
            title="途中立ち寄りが自由"
            desc="列車の乗降駅の前後に、茶園見学・九連アーチ橋撮影・ラワナ滝など、ご希望のスポットへ立ち寄れます。"
          />
          <FeatureCard
            title="遅延にも柔軟に対応"
            desc="スリランカの列車は遅延が珍しくありません。専用車チャーターなら列車の到着に合わせてドライバーが待機します。"
          />
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          H2 ⑦ よくある失敗談と対策
      ════════════════════════════════════════════════════ */}
      <section className="mb-14" id="section7">
        <H2 id="section7">よくある失敗談と対策</H2>
        <p className="text-base leading-[1.9] text-gray-700 mb-6">
          紅茶列車は人気が高い分、事前準備が不十分だと思わぬトラブルに遭遇することがあります。
          実際に旅行者が経験した失敗談と、その対策をご紹介します。
        </p>

        <div className="space-y-4 mb-8">
          {[
            {
              fail: "Ella駅で降りたら九連アーチ橋を渡れなかった",
              cause: "九連アーチ橋はEllaとDemodaraの間にあるため、Ella駅で下車すると橋を列車から体験できない",
              solution: "Ellaの次の駅・Demodara駅まで乗車する。SLTCSのドライバーがDemodara駅でお出迎えします。",
            },
            {
              fail: "指定席が取れず立ち乗りになった",
              cause: "ハイシーズンに直前予約したため、指定席が売り切れていた",
              solution: "旅行日程が決まり次第、30日前から予約を開始する。12Go.Asiaを活用して早めに確保する。なお、Bandarawela〜Demodara間の約1時間であれば、立ち席でも十分楽しめます。",
            },
            {
              fail: "列車が大幅に遅延して次の予定が狂った",
              cause: "スリランカの列車は1〜2時間の遅延が珍しくない。次の観光の予定を詰め込みすぎた",
              solution: "列車の後の予定には十分な余裕を持たせる。専用車チャーターなら遅延に合わせて柔軟に対応できる。",
            },
          ].map((item, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
              <div className="bg-red-50 border-b border-red-100 px-5 py-3">
                <p className="text-sm font-bold text-red-700">失敗：{item.fail}</p>
                <p className="text-xs text-red-600 mt-1">原因：{item.cause}</p>
              </div>
              <div className="px-5 py-3">
                <p className="text-sm text-[oklch(0.25_0.08_155)] font-bold mb-1">対策</p>
                <p className="text-sm text-gray-600 leading-relaxed">{item.solution}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          H2 ⑧ FAQ
      ════════════════════════════════════════════════════ */}
      <section className="mb-14" id="section8">
        <H2 id="section8">紅茶列車 よくある質問（FAQ）</H2>

        <div className="space-y-3 mb-8">
          {[
            {
              q: "現在どの区間が運行していますか？",
              a: "2026年6月現在、2025年11月末のサイクロンの影響でAmbewela〜Badulla間のみ運行しています。キャンディ〜ナヌオヤ間などは運休中です。最新情報はスリランカ国鉄公式サイトまたはSLTCSへお問い合わせください。",
            },
            {
              q: "なぜEllaではなくDemodaraで降りるのですか？",
              a: "九連アーチ橋はEllaとDemodaraの間に位置しています。Ella駅で下車してしまうと、列車の中から橋を渡ることができません。橋を車窓から体験するには、Ellaの次の駅・Demodaraまで乗車する必要があります。SLTCSのドライバーがDemodara駅でお出迎えし、そのままEllaへご案内します。",
            },
            {
              q: "紅茶列車はどの列車に乗ればいいですか？",
              a: "現在の運行区間（Ambewela〜Badulla）を走る列車のうち、展望車（エクスポジャーワゴン）が連結されているものを選ぶのがおすすめです。12Go.Asiaで検索すると展望車付きの列車を確認できます。",
            },
            {
              q: "SLTCSは列車チケットの手配をしてくれますか？",
              a: "申し訳ありませんが、SLTCSでは列車チケットの手配は行っておりません。チケットのご購入は12Go.Asiaなどのオンラインサービスか、駅窓口でお客様ご自身でお願いいたします。乗降駅への送迎は承っておりますので、お気軽にご相談ください。",
            },
            {
              q: "列車の遅延はどのくらいありますか？",
              a: "スリランカの列車は1〜2時間程度の遅延が発生することがよくあります。特に雨季（5〜9月）は遅延が増える傾向があります。列車の後の予定には十分な余裕を持たせることをおすすめします。",
            },
          ].map((faq, i) => (
            <details key={i} className="bg-white border border-gray-200 rounded-xl shadow-sm group">
              <summary className="flex items-start gap-3 p-4 cursor-pointer list-none">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[oklch(0.35_0.12_155)] text-white text-xs flex items-center justify-center font-bold mt-0.5">Q</span>
                <span className="font-medium text-gray-800 text-sm sm:text-base flex-1">{faq.q}</span>
                <span className="text-gray-400 flex-shrink-0 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-4 pb-4">
                <div className="flex gap-3 pt-2 border-t border-gray-50">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-100 text-gray-600 text-xs flex items-center justify-center font-bold">A</span>
                  <p className="text-sm text-gray-600 leading-relaxed flex-1">{faq.a}</p>
                </div>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          H2 ⑨ まとめ
      ════════════════════════════════════════════════════ */}
      <section className="mb-14" id="section9">
        <H2 id="section9">まとめ</H2>
        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          スリランカの紅茶列車は、世界屈指の絶景鉄道路線です。
          九連アーチ橋・茶畑・高原の霧と、次々に変わる車窓の景色はスリランカ旅行の最大のハイライトのひとつです。
        </p>
        <p className="text-base leading-[1.9] text-gray-700 mb-5">
          2026年6月現在はサイクロンの影響でAmbewela〜Badulla間のみ運行中ですが、
          SLTCSがおすすめするBandarawela〜Demodara間（約1時間）は九連アーチ橋・デモダラループを両方体験できる最高の区間です。
          SLTCSの専用車チャーターと組み合わせることで、駅への送迎・荷物の心配・途中立ち寄りなど、列車旅の不便な点をすべてカバーし、より快適な旅が実現できます。
        </p>

        <ul className="space-y-2 text-base text-gray-700 mb-8">
          {[
            "2026年6月現在、Ambewela〜Badulla間のみ運行（サイクロンの影響）",
            "SLTCSおすすめ区間はBandarawela〜Demodara（約1時間）",
            "九連アーチ橋を列車から体験するには、Ellaではなくその先のDemodara駅まで乗車が必須",
            "1等（展望車）または2等指定席がおすすめ。早めの予約が必須",
            "SLTCSの専用車チャーターで駅への送迎・荷物運搬・途中立ち寄りをサポート",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-[oklch(0.35_0.12_155)] font-bold flex-shrink-0 mt-0.5">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* 関連記事 */}
        <div className="bg-gray-50 rounded-xl p-5 mb-8">
          <p className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-3">関連記事</p>
          <ul className="space-y-2">
            {[
              { href: "/nuwara-eliya", label: "ヌワラエリヤ観光ガイド｜茶畑・高原リゾートの見どころ" },
              { href: "/kandy", label: "キャンディ観光ガイド｜仏歯寺・キャンディ湖の見どころ" },
              { href: "/blog/taxi-charter-basics/why-taxi-charter-is-recommended", label: "スリランカでタクシーチャーターがおすすめな理由" },
              { href: "/blog/model-course/course-10days", label: "スリランカ10日間モデルコース｜紅茶列車も組み込んだ完全版" },
              { href: "/blog/theme-travel/honeymoon-sri-lanka", label: "スリランカハネムーン完全ガイド｜新婚旅行に専用車チャーターがおすすめな理由" },
              { href: "/pricing", label: "SLTCSの料金一覧｜スリランカ専用車チャーターの価格" },
              { href: "/blog/travel-planning/best-season-guide", label: "スリランカ旅行のベストシーズンと気候完全ガイド" },
            ].map((link, i) => (
              <li key={i}>
                <Link href={link.href}>
                  <span className="text-sm text-[oklch(0.30_0.12_155)] hover:underline cursor-pointer">
                    → {link.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="bg-[oklch(0.15_0.06_155)] rounded-2xl p-6 text-center">
          <p className="text-white font-bold text-lg mb-2" style={{ fontFamily: "'Shippori Mincho', serif" }}>
            紅茶列車と専用車チャーターを組み合わせた旅を
          </p>
          <p className="text-white/80 text-sm mb-5">
            乗降駅への送迎・途中立ち寄り・荷物の手配など、まずはお気軽にご相談ください。
          </p>
          <a
            href="/#contact"
            className="inline-block bg-[oklch(0.75_0.15_85)] hover:bg-[oklch(0.68_0.15_85)] text-white font-bold px-8 py-3 rounded-full text-sm transition-colors shadow-lg"
          >
            無料で相談する
          </a>
        </div>
      </section>

    </article>
  );
}
