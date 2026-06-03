export default function PriceBreakdownArticle() {
  return (
    <article className="text-gray-800">

      {/* ── リード文 ── */}
      <p className="text-base sm:text-lg leading-[1.9] text-gray-700 mb-5">
        「<strong className="text-gray-900">スリランカ タクシーチャーター 料金</strong>」を調べていると、
        1日あたり1万円台から3万円台まで幅広い価格帯のサービスが見つかります。
        「人件費が安い発展途上国なのに、なぜこんなに高いのか？」と感じる方も多いでしょう。
      </p>
      <p className="text-base sm:text-lg leading-[1.9] text-gray-700 mb-10">
        また、格安サービスを選んだ結果、旅行中にトラブルが発生したという声も後を絶ちません。
        この記事では、<strong className="text-gray-900">スリランカのタクシーチャーター料金の内訳</strong>と、
        安いサービスに潜むリスクを、SLTCSの実体験をもとにわかりやすく解説します。
      </p>

      {/* ── 目次 ── */}
      <nav className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-12">
        <p className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-3">目次</p>
        <ol className="space-y-1.5 text-sm">
          {[
            ["1", "スリランカのタクシーチャーター料金が「思ったより安くない」理由"],
            ["2", "安いサービスに潜む5つのリスク"],
            ["3", "スリランカ人ドライバーを適正価格で支えることの大切さ"],
            ["4", "SLTCSが適正価格にこだわる理由"],
            ["5", "料金の内訳をわかりやすく解説"],
            ["6", "よくある質問（FAQ）"],
            ["7", "まとめ：価格より「信頼」で選ぶ"],
          ].map(([num, label]) => (
            <li key={num} className="flex items-start gap-2 text-gray-600">
              <span className="text-[oklch(0.35_0.12_155)] font-bold flex-shrink-0">{num}.</span>
              <span>{label}</span>
            </li>
          ))}
        </ol>
      </nav>

      {/* ════════════════════════════════════════════════════
          H2 ① 料金が思ったより安くない理由
      ════════════════════════════════════════════════════ */}
      <section className="mb-14" id="section1">
        <h2
          className="text-xl sm:text-2xl font-bold text-gray-900 border-l-4 border-[oklch(0.35_0.12_155)] pl-4 mb-5 mt-4"
          style={{ fontFamily: "'Shippori Mincho', serif" }}
        >
          スリランカのタクシーチャーター料金が「思ったより安くない」理由
        </h2>
        <p className="text-base leading-[1.9] text-gray-700 mb-5">
          スリランカの平均月収は日本の約10分の1程度です。それにもかかわらず、
          タクシーチャーターの料金が「日本の半額程度」にしかならないのはなぜでしょうか。
        </p>
        <p className="text-base leading-[1.9] text-gray-700 mb-8">
          その最大の理由は、<strong className="text-gray-900">車両にかかるコストが日本よりも大幅に高い</strong>ことにあります。
          以下で、具体的な要因を4つに分けて解説します。
        </p>

        <h3
          className="text-base font-bold text-[oklch(0.25_0.1_155)] mb-3 mt-12 pb-2 border-b-2 border-[oklch(0.35_0.12_155)] flex items-center gap-2"
          style={{ fontFamily: "'Shippori Mincho', serif" }}
        >
          <span className="inline-flex items-center justify-center w-5 h-5 rounded bg-[oklch(0.35_0.12_155)] text-white text-[10px] font-bold flex-shrink-0">1</span>
          スリランカでは日本車が主流だが、輸入関税が極めて高い
        </h3>
        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          スリランカでは、信頼性の高さからトヨタやホンダをはじめとする<strong className="text-gray-900">日本車が主に使用</strong>されています。
          しかしスリランカ政府は外貨流出を防ぐため、自動車などの輸入品に非常に高い関税を課しています。
        </p>
        <p className="text-base leading-[1.9] text-gray-700 mb-5">
          その結果、<strong className="text-gray-900">日本で200万円で購入できる車が、スリランカでは700万円以上</strong>になることも珍しくありません。
          これは関税・物品税・付加価値税などが重なり合い、車両価格が3〜4倍に膨れ上がるためです。
        </p>

        {/* 価格比較表 */}
        <div className="overflow-x-auto mb-8 rounded-xl shadow-sm">
          <table className="min-w-[480px] w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[oklch(0.25_0.08_155)] text-white">
                <th className="px-4 py-3 text-left font-semibold">項目</th>
                <th className="px-4 py-3 text-center font-semibold">日本での価格</th>
                <th className="px-4 py-3 text-center font-semibold">スリランカでの価格</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["中型セダン（例：トヨタ アクシオ）", "約200万円", "約700〜750万円"],
                ["ミニバン（例：トヨタ ハイエース）", "約350万円", "約1,100〜1,300万円"],
                ["維持費（年間）", "約30〜50万円", "約80〜120万円相当"],
              ].map(([item, jp, lk], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-4 py-3 text-gray-700">{item}</td>
                  <td className="px-4 py-3 text-center text-gray-700">{jp}</td>
                  <td className="px-4 py-3 text-center font-semibold text-red-700">{lk}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3
          className="text-base font-bold text-[oklch(0.25_0.1_155)] mb-3 mt-12 pb-2 border-b-2 border-[oklch(0.35_0.12_155)] flex items-center gap-2"
          style={{ fontFamily: "'Shippori Mincho', serif" }}
        >
          <span className="inline-flex items-center justify-center w-5 h-5 rounded bg-[oklch(0.35_0.12_155)] text-white text-[10px] font-bold flex-shrink-0">2</span>
          近年の円安がさらに負担を増大させている
        </h3>
        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          2022年以降、急速に進んだ<strong className="text-gray-900">円安</strong>も、日本人旅行者にとってのコスト感覚を変えています。
          スリランカルピーや米ドルベースで設定された料金は変わっていなくても、
          円換算すると「以前より割高に感じる」という状況が続いています。
        </p>
        <p className="text-base leading-[1.9] text-gray-700 mb-5">
          1ドル＝110円だった時代と比べ、150円台になった現在では、同じサービスでも約35〜40%高く感じられます。
          これは円安の影響であり、スリランカ側のサービス品質や価格設定が変わったわけではありません。
        </p>

        <h3
          className="text-base font-bold text-[oklch(0.25_0.1_155)] mb-3 mt-12 pb-2 border-b-2 border-[oklch(0.35_0.12_155)] flex items-center gap-2"
          style={{ fontFamily: "'Shippori Mincho', serif" }}
        >
          <span className="inline-flex items-center justify-center w-5 h-5 rounded bg-[oklch(0.35_0.12_155)] text-white text-[10px] font-bold flex-shrink-0">3</span>
          原油高騰のダイレクトな影響
        </h3>
        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          スリランカは日本と同様に原油のほぼ全量を輸入に依存しています。
          そのため、近年の「原油高騰」はスリランカのタクシー業界にもダイレクトに影響しています。
        </p>
        <p className="text-base leading-[1.9] text-gray-700 mb-5">
          日本のような政府による備蓄制度や補助金制度は整備されておらず、
          <strong className="text-gray-900">国際市場の油価変動がそのまま燃料費に反映される</strong>構造になっています。
          ドライバーにとって燃料費は日々の大きな出費であり、原油高騰が続く現在の状況下では、
          サービス品質を維持するために一定の料金水準が必要不可欠です。
        </p>

        <h3
          className="text-base font-bold text-[oklch(0.25_0.1_155)] mb-3 mt-12 pb-2 border-b-2 border-[oklch(0.35_0.12_155)] flex items-center gap-2"
          style={{ fontFamily: "'Shippori Mincho', serif" }}
        >
          <span className="inline-flex items-center justify-center w-5 h-5 rounded bg-[oklch(0.35_0.12_155)] text-white text-[10px] font-bold flex-shrink-0">4</span>
          ドライバーは高額なローンを抱えながら働いている
        </h3>
        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          スリランカの平均的な月収は日本円換算で3〜5万円程度です。
          その収入水準で700万円を超える車のローンを返済しながら生活するのは、非常に大きな負担です。
        </p>
        <p className="text-base leading-[1.9] text-gray-700 mb-5">
          新しい車を購入したドライバーは、ローン返済・燃料費・保険・メンテナンス費を賄うために、
          ある程度の料金を受け取らなければ生活が成り立ちません。
          <strong className="text-gray-900">人件費が安いからといって、サービス全体が安くなるわけではない</strong>のはこのためです。
        </p>
      </section>

      {/* ════════════════════════════════════════════════════
          H2 ② 安いサービスに潜む5つのリスク
      ════════════════════════════════════════════════════ */}
      <section className="mb-14" id="section2">
        <h2
          className="text-xl sm:text-2xl font-bold text-gray-900 border-l-4 border-[oklch(0.35_0.12_155)] pl-4 mb-5 mt-4"
          style={{ fontFamily: "'Shippori Mincho', serif" }}
        >
          スリランカの安いタクシーチャーターサービスに潜む5つのリスク
        </h2>
        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          「とにかく安く旅行したい」という気持ちはよく理解できます。
          しかし、スリランカのタクシーチャーターにおいて、相場より大幅に安い価格には必ず理由があります。
        </p>
        <p className="text-base leading-[1.9] text-gray-700 mb-8">
          以下に、格安サービスを選んだ際に実際に起こりうるトラブルをまとめました。
        </p>

        {/* リスクカード */}
        {[
          {
            num: "01",
            title: "距離制限による追加請求",
            body1: "格安サービスの多くは「1日150kmまで」などの距離制限が設けられています。スリランカでは1日250km以上移動することも珍しくなく、超過分が1kmあたり100円前後で加算されると、最終的な支払い額が予算を大幅に超えることがあります。",
            body2: "SLTCSでは事前に旅程全体の料金を確定するため、追加請求は発生しません。",
          },
          {
            num: "02",
            title: "20年以上前の古い車が配車される",
            body1: "前述のとおり、スリランカでは新車の購入が非常に高コストです。低価格を維持するために、20年以上前の旧型車を使い続けているドライバーも少なくありません。",
            body2: "エアコンが効かない、シートが劣化している、走行中に異音がするといった状況は、快適な旅行体験を損ないます。",
          },
          {
            num: "03",
            title: "待ち合わせ場所に現れない・大幅遅刻",
            body1: "格安サービスでは、ドライバーの責任感や管理体制が十分でないケースがあります。空港や宿泊先への迎えに来ない、大幅に遅刻するといったトラブルは、旅の出鼻をくじく最悪の体験です。",
            body2: "特に初めてのスリランカ旅行では、現地語でのやり取りが難しく、問題解決に時間がかかります。",
          },
          {
            num: "04",
            title: "キックバック目的で提携店に連れ回される",
            body1: "低い料金しか受け取れないドライバーは、提携しているレストランや土産物店・アーユルヴェーダ店に連れて行くことでキックバックを得ようとします。",
            body2: "クオリティが低いのに価格が高い店に誘導されたり、本来の旅程が削られたりするリスクがあります。",
          },
          {
            num: "05",
            title: "サポート体制が整っていない",
            body1: "格安サービスでは、旅程作成の相談や現地でのトラブル対応といったサポートに人員を割く余裕がありません。",
            body2: "「契約後は放置」というケースも存在し、旅行中に問題が発生しても自力で解決しなければならない状況に陥ることがあります。",
          },
        ].map(({ num, title, body1, body2 }) => (
          <div key={num} className="flex gap-4 mb-6 p-5 bg-amber-50 border border-amber-200 rounded-xl">
            <span className="text-2xl font-black text-amber-400 flex-shrink-0 leading-none mt-0.5">{num}</span>
            <div>
              <h3
                className="text-base font-bold text-gray-900 mb-2"
                style={{ fontFamily: "'Shippori Mincho', serif" }}
              >
                {title}
              </h3>
              <p className="text-sm leading-[1.85] text-gray-700 mb-2">{body1}</p>
              <p className="text-sm leading-[1.85] text-gray-700">{body2}</p>
            </div>
          </div>
        ))}

        {/* 画像 */}
        <figure className="mb-7 rounded-2xl overflow-hidden shadow-md">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/U5GFZm3GAbGuGjN2pLu33k/blog-course-4-5days-KXcqn2CWtUmAAGVJ4hdpbL.webp"
            alt="スリランカの清潔な専用車と笑顔のドライバー"
            className="w-full object-cover max-h-[380px]"
          />
          <figcaption className="text-center text-xs text-gray-400 mt-2 pb-1">
            
          </figcaption>
        </figure>
      </section>

      {/* ════════════════════════════════════════════════════
          H2 ③ スリランカ人ドライバーを搾取しない
      ════════════════════════════════════════════════════ */}
      <section className="mb-14" id="section3">
        <h2
          className="text-xl sm:text-2xl font-bold text-gray-900 border-l-4 border-[oklch(0.35_0.12_155)] pl-4 mb-5 mt-4"
          style={{ fontFamily: "'Shippori Mincho', serif" }}
        >
          スリランカ人ドライバーを適正価格で支えることの大切さ
        </h2>
        <p className="text-base leading-[1.9] text-gray-700 mb-5">
          SLTCSが適正価格にこだわる理由は、単にサービス品質を守るためだけではありません。
          <strong className="text-gray-900">スリランカ人ドライバーとその家族の生活を守る</strong>という視点も大切にしています。
        </p>
        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          ドライバーたちは、高額な車両ローンを抱えながら、家族を養うために毎日懸命に働いています。
          旅行者が「少しでも安く」と価格を値切ることで、そのしわ寄せがドライバーの生活に直撃します。
        </p>
        <p className="text-base leading-[1.9] text-gray-700 mb-5">
          適正な報酬を受け取れないドライバーは、キックバックを求めて提携店に誘導したり、
          車のメンテナンスを後回しにしたりと、結果的にサービスの質が落ちていきます。
        </p>

        {/* 強調ブロック */}
        <div className="bg-[oklch(0.97_0.03_155)] border-l-4 border-[oklch(0.35_0.12_155)] rounded-r-xl p-5 mb-8">
          <p className="text-base leading-[1.9] text-gray-800 mb-3">
            <strong>「安い旅行＝良い旅行」ではありません。</strong>
            適正な価格でサービスを利用することで、ドライバーは誇りを持って仕事に臨め、
            旅行者は安心・快適な旅を楽しめます。
          </p>
          <p className="text-base leading-[1.9] text-gray-800">
            これはスリランカの観光産業全体を健全に保つことにもつながります。
          </p>
        </div>

        <p className="text-base leading-[1.9] text-gray-700 mb-5">
          SLTCSでは、ドライバーへの適正な報酬の支払いを徹底しています。
          それが結果として、質の高いサービスの継続と、
          スリランカ旅行の満足度向上につながると確信しているからです。
        </p>
      </section>

      {/* ════════════════════════════════════════════════════
          H2 ④ SLTCSが適正価格にこだわる理由
      ════════════════════════════════════════════════════ */}
      <section className="mb-14" id="section4">
        <h2
          className="text-xl sm:text-2xl font-bold text-gray-900 border-l-4 border-[oklch(0.35_0.12_155)] pl-4 mb-5 mt-4"
          style={{ fontFamily: "'Shippori Mincho', serif" }}
        >
          SLTCSが適正価格にこだわる理由
        </h2>
        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          SLTCSは、スリランカ政府公認ライセンスを持つドライバーのみを採用し、
          厳格な審査と継続的な品質管理を行っています。更に日本語スタッフの人件費もかかってきます。
        </p>
        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          価格が多少他のサービスより高くなったとしても、
          <strong className="text-gray-900">旅行者が安心して旅を楽しめる環境を整えること</strong>を最優先にしています。
        </p>
        <p className="text-base leading-[1.9] text-gray-700 mb-6">
          ただ、それでも同様のサービスを提供しているサービスに比べて安い価格で提供させていただいております。
        </p>

        {/* SLTCSの取り組みカード */}
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            {
              icon: "🚗",
              title: "清潔で状態の良い車両",
              desc: "定期的なメンテナンスと清掃を徹底。エアコン完備・シート清潔な車両のみを使用します。",
            },
            {
              icon: "📋",
              title: "政府公認ライセンス保有ドライバー",
              desc: "スリランカ観光省公認のTourist Driver以上のライセンスを持つドライバーのみを採用。",
            },
            {
              icon: "💴",
              title: "事前確定の明朗会計",
              desc: "旅程全体の料金を事前に確定。距離超過・追加請求は一切発生しません。",
            },
            {
              icon: "🇯🇵",
              title: "日本語サポート体制",
              desc: "旅程相談から現地でのトラブル対応まで、日本語スタッフが24時間体制でサポートします。",
            },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
              <div className="text-2xl mb-2">{icon}</div>
              <h3
                className="text-sm font-bold text-gray-900 mb-1.5 border-b border-gray-100 pb-1.5"
                style={{ fontFamily: "'Shippori Mincho', serif" }}
              >
                {title}
              </h3>
              <p className="text-xs leading-[1.8] text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          H2 ⑤ 料金の内訳をわかりやすく解説
      ════════════════════════════════════════════════════ */}
      <section className="mb-14" id="section5">
        <h2
          className="text-xl sm:text-2xl font-bold text-gray-900 border-l-4 border-[oklch(0.35_0.12_155)] pl-4 mb-5 mt-4"
          style={{ fontFamily: "'Shippori Mincho', serif" }}
        >
          スリランカ タクシーチャーター料金の内訳をわかりやすく解説
        </h2>
        <p className="text-base leading-[1.9] text-gray-700 mb-6">
          「なぜこの金額なのか」を理解するために、タクシーチャーター料金がどのような要素で構成されているかを解説します。
        </p>

        {/* 料金内訳表 */}
        <div className="overflow-x-auto mb-8 rounded-xl shadow-sm">
          <table className="min-w-[480px] w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[oklch(0.25_0.08_155)] text-white">
                <th className="px-4 py-3 text-left font-semibold">コスト項目</th>
                <th className="px-4 py-3 text-left font-semibold">内容</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["車両ローン返済", "高関税により700万円超となった車両の月々のローン返済費用"],
                ["燃料費", "スリランカの燃料価格は近年上昇傾向。長距離移動では大きなコストに"],
                ["保険・税金", "車両保険・道路税など、維持に必要な固定費"],
                ["メンテナンス費", "定期点検・タイヤ交換・修理費など"],
                ["ドライバーの生活費", "家族を養うための適正な報酬。これが削られると品質が低下する"],
                ["サポート体制コスト", "日本語スタッフ・現地マネージャーの人件費・システム費用"],
              ].map(([item, desc], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-4 py-3 font-semibold text-gray-800 whitespace-nowrap">{item}</td>
                  <td className="px-4 py-3 text-gray-700">{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          これらのコストを考慮すると、1日あたり2〜3万円程度の料金は、
          品質を維持しながらドライバーに適正な報酬を支払うために必要な水準です。
        </p>
        <p className="text-base leading-[1.9] text-gray-700 mb-5">
          「1日1万円台」という格安サービスでは、上記のどこかが削られているということを意味します。
        </p>

        {/* 画像 */}
        <figure className="mb-7 rounded-2xl overflow-hidden shadow-md">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/U5GFZm3GAbGuGjN2pLu33k/blog-booking-timing-MRqrgcQXvfYZKvH7j2ycGu.webp"
            alt="スリランカのタクシーチャーターで観光地を巡る旅行者"
            className="w-full object-cover max-h-[380px]"
          />
          <figcaption className="text-center text-xs text-gray-400 mt-2 pb-1">
            SLTCSでは旅程全体の料金を事前に確定。安心して旅行を楽しんでいただけます。
          </figcaption>
        </figure>
      </section>

      {/* ════════════════════════════════════════════════════
          H2 ⑥ よくある質問（FAQ）
      ════════════════════════════════════════════════════ */}
      <section className="mb-14" id="section6">
        <h2
          className="text-xl sm:text-2xl font-bold text-gray-900 border-l-4 border-[oklch(0.35_0.12_155)] pl-4 mb-6 mt-4"
          style={{ fontFamily: "'Shippori Mincho', serif" }}
        >
          スリランカ タクシーチャーター料金に関するよくある質問（FAQ）
        </h2>

        <div className="space-y-4">
          {[
            {
              q: "SLTCSの料金はどのくらいですか？",
              a: "旅程・日数・車種によって異なります。まずはお問い合わせフォームよりご希望の旅程をお知らせください。旅程全体の料金を事前に確定してお伝えします。",
            },
            {
              q: "チップは必要ですか？",
              a: "SLTCSでは料金にドライバーへの適正な報酬が含まれています。チップは義務ではありませんが、サービスに満足いただけた場合は気持ちとしてお渡しいただいても構いません。",
            },
            {
              q: "もう少し安くなりませんか？",
              a: "当記事でお伝えしたように車両価格や燃料費が非常に高くなっています。また、政府公認ライセンス保有ドライバーの採用、清潔で状態の良い車両の維持、日本語サポート体制の整備にコストがかかっています。日本人向けにサービスを提供している業者としては最安価格になっています。これ以上の価格引き下げは難しいです。",
            },
            {
              q: "円安の影響で料金が上がりましたか？",
              a: "SLTCSのドライバーへの料金はスリランカルピーまたは米ドルベースで設定しています。円安が進んだ場合、円換算での金額は増加しますが、これはサービス内容の変化ではなく為替の影響です。",
            },
            {
              q: "追加料金が発生することはありますか？",
              a: "事前に旅程全体の料金を確定するため、基本的に追加請求は発生しません。旅程変更が生じた場合は、事前にご相談のうえ対応いたします。",
            },
          ].map(({ q, a }, i) => (
            <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
              <div className="bg-gray-50 px-5 py-4">
                <p className="font-semibold text-gray-900 text-sm flex items-start gap-2">
                  <span className="text-[oklch(0.35_0.12_155)] font-black flex-shrink-0">Q.</span>
                  {q}
                </p>
              </div>
              <div className="px-5 py-4">
                <p className="text-sm leading-[1.85] text-gray-700 flex items-start gap-2">
                  <span className="text-amber-600 font-black flex-shrink-0">A.</span>
                  {a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          H2 ⑦ まとめ
      ════════════════════════════════════════════════════ */}
      <section className="mb-10" id="section7">
        <h2
          className="text-xl sm:text-2xl font-bold text-gray-900 border-l-4 border-[oklch(0.35_0.12_155)] pl-4 mb-5 mt-4"
          style={{ fontFamily: "'Shippori Mincho', serif" }}
        >
          まとめ：スリランカ タクシーチャーターは「価格より信頼」で選ぼう
        </h2>

        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          スリランカのタクシーチャーター料金が「思ったより安くない」のは、
          高い輸入関税・円安・原油高騰・ドライバーへの適正な報酬が必要なためです。
        </p>
        <p className="text-base leading-[1.9] text-gray-700 mb-6">
          格安サービスには必ず理由があり、追加請求・古い車・サポート不足といったリスクが伴います。
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-6">
          <p className="text-sm font-semibold text-gray-700 mb-3">この記事のポイント</p>
          <ul className="space-y-2 text-sm text-gray-700">
            {[
              "日本車に高い輸入関税がかかるため、スリランカでの車両コストは日本の3〜4倍",
              "近年の円安により、円換算での料金は以前より高く感じられる",
              "原油高騰の影響を直接受けるスリランカでは、政府の備蓄・補助金制度が整備されておらず、燃料費の増加がサービス料金に反映される",
              "格安サービスには追加請求・旧型車・サポート不足などのリスクが潜む",
              "ドライバーへの適正な報酬を守ることが、高品質なサービスの継続につながる",
              "SLTCSでは事前確定の明朗会計・政府公認ドライバー・日本語サポートを提供",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-[oklch(0.35_0.12_155)] font-bold flex-shrink-0 mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="text-base leading-[1.9] text-gray-700">
          スリランカ旅行の移動手段選びで迷っている方は、ぜひSLTCSにお気軽にご相談ください。
          旅程・人数・ご予算に合わせた最適なプランをご提案します。
        </p>
      </section>

    </article>
  );
}
