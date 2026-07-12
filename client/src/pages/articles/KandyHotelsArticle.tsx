export default function KandyHotelsArticle() {
  return (
    <article className="text-gray-800">

      {/* ── リード文 ── */}
      <p className="text-base sm:text-lg leading-[1.9] text-gray-700 mb-10">
        スリランカの中央高地に位置する<strong className="text-gray-900">キャンディ</strong>は、
        仏歯寺（ダラダー・マーリガーワ）やキャンディ湖を中心に栄えた古都です。
        世界遺産にも登録されたこの街には、歴史的な格式を誇るホテルから
        丘の上の絶景リゾートまで、個性豊かな宿泊施設が揃っています。
        本記事では、<strong className="text-gray-900">キャンディ観光に適したおすすめホテル4選</strong>を
        内装・外装写真とともに詳しくご紹介します。
      </p>

      {/* ── 目次 ── */}
      <nav className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-12">
        <p className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-3">目次</p>
        <ol className="space-y-1.5 text-sm">
          {[
            ["1", "The Grand Kandyan — キャンディ湖を望む格調高いシティホテル"],
            ["2", "Queen's Hotel Kandy — 1843年創業の歴史的コロニアルホテル"],
            ["3", "Earl's Regency Kandy — 丘の上の絶景リゾートホテル"],
            ["4", "Cinnamon Citadel Kandy — マハウェリ川沿いの洗練されたリゾート"],
            ["5", "SLTCSのタクシーチャーターでキャンディへ"],
          ].map(([num, label]) => (
            <li key={num} className="flex items-start gap-2 text-gray-600">
              <span className="text-[oklch(0.35_0.12_155)] font-bold flex-shrink-0">{num}.</span>
              <span>{label}</span>
            </li>
          ))}
        </ol>
      </nav>

      {/* ════════════════════════════════════════════════════
          H2 ① The Grand Kandyan
      ════════════════════════════════════════════════════ */}
      <section className="mb-16" id="section1">
        <h2
          className="text-xl sm:text-2xl font-bold text-gray-900 border-l-4 border-[oklch(0.35_0.12_155)] pl-4 mb-5 mt-4"
          style={{ fontFamily: "'Shippori Mincho', serif" }}
        >
          The Grand Kandyan — キャンディ湖を望む格調高いシティホテル
        </h2>

        <p className="text-base leading-[1.9] text-gray-700 mb-5">
          「The Grand Kandyan」は、<strong className="text-gray-900">キャンディ湖と仏歯寺を見下ろす丘の上</strong>に
          立地する格調高いシティホテルです。
          キャンディの街並みを一望できる絶好のロケーションと、
          洗練されたサービスで多くの旅行者から高い評価を受けています。
        </p>

        <p className="text-base leading-[1.9] text-gray-700 mb-6">
          仏歯寺へは徒歩圏内でアクセスでき、
          キャンディの主要観光スポットを効率よく巡るための拠点として最適です。
          屋上プールからはキャンディ湖と緑豊かな丘陵地帯が一望でき、
          スリランカの絶景を満喫できます。
        </p>

        {/* 外観写真 */}
        <figure className="mb-7 rounded-2xl overflow-hidden shadow-md">
          <img
            src="/manus-storage/grandkandyan_exterior1_be8148ca.jpg"
            alt="The Grand Kandyanの外観 — キャンディ湖を望む丘の上のホテル"
            className="w-full object-cover max-h-[420px]"
            loading="lazy"
          />
          <figcaption className="text-center text-xs text-gray-400 mt-2 pb-1">
            キャンディ湖を見下ろす丘の上に立つThe Grand Kandyan。格調ある外観が印象的。
          </figcaption>
        </figure>

        <h3
          className="text-lg font-bold text-gray-800 mt-8 mb-3 pb-1 border-b border-gray-200"
          style={{ fontFamily: "'Shippori Mincho', serif" }}
        >
          内装・客室の特徴
        </h3>

        <p className="text-base leading-[1.9] text-gray-700 mb-5">
          客室はモダンなデザインとスリランカの伝統的な要素を融合させたインテリアで統一されています。
          レイクビュールームからはキャンディ湖と仏歯寺の屋根が見え、
          夜はライトアップされた仏歯寺の幻想的な姿を楽しめます。
        </p>

        {/* 客室写真 */}
        <figure className="mb-7 rounded-2xl overflow-hidden shadow-md">
          <img
            src="/manus-storage/grand-kandyan-room_a4e8dc9f.jpg"
            alt="The Grand Kandyanの客室 — モダンとスリランカ伝統が融合した客室"
            className="w-full object-cover max-h-[420px]"
            loading="lazy"
          />
          <figcaption className="text-center text-xs text-gray-400 mt-2 pb-1">
            モダンとスリランカの伝統が融合した客室。レイクビュールームからはキャンディ湖が一望できる。
          </figcaption>
        </figure>

        {/* 内装写真 */}
        <figure className="mb-7 rounded-2xl overflow-hidden shadow-md">
          <img
            src="/manus-storage/grandkandyan_interior1_15033fbb.jpg"
            alt="The Grand Kandyanの内装 — キャンディ湖を望む客室"
            className="w-full object-cover max-h-[420px]"
            loading="lazy"
          />
          <figcaption className="text-center text-xs text-gray-400 mt-2 pb-1">
            屋上プールエリア。キャンディ湖と緑豊かな丘陵地帯が一望できる。
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
                ["ホテル名", "The Grand Kandyan"],
                ["ロケーション", "キャンディ湖・仏歯寺を見下ろす丘の上"],
                ["特徴", "屋上プール・レイクビュー客室・仏歯寺へ徒歩圏内"],
                ["おすすめ", "キャンディ観光の拠点として最適・景色重視の旅行者"],
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
          H2 ② Queen's Hotel Kandy
      ════════════════════════════════════════════════════ */}
      <section className="mb-16" id="section2">
        <h2
          className="text-xl sm:text-2xl font-bold text-gray-900 border-l-4 border-[oklch(0.35_0.12_155)] pl-4 mb-5 mt-4"
          style={{ fontFamily: "'Shippori Mincho', serif" }}
        >
          Queen's Hotel Kandy — 1843年創業の歴史的コロニアルホテル
        </h2>

        <p className="text-base leading-[1.9] text-gray-700 mb-5">
          「Queen's Hotel Kandy」は、<strong className="text-gray-900">1843年創業というスリランカ最古クラスの歴史</strong>を誇る
          コロニアルホテルです。
          仏歯寺の目の前という最高のロケーションに位置し、
          英国植民地時代の面影を色濃く残す白亜の建物が旅行者を迎えます。
        </p>

        <p className="text-base leading-[1.9] text-gray-700 mb-6">
          かつてはイギリス王室の要人や著名人も宿泊したという由緒ある歴史を持ち、
          ホテル内には当時の写真や調度品が展示されています。
          歴史的な雰囲気の中に現代的な設備も整えられており、
          快適な滞在が楽しめます。
        </p>

        {/* 外観写真 */}
        <figure className="mb-7 rounded-2xl overflow-hidden shadow-md">
          <img
            src="/manus-storage/queens_exterior1_62a59860.jpg"
            alt="Queen's Hotel Kandyの外観 — 仏歯寺前に立つ白亜のコロニアルホテル"
            className="w-full object-cover max-h-[420px]"
            loading="lazy"
          />
          <figcaption className="text-center text-xs text-gray-400 mt-2 pb-1">
            仏歯寺の目の前に立つ白亜のコロニアルホテル。1843年創業の歴史が刻まれている。
          </figcaption>
        </figure>

        <h3
          className="text-lg font-bold text-gray-800 mt-8 mb-3 pb-1 border-b border-gray-200"
          style={{ fontFamily: "'Shippori Mincho', serif" }}
        >
          内装・客室の特徴
        </h3>

        <p className="text-base leading-[1.9] text-gray-700 mb-5">
          内装は英国コロニアルスタイルを基調とした格調ある雰囲気。
          高い天井・木製の調度品・クラシカルなタイルが、
          時代を超えた優雅さを演出しています。
          客室の窓からは仏歯寺やキャンディ湖が見え、
          キャンディの歴史的な景観を間近に感じることができます。
        </p>

        {/* 客室写真 */}
        <figure className="mb-7 rounded-2xl overflow-hidden shadow-md">
          <img
            src="/manus-storage/queens-hotel-room_08188e37.jpg"
            alt="Queen's Hotel Kandyの客室 — 英国コロニアルスタイルの客室"
            className="w-full object-cover max-h-[420px]"
            loading="lazy"
          />
          <figcaption className="text-center text-xs text-gray-400 mt-2 pb-1">
            英国コロニアルスタイルの客室。高い天井と木製の調度品が時代を超えた優雅さを演出する。
          </figcaption>
        </figure>

        {/* 内装写真 */}
        <figure className="mb-7 rounded-2xl overflow-hidden shadow-md">
          <img
            src="/manus-storage/queens_interior1_78d2c8aa.jpg"
            alt="Queen's Hotel Kandyの内装 — 英国コロニアルスタイルのクラシカルな内装"
            className="w-full object-cover max-h-[420px]"
            loading="lazy"
          />
          <figcaption className="text-center text-xs text-gray-400 mt-2 pb-1">
            英国コロニアルスタイルが息づくクラシカルな内装。歴史の重みを感じる空間。
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
                ["ホテル名", "Queen's Hotel Kandy"],
                ["創業", "1843年（スリランカ最古クラスのホテル）"],
                ["ロケーション", "仏歯寺（ダラダー・マーリガーワ）の目の前"],
                ["特徴", "英国コロニアルスタイル・歴史的建築・仏歯寺ビュー客室"],
                ["おすすめ", "歴史・文化を重視する旅行者・仏歯寺観光の拠点"],
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
          H2 ③ Earl's Regency Kandy
      ════════════════════════════════════════════════════ */}
      <section className="mb-16" id="section3">
        <h2
          className="text-xl sm:text-2xl font-bold text-gray-900 border-l-4 border-[oklch(0.35_0.12_155)] pl-4 mb-5 mt-4"
          style={{ fontFamily: "'Shippori Mincho', serif" }}
        >
          Earl's Regency Kandy — 丘の上の絶景リゾートホテル
        </h2>

        <p className="text-base leading-[1.9] text-gray-700 mb-5">
          「Earl's Regency Kandy」は、<strong className="text-gray-900">キャンディ郊外の丘の上に立つ絶景リゾートホテル</strong>です。
          街の喧騒から少し離れた静かな環境に位置し、
          広大な敷地内でゆったりとした時間を過ごすことができます。
        </p>

        <p className="text-base leading-[1.9] text-gray-700 mb-6">
          インフィニティプールからはキャンディの緑豊かな丘陵地帯が一望でき、
          スリランカの大自然を満喫できます。
          スパ施設も充実しており、観光の疲れをしっかりと癒すことができる
          リゾートホテルとして人気を集めています。
        </p>

        {/* 外観写真 */}
        <figure className="mb-7 rounded-2xl overflow-hidden shadow-md">
          <img
            src="/manus-storage/earls_exterior1_5321133f.jpg"
            alt="Earl's Regency Kandyの外観 — 丘の上に立つ絶景リゾートホテル"
            className="w-full object-cover max-h-[420px]"
            loading="lazy"
          />
          <figcaption className="text-center text-xs text-gray-400 mt-2 pb-1">
            キャンディ郊外の丘の上に立つEarl's Regency。緑豊かな丘陵地帯を見渡す絶景が魅力。
          </figcaption>
        </figure>

        <h3
          className="text-lg font-bold text-gray-800 mt-8 mb-3 pb-1 border-b border-gray-200"
          style={{ fontFamily: "'Shippori Mincho', serif" }}
        >
          内装・客室の特徴
        </h3>

        <p className="text-base leading-[1.9] text-gray-700 mb-5">
          客室はモダンなデザインで統一されており、
          大きな窓から広がるキャンディの緑の景色が旅の疲れを癒してくれます。
          バルコニー付きの客室では、朝の澄んだ空気の中でキャンディの山々を眺めながら
          ゆったりとした朝食を楽しむことができます。
        </p>

        {/* 客室写真 */}
        <figure className="mb-7 rounded-2xl overflow-hidden shadow-md">
          <img
            src="/manus-storage/earls-regency-room_e2980210.jpg"
            alt="Earl's Regency Kandyの客室 — モダンなデザインの客室"
            className="w-full object-cover max-h-[420px]"
            loading="lazy"
          />
          <figcaption className="text-center text-xs text-gray-400 mt-2 pb-1">
            モダンなデザインの客室。大きな窓からキャンディの緑豊かな丘陵地帯が広がる。
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
                ["ホテル名", "Earl's Regency Kandy"],
                ["ロケーション", "キャンディ郊外の丘の上（市街地から約10分）"],
                ["特徴", "インフィニティプール・スパ・丘陵地帯の絶景"],
                ["おすすめ", "リゾート感・自然の景色・スパを重視する旅行者"],
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
          H2 ④ Cinnamon Citadel Kandy
      ════════════════════════════════════════════════════ */}
      <section className="mb-16" id="section4">
        <h2
          className="text-xl sm:text-2xl font-bold text-gray-900 border-l-4 border-[oklch(0.35_0.12_155)] pl-4 mb-5 mt-4"
          style={{ fontFamily: "'Shippori Mincho', serif" }}
        >
          Cinnamon Citadel Kandy — マハウェリ川沿いの洗練されたリゾート
        </h2>

        <p className="text-base leading-[1.9] text-gray-700 mb-5">
          「Cinnamon Citadel Kandy」は、
          <strong className="text-gray-900">スリランカ最長の川・マハウェリ川のほとりに立つ洗練されたリゾートホテル</strong>です。
          シナモンホテルズ＆リゾーツが運営する高品質なホテルで、
          川沿いの緑豊かな環境と洗練されたサービスが魅力です。
        </p>

        <p className="text-base leading-[1.9] text-gray-700 mb-6">
          広大な敷地内にはプール・スパ・複数のレストランが揃い、
          ホテル内だけでも充実した時間を過ごすことができます。
          キャンディ市街地へのアクセスも良好で、
          観光拠点としても利便性の高いホテルです。
        </p>

        {/* 外観写真 */}
        <figure className="mb-7 rounded-2xl overflow-hidden shadow-md">
          <img
            src="/manus-storage/cinnamon_exterior1_d25a3ddd.jpg"
            alt="Cinnamon Citadel Kandyの外観 — マハウェリ川沿いの洗練されたリゾート"
            className="w-full object-cover max-h-[420px]"
            loading="lazy"
          />
          <figcaption className="text-center text-xs text-gray-400 mt-2 pb-1">
            マハウェリ川沿いに広がるCinnamon Citadel Kandy。緑豊かな環境と洗練された外観が印象的。
          </figcaption>
        </figure>

        <h3
          className="text-lg font-bold text-gray-800 mt-8 mb-3 pb-1 border-b border-gray-200"
          style={{ fontFamily: "'Shippori Mincho', serif" }}
        >
          内装・客室の特徴
        </h3>

        <p className="text-base leading-[1.9] text-gray-700 mb-5">
          客室はシナモンホテルズのブランドらしい洗練されたモダンデザインで統一されています。
          川ビューやガーデンビューの客室があり、
          マハウェリ川の穏やかな流れを眺めながらゆったりとした時間を過ごせます。
          スリランカ料理をはじめとする多彩なレストランも充実しています。
        </p>

        {/* 客室写真 */}
        <figure className="mb-7 rounded-2xl overflow-hidden shadow-md">
          <img
            src="/manus-storage/cinnamon-citadel-room_fac9afcb.jpg"
            alt="Cinnamon Citadel Kandyの客室 — 洗練されたモダンな客室"
            className="w-full object-cover max-h-[420px]"
            loading="lazy"
          />
          <figcaption className="text-center text-xs text-gray-400 mt-2 pb-1">
            シナモンホテルズらしい洗練されたモダンな客室。川ビューの部屋は特に人気が高い。
          </figcaption>
        </figure>

        {/* 内装写真 */}
        <figure className="mb-7 rounded-2xl overflow-hidden shadow-md">
          <img
            src="/manus-storage/cinnamon_interior1_00ecd443.jpg"
            alt="Cinnamon Citadel Kandyのプール — マハウェリ川を望むリゾートプール"
            className="w-full object-cover max-h-[420px]"
            loading="lazy"
          />
          <figcaption className="text-center text-xs text-gray-400 mt-2 pb-1">
            マハウェリ川を望むリゾートプール。川の穏やかな流れと緑豊かな境内が心を癒す。
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
                ["ホテル名", "Cinnamon Citadel Kandy"],
                ["運営", "Cinnamon Hotels & Resorts（スリランカ最大級のホテルグループ）"],
                ["ロケーション", "マハウェリ川沿い（キャンディ市街地から約5分）"],
                ["特徴", "川ビュー客室・複数レストラン・スパ・プール"],
                ["おすすめ", "洗練されたサービス・多彩な食事・利便性を重視する旅行者"],
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
          H2 ⑤ SLTCSのタクシーチャーターでキャンディへ
      ════════════════════════════════════════════════════ */}
      <section className="mb-12" id="section5">
        <h2
          className="text-xl sm:text-2xl font-bold text-gray-900 border-l-4 border-[oklch(0.35_0.12_155)] pl-4 mb-5 mt-4"
          style={{ fontFamily: "'Shippori Mincho', serif" }}
        >
          SLTCSのタクシーチャーターでキャンディへ
        </h2>

        <p className="text-base leading-[1.9] text-gray-700 mb-5">
          キャンディはコロンボ国際空港から車で約2.5〜3時間。
          <strong className="text-gray-900">SLTCSの専用車チャーター</strong>を利用すれば、
          空港からホテルまで快適に移動できます。
          途中でピンナワラ象の孤児院やスパイスガーデンに立ち寄るなど、
          自分たちのペースで旅程を組めるのが専用車の最大の魅力です。
        </p>

        <p className="text-base leading-[1.9] text-gray-700 mb-6">
          また、キャンディからヌワラエリヤやシーギリヤへの移動にも、
          SLTCSの専用車チャーターが便利です。
          日本語対応のドライバーが同行するため、
          言葉の壁を気にせず安心して旅を楽しめます。
        </p>

        {/* CTA */}
        <div className="bg-[oklch(0.97_0.02_155)] border border-[oklch(0.75_0.08_155)] rounded-2xl p-6 text-center">
          <p className="text-base font-semibold text-gray-800 mb-3">
            キャンディへの移動はSLTCSにお任せください
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
