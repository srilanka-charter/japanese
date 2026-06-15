import { Link } from "wouter";

export default function SeniorTravelArticle() {
  const H2 = ({ children, id }: { children: React.ReactNode; id?: string }) => (
    <h2
      id={id}
      className="text-xl sm:text-2xl font-bold text-gray-900 border-l-4 border-[oklch(0.35_0.12_155)] pl-4 mb-5 mt-4"
      style={{ fontFamily: "'Shippori Mincho', serif" }}
    >
      {children}
    </h2>
  );

  const H3 = ({ children }: { children: React.ReactNode }) => (
    <h3 className="text-base sm:text-lg font-bold mt-4 mb-3 pb-1.5 border-b-2 border-[oklch(0.75_0.12_155)] flex items-center gap-2">
      <span className="inline-block bg-[oklch(0.92_0.08_155)] text-[oklch(0.30_0.12_155)] text-xs font-bold px-2 py-0.5 rounded-full">
        ▶
      </span>
      <span className="text-[oklch(0.28_0.10_155)]">{children}</span>
    </h3>
  );

  return (
    <article className="text-gray-800">

      {/* ── リード文 ── */}
      <p className="text-base sm:text-lg leading-[1.9] text-gray-700 mb-6">
        「<strong className="text-gray-900">スリランカ シニア旅行</strong>」「<strong className="text-gray-900">スリランカ 60代 旅行</strong>」で検索している方必見。
        スリランカは、世界遺産・サファリ・紅茶畑・ビーチが一島に凝縮された、シニア世代にこそ楽しんでほしい旅行先です。
      </p>
      <p className="text-base sm:text-lg leading-[1.9] text-gray-700 mb-10">
        <strong className="text-gray-900">専用車チャーター（タクシーチャーター）</strong>を使えば、体力的な不安や移動の煩わしさを解消し、
        自分たちのペースでゆったりと観光できます。
        この記事では、スリランカがシニア旅行に選ばれる理由・専用車チャーターのメリット・おすすめスポット・モデルコースをわかりやすく解説します。
      </p>

      {/* ── 目次 ── */}
      <nav className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-12">
        <p className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-3">目次</p>
        <ol className="space-y-1.5 text-sm">
          {[
            ["1", "スリランカがシニア旅行に選ばれる理由"],
            ["2", "60代・70代のシニア旅行に専用車チャーターがおすすめな理由"],
            ["3", "シニア旅行におすすめのスリランカ観光スポット"],
            ["4", "スリランカ シニア旅行モデルコース（5泊6日）"],
            ["5", "シニア旅行でよくある不安と解決策"],
            ["6", "スリランカ シニア旅行 よくある質問（FAQ）"],
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
          H2 ① スリランカがシニア旅行に選ばれる理由
      ════════════════════════════════════════════════════ */}
      <section className="mb-14" id="section1">

        <H2 id="section1">スリランカがシニア旅行に選ばれる理由</H2>

        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          スリランカは「インド洋の真珠」とも呼ばれる美しい島国です。
          日本からの直行便はありませんが、乗り継ぎ1回で約10〜11時間とアクセスしやすく、
          ヨーロッパや南米と比べて体への負担が少ないのが特徴です。
        </p>
        <p className="text-base leading-[1.9] text-gray-700 mb-6">
          シニア世代が旅行先を選ぶ際に重視する「安全性」「快適さ」「文化的な豊かさ」の3点を、
          スリランカは高いレベルで満たしています。
        </p>

        {/* ヒーロー画像 */}
        <figure className="mb-7 rounded-2xl overflow-hidden shadow-md">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/U5GFZm3GAbGuGjN2pLu33k/blog-senior-travel-hero-N3vErakmjh5szFE9xtAqWY.webp"
            alt="シーギリヤロックの前で笑顔の日本人シニア夫婦"
            className="w-full object-cover max-h-[420px]"
          />
          <figcaption className="text-center text-xs text-gray-400 mt-2 pb-1">
            世界遺産シーギリヤロックを背景に。スリランカはシニア夫婦旅行に最適な旅行先です。
          </figcaption>
        </figure>

        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            {
              icon: "🌏",
              title: "治安が良く安心して観光できる",
              desc: "スリランカは東南アジアの中でも治安が安定しており、観光客へのトラブルが少ない国です。シニア世代も安心して街歩きや観光を楽しめます。",
            },
            {
              icon: "🌡️",
              title: "温暖な気候で体に優しい",
              desc: "年間を通じて温暖な気候が続き、寒暖差が少ないため体への負担が軽減されます。乾季（12〜3月）は特に過ごしやすい気候です。",
            },
            {
              icon: "🏛️",
              title: "世界遺産が8件・文化が豊か",
              desc: "シーギリヤ・キャンディ・アヌラーダプラなど、歴史と文化が凝縮された世界遺産が8件。知的好奇心を刺激する旅ができます。",
            },
            {
              icon: "🍵",
              title: "食事が日本人の口に合いやすい",
              desc: "スリランカ料理は米食文化で、カレーや野菜料理が中心。辛さの調整も可能で、胃腸への負担が少なく、シニア世代にも食べやすい料理が揃っています。",
            },
            {
              icon: "💰",
              title: "コストパフォーマンスが高い",
              desc: "ヨーロッパやハワイと比べて旅行費用が抑えられます。高品質なホテルや専用車チャーターを利用しても、比較的リーズナブルに旅ができます。",
            },
            {
              icon: "🐘",
              title: "野生の象・サファリなど非日常体験",
              desc: "ヤーラ国立公園でのサファリや、象の孤児院など、日本では体験できない非日常の体験が豊富。旅の思い出が深まります。",
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
          H2 ② 専用車チャーターがシニア旅行に最適な理由
      ════════════════════════════════════════════════════ */}
      <section className="mb-14" id="section2">

        <H2 id="section2">60代・70代のシニア旅行に専用車チャーターがおすすめな理由</H2>

        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          スリランカの公共交通機関（バス・鉄道）は、混雑・時間の不正確さ・英語表記の少なさなど、
          シニア旅行者には使いにくい面があります。
        </p>
        <p className="text-base leading-[1.9] text-gray-700 mb-6">
          専用車チャーターなら、これらの不安をすべて解消し、快適で安全な旅を実現できます。
        </p>

        {/* 専用車チャーター画像 */}
        <figure className="mb-7 rounded-2xl overflow-hidden shadow-md">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/U5GFZm3GAbGuGjN2pLu33k/blog-senior-travel-charter-bA6MA9BCzeNbU3jMqvxAgb.webp"
            alt="専用車の後部座席でくつろぐ日本人シニア夫婦とスリランカ人ドライバー"
            className="w-full object-cover max-h-[420px]"
          />
          <figcaption className="text-center text-xs text-gray-400 mt-2 pb-1">
            広々とした専用車の後部座席でゆったり移動。シニア旅行に最適な移動手段です。
          </figcaption>
        </figure>

        <H3>体力的な負担を最小限に抑えられる</H3>
        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          専用車チャーターは、ホテルから観光地まで直接送迎します。
          重い荷物を持って移動する必要がなく、乗り換えの手間もありません。
        </p>
        <p className="text-base leading-[1.9] text-gray-700 mb-6">
          「疲れたら早めにホテルに戻る」「気になるスポットに立ち寄る」など、
          その日の体調に合わせて柔軟に旅程を変更できます。
        </p>

        <H3>日本語対応ドライバーが安心をサポート</H3>
        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          SLTCSのドライバーは日本語でのコミュニケーションが可能です。
          観光地の説明・レストランの予約・緊急時の対応まで、現地での困りごとをサポートします。
        </p>
        <p className="text-base leading-[1.9] text-gray-700 mb-6">
          言葉の壁を感じることなく、安心してスリランカの旅を楽しめます。
        </p>

        <H3>医療機関へのアクセスも安心</H3>
        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          万が一体調を崩した際も、ドライバーが最寄りの医療機関への案内をサポートします。
          シニア旅行者が特に気になる「もしものとき」の対応も、専用車チャーターなら安心です。
        </p>
        <p className="text-base leading-[1.9] text-gray-700 mb-6">
          旅行保険への加入と合わせて、万全の準備で旅に臨めます。
        </p>

        {/* 比較表 */}
        <div className="overflow-x-auto mb-8 rounded-xl shadow-sm">
          <table className="min-w-[520px] w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[oklch(0.25_0.08_155)] text-white">
                <th className="px-4 py-3 text-left font-semibold">比較項目</th>
                <th className="px-4 py-3 text-center font-semibold">専用車チャーター</th>
                <th className="px-4 py-3 text-center font-semibold">バス</th>
                <th className="px-4 py-3 text-center font-semibold">鉄道</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["体への負担", "◎ 少ない", "× 多い", "△ 中程度"],
                ["荷物の扱い", "◎ 車内に積んだまま", "× 自分で管理", "△ 棚に収納"],
                ["時間の自由度", "◎ 完全自由", "× 時刻表通り", "△ 時刻表通り"],
                ["日本語サポート", "◎ ドライバーが対応", "× なし", "× なし"],
                ["緊急時の対応", "◎ ドライバーが支援", "× 自己対応", "× 自己対応"],
                ["費用", "△ やや高め", "◎ 安い", "○ 安め"],
              ].map(([item, charter, bus, train], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-4 py-3 font-medium text-gray-700 border-b border-gray-100">{item}</td>
                  <td className="px-4 py-3 text-center text-[oklch(0.35_0.12_155)] font-semibold border-b border-gray-100">{charter}</td>
                  <td className="px-4 py-3 text-center text-gray-600 border-b border-gray-100">{bus}</td>
                  <td className="px-4 py-3 text-center text-gray-600 border-b border-gray-100">{train}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          H2 ③ シニア旅行におすすめの観光スポット
      ════════════════════════════════════════════════════ */}
      <section className="mb-14" id="section3">

        <H2 id="section3">シニア旅行におすすめのスリランカ観光スポット</H2>

        <p className="text-base leading-[1.9] text-gray-700 mb-6">
          スリランカには、シニア世代が特に楽しめる観光スポットが豊富にあります。
          体力的な負担が少なく、文化的・歴史的な見どころが充実したスポットを厳選してご紹介します。
        </p>

        <H3>シーギリヤロック（世界遺産）</H3>
        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          5世紀に建てられた岩山宮殿。頂上まで登ることもできますが、
          登頂が難しい場合は麓から岩山全体を眺めるだけでも圧倒的な迫力があります。
        </p>
        <p className="text-base leading-[1.9] text-gray-700 mb-6">
          早朝に訪れると混雑が少なく、涼しい時間帯に観光できます。
          専用車チャーターなら出発時間を自由に設定できるため、シニア旅行者に最適です。
        </p>

        <H3>キャンディ（世界遺産）</H3>
        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          スリランカの古都キャンディには、仏陀の歯を祀る「仏歯寺」があります。
          街全体がゆったりとした雰囲気で、散策しやすい観光地です。
        </p>
        <p className="text-base leading-[1.9] text-gray-700 mb-6">
          キャンディアンダンスの鑑賞や、キャンディ湖畔の散歩など、
          体力的な負担が少ない観光が楽しめます。
        </p>

        <H3>ヌワラエリヤ（紅茶の産地）</H3>
        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          標高1,800mの高原に広がる茶畑の景色は、スリランカ旅行のハイライトのひとつです。
          涼しい気候で過ごしやすく、紅茶農園の見学や試飲も楽しめます。
        </p>
        <p className="text-base leading-[1.9] text-gray-700 mb-6">
          コロニアル調のホテルでのアフタヌーンティーは、シニア世代に特に人気の体験です。
        </p>

        <H3>ゴール旧市街（世界遺産）</H3>
        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          オランダ統治時代の面影を残すゴール要塞は、城壁の上を散歩しながら歴史を感じられるスポットです。
          おしゃれなカフェやショップも多く、ゆったりとした時間を過ごせます。
        </p>
        <p className="text-base leading-[1.9] text-gray-700 mb-6">
          海沿いの城壁からは美しいインド洋の景色が広がり、夕日の時間帯は特に絶景です。
        </p>

        <H3>アーユルヴェーダ体験</H3>
        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          スリランカはアーユルヴェーダ発祥の地のひとつ。
          本格的なオイルマッサージやハーブ療法を体験できるリゾートが各地にあります。
        </p>
        <p className="text-base leading-[1.9] text-gray-700 mb-6">
          旅の疲れを癒しながら健康増進もできる、シニア世代に特に人気の体験です。
          専用車チャーターでアーユルヴェーダリゾートへの送迎も手配できます。
        </p>
      </section>

      {/* ════════════════════════════════════════════════════
          H2 ④ モデルコース（5泊6日）
      ════════════════════════════════════════════════════ */}
      <section className="mb-14" id="section4">

        <H2 id="section4">スリランカ シニア旅行モデルコース（5泊6日）</H2>

        <p className="text-base leading-[1.9] text-gray-700 mb-6">
          無理のないペースで主要観光地を巡る、シニア世代向けの5泊6日モデルコースをご紹介します。
          毎日の移動距離を抑え、観光後にゆっくり休める日程設計が特徴です。
        </p>

        <div className="space-y-4 mb-8">
          {[
            {
              day: "1日目",
              title: "コロンボ到着・市内観光",
              content: "コロンボ空港到着後、専用車でホテルへ。午後はコロンボ市内の仏教寺院・コロニアル建築を散策。夕食は地元レストランでスリランカ料理を体験。",
              hotel: "コロンボ泊",
            },
            {
              day: "2日目",
              title: "コロンボ → シーギリヤ",
              content: "午前中にコロンボを出発し、途中ダンブッラ石窟寺院（世界遺産）に立ち寄り。午後はシーギリヤロックの麓から岩山を観賞。体力に余裕があれば登頂も可能。",
              hotel: "シーギリヤ泊",
            },
            {
              day: "3日目",
              title: "シーギリヤ → キャンディ",
              content: "午前中はシーギリヤ周辺を散策。午後はキャンディへ移動し、仏歯寺を参拝。夜はキャンディアンダンスを鑑賞（希望者のみ）。",
              hotel: "キャンディ泊",
            },
            {
              day: "4日目",
              title: "キャンディ → ヌワラエリヤ",
              content: "キャンディ湖畔を散策後、ヌワラエリヤへ移動。途中、紅茶農園に立ち寄り見学・試飲。ヌワラエリヤでは高原の涼しい空気の中でゆっくり休息。",
              hotel: "ヌワラエリヤ泊",
            },
            {
              day: "5日目",
              title: "ヌワラエリヤ → ゴール",
              content: "午前中はヌワラエリヤの茶畑を散策。午後はゴールへ移動し、ゴール要塞の城壁散歩。夕日の時間帯に城壁から海を眺める絶景体験。",
              hotel: "ゴール泊",
            },
            {
              day: "6日目",
              title: "ゴール → コロンボ空港",
              content: "ゴール旧市街をゆっくり散策後、コロンボ空港へ移動。フライト時間に合わせて余裕を持って出発。",
              hotel: "帰国",
            },
          ].map((item, i) => (
            <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
              <div className="bg-[oklch(0.25_0.08_155)] text-white px-5 py-3 flex items-center gap-3">
                <span className="text-xs font-bold bg-white/20 px-2 py-0.5 rounded-full">{item.day}</span>
                <span className="font-semibold text-sm sm:text-base">{item.title}</span>
              </div>
              <div className="px-5 py-4">
                <p className="text-sm leading-relaxed text-gray-700 mb-2">{item.content}</p>
                <p className="text-xs text-[oklch(0.35_0.12_155)] font-semibold">🏨 {item.hotel}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-[oklch(0.96_0.04_155)] border border-[oklch(0.80_0.10_155)] rounded-2xl p-6 text-center mb-4">
          <p className="text-sm text-gray-600 mb-3">このモデルコースをベースに、ご希望に合わせてカスタマイズできます</p>
          <Link
            href="/#contact"
            className="inline-block bg-[oklch(0.35_0.12_155)] hover:bg-[oklch(0.28_0.10_155)] text-white font-bold px-8 py-3 rounded-full text-sm transition-colors"
          >
            無料で旅程相談する
          </Link>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          H2 ⑤ よくある不安と解決策
      ════════════════════════════════════════════════════ */}
      <section className="mb-14" id="section5">

        <H2 id="section5">シニア旅行でよくある不安と解決策</H2>

        <p className="text-base leading-[1.9] text-gray-700 mb-6">
          初めてのスリランカ旅行を検討しているシニア世代から、よく寄せられる不安と解決策をまとめました。
        </p>

        <div className="space-y-4 mb-8">
          {[
            {
              q: "体力的に長時間の移動は大丈夫？",
              a: "専用車チャーターなら、移動中も快適なシートでゆったり過ごせます。疲れたらいつでも休憩を取れるため、体力的な負担を大幅に軽減できます。1日の移動距離も事前に調整可能です。",
            },
            {
              q: "言葉が通じるか心配",
              a: "SLTCSのドライバーは日本語でのコミュニケーションが可能です。観光地の説明・レストランの選定・緊急時の対応まで、日本語でサポートします。",
            },
            {
              q: "食事が合わなかったら？",
              a: "スリランカ料理は米食文化で、辛さの調整が可能です。ドライバーが日本人の口に合うレストランを案内します。ホテルでは洋食メニューも充実しています。",
            },
            {
              q: "持病があるが旅行できる？",
              a: "旅行前に主治医に相談し、必要な薬を十分に持参することをお勧めします。万が一の際は、ドライバーが最寄りの医療機関への案内をサポートします。旅行保険への加入も必ずご検討ください。",
            },
            {
              q: "シーギリヤロックは登れる？",
              a: "シーギリヤロックへの登頂は体力が必要ですが、登らなくても麓から岩山全体を眺めるだけで十分な迫力があります。体調や体力に合わせて無理なく観光できます。",
            },
          ].map((item, i) => (
            <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
              <div className="bg-gray-50 px-5 py-3 flex items-start gap-2">
                <span className="text-[oklch(0.35_0.12_155)] font-bold text-sm flex-shrink-0 mt-0.5">Q.</span>
                <p className="text-sm font-semibold text-gray-800">{item.q}</p>
              </div>
              <div className="px-5 py-4 flex items-start gap-2">
                <span className="text-[oklch(0.35_0.12_155)] font-bold text-sm flex-shrink-0 mt-0.5">A.</span>
                <p className="text-sm leading-relaxed text-gray-700">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          H2 ⑥ FAQ
      ════════════════════════════════════════════════════ */}
      <section className="mb-14" id="section6">

        <H2 id="section6">スリランカ シニア旅行 よくある質問（FAQ）</H2>

        <div className="space-y-4 mb-6">
          {[
            {
              q: "スリランカ旅行の最適な日数は？",
              a: "シニア世代には5泊6日〜7泊8日がおすすめです。無理のないペースで主要観光地を巡れます。日数が少ない場合は、訪問スポットを絞ってゆったりとした旅程を組むことをお勧めします。",
            },
            {
              q: "スリランカのベストシーズンはいつ？",
              a: "西部・南部を中心に観光する場合は12〜3月（乾季）がベストシーズンです。この時期は天候が安定しており、観光しやすい気候です。",
            },
            {
              q: "チャーター料金の目安は？",
              a: "1日あたりの専用車チャーター料金は、車種・行程・距離によって異なります。詳細はお問い合わせページからご相談ください。",
            },
            {
              q: "一人旅でも利用できる？",
              a: "はい、お一人様でも専用車チャーターをご利用いただけます。シニアの一人旅でも、ドライバーが安全をサポートするため安心して旅を楽しめます。",
            },
          ].map((item, i) => (
            <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
              <div className="bg-gray-50 px-5 py-3 flex items-start gap-2">
                <span className="text-[oklch(0.35_0.12_155)] font-bold text-sm flex-shrink-0 mt-0.5">Q.</span>
                <p className="text-sm font-semibold text-gray-800">{item.q}</p>
              </div>
              <div className="px-5 py-4 flex items-start gap-2">
                <span className="text-[oklch(0.35_0.12_155)] font-bold text-sm flex-shrink-0 mt-0.5">A.</span>
                <p className="text-sm leading-relaxed text-gray-700">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          H2 ⑦ まとめ
      ════════════════════════════════════════════════════ */}
      <section className="mb-14" id="section7">

        <H2 id="section7">まとめ</H2>

        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          スリランカは、治安の良さ・温暖な気候・豊かな文化・コストパフォーマンスの高さから、
          シニア世代の旅行先として非常に優れた選択肢です。
        </p>
        <p className="text-base leading-[1.9] text-gray-700 mb-6">
          専用車チャーターを利用することで、体力的な負担を最小限に抑えながら、
          自分たちのペースでゆったりと観光を楽しめます。
        </p>

        <div className="bg-gray-50 rounded-xl p-5 mb-8">
          <p className="text-sm font-semibold text-gray-700 mb-3">この記事のポイントまとめ</p>
          <ul className="space-y-2">
            {[
              "スリランカは治安が良く、シニア世代も安心して観光できる旅行先",
              "専用車チャーターなら体力的な負担を最小限に抑えられる",
              "日本語対応ドライバーが旅の不安をサポート",
              "世界遺産・サファリ・アーユルヴェーダなど多彩な体験が可能",
              "5泊6日のモデルコースで無理なく主要観光地を巡れる",
            ].map((point, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                <span className="text-[oklch(0.35_0.12_155)] font-bold flex-shrink-0">✓</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 最終CTA */}
        <div className="bg-[oklch(0.96_0.04_155)] border border-[oklch(0.80_0.10_155)] rounded-2xl p-6 text-center">
          <p className="text-base font-bold text-gray-900 mb-2">スリランカ シニア旅行のご相談はSLTCSへ</p>
          <p className="text-sm text-gray-600 mb-4">
            旅程のカスタマイズ・料金のお見積もり・ご不明点など、お気軽にお問い合わせください。
          </p>
          <Link
            href="/#contact"
            className="inline-block bg-[oklch(0.35_0.12_155)] hover:bg-[oklch(0.28_0.10_155)] text-white font-bold px-8 py-3 rounded-full text-sm transition-colors"
          >
            無料で旅程相談する
          </Link>
        </div>
      </section>

      {/* ── 関連記事 ── */}
      <section className="mt-12 pt-8 border-t border-gray-200">
        <p className="text-sm font-semibold text-gray-500 mb-4">関連記事</p>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            { href: "/blog/theme-travel/family-travel-charter", label: "スリランカ家族旅行完全ガイド｜子連れで安心のタクシーチャーターモデルコース" },
            { href: "/blog/theme-travel/solo-women-travel-charter", label: "スリランカ女子旅・一人旅安全ガイド｜タクシーチャーターで安心の個人旅行モデルコース" },
            { href: "/blog/taxi-charter-basics/why-taxi-charter-is-recommended", label: "スリランカ旅行でタクシーチャーターがおすすめな理由｜公共交通との違い" },
            { href: "/blog/travel-planning/when-to-book-charter", label: "スリランカの専用車チャーターをいつ予約すべき？｜予約タイミング完全ガイド" },
            { href: "/pricing", label: "SLTCSの料金一覧｜スリランカ専用車チャーターの価格" },
            { href: "/blog/travel-planning/best-season-guide", label: "スリランカ旅行のベストシーズンと気候完全ガイド" },
          ].map((link, i) => (
            <Link
              key={i}
              href={link.href}
              className="block text-sm text-[oklch(0.35_0.12_155)] hover:text-[oklch(0.28_0.10_155)] hover:underline leading-relaxed p-3 bg-gray-50 rounded-lg border border-gray-100 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </section>

    </article>
  );
}
