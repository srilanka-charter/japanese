import { Link } from "wouter";

export default function TeaTrainArticle() {
  return (
    <article className="text-gray-800">

      {/* ── リード文 ── */}
      <p className="text-base sm:text-lg leading-[1.9] text-gray-700 mb-10">
        「<strong className="text-gray-900">スリランカ 紅茶列車</strong>」「<strong className="text-gray-900">キャンディ エッラ 列車</strong>」で検索しているあなたへ。
        キャンディ〜エッラ間の鉄道は、CNNトラベルが選ぶ「世界で最も美しい鉄道路線」のひとつに数えられています。
        茶畑の緑・九連アーチ橋・霧に包まれた高原の絶景を車窓から楽しめるこの列車は、スリランカ旅行のハイライトとして多くの旅行者を魅了しています。

        この記事では、紅茶列車の歴史的背景から乗り方・座席の選び方・予約方法・失敗しないための注意点まで、
        <strong className="text-gray-900">SLTCSの専用車チャーターと組み合わせた最適な楽しみ方</strong>を詳しく解説します。
      </p>

      {/* ── 目次 ── */}
      <nav className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-12">
        <p className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-3">目次</p>
        <ol className="space-y-1.5 text-sm">
          {[
            ["1", "紅茶列車とは？スリランカ高原鉄道の歴史と魅力"],
            ["2", "キャンディ〜エッラ間の絶景スポット3選"],
            ["3", "座席の種類と選び方｜1等・2等・3等の違い"],
            ["4", "列車の予約方法と注意点"],
            ["5", "SLTCSの専用車チャーターとの組み合わせ方"],
            ["6", "よくある失敗談と対策"],
            ["7", "紅茶列車 よくある質問（FAQ）"],
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
          H2 ① 紅茶列車とは？
      ════════════════════════════════════════════════════ */}
      <section className="mb-14" id="section1">
        <h2
          className="text-xl sm:text-2xl font-bold text-gray-900 border-l-4 border-[oklch(0.35_0.12_155)] pl-4 mb-5 mt-4"
          style={{ fontFamily: "'Shippori Mincho', serif" }}
        >
          紅茶列車とは？スリランカ高原鉄道の歴史と魅力
        </h2>
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
                ["おすすめ区間", "ナヌオヤ〜エッラ（九連アーチ橋・茶畑の絶景）"],
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
          H2 ② 絶景スポット3選
      ════════════════════════════════════════════════════ */}
      <section className="mb-14" id="section2">
        <h2
          className="text-xl sm:text-2xl font-bold text-gray-900 border-l-4 border-[oklch(0.35_0.12_155)] pl-4 mb-5 mt-4"
          style={{ fontFamily: "'Shippori Mincho', serif" }}
        >
          キャンディ〜エッラ間の絶景スポット3選
        </h2>
        <p className="text-base leading-[1.9] text-gray-700 mb-6">
          この区間には、車窓から見逃せない絶景ポイントが点在しています。
          乗車前に場所を把握しておくことで、写真撮影のタイミングを逃さずに済みます。
        </p>

        <div className="space-y-6 mb-8">
          {[
            {
              num: "01",
              title: "九連アーチ橋（ナイン・アーチ・ブリッジ）",
              location: "エッラ駅付近",
              desc: "スリランカで最も有名な鉄道橋。1921年に建設されたレンガ造りの9連アーチが、緑の茶畑と青空に映える絶景は、スリランカ旅行の象徴的な光景です。列車が橋を渡る瞬間を橋の下から撮影することもでき、SNSで人気のフォトスポットになっています。",
              tip: "エッラ駅から徒歩約20分。列車の通過時刻に合わせて橋の下から撮影するのがおすすめ。",
            },
            {
              num: "02",
              title: "ヌワラエリヤ周辺の茶畑",
              location: "ナヌオヤ駅付近",
              desc: "「スリランカのリトルイングランド」と呼ばれるヌワラエリヤ周辺は、一面に広がる茶畑が圧巻。列車は茶畑の中をゆっくりと走り抜け、茶摘み作業をする人々の姿も車窓から見えることがあります。霧がかかる早朝は特に幻想的な景色が楽しめます。",
              tip: "ナヌオヤ駅はヌワラエリヤの最寄り駅。駅から市街地まで車で約30分。",
            },
            {
              num: "03",
              title: "ラワナ滝（エッラ手前）",
              location: "エッラ駅手前",
              desc: "高さ約25mのラワナ滝は、スリランカの古代叙事詩「ラーマーヤナ」にも登場する伝説の滝。列車の車窓からも見ることができ、エッラ周辺の観光スポットとしても人気です。雨季（5〜9月）には水量が増し、より迫力のある姿が見られます。",
              tip: "エッラ駅から車で約10分。専用車チャーターで立ち寄ることができます。",
            },
          ].map((spot) => (
            <div key={spot.num} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
              <div className="flex items-start gap-4 mb-3">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[oklch(0.35_0.12_155)] text-white text-sm font-bold flex items-center justify-center">
                  {spot.num}
                </span>
                <div>
                  <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-0.5">{spot.title}</h3>
                  <span className="text-xs text-[oklch(0.35_0.12_155)] bg-[oklch(0.92_0.04_155)] px-2 py-0.5 rounded-full font-medium">
                    📍 {spot.location}
                  </span>
                </div>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">{spot.desc}</p>
              <div className="bg-[oklch(0.96_0.02_155)] rounded-lg px-4 py-2.5 text-xs text-[oklch(0.30_0.12_155)]">
                <span className="font-bold">💡 ポイント：</span>{spot.tip}
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
          H2 ③ 座席の種類と選び方
      ════════════════════════════════════════════════════ */}
      <section className="mb-14" id="section3">
        <h2
          className="text-xl sm:text-2xl font-bold text-gray-900 border-l-4 border-[oklch(0.35_0.12_155)] pl-4 mb-5 mt-4"
          style={{ fontFamily: "'Shippori Mincho', serif" }}
        >
          座席の種類と選び方｜1等・2等・3等の違い
        </h2>
        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          スリランカ国鉄には1等・2等・3等の座席クラスがあり、それぞれ快適さと料金が異なります。
        </p>
        <p className="text-base leading-[1.9] text-gray-700 mb-6">
          外国人旅行者には<strong className="text-gray-900">1等（観光用エクスポジャーワゴン）</strong>または<strong className="text-gray-900">2等指定席</strong>がおすすめです。
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
                ["1等（エクスポジャーワゴン）", "約2,000〜3,000円", "展望車・エアコンなし・大きな窓・指定席。景色を楽しむなら最適", "◎"],
                ["2等指定席", "約700〜1,500円", "指定席・扇風機あり・比較的快適。コスパ良好", "○"],
                ["3等自由席", "約200〜500円", "自由席・混雑時は立ち乗りも。ローカル体験を重視するなら", "△"],
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
          <p className="text-sm font-bold text-amber-800 mb-2">⚠️ 1等エクスポジャーワゴンについて</p>
          <p className="text-sm text-amber-700 leading-relaxed">
            展望車（エクスポジャーワゴン）は特定の列車にのみ連結されており、すべての列車に設定されているわけではありません。
            乗車前に時刻表と車両編成を確認することをおすすめします。
            また、人気が高いため早めの予約が必要です。
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          H2 ④ 列車の予約方法と注意点
      ════════════════════════════════════════════════════ */}
      <section className="mb-14" id="section4">
        <h2
          className="text-xl sm:text-2xl font-bold text-gray-900 border-l-4 border-[oklch(0.35_0.12_155)] pl-4 mb-5 mt-4"
          style={{ fontFamily: "'Shippori Mincho', serif" }}
        >
          列車の予約方法と注意点
        </h2>
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
              icon: "💻",
              desc: "外国人旅行者に最も利用されているオンライン予約サービス。英語対応・クレジットカード決済可能。手数料が加算されますが、日本からでも簡単に予約できます。",
              url: "https://12go.asia/",
            },
            {
              method: "スリランカ国鉄公式サイト",
              icon: "🚂",
              desc: "公式サイトからも予約可能ですが、外国人には使いにくい場合があります。英語対応はされていますが、決済に問題が生じることもあります。",
              url: "https://www.railway.gov.lk/",
            },
            {
              method: "駅窓口での購入",
              icon: "🏢",
              desc: "キャンディ駅やコロンボ・フォート駅の窓口で直接購入できます。ただし、指定席は早期に売り切れることが多く、当日購入は難しい場合があります。",
              url: null,
            },
          ].map((item, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{item.icon}</span>
                <h3 className="font-bold text-gray-900 text-sm sm:text-base">{item.method}</h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-2">{item.desc}</p>
              {item.url && (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[oklch(0.35_0.12_155)] hover:underline"
                >
                  → {item.url}
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="bg-red-50 border border-red-200 rounded-xl p-5 mb-6">
          <p className="text-sm font-bold text-red-800 mb-2">⚠️ 注意：SLTCSは列車チケットの手配を行っていません</p>
          <p className="text-sm text-red-700 leading-relaxed">
            SLTCSの専用車チャーターサービスは、列車の乗車駅・下車駅への送迎を担当します。
            列車チケットのご手配はお客様ご自身でお願いいたします。
            ご不明な点はお気軽にご相談ください。
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          H2 ⑤ SLTCSの専用車チャーターとの組み合わせ方
      ════════════════════════════════════════════════════ */}
      <section className="mb-14" id="section5">
        <h2
          className="text-xl sm:text-2xl font-bold text-gray-900 border-l-4 border-[oklch(0.35_0.12_155)] pl-4 mb-5 mt-4"
          style={{ fontFamily: "'Shippori Mincho', serif" }}
        >
          SLTCSの専用車チャーターとの組み合わせ方
        </h2>
        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          紅茶列車の最大の課題は、<strong className="text-gray-900">乗り降りの駅への移動</strong>です。
          キャンディ駅・ナヌオヤ駅・エッラ駅はいずれも市街地から離れており、荷物を持ってのアクセスは大変です。
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
          <p className="text-sm font-bold text-[oklch(0.25_0.08_155)] mb-4">📋 おすすめの組み合わせプラン例</p>
          <div className="space-y-3">
            {[
              { day: "1日目", content: "コロンボ空港 → キャンディ（専用車）。キャンディ市内観光（仏歯寺・キャンディ湖）" },
              { day: "2日目", content: "キャンディ駅から紅茶列車に乗車 → ナヌオヤ駅下車。ヌワラエリヤ観光（茶畑・ペドロ茶園）" },
              { day: "3日目", content: "ナヌオヤ駅から再び列車に乗車 → エッラ駅下車（専用車でお出迎え）。エッラ観光（九連アーチ橋・エッラロック）" },
              { day: "4日目", content: "エッラ → ウダワラウェ（専用車）。サファリ体験" },
              { day: "5日目", content: "ウダワラウェ → ゴール → コロンボ（専用車）" },
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
          {[
            {
              icon: "🚗",
              title: "駅への送迎",
              desc: "キャンディ駅・ナヌオヤ駅・エッラ駅など、ご希望の駅まで専用車でお送りします。重い荷物も車内に積んだまま移動できます。",
            },
            {
              icon: "🧳",
              title: "荷物の心配なし",
              desc: "列車に乗る区間だけ身軽に乗車し、大きなスーツケースは専用車で次の目的地まで運びます。",
            },
            {
              icon: "📍",
              title: "途中立ち寄りが自由",
              desc: "列車の乗降駅の前後に、茶園見学・九連アーチ橋撮影・ラワナ滝など、ご希望のスポットへ立ち寄れます。",
            },
            {
              icon: "🌙",
              title: "夜間・早朝の移動も安心",
              desc: "列車の時間帯によっては早朝・夜間の移動が必要な場合も。専用車なら安全に対応できます。",
            },
          ].map((item, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
              <div className="text-2xl mb-2">{item.icon}</div>
              <h3 className="font-bold text-gray-900 mb-1.5 text-sm sm:text-base">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          H2 ⑥ よくある失敗談と対策
      ════════════════════════════════════════════════════ */}
      <section className="mb-14" id="section6">
        <h2
          className="text-xl sm:text-2xl font-bold text-gray-900 border-l-4 border-[oklch(0.35_0.12_155)] pl-4 mb-5 mt-4"
          style={{ fontFamily: "'Shippori Mincho', serif" }}
        >
          よくある失敗談と対策
        </h2>
        <p className="text-base leading-[1.9] text-gray-700 mb-6">
          紅茶列車は人気が高い分、事前準備が不十分だと思わぬトラブルに遭遇することがあります。
          実際に旅行者が経験した失敗談と、その対策をご紹介します。
        </p>

        <div className="space-y-4 mb-8">
          {[
            {
              fail: "指定席が取れず立ち乗りになった",
              cause: "ハイシーズンに直前予約したため、指定席が売り切れていた",
              solution: "旅行日程が決まり次第、30日前から予約を開始する。12Go.Asiaを活用して早めに確保する。",
            },
            {
              fail: "列車が大幅に遅延して次の予定が狂った",
              cause: "スリランカの列車は1〜2時間の遅延が珍しくない。次の観光の予定を詰め込みすぎた",
              solution: "列車の後の予定には十分な余裕を持たせる。専用車チャーターなら遅延に合わせて柔軟に対応できる。",
            },
            {
              fail: "エッラ駅から宿まで移動手段がなかった",
              cause: "エッラは小さな町でタクシーが少なく、荷物を持って歩くのが大変だった",
              solution: "事前にSLTCSの専用車チャーターを手配し、エッラ駅でのお出迎えを依頼する。",
            },
            {
              fail: "九連アーチ橋を列車の中から見逃した",
              cause: "橋を渡る時間が短く、どちら側の窓から見えるか知らなかった",
              solution: "キャンディ→エッラ方向の場合、橋は右側（南側）の窓から見えることが多い。事前に情報を確認しておく。",
            },
          ].map((item, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm">
              <div className="bg-red-50 border-b border-red-100 px-5 py-3">
                <p className="text-sm font-bold text-red-700">❌ 失敗：{item.fail}</p>
                <p className="text-xs text-red-600 mt-1">原因：{item.cause}</p>
              </div>
              <div className="px-5 py-3">
                <p className="text-sm text-[oklch(0.25_0.08_155)] font-bold mb-1">✅ 対策</p>
                <p className="text-sm text-gray-600 leading-relaxed">{item.solution}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          H2 ⑦ FAQ
      ════════════════════════════════════════════════════ */}
      <section className="mb-14" id="section7">
        <h2
          className="text-xl sm:text-2xl font-bold text-gray-900 border-l-4 border-[oklch(0.35_0.12_155)] pl-4 mb-5 mt-4"
          style={{ fontFamily: "'Shippori Mincho', serif" }}
        >
          紅茶列車 よくある質問（FAQ）
        </h2>

        <div className="space-y-3 mb-8">
          {[
            {
              q: "紅茶列車はどの列車に乗ればいいですか？",
              a: "キャンディ〜バドゥッラ間を運行する列車のうち、展望車（エクスポジャーワゴン）が連結されているものを選ぶのがおすすめです。代表的なのは「ウダラタ・メナイク（Udarata Menike）」や「ポディ・メナイク（Podi Menike）」などの特急列車です。12Go.Asiaで検索すると展望車付きの列車を確認できます。",
            },
            {
              q: "SLTCSは列車チケットの手配をしてくれますか？",
              a: "申し訳ありませんが、SLTCSでは列車チケットの手配は行っておりません。チケットのご購入は12Go.Asiaなどのオンラインサービスか、駅窓口でお客様ご自身でお願いいたします。乗降駅への送迎は承っておりますので、お気軽にご相談ください。",
            },
            {
              q: "列車の遅延はどのくらいありますか？",
              a: "スリランカの列車は1〜2時間程度の遅延が発生することがよくあります。特に雨季（5〜9月）は遅延が増える傾向があります。列車の後の予定には十分な余裕を持たせることをおすすめします。",
            },
            {
              q: "子供や高齢者でも乗れますか？",
              a: "はい、乗れます。ただし、3等自由席は混雑時に立ち乗りになることがあるため、1等または2等指定席をおすすめします。高齢の方や足腰に不安がある方は、乗降時のサポートが必要な場合があります。SLTCSのドライバーが駅でのサポートをいたします。",
            },
            {
              q: "雨の日でも景色は楽しめますか？",
              a: "高原地帯は霧や雨が多い地域です。雨の日でも霧に包まれた幻想的な茶畑の景色が楽しめますが、晴れた日の方が遠くまで見渡せます。スリランカの天気は変わりやすいため、雨具の準備をおすすめします。",
            },
          ].map((faq, i) => (
            <details key={i} className="bg-white border border-gray-100 rounded-xl shadow-sm group">
              <summary className="flex items-start gap-3 p-4 cursor-pointer list-none">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[oklch(0.35_0.12_155)] text-white text-xs flex items-center justify-center font-bold mt-0.5">Q</span>
                <span className="font-medium text-gray-800 text-sm sm:text-base flex-1">{faq.q}</span>
                <span className="text-gray-400 flex-shrink-0 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-4 pb-4 pl-13">
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
          H2 ⑧ まとめ
      ════════════════════════════════════════════════════ */}
      <section className="mb-14" id="section8">
        <h2
          className="text-xl sm:text-2xl font-bold text-gray-900 border-l-4 border-[oklch(0.35_0.12_155)] pl-4 mb-5 mt-4"
          style={{ fontFamily: "'Shippori Mincho', serif" }}
        >
          まとめ
        </h2>
        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          スリランカの紅茶列車（キャンディ〜エッラ間）は、世界屈指の絶景鉄道路線です。
          九連アーチ橋・茶畑・高原の霧と、次々に変わる車窓の景色はスリランカ旅行の最大のハイライトのひとつです。
        </p>
        <p className="text-base leading-[1.9] text-gray-700 mb-5">
          SLTCSの専用車チャーターと組み合わせることで、駅への送迎・荷物の心配・途中立ち寄りなど、
          列車旅の不便な点をすべてカバーし、より快適な旅が実現できます。
        </p>

        <ul className="space-y-2 text-base text-gray-700 mb-8">
          {[
            "キャンディ〜エッラ間は世界で最も美しい鉄道路線のひとつ",
            "1等（展望車）または2等指定席がおすすめ。早めの予約が必須",
            "九連アーチ橋・ヌワラエリヤ茶畑・ラワナ滝が車窓の3大絶景",
            "SLTCSの専用車チャーターで駅への送迎・荷物運搬・途中立ち寄りをサポート",
            "列車遅延に備えて、後の予定には余裕を持たせることが重要",
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
              { href: "/taxi-charter-basics/why-taxi-charter-is-recommended", label: "スリランカでタクシーチャーターがおすすめな理由" },
              { href: "/model-course/course-10days", label: "スリランカ10日間モデルコース｜紅茶列車も組み込んだ完全版" },
              { href: "/theme-travel/honeymoon-sri-lanka", label: "スリランカハネムーン完全ガイド｜新婚旅行に専用車チャーターがおすすめな理由" },
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
