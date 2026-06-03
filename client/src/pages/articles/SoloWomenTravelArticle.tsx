import { Link } from "wouter";

export default function SoloWomenTravelArticle() {
  return (
    <article className="text-gray-800">

      {/* ── リード文 ── */}
      <p className="text-base sm:text-lg leading-[1.9] text-gray-700 mb-10">
        「<strong className="text-gray-900">スリランカ 女子旅</strong>」「<strong className="text-gray-900">スリランカ 一人旅</strong>」で検索している方必見。「女性一人でも大丈夫？」「移動が不安…」と感じている方は多いのではないでしょうか。
        実は、<strong className="text-gray-900">専用車チャーター（タクシーチャーター）</strong>を活用すれば、
        スリランカ女子旅・一人旅でも安心・快適に旅することができます。
        この記事では、スリランカ女子旅・一人旅におすすめな理由と、専用車チャーターの安心ポイントを詳しく解説します。
      </p>

      {/* ── 目次 ── */}
      <nav className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-12">
        <p className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-3">目次</p>
        <ol className="space-y-1.5 text-sm">
          {[
            ["1", "スリランカは女性一人旅・女子旅に向いているか？"],
            ["2", "スリランカ女子旅に専用車チャーターが選ばれる5つの理由"],
            ["3", "スリランカ女子旅・一人旅で訪れたいおすすめ観光スポット"],
            ["4", "スリランカ女性一人旅向けモデルコース"],
            ["5", "スリランカ女子旅をした実際のお客様の声"],
            ["6", "スリランカ女子旅・一人旅よくある質問（FAQ）"],
            ["7", "スリランカ女子旅（一人旅）まとめ"],
          ].map(([num, label]) => (
            <li key={num} className="flex items-start gap-2 text-gray-600">
              <span className="text-[oklch(0.35_0.12_155)] font-bold flex-shrink-0">{num}.</span>
              <span>{label}</span>
            </li>
          ))}
        </ol>
      </nav>

      {/* ════════════════════════════════════════════════════
          H2 ① スリランカは女性一人旅に向いているか？
      ════════════════════════════════════════════════════ */}
      <section className="mb-14">
        <h2
          className="text-xl sm:text-2xl font-bold text-gray-900 border-l-4 border-[oklch(0.35_0.12_155)] pl-4 mb-5 mt-4"
          style={{ fontFamily: "'Shippori Mincho', serif" }}
        >
          スリランカは女性一人旅・女子旅に向いているか？
        </h2>
        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          スリランカは、仏教文化が根付いた穏やかな国民性で知られており、東南アジアの中でも比較的治安が安定しています。
        </p>
        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          世界遣産・ビーチ・紅茶農園・象・サファリなど、女性が喜ぶ体験が凝縮されているのも魅力です。
        </p>
        <p className="text-base leading-[1.9] text-gray-700 mb-6">
          一方で、公共交通機関は時刻が不規則で、バスや列車は混雑することも多く、一人旅の女性にとって移動面の不安は否定できません。だからこそ、<strong className="text-gray-900">移動手段の選択が旅の安心感を大きく左右します。</strong>
        </p>

        {/* アイキャッチ画像1 */}
        <figure className="mb-7 rounded-2xl overflow-hidden shadow-md">
          <img
            src="/manus-storage/blog-women-sigiriya-real_53016c07.jpg"
            alt="シーギリヤ岩の頂上から絶景を眺める日本人女性"
            className="w-full object-cover max-h-80"
          />
          <figcaption className="text-center text-xs text-gray-400 mt-2 pb-1">
            シーギリヤ岩の前で。専用車チャーターなら自分のペースで観光できます。
          </figcaption>
        </figure>

        {/* スリランカ女子旅の基本情報 */}
        <div className="bg-[oklch(0.97_0.01_155)] border border-[oklch(0.9_0.03_155)] rounded-xl p-5 mb-6">
          <p className="text-sm font-bold text-[oklch(0.35_0.12_155)] mb-3">スリランカ女子旅の基本情報</p>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start gap-2"><span className="text-[oklch(0.35_0.12_155)] font-bold flex-shrink-0">✓</span><span><strong>治安：</strong>東南アジアの中では比較的安定。観光地では日本語対応スタッフも多い</span></li>
            <li className="flex items-start gap-2"><span className="text-[oklch(0.35_0.12_155)] font-bold flex-shrink-0">✓</span><span><strong>気候：</strong>年間を通じて温暖。乾季（12〜3月）が女子旅のベストシーズン</span></li>
            <li className="flex items-start gap-2"><span className="text-[oklch(0.35_0.12_155)] font-bold flex-shrink-0">✓</span><span><strong>言語：</strong>英語が通じる場所が多い。日本語対応の専用車ドライバーも在籍</span></li>
            <li className="flex items-start gap-2"><span className="text-[oklch(0.35_0.12_155)] font-bold flex-shrink-0">✓</span><span><strong>通貨：</strong>スリランカルピー。主要観光地ではクレジットカードも使用可</span></li>
          </ul>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          H2 ② 女子旅に専用車チャーターが選ばれる5つの理由
      ════════════════════════════════════════════════════ */}
      <section className="mb-14">
        <h2
          className="text-xl sm:text-2xl font-bold text-gray-900 border-l-4 border-[oklch(0.35_0.12_155)] pl-4 mb-6 mt-4"
          style={{ fontFamily: "'Shippori Mincho', serif" }}
        >
          スリランカ女子旅に専用車チャーターが選ばれる5つの理由
        </h2>

        <div className="space-y-5">
          {[
            {
              num: "01",
              title: "見知らぬ人と相乗りしなくていい安心感",
              body: "専用車チャーターは完全貸し切りのため、他の旅行者と相乗りする必要がありません。知らない男性と同乗するリスクがなく、女性一人でも安心して移動できます。",
            },
            {
              num: "02",
              title: "日本語対応の信頼できるドライバー",
              body: "SLTCSのドライバーは全員、政府公認の資格を持つプロフェッショナルです。日本語でのコミュニケーションが可能なドライバーも在籍しており、困ったことがあればすぐに相談できます。",
            },
            {
              num: "03",
              title: "自分だけのスケジュールで動ける",
              body: "「このカフェでもう少しゆっくりしたい」「あのショップに立ち寄りたい」など、ツアーでは難しい自由な行動が可能です。女子旅ならではのショッピングやカフェ巡りも思う存分楽しめます。",
            },
            {
              num: "04",
              title: "荷物を車に置いたまま観光できる",
              body: "大きなスーツケースを持ち歩く必要がないため、観光中の負担が大幅に軽減されます。貴重品管理のストレスも減り、旅をより快適に楽しめます。",
            },
            {
              num: "05",
              title: "緊急時も頼れるサポート体制",
              body: "体調不良や予期せぬトラブルの際も、ドライバーがすぐにサポートしてくれます。一人旅で不安な緊急時も、頼れる存在がいることで安心感が大きく違います。",
            },
          ].map((item) => (
            <div key={item.num} className="flex gap-4 bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
              <span className="text-3xl font-black text-[oklch(0.35_0.12_155)]/20 leading-none flex-shrink-0 w-10">{item.num}</span>
              <div>
                <h3 className="font-bold text-gray-900 mb-1.5">{item.title}</h3>
                <p className="text-sm leading-[1.8] text-gray-600">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          H2 ③ 女子旅におすすめの観光スポット
      ════════════════════════════════════════════════════ */}
      <section className="mb-14">
        <h2
          className="text-xl sm:text-2xl font-bold text-gray-900 border-l-4 border-[oklch(0.35_0.12_155)] pl-4 mb-6 mt-4"
          style={{ fontFamily: "'Shippori Mincho', serif" }}
        >
          スリランカ女子旅・一人旅で訪れたいおすすめ観光スポット
        </h2>

        <div className="grid sm:grid-cols-2 gap-5 mb-8">
          {[
            {
              spot: "シーギリヤ",
              tag: "世界遺産",
              desc: "天空の要塞と呼ばれる巨岩。頂上からの絶景は圧巻で、インスタ映えスポットとしても人気。",
              link: "/sigiriya",
            },
            {
              spot: "キャンディ",
              tag: "文化・グルメ",
              desc: "仏歯寺や伝統舞踊、紅茶ショッピングが楽しめる高原都市。スリランカ文化を深く体験できます。",
              link: "/kandy",
            },
            {
              spot: "ヌワラエリヤ",
              tag: "紅茶・自然",
              desc: "「スリランカのリトルイングランド」と呼ばれる高原リゾート。茶畑の絶景とティーテイスティングが女子旅の定番。",
              link: "/nuwara-eliya",
            },
            {
              spot: "ゴール",
              tag: "世界遺産・ビーチ",
              desc: "オランダ統治時代の城壁が残る旧市街。おしゃれなカフェやブティックが並び、散策が楽しい港町。",
              link: "/galle",
            },
            {
              spot: "紅茶列車（キャンディ〜エッラ）",
              tag: "絶景列車",
              desc: "茶畑の中を走る世界一美しい鉄道とも称される絶景列車。専用車でアクセスしてから乗車するのがおすすめ。",
              link: "/tea-train",
            },
            {
              spot: "ミリッサ",
              tag: "ビーチ・ホエールウォッチング",
              desc: "南海岸の美しいビーチリゾート。ホエールウォッチングや夕日鑑賞など、のんびり過ごすのに最適。",
              link: "/whale-watching",
            },
          ].map((item) => (
            <Link key={item.spot} href={item.link}>
              <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs bg-[oklch(0.35_0.12_155)]/10 text-[oklch(0.35_0.12_155)] px-2 py-0.5 rounded-full font-medium">{item.tag}</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{item.spot}</h3>
                <p className="text-sm text-gray-600 leading-[1.7]">{item.desc}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* 画像2枚目：紅茶農園 */}
        <figure className="mb-7 rounded-2xl overflow-hidden shadow-md">
          <img
            src="/manus-storage/blog-women-kandy-real_ceedacfb.jpg"
            alt="キャンディの仏歯寺前で両手を広げる日本人女性"
            className="w-full object-cover max-h-80"
          />
          <figcaption className="text-center text-xs text-gray-400 mt-2 pb-1">
            キャンディの仏歯寺前で。スリランカの文化と歴史を自分のペースで満喫できます。
          </figcaption>
        </figure>
      </section>

      {/* ════════════════════════════════════════════════════
          H2 ④ 女性一人旅向けモデルコース
      ════════════════════════════════════════════════════ */}
      <section className="mb-14">
        <h2
          className="text-xl sm:text-2xl font-bold text-gray-900 border-l-4 border-[oklch(0.35_0.12_155)] pl-4 mb-6 mt-4"
          style={{ fontFamily: "'Shippori Mincho', serif" }}
        >
          スリランカ女性一人旅向けモデルコース
        </h2>

        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          女子旅の定番スポットを効率よく巡る5泊6日のモデルコースをご紹介します。
        </p>
        <p className="text-base leading-[1.9] text-gray-700 mb-6">
          専用車チャーターなら移動の心配なく、自分だけのペースで旅を楽しめます。
        </p>

        <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm mb-6">
          <table className="min-w-[540px] w-full text-sm">
            <thead>
              <tr className="bg-[oklch(0.35_0.12_155)] text-white">
                <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">日程</th>
                <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">エリア</th>
                <th className="px-4 py-3 text-left font-semibold">おすすめ体験</th>
              </tr>
            </thead>
            <tbody>
              {[
                { day: "1日目", area: "コロンボ → シーギリヤ", exp: "空港到着・専用車でシーギリヤへ移動。夕方に周辺散策" },
                { day: "2日目", area: "シーギリヤ → キャンディ", exp: "シーギリヤ岩登頂（午前）→ 専用車でキャンディへ。仏歯寺・伝統舞踊鑑賞" },
                { day: "3日目", area: "キャンディ → ヌワラエリヤ", exp: "紅茶工場見学・茶畑散策・ティーテイスティング。高原リゾートでゆっくり滞在" },
                { day: "4日目", area: "ヌワラエリヤ → エッラ → ゴール", exp: "紅茶列車でエッラへ（絶景区間）。専用車でゴールへ移動・旧市街散策" },
                { day: "5日目", area: "ゴール → ミリッサ", exp: "ホエールウォッチング（早朝）・ビーチでリラックス・夕日鑑賞" },
                { day: "6日目", area: "ミリッサ → コロンボ", exp: "コロンボ市内観光（ショッピング・グルメ）→ 空港へ" },
              ].map((row, i) => (
                <tr key={row.day} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-4 py-3 font-semibold text-[oklch(0.35_0.12_155)] whitespace-nowrap">{row.day}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-gray-700">{row.area}</td>
                  <td className="px-4 py-3 text-gray-600">{row.exp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-sm text-gray-500 mb-4">
          ※ 上記はあくまで一例です。ご希望に合わせてカスタマイズが可能です。
          詳しくは<Link href="/plan" className="text-[oklch(0.35_0.12_155)] underline hover:no-underline">プランページ</Link>をご覧ください。
        </p>
      </section>

      {/* ════════════════════════════════════════════════════
          H2 ⑤ 実際のお客様の声
      ════════════════════════════════════════════════════ */}
      <section className="mb-14">
        <h2
          className="text-xl sm:text-2xl font-bold text-gray-900 border-l-4 border-[oklch(0.35_0.12_155)] pl-4 mb-6 mt-4"
          style={{ fontFamily: "'Shippori Mincho', serif" }}
        >
          スリランカ女子旅をした実際のお客様の声
        </h2>

        <div className="space-y-5">
          {/* 口コミ1：T様&K様（カップル） */}
          <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
            <div className="w-full overflow-hidden bg-[oklch(0.95_0_0)]">
              <img
                src="/manus-storage/review_tk_couple_07b5bba1.png"
                alt="T様&K様のスリランカ旅行写真"
                className="w-full h-auto object-contain max-h-72"
              />
            </div>
            <div className="p-5">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="font-bold text-gray-900">T様&K様（日本）</span>
                <span className="bg-[oklch(0.35_0.12_155)]/10 text-[oklch(0.35_0.12_155)] text-xs px-2 py-0.5 rounded-full font-medium">2名</span>
                <span className="bg-[oklch(0.35_0.12_155)]/10 text-[oklch(0.35_0.12_155)] text-xs px-2 py-0.5 rounded-full font-medium">2025年8月</span>
              </div>
              <p className="text-sm font-bold text-gray-800 mb-2">「毎日が感動の連続でした。スリランカが大好きになりました！」</p>
              <p className="text-sm leading-[1.8] text-gray-600">
                コロンボ空港からスタートし、プリヤンタさんとともに6日間でシーギリヤ、キャンディ、ヌワラエリヤ、ゴールを巡りました。
                常に私たちの体調や気分を気にかけてくれたので、道中も安心して過ごせました。
                最初の計画にはなかった絶景スポットにも連れて行ってくれて、旅がより豊かになりました。
              </p>
            </div>
          </div>

          {/* 口コミ2：S様ご夫婦 */}
          <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
            <div className="w-full overflow-hidden bg-[oklch(0.95_0_0)]">
              <img
                src="/manus-storage/review_S_family_38517451.png"
                alt="S様ご夫婦のスリランカ旅行写真"
                className="w-full h-auto object-contain max-h-72"
              />
            </div>
            <div className="p-5">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="font-bold text-gray-900">S様ご夫婦（日本）</span>
                <span className="bg-[oklch(0.35_0.12_155)]/10 text-[oklch(0.35_0.12_155)] text-xs px-2 py-0.5 rounded-full font-medium">2名</span>
                <span className="bg-[oklch(0.35_0.12_155)]/10 text-[oklch(0.35_0.12_155)] text-xs px-2 py-0.5 rounded-full font-medium">2025年10月</span>
              </div>
              <p className="text-sm font-bold text-gray-800 mb-2">「これ以上は望めないほど素晴らしい体験でした！！」</p>
              <p className="text-sm leading-[1.8] text-gray-600">
                タリンダさんは親切で忍耐強く、特に私たちの希望を丁寧に聞いてくれて、旅の間じゅう安心して過ごすことができました。
                日本語もとても上手で、コミュニケーションは常にスムーズ。
                観光スポットやレストランのおすすめも教えてくれて、本当に助かりました。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          H2 ⑥ よくある質問
      ════════════════════════════════════════════════════ */}
      <section className="mb-14">
        <h2
          className="text-xl sm:text-2xl font-bold text-gray-900 border-l-4 border-[oklch(0.35_0.12_155)] pl-4 mb-6 mt-4"
          style={{ fontFamily: "'Shippori Mincho', serif" }}
        >
          スリランカ女子旅・一人旅よくある質問（FAQ）
        </h2>

        <div className="space-y-4">
          {[
            {
              q: "女性一人でも本当に安全ですか？",
              a: "スリランカは東南アジアの中でも比較的治安が安定しており、観光地では日本人旅行者も多く訪れています。専用車チャーターを利用することで、公共交通機関でのリスクを大幅に軽減できます。SLTCSのドライバーは全員、政府公認の資格を持つ信頼できるプロフェッショナルです。",
            },
            {
              q: "ドライバーと二人きりになることへの不安があります",
              a: "ご安心ください。SLTCSのドライバーは厳格な審査を経て採用されており、多くのお客様から高い評価をいただいています。また、旅程はすべて事前に共有されるため、ご家族や友人に行程を伝えておくことで安心感が増します。",
            },
            {
              q: "日本語は通じますか？",
              a: "日本語対応のドライバーも在籍しています。ご予約時にご希望をお伝えいただければ、日本語でのコミュニケーションが可能なドライバーを手配いたします。",
            },
            {
              q: "一人旅でも専用車チャーターは割高になりませんか？",
              a: "一人旅の場合でも、ツアーと比較して大きく変わらない料金でご利用いただけます。自由度の高さや安心感を考えると、コストパフォーマンスは非常に高いと多くのお客様からご好評をいただいています。詳しくは料金ページをご確認ください。",
            },
          ].map((item, i) => (
            <details key={i} className="bg-gray-50 border border-gray-200 rounded-xl overflow-hidden">
              <summary className="flex items-start gap-3 px-5 py-4 cursor-pointer font-semibold text-gray-900 text-sm hover:bg-gray-100 transition-colors">
                <span className="text-[oklch(0.35_0.12_155)] font-bold flex-shrink-0">Q.</span>
                {item.q}
              </summary>
              <div className="px-5 pb-4 pt-1 text-sm leading-[1.8] text-gray-600 border-t border-gray-200">
                <span className="text-[oklch(0.35_0.12_155)] font-bold mr-2">A.</span>{item.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          H2 ⑦ まとめ
      ════════════════════════════════════════════════════ */}
      <section className="mb-14">
        <h2
          className="text-xl sm:text-2xl font-bold text-gray-900 border-l-4 border-[oklch(0.35_0.12_155)] pl-4 mb-5 mt-4"
          style={{ fontFamily: "'Shippori Mincho', serif" }}
        >
          スリランカ女子旅（一人旅）まとめ
        </h2>

        <div className="bg-[oklch(0.97_0.01_155)] border border-[oklch(0.9_0.03_155)] rounded-xl p-6 mb-6">
          <p className="text-sm font-bold text-[oklch(0.35_0.12_155)] mb-3">この記事のポイント</p>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start gap-2"><span className="text-[oklch(0.35_0.12_155)] font-bold flex-shrink-0">✓</span><span>スリランカは女性一人旅・女子旅に適した安全な旅行先</span></li>
            <li className="flex items-start gap-2"><span className="text-[oklch(0.35_0.12_155)] font-bold flex-shrink-0">✓</span><span>専用車チャーターなら完全貸し切りで安心・快適に移動できる</span></li>
            <li className="flex items-start gap-2"><span className="text-[oklch(0.35_0.12_155)] font-bold flex-shrink-0">✓</span><span>日本語対応ドライバーが在籍し、緊急時も頼れるサポート体制</span></li>
            <li className="flex items-start gap-2"><span className="text-[oklch(0.35_0.12_155)] font-bold flex-shrink-0">✓</span><span>シーギリヤ・ヌワラエリヤ・ゴールなど女子旅に人気のスポットを自由に巡れる</span></li>
            <li className="flex items-start gap-2"><span className="text-[oklch(0.35_0.12_155)] font-bold flex-shrink-0">✓</span><span>5泊6日のモデルコースで効率よく主要スポットを網羅できる</span></li>
          </ul>
        </div>

        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          スリランカへの女子旅・一人旅を検討されている方は、ぜひ専用車チャーターをご検討ください。
        </p>
        <p className="text-base leading-[1.9] text-gray-700 mb-6">
          SLTCSでは、女性の一人旅でも安心してご利用いただけるよう、丁寧なサポート体制を整えています。まずはお気軽にご相談ください。
        </p>

        {/* 関連記事リンク */}
        <div className="border-t border-gray-200 pt-6">
          <p className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-4">関連記事</p>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { label: "タクシーチャーターがおすすめな理由", href: "/taxi-charter-basics/why-taxi-charter-is-recommended" },
              { label: "スリランカ専用車チャーターの予約タイミング", href: "/travel-planning/when-to-book-charter" },
              { label: "家族旅行に専用車が向いている理由", href: "/theme-travel/family-travel-charter" },
              { label: "プランと料金を見る", href: "/plan" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-2 text-sm text-[oklch(0.35_0.12_155)] hover:underline bg-white border border-gray-100 rounded-lg px-4 py-3 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-[oklch(0.35_0.12_155)]">→</span>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <div className="bg-[oklch(0.35_0.12_155)] rounded-2xl p-7 text-center text-white">
        <p className="text-lg font-bold mb-2" style={{ fontFamily: "'Shippori Mincho', serif" }}>
          スリランカ女子旅・一人旅のご相談はこちら
        </p>
        <p className="text-sm text-white/80 mb-5">
          女性の一人旅でも安心。日本語対応ドライバーが丁寧にサポートします。
        </p>
        <Link
          href="/#contact"
          className="inline-block bg-white text-[oklch(0.35_0.12_155)] font-bold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors text-sm"
        >
          無料で相談する
        </Link>
      </div>

    </article>
  );
}
