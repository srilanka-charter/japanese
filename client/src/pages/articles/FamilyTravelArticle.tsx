export default function FamilyTravelArticle() {
  return (
    <article className="text-gray-800">

      {/* ── リード文 ── */}
      <p className="text-base sm:text-lg leading-[1.9] text-gray-700 mb-10">
        「子どもを連れてスリランカに行けるの？」「移動が大変そう…」と不安に感じている方は少なくありません。
        しかし、<strong className="text-gray-900">専用車チャーター（タクシーチャーター）</strong>を利用すれば、
        子連れ家族でも快適・安全にスリランカを旅することができます。
        この記事では、家族旅行に専用車が向いている理由と、子連れで楽しめるモデルコースを詳しく解説します。
      </p>

      {/* ── 目次 ── */}
      <nav className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-12">
        <p className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-3">目次</p>
        <ol className="space-y-1.5 text-sm">
          {[
            ["1", "スリランカは子連れ旅行に向いているか？"],
            ["2", "家族旅行に専用車が選ばれる6つの理由"],
            ["3", "子連れにおすすめの観光スポット"],
            ["4", "子連れ家族向けモデルコース"],
            ["5", "実際のご家族の声"],
            ["6", "まとめ"],
          ].map(([num, label]) => (
            <li key={num} className="flex items-start gap-2 text-gray-600">
              <span className="text-[oklch(0.35_0.12_155)] font-bold flex-shrink-0">{num}.</span>
              <span>{label}</span>
            </li>
          ))}
        </ol>
      </nav>

      {/* ════════════════════════════════════════════════════
          H2 ① スリランカは子連れ旅行に向いているか？
      ════════════════════════════════════════════════════ */}
      <section className="mb-14">
        <h2
          className="text-xl sm:text-2xl font-bold text-gray-900 border-l-4 border-[oklch(0.35_0.12_155)] pl-4 mb-5"
          style={{ fontFamily: "'Shippori Mincho', serif" }}
        >
          スリランカは子連れ旅行に向いているか？
        </h2>
        <p className="text-base leading-[1.9] text-gray-700 mb-5">
          スリランカは、象・サファリ・世界遺産・ビーチ・紅茶列車など、子どもが喜ぶ体験が豊富な国です。
          治安も東南アジアの中では比較的安定しており、日本人旅行者にとって安心して訪れやすい環境が整っています。
        </p>
        <p className="text-base leading-[1.9] text-gray-700 mb-6">
          一方で、観光地間の距離が長く、公共交通機関は時刻表が不規則で子連れには負担が大きいのも事実です。
          だからこそ、<strong className="text-gray-900">移動手段の選択が家族旅行の快適さを大きく左右します。</strong>
        </p>

        {/* アイキャッチ画像 */}
        <figure className="mb-7 rounded-2xl overflow-hidden shadow-md">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/U5GFZm3GAbGuGjN2pLu33k/blog-family-travel-hero-MxVNfzXrPpRtNveAS4zeaF.webp"
            alt="スリランカ・シーギリヤ前で笑顔の日本人家族"
            className="w-full object-cover max-h-80"
          />
          <figcaption className="text-center text-xs text-gray-400 mt-2 pb-1">
            シーギリヤ岩の前で記念撮影。子連れでも安心して楽しめる観光地です。
          </figcaption>
        </figure>
      </section>

      {/* ════════════════════════════════════════════════════
          H2 ② 家族旅行に専用車が選ばれる6つの理由
      ════════════════════════════════════════════════════ */}
      <section className="mb-14">
        <h2
          className="text-xl sm:text-2xl font-bold text-gray-900 border-l-4 border-[oklch(0.35_0.12_155)] pl-4 mb-6"
          style={{ fontFamily: "'Shippori Mincho', serif" }}
        >
          家族旅行に専用車が選ばれる6つの理由
        </h2>

        <div className="space-y-5">
          {[
            {
              num: "01",
              title: "荷物を車に置いたまま観光できる",
              body: "スーツケース・ベビーカー・子どもの荷物など、家族旅行は荷物が多くなりがちです。専用車なら荷物を車内に置いたまま観光できるため、身軽に動けます。公共交通機関では難しい「荷物を持ち歩かない旅」が実現します。",
            },
            {
              num: "02",
              title: "子どものペースに合わせて旅程を調整できる",
              body: "子どもが疲れたとき、急に体調が悪くなったとき、予定を変更したいとき——専用車なら柔軟に対応できます。バスや鉄道では時刻表に縛られますが、専用車なら「今日はゆっくりしよう」という判断もすぐに実行できます。",
            },
            {
              num: "03",
              title: "日本語で相談しながら安心して移動できる",
              body: "SLTCSでは日本語対応のドライバーが同行します。観光地の情報・食事のおすすめ・緊急時の対応まで、日本語でコミュニケーションが取れるため、英語に不安がある方も安心です。",
            },
            {
              num: "04",
              title: "チャイルドシートの手配も相談できる",
              body: "小さなお子様連れの場合、チャイルドシートの準備が必要です。SLTCSでは事前にご相談いただければ、チャイルドシートの手配についてもサポートします。",
            },
            {
              num: "05",
              title: "観光地間の移動時間を有効活用できる",
              body: "スリランカの観光地は互いに離れており、移動時間が長くなることもあります。専用車なら車内でお子様が眠ることもでき、移動時間を休憩時間として活用できます。",
            },
            {
              num: "06",
              title: "政府公認ドライバーによる安全な移動",
              body: "SLTCSのドライバーはスリランカ政府観光局の認定を受けています。道路状況を熟知した安全運転で、お子様を含むご家族全員を安心してお連れします。",
            },
          ].map((item) => (
            <div key={item.num} className="flex gap-4 sm:gap-5 p-4 sm:p-5 bg-gray-50 rounded-xl border border-gray-100">
              <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[oklch(0.12_0.02_155)] text-[oklch(0.75_0.12_75)] flex items-center justify-center text-xs font-bold tracking-wider">
                {item.num}
              </div>
              <div className="min-w-0">
                <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm leading-[1.9] text-gray-600">{item.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 専用車 vs 公共交通 比較表 */}
        <div className="mt-8 overflow-x-auto -mx-4 sm:mx-0">
          <div className="min-w-[480px] sm:min-w-0">
            <table className="w-full text-sm border-collapse rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-[oklch(0.12_0.02_155)] text-white">
                  <th className="px-4 py-3 text-left font-semibold">比較項目</th>
                  <th className="px-4 py-3 text-center font-semibold">専用車チャーター</th>
                  <th className="px-4 py-3 text-center font-semibold">公共交通機関</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ["荷物の持ち運び", "◎ 車内に置いたまま", "✕ 常に持ち歩き"],
                  ["子どものペース対応", "◎ 完全対応", "✕ 時刻表に縛られる"],
                  ["日本語サポート", "◎ 常時対応", "✕ なし"],
                  ["チャイルドシート", "○ 相談可能", "✕ 対応なし"],
                  ["移動中の休憩", "◎ 自由に設定", "△ 限定的"],
                  ["費用", "△ 高め", "◎ 安い"],
                ].map(([item, charter, public_t], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium text-gray-800">{item}</td>
                    <td className="px-4 py-3 text-center font-medium text-emerald-600">{charter}</td>
                    <td className="px-4 py-3 text-center font-medium text-red-400">{public_t}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          H2 ③ 子連れにおすすめの観光スポット
      ════════════════════════════════════════════════════ */}
      <section className="mb-14">
        <h2
          className="text-xl sm:text-2xl font-bold text-gray-900 border-l-4 border-[oklch(0.35_0.12_155)] pl-4 mb-6"
          style={{ fontFamily: "'Shippori Mincho', serif" }}
        >
          子連れにおすすめの観光スポット
        </h2>

        {/* 象サファリ画像 */}
        <figure className="mb-8 rounded-2xl overflow-hidden shadow-md">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/U5GFZm3GAbGuGjN2pLu33k/blog-family-travel-elephant-c3nbHuwcfb28uyYyq4Qj6e.webp"
            alt="ミネリヤ国立公園でサファリを楽しむ家族"
            className="w-full object-cover max-h-80"
          />
          <figcaption className="text-center text-xs text-gray-400 mt-2 pb-1">
            ミネリヤ国立公園では、野生の象の群れを間近で観察できます。
          </figcaption>
        </figure>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {[
            {
              icon: "🐘",
              name: "ミネリヤ国立公園",
              desc: "野生の象が数百頭集まる「ギャザリング」が有名。子どもが大喜びするサファリ体験ができます。",
              link: null,
            },
            {
              icon: "🏔️",
              name: "シーギリヤ",
              desc: "世界遺産の岩山要塞。子どもと一緒に登ることで達成感が生まれます。登山前後の休憩も専用車なら安心。",
              link: "/sigiriya",
            },
            {
              icon: "🚂",
              name: "キャンディ〜エッラ 紅茶列車",
              desc: "茶畑の絶景を走る列車旅。専用車で駅まで送迎し、列車を楽しんだ後また迎えに来てもらえます。",
              link: "/tea-train",
            },
            {
              icon: "🌊",
              name: "ミリッサ・ウナワトゥナ",
              desc: "南部の美しいビーチ。穏やかな波で子どもも安心して遊べます。ホエールウォッチングも人気です。",
              link: null,
            },
            {
              icon: "🏯",
              name: "キャンディ（仏歯寺）",
              desc: "スリランカ最大の仏教聖地。象のパレードが見られる時期は特に子どもに人気です。",
              link: "/kandy",
            },
            {
              icon: "🌿",
              name: "ヌワラエリヤ（茶畑）",
              desc: "高原の涼しい気候と広大な茶畑。茶工場見学も体験でき、子どもの学びにもなります。",
              link: null,
            },
          ].map((spot) => (
            <div key={spot.name} className="p-4 bg-white border border-gray-200 rounded-xl hover:border-[oklch(0.35_0.12_155)] transition-colors">
              <div className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0">{spot.icon}</span>
                <div className="min-w-0">
                  {spot.link ? (
                    <a href={spot.link} className="text-sm font-bold text-[oklch(0.35_0.12_155)] hover:underline underline-offset-2 block mb-1">
                      {spot.name}
                    </a>
                  ) : (
                    <p className="text-sm font-bold text-gray-900 mb-1">{spot.name}</p>
                  )}
                  <p className="text-xs leading-relaxed text-gray-600">{spot.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          H2 ④ 子連れ家族向けモデルコース
      ════════════════════════════════════════════════════ */}
      <section className="mb-14">
        <h2
          className="text-xl sm:text-2xl font-bold text-gray-900 border-l-4 border-[oklch(0.35_0.12_155)] pl-4 mb-6"
          style={{ fontFamily: "'Shippori Mincho', serif" }}
        >
          子連れ家族向けモデルコース
        </h2>
        <p className="text-base leading-[1.9] text-gray-700 mb-6">
          以下は、子連れ家族に人気の5泊6日モデルコースです。移動距離と観光のバランスを考慮し、無理のない旅程を組んでいます。
          詳細なルートは<a href="/plan" className="text-[oklch(0.35_0.12_155)] underline underline-offset-2 hover:opacity-80">プランページ</a>でもご確認いただけます。
        </p>

        {/* モデルコース表 */}
        <div className="overflow-x-auto -mx-4 sm:mx-0 mb-8">
          <div className="min-w-[520px] sm:min-w-0">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[oklch(0.35_0.12_155)] text-white">
                  <th className="px-4 py-3 text-left font-semibold w-16">日程</th>
                  <th className="px-4 py-3 text-left font-semibold">行き先・主な観光</th>
                  <th className="px-4 py-3 text-left font-semibold">ポイント</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["1日目", "コロンボ空港 → シーギリヤ", "空港から専用車で直行。移動中に昼食休憩を挟みながら無理なく移動"],
                  ["2日目", "シーギリヤ岩 → ミネリヤ国立公園", "午前中に岩山登頂、午後はサファリ。子どもが最も喜ぶ1日"],
                  ["3日目", "ダンブッラ石窟寺院 → キャンディ", "世界遺産を2か所巡る。キャンディ湖畔でのんびり夕散歩も"],
                  ["4日目", "キャンディ → ヌワラエリヤ", "紅茶列車または専用車で高原へ。茶工場見学・茶畑散策"],
                  ["5日目", "ヌワラエリヤ → ゴール", "南部の世界遺産・ゴール旧市街を散策。ビーチで子どもと遊泳"],
                  ["6日目", "ゴール → コロンボ空港", "余裕を持った帰路。空港近くでお土産購入も可能"],
                ].map(([day, dest, point], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-bold text-[oklch(0.35_0.12_155)] border-b border-gray-100 whitespace-nowrap">{day}</td>
                    <td className="px-4 py-3 font-medium text-gray-900 border-b border-gray-100">{dest}</td>
                    <td className="px-4 py-3 text-gray-600 border-b border-gray-100 text-xs leading-relaxed">{point}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 専用車チャーター画像 */}
        <figure className="mb-7 rounded-2xl overflow-hidden shadow-md">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/U5GFZm3GAbGuGjN2pLu33k/blog-family-travel-car-XpHSdbWTLaoHe6nerhaYou.webp"
            alt="スリランカ専用チャーター車に荷物を積み込む家族"
            className="w-full object-cover max-h-72"
          />
          <figcaption className="text-center text-xs text-gray-400 mt-2 pb-1">
            大きなスーツケースも安心。ドライバーが荷物の積み下ろしをサポートします。
          </figcaption>
        </figure>

        <div className="bg-[oklch(0.12_0.02_155)] rounded-xl p-5 text-white">
          <p className="text-[oklch(0.75_0.12_75)] text-xs font-semibold tracking-widest mb-3 uppercase">Family Travel Point</p>
          <ul className="space-y-2 text-sm text-white/80">
            {[
              "移動時間が長い日は、子どもが車内で眠れるよう出発時間を早めに設定",
              "観光地では子どものペースに合わせて滞在時間を柔軟に調整",
              "食事はドライバーに地元のファミリーレストランをリクエスト可能",
              "急な体調不良や天候変化にも、専用車なら即座に対応できる",
            ].map((point, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-[oklch(0.75_0.12_75)] font-bold flex-shrink-0">✓</span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          H2 ⑤ 実際のご家族の声
      ════════════════════════════════════════════════════ */}
      <section className="mb-14">
        <h2
          className="text-xl sm:text-2xl font-bold text-gray-900 border-l-4 border-[oklch(0.35_0.12_155)] pl-4 mb-6"
          style={{ fontFamily: "'Shippori Mincho', serif" }}
        >
          実際のご家族の声
        </h2>

        <div className="space-y-6">
          {/* 口コミ1：K様ご家族 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 shadow-sm">
            <div className="flex items-start gap-4 mb-4">
              <img
                src="/manus-storage/review_k_family_new_2b2c81ce.png"
                alt="K様ご家族"
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover flex-shrink-0 border-2 border-[oklch(0.75_0.12_75)]"
              />
              <div>
                <p className="font-bold text-gray-900 text-sm sm:text-base">K様ご家族</p>
                <p className="text-xs text-gray-400 mt-0.5">日本 ／ ファミリー旅行</p>
                <div className="flex gap-0.5 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[oklch(0.75_0.12_75)] text-sm">★</span>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-sm leading-[1.9] text-gray-700">
              私達家族のスリランカ旅行は、アルナさんのおかげで最高の旅になりました！ありがとうございました！！
              スリランカまたきます。そのときはよろしくお願いします♡
              アルーナさんと一緒に旅ができたことで、スリランカが好きになりました！！また、いつか会いましょう。
              <strong className="text-gray-900">子供たちもアルナさんのことが大好きになって、帰りの車では泣いていました。</strong>
              本当に素晴らしいドライバーさんです。
            </p>
          </div>

          {/* 口コミ2：S様ご夫婦 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 shadow-sm">
            <div className="flex items-start gap-4 mb-4">
              <img
                src="/manus-storage/review_S_family_38517451.png"
                alt="S様ご夫婦"
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover flex-shrink-0 border-2 border-[oklch(0.75_0.12_75)]"
              />
              <div>
                <p className="font-bold text-gray-900 text-sm sm:text-base">S様ご夫婦</p>
                <p className="text-xs text-gray-400 mt-0.5">日本 ／ カップル・ご夫婦旅行</p>
                <div className="flex gap-0.5 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[oklch(0.75_0.12_75)] text-sm">★</span>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-sm leading-[1.9] text-gray-700">
              タリンダさんは親切で忍耐強く、特に私たちの希望を丁寧に聞いてくれて、旅の間じゅう安心して過ごすことができました。
              日本語もとても上手で、コミュニケーションは常にスムーズ。
              <strong className="text-gray-900">時間厳守で、送迎やアクティビティには必ず時間どおりに来てくれました。</strong>
              観光スポットやレストランのおすすめも教えてくれて、本当に助かりました。
            </p>
          </div>
        </div>
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
          家族旅行のご相談はSLTCSへ
        </h3>
        <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-md mx-auto">
          お子様の年齢・人数・旅行日数をお知らせいただければ、<br className="hidden sm:block" />
          ご家族に最適なモデルコースとお見積もりをご提案します。
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="/#contact"
            onClick={(e) => { e.preventDefault(); window.location.href = "/#contact"; }}
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
          H2 ⑥ まとめ
      ════════════════════════════════════════════════════ */}
      <section className="mb-10">
        <h2
          className="text-xl sm:text-2xl font-bold text-gray-900 border-l-4 border-[oklch(0.35_0.12_155)] pl-4 mb-5"
          style={{ fontFamily: "'Shippori Mincho', serif" }}
        >
          まとめ
        </h2>
        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          スリランカは子連れ家族にとって魅力的な観光地ですが、移動手段の選択が旅の快適さを大きく左右します。
          荷物の管理・子どものペース対応・日本語サポートという観点から、<strong className="text-gray-900">専用車チャーターは家族旅行に最も適した移動手段</strong>といえます。
        </p>
        <p className="text-base leading-[1.9] text-gray-700">
          SLTCSでは、政府公認ドライバーによる完全プライベートチャーターを日本語でご提供しています。
          ご家族の旅行を検討している方は、まず<a href="/#contact" onClick={(e) => { e.preventDefault(); window.location.href = "/#contact"; }} className="text-[oklch(0.35_0.12_155)] underline underline-offset-2 hover:opacity-80">無料相談</a>からお気軽にご連絡ください。
        </p>
      </section>

      {/* ── 関連記事 ── */}
      <div className="border-t border-gray-200 pt-8">
        <p className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-4">関連記事</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a
            href="/taxi-charter-basics/why-taxi-charter-is-recommended"
            className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group border border-gray-100"
          >
            <div className="flex-1 min-w-0">
              <p className="text-xs text-[oklch(0.35_0.12_155)] font-semibold mb-1">タクシーチャーターの基礎</p>
              <p className="text-sm font-medium text-gray-800 group-hover:text-[oklch(0.35_0.12_155)] transition-colors leading-snug">
                スリランカでタクシーチャーターがおすすめな理由
              </p>
            </div>
            <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </a>
          <a
            href="/plan"
            className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group border border-gray-100"
          >
            <div className="flex-1 min-w-0">
              <p className="text-xs text-[oklch(0.35_0.12_155)] font-semibold mb-1">プラン</p>
              <p className="text-sm font-medium text-gray-800 group-hover:text-[oklch(0.35_0.12_155)] transition-colors leading-snug">
                SLTCSのタクシーチャータープランを見る
              </p>
            </div>
            <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </a>
        </div>
      </div>

    </article>
  );
}
