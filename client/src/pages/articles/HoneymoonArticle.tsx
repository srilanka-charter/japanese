import { Link } from "wouter";

export default function HoneymoonArticle() {
  return (
    <article className="text-gray-800">

      {/* ── リード文 ── */}
      <p className="text-base sm:text-lg leading-[1.9] text-gray-700 mb-10">
        「新婚旅行はどこに行こう？」と悩んでいるカップルに、いま注目されているのが<strong className="text-gray-900">スリランカ</strong>です。
        世界遺産・紅茶畑・ビーチ・サファリ・スパ…と多彩な体験が一度に楽しめるうえ、
        <strong className="text-gray-900">専用車チャーター（タクシーチャーター）</strong>を使えば、
        二人だけのプライベートな時間を最大限に満喫できます。
        この記事では、スリランカが新婚旅行に選ばれる理由と、おすすめのモデルコースを詳しくご紹介します。
      </p>

      {/* ── 目次 ── */}
      <nav className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-12">
        <p className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-3">目次</p>
        <ol className="space-y-1.5 text-sm">
          {[
            ["1", "スリランカが新婚旅行に選ばれる理由"],
            ["2", "専用車チャーターがハネムーンに最適な理由"],
            ["3", "カップルにおすすめの観光スポット"],
            ["4", "ハネムーン向けモデルコース（6泊7日）"],
            ["5", "実際のカップルの声"],
            ["6", "よくある質問"],
            ["7", "まとめ"],
          ].map(([num, label]) => (
            <li key={num} className="flex items-start gap-2 text-gray-600">
              <span className="text-[oklch(0.35_0.12_155)] font-bold flex-shrink-0">{num}.</span>
              <span>{label}</span>
            </li>
          ))}
        </ol>
      </nav>

      {/* ════════════════════════════════════════════════════
          H2 ① スリランカが新婚旅行に選ばれる理由
      ════════════════════════════════════════════════════ */}
      <section className="mb-14" id="section1">
        <h2
          className="text-xl sm:text-2xl font-bold text-gray-900 border-l-4 border-[oklch(0.35_0.12_155)] pl-4 mb-5"
          style={{ fontFamily: "'Shippori Mincho', serif" }}
        >
          スリランカが新婚旅行に選ばれる理由
        </h2>
        <p className="text-base leading-[1.9] text-gray-700 mb-5">
          スリランカは「インド洋の真珠」とも呼ばれる美しい島国。日本からの直行便はありませんが、
          乗り継ぎ1回で約10〜11時間とアクセスしやすく、ヨーロッパやモルディブと比べてコストパフォーマンスに優れています。
          ハワイやバリ島とは一味違う、<strong className="text-gray-900">非日常感あふれる体験</strong>が二人の特別な旅を演出してくれます。
        </p>

        {/* アイキャッチ画像（添付写真：スリランカ衣装でのカップル） */}
        <figure className="mb-7 rounded-2xl overflow-hidden shadow-md">
          <img
            src="/manus-storage/blog-honeymoon-couple_5fca0963.jpg"
            alt="スリランカの民族衣装を着て夕日をバックに記念撮影するカップルとドライバー"
            className="w-full object-cover max-h-[420px]"
          />
          <figcaption className="text-center text-xs text-gray-400 mt-2 pb-1">
            スリランカの民族衣装をまとって夕日の海岸で記念撮影。ドライバーが特別な演出をサポート。
          </figcaption>
        </figure>

        <p className="text-base leading-[1.9] text-gray-700 mb-5">
          スリランカの魅力は、<strong className="text-gray-900">多彩な体験が一島に凝縮されている</strong>点です。
          世界遺産の古代都市・高原の茶畑・野生の象が集まるサファリ・インド洋のビーチリゾートと、
          まったく異なる景色を1回の旅で楽しめます。
        </p>

        {/* 比較表 */}
        <div className="overflow-x-auto mb-8 rounded-xl shadow-sm">
          <table className="min-w-[520px] w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[oklch(0.25_0.08_155)] text-white">
                <th className="px-4 py-3 text-left font-semibold">比較項目</th>
                <th className="px-4 py-3 text-center font-semibold">スリランカ</th>
                <th className="px-4 py-3 text-center font-semibold">ハワイ</th>
                <th className="px-4 py-3 text-center font-semibold">バリ島</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["費用感", "◎ コスパ優秀", "△ 高め", "○ 中程度"],
                ["世界遺産", "◎ 8件", "× なし", "△ 1件"],
                ["ビーチ", "○ 南部・東部", "◎ 多数", "◎ 多数"],
                ["サファリ", "◎ 象・ヒョウ", "× なし", "× なし"],
                ["文化体験", "◎ 豊富", "△ 限定的", "◎ 豊富"],
                ["混雑度", "○ 少なめ", "× 混雑", "△ 中程度"],
              ].map(([item, sl, hi, ba], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-4 py-3 font-medium text-gray-700 border-b border-gray-100">{item}</td>
                  <td className="px-4 py-3 text-center text-[oklch(0.35_0.12_155)] font-semibold border-b border-gray-100">{sl}</td>
                  <td className="px-4 py-3 text-center text-gray-600 border-b border-gray-100">{hi}</td>
                  <td className="px-4 py-3 text-center text-gray-600 border-b border-gray-100">{ba}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          H2 ② 専用車チャーターがハネムーンに最適な理由
      ════════════════════════════════════════════════════ */}
      <section className="mb-14" id="section2">
        <h2
          className="text-xl sm:text-2xl font-bold text-gray-900 border-l-4 border-[oklch(0.35_0.12_155)] pl-4 mb-5"
          style={{ fontFamily: "'Shippori Mincho', serif" }}
        >
          専用車チャーターがハネムーンに最適な理由
        </h2>
        <p className="text-base leading-[1.9] text-gray-700 mb-6">
          新婚旅行で最も大切なのは、<strong className="text-gray-900">二人だけの時間をゆっくり過ごすこと</strong>。
          専用車チャーターなら、他の旅行者と時間を合わせる必要がなく、二人のペースで旅程を組めます。
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            {
              icon: "💑",
              title: "二人だけのプライベート空間",
              desc: "貸し切りの車内は二人だけの空間。移動中も会話を楽しみながら、ゆったりとした時間を過ごせます。",
            },
            {
              icon: "🗺️",
              title: "自由な旅程設計",
              desc: "「夕日が見たい」「もう少しゆっくりしたい」など、その場の気分で行程を変更できます。",
            },
            {
              icon: "🌅",
              title: "サンセット・ロマンティックスポットへ",
              desc: "ゴールの城壁や南部のビーチなど、夕日が美しいスポットへの時間調整もドライバーにお任せ。",
            },
            {
              icon: "🎊",
              title: "特別な演出のサポート",
              desc: "民族衣装の手配やサプライズ演出など、ドライバーが現地のコーディネートをサポートします。",
            },
            {
              icon: "🌿",
              title: "荷物の心配なし",
              desc: "大きなスーツケースも車内に積んだまま移動。ホテルのチェックアウト後も荷物を気にせず観光できます。",
            },
            {
              icon: "🛡️",
              title: "安心・安全な移動",
              desc: "日本語対応の政府公認ドライバーが同行。初めてのスリランカでも安心して旅を楽しめます。",
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
          H2 ③ カップルにおすすめの観光スポット
      ════════════════════════════════════════════════════ */}
      <section className="mb-14" id="section3">
        <h2
          className="text-xl sm:text-2xl font-bold text-gray-900 border-l-4 border-[oklch(0.35_0.12_155)] pl-4 mb-5"
          style={{ fontFamily: "'Shippori Mincho', serif" }}
        >
          カップルにおすすめの観光スポット
        </h2>
        <p className="text-base leading-[1.9] text-gray-700 mb-6">
          スリランカには、カップルで訪れたい絶景スポットが数多くあります。
          専用車チャーターなら、これらのスポットを効率よく、かつ自分たちのペースで巡ることができます。
        </p>

        <div className="space-y-5 mb-8">
          {[
            {
              name: "シーギリヤ（シーギリヤ岩）",
              href: "/sigiriya",
              desc: "世界遺産の天空の宮殿。岩山の頂上から見渡す絶景は、二人の旅の最高の思い出になります。早朝登頂で朝日を二人で眺めるのがおすすめ。",
              tag: "世界遺産・絶景",
            },
            {
              name: "キャンディ（仏歯寺）",
              href: "/kandy",
              desc: "スリランカ最大の聖地・仏歯寺がある高原の古都。ライトアップされた夜の仏歯寺は幻想的で、カップルに人気のスポットです。",
              tag: "世界遺産・文化",
            },
            {
              name: "ヌワラエリヤ（茶畑）",
              href: "/nuwara-eliya",
              desc: "「スリランカのリトルイングランド」と呼ばれる高原の街。緑の茶畑を二人でドライブし、本場のセイロンティーを楽しめます。",
              tag: "茶畑・高原リゾート",
            },
            {
              name: "ゴール（オランダ要塞）",
              href: "/galle",
              desc: "ポルトガル・オランダ統治時代の城壁が残る世界遺産の港町。夕暮れ時の城壁からのサンセットは格別のロマンティックさです。",
              tag: "世界遺産・サンセット",
            },
            {
              name: "ミリッサ（ビーチ・ホエールウォッチング）",
              href: "/whale-watching",
              desc: "白砂のビーチとホエールウォッチングで有名な南部のリゾート地。ビーチでのんびりしたり、クジラの大迫力を二人で体感できます。",
              tag: "ビーチ・マリンアクティビティ",
            },
            {
              name: "紅茶列車（キャンディ〜エッラ）",
              href: "/tea-train",
              desc: "世界で最も美しい鉄道路線のひとつ。茶畑の中を走る列車から眺める緑の絶景は、二人の旅のハイライトになるでしょう。",
              tag: "絶景列車・ロマンティック",
            },
          ].map((spot, i) => (
            <div key={i} className="flex gap-4 bg-white border border-gray-100 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex-shrink-0 w-1 bg-[oklch(0.35_0.12_155)] rounded-full" />
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <Link href={spot.href}>
                    <span className="font-bold text-[oklch(0.30_0.12_155)] hover:underline cursor-pointer text-sm sm:text-base">
                      {spot.name}
                    </span>
                  </Link>
                  <span className="text-xs bg-[oklch(0.92_0.04_155)] text-[oklch(0.30_0.12_155)] px-2 py-0.5 rounded-full font-medium">
                    {spot.tag}
                  </span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{spot.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ビーチ画像 */}
        <figure className="mb-7 rounded-2xl overflow-hidden shadow-md">
          <img
            src="/manus-storage/blog-honeymoon-beach_437cd287.jpg"
            alt="スリランカのミリッサビーチで夕日を眺めるカップル"
            className="w-full object-cover max-h-80"
          />
          <figcaption className="text-center text-xs text-gray-400 mt-2 pb-1">
            ミリッサビーチの夕暮れ。インド洋に沈む夕日を二人で眺める特別なひととき。
          </figcaption>
        </figure>
      </section>

      {/* ════════════════════════════════════════════════════
          H2 ④ ハネムーン向けモデルコース（6泊7日）
      ════════════════════════════════════════════════════ */}
      <section className="mb-14" id="section4">
        <h2
          className="text-xl sm:text-2xl font-bold text-gray-900 border-l-4 border-[oklch(0.35_0.12_155)] pl-4 mb-5"
          style={{ fontFamily: "'Shippori Mincho', serif" }}
        >
          ハネムーン向けモデルコース（6泊7日）
        </h2>
        <p className="text-base leading-[1.9] text-gray-700 mb-6">
          スリランカの主要スポットを効率よく巡る6泊7日のハネムーンコースです。
          専用車チャーターなら、このコースを二人だけのペースで自由に旅できます。
        </p>

        <div className="overflow-x-auto mb-8 rounded-xl shadow-sm">
          <table className="min-w-[540px] w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[oklch(0.25_0.08_155)] text-white">
                <th className="px-4 py-3 text-left font-semibold w-20">日程</th>
                <th className="px-4 py-3 text-left font-semibold">エリア</th>
                <th className="px-4 py-3 text-left font-semibold">主なスポット・体験</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["1日目", "コロンボ着 → シーギリヤ", "コロンボ空港着・専用車でシーギリヤへ移動（約3.5時間）"],
                ["2日目", "シーギリヤ → キャンディ", "早朝シーギリヤ岩登頂（絶景）→ キャンディへ移動・仏歯寺見学"],
                ["3日目", "キャンディ → ヌワラエリヤ", "キャンディ植物園 → 茶畑ドライブ → ヌワラエリヤ着・ティータイム"],
                ["4日目", "ヌワラエリヤ → エッラ（紅茶列車）", "絶景の紅茶列車でエッラへ → ナインアーチブリッジ散策"],
                ["5日目", "エッラ → ゴール", "専用車でゴールへ（約4時間）→ 旧市街・城壁散策・サンセット"],
                ["6日目", "ゴール → ミリッサ", "ミリッサビーチでのんびり → ホエールウォッチング（季節限定）"],
                ["7日目", "コロンボ → 帰国", "コロンボ市内観光 → 空港へ・帰国"],
              ].map(([day, area, detail], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-4 py-3 font-bold text-[oklch(0.35_0.12_155)] border-b border-gray-100 whitespace-nowrap">{day}</td>
                  <td className="px-4 py-3 font-medium text-gray-700 border-b border-gray-100">{area}</td>
                  <td className="px-4 py-3 text-gray-600 border-b border-gray-100">{detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-[oklch(0.97_0.02_155)] border border-[oklch(0.85_0.06_155)] rounded-xl p-5 mb-6">
          <p className="text-sm font-semibold text-[oklch(0.30_0.12_155)] mb-2">💡 ハネムーンにおすすめのオプション</p>
          <ul className="text-sm text-gray-700 space-y-1.5">
            <li>・<strong>民族衣装レンタル</strong>：スリランカの伝統衣装で記念撮影（ドライバーが手配可能）</li>
            <li>・<strong>アーユルヴェーダスパ</strong>：スリランカ発祥の伝統医療スパで二人でリラックス</li>
            <li>・<strong>キャンドルディナー</strong>：ゴールやミリッサのビーチサイドレストランで特別な夕食</li>
            <li>・<strong>早朝シーギリヤ登頂</strong>：混雑前の朝日の中、二人だけで頂上を独占</li>
          </ul>
        </div>

        {/* シーギリヤカップル画像 */}
        <figure className="mb-7 rounded-2xl overflow-hidden shadow-md">
          <img
            src="/manus-storage/blog-honeymoon-sigiriya_060ab3c3.jpg"
            alt="シーギリヤ岩の頂上で夕日を眺める日本人カップル"
            className="w-full object-cover max-h-80"
          />
          <figcaption className="text-center text-xs text-gray-400 mt-2 pb-1">
            シーギリヤ岩の頂上から望む夕日。二人の新婚旅行の最高の思い出に。
          </figcaption>
        </figure>
      </section>

      {/* ════════════════════════════════════════════════════
          H2 ⑤ 実際のカップルの声
      ════════════════════════════════════════════════════ */}
      <section className="mb-14" id="section5">
        <h2
          className="text-xl sm:text-2xl font-bold text-gray-900 border-l-4 border-[oklch(0.35_0.12_155)] pl-4 mb-5"
          style={{ fontFamily: "'Shippori Mincho', serif" }}
        >
          実際のカップルの声
        </h2>

        <div className="space-y-5">
          {[
            {
              name: "T様・K様（20代カップル）",
              rating: 5,
              text: "新婚旅行でスリランカを選んで大正解でした！専用車チャーターのおかげで、移動中も二人だけの時間を楽しめました。ドライバーのアルナさんが民族衣装を手配してくれて、夕日の海岸で記念撮影できたのは一生の思い出です。",
              img: "/manus-storage/blog-honeymoon-couple_78d9976d.jpg",
            },
            {
              name: "S様ご夫婦（30代）",
              rating: 5,
              text: "シーギリヤ岩の早朝登頂は本当に感動的でした。他の観光客がいない時間帯に頂上で二人きりになれて、まるで世界を独占したような気分に。専用車だからこそできたスケジュールです。",
              img: null,
            },
          ].map((review, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
              <div className="flex items-start gap-4">
                {review.img ? (
                  <img
                    src={review.img}
                    alt={review.name}
                    className="w-16 h-16 rounded-full object-cover flex-shrink-0 border-2 border-[oklch(0.85_0.06_155)]"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-full bg-[oklch(0.92_0.04_155)] flex items-center justify-center flex-shrink-0 border-2 border-[oklch(0.85_0.06_155)]">
                    <span className="text-2xl">💑</span>
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className="font-bold text-gray-900 text-sm">{review.name}</span>
                    <span className="text-yellow-400 text-sm">{"★".repeat(review.rating)}</span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{review.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          H2 ⑥ よくある質問
      ════════════════════════════════════════════════════ */}
      <section className="mb-14" id="section6">
        <h2
          className="text-xl sm:text-2xl font-bold text-gray-900 border-l-4 border-[oklch(0.35_0.12_155)] pl-4 mb-5"
          style={{ fontFamily: "'Shippori Mincho', serif" }}
        >
          よくある質問
        </h2>

        <div className="space-y-4">
          {[
            {
              q: "新婚旅行でスリランカは安全ですか？",
              a: "スリランカは東南アジアの中でも比較的治安が安定しており、日本人旅行者も多く訪れています。政府公認の日本語対応ドライバーが同行するため、初めての方でも安心してご旅行いただけます。",
            },
            {
              q: "専用車チャーターの費用はどのくらいですか？",
              a: "6泊7日の専用車チャーターは、プランや車両タイプによって異なります。詳しくは「無料で相談する」からお気軽にお問い合わせください。",
            },
            {
              q: "ハネムーンに最適な時期はいつですか？",
              a: "スリランカは地域によって気候が異なります。西部・南部（コロンボ・ゴール・ミリッサ）は12〜3月が乾季でベストシーズン。東部（アルガムベイ）は5〜9月が最適です。",
            },
            {
              q: "民族衣装の手配はできますか？",
              a: "はい、ドライバーが現地の衣装レンタルショップをご案内します。スリランカの伝統衣装で記念撮影される新婚カップルも多く、大変好評です。",
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
          H2 ⑦ まとめ
      ════════════════════════════════════════════════════ */}
      <section className="mb-14" id="section7">
        <h2
          className="text-xl sm:text-2xl font-bold text-gray-900 border-l-4 border-[oklch(0.35_0.12_155)] pl-4 mb-5"
          style={{ fontFamily: "'Shippori Mincho', serif" }}
        >
          まとめ
        </h2>
        <p className="text-base leading-[1.9] text-gray-700 mb-5">
          スリランカは、世界遺産・ビーチ・サファリ・茶畑・文化体験が一島に凝縮された、
          <strong className="text-gray-900">コスパ最高の新婚旅行先</strong>です。
          そして専用車チャーターを使えば、二人だけのプライベートな時間を最大限に楽しめます。
        </p>
        <ul className="space-y-2 text-base text-gray-700 mb-8">
          {[
            "二人だけの貸し切り車で、自由なペースで旅できる",
            "民族衣装・サンセット・サプライズ演出など特別な体験をサポート",
            "日本語対応の政府公認ドライバーが同行で安心",
            "ハワイ・バリ島より費用を抑えながら、より多彩な体験が可能",
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
              { href: "/theme-travel/family-travel-charter", label: "スリランカ家族旅行に専用車が向いている理由｜子連れで安心のモデルコース" },
              { href: "/theme-travel/solo-women-travel-charter", label: "女子旅にスリランカはおすすめ？一人旅でも安心なタクシーチャーターで個人旅行をしよう！" },
              { href: "/taxi-charter-basics/why-taxi-charter-is-recommended", label: "スリランカでタクシーチャーターがおすすめな理由" },
              { href: "/taxi-charter-basics/booking-timing", label: "スリランカの専用車チャーターをいつ予約すべき？" },
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
            二人だけの特別なスリランカ旅行を
          </p>
          <p className="text-white/80 text-sm mb-5">
            ハネムーンのご要望・ご予算・日程など、まずはお気軽にご相談ください。
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
