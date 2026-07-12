export default function SigiriyaDambullaHotelsArticle() {
  return (
    <article className="text-gray-800">

      {/* ── リード文 ── */}
      <p className="text-base sm:text-lg leading-[1.9] text-gray-700 mb-10">
        スリランカ中部に位置する<strong className="text-gray-900">シーギリヤ・ダンブッラ地域</strong>は、
        世界遺産のシーギリヤロックや黄金の仏像で知られるダンブッラ石窟寺院など、
        見どころが凝縮されたエリアです。
        この地域には自然に溶け込んだ個性豊かなリゾートホテルが点在しており、
        スリランカ旅行のハイライトとして多くの旅行者が宿泊を楽しんでいます。
        本記事では、<strong className="text-gray-900">シーギリヤ・ダンブッラ地域でおすすめのホテル4選</strong>を
        内装・外装写真とともに詳しくご紹介します。
      </p>

      {/* ── 目次 ── */}
      <nav className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-12">
        <p className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-3">目次</p>
        <ol className="space-y-1.5 text-sm">
          {[
            ["1", "ヘリタンスカンダラマ — 森と湖に抱かれた伝説のリゾート"],
            ["2", "ホテルシーギリヤ — シーギリヤロックを望む絶景ホテル"],
            ["3", "アマヤレイク・ダンブッラ — 湖畔に広がる開放的なリゾート"],
            ["4", "ジェットウィング・ヴィル・ウヤナ — 湿地の自然に囲まれたヴィラリゾート"],
            ["5", "SLTCSのタクシーチャーターでシーギリヤ・ダンブッラへ"],
          ].map(([num, label]) => (
            <li key={num} className="flex items-start gap-2 text-gray-600">
              <span className="text-[oklch(0.35_0.12_155)] font-bold flex-shrink-0">{num}.</span>
              <span>{label}</span>
            </li>
          ))}
        </ol>
      </nav>

      {/* ════════════════════════════════════════════════════
          H2 ① ヘリタンスカンダラマ
      ════════════════════════════════════════════════════ */}
      <section className="mb-16" id="section1">
        <h2
          className="text-xl sm:text-2xl font-bold text-gray-900 border-l-4 border-[oklch(0.35_0.12_155)] pl-4 mb-5 mt-4"
          style={{ fontFamily: "'Shippori Mincho', serif" }}
        >
          ヘリタンスカンダラマ — 森と湖に抱かれた伝説のリゾート
        </h2>

        <p className="text-base leading-[1.9] text-gray-700 mb-5">
          スリランカが誇る建築家<strong className="text-gray-900">ジェフリー・バワ</strong>の代表作として世界的に名高い
          「ヘリタンスカンダラマ」。
          カンダラマ湖のほとりに建つこのホテルは、建物全体が熱帯雨林に覆われ、
          まるで自然の一部となったかのような唯一無二の景観を誇ります。
        </p>

        <p className="text-base leading-[1.9] text-gray-700 mb-6">
          バワが設計した建築は、自然光を巧みに取り込んだ開放的な空間と、
          周囲の緑・湖・岩山が一体化したデザインが特徴です。
          ホテルに滞在するだけで、スリランカの自然と建築美を同時に体感できます。
        </p>

        {/* 外観写真 */}
        <figure className="mb-7 rounded-2xl overflow-hidden shadow-md">
          <img
            src="/manus-storage/heritance_exterior1_51d2726f.jpg"
            alt="ヘリタンスカンダラマの外観 — 緑に覆われた建物とカンダラマ湖"
            className="w-full object-cover max-h-[420px]"
            loading="lazy"
          />
          <figcaption className="text-center text-xs text-gray-400 mt-2 pb-1">
            緑に覆われた外壁が印象的なヘリタンスカンダラマ。ジェフリー・バワの建築美が光る。
          </figcaption>
        </figure>

        <h3
          className="text-lg font-bold text-gray-800 mt-8 mb-3 pb-1 border-b border-gray-200"
          style={{ fontFamily: "'Shippori Mincho', serif" }}
        >
          内装・客室の特徴
        </h3>

        <p className="text-base leading-[1.9] text-gray-700 mb-5">
          客室は全室レイクビューまたはフォレストビューで、
          大きな窓から広がる自然の景色が旅の疲れを癒してくれます。
          インテリアはシンプルかつ洗練されており、
          スリランカの伝統的なモチーフを取り入れた落ち着いた雰囲気が漂います。
        </p>

        {/* 客室写真 */}
        <figure className="mb-7 rounded-2xl overflow-hidden shadow-md">
          <img
            src="/manus-storage/heritance-kandalama-room_eeb08e5b.jpg"
            alt="ヘリタンスカンダラマの客室 — 湖を望む開放的な客室"
            className="w-full object-cover max-h-[420px]"
            loading="lazy"
          />
          <figcaption className="text-center text-xs text-gray-400 mt-2 pb-1">
            湖を望む開放的な客室。大きな窓からカンダラマ湖と熱帯雨林が一望できる。
          </figcaption>
        </figure>

        {/* 内装写真 */}
        <figure className="mb-7 rounded-2xl overflow-hidden shadow-md">
          <img
            src="/manus-storage/heritance_interior1_d0d2524a.jpg"
            alt="ヘリタンスカンダラマの内装 — プールと熱帯植物が融合した空間"
            className="w-full object-cover max-h-[420px]"
            loading="lazy"
          />
          <figcaption className="text-center text-xs text-gray-400 mt-2 pb-1">
            プールエリアと熱帯植物が一体となった開放的な空間。自然と建築の調和が美しい。
          </figcaption>
        </figure>

        {/* ホテル情報テーブル */}
        <div className="overflow-x-auto mb-8 rounded-xl shadow-sm">
          <table className="min-w-[400px] w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[oklch(0.25_0.08_155)] text-white">
                <th className="px-4 py-3 text-left font-semibold">項目</th>
                <th className="px-4 py-3 text-left font-semibold">詳細</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["ホテル名", "Heritance Kandalama（ヘリタンスカンダラマ）"],
                ["設計者", "ジェフリー・バワ（スリランカが誇る世界的建築家）"],
                ["ロケーション", "カンダラマ湖畔（ダンブッラから約12km）"],
                ["客室数", "162室"],
                ["特徴", "ジャングルに覆われた外観・インフィニティプール・野生動物との共生"],
              ].map(([key, val], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-4 py-3 font-medium text-gray-700 border-b border-gray-100">{key}</td>
                  <td className="px-4 py-3 text-gray-600 border-b border-gray-100">{val}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          H2 ② ホテルシーギリヤ
      ════════════════════════════════════════════════════ */}
      <section className="mb-16" id="section2">
        <h2
          className="text-xl sm:text-2xl font-bold text-gray-900 border-l-4 border-[oklch(0.35_0.12_155)] pl-4 mb-5 mt-4"
          style={{ fontFamily: "'Shippori Mincho', serif" }}
        >
          ホテルシーギリヤ — シーギリヤロックを望む絶景ホテル
        </h2>

        <p className="text-base leading-[1.9] text-gray-700 mb-5">
          「ホテルシーギリヤ」は、その名の通り<strong className="text-gray-900">シーギリヤロックを間近に望む</strong>
          絶好のロケーションに立地するホテルです。
          客室やプールからシーギリヤロックを眺めながら過ごす時間は、
          スリランカ旅行の中でも特別な思い出となるでしょう。
        </p>

        <p className="text-base leading-[1.9] text-gray-700 mb-6">
          広大な敷地内には熱帯植物が生い茂り、
          野生の孔雀やリスが自由に歩き回る自然豊かな環境が広がっています。
          シーギリヤロック観光の前後に滞在するホテルとして、多くの旅行者から高い評価を受けています。
        </p>

        {/* 外観写真（正しいホテルシーギリヤの外観） */}
        <figure className="mb-7 rounded-2xl overflow-hidden shadow-md">
          <img
            src="/manus-storage/hotel-sigiriya-exterior-correct_8f60af29.jpg"
            alt="ホテルシーギリヤの外観 — シーギリヤロックを背景にした緑豊かなリゾート"
            className="w-full object-cover max-h-[420px]"
            loading="lazy"
          />
          <figcaption className="text-center text-xs text-gray-400 mt-2 pb-1">
            シーギリヤロックを背景に広がる緑豊かなホテルシーギリヤのリゾートエリア。
          </figcaption>
        </figure>

        <h3
          className="text-lg font-bold text-gray-800 mt-8 mb-3 pb-1 border-b border-gray-200"
          style={{ fontFamily: "'Shippori Mincho', serif" }}
        >
          内装・客室の特徴
        </h3>

        <p className="text-base leading-[1.9] text-gray-700 mb-5">
          客室はスリランカの伝統的なデザインを取り入れた温かみのある内装で統一されています。
          プールサイドからはシーギリヤロックが一望でき、
          早朝の朝日に照らされたロックの姿は格別の美しさです。
        </p>

        {/* 客室写真 */}
        <figure className="mb-7 rounded-2xl overflow-hidden shadow-md">
          <img
            src="/manus-storage/hotel-sigiriya-room_5d0035ef.jpg"
            alt="ホテルシーギリヤの客室 — スリランカの伝統的デザインを取り入れた客室"
            className="w-full object-cover max-h-[420px]"
            loading="lazy"
          />
          <figcaption className="text-center text-xs text-gray-400 mt-2 pb-1">
            スリランカの伝統的なデザインを取り入れた温かみのある客室。
          </figcaption>
        </figure>

        {/* 内装写真 */}
        <figure className="mb-7 rounded-2xl overflow-hidden shadow-md">
          <img
            src="/manus-storage/sigiriya_interior1_30bea681.jpg"
            alt="ホテルシーギリヤのプール — シーギリヤロックを望む絶景プール"
            className="w-full object-cover max-h-[420px]"
            loading="lazy"
          />
          <figcaption className="text-center text-xs text-gray-400 mt-2 pb-1">
            シーギリヤロックを正面に望むプール。早朝の静寂の中で泳ぐ体験は格別。
          </figcaption>
        </figure>

        {/* ホテル情報テーブル */}
        <div className="overflow-x-auto mb-8 rounded-xl shadow-sm">
          <table className="min-w-[400px] w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[oklch(0.25_0.08_155)] text-white">
                <th className="px-4 py-3 text-left font-semibold">項目</th>
                <th className="px-4 py-3 text-left font-semibold">詳細</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["ホテル名", "Hotel Sigiriya（ホテルシーギリヤ）"],
                ["ロケーション", "シーギリヤロック至近（徒歩圏内）"],
                ["特徴", "シーギリヤロックビュープール・広大な庭園・野生の孔雀"],
                ["おすすめ", "シーギリヤロック観光の前泊・後泊に最適"],
              ].map(([key, val], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-4 py-3 font-medium text-gray-700 border-b border-gray-100">{key}</td>
                  <td className="px-4 py-3 text-gray-600 border-b border-gray-100">{val}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          H2 ③ アマヤレイク・ダンブッラ
      ════════════════════════════════════════════════════ */}
      <section className="mb-16" id="section3">
        <h2
          className="text-xl sm:text-2xl font-bold text-gray-900 border-l-4 border-[oklch(0.35_0.12_155)] pl-4 mb-5 mt-4"
          style={{ fontFamily: "'Shippori Mincho', serif" }}
        >
          アマヤレイク・ダンブッラ — 湖畔に広がる開放的なリゾート
        </h2>

        <p className="text-base leading-[1.9] text-gray-700 mb-5">
          「アマヤレイク・ダンブッラ」は、
          <strong className="text-gray-900">カラウェワ湖のほとりに広がる開放的なリゾートホテル</strong>です。
          湖に面したプールデッキからの眺めは格別で、
          夕暮れ時には水面に映る夕日が幻想的な光景を演出します。
        </p>

        <p className="text-base leading-[1.9] text-gray-700 mb-6">
          ダンブッラ石窟寺院やシーギリヤロックへのアクセスも良好で、
          観光拠点として利用しやすいロケーションが魅力です。
          スリランカらしい開放的な雰囲気の中で、
          ゆったりとした時間を過ごすことができます。
        </p>

        {/* 外観写真 */}
        <figure className="mb-7 rounded-2xl overflow-hidden shadow-md">
          <img
            src="/manus-storage/amaya_exterior1_6c66fac3.jpg"
            alt="アマヤレイク・ダンブッラの外観 — 湖畔に広がるプールデッキ"
            className="w-full object-cover max-h-[420px]"
            loading="lazy"
          />
          <figcaption className="text-center text-xs text-gray-400 mt-2 pb-1">
            カラウェワ湖を望むプールデッキ。開放的な雰囲気がアマヤレイクの魅力。
          </figcaption>
        </figure>

        <h3
          className="text-lg font-bold text-gray-800 mt-8 mb-3 pb-1 border-b border-gray-200"
          style={{ fontFamily: "'Shippori Mincho', serif" }}
        >
          内装・客室の特徴
        </h3>

        <p className="text-base leading-[1.9] text-gray-700 mb-5">
          客室はコロニアルスタイルを基調とした温かみのあるインテリアで、
          バルコニーからは湖や庭園の緑が広がります。
          スパ施設も充実しており、観光の疲れをしっかりと癒すことができます。
        </p>

        {/* 客室写真 */}
        <figure className="mb-7 rounded-2xl overflow-hidden shadow-md">
          <img
            src="/manus-storage/amaya-lake-room_13bbf799.jpg"
            alt="アマヤレイク・ダンブッラの客室 — コロニアルスタイルの客室"
            className="w-full object-cover max-h-[420px]"
            loading="lazy"
          />
          <figcaption className="text-center text-xs text-gray-400 mt-2 pb-1">
            コロニアルスタイルを基調とした温かみのある客室。バルコニーから湖の緑が広がる。
          </figcaption>
        </figure>

        {/* 内装写真 */}
        <figure className="mb-7 rounded-2xl overflow-hidden shadow-md">
          <img
            src="/manus-storage/amaya_interior1_faee6d12.jpg"
            alt="アマヤレイク・ダンブッラの内装 — 湖を望むバルコニー付き客室"
            className="w-full object-cover max-h-[420px]"
            loading="lazy"
          />
          <figcaption className="text-center text-xs text-gray-400 mt-2 pb-1">
            バルコニーから湖の景色を楽しめる客室。開放感あふれる空間が旅の疲れを癒す。
          </figcaption>
        </figure>

        {/* ホテル情報テーブル */}
        <div className="overflow-x-auto mb-8 rounded-xl shadow-sm">
          <table className="min-w-[400px] w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[oklch(0.25_0.08_155)] text-white">
                <th className="px-4 py-3 text-left font-semibold">項目</th>
                <th className="px-4 py-3 text-left font-semibold">詳細</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["ホテル名", "Amaya Lake Dambulla（アマヤレイク・ダンブッラ）"],
                ["ロケーション", "カラウェワ湖畔（ダンブッラ石窟寺院から約5km）"],
                ["特徴", "湖畔プール・スパ・コロニアルスタイルの客室"],
                ["おすすめ", "ダンブッラ・シーギリヤ両方を観光する際の拠点"],
              ].map(([key, val], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-4 py-3 font-medium text-gray-700 border-b border-gray-100">{key}</td>
                  <td className="px-4 py-3 text-gray-600 border-b border-gray-100">{val}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          H2 ④ ジェットウィング・ヴィル・ウヤナ
      ════════════════════════════════════════════════════ */}
      <section className="mb-16" id="section4">
        <h2
          className="text-xl sm:text-2xl font-bold text-gray-900 border-l-4 border-[oklch(0.35_0.12_155)] pl-4 mb-5 mt-4"
          style={{ fontFamily: "'Shippori Mincho', serif" }}
        >
          ジェットウィング・ヴィル・ウヤナ — 湿地の自然に囲まれたヴィラリゾート
        </h2>

        <p className="text-base leading-[1.9] text-gray-700 mb-5">
          「ジェットウィング・ヴィル・ウヤナ」は、
          シーギリヤ近郊の<strong className="text-gray-900">広大な湿地帯に点在するヴィラ型リゾート</strong>です。
          「ヴィル・ウヤナ」はシンハラ語で「湿地の村」を意味し、
          その名の通り自然環境との共生をコンセプトとしたユニークなホテルです。
        </p>

        <p className="text-base leading-[1.9] text-gray-700 mb-6">
          各ヴィラは独立した造りで、プライベートプールを備えたものも。
          周囲には200種以上の野鳥が生息し、
          バードウォッチングを楽しみながら過ごす贅沢な時間が魅力です。
          シーギリヤロックへは車で約10分とアクセスも良好です。
        </p>

        {/* 外観写真 */}
        <figure className="mb-7 rounded-2xl overflow-hidden shadow-md">
          <img
            src="/manus-storage/viluyana_exterior1_2f3f51eb.jpg"
            alt="ジェットウィング・ヴィル・ウヤナの外観 — 湿地に浮かぶヴィラとプール"
            className="w-full object-cover max-h-[420px]"
            loading="lazy"
          />
          <figcaption className="text-center text-xs text-gray-400 mt-2 pb-1">
            湿地帯に点在するヴィラとプール。夕暮れ時の景色は特に幻想的。
          </figcaption>
        </figure>

        <h3
          className="text-lg font-bold text-gray-800 mt-8 mb-3 pb-1 border-b border-gray-200"
          style={{ fontFamily: "'Shippori Mincho', serif" }}
        >
          内装・客室の特徴
        </h3>

        <p className="text-base leading-[1.9] text-gray-700 mb-5">
          ヴィラの内装は自然素材をふんだんに使用したナチュラルテイスト。
          木・石・竹などスリランカ産の素材で構成された空間は、
          温かみと高級感を兼ね備えています。
          プライベートプール付きのヴィラでは、
          周囲の自然を独り占めにするような贅沢な体験ができます。
        </p>

        {/* 客室写真 */}
        <figure className="mb-7 rounded-2xl overflow-hidden shadow-md">
          <img
            src="/manus-storage/jetwing-vil-uyana-room_0b57fa73.jpg"
            alt="ジェットウィング・ヴィル・ウヤナの客室 — 自然素材を使った開放的なヴィラ客室"
            className="w-full object-cover max-h-[420px]"
            loading="lazy"
          />
          <figcaption className="text-center text-xs text-gray-400 mt-2 pb-1">
            木・石・竹などスリランカ産の自然素材で構成されたヴィラ客室。開放的な空間が広がる。
          </figcaption>
        </figure>

        {/* ホテル情報テーブル */}
        <div className="overflow-x-auto mb-8 rounded-xl shadow-sm">
          <table className="min-w-[400px] w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[oklch(0.25_0.08_155)] text-white">
                <th className="px-4 py-3 text-left font-semibold">項目</th>
                <th className="px-4 py-3 text-left font-semibold">詳細</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["ホテル名", "Jetwing Vil Uyana（ジェットウィング・ヴィル・ウヤナ）"],
                ["ロケーション", "シーギリヤ近郊の湿地帯（シーギリヤロックから約10分）"],
                ["客室タイプ", "独立ヴィラ形式（プライベートプール付きあり）"],
                ["特徴", "200種以上の野鳥・バードウォッチング・自然素材インテリア"],
                ["おすすめ", "自然体験・バードウォッチング・プライベート感を重視する旅行者"],
              ].map(([key, val], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-4 py-3 font-medium text-gray-700 border-b border-gray-100">{key}</td>
                  <td className="px-4 py-3 text-gray-600 border-b border-gray-100">{val}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          H2 ⑤ SLTCSのタクシーチャーターで
      ════════════════════════════════════════════════════ */}
      <section className="mb-12" id="section5">
        <h2
          className="text-xl sm:text-2xl font-bold text-gray-900 border-l-4 border-[oklch(0.35_0.12_155)] pl-4 mb-5 mt-4"
          style={{ fontFamily: "'Shippori Mincho', serif" }}
        >
          SLTCSのタクシーチャーターでシーギリヤ・ダンブッラへ
        </h2>

        <p className="text-base leading-[1.9] text-gray-700 mb-5">
          シーギリヤ・ダンブッラ地域は、コロンボ国際空港から車で約3〜4時間。
          <strong className="text-gray-900">SLTCSの専用車チャーター</strong>を利用すれば、
          空港からホテルまで快適に移動できます。
          途中でダンブッラ石窟寺院に立ち寄るなど、
          自分たちのペースで旅程を組めるのが専用車の最大の魅力です。
        </p>

        <p className="text-base leading-[1.9] text-gray-700 mb-6">
          また、シーギリヤ・ダンブッラ地域からキャンディやヌワラエリヤへの移動にも、
          SLTCSの専用車チャーターが便利です。
          日本語対応のドライバーが同行するため、
          言葉の壁を気にせず安心して旅を楽しめます。
        </p>

        {/* CTA */}
        <div className="bg-[oklch(0.97_0.02_155)] border border-[oklch(0.75_0.08_155)] rounded-2xl p-6 text-center">
          <p className="text-base font-semibold text-gray-800 mb-3">
            シーギリヤ・ダンブッラへの移動はSLTCSにお任せください
          </p>
          <p className="text-sm text-gray-600 mb-5">
            日本語対応・完全貸し切りの専用車チャーターで、快適なスリランカ旅行をサポートします。
          </p>
          <a
            href="/contact"
            className="inline-block bg-[oklch(0.35_0.12_155)] text-white font-semibold px-8 py-3 rounded-full hover:bg-[oklch(0.28_0.10_155)] transition-colors"
          >
            無料でお問い合わせ
          </a>
        </div>
      </section>

    </article>
  );
}
