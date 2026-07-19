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
    <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-4 my-5 text-sm text-amber-900 leading-relaxed">
      {children}
    </div>
  );
}

function SummaryBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[oklch(0.97_0.03_155)] border border-[oklch(0.75_0.12_155)] rounded-xl p-5 my-8">
      {children}
    </div>
  );
}

export default function InsuranceArticle() {
  useSEO({
    title: "スリランカ旅行に海外旅行保険は欠かせない？加入すべき理由と賢い選び方とは？ | SLTCS",
    description:
      "スリランカ旅行で海外旅行保険が必要な理由を解説。クレジットカード付帯保険の活用法から有料保険の選び方、推奨補償額まで、SLTCSが旅行者向けにわかりやすくまとめました。",
    path: "/blog/insurance",
    noindex: false,
    jsonLdList: [
      {
        "@context": "https://schema.org",
        "@type": "Article",
        headline:
          "スリランカ旅行に海外旅行保険は欠かせない？加入すべき理由と賢い選び方とは？",
        description:
          "スリランカ旅行で海外旅行保険が必要な理由を解説。クレジットカード付帯保険の活用法から有料保険の選び方、推奨補償額まで。",
        author: { "@type": "Organization", name: "SLTCS" },
        datePublished: "2026-04-07",
        inLanguage: "ja",
      },
    ],
    jsonLdIdPrefix: "insurance-article",
  });

  return (
    <article className="text-gray-800">
      {/* ── リード文 ── */}
      <p className="text-base sm:text-lg leading-[1.9] text-gray-700 mb-6">
        スリランカへの渡航を計画している方にとって、見落としがちなのが「<strong className="text-gray-900">保険</strong>」の準備です。
      </p>
      <p className="text-base sm:text-lg leading-[1.9] text-gray-700 mb-10">
        この記事では、なぜスリランカ旅行において海外旅行保険への事前加入が不可欠なのかを解説し、
        コストを抑えながら十分な補償を得るための方法をご紹介します。
      </p>

      {/* ── 目次 ── */}
      <nav className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-12">
        <p className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-3">目次</p>
        <ol className="space-y-1.5 text-sm">
          {[
            ["1", "なぜスリランカでは自分で保険を手配する必要があるのか"],
            ["2", "費用ゼロで補償を確保する方法：クレジットカード付帯保険の活用"],
            ["3", "カード保険だけでは不安な方へ：有料の海外旅行保険という選択肢"],
            ["4", "どの程度の補償を目指すべきか"],
            ["5", "この記事のポイント"],
          ].map(([num, label]) => (
            <li key={num} className="flex items-start gap-2 text-gray-600">
              <span className="text-[oklch(0.35_0.12_155)] font-bold flex-shrink-0">{num}.</span>
              <span>{label}</span>
            </li>
          ))}
        </ol>
      </nav>

      {/* ════════════════════════════════════════════════════
          H2 ① なぜスリランカでは自分で保険を手配する必要があるのか
      ════════════════════════════════════════════════════ */}
      <section className="mb-14" id="section1">
        <H2 id="section1">なぜスリランカでは自分で保険を手配する必要があるのか</H2>
        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          スリランカでは、タクシーや商用車を含むすべての車両に対して法律で保険への加入が義務づけられています。
          しかし、ここで注意しなければならないのは、<strong className="text-gray-900">その補償水準がきわめて低い</strong>という点です。
        </p>
        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          万が一の死亡事故であっても、現地保険から支払われる金額は日本円換算でおよそ<strong className="text-gray-900">30万円</strong>にとどまります。
          加えて、外国籍の旅行者がこの保険金を受け取るためには複雑な手続きを踏む必要があり、スムーズに給付されるとは限りません。
        </p>
        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          つまり実態としては、現地の自動車保険による補償は「ほぼ期待できない」と認識しておくのが賢明です。
          スリランカでは、交通事故を含む旅行中のアクシデントに対して、基本的に<strong className="text-gray-900">旅行者自身が備えるべきもの</strong>という考え方が一般的です。
          これは日本の感覚とは異なるかもしれませんが、アメリカをはじめ海外では珍しくない状況です。
        </p>
        <InfoBox>
          こうした事情を踏まえ、<strong>スリランカタクシーチャーターサービス（SLTCS）</strong>では、ご利用前に海外旅行保険（クレジットカードに付帯するものを含む）への加入をお客様にお願いしています。
        </InfoBox>
      </section>

      {/* ════════════════════════════════════════════════════
          H2 ② クレジットカード付帯保険の活用
      ════════════════════════════════════════════════════ */}
      <section className="mb-14" id="section2">
        <H2 id="section2">費用ゼロで補償を確保する方法：クレジットカード付帯保険の活用</H2>
        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          「追加で保険料を払うのは負担が大きい……」とお感じの方も少なくないでしょう。
          そこで活用したいのが、お手持ちのクレジットカードにセットされている海外旅行保険です。
          追加費用なしで一定の補償を受けられるケースがあります。
        </p>
        <p className="text-base leading-[1.9] text-gray-700 mb-6">
          ただし、カードごとに保険が有効になる条件が異なるため、事前の確認が欠かせません。
        </p>

        <H3>自動付帯タイプと利用付帯タイプ</H3>
        <p className="text-base leading-[1.9] text-gray-700 mb-3">
          カードの海外旅行保険は大きく2つに分類されます。
        </p>
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <p className="font-bold text-blue-800 mb-2">自動付帯タイプ</p>
            <p className="text-sm text-blue-700 leading-relaxed">
              カードを所有しているだけで保険が適用されます。出発前の手続きや特定の支払いは不要です。
            </p>
          </div>
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
            <p className="font-bold text-orange-800 mb-2">利用付帯タイプ</p>
            <p className="text-sm text-orange-700 leading-relaxed">
              出国前にそのカードを使って旅行関連の費用（航空券・ツアー代金・公共交通機関の運賃など）を決済した場合のみ適用されます。
            </p>
          </div>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed mb-8 bg-gray-50 rounded-lg p-4">
          近年は多くのカード会社が自動付帯から利用付帯へ条件を変更する傾向にあります。
          以前は自動付帯だったカードが、知らないうちに条件変更されていることもありますので、渡航前に必ず最新の適用条件をチェックしてください。
        </p>

        <H3>注目のクレジットカードと保険内容（2025年時点の情報）</H3>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[oklch(0.35_0.12_155)] text-white">
                <th className="text-left px-4 py-3 font-semibold rounded-tl-lg">カード</th>
                <th className="text-left px-4 py-3 font-semibold">年会費</th>
                <th className="text-left px-4 py-3 font-semibold">タイプ</th>
                <th className="text-left px-4 py-3 font-semibold rounded-tr-lg">主な補償の目安</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  card: "楽天プレミアムカード",
                  fee: "11,000円",
                  type: "自動付帯（一部利用付帯）",
                  coverage: "死亡・後遺障害：最高5,000万円／治療費：最高300万円",
                },
                {
                  card: "dカード GOLD",
                  fee: "11,000円",
                  type: "自動付帯（一部利用付帯）",
                  coverage: "死亡：最高1億円（うち自動付帯5,000万円）／治療費：最高300万円",
                },
                {
                  card: "エポスカード",
                  fee: "無料",
                  type: "利用付帯",
                  coverage: "死亡：最高3,000万円／治療費：最高270万円",
                },
                {
                  card: "リクルートカード",
                  fee: "無料",
                  type: "利用付帯",
                  coverage: "死亡：最高2,000万円／治療費：最高100万円",
                },
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-4 py-3 font-medium text-gray-900 border-b border-gray-100">{row.card}</td>
                  <td className="px-4 py-3 text-gray-700 border-b border-gray-100">{row.fee}</td>
                  <td className="px-4 py-3 text-gray-700 border-b border-gray-100">{row.type}</td>
                  <td className="px-4 py-3 text-gray-700 border-b border-gray-100">{row.coverage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mb-6">
          ※特典の詳細は変更される場合があります。最新の情報は各カード会社の公式サイトで必ずご確認ください。
        </p>
      </section>

      {/* ════════════════════════════════════════════════════
          H2 ③ 有料の海外旅行保険
      ════════════════════════════════════════════════════ */}
      <section className="mb-14" id="section3">
        <H2 id="section3">カード保険だけでは不安な方へ：有料の海外旅行保険という選択肢</H2>
        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          クレジットカードの補償では心もとないと感じる場合や、持病がある方、ご高齢の方などには、任意加入型の海外旅行保険も検討に値します。
          最近のトレンドとして、必要な項目だけを選んで組み合わせる「<strong className="text-gray-900">オーダーメイド型（バラ掛け）</strong>」プランが広まっており、無駄なくリーズナブルに加入できるようになっています。
        </p>

        <H3>代表的な保険商品の特徴</H3>
        <div className="space-y-4 mb-8">
          {[
            {
              name: "損保ジャパン「新・海外旅行保険【off!】」",
              desc: "オンライン手続きで保険料が抑えられ、補償項目を自由に組み合わせ可能。短期旅行に適していますが、2025年10月以降は31日超の長期プラン販売が停止予定です。",
            },
            {
              name: "ソニー損保の海外旅行保険",
              desc: "治療・救援費用を重点的にカバーでき、出発日当日の申込にも対応。キャッシュレス受診や日本語対応の24時間サポートも利用できます。",
            },
            {
              name: "t@biho（たびほ）",
              desc: "補償額を項目ごとに細かく設定でき、年齢に応じたきめ細かな保険料体系が特徴。無駄を省きたい方に向いています。",
            },
            {
              name: "AIG損保",
              desc: "治療・救援費用が無制限の「インフィニティプラン」があり、高額医療費への不安を解消できます。",
            },
          ].map((item, i) => (
            <div key={i} className="flex gap-4 bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
              <div className="flex-shrink-0 w-8 h-8 bg-[oklch(0.35_0.12_155)] text-white rounded-full flex items-center justify-center text-sm font-bold">
                {i + 1}
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-1">{item.name}</p>
                <p className="text-sm text-gray-700 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          H2 ④ どの程度の補償を目指すべきか
      ════════════════════════════════════════════════════ */}
      <section className="mb-14" id="section4">
        <H2 id="section4">どの程度の補償を目指すべきか</H2>

        <H3>スリランカ国内で治療を受けるケース</H3>
        <p className="text-base leading-[1.9] text-gray-700 mb-6">
          入院を伴う治療（手術なし）で<strong className="text-gray-900">10万〜30万円程度</strong>、手術を含む場合は<strong className="text-gray-900">50万〜150万円程度</strong>が一つの目安です。
          この水準をカバーするには、<strong className="text-gray-900">治療費の補償として300万円以上</strong>を確保しておくと多くの状況に対応できるでしょう。
        </p>

        <H3>日本への医療搬送が必要になるケース</H3>
        <p className="text-base leading-[1.9] text-gray-700 mb-6">
          重篤な状態で日本に戻って治療を受けたい場合、チャーター機や医師の同行などの搬送費用は<strong className="text-gray-900">700万〜1,500万円</strong>に及ぶこともあります。
        </p>

        <H3>推奨される補償レベル</H3>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
            <p className="text-xs font-bold text-blue-500 uppercase tracking-wider mb-2">最低限の備え</p>
            <p className="text-2xl font-bold text-blue-800 mb-2">治療費 300万円</p>
            <p className="text-sm text-blue-700 leading-relaxed">
              複数のクレジットカード付帯保険を合算することで到達可能です（傷害死亡・後遺障害を除き、治療費用などは合算できる場合がほとんどです）。
            </p>
          </div>
          <div className="bg-[oklch(0.97_0.03_155)] border border-[oklch(0.75_0.12_155)] rounded-xl p-5">
            <p className="text-xs font-bold text-[oklch(0.35_0.12_155)] uppercase tracking-wider mb-2">しっかり備える場合</p>
            <p className="text-2xl font-bold text-[oklch(0.25_0.10_155)] mb-2">1,000万〜1,500万円</p>
            <p className="text-sm text-[oklch(0.35_0.12_155)] leading-relaxed">
              有料保険とカード保険を組み合わせて確保するのが現実的です。
            </p>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          H2 ⑤ この記事のポイント
      ════════════════════════════════════════════════════ */}
      <section className="mb-14" id="section5">
        <H2 id="section5">この記事のポイント</H2>
        <SummaryBox>
          <ul className="space-y-3 text-sm text-gray-800">
            {[
              "スリランカでは現地の車両保険に頼ることができないため、旅行者自身による保険準備が不可欠です。",
              "クレジットカード付帯保険を上手に活用すれば追加費用をかけずに基本的な備えができます。",
              "さらに安心感を高めたい方にはオーダーメイド型の有料保険を追加するのが効果的です。",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-5 h-5 bg-[oklch(0.35_0.12_155)] text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                  {i + 1}
                </span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </SummaryBox>
        <p className="text-base leading-[1.9] text-gray-700 mt-6">
          <strong className="text-gray-900">スリランカタクシーチャーターサービス（SLTCS）</strong>では、お客様が安心して旅を楽しめるよう、渡航前の保険加入を強くおすすめしています。
          しっかりと準備を整えたうえで、素晴らしいスリランカの旅をお楽しみください。
        </p>
      </section>
    </article>
  );
}
