import { useSEO } from "@/hooks/useSEO";

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

function InfoBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[oklch(0.97_0.03_155)] border-l-4 border-[oklch(0.55_0.12_155)] rounded-r-xl p-4 my-5 text-sm text-[oklch(0.25_0.10_155)] leading-relaxed">
      {children}
    </div>
  );
}

function NoteBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-4 my-5 text-sm text-amber-900 leading-relaxed">
      {children}
    </div>
  );
}

export default function ForexArticle() {
  useSEO({
    title: "スリランカ両替ガイド：空港・市内の両替方法と1日の必要現金は？ | SLTCS",
    description:
      "スリランカ旅行の両替を徹底解説。バンダラナイケ空港での両替方法、市内の両替所の選び方、1日あたり必要なルピーの目安、観光地入場料の現金相場まで、SLTCSがまとめました。",
    path: "/travel-planning/forex",
    noindex: false,
    jsonLdList: [
      {
        "@context": "https://schema.org",
        "@type": "Article",
        headline:
          "スリランカ両替ガイド：空港・市内の両替方法と1日の必要現金は？",
        description:
          "スリランカ旅行の両替を徹底解説。空港での両替方法、市内の両替所の選び方、1日あたり必要なルピーの目安まで解説。",
        author: { "@type": "Organization", name: "SLTCS" },
        datePublished: "2026-07-01",
        inLanguage: "ja",
      },
    ],
    jsonLdIdPrefix: "forex-article",
  });

  return (
    <article className="text-gray-800">
      {/* ── リード文 ── */}
      <p className="text-base sm:text-lg leading-[1.9] text-gray-700 mb-6">
        スリランカ旅行を計画する際、「現地でのお金の両替はどうすればいい？」「1日にどれくらい現金が必要？」と不安に感じる方は少なくありません。
      </p>

      <p className="text-base sm:text-lg leading-[1.9] text-gray-700 mb-4">
        スリランカは<strong className="text-gray-900">現金主体の社会</strong>であり、チップ文化もあるため、現地通貨ルピーをある程度まとめて用意しておくことが旅の安心につながります。
      </p>

      <p className="text-base sm:text-lg leading-[1.9] text-gray-700 mb-10">
        本記事では、到着直後に使える空港両替の手順から、市内でよりお得なレートを得る方法、そして1日あたりの現金の目安まで、旅行者が知っておくべきポイントを整理してお伝えします。
      </p>

      {/* ── 目次 ── */}
      <nav className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-12">
        <p className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-3">目次</p>
        <ol className="space-y-1.5 text-sm">
          {[
            ["1", "空港での両替：到着後すぐに日本円を交換", "#section1"],
            ["2", "空港で両替できる通貨（SGD・THBも対応）", "#section2"],
            ["3", "市内の両替所・銀行・ATMを使う場合", "#section3"],
            ["4", "1日あたりの必要現金の目安", "#section4"],
            ["5", "観光地の入場料（現金相場）", "#section5"],
            ["6", "ホテルの支払い方法を事前確認しよう", "#section6"],
          ].map(([num, label, href]) => (
            <li key={num} className="flex items-start gap-2 text-gray-600">
              <span className="text-[oklch(0.35_0.12_155)] font-bold flex-shrink-0">{num}.</span>
              <a href={href as string} className="hover:text-[oklch(0.35_0.12_155)] transition-colors">
                {label}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      {/* ════════════════════════════════════════════════════
          H2 ① 空港での両替
      ════════════════════════════════════════════════════ */}
      <section className="mb-14" id="section1">
        <H2 id="section1">空港での両替：到着後すぐに日本円を交換</H2>

        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          スリランカに到着したら、まず<strong className="text-gray-900">バンダラナイケ国際空港の銀行両替カウンター</strong>で現地通貨に両替するのが最も手軽な方法です。
        </p>

        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          到着ロビーには複数の銀行カウンターが並んでおり、<strong className="text-gray-900">24時間営業</strong>しているため深夜着の便でも安心して利用できます。
          どのカウンターも提示しているレートはほぼ同じなので、長い列に並ぶ必要はなく、空いているカウンターを選べば問題ありません。
        </p>

        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          日本ではスリランカ・ルピーへの両替はできない（またはレートが非常に悪い）ため、<strong className="text-gray-900">日本円の現金は現地でルピーに替えるのが基本</strong>となります。
          到着直後に必要な移動費や食事代程度のルピーを手に入れておけば、旅のスタートもスムーズです。
        </p>

        <InfoBox>
          <strong>空港両替は「必要最低限」が賢い選択</strong><br />
          空港のレートは市内の両替所と比べてやや割高な傾向があります。初日〜2日分の生活費を空港で換え、残りは市内でより有利なレートを探すという方法も有効です。
        </InfoBox>
      </section>

      {/* ════════════════════════════════════════════════════
          H2 ② 両替できる通貨
      ════════════════════════════════════════════════════ */}
      <section className="mb-14" id="section2">
        <H2 id="section2">空港で両替できる通貨（SGD・THBも対応）</H2>

        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          シンガポールやタイなど他国からスリランカへ乗り継ぐ方の中には、手元に現地通貨が残っている場合もあるでしょう。
          バンダラナイケ国際空港では、<strong className="text-gray-900">シンガポールドル（SGD）やタイバーツ（THB）を含む主要通貨</strong>への対応が確認されています（2026年6月時点）。
        </p>

        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          現在の為替レートの目安として、<strong className="text-gray-900">1スリランカルピーは約0.5円</strong>です。つまり1万円を両替すると、約2万スリランカルピーを受け取れる計算になります。
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-4 text-sm">
          <p className="font-bold text-gray-900 mb-3">ドライバーへの支払い額の換算目安</p>
          <p className="text-gray-700 leading-relaxed">
            SLTCSのドライバーへの支払い額はご案内している金額の2倍のスリランカルピーでお支払いいただければと思います。
            たとえば5万円の場合は10万スリランカルピーが目安です。
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          H2 ③ 市内の両替所・銀行・ATM
      ════════════════════════════════════════════════════ */}
      <section className="mb-14" id="section3">
        <H2 id="section3">市内の両替所・銀行・ATMを使う場合</H2>

        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          コロンボや主要観光地の市街には、空港より<strong className="text-gray-900">有利なレート</strong>で両替できる場所があります。
          同じ1万円を両替するにも、市内の方が空港より500〜1,000円分多くルピーを受け取れることもあります。
        </p>

        <H3>市中銀行での両替</H3>
        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          公式レートに近い条件で両替でき、信頼性が高い方法です。ただし営業時間が平日昼間に限られる場合が多く、旅行の日程によっては利用しづらい点に注意しましょう。
        </p>

        <H3>民間の両替商（両替所）</H3>
        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          レート面では最も有利なことが多いですが、観光客と分かると不利なレートを提示されたり、計算をごまかされたりするケースもゼロではありません。
          評判の良い両替所はレート表をきちんと掲示しており、宝石店が兼営する両替カウンターなどは比較的安心と言われています。
        </p>

        <NoteBox>
          <strong>SLTCSのドライバーに同行してもらうと安心</strong><br />
          ドライバーに両替の際に付き添ってもらうことで、不利なレートを提示される可能性を減らすことができます。遠慮なくお声がけください。
        </NoteBox>

        <H3>ATMでの現金引き出し</H3>
        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          スリランカでは主要な町に国際ブランド対応のATMが多く、クレジットカードやデビットカードで現地通貨を引き出すことが可能です。
          ATM利用時のレート自体は銀行間レートに近く比較的良好ですが、利用銀行の手数料やカードの海外引出手数料がかかる点には注意してください。
          現金が不足したときの補充手段として覚えておくと安心です。
        </p>
      </section>

      {/* ════════════════════════════════════════════════════
          H2 ④ 1日あたりの必要現金
      ════════════════════════════════════════════════════ */}
      <section className="mb-14" id="section4">
        <H2 id="section4">1日あたりの必要現金の目安</H2>

        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          SLTCSのタクシーチャーターをご利用の場合、大きな移動費は事前決済済みです。
          現地で必要になる現金は主に<strong className="text-gray-900">ドライバーへのチップ・食事代・観光地の入場料</strong>の3つです。
        </p>

        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          {[
            {
              icon: "💰",
              label: "ドライバーへのチップ",
              amount: "1,000〜2,000円/日",
              desc: "約2,000〜4,000ルピー。5日間なら合計5,000〜10,000円分を予算に組み込んでおくと良いでしょう。",
            },
            {
              icon: "🍽️",
              label: "食事代",
              amount: "2,000〜5,000ルピー/日",
              desc: "ローカル食堂なら1食数百ルピー、観光客向けレストランは1,500〜3,000ルピー程度。カード払い可能な店も増えています。",
            },
            {
              icon: "🎟️",
              label: "観光地入場料",
              desc: "シーギリヤロックは大人$35（約1万ルピー）など、高額な入場料が必要な観光地もあります。",
              amount: "観光地による",
            },
          ].map((item, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
              <div className="text-3xl mb-2">{item.icon}</div>
              <p className="font-bold text-gray-900 text-sm mb-1">{item.label}</p>
              <p className="text-[oklch(0.35_0.12_155)] font-bold text-sm mb-2">{item.amount}</p>
              <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-[oklch(0.97_0.03_155)] border border-[oklch(0.75_0.12_155)] rounded-xl p-5 text-sm text-[oklch(0.25_0.10_155)]">
          <p className="font-bold text-base mb-2">1日あたりの現金の目安：約10,000ルピー（約5,000円）</p>
          <p className="leading-relaxed">
            チップを含めて1日あたり約10,000ルピー前後を用意しておけば、多くの場合安心です。
            サファリや高額なアクティビティを予定している場合は、その分を追加で確保しておきましょう。
            サファリの入場料は約8,000ルピー、ジープ代は半日で15,000〜20,000ルピーが目安です（事前予約ならクレカ払い可）。
          </p>
        </div>

        <p className="text-sm text-gray-600 mt-4 leading-relaxed">
          小さな額面の紙幣（500ルピー・100ルピー）を多めに持っておくと、チップを渡す際に便利です。
          空港両替の際にスタッフへお願いすれば、小額紙幣を多めに用意してもらえます。
        </p>
      </section>

      {/* ════════════════════════════════════════════════════
          H2 ⑤ 観光地の入場料
      ════════════════════════════════════════════════════ */}
      <section className="mb-14" id="section5">
        <H2 id="section5">観光地の入場料（現金相場）</H2>

        <p className="text-base leading-[1.9] text-gray-700 mb-5">
          スリランカの主要観光地の入場料は現金払いが基本です。以下の金額は参考価格であり、随時変更となる場合があります。
        </p>

        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[oklch(0.35_0.12_155)] text-white">
                <th className="text-left px-4 py-3 font-semibold rounded-tl-lg">観光地</th>
                <th className="text-left px-4 py-3 font-semibold">大人</th>
                <th className="text-left px-4 py-3 font-semibold rounded-tr-lg">子供</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  place: "シーギリヤロック",
                  adult: "$35（約10,000ルピー）",
                  child: "$20（約6,000ルピー）※6歳未満無料",
                },
                {
                  place: "ピドゥンガラロック",
                  adult: "1,000ルピー",
                  child: "500ルピー ※6歳未満無料",
                },
                {
                  place: "ダンブッラ石窟寺院",
                  adult: "2,000ルピー",
                  child: "1,000ルピー ※5歳未満無料",
                },
                {
                  place: "キャンディ仏歯寺",
                  adult: "2,000ルピー",
                  child: "無料（15歳未満）",
                },
                {
                  place: "アヌラーダプラ共通券",
                  adult: "約9,000ルピー",
                  child: "約4,500ルピー ※6歳未満無料",
                },
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-4 py-3 font-medium text-gray-900 border-b border-gray-100">
                    {row.place}
                  </td>
                  <td className="px-4 py-3 text-gray-700 border-b border-gray-100">{row.adult}</td>
                  <td className="px-4 py-3 text-gray-600 border-b border-gray-100 text-xs">{row.child}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500">
          ※上記は参考価格です。実際の料金は変更になる場合があります。SLTCSのドライバーが最新情報をご案内します。
        </p>
      </section>

      {/* ════════════════════════════════════════════════════
          H2 ⑥ ホテルの支払い方法
      ════════════════════════════════════════════════════ */}
      <section className="mb-14" id="section6">
        <H2 id="section6">ホテルの支払い方法を事前確認しよう</H2>

        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          スリランカでは大手ホテルや高級リゾートを中心にクレジットカードが利用できる場所も増えていますが、
          <strong className="text-gray-900">小規模なホテルやゲストハウスでは現金払いのみ</strong>というところも少なくありません。
        </p>

        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          予約時にオンライン決済を済ませていない場合や、現地で宿泊料金を支払う必要がある場合は、
          <strong className="text-gray-900">事前にその宿泊先がカード支払いに対応しているかを確認</strong>しておきましょう。
          予約確認書や公式サイトに支払い方法の記載があるはずです。
        </p>

        <NoteBox>
          <strong>クレジットカードが使える宿でも予備の現金を持参しよう</strong><br />
          通信環境の不調や端末トラブルでカード決済ができないケースも稀にあります。念のため予備の現金を持っておくか、予備のカードを用意しておくことも旅先では重要です。
          デポジット（預り金）としてチェックイン時にカード提示を求められる場合もありますので、クレジットカード派の方も1枚は持参しましょう。
        </NoteBox>

        <p className="text-base leading-[1.9] text-gray-700 mt-6">
          十分な準備を整えておけば、現地でのお金の心配を最小限に抑えられます。
          スリランカでの観光や移動に集中でき、充実した旅を過ごせることでしょう。
          しっかり両替と支払い対策をして、思い出深いスリランカ旅行をお楽しみください。
        </p>
      </section>
    </article>
  );
}
